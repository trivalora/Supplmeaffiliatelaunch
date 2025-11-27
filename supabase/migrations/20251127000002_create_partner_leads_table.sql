-- Migration: Create partner leads table
-- Date: November 27, 2025
-- Purpose: Store partner application submissions from /partner page

-- Create partner leads table
CREATE TABLE IF NOT EXISTS api.partner_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  network TEXT NOT NULL, -- affiliate network (shareasale, amazon, iherb, etc.)
  category TEXT NOT NULL, -- product category they're interested in
  message TEXT, -- additional details/requirements
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'approved', 'rejected', 'archived')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  ip_address TEXT, -- for compliance tracking
  user_agent TEXT, -- for compliance tracking
  contacted_at TIMESTAMPTZ, -- when we first reached out
  responded_at TIMESTAMPTZ, -- when they responded
  notes TEXT, -- internal notes about this lead
  metadata JSONB DEFAULT '{}'::jsonb, -- additional tracking data
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance and filtering
CREATE INDEX idx_partner_email ON api.partner_leads(email);
CREATE INDEX idx_partner_status ON api.partner_leads(status);
CREATE INDEX idx_partner_priority ON api.partner_leads(priority);
CREATE INDEX idx_partner_network ON api.partner_leads(network);
CREATE INDEX idx_partner_created_at ON api.partner_leads(created_at DESC);
CREATE INDEX idx_partner_status_priority ON api.partner_leads(status, priority);

-- Trigger for updated_at
CREATE TRIGGER update_partner_leads_updated_at
  BEFORE UPDATE ON api.partner_leads
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- Table comments
COMMENT ON TABLE api.partner_leads IS 'Partner application submissions from /partner page with lead management workflow';
COMMENT ON COLUMN api.partner_leads.name IS 'Full name of applicant';
COMMENT ON COLUMN api.partner_leads.email IS 'Contact email address';
COMMENT ON COLUMN api.partner_leads.network IS 'Affiliate network they represent (shareasale, amazon, iherb, cj, etc.)';
COMMENT ON COLUMN api.partner_leads.category IS 'Product category of interest (e.g., Omega-3, Probiotics)';
COMMENT ON COLUMN api.partner_leads.status IS 'Lead status: new, contacted, approved, rejected, archived';
COMMENT ON COLUMN api.partner_leads.priority IS 'Lead priority for follow-up: low, medium, high';
COMMENT ON COLUMN api.partner_leads.notes IS 'Internal notes about communication and decisions';

-- Enable Row Level Security
ALTER TABLE api.partner_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert (for partner application form)
CREATE POLICY "Allow public insert on partner_leads"
  ON api.partner_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Service role has full access (for admin operations)
CREATE POLICY "Service role full access to partner_leads"
  ON api.partner_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Success message
SELECT 'Successfully created partner_leads table with RLS policies' as status;
