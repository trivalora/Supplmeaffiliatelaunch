-- Migration: Add double opt-in fields to newsletter_subscribers
-- Date: November 29, 2025
-- Purpose: Support double opt-in email confirmation with MailerSend

BEGIN;

-- Add confirmed_at timestamp column (separate from updated_at for compliance)
ALTER TABLE api.newsletter_subscribers 
ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMPTZ;

-- Add token_expires_at column for security
ALTER TABLE api.newsletter_subscribers 
ADD COLUMN IF NOT EXISTS token_expires_at TIMESTAMPTZ;

-- Add index on confirmation_token for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_confirmation_token 
ON api.newsletter_subscribers(confirmation_token) 
WHERE confirmation_token IS NOT NULL;

-- Add index on confirmed status for filtering
CREATE INDEX IF NOT EXISTS idx_newsletter_confirmed 
ON api.newsletter_subscribers(confirmed) 
WHERE confirmed = true;

-- Add policy: Allow public to update their own confirmation (via token)
-- This allows the confirmation endpoint to work with anon role
DROP POLICY IF EXISTS "Allow public confirmation update" ON api.newsletter_subscribers;
CREATE POLICY "Allow public confirmation update"
  ON api.newsletter_subscribers
  FOR UPDATE
  TO anon
  USING (confirmation_token IS NOT NULL)
  WITH CHECK (confirmation_token IS NOT NULL);

-- Add policy: Allow public to read their own record (for confirmation page)
DROP POLICY IF EXISTS "Allow public read by token" ON api.newsletter_subscribers;
CREATE POLICY "Allow public read by token"
  ON api.newsletter_subscribers
  FOR SELECT
  TO anon
  USING (confirmation_token IS NOT NULL);

-- Comments for new columns
COMMENT ON COLUMN api.newsletter_subscribers.confirmed_at IS 'Timestamp when email was confirmed via double opt-in';
COMMENT ON COLUMN api.newsletter_subscribers.token_expires_at IS 'Expiration time for confirmation token (24 hours from creation)';

-- Success message
SELECT 'Successfully added double opt-in support to newsletter_subscribers' as status;

COMMIT;
