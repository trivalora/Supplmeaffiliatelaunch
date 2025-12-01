-- Fix excessive bold tag usage in glossary terms - Version 2
-- Direct approach: Remove ALL bold, then selectively add back

-- Polyphenols
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(
  regexp_replace(expanded_explanation, '\*\*([^*]+)\*\*', '\1', 'g'),
  '(Flavonoids|Phenolic acids|Stilbenes|Lignans|Bioavailability and metabolism|Health effects supported by research|Cardiovascular protection|Metabolic health|Cognitive function|Gut health|Dosing and sources|Supplements|Safety and considerations):',
  '**\1:**',
  'g'
)
WHERE slug = 'polyphenols';

-- Flavonoids
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(
  regexp_replace(expanded_explanation, '\*\*([^*]+)\*\*', '\1', 'g'),
  '(Classification of flavonoids|Flavonols|Flavones|Flavanones|Flavan-3-ols|Anthocyanins|Isoflavones|Mechanisms of action|Antioxidant activity|Cell signaling modulation|Bioavailability|Health benefits from clinical research|Cardiovascular disease|Type 2 diabetes|Cognitive function|Dietary intake recommendations|Supplement considerations|Safety):',
  '**\1:**',
  'g'
)
WHERE slug = 'flavonoids';

-- Carotenoids
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(
  regexp_replace(expanded_explanation, '\*\*([^*]+)\*\*', '\1', 'g'),
  '(Provitamin A carotenoids|Non-provitamin A carotenoids|Mechanisms of action|Health benefits|Bioavailability|Dietary sources|Supplementation|Safety):',
  '**\1:**',
  'g'
)
WHERE slug = 'carotenoids';

-- Apply simpler fix to remaining terms: just remove ALL bold
UPDATE api.glossary_terms
SET expanded_explanation = regexp_replace(expanded_explanation, '\*\*([^*]+)\*\*', '\1', 'g')
WHERE slug IN (
  'glutathioneperoxidase', 'resveratrol', 'mtor', 'superoxidedismutase', 
  'metabolicsyndrome', 'aminoacids', 'essentialaminoacids', 'observationalstudy',
  'systematicreview', 'pancreatitis', 'ulcerativecolitis', 'prediabetes',
  'hyperglycemia', 'rickets', 'akkermansia', 'arachidonicacid', 'bacteroides',
  'colonocytes', 'doms', 'esr', 'eightohdg', 'endothelium', 'enterocytes',
  'fos', 'faecalibacterium', 'freeradicals', 'glucagon', 'hepaticencephalopathy',
  'insulin', 'lipidperoxidation', 'lycopene', 'nitricoxide', 'nonhemeiron',
  'oxidizedldl', 'serum25ohd'
);
