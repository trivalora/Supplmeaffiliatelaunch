-- Remove knowledgebase pages from glossary_terms table
-- These supplements have full knowledgebase pages, not glossary entries
-- This fixes build errors where the system tried to generate glossary pages for them

DELETE FROM api.glossary_terms 
WHERE slug IN ('creatine', 'bcaa', 'prebiotics', 'probiotics');
