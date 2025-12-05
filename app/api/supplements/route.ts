import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/supplements
 *
 * Returns list of all supplements with summary data including product counts and price ranges.
 * Uses the supplement_summary_view for efficient querying.
 *
 * Query Parameters:
 *   - show_in_nav: boolean (optional) - Filter by navigation visibility
 *
 * Response:
 *   {
 *     supplements: Array<{
 *       id: string,
 *       slug: string,
 *       name: string,
 *       display_name: string,
 *       subcategory: string,
 *       hero_image_url: string,
 *       product_count: number,
 *       avg_price: number,
 *       min_price: number,
 *       max_price: number
 *     }>
 *   }
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const showInNavParam = searchParams.get("show_in_nav");

    const supabase = createClient();

    let query = supabase
      .from("supplement_summary_view")
      .select("*")
      .order("sort_order", { ascending: true });

    // Filter by show_in_nav if specified
    if (showInNavParam !== null) {
      const showInNav = showInNavParam === "true";
      query = query.eq("show_in_nav", showInNav);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching supplements:", error);
      return NextResponse.json(
        { error: "Failed to fetch supplements", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { supplements: data || [] },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error in /api/supplements:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
