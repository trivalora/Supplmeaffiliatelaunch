-- Fix excessive bold tags in glossary terms
-- SEO best practice: Use bold sparingly (5-10 times per page max)
-- Strategy: Keep bold only for:
-- 1. Main term mentions
-- 2. Key subheadings/categories
-- 3. Critical scientific terms

-- Polyphenols - Remove most bold, keep only main categories
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(
  expanded_explanation,
  '\*\*([^*]+)\*\*',
  '\1',
  'g'
)
WHERE slug = 'polyphenols';

-- Now add back selective bold for main sections only
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(
  expanded_explanation,
  '(Flavonoids|Phenolic acids|Stilbenes|Lignans|Bioavailability and metabolism|Health effects supported by research|Cardiovascular protection|Metabolic health|Anti-inflammatory and antioxidant effects|Cognitive function|Gut health|Dosing and sources|Supplements|Safety and considerations):',
  '**\1:**',
  'g'
)
WHERE slug = 'polyphenols';

