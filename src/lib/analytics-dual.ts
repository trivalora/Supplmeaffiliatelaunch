/**
 * Server-Side Analytics Client
 *
 * This module provides dual-tracking: sends events to BOTH GTM/GA4 AND our Supabase backend.
 * Works alongside the existing analytics.ts (GTM-only), but adds server-side backup.
 *
 * Benefits:
 * - ~30% more data captured (bypasses ad blockers)
 * - Full data ownership in Supabase
 * - Revenue attribution via click_id
 * - Bot filtering
 * - Raw data access for custom reporting
 *
 * Usage:
 *   import { trackEventDual, trackAffiliateClickDual } from '@/lib/analytics-dual';
 *
 *   // Track any event (goes to GTM + Supabase)
 *   trackEventDual('product_view', 'product', { productId: '123', ... });
 *
 *   // Track affiliate click (gets tracking URL with click_id)
 *   const { trackingUrl } = await trackAffiliateClickDual({ ... });
 */

"use client";

import { pushToDataLayer } from "./analytics";

// ===========================================
// Types
// ===========================================
export interface DualTrackingOptions {
  sendToGTM?: boolean;
  sendToServer?: boolean;
}

export interface UTMParams {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
}

export interface DeviceInfo {
  type?: string;
  browser?: string;
  os?: string;
  screenResolution?: string;
  viewportSize?: string;
}

export interface ServerEvent {
  event: string;
  category: string;
  sessionId: string;
  visitorId: string;
  pageUrl: string;
  pagePath: string;
  referrer: string;
  utm: UTMParams;
  device: DeviceInfo;
  data: Record<string, unknown>;
}

export interface AffiliateClickParams {
  productId?: string;
  productName: string;
  brand: string;
  supplementSlug: string;
  retailerSlug: string;
  retailerId?: string;
  price: number;
  pricePerUnit?: number;
  affiliateUrl: string;
}

export interface AffiliateClickResponse {
  success: boolean;
  clickId?: string;
  trackingUrl?: string;
  error?: string;
}

// ===========================================
// Visitor & Session ID Management
// ===========================================

/**
 * Get or create persistent visitor ID (stored in localStorage)
 * Survives browser sessions
 */
export function getVisitorId(): string {
  if (typeof window === "undefined") return "";

  const STORAGE_KEY = "suppl_visitor_id";
  let visitorId = localStorage.getItem(STORAGE_KEY);

  if (!visitorId) {
    visitorId = `v_${Date.now().toString(36)}_${Math.random()
      .toString(36)
      .slice(2, 11)}`;
    localStorage.setItem(STORAGE_KEY, visitorId);
  }

  return visitorId;
}

/**
 * Get or create session ID (stored in sessionStorage)
 * Resets when browser tab closes
 */
export function getSessionId(): string {
  if (typeof window === "undefined") return "";

  const STORAGE_KEY = "suppl_session_id";
  let sessionId = sessionStorage.getItem(STORAGE_KEY);

  if (!sessionId) {
    sessionId = `s_${Date.now().toString(36)}_${Math.random()
      .toString(36)
      .slice(2, 11)}`;
    sessionStorage.setItem(STORAGE_KEY, sessionId);

    // Also track session start time and landing page
    sessionStorage.setItem("suppl_session_start", Date.now().toString());
    sessionStorage.setItem("suppl_landing_page", window.location.pathname);
    sessionStorage.setItem("suppl_page_count", "1");
  }

  return sessionId;
}

/**
 * Increment page count for current session
 */
export function incrementPageCount(): number {
  if (typeof window === "undefined") return 1;

  const count = parseInt(sessionStorage.getItem("suppl_page_count") || "1", 10);
  const newCount = count + 1;
  sessionStorage.setItem("suppl_page_count", newCount.toString());
  return newCount;
}

/**
 * Get time on site in seconds
 */
export function getTimeOnSite(): number {
  if (typeof window === "undefined") return 0;

  const startTime = parseInt(
    sessionStorage.getItem("suppl_session_start") || Date.now().toString(),
    10
  );
  return Math.floor((Date.now() - startTime) / 1000);
}

/**
 * Get landing page for current session
 */
export function getLandingPage(): string {
  if (typeof window === "undefined") return "";
  return (
    sessionStorage.getItem("suppl_landing_page") || window.location.pathname
  );
}

/**
 * Get current page count
 */
export function getPageCount(): number {
  if (typeof window === "undefined") return 1;
  return parseInt(sessionStorage.getItem("suppl_page_count") || "1", 10);
}

// ===========================================
// UTM & Device Detection
// ===========================================

/**
 * Parse UTM parameters from URL
 */
export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};

  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const content = params.get("utm_content");
  const term = params.get("utm_term");

  if (source) utm.source = source;
  if (medium) utm.medium = medium;
  if (campaign) utm.campaign = campaign;
  if (content) utm.content = content;
  if (term) utm.term = term;

  return utm;
}

/**
 * Detect device type from user agent
 */
function detectDeviceType(ua: string): string {
  if (
    /Mobi|Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  ) {
    return "mobile";
  }
  if (/Tablet|iPad|Android(?!.*Mobile)/i.test(ua)) {
    return "tablet";
  }
  return "desktop";
}

/**
 * Detect browser name from user agent
 */
function detectBrowser(ua: string): string {
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("SamsungBrowser/")) return "Samsung";
  if (ua.includes("Opera/") || ua.includes("OPR/")) return "Opera";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari";
  return "Other";
}

/**
 * Detect OS from user agent
 */
function detectOS(ua: string): string {
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac OS")) return "macOS";
  if (ua.includes("Linux") && !ua.includes("Android")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad"))
    return "iOS";
  return "Other";
}

/**
 * Get device info
 */
export function getDeviceInfo(): DeviceInfo {
  if (typeof window === "undefined") return {};

  const ua = navigator.userAgent;

  return {
    type: detectDeviceType(ua),
    browser: detectBrowser(ua),
    os: detectOS(ua),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
  };
}

// ===========================================
// Event Queue & Batching
// ===========================================

let eventQueue: ServerEvent[] = [];
let flushTimeout: ReturnType<typeof setTimeout> | null = null;
const BATCH_SIZE = 10;
const FLUSH_DELAY = 2000; // 2 seconds

/**
 * Flush queued events to server
 */
async function flushEventQueue(): Promise<void> {
  if (eventQueue.length === 0) return;

  const events = [...eventQueue];
  eventQueue = [];

  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(events),
      keepalive: true, // Ensures events are sent even on page unload
    });

    if (!response.ok) {
      console.warn("[Analytics] Failed to send events:", response.status);
      // Re-queue failed events (with limit to prevent memory issues)
      if (eventQueue.length < 100) {
        eventQueue.push(...events);
      }
    }
  } catch (error) {
    console.warn("[Analytics] Error sending events:", error);
    // Re-queue on network error
    if (eventQueue.length < 100) {
      eventQueue.push(...events);
    }
  }
}

/**
 * Queue an event for batched sending
 */
function queueServerEvent(event: ServerEvent): void {
  eventQueue.push(event);

  // Flush immediately if batch is full
  if (eventQueue.length >= BATCH_SIZE) {
    if (flushTimeout) {
      clearTimeout(flushTimeout);
      flushTimeout = null;
    }
    flushEventQueue();
  } else if (!flushTimeout) {
    // Schedule flush after delay
    flushTimeout = setTimeout(() => {
      flushTimeout = null;
      flushEventQueue();
    }, FLUSH_DELAY);
  }
}

// ===========================================
// Main Tracking Functions
// ===========================================

/**
 * Track event to both GTM and server
 *
 * @param eventName - Event name (e.g., 'product_view', 'search')
 * @param category - Event category ('pageview', 'product', 'search', etc.)
 * @param data - Event-specific data
 * @param options - Control where event is sent
 */
export function trackEventDual(
  eventName: string,
  category: string,
  data: Record<string, unknown> = {},
  options: DualTrackingOptions = { sendToGTM: true, sendToServer: true }
): void {
  if (typeof window === "undefined") return;

  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const utm = getUTMParams();
  const device = getDeviceInfo();
  const timestamp = new Date().toISOString();

  // Send to GTM (existing behavior)
  if (options.sendToGTM !== false) {
    pushToDataLayer({
      event: eventName,
      ...data,
      timestamp,
    });
  }

  // Send to server (backup tracking)
  if (options.sendToServer !== false) {
    queueServerEvent({
      event: eventName,
      category,
      sessionId,
      visitorId,
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      referrer: document.referrer,
      utm,
      device,
      data,
    });
  }
}

// ===========================================
// Specialized Tracking Functions
// ===========================================

/**
 * Track page view (dual)
 */
export function trackPageViewDual(
  pageName: string,
  pageCategory: string = "general"
): void {
  incrementPageCount();
  trackEventDual("pageview", "pageview", {
    pageName,
    pageCategory,
    pageTitle: document.title,
    pageNumber: getPageCount(),
  });
}

/**
 * Track supplement view (dual)
 */
export function trackSupplementViewDual(
  supplementName: string,
  supplementSlug: string
): void {
  trackEventDual("supplement_view", "product", {
    supplementName,
    supplementSlug,
  });
}

/**
 * Track product view (dual)
 */
export function trackProductViewDual(
  productId: string,
  productName: string,
  brand: string,
  supplementSlug: string,
  retailerCount: number,
  minPrice: number
): void {
  trackEventDual("product_view", "product", {
    productId,
    productName,
    brand,
    supplementSlug,
    retailerCount,
    minPrice,
  });
}

/**
 * Track search (dual)
 */
export function trackSearchDual(
  query: string,
  resultsCount: number,
  filters?: Record<string, unknown>
): void {
  trackEventDual("search", "search", {
    searchQuery: query,
    resultsCount,
    filters,
  });
}

/**
 * Track error (dual)
 */
export function trackErrorDual(
  errorType: string,
  errorMessage: string,
  errorLocation: string
): void {
  trackEventDual("error", "error", {
    errorType,
    errorMessage,
    errorLocation,
  });
}

/**
 * Track affiliate click with server-side recording
 * Returns tracking URL with click_id for commission attribution
 */
export async function trackAffiliateClickDual(
  params: AffiliateClickParams
): Promise<AffiliateClickResponse> {
  if (typeof window === "undefined") {
    return { success: false, error: "Not in browser context" };
  }

  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const utm = getUTMParams();

  // Also push to GTM
  pushToDataLayer({
    event: "affiliate_click",
    productId: params.productId,
    productName: params.productName,
    brand: params.brand,
    supplementSlug: params.supplementSlug,
    retailerSlug: params.retailerSlug,
    price: params.price,
    timestamp: new Date().toISOString(),
  });

  // Send to our server for tracking with click_id
  try {
    const response = await fetch("/api/events/affiliate-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...params,
        sessionId,
        visitorId,
        utmSource: utm.source,
        utmCampaign: utm.campaign,
        landingPage: getLandingPage(),
        pagesBeforeClick: getPageCount(),
        timeOnSiteSeconds: getTimeOnSite(),
      }),
    });

    if (!response.ok) {
      console.error(
        "[Analytics] Affiliate click tracking failed:",
        response.status
      );
      return { success: false, error: "Server error" };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("[Analytics] Affiliate click tracking error:", error);
    return { success: false, error: "Network error" };
  }
}

/**
 * Track comparison page view (dual)
 */
export function trackComparisonViewDual(
  supplementSlug: string,
  totalProducts: number,
  filters?: { search?: string; dietary?: string[]; sortBy?: string }
): void {
  trackEventDual("comparison_view", "product", {
    supplementSlug,
    totalProducts,
    filters,
  });
}

/**
 * Track retailer click (dual) - simpler version without full affiliate tracking
 */
export function trackRetailerClickDual(
  retailerSlug: string,
  supplementSlug: string,
  buttonLocation: string
): void {
  trackEventDual("retailer_click", "affiliate", {
    retailerSlug,
    supplementSlug,
    buttonLocation,
  });
}

// ===========================================
// Lifecycle Hooks
// ===========================================

/**
 * Initialize tracking on page load
 * Call this in your app layout or _app.tsx
 */
export function initDualTracking(): void {
  if (typeof window === "undefined") return;

  // Ensure session is initialized
  getSessionId();
  getVisitorId();

  // Flush events on page unload
  window.addEventListener("beforeunload", flushEventQueue);
  window.addEventListener("pagehide", flushEventQueue);

  // Also flush on visibility change (tab switch)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      flushEventQueue();
    }
  });
}

// Auto-initialize when module loads in browser
if (typeof window !== "undefined") {
  // Use setTimeout to avoid blocking initial render
  setTimeout(initDualTracking, 0);
}
