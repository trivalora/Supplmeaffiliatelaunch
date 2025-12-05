import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function checkHomaIR() {
  console.log("Checking for homa-ir and homair in database...\n");

  const { data, error } = await supabase
    .from("glossary_terms")
    .select(
      "slug, term, definition, why_it_matters, simple_explanation, key_points"
    )
    .or("slug.eq.homa-ir,slug.eq.homair");

  if (error) {
    console.error("Error:", error);
    return;
  }

  if (!data || data.length === 0) {
    console.log("❌ No records found for homa-ir or homair");
    return;
  }

  console.log(`✅ Found ${data.length} record(s):\n`);

  for (const term of data) {
    console.log(`Slug: ${term.slug}`);
    console.log(`Term: ${term.term}`);
    console.log(
      `Definition: ${
        term.definition ? `${term.definition.substring(0, 100)}...` : "NULL"
      }`
    );
    console.log(
      `Why it matters: ${
        term.why_it_matters
          ? `${term.why_it_matters.substring(0, 100)}...`
          : "NULL"
      }`
    );
    console.log(
      `Simple explanation: ${
        term.simple_explanation
          ? `${term.simple_explanation.substring(0, 100)}...`
          : "NULL"
      }`
    );
    console.log(
      `Key points: ${
        term.key_points
          ? `${JSON.stringify(term.key_points).substring(0, 100)}...`
          : "NULL"
      }`
    );
    console.log("---\n");
  }
}

checkHomaIR();
