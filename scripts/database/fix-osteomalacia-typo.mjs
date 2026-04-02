import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

async function fixTypo() {
  console.log("Fixing osteomalach → osteomalacia typo...");

  const { data, error } = await supabase
    .from("glossary_terms")
    .update({ slug: "osteomalacia" })
    .eq("slug", "osteomalach")
    .select();

  if (error) {
    console.error("Error:", error);
    process.exit(1);
  }

  console.log("✓ Fixed:", data);
}

fixTypo();
