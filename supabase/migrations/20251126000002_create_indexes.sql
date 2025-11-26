-- Create indexes for performance optimization
-- Migration: 002_create_indexes
-- Date: November 26, 2025

-- =====================================================
-- SUPPLEMENTS INDEXES
-- =====================================================
CREATE INDEX idx_supplements_slug ON api.supplements(slug);
CREATE INDEX idx_supplements_show_in_nav ON api.supplements(show_in_nav);
CREATE INDEX idx_supplements_sort_order ON api.supplements(sort_order);
CREATE INDEX idx_supplements_subcategory ON api.supplements(subcategory);

-- =====================================================
-- RETAILERS INDEXES
-- =====================================================
CREATE INDEX idx_retailers_slug ON api.retailers(slug);
CREATE INDEX idx_retailers_is_active ON api.retailers(is_active);
CREATE INDEX idx_retailers_priority ON api.retailers(priority);

-- =====================================================
-- PRODUCTS INDEXES
-- =====================================================
CREATE INDEX idx_products_dsld_id ON api.products(dsld_id);
CREATE INDEX idx_products_supplement_id ON api.products(supplement_id);
CREATE INDEX idx_products_brand ON api.products(brand);
CREATE INDEX idx_products_is_active ON api.products(is_active);
CREATE INDEX idx_products_third_party_tested ON api.products(third_party_tested);

-- Full-text search on product name and brand
CREATE INDEX idx_products_search ON api.products 
USING GIN (to_tsvector('english', product_name || ' ' || brand));

-- GIN index on label_data JSONB for queries
CREATE INDEX idx_products_label_data ON api.products USING GIN (label_data);

-- =====================================================
-- PRICES INDEXES
-- =====================================================
CREATE INDEX idx_prices_product_id ON api.prices(product_id);
CREATE INDEX idx_prices_retailer_id ON api.prices(retailer_id);
CREATE INDEX idx_prices_price ON api.prices(price);
CREATE INDEX idx_prices_in_stock ON api.prices(in_stock);
CREATE INDEX idx_prices_updated_at ON api.prices(updated_at);

-- Composite index for product-retailer lookups
CREATE INDEX idx_prices_product_retailer ON api.prices(product_id, retailer_id);

-- =====================================================
-- GLOSSARY_TERMS INDEXES
-- =====================================================
CREATE INDEX idx_glossary_slug ON api.glossary_terms(slug);
CREATE INDEX idx_glossary_term ON api.glossary_terms(term);

-- Full-text search on term and definition
CREATE INDEX idx_glossary_search ON api.glossary_terms 
USING GIN (to_tsvector('english', term || ' ' || COALESCE(definition, '')));

-- GIN index on related_terms array
CREATE INDEX idx_glossary_related_terms ON api.glossary_terms USING GIN (related_terms);
