# Phase 7: Analytics & Tracking Implementation

## Overview
Implement comprehensive analytics tracking using Google Tag Manager (GTM), Google Analytics 4 (GA4), and other third-party analytics tools. This phase ensures all user interactions are tracked for conversion optimization and user behavior analysis.

## Current Status
- GTM container ID configured in environment variables
- `AnalyticsProvider` component exists in v0.2
- Need to migrate analytics utilities and tracking hooks to v0.3

## Goals
1. **GTM Integration**: Install GTM container on all pages
2. **Event Tracking**: Track all user interactions (clicks, scrolls, form submissions)
3. **E-commerce Tracking**: Track product views, clicks, and affiliate link clicks
4. **Custom Dimensions**: Track supplement categories, product brands, price ranges
5. **Conversion Goals**: Set up goals for affiliate clicks, retailer visits

## Analytics Stack

### Core Tools
1. **Google Tag Manager (GTM)**
   - Container ID: `GTM-XXXXXXX` (from `.env`)
   - Manages all tracking tags
   - No-code tag deployment

2. **Google Analytics 4 (GA4)**
   - Property ID: Configured in GTM
   - Enhanced e-commerce tracking
   - Custom events and dimensions

3. **Hotjar** (optional)
   - Heatmaps and session recordings
   - User feedback polls
   - Conversion funnel analysis

4. **Microsoft Clarity** (optional)
   - Session recordings
   - Heatmaps
   - Rage click detection

## Implementation Tasks

### Task 1: Migrate Analytics Utilities ✅
**Status**: Ready to implement

**Files to migrate from v0.2**:
- `src/utils/analytics.ts` - Core tracking functions
- `src/hooks/useSupplementTracking.ts` - Auto page view tracking
- `src/hooks/useProductTracking.ts` - Product impression tracking
- `src/contexts/AnalyticsProvider.tsx` - DataLayer initialization

**Actions**:
1. Copy analytics utilities from v0.2 to v0.3
2. Update import paths for Next.js structure
3. Convert to TypeScript if needed
4. Test dataLayer initialization

### Task 2: Install GTM Container ✅
**Status**: Ready to implement

**Implementation**:
1. Use `@next/third-parties/google` package (already installed)
2. Add `<GoogleTagManager>` to `app/layout.tsx`
3. Load GTM script in `<head>`
4. Initialize dataLayer array

**Code**:
```tsx
// app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Task 3: Page View Tracking ✅
**Status**: Ready to implement

**Events to track**:
- Landing page view
- Supplement page view (track supplement name)
- Product page view (track product ID, brand, price)
- Comparison page view
- Glossary term view

**Implementation**:
```typescript
// Track page views on mount
useEffect(() => {
  trackPageView({
    page_title: 'Vitamin D',
    page_type: 'supplement',
    page_path: window.location.pathname
  });
}, []);
```

### Task 4: User Interaction Tracking ✅
**Status**: Ready to implement

**Events to track**:

1. **Supplement Page Interactions**:
   - Section scroll (Benefits, Dosing, Safety)
   - Accordion expand/collapse
   - "Show More" button clicks
   - Table of contents clicks
   - Reference link clicks

2. **Product Page Interactions**:
   - Product card clicks
   - Retailer button clicks (iHerb, Amazon, etc.)
   - Price comparison table interactions
   - Filter selections
   - Sort changes

3. **Navigation**:
   - Header menu clicks
   - Search queries
   - Breadcrumb clicks
   - Footer link clicks

4. **Affiliate Actions** (CRITICAL):
   - Retailer link clicks (track retailer, product, price)
   - Certification link clicks (USP, ConsumerLab, NSF)
   - Amazon Associate link clicks

**Implementation**:
```typescript
// Track affiliate clicks
const handleRetailerClick = (retailer: string, productId: string, price: number) => {
  trackRetailerClick({
    event: 'retailer_click',
    retailer_name: retailer,
    product_id: productId,
    price: price,
    currency: 'USD',
    supplement_category: supplement
  });
  
  // Redirect to affiliate link
  window.open(affiliateUrl, '_blank');
};
```

### Task 5: E-commerce Tracking ✅
**Status**: Ready to implement

**Events to implement**:

1. **Product Impressions**:
   - Track when products appear in viewport
   - Send product data (name, brand, price, position)

2. **Product Clicks**:
   - Track clicks to product detail pages
   - Send product data + position in list

3. **Product Details**:
   - Track product page views with full details
   - Send supplement facts, ingredients, certifications

4. **Add to Cart** (external):
   - Track outbound clicks to retailer sites
   - Simulate "add to cart" event

**Implementation**:
```typescript
// Product impression tracking
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackProductImpression({
          item_name: product.name,
          item_brand: product.brand,
          item_category: supplement,
          price: product.price,
          index: product.position
        });
      }
    });
  }, { threshold: 0.5 });
  
  // Observe product cards
  productRefs.forEach(ref => observer.observe(ref.current));
}, [products]);
```

### Task 6: Custom Dimensions ✅
**Status**: Ready to implement

**Dimensions to track**:
1. Supplement category (vitamin-d, omega-3, etc.)
2. Product brand (NOW Foods, Life Extension, etc.)
3. Price range (< $10, $10-20, $20-50, > $50)
4. Dosage form (capsule, softgel, tablet, powder, liquid)
5. Certification (USP, ConsumerLab, NSF, none)
6. Retailer (iHerb, Amazon, Vitacost, etc.)
7. User journey (landing → supplement → product → retailer)

**Implementation**:
```typescript
// Set custom dimensions
window.dataLayer.push({
  event: 'page_view',
  supplement_category: 'vitamin-d',
  price_range: '$10-20',
  dosage_form: 'softgel',
  has_certification: 'USP',
  page_type: 'product_detail'
});
```

### Task 7: Conversion Goals ✅
**Status**: Ready to configure in GTM

**Goals to set up**:
1. **Affiliate Click** (primary conversion)
   - Event: `retailer_click`
   - Value: Product price
   - Currency: USD

2. **Product View** (micro-conversion)
   - Event: `product_view`
   - Category: Supplement name

3. **Comparison View** (engagement)
   - Event: `comparison_view`
   - Products compared count

4. **Search** (engagement)
   - Event: `site_search`
   - Search term
   - Results count

**GTM Configuration**:
- Create triggers for each event
- Set up GA4 events
- Configure conversion values
- Test in GTM Preview mode

### Task 8: Error Tracking ✅
**Status**: Ready to implement

**Errors to track**:
1. 404 pages (track attempted URL)
2. Product not found (track product ID)
3. Image load failures
4. API errors (if live data in future)
5. JavaScript errors (via GTM error listener)

**Implementation**:
```typescript
// Track 404 errors
useEffect(() => {
  if (isNotFound) {
    trackError({
      error_type: '404',
      error_page: window.location.pathname,
      error_message: 'Page not found'
    });
  }
}, [isNotFound]);
```

### Task 9: Performance Monitoring ✅
**Status**: Ready to implement

**Metrics to track**:
1. Page load time (Core Web Vitals)
2. First Contentful Paint (FCP)
3. Largest Contentful Paint (LCP)
4. Cumulative Layout Shift (CLS)
5. First Input Delay (FID)
6. Time to Interactive (TTI)

**Implementation**:
```typescript
// Track Core Web Vitals
import { onCLS, onFID, onLCP } from 'web-vitals';

onLCP(metric => {
  trackPerformance({
    event: 'web_vitals',
    metric_name: 'LCP',
    metric_value: metric.value,
    metric_rating: metric.rating
  });
});
```

### Task 10: A/B Testing Setup (Optional) 🔄
**Status**: Future enhancement

**Tools**:
- Google Optimize (sunset, need alternative)
- VWO (Visual Website Optimizer)
- Optimizely
- Next.js Middleware for server-side tests

**Tests to run**:
1. Product card layout (grid vs list)
2. CTA button text ("Buy Now" vs "View on [Retailer]")
3. Price display format
4. Dosing recommendations position
5. Comparison table design

## File Structure

```
src/
├── utils/
│   └── analytics.ts              # Core tracking functions
├── hooks/
│   ├── useSupplementTracking.ts  # Auto page view tracking
│   ├── useProductTracking.ts     # Product impression tracking
│   └── useScrollTracking.ts      # Scroll depth tracking
├── contexts/
│   └── AnalyticsProvider.tsx     # DataLayer initialization
└── types/
    └── analytics.ts              # TypeScript types for events

app/
├── layout.tsx                    # GTM container injection
└── components/
    └── AnalyticsWrapper.tsx      # Client component wrapper
```

## Environment Variables

Add to `.env.local`:
```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 (optional, managed by GTM)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Hotjar (optional)
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_HOTJAR_VERSION=6

# Microsoft Clarity (optional)
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
```

## Testing Checklist

### GTM Integration
- [ ] GTM container loads on all pages
- [ ] dataLayer array initializes before GTM script
- [ ] No console errors from GTM
- [ ] GTM Preview mode works

### Event Tracking
- [ ] Page views tracked on navigation
- [ ] Button clicks fire events
- [ ] Scroll depth tracked
- [ ] Search queries tracked
- [ ] Affiliate clicks tracked with product data

### E-commerce Tracking
- [ ] Product impressions fire on scroll
- [ ] Product clicks send correct data
- [ ] Product details tracked on page load
- [ ] Retailer clicks tracked as "add to cart"

### Data Quality
- [ ] All events include timestamp
- [ ] Product IDs match database
- [ ] Prices formatted correctly (USD)
- [ ] No duplicate events
- [ ] No PII (personally identifiable information)

### Performance
- [ ] GTM script loads async
- [ ] No render-blocking tracking code
- [ ] Tracking doesn't impact Core Web Vitals
- [ ] Events batch for efficiency

## Success Metrics

### After Phase 7 completion:
1. **100% page coverage** - All pages send page views
2. **Complete funnel** - Track landing → supplement → product → retailer
3. **Affiliate attribution** - Every click tracked with product/price
4. **Error monitoring** - 404s and errors captured
5. **Performance baseline** - Core Web Vitals tracked

### Post-deployment goals:
- Identify top-performing products
- Optimize low-converting pages
- A/B test CTAs and layouts
- Track ROI per retailer
- Monitor user drop-off points

## Migration from v0.2

### Files to copy:
1. `src/utils/analytics.ts` → Same path in v0.3
2. `src/hooks/useSupplementTracking.ts` → Same path
3. `src/hooks/useProductTracking.ts` → Same path
4. `src/contexts/AnalyticsProvider.tsx` → Same path

### Files to update:
1. `app/layout.tsx` - Add GTM container
2. `app/components/ProductDetailClient.tsx` - Add product tracking
3. `src/components/Header.tsx` - Add navigation tracking
4. `src/components/Footer.tsx` - Add footer link tracking

### New files to create:
1. `src/types/analytics.ts` - TypeScript event types
2. `src/hooks/useScrollTracking.ts` - Scroll depth tracking
3. `app/components/AnalyticsWrapper.tsx` - Client wrapper for GTM

## Implementation Steps

### Step 1: Copy Analytics Utilities (10 min)
```bash
# Copy from v0.2 to v0.3
cp ../suppl.me_Affiliate_Launch_v0.2/src/utils/analytics.ts src/utils/
cp ../suppl.me_Affiliate_Launch_v0.2/src/hooks/useSupplementTracking.ts src/hooks/
cp ../suppl.me_Affiliate_Launch_v0.2/src/hooks/useProductTracking.ts src/hooks/
cp ../suppl.me_Affiliate_Launch_v0.2/src/contexts/AnalyticsProvider.tsx src/contexts/
```

### Step 2: Install GTM in Layout (5 min)
Add `<GoogleTagManager>` to `app/layout.tsx`

### Step 3: Add Page View Tracking (15 min)
Update all page components to track views on mount

### Step 4: Add Click Tracking (30 min)
Add tracking to all interactive elements (buttons, links)

### Step 5: Add E-commerce Tracking (45 min)
Implement product impressions and clicks

### Step 6: Test Everything (30 min)
Use GTM Preview mode to verify all events

### Total Time: ~2.5 hours

## Next Steps (Phase 8)
After analytics is complete:
- Performance optimization (image lazy loading, code splitting)
- Accessibility audit (WCAG 2.1 AA compliance)
- SEO testing (Lighthouse, Search Console)
- Load testing (simulate 1000+ concurrent users)
- Security audit (CSP headers, XSS prevention)

## Resources

### Documentation
- [GTM with Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager)
- [GA4 E-commerce Events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [Web Vitals](https://web.dev/vitals/)

### Tools
- [GTM Preview Mode](https://tagmanager.google.com/)
- [GA4 DebugView](https://analytics.google.com/)
- [Tag Assistant](https://tagassistant.google.com/)

---

**Status**: Ready to begin Phase 7 implementation  
**Estimated Time**: 2.5 hours  
**Priority**: High (critical for conversion tracking)
