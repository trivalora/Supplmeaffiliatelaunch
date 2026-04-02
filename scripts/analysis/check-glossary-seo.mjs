import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "api" },
});

const { data, error } = await supabase
  .from("glossary_terms")
  .select("slug, term, meta_title, meta_description")
  .or("meta_title.is.null,meta_description.is.null")
  .order("slug");

if (error) {
  console.error("❌ Error:", error);
  process.exit(1);
}

console.log(`\n📊 Found ${data.length} terms missing SEO metadata:\n`);
data.forEach((term) => {
  console.log(`  ${term.slug.padEnd(35)} ${term.term}`);
  if (!term.meta_title) console.log("    ❌ Missing meta_title");
  if (!term.meta_description) console.log("    ❌ Missing meta_description");
  console.log("");
});
