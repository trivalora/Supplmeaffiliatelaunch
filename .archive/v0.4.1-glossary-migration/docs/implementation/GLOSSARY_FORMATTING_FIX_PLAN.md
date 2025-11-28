# Glossary Formatting Fix - Implementation Plan

**Date:** November 27, 2025  
**Status:** In Progress  
**Goal:** Fix glossary page formatting to properly display database content with HTML/Markdown formatting

---

## Problem Statement

Glossary content migrated to Supabase database is not being properly formatted on the frontend:

### Current Issues

1. **Content displays as plain text with markdown/HTML tags visible**
   - Example: `**Formation and significance:**` shows literally instead of as bold heading
   - HTML tags like `<p>`, `<ul>`, `<li>` display as text
   - Line breaks not respected

2. **Slug mismatch between database and routes**
   - Database: `eightohdg`
   - routes.config.ts: `8ohdg`
   - Causes 404 errors

3. **Still using hardcoded React components**
   - Pages load from `src/components/pages/glossary/*.tsx`
   - Database content not being fetched or displayed

---

## Root Cause Analysis

### Architecture Flow (Current - Hardcoded)
```
URL: /glossary/eightohdg
  ↓
app/glossary/[term]/page.tsx
  ↓
Looks up route in routes.config.ts by path
  ↓
Dynamically imports: src/components/pages/glossary/EightOHdGPage.tsx
  ↓
Component renders GlossaryTemplate with hardcoded props
  ↓
GlossaryTemplate displays content (works fine with hardcoded JSX)
```

### Desired Flow (Database-Driven)
```
URL: /glossary/eightohdg
  ↓
app/glossary/[term]/page.tsx
  ↓
Fetch from API: GET /api/glossary/eightohdg
  ↓
Receive HTML/Markdown content from database
  ↓
Convert markdown to HTML (if needed)
  ↓
GlossaryTemplate displays formatted content using dangerouslySetInnerHTML
```

### Key Problems

1. **app/glossary/[term]/page.tsx is still using component imports**
   - Should fetch from API instead
   - Need to handle server-side data fetching

2. **expanded_explanation contains raw markdown/HTML strings**
   - Database stores: `"**Formation and significance:**\n\nDNA is constantly..."`
   - Needs rendering as HTML, not plain text

3. **GlossaryTemplate expects specific prop types**
   - `definition`: string (auto-linked) ✅ This works
   - `expandedExplanation`: ReactNode ❌ Database returns string
   - Need to convert string → ReactNode safely

4. **Slug inconsistencies**
   - Database and routes.config.ts don't match
   - Need to standardize slugs

---

## Solution Design

### Option 1: Server-Side Rendering with HTML Conversion (RECOMMENDED)

**Approach:** Fetch data on server, convert HTML/Markdown to React components, render

**Pros:**
- SEO-friendly (content in initial HTML)
- Fast page loads
- No client-side hydration issues
- Works with Next.js App Router best practices

**Cons:**
- More complex server component setup
- Need markdown parsing library

**Implementation:**
```typescript
// app/glossary/[term]/page.tsx (Server Component)
export default async function GlossaryTermPage({ params }) {
  const { term } = await params;
  
  // Fetch from API (server-side)
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/glossary/${term}`, {
    cache: 'force-cache'
  });
  const { term: glossaryTerm } = await response.json();
  
  return <GlossaryPageContent term={glossaryTerm} />;
}

// GlossaryPageContent (Client Component)
'use client';
function GlossaryPageContent({ term }) {
  return (
    <GlossaryTemplate
      term={term.term}
      definition={term.definition}
      expandedExplanation={
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(term.expanded_explanation) }} />
      }
    />
  );
}
```

### Option 2: Client-Side Rendering with useEffect (NOT RECOMMENDED)

**Approach:** Client component fetches data after mount

**Pros:**
- Simpler implementation
- Familiar React patterns

**Cons:**
- Poor SEO (content not in initial HTML)
- Loading states required
- Slower perceived performance
- Not aligned with Next.js 15+ patterns

---

## Implementation Plan (Option 1)

### Phase 1: Fix Slug Inconsistencies (30 min)

**Goal:** Ensure database slugs match routes.config.ts

**Tasks:**
1. Audit all glossary terms for slug mismatches
2. Run SQL UPDATE to fix database slugs (e.g., `eightohdg` → `8ohdg`) OR
3. Update routes.config.ts to match database slugs (easier)
4. Validate with test queries

**Files:**
- `src/routes.config.ts` (update if needed)
- SQL script for database updates

### Phase 2: Add Markdown/HTML Rendering (1 hour)

**Goal:** Convert database content to formatted HTML

**Option A: Use react-markdown (Recommended)**
```bash
npm install react-markdown remark-gfm rehype-raw
```

**Option B: Use dangerouslySetInnerHTML (Simpler)**
- Assumes database already has HTML
- No additional dependencies

**Option C: Hybrid (Best)**
- Detect if content is Markdown or HTML
- Use appropriate renderer

**Files to create/modify:**
- `lib/markdown.ts` - Markdown parsing utilities
- `src/components/templates/GlossaryTemplate.tsx` - Add HTML rendering support

### Phase 3: Create Database-Driven Page Component (2 hours)

**Goal:** Replace hardcoded component imports with API fetching

**Tasks:**
1. Modify `app/glossary/[term]/page.tsx`:
   - Remove dynamic component imports
   - Add server-side API fetch
   - Pass data to client component
   
2. Create `app/glossary/[term]/GlossaryPageContent.tsx`:
   - Client component for interactivity
   - Handles data → GlossaryTemplate props transformation
   - Renders formatted content

3. Update GlossaryTemplate:
   - Accept both ReactNode and string for expandedExplanation
   - Auto-convert strings to HTML if needed

**Files:**
- `app/glossary/[term]/page.tsx` (major refactor)
- `app/glossary/[term]/GlossaryPageContent.tsx` (new)
- `src/components/templates/GlossaryTemplate.tsx` (modify)

### Phase 4: Handle Related Terms Linking (1 hour)

**Goal:** Convert UUID arrays to proper links

**Current:** Database has `related_terms: ['uuid1', 'uuid2']`
**Need:** Fetch term slugs/names for those UUIDs

**Options:**
1. API returns related terms with full data (modify API)
2. Client fetches related terms separately (slower)
3. Store slugs in database alongside UUIDs (best long-term)

**Implementation:**
```typescript
// Update API route
const { data: term } = await supabase
  .from('glossary_terms')
  .select(`
    *,
    related:glossary_terms!related_terms(id, slug, term)
  `)
  .eq('slug', slug)
  .single();
```

### Phase 5: Testing & Validation (1 hour)

**Test Cases:**
1. ✅ Page loads without errors
2. ✅ Formatting displays correctly (bold, lists, headings)
3. ✅ Related terms link properly
4. ✅ SEO metadata correct
5. ✅ All 197 terms render (spot check 20)

**Test Terms:**
- `8-ohdg` (complex formatting)
- `rct` (simple definition)
- `bioavailability` (has related terms)
- `clinical-trial` (has examples)

### Phase 6: Documentation (30 min)

**Documents to create/update:**
- `docs/GLOSSARY_FORMATTING_FIX_COMPLETE.md` (this file → completion doc)
- `docs/GLOSSARY_BACKEND_COMPLETE.md` (add frontend integration notes)
- `docs/FRONTEND_MIGRATION_GUIDE.md` (update with actual implementation)

---

## Implementation Steps (Detailed)

### Step 1: Fix Slug Consistency

**Check current mismatches:**
```bash
# Query database
curl "http://localhost:3000/api/glossary?limit=500" | jq '.terms[] | {slug, term}'

# Compare with routes.config.ts
grep "key:" src/routes.config.ts | grep "glossary"
```

**Decision:** Update routes.config.ts to match database (easier than updating 197 DB rows)

### Step 2: Install Dependencies

```bash
npm install react-markdown remark-gfm rehype-raw
```

**Why:**
- `react-markdown`: Convert Markdown to React components
- `remark-gfm`: GitHub Flavored Markdown support (tables, strikethrough)
- `rehype-raw`: Allow raw HTML in markdown (for existing HTML content)

### Step 3: Create Markdown Parser Utility

**File:** `lib/markdown.ts`

```typescript
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export function parseMarkdownToReact(content: string) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Custom styling for markdown elements
        h2: ({node, ...props}) => <h2 className="text-xl font-semibold mb-3 text-primary" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-lg font-semibold mb-2 text-primary" {...props} />,
        p: ({node, ...props}) => <p className="mb-4" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
        strong: ({node, ...props}) => <strong className="font-semibold text-primary" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
```

### Step 4: Refactor Page Component

**File:** `app/glossary/[term]/page.tsx`

**Before:** Dynamic component import  
**After:** Server-side data fetch

```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GlossaryPageContent } from './GlossaryPageContent';

export async function generateStaticParams() {
  // Fetch all terms from API (not routes.config.ts)
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/glossary?limit=500`);
  const { terms } = await response.json();
  
  return terms.map((term: any) => ({
    term: term.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }): Promise<Metadata> {
  const { term: slug } = await params;
  
  // Fetch from API
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/glossary/${slug}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!response.ok) {
    return { title: 'Term Not Found' };
  }
  
  const { term } = await response.json();
  
  const title = term.abbreviation 
    ? `${term.term} (${term.abbreviation}) - Supplement Research Glossary`
    : `${term.term} - Supplement Research Glossary`;
    
  return {
    title,
    description: term.meta_description || term.definition?.substring(0, 155),
    keywords: `${term.term}, ${term.abbreviation || ''}, supplement research`,
    openGraph: {
      title,
      description: term.meta_description || term.definition?.substring(0, 155),
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/glossary/${slug}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/glossary/${slug}`,
    },
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term: slug } = await params;
  
  // Fetch term data from API
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/glossary/${slug}`, {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) {
    notFound();
  }
  
  const { term } = await response.json();
  
  return <GlossaryPageContent term={term} />;
}
```

### Step 5: Create Client Component for Content

**File:** `app/glossary/[term]/GlossaryPageContent.tsx` (NEW)

```typescript
'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { parseMarkdownToReact } from '@/lib/markdown';
import { PageViewTracker } from '@/app/components/PageViewTracker';

interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  abbreviation?: string;
  pronunciation?: string;
  definition: string;
  expanded_explanation?: string;
  why_it_matters?: string;
  simple_explanation?: string;
  technical_explanation?: string;
  real_world_context?: string;
  examples?: string[];
  key_points?: string;
  common_misconceptions?: string[];
  related_terms?: string[]; // UUIDs
  meta_title?: string;
  meta_description?: string;
}

interface GlossaryPageContentProps {
  term: GlossaryTerm;
}

export function GlossaryPageContent({ term }: GlossaryPageContentProps) {
  // Convert database content to React components
  const expandedExplanation = term.expanded_explanation 
    ? parseMarkdownToReact(term.expanded_explanation)
    : undefined;
    
  const whyItMatters = term.why_it_matters;
  const simpleExplanation = term.simple_explanation;
  
  // TODO: Fetch related terms by UUIDs
  const relatedTerms = term.related_terms?.map(uuid => ({
    term: 'Loading...', // Placeholder
    key: uuid
  })) || [];
  
  return (
    <>
      <PageViewTracker pageName={term.term} pageCategory="glossary" />
      <GlossaryTemplate
        term={term.term}
        abbreviation={term.abbreviation}
        pronunciation={term.pronunciation}
        definition={term.definition}
        expandedExplanation={expandedExplanation}
        whyItMatters={whyItMatters}
        simpleExplanation={simpleExplanation}
        examples={term.examples}
        commonMisconceptions={
          term.common_misconceptions?.[0] 
            ? parseMarkdownToReact(term.common_misconceptions.join('\n\n'))
            : undefined
        }
        relatedTerms={relatedTerms}
        currentPage={term.slug}
      />
    </>
  );
}
```

### Step 6: Update API to Include Related Terms

**File:** `app/api/glossary/[slug]/route.ts`

**Add related terms join:**
```typescript
// Fetch term with related terms data
const { data, error } = await supabase
  .from('glossary_terms')
  .select(`
    *,
    related_terms_data:related_terms(id, slug, term)
  `)
  .eq('slug', slug)
  .single();
```

**Note:** This requires modifying the SQL query to join on the UUID array

---

## Testing Checklist

### Before Implementation
- [x] Identified slug mismatches
- [x] Confirmed database content format (Markdown/HTML)
- [x] Reviewed current component architecture

### After Phase 1 (Slugs)
- [ ] All database slugs match routes.config.ts
- [ ] No 404 errors on glossary pages
- [ ] API returns terms correctly by slug

### After Phase 2 (Rendering)
- [ ] Markdown parser works correctly
- [ ] Bold, italics, lists render properly
- [ ] HTML tags don't show as text
- [ ] Custom styles applied to markdown elements

### After Phase 3 (Page Component)
- [ ] Pages load from database (not hardcoded components)
- [ ] SEO metadata correct
- [ ] Page view tracking works
- [ ] Build succeeds (npm run build)
- [ ] All 197 pages generate successfully

### After Phase 4 (Related Terms)
- [ ] Related terms display with correct names
- [ ] Related term links work
- [ ] UUIDs converted to readable names

### Final Validation
- [ ] Spot check 20 random glossary terms
- [ ] Verify formatting matches original design
- [ ] Check page load performance
- [ ] Validate SEO metadata
- [ ] Run Lighthouse audit

---

## Rollback Plan

If issues arise:

1. **Revert page component:**
   ```bash
   git checkout app/glossary/[term]/page.tsx
   ```

2. **Keep using hardcoded components temporarily**

3. **Fix database content before retrying**

4. **Test on staging before production deploy**

---

## Success Criteria

✅ **Functional:**
- All 197 glossary pages load without errors
- Content formatting matches design (bold, lists, headings)
- Related terms link correctly
- SEO metadata proper

✅ **Performance:**
- Initial page load < 1s
- Lighthouse score > 90
- No console errors

✅ **Maintainability:**
- Clear documentation
- Easy to add new terms via database
- No hardcoded content

---

## Timeline Estimate

| Phase | Time | Status |
|-------|------|--------|
| Phase 1: Slug fixes | 30 min | Not started |
| Phase 2: Markdown rendering | 1 hour | Not started |
| Phase 3: Page component refactor | 2 hours | Not started |
| Phase 4: Related terms | 1 hour | Not started |
| Phase 5: Testing | 1 hour | Not started |
| Phase 6: Documentation | 30 min | Not started |
| **Total** | **6 hours** | **0% complete** |

---

## Next Steps

1. Review this plan with team
2. Get approval for approach (Option 1 recommended)
3. Start with Phase 1 (slug fixes)
4. Implement phases sequentially
5. Test thoroughly after each phase

---

**Document Status:** Draft - Ready for Implementation  
**Last Updated:** November 27, 2025
