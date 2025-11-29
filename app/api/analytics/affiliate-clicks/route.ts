import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/analytics/affiliate-clicks
 *
 * Returns affiliate click data with revenue attribution.
 * Essential for understanding which products and retailers drive commissions.
 *
 * Query Parameters:
 *   - period: string (default: '7d') - Time period
 *   - supplement: string (optional) - Filter by supplement slug
 *   - retailer: string (optional) - Filter by retailer slug
 *   - status: string (optional) - Filter by commission status (pending, approved, declined, paid)
 *   - limit: number (default: 100, max: 1000) - Results limit
 *   - offset: number (default: 0) - Pagination offset
 *
 * Response:
 *   {
 *     success: true,
 *     data: {
 *       clicks: [...],
 *       summary: {
 *         total_clicks: number,
 *         total_commission: number,
 *         by_retailer: [...],
 *         by_supplement: [...]
 *       }
 *     }
 *   }
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse parameters
    const period = searchParams.get("period") || "7d";
    const supplementSlug = searchParams.get("supplement");
    const retailerSlug = searchParams.get("retailer");
    const status = searchParams.get("status");
    const limit = Math.min(
      1000,
      Math.max(1, parseInt(searchParams.get("limit") || "100"))
    );
    const offset = Math.max(0, parseInt(searchParams.get("offset") || "0"));

    // Calculate start date from period
    const periodMatch = period.match(/^(\d+)(h|d|w|m)$/);
    if (!periodMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid period format" },
        { status: 400 }
      );
    }

    const [, amount, unit] = periodMatch;
    const num = parseInt(amount);
    const startDate = new Date();

    switch (unit) {
      case "h":
        startDate.setHours(startDate.getHours() - num);
        break;
      case "d":
        startDate.setDate(startDate.getDate() - num);
        break;
      case "w":
        startDate.setDate(startDate.getDate() - num * 7);
        break;
      case "m":
        startDate.setMonth(startDate.getMonth() - num);
        break;
    }

    const supabase = createClient();

    // Build query for clicks
    let clicksQuery = supabase
      .from("affiliate_clicks")
      .select("*", { count: "exact" })
      .gte("clicked_at", startDate.toISOString())
      .order("clicked_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (supplementSlug) {
      clicksQuery = clicksQuery.eq("supplement_slug", supplementSlug);
    }
    if (retailerSlug) {
      clicksQuery = clicksQuery.eq("retailer_slug", retailerSlug);
    }
    if (status) {
      clicksQuery = clicksQuery.eq("commission_status", status);
    }

    const { data: clicks, error: clicksError, count } = await clicksQuery;

    if (clicksError) {
      // If table doesn't exist, return helpful message
      if (clicksError.code === "42P01") {
        return NextResponse.json({
          success: true,
          data: {
            clicks: [],
            summary: {
              total_clicks: 0,
              total_commission: 0,
              by_retailer: [],
              by_supplement: [],
            },
          },
          meta: {
            note: "Analytics tables not yet populated. Tracking will begin after migration.",
          },
        });
      }

      console.error("[Affiliate Clicks] Database error:", clicksError);
      return NextResponse.json(
        { success: false, error: "Failed to fetch clicks" },
        { status: 500 }
      );
    }

    // Get summary aggregations
    const { data: byRetailer } = await supabase
      .from("affiliate_clicks")
      .select("retailer_slug")
      .gte("clicked_at", startDate.toISOString())
      .then(async ({ data }) => {
        if (!data) return { data: [] };

        // Aggregate in memory (simpler than complex SQL)
        const counts: Record<string, { clicks: number; commission: number }> =
          {};
        for (const click of clicks || []) {
          const slug = click.retailer_slug;
          if (!counts[slug]) counts[slug] = { clicks: 0, commission: 0 };
          counts[slug].clicks++;
          counts[slug].commission += click.commission_amount || 0;
        }

        return {
          data: Object.entries(counts)
            .map(([retailer, stats]) => ({ retailer, ...stats }))
            .sort((a, b) => b.clicks - a.clicks),
        };
      });

    // Calculate totals
    const totalClicks = count || 0;
    const totalCommission = (clicks || []).reduce(
      (sum, c) => sum + (c.commission_amount || 0),
      0
    );

    // Aggregate by supplement
    const supplementCounts: Record<string, number> = {};
    for (const click of clicks || []) {
      const slug = click.supplement_slug;
      if (slug) {
        supplementCounts[slug] = (supplementCounts[slug] || 0) + 1;
      }
    }
    const bySupplementArr = Object.entries(supplementCounts)
      .map(([supplement, clickCount]) => ({ supplement, clicks: clickCount }))
      .sort((a, b) => b.clicks - a.clicks);

    return NextResponse.json({
      success: true,
      data: {
        clicks: clicks || [],
        summary: {
          total_clicks: totalClicks,
          total_commission: totalCommission,
          by_retailer: byRetailer || [],
          by_supplement: bySupplementArr,
        },
        pagination: {
          limit,
          offset,
          total: totalClicks,
          hasMore: offset + limit < totalClicks,
        },
      },
      meta: {
        generatedAt: new Date().toISOString(),
        period,
      },
    });
  } catch (error) {
    console.error("[Affiliate Clicks] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
