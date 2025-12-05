import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/glossary
 *
 * List all glossary terms with optional search
 *
 * Query parameters:
 * - search (string, optional): Search query (min 2 characters)
 * - limit (number, optional): Number of results (default: 100, max: 500)
 * - offset (number, optional): Pagination offset (default: 0)
 *
 * Returns:
 * - 200: List of glossary terms
 * - 400: Invalid search query
 * - 500: Server error
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const limit = Math.min(parseInt(searchParams.get("limit") || "100"), 500);
    const offset = Math.max(parseInt(searchParams.get("offset") || "0"), 0);

    // Create Supabase client
    const supabase = createClient();

    // Build query
    let query = supabase
      .from("glossary_terms")
      .select(
        "id, slug, term, abbreviation, definition, meta_title, meta_description, created_at",
        { count: "exact" }
      )
      .order("term", { ascending: true })
      .range(offset, offset + limit - 1);

    // Add full-text search if query provided
    if (search && search.length >= 2) {
      query = query.or(
        `term.ilike.%${search}%,definition.ilike.%${search}%,abbreviation.ilike.%${search}%`
      );
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Glossary fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch glossary terms" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        terms: data,
        total: count || 0,
        limit,
        offset,
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: any) {
    console.error("Glossary API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/glossary
 *
 * Create new glossary term - Not yet implemented
 * Disabled until frontend integration requires this endpoint
 */
