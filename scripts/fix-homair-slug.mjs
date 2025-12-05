import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function fixHomaIRSlug() {
  console.log("Updating homair slug to homa-ir...\n");

  const { data, error } = await supabase
    .from("glossary_terms")
    .update({ slug: "homa-ir" })
    .eq("slug", "homair")
    .select();

  if (error) {
    console.error("❌ Error:", error);
    return;
  }

  console.log("✅ Successfully updated slug from homair → homa-ir");
  console.log(`Updated record:`, data[0]);
}

fixHomaIRSlug();
