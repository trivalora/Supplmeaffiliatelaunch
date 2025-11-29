/**
 * Facebook Conversions API (CAPI) - Server-Side Event Tracking
 *
 * Send events directly to Facebook from the server, bypassing client-side ad blockers.
 * Works alongside Facebook Pixel (GTM) with automatic deduplication via event_id.
 *
 * Benefits:
 * - ~40% more events captured (ad blockers specifically target social pixels)
 * - Better attribution & iOS 14+ tracking
 * - Improved retargeting audiences
 * - More accurate conversion reporting
 *
 * @see https://developers.facebook.com/docs/marketing-api/conversions-api
 * @see https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
 */

import crypto from "crypto";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const FB_ACCESS_TOKEN = process.env.FB_CONVERSIONS_API_TOKEN;
const FB_API_VERSION = "v18.0";
const FB_ENDPOINT = `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events`;

// Test mode endpoint (events appear in Events Manager → Test Events)
const FB_TEST_CODE = process.env.FB_TEST_CODE;

interface FacebookUserData {
  em?: string; // Email (hashed SHA-256)
  ph?: string; // Phone (hashed SHA-256)
  fn?: string; // First name (hashed SHA-256)
  ln?: string; // Last name (hashed SHA-256)
  ct?: string; // City (hashed SHA-256)
  st?: string; // State (hashed SHA-256)
  zp?: string; // Zip code (hashed SHA-256)
  country?: string; // Country code (hashed SHA-256)
  external_id?: string; // User ID from your system (hashed SHA-256)
  client_ip_address?: string; // IP address (NOT hashed)
  client_user_agent?: string; // User agent (NOT hashed)
  fbc?: string; // Facebook click ID (_fbc cookie)
  fbp?: string; // Facebook browser ID (_fbp cookie)
}

interface FacebookCustomData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  contents?: Array<{
    id: string;
    quantity?: number;
    item_price?: number;
  }>;
  num_items?: number;
  search_string?: string;
  status?: string;
  [key: string]: any;
}

interface FacebookEvent {
  event_name: string;
  event_time: number; // Unix timestamp
  event_id: string; // For deduplication with Pixel
  event_source_url: string;
  action_source: "website";
  user_data: FacebookUserData;
  custom_data?: FacebookCustomData;
  opt_out?: boolean;
}

interface FacebookPayload {
  data: FacebookEvent[];
  test_event_code?: string;
}

/**
 * Hash data for Facebook (SHA-256, lowercase, trimmed)
 */
function hashForFacebook(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase().trim();
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

/**
 * Send events to Facebook Conversions API
 *
 * @param events - Array of events to send
 * @param options - Optional test mode
 * @returns Success status
 */
export async function sendToFacebookCAPI(
  events: FacebookEvent[],
  options: {
    testMode?: boolean;
  } = {}
): Promise<{ success: boolean; eventsReceived?: number; messages?: string[] }> {
  // Skip if not configured
  if (!FB_PIXEL_ID || !FB_ACCESS_TOKEN) {
    console.warn(
      "[FB CAPI] FB_PIXEL_ID or FB_CONVERSIONS_API_TOKEN not configured - skipping server-side tracking"
    );
    return { success: false };
  }

  if (events.length === 0) {
    console.warn("[FB CAPI] No events to send");
    return { success: false };
  }

  // Build payload
  const payload: FacebookPayload = {
    data: events,
  };

  // Add test code if in test mode
  if (options.testMode && FB_TEST_CODE) {
    payload.test_event_code = FB_TEST_CODE;
  }

  // Send to Facebook
  try {
    const response = await fetch(
      `${FB_ENDPOINT}?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("[FB CAPI] Request failed:", response.status, error);
      return { success: false };
    }

    const result = await response.json();

    // Facebook returns { events_received: 1, messages: [] }
    if (result.events_received > 0) {
      return {
        success: true,
        eventsReceived: result.events_received,
        messages: result.messages || [],
      };
    }

    return { success: false, messages: result.messages };
  } catch (error) {
    console.error("[FB CAPI] Error sending events:", error);
    return { success: false };
  }
}

/**
 * Convert our analytics event to Facebook Conversions API format
 */
export function convertToFacebookEvent(
  analyticsEvent: {
    event_name: string;
    event_category: string;
    event_data: Record<string, any>;
    session_id?: string;
    visitor_id?: string;
    page_url?: string;
    ip_hash?: string;
    user_agent?: string;
  },
  options: {
    ipAddress?: string; // Real IP (not hashed) for Facebook
    userEmail?: string; // If user is logged in
    userId?: string; // Your internal user ID
    fbp?: string; // _fbp cookie
    fbc?: string; // _fbc cookie
  } = {}
): FacebookEvent {
  // Map event names to Facebook standard events
  const eventNameMap: Record<string, string> = {
    pageview: "PageView",
    product_view: "ViewContent",
    supplement_view: "ViewContent",
    affiliate_click: "InitiateCheckout",
    search: "Search",
    add_to_cart: "AddToCart",
    begin_checkout: "InitiateCheckout",
    purchase: "Purchase",
    lead: "Lead",
    complete_registration: "CompleteRegistration",
  };

  const fbEventName = eventNameMap[analyticsEvent.event_name] || "CustomEvent";

  // Build user_data
  const userData: FacebookUserData = {
    client_user_agent: analyticsEvent.user_agent,
    client_ip_address: options.ipAddress,
    fbp: options.fbp,
    fbc: options.fbc,
  };

  // Hash email if provided
  if (options.userEmail) {
    userData.em = hashForFacebook(options.userEmail);
  }

  // Hash user ID if provided
  if (options.userId) {
    userData.external_id = hashForFacebook(options.userId);
  }

  // Build custom_data
  const customData: FacebookCustomData = {
    currency: "USD",
  };

  // Map product data
  if (analyticsEvent.event_data.productName) {
    customData.content_name = analyticsEvent.event_data.productName as string;
  }

  if (analyticsEvent.event_data.supplementSlug) {
    customData.content_category = analyticsEvent.event_data
      .supplementSlug as string;
  }

  if (analyticsEvent.event_data.productId) {
    customData.content_ids = [analyticsEvent.event_data.productId as string];
    customData.content_type = "product";
  }

  if (analyticsEvent.event_data.price) {
    customData.value = analyticsEvent.event_data.price as number;
  }

  if (analyticsEvent.event_data.searchQuery) {
    customData.search_string = analyticsEvent.event_data.searchQuery as string;
  }

  // Add brand info
  if (analyticsEvent.event_data.brand) {
    customData.contents = [
      {
        id: analyticsEvent.event_data.productId as string,
        quantity: 1,
        item_price: analyticsEvent.event_data.price as number,
      },
    ];
  }

  // Build Facebook event
  const event: FacebookEvent = {
    event_name: fbEventName,
    event_time: Math.floor(Date.now() / 1000), // Unix timestamp
    event_id:
      analyticsEvent.event_data.event_id ||
      `${analyticsEvent.event_name}_${
        analyticsEvent.visitor_id
      }_${Date.now()}`.substring(0, 40),
    event_source_url: analyticsEvent.page_url || "",
    action_source: "website",
    user_data: userData,
    custom_data: customData,
  };

  return event;
}

/**
 * Send PageView event to Facebook
 */
export async function sendFacebookPageView(
  pageUrl: string,
  options: {
    eventId?: string;
    ipAddress?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  } = {}
): Promise<boolean> {
  const event: FacebookEvent = {
    event_name: "PageView",
    event_time: Math.floor(Date.now() / 1000),
    event_id: options.eventId || `pageview_${Date.now()}`,
    event_source_url: pageUrl,
    action_source: "website",
    user_data: {
      client_ip_address: options.ipAddress,
      client_user_agent: options.userAgent,
      fbp: options.fbp,
      fbc: options.fbc,
    },
  };

  const result = await sendToFacebookCAPI([event]);
  return result.success;
}

/**
 * Send ViewContent (product view) event to Facebook
 */
export async function sendFacebookProductView(
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
    fbp?: string;
    fbc?: string;
  } = {}
): Promise<boolean> {
  const event: FacebookEvent = {
    event_name: "ViewContent",
    event_time: Math.floor(Date.now() / 1000),
    event_id: options.eventId || `product_view_${product.id}_${Date.now()}`,
    event_source_url: options.pageUrl || "",
    action_source: "website",
    user_data: {
      client_ip_address: options.ipAddress,
      client_user_agent: options.userAgent,
      fbp: options.fbp,
      fbc: options.fbc,
    },
    custom_data: {
      content_name: product.name,
      content_category: product.category,
      content_ids: [product.id],
      content_type: "product",
      value: product.price,
      currency: "USD",
    },
  };

  const result = await sendToFacebookCAPI([event]);
  return result.success;
}

/**
 * Send InitiateCheckout (affiliate click) event to Facebook
 */
export async function sendFacebookAffiliateClick(
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
    fbp?: string;
    fbc?: string;
  } = {}
): Promise<boolean> {
  const event: FacebookEvent = {
    event_name: "InitiateCheckout",
    event_time: Math.floor(Date.now() / 1000),
    event_id: options.eventId || `affiliate_click_${click.clickId}`,
    event_source_url: options.pageUrl || "",
    action_source: "website",
    user_data: {
      client_ip_address: options.ipAddress,
      client_user_agent: options.userAgent,
      fbp: options.fbp,
      fbc: options.fbc,
    },
    custom_data: {
      content_name: click.productName,
      content_category: click.supplementSlug,
      content_ids: [click.productId],
      content_type: "product",
      value: click.price,
      currency: "USD",
      contents: [
        {
          id: click.productId,
          quantity: 1,
          item_price: click.price,
        },
      ],
      num_items: 1,
    },
  };

  const result = await sendToFacebookCAPI([event]);
  return result.success;
}

/**
 * Send Search event to Facebook
 */
export async function sendFacebookSearch(
  searchQuery: string,
  options: {
    eventId?: string;
    pageUrl?: string;
    ipAddress?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  } = {}
): Promise<boolean> {
  const event: FacebookEvent = {
    event_name: "Search",
    event_time: Math.floor(Date.now() / 1000),
    event_id: options.eventId || `search_${Date.now()}`,
    event_source_url: options.pageUrl || "",
    action_source: "website",
    user_data: {
      client_ip_address: options.ipAddress,
      client_user_agent: options.userAgent,
      fbp: options.fbp,
      fbc: options.fbc,
    },
    custom_data: {
      search_string: searchQuery,
    },
  };

  const result = await sendToFacebookCAPI([event]);
  return result.success;
}

/**
 * Test Facebook Conversions API connection
 *
 * Usage:
 * ```
 * await testFacebookCAPI();
 * ```
 */
export async function testFacebookCAPI(): Promise<void> {
  console.log("[FB CAPI Test] Starting connection test...");
  console.log("[FB CAPI Test] Pixel ID:", FB_PIXEL_ID);
  console.log("[FB CAPI Test] Access Token configured:", !!FB_ACCESS_TOKEN);
  console.log("[FB CAPI Test] Test Code configured:", !!FB_TEST_CODE);

  if (!FB_PIXEL_ID || !FB_ACCESS_TOKEN) {
    console.error(
      "[FB CAPI Test] FAILED - FB_PIXEL_ID or FB_CONVERSIONS_API_TOKEN not set"
    );
    return;
  }

  const testEvent: FacebookEvent = {
    event_name: "PageView",
    event_time: Math.floor(Date.now() / 1000),
    event_id: `test_${Date.now()}`,
    event_source_url: "https://www.suppl.me/test",
    action_source: "website",
    user_data: {
      client_ip_address: "127.0.0.1",
      client_user_agent: "Test User Agent",
    },
  };

  const result = await sendToFacebookCAPI([testEvent], { testMode: true });

  if (result.success) {
    console.log("[FB CAPI Test] SUCCESS - Event sent to Facebook");
    console.log("[FB CAPI Test] Events received:", result.eventsReceived);
    console.log("[FB CAPI Test] Check Events Manager → Test Events");
    if (result.messages && result.messages.length > 0) {
      console.log("[FB CAPI Test] Messages:", result.messages);
    }
  } else {
    console.error("[FB CAPI Test] FAILED - Could not send event");
    if (result.messages) {
      console.error("[FB CAPI Test] Messages:", result.messages);
    }
  }
}
