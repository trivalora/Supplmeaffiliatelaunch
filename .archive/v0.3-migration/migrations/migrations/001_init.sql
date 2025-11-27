-- Initial schema
CREATE TABLE IF NOT EXISTS supplements (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS prices (
  id BIGSERIAL PRIMARY KEY,
  supplement_slug TEXT REFERENCES supplements(slug) ON DELETE CASCADE,
  retailer TEXT NOT NULL,
  product_name TEXT NOT NULL,
  brand TEXT,
  price NUMERIC(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  url TEXT,
  last_updated TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS prices_supplement_idx ON prices(supplement_slug);

CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  event_name TEXT NOT NULL,
  payload JSONB,
  received_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS events_event_name_idx ON events(event_name);

CREATE TABLE IF NOT EXISTS favorites (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  supplement_slug TEXT NOT NULL REFERENCES supplements(slug) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, supplement_slug)
);

-- Seed supplements from route config can be done by script.
