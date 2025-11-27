import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * POST /api/partner-lead
 * 
 * Submit a partner application from /partner page
 * 
 * Request body:
 * - name (string, required): Full name
 * - email (string, required): Contact email
 * - network (string, required): Affiliate network (shareasale, amazon, iherb, etc.)
 * - category (string, required): Product category of interest
 * - message (string, optional): Additional details/requirements
 * 
 * Returns:
 * - 201: Application submitted successfully
 * - 400: Invalid input (missing required fields or invalid email)
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const { name, email, network, category, message } = await request.json();
    
    // Validation: Check required fields
    if (!name || !email || !network || !category) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Name, email, network, and category are required' 
        },
        { status: 400 }
      );
    }
    
    // Validation: Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Validation: Check field lengths
    if (name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { ok: false, error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }
    
    if (network.trim().length < 2 || network.trim().length > 50) {
      return NextResponse.json(
        { ok: false, error: 'Network must be between 2 and 50 characters' },
        { status: 400 }
      );
    }
    
    if (category.trim().length < 2 || category.trim().length > 100) {
      return NextResponse.json(
        { ok: false, error: 'Category must be between 2 and 100 characters' },
        { status: 400 }
      );
    }
    
    if (message && message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: 'Message must be less than 2000 characters' },
        { status: 400 }
      );
    }
    
    // Get client info for tracking
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Create Supabase client
    const supabase = createClient();
    
    // Insert partner lead
    const { data, error } = await supabase
      .from('partner_leads')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        network: network.trim(),
        category: category.trim(),
        message: message?.trim() || null,
        ip_address: ip,
        user_agent: userAgent,
        status: 'new',
        priority: 'medium',
      })
      .select()
      .single();
    
    if (error) {
      console.error('Partner lead submission error:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      );
    }
    
    // Success
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Application submitted successfully. We will contact you within 24-48 hours.',
        lead: {
          id: data.id,
          name: data.name,
          email: data.email,
          network: data.network,
          category: data.category,
          created_at: data.created_at,
        }
      },
      { 
        status: 201,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Partner lead API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
