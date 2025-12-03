import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, "..", ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// CSV parser that handles quoted values with embedded commas
function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    const row = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index];
    });
    rows.push(row);
  }

  return rows;
}

async function updateVitacostImages() {
  console.log("🚀 Starting Vitacost image migration...\n");

  // Read CSV mapping
  const csvPath =
    "/Users/roxyjune/Downloads/input/images-remaining/vitacost_image_mapping.csv";
  const csvText = fs.readFileSync(csvPath, "utf-8");
  const mappings = parseCSV(csvText);

  console.log(`📊 Found ${mappings.length} image mappings in CSV\n`);

  const sourceDir = "/Users/roxyjune/Downloads/input/images-remaining/vitacost";
  const destDir = path.join(__dirname, "..", "public", "images", "products");

  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  let imagesCopied = 0;
  let productsUpdated = 0;
  let notFound = 0;
  let failed = 0;

  const notFoundProducts = [];
  const failedUpdates = [];

  for (let i = 0; i < mappings.length; i++) {
    const mapping = mappings[i];
    const { original_url, filename } = mapping;

    console.log(`[${i + 1}/${mappings.length}] Processing: ${filename}`);

    // Check if product exists in database by matching original URL
    const { data: products, error: queryError } = await supabase
      .from("products")
      .select("id, dsld_id, product_name")
      .eq("product_image_url", original_url);

    if (queryError) {
      console.log(`  ❌ Query error: ${queryError.message}`);
      failed++;
      failedUpdates.push({ original_url, filename, error: queryError.message });
      continue;
    }

    if (!products || products.length === 0) {
      console.log(`  ⚠️  Product not found in database`);
      notFound++;
      notFoundProducts.push({ original_url, filename });
      continue;
    }

    // Copy image file
    const sourcePath = path.join(sourceDir, filename);
    const destPath = path.join(destDir, filename);

    if (!fs.existsSync(sourcePath)) {
      console.log(`  ❌ Source file not found: ${sourcePath}`);
      failed++;
      failedUpdates.push({
        original_url,
        filename,
        error: "Source file not found",
      });
      continue;
    }

    // Only copy if not already exists
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
      imagesCopied++;
    }

    // Update database with local path
    const newImageUrl = `/images/products/${filename}`;
    const { error: updateError } = await supabase
      .from("products")
      .update({ product_image_url: newImageUrl })
      .eq("product_image_url", original_url);

    if (updateError) {
      console.log(`  ❌ Update error: ${updateError.message}`);
      failed++;
      failedUpdates.push({
        original_url,
        filename,
        error: updateError.message,
      });
      continue;
    }

    productsUpdated += products.length;
    const productIds = products.map((p) => p.id).join(", ");
    console.log(
      `  ✅ Updated ${products.length} product(s) (${productIds}) → ${filename}`
    );
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 VITACOST IMAGE MIGRATION COMPLETE");
  console.log("=".repeat(60));
  console.log(`Total mappings: ${mappings.length}`);
  console.log(`Images copied: ${imagesCopied} ✅`);
  console.log(`Database updated: ${productsUpdated} ✅`);
  console.log(`Products not found: ${notFound} ⚠️`);
  console.log(`Failed operations: ${failed} ❌`);
  console.log("=".repeat(60) + "\n");

  if (notFoundProducts.length > 0) {
    console.log(
      `\n⚠️  Products not found in database (${notFoundProducts.length}):`
    );
    notFoundProducts.forEach(({ original_url, filename }) => {
      console.log(`  - ${filename}`);
      console.log(`    URL: ${original_url}`);
    });
  }

  if (failedUpdates.length > 0) {
    console.log(`\n❌ Failed operations (${failedUpdates.length}):`);
    failedUpdates.forEach(({ original_url, filename, error }) => {
      console.log(`  - ${filename}`);
      console.log(`    Error: ${error}`);
    });
  }
}

updateVitacostImages().catch(console.error);
