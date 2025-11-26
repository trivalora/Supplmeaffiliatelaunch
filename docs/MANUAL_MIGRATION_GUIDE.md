# Manual Migration Guide

**Status**: Ready to run  
**Estimated Time**: 5 minutes

---

## Step 1: Access Supabase SQL Editor

1. Go to: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new
2. You should see a SQL editor interface

---

## Step 2: Run Migration 1 - Add Product Metadata Columns

**Copy and paste this entire SQL block into the editor:**

```sql
-- Migration: Add missing product metadata fields
-- Date: November 26, 2025
-- Purpose: Add fields required for product comparison functionality

-- Add missing columns to products table
ALTER TABLE api.products 
  ADD COLUMN IF NOT EXISTS unit TEXT,
  ADD COLUMN IF NOT EXISTS amount_per_serving NUMERIC,
  ADD COLUMN IF NOT EXISTS net_contents TEXT,
  ADD COLUMN IF NOT EXISTS filters TEXT[] DEFAULT '{}'::text[];

-- Create GIN index for efficient filter searches
CREATE INDEX IF NOT EXISTS idx_products_filters 
  ON api.products USING GIN(filters);

-- Add comments for documentation
COMMENT ON COLUMN api.products.unit IS 'Unit of measurement for amount_per_serving (mg, mcg, IU, g, etc.)';
COMMENT ON COLUMN api.products.amount_per_serving IS 'Amount of active ingredient per serving (numeric value)';
COMMENT ON COLUMN api.products.net_contents IS 'Package size/net contents (e.g., "7 oz.; 200 g")';
COMMENT ON COLUMN api.products.filters IS 'Product attributes array: vegan, gluten_free, organic, kosher, etc.';

-- Create index for unit-based lookups
CREATE INDEX IF NOT EXISTS idx_products_unit_amount 
  ON api.products(unit, amount_per_serving) 
  WHERE amount_per_serving IS NOT NULL;

-- Success message
SELECT 'Successfully added product metadata columns' as status;
```

**Click "Run" and verify you see**: `Successfully added product metadata columns`

---

## Step 3: Run Migration 2 - Create Comparison View

**Copy and paste this entire SQL block into a NEW query:**

```sql
-- Migration: Create product comparison view with enriched data
-- Date: November 26, 2025
-- Purpose: Provide pre-calculated best prices and aggregated retailer data

-- Drop existing view if it exists
DROP VIEW IF EXISTS api.product_comparison_view;

-- Create enriched product view for comparison pages
CREATE VIEW api.product_comparison_view AS
SELECT 
  p.id,
  p.json_id,
  p.dsld_id,
  p.supplement_id,
  p.supplement_slug,
  p.brand,
  p.product_name,
  p.dsld_product_name,
  p.dsld_brand,
  p.product_image_url,
  p.serving_size,
  p.servings_per_container,
  p.unit,
  p.amount_per_serving,
  p.net_contents,
  p.filters,
  p.third_party_tested,
  p.certifications,
  p.is_active,
  -- Calculate best prices from all retailers
  MIN(pr.price) as best_total_price,
  CASE 
    WHEN p.amount_per_serving > 0 AND MIN(pr.price) IS NOT NULL
    THEN MIN(pr.price) / p.amount_per_serving
    ELSE NULL
  END as best_price_per_unit,
  -- Aggregate all retailer prices with full details (sorted by price)
  json_agg(
    json_build_object(
      'retailer', r.name,
      'retailer_slug', r.slug,
      'retailer_display_name', r.display_name,
      'price', pr.price,
      'price_usd', pr.price,
      'price_per_unit', CASE 
        WHEN p.amount_per_serving > 0 
        THEN pr.price / p.amount_per_serving 
        ELSE NULL 
      END,
      'currency', pr.currency,
      'product_url', pr.product_url,
      'product_name', p.product_name,
      'affiliate_url', pr.affiliate_url,
      'in_stock', pr.in_stock,
      'image_url', p.product_image_url,
      'logo_url', r.logo_url,
      'button_style', r.button_style
    ) ORDER BY pr.price ASC
  ) FILTER (WHERE pr.id IS NOT NULL) as retailer_prices,
  COUNT(DISTINCT pr.retailer_id) FILTER (WHERE pr.in_stock = true) as available_retailers
FROM api.products p
LEFT JOIN api.prices pr ON p.id = pr.product_id AND pr.in_stock = true
LEFT JOIN api.retailers r ON pr.retailer_id = r.id AND r.is_active = true
WHERE p.is_active = true
GROUP BY 
  p.id,
  p.json_id,
  p.dsld_id,
  p.supplement_id,
  p.supplement_slug,
  p.brand,
  p.product_name,
  p.dsld_product_name,
  p.dsld_brand,
  p.product_image_url,
  p.serving_size,
  p.servings_per_container,
  p.unit,
  p.amount_per_serving,
  p.net_contents,
  p.filters,
  p.third_party_tested,
  p.certifications,
  p.is_active;

-- Add comment
COMMENT ON VIEW api.product_comparison_view IS 'Enriched product data with pre-calculated best prices and aggregated retailer information for comparison pages';

-- Grant permissions
GRANT SELECT ON api.product_comparison_view TO anon, authenticated;

-- Success message
SELECT 'Successfully created product_comparison_view' as status;
```

**Click "Run" and verify you see**: `Successfully created product_comparison_view`

---

## Step 4: Verify Migrations

**Run this verification query:**

```sql
-- Check that new columns exist
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'api' 
  AND table_name = 'products'
  AND column_name IN ('unit', 'amount_per_serving', 'net_contents', 'filters')
ORDER BY column_name;
```

**Expected output**: Should show 4 rows with the new columns

---

## Step 5: Test the View

**Run this test query:**

```sql
-- Test the comparison view
SELECT 
  id,
  brand,
  product_name,
  unit,
  amount_per_serving,
  best_total_price,
  best_price_per_unit,
  available_retailers
FROM api.product_comparison_view
LIMIT 5;
```

**Expected**: Should return 5 products with the new calculated fields

---

## Next Steps

Once migrations are complete:
1. ✅ Migrations applied
2. ⏳ Run data enrichment script (next step)
3. ⏳ Update TypeScript types
4. ⏳ Update API endpoints
5. ⏳ Update ProductComparisonClient component
6. ⏳ Test build

---

## If You Encounter Errors

**Common issues:**

1. **"relation api.products does not exist"**
   - Check you're in the correct project
   - Verify previous migrations ran successfully

2. **"permission denied"**
   - Make sure you're logged in as the project owner

3. **"column already exists"**
   - Safe to ignore - the `IF NOT EXISTS` will skip

---

**Let me know when migrations are complete and we'll proceed to the next step!**
