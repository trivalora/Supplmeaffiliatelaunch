-- Create partner_leads table for storing partnership applications
-- Schema: api (same as other application tables)

CREATE TABLE IF NOT EXISTS api.partner_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  network TEXT NOT NULL,
  category TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'approved', 'rejected')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  notes TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_partner_leads_created_at ON api.partner_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partner_leads_status ON api.partner_leads(status);
CREATE INDEX IF NOT EXISTS idx_partner_leads_email ON api.partner_leads(email);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION api.update_partner_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER partner_leads_updated_at
  BEFORE UPDATE ON api.partner_leads
  FOR EACH ROW
  EXECUTE FUNCTION api.update_partner_leads_updated_at();

-- Add comment
COMMENT ON TABLE api.partner_leads IS 'Partnership applications from /partner page';
