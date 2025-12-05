import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/glossary/[slug]
 *
 * Get a single glossary term by slug
 *
 * Path parameters:
 * - slug (string): URL-safe identifier (e.g., 'rct', 'double-blind-study')
 *
 * Returns:
 * - 200: Glossary term found
 * - 404: Term not found
 * - 500: Server error
 *
 * Cache: 1 hour (3600s) with stale-while-revalidate for 24 hours
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Create Supabase client
    const supabase = createClient();

    // Fetch term by slug
    const { data, error } = await supabase
      .from("glossary_terms")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Glossary term not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { term: data },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: any) {
    console.error("Glossary fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/glossary/[slug]
 * DELETE /api/glossary/[slug]
 *
 * Update/Delete glossary term - Not yet implemented
 * Disabled until frontend integration requires these endpoints
 */
