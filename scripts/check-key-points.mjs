import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

const { data } = await supabase
  .from("glossary_terms")
  .select("term, key_points")
  .eq("slug", "absorption")
  .single();

console.log("Term:", data.term);
console.log("\nKey Points:");
console.log(data.key_points);
