-- Seed retailers data
-- Migration: 004_seed_retailers
-- Date: November 26, 2025

-- Insert the 7 core retailers
INSERT INTO api.retailers (slug, name, display_name, logo_url, website_url, is_active, is_affiliate, priority, button_style) VALUES
  (
    'iherb',
    'iHerb',
    'iHerb',
    '/images/retailers/iherb.svg',
    'https://www.iherb.com',
    true,
    true,
    1,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  ),
  (
    'amazon',
    'Amazon',
    'Amazon',
    '/images/retailers/amazon.svg',
    'https://www.amazon.com',
    true,
    true,
    2,
    '{"bg": "#FF9900", "text": "#FFFFFF", "border": "#FF9900"}'::jsonb
  ),
  (
    'vitacost',
    'Vitacost',
    'Vitacost',
    '/images/retailers/vitacost.svg',
    'https://www.vitacost.com',
    true,
    true,
    3,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  ),
  (
    'gnc',
    'GNC',
    'GNC',
    '/images/retailers/gnc.svg',
    'https://www.gnc.com',
    true,
    true,
    4,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  ),
  (
    'walmart',
    'Walmart',
    'Walmart',
    '/images/retailers/walmart.svg',
    'https://www.walmart.com',
    true,
    true,
    5,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  ),
  (
    'bodybuilding',
    'Bodybuilding.com',
    'Bodybuilding.com',
    '/images/retailers/bodybuilding.svg',
    'https://www.bodybuilding.com',
    true,
    true,
    6,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  ),
  (
    'supplement-warehouse',
    'Supplement Warehouse',
    'Supplement Warehouse',
    '/images/retailers/supplement-warehouse.svg',
    'https://www.supplementwarehouse.com',
    true,
    true,
    7,
    '{"bg": "var(--tertiary)", "text": "var(--primary)", "border": "var(--secondary)"}'::jsonb
  );

-- Verify insert
DO $$
DECLARE
  retailer_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO retailer_count FROM retailers;
  
  IF retailer_count = 7 THEN
    RAISE NOTICE 'Successfully seeded 7 retailers';
  ELSE
    RAISE WARNING 'Expected 7 retailers, found %', retailer_count;
  END IF;
END $$;
