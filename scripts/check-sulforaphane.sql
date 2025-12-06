-- Add sulforaphane to database
INSERT INTO api.supplements (slug, name, display_name)
VALUES ('sulforaphane', 'Sulforaphane', 'Sulforaphane')
ON CONFLICT (slug) DO NOTHING;

-- Verify it was added
SELECT slug, name, display_name 
FROM api.supplements 
WHERE slug = 'sulforaphane';
