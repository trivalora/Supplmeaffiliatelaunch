# Backend Extension Implementation Plan

**Date:** November 27, 2025  
**Version:** 0.5.0 (Planned)  
**Status:** Planning Phase  

---

## Overview

This document outlines the implementation plan for extending the Supabase backend with three new features:

1. **Newsletter/Mailing List** - Database + API endpoint for landing page email subscription
2. **Partner Leads** - Database + API endpoint for partner application form
3. **Glossary Terms** - API endpoints for storing/retrieving glossary entries from database

---

## Current State Analysis

### Existing Infrastructure ✅
- **Supabase PostgreSQL** - Fully operational with `api` schema
- **5 API Endpoints** - Supplements, products, search (all working)
- **Environment Variables** - Configured in Vercel + local .env
- **Supabase Client** - Browser (`src/lib/supabase/client.ts`) and server (`src/lib/supabase/server.ts`)

### Existing Forms 📋
1. **Newsletter Form** - Landing page (`LandingPage.tsx` line 693-790)
   - Currently calls `/api/subscribe` (endpoint doesn't exist)
   - Input: email, source ('landing_newsletter')
   - Status: Incomplete implementation
   
2. **Partner Form** - Partner page (`PartnerPage.tsx` line 27-64)
   - Currently calls `/api/partner-lead` (endpoint doesn't exist)
   - Input: name, email, network, category, message
   - Status: Incomplete implementation

3. **Glossary Terms** - 198 terms in `src/components/pages/glossary/`
   - Currently hardcoded in React components
   - Database table exists (`api.glossary_terms`) but empty
   - No API endpoints yet

---

## Implementation Plan

### Phase 1: Newsletter/Mailing List (2-3 hours)

#### 1.1 Database Schema
**File:** `supabase/migrations/20251127000001_create_newsletter_table.sql`

```sql
-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS api.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT NOT NULL DEFAULT 'landing_newsletter', -- tracking where they signed up
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  ip_address TEXT, -- for compliance tracking
  user_agent TEXT, -- for compliance tracking
  confirmed BOOLEAN DEFAULT false, -- for double opt-in
  confirmation_token TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_newsletter_email ON api.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON api.newsletter_subscribers(status);
CREATE INDEX idx_newsletter_subscribed_at ON api.newsletter_subscribers(subscribed_at);

-- Trigger for updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON api.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

COMMENT ON TABLE api.newsletter_subscribers IS 'Newsletter email subscribers with compliance tracking';
```

#### 1.2 API Endpoint
**File:** `app/api/subscribe/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Get client info for compliance
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Insert subscriber (on conflict do nothing if already exists)
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.toLowerCase().trim(),
        source: source || 'landing_newsletter',
        ip_address: ip,
        user_agent: userAgent,
      })
      .select()
      .single();
    
    if (error) {
      // Check if duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'Already subscribed', ok: true },
          { status: 200 }
        );
      }
      
      console.error('Newsletter subscription error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Successfully subscribed',
        subscriber: data 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### 1.3 Frontend Update
**File:** `src/components/pages/static/LandingPage.tsx` (line 693-790)

✅ **No changes needed** - Form already calls `/api/subscribe` with correct payload

---

### Phase 2: Partner Leads (2-3 hours)

#### 2.1 Database Schema
**File:** `supabase/migrations/20251127000002_create_partner_leads_table.sql`

```sql
-- Create partner leads table
CREATE TABLE IF NOT EXISTS api.partner_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  network TEXT NOT NULL, -- affiliate network
  category TEXT NOT NULL, -- product category
  message TEXT, -- additional details
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'approved', 'rejected', 'archived')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  ip_address TEXT,
  user_agent TEXT,
  contacted_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ,
  notes TEXT, -- internal notes
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_partner_email ON api.partner_leads(email);
CREATE INDEX idx_partner_status ON api.partner_leads(status);
CREATE INDEX idx_partner_network ON api.partner_leads(network);
CREATE INDEX idx_partner_created_at ON api.partner_leads(created_at);

-- Trigger
CREATE TRIGGER update_partner_leads_updated_at
  BEFORE UPDATE ON api.partner_leads
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

COMMENT ON TABLE api.partner_leads IS 'Partner application submissions from /partner page';
```

#### 2.2 API Endpoint
**File:** `app/api/partner-lead/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { name, email, network, category, message } = await request.json();
    
    // Validation
    if (!name || !email || !network || !category) {
      return NextResponse.json(
        { error: 'Name, email, network, and category are required' },
        { status: 400 }
      );
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Get client info
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Insert lead
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
      })
      .select()
      .single();
    
    if (error) {
      console.error('Partner lead submission error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Application submitted successfully',
        lead: data 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Partner lead API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### 2.3 Frontend Update
**File:** `src/components/pages/static/PartnerPage.tsx` (line 27-64)

✅ **No changes needed** - Form already calls `/api/partner-lead` with correct payload

---

### Phase 3: Glossary API Endpoints (3-4 hours)

#### 3.1 Database - Already Exists ✅
The `api.glossary_terms` table already exists (created in `20251126000001_create_tables.sql`).

**Current schema:**
```sql
CREATE TABLE api.glossary_terms (
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  term TEXT NOT NULL,
  abbreviation TEXT,
  pronunciation TEXT,
  definition TEXT NOT NULL,
  expanded_explanation TEXT,
  why_it_matters TEXT,
  simple_explanation TEXT,
  technical_explanation TEXT,
  real_world_context TEXT,
  examples TEXT[],
  key_points JSONB,
  common_misconceptions TEXT[],
  related_terms UUID[],
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

#### 3.2 API Endpoints

**File:** `app/api/glossary/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// GET /api/glossary - List all glossary terms
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    
    let query = supabase
      .from('glossary_terms')
      .select('id, slug, term, abbreviation, definition, meta_title, meta_description')
      .order('term', { ascending: true });
    
    // Full-text search if query provided
    if (search && search.length >= 2) {
      query = query.textSearch('term', search, {
        type: 'websearch',
        config: 'english',
      });
    }
    
    const { data, error } = await query;
    
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
        total: data.length 
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
    
  } catch (error) {
    console.error('Glossary API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/glossary - Create new glossary term
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation
    if (!body.slug || !body.term || !body.definition) {
      return NextResponse.json(
        { error: 'slug, term, and definition are required' },
        { status: 400 }
      );
    }
    
    const { data, error } = await supabase
      .from('glossary_terms')
      .insert(body)
      .select()
      .single();
    
    if (error) {
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
    
    return NextResponse.json(
      { 
        ok: true,
        term: data 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Glossary create API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**File:** `app/api/glossary/[slug]/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

// GET /api/glossary/[slug] - Get single glossary term
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
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
    
  } catch (error) {
    console.error('Glossary fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/glossary/[slug] - Update glossary term
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('glossary_terms')
      .update(body)
      .eq('slug', slug)
      .select()
      .single();
    
    if (error || !data) {
      return NextResponse.json(
        { error: 'Failed to update glossary term' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        ok: true,
        term: data 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Glossary update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/glossary/[slug] - Delete glossary term
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    const { error } = await supabase
      .from('glossary_terms')
      .delete()
      .eq('slug', slug);
    
    if (error) {
      return NextResponse.json(
        { error: 'Failed to delete glossary term' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        ok: true,
        message: 'Glossary term deleted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Glossary delete error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### 3.3 Data Migration Script
**File:** `scripts/migration/migrate-glossary-to-db.mjs`

```javascript
/**
 * Migrate existing glossary terms from React components to Supabase
 * 
 * This script extracts glossary data from the 198 component files
 * and inserts them into the database.
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' }
});

// Extract glossary data from component files
async function extractGlossaryTerms() {
  const glossaryDir = path.join(process.cwd(), 'src/components/pages/glossary');
  const files = await fs.readdir(glossaryDir);
  
  const terms = [];
  
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    
    const filePath = path.join(glossaryDir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Extract slug from filename (e.g., "RCTPage.tsx" -> "rct")
    const slug = file.replace('Page.tsx', '').toLowerCase();
    
    // Parse component to extract term, definition, etc.
    // This is a simplified parser - may need adjustment based on actual structure
    const termMatch = content.match(/term="([^"]+)"/);
    const definitionMatch = content.match(/definition="([^"]+)"/);
    const expandedMatch = content.match(/expandedExplanation=\{([^}]+)\}/);
    
    if (termMatch && definitionMatch) {
      terms.push({
        slug,
        term: termMatch[1],
        definition: definitionMatch[1],
        // Add other fields as needed
      });
    }
  }
  
  return terms;
}

// Insert terms into database
async function migrateToDatabase() {
  console.log('Extracting glossary terms from components...');
  const terms = await extractGlossaryTerms();
  
  console.log(`Found ${terms.length} glossary terms`);
  
  console.log('Inserting into database...');
  const { data, error } = await supabase
    .from('glossary_terms')
    .insert(terms)
    .select();
  
  if (error) {
    console.error('Error inserting terms:', error);
    process.exit(1);
  }
  
  console.log(`✅ Successfully migrated ${data.length} glossary terms`);
}

migrateToDatabase();
```

---

## Database Permissions

Add RLS policies for public read access (already configured in `20251126120200_grant_permissions.sql`):

```sql
-- Enable RLS on new tables
ALTER TABLE api.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.partner_leads ENABLE ROW LEVEL SECURITY;

-- Public can insert (for forms)
CREATE POLICY "Allow public insert on newsletter_subscribers"
  ON api.newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on partner_leads"
  ON api.partner_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only service role can read/update/delete
CREATE POLICY "Service role full access to newsletter_subscribers"
  ON api.newsletter_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access to partner_leads"
  ON api.partner_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Public read access to glossary (already exists)
CREATE POLICY "Allow public read on glossary_terms"
  ON api.glossary_terms
  FOR SELECT
  TO anon
  USING (true);
```

---

## Testing Plan

### Manual Testing

1. **Newsletter Subscription**
   ```bash
   curl -X POST http://localhost:3000/api/subscribe \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","source":"landing_newsletter"}'
   ```

2. **Partner Lead Submission**
   ```bash
   curl -X POST http://localhost:3000/api/partner-lead \
     -H "Content-Type: application/json" \
     -d '{
       "name":"John Doe",
       "email":"john@example.com",
       "network":"shareasale",
       "category":"Omega-3",
       "message":"Test message"
     }'
   ```

3. **Glossary Endpoints**
   ```bash
   # List all terms
   curl http://localhost:3000/api/glossary
   
   # Search terms
   curl http://localhost:3000/api/glossary?search=clinical
   
   # Get single term
   curl http://localhost:3000/api/glossary/rct
   ```

### Frontend Testing

1. Go to landing page → scroll to newsletter section → enter email → submit
2. Go to /partner → fill out form → submit
3. Verify success messages display correctly
4. Check Supabase dashboard for inserted records

---

## Deployment Steps

1. **Create migrations locally**
   ```bash
   npx supabase migration new create_newsletter_table
   npx supabase migration new create_partner_leads_table
   npx supabase migration new add_glossary_permissions
   ```

2. **Test migrations locally**
   ```bash
   npx supabase db reset
   npx supabase db push
   ```

3. **Push to production**
   ```bash
   npx supabase db push --linked
   ```

4. **Deploy API endpoints**
   ```bash
   git add .
   git commit -m "feat: add newsletter, partner leads, and glossary API endpoints"
   git push origin main
   ```

5. **Verify in production**
   ```bash
   curl https://www.suppl.me/api/glossary
   ```

---

## Documentation Updates

### Files to Update:
1. `docs/API_DOCUMENTATION.md` - Add 3 new endpoint sections
2. `docs/ARCHITECTURE.md` - Update database schema diagram
3. `README.md` - Update API endpoints list
4. `CHANGELOG.md` - Add v0.5.0 entry
5. `.github/copilot-instructions.md` - Update API routes list

---

## Timeline Estimate

| Phase | Task | Time | Status |
|-------|------|------|--------|
| Phase 1 | Newsletter table migration | 30 min | Not started |
| Phase 1 | Newsletter API endpoint | 1 hour | Not started |
| Phase 1 | Testing | 30 min | Not started |
| Phase 2 | Partner leads table migration | 30 min | Not started |
| Phase 2 | Partner leads API endpoint | 1 hour | Not started |
| Phase 2 | Testing | 30 min | Not started |
| Phase 3 | Glossary API endpoints | 2 hours | Not started |
| Phase 3 | Glossary migration script | 1 hour | Not started |
| Phase 3 | Testing | 30 min | Not started |
| Phase 4 | Documentation updates | 1 hour | Not started |
| **Total** | | **8-9 hours** | |

---

## Success Criteria

✅ All 3 database tables created and indexed  
✅ All 5 API endpoints operational (2 new + 3 glossary)  
✅ Forms successfully submit data to database  
✅ Frontend shows proper success/error messages  
✅ RLS policies configured for security  
✅ All endpoints tested locally and in production  
✅ Documentation fully updated  
✅ Zero build errors  

---

## Next Steps After Completion

1. **Email Service Integration** - Connect newsletter to SendGrid/Mailchimp
2. **Admin Dashboard** - Build internal tool to manage leads/subscribers
3. **Glossary Migration** - Move all 198 terms from React to database
4. **Analytics Tracking** - Add GTM events for form submissions

---

**Ready to implement?** Let's start with Phase 1!
