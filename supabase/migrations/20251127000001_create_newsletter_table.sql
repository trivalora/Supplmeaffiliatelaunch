-- Migration: Create newsletter subscribers table
-- Date: November 27, 2025
-- Purpose: Store email subscribers from landing page newsletter form

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS api.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT NOT NULL DEFAULT 'landing_newsletter', -- tracking where they signed up
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  ip_address TEXT, -- for compliance tracking
  user_agent TEXT, -- for compliance tracking
  confirmed BOOLEAN DEFAULT false, -- for double opt-in (future feature)
  confirmation_token TEXT UNIQUE,
  metadata JSONB DEFAULT '{}'::jsonb, -- additional tracking data
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_newsletter_email ON api.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON api.newsletter_subscribers(status);
CREATE INDEX idx_newsletter_subscribed_at ON api.newsletter_subscribers(subscribed_at DESC);
CREATE INDEX idx_newsletter_source ON api.newsletter_subscribers(source);

-- Trigger for updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON api.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- Table comment
COMMENT ON TABLE api.newsletter_subscribers IS 'Newsletter email subscribers with compliance tracking and source attribution';
COMMENT ON COLUMN api.newsletter_subscribers.email IS 'Subscriber email address (unique, lowercase)';
COMMENT ON COLUMN api.newsletter_subscribers.source IS 'Where the subscription originated (e.g., landing_newsletter, footer, popup)';
COMMENT ON COLUMN api.newsletter_subscribers.status IS 'Subscription status: active, unsubscribed, or bounced';
COMMENT ON COLUMN api.newsletter_subscribers.ip_address IS 'IP address at time of subscription (GDPR compliance)';
COMMENT ON COLUMN api.newsletter_subscribers.user_agent IS 'Browser user agent (GDPR compliance)';

-- Enable Row Level Security
ALTER TABLE api.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert (for subscription form)
CREATE POLICY "Allow public insert on newsletter_subscribers"
  ON api.newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Service role has full access (for admin operations)
CREATE POLICY "Service role full access to newsletter_subscribers"
  ON api.newsletter_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Success message
SELECT 'Successfully created newsletter_subscribers table with RLS policies' as status;
