-- Create database views and functions
-- Migration: 003_create_views_and_functions
-- Date: November 26, 2025

-- =====================================================
-- TRIGGERS FOR UPDATED_AT
-- =====================================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION api.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables
CREATE TRIGGER update_supplements_updated_at 
  BEFORE UPDATE ON supplements
  FOR EACH ROW 
  EXECUTE FUNCTION api.update_updated_at_column();

CREATE TRIGGER update_retailers_updated_at 
  BEFORE UPDATE ON retailers
  FOR EACH ROW 
  EXECUTE FUNCTION api.update_updated_at_column();

CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products
  FOR EACH ROW 
  EXECUTE FUNCTION api.update_updated_at_column();

CREATE TRIGGER update_prices_updated_at 
  BEFORE UPDATE ON prices
  FOR EACH ROW 
  EXECUTE FUNCTION api.update_updated_at_column();

CREATE TRIGGER update_glossary_terms_updated_at 
  BEFORE UPDATE ON glossary_terms
  FOR EACH ROW 
  EXECUTE FUNCTION api.update_updated_at_column();

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- Product details with all prices and supplement info
CREATE VIEW api.product_details_view AS
SELECT 
  p.id,
  p.dsld_id,
  p.brand,
  p.product_name,
  p.display_name,
  p.serving_size,
  p.servings_per_container,
  p.net_quantity,
  p.label_data,
  p.ingredients,
  p.product_image_url,
  p.third_party_tested,
  p.certifications,
  p.is_active,
  
  -- Supplement info
  s.slug AS supplement_slug,
  s.name AS supplement_name,
  s.display_name AS supplement_display_name,
  s.subcategory,
  
  -- Prices aggregated as JSON
  (
    SELECT json_agg(
      json_build_object(
        'retailer', r.name,
        'retailer_slug', r.slug,
        'retailer_display_name', r.display_name,
        'price', pr.price,
        'currency', pr.currency,
        'product_url', pr.product_url,
        'affiliate_url', pr.affiliate_url,
        'in_stock', pr.in_stock,
        'logo_url', r.logo_url,
        'button_style', r.button_style,
        'last_checked_at', pr.last_checked_at
      ) ORDER BY r.priority ASC, pr.price ASC
    )
    FROM api.prices pr
    JOIN api.retailers r ON r.id = pr.retailer_id
    WHERE pr.product_id = p.id AND pr.in_stock = true AND r.is_active = true
  ) AS prices,
  
  -- Lowest price
  (
    SELECT MIN(pr.price)
    FROM api.prices pr
    WHERE pr.product_id = p.id AND pr.in_stock = true
  ) AS lowest_price
  
FROM api.products p
JOIN api.supplements s ON s.id = p.supplement_id
WHERE p.is_active = true;

COMMENT ON VIEW api.product_details_view IS 'Complete product information with prices and supplement data';

-- Supplement with product count
CREATE VIEW api.supplement_summary_view AS
SELECT 
  s.id,
  s.slug,
  s.name,
  s.display_name,
  s.subcategory,
  s.description,
  s.hero_description,
  s.hero_image_url,
  s.show_in_nav,
  s.sort_order,
  s.meta_title,
  s.meta_description,
  s.meta_keywords,
  s.created_at,
  s.updated_at,
  
  -- Product count
  COUNT(p.id) FILTER (WHERE p.is_active = true) AS product_count,
  
  -- Price range
  MIN(pr.price) AS min_price,
  MAX(pr.price) AS max_price
  
FROM api.supplements s
LEFT JOIN api.products p ON p.supplement_id = s.id
LEFT JOIN api.prices pr ON pr.product_id = p.id AND pr.in_stock = true
GROUP BY s.id;

COMMENT ON VIEW api.supplement_summary_view IS 'Supplement info with product count and price range';

-- =====================================================
-- HELPER FUNCTIONS
-- =====================================================

-- Function to get products by supplement slug
CREATE OR REPLACE FUNCTION api.get_products_by_supplement(
  supplement_slug_param TEXT,
  page_param INTEGER DEFAULT 1,
  limit_param INTEGER DEFAULT 20
)
RETURNS TABLE (
  product_id UUID,
  dsld_id TEXT,
  brand TEXT,
  product_name TEXT,
  display_name TEXT,
  serving_size TEXT,
  third_party_tested BOOLEAN,
  certifications TEXT[],
  prices JSONB,
  lowest_price DECIMAL,
  total_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  WITH supplement_products AS (
    SELECT 
      p.id,
      p.dsld_id,
      p.brand,
      p.product_name,
      p.display_name,
      p.serving_size,
      p.third_party_tested,
      p.certifications,
      p.label_data,
      COUNT(*) OVER() as total_count
    FROM api.products p
    JOIN api.supplements s ON s.id = p.supplement_id
    WHERE s.slug = supplement_slug_param
      AND p.is_active = true
    ORDER BY p.brand, p.product_name
    LIMIT limit_param
    OFFSET (page_param - 1) * limit_param
  )
  SELECT 
    sp.id,
    sp.dsld_id,
    sp.brand,
    sp.product_name,
    sp.display_name,
    sp.serving_size,
    sp.third_party_tested,
    sp.certifications,
    
    -- Prices as JSONB
    (
      SELECT jsonb_agg(
        jsonb_build_object(
          'retailer', r.name,
          'retailer_slug', r.slug,
          'price', pr.price,
          'currency', pr.currency,
          'product_url', pr.product_url,
          'affiliate_url', pr.affiliate_url,
          'in_stock', pr.in_stock,
          'logo_url', r.logo_url
        ) ORDER BY r.priority ASC, pr.price ASC
      )
      FROM api.prices pr
      JOIN api.retailers r ON r.id = pr.retailer_id
      WHERE pr.product_id = sp.id AND pr.in_stock = true AND r.is_active = true
    ) AS prices,
    
    -- Lowest price
    (
      SELECT MIN(pr.price)
      FROM api.prices pr
      WHERE pr.product_id = sp.id AND pr.in_stock = true
    ) AS lowest_price,
    
    sp.total_count
  FROM supplement_products sp;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION api.get_products_by_supplement IS 'Get paginated products for a supplement with prices';
