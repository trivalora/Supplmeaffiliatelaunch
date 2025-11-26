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
      'price_usd', pr.price,  -- Alias for compatibility
      'price_per_unit', CASE 
        WHEN p.amount_per_serving > 0 
        THEN pr.price / p.amount_per_serving 
        ELSE NULL 
      END,
      'currency', pr.currency,
      'product_url', pr.product_url,
      'product_name', p.product_name,  -- Include for display
      'affiliate_url', pr.affiliate_url,
      'in_stock', pr.in_stock,
      'image_url', p.product_image_url,  -- Include product image
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
