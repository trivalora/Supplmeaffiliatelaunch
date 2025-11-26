import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/supplements/[slug]
 * 
 * Returns detailed information for a single supplement by slug.
 * Includes product count aggregation.
 * 
 * Path Parameters:
 *   - slug: string - Supplement slug (e.g., 'ashwagandha')
 * 
 * Response:
 *   {
 *     supplement: {
 *       id: string,
 *       slug: string,
 *       name: string,
 *       display_name: string,
 *       subcategory: string,
 *       description: string,
 *       hero_description: string,
 *       hero_image_url: string,
 *       show_in_nav: boolean,
 *       sort_order: number,
 *       meta_title: string,
 *       meta_description: string,
 *       meta_keywords: string[],
 *       product_count: number
 *     }
 *   }
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      );
    }
    
    const supabase = createClient();
    
    // Query supplement with product count
    const { data, error } = await supabase
      .from('supplements')
      .select(`
        *,
        products!inner(count)
      `)
      .eq('slug', slug)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return NextResponse.json(
          { error: 'Supplement not found' },
          { status: 404 }
        );
      }
      
      console.error('Error fetching supplement:', error);
      return NextResponse.json(
        { error: 'Failed to fetch supplement', details: error.message },
        { status: 500 }
      );
    }
    
    // Transform response to include product_count at top level
    const supplement = {
      ...data,
      product_count: data.products?.[0]?.count || 0,
      products: undefined, // Remove the nested products array
    };
    
    return NextResponse.json(
      { supplement },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('Unexpected error in /api/supplements/[slug]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
