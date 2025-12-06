#!/usr/bin/env node

/**
 * Apply v0.7.0 data migration
 * Populates overview_content and additional_overview_content for all 17 supplements
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { readFileSync } from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

console.log("🚀 Applying v0.7.0 Data Migration...\n");
console.log("   Populating knowledgebase content for 17 supplements\n");

// Read the extraction report (more reliable than parsing SQL)
const report = JSON.parse(
  readFileSync("scripts/extraction-report.json", "utf-8")
);

console.log(
  `📝 Processing ${report.results.length} supplements from extraction report\n`
);

let successCount = 0;
let errorCount = 0;

// Process each supplement from the extraction report
for (const result of report.results) {
  const { slug, overviewContent, additionalOverviewContent } = result;

  try {
    const updateData = {};
    if (overviewContent) updateData.overview_content = overviewContent;
    if (additionalOverviewContent)
      updateData.additional_overview_content = additionalOverviewContent;

    const { error } = await supabase
      .from("supplements")
      .update(updateData)
      .eq("slug", slug);

    if (error) {
      console.log(`❌ ${slug}: ${error.message}`);
      errorCount++;
    } else {
      console.log(
        `✅ ${slug}: ${overviewContent?.length || 0} + ${
          additionalOverviewContent?.length || 0
        } chars`
      );
      successCount++;
    }
  } catch (err) {
    console.log(`❌ ${slug}: ${err.message}`);
    errorCount++;
  }
}

console.log("\n" + "=".repeat(60));
console.log("📊 DATA MIGRATION SUMMARY");
console.log("=".repeat(60));
console.log(`✅ Success: ${successCount}/17 supplements`);
console.log(`❌ Errors: ${errorCount}/17 supplements`);

if (successCount === 17) {
  console.log("\n🎉 All content migrated successfully!");
  console.log("\n📋 Next step: Migrate first component");
  console.log("   See: V0.7.0_WEEK_3_QUICK_START.md (Step 2)\n");
} else {
  console.log("\n⚠️  Some migrations failed. Check errors above.");
}
