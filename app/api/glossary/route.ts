import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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
    const search = searchParams.get('search');
    const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 500);
    const offset = Math.max(parseInt(searchParams.get('offset') || '0'), 0);
    
    // Create Supabase client
    const supabase = createClient();
    
    // Build query
    let query = supabase
      .from('glossary_terms')
      .select('id, slug, term, abbreviation, definition, meta_title, meta_description, created_at', { count: 'exact' })
      .order('term', { ascending: true })
      .range(offset, offset + limit - 1);
    
    // Add full-text search if query provided
    if (search && search.length >= 2) {
      query = query.or(`term.ilike.%${search}%,definition.ilike.%${search}%,abbreviation.ilike.%${search}%`);
    }
    
    const { data, error, count } = await query;
    
    if (error) {
      console.error('Glossary fetch error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch glossary terms' },
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
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Glossary API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/glossary
 * 
 * Create a new glossary term
 * 
 * Request body:
 * - slug (string, required): URL-safe identifier
 * - term (string, required): The term/phrase
 * - definition (string, required): Short definition
 * - abbreviation (string, optional): Abbreviation if applicable
 * - pronunciation (string, optional): How to pronounce
 * - expanded_explanation (string, optional): Detailed explanation
 * - why_it_matters (string, optional): Why this term is important
 * - simple_explanation (string, optional): Simplified explanation
 * - technical_explanation (string, optional): Technical/scientific explanation
 * - real_world_context (string, optional): Real-world examples
 * - examples (string[], optional): Array of example usages
 * - key_points (object[], optional): Array of key points
 * - common_misconceptions (string[], optional): Common misunderstandings
 * - related_terms (uuid[], optional): Related term IDs
 * - meta_title (string, optional): SEO title
 * - meta_description (string, optional): SEO description
 * 
 * Returns:
 * - 201: Term created successfully
 * - 400: Invalid input (missing required fields)
 * - 409: Term with slug already exists
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation: Check required fields
    if (!body.slug || !body.term || !body.definition) {
      return NextResponse.json(
        { error: 'slug, term, and definition are required' },
        { status: 400 }
      );
    }
    
    // Validation: Check field lengths
    if (body.slug.length < 1 || body.slug.length > 100) {
      return NextResponse.json(
        { error: 'slug must be between 1 and 100 characters' },
        { status: 400 }
      );
    }
    
    if (body.term.length < 1 || body.term.length > 200) {
      return NextResponse.json(
        { error: 'term must be between 1 and 200 characters' },
        { status: 400 }
      );
    }
    
    if (body.definition.length < 10 || body.definition.length > 2000) {
      return NextResponse.json(
        { error: 'definition must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }
    
    // Validation: Check slug format (lowercase, hyphens, alphanumeric)
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug)) {
      return NextResponse.json(
        { error: 'slug must be lowercase alphanumeric with hyphens (e.g., double-blind-study)' },
        { status: 400 }
      );
    }
    
    // Create Supabase client
    const supabase = createClient();
    
    // Insert term
    const { data, error } = await supabase
      .from('glossary_terms')
      .insert({
        slug: body.slug,
        term: body.term,
        abbreviation: body.abbreviation || null,
        pronunciation: body.pronunciation || null,
        definition: body.definition,
        expanded_explanation: body.expanded_explanation || null,
        why_it_matters: body.why_it_matters || null,
        simple_explanation: body.simple_explanation || null,
        technical_explanation: body.technical_explanation || null,
        real_world_context: body.real_world_context || null,
        examples: body.examples || [],
        key_points: body.key_points || [],
        common_misconceptions: body.common_misconceptions || [],
        related_terms: body.related_terms || [],
        meta_title: body.meta_title || null,
        meta_description: body.meta_description || null,
      })
      .select()
      .single();
    
    if (error) {
      // Check if duplicate slug (unique constraint violation)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Term with this slug already exists' },
          { status: 409 }
        );
      }
      
      console.error('Glossary create error:', error);
      return NextResponse.json(
        { error: 'Failed to create glossary term' },
        { status: 500 }
      );
    }
    
    // Success
    return NextResponse.json(
      { 
        ok: true,
        message: 'Glossary term created successfully',
        term: data,
      },
      { 
        status: 201,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Glossary create API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
