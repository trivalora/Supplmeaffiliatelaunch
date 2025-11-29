/**
 * TikTok Events API - Server-Side Event Tracking
 *
 * Send events directly to TikTok from the server, bypassing client-side ad blockers.
 * Works alongside TikTok Pixel (GTM) with automatic deduplication via event_id.
 *
 * Benefits:
 * - ~40% more events captured (ad blockers specifically target social pixels)
 * - Better attribution & campaign optimization
 * - Improved retargeting audiences
 * - More accurate conversion reporting
 *
 * @see https://ads.tiktok.com/marketing_api/docs?id=1741601162187777
 * @see https://business-api.tiktok.com/portal/docs?id=1771100865818625
 */

import crypto from "crypto";

const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const TIKTOK_ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;
const TIKTOK_API_VERSION = "v1.3";
const TIKTOK_ENDPOINT =
  "https://business-api.tiktok.com/open_api/v1.3/event/track/";

// Test mode endpoint (events appear in Events Manager → Test Events)
const TIKTOK_TEST_EVENT_CODE = process.env.TIKTOK_TEST_EVENT_CODE;

interface TikTokUser {
  external_id?: string; // User ID from your system (hashed SHA-256)
  email?: string; // Email (hashed SHA-256)
  phone_number?: string; // Phone (hashed SHA-256)
  ttp?: string; // TikTok click ID (_ttp cookie)
  ip?: string; // IP address (NOT hashed)
  user_agent?: string; // User agent (NOT hashed)
}

interface TikTokProperties {
  content_type?: string;
  content_id?: string;
  content_name?: string;
  content_category?: string;
  price?: number;
  quantity?: number;
  value?: number;
  currency?: string;
  query?: string;
  description?: string;
  [key: string]: any;
}

interface TikTokEvent {
  event: string;
  event_id: string; // For deduplication with Pixel
  timestamp: string; // ISO 8601 format
  context: {
    ad: {
      callback?: string;
    };
    page: {
      url: string;
      referrer?: string;
    };
    user: TikTokUser;
    ip?: string;
    user_agent?: string;
  };
  properties?: TikTokProperties;
  test_event_code?: string;
}

interface TikTokPayload {
  pixel_code: string;
  event_source: "web";
  event_source_id?: string;
  data: TikTokEvent[];
  test_event_code?: string;
}

/**
 * Hash data for TikTok (SHA-256, lowercase, trimmed, no spaces)
 */
function hashForTikTok(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase().trim().replace(/\s+/g, "");
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

/**
 * Send events to TikTok Events API
 *
 * @param events - Array of events to send
 * @param options - Optional test mode
 * @returns Success status
 */
export async function sendToTikTokAPI(
  events: TikTokEvent[],
  options: {
    testMode?: boolean;
  } = {}
): Promise<{ success: boolean; code?: number; message?: string }> {
  // Skip if not configured
  if (!TIKTOK_PIXEL_ID || !TIKTOK_ACCESS_TOKEN) {
    console.warn(
      "[TikTok API] TIKTOK_PIXEL_ID or TIKTOK_ACCESS_TOKEN not configured - skipping server-side tracking"
    );
    return { success: false };
  }

  if (events.length === 0) {
    console.warn("[TikTok API] No events to send");
    return { success: false };
  }

  // Build payload
  const payload: TikTokPayload = {
    pixel_code: TIKTOK_PIXEL_ID,
    event_source: "web",
    data: events,
  };

  // Add test code if in test mode
  if (options.testMode && TIKTOK_TEST_EVENT_CODE) {
    payload.test_event_code = TIKTOK_TEST_EVENT_CODE;
    events.forEach((event) => {
      event.test_event_code = TIKTOK_TEST_EVENT_CODE;
    });
  }

  // Send to TikTok
  try {
    const response = await fetch(TIKTOK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": TIKTOK_ACCESS_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("[TikTok API] Request failed:", response.status, error);
      return { success: false, message: error.message };
    }

    const result = await response.json();

    // TikTok returns { code: 0, message: "OK", request_id: "..." }
    if (result.code === 0) {
      return {
        success: true,
        code: result.code,
        message: result.message,
      };
    }

    return { success: false, code: result.code, message: result.message };
  } catch (error) {
    console.error("[TikTok API] Error sending events:", error);
    return { success: false };
  }
}

/**
 * Convert our analytics event to TikTok Events API format
 */
export function convertToTikTokEvent(
  analyticsEvent: {
    event_name: string;
    event_category: string;
    event_data: Record<string, any>;
    session_id?: string;
    visitor_id?: string;
    page_url?: string;
    referrer?: string;
    ip_hash?: string;
    user_agent?: string;
  },
  options: {
    ipAddress?: string; // Real IP (not hashed) for TikTok
    userEmail?: string; // If user is logged in
    userId?: string; // Your internal user ID
    ttp?: string; // _ttp cookie (TikTok click ID)
  } = {}
): TikTokEvent {
  // Map event names to TikTok standard events
  const eventNameMap: Record<string, string> = {
    pageview: "ViewContent",
    product_view: "ViewContent",
    supplement_view: "ViewContent",
    affiliate_click: "InitiateCheckout",
    search: "Search",
    add_to_cart: "AddToCart",
    begin_checkout: "InitiateCheckout",
    purchase: "CompletePayment",
    lead: "SubmitForm",
    complete_registration: "CompleteRegistration",
  };

  const tiktokEventName =
    eventNameMap[analyticsEvent.event_name] || "CustomEvent";

  // Build user data
  const user: TikTokUser = {
    ip: options.ipAddress,
    user_agent: analyticsEvent.user_agent,
    ttp: options.ttp,
  };

  // Hash email if provided
  if (options.userEmail) {
    user.email = hashForTikTok(options.userEmail);
  }

  // Hash user ID if provided
  if (options.userId) {
    user.external_id = hashForTikTok(options.userId);
  }

  // Build properties
  const properties: TikTokProperties = {
    currency: "USD",
  };

  // Map product data
  if (analyticsEvent.event_data.productName) {
    properties.content_name = analyticsEvent.event_data.productName as string;
  }

  if (analyticsEvent.event_data.supplementSlug) {
    properties.content_category = analyticsEvent.event_data
      .supplementSlug as string;
  }

  if (analyticsEvent.event_data.productId) {
    properties.content_id = analyticsEvent.event_data.productId as string;
    properties.content_type = "product";
  }

  if (analyticsEvent.event_data.price) {
    properties.value = analyticsEvent.event_data.price as number;
    properties.price = analyticsEvent.event_data.price as number;
  }

  if (analyticsEvent.event_data.searchQuery) {
    properties.query = analyticsEvent.event_data.searchQuery as string;
  }

  // Add brand as description
  if (analyticsEvent.event_data.brand) {
    properties.description = analyticsEvent.event_data.brand as string;
  }

  // Build TikTok event
  const event: TikTokEvent = {
    event: tiktokEventName,
    event_id:
      analyticsEvent.event_data.event_id ||
      `${analyticsEvent.event_name}_${
        analyticsEvent.visitor_id
      }_${Date.now()}`.substring(0, 40),
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: analyticsEvent.page_url || "",
        referrer: analyticsEvent.referrer,
      },
      user,
      ip: options.ipAddress,
      user_agent: analyticsEvent.user_agent,
    },
    properties,
  };

  return event;
}

/**
 * Send ViewContent (page view) event to TikTok
 */
export async function sendTikTokPageView(
  pageUrl: string,
  options: {
    eventId?: string;
    ipAddress?: string;
    userAgent?: string;
    ttp?: string;
  } = {}
): Promise<boolean> {
  const event: TikTokEvent = {
    event: "ViewContent",
    event_id: options.eventId || `pageview_${Date.now()}`,
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: pageUrl,
      },
      user: {
        ip: options.ipAddress,
        user_agent: options.userAgent,
        ttp: options.ttp,
      },
      ip: options.ipAddress,
      user_agent: options.userAgent,
    },
  };

  const result = await sendToTikTokAPI([event]);
  return result.success;
}

/**
 * Send ViewContent (product view) event to TikTok
 */
export async function sendTikTokProductView(
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
  },
  options: {
    eventId?: string;
    pageUrl?: string;
    ipAddress?: string;
    userAgent?: string;
    ttp?: string;
  } = {}
): Promise<boolean> {
  const event: TikTokEvent = {
    event: "ViewContent",
    event_id: options.eventId || `product_view_${product.id}_${Date.now()}`,
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: options.pageUrl || "",
      },
      user: {
        ip: options.ipAddress,
        user_agent: options.userAgent,
        ttp: options.ttp,
      },
      ip: options.ipAddress,
      user_agent: options.userAgent,
    },
    properties: {
      content_name: product.name,
      content_category: product.category,
      content_id: product.id,
      content_type: "product",
      value: product.price,
      price: product.price,
      currency: "USD",
    },
  };

  const result = await sendToTikTokAPI([event]);
  return result.success;
}

/**
 * Send InitiateCheckout (affiliate click) event to TikTok
 */
export async function sendTikTokAffiliateClick(
  click: {
    productName: string;
    productId: string;
    brand: string;
    supplementSlug: string;
    retailerSlug: string;
    price: number;
    clickId: string;
  },
  options: {
    eventId?: string;
    pageUrl?: string;
    ipAddress?: string;
    userAgent?: string;
    ttp?: string;
  } = {}
): Promise<boolean> {
  const event: TikTokEvent = {
    event: "InitiateCheckout",
    event_id: options.eventId || `affiliate_click_${click.clickId}`,
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: options.pageUrl || "",
      },
      user: {
        ip: options.ipAddress,
        user_agent: options.userAgent,
        ttp: options.ttp,
      },
      ip: options.ipAddress,
      user_agent: options.userAgent,
    },
    properties: {
      content_name: click.productName,
      content_category: click.supplementSlug,
      content_id: click.productId,
      content_type: "product",
      value: click.price,
      price: click.price,
      currency: "USD",
      description: click.brand,
    },
  };

  const result = await sendToTikTokAPI([event]);
  return result.success;
}

/**
 * Send Search event to TikTok
 */
export async function sendTikTokSearch(
  searchQuery: string,
  options: {
    eventId?: string;
    pageUrl?: string;
    ipAddress?: string;
    userAgent?: string;
    ttp?: string;
  } = {}
): Promise<boolean> {
  const event: TikTokEvent = {
    event: "Search",
    event_id: options.eventId || `search_${Date.now()}`,
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: options.pageUrl || "",
      },
      user: {
        ip: options.ipAddress,
        user_agent: options.userAgent,
        ttp: options.ttp,
      },
      ip: options.ipAddress,
      user_agent: options.userAgent,
    },
    properties: {
      query: searchQuery,
    },
  };

  const result = await sendToTikTokAPI([event]);
  return result.success;
}

/**
 * Test TikTok Events API connection
 *
 * Usage:
 * ```
 * await testTikTokAPI();
 * ```
 */
export async function testTikTokAPI(): Promise<void> {
  console.log("[TikTok API Test] Starting connection test...");
  console.log("[TikTok API Test] Pixel ID:", TIKTOK_PIXEL_ID);
  console.log(
    "[TikTok API Test] Access Token configured:",
    !!TIKTOK_ACCESS_TOKEN
  );
  console.log(
    "[TikTok API Test] Test Event Code configured:",
    !!TIKTOK_TEST_EVENT_CODE
  );

  if (!TIKTOK_PIXEL_ID || !TIKTOK_ACCESS_TOKEN) {
    console.error(
      "[TikTok API Test] FAILED - TIKTOK_PIXEL_ID or TIKTOK_ACCESS_TOKEN not set"
    );
    return;
  }

  const testEvent: TikTokEvent = {
    event: "ViewContent",
    event_id: `test_${Date.now()}`,
    timestamp: new Date().toISOString(),
    context: {
      ad: {},
      page: {
        url: "https://www.suppl.me/test",
      },
      user: {
        ip: "127.0.0.1",
        user_agent: "Test User Agent",
      },
      ip: "127.0.0.1",
      user_agent: "Test User Agent",
    },
  };

  const result = await sendToTikTokAPI([testEvent], { testMode: true });

  if (result.success) {
    console.log("[TikTok API Test] SUCCESS - Event sent to TikTok");
    console.log("[TikTok API Test] Code:", result.code);
    console.log("[TikTok API Test] Message:", result.message);
    console.log("[TikTok API Test] Check Events Manager → Test Events");
  } else {
    console.error("[TikTok API Test] FAILED - Could not send event");
    console.error("[TikTok API Test] Code:", result.code);
    console.error("[TikTok API Test] Message:", result.message);
  }
}
