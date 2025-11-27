import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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
      .from('glossary_terms')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error || !data) {
      return NextResponse.json(
        { error: 'Glossary term not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { term: data },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Glossary fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/glossary/[slug]
 * 
 * Update a glossary term
 * 
 * Path parameters:
 * - slug (string): URL-safe identifier
 * 
 * Request body: Same as POST /api/glossary (all fields optional except those being updated)
 * 
 * Returns:
 * - 200: Term updated successfully
 * - 400: Invalid input
 * - 404: Term not found
 * - 500: Server error
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    
    // Don't allow changing slug via PUT
    if (body.slug && body.slug !== slug) {
      return NextResponse.json(
        { error: 'Cannot change slug. Delete and recreate the term instead.' },
        { status: 400 }
      );
    }
    
    // Remove immutable fields
    delete body.id;
    delete body.created_at;
    
    // Create Supabase client
    const supabase = createClient();
    
    // Update term
    const { data, error } = await supabase
      .from('glossary_terms')
      .update(body)
      .eq('slug', slug)
      .select()
      .single();
    
    if (error || !data) {
      if (error?.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Glossary term not found' },
          { status: 404 }
        );
      }
      
      console.error('Glossary update error:', error);
      return NextResponse.json(
        { error: 'Failed to update glossary term' },
        { status: 500 }
      );
    }
    
    // Success
    return NextResponse.json(
      { 
        ok: true,
        message: 'Glossary term updated successfully',
        term: data,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Glossary update API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/glossary/[slug]
 * 
 * Delete a glossary term
 * 
 * Path parameters:
 * - slug (string): URL-safe identifier
 * 
 * Returns:
 * - 200: Term deleted successfully
 * - 404: Term not found
 * - 500: Server error
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Create Supabase client
    const supabase = createClient();
    
    // Delete term
    const { error } = await supabase
      .from('glossary_terms')
      .delete()
      .eq('slug', slug);
    
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Glossary term not found' },
          { status: 404 }
        );
      }
      
      console.error('Glossary delete error:', error);
      return NextResponse.json(
        { error: 'Failed to delete glossary term' },
        { status: 500 }
      );
    }
    
    // Success
    return NextResponse.json(
      { 
        ok: true,
        message: 'Glossary term deleted successfully',
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Glossary delete API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
