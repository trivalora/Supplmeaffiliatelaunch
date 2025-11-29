import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/analytics/summary
 *
 * Returns comprehensive analytics summary for a date range.
 * Uses the get_analytics_summary database function.
 *
 * Query Parameters:
 *   - period: string (default: '7d') - Time period: '24h', '7d', '30d', '90d'
 *   - start: string (optional) - ISO date string for custom start
 *   - end: string (optional) - ISO date string for custom end
 *
 * Response:
 *   {
 *     success: true,
 *     data: {
 *       period: { start, end },
 *       totals: { sessions, visitors, pageviews, ... },
 *       conversion_rate: number,
 *       funnel: { landing, supplement_view, product_view, affiliate_click },
 *       top_supplements: [...],
 *       top_retailers: [...],
 *       by_source: { frontend, api, server },
 *       by_device: [...]
 *     }
 *   }
 *
 * Note: This endpoint requires authentication in production.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get period or custom dates
    const period = searchParams.get("period") || "7d";
    const customStart = searchParams.get("start");
    const customEnd = searchParams.get("end");

    // Calculate date range
    let startDate: Date;
    let endDate = new Date();

    if (customStart) {
      startDate = new Date(customStart);
      if (customEnd) {
        endDate = new Date(customEnd);
      }
    } else {
      // Parse period string
      const periodMatch = period.match(/^(\d+)(h|d|w|m)$/);
      if (!periodMatch) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid period format. Use: 24h, 7d, 30d, 90d",
          },
          { status: 400 }
        );
      }

      const [, amount, unit] = periodMatch;
      const num = parseInt(amount);

      startDate = new Date();
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
    }

    const supabase = createClient();

    // Call the analytics summary function
    const { data, error } = await supabase.rpc("get_analytics_summary", {
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
    });

    if (error) {
      console.error("[Analytics Summary] Database error:", error);

      // If function doesn't exist, return a helpful message
      if (error.message.includes("function") || error.code === "42883") {
        return NextResponse.json(
          {
            success: false,
            error: "Analytics tables not set up. Run the migration first.",
            hint: "Run: supabase migration up 20251129100000_create_analytics_tables.sql",
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: false, error: "Failed to fetch analytics" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data || {},
      meta: {
        generatedAt: new Date().toISOString(),
        requestedPeriod: period,
      },
    });
  } catch (error) {
    console.error("[Analytics Summary] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
