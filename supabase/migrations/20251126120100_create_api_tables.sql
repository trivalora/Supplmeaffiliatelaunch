-- Migration: Create all tables correctly in api schema
-- Date: November 26, 2025
-- This creates the correct structure after cleaning public schema

-- Ensure api schema exists
CREATE SCHEMA IF NOT EXISTS api;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===================================================================
-- TABLES (in api schema)
-- ===================================================================

CREATE TABLE IF NOT EXISTS api.supplements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  display_name TEXT NOT NULL,
  subcategory TEXT,
  description TEXT,
  hero_description TEXT,
  hero_image_url TEXT,
  show_in_nav BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api.retailers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  display_name TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  button_style JSONB DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  is_affiliate BOOLEAN DEFAULT false,
  priority INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dsld_id TEXT UNIQUE NOT NULL,
  supplement_id UUID REFERENCES api.supplements(id) ON DELETE CASCADE,
  brand TEXT NOT NULL,
  product_name TEXT NOT NULL,
  display_name TEXT,
  dsld_product_name TEXT,
  dsld_brand TEXT,
  serving_size TEXT,
  servings_per_container TEXT,
  net_quantity TEXT,
  label_data JSONB DEFAULT '{}'::jsonb,
  ingredients JSONB DEFAULT '[]'::jsonb,
  product_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  third_party_tested BOOLEAN DEFAULT false,
  certifications TEXT[] DEFAULT '{}'::text[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api.prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES api.products(id) ON DELETE CASCADE,
  retailer_id UUID REFERENCES api.retailers(id) ON DELETE CASCADE,
  price DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  product_url TEXT NOT NULL,
  affiliate_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  last_checked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(product_id, retailer_id)
);

CREATE TABLE IF NOT EXISTS api.glossary_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  term TEXT NOT NULL,
  abbreviation TEXT,
  pronunciation TEXT,
  definition TEXT NOT NULL,
  expanded_explanation TEXT,
  why_it_matters TEXT,
  simple_explanation TEXT,
  technical_explanation TEXT,
  real_world_context TEXT,
  examples TEXT[] DEFAULT '{}'::text[],
  key_points JSONB DEFAULT '[]'::jsonb,
  common_misconceptions TEXT[] DEFAULT '{}'::text[],
  related_terms UUID[] DEFAULT '{}'::uuid[],
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===================================================================
-- INDEXES (from migration 002, already corrected for api schema)
-- ===================================================================

CREATE INDEX IF NOT EXISTS idx_supplements_slug ON api.supplements(slug);
CREATE INDEX IF NOT EXISTS idx_supplements_subcategory ON api.supplements(subcategory);
CREATE INDEX IF NOT EXISTS idx_retailers_slug ON api.retailers(slug);
CREATE INDEX IF NOT EXISTS idx_retailers_priority ON api.retailers(priority);
CREATE INDEX IF NOT EXISTS idx_products_dsld_id ON api.products(dsld_id);
CREATE INDEX IF NOT EXISTS idx_products_supplement_id ON api.products(supplement_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON api.products(brand);
CREATE INDEX IF NOT EXISTS idx_products_search ON api.products USING GIN(to_tsvector('english', product_name || ' ' || brand));
CREATE INDEX IF NOT EXISTS idx_products_label_data ON api.products USING GIN(label_data);
CREATE INDEX IF NOT EXISTS idx_prices_product_id ON api.prices(product_id);
CREATE INDEX IF NOT EXISTS idx_prices_retailer_id ON api.prices(retailer_id);
CREATE INDEX IF NOT EXISTS idx_prices_price ON api.prices(price);
CREATE INDEX IF NOT EXISTS idx_glossary_slug ON api.glossary_terms(slug);
CREATE INDEX IF NOT EXISTS idx_glossary_search ON api.glossary_terms USING GIN(to_tsvector('english', term || ' ' || COALESCE(definition, '')));

-- ===================================================================
-- FUNCTIONS (from migration 003)
-- ===================================================================

CREATE OR REPLACE FUNCTION api.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ===================================================================
-- TRIGGERS
-- ===================================================================

DROP TRIGGER IF EXISTS update_supplements_updated_at ON api.supplements;
CREATE TRIGGER update_supplements_updated_at
  BEFORE UPDATE ON api.supplements
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON api.products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON api.products
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- ===================================================================
-- VIEWS
-- ===================================================================

CREATE OR REPLACE VIEW api.product_details_view AS
SELECT 
  p.*,
  s.name as supplement_name,
  s.slug as supplement_slug,
  json_agg(
    json_build_object(
      'retailer_name', r.name,
      'retailer_slug', r.slug,
      'price', pr.price,
      'currency', pr.currency,
      'product_url', pr.product_url,
      'in_stock', pr.in_stock
    )
  ) as prices
FROM api.products p
LEFT JOIN api.supplements s ON p.supplement_id = s.id
LEFT JOIN api.prices pr ON p.id = pr.product_id
LEFT JOIN api.retailers r ON pr.retailer_id = r.id
GROUP BY p.id, s.name, s.slug;

CREATE OR REPLACE VIEW api.supplement_summary_view AS
SELECT 
  s.*,
  COUNT(DISTINCT p.id) as product_count,
  MIN(pr.price) as min_price,
  MAX(pr.price) as max_price,
  AVG(pr.price) as avg_price
FROM api.supplements s
LEFT JOIN api.products p ON s.id = p.supplement_id
LEFT JOIN api.prices pr ON p.id = pr.product_id
GROUP BY s.id;

-- ===================================================================
-- SEED DATA (from migration 004)
-- ===================================================================

INSERT INTO api.retailers (slug, name, display_name, button_style, priority, is_affiliate) VALUES
  ('iherb', 'iHerb', 'iHerb', '{"bg":"#6FA524","text":"#FFFFFF","hover":"#5F8D1F"}'::jsonb, 1, true),
  ('amazon', 'Amazon', 'Amazon', '{"bg":"#FF9900","text":"#000000","hover":"#E68A00"}'::jsonb, 2, true),
  ('vitacost', 'Vitacost', 'Vitacost', '{"bg":"#0066CC","text":"#FFFFFF","hover":"#0052A3"}'::jsonb, 3, true),
  ('gnc', 'GNC', 'GNC', '{"bg":"#0033A0","text":"#FFFFFF","hover":"#002980"}'::jsonb, 4, false),
  ('walmart', 'Walmart', 'Walmart', '{"bg":"#0071CE","text":"#FFFFFF","hover":"#005BA5"}'::jsonb, 5, true),
  ('bodybuilding', 'Bodybuilding.com', 'Bodybuilding.com', '{"bg":"#FF6600","text":"#FFFFFF","hover":"#E65C00"}'::jsonb, 6, true),
  ('supplement-warehouse', 'Supplement Warehouse', 'Supplement Warehouse', '{"bg":"#D32F2F","text":"#FFFFFF","hover":"#B71C1C"}'::jsonb, 7, false)
ON CONFLICT (slug) DO NOTHING;

-- Success!
SELECT 'Successfully created tables and seeded data in api schema' as status;

