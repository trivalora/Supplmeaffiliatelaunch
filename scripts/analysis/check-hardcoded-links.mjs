import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Hardcoded slugs found in BcaaKnowledgebasePage.tsx
const hardcodedSlugs = [
  "aminoacids",
  "essentialaminoacids",
  "muscleproteinsynthesis",
  "bcaa",
  "creatinekinase",
  "doms",
  "adverseeffects",
  "hepaticencephalopathy",
  "rct",
  "hyperglycemia",
];

console.log("🔍 CHECKING HARDCODED GLOSSARY LINKS\n");
console.log("=".repeat(80));

for (const slug of hardcodedSlugs) {
  const { data, error } = await supabase
    .from("glossary_terms")
    .select("slug, term")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    // Check if hyphenated version exists
    const hyphenated = slug.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    const { data: altData } = await supabase
      .from("glossary_terms")
      .select("slug, term")
      .eq("slug", hyphenated)
      .single();

    if (altData) {
      console.log(`❌ ${slug} → NOT FOUND (should be: ${altData.slug})`);
    } else {
      console.log(`❌ ${slug} → NOT FOUND (no alternative found)`);
    }
  } else {
    console.log(`✅ ${slug} → ${data.term}`);
  }
}

console.log("\n" + "=".repeat(80));
console.log("📋 RECOMMENDATION");
console.log("=".repeat(80));
console.log("These hardcoded links should be removed and replaced with");
console.log("autolinkGlossaryContent() to ensure consistent slug usage.");
