# Analytics Tracking Implementation - Product Comparison Page

## Overview
Comprehensive Google Analytics Enhanced Ecommerce tracking for the product comparison page, including product impressions and click tracking.

## Implementation Date
December 2024

## Files Modified
1. `src/utils/analytics.ts` - Added new tracking functions
2. `src/components/ProductComparison.tsx` - Integrated tracking throughout component

## New Analytics Functions

### 1. trackComparisonProductImpression()
Tracks when products are displayed on the comparison page.

**Fires when:**
- Products load on comparison page
- Filters change (search, dietary, sort)
- Supplement category changes

**Data captured:**
```typescript
{
  event: 'comparison_product_impressions',
  ecommerce: {
    currencyCode: 'USD',
    impressions: [{
      id: 'product-id',
      name: 'Product Name',
      brand: 'Brand Name',
      category: 'supplement-category',
      variant: 'Retailer',
      position: 1,
      price: '19.99',
      dimension1: '0.0245',        // pricePerUnit
      dimension2: 'serving',        // unit
      dimension3: '24g protein',    // dosage
      dimension4: '5 lbs',          // netContents
      dimension5: '3',              // availableRetailers
      list: 'Product Comparison'
    }]
  },
  products: [...],                 // Full product objects
  supplementName: 'whey',
  totalProducts: 25,
  appliedFilters: {
    search: 'optimum',
    dietary: ['vegan', 'non_gmo'],
    sortBy: 'price_asc'
  },
  pageUrl: 'https://suppl.me/whey-comparison',
  timestamp: '2024-12-22T18:30:00.000Z'
}
```

### 2. trackComparisonProductClick()
Tracks when users interact with products.

**Fires when:**
- User clicks product card to view details (`action: 'view_details'`)
- User clicks "Buy Now" button (`action: 'buy_now'`)

**Data captured:**
```typescript
{
  event: 'comparison_product_click',
  ecommerce: {
    click: {
      actionField: { list: 'Product Comparison' },
      products: [{
        id: 'product-id',
        name: 'Product Name',
        brand: 'Brand Name',
        category: 'supplement-category',
        variant: 'Retailer',
        position: 1,
        price: '19.99'
      }]
    }
  },
  action: 'view_details' | 'buy_now',
  supplementName: 'whey',
  pageUrl: 'https://suppl.me/whey-comparison',
  timestamp: '2024-12-22T18:30:00.000Z'
}
```

## Implementation Details

### Product Impression Tracking (useEffect Hook)
Located after `filteredProducts` calculation (~line 190):

```typescript
useEffect(() => {
  if (!filteredProducts || filteredProducts.length === 0 || !currentSupplement) return;

  const productsForTracking = filteredProducts.map((product, idx) => {
    const lowestRetailerPrice = product.retailer_prices?.sort(...)[0];
    return {
      id: product.id || `${product.brand}-${idx}`,
      name: product.dsld_product_name || product.brand,
      brand: product.brand,
      price: lowestRetailerPrice?.price || 0,
      pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
      unit: product.unit || 'unit',
      retailer: lowestRetailerPrice?.retailer,
      productUrl: lowestRetailerPrice?.product_url,
      imageUrl: product.product_image_url,
      position: idx + 1,
      dosage: product.amount_per_serving ? `${product.amount_per_serving} ${product.unit}` : undefined,
      netContents: product.net_contents,
      availableRetailers: product.retailer_prices?.length || 0,
    };
  });

  trackComparisonProductImpression(
    productsForTracking,
    currentSupplement,
    {
      search: searchQuery || undefined,
      dietary: activeDietaryFilters.size > 0 ? Array.from(activeDietaryFilters) : undefined,
      sortBy,
    }
  );
}, [filteredProducts, currentSupplement, searchQuery, activeDietaryFilters, sortBy]);
```

**Dependencies:**
- `filteredProducts` - Re-tracks when products change
- `currentSupplement` - Re-tracks when supplement category changes
- `searchQuery` - Re-tracks when search changes
- `activeDietaryFilters` - Re-tracks when filters change
- `sortBy` - Re-tracks when sort order changes

### Product Click Tracking (Desktop Table)
Desktop table row (~line 560):

```typescript
<tr onClick={() => {
  trackComparisonProductClick(
    {
      id: product.id,
      name: product.dsld_product_name,
      brand: product.brand,
      price: lowestRetailerPrice?.price,
      pricePerUnit: lowestRetailerPrice?.price_per_unit,
      unit: product.unit,
      retailer: lowestRetailerPrice?.retailer,
      productUrl: lowestRetailerPrice?.product_url,
      position: idx + 1,
    },
    currentSupplement,
    'view_details'
  );
  reactNavigate(`/${currentSupplement}/product/${product.id}`);
}}>
```

### Product Click Tracking (Mobile Cards)
Mobile card div (~line 770):

```typescript
<div onClick={() => {
  trackComparisonProductClick(...);  // Same data as desktop
  reactNavigate(`/${currentSupplement}/product/${product.id}`);
}}>
```

### Buy Button Click Tracking
All retailer buy buttons (desktop ~line 680, mobile ~line 860):

```typescript
<a 
  href={addUTMParameters(r.product_url)}
  onClick={(e) => {
    e.stopPropagation();  // Prevent card click
    trackComparisonProductClick(
      {
        id: product.id,
        name: product.dsld_product_name,
        brand: product.brand,
        price: r.price,             // Specific retailer price
        pricePerUnit: r.price_per_unit,
        unit: product.unit,
        retailer: r.retailer,       // Specific retailer
        productUrl: r.product_url,
        position: idx + 1,
      },
      currentSupplement,
      'buy_now'
    );
  }}
>
  Buy Now
</a>
```

**Note:** `e.stopPropagation()` prevents triggering the parent card's `view_details` click event.

### Tracked Retailers (8 types)
1. iHerb
2. Amazon
3. GNC
4. Walmart
5. Bodybuilding.com
6. Vitacost
7. Supplement Warehouse
8. Generic (fallback)

## Testing Instructions

### 1. Open Browser Console
```bash
# Navigate to comparison page
http://localhost:3000/whey-comparison
```

### 2. View Data Layer
```javascript
// In browser console
window.dataLayer
```

### 3. Test Product Impressions
1. Load comparison page
2. Check console for `comparison_product_impressions` event
3. Verify `ecommerce.impressions` array contains products
4. Check `appliedFilters` shows current state

### 4. Test Product Click (View Details)
1. Click any product card
2. Check console for `comparison_product_click` event
3. Verify `action: 'view_details'`
4. Verify `ecommerce.click.products[0]` has product data

### 5. Test Buy Button Click
1. Click any "Buy Now" button
2. Check console for `comparison_product_click` event
3. Verify `action: 'buy_now'`
4. Verify specific retailer data in product object
5. Confirm only one event fires (not both click events)

### 6. Test Filter Changes
1. Change search query
2. Check console for new `comparison_product_impressions` event
3. Verify `appliedFilters.search` updated

### 7. Test Sort Changes
1. Change sort order
2. Check console for new `comparison_product_impressions` event
3. Verify `appliedFilters.sortBy` updated

## Google Analytics Setup

### Custom Dimensions Configuration
Configure in GA4:

| Dimension | Name | Scope | Description |
|-----------|------|-------|-------------|
| dimension1 | pricePerUnit | Hit | Price per unit (e.g., per serving, per oz) |
| dimension2 | unit | Hit | Unit of measurement (serving, oz, tablet) |
| dimension3 | dosage | Hit | Amount per serving (e.g., "24g protein", "1000mg") |
| dimension4 | netContents | Hit | Net contents (e.g., "5 lbs", "60 tablets") |
| dimension5 | availableRetailers | Hit | Number of retailers offering product |

### Enhanced Ecommerce Reports
Once configured, the following reports will populate:

1. **Product Performance**
   - View product impressions
   - Click-through rates
   - Product detail views
   - Buy button clicks

2. **Product List Performance**
   - "Product Comparison" list metrics
   - Position-based performance

3. **Shopping Behavior**
   - Impression → Click → Purchase funnel
   - Conversion rates per product

4. **Filter Analysis** (Custom Report)
   - Filter usage patterns
   - Sort preference analysis
   - Search query performance

## Benefits

### 1. Product Performance Insights
- Identify best-performing products
- Track which products get clicked most
- Measure buy button effectiveness

### 2. Position Analysis
- Understand position bias (do users click top products?)
- Optimize sort order based on engagement

### 3. Filter Effectiveness
- Track which filters are used most
- Identify popular search queries
- Understand user intent

### 4. Retailer Performance
- Compare retailer click-through rates
- Identify preferred retailers
- Optimize retailer display order

### 5. Conversion Funnel
- Measure impression → click → purchase rates
- Identify drop-off points
- Optimize for conversions

## Data Flow

```
User Action → trackComparisonProductImpression/Click()
              ↓
          pushToDataLayer()
              ↓
         window.dataLayer
              ↓
         Google Tag Manager
              ↓
     Google Analytics 4 + Other Tools
```

## Bundle Impact
- **Before:** ProductComparison.js = 18.25 kB
- **After:** ProductComparison.js = 27.97 kB
- **Increase:** +9.72 kB (+53%)
- **Gzipped:** 6.45 kB (minimal impact)

## Future Enhancements

### 1. Scroll Depth Tracking
Track how far users scroll through product list:
```typescript
trackComparisonScrollDepth('25%', currentSupplement);
```

### 2. Time on Page
Track engagement duration:
```typescript
trackComparisonDuration(120, currentSupplement); // 120 seconds
```

### 3. Load More Tracking
Track when users click "Load More":
```typescript
trackComparisonLoadMore(displayedCount, totalProducts, currentSupplement);
```

### 4. Filter Abandon
Track when filters are applied but no results found:
```typescript
trackComparisonFilterAbandon(filters, currentSupplement);
```

### 5. Price Range Analysis
Track which price ranges get most clicks:
```typescript
trackComparisonPriceRange(minPrice, maxPrice, avgPrice, currentSupplement);
```

## Debugging Tips

### Check if tracking is working:
```javascript
// Enable GTM debug mode
window.dataLayer = window.dataLayer || [];
console.log('Current dataLayer:', window.dataLayer);

// Watch for new events
const originalPush = window.dataLayer.push;
window.dataLayer.push = function(...args) {
  console.log('New dataLayer event:', args);
  return originalPush.apply(this, args);
};
```

### Validate event structure:
```javascript
// Check last event
const lastEvent = window.dataLayer[window.dataLayer.length - 1];
console.log('Last event:', lastEvent);

// Validate ecommerce structure
if (lastEvent.ecommerce) {
  console.log('Ecommerce data valid:', {
    hasImpressions: !!lastEvent.ecommerce.impressions,
    hasClick: !!lastEvent.ecommerce.click,
    productCount: lastEvent.ecommerce.impressions?.length || lastEvent.ecommerce.click?.products?.length
  });
}
```

## Related Documentation
- [Google Analytics Enhanced Ecommerce](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce)
- [GTM Data Layer](https://developers.google.com/tag-manager/devguide/datalayer)
- Project: `copilot-instructions.md` - Analytics System Details

## Commit Reference
**Commit:** d84e6b3a
**Message:** feat: add comprehensive product impression and click tracking to comparison page
**Date:** December 2024
