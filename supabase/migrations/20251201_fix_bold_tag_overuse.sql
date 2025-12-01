-- Fix excessive bold tag usage in glossary terms
-- SEO best practice: Use <strong> tags sparingly (5-15 per page max)
-- 
-- Strategy: Remove most bold tags, keep only for main section headings
-- This affects 40+ terms flagged by SEObility for "Many tags"

-- Helper function to reduce bold tags
CREATE OR REPLACE FUNCTION reduce_bold_tags(text_content TEXT)
RETURNS TEXT AS $$
DECLARE
  result TEXT;
BEGIN
  -- First, remove ALL bold markdown (**text**)
  result := regexp_replace(text_content, '\*\*([^*]+)\*\*', '\1', 'g');
  
  -- Add back bold ONLY for section headings (standalone lines ending with colon)
  -- Pattern: Lines that are:
  -- 1. Start of line or after newline
  -- 2. Contain text
  -- 3. End with colon
  -- 4. Not a bullet point
  result := regexp_replace(
    result,
    '(^|\n)([A-Z][^:\n]{2,60})(:)(\n|$)',
    '\1**\2**\3\4',
    'g'
  );
  
  RETURN result;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Apply to all affected terms (those with >15 bold tags)
UPDATE api.glossary_terms
SET expanded_explanation = reduce_bold_tags(expanded_explanation)
WHERE slug IN (
  'polyphenols', 'flavonoids', 'carotenoids', 'glutathioneperoxidase',
  'resveratrol', 'mtor', 'superoxidedismutase', 'metabolicsyndrome',
  'aminoacids', 'essentialaminoacids', 'observationalstudy', 'systematicreview',
  'pancreatitis', 'ulcerativecolitis', 'prediabetes', 'hyperglycemia',
  'rickets', 'akkermansia', 'arachidonicacid', 'bacteroides',
  'colonocytes', 'doms', 'esr', 'eightohdg', 'endothelium',
  'enterocytes', 'fos', 'faecalibacterium', 'freeradicals',
  'glucagon', 'hepaticencephalopathy', 'insulin', 'lipidperoxidation',
  'lycopene', 'nitricoxide', 'nonhemeiron', 'oxidizedldl', 'serum25ohd'
)
AND expanded_explanation IS NOT NULL
AND (length(expanded_explanation) - length(replace(expanded_explanation, '**', ''))) / 2 > 15;

-- Drop helper function after use
DROP FUNCTION IF EXISTS reduce_bold_tags(TEXT);

-- Log results
DO $$
DECLARE
  updated_count INTEGER;
BEGIN
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RAISE NOTICE 'Updated % glossary terms to reduce bold tag usage', updated_count;
END $$;
