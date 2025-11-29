// Shared API Type Definitions
export interface ApiMeta {
  generatedAt: string;
  ttlSeconds?: number;
}

export interface ApiSuccess<T> {
  ok: true;
  data: T;
  meta?: ApiMeta;
}

export interface ApiError {
  ok: false;
  error: {
    message: string;
    code?: string;
  };
  meta?: ApiMeta;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function makeSuccess<T>(data: T, meta?: ApiMeta): ApiSuccess<T> {
  return { ok: true, data, meta };
}
export function makeError(
  message: string,
  code?: string,
  meta?: ApiMeta
): ApiError {
  return { ok: false, error: { message, code }, meta };
}

// ===========================================
// Analytics Types
// ===========================================

/** Event payload for /api/events */
export interface AnalyticsEventPayload {
  event: string;
  category?:
    | "pageview"
    | "product"
    | "affiliate"
    | "engagement"
    | "search"
    | "form"
    | "error"
    | "session"
    | "conversion"
    | "api"
    | "general";
  sessionId?: string;
  visitorId?: string;
  pageUrl?: string;
  pagePath?: string;
  referrer?: string;
  data?: Record<string, unknown>;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
  device?: {
    type?: "mobile" | "tablet" | "desktop";
    browser?: string;
    os?: string;
    screenResolution?: string;
    viewportSize?: string;
  };
}

/** Response from /api/events */
export interface AnalyticsEventsResponse {
  success: boolean;
  eventIds?: string[];
  count?: number;
  error?: string;
}

/** Payload for /api/events/affiliate-click */
export interface AffiliateClickPayload {
  productId?: string;
  productName: string;
  brand: string;
  supplementSlug: string;
  retailerSlug: string;
  retailerId?: string;
  price: number;
  pricePerUnit?: number;
  currency?: string;
  affiliateUrl: string;
  sessionId: string;
  visitorId: string;
  utmSource?: string;
  utmCampaign?: string;
  landingPage?: string;
  pagesBeforeClick?: number;
  timeOnSiteSeconds?: number;
}

/** Response from /api/events/affiliate-click */
export interface AffiliateClickResponse {
  success: boolean;
  clickId?: string;
  trackingUrl?: string;
  error?: string;
}

/** Analytics summary data from /api/analytics/summary */
export interface AnalyticsSummary {
  period: {
    start: string;
    end: string;
  };
  totals: {
    sessions: number;
    visitors: number;
    pageviews: number;
    product_views: number;
    affiliate_clicks: number;
    searches: number;
    api_events: number;
    frontend_events: number;
  };
  conversion_rate: number;
  funnel: {
    landing: number;
    supplement_view: number;
    product_view: number;
    affiliate_click: number;
  };
  top_supplements: Array<{
    supplement: string;
    views: number;
    clicks: number;
  }>;
  top_retailers: Array<{
    retailer_slug: string;
    clicks: number;
    revenue: number;
  }>;
  by_source: {
    frontend: number;
    api: number;
    server: number;
  };
  by_device: Array<{
    device: string;
    events: number;
    sessions: number;
  }>;
}

/** Affiliate click record from database */
export interface AffiliateClickRecord {
  id: string;
  click_id: string;
  product_id?: string;
  product_name: string;
  brand: string;
  supplement_slug: string;
  retailer_slug: string;
  price: number;
  price_per_unit?: number;
  currency: string;
  affiliate_url: string;
  session_id: string;
  visitor_id: string;
  utm_source?: string;
  utm_campaign?: string;
  landing_page?: string;
  pages_before_click: number;
  time_on_site_seconds?: number;
  commission_status: "pending" | "approved" | "declined" | "paid";
  commission_amount?: number;
  commission_currency?: string;
  order_id?: string;
  sale_amount?: number;
  commissioned_at?: string;
  clicked_at: string;
}
