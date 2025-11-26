-- Migration: Move tables from public to api schema
-- Date: November 26, 2025

-- Create api schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS api;

-- Drop existing tables in public schema (they were created incorrectly)
DROP TABLE IF EXISTS public.prices CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.glossary_terms CASCADE;
DROP TABLE IF EXISTS public.retailers CASCADE;
DROP TABLE IF EXISTS public.supplements CASCADE;

-- Drop the trigger function if it exists
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;

-- Drop views if they exist
DROP VIEW IF EXISTS public.product_details_view CASCADE;
DROP VIEW IF EXISTS public.supplement_summary_view CASCADE;

-- Drop function if it exists
DROP FUNCTION IF EXISTS public.get_products_by_supplement(TEXT, INTEGER, INTEGER) CASCADE;

-- Note: The correct tables will be created in api schema by the existing migrations
-- This migration just cleans up the incorrectly placed tables in public schema
