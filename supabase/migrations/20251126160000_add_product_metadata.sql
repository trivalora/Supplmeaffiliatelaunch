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
