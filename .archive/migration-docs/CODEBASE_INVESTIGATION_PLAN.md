# Comprehensive Codebase Investigation Plan
## v0.2 (React/Vite) → v0.3 (Next.js 16) Migration Audit

**Created:** November 24, 2025  
**Status:** Investigation Plan  
**Objective:** Thorough debugging and validation of the Next.js migration

---

## 📋 Executive Summary

This document outlines a **7-phase systematic investigation** of the v0.3 codebase to identify:
- Migration completeness gaps
- Runtime errors and build issues
- Performance bottlenecks
- Architecture inconsistencies
- Missing features from v0.2
- TypeScript/ESLint violations
- SEO and analytics issues

**Estimated Time:** 2-3 days for complete investigation  
**Current Build Status:** ✅ Passing (2,108 static pages)  
**Migration Completion:** ~95% (per MIGRATION_COMPLETE.md)

---

## Phase 1: Build & Dependency Analysis
**Duration:** 1-2 hours  
**Priority:** CRITICAL

### 1.1 Build System Validation
**Objectives:**
- [ ] Verify clean production build
- [ ] Check for any build warnings
- [ ] Validate all 2,108 pages generate correctly
- [ ] Test dev server stability

**Commands to Run:**
```bash
# Clean build
rm -rf .next node_modules package-lock.json
npm install
npm run build

# Check build output
ls -la .next/server/app/
ls -la .next/static/

# Verify static generation
cat .next/BUILD_ID
```

**What to Check:**
- Build completes without errors ✅
- No TypeScript compilation errors
- No missing module warnings
- All routes generate static HTML
- Bundle size reasonable (< 5MB total)
- No circular dependencies

**Files to Review:**
- `next.config.mjs` - Configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript settings
- `.next/build-manifest.json` - Generated bundles

---

### 1.2 Dependency Audit
**Objectives:**
- [ ] Check for outdated packages
- [ ] Identify unused dependencies
- [ ] Verify peer dependency compatibility
- [ ] Check for security vulnerabilities

**Commands:**
```bash
# Check for updates
npm outdated

# Security audit
npm audit

# Find unused dependencies
npx depcheck

# Check bundle size
npm run analyze  # If available
```

**Critical Dependencies to Verify:**
- `next`: 16.0.3 (latest stable?)
- `react`: 19.2.0 (latest, may have breaking changes)
- `react-dom`: 19.2.0
- `typescript`: 5.9.3
- `tailwindcss`: 4.1.17 (v4 is major version, check compatibility)

**Red Flags:**
- Multiple versions of same package
- Deprecated packages
- High/critical security vulnerabilities
- Missing peer dependencies

---

### 1.3 TypeScript Configuration Review
**Objectives:**
- [ ] Validate tsconfig.json settings
- [ ] Check path aliases work correctly
- [ ] Verify strict mode compliance
- [ ] Identify any `@ts-ignore` or `any` types

**Commands:**
```bash
# Type check entire codebase
npx tsc --noEmit

# Find all @ts-ignore comments
grep -r "@ts-ignore" src/ app/

# Find all 'any' types
grep -r ": any" src/ app/
```

**Files to Review:**
- `tsconfig.json` - Main config
- `next-env.d.ts` - Next.js types
- `src/types/*.ts` - Custom type definitions

**Issues Identified So Far:**
- ⚠️ Tailwind CSS v4 lint warnings (minor - can be ignored or fixed in bulk)
- ✅ No TypeScript compilation errors reported

---

## Phase 2: Routing & Navigation Analysis
**Duration:** 2-3 hours  
**Priority:** CRITICAL

### 2.1 Route Structure Validation
**Objectives:**
- [ ] Verify all v0.2 routes migrated to v0.3
- [ ] Check for broken links
- [ ] Validate dynamic route params
- [ ] Test 404 handling

**Routes to Verify:**
1. **Static Routes:**
   - `/` (Landing page)
   - `/about`
   - `/contact`
   - `/glossary`
   - `/privacy-policy`
   - `/terms-of-service`
   - `/cookie-policy`
   - `/legal-notice`
   - `/partner`

2. **Dynamic Routes:**
   - `/[slug]` - 17 supplement pages + 17 comparison pages
   - `/glossary/[term]` - 198 glossary terms
   - `/comparison/[supplement]` - Product comparison pages

3. **Product Detail Routes:**
   - `/product/[id]` - 1,867 product detail pages (if applicable)

**Commands:**
```bash
# List all generated static pages
find .next/server/app -name "*.html" | wc -l

# Check routes.config.ts
cat src/routes.config.ts | grep "key:" | wc -l

# Test dynamic routes
npm run dev
# Then manually visit:
# http://localhost:3000/ashwagandha
# http://localhost:3000/glossary/bioavailability
# http://localhost:3000/vitamin-d-comparison
```

**Files to Review:**
- `src/routes.config.ts` - Route definitions (2,468 lines!)
- `app/[slug]/page.tsx` - Dynamic supplement pages
- `app/glossary/[term]/page.tsx` - Glossary pages
- `app/lib/route-adapter.ts` - Route mapping logic
- `app/sitemap.ts` - Sitemap generation

**What to Check:**
- All v0.2 routes have equivalent in v0.3
- No duplicate routes
- `generateStaticParams()` returns correct slugs
- Path aliases work (`/ashwagandha` not `/ashwagandhav2`)
- Metadata generates correctly

---

### 2.2 Navigation Components Audit
**Objectives:**
- [ ] Test header navigation
- [ ] Verify dropdown functionality
- [ ] Check mobile menu
- [ ] Test breadcrumbs (if applicable)

**Components to Test:**
- `app/components/Header.tsx` - Server component
- `app/components/HeaderClient.tsx` - Client component
- `src/components/Footer.tsx` - Footer navigation
- `src/components/SearchResults.tsx` - Search functionality

**Manual Testing Checklist:**
- [ ] Header appears on all pages
- [ ] Logo links to home
- [ ] Knowledgebase dropdown opens/closes
- [ ] All supplement links work
- [ ] Glossary link works
- [ ] About Us link works
- [ ] Mobile hamburger menu works
- [ ] Dark mode toggle works
- [ ] Search bar exists (⚠️ identified as missing in MIGRATION_GAPS_ANALYSIS.md)

---

### 2.3 Link Integrity Check
**Objectives:**
- [ ] Find all internal links
- [ ] Identify broken links
- [ ] Check external links open correctly

**Commands:**
```bash
# Find all Link components
grep -r "next/link" app/ src/

# Find all href attributes
grep -r "href=" app/ src/ | grep -v "node_modules"

# Check for hardcoded URLs
grep -r "https://suppl.me" src/ app/
```

**Tools:**
```bash
# Install link checker (if not already)
npm install -g broken-link-checker

# Run after starting dev server
blc http://localhost:3000 -ro
```

---

## Phase 3: Component Architecture Review
**Duration:** 3-4 hours  
**Priority:** HIGH

### 3.1 Server vs Client Component Analysis
**Objectives:**
- [ ] Verify correct use of 'use client' directive
- [ ] Check for unnecessary client components
- [ ] Validate data fetching patterns
- [ ] Identify hydration issues

**Commands:**
```bash
# Find all client components
grep -r "'use client'" app/ src/

# Find useState/useEffect in server components (should be none)
grep -r "useState\|useEffect" app/ | grep -v "'use client'"

# Count client vs server components
echo "Client components:"
grep -r "'use client'" app/ src/ | wc -l
echo "Total components:"
find app/ src/ -name "*.tsx" | wc -l
```

**Files to Review:**
- `app/layout.tsx` - Root layout (server)
- `app/page.tsx` - Home page (server)
- `app/components/Header.tsx` - Header (server)
- `app/components/HeaderClient.tsx` - Interactive header (client)
- All page components in `app/[slug]/page.tsx`

**Best Practices to Check:**
- Server components fetch data
- Client components handle interactivity
- No async client components
- Props serializable (no functions passed to server components)

---

### 3.2 Template Component Validation
**Objectives:**
- [ ] Test KnowledgebaseTemplate
- [ ] Test GlossaryTemplate
- [ ] Verify ProductComparisonWrapper
- [ ] Check responsive layouts

**Key Templates:**
1. **KnowledgebaseTemplate** (`src/components/KnowledgebaseTemplate.tsx`)
   - Used by all 17 supplement pages
   - Should have: hero, evidence, dosing, retailers, FAQs
   
2. **GlossaryTemplate** (`src/components/GlossaryTemplate.tsx`)
   - Used by all 198 glossary terms
   - Should have: term, definition, expanded explanation
   
3. **ProductComparisonWrapper** (`src/components/ProductComparisonWrapper.tsx`)
   - Used by 17 comparison pages
   - Should have: price comparison, retailer links, filters

**Test Cases:**
- [ ] All props render correctly
- [ ] Images load properly
- [ ] Links navigate correctly
- [ ] Analytics events fire
- [ ] Mobile responsive
- [ ] Dark mode works

---

### 3.3 Shared Component Audit
**Objectives:**
- [ ] Review all UI components
- [ ] Check for duplicate components
- [ ] Verify component exports
- [ ] Test edge cases

**Components to Review:**
- `src/components/ui/*` - ShadCN components
- `src/components/ResponsivePicture.tsx` - Image component
- `src/components/DarkModeToggle.tsx` - Theme switcher
- `src/components/ErrorBoundary.tsx` - Error handling
- `src/components/AnalyticsProvider.tsx` - Analytics wrapper

**What to Check:**
- No unused components
- All imports resolve
- Props typed correctly
- Accessible (ARIA labels)
- Performance optimized (React.memo where appropriate)

---

## Phase 4: Data & Content Validation
**Duration:** 2-3 hours  
**Priority:** HIGH

### 4.1 Static Data Integrity
**Objectives:**
- [ ] Verify routes.config.ts data
- [ ] Check glossary terms complete
- [ ] Validate supplement data
- [ ] Test image mappings

**Files to Audit:**
- `src/routes.config.ts` (2,468 lines) - All route definitions
- `src/lib/supplementImages.ts` - Image path mappings
- `src/lib/glossaryAutolink.tsx` - Auto-linking logic
- Any JSON data files in `public/` or `data/`

**Commands:**
```bash
# Count routes
cat src/routes.config.ts | grep "key:" | wc -l

# Check for duplicate keys
cat src/routes.config.ts | grep "key:" | sort | uniq -d

# Verify all images exist
ls public/images/supplements/ | wc -l
ls public/optimized/ | wc -l
```

**Data Validation:**
- [ ] All supplement images exist
- [ ] No broken image paths
- [ ] Glossary terms match routes
- [ ] No missing descriptions
- [ ] URLs properly formatted

---

### 4.2 Image System Review
**Objectives:**
- [ ] Check Next.js Image optimization
- [ ] Verify ResponsivePicture usage
- [ ] Test image loading performance
- [ ] Validate WebP/AVIF formats

**Image Locations:**
- `/public/images/supplements/` - Supplement images
- `/public/images/glossary/` - Glossary images (if any)
- `/public/optimized/` - Pre-optimized images from v0.2
- `/.next/static/media/` - Next.js optimized images

**Commands:**
```bash
# Check image formats
find public/images -name "*.webp" | wc -l
find public/images -name "*.avif" | wc -l
find public/images -name "*.png" | wc -l
find public/images -name "*.jpg" | wc -l

# Check image sizes
du -sh public/images/
du -sh public/optimized/
```

**Issues to Find:**
- ❌ `unoptimized` flag in Image components (identified in HeaderClient)
- Missing alt text
- Oversized images (> 500KB)
- Wrong aspect ratios
- 404 images

---

### 4.3 Content Migration Verification
**Objectives:**
- [ ] Compare v0.2 vs v0.3 page content
- [ ] Check for missing sections
- [ ] Verify HTML entity decoding
- [ ] Test glossary auto-linking

**Manual Comparison:**
Pick 3-5 pages from each category and compare:
1. **Supplement Pages:** Vitamin D, Omega-3, Magnesium
2. **Glossary Terms:** Bioavailability, Meta-Analysis, RCT
3. **Static Pages:** About, Contact, Privacy Policy

**What to Check:**
- Same content depth
- No missing paragraphs
- Proper formatting
- Links work
- Images match
- SEO metadata present

---

## Phase 5: Feature Completeness Check
**Duration:** 2-3 hours  
**Priority:** CRITICAL

### 5.1 Search Functionality
**Status:** ⚠️ **MISSING** (per MIGRATION_GAPS_ANALYSIS.md)

**Objectives:**
- [ ] Implement SearchBar component in HeaderClient
- [ ] Integrate SearchResults component
- [ ] Test search filtering
- [ ] Add search analytics

**v0.2 Features to Port:**
- Animated search expansion (24px → 320px)
- Live filtering of supplements
- Search overlay backdrop
- Click-outside to close
- Clear/X button
- Focus management

**Files to Create/Modify:**
- `app/components/HeaderClient.tsx` - Add SearchBar
- Use existing `src/components/SearchResults.tsx`
- Add search state management

**Testing:**
- [ ] Search expands on click
- [ ] Results filter as you type
- [ ] Click result navigates
- [ ] Click X clears and closes
- [ ] Click backdrop closes
- [ ] Mobile responsive

---

### 5.2 Analytics System Audit
**Objectives:**
- [ ] Verify GTM container loads
- [ ] Test all tracking events
- [ ] Check dataLayer structure
- [ ] Validate GA4 integration

**Files to Review:**
- `src/lib/analytics.ts` - All tracking functions
- `src/analytics/AnalyticsProvider.tsx` - GTM wrapper
- `app/layout.tsx` - GTM script injection
- `src/gtm-container-complete.json` - GTM configuration

**Events to Test:**
```typescript
// Page views
trackPageView('Vitamin D', 'supplement')

// User interactions
trackSupplementSection('Omega-3', 'benefits')
trackAccordionToggle('What to Expect', true)

// External clicks
trackOutboundLink(url, 'Buy Now', 'affiliate', 'vitamin-d')
trackRetailerClick('iHerb', url, 'magnesium', 15.99)
trackCertificationClick('USP', url, 'vitamin-c')

// Product events
trackProductClick(name, brand, retailer, price, supplement)
trackProductImpression(name, brand, retailer, price)

// Navigation
trackNavigationClick('Header', 'Knowledgebase', '/ashwagandha')
trackGlossaryLinkClick('bioavailability', '/glossary/bioavailability')

// Search
trackSearch('vitamin d', 5)  // query, results count

// Session
trackSessionStart()
trackSessionEnd()
trackEngagementTime(120)  // seconds
```

**What to Check:**
- [ ] GTM container ID correct (GTM-NQWRNKFT)
- [ ] GA4 measurement ID correct (G-JHCPJYM37R)
- [ ] All events push to dataLayer
- [ ] No console errors
- [ ] Events fire on correct triggers

**Manual Testing:**
```javascript
// In browser console
console.log(window.dataLayer)
console.log(window.google_tag_manager)

// Track test event
window.dataLayer.push({ event: 'test', data: 'hello' })
```

---

### 5.3 SEO & Metadata Validation
**Objectives:**
- [ ] Check meta tags on all pages
- [ ] Verify Open Graph tags
- [ ] Test structured data
- [ ] Validate sitemap generation

**Files to Review:**
- `app/layout.tsx` - Root metadata
- `app/[slug]/page.tsx` - Dynamic metadata
- `app/sitemap.ts` - Sitemap generator
- `scripts/web-build/build-structured-data.mjs` - JSON-LD

**Commands:**
```bash
# Generate sitemap
npm run build
cat public/sitemap.xml | head -50

# Check structured data
ls public/structured-data/
cat public/structured-data/vitamin-d.json

# Validate JSON-LD
curl https://validator.schema.org/
```

**What to Check:**
- [ ] Title tags unique and descriptive
- [ ] Meta descriptions < 160 characters
- [ ] OG images exist and load
- [ ] Canonical URLs correct
- [ ] Sitemap includes all 2,108 URLs
- [ ] robots.txt configured
- [ ] Structured data validates

**Testing Tools:**
- Google Rich Results Test
- Facebook Sharing Debugger
- Twitter Card Validator
- Schema.org Validator

---

### 5.4 Dark Mode Implementation
**Objectives:**
- [ ] Test theme switching
- [ ] Verify all components support dark mode
- [ ] Check localStorage persistence
- [ ] Validate CSS variables

**Files to Review:**
- `src/components/DarkModeToggle.tsx`
- `src/styles/globals.css` - CSS variables
- `app/layout.tsx` - Theme provider

**Test Cases:**
- [ ] Toggle switches theme instantly
- [ ] Theme persists on reload
- [ ] All text readable in both modes
- [ ] Images don't look washed out
- [ ] No flash of unstyled content (FOUC)

**CSS Variables to Check:**
```css
/* Light mode */
--background: #ffffff;
--foreground: #1a1a1a;
--primary: #047857;

/* Dark mode */
--background: #1a1a1a;
--foreground: #ffffff;
--primary: #10b981;
```

---

## Phase 6: Performance Analysis
**Duration:** 2-3 hours  
**Priority:** MEDIUM

### 6.1 Bundle Size Analysis
**Objectives:**
- [ ] Measure total bundle size
- [ ] Identify large chunks
- [ ] Find code splitting opportunities
- [ ] Check for duplicate modules

**Commands:**
```bash
# Analyze bundle
npm run analyze  # If script exists

# Or manually inspect
ls -lh .next/static/chunks/
du -sh .next/static/chunks/*

# Check page sizes
find .next/server/app -name "*.html" -exec du -sh {} \;
```

**Targets:**
- Total JS: < 500KB gzipped
- Initial load: < 200KB
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

**Optimization Opportunities:**
- Lazy load components
- Code split by route
- Tree shake unused code
- Compress images further
- Use dynamic imports

---

### 6.2 Image Loading Performance
**Objectives:**
- [ ] Test image lazy loading
- [ ] Measure Largest Contentful Paint (LCP)
- [ ] Check image format efficiency
- [ ] Verify responsive images

**Tools:**
```bash
# Chrome DevTools Lighthouse
# Run on 3-5 key pages

# Image analysis
npm run images  # If optimization script exists
```

**Metrics to Track:**
- LCP: < 2.5s
- Image formats: WebP > AVIF > PNG/JPG
- Responsive srcset generated
- Loading="lazy" on below-fold images
- Priority="high" on hero images

**Issues Identified:**
- ⚠️ `unoptimized` flag in HeaderClient images
- Need to verify ResponsivePicture usage

---

### 6.3 Runtime Performance
**Objectives:**
- [ ] Profile React rendering
- [ ] Find unnecessary re-renders
- [ ] Check for memory leaks
- [ ] Test scroll performance

**Tools:**
- React DevTools Profiler
- Chrome Performance tab
- Lighthouse Performance audit

**What to Check:**
- [ ] No layout shifts (CLS < 0.1)
- [ ] Smooth scrolling (60 FPS)
- [ ] Fast interactions (< 100ms)
- [ ] No memory leaks on navigation
- [ ] Efficient event listeners

**Common Issues:**
- Missing React.memo
- Inline function props
- Large context re-renders
- Unoptimized images
- Heavy third-party scripts

---

## Phase 7: Error Handling & Edge Cases
**Duration:** 1-2 hours  
**Priority:** MEDIUM

### 7.1 Error Boundary Testing
**Objectives:**
- [ ] Test error boundaries
- [ ] Check 404 page
- [ ] Verify error logging
- [ ] Test fallback UI

**Files to Review:**
- `src/components/ErrorBoundary.tsx`
- `app/not-found.tsx` (if exists)
- `app/error.tsx` (if exists)

**Test Cases:**
- [ ] Navigate to /nonexistent-page
- [ ] Trigger runtime error in component
- [ ] Test network error handling
- [ ] Check error analytics events

---

### 7.2 Browser Compatibility
**Objectives:**
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Check mobile browsers
- [ ] Verify polyfills
- [ ] Test older browser versions

**Browsers to Test:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest + iOS)
- Samsung Internet (Android)

**Features to Verify:**
- CSS Grid/Flexbox
- CSS Variables
- Dynamic imports
- IntersectionObserver
- ResizeObserver

---

### 7.3 Accessibility Audit
**Objectives:**
- [ ] Run automated accessibility tests
- [ ] Check keyboard navigation
- [ ] Verify screen reader support
- [ ] Test color contrast

**Tools:**
```bash
# Install axe DevTools extension
# Or use Lighthouse accessibility audit

# Check ARIA labels
grep -r "aria-" app/ src/
```

**WCAG 2.1 AA Checklist:**
- [ ] All images have alt text
- [ ] Color contrast ≥ 4.5:1
- [ ] Keyboard accessible
- [ ] Focus indicators visible
- [ ] Semantic HTML
- [ ] Skip to main content link

---

## Investigation Outputs

### Deliverables:

1. **INVESTIGATION_FINDINGS.md**
   - All issues discovered
   - Severity ratings (Critical/High/Medium/Low)
   - Recommended fixes
   - Timeline estimates

2. **PERFORMANCE_REPORT.md**
   - Bundle size breakdown
   - Page load metrics
   - Optimization opportunities
   - Before/after comparisons

3. **FEATURE_PARITY_MATRIX.md**
   - v0.2 vs v0.3 feature comparison
   - Missing features list
   - Implementation priority
   - Effort estimates

4. **TECHNICAL_DEBT_LOG.md**
   - Code quality issues
   - Refactoring opportunities
   - Deprecated patterns
   - Future improvements

5. **TEST_PLAN.md**
   - Manual test cases
   - Automated test setup
   - Regression test suite
   - CI/CD integration

---

## Phase Execution Order

### Day 1: Foundation (Phases 1-2)
**Morning (4 hours):**
- Phase 1.1: Build validation
- Phase 1.2: Dependency audit
- Phase 1.3: TypeScript review

**Afternoon (4 hours):**
- Phase 2.1: Route validation
- Phase 2.2: Navigation testing
- Phase 2.3: Link integrity

### Day 2: Architecture & Content (Phases 3-4)
**Morning (4 hours):**
- Phase 3.1: Server/Client components
- Phase 3.2: Template validation
- Phase 3.3: Shared components

**Afternoon (4 hours):**
- Phase 4.1: Static data
- Phase 4.2: Image system
- Phase 4.3: Content migration

### Day 3: Features & Performance (Phases 5-7)
**Morning (4 hours):**
- Phase 5.1: Search functionality
- Phase 5.2: Analytics audit
- Phase 5.3: SEO validation

**Afternoon (3 hours):**
- Phase 6.1: Bundle analysis
- Phase 6.2: Image performance
- Phase 6.3: Runtime profiling

**Evening (1 hour):**
- Phase 7.1: Error handling
- Phase 7.2: Browser testing
- Phase 7.3: Accessibility

---

## Critical Findings Pre-Investigation

Based on existing documentation (MIGRATION_GAPS_ANALYSIS.md, MIGRATION_COMPLETE.md):

### ✅ What's Working:
1. Build passes successfully
2. 2,108 static pages generate
3. TypeScript compilation clean
4. Basic routing works
5. Templates render correctly
6. Analytics infrastructure exists
7. Dark mode functional
8. Footer complete
9. Mobile menu works
10. GTM container configured

### ⚠️ Known Issues:
1. **CRITICAL:** Search functionality missing (per MIGRATION_GAPS_ANALYSIS.md)
2. **HIGH:** Header dropdown images using `unoptimized` flag
3. **HIGH:** Hero image not full width (CSS hacks applied)
4. **MEDIUM:** ResponsivePicture not used in Header
5. **MEDIUM:** No image preloading in dropdown
6. **MEDIUM:** No route prefetching on hover
7. **MEDIUM:** Tailwind CSS v4 lint warnings (100+ minor issues)
8. **LOW:** Some tsconfig deprecation warnings in v0.2

### 🔍 Areas Needing Investigation:
1. Why is `unoptimized` flag used in HeaderClient?
2. Are all v0.2 routes migrated?
3. Is product detail routing working (1,867 pages)?
4. Are all analytics events firing correctly?
5. Are there any hydration errors in console?
6. Is bundle size optimized?
7. Are there any accessibility violations?
8. Is SEO metadata complete on all pages?

---

## Success Criteria

Investigation is complete when:

- [ ] All 7 phases executed
- [ ] All deliverables created
- [ ] Critical issues documented
- [ ] Fix priority established
- [ ] Timeline estimated
- [ ] No surprises remain
- [ ] Confidence in deployment readiness

---

## Next Steps After Investigation

1. **Triage Issues:** Critical → High → Medium → Low
2. **Create Fix Plan:** Phased approach with timelines
3. **Implement Fixes:** Start with critical blockers
4. **Regression Test:** Ensure fixes don't break existing features
5. **Deploy to Staging:** Full QA cycle
6. **Production Deploy:** Only after all critical issues resolved

---

## Tools & Scripts Needed

### Install Investigation Tools:
```bash
# Bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Link checker
npm install -g broken-link-checker

# Accessibility checker
npm install -g pa11y

# Dependency checker
npm install -g depcheck

# Performance monitoring
npm install -g lighthouse
```

### Useful Scripts to Add:
```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build",
    "type-check": "tsc --noEmit",
    "lint:strict": "next lint --max-warnings 0",
    "test:links": "blc http://localhost:3000 -ro",
    "test:a11y": "pa11y http://localhost:3000"
  }
}
```

---

## Appendix A: Key File Locations

### Next.js App Router
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Home page
- `app/[slug]/page.tsx` - Dynamic supplement pages
- `app/glossary/[term]/page.tsx` - Glossary pages
- `app/components/*.tsx` - App-specific components

### Source Code
- `src/components/*.tsx` - React components
- `src/lib/*.ts` - Utility libraries
- `src/routes.config.ts` - Route definitions (2,468 lines!)
- `src/styles/globals.css` - Global styles

### Configuration
- `next.config.mjs` - Next.js config
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies & scripts
- `vercel.json` - Deployment config

### Build Output
- `.next/` - Next.js build files
- `public/` - Static assets
- `public/sitemap.xml` - Generated sitemap
- `public/structured-data/` - JSON-LD files

---

## Appendix B: Reference Documentation

### Project Docs:
- `MIGRATION_GAPS_ANALYSIS.md` - Known gaps
- `MIGRATION_COMPLETE.md` - Completion report
- `MIGRATION_CHECKLIST.md` - Migration tasks
- `GTM_IMPORT_GUIDE.md` - Analytics setup
- `QUICK_REFERENCE.md` - Quick reference

### External Resources:
- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript 5.9](https://www.typescriptlang.org/docs/)

---

**End of Investigation Plan**

Generated: November 24, 2025  
Estimated Execution Time: 2-3 days  
Success Rate Target: 100% coverage
