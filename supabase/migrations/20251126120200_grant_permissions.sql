-- Migration: Grant permissions on api schema tables
-- Date: November 26, 2025

-- Grant usage on api schema to anon and service_role
GRANT USAGE ON SCHEMA api TO anon, service_role, authenticated;

-- Grant permissions on all tables in api schema
GRANT ALL ON ALL TABLES IN SCHEMA api TO service_role;
GRANT SELECT ON ALL TABLES IN SCHEMA api TO anon, authenticated;

-- Grant permissions on all sequences
GRANT ALL ON ALL SEQUENCES IN SCHEMA api TO service_role;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA api TO anon, authenticated;

-- Grant permissions on functions
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA api TO anon, service_role, authenticated;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA api GRANT ALL ON TABLES TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA api GRANT SELECT ON TABLES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA api GRANT ALL ON SEQUENCES TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA api GRANT USAGE ON SEQUENCES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA api GRANT EXECUTE ON FUNCTIONS TO anon, service_role, authenticated;

SELECT 'Permissions granted successfully' as status;
