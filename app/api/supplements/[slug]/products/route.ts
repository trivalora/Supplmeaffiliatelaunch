import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Supplement {
  id: string;
  slug: string;
  name: string;
}

/**
 * GET /api/supplements/[slug]/products
 *
 * Returns paginated list of products for a specific supplement.
 * Supports advanced filtering, sorting, and pagination.
 *
 * Path Parameters:
 *   - slug: string - Supplement slug (e.g., 'ashwagandha')
 *
 * Query Parameters:
 *   - page: number (default: 1) - Page number
 *   - limit: number (default: 50, max: 100) - Items per page
 *   - retailer: string (optional) - Filter by retailer name (exact match)
 *   - brand: string (optional) - Filter by brand (partial match, case-insensitive)
 *   - min_price: number (optional) - Minimum price filter
 *   - max_price: number (optional) - Maximum price filter
 *   - third_party_tested: boolean (optional) - Filter by testing status
 *   - in_stock: boolean (default: true) - Only show in-stock products
 *   - sort: string (default: 'price_asc') - Sort order
 *           Options: price_asc, price_desc, brand_asc, brand_desc
 *
 * Response:
 *   {
 *     products: Array<{
 *       id: string,
 *       json_id: string,
 *       brand: string,
 *       product_name: string,
 *       display_name: string,
 *       product_image_url: string,
 *       serving_size: string,
 *       third_party_tested: boolean,
 *       certifications: string[],
 *       unit: string,
 *       amount_per_serving: number,
 *       net_contents: string,
 *       filters: string[],
 *       best_total_price: number,
 *       available_retailers: string[],
 *       price_count: number,
 *       supplement_slug: string,
 *       supplement_name: string
 *     }>,
 *     pagination: {
 *       page: number,
 *       limit: number,
 *       total: number,
 *       totalPages: number
 *     }
 *   }
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const { slug } = await params;

    // Parse query parameters
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "50"))
    );
    const retailer = searchParams.get("retailer");
    const brand = searchParams.get("brand");
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const thirdPartyTested = searchParams.get("third_party_tested");
    const inStock = searchParams.get("in_stock") !== "false"; // Default true
    const sortBy = searchParams.get("sort") || "price_asc";

    // Validate slug
    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter is required" },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // First, verify supplement exists
    const { data: supplementData, error: suppError } = await supabase
      .from("supplements")
      .select("id, slug, name")
      .eq("slug", slug)
      .single();

    if (suppError || !supplementData) {
      return NextResponse.json(
        { error: "Supplement not found" },
        { status: 404 }
      );
    }

    // Type the supplement data properly
    const supplement = supplementData as unknown as Supplement;

    // Build query - join products with prices to get best price and retailers
    let query = supabase
      .from("products")
      .select(
        `
        id,
        json_id,
        dsld_id,
        brand,
        product_name,
        display_name,
        dsld_product_name,
        product_image_url,
        serving_size,
        third_party_tested,
        certifications,
        unit,
        amount_per_serving,
        net_contents,
        filters,
        prices (
          price,
          product_url,
          affiliate_url,
          in_stock,
          retailer:retailers (
            name,
            slug
          )
        )
      `,
        { count: "exact" }
      )
      .eq("supplement_id", supplement.id);

    // Apply filters
    if (brand) {
      query = query.ilike("brand", `%${brand}%`);
    }

    if (thirdPartyTested !== null) {
      const tested = thirdPartyTested === "true";
      query = query.eq("third_party_tested", tested);
    }

    // Apply sorting (will be done after data transformation)
    const [sortField, sortDir] = sortBy.split("_");
    if (sortField === "brand") {
      query = query.order("brand", {
        ascending: sortDir === "asc",
      });
    }

    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    query = query.range(start, end);

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching products:", error);
      return NextResponse.json(
        { error: "Failed to fetch products", details: error.message },
        { status: 500 }
      );
    }

    // Transform products - calculate best price and available retailers
    let products = (data || []).map((product: any) => {
      const prices = product.prices || [];

      // Filter prices based on retailer, price range, and stock
      let filteredPrices = prices;

      if (retailer) {
        filteredPrices = filteredPrices.filter(
          (p: any) => p.retailer?.name === retailer
        );
      }

      if (inStock) {
        filteredPrices = filteredPrices.filter((p: any) => p.in_stock);
      }

      if (minPrice) {
        const min = parseFloat(minPrice);
        if (!isNaN(min)) {
          filteredPrices = filteredPrices.filter((p: any) => p.price >= min);
        }
      }

      if (maxPrice) {
        const max = parseFloat(maxPrice);
        if (!isNaN(max)) {
          filteredPrices = filteredPrices.filter((p: any) => p.price <= max);
        }
      }

      const bestPrice =
        filteredPrices.length > 0
          ? Math.min(...filteredPrices.map((p: any) => p.price))
          : null;

      // Calculate best price per unit
      const pricesPerUnit = filteredPrices
        .map((p: any) => {
          if (product.amount_per_serving && product.amount_per_serving > 0) {
            return p.price / product.amount_per_serving;
          }
          return null;
        })
        .filter((p: number | null): p is number => p !== null && p > 0);

      const bestPricePerUnit =
        pricesPerUnit.length > 0 ? Math.min(...pricesPerUnit) : null;

      const availableRetailers = [
        ...new Set(
          filteredPrices.map((p: any) => p.retailer?.name).filter(Boolean)
        ),
      ];

      // Build prices array with retailer info and URLs
      const pricesWithRetailers = filteredPrices.map((p: any) => {
        const pricePerUnit = product.amount_per_serving
          ? p.price / product.amount_per_serving
          : 0;

        return {
          price: p.price,
          price_per_unit: pricePerUnit,
          product_url: p.product_url,
          affiliate_url: p.affiliate_url,
          in_stock: p.in_stock,
          retailer: p.retailer?.name,
          retailer_slug: p.retailer?.slug,
        };
      });

      return {
        id: product.id,
        json_id: product.json_id,
        dsld_id: product.dsld_id,
        brand: product.brand,
        product_name: product.product_name,
        display_name: product.display_name,
        dsld_product_name: product.dsld_product_name,
        product_image_url: product.product_image_url,
        serving_size: product.serving_size,
        third_party_tested: product.third_party_tested,
        certifications: product.certifications || [],
        unit: product.unit,
        amount_per_serving: product.amount_per_serving,
        net_contents: product.net_contents,
        filters: product.filters || [],
        best_total_price: bestPrice,
        best_price_per_unit: bestPricePerUnit,
        available_retailers: availableRetailers,
        price_count: filteredPrices.length,
        prices: pricesWithRetailers,
        supplement_slug: slug,
        supplement_name: supplement.name,
      };
    });

    // Filter out products with no matching prices
    products = products.filter((p) => p.price_count > 0);

    // Apply price sorting if needed (by price per unit for value comparison)
    if (sortField === "price") {
      products.sort((a, b) => {
        const aPrice = a.best_price_per_unit || Infinity;
        const bPrice = b.best_price_per_unit || Infinity;
        return sortDir === "asc" ? aPrice - bPrice : bPrice - aPrice;
      });
    }

    const totalPages = count ? Math.ceil(count / limit) : 0;

    return NextResponse.json(
      {
        products,
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages,
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    console.error(
      "Unexpected error in /api/supplements/[slug]/products:",
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
