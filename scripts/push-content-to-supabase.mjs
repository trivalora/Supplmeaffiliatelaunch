#!/usr/bin/env node
/**
 * Push knowledgebase content to Supabase
 *
 * Reads generated-content-migration.sql and applies updates to Supabase
 * using the Service Role key for authentication.
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, "..", ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing required environment variables:");
  console.error("   NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✅" : "❌");
  console.error("   SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "✅" : "❌");
  process.exit(1);
}

// Create Supabase client with api schema
const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "api" },
});

console.log("✅ Connected to Supabase");
console.log("🚀 Starting knowledgebase content migration...\n");

// Read extraction report
const reportPath = join(__dirname, "extraction-report.json");
const report = JSON.parse(readFileSync(reportPath, "utf-8"));

let successCount = 0;
let errorCount = 0;
const errors = [];

for (const result of report.results) {
  const { slug, overviewContent, additionalOverviewContent } = result;

  try {
    const updates = {};
    if (overviewContent) updates.overview_content = overviewContent;
    if (additionalOverviewContent)
      updates.additional_overview_content = additionalOverviewContent;

    const { error } = await supabase
      .from("supplements")
      .update(updates)
      .eq("slug", slug);

    if (error) throw error;

    const overviewLen = overviewContent?.length || 0;
    const additionalLen = additionalOverviewContent?.length || 0;
    console.log(
      `✅ ${slug.padEnd(20)} | Overview: ${String(overviewLen).padStart(
        5
      )} chars | Additional: ${String(additionalLen).padStart(5)} chars`
    );
    successCount++;
  } catch (error) {
    console.error(`❌ ${slug.padEnd(20)} | Error: ${error.message}`);
    errors.push({ slug, error: error.message });
    errorCount++;
  }
}

console.log("\n" + "=".repeat(60));
console.log("📊 MIGRATION SUMMARY");
console.log("=".repeat(60));
console.log(`✅ Success: ${successCount}/${report.results.length}`);
console.log(`❌ Errors: ${errorCount}/${report.results.length}`);

if (errorCount > 0) {
  console.log("\n🚨 ERRORS:");
  errors.forEach(({ slug, error }) => {
    console.log(`   ${slug}: ${error}`);
  });
}

if (errorCount === 0) {
  console.log("\n🎉 Migration complete! Verifying...\n");

  // Verify migration
  const { data, error } = await supabase
    .from("supplements")
    .select("slug, overview_content, additional_overview_content")
    .in(
      "slug",
      report.results.map((r) => r.slug)
    )
    .order("slug");

  if (error) {
    console.error("❌ Verification failed:", error.message);
  } else {
    console.log("📋 Verification Results:");
    data.forEach((row) => {
      const hasOverview = row.overview_content ? "✅" : "❌";
      const hasAdditional = row.additional_overview_content ? "✅" : "❌";
      const overviewLen = row.overview_content?.length || 0;
      const additionalLen = row.additional_overview_content?.length || 0;
      console.log(
        `   ${row.slug.padEnd(20)} | Overview: ${hasOverview} (${String(
          overviewLen
        ).padStart(5)} chars) | Additional: ${hasAdditional} (${String(
          additionalLen
        ).padStart(5)} chars)`
      );
    });
  }
}

console.log("\n✨ Done!\n");
