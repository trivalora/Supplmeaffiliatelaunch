#!/usr/bin/env node
/**
 * Test Webhook Trigger Script
 * Updates a glossary term to trigger the webhook
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function testWebhookTrigger() {
  console.log("🧪 Testing webhook trigger...\n");

  // Update a glossary term to trigger the webhook
  const { data, error } = await supabase
    .from("glossary_terms")
    .update({ updated_at: new Date().toISOString() })
    .eq("slug", "bioavailability")
    .select();

  if (error) {
    console.error("❌ Error updating term:", error);
    process.exit(1);
  }

  console.log("✅ Successfully updated bioavailability term");
  console.log("📡 This should have triggered the webhook");
  console.log("\nNext steps:");
  console.log("1. Check Supabase Dashboard → Database → Webhooks");
  console.log('2. Look at "Deliveries" tab for your webhook');
  console.log("3. Should see a successful POST request (Status 200)");
  console.log("\nUpdated record:", data);
}

testWebhookTrigger();
