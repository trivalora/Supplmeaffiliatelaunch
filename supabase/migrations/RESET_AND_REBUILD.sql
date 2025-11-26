-- COMPLETE DATABASE RESET AND CLEAN MIGRATION
-- This script will drop everything and rebuild from scratch
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new

-- =====================================================================
-- STEP 1: DROP EVERYTHING (Clean Slate)
-- =====================================================================

-- Drop views first (they depend on tables)
DROP VIEW IF EXISTS api.product_comparison_view CASCADE;
DROP VIEW IF EXISTS api.product_details_view CASCADE;
DROP VIEW IF EXISTS api.supplement_summary_view CASCADE;

-- Drop tables (CASCADE will drop foreign key constraints)
DROP TABLE IF EXISTS api.prices CASCADE;
DROP TABLE IF EXISTS api.products CASCADE;
DROP TABLE IF EXISTS api.retailers CASCADE;
DROP TABLE IF EXISTS api.supplements CASCADE;
DROP TABLE IF EXISTS api.glossary_terms CASCADE;

-- Drop functions
DROP FUNCTION IF EXISTS api.update_updated_at_column() CASCADE;
DROP FUNCTION IF EXISTS api.get_products_by_supplement(text, integer, integer) CASCADE;

-- =====================================================================
-- STEP 2: CREATE TABLES WITH ALL FIELDS
-- =====================================================================

-- Supplements table
CREATE TABLE api.supplements (
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

-- Retailers table
CREATE TABLE api.retailers (
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

-- Products table (WITH ALL METADATA FIELDS)
CREATE TABLE api.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  json_id TEXT UNIQUE NOT NULL,
  dsld_id TEXT,
  supplement_id UUID REFERENCES api.supplements(id) ON DELETE CASCADE,
  supplement_slug TEXT NOT NULL,
  brand TEXT NOT NULL,
  product_name TEXT NOT NULL,
  display_name TEXT,
  dsld_product_name TEXT,
  dsld_brand TEXT,
  serving_size TEXT,
  servings_per_container TEXT,
  net_quantity TEXT,
  -- NEW METADATA FIELDS
  unit TEXT,
  amount_per_serving NUMERIC,
  net_contents TEXT,
  filters TEXT[] DEFAULT '{}'::text[],
  -- END NEW FIELDS
  label_data JSONB DEFAULT '{}'::jsonb,
  ingredients JSONB DEFAULT '[]'::jsonb,
  product_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  third_party_tested BOOLEAN DEFAULT false,
  certifications TEXT[] DEFAULT '{}'::text[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prices table
CREATE TABLE api.prices (
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

-- Glossary terms table
CREATE TABLE api.glossary_terms (
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

-- =====================================================================
-- STEP 3: CREATE INDEXES
-- =====================================================================

-- Supplements indexes
CREATE INDEX idx_supplements_slug ON api.supplements(slug);
CREATE INDEX idx_supplements_subcategory ON api.supplements(subcategory);

-- Retailers indexes
CREATE INDEX idx_retailers_slug ON api.retailers(slug);
CREATE INDEX idx_retailers_priority ON api.retailers(priority);

-- Products indexes
CREATE INDEX idx_products_json_id ON api.products(json_id);
CREATE INDEX idx_products_dsld_id ON api.products(dsld_id) WHERE dsld_id IS NOT NULL;
CREATE INDEX idx_products_supplement_id ON api.products(supplement_id);
CREATE INDEX idx_products_supplement_slug ON api.products(supplement_slug);
CREATE INDEX idx_products_brand ON api.products(brand);
CREATE INDEX idx_products_search ON api.products USING GIN(to_tsvector('english', product_name || ' ' || brand));
CREATE INDEX idx_products_label_data ON api.products USING GIN(label_data);
CREATE INDEX idx_products_filters ON api.products USING GIN(filters);
CREATE INDEX idx_products_unit_amount ON api.products(unit, amount_per_serving) WHERE amount_per_serving IS NOT NULL;

-- Prices indexes
CREATE INDEX idx_prices_product_id ON api.prices(product_id);
CREATE INDEX idx_prices_retailer_id ON api.prices(retailer_id);
CREATE INDEX idx_prices_price ON api.prices(price);

-- Glossary indexes
CREATE INDEX idx_glossary_slug ON api.glossary_terms(slug);
CREATE INDEX idx_glossary_search ON api.glossary_terms USING GIN(to_tsvector('english', term || ' ' || COALESCE(definition, '')));

-- =====================================================================
-- STEP 4: CREATE FUNCTIONS
-- =====================================================================

CREATE OR REPLACE FUNCTION api.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =====================================================================
-- STEP 5: CREATE TRIGGERS
-- =====================================================================

CREATE TRIGGER update_supplements_updated_at
  BEFORE UPDATE ON api.supplements
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON api.products
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- =====================================================================
-- STEP 6: CREATE VIEWS
-- =====================================================================

-- Product comparison view with enriched data
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
  p.id, p.json_id, p.dsld_id, p.supplement_id, p.supplement_slug,
  p.brand, p.product_name, p.dsld_product_name, p.dsld_brand,
  p.product_image_url, p.serving_size, p.servings_per_container,
  p.unit, p.amount_per_serving, p.net_contents, p.filters,
  p.third_party_tested, p.certifications, p.is_active;

-- Supplement summary view
CREATE VIEW api.supplement_summary_view AS
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

-- =====================================================================
-- STEP 7: SEED RETAILERS
-- =====================================================================

INSERT INTO api.retailers (slug, name, display_name, button_style, priority, is_affiliate) VALUES
  ('iherb', 'iHerb', 'iHerb', '{"bg":"#6FA524","text":"#FFFFFF","hover":"#5F8D1F"}'::jsonb, 1, true),
  ('amazon', 'Amazon', 'Amazon', '{"bg":"#FF9900","text":"#000000","hover":"#E68A00"}'::jsonb, 2, true),
  ('vitacost', 'Vitacost', 'Vitacost', '{"bg":"#0066CC","text":"#FFFFFF","hover":"#0052A3"}'::jsonb, 3, true),
  ('gnc', 'GNC', 'GNC', '{"bg":"#0033A0","text":"#FFFFFF","hover":"#002980"}'::jsonb, 4, false),
  ('walmart', 'Walmart', 'Walmart', '{"bg":"#0071CE","text":"#FFFFFF","hover":"#005BA5"}'::jsonb, 5, true),
  ('bodybuilding', 'Bodybuilding.com', 'Bodybuilding.com', '{"bg":"#FF6600","text":"#FFFFFF","hover":"#E65C00"}'::jsonb, 6, true),
  ('supplement-warehouse', 'Supplement Warehouse', 'Supplement Warehouse', '{"bg":"#D32F2F","text":"#FFFFFF","hover":"#B71C1C"}'::jsonb, 7, false)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================================
-- STEP 8: GRANT PERMISSIONS
-- =====================================================================

GRANT SELECT ON api.product_comparison_view TO anon, authenticated;
GRANT SELECT ON api.supplement_summary_view TO anon, authenticated;

-- =====================================================================
-- SUCCESS MESSAGE
-- =====================================================================

SELECT 
  '✅ DATABASE RESET COMPLETE!' as status,
  '✅ All tables created with metadata fields' as tables,
  '✅ All indexes created' as indexes,
  '✅ All views created' as views,
  '✅ Retailers seeded (7 retailers)' as data,
  '⏳ Next: Run data import script to load products' as next_step;
