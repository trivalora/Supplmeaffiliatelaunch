-- Create core tables for Suppl.me database
-- Migration: 001_create_tables
-- Date: November 26, 2025

-- Create api schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS api;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- SUPPLEMENTS TABLE
-- =====================================================
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
  
  -- SEO fields
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE api.supplements IS 'Core supplement information (17 rows)';
COMMENT ON COLUMN supplements.slug IS 'URL-safe identifier (e.g., ashwagandha)';
COMMENT ON COLUMN supplements.subcategory IS 'Category: Protein Supplements, Vitamins, Minerals, etc.';

-- =====================================================
-- RETAILERS TABLE
-- =====================================================
CREATE TABLE api.retailers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  display_name TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  
  -- Styling
  button_style JSONB DEFAULT '{}'::jsonb,
  
  -- Flags
  is_active BOOLEAN DEFAULT true,
  is_affiliate BOOLEAN DEFAULT false,
  priority INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE api.retailers IS 'Retailer information (7 rows: iHerb, Amazon, GNC, etc.)';
COMMENT ON COLUMN retailers.priority IS 'Display order (lower = shown first)';
COMMENT ON COLUMN retailers.button_style IS 'JSON: { bg: "#color", text: "#color" }';

-- =====================================================
-- PRODUCTS TABLE
-- =====================================================
CREATE TABLE api.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dsld_id TEXT UNIQUE NOT NULL,
  supplement_id UUID REFERENCES api.supplements(id) ON DELETE CASCADE,
  
  -- Product info
  brand TEXT NOT NULL,
  product_name TEXT NOT NULL,
  display_name TEXT,
  
  -- DSLD data
  dsld_product_name TEXT,
  dsld_brand TEXT,
  serving_size TEXT,
  servings_per_container TEXT,
  net_quantity TEXT,
  
  -- Label data (JSONB for flexibility)
  label_data JSONB DEFAULT '{}'::jsonb,
  ingredients JSONB DEFAULT '[]'::jsonb,
  
  -- Image
  product_image_url TEXT,
  
  -- Flags
  is_active BOOLEAN DEFAULT true,
  third_party_tested BOOLEAN DEFAULT false,
  certifications TEXT[] DEFAULT '{}'::text[],
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE api.products IS 'Product details from DSLD (1,691 rows)';
COMMENT ON COLUMN products.dsld_id IS 'DSLD database identifier (e.g., DSLD12345)';
COMMENT ON COLUMN products.label_data IS 'JSON: 8 DSLD categories (statement_of_identity, branding, etc.)';
COMMENT ON COLUMN products.certifications IS 'Array: [USP, NSF, ConsumerLab]';

-- =====================================================
-- PRICES TABLE
-- =====================================================
CREATE TABLE api.prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES api.products(id) ON DELETE CASCADE,
  retailer_id UUID REFERENCES api.retailers(id) ON DELETE CASCADE,
  
  -- Price info
  price DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  
  -- Links
  product_url TEXT NOT NULL,
  affiliate_url TEXT,
  
  -- Availability
  in_stock BOOLEAN DEFAULT true,
  last_checked_at TIMESTAMPTZ,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Ensure one price per product per retailer
  UNIQUE(product_id, retailer_id)
);

COMMENT ON TABLE api.prices IS 'Product-retailer-price relationships (11,837 rows)';
COMMENT ON COLUMN prices.last_checked_at IS 'Last time price was verified';

-- =====================================================
-- GLOSSARY TERMS TABLE
-- =====================================================
CREATE TABLE api.glossary_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  term TEXT NOT NULL,
  abbreviation TEXT,
  pronunciation TEXT,
  
  -- Content
  definition TEXT NOT NULL,
  expanded_explanation TEXT,
  why_it_matters TEXT,
  simple_explanation TEXT,
  technical_explanation TEXT,
  real_world_context TEXT,
  
  -- Structured data
  examples TEXT[] DEFAULT '{}'::text[],
  key_points JSONB DEFAULT '[]'::jsonb,
  common_misconceptions TEXT[] DEFAULT '{}'::text[],
  related_terms UUID[] DEFAULT '{}'::uuid[],
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE api.glossary_terms IS 'Scientific terms and definitions (198 rows)';
COMMENT ON COLUMN glossary_terms.slug IS 'URL-safe identifier (e.g., rct)';
COMMENT ON COLUMN glossary_terms.related_terms IS 'Array of UUIDs referencing other glossary_terms';
