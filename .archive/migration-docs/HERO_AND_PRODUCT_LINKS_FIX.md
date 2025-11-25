# Hero Full Width & Product Row Links - Fix Complete

## Issues Fixed

### 1. Hero Image Not Spanning Full Width ✅

**Problem**: Hero section was attempting to break out to full viewport width using negative margins and `width: '100vw'`, but content inside was still constrained by padding.

**Root Cause**: The `<div data-layout-container>` **inside** the hero section had responsive padding:
- `px-[2vw]` on mobile
- `px-[var(--page-padding-inline)]` on desktop
- The hero h1 had additional `px-[5vw]` on mobile
- The hero p had additional `px-[10vw]` on mobile

These padding constraints prevented the hero content from utilizing the full viewport width that the parent container was breaking out to.

**Solution Applied**:
```tsx
// BEFORE (src/components/LandingPage.tsx line ~156)
<div data-layout-container className="relative z-10 !px-[2vw] md:px-[var(--page-padding-inline)]">
  <div className="text-center max-w-4xl mx-auto">
    <h1 className="mb-4 text-white text-4xl md:text-5xl px-[5vw] md:px-0">
    <p className="mb-6 text-white/80 text-base md:text-lg max-w-2xl mx-auto px-[10vw] md:px-0">

// AFTER
<div className="relative z-10 w-full px-[var(--page-padding-inline)]">
  <div className="text-center max-w-4xl mx-auto">
    <h1 className="mb-4 text-white text-4xl md:text-5xl">
    <p className="mb-6 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
```

**Changes**:
1. Removed `data-layout-container` attribute (no longer needs special layout behavior)
2. Removed responsive padding overrides (`!px-[2vw]` and `md:px-[var(--page-padding-inline)]`)
3. Added consistent padding: `px-[var(--page-padding-inline)]` for all screen sizes
4. Removed additional padding from h1 (`px-[5vw] md:px-0` → removed)
5. Removed additional padding from p (`px-[10vw] md:px-0` → removed)
6. Added `w-full` to ensure content div uses full available width

**Result**: Hero section now properly spans the full viewport width while maintaining appropriate padding for text content.

---

### 2. Product Rows Not Clickable in Comparison Pages ✅

**Problem**: Product rows in comparison tables displayed product information but had no click interaction. Users couldn't navigate to individual product detail pages.

**Solution Applied**: Added onClick handlers to both desktop table rows and mobile cards.

#### Desktop Table Rows
```tsx
// BEFORE (src/components/ProductComparisonClient.tsx line ~466)
<tr 
  key={idx} 
  className={`border-b-2 border-secondary/30 hover:bg-tertiary/70 transition-colors ${idx % 2 === 0 ? 'bg-background' : 'bg-tertiary/20'}`}
>

// AFTER
<tr 
  key={idx} 
  onClick={() => {
    if (productId) {
      router.push(`/${supplementId}/product/${productId}`);
      trackComparisonProductClick(
        {
          id: productId,
          name: product.dsld_product_name || product.brand || 'Unknown Product',
          brand: product.brand || 'Unknown Brand',
          price: lowestRetailerPrice?.price || 0,
          pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
          unit: product.unit || 'unit',
          retailer: lowestRetailerPrice?.retailer || 'Unknown',
          productUrl: lowestRetailerPrice?.product_url || '',
          position: idx + 1,
        },
        supplementId,
        'product_row'
      );
    }
  }}
  className={`border-b-2 border-secondary/30 hover:bg-tertiary/70 transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-background' : 'bg-tertiary/20'}`}
>
```

#### Mobile Cards
```tsx
// BEFORE (src/components/ProductComparisonClient.tsx line ~618)
<div key={idx} className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden">

// AFTER
<div 
  key={idx} 
  onClick={() => {
    if (productId) {
      router.push(`/${supplementId}/product/${productId}`);
      trackComparisonProductClick(
        {
          id: productId,
          name: product.dsld_product_name || product.brand || 'Unknown Product',
          brand: product.brand || 'Unknown Brand',
          price: lowestRetailerPrice?.price || 0,
          pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
          unit: product.unit || 'unit',
          retailer: lowestRetailerPrice?.retailer || 'Unknown',
          productUrl: lowestRetailerPrice?.product_url || '',
          position: idx + 1,
        },
        supplementId,
        'product_row'
      );
    }
  }}
  className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
>
```

**Changes**:
1. Added `productId` constant: `product.id || \`${product.brand?.toLowerCase().replace(/\s+/g, '-')}-${idx}\``
2. Added onClick handler that:
   - Navigates to product detail page: `/${supplementId}/product/${productId}`
   - Tracks click via `trackComparisonProductClick()` with action type `'product_row'`
3. Added `cursor-pointer` class to indicate clickability
4. Mobile cards: Added `hover:shadow-md transition-shadow` for hover feedback

**Result**: Users can now click any product row/card to navigate to the detailed product page. All clicks are tracked via analytics with context (supplement, position, price, etc.).

---

## Technical Details

### Hero Width Calculation
The hero section uses a CSS technique to break out of container constraints:
```tsx
style={{
  minHeight: '600px',
  height: '75vh',
  maxHeight: '75vh',
  marginTop: 'var(--header-height)',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)'
}}
```

This works because:
1. `width: '100vw'` sets element to full viewport width
2. `marginLeft: 'calc(-50vw + 50%)'` shifts element left to viewport edge
3. `marginRight: 'calc(-50vw + 50%)'` shifts element right to viewport edge
4. Content inside can then control its own padding without breaking the full-width effect

### Product ID Generation
Product IDs are derived from:
- Primary: `product.id` (from data pipeline)
- Fallback: `${product.brand?.toLowerCase().replace(/\s+/g, '-')}-${idx}` (slug from brand + index)

This ensures every product has a valid ID for routing, even if the data pipeline didn't assign one.

### Analytics Tracking
Product row clicks are tracked with:
- Event type: `'product_row'` (distinguishes from 'buy_now' button clicks)
- Context: supplementId, productId, price, position, etc.
- Function: `trackComparisonProductClick()` from `@/lib/analytics`

---

## Files Modified

1. **src/components/LandingPage.tsx**
   - Line ~156: Removed constraining padding from hero content div
   - Removed data-layout-container attribute
   - Simplified to consistent padding using CSS variable

2. **src/components/ProductComparisonClient.tsx**
   - Line ~466: Added onClick handler to desktop table rows
   - Line ~618: Added onClick handler to mobile cards
   - Added cursor-pointer class to both
   - Added productId generation logic
   - Added analytics tracking for row clicks

---

## Testing Instructions

### Hero Full Width
1. Open landing page: http://localhost:3001
2. Check hero section spans full viewport width (no horizontal gaps)
3. Verify background image covers full width
4. Test on multiple screen sizes (mobile, tablet, desktop)

### Product Links
1. Navigate to any comparison page (e.g., http://localhost:3001/comparison/vitamin-d)
2. **Desktop**: Click any table row → should navigate to product detail page
3. **Mobile**: Tap any product card → should navigate to product detail page
4. Verify URL format: `/[supplement]/product/[productId]`
5. Check browser DevTools Console for analytics events:
   ```javascript
   window.dataLayer // Should show trackComparisonProductClick events
   ```

---

## Next Steps

Both issues are now resolved. The dev server is running on http://localhost:3001 - please test:
1. Landing page hero spans full width
2. Product rows/cards navigate to detail pages on click

If any issues persist, check:
- Browser DevTools → Console for errors
- Network tab for failed routes
- React DevTools for component state
