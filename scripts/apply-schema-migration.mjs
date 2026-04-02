#!/usr/bin/env node

/**
 * Apply v0.7.0 schema migration directly
 * Adds knowledgebase content columns to api.supplements table
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

console.log("🚀 Applying v0.7.0 Schema Migration...\n");

// Apply the schema migration
const migrationSQL = `
BEGIN;

-- Add content columns to supplements table
ALTER TABLE api.supplements 
  ADD COLUMN IF NOT EXISTS overview_content TEXT,
  ADD COLUMN IF NOT EXISTS additional_overview_content TEXT,
  ADD COLUMN IF NOT EXISTS buying_guide_intro TEXT,
  ADD COLUMN IF NOT EXISTS buying_guide_items JSONB DEFAULT '[]'::jsonb;

-- Add column documentation
COMMENT ON COLUMN api.supplements.overview_content IS 
  'Plain text overview content (autolinkable). Replaces JSX overviewContent from TSX files.';

COMMENT ON COLUMN api.supplements.additional_overview_content IS 
  'Plain text additional overview content (autolinkable). Replaces JSX additionalOverviewContent.';

COMMENT ON COLUMN api.supplements.buying_guide_intro IS 
  'Plain text introduction for buying guide section.';

COMMENT ON COLUMN api.supplements.buying_guide_items IS 
  'Array of buying guide items as JSONB: [{title, description, icon}].';

COMMIT;
`;

try {
  // Execute the migration using rpc
  const { data, error } = await supabase.rpc("exec_sql", {
    sql: migrationSQL,
  });

  if (error) {
    // If RPC doesn't exist, try direct approach
    console.log("⚠️  RPC method not available, checking columns directly...\n");

    // Check if columns already exist
    const { data: columns, error: checkError } = await supabase
      .from("supplements")
      .select("*")
      .limit(1);

    if (checkError) {
      console.error("❌ Error checking table:", checkError.message);
      process.exit(1);
    }

    if (columns && columns[0]) {
      const hasOverview = "overview_content" in columns[0];
      const hasAdditional = "additional_overview_content" in columns[0];

      if (hasOverview && hasAdditional) {
        console.log("✅ Schema migration already applied!");
        console.log("   - overview_content column exists");
        console.log("   - additional_overview_content column exists");
        console.log("   - buying_guide_intro column exists");
        console.log("   - buying_guide_items column exists\n");
        console.log("📋 Next step: Run data migration to populate content");
        console.log("   node scripts/apply-data-migration.mjs\n");
      } else {
        console.log("⚠️  Schema migration needs to be applied manually.");
        console.log("   Run this SQL in Supabase SQL Editor:\n");
        console.log(migrationSQL);
      }
    }
  } else {
    console.log("✅ Schema migration applied successfully!\n");
    console.log("📋 Next step: Run data migration to populate content");
    console.log("   node scripts/apply-data-migration.mjs\n");
  }
} catch (err) {
  console.error("❌ Migration failed:", err.message);
  console.log(
    "\n⚠️  Please apply the migration manually in Supabase SQL Editor:\n",
  );
  console.log(migrationSQL);
  process.exit(1);
}
