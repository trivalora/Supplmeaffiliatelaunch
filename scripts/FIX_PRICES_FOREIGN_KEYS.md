# Fix Prices Foreign Keys

## Problem

The prices table has 1,986 rows but all have NULL `product_id` and `retailer_id` values. This is why no products are displaying - the API filters out products with no prices.

## Root Cause

The data migration was incomplete - products were loaded but prices weren't properly linked via foreign keys.

## Solution

Re-run the full migration pipeline to properly load prices with foreign keys:

```bash
# Step 1: Extract data from JSON to CSV
node scripts/migration/extract-products-to-csv.mjs

# Step 2: Transform CSV data (clean, dedupe, add supplement_slug)
node scripts/migration/transform-data.mjs

# Step 3: Load into Supabase (this will create product_id and retailer_id links)
node scripts/migration/load-to-supabase.mjs

# Step 4: Enrich products with metadata
node scripts/migration/enrich-products-with-metadata.mjs

# Step 5: Validate
node scripts/validate-database-migration.mjs
```

## Expected Result

- Products table: 1,663 rows (unchanged)
- Prices table: 1,986 rows with **valid** `product_id` and `retailer_id` foreign keys
- API will return products with prices
- Frontend will display products correctly

## Time Estimate

- 5-10 minutes total
- Safe to run (will skip existing products due to UNIQUE constraint on json_id)
