#!/usr/bin/env node
/**
 * Verify Webhook Setup
 * Checks if webhooks are properly configured and tests them
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

const REVALIDATION_URL = "https://www.suppl.me/api/revalidate";
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET;

async function verifyWebhookSetup() {
  console.log("🔍 Webhook Setup Verification\n");
  console.log("=".repeat(50));

  // 1. Check environment variables
  console.log("\n1️⃣  Checking Environment Variables...");
  console.log(
    `   NEXT_PUBLIC_SUPABASE_URL: ${
      process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅" : "❌"
    }`
  );
  console.log(
    `   SUPABASE_SERVICE_ROLE_KEY: ${
      process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅" : "❌"
    }`
  );
  console.log(`   REVALIDATION_SECRET: ${REVALIDATION_SECRET ? "✅" : "❌"}`);

  if (!REVALIDATION_SECRET) {
    console.log("\n❌ REVALIDATION_SECRET not found in .env.local");
    console.log(
      "   Add it with: echo 'REVALIDATION_SECRET=\"2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc=\"' >> .env.local"
    );
    return;
  }

  // 2. Test database connection
  console.log("\n2️⃣  Testing Database Connection...");
  const { data: glossaryCount, error: glossaryError } = await supabase
    .from("glossary_terms")
    .select("id", { count: "exact", head: true });

  if (glossaryError) {
    console.log("   ❌ Glossary terms:", glossaryError.message);
  } else {
    console.log(`   ✅ Glossary terms table accessible`);
  }

  const { data: supplementCount, error: supplementError } = await supabase
    .from("supplements")
    .select("id", { count: "exact", head: true });

  if (supplementError) {
    console.log("   ❌ Supplements:", supplementError.message);
  } else {
    console.log(`   ✅ Supplements table accessible`);
  }

  const { data: productCount, error: productError } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true });

  if (productError) {
    console.log("   ❌ Products:", productError.message);
  } else {
    console.log(`   ✅ Products table accessible`);
  }

  // 3. Test revalidation endpoint
  console.log("\n3️⃣  Testing Revalidation Endpoint...");
  try {
    const response = await fetch(REVALIDATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidation-secret": REVALIDATION_SECRET,
      },
      body: JSON.stringify({ type: "glossary" }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("   ✅ Revalidation endpoint working");
      console.log(`   Response:`, data);
    } else {
      console.log(`   ❌ Revalidation failed (${response.status}):`, data);
    }
  } catch (error) {
    console.log("   ❌ Error testing endpoint:", error.message);
  }

  // 4. Instructions for manual webhook setup
  console.log("\n4️⃣  Manual Webhook Setup Required:");
  console.log(
    "   📍 Go to: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/database/hooks"
  );
  console.log("\n   Create 3 webhooks with these settings:");
  console.log("\n   🔹 Webhook 1: Glossary Cache Revalidation");
  console.log("      Table: api.glossary_terms");
  console.log("      Events: INSERT, UPDATE, DELETE");
  console.log("      URL: https://www.suppl.me/api/revalidate");
  console.log(
    '      Headers: {"Content-Type": "application/json", "x-revalidation-secret": "' +
      REVALIDATION_SECRET +
      '"}'
  );
  console.log('      Body: {"type": "glossary"}');
  console.log("\n   🔹 Webhook 2: Supplement Cache Revalidation");
  console.log("      Table: api.supplements");
  console.log("      Events: INSERT, UPDATE, DELETE");
  console.log("      URL: https://www.suppl.me/api/revalidate");
  console.log(
    '      Headers: {"Content-Type": "application/json", "x-revalidation-secret": "' +
      REVALIDATION_SECRET +
      '"}'
  );
  console.log('      Body: {"type": "supplement"}');
  console.log("\n   🔹 Webhook 3: Product Cache Revalidation");
  console.log("      Table: api.products");
  console.log("      Events: INSERT, UPDATE, DELETE");
  console.log("      URL: https://www.suppl.me/api/revalidate");
  console.log(
    '      Headers: {"Content-Type": "application/json", "x-revalidation-secret": "' +
      REVALIDATION_SECRET +
      '"}'
  );
  console.log('      Body: {"type": "product"}');

  // 5. Test trigger
  console.log("\n5️⃣  Test Webhook (after setup):");
  console.log("   Run: node scripts/test-webhook-trigger.mjs");
  console.log("   Then check webhook deliveries in Supabase dashboard");

  console.log("\n" + "=".repeat(50));
  console.log("✅ Verification complete!\n");
}

verifyWebhookSetup();
