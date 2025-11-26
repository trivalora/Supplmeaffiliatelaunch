# DSLD Label Data Setup Guide

## Overview
This guide explains how to add DSLD label information to the production database.

## Step 1: Add Database Columns

Open Supabase Dashboard SQL Editor and run:

```sql
ALTER TABLE api.products 
ADD COLUMN IF NOT EXISTS dsld_product_name TEXT,
ADD COLUMN IF NOT EXISTS dsld_brand TEXT,
ADD COLUMN IF NOT EXISTS dsld_content TEXT,
ADD COLUMN IF NOT EXISTS dsld_label_info JSONB;

COMMENT ON COLUMN api.products.dsld_product_name IS 'Product name from DSLD database';
COMMENT ON COLUMN api.products.dsld_brand IS 'Brand name from DSLD database';
COMMENT ON COLUMN api.products.dsld_content IS 'Net contents from DSLD database';
COMMENT ON COLUMN api.products.dsld_label_info IS 'Complete label information from DSLD (serving size, ingredients, statements, etc.)';
```

## Step 2: Run Enrichment Script

```bash
node scripts/migration/enrich-dsld-label-data.mjs
```

This will:
- Read all supplement JSON files
- Extract `dsld_label_info` data including:
  - serving_size
  - ingredients (with amounts and daily values)
  - other_ingredients
  - label_statements (branding, formulation, precautions, etc.)
- Update products in database with complete DSLD information

## Step 3: Verify

Check a product detail page (e.g., `/ashwagandha/product/[id]`) to see:
- ✅ Supplement Facts section
- ✅ Serving Size
- ✅ Ingredients table with amounts and % DV
- ✅ Other Ingredients
- ✅ Label statements (suggested use, precautions, etc.)

## What's Included

The `dsld_label_info` JSONB field contains:
```json
{
  "serving_size": "2 capsules",
  "ingredients": [
    {
      "name": "Ashwagandha Root Extract",
      "amount": "600",
      "unit": "mg",
      "daily_value": "†"
    }
  ],
  "other_ingredients": ["Cellulose", "Magnesium Stearate"],
  "label_statements": {
    "branding": ["KSM-66®", "Vegan", "Non-GMO"],
    "formulation": ["Extract standardized to 5% withanolides"],
    "suggested_use": ["Take 2 capsules daily"],
    "precautions": ["Consult healthcare provider if pregnant"]
  }
}
```

## Production Deployment

Changes have been pushed to main branch and will auto-deploy to Vercel.

After adding columns and running enrichment:
1. ✅ Product comparison pages show prices and multiple retailers
2. ✅ Product detail pages fetch from database
3. ✅ DSLD label information displays on product pages
4. ✅ All 1,663 products enriched with complete metadata
