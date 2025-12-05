import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SupplementWithCount {
  id: string;
  slug: string;
  name: string;
  display_name: string;
  subcategory: string | null;
  description: string | null;
  hero_description: string | null;
  hero_image_url: string | null;
  show_in_nav: boolean;
  sort_order: number;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string[] | null;
  created_at: string;
  updated_at: string;
  products?: Array<{ count: number }>;
}

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
    
    // Type the data properly
    const supplementData = data as unknown as SupplementWithCount;
    
    // Transform response to include product_count at top level
    const supplement = {
      ...supplementData,
      product_count: supplementData.products?.[0]?.count || 0,
      products: undefined, // Remove the nested products array
    };
    
    return NextResponse.json(
      { supplement },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
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
