#!/usr/bin/env node
/**
 * Script to update all glossary terms to use numbered Fact/Myth labels
 *
 * This fixes SEO duplicate bold tag warnings by ensuring each Fact/Myth
 * has a unique label (Fact #1, Myth #2, etc.) instead of repeated labels.
 *
 * Usage: node scripts/number-glossary-facts-myths.mjs [--dry-run]
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

// Load environment variables
config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing required environment variables:");
  console.error("   NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✓" : "✗");
  console.error("   SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "✓" : "✗");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "api" },
});

// Check if this is a dry run
const isDryRun = process.argv.includes("--dry-run");

/**
 * Add numbers to Fact/Myth labels in a misconceptions array
 */
function numberMisconceptions(misconceptions) {
  if (!Array.isArray(misconceptions) || misconceptions.length === 0) {
    return misconceptions;
  }

  let mythCount = 0;
  let factCount = 0;

  return misconceptions.map((item) => {
    // Handle **Myth**: pattern
    if (item.match(/^\*\*Myth\*\*:/)) {
      mythCount++;
      return item.replace(/^\*\*Myth\*\*:/, `**Myth #${mythCount}:**`);
    }

    // Handle **Fact**: pattern
    if (item.match(/^\*\*Fact\*\*:/)) {
      factCount++;
      return item.replace(/^\*\*Fact\*\*:/, `**Fact #${factCount}:**`);
    }

    // Already numbered or different format - leave as is
    return item;
  });
}

/**
 * Add numbers to Fact/Myth labels in key_points markdown
 */
function numberKeyPoints(keyPoints) {
  if (typeof keyPoints !== "string" || !keyPoints) {
    return keyPoints;
  }

  // Match patterns like **Fact**: or **Myth**: at the start of lines
  // and add numbers sequentially
  let mythCount = 0;
  let factCount = 0;

  return keyPoints
    .replace(/^(\*\*Myth\*\*:)/gm, () => {
      mythCount++;
      return `**Myth #${mythCount}:**`;
    })
    .replace(/^(\*\*Fact\*\*:)/gm, () => {
      factCount++;
      return `**Fact #${factCount}:**`;
    });
}

async function main() {
  console.log("\n🔍 Fetching glossary terms from database...\n");

  // Fetch all glossary terms
  const { data: terms, error } = await supabase
    .from("glossary_terms")
    .select("id, slug, term, common_misconceptions, key_points")
    .order("term");

  if (error) {
    console.error("❌ Error fetching glossary terms:", error);
    process.exit(1);
  }

  console.log(`📊 Found ${terms.length} glossary terms\n`);

  let updatedCount = 0;
  let alreadyNumberedCount = 0;
  const updates = [];

  for (const term of terms) {
    let hasChanges = false;
    const changes = {};

    // Check common_misconceptions
    if (
      Array.isArray(term.common_misconceptions) &&
      term.common_misconceptions.length > 0
    ) {
      const numbered = numberMisconceptions(term.common_misconceptions);
      const hasUnnumbered = term.common_misconceptions.some(
        (item) =>
          item.match(/^\*\*(?:Myth|Fact)\*\*:/) &&
          !item.match(/^\*\*(?:Myth|Fact) #\d+\*\*:/)
      );

      if (hasUnnumbered) {
        changes.common_misconceptions = numbered;
        hasChanges = true;
        console.log(`📝 ${term.term} (${term.slug})`);
        console.log(
          `   Misconceptions: ${term.common_misconceptions.length} items`
        );

        if (!isDryRun) {
          term.common_misconceptions.forEach((item, i) => {
            if (item !== numbered[i]) {
              console.log(
                `   ${i + 1}. ${item.substring(0, 50)}... → ${numbered[
                  i
                ].substring(0, 50)}...`
              );
            }
          });
        }
      }
    }

    // Check key_points
    if (typeof term.key_points === "string" && term.key_points) {
      const numbered = numberKeyPoints(term.key_points);
      const hasUnnumbered =
        term.key_points.match(/^\*\*(?:Myth|Fact)\*\*:/m) &&
        !term.key_points.match(/^\*\*(?:Myth|Fact) #\d+\*\*:/m);

      if (hasUnnumbered) {
        changes.key_points = numbered;
        hasChanges = true;
        console.log(`📝 ${term.term} (${term.slug})`);
        console.log(`   Key points: Updated Fact/Myth labels`);
      }
    }

    if (hasChanges) {
      updatedCount++;
      updates.push({ id: term.id, slug: term.slug, ...changes });
    } else {
      alreadyNumberedCount++;
    }
  }

  console.log("\n📊 Summary:");
  console.log(`   Total terms: ${terms.length}`);
  console.log(`   ✅ Already numbered: ${alreadyNumberedCount}`);
  console.log(`   🔄 Need updates: ${updatedCount}`);

  if (isDryRun) {
    console.log("\n🔍 DRY RUN - No changes made to database");
    console.log("   Run without --dry-run to apply changes\n");
    return;
  }

  if (updatedCount === 0) {
    console.log("\n✨ All glossary terms already use numbered labels!\n");
    return;
  }

  console.log("\n💾 Updating database...\n");

  let successCount = 0;
  let errorCount = 0;

  for (const update of updates) {
    const { id, slug, ...changes } = update;

    const { error } = await supabase
      .from("glossary_terms")
      .update(changes)
      .eq("id", id);

    if (error) {
      console.error(`❌ Error updating ${slug}:`, error);
      errorCount++;
    } else {
      console.log(`✅ Updated ${slug}`);
      successCount++;
    }
  }

  console.log("\n✨ Update complete!");
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}\n`);

  if (successCount > 0) {
    console.log("🔄 Remember to:");
    console.log("   1. Restart your dev server to see changes");
    console.log("   2. Rebuild for production deployment\n");
  }
}

main().catch(console.error);
