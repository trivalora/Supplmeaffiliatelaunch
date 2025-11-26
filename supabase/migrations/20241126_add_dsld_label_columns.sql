-- Add DSLD label data columns to products table
-- Migration: add_dsld_label_columns

ALTER TABLE api.products 
ADD COLUMN IF NOT EXISTS dsld_product_name TEXT,
ADD COLUMN IF NOT EXISTS dsld_brand TEXT,
ADD COLUMN IF NOT EXISTS dsld_content TEXT,
ADD COLUMN IF NOT EXISTS dsld_label_info JSONB;

COMMENT ON COLUMN api.products.dsld_product_name IS 'Product name from DSLD database';
COMMENT ON COLUMN api.products.dsld_brand IS 'Brand name from DSLD database';
COMMENT ON COLUMN api.products.dsld_content IS 'Net contents from DSLD database';
COMMENT ON COLUMN api.products.dsld_label_info IS 'Complete label information from DSLD (serving size, ingredients, statements, etc.)';
