import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// Get all glossary terms from database
const { data: dbTerms, error } = await supabase
  .from("glossary_terms")
  .select("slug, term")
  .order("slug");

if (error) {
  console.error("Error:", error);
  process.exit(1);
}

// Read autolinking file
const autolinkContent = fs.readFileSync("src/lib/glossaryAutolink.tsx", "utf8");

// Extract keys from autolinking
const keyMatches = autolinkContent.matchAll(/key: "([^"]+)"/g);
const autolinkKeys = new Set([...keyMatches].map((m) => m[1]));

// Find mismatches
const mismatches = [];
for (const term of dbTerms) {
  if (!autolinkKeys.has(term.slug)) {
    mismatches.push({ db: term.slug, term: term.term });
  }
}

if (mismatches.length > 0) {
  console.log(
    `❌ ${mismatches.length} mismatches found (DB slug not in autolink):`
  );
  mismatches.forEach((m) => console.log(`  - ${m.db} (${m.term})`));
  process.exit(1);
} else {
  console.log("✅ All database slugs match autolinking keys");
  console.log(`   Total terms checked: ${dbTerms.length}`);
}
