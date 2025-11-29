/**
 * Server-Side API Tracking
 *
 * Use this in API routes to track requests server-side.
 * This captures ALL API calls, even from users with ad blockers.
 *
 * Usage in API route:
 *   import { trackApiRequest, trackApiEvent } from '@/lib/analytics-api';
 *
 *   export async function GET(request: Request) {
 *     const startTime = Date.now();
 *     // ... your logic ...
 *
 *     // Track the request
 *     await trackApiRequest(request, {
 *       endpoint: '/api/products/[id]',
 *       resourceType: 'product',
 *       resourceId: productId,
 *       statusCode: 200,
 *       responseTimeMs: Date.now() - startTime,
 *     });
 *   }
 */

import { createClient } from "@/lib/supabase/server";

// ===========================================
// Types
// ===========================================
export interface ApiRequestParams {
  endpoint: string;
  method?: string;
  resourceType?: string;
  resourceId?: string;
  statusCode?: number;
  responseTimeMs?: number;
  queryParams?: Record<string, string | string[] | undefined>;
  cacheHit?: boolean;
}

export interface ApiEventParams {
  eventName: string;
  category: string;
  data?: Record<string, unknown>;
  sessionId?: string;
  visitorId?: string;
}

// ===========================================
// Bot Detection
// ===========================================
const BOT_PATTERNS = [
  /bot|crawler|spider|scraper|curl|wget|python|go-http|java|php/i,
  /facebookexternalhit|twitterbot|linkedinbot|slackbot/i,
  /googlebot|bingbot|yandex|baidu|duckduck/i,
  /semrush|ahrefs|moz|majestic/i,
  /headless|phantom|selenium|puppeteer|playwright/i,
];

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return true;
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function hashIP(ip: string): string {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

// ===========================================
// Extract request metadata
// ===========================================
function getRequestMeta(request: Request): {
  ip: string;
  ipHash: string;
  userAgent: string | null;
  referer: string | null;
  isBot: boolean;
} {
  const headers = request.headers;
  const ip =
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown";
  const userAgent = headers.get("user-agent");
  const referer = headers.get("referer");

  return {
    ip,
    ipHash: hashIP(ip),
    userAgent,
    referer,
    isBot: isBot(userAgent),
  };
}

// ===========================================
// Track API Request
// ===========================================
/**
 * Track an API request in the api_requests table.
 * Call this at the end of your API route handler.
 *
 * @param request - The incoming Request object
 * @param params - Tracking parameters
 */
export async function trackApiRequest(
  request: Request,
  params: ApiRequestParams
): Promise<void> {
  try {
    const meta = getRequestMeta(request);
    const url = new URL(request.url);

    // Convert query params to object
    const queryParamsObj: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      queryParamsObj[key] = value;
    });

    const supabase = createClient();

    await supabase.from("api_requests").insert({
      request_id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      endpoint: params.endpoint,
      method: params.method || request.method,
      ip_hash: meta.ipHash,
      user_agent: meta.userAgent,
      referer: meta.referer,
      query_params: params.queryParams || queryParamsObj,
      status_code: params.statusCode,
      response_time_ms: params.responseTimeMs,
      resource_type: params.resourceType,
      resource_id: params.resourceId,
      is_bot: meta.isBot,
      cache_hit: params.cacheHit || false,
    });
  } catch (error) {
    // Don't let tracking errors break the API
    console.error("[API Tracking] Error:", error);
  }
}

// ===========================================
// Track API Event (for analytics_events table)
// ===========================================
/**
 * Track an event from an API route.
 * Use this for business events like product views, searches, etc.
 *
 * @param request - The incoming Request object
 * @param params - Event parameters
 */
export async function trackApiEvent(
  request: Request,
  params: ApiEventParams
): Promise<void> {
  try {
    const meta = getRequestMeta(request);
    const url = new URL(request.url);

    // Try to extract session/visitor from cookies or headers
    const cookieHeader = request.headers.get("cookie") || "";
    const sessionMatch = cookieHeader.match(/suppl_session_id=([^;]+)/);
    const visitorMatch = cookieHeader.match(/suppl_visitor_id=([^;]+)/);

    const supabase = createClient();

    await supabase.from("analytics_events").insert({
      event_name: params.eventName,
      event_category: params.category,
      session_id: params.sessionId || sessionMatch?.[1] || null,
      visitor_id: params.visitorId || visitorMatch?.[1] || null,
      user_agent: meta.userAgent,
      ip_hash: meta.ipHash,
      page_url: meta.referer,
      referrer: meta.referer,
      event_data: params.data || {},
      is_bot: meta.isBot,
      source: "api",
    });
  } catch (error) {
    console.error("[API Event Tracking] Error:", error);
  }
}

// ===========================================
// Convenience functions for common API events
// ===========================================

/**
 * Track a product API request
 */
export async function trackProductApiCall(
  request: Request,
  productId: string,
  productName: string,
  supplementSlug: string,
  responseTimeMs: number
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint: "/api/products/[id]",
      resourceType: "product",
      resourceId: productId,
      statusCode: 200,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_product_fetch",
      category: "api",
      data: {
        productId,
        productName,
        supplementSlug,
      },
    }),
  ]);
}

/**
 * Track a supplement API request
 */
export async function trackSupplementApiCall(
  request: Request,
  supplementSlug: string,
  responseTimeMs: number
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint: "/api/supplements/[slug]",
      resourceType: "supplement",
      resourceId: supplementSlug,
      statusCode: 200,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_supplement_fetch",
      category: "api",
      data: { supplementSlug },
    }),
  ]);
}

/**
 * Track a products list API request
 */
export async function trackProductsListApiCall(
  request: Request,
  supplementSlug: string,
  productCount: number,
  responseTimeMs: number,
  filters?: Record<string, unknown>
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint: "/api/supplements/[slug]/products",
      resourceType: "products_list",
      resourceId: supplementSlug,
      statusCode: 200,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_products_list_fetch",
      category: "api",
      data: {
        supplementSlug,
        productCount,
        filters,
      },
    }),
  ]);
}

/**
 * Track a search API request
 */
export async function trackSearchApiCall(
  request: Request,
  query: string,
  resultsCount: number,
  responseTimeMs: number
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint: "/api/products/search",
      resourceType: "search",
      resourceId: query,
      statusCode: 200,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_search",
      category: "search",
      data: {
        searchQuery: query,
        resultsCount,
      },
    }),
  ]);
}

/**
 * Track a glossary API request
 */
export async function trackGlossaryApiCall(
  request: Request,
  termSlug: string,
  responseTimeMs: number
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint: "/api/glossary/[slug]",
      resourceType: "glossary",
      resourceId: termSlug,
      statusCode: 200,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_glossary_fetch",
      category: "api",
      data: { termSlug },
    }),
  ]);
}

/**
 * Track an API error
 */
export async function trackApiError(
  request: Request,
  endpoint: string,
  statusCode: number,
  errorMessage: string,
  responseTimeMs: number
): Promise<void> {
  await Promise.all([
    trackApiRequest(request, {
      endpoint,
      statusCode,
      responseTimeMs,
    }),
    trackApiEvent(request, {
      eventName: "api_error",
      category: "error",
      data: {
        endpoint,
        statusCode,
        errorMessage,
      },
    }),
  ]);
}
