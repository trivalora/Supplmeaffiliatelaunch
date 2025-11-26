-- Migration: Add json_id column to products table
-- Date: November 26, 2025
-- Purpose: Store the original JSON "id" field as the unique identifier

-- Add json_id column (the original ID from JSON files)
ALTER TABLE api.products 
  ADD COLUMN IF NOT EXISTS json_id TEXT UNIQUE NOT NULL DEFAULT '';

-- Make dsld_id nullable since not all products have it
ALTER TABLE api.products 
  ALTER COLUMN dsld_id DROP NOT NULL;

-- Update the unique constraint
ALTER TABLE api.products 
  DROP CONSTRAINT IF EXISTS products_dsld_id_key;

-- Create unique index on json_id
CREATE UNIQUE INDEX IF NOT EXISTS products_json_id_key ON api.products(json_id);

-- Create index on dsld_id for lookups (but not unique anymore)
CREATE INDEX IF NOT EXISTS products_dsld_id_idx ON api.products(dsld_id) WHERE dsld_id IS NOT NULL;

-- Comment
COMMENT ON COLUMN api.products.json_id IS 'Original product ID from JSON files (e.g., "57173_organic traditions_organic ashwagandha...")';
