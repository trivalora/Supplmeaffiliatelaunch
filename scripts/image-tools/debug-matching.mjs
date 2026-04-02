import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";
import { parse } from "csv-parse/sync";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

const MAPPING_FILE = "/Users/roxyjune/Downloads/input/images/image_mapping.csv";

async function debugMatching() {
  console.log("🔍 Debugging URL Matching...\n");

  // Load CSV mappings
  const csvContent = fs.readFileSync(MAPPING_FILE, "utf-8");
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });

  const csvUrls = new Set();
  for (const record of records) {
    if (record.success === "yes") {
      csvUrls.add(record.original_url);
    }
  }

  console.log(`✅ CSV has ${csvUrls.size} successful image downloads\n`);

  // Get all products with external URLs (not yet migrated)
  const { data: products } = await supabase
    .from("products")
    .select("id, product_image_url")
    .not("product_image_url", "like", "/images/%")
    .not("product_image_url", "is", null);

  console.log(
    `📊 Database has ${products.length} products with external URLs\n`,
  );

  // Check matches
  let exactMatches = 0;
  let noMatches = 0;
  const sampleNoMatch = [];

  for (const product of products) {
    if (csvUrls.has(product.product_image_url)) {
      exactMatches++;
    } else {
      noMatches++;
      if (sampleNoMatch.length < 5) {
        sampleNoMatch.push(product.product_image_url);
      }
    }
  }

  console.log(`✅ Exact matches: ${exactMatches}`);
  console.log(`❌ No matches: ${noMatches}\n`);

  if (sampleNoMatch.length > 0) {
    console.log("Sample URLs with no match:");
    sampleNoMatch.forEach((url) => {
      const short = url.length > 100 ? url.substring(0, 97) + "..." : url;
      console.log(`  - ${short}`);
    });
  }

  console.log(`\n📈 Summary:`);
  console.log(`   CSV images: ${csvUrls.size}`);
  console.log(`   DB external URLs: ${products.length}`);
  console.log(`   Should match: ${exactMatches} products`);
  console.log(
    `   Coverage: ${((exactMatches / products.length) * 100).toFixed(1)}%`,
  );
}

debugMatching().catch(console.error);
