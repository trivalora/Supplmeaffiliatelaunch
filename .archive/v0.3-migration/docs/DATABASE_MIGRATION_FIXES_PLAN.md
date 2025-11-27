# Database Migration Fixes - Comprehensive Plan

**Date**: November 26, 2025  
**Status**: Analysis Complete - Ready for Implementation  
**Priority**: CRITICAL - Blocking Production Deploy

---

## 🔍 Root Cause Analysis

### Problem Summary
The build is failing because `ProductComparisonClient.tsx` expects product fields that don't exist in the current database schema or API responses.

### Build Error
```
./src/components/ProductComparisonClient.tsx:109:21
Type error: Property 'filters' does not exist on type 'Product'.
```

### Missing Fields in Database Schema

Comparing **Old JSON Structure** vs **Current Database Schema**:

| Field Name | Old JSON | Current DB | Impact |
|------------|----------|------------|--------|
| `filters` | ✅ Array | ❌ Missing | HIGH - Used for dietary filtering (vegan, gluten-free, etc.) |
| `amount_per_serving` | ✅ Number | ❌ Missing | HIGH - Dosage information displayed to users |
| `net_contents` | ✅ String | ❌ Missing | MEDIUM - Package size info |
| `unit` | ✅ String | ❌ Missing | HIGH - Required for price-per-unit calculations |
| `best_price_per_unit` | ✅ Number | ❌ Calculated | HIGH - Core comparison metric |
| `best_total_price` | ✅ Number | ❌ Calculated | HIGH - Primary sorting field |
| `retailer_prices` | ✅ Array | ❌ Different | CRITICAL - Different structure in API |
| `product_image_url` | ✅ String | ✅ Exists | ✅ OK |
| `brand` | ✅ String | ✅ Exists | ✅ OK |
| `dsld_id` | ✅ String | ✅ Exists | ✅ OK |

### Old JSON Product Structure
```json
{
  "id": "57173_organic traditions_...",
  "dsld_id": "57173",
  "brand": "Organic Traditions",
  "dsld_product_name": "Ashwagandha Root Powder",
  "product_image_url": "https://...",
  "best_price_per_unit": 0.001466,
  "best_total_price": 7.33,
  "unit": "mg",
  "amount_per_serving": 5000,
  "net_contents": "7 oz.; 200 g",
  "filters": [],  // Array of strings: ['vegan', 'gluten_free', ...]
  "retailer_prices": [
    {
      "retailer": "iHerb",
      "price": 7.33,
      "price_per_unit": 0.001466,
      "product_url": "https://...",
      "product_name": "...",
      "image_url": "..."
    }
  ]
}
```

### Current API Response Structure
```json
{
  "id": "uuid",
  "json_id": "57173_organic traditions_...",
  "dsld_id": "57173",
  "brand": "Organic Traditions",
  "product_name": "...",
  "product_image_url": "https://...",
  "best_total_price": 7.33,  // Calculated from prices
  "prices": [
    {
      "retailer_name": "iHerb",
      "price": 7.33,
      "product_url": "..."
    }
  ]
}
```

---

## 📋 Implementation Plan

### Phase 1: Database Schema Updates (30 min)

**1.1 Add Missing Columns to Products Table**

Create migration: `supabase/migrations/20251126160000_add_product_metadata.sql`

```sql
-- Add missing product metadata columns
ALTER TABLE api.products 
  ADD COLUMN IF NOT EXISTS unit TEXT,
  ADD COLUMN IF NOT EXISTS amount_per_serving NUMERIC,
  ADD COLUMN IF NOT EXISTS net_contents TEXT,
  ADD COLUMN IF NOT EXISTS filters TEXT[] DEFAULT '{}'::text[];

-- Create index for filter searches
CREATE INDEX IF NOT EXISTS idx_products_filters 
  ON api.products USING GIN(filters);

-- Add comments
COMMENT ON COLUMN api.products.unit IS 'Unit of measurement (mg, mcg, IU, etc.)';
COMMENT ON COLUMN api.products.amount_per_serving IS 'Amount of active ingredient per serving';
COMMENT ON COLUMN api.products.net_contents IS 'Package size/net contents (e.g., "7 oz.; 200 g")';
COMMENT ON COLUMN api.products.filters IS 'Product attributes: vegan, gluten_free, organic, etc.';
```

**1.2 Create View for Enriched Product Data**

```sql
-- Create enriched product view with calculated fields
CREATE OR REPLACE VIEW api.product_comparison_view AS
SELECT 
  p.id,
  p.json_id,
  p.dsld_id,
  p.supplement_id,
  p.supplement_slug,
  p.brand,
  p.product_name,
  p.dsld_product_name,
  p.product_image_url,
  p.unit,
  p.amount_per_serving,
  p.net_contents,
  p.filters,
  p.third_party_tested,
  p.certifications,
  -- Calculate best prices
  MIN(pr.price) as best_total_price,
  MIN(pr.price / NULLIF(p.amount_per_serving, 0)) as best_price_per_unit,
  -- Aggregate retailer prices
  json_agg(
    json_build_object(
      'retailer', r.name,
      'retailer_slug', r.slug,
      'retailer_display_name', r.display_name,
      'price', pr.price,
      'price_per_unit', pr.price / NULLIF(p.amount_per_serving, 0),
      'currency', pr.currency,
      'product_url', pr.product_url,
      'affiliate_url', pr.affiliate_url,
      'in_stock', pr.in_stock,
      'logo_url', r.logo_url,
      'button_style', r.button_style
    ) ORDER BY pr.price ASC
  ) FILTER (WHERE pr.id IS NOT NULL) as retailer_prices,
  COUNT(DISTINCT pr.retailer_id) as available_retailers
FROM api.products p
LEFT JOIN api.prices pr ON p.id = pr.product_id
LEFT JOIN api.retailers r ON pr.retailer_id = r.id
GROUP BY p.id;
```

### Phase 2: Data Migration Script (30 min)

**Create script**: `scripts/migration/enrich-products-with-metadata.mjs`

This script will:
1. Read old JSON files from `public/api/products/supplements/`
2. Extract `unit`, `amount_per_serving`, `net_contents`, `filters` for each product
3. Update Supabase products table with this metadata
4. Match products by `json_id` field

### Phase 3: Update API Endpoints (45 min)

**3.1 Update `/api/supplements/[slug]/products`**

Change from using `products` table to `product_comparison_view`:

```typescript
const { data, error } = await supabase
  .from('product_comparison_view')
  .select('*')
  .eq('supplement_slug', slug)
  .order('best_total_price', { ascending: true });
```

**3.2 Update `/api/products/[id]`**

Use the enriched view as well.

**3.3 Update `/api/products/search`**

Include new fields in search results.

### Phase 4: Update TypeScript Types (15 min)

**4.1 Update `src/hooks/useSupplementProducts.ts`**

```typescript
interface Price {
  retailer: string;
  retailer_slug: string;
  retailer_display_name: string;
  price: number;
  price_per_unit: number;
  currency: string;
  product_url: string;
  affiliate_url: string | null;
  in_stock: boolean;
  logo_url: string | null;
  button_style: Record<string, string>;
}

interface Product {
  id: string;
  json_id: string;
  dsld_id: string | null;
  brand: string;
  product_name: string;
  dsld_product_name: string | null;
  product_image_url: string | null;
  unit: string | null;
  amount_per_serving: number | null;
  net_contents: string | null;
  filters: string[];  // ✅ ADD THIS
  third_party_tested: boolean;
  certifications: string[];
  best_total_price: number | null;
  best_price_per_unit: number | null;
  retailer_prices: Price[];  // ✅ RESTRUCTURE THIS
  available_retailers: number;
  supplement_slug: string;
}
```

**4.2 Update `src/lib/supabase/types.ts`**

Add view types for `product_comparison_view`.

### Phase 5: Update ProductComparisonClient (30 min)

**5.1 Remove Client-Side Filtering Logic**

The old code extracts filters from products:
```typescript
// ❌ OLD: Extract filters from products
useEffect(() => {
  if (apiProducts && apiProducts.length > 0) {
    const filterMap: Record<string, any> = {};
    apiProducts.forEach(product => {
      if (product.filters && Array.isArray(product.filters)) {
        product.filters.forEach((filterKey: string) => {
          // ...
        });
      }
    });
  }
}, [apiProducts]);
```

**5.2 Use Database Filters**

With the database schema updated, filters are now part of the product data:
```typescript
// ✅ NEW: Filters come from API
const filters = useMemo(() => {
  if (!apiProducts) return {};
  
  const filterCounts: Record<string, number> = {};
  apiProducts.forEach(product => {
    product.filters?.forEach(f => {
      filterCounts[f] = (filterCounts[f] || 0) + 1;
    });
  });
  
  return filterCounts;
}, [apiProducts]);
```

**5.3 Update Price Calculations**

Change from accessing nested `retailer_prices[0]` to using pre-calculated fields:
```typescript
// ❌ OLD
const lowestRetailerPrice = product.retailer_prices?.sort((a, b) => 
  a.price_per_unit - b.price_per_unit
)[0];

// ✅ NEW
const bestPrice = product.best_total_price;
const bestPricePerUnit = product.best_price_per_unit;
const lowestRetailer = product.retailer_prices?.[0]; // Already sorted by price
```

### Phase 6: Testing & Validation (30 min)

**6.1 Test Checklist**
- [ ] Run migrations on development database
- [ ] Run data enrichment script
- [ ] Verify all products have metadata
- [ ] Test API endpoints return correct structure
- [ ] Test ProductComparisonClient with real data
- [ ] Test filtering (dietary, price range)
- [ ] Test sorting (price, brand)
- [ ] Test pagination
- [ ] Run `npm run build` - must succeed
- [ ] Test in production mode (`npm run start`)

**6.2 Validation Queries**

```sql
-- Check that products have metadata
SELECT 
  COUNT(*) as total,
  COUNT(unit) as has_unit,
  COUNT(amount_per_serving) as has_amount,
  COUNT(net_contents) as has_contents,
  COUNT(CASE WHEN array_length(filters, 1) > 0 THEN 1 END) as has_filters
FROM api.products;

-- Check view works correctly
SELECT * FROM api.product_comparison_view LIMIT 5;

-- Check filter distribution
SELECT 
  unnest(filters) as filter_name,
  COUNT(*) as product_count
FROM api.products
GROUP BY filter_name
ORDER BY product_count DESC;
```

---

## 🚀 Step-by-Step Execution

### Step 1: Create Migration File
```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3
```

Create `supabase/migrations/20251126160000_add_product_metadata.sql`

### Step 2: Apply Migration
```bash
npx supabase db push
```

### Step 3: Create Data Enrichment Script
Create `scripts/migration/enrich-products-with-metadata.mjs`

### Step 4: Run Enrichment
```bash
node scripts/migration/enrich-products-with-metadata.mjs
```

### Step 5: Update API Routes
Update all 3 product endpoints to use new view/fields

### Step 6: Update Types
Update TypeScript interfaces in hooks

### Step 7: Update ProductComparisonClient
Fix the component to use new data structure

### Step 8: Test Build
```bash
npm run build
```

---

## 📊 Expected Outcomes

### Before
- ❌ Build fails with TypeScript errors
- ❌ Missing critical product metadata
- ❌ API returns incomplete data
- ❌ ProductComparisonClient broken

### After
- ✅ Build succeeds
- ✅ All product metadata available
- ✅ API returns complete, enriched data
- ✅ ProductComparisonClient works with filters
- ✅ Price comparisons accurate
- ✅ Dietary filters functional
- ✅ Sorting works correctly
- ✅ Ready for production deploy

---

## 🎯 Timeline

| Task | Duration | Dependencies |
|------|----------|--------------|
| Schema migration | 15 min | None |
| Data enrichment script | 30 min | Schema complete |
| Run enrichment | 15 min | Script complete |
| Update API endpoints | 45 min | Data enriched |
| Update TypeScript types | 15 min | API updated |
| Update ProductComparisonClient | 30 min | Types updated |
| Testing & validation | 30 min | All updates complete |
| **TOTAL** | **3 hours** | Sequential |

---

## 📝 Files to Modify

### New Files
1. `supabase/migrations/20251126160000_add_product_metadata.sql`
2. `supabase/migrations/20251126160100_create_comparison_view.sql`
3. `scripts/migration/enrich-products-with-metadata.mjs`

### Modified Files
1. `app/api/supplements/[slug]/products/route.ts`
2. `app/api/products/[id]/route.ts`
3. `app/api/products/search/route.ts`
4. `src/hooks/useSupplementProducts.ts`
5. `src/lib/supabase/types.ts`
6. `src/components/ProductComparisonClient.tsx`

### Documentation
1. `docs/API_DOCUMENTATION.md` - Update with new fields
2. `docs/DATABASE_MIGRATION_COMPLETE.md` - Add Phase 2 completion
3. `docs/WEEK_3_COMPLETE.md` - Update with schema changes

---

## ⚠️ Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Data enrichment fails | HIGH | Test on subset first, backup data |
| Missing filters in old JSON | MEDIUM | Default to empty array `[]` |
| Price calculations wrong | HIGH | Validate against old JSON files |
| Build still fails | CRITICAL | Incremental testing, rollback plan |

---

## ✅ Success Criteria

1. `npm run build` completes successfully
2. No TypeScript errors
3. All product comparison pages render
4. Filters work correctly (vegan, gluten-free, etc.)
5. Price sorting accurate
6. Dosage information displays
7. All retailer prices show correctly
8. Production deployment succeeds

---

**Next Action**: Begin Phase 1 - Create schema migration files
