# Next.js Migration Plan: v0.2 → v0.3
## Suppl.me Affiliate Launch - Comprehensive Refactoring Strategy

**Date Created**: November 23, 2025  
**Target**: Convert React SPA to Next.js 15 with App Router for SEO  
**Priority**: HIGH - Fixes critical SEO issues (duplicate pages, no content visibility)

---

## 🎯 Migration Goals

### Primary Objectives
1. **Fix SEO Issues**
   - Pre-render unique HTML for each page (no more duplicate content)
   - Enable crawler-visible content without JavaScript execution
   - Generate proper `<head>` tags server-side for each route
   - Create crawlable internal links (`<a href>` instead of client-side routing)

2. **Maintain Feature Parity**
   - Preserve all 17 supplement pages (V2)
   - Keep 197 glossary terms functional
   - Retain product comparison pages (17 pages)
   - Maintain analytics tracking (GTM, GA4, Hotjar, Clarity)
   - Preserve data pipeline integration

3. **Improve Performance**
   - Server-side rendering (SSR) for dynamic pages
   - Static generation (SSG) for supplement/glossary pages
   - Incremental Static Regeneration (ISR) for product data
   - Optimize bundle size with Next.js automatic code splitting

### Secondary Benefits
- Better TypeScript integration with Next.js
- Simplified routing (file-based vs. config-based)
- Built-in Image optimization
- Native API routes (already have Vercel functions, minimal change)
- Improved developer experience

---

## 📊 Current Architecture Analysis

### Tech Stack (v0.2)
```
Frontend: React 18 + TypeScript + Vite 6
Styling: Tailwind CSS v4 + CSS variables
Routing: Custom SPA routing (routes.config.ts)
State: React Context + hooks
Analytics: GTM + GA4 + Hotjar + Clarity
Deployment: Vercel (SPA mode, rewrites to index.html)
API: Vercel serverless functions (/api)
Data: SQLite (DSLD), JSON files (product data)
```

### Component Architecture
```
App.tsx (215 lazy-loaded components)
├── LandingPage (eager-loaded)
├── Supplement Pages (17 V2 pages)
│   └── KnowledgebaseTemplate.tsx (shared template)
├── Glossary Pages (197 terms)
│   └── GlossaryTemplate.tsx (shared template)
├── Comparison Pages (17 pages)
│   └── ProductComparisonWrapper.tsx
├── Static Pages (9: About, Contact, Privacy, etc.)
└── Shared Components
    ├── Header.tsx
    ├── Footer.tsx
    ├── SEOHead.tsx
    └── ui/ (ShadCN components)
```

### Key Files
- **routes.config.ts**: 2,449 lines, single source of truth for navigation
- **App.tsx**: Route mapper, lazy loading registry
- **KnowledgebaseTemplate.tsx**: 1,236 lines, main content template
- **package.json**: 80+ dependencies (React, Radix UI, etc.)
- **vite.config.ts**: Chunking strategy, route-based code splitting
- **vercel.json**: SPA rewrites (`/(.*) → /index.html`)

### Current Problems
1. **All pages return identical HTML** → Crawlers see duplicates
2. **Content rendered client-side** → JavaScript required for visibility
3. **Meta tags updated in React** → Not present in initial HTML
4. **Navigation via React Router** → No `<a href>` for crawlers
5. **Structured data injected client-side** → Not in initial HTML response

---

## 🛠 Next.js 15 Target Architecture

### New Tech Stack
```
Framework: Next.js 15 (App Router)
Runtime: React 19 (Server Components)
Styling: Tailwind CSS v4 (unchanged)
Routing: File-based (app/ directory)
Analytics: GTM + GA4 (Script component)
Deployment: Vercel (automatic SSR/SSG)
API: Vercel functions (app/api/ or /api preserved)
Data: Same (SQLite, JSON files)
```

### Directory Structure
```
suppl.me_Affiliate_Launch_v0.3/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout (Header/Footer/Analytics)
│   ├── page.tsx                      # Landing page (/)
│   ├── [supplement]/                 # Dynamic supplement routes
│   │   ├── page.tsx                  # Server component
│   │   └── opengraph-image.tsx       # OG images
│   ├── [supplement]-comparison/      # Comparison pages
│   │   └── page.tsx
│   ├── glossary/
│   │   ├── page.tsx                  # Glossary index
│   │   └── [term]/
│   │       └── page.tsx              # Dynamic glossary term
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── methodology/page.tsx
│   └── api/                          # API routes (optional, can use /api)
│       └── prices/route.ts
├── components/                       # Client components (same as v0.2)
│   ├── KnowledgebaseTemplate.tsx     # Converted to client component
│   ├── GlossaryTemplate.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/                           # ShadCN (unchanged)
├── lib/                              # Utilities (renamed from utils/)
│   ├── analytics.ts
│   ├── glossaryAutolink.ts
│   └── supplementImages.ts
├── data-pipeline/                    # Unchanged (Python scripts)
├── public/                           # Static assets
├── api/                              # Existing Vercel functions (preserved)
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind config
└── package.json                      # Updated dependencies
```

---

## 📋 Migration Phases

### Phase 1: Project Setup (1-2 days)
**Goal**: Initialize Next.js project alongside v0.2, test basic routing

#### Tasks
1. **Create Next.js 15 Project**
   ```bash
   cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
   ```

2. **Port Configuration Files**
   - Copy `tailwind.config.js` → Update paths for `app/` directory
   - Copy `tsconfig.json` → Merge with Next.js defaults
   - Recreate `next.config.js` with:
     - Image domains for external images
     - Vercel deployment settings
     - Redirects for old v1 routes
     - Webpack config for Radix UI (if needed)

3. **Install Dependencies**
   ```bash
   npm install --save-exact \
     @radix-ui/react-accordion@^1.2.3 \
     @radix-ui/react-dialog@^1.1.6 \
     # ... (all Radix UI packages from v0.2)
     lucide-react \
     class-variance-authority \
     tailwind-merge \
     embla-carousel-react \
     recharts \
     motion
   ```

4. **Set Up Analytics**
   - Install `@next/third-parties` for GTM
   - Create `app/analytics-provider.tsx` (client component)
   - Configure GTM in `app/layout.tsx`

5. **Testing**
   - Verify `npm run dev` starts successfully
   - Test basic page routing
   - Confirm Tailwind styling works

**Deliverables**:
- [ ] Next.js 15 project initialized
- [ ] All dependencies installed
- [ ] Development server running
- [ ] Basic routing functional

---

### Phase 2: Core Layout & Routing (2-3 days)
**Goal**: Convert shell components, establish routing patterns

#### Tasks
1. **Create Root Layout** (`app/layout.tsx`)
   ```tsx
   import { GoogleTagManager } from '@next/third-parties/google';
   import { Header } from '@/components/Header';
   import { Footer } from '@/components/Footer';
   import '@/styles/globals.css';

   export const metadata = {
     metadataBase: new URL('https://suppl.me'),
     title: {
       default: 'Suppl.me - Evidence-Based Supplement Information',
       template: '%s | Suppl.me'
     },
     description: 'Research-backed supplement information...',
   };

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           <Header />
           <main>{children}</main>
           <Footer />
           <GoogleTagManager gtmId="GTM-NQWRNKFT" />
         </body>
       </html>
     );
   }
   ```

2. **Convert Header/Footer to Server Components**
   - Extract navigation data from `routes.config.ts`
   - Make dropdown/search client components (use `'use client'`)
   - Ensure `<Link>` from `next/link` used everywhere
   - Test mobile menu functionality

3. **Create Landing Page** (`app/page.tsx`)
   - Convert `LandingPage.tsx` to server component
   - Move interactive elements to client components
   - Add structured data (JSON-LD) server-side
   - Generate metadata object

4. **Set Up Dynamic Routes**
   - **Supplements**: `app/[supplement]/page.tsx`
   - **Comparisons**: `app/[supplement]-comparison/page.tsx`
   - **Glossary**: `app/glossary/[term]/page.tsx`
   - Use `generateStaticParams()` for SSG

5. **Create Route Config Adapter**
   ```tsx
   // lib/route-adapter.ts
   export function getSupplementSlugs() {
     return KNOWLEDGEBASE_ROUTES
       .filter(r => r.category === 'v2')
       .map(r => ({ supplement: getPathForKey(r.key) }));
   }
   ```

**Deliverables**:
- [ ] Root layout with Header/Footer
- [ ] Landing page functional
- [ ] Dynamic routes scaffolded
- [ ] Navigation working with Next.js Link

---

### Phase 3: Supplement Pages (3-4 days)
**Goal**: Convert 17 V2 supplement pages to SSG with dynamic routing

#### Tasks
1. **Create Dynamic Supplement Route** (`app/[supplement]/page.tsx`)
   ```tsx
   import { Metadata } from 'next';
   import { notFound } from 'next/navigation';
   import { KnowledgebaseTemplate } from '@/components/KnowledgebaseTemplate';
   import { getSupplementData } from '@/lib/supplement-data';

   export async function generateStaticParams() {
     return getSupplementSlugs();
   }

   export async function generateMetadata({ params }): Promise<Metadata> {
     const data = await getSupplementData(params.supplement);
     if (!data) return {};
     
     return {
       title: data.title,
       description: data.description,
       openGraph: {
         title: data.title,
         description: data.description,
         images: [{ url: data.image }],
       },
     };
   }

   export default async function SupplementPage({ params }) {
     const data = await getSupplementData(params.supplement);
     if (!data) notFound();

     return <KnowledgebaseTemplate {...data} />;
   }
   ```

2. **Convert KnowledgebaseTemplate**
   - Add `'use client'` at top (needs interactivity)
   - Remove `onNavigate` prop (use `useRouter` from `next/navigation`)
   - Update all `navigate()` calls to `router.push()`
   - Test accordion, tabs, product clicks

3. **Create Supplement Data Loader** (`lib/supplement-data.ts`)
   - Centralize all supplement content
   - Export async functions for data fetching
   - Support ISR with `revalidate` config

4. **Handle Product Data Integration**
   - Keep existing `supplementProductsData.ts` logic
   - Load JSON files server-side or at build time
   - Pass to client components as props

5. **Add Structured Data**
   - Generate `Product` schema server-side
   - Inject as `<script type="application/ld+json">` in metadata

**Deliverables**:
- [ ] All 17 supplement pages rendering
- [ ] Unique HTML for each supplement
- [ ] Meta tags correct in page source
- [ ] Product data displaying
- [ ] Analytics tracking working

---

### Phase 4: Glossary Pages (2-3 days)
**Goal**: Convert 197 glossary pages to SSG with auto-linking

#### Tasks
1. **Create Dynamic Glossary Route** (`app/glossary/[term]/page.tsx`)
   ```tsx
   export async function generateStaticParams() {
     return GLOSSARY_ROUTES.map(r => ({ term: r.key }));
   }

   export async function generateMetadata({ params }) {
     const term = getGlossaryTerm(params.term);
     return {
       title: `${term.title} - Glossary`,
       description: term.description,
     };
   }

   export default function GlossaryTermPage({ params }) {
     const term = getGlossaryTerm(params.term);
     return <GlossaryTemplate {...term} />;
   }
   ```

2. **Convert GlossaryTemplate**
   - Add `'use client'` (has interactive elements)
   - Update navigation to Next.js patterns
   - Preserve glossary auto-linking utility

3. **Test Auto-Linking**
   - Verify `autolinkGlossaryTerms()` works with Next.js Link
   - Update link generation to use proper hrefs
   - Test cross-linking between glossary terms

4. **Create Glossary Index** (`app/glossary/page.tsx`)
   - List all 197 terms
   - Add search/filter functionality (client component)
   - Group by category

**Deliverables**:
- [ ] All 197 glossary pages rendering
- [ ] Auto-linking functional
- [ ] Glossary index page complete
- [ ] Search/filter working

---

### Phase 5: Comparison Pages (2 days)
**Goal**: Convert 17 comparison pages with product data

#### Tasks
1. **Create Dynamic Comparison Route** (`app/[supplement]-comparison/page.tsx`)
   ```tsx
   export default function ComparisonPage({ params }) {
     const supplement = params.supplement.replace('-comparison', '');
     return <ProductComparisonWrapper supplement={supplement} />;
   }
   ```

2. **Convert ProductComparisonWrapper**
   - Mark as client component
   - Load product JSON data server-side (pass as prop)
   - Preserve filtering/sorting logic

3. **Add Comparison Structured Data**
   - Generate `OfferCatalog` schema
   - List all products for comparison

**Deliverables**:
- [ ] All comparison pages functional
- [ ] Product filtering working
- [ ] Structured data present

---

### Phase 6: Static Pages & SEO (1-2 days)
**Goal**: Migrate About, Contact, Privacy, etc.

#### Tasks
1. **Create Static Page Routes**
   - `app/about/page.tsx`
   - `app/contact/page.tsx`
   - `app/methodology/page.tsx`
   - `app/privacy/page.tsx`
   - `app/terms/page.tsx`
   - `app/legal/page.tsx`
   - `app/cookies/page.tsx`
   - `app/impressum/page.tsx`

2. **Add SEO Metadata**
   - Unique `metadata` export for each page
   - OpenGraph images
   - Twitter cards

3. **Generate Sitemap** (`app/sitemap.ts`)
   ```tsx
   export default function sitemap() {
     const supplements = getSupplementSlugs().map(s => ({
       url: `https://suppl.me/${s.supplement}`,
       lastModified: new Date(),
       changeFrequency: 'weekly',
       priority: 0.9,
     }));

     // ... add glossary, comparisons, static pages
     return [...supplements, ...];
   }
   ```

4. **Generate robots.txt** (`app/robots.ts`)
   ```tsx
   export default function robots() {
     return {
       rules: {
         userAgent: '*',
         allow: '/',
       },
       sitemap: 'https://suppl.me/sitemap.xml',
     };
   }
   ```

**Deliverables**:
- [ ] All static pages converted
- [ ] Sitemap auto-generated
- [ ] robots.txt configured
- [ ] OpenGraph images working

---

### Phase 7: Analytics & Tracking (1 day)
**Goal**: Ensure all analytics events fire correctly

#### Tasks
1. **Verify GTM Integration**
   - Test dataLayer events
   - Confirm GA4 tracking
   - Validate Hotjar/Clarity scripts

2. **Update Analytics Utilities**
   - Ensure `analytics.ts` works with Next.js
   - Test page view tracking
   - Verify event tracking (clicks, scrolls)

3. **Add Route Change Tracking**
   ```tsx
   // app/analytics-provider.tsx
   'use client';
   import { usePathname } from 'next/navigation';
   import { useEffect } from 'react';

   export function AnalyticsProvider({ children }) {
     const pathname = usePathname();
     
     useEffect(() => {
       trackPageView(pathname);
     }, [pathname]);
     
     return <>{children}</>;
   }
   ```

**Deliverables**:
- [ ] All analytics events functional
- [ ] Page views tracked on route change
- [ ] Product clicks logging correctly

---

### Phase 8: Data Pipeline Integration (1 day)
**Goal**: Connect Next.js to existing data pipeline

#### Tasks
1. **Verify JSON File Access**
   - Test reading from `data-pipeline/output/`
   - Ensure build process includes data files

2. **Set Up ISR for Product Data**
   ```tsx
   export const revalidate = 3600; // 1 hour
   ```

3. **Test Price API Endpoint**
   - Verify `/api/prices` works
   - Update Vercel function if needed

**Deliverables**:
- [ ] Product data loading correctly
- [ ] ISR revalidation working
- [ ] Price API functional

---

### Phase 9: Performance Optimization (1-2 days)
**Goal**: Optimize bundle size and loading speed

#### Tasks
1. **Implement Code Splitting**
   - Use `next/dynamic` for heavy components
   - Lazy load Radix UI components
   - Split glossary pages into chunks

2. **Optimize Images**
   - Convert to `next/image` component
   - Configure image domains in `next.config.js`
   - Add blur placeholders

3. **Bundle Analysis**
   ```bash
   npm run build
   npm install @next/bundle-analyzer
   ```

4. **Add Loading States**
   - Create `loading.tsx` for route segments
   - Add skeleton screens

**Deliverables**:
- [ ] Bundle size optimized
- [ ] Images using Next.js Image
- [ ] Loading states implemented
- [ ] Bundle analysis report

---

### Phase 10: Testing & Deployment (2-3 days)
**Goal**: Comprehensive testing and production deployment

#### Tasks
1. **SEO Validation**
   - Test with Google's Rich Results Test
   - Verify crawlable HTML with `curl`
   - Check meta tags in page source
   - Validate structured data

2. **Functional Testing**
   - Test all 17 supplement pages
   - Test all 197 glossary pages
   - Test all comparison pages
   - Test navigation flows
   - Test mobile responsiveness

3. **Analytics Testing**
   - Verify GTM Preview Mode
   - Check GA4 DebugView
   - Test event firing

4. **Performance Testing**
   - Run Lighthouse audits
   - Check Core Web Vitals
   - Test page load speeds

5. **Deployment**
   ```bash
   vercel --prod
   ```

6. **Post-Deployment**
   - Submit sitemap to Google Search Console
   - Monitor error logs
   - Check analytics data

**Deliverables**:
- [ ] All tests passing
- [ ] SEO issues resolved
- [ ] Production deployment successful
- [ ] Monitoring in place

---

## 🔧 Key Technical Decisions

### 1. Rendering Strategy
- **Supplement Pages**: Static Site Generation (SSG) with ISR
- **Glossary Pages**: Static Site Generation (SSG)
- **Comparison Pages**: Server-Side Rendering (SSR) or ISR
- **Landing Page**: Server-Side Rendering (SSR)
- **Static Pages**: Static Site Generation (SSG)

### 2. Data Fetching
- **Build Time**: Load all supplement/glossary data during build
- **Runtime**: Use ISR for product pricing (revalidate every hour)
- **Client Side**: Keep interactive filtering/sorting client-side

### 3. Component Split
- **Server Components**: Layout, static content, SEO metadata
- **Client Components**: Interactive UI (accordions, tabs, filters, analytics)

### 4. Routing
- **File-based**: Replace `routes.config.ts` with app directory structure
- **Adapter Layer**: Create utilities to bridge old route config to new structure
- **Redirects**: Handle old URLs in `next.config.js`

### 5. Styling
- **Keep Tailwind v4**: Minimal changes needed
- **CSS Variables**: Continue using for theming
- **Component Library**: Keep ShadCN components (all compatible with Next.js)

---

## 📦 Dependency Changes

### Add
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "@next/third-parties": "^15.0.0"
}
```

### Remove
```json
{
  "vite": "^6.4.1",
  "@vitejs/plugin-react-swc": "^3.10.2",
  "react-router-dom": "^7.9.6",
  "wouter": "^3.7.1"
}
```

### Keep (80+ packages)
- All Radix UI components
- Tailwind CSS
- TypeScript
- Analytics utilities
- Data pipeline dependencies

---

## 🚨 Risk Mitigation

### Major Risks
1. **Breaking Changes in React 19**
   - *Mitigation*: Test incrementally, use compatibility mode
   - *Fallback*: Pin to React 18 if issues arise

2. **Radix UI Compatibility**
   - *Mitigation*: All Radix components support Next.js, verify early
   - *Fallback*: Fork problematic components

3. **Analytics Disruption**
   - *Mitigation*: Test GTM thoroughly before production
   - *Fallback*: Keep old analytics code as backup

4. **Data Pipeline Integration**
   - *Mitigation*: Test JSON file loading early
   - *Fallback*: Use API endpoints instead of direct file access

5. **Performance Regression**
   - *Mitigation*: Monitor bundle size, use bundle analyzer
   - *Fallback*: Aggressive code splitting

### Minor Risks
- CSS variables compatibility (low risk, widely supported)
- Image optimization errors (Next.js Image very stable)
- Vercel deployment issues (excellent Next.js support)

---

## 📈 Success Metrics

### SEO
- [ ] Each page has unique HTML in page source
- [ ] Meta tags present before JavaScript
- [ ] Structured data in initial HTML
- [ ] Google Rich Results Test passes
- [ ] Sitemap auto-generated and valid

### Performance
- [ ] Lighthouse score > 90 (all categories)
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Bundle size < 500KB (main bundle)

### Functionality
- [ ] All 17 supplement pages working
- [ ] All 197 glossary terms working
- [ ] All 17 comparison pages working
- [ ] Navigation functional
- [ ] Analytics tracking 100%
- [ ] Mobile responsive

### Business
- [ ] Zero downtime deployment
- [ ] No analytics data loss
- [ ] All affiliate links working
- [ ] Product data accurate

---

## 📝 Migration Checklist

### Pre-Migration
- [ ] Backup v0.2 codebase (already done: v0.3 folder)
- [ ] Document current analytics setup
- [ ] Export current route config
- [ ] List all external dependencies

### During Migration
- [ ] Follow phase-by-phase plan
- [ ] Test each phase before proceeding
- [ ] Document changes and issues
- [ ] Keep v0.2 deployment running

### Post-Migration
- [ ] Monitor error logs (first 48 hours)
- [ ] Compare analytics data (v0.2 vs v0.3)
- [ ] Check search console for errors
- [ ] Gather user feedback

---

## 🔗 Key Files to Migrate

### High Priority (Critical Path)
1. `routes.config.ts` → `lib/route-adapter.ts` + app structure
2. `App.tsx` → `app/layout.tsx` + dynamic routes
3. `KnowledgebaseTemplate.tsx` → Client component
4. `GlossaryTemplate.tsx` → Client component
5. `Header.tsx` / `Footer.tsx` → Server components
6. `SEOHead.tsx` → Next.js metadata API
7. `analytics.ts` → Update for Next.js

### Medium Priority (Feature Parity)
8. All 17 supplement page components
9. All 197 glossary page components
10. 17 comparison page components
11. 9 static page components
12. ShadCN UI components (minimal changes)
13. Utility functions (glossary auto-linking, images, etc.)

### Low Priority (Nice to Have)
14. Build scripts (image optimization, font subsetting)
15. Vercel functions (already working, may not need changes)
16. Data pipeline scripts (no changes needed)
17. Documentation files

---

## 💡 Best Practices for Migration

### Do's
✅ Convert shell components (Header/Footer/Layout) first  
✅ Test each route type before scaling to all pages  
✅ Use TypeScript strictly for type safety  
✅ Preserve existing component logic where possible  
✅ Leverage Next.js Image for automatic optimization  
✅ Use Server Components by default, Client only when needed  
✅ Generate metadata objects for all pages  
✅ Test analytics tracking after each major change  

### Don'ts
❌ Don't rewrite components unnecessarily  
❌ Don't change data structures unless required  
❌ Don't deploy without thorough testing  
❌ Don't skip SEO validation steps  
❌ Don't remove old code until new version is stable  
❌ Don't forget to update environment variables  
❌ Don't ignore TypeScript errors (fix them)  
❌ Don't skip bundle size analysis  

---

## 🎓 Learning Resources

### Next.js 15 Documentation
- App Router: https://nextjs.org/docs/app
- Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching
- Metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Image Optimization: https://nextjs.org/docs/app/api-reference/components/image

### React 19 Features
- Server Components: https://react.dev/reference/rsc/server-components
- Actions: https://react.dev/reference/rsc/use-server

### Migration Guides
- Next.js Migration: https://nextjs.org/docs/app/building-your-application/upgrading
- Vite to Next.js: https://nextjs.org/docs/app/building-your-application/upgrading/from-vite

---

## 📞 Support & Communication

### Daily Standups (Recommended)
- Review progress against phase goals
- Identify blockers
- Adjust timeline as needed

### Testing Gates
- Each phase requires sign-off before proceeding
- SEO validation at Phase 10 is CRITICAL
- Performance testing blocks deployment

### Rollback Plan
- Keep v0.2 deployed until v0.3 is fully validated
- Use Vercel preview deployments for testing
- Can revert via Vercel dashboard if issues arise

---

## 🏁 Conclusion

This migration plan provides a structured approach to converting the Suppl.me platform from a React SPA (v0.2) to Next.js 15 (v0.3) to resolve critical SEO issues. The phased approach minimizes risk while ensuring feature parity and improved performance.

**Estimated Timeline**: 18-24 days (full-time work)  
**Risk Level**: Medium (well-documented migration path)  
**ROI**: High (fixes major SEO blockers, improves performance)

**Next Steps**:
1. Review and approve this plan
2. Set up v0.3 development environment (Phase 1)
3. Begin Phase 2 (Core Layout & Routing)
4. Regular progress updates and testing

---

**Document Version**: 1.0  
**Last Updated**: November 23, 2025  
**Author**: Migration Planning Team
