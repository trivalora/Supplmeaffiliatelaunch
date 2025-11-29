import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { trackSearchApiCall, trackApiError } from "@/lib/analytics-api";

/**
 * GET /api/products/search
 *
 * Full-text search across all products with advanced filtering options.
 * Uses PostgreSQL full-text search with English language support.
 *
 * Query Parameters:
 *   - q: string (required, min 2 chars) - Search query
 *   - supplement: string (optional) - Filter by supplement slug
 *   - brand: string (optional) - Filter by brand name (partial match)
 *   - retailer: string (optional) - Filter by retailer availability
 *   - min_price: number (optional) - Minimum price filter
 *   - max_price: number (optional) - Maximum price filter
 *   - third_party_tested: boolean (optional) - Filter by testing status
 *   - in_stock: boolean (optional, default: true) - Only show in-stock products
 *   - sort: string (default: 'relevance') - Sort order
 *           Options: relevance, price_asc, price_desc, brand_asc, brand_desc
 *   - limit: number (default: 20, max: 100) - Results per page
 *   - page: number (default: 1) - Page number
 *
 * Response:
 *   {
 *     results: Array<{
 *       id: string,
 *       json_id: string,
 *       brand: string,
 *       product_name: string,
 *       product_image_url: string,
 *       best_total_price: number,
 *       available_retailers: string[],
 *       third_party_tested: boolean,
 *       supplement: {
 *         slug: string,
 *         name: string
 *       }
 *     }>,
 *     pagination: {
 *       page: number,
 *       limit: number,
 *       total: number,
 *       totalPages: number
 *     },
 *     query: {
 *       q: string,
 *       filters: object
 *     }
 *   }
 */
export async function GET(request: Request) {
  const startTime = Date.now();

  try {
    const { searchParams } = new URL(request.url);

    // Required parameter
    const q = searchParams.get("q");
    if (!q || q.trim().length < 2) {
      return NextResponse.json(
        {
          error:
            "Search query (q) is required and must be at least 2 characters",
        },
        { status: 400 }
      );
    }

    // Optional filters
    const supplementSlug = searchParams.get("supplement");
    const brand = searchParams.get("brand");
    const retailer = searchParams.get("retailer");
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const thirdPartyTested = searchParams.get("third_party_tested");
    const inStock = searchParams.get("in_stock") !== "false"; // Default true

    // Pagination & sorting
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "20"))
    );
    const sortBy = searchParams.get("sort") || "relevance";

    const supabase = createClient();

    // Start with full-text search on products
    let query = supabase
      .from("products")
      .select(
        `
        id,
        json_id,
        dsld_id,
        brand,
        product_name,
        dsld_product_name,
        product_image_url,
        third_party_tested,
        supplement:supplements!inner(
          slug,
          name
        ),
        prices!inner(
          price,
          in_stock,
          retailer:retailers!inner(
            name
          )
        )
      `,
        { count: "exact" }
      )
      .or(`brand.ilike.%${q}%,product_name.ilike.%${q}%`)
      .eq("is_active", true);

    // Apply supplement filter
    if (supplementSlug) {
      query = query.eq("supplement.slug", supplementSlug);
    }

    // Apply brand filter (case-insensitive partial match)
    if (brand) {
      query = query.ilike("brand", `%${brand}%`);
    }

    // Apply third_party_tested filter
    if (thirdPartyTested !== null) {
      query = query.eq("third_party_tested", thirdPartyTested === "true");
    }

    // Apply in_stock filter
    if (inStock) {
      query = query.eq("prices.in_stock", true);
    }

    // Apply retailer filter
    if (retailer) {
      query = query.eq("prices.retailer.name", retailer);
    }

    // Apply price filters
    if (minPrice) {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) {
        query = query.gte("prices.price", min);
      }
    }
    if (maxPrice) {
      const max = parseFloat(maxPrice);
      if (!isNaN(max)) {
        query = query.lte("prices.price", max);
      }
    }

    // Apply sorting
    if (sortBy === "price_asc") {
      query = query.order("price", { foreignTable: "prices", ascending: true });
    } else if (sortBy === "price_desc") {
      query = query.order("price", {
        foreignTable: "prices",
        ascending: false,
      });
    } else if (sortBy === "brand_asc") {
      query = query.order("brand", { ascending: true });
    } else if (sortBy === "brand_desc") {
      query = query.order("brand", { ascending: false });
    }
    // relevance is the default (by full-text search ranking)

    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    query = query.range(start, end);

    const { data, error, count } = await query;

    if (error) {
      console.error("Error searching products:", error);
      return NextResponse.json(
        { error: "Search failed", details: error.message },
        { status: 500 }
      );
    }

    // Transform results to include best price and available retailers
    const results = (data || []).map((product: any) => {
      const prices = product.prices || [];
      const bestPrice =
        prices.length > 0 ? Math.min(...prices.map((p: any) => p.price)) : null;
      const retailers = [
        ...new Set(prices.map((p: any) => p.retailer?.name).filter(Boolean)),
      ];

      return {
        id: product.id,
        json_id: product.json_id,
        dsld_id: product.dsld_id,
        brand: product.brand,
        product_name: product.product_name,
        dsld_product_name: product.dsld_product_name,
        product_image_url: product.product_image_url,
        best_total_price: bestPrice,
        available_retailers: retailers,
        third_party_tested: product.third_party_tested,
        supplement: product.supplement,
      };
    });

    const totalPages = count ? Math.ceil(count / limit) : 0;

    // Track search API call (non-blocking)
    trackSearchApiCall(
      request,
      q,
      results.length,
      Date.now() - startTime
    ).catch(() => {});

    return NextResponse.json(
      {
        results,
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages,
        },
        query: {
          q,
          filters: {
            supplement: supplementSlug,
            brand,
            retailer,
            min_price: minPrice,
            max_price: maxPrice,
            third_party_tested: thirdPartyTested,
            in_stock: inStock,
            sort: sortBy,
          },
        },
      },
      {
        headers: {
          // Cache for 10 minutes, stale-while-revalidate for 1 hour
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    // Track errors
    trackApiError(
      request,
      "/api/products/search",
      500,
      error instanceof Error ? error.message : "Unknown error",
      Date.now() - startTime
    ).catch(() => {});

    console.error("Unexpected error in /api/products/search:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
