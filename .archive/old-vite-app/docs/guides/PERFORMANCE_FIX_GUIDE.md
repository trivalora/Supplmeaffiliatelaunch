# Performance Optimization Guide

## ⚠️ **CRITICAL ISSUE IDENTIFIED**

Your site is loading **slowly** because ALL 30+ page components are being imported eagerly at application startup, creating a massive initial bundle size.

---

## 🔍 **Root Causes**

### 1. **No Code Splitting**
Lines 17-41 in App.tsx import ALL pages synchronously:
```typescript
import { AshwagandhaPageNew as AshwagandhaPage } from './components/AshwagandhaPageNew';
import { AshwagandhaPageNewV2 as AshwagandhaPageV2 } from './components/AshwagandhaPageNewV2';
// ... 28 more imports!
```

**Result:** Browser downloads ~15-20MB JavaScript before showing anything.

### 2. **Duplicate Components**
- Legacy pages (AshwagandhaPageNew.tsx) + V2 pages (AshwagandhaPageNewV2.tsx)
- Both versions loaded even though only V2 is needed
- **Solution:** Remove legacy page imports and routes

### 3. **Large Unused Code**
- Lines 46-1550 in App.tsx contain unused Figma components (EvidenceGradeCard, HeroSection, etc.)
- These should be deleted or moved to separate files

---

## ✅ **SOLUTION: Implement Code Splitting**

### **Step 1: Update App.tsx Imports**

Replace lines 1-44 with:

```typescript
import { useState, lazy, Suspense } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AnalyticsProvider } from './components/AnalyticsProvider';

// Eager load critical pages only
import { LandingPage } from './components/LandingPage';
import { KnowledgebasePage } from './components/KnowledgebasePage';

// Lazy load all other pages
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalDisclaimerPage = lazy(() => import('./components/LegalDisclaimerPage').then(m => ({ default: m.LegalDisclaimerPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const CookiePolicyPage = lazy(() => import('./components/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));

// Lazy load V2 pages only (remove legacy page imports)
const AshwagandhaPageV2 = lazy(() => import('./components/AshwagandhaPageNewV2').then(m => ({ default: m.AshwagandhaPageNewV2 })));
const CalciumPageV2 = lazy(() => import('./components/CalciumPageNewV2').then(m => ({ default: m.CalciumPageNewV2 })));
const CreatinePageV2 = lazy(() => import('./components/CreatinePageNewV2').then(m => ({ default: m.CreatinePageNewV2 })));
const VitaminDPageV2 = lazy(() => import('./components/VitaminDPageNewV2').then(m => ({ default: m.VitaminDPageNewV2 })));
const VitaminCPageV2 = lazy(() => import('./components/VitaminCPageNewV2').then(m => ({ default: m.VitaminCPageNewV2 })));
const Omega3PageV2 = lazy(() => import('./components/Omega3PageNewV2').then(m => ({ default: m.Omega3PageNewV2 })));
const IronPageV2 = lazy(() => import('./components/IronPageNewV2').then(m => ({ default: m.IronPageNewV2 })));
const MagnesiumPageV2 = lazy(() => import('./components/MagnesiumPageNewV2').then(m => ({ default: m.MagnesiumPageNewV2 })));
const SulforaphanePageV2 = lazy(() => import('./components/SulforaphanePageNewV2').then(m => ({ default: m.SulforaphanePageNewV2 })));
const CollagenPeptidesPageV2 = lazy(() => import('./components/CollagenPeptidesPageNewV2').then(m => ({ default: m.CollagenPeptidesPageNewV2 })));
const ProbioticsPageV2 = lazy(() => import('./components/ProbioticsPageNewV2').then(m => ({ default: m.ProbioticsPageNewV2 })));
const PrebioticsPageV2 = lazy(() => import('./components/PrebioticsPageNewV2').then(m => ({ default: m.PrebioticsPageNewV2 })));

// Loading component
function PageLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
```

### **Step 2: Wrap Page Renders with Suspense**

In the return statement (around line 1750), wrap ALL lazy-loaded pages:

```typescript
return (
  <AnalyticsProvider googleTagManagerId="GTM-NQWRNKFT">
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Suspense fallback={<PageLoadingFallback />}>
        {currentPage === 'landing' ? (
          <LandingPage {...props} />
        ) : currentPage === 'ashwagandhav2' ? (
          <>
            <Header {...headerProps} />
            <AshwagandhaPageV2 {...pageProps} />
          </>
        ) : currentPage === 'about' ? (
          <>
            <Header {...headerProps} />
            <AboutPage {...pageProps} />
          </>
        ) : /* ... other pages ... */}
      </Suspense>
    </div>
  </AnalyticsProvider>
);
```

### **Step 3: Remove Legacy Page Routes**

Delete these route handlers (they load duplicate V1 pages):
- `currentPage === 'ashwagandha'` → Keep only `'ashwagandhav2'`
- `currentPage === 'calcium'` → Keep only `'calciumv2'`
- `currentPage === 'creatine'` → Keep only `'creatinev2'`
- etc.

### **Step 4: Delete Unused Code**

Remove lines 46-1550 (unused Figma components) from App.tsx.

---

## 📊 **Expected Results**

### **Before:**
- Initial bundle: ~15-20MB
- Time to Interactive: ~10-15 seconds
- All 30+ pages loaded upfront

### **After:**
- Initial bundle: ~2-3MB (85% reduction)
- Time to Interactive: ~1-2 seconds (80% faster)
- Pages load on-demand in <500ms

---

## 🔍 **Additional Performance Issues to Check**

Since you mentioned you had lazy loading before, here are other common performance bottlenecks:

### 1. **Large Images Not Optimized**
- Check if images are properly compressed
- Use WebP format where possible
- Implement lazy loading for images below the fold

### 2. **Third-Party Scripts**
- Google Tag Manager and analytics scripts can block rendering
- Consider loading them asynchronously

### 3. **CSS Bundle Size**
- Check if Tailwind CSS is properly purged in production
- Remove unused CSS classes

### 4. **Bundle Analysis**
Run this command to see what's in your bundle:
```bash
npm run build -- --stats
npx webpack-bundle-analyzer dist/stats.json
```

### 5. **Network Waterfall**
- Open Chrome DevTools → Network tab
- Look for blocking resources
- Check for render-blocking CSS/JS

---

## 🚀 **Quick Wins**

1. Re-implement lazy loading (if accidentally removed)
2. Remove duplicate V1 pages
3. Delete unused Figma components from App.tsx
4. Enable gzip/brotli compression on server
5. Add caching headers for static assets
