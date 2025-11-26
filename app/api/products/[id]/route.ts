import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/products/[id]
 * 
 * Returns detailed information for a single product including all prices and retailer info.
 * Supports both UUID and json_id (backward compatibility with original JSON structure).
 * 
 * Path Parameters:
 *   - id: string - Product UUID or json_id (e.g., '57173_organic traditions_...')
 * 
 * Response:
 *   {
 *     product: {
 *       id: string,
 *       json_id: string,
 *       dsld_id: string,
 *       brand: string,
 *       product_name: string,
 *       display_name: string,
 *       dsld_product_name: string,
 *       dsld_brand: string,
 *       serving_size: string,
 *       servings_per_container: string,
 *       net_quantity: string,
 *       label_data: object,
 *       ingredients: array,
 *       product_image_url: string,
 *       is_active: boolean,
 *       third_party_tested: boolean,
 *       certifications: string[],
 *       supplement: {
 *         id: string,
 *         slug: string,
 *         name: string,
 *         display_name: string
 *       },
 *       prices: [{
 *         id: string,
 *         price: number,
 *         currency: string,
 *         product_url: string,
 *         affiliate_url: string,
 *         in_stock: boolean,
 *         last_checked_at: string,
 *         retailer: {
 *           id: string,
 *           slug: string,
 *           name: string,
 *           display_name: string,
 *           logo_url: string,
 *           is_active: boolean
 *         }
 *       }]
 *     }
 *   }
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }
    
    const supabase = createClient();
    
    // Build query with all related data - query by UUID
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        supplement:supplements(
          id,
          slug,
          name,
          display_name
        ),
        prices(
          id,
          price,
          currency,
          product_url,
          affiliate_url,
          in_stock,
          last_checked_at,
          retailer:retailers(
            id,
            slug,
            name,
            display_name,
            logo_url,
            is_active
          )
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        );
      }
      
      console.error('Error fetching product:', error);
      return NextResponse.json(
        { error: 'Failed to fetch product', details: error.message },
        { status: 500 }
      );
    }
    
    // TypeScript type assertion for joined data
    const product = data as any;
    
    // Sort prices by price ascending
    if (product.prices && product.prices.length > 0) {
      product.prices.sort((a: any, b: any) => a.price - b.price);
    }
    
    return NextResponse.json(
      { product },
      {
        headers: {
          // Cache for 1 hour, stale-while-revalidate for 24 hours
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('Unexpected error in /api/products/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
