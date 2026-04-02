#!/usr/bin/env node
/**
 * Test All Three Webhooks
 * Updates glossary, supplement, and product to trigger all webhooks
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

async function testAllWebhooks() {
  console.log("🧪 Testing All Three Webhooks\n");
  console.log("=".repeat(60));

  // Test 1: Glossary Webhook
  console.log("\n1️⃣  Testing Glossary Webhook...");
  try {
    const { data: glossaryData, error: glossaryError } = await supabase
      .from("glossary_terms")
      .update({ updated_at: new Date().toISOString() })
      .eq("slug", "rct")
      .select();

    if (glossaryError) throw glossaryError;
    console.log("   ✅ Updated glossary term: RCT");
    console.log("   📡 Webhook should trigger for api.glossary_terms");
  } catch (error) {
    console.log("   ❌ Error:", error.message);
  }

  // Wait a bit between requests
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test 2: Supplement Webhook
  console.log("\n2️⃣  Testing Supplement Webhook...");
  try {
    const { data: supplementData, error: supplementError } = await supabase
      .from("supplements")
      .update({ updated_at: new Date().toISOString() })
      .eq("slug", "magnesium")
      .select("id, name, slug");

    if (supplementError) throw supplementError;
    console.log(
      "   ✅ Updated supplement:",
      supplementData[0]?.name || "Magnesium",
    );
    console.log("   📡 Webhook should trigger for api.supplements");
  } catch (error) {
    console.log("   ❌ Error:", error.message);
  }

  // Wait a bit between requests
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test 3: Product Webhook
  console.log("\n3️⃣  Testing Product Webhook...");
  try {
    // Get a random product
    const { data: products, error: productError } = await supabase
      .from("products")
      .select("id, product_name")
      .limit(1);

    if (productError) throw productError;

    if (products && products.length > 0) {
      const product = products[0];

      // Update the product
      const { error: updateError } = await supabase
        .from("products")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", product.id);

      if (updateError) throw updateError;

      console.log("   ✅ Updated product:", product.product_name);
      console.log("   📡 Webhook should trigger for api.products");
    }
  } catch (error) {
    console.log("   ❌ Error:", error.message);
  }

  console.log("\n" + "=".repeat(60));
  console.log("\n✅ All webhook tests completed!\n");
  console.log("📋 Next Steps:");
  console.log("   1. Go to Supabase Dashboard → Database → Webhooks");
  console.log("   2. Check each webhook (Glossary, Supplement, Product)");
  console.log('   3. View "Deliveries" tab for each webhook');
  console.log("   4. Verify 3 successful deliveries (Status 200)\n");
  console.log("🌐 Webhook URLs to check:");
  console.log(
    "   • Glossary: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/database/hooks",
  );
  console.log(
    "   • Each webhook should show recent delivery within last minute\n",
  );
  console.log("🔄 Cache revalidation should happen automatically now!");
  console.log("   Visit these pages to see updated timestamps:");
  console.log("   • https://www.suppl.me/glossary/rct");
  console.log("   • https://www.suppl.me/magnesium\n");
}

testAllWebhooks();
