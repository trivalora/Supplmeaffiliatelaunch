import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse/sync";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Paths
const SOURCE_IMAGES = "/Users/roxyjune/Downloads/input/images";
const TARGET_DIR = path.join(process.cwd(), "public/images/products");
const MAPPING_FILE = path.join(SOURCE_IMAGES, "image_mapping.csv");

async function migrateImages() {
  console.log("🚀 Starting Image Migration...\n");

  // Step 1: Read and parse CSV mapping file
  console.log("📖 Reading image mapping...");
  const csvContent = fs.readFileSync(MAPPING_FILE, "utf-8");

  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });

  const mapping = new Map();
  let vitacostCount = 0;
  let iherbCount = 0;

  for (const record of records) {
    const originalUrl = record.original_url;
    const filename = record.filename;

    if (originalUrl && filename) {
      mapping.set(originalUrl, filename);

      if (filename.startsWith("iherb_")) iherbCount++;
      else vitacostCount++;
    }
  }

  console.log(`✅ Loaded ${mapping.size} URL mappings`);
  console.log(`   - Vitacost: ${vitacostCount}`);
  console.log(`   - iHerb: ${iherbCount}\n`);

  // Step 2: Verify images exist
  console.log("📁 Verifying images in public directory...");

  let foundCount = 0;
  let missingCount = 0;
  const missingFiles = [];

  for (const filename of mapping.values()) {
    const filePath = path.join(TARGET_DIR, filename);
    if (fs.existsSync(filePath)) {
      foundCount++;
    } else {
      missingCount++;
      missingFiles.push(filename);
    }
  }

  console.log(`✅ Image verification:`);
  console.log(`   - Found: ${foundCount}`);
  console.log(`   - Missing: ${missingCount}`);
  if (missingCount > 0 && missingCount <= 10) {
    console.log(`   - Missing files: ${missingFiles.join(", ")}`);
  }
  console.log();

  // Step 3: Fetch all products from database
  console.log("🔍 Fetching products from database...");
  const { data: products, error: fetchError } = await supabase
    .from("products")
    .select("id, product_image_url")
    .not("product_image_url", "is", null);

  if (fetchError) {
    console.error("❌ Error fetching products:", fetchError);
    return;
  }

  console.log(`✅ Found ${products.length} products with images\n`);

  // Step 4: Build update statements
  console.log("🔄 Generating database updates...");

  const updates = [];
  const unmapped = [];

  for (const product of products) {
    const oldUrl = product.product_image_url;
    const filename = mapping.get(oldUrl);

    if (filename) {
      const newUrl = `/images/products/${filename}`;

      // Verify file exists
      const filePath = path.join(TARGET_DIR, filename);
      if (fs.existsSync(filePath)) {
        updates.push({
          id: product.id,
          oldUrl,
          newUrl,
          filename,
        });
      } else {
        unmapped.push({
          id: product.id,
          url: oldUrl,
          reason: "file_not_found",
          filename,
        });
      }
    } else {
      unmapped.push({ id: product.id, url: oldUrl, reason: "no_mapping" });
    }
  }

  console.log(`✅ Generated updates:`);
  console.log(`   - To update: ${updates.length}`);
  console.log(`   - Unmapped: ${unmapped.length}\n`);

  // Step 5: Preview changes
  console.log("👀 Preview (first 5 updates):");
  updates.slice(0, 5).forEach((u) => {
    const shortUrl =
      u.oldUrl.length > 80 ? u.oldUrl.substring(0, 77) + "..." : u.oldUrl;
    console.log(`   ${shortUrl}`);
    console.log(`   → ${u.newUrl}\n`);
  });

  // Step 6: Save unmapped for review
  if (unmapped.length > 0) {
    const unmappedFile = path.join(process.cwd(), "unmapped-images.json");
    fs.writeFileSync(unmappedFile, JSON.stringify(unmapped, null, 2));
    console.log(
      `📝 Saved ${unmapped.length} unmapped URLs to unmapped-images.json\n`,
    );
  }

  // Step 7: Execute updates in batches
  console.log("💾 Updating database...");
  const BATCH_SIZE = 50;
  let updated = 0;
  let failed = 0;

  for (let i = 0; i < updates.length; i += BATCH_SIZE) {
    const batch = updates.slice(i, i + BATCH_SIZE);

    for (const update of batch) {
      const { error } = await supabase
        .from("products")
        .update({ product_image_url: update.newUrl })
        .eq("id", update.id);

      if (error) {
        console.error(`   ❌ Failed to update ${update.id}:`, error.message);
        failed++;
      } else {
        updated++;
      }
    }

    // Progress indicator
    const progress = Math.min(i + BATCH_SIZE, updates.length);
    console.log(
      `   Progress: ${progress}/${updates.length} (${(
        (progress / updates.length) *
        100
      ).toFixed(1)}%)`,
    );
  }

  console.log(`\n✅ DATABASE UPDATE COMPLETE!`);
  console.log(`   - Updated: ${updated}`);
  console.log(`   - Failed: ${failed}`);
  console.log(`   - Unmapped: ${unmapped.length}`);

  // Generate summary
  const summary = {
    timestamp: new Date().toISOString(),
    mapping: {
      total: mapping.size,
      vitacost: vitacostCount,
      iherb: iherbCount,
    },
    images: {
      found: foundCount,
      missing: missingCount,
    },
    database_updates: {
      updated,
      failed,
      unmapped: unmapped.length,
    },
    total_products: products.length,
    success_rate: ((updated / products.length) * 100).toFixed(2) + "%",
  };

  const summaryFile = path.join(process.cwd(), "image-migration-summary.json");
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
  console.log(`\n📊 Migration summary saved to image-migration-summary.json`);

  console.log(`\n🎉 IMAGE MIGRATION COMPLETE!`);
}

// Run migration
migrateImages().catch(console.error);
