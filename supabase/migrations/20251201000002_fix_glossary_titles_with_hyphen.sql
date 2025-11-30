-- Fix glossary term meta_titles to include hyphen: "Term - Definition and Explanation"
UPDATE api.glossary_terms
SET meta_title = term || ' - Definition and Explanation'
WHERE meta_title IS NOT NULL;

-- Verify the update
SELECT slug, term, meta_title 
FROM api.glossary_terms 
WHERE meta_title IS NOT NULL 
LIMIT 3;
