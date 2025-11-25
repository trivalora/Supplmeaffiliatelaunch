# Component Migration Map - Step 1 Analysis
## Next.js v0.3 Architecture Dependencies

**Date**: November 23, 2025  
**Status**: Step 1 - Dependency Analysis Complete  
**Next Step**: Begin Step 2 - Utilities Refactoring

---

## 📊 Executive Summary

### Component Inventory
- **Total Components**: 240+ (v0.2)
- **Supplement Pages**: 17 (*PageNewV2.tsx)
- **Glossary Pages**: 197 (glossary/*.tsx)
- **Comparison Pages**: 3 (ProductComparison.tsx, ProductComparisonWrapper.tsx, SupplementComparisonWidget.tsx)
- **Static Pages**: 9 (About, Contact, Legal, etc.)
- **Shared Components**: 50+ (Header, Footer, templates, UI components)

### Critical Components Analysis

| Component | Lines | Hooks | Complexity | Priority |
|-----------|-------|-------|------------|----------|
| KnowledgebaseTemplate.tsx | 1,220 | 15 | CRITICAL | P0 |
| ProductComparison.tsx | 1,126 | 8 | HIGH | P1 |
| LandingPage.tsx | 873 | 5 | MEDIUM | P2 |
| Header.tsx | 653 | 3 | LOW | P0 (DONE) |
| WhatToExpectSection.tsx | 567 | 2 | LOW | P1 |
| ProductPage.tsx | 558 | 6 | MEDIUM | P2 |

### Hook Usage Summary

**KnowledgebaseTemplate.tsx**:
- `useState`: 2 instances (tooltip state, accordion state)
- `useEffect`: 3 instances (analytics mount, scroll tracking, intersection observer)
- `useCallback`: 2 instances (glossary navigation handler)
- `useMemo`: 8 instances (autolinked content caching)
- `useProductTracking`: 1 instance (product impression tracking)
- `useAffiliateTooltip`: 1 instance (tooltip state)

**All Supplement Pages (17 total)**:
- `useStructuredData`: 17 instances (JSON-LD fetching)
- Pattern: All identical, can be batch migrated

---

## 🏗️ Dependency Graph

### Level 0: Root Layout (Complete ✅)
```
app/layout.tsx
├── GoogleTagManager (GTM)
├── Header (app/components/Header.tsx) ✅
└── Footer (app/components/Footer.tsx) ✅
```

### Level 1: Page Routes

#### Dynamic Supplement Route
```
app/[slug]/page.tsx
└── Component Mapping
    ├── AshwagandhaPageNewV2 ❌
    ├── CalciumPageNewV2 ❌
    ├── CaseinProteinPageNewV2 ❌
    ├── CollagenPeptidesPageNewV2 ❌
    ├── CreatinePageNewV2 ❌
    ├── CurcuminPageNewV2 ❌
    ├── IronPageNewV2 ❌
    ├── MagnesiumPageNewV2 ❌
    ├── MultivitaminPageNewV2 ❌
    ├── Omega3PageNewV2 ❌
    ├── PrebioticsPageNewV2 ❌
    ├── ProbioticsPageNewV2 ❌
    ├── SulforaphanePageNewV2 ❌
    ├── VitaminCPageNewV2 ❌
    ├── VitaminDPageNewV2 ❌
    ├── WheyProteinPageNewV2 ❌
    └── BCAAsPageNewV2 ❌
```

### Level 2: Shared Templates

#### KnowledgebaseTemplate Dependencies
```
KnowledgebaseTemplate.tsx (1,220 lines) ❌ CRITICAL
├── React Hooks
│   ├── useState (2x) - tooltip, accordion
│   ├── useEffect (3x) - analytics, scroll, observer
│   ├── useCallback (2x) - navigation handlers
│   ├── useMemo (8x) - content caching
│   └── useProductTracking - analytics
│
├── External Dependencies
│   ├── next/navigation (useRouter) ⚠️ PARTIAL
│   ├── lucide-react (icons) ✅
│   ├── ImageWithFallback ❌
│   ├── SectionImage, ProductImage ❌
│   ├── WhatToExpectSection ❌
│   ├── figma:asset (imgAmazonButton) ❌ NEEDS FIX
│   ├── IHerbBadgeLogoRgb ✅
│   └── ui/collapsible, ui/hover-card ✅
│
├── Utilities
│   ├── autolinkGlossaryTerms ❌ NEEDS REFACTOR
│   ├── getProductsBySupplementName ✅
│   ├── useAffiliateTooltip ❌
│   └── analytics (7 functions) ❌
│
└── Sub-components (Internal)
    ├── FootnotePopup
    ├── formatFootnotes
    ├── HeroLeftPanel
    ├── HeroRightPanel
    ├── HeroSection
    ├── BenefitsDrawbacksSection
    ├── ResearchGradesSection
    ├── DosingSection
    ├── BuyingGuideSection
    ├── SafetySection
    ├── WhatToExpectWrapper
    ├── FurtherReadingSection
    ├── ReferencesSection
    ├── RetailerButtons
    └── ProductComparisonSection
```

---

## 🔍 Critical Dependencies Deep Dive

### 1. autolinkGlossaryTerms (928 lines)

**Location**: `src/utils/glossaryAutolink.tsx`

**Current Implementation**:
```tsx
export function autolinkGlossaryTerms(
  text: string,
  onNavigate?: (key: string) => void,  // ❌ REMOVE
  currentPage?: string
): ReactNode
```

**Dependencies**:
- `onClick` handlers with `onNavigate()` callback
- `HoverCard` component from Radix UI
- `trackGlossaryLinkClick` analytics
- 197 glossary terms with variations
- GLOSSARY_DATA lookup

**Usage Count**: 20+ locations across:
- KnowledgebaseTemplate.tsx (8 usages)
- BenefitsDrawbacksSection
- ResearchGradesSection
- DosingSection
- SafetySection
- All supplement pages (indirect via template)

**Refactor Strategy**:
```tsx
// NEW: Use Next.js Link instead of onClick
export function autolinkGlossaryTerms(
  text: string,
  currentPage?: string  // Remove onNavigate
): ReactNode {
  // ... matching logic ...
  
  return (
    <Link href={`/glossary/${match.key}`}>
      <HoverCard>
        <HoverCardTrigger>{match.text}</HoverCardTrigger>
        <HoverCardContent>{glossaryData.summary}</HoverCardContent>
      </HoverCard>
    </Link>
  );
}
```

**Impact**: HIGH - Used everywhere, fundamental navigation change

---

### 2. useStructuredData Hook

**Location**: `src/hooks/useStructuredData.ts`

**Current Implementation**:
```tsx
export function useStructuredData(pageKey: string | null | undefined) {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    if (!pageKey) return;
    
    fetch(`/structured-data/${pageKey}.json`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => setData(null));
  }, [pageKey]);
  
  return data;
}
```

**Usage**: All 17 supplement pages
- Fetches JSON-LD on client mount
- Used for `<script type="application/ld+json">`

**Refactor Strategy**:
```tsx
// REMOVE hook entirely
// Move to server-side in app/[slug]/page.tsx

export default async function SupplementPage({ params }) {
  // Server-side fetch
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
      <ComponentHere />
    </>
  );
}
```

**Impact**: MEDIUM - Simple find/replace, affects 17 files

---

### 3. Analytics Tracking

**Location**: `src/utils/analytics.ts`, `src/hooks/useAnalytics.ts`

**Tracking Functions Used**:
```tsx
// In KnowledgebaseTemplate.tsx
trackSupplementView(supplementName)
trackSupplementSection(supplementName, section)
trackAffiliateClick(retailer, supplementName, location)
trackRetailerClick(retailer, supplementName, location)
trackProductClick(name, brand, retailer, supplement, position, location)
trackCertificationClick(cert, url, supplement)
trackOutboundLink(url, text, type, supplement)
```

**Current Pattern**:
```tsx
// Component level
useEffect(() => {
  trackSupplementView(supplementName);
  trackPageView(supplementName, 'supplement');
}, [supplementName]);
```

**Refactor Strategy**:
```tsx
// Create client wrapper
'use client';
export function AnalyticsWrapper({ supplementName, children }) {
  useEffect(() => {
    trackSupplementView(supplementName);
    trackPageView(supplementName, 'supplement');
  }, [supplementName]);
  
  return <>{children}</>;
}

// In server component
export function AshwagandhaPageNewV2() {
  return (
    <AnalyticsWrapper supplementName="Ashwagandha">
      {/* Server-rendered content */}
    </AnalyticsWrapper>
  );
}
```

**Impact**: MEDIUM - Wrapper pattern, preserves all tracking

---

### 4. Image Imports (figma:asset)

**Count**: 13 total
- KnowledgebaseTemplate: 1 (Amazon button)
- Header: 1 (logo) ✅ FIXED
- Footer: 1 (footer logo) ✅ FIXED
- AboutPage: 3 (team photos)
- Other components: 7

**Current Pattern**:
```tsx
import imgAmazonButton from "figma:asset/2f3309...png";
<img src={imgAmazonButton} alt="Amazon" />
```

**Refactor Strategy**:
```tsx
// Option 1: Direct path
<img src="/images/amazon-button.png" alt="Amazon" />

// Option 2: Next.js Image (preferred)
import Image from 'next/image';
<Image 
  src="/images/amazon-button.png"
  alt="Amazon"
  width={120}
  height={40}
/>
```

**Files to Update**:
- KnowledgebaseTemplate.tsx
- AboutPage.tsx
- (10 more files)

**Impact**: LOW - Simple find/replace

---

### 5. onNavigate Prop Drilling

**Count**: 20+ occurrences in KnowledgebaseTemplate.tsx

**Current Flow**:
```
App.tsx
  ├── onNavigate={handleNavigation}
  └── AshwagandhaPageNewV2
      ├── onNavigate={onNavigate}
      └── KnowledgebaseTemplate
          ├── BenefitsDrawbacksSection
          │   └── autolinkGlossaryTerms(text, onNavigate)
          ├── ResearchGradesSection
          │   └── autolinkGlossaryTerms(text, onNavigate)
          └── ProductComparisonSection
              └── <button onClick={() => onNavigate('comparison')}>
```

**Refactor Strategy**:
```tsx
// REMOVE all onNavigate props
// Convert buttons to Links
import Link from 'next/link';

// Before
<button onClick={() => onNavigate('ashwagandha-comparison')}>
  Compare All
</button>

// After
<Link href="/ashwagandha-comparison">
  <button>Compare All</button>
</Link>
```

**Impact**: HIGH - Touches every level of component tree

---

## 📋 Migration Checklist by File

### Phase 3.1: Core Template Refactor

#### KnowledgebaseTemplate.tsx
- [ ] Add `'use client'` directive
- [ ] Remove `onNavigate` from interface (line ~290)
- [ ] Remove `onNavigate` from all sub-component props (20 locations)
- [ ] Update `autolinkGlossaryTerms` calls (remove 2nd param, 8 locations)
- [ ] Replace `figma:asset` import with static path (1 location)
- [ ] Convert "Compare All" button to Link or remove (1 location)
- [ ] Split into server/client components (optional, Step 3.3)
- [ ] Test all sections render correctly

**Estimated Time**: 3-4 hours

---

### Phase 3.2: Supplement Pages (Batch Operation)

All 17 files follow identical pattern:

#### AshwagandhaPageNewV2.tsx (and 16 others)
- [ ] Remove `onNavigate` prop from function signature
- [ ] Remove `onContactClick` prop (unused in Next.js)
- [ ] Remove `onLegalClick` prop (unused in Next.js)
- [ ] Remove `useStructuredData` import
- [ ] Remove `useStructuredData` hook call
- [ ] Remove structured data `<script>` injection
- [ ] Remove `onNavigate` from template props
- [ ] Keep `'use client'` directive (uses KnowledgebaseTemplate)
- [ ] Test page renders

**Files to Update**:
1. AshwagandhaPageNewV2.tsx
2. BCAAsPageNewV2.tsx
3. CalciumPageNewV2.tsx
4. CaseinProteinPageNewV2.tsx
5. CollagenPeptidesPageNewV2.tsx
6. CreatinePageNewV2.tsx
7. CurcuminPageNewV2.tsx
8. IronPageNewV2.tsx
9. MagnesiumPageNewV2.tsx
10. MultivitaminPageNewV2.tsx
11. Omega3PageNewV2.tsx
12. PrebioticsPageNewV2.tsx
13. ProbioticsPageNewV2.tsx
14. SulforaphanePageNewV2.tsx
15. VitaminCPageNewV2.tsx
16. VitaminDPageNewV2.tsx
17. WheyProteinPageNewV2.tsx

**Estimated Time**: 2-3 hours (batch scripting possible)

---

### Phase 3.3: Utilities Refactoring

#### src/utils/glossaryAutolink.tsx → src/lib/glossaryAutolink.tsx
- [ ] Move file to new location
- [ ] Remove `onNavigate` parameter from `autolinkGlossaryTerms()`
- [ ] Replace `onClick` handlers with `<Link>` components
- [ ] Update all imports (20+ files)
- [ ] Test glossary links work
- [ ] Verify hover cards still function

**Estimated Time**: 2 hours

#### src/utils/analytics.ts → src/lib/analytics/
- [ ] Create `src/lib/analytics/` directory
- [ ] Split into modular files:
  - `index.ts` (exports)
  - `tracking.ts` (pure functions)
  - `gtm.ts` (dataLayer push)
  - `client-hooks.ts` (useEffect wrappers)
- [ ] Update all imports (50+ files)
- [ ] Test analytics fire correctly

**Estimated Time**: 1 hour

#### src/utils/supplementImages.ts → src/lib/supplementImages.ts
- [ ] Move file
- [ ] Convert to metadata format:
```tsx
export const SUPPLEMENT_IMAGES = {
  ashwagandhav2: {
    src: '/optimized/hash-640.webp',
    width: 640,
    height: 480,
    alt: 'Ashwagandha root'
  },
  // ... 16 more
};
```
- [ ] Update all imports
- [ ] Test images load

**Estimated Time**: 1 hour

---

### Phase 3.4: Image Fixes

#### figma:asset Replacements (13 files)
- [ ] KnowledgebaseTemplate.tsx (Amazon button)
- [ ] AboutPage.tsx (3 team photos)
- [ ] (9 other files)

**Pattern**:
```tsx
// Before
import imgAmazonButton from "figma:asset/2f3309...png";

// After
const imgAmazonButton = "/images/amazon-button.png";
// OR
import Image from 'next/image';
```

**Estimated Time**: 1 hour

---

## 🧪 Testing Checklist

### Per Component Testing

For each refactored component:

1. **Build Check**
   ```bash
   npm run build
   # Must succeed without errors
   ```

2. **TypeScript Check**
   ```bash
   npx tsc --noEmit
   # No errors
   ```

3. **Runtime Check**
   - Navigate to page
   - All sections render
   - No console errors
   - No React warnings

4. **SEO Check**
   ```bash
   curl -s http://localhost:3001/ashwagandha | grep "<title>"
   # Unique title present
   ```

5. **Analytics Check**
   - Open DevTools
   - Check `window.dataLayer`
   - Verify events fire

---

## 📊 Migration Priority Matrix

### P0 - CRITICAL (Start immediately)
- **KnowledgebaseTemplate.tsx** - Blocks all supplement pages
- **glossaryAutolink.tsx** - Used everywhere
- **Dynamic route handler** - Core routing

### P1 - HIGH (Week 1)
- **17 Supplement Pages** - Main content
- **Analytics utilities** - Track everything
- **Image imports** - Visual issues

### P2 - MEDIUM (Week 2)
- **Glossary pages** (197 files)
- **Comparison pages** (3 files)
- **WhatToExpectSection**

### P3 - LOW (Week 2-3)
- **Static pages** (About, Contact, etc.)
- **ProductPage** component
- **LandingPage** component

---

## 🚨 Breaking Changes Log

### Removed Props
- `onNavigate?: (page: string) => void` - All components
- `onContactClick?: () => void` - Supplement pages
- `onLegalClick?: () => void` - Supplement pages

### Removed Hooks
- `useStructuredData(pageKey)` - Replaced with server-side fetch

### Changed Functions
- `autolinkGlossaryTerms(text, onNavigate, currentPage)` → `autolinkGlossaryTerms(text, currentPage)`

### File Moves
- `src/utils/` → `src/lib/`
- All utility files relocated

### Import Changes
- `from '../utils/analytics'` → `from '@/lib/analytics'`
- `from '../utils/glossaryAutolink'` → `from '@/lib/glossaryAutolink'`
- All relative imports → absolute with `@/` alias

---

## 📅 Estimated Timeline

### Step 2: Utilities Refactoring (0.5 days)
- Move utils → lib: 1 hour
- Update imports: 1 hour
- Refactor glossaryAutolink: 2 hours
- Test: 30 min

### Step 3: KnowledgebaseTemplate (1 day)
- Remove onNavigate: 2 hours
- Fix image imports: 1 hour
- Split server/client: 3 hours
- Test: 2 hours

### Step 4: Supplement Pages (1 day)
- Batch refactor 17 files: 3 hours
- Update dynamic route: 2 hours
- Test all pages: 3 hours

### Step 5: Integration Testing (0.5 days)
- Full site testing: 2 hours
- Analytics verification: 1 hour
- SEO validation: 1 hour

**Total Step 1 Analysis**: Complete ✅  
**Next Steps Ready**: Yes ✅  
**Ready to Execute Step 2**: Yes ✅

---

## 📝 Notes for Step 2

### Key Actions
1. Create `src/lib/` directory
2. Move all files from `src/utils/`
3. Update `tsconfig.json` path aliases
4. Refactor `glossaryAutolink.tsx` (remove onNavigate)
5. Test imports across codebase

### Quick Wins
- Path alias setup (15 min)
- Directory restructure (10 min)
- Batch import updates (script)

### Potential Issues
- Circular dependencies (check imports)
- Missing type definitions (add as needed)
- Build cache (clear `.next/` if issues)

---

**Status**: Step 1 Complete ✅  
**Confidence**: HIGH  
**Ready for Step 2**: YES  
**Estimated Step 2 Duration**: 4 hours
