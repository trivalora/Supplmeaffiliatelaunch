-- Migration: Add product context content columns to supplements table
-- Date: November 29, 2025
-- Purpose: Migrate product-context-data.ts content to database for consistency

-- ===================================================================
-- ADD NEW COLUMNS TO api.supplements
-- ===================================================================

-- Core overview content
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS quick_overview TEXT,
ADD COLUMN IF NOT EXISTS extended_overview TEXT,
ADD COLUMN IF NOT EXISTS science_snapshot TEXT;

-- Benefits and target audience
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS key_benefits TEXT[] DEFAULT '{}'::text[],
ADD COLUMN IF NOT EXISTS ideal_for TEXT[] DEFAULT '{}'::text[];

-- Dosage information
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS typical_dosage_min INTEGER,
ADD COLUMN IF NOT EXISTS typical_dosage_max INTEGER,
ADD COLUMN IF NOT EXISTS typical_dosage_unit TEXT;

-- Form-specific notes (JSONB for flexible key-value pairs)
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS form_notes JSONB DEFAULT '{}'::jsonb;

-- Timing and usage tips
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS timing_tips TEXT[] DEFAULT '{}'::text[];

-- What to expect outcomes (JSONB for structured data)
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS what_to_expect JSONB DEFAULT '{}'::jsonb;

-- What to expect summary points
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS what_to_expect_summary TEXT[] DEFAULT '{}'::text[];

-- Quality markers to look for
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS quality_markers TEXT[] DEFAULT '{}'::text[];

-- Safety and synergy information
ALTER TABLE api.supplements 
ADD COLUMN IF NOT EXISTS safety_considerations TEXT[] DEFAULT '{}'::text[],
ADD COLUMN IF NOT EXISTS synergy_notes TEXT;

-- ===================================================================
-- ADD COMMENTS FOR DOCUMENTATION
-- ===================================================================

COMMENT ON COLUMN api.supplements.quick_overview IS 'Brief 1-2 sentence overview of the supplement';
COMMENT ON COLUMN api.supplements.extended_overview IS 'Detailed background and context (200-400 words)';
COMMENT ON COLUMN api.supplements.science_snapshot IS 'Summary of scientific research and evidence';
COMMENT ON COLUMN api.supplements.key_benefits IS 'Array of primary benefits (typically 6 items)';
COMMENT ON COLUMN api.supplements.ideal_for IS 'Array of target user profiles';
COMMENT ON COLUMN api.supplements.typical_dosage_min IS 'Minimum typical dosage amount';
COMMENT ON COLUMN api.supplements.typical_dosage_max IS 'Maximum typical dosage amount';
COMMENT ON COLUMN api.supplements.typical_dosage_unit IS 'Unit of measurement (mg, IU, billion CFU, etc.)';
COMMENT ON COLUMN api.supplements.form_notes IS 'JSON object with form-specific notes (e.g., {"capsule": "notes...", "powder": "notes..."})';
COMMENT ON COLUMN api.supplements.timing_tips IS 'Array of timing and usage recommendations';
COMMENT ON COLUMN api.supplements.what_to_expect IS 'JSON with primary/secondary outcome expectations';
COMMENT ON COLUMN api.supplements.what_to_expect_summary IS 'Array of expectation summary points';
COMMENT ON COLUMN api.supplements.quality_markers IS 'Array of quality indicators to look for';
COMMENT ON COLUMN api.supplements.safety_considerations IS 'Array of safety notes and precautions';
COMMENT ON COLUMN api.supplements.synergy_notes IS 'Text describing complementary supplements';

-- ===================================================================
-- CREATE INDEX FOR FULL-TEXT SEARCH ON NEW CONTENT
-- ===================================================================

CREATE INDEX IF NOT EXISTS idx_supplements_content_search 
ON api.supplements 
USING GIN(to_tsvector('english', 
  COALESCE(quick_overview, '') || ' ' || 
  COALESCE(extended_overview, '') || ' ' || 
  COALESCE(science_snapshot, '')
));

-- ===================================================================
-- UPDATE THE UPDATED_AT TRIGGER (already exists, just confirming)
-- ===================================================================

-- Trigger already exists from initial migration

SELECT 'Successfully added supplement content columns' as status;
