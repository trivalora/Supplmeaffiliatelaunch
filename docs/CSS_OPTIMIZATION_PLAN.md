# CSS Optimization Plan - Mobile Render Blocking Resolution

**Date:** November 29, 2025  
**Version:** 0.6.4  
**Priority:** HIGH - Performance Critical

---

## 🎯 Executive Summary

**Current Problem:**
- **Primary CSS Bundle:** 148KB (56ea1a97363da474.css) taking 810ms on mobile
- **Secondary CSS Bundle:** 4KB (8cba42d1bad9ad04.css) taking 320ms on mobile
- **Total Blocking Time:** 1,130ms (1.13 seconds)
- **Impact:** Delays First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
- **Mobile Performance:** Critical issue - CSS is render-blocking

**Root Causes Identified:**
1. ✅ **Google Fonts Loading:** Blocking external request (`@import url("https://fonts.googleapis.com...")`)
2. ✅ **Massive globals.css:** 2,375 lines of CSS with extensive custom properties
3. ✅ **Font Loading Strategy:** Multiple font weights/styles (12 font files, 800KB total)
4. ✅ **No Critical CSS Extraction:** Entire stylesheet loads before render
5. ✅ **No CSS Code Splitting:** All CSS bundled together regardless of route
6. ✅ **Tailwind v4 PostCSS:** No PurgeCSS optimization visible

---

## 📊 Current State Analysis

### CSS Source Files
```
src/styles/globals.css  → 2,375 lines (includes Tailwind import)
src/fonts.css           → 85 lines (12 @font-face declarations)
Total Source            → 2,460 lines
```

### Production Build Output
```
.next/static/chunks/56ea1a97363da474.css → 148KB (main bundle)
.next/static/chunks/8cba42d1bad9ad04.css → 4KB (secondary)
Total Production CSS                      → 152KB
```

### Font Assets
```
Total Font Files: 12 (TTF + WOFF2)
Total Size: ~800KB uncompressed
Critical Fonts: 
  - Lato-Regular-subset.woff2 (24KB) ✅ Optimized
  - Lato-Bold-subset.woff2 (24KB) ✅ Optimized
Non-Critical: 10 additional font variants
```

### Current Loading Pattern
```
HTML Load
  ↓
CSS Request (external Google Fonts) → 🔴 BLOCKING
  ↓
CSS Download (148KB + 4KB)         → 🔴 BLOCKING
  ↓
Font Downloads (12 files)          → 🔴 BLOCKING (font-display: swap helps)
  ↓
First Paint (1.13s delay minimum)
```

---

## 🎬 Optimization Strategy (4-Phase Approach)

### Phase 1: Quick Wins (Immediate - 1-2 hours)
**Goal:** Reduce blocking time by 40-50% (targeting ~600ms)

#### 1.1 Remove External Google Fonts
**Current:**
```css
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap");
```

**Issue:** External request blocks CSS parsing
**Fix:** Already have self-hosted fonts, remove Google Fonts import entirely

**Action:**
- Remove line 1 from `src/styles/globals.css`
- Update `src/fonts.css` to include Lora self-hosted fonts
- Verify font fallbacks in CSS variables

**Impact:** -200ms to -400ms (eliminates external request)

---

#### 1.2 Preload Critical Fonts
**Current:** No preload hints
**Fix:** Add `<link rel="preload">` for critical fonts only

**Action:** Update `app/layout.tsx`
```tsx
<head>
  <GoogleTagManager gtmId={gtmId} />
  {/* Preload critical fonts */}
  <link
    rel="preload"
    href="/fonts/Lato-Regular-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Lato-Bold-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

**Impact:** -50ms to -100ms (parallel font loading)

---

#### 1.3 Implement CSS Preload Hint
**Current:** No CSS preloading
**Fix:** Add preload for main CSS chunk

**Action:** Update `next.config.mjs`
```javascript
const nextConfig = {
  // ... existing config
  
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  
  // Custom webpack config for CSS optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable CSS minimization
      config.optimization.minimize = true;
    }
    return config;
  },
};
```

**Impact:** -50ms to -100ms (better resource prioritization)

---

### Phase 2: Critical CSS Extraction (2-4 hours)
**Goal:** Load only above-the-fold CSS inline, defer rest

#### 2.1 Identify Critical CSS
**Above-the-fold elements:**
- Header (80px fixed)
- Hero section / First content block
- Core typography (h1, h2, p)
- Critical layout (containers, grids)

**Critical CSS Size Target:** <14KB (inline limit)

---

#### 2.2 Install Critical CSS Tools
```bash
npm install --save-dev critters
```

**Action:** Update `next.config.mjs`
```javascript
import { webpack } from 'next/dist/compiled/webpack/webpack';

const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Critical CSS extraction
      const CrittersPlugin = require('critters-webpack-plugin');
      config.plugins.push(
        new CrittersPlugin({
          preload: 'swap',
          pruneSource: true,
          compress: true,
          logLevel: 'info',
        })
      );
    }
    return config;
  },
};
```

**Impact:** -300ms to -500ms (immediate render of above-the-fold content)

---

#### 2.3 Create Critical CSS Stylesheet
**New file:** `src/styles/critical.css`

Extract:
```css
/* Critical: Layout & Header */
:root {
  --header-height: 80px;
  --font-body: 'Lato', system-ui, sans-serif;
  --font-heading: 'Lato', system-ui, serif;
  --primary: #162f1c;
  --background: #f5f8f6;
  --foreground: #2d2d2d;
}

body {
  font-family: var(--font-body);
  background: var(--background);
  color: var(--foreground);
  margin: 0;
  padding: 0;
}

/* Header styles */
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--header-height);
  background: var(--primary);
  z-index: 1000;
}

/* Critical typography */
h1, h2, h3 {
  font-family: var(--font-heading);
  margin: 0;
  line-height: 1.2;
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

**Update layout.tsx:**
```tsx
<head>
  <GoogleTagManager gtmId={gtmId} />
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  {/* Preload main CSS */}
  <link rel="preload" href="/path/to/main.css" as="style" />
  {/* Load main CSS async */}
  <link
    rel="stylesheet"
    href="/path/to/main.css"
    media="print"
    onLoad="this.media='all'"
  />
</head>
```

**Impact:** -400ms to -600ms (instant critical rendering)

---

### Phase 3: CSS Optimization & Splitting (3-5 hours)
**Goal:** Reduce CSS bundle size by 50-70%

#### 3.1 Audit & Remove Unused CSS
**Current Issue:** 2,375 lines of globals.css likely contains unused styles

**Action:** Create audit script
```javascript
// scripts/audit-css.mjs
import { PurgeCSS } from 'purgecss';
import fs from 'fs';

const purgeCSSResults = await new PurgeCSS().purge({
  content: [
    'app/**/*.tsx',
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
  ],
  css: ['src/styles/globals.css'],
  safelist: {
    standard: [/^data-/, /^aria-/, /^theme-/],
    deep: [/^dark/, /^light/],
  },
});

console.log('Unused CSS:', purgeCSSResults[0].rejected);
```

**Manual Review:**
1. Check if all CSS custom properties are used
2. Identify duplicate Tailwind utilities
3. Remove dead code from globals.css
4. Consolidate similar styles

**Target:** Reduce globals.css from 2,375 lines to <1,000 lines

**Impact:** -50KB to -80KB bundle size reduction

---

#### 3.2 Split CSS by Route Groups
**Current:** Monolithic CSS bundle for all routes
**Desired:** Per-route CSS chunks

**Route Groups:**
1. **Core** (all pages): Header, Footer, base layout
2. **Supplement Pages** (`/[slug]`): Knowledgebase styles
3. **Product Pages** (`/[slug]/product/[id]`): Product detail styles
4. **Glossary** (`/glossary/[term]`): Glossary-specific styles
5. **Static Pages**: About, Contact, etc.

**Implementation:**
```tsx
// app/[slug]/layout.tsx
import './supplement-styles.css'; // Only loads for supplement pages

export default function SupplementLayout({ children }) {
  return <>{children}</>;
}
```

**Impact:** -30KB to -50KB per page (only load relevant CSS)

---

#### 3.3 Optimize Tailwind v4 Output
**Current:** No explicit Tailwind configuration visible

**Action:** Create `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // Import CSS variables from globals.css
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        // ... etc
      },
    },
  },
  
  // Critical: Enable tree-shaking
  mode: 'jit',
  
  // Remove unused utilities
  corePlugins: {
    preflight: true,
  },
};

export default config;
```

**Verify PostCSS:** Update `postcss.config.mjs`
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      optimize: true, // Enable optimization
    },
    autoprefixer: {},
    cssnano: { // Add CSS minification
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
      }],
    },
  },
};
```

**Impact:** -20KB to -40KB (remove unused Tailwind utilities)

---

#### 3.4 Defer Non-Critical Fonts
**Current:** All 12 font variants load immediately
**Fix:** Load only Regular & Bold initially, others on-demand

**Update `src/fonts.css`:**
```css
/* ✅ Critical fonts - preload */
@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Regular-subset.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Bold-subset.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* ❌ Non-critical fonts - lazy load */
/* Move to separate fonts-extended.css */
```

**Create `src/fonts-extended.css`:**
```css
/* Light, Thin, Black, Italic variants */
@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
/* ... other variants */
```

**Lazy load extended fonts:**
```tsx
// app/layout.tsx
useEffect(() => {
  // Load extended fonts after initial render
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/fonts-extended.css';
  document.head.appendChild(link);
}, []);
```

**Impact:** -500KB to -600KB initial font load

---

### Phase 4: Advanced Optimization (4-6 hours)
**Goal:** Achieve optimal loading pattern with progressive enhancement

#### 4.1 Implement Service Worker for CSS Caching
**New file:** `public/sw.js`

```javascript
const CACHE_VERSION = 'v1';
const CSS_CACHE = 'css-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CSS_CACHE).then((cache) => {
      return cache.addAll([
        '/fonts/Lato-Regular-subset.woff2',
        '/fonts/Lato-Bold-subset.woff2',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('.css') || event.request.url.includes('/fonts/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
```

**Register in layout:**
```tsx
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
}, []);
```

**Impact:** Instant subsequent loads (0ms after first visit)

---

#### 4.2 Implement HTTP/2 Server Push
**Update Vercel configuration:** `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Link",
          "value": "</fonts/Lato-Regular-subset.woff2>; rel=preload; as=font; type=font/woff2; crossorigin, </fonts/Lato-Bold-subset.woff2>; rel=preload; as=font; type=font/woff2; crossorigin"
        }
      ]
    }
  ]
}
```

**Impact:** -100ms to -200ms (parallel resource loading)

---

#### 4.3 CSS-in-JS for Critical Components
**For truly critical components only** (e.g., Header)

```tsx
// app/components/Header.tsx
const headerStyles = {
  position: 'fixed',
  top: 0,
  width: '100%',
  height: 'var(--header-height)',
  background: 'var(--header-bg)',
  zIndex: 1000,
};

export function Header() {
  return <header style={headerStyles}>...</header>;
}
```

**Impact:** 0ms for critical component render (no CSS dependency)

---

#### 4.4 Implement Resource Hints
**Update layout.tsx with comprehensive hints:**

```tsx
<head>
  <GoogleTagManager gtmId={gtmId} />
  
  {/* DNS Prefetch for external resources */}
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  
  {/* Preconnect to critical origins */}
  <link rel="preconnect" href="https://www.suppl.me" crossOrigin="anonymous" />
  
  {/* Preload critical fonts */}
  <link
    rel="preload"
    href="/fonts/Lato-Regular-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Lato-Bold-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  
  {/* Inline critical CSS */}
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  
  {/* Async load main CSS */}
  <link
    rel="stylesheet"
    href="/_next/static/chunks/main.css"
    media="print"
    onLoad="this.media='all'"
  />
  <noscript>
    <link rel="stylesheet" href="/_next/static/chunks/main.css" />
  </noscript>
</head>
```

**Impact:** Optimal resource loading pattern

---

## 📈 Expected Performance Improvements

### Current Performance (Baseline)
```
CSS Load Time:           1,130ms (810ms + 320ms)
First Contentful Paint:  ~1,500ms
Largest Contentful Paint: ~2,000ms
Total Blocking Time:     1,130ms
CSS Bundle Size:         152KB
Font Load:               800KB (12 files)
```

### After Phase 1 (Quick Wins)
```
CSS Load Time:           ~600ms (-47% improvement) ✅
First Contentful Paint:  ~1,100ms
Largest Contentful Paint: ~1,600ms
Total Blocking Time:     ~600ms
CSS Bundle Size:         152KB (unchanged)
Font Load:               48KB (2 critical files only) ✅
```

### After Phase 2 (Critical CSS)
```
CSS Load Time:           ~200ms (-82% improvement) ✅
First Contentful Paint:  ~500ms ✅
Largest Contentful Paint: ~900ms ✅
Total Blocking Time:     ~200ms
CSS Bundle Size:         <14KB inline + 138KB deferred ✅
Font Load:               48KB (2 files)
```

### After Phase 3 (Optimization)
```
CSS Load Time:           ~150ms (-87% improvement) ✅
First Contentful Paint:  ~400ms ✅
Largest Contentful Paint: ~800ms ✅
Total Blocking Time:     ~150ms
CSS Bundle Size:         <14KB inline + 70KB deferred ✅
Font Load:               48KB (2 files)
```

### After Phase 4 (Advanced)
```
CSS Load Time:           ~100ms (-91% improvement) ✅
First Contentful Paint:  ~300ms ✅
Largest Contentful Paint: ~600ms ✅
Total Blocking Time:     ~100ms
CSS Bundle Size:         <14KB inline + 70KB cached ✅
Font Load:               48KB (cached after first visit) ✅
Subsequent Visits:       ~0ms (service worker cache) ✅
```

---

## 🎯 Implementation Timeline

### Week 1: Phase 1 (Quick Wins)
- **Monday:** Remove Google Fonts, add font preloads
- **Tuesday:** Configure CSS optimization in next.config.mjs
- **Wednesday:** Test and verify improvements
- **Expected Outcome:** 47% reduction in blocking time

### Week 2: Phase 2 (Critical CSS)
- **Monday-Tuesday:** Extract critical CSS, install Critters
- **Wednesday:** Implement inline critical CSS in layout
- **Thursday:** Test and optimize critical CSS size
- **Friday:** Deploy and measure
- **Expected Outcome:** 82% reduction in blocking time

### Week 3: Phase 3 (Optimization)
- **Monday:** Audit unused CSS, remove dead code
- **Tuesday:** Implement route-based CSS splitting
- **Wednesday-Thursday:** Configure Tailwind optimization
- **Friday:** Defer non-critical fonts
- **Expected Outcome:** 50-70% CSS bundle size reduction

### Week 4: Phase 4 (Advanced)
- **Monday:** Implement service worker
- **Tuesday:** Configure HTTP/2 push
- **Wednesday:** Add comprehensive resource hints
- **Thursday-Friday:** Final testing and optimization
- **Expected Outcome:** Near-zero repeat visit blocking

---

## ✅ Success Metrics

### Target Metrics (Mobile)
```
✅ CSS Load Time:           < 200ms (from 1,130ms)
✅ First Contentful Paint:  < 600ms (from ~1,500ms)
✅ Largest Contentful Paint: < 1,000ms (from ~2,000ms)
✅ Total Blocking Time:     < 200ms (from 1,130ms)
✅ CSS Bundle Size:         < 80KB total (from 152KB)
✅ Initial Font Load:       < 50KB (from 800KB)
✅ Lighthouse Score:        90+ (Performance)
✅ Core Web Vitals:         All "Good" ratings
```

### Monitoring & Validation
1. **Lighthouse CI:** Run on every build
2. **WebPageTest:** Weekly mobile tests (3G/4G)
3. **Real User Monitoring:** Track FCP/LCP via GA4
4. **Bundle Analysis:** Monitor CSS size on each deployment

---

## 🚨 Risks & Mitigations

### Risk 1: Critical CSS Too Large (>14KB)
**Mitigation:** Extract only truly above-the-fold styles, test on mobile viewport

### Risk 2: FOUC (Flash of Unstyled Content)
**Mitigation:** Inline critical CSS properly, use font-display: swap

### Risk 3: Service Worker Cache Invalidation
**Mitigation:** Version cache names, implement proper update strategy

### Risk 4: Build Time Increase
**Mitigation:** Optimize CSS extraction, consider caching intermediate results

### Risk 5: Route-based CSS Splitting Complexity
**Mitigation:** Start with simple groups (supplements, products, glossary), iterate

---

## 📝 Testing Checklist

### Pre-Deployment Testing
- [ ] Lighthouse Performance score (mobile): 90+
- [ ] CSS load time < 200ms on throttled 3G
- [ ] No FOUC on any route
- [ ] All fonts render correctly
- [ ] Dark mode works properly
- [ ] Service worker caches correctly
- [ ] All 1,936 pages render correctly
- [ ] No console errors or warnings

### Post-Deployment Monitoring
- [ ] Monitor FCP/LCP in GA4 (first 24h)
- [ ] Check Vercel deployment analytics
- [ ] Run WebPageTest on key pages
- [ ] Verify font loading in production
- [ ] Test on real mobile devices (iOS/Android)
- [ ] Monitor error rates in Sentry/equivalent

---

## 🔧 Technical Implementation Details

### Critical CSS Extraction Script
```javascript
// scripts/extract-critical-css.mjs
import { PurgeCSS } from 'purgecss';
import fs from 'fs/promises';
import path from 'path';

const criticalComponents = [
  'app/layout.tsx',
  'app/components/Header.tsx',
  'app/components/Footer.tsx',
  'src/components/shared/Layout.tsx',
];

const extractCriticalCSS = async () => {
  const purgeCSSResults = await new PurgeCSS().purge({
    content: criticalComponents,
    css: ['src/styles/globals.css'],
    safelist: {
      standard: [
        /^header/,
        /^nav/,
        /^container/,
        /^h[1-6]/,
        /^p$/,
        /^body$/,
      ],
    },
  });

  const criticalCSS = purgeCSSResults[0].css;
  
  // Ensure under 14KB
  if (Buffer.byteLength(criticalCSS, 'utf8') > 14336) {
    console.warn('⚠️ Critical CSS exceeds 14KB! Consider further optimization.');
  }

  await fs.writeFile(
    path.join(process.cwd(), 'src/styles/critical.css'),
    criticalCSS
  );
  
  console.log(`✅ Critical CSS extracted: ${Buffer.byteLength(criticalCSS, 'utf8')} bytes`);
};

extractCriticalCSS().catch(console.error);
```

### Async CSS Loader Component
```tsx
// src/components/shared/AsyncCSS.tsx
'use client';

import { useEffect } from 'react';

interface AsyncCSSProps {
  href: string;
  media?: string;
}

export function AsyncCSS({ href, media = 'all' }: AsyncCSSProps) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href, media]);

  return null;
}
```

### Font Loading Strategy Component
```tsx
// src/components/shared/FontLoader.tsx
'use client';

import { useEffect, useState } from 'react';

export function FontLoader() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load extended fonts after critical fonts
    if (document.fonts) {
      document.fonts.ready.then(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/fonts-extended.css';
        document.head.appendChild(link);
        setFontsLoaded(true);
      });
    }
  }, []);

  return null;
}
```

---

## 📚 Resources & References

### Tools
- **Lighthouse:** Performance auditing
- **WebPageTest:** Real-world testing
- **PurgeCSS:** Unused CSS removal
- **Critters:** Critical CSS extraction
- **Bundle Analyzer:** CSS size analysis

### Documentation
- [Next.js CSS Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/css)
- [Web.dev CSS Performance](https://web.dev/optimize-css-loading/)
- [Critical Rendering Path](https://web.dev/critical-rendering-path/)
- [Font Loading Strategies](https://web.dev/font-best-practices/)

### Benchmarks
- [Core Web Vitals](https://web.dev/vitals/)
- [Mobile Performance Best Practices](https://web.dev/mobile/)

---

## 🎬 Next Steps

**Immediate Action (This Week):**
1. ✅ Review and approve this plan
2. ✅ Begin Phase 1 implementation (2 hours)
3. ✅ Test on staging environment
4. ✅ Deploy Phase 1 to production
5. ✅ Monitor performance metrics

**Questions to Resolve:**
1. Do we have access to Lora font files locally? (If not, need to download)
2. Should we implement all phases or stop after Phase 2?
3. What's the acceptable build time increase?
4. Do we have Lighthouse CI set up in Vercel?

---

**Document Version:** 1.0  
**Last Updated:** November 29, 2025  
**Next Review:** After Phase 1 completion  
**Owner:** Engineering Team
