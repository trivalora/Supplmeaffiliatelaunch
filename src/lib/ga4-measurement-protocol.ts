/**
 * GA4 Measurement Protocol - Server-Side Event Tracking
 *
 * Send events directly to GA4 from the server, bypassing client-side ad blockers.
 *
 * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4
 * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference
 */

const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-JHCPJYM37R";
const GA4_API_SECRET = process.env.GA4_API_SECRET;
const GA4_ENDPOINT = "https://www.google-analytics.com/mp/collect";

// Debug endpoint for testing (events appear in GA4 DebugView)
const GA4_DEBUG_ENDPOINT = "https://www.google-analytics.com/debug/mp/collect";

interface GA4Event {
  name: string;
  params: Record<string, any>;
}

interface GA4UserProperties {
  [key: string]: {
    value: string | number;
  };
}

interface GA4Payload {
  client_id: string;
  user_id?: string;
  timestamp_micros?: number;
  user_properties?: GA4UserProperties;
  events: Array<{
    name: string;
    params: Record<string, any>;
  }>;
}

/**
 * Send events to GA4 via Measurement Protocol
 *
 * @param clientId - Client ID (visitor_id from our tracking)
 * @param events - Array of events to send
 * @param options - Optional parameters
 * @returns Success status
 */
export async function sendToGA4(
  clientId: string,
  events: GA4Event[],
  options: {
    userId?: string;
    userProperties?: GA4UserProperties;
    debug?: boolean;
    skipDeduplication?: boolean; // For testing purposes
  } = {}
): Promise<boolean> {
  // Skip if not configured
  if (!GA4_API_SECRET) {
    console.warn(
      "[GA4 MP] GA4_API_SECRET not configured - skipping server-side tracking"
    );
    return false;
  }

  if (!clientId || events.length === 0) {
    console.warn("[GA4 MP] Missing clientId or events");
    return false;
  }

  // Choose endpoint
  const endpoint = options.debug ? GA4_DEBUG_ENDPOINT : GA4_ENDPOINT;
  const url = `${endpoint}?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

  // Build payload with deduplication
  const payload: GA4Payload = {
    client_id: clientId,
    events: events.map((event) => {
      const params: Record<string, any> = {
        ...sanitizeEventParams(event.params),
        // Required for session tracking
        engagement_time_msec: event.params.engagement_time_msec || 100,
      };

      // Add event_id for deduplication (unless explicitly skipped)
      // GA4 will automatically deduplicate events with the same event_id within 24 hours
      if (!options.skipDeduplication) {
        // Use existing event_id if provided, or generate one
        if (!params.event_id) {
          // Generate deterministic event_id based on: timestamp + visitor_id + event_name
          // This ensures GTM and Server send the same event_id for the same event
          const timestamp = event.params.timestamp || Date.now();
          const visitorId = event.params.visitor_id || clientId;
          const eventName = event.name;
          params.event_id = `${eventName}_${visitorId}_${timestamp}`.substring(
            0,
            40
          );
        }
      }

      return {
        name: normalizeEventName(event.name),
        params,
      };
    }),
  };

  // Add optional fields
  if (options.userId) {
    payload.user_id = options.userId;
  }

  if (options.userProperties) {
    payload.user_properties = options.userProperties;
  }

  // Send to GA4
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("[GA4 MP] Request failed:", response.status, text);
      return false;
    }

    // In debug mode, log validation messages
    if (options.debug) {
      const validationMessages = await response.json();
      console.log(
        "[GA4 MP Debug]",
        JSON.stringify(validationMessages, null, 2)
      );
    }

    return true;
  } catch (error) {
    console.error("[GA4 MP] Error sending events:", error);
    return false;
  }
}

/**
 * Normalize event names to GA4 conventions
 * - Max 40 characters
 * - Lowercase with underscores
 * - No spaces or special chars
 */
function normalizeEventName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .substring(0, 40);
}

/**
 * Sanitize event parameters
 * - Remove null/undefined values
 * - Convert arrays to strings
 * - Limit param names to 40 chars
 * - Limit string values to 100 chars
 */
function sanitizeEventParams(params: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};

  for (const [key, value] of Object.entries(params)) {
    // Skip null/undefined
    if (value === null || value === undefined) {
      continue;
    }

    // Normalize key
    const normalizedKey = key
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, "_")
      .substring(0, 40);

    // Convert arrays to strings
    if (Array.isArray(value)) {
      sanitized[normalizedKey] = value.join(",").substring(0, 100);
      continue;
    }

    // Limit string length
    if (typeof value === "string") {
      sanitized[normalizedKey] = value.substring(0, 100);
      continue;
    }

    // Keep numbers and booleans as-is
    if (typeof value === "number" || typeof value === "boolean") {
      sanitized[normalizedKey] = value;
      continue;
    }

    // Convert objects to JSON strings (limited)
    if (typeof value === "object") {
      sanitized[normalizedKey] = JSON.stringify(value).substring(0, 100);
      continue;
    }

    sanitized[normalizedKey] = value;
  }

  return sanitized;
}

/**
 * Convert our analytics events to GA4 format
 */
export function convertToGA4Events(
  analyticsEvents: Array<{
    event_name: string;
    event_category: string;
    event_data: Record<string, any>;
    session_id?: string | null;
    visitor_id?: string | null;
  }>
): GA4Event[] {
  return analyticsEvents.map((event) => {
    const params: Record<string, any> = {
      ...event.event_data,
      event_category: event.event_category,
    };

    // Add session/visitor IDs if available
    if (event.session_id) {
      params.session_id = event.session_id;
    }
    if (event.visitor_id) {
      params.visitor_id = event.visitor_id;
    }

    return {
      name: event.event_name,
      params,
    };
  });
}

/**
 * Send pageview to GA4
 */
export async function sendGA4Pageview(
  clientId: string,
  pageUrl: string,
  pageTitle: string,
  options?: {
    referrer?: string;
    sessionId?: string;
    userId?: string;
  }
): Promise<boolean> {
  return sendToGA4(
    clientId,
    [
      {
        name: "page_view",
        params: {
          page_location: pageUrl,
          page_title: pageTitle,
          page_referrer: options?.referrer,
          session_id: options?.sessionId,
          engagement_time_msec: 100,
        },
      },
    ],
    {
      userId: options?.userId,
    }
  );
}

/**
 * Send product view to GA4 (Enhanced Ecommerce)
 */
export async function sendGA4ProductView(
  clientId: string,
  product: {
    id: string;
    name: string;
    category: string;
    brand?: string;
    price?: number;
    currency?: string;
  },
  options?: {
    sessionId?: string;
    userId?: string;
  }
): Promise<boolean> {
  return sendToGA4(
    clientId,
    [
      {
        name: "view_item",
        params: {
          currency: product.currency || "USD",
          value: product.price || 0,
          items: [
            {
              item_id: product.id,
              item_name: product.name,
              item_category: product.category,
              item_brand: product.brand,
              price: product.price,
            },
          ],
          session_id: options?.sessionId,
          engagement_time_msec: 100,
        },
      },
    ],
    {
      userId: options?.userId,
    }
  );
}

/**
 * Send affiliate click to GA4 (Conversion)
 */
export async function sendGA4AffiliateClick(
  clientId: string,
  click: {
    productName: string;
    brand: string;
    supplementSlug: string;
    retailerSlug: string;
    price: number;
    clickId: string;
  },
  options?: {
    sessionId?: string;
    userId?: string;
  }
): Promise<boolean> {
  return sendToGA4(
    clientId,
    [
      {
        name: "affiliate_click",
        params: {
          product_name: click.productName,
          brand: click.brand,
          supplement_slug: click.supplementSlug,
          retailer_slug: click.retailerSlug,
          price: click.price,
          click_id: click.clickId,
          currency: "USD",
          value: click.price,
          session_id: options?.sessionId,
          engagement_time_msec: 100,
        },
      },
    ],
    {
      userId: options?.userId,
    }
  );
}

/**
 * Send search event to GA4
 */
export async function sendGA4Search(
  clientId: string,
  searchTerm: string,
  resultsCount?: number,
  options?: {
    sessionId?: string;
    userId?: string;
  }
): Promise<boolean> {
  return sendToGA4(
    clientId,
    [
      {
        name: "search",
        params: {
          search_term: searchTerm,
          results_count: resultsCount,
          session_id: options?.sessionId,
          engagement_time_msec: 100,
        },
      },
    ],
    {
      userId: options?.userId,
    }
  );
}

/**
 * Test GA4 Measurement Protocol with debug mode
 *
 * Usage:
 * ```
 * await testGA4Connection();
 * ```
 */
export async function testGA4Connection(): Promise<void> {
  console.log("[GA4 MP Test] Starting connection test...");
  console.log("[GA4 MP Test] Measurement ID:", GA4_MEASUREMENT_ID);
  console.log("[GA4 MP Test] API Secret configured:", !!GA4_API_SECRET);

  if (!GA4_API_SECRET) {
    console.error("[GA4 MP Test] FAILED - GA4_API_SECRET not set");
    return;
  }

  const testClientId = "test_client_" + Date.now();
  const success = await sendToGA4(
    testClientId,
    [
      {
        name: "test_event",
        params: {
          test_param: "test_value",
          timestamp: new Date().toISOString(),
        },
      },
    ],
    {
      debug: true,
    }
  );

  if (success) {
    console.log("[GA4 MP Test] SUCCESS - Event sent to GA4");
    console.log("[GA4 MP Test] Check GA4 DebugView for validation results");
  } else {
    console.error("[GA4 MP Test] FAILED - Could not send event");
  }
}
