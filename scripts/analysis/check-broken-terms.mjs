import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

const brokenTerms = ["probiotics", "prebiotics", "creatine", "ashwagandha"];

async function checkTerms() {
  console.log("Checking for potentially broken terms...\n");

  for (const slug of brokenTerms) {
    const { data, error } = await supabase
      .from("glossary_terms")
      .select("slug, term")
      .eq("slug", slug);

    if (error) {
      console.error(`Error checking ${slug}:`, error);
    } else if (data.length > 0) {
      console.log(
        `⚠️  Found: ${slug} → ${data[0].term} (SHOULD BE REMOVED - this is a supplement)`
      );
    } else {
      console.log(`✓ ${slug} not in database (correct)`);
    }
  }
}

checkTerms();
