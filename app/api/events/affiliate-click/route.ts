import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ===========================================
// Types
// ===========================================
interface AffiliateClickPayload {
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

// ===========================================
// Generate unique click ID for affiliate reconciliation
// ===========================================
function generateClickId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return `suppl_${timestamp}_${random}`;
}

// ===========================================
// POST /api/events/affiliate-click
// ===========================================
/**
 * POST /api/events/affiliate-click
 *
 * Records an affiliate link click with full attribution data.
 * Returns a tracking URL with click_id appended for commission reconciliation.
 *
 * Request Body:
 *   {
 *     productId?: string,
 *     productName: string (required),
 *     brand: string (required),
 *     supplementSlug: string (required),
 *     retailerSlug: string (required),
 *     retailerId?: string,
 *     price: number (required),
 *     pricePerUnit?: number,
 *     currency?: string (default: 'USD'),
 *     affiliateUrl: string (required),
 *     sessionId: string (required),
 *     visitorId: string (required),
 *     utmSource?: string,
 *     utmCampaign?: string,
 *     landingPage?: string,
 *     pagesBeforeClick?: number,
 *     timeOnSiteSeconds?: number
 *   }
 *
 * Response:
 *   {
 *     success: true,
 *     clickId: string,
 *     trackingUrl: string
 *   }
 */
export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Parse body
    let body: AffiliateClickPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = [
      "productName",
      "brand",
      "supplementSlug",
      "retailerSlug",
      "price",
      "affiliateUrl",
      "sessionId",
      "visitorId",
    ];
    for (const field of requiredFields) {
      if (!body[field as keyof AffiliateClickPayload]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate unique click ID
    const clickId = generateClickId();

    // Append click_id to affiliate URL for tracking
    let trackingUrl: string;
    try {
      const url = new URL(body.affiliateUrl);
      // Use 'subid' or 'clickid' parameter (common affiliate network params)
      url.searchParams.set("subid", clickId);
      url.searchParams.set("clickid", clickId);
      trackingUrl = url.toString();
    } catch {
      // If URL parsing fails, append as query string
      const separator = body.affiliateUrl.includes("?") ? "&" : "?";
      trackingUrl = `${body.affiliateUrl}${separator}subid=${clickId}&clickid=${clickId}`;
    }

    const supabase = createClient();

    // First, create an analytics event for the click
    const { data: eventData, error: eventError } = await supabase
      .from("analytics_events")
      .insert({
        event_name: "affiliate_click",
        event_category: "affiliate",
        session_id: body.sessionId,
        visitor_id: body.visitorId,
        user_agent: userAgent,
        ip_hash: hashIP(ip),
        page_url: body.landingPage,
        utm_source: body.utmSource,
        utm_campaign: body.utmCampaign,
        event_data: {
          clickId,
          productId: body.productId,
          productName: body.productName,
          brand: body.brand,
          supplementSlug: body.supplementSlug,
          retailerSlug: body.retailerSlug,
          price: body.price,
          pricePerUnit: body.pricePerUnit,
        },
        source: "frontend",
      })
      .select("id")
      .single();

    if (eventError) {
      console.error("[Affiliate Click] Event insert error:", eventError);
    }

    // Insert affiliate click record
    const { data, error } = await supabase
      .from("affiliate_clicks")
      .insert({
        click_id: clickId,
        event_id: eventData?.id || null,
        product_id: body.productId || null,
        product_name: body.productName,
        brand: body.brand,
        supplement_slug: body.supplementSlug,
        retailer_id: body.retailerId || null,
        retailer_slug: body.retailerSlug,
        price: body.price,
        price_per_unit: body.pricePerUnit || null,
        currency: body.currency || "USD",
        affiliate_url: trackingUrl,
        session_id: body.sessionId,
        visitor_id: body.visitorId,
        utm_source: body.utmSource || null,
        utm_campaign: body.utmCampaign || null,
        landing_page: body.landingPage || null,
        pages_before_click: body.pagesBeforeClick || 1,
        time_on_site_seconds: body.timeOnSiteSeconds || null,
      })
      .select("id, click_id")
      .single();

    if (error) {
      console.error("[Affiliate Click] Insert error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to record affiliate click" },
        { status: 500 }
      );
    }

    // Return success with tracking URL
    return NextResponse.json({
      success: true,
      clickId: data.click_id,
      trackingUrl,
    });
  } catch (error) {
    console.error("[Affiliate Click] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Simple IP hash for privacy
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
// GET - Not allowed
// ===========================================
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST to record clicks." },
    { status: 405 }
  );
}
