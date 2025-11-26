-- Add supplement_slug column to products table for efficient filtering
-- This denormalizes the data but greatly improves query performance

ALTER TABLE api.products 
ADD COLUMN supplement_slug TEXT;

-- Populate the column from the supplements table
UPDATE api.products p
SET supplement_slug = s.slug
FROM api.supplements s
WHERE p.supplement_id = s.id;

-- Add NOT NULL constraint now that data is populated
ALTER TABLE api.products 
ALTER COLUMN supplement_slug SET NOT NULL;

-- Create index for fast lookups
CREATE INDEX idx_products_supplement_slug ON api.products(supplement_slug);

-- Add comment
COMMENT ON COLUMN api.products.supplement_slug IS 'Denormalized supplement slug for efficient filtering (matches supplements.slug)';
