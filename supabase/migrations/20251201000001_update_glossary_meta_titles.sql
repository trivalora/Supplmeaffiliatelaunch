-- Update all glossary term meta_titles from "Term - Suppl.me Glossary" to "Term Definition and Explanation"
-- This ensures consistent SEO title format across all glossary pages

UPDATE api.glossary_terms
SET meta_title = term || ' Definition and Explanation'
WHERE meta_title IS NOT NULL
  AND meta_title LIKE '%Suppl.me Glossary%';

-- Verify the update
SELECT slug, term, meta_title 
FROM api.glossary_terms 
WHERE meta_title IS NOT NULL 
LIMIT 5;
