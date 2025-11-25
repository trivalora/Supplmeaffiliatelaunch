# Phase 3: Component Migration - Comprehensive Refactoring Plan
## Next.js Server/Client Component Architecture

**Date**: November 23, 2025  
**Status**: Planning  
**Estimated Duration**: 3-4 days  
**Complexity**: HIGH

---

## 🎯 Executive Summary

Phase 3 is the **most complex and critical phase** of the Next.js migration. We need to refactor the entire component architecture to work with Next.js Server/Client Components while preserving all functionality.

**Key Challenge**: React SPA uses client-side routing and state management throughout. Next.js uses Server Components by default with selective client-side interactivity.

**Strategy**: Systematic refactoring following the "Progressive Client-Side Boundary" pattern - keep as much on the server as possible, move to client only when necessary.

---

## 📊 Current Architecture Analysis

### Component Dependency Tree

```
App.tsx (Root)
├── Header.tsx (Client - dropdown interaction)
├── Footer.tsx (Server - static links)
└── Page Components
    ├── Supplement Pages (17 total)
    │   ├── *PageNewV2.tsx (Client - uses hooks)
    │   │   └── KnowledgebaseTemplate.tsx (Client - heavy hooks usage)
    │   │       ├── useStructuredData (fetch)
    │   │       ├── useSupplementTracking (analytics)
    │   │       ├── useProductTracking (analytics)
    │   │       ├── useAffiliateTooltip (state)
    │   │       ├── autolinkGlossaryTerms (navigation)
    │   │       └── Sub-components
    │   │           ├── HeroSection
    │   │           ├── BenefitsDrawbacksSection
    │   │           ├── ResearchGradesSection
    │   │           ├── DosingSection
    │   │           ├── ProductComparisonSection
    │   │           └── ReferencesSection
    ├── Glossary Pages (197 total)
    │   └── GlossaryTemplate.tsx (needs analysis)
    ├── Comparison Pages (17 total)
    │   └── ProductComparisonWrapper.tsx (needs analysis)
    └── Static Pages (9 total)
        └── Various templates
```

### Critical Dependencies

#### 1. **KnowledgebaseTemplate.tsx** (1,238 lines)
**Current State**: Monolithic client component with 15+ hooks

**Dependencies**:
- `useEffect` - 3 instances (analytics, scroll tracking, intersection observer)
- `useState` - 5 instances (accordion state, tooltip state, etc.)
- `useMemo` - 8 instances (performance optimizations)
- `useCallback` - 4 instances (event handlers)
- `useStructuredData` - Fetches `/structured-data/${pageKey}.json`
- `useSupplementTracking` - Analytics on mount
- `useProductTracking` - Product impression tracking
- `useAffiliateTooltip` - Tooltip state management

**Props**:
- `onNavigate?: (page: string) => void` - Used in 20+ places
- `currentPage?: string` - For glossary self-link prevention
- Content props: 30+ different props for all sections

**Navigation Usage**:
- Glossary term links (autolinkGlossaryTerms)
- Comparison page button
- Related content links

#### 2. **Supplement Page Components** (17 files)
**Pattern**:
```tsx
export function AshwagandhaPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('ashwagandhav2');
  const benefits = [...];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Ashwagandha",
    onNavigate,
    currentPage: "ashwagandhav2",
    // ... 50+ lines of props
  };
  
  return (
    <>
      <SEOHead {...} />
      {structuredData && <script type="application/ld+json">...</script>}
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}
```

**Issues**:
- All use `onNavigate` prop
- All use `useStructuredData` hook
- All manually inject structured data via `<script>`
- Mix of server-appropriate data with client-only hooks

#### 3. **Analytics Utilities**
**Location**: `src/utils/analytics.ts`, `src/hooks/useAnalytics.ts`

**Functions**:
- `trackPageView` - Needs to run on mount
- `trackSupplementView` - Needs supplement name
- `scrollDepthTracker` - Needs browser APIs
- `timeTracker` - Needs performance APIs

**Challenge**: Analytics must run client-side but should be initialized from server data

#### 4. **Glossary Autolinking**
**Location**: `src/utils/glossaryAutolink.tsx` (929 lines)

**Function**: `autolinkGlossaryTerms(text, onNavigate, currentPage)`
- Parses text content
- Finds glossary terms (197 terms with variations)
- Creates interactive `<HoverCard>` components
- Requires `onNavigate` callback for navigation

**Challenge**: 
- Currently uses `onClick` handlers with `onNavigate()`
- Needs conversion to Next.js `<Link>` components
- Must preserve hover card functionality
- Used in 50+ places across the codebase

#### 5. **Image Imports**
**Current**: 
```tsx
import imgAmazonButton from "figma:asset/2f3309...png";
```

**Next.js**:
```tsx
import Image from 'next/image';
<Image src="/images/amazon-button.png" width={120} height={40} />
```

**Scope**: 100+ image imports across components

---

## 🏗️ Refactoring Strategy

### Principle: Progressive Client-Side Boundary

**Rule**: Only add `'use client'` when a component:
1. Uses React hooks (`useState`, `useEffect`, etc.)
2. Uses browser APIs (`window`, `document`, etc.)
3. Requires event handlers (`onClick`, `onChange`, etc.)
4. Uses Context providers/consumers

**Goal**: Maximize server components for better performance and SEO

### Architecture Decision Tree

```
Component needs...
├── Static content only? → SERVER COMPONENT
├── Data fetching? → SERVER COMPONENT (use fetch in async component)
├── User interaction?
│   ├── Simple link → SERVER COMPONENT (use <Link>)
│   ├── Form submission → CLIENT COMPONENT
│   ├── Dropdown/Modal → CLIENT COMPONENT
│   └── Accordion/Tabs → CLIENT COMPONENT
├── Analytics tracking? → CLIENT COMPONENT (or wrap in client boundary)
└── State management? → CLIENT COMPONENT
```

---

## 📋 Detailed Refactoring Steps

### Step 1: Analyze and Document Dependencies (0.5 days)

#### 1.1 Map Component Dependencies
- [ ] Create dependency graph of all components
- [ ] Identify shared utilities (analytics, images, etc.)
- [ ] Document all hook usage
- [ ] List all props passed between components
- [ ] Identify navigation patterns

#### 1.2 Identify Server vs Client Components
- [ ] Mark components that MUST be client (uses hooks/state)
- [ ] Mark components that CAN be server (static content)
- [ ] Identify hybrid components (needs splitting)
- [ ] Document breaking changes needed

#### 1.3 Create Migration Checklist
- [ ] List all files to modify
- [ ] Prioritize by dependency order
- [ ] Estimate time per component
- [ ] Identify testing points

**Deliverable**: `COMPONENT_MIGRATION_MAP.md`

---

### Step 2: Refactor Utilities Layer (0.5 days)

#### 2.1 Move src/utils/ → src/lib/
Next.js convention: use `lib/` for utilities

```bash
mv src/utils src/lib
```

Update all imports:
```tsx
// Before
import { trackPageView } from '../utils/analytics';

// After
import { trackPageView } from '@/lib/analytics';
```

**Files to move**: 30+ utility files

#### 2.2 Create Path Aliases
Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"]
    }
  }
}
```

#### 2.3 Split Analytics Utilities

**Current**: Single `analytics.ts` file with 20+ functions

**New Structure**:
```
src/lib/analytics/
├── index.ts                    # Export all functions
├── tracking.ts                 # Pure functions (server-safe)
├── gtm.ts                      # GTM push functions (client-only)
├── client-hooks.ts             # Client-only hooks
└── server-helpers.ts           # Server component helpers
```

**Reason**: Separate server-safe functions from client-only hooks

#### 2.4 Update Glossary Autolinking

**Current Problem**: Uses `onClick` with `onNavigate` callback

**Solution**: Convert to use Next.js `<Link>` component

```tsx
// Before
<a 
  href="#" 
  onClick={(e) => {
    e.preventDefault();
    onNavigate(glossaryKey);
  }}
>
  {term}
</a>

// After
import Link from 'next/link';
<Link href={`/glossary/${glossaryKey}`}>
  {term}
</Link>
```

**Implementation**:
```tsx
// src/lib/glossaryAutolink.tsx
export function autolinkGlossaryTerms(
  text: string,
  currentPage?: string  // Remove onNavigate param
): ReactNode {
  // ... matching logic ...
  
  return (
    <Link 
      href={`/glossary/${match.key}`}
      className="text-primary underline"
    >
      {match.text}
    </Link>
  );
}
```

**Files to update**: 
- `src/lib/glossaryAutolink.tsx`
- All components using `autolinkGlossaryTerms()` (20+ files)

#### 2.5 Fix Image Imports

**Strategy**: Replace figma:asset imports with Next.js Image component

**Before**:
```tsx
import imgAshwagandha from "figma:asset/e5cf...png";
<img src={imgAshwagandha} alt="Ashwagandha" />
```

**After**:
```tsx
import Image from 'next/image';
<Image 
  src="/optimized/e5cf...-640.webp" 
  alt="Ashwagandha"
  width={640}
  height={480}
  priority={true}  // For hero images
/>
```

**Implementation**:
1. Update `supplementImages.ts` to export metadata:
```tsx
export const SUPPLEMENT_IMAGES = {
  ashwagandhav2: {
    src: '/optimized/e5cf...-640.webp',
    width: 640,
    height: 480,
    alt: 'Ashwagandha root and powder'
  },
  // ... 16 more
};
```

2. Create helper function:
```tsx
export function getSupplementImageProps(key: string) {
  return SUPPLEMENT_IMAGES[key] || null;
}
```

**Files to update**: 100+ image imports

**Deliverable**: All utilities server/client compatible

---

### Step 3: Refactor KnowledgebaseTemplate (1 day)

This is the **most critical component** - 1,238 lines used by all 17 supplement pages.

#### 3.1 Split into Server/Client Components

**New Structure**:
```
src/components/knowledgebase/
├── KnowledgebaseTemplate.tsx          # Main server component
├── KnowledgebaseClient.tsx            # Client wrapper (analytics)
├── HeroSection.tsx                    # Server component
├── HeroImageOptimized.tsx             # Client (preload logic)
├── BenefitsDrawbacksSection.tsx       # Server component
├── BenefitsDrawbacksClient.tsx        # Client (analytics)
├── ResearchGradesSection.tsx          # Server component
├── DosingSection.tsx                  # Server component
├── ProductComparisonSection.tsx       # Server component
├── ProductComparisonClient.tsx        # Client (tracking)
├── ReferencesSection.tsx              # Server component
└── types.ts                           # Shared TypeScript interfaces
```

**Rationale**: 
- Content rendering (80% of component) can be server-side
- Analytics tracking needs client-side wrapper
- Interactive elements (accordions) use client components from Radix UI

#### 3.2 Create Server Component Shell

```tsx
// src/components/knowledgebase/KnowledgebaseTemplate.tsx
import { ReactNode } from 'react';
import { KnowledgebaseClient } from './KnowledgebaseClient';
import { HeroSection } from './HeroSection';
import { BenefitsDrawbacksSection } from './BenefitsDrawbacksSection';
// ... other imports

export interface KnowledgebasePageProps {
  supplementName: string;
  currentPage: string;  // Remove onNavigate
  heroDescription: string;
  heroImageUrl?: string;
  // ... 30+ other props
}

export function KnowledgebaseTemplate(props: KnowledgebasePageProps) {
  // NO HOOKS - pure server component
  
  return (
    <KnowledgebaseClient supplementName={props.supplementName}>
      <div className="bg-background flex flex-col w-full min-h-screen">
        {/* Hero Section */}
        <HeroSection
          supplementName={props.supplementName}
          heroDescription={props.heroDescription}
          heroImageUrl={props.heroImageUrl}
        />
        
        {/* Main Content */}
        <div className="px-6 py-8 max-w-7xl mx-auto w-full">
          {/* Benefits & Drawbacks */}
          {props.benefits && (
            <BenefitsDrawbacksSection
              benefits={props.benefits}
              drawbacks={props.drawbacks}
              drawbacksIntro={props.drawbacksIntro}
              currentPage={props.currentPage}
            />
          )}
          
          {/* Research Grades */}
          {props.researchGrades && (
            <ResearchGradesSection
              researchGrades={props.researchGrades}
              currentPage={props.currentPage}
              references={props.references}
            />
          )}
          
          {/* Dosing */}
          {props.dosingRecommendations && (
            <DosingSection
              dosingRecommendations={props.dosingRecommendations}
              currentPage={props.currentPage}
            />
          )}
          
          {/* Product Comparison */}
          <ProductComparisonSection
            supplementName={props.supplementName}
          />
          
          {/* References */}
          {props.references && (
            <ReferencesSection references={props.references} />
          )}
        </div>
      </div>
    </KnowledgebaseClient>
  );
}
```

#### 3.3 Create Client Analytics Wrapper

```tsx
// src/components/knowledgebase/KnowledgebaseClient.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { useSupplementTracking } from '@/hooks/useAnalytics';
import { scrollDepthTracker } from '@/lib/analytics/scrollDepthTracker';

interface Props {
  supplementName: string;
  children: ReactNode;
}

export function KnowledgebaseClient({ supplementName, children }: Props) {
  // All analytics hooks HERE
  const { trackSection } = useSupplementTracking(supplementName);
  
  // Scroll depth tracking
  useEffect(() => {
    scrollDepthTracker.initialize(supplementName);
    return () => scrollDepthTracker.reset();
  }, [supplementName]);
  
  // Intersection observer for section tracking
  useEffect(() => {
    const elements = document.querySelectorAll(
      '[data-knowledgebase-card-benefits], [data-knowledgebase-card-drawbacks]'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const label = entry.target.getAttribute('data-knowledgebase-card-benefits') 
            ? 'Benefits' 
            : 'Drawbacks';
          trackSection(label);
        }
      });
    }, { threshold: 0.35 });
    
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [supplementName, trackSection]);
  
  // Just render children - no UI changes
  return <>{children}</>;
}
```

**Rationale**: 
- Wraps server-rendered content with client-side analytics
- No visual changes - pure tracking layer
- Children remain server components

#### 3.4 Remove onNavigate Dependencies

**Search and Replace** (20+ occurrences):

```tsx
// Before
function BenefitsDrawbacksSection({
  benefits,
  onNavigate,
  currentPage
}: Pick<KnowledgebasePageProps, 'benefits' | 'onNavigate' | 'currentPage'>) {
  const handleGlossaryNavigate = useCallback((key: string) => {
    if (!onNavigate) return;
    onNavigate(key);
  }, [onNavigate]);
  
  const linkedContent = autolinkGlossaryTerms(
    text, 
    handleGlossaryNavigate, 
    currentPage
  );
  // ...
}

// After
function BenefitsDrawbacksSection({
  benefits,
  currentPage
}: Pick<KnowledgebasePageProps, 'benefits' | 'currentPage'>) {
  // NO callback needed - autolinkGlossaryTerms now uses <Link>
  const linkedContent = autolinkGlossaryTerms(text, currentPage);
  // ...
}
```

**Files to update**:
- KnowledgebaseTemplate.tsx (remove from interface)
- All section components (remove from props)
- All usages of autolinkGlossaryTerms (remove onNavigate param)

#### 3.5 Update Product Comparison Section

**Remove "Compare All" button** (or make it a Link):

```tsx
// Before
<button onClick={() => onNavigate?.(`${supplementId}-comparison`)}>
  Compare All
</button>

// After Option 1: Remove button entirely
{/* Comparison pages not yet migrated */}

// After Option 2: Convert to Link
import Link from 'next/link';
<Link 
  href={`/${supplementId}-comparison`}
  className="btn-primary"
>
  Compare All
</Link>
```

**Decision**: Remove button for now, add back in Phase 5 when comparison pages are migrated.

#### 3.6 Test Individual Sections

Create test pages for each section:

```tsx
// app/test/benefits/page.tsx
import { BenefitsDrawbacksSection } from '@/components/knowledgebase/BenefitsDrawbacksSection';

export default function TestBenefitsPage() {
  return (
    <BenefitsDrawbacksSection
      benefits={[
        { icon: Heart, title: 'Test', description: 'Test description' }
      ]}
      drawbacks={[]}
      currentPage="test"
    />
  );
}
```

**Verify**:
- [ ] Section renders correctly
- [ ] Glossary links work
- [ ] Styling preserved
- [ ] No console errors

**Deliverable**: Fully refactored KnowledgebaseTemplate

---

### Step 4: Refactor Supplement Pages (1 day)

#### 4.1 Remove onNavigate Props

Update all 17 supplement page components:

```tsx
// Before
export function AshwagandhaPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  // ...
}

// After
export function AshwagandhaPageNewV2() {
  // No props needed - pages are self-contained
}
```

**Files**:
- AshwagandhaPageNewV2.tsx
- CalciumPageNewV2.tsx
- CaseinProteinPageNewV2.tsx
- CollagenPeptidesPageNewV2.tsx
- CreatinePageNewV2.tsx
- IronPageNewV2.tsx
- MagnesiumPageNewV2.tsx
- MultivitaminPageNewV2.tsx
- Omega3PageNewV2.tsx
- PrebioticsPageNewV2.tsx
- ProbioticsPageNewV2.tsx
- SulforaphanePageNewV2.tsx
- VitaminCPageNewV2.tsx
- VitaminDPageNewV2.tsx
- WheyProteinPageNewV2.tsx
- ZincPageNewV2.tsx
- BCAAsPageNewV2.tsx (if exists)

#### 4.2 Move Structured Data to Server

**Current** (Client-side):
```tsx
const structuredData = useStructuredData('ashwagandhav2');
// ...
{structuredData && <script type="application/ld+json">...</script>}
```

**New** (Server-side):
```tsx
// app/[slug]/page.tsx (already done in Phase 2)
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: '...',
    // ... metadata
  };
}

export default async function SupplementPage({ params }) {
  // Fetch structured data server-side
  const structuredData = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/structured-data/${params.slug}.json`
  ).then(res => res.json()).catch(() => null);
  
  return (
    <>
      {structuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <AshwagandhaPageNewV2 />
    </>
  );
}
```

**Benefit**: Structured data in initial HTML (better SEO)

#### 4.3 Remove useStructuredData Hook

Since structured data is now server-side, remove the hook:

```bash
# Remove from all supplement pages
grep -r "useStructuredData" src/components/*PageNewV2.tsx
# Update each file
```

#### 4.4 Update SEOHead Component

**Current**: Client-side meta tag injection via React Helmet

**New**: Next.js Metadata API (already in app/[slug]/page.tsx)

**Remove** from component files:
```tsx
// DELETE THIS
<SEOHead
  title="Ashwagandha: Evidence-Based Review"
  description="..."
  keywords="..."
/>
```

**Already handled** in `app/[slug]/page.tsx`:
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const route = getRouteByPath(`/${params.slug}`);
  return {
    title: `${route?.title} | Suppl.me`,
    description: `Evidence-based review of ${route?.title}`,
    // ...
  };
}
```

#### 4.5 Convert to Client Components (Temporarily)

Since supplement pages use `useStructuredData` hook currently:

```tsx
// src/components/AshwagandhaPageNewV2.tsx
'use client';  // Add this at top

import { KnowledgebaseTemplate } from './KnowledgebaseTemplate';
// ... rest of component

export function AshwagandhaPageNewV2() {
  // Remove useStructuredData - now passed from server
  // Remove onNavigate prop
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Ashwagandha",
    currentPage: "ashwagandhav2",
    // ... props
  };
  
  return <KnowledgebaseTemplate {...pageProps} />;
}
```

**Note**: Can convert back to server components in Phase 6 (data fetching optimization)

#### 4.6 Test Each Supplement Page

Navigate to each page and verify:
- [ ] Page renders without errors
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Glossary links work
- [ ] Analytics fire correctly
- [ ] Meta tags present in HTML source
- [ ] Structured data in HTML source

**Testing Script**:
```bash
# Test all supplement pages
curl -s http://localhost:3001/ashwagandha | grep -o '<title>.*</title>'
curl -s http://localhost:3001/creatine | grep -o '<title>.*</title>'
# ... test all 17 pages
```

**Deliverable**: All 17 supplement pages working in Next.js

---

### Step 5: Update Dynamic Route Handler (0.5 days)

#### 5.1 Enhance app/[slug]/page.tsx

**Current**:
```tsx
export default async function SupplementPage({ params }) {
  const route = getRouteByPath(`/${params.slug}`);
  const Component = COMPONENT_MAP[route.key];
  return <Component />;
}
```

**Enhanced**:
```tsx
import { Metadata } from 'next';
import { getRouteByPath, getSupplementRoutes } from '@/lib/route-adapter';
import { notFound } from 'next/navigation';

// Component mapping
const COMPONENT_MAP = {
  ashwagandhav2: lazy(() => import('@/components/AshwagandhaPageNewV2')),
  // ... 16 more
};

// Generate static params for all supplements
export async function generateStaticParams() {
  const routes = getSupplementRoutes();
  return routes.map((route) => ({
    slug: route.key.replace(/v2$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }): Promise<Metadata> {
  const route = getRouteByPath(`/${params.slug}`);
  
  if (!route) {
    return { title: 'Page Not Found' };
  }
  
  return {
    title: `${route.title} | Suppl.me`,
    description: `Evidence-based review of ${route.title} supplements`,
    keywords: `${route.title}, supplements, evidence-based`,
    openGraph: {
      title: `${route.title} | Suppl.me`,
      description: `Evidence-based review of ${route.title}`,
      type: 'article',
    },
  };
}

// Page component
export default async function SupplementPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const route = getRouteByPath(`/${params.slug}`);
  
  if (!route || !COMPONENT_MAP[route.key]) {
    notFound();
  }
  
  // Fetch structured data server-side
  const structuredDataUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/structured-data/${route.key}.json`;
  const structuredData = await fetch(structuredDataUrl, { cache: 'force-cache' })
    .then(res => res.ok ? res.json() : null)
    .catch(() => null);
  
  const Component = COMPONENT_MAP[route.key];
  
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <Component />
    </>
  );
}
```

**Features**:
- ✅ Static generation for all supplements
- ✅ Server-side metadata
- ✅ Server-side structured data
- ✅ 404 handling for invalid routes
- ✅ Proper TypeScript types

#### 5.2 Test Static Generation

```bash
npm run build
# Verify output shows:
# ○ /ashwagandha (Static)
# ○ /creatine (Static)
# ... all 17 pages
```

**Deliverable**: Production-ready dynamic routes

---

### Step 6: Verify Analytics Integration (0.5 days)

#### 6.1 Test GTM in Development

```tsx
// app/layout.tsx already has GTM
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        {children}
      </body>
    </html>
  );
}
```

**Test**:
1. Open http://localhost:3001/ashwagandha
2. Open DevTools → Console
3. Type `window.dataLayer`
4. Verify events:
   - `page_view` event fires
   - `supplement_view` event fires
   - Section tracking works on scroll

#### 6.2 Test Product Tracking

Visit product comparison section and verify:
- [ ] Product impressions fire on mount
- [ ] Product clicks fire on card click
- [ ] Retailer clicks fire on button click

#### 6.3 Test Glossary Link Tracking

Click glossary terms and verify:
- [ ] `glossary_link_click` event fires
- [ ] Event includes term name and source page

**Deliverable**: All analytics working

---

## 🧪 Testing Strategy

### Unit Testing (Optional for Phase 3)

**Skip for now** - focus on integration testing first

### Integration Testing

#### Test Checklist Per Page

For each of 17 supplement pages:

1. **Rendering**
   - [ ] Page loads without errors
   - [ ] All sections visible
   - [ ] Images load correctly
   - [ ] Proper spacing/layout

2. **SEO**
   - [ ] Unique `<title>` in HTML source
   - [ ] Meta description present
   - [ ] Structured data JSON-LD present
   - [ ] Canonical URL correct

3. **Navigation**
   - [ ] Header links work
   - [ ] Footer links work
   - [ ] Glossary terms are clickable
   - [ ] Glossary links go to correct pages

4. **Analytics**
   - [ ] Page view tracked
   - [ ] Supplement view tracked
   - [ ] Section scroll tracking works
   - [ ] Product interactions tracked

5. **Performance**
   - [ ] First Contentful Paint < 2s
   - [ ] Largest Contentful Paint < 3s
   - [ ] No layout shift
   - [ ] Smooth scrolling

### Testing Tools

```bash
# 1. Visual testing
open http://localhost:3001/ashwagandha

# 2. HTML source check
curl -s http://localhost:3001/ashwagandha > ashwagandha.html
grep "<title>" ashwagandha.html
grep "application/ld+json" ashwagandha.html

# 3. Build verification
npm run build
npm run start
# Test production build

# 4. SEO crawler simulation
npx seobility-cli http://localhost:3000/ashwagandha
```

---

## 📊 Success Criteria

### Phase 3 Complete When:

- [ ] All 17 supplement pages render correctly
- [ ] No `onNavigate` props remain in codebase
- [ ] KnowledgebaseTemplate is fully refactored
- [ ] Glossary autolinking uses Next.js `<Link>`
- [ ] Analytics tracking works on all pages
- [ ] All pages have unique HTML content
- [ ] Meta tags present in initial HTML
- [ ] Structured data present in initial HTML
- [ ] No TypeScript errors
- [ ] No React warnings in console
- [ ] No Next.js warnings in build
- [ ] Production build succeeds
- [ ] All pages accessible at correct URLs

### Performance Targets

- First Contentful Paint: < 2 seconds
- Largest Contentful Paint: < 3 seconds
- Time to Interactive: < 4 seconds
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 300ms

### SEO Targets

- Unique HTML content per page ✅
- Proper `<title>` tags ✅
- Meta descriptions ✅
- Structured data ✅
- Canonical URLs ✅
- Internal linking via `<a>` tags ✅

---

## 🚨 Risks and Mitigation

### Risk 1: Breaking Existing Functionality
**Probability**: HIGH  
**Impact**: HIGH

**Mitigation**:
- Test after each component refactor
- Keep v0.2 running for comparison
- Create rollback plan (git branches)
- Document all changes

### Risk 2: Analytics Data Loss
**Probability**: MEDIUM  
**Impact**: HIGH

**Mitigation**:
- Test analytics thoroughly
- Use GTM Preview mode
- Compare event counts with v0.2
- Keep event schemas identical

### Risk 3: Performance Regression
**Probability**: LOW  
**Impact**: MEDIUM

**Mitigation**:
- Measure before/after metrics
- Use Next.js built-in optimizations
- Lazy load heavy components
- Monitor bundle size

### Risk 4: SEO Issues Persist
**Probability**: LOW  
**Impact**: HIGH

**Mitigation**:
- Verify HTML content in source
- Test with Google's Rich Results Test
- Use Seobility crawler
- Compare with competitors

---

## 📅 Estimated Timeline

### Day 1: Planning and Utilities
- Morning: Complete dependency analysis (Step 1)
- Afternoon: Refactor utilities layer (Step 2)
- Evening: Begin KnowledgebaseTemplate refactor (Step 3.1-3.3)

### Day 2: KnowledgebaseTemplate
- Morning: Complete template refactor (Step 3.4-3.5)
- Afternoon: Test individual sections (Step 3.6)
- Evening: Begin supplement pages (Step 4.1-4.2)

### Day 3: Supplement Pages
- Morning: Complete supplement page refactors (Step 4.3-4.5)
- Afternoon: Test all 17 pages (Step 4.6)
- Evening: Update dynamic route handler (Step 5)

### Day 4: Testing and Verification
- Morning: Analytics testing (Step 6)
- Afternoon: Integration testing (all pages)
- Evening: Performance testing and optimization

### Buffer: +0.5 days for unexpected issues

**Total**: 3-4 days

---

## 📝 Documentation Updates Needed

After Phase 3 completion:

1. **Update QUICK_REFERENCE.md**
   - Remove onNavigate pattern
   - Add Next.js Link usage
   - Update component examples

2. **Update copilot-instructions.md**
   - Document new component structure
   - Update routing examples
   - Add server/client component rules

3. **Create MIGRATION_LOG.md**
   - Document all breaking changes
   - List deprecated patterns
   - Provide migration examples

4. **Update README.md**
   - Update architecture diagram
   - Add Next.js specific commands
   - Update deployment instructions

---

## 🎯 Next Steps (Phase 4 Preview)

After Phase 3 completes:

### Phase 4: Glossary Pages (2 days)
- Refactor GlossaryTemplate.tsx
- Convert 197 glossary term pages
- Set up dynamic routing for `/glossary/[term]`

### Phase 5: Comparison Pages (2-3 days)
- Refactor ProductComparisonWrapper.tsx
- Convert 17 comparison pages
- Set up dynamic routing for `/[supplement]-comparison`

### Phase 6: Static Pages (1 day)
- Convert About, Contact, Privacy, etc.
- Simple refactor (mostly static content)

---

## 💡 Key Learnings

### Do's
✅ Keep components as server components by default  
✅ Use client components only when necessary  
✅ Test incrementally after each change  
✅ Preserve analytics tracking  
✅ Document breaking changes  

### Don'ts
❌ Convert everything to client components  
❌ Skip testing between changes  
❌ Ignore TypeScript errors  
❌ Forget to update imports  
❌ Rush through refactoring  

---

## 📞 Support and Resources

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [Server/Client Components](https://nextjs.org/docs/app/building-your-application/rendering)
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

### Tools
- [Next.js DevTools](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Google Tag Manager Preview](https://tagmanager.google.com/)

---

**Last Updated**: November 23, 2025  
**Status**: Ready to execute  
**Confidence Level**: HIGH (comprehensive plan with clear steps)
