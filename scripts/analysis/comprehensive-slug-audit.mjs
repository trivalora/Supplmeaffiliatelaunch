import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { readFileSync } from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

console.log("🔍 COMPREHENSIVE GLOSSARY SLUG AUDIT\n");
console.log("=".repeat(80));

// 1. Get all slugs from database
console.log("\n📊 STEP 1: Fetching all glossary terms from database...\n");
const { data: dbTerms, error } = await supabase
  .from("glossary_terms")
  .select("id, slug, term, abbreviation")
  .order("slug");

if (error) {
  console.error("❌ Database error:", error);
  process.exit(1);
}

console.log(`✅ Found ${dbTerms.length} terms in database`);

// 2. Extract slugs from glossaryAutolink.tsx
console.log("\n📊 STEP 2: Parsing glossaryAutolink.tsx...\n");
const autolinkContent = readFileSync("src/lib/glossaryAutolink.tsx", "utf-8");
const keyMatches = autolinkContent.matchAll(/{\s*key:\s*["']([^"']+)["']/g);
const autolinkKeys = Array.from(keyMatches, (m) => m[1]);
console.log(`✅ Found ${autolinkKeys.length} keys in glossaryAutolink.tsx`);

// 3. Compare database slugs with autolink keys
console.log("\n📊 STEP 3: Comparing database vs autolink file...\n");

const dbSlugs = new Set(dbTerms.map((t) => t.slug));
const autolinkSet = new Set(autolinkKeys);

// Missing in autolink
const missingInAutolink = dbTerms.filter((t) => !autolinkSet.has(t.slug));
if (missingInAutolink.length > 0) {
  console.log(
    `❌ ${missingInAutolink.length} terms in DB but NOT in glossaryAutolink.tsx:`,
  );
  missingInAutolink.forEach((t) => console.log(`   - ${t.slug} (${t.term})`));
} else {
  console.log("✅ All database terms are in glossaryAutolink.tsx");
}

// Extra in autolink
const extraInAutolink = autolinkKeys.filter((k) => !dbSlugs.has(k));
if (extraInAutolink.length > 0) {
  console.log(
    `\n❌ ${extraInAutolink.length} keys in glossaryAutolink.tsx but NOT in database:`,
  );
  extraInAutolink.forEach((k) => console.log(`   - ${k}`));
} else {
  console.log("✅ No extra keys in glossaryAutolink.tsx");
}

// 4. Check for duplicate slugs
console.log("\n📊 STEP 4: Checking for duplicate slugs...\n");
const slugCounts = {};
dbTerms.forEach((t) => {
  slugCounts[t.slug] = (slugCounts[t.slug] || 0) + 1;
});
const duplicates = Object.entries(slugCounts).filter(([_, count]) => count > 1);
if (duplicates.length > 0) {
  console.log(`❌ Found ${duplicates.length} duplicate slugs:`);
  duplicates.forEach(([slug, count]) =>
    console.log(`   - ${slug} (${count} times)`),
  );
} else {
  console.log("✅ No duplicate slugs in database");
}

// 5. Check for slug format issues
console.log("\n📊 STEP 5: Checking slug format consistency...\n");
const badSlugs = dbTerms.filter((t) => {
  const slug = t.slug;
  // Should be lowercase, no spaces, no special chars except hyphens
  return (
    slug !== slug.toLowerCase() || /\s/.test(slug) || /[^a-z0-9-]/.test(slug)
  );
});

if (badSlugs.length > 0) {
  console.log(`❌ Found ${badSlugs.length} slugs with format issues:`);
  badSlugs.forEach((t) =>
    console.log(
      `   - ${t.slug} → should be ${t.slug
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")}`,
    ),
  );
} else {
  console.log(
    "✅ All slugs follow consistent format (lowercase, alphanumeric + hyphens)",
  );
}

// 6. Check for common slug patterns that might cause issues
console.log("\n📊 STEP 6: Checking for potential slug conflicts...\n");
const potentialIssues = [];

dbTerms.forEach((t) => {
  // Check for slugs that differ only by hyphen vs no hyphen
  const withoutHyphen = t.slug.replace(/-/g, "");
  const similar = dbTerms.filter(
    (other) =>
      other.slug !== t.slug && other.slug.replace(/-/g, "") === withoutHyphen,
  );
  if (similar.length > 0) {
    potentialIssues.push({
      slug: t.slug,
      similar: similar.map((s) => s.slug),
    });
  }
});

if (potentialIssues.length > 0) {
  console.log(
    `⚠️  Found ${potentialIssues.length} slug patterns that might cause confusion:`,
  );
  potentialIssues.forEach((issue) => {
    console.log(`   - ${issue.slug} vs ${issue.similar.join(", ")}`);
  });
} else {
  console.log("✅ No confusing slug patterns detected");
}

// 7. Summary
console.log("\n" + "=".repeat(80));
console.log("📋 AUDIT SUMMARY");
console.log("=".repeat(80));
console.log(`Database terms: ${dbTerms.length}`);
console.log(`Autolink keys: ${autolinkKeys.length}`);
console.log(`Missing in autolink: ${missingInAutolink.length}`);
console.log(`Extra in autolink: ${extraInAutolink.length}`);
console.log(`Duplicate slugs: ${duplicates.length}`);
console.log(`Format issues: ${badSlugs.length}`);
console.log(`Potential conflicts: ${potentialIssues.length}`);

if (
  missingInAutolink.length === 0 &&
  extraInAutolink.length === 0 &&
  duplicates.length === 0 &&
  badSlugs.length === 0
) {
  console.log("\n✅ ALL CHECKS PASSED! Slug architecture is consistent.");
} else {
  console.log("\n⚠️  Issues found - see details above");
}
