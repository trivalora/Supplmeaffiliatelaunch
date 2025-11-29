-- Migration: Create waitlist signups table
-- Date: November 29, 2025
-- Purpose: Store waitlist signups with custom data fields separate from newsletter

BEGIN;

-- Create waitlist signups table
CREATE TABLE IF NOT EXISTS api.waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  
  -- Custom waitlist data
  name TEXT,                                    -- Optional name
  interest TEXT,                                -- What feature/product are they interested in?
  referral_source TEXT,                         -- How did they hear about us?
  priority_level TEXT DEFAULT 'standard' CHECK (priority_level IN ('standard', 'priority', 'vip')),
  
  -- Signup metadata
  source TEXT NOT NULL DEFAULT 'waitlist',      -- Where they signed up (waitlist, landing, etc.)
  signed_up_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Double opt-in fields
  confirmed BOOLEAN DEFAULT false,
  confirmed_at TIMESTAMPTZ,
  confirmation_token TEXT UNIQUE,
  token_expires_at TIMESTAMPTZ,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting', 'invited', 'converted', 'unsubscribed')),
  invited_at TIMESTAMPTZ,                       -- When they were invited to join
  converted_at TIMESTAMPTZ,                     -- When they became a user/subscriber
  
  -- Communication preferences
  wants_newsletter BOOLEAN DEFAULT false,       -- Also subscribe to newsletter?
  
  -- Compliance tracking
  ip_address TEXT,
  user_agent TEXT,
  
  -- Flexible additional data
  metadata JSONB DEFAULT '{}'::jsonb,           -- Any extra custom fields
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_waitlist_email ON api.waitlist_signups(email);
CREATE INDEX idx_waitlist_status ON api.waitlist_signups(status);
CREATE INDEX idx_waitlist_signed_up_at ON api.waitlist_signups(signed_up_at DESC);
CREATE INDEX idx_waitlist_confirmed ON api.waitlist_signups(confirmed) WHERE confirmed = true;
CREATE INDEX idx_waitlist_confirmation_token ON api.waitlist_signups(confirmation_token) WHERE confirmation_token IS NOT NULL;
CREATE INDEX idx_waitlist_priority ON api.waitlist_signups(priority_level);

-- Trigger for updated_at
CREATE TRIGGER update_waitlist_signups_updated_at
  BEFORE UPDATE ON api.waitlist_signups
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- Table comments
COMMENT ON TABLE api.waitlist_signups IS 'Waitlist signups with custom data and priority tracking';
COMMENT ON COLUMN api.waitlist_signups.email IS 'Signup email address (unique, lowercase)';
COMMENT ON COLUMN api.waitlist_signups.interest IS 'What product/feature they are interested in';
COMMENT ON COLUMN api.waitlist_signups.priority_level IS 'Priority for invites: standard, priority, or vip';
COMMENT ON COLUMN api.waitlist_signups.status IS 'Waitlist status: waiting, invited, converted, or unsubscribed';
COMMENT ON COLUMN api.waitlist_signups.wants_newsletter IS 'Whether they also want to receive the newsletter';
COMMENT ON COLUMN api.waitlist_signups.metadata IS 'Flexible JSON field for additional custom data';

-- Enable Row Level Security
ALTER TABLE api.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert (for waitlist form)
CREATE POLICY "Allow public insert on waitlist_signups"
  ON api.waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow public to update their own confirmation (via token)
CREATE POLICY "Allow public confirmation update on waitlist"
  ON api.waitlist_signups
  FOR UPDATE
  TO anon
  USING (confirmation_token IS NOT NULL)
  WITH CHECK (confirmation_token IS NOT NULL);

-- Policy: Allow public to read their own record (for confirmation page)
CREATE POLICY "Allow public read by token on waitlist"
  ON api.waitlist_signups
  FOR SELECT
  TO anon
  USING (confirmation_token IS NOT NULL);

-- Policy: Service role has full access (for admin operations)
CREATE POLICY "Service role full access to waitlist_signups"
  ON api.waitlist_signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Success message
SELECT 'Successfully created waitlist_signups table with RLS policies' as status;

COMMIT;
