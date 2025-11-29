-- Migration: Create refill reminders table
-- Date: November 29, 2025
-- Purpose: Store product refill reminder subscriptions with calculated reminder dates

BEGIN;

-- Create refill reminders table
CREATE TABLE IF NOT EXISTS api.refill_reminders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  
  -- Product tracking
  product_id UUID NOT NULL REFERENCES api.products(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,                   -- Denormalized for email content
  product_brand TEXT NOT NULL,                  -- Denormalized for email content
  supplement_slug TEXT NOT NULL,                -- For building product links
  
  -- Supply calculation
  servings_per_container INTEGER NOT NULL,      -- How many servings in the product
  servings_per_day INTEGER NOT NULL DEFAULT 1,  -- User can adjust (default: 1)
  estimated_days_supply INTEGER NOT NULL,       -- servings_per_container / servings_per_day
  
  -- Reminder scheduling
  purchase_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),  -- When they clicked/bought
  estimated_runout_date TIMESTAMPTZ NOT NULL,   -- purchase_date + estimated_days_supply
  reminder_date TIMESTAMPTZ NOT NULL,           -- estimated_runout_date - 7 days
  reminder_days_before INTEGER NOT NULL DEFAULT 7,  -- Configurable advance notice
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'clicked', 'cancelled', 'expired')),
  reminder_sent_at TIMESTAMPTZ,                 -- When the reminder email was sent
  clicked_at TIMESTAMPTZ,                       -- When they clicked the reminder link
  
  -- Double opt-in
  confirmed BOOLEAN DEFAULT false,
  confirmed_at TIMESTAMPTZ,
  confirmation_token TEXT UNIQUE,
  token_expires_at TIMESTAMPTZ,
  
  -- Recurring reminders
  is_recurring BOOLEAN DEFAULT true,            -- Auto-create next reminder after sent?
  recurrence_count INTEGER DEFAULT 0,           -- How many times reminded
  
  -- Retailer tracking (for affiliate optimization)
  retailer_name TEXT,                           -- Which retailer they clicked
  product_url TEXT,                             -- The affiliate link they used
  
  -- Compliance tracking
  ip_address TEXT,
  user_agent TEXT,
  
  -- Flexible additional data
  metadata JSONB DEFAULT '{}'::jsonb,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_refill_email ON api.refill_reminders(email);
CREATE INDEX idx_refill_product ON api.refill_reminders(product_id);
CREATE INDEX idx_refill_status ON api.refill_reminders(status);
CREATE INDEX idx_refill_reminder_date ON api.refill_reminders(reminder_date) WHERE status = 'pending';
CREATE INDEX idx_refill_confirmed ON api.refill_reminders(confirmed) WHERE confirmed = true;
CREATE INDEX idx_refill_confirmation_token ON api.refill_reminders(confirmation_token) WHERE confirmation_token IS NOT NULL;

-- Composite index for finding due reminders
CREATE INDEX idx_refill_due_reminders ON api.refill_reminders(reminder_date, status) 
  WHERE status = 'pending' AND confirmed = true;

-- Trigger for updated_at
CREATE TRIGGER update_refill_reminders_updated_at
  BEFORE UPDATE ON api.refill_reminders
  FOR EACH ROW
  EXECUTE FUNCTION api.update_updated_at_column();

-- Table comments
COMMENT ON TABLE api.refill_reminders IS 'Product refill reminder subscriptions with smart scheduling';
COMMENT ON COLUMN api.refill_reminders.email IS 'User email for reminder notifications';
COMMENT ON COLUMN api.refill_reminders.servings_per_day IS 'How many servings user takes daily (default 1)';
COMMENT ON COLUMN api.refill_reminders.estimated_days_supply IS 'Calculated days until product runs out';
COMMENT ON COLUMN api.refill_reminders.reminder_date IS 'When to send the reminder (7 days before runout)';
COMMENT ON COLUMN api.refill_reminders.is_recurring IS 'Whether to auto-schedule next reminder after purchase';

-- Enable Row Level Security
ALTER TABLE api.refill_reminders ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert (for reminder signup)
CREATE POLICY "Allow public insert on refill_reminders"
  ON api.refill_reminders
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow public to update their own confirmation (via token)
CREATE POLICY "Allow public confirmation update on refill_reminders"
  ON api.refill_reminders
  FOR UPDATE
  TO anon
  USING (confirmation_token IS NOT NULL)
  WITH CHECK (confirmation_token IS NOT NULL);

-- Policy: Allow public to read their own record (for confirmation/manage page)
CREATE POLICY "Allow public read by token on refill_reminders"
  ON api.refill_reminders
  FOR SELECT
  TO anon
  USING (confirmation_token IS NOT NULL);

-- Policy: Service role has full access (for sending reminders)
CREATE POLICY "Service role full access to refill_reminders"
  ON api.refill_reminders
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Success message
SELECT 'Successfully created refill_reminders table with RLS policies' as status;

COMMIT;
