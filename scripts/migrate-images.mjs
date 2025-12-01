import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// Paths
const SOURCE_IMAGES = "/Users/roxyjune/Downloads/input/images";
const TARGET_DIR = path.join(process.cwd(), "public/images/products");
const MAPPING_FILE = path.join(SOURCE_IMAGES, "image_mapping.csv");

async function migrateImages() {
  console.log("🚀 Starting Image Migration...\n");

  // Step 1: Read mapping file
  console.log("📖 Reading image mapping...");
  const mappingContent = fs.readFileSync(MAPPING_FILE, "utf-8");
  const lines = mappingContent.split("\n").slice(1); // Skip header

  const mapping = new Map();
  let vitacostCount = 0;
  let iherbCount = 0;

  for (const line of lines) {
    if (!line.trim()) continue;

    // Parse CSV - extract all quoted fields
    // Format: "url","url","filename","path",yes,no,0
    const quotedFields = [];
    let inQuotes = false;
    let currentField = "";

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          // Escaped quote
          currentField += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        if (currentField) {
          quotedFields.push(currentField);
          currentField = "";
        }
      } else if (inQuotes) {
        currentField += char;
      }
    }
    if (currentField) quotedFields.push(currentField);

    // Extract URL (field 0) and filename (field 2)
    if (quotedFields.length >= 3) {
      const originalUrl = quotedFields[0];
      const filename = quotedFields[2];

      mapping.set(originalUrl, filename);

      if (filename.startsWith("iherb_")) iherbCount++;
      else vitacostCount++;
    }
  }
  console.log(`✅ Loaded ${mapping.size} URL mappings`);
  console.log(`   - Vitacost: ${vitacostCount}`);
  console.log(`   - iHerb: ${iherbCount}\n`);

  // Step 2: Copy images to public directory
  console.log("📁 Copying images to public directory...");

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  let copiedVitacost = 0;
  let copiedIherb = 0;
  let skipped = 0;
  let errors = 0;

  // Copy Vitacost images
  const vitacostSource = path.join(SOURCE_IMAGES, "vitacost");
  if (fs.existsSync(vitacostSource)) {
    const vitacostFiles = fs.readdirSync(vitacostSource);
    for (const file of vitacostFiles) {
      try {
        const source = path.join(vitacostSource, file);
        const target = path.join(TARGET_DIR, file);

        if (fs.existsSync(target)) {
          skipped++;
          continue;
        }

        fs.copyFileSync(source, target);
        copiedVitacost++;
      } catch (err) {
        console.error(`   ❌ Error copying ${file}:`, err.message);
        errors++;
      }
    }
  }

  // Copy iHerb images
  const iherbSource = path.join(SOURCE_IMAGES, "iherb");
  if (fs.existsSync(iherbSource)) {
    const iherbFiles = fs.readdirSync(iherbSource);
    for (const file of iherbFiles) {
      try {
        const source = path.join(iherbSource, file);
        const target = path.join(TARGET_DIR, file);

        if (fs.existsSync(target)) {
          skipped++;
          continue;
        }

        fs.copyFileSync(source, target);
        copiedIherb++;
      } catch (err) {
        console.error(`   ❌ Error copying ${file}:`, err.message);
        errors++;
      }
    }
  }

  console.log(`✅ Copied images:`);
  console.log(`   - Vitacost: ${copiedVitacost}`);
  console.log(`   - iHerb: ${copiedIherb}`);
  console.log(`   - Skipped (already exist): ${skipped}`);
  console.log(`   - Errors: ${errors}\n`);

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
    console.log(`   ${u.oldUrl}`);
    console.log(`   → ${u.newUrl}\n`);
  });

  // Step 6: Ask for confirmation
  console.log("⚠️  READY TO UPDATE DATABASE");
  console.log(`   This will update ${updates.length} product records.`);
  console.log(`   Unmapped URLs will be saved to unmapped-images.json\n`);

  // Save unmapped for review
  if (unmapped.length > 0) {
    const unmappedFile = path.join(process.cwd(), "unmapped-images.json");
    fs.writeFileSync(unmappedFile, JSON.stringify(unmapped, null, 2));
    console.log(
      `📝 Saved ${unmapped.length} unmapped URLs to unmapped-images.json\n`
    );
  }

  // Execute updates in batches
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
      ).toFixed(1)}%)`
    );
  }

  console.log(`\n✅ DATABASE UPDATE COMPLETE!`);
  console.log(`   - Updated: ${updated}`);
  console.log(`   - Failed: ${failed}`);
  console.log(`   - Unmapped: ${unmapped.length}`);

  // Generate summary
  const summary = {
    timestamp: new Date().toISOString(),
    images_copied: {
      vitacost: copiedVitacost,
      iherb: copiedIherb,
      skipped,
      errors,
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
