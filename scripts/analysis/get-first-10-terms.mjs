import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Get first 10 terms alphabetically with their current content
const { data: terms, error } = await supabase
  .from("glossary_terms")
  .select(
    "slug, term, definition, expanded_explanation, why_it_matters, simple_explanation, key_points, examples, common_misconceptions",
  )
  .order("term")
  .limit(10);

if (error) {
  console.error("Error:", error);
  process.exit(1);
}

console.log("=== FIRST 10 GLOSSARY TERMS (Alphabetically) ===\n");

terms.forEach((t, i) => {
  const totalWords = [
    t.definition,
    t.expanded_explanation,
    t.why_it_matters,
    t.simple_explanation,
    t.key_points,
    ...(t.examples || []),
    ...(t.common_misconceptions || []),
  ]
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  console.log(`${i + 1}. ${t.term}`);
  console.log(`   Slug: ${t.slug}`);
  console.log(`   Words: ${totalWords}`);
  console.log(
    `   Has: definition=${!!t.definition}, expanded=${!!t.expanded_explanation}, whyMatters=${!!t.why_it_matters}, simple=${!!t.simple_explanation}, keyPoints=${!!t.key_points}, examples=${
      (t.examples || []).length
    }`,
  );
  console.log("");
});

// Also output detailed content for research
console.log("\n=== DETAILED CURRENT CONTENT ===\n");
terms.forEach((t, i) => {
  console.log(`--- ${i + 1}. ${t.term} ---`);
  console.log(`Definition: ${t.definition?.substring(0, 200)}...`);
  console.log(`Expanded: ${t.expanded_explanation?.substring(0, 300)}...`);
  console.log("");
});
