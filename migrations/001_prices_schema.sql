-- Migration 001: Create prices database schema
-- Created: 2025-11-17
-- Purpose: Multi-retailer price tracking system

-- Retailers table
CREATE TABLE IF NOT EXISTS retailers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,                    -- 'iHerb', 'Walmart', 'Vitacost'
  slug TEXT NOT NULL UNIQUE,                    -- 'iherb', 'walmart', 'vitacost'
  base_url TEXT NOT NULL,                       -- 'https://www.iherb.com'
  active BOOLEAN DEFAULT 1,                     -- Whether scraper is active
  scraper_type TEXT DEFAULT 'scraperapi',       -- 'scraperapi', 'api', 'manual'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table (deduplicated across retailers)
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,                           -- Full product name
  normalized_name TEXT,                         -- Lowercase, stripped for matching
  supplement_type TEXT,                         -- 'ashwagandha', 'magnesium', etc.
  brand TEXT,                                   -- Brand name
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(name, brand)
);

-- Prices table (time-series data for price tracking)
CREATE TABLE IF NOT EXISTS prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  retailer_id INTEGER NOT NULL,
  price_cents INTEGER NOT NULL,                -- USD in cents (1499 = $14.99)
  currency TEXT DEFAULT 'USD',
  url TEXT NOT NULL,                            -- Product URL at retailer
  in_stock BOOLEAN DEFAULT 1,                   -- Availability status
  scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (retailer_id) REFERENCES retailers(id) ON DELETE CASCADE
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_prices_product ON prices(product_id);
CREATE INDEX IF NOT EXISTS idx_prices_retailer ON prices(retailer_id);
CREATE INDEX IF NOT EXISTS idx_prices_scraped_at ON prices(scraped_at DESC);
CREATE INDEX IF NOT EXISTS idx_prices_product_retailer ON prices(product_id, retailer_id);
CREATE INDEX IF NOT EXISTS idx_products_supplement ON products(supplement_type);
CREATE INDEX IF NOT EXISTS idx_products_normalized ON products(normalized_name);

-- Seed: Insert initial retailers
INSERT OR IGNORE INTO retailers (name, slug, base_url, active, scraper_type) VALUES
  ('iHerb', 'iherb', 'https://www.iherb.com', 1, 'scraperapi'),
  ('Walmart', 'walmart', 'https://www.walmart.com', 1, 'scraperapi'),
  ('Vitacost', 'vitacost', 'https://www.vitacost.com', 1, 'scraperapi'),
  ('Swanson Health', 'swanson', 'https://www.swansonvitamins.com', 1, 'scraperapi'),
  ('Supplement Warehouse', 'supplement-warehouse', 'https://www.supplementwarehouse.com', 1, 'scraperapi'),
  ('GNC', 'gnc', 'https://www.gnc.com', 1, 'scraperapi'),
  ('Vitamin Shoppe', 'vitamin-shoppe', 'https://www.vitaminshoppe.com', 1, 'scraperapi'),
  ('Bodybuilding.com', 'bodybuilding', 'https://www.bodybuilding.com', 1, 'scraperapi');
