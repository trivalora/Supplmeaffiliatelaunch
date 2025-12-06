-- Manual migration execution script
-- Run via Supabase SQL Editor: https://supabase.com/dashboard/project/*/editor

BEGIN;

-- Enable pg_trgm extension for full-text search (if not already enabled)
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Add content columns to supplements table
ALTER TABLE api.supplements 
  ADD COLUMN IF NOT EXISTS overview_content TEXT,
  ADD COLUMN IF NOT EXISTS additional_overview_content TEXT,
  ADD COLUMN IF NOT EXISTS buying_guide_intro TEXT,
  ADD COLUMN IF NOT EXISTS buying_guide_items JSONB DEFAULT '[]'::jsonb;

-- Add column documentation
COMMENT ON COLUMN api.supplements.overview_content IS 
  'Plain text overview content (autolinkable). Replaces JSX overviewContent from TSX files. Used in OverviewSection component.';

COMMENT ON COLUMN api.supplements.additional_overview_content IS 
  'Plain text additional overview content (autolinkable). Replaces JSX additionalOverviewContent from TSX files. Provides extended context in OverviewSection.';

COMMENT ON COLUMN api.supplements.buying_guide_intro IS 
  'Plain text introduction for buying guide section. Provides context before buying guide items list.';

COMMENT ON COLUMN api.supplements.buying_guide_items IS 
  'Array of buying guide items as JSONB: [{title: string, description: string, icon: string}]. Replaces hardcoded arrays in TSX files.';

-- Add index for full-text search on overview content (future enhancement)
-- Using pg_trgm extension for trigram-based similarity search
CREATE INDEX IF NOT EXISTS idx_supplements_overview_content_trgm 
  ON api.supplements USING gin (overview_content gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_supplements_additional_overview_trgm 
  ON api.supplements USING gin (additional_overview_content gin_trgm_ops);

COMMIT;

-- Verification query
SELECT slug, 
       CASE WHEN overview_content IS NULL THEN '✅ Column exists' ELSE '✅ Has data' END as overview_status
FROM api.supplements 
LIMIT 3;
