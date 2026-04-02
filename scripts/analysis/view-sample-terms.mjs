import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Get specific terms by searching
const { data: carotenoids } = await supabase
  .from("glossary_terms")
  .select("*")
  .ilike("term", "%carotenoid%");

console.log("=== CAROTENOIDS (Well populated) ===");
if (carotenoids && carotenoids.length > 0) {
  const term = carotenoids[0];
  console.log("Term:", term.term);
  console.log("Definition:", term.definition?.substring(0, 200) + "...");
  console.log(
    "\nExpanded Explanation:",
    term.expanded_explanation?.substring(0, 500) + "...",
  );
  console.log("\nWhy It Matters:", term.why_it_matters);
  console.log("\nExamples:", term.examples);
}

// Get a sparse term
const { data: sparse } = await supabase
  .from("glossary_terms")
  .select("*")
  .ilike("term", "%magnesium citrate%");

console.log("\n\n=== MAGNESIUM CITRATE (Sparse) ===");
if (sparse && sparse.length > 0) {
  const term = sparse[0];
  console.log("Term:", term.term);
  console.log("Definition:", term.definition);
  console.log("Expanded Explanation:", term.expanded_explanation);
  console.log("Why It Matters:", term.why_it_matters);
  console.log("Examples:", term.examples);
}
