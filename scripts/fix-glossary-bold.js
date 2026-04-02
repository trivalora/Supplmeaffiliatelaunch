#!/usr/bin/env node
/**
 * Fix excessive bold tags in glossary terms
 * Runs SQL directly against Supabase database
 */

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "api" },
});

const AFFECTED_SLUGS = [
  "polyphenols",
  "flavonoids",
  "carotenoids",
  "glutathioneperoxidase",
  "resveratrol",
  "mtor",
  "superoxidedismutase",
  "metabolicsyndrome",
  "aminoacids",
  "essentialaminoacids",
  "observationalstudy",
  "systematicreview",
  "pancreatitis",
  "ulcerativecolitis",
  "prediabetes",
  "hyperglycemia",
  "rickets",
  "akkermansia",
  "arachidonicacid",
  "bacteroides",
  "colonocytes",
  "doms",
  "esr",
  "eightohdg",
  "endothelium",
  "enterocytes",
  "fos",
  "faecalibacterium",
  "freeradicals",
  "glucagon",
  "hepaticencephalopathy",
  "insulin",
  "lipidperoxidation",
  "lycopene",
  "nitricoxide",
  "nonhemeiron",
  "oxidizedldl",
  "serum25ohd",
];

function removeBold(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function countBold(text) {
  const matches = text.match(/\*\*/g);
  return matches ? matches.length / 2 : 0;
}

function addSelectiveBold(text, slug) {
  // Add back bold only for major section headings
  const patterns = {
    polyphenols:
      /(Flavonoids|Phenolic acids|Stilbenes|Lignans|Bioavailability and metabolism|Health effects supported by research|Cardiovascular protection|Metabolic health|Cognitive function|Gut health|Dosing and sources|Supplements|Safety and considerations):/g,
    flavonoids:
      /(Classification of flavonoids|Flavonols|Flavones|Flavanones|Mechanisms of action|Bioavailability|Health benefits from clinical research|Cardiovascular disease|Type 2 diabetes|Cognitive function|Dietary intake recommendations|Supplement considerations|Safety):/g,
    carotenoids:
      /(Provitamin A carotenoids|Non-provitamin A carotenoids|Mechanisms of action|Health benefits|Bioavailability|Dietary sources|Supplementation|Safety):/g,
  };

  const pattern = patterns[slug];
  if (pattern) {
    return text.replace(pattern, "**$1:**");
  }
  return text; // No bold for other terms
}

async function fixTerm(slug) {
  console.log(`\nProcessing: ${slug}`);

  // Fetch term
  const { data, error } = await supabase
    .from("glossary_terms")
    .select("expanded_explanation")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.log(`  ❌ Not found`);
    return;
  }

  const original = data.expanded_explanation;
  if (!original) {
    console.log(`  ⚠️  No content`);
    return;
  }

  const originalCount = countBold(original);
  console.log(`  Original bold tags: ${originalCount}`);

  if (originalCount < 15) {
    console.log(`  ✓ Already compliant (< 15)`);
    return;
  }

  // Remove all bold
  let fixed = removeBold(original);

  // Add selective bold back
  fixed = addSelectiveBold(fixed, slug);

  const newCount = countBold(fixed);
  console.log(`  New bold tags: ${newCount}`);
  console.log(
    `  Reduction: ${originalCount - newCount} (${(
      (1 - newCount / originalCount) *
      100
    ).toFixed(1)}%)`,
  );

  // Update
  const { error: updateError } = await supabase
    .from("glossary_terms")
    .update({ expanded_explanation: fixed })
    .eq("slug", slug);

  if (updateError) {
    console.log(`  ❌ Update failed: ${updateError.message}`);
  } else {
    console.log(`  ✅ Updated`);
  }
}

async function main() {
  console.log("🔧 Fixing bold tag overuse in glossary terms");
  console.log("=".repeat(60));
  console.log(`Terms to process: ${AFFECTED_SLUGS.length}`);

  for (const slug of AFFECTED_SLUGS) {
    await fixTerm(slug);
  }

  console.log("\n" + "=".repeat(60));
  console.log("✅ Complete!");
}

main().catch(console.error);
