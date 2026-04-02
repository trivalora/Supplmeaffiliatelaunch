#!/usr/bin/env node
/**
 * Update remaining iHerb product images in database
 *
 * This script:
 * 1. Reads the CSV mapping from /Users/roxyjune/Downloads/input/images-remaining/image_mapping.csv
 * 2. Copies images to public/images/products/
 * 3. Updates database with new image URLs
 * 4. Reports success/failure stats
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: path.join(__dirname, "..", ".env.local") });

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Paths
const CSV_PATH =
  "/Users/roxyjune/Downloads/input/images-remaining/image_mapping.csv";
const SOURCE_DIR = "/Users/roxyjune/Downloads/input/images-remaining/iherb/";
const DEST_DIR = path.join(__dirname, "..", "public", "images", "products");

// Ensure destination directory exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

/**
 * Parse CSV file
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.trim().split("\n");
  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().replace(/^"|"$/g, ""));

  return lines.slice(1).map((line) => {
    // Handle quoted CSV values
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
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

    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] || "";
    });
    return obj;
  });
}

/**
 * Extract DSLD ID from iHerb product URL
 */
function extractDSLDId(url) {
  // Example URL: https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/age/age00857/u/72.jpg
  // Extract: age00857
  const match = url.match(/\/images\/([a-z]+)\/([a-z0-9]+)\//i);
  if (match) {
    return match[2].toUpperCase(); // AGE00857
  }
  return null;
}

/**
 * Main execution
 */
async function main() {
  console.log("🚀 Starting iHerb image update process...\n");

  // Parse CSV
  console.log("📄 Reading CSV mapping...");
  const mappings = parseCSV(CSV_PATH);
  console.log(`   Found ${mappings.length} image mappings\n`);

  // Stats
  const stats = {
    total: mappings.length,
    copied: 0,
    updated: 0,
    notFound: 0,
    failed: 0,
    skipped: 0,
  };

  const notFoundProducts = [];
  const failedUpdates = [];

  // Process each mapping
  for (let i = 0; i < mappings.length; i++) {
    const mapping = mappings[i];
    const progress = `[${i + 1}/${mappings.length}]`;

    // Check if source file exists
    const sourceFile = path.join(SOURCE_DIR, mapping.filename);
    if (!fs.existsSync(sourceFile)) {
      console.log(`${progress} ⚠️  Source file not found: ${mapping.filename}`);
      stats.notFound++;
      notFoundProducts.push({
        url: mapping.original_url,
        filename: mapping.filename,
      });
      continue;
    }

    // Find products by matching the original URL
    const { data: products, error: fetchError } = await supabase
      .from("products")
      .select("id, dsld_id, product_name, product_image_url")
      .eq("product_image_url", mapping.original_url);

    if (fetchError) {
      console.log(`${progress} ❌ Database error: ${fetchError.message}`);
      stats.failed++;
      failedUpdates.push({
        url: mapping.original_url,
        error: fetchError.message,
      });
      continue;
    }

    if (!products || products.length === 0) {
      console.log(
        `${progress} ⚠️  No products found with URL: ${mapping.original_url}`,
      );
      stats.notFound++;
      notFoundProducts.push({
        url: mapping.original_url,
        filename: mapping.filename,
      });
      continue;
    }

    // Copy image to public directory
    const destFile = path.join(DEST_DIR, mapping.filename);
    try {
      fs.copyFileSync(sourceFile, destFile);
      stats.copied++;
    } catch (err) {
      console.log(
        `${progress} ❌ Failed to copy ${mapping.filename}: ${err.message}`,
      );
      stats.failed++;
      failedUpdates.push({
        url: mapping.original_url,
        error: `Copy failed: ${err.message}`,
      });
      continue;
    }

    // Update database - update ALL products with this URL
    const newImageUrl = `/images/products/${mapping.filename}`;
    const { error: updateError } = await supabase
      .from("products")
      .update({ product_image_url: newImageUrl })
      .eq("product_image_url", mapping.original_url);

    if (updateError) {
      console.log(
        `${progress} ❌ Failed to update database: ${updateError.message}`,
      );
      stats.failed++;
      failedUpdates.push({
        url: mapping.original_url,
        error: updateError.message,
      });
      continue;
    }

    stats.updated += products.length;
    const dsldIds = products.map((p) => p.dsld_id).join(", ");
    console.log(
      `${progress} ✅ Updated ${products.length} product${
        products.length > 1 ? "s" : ""
      } (${dsldIds}) → ${mapping.filename}`,
    );
  }

  // Final report
  console.log("\n" + "=".repeat(80));
  console.log("📊 FINAL REPORT");
  console.log("=".repeat(80));
  console.log(`Total mappings:      ${stats.total}`);
  console.log(`Images copied:       ${stats.copied} ✅`);
  console.log(`Database updated:    ${stats.updated} ✅`);
  console.log(`Products not found:  ${stats.notFound} ⚠️`);
  console.log(`Failed operations:   ${stats.failed} ❌`);
  console.log("=".repeat(80));

  if (notFoundProducts.length > 0) {
    console.log(`\n⚠️  Products not found (${notFoundProducts.length}):`);
    notFoundProducts.slice(0, 10).forEach((p) => {
      console.log(`   - ${p.filename}: ${p.url}`);
    });
    if (notFoundProducts.length > 10) {
      console.log(`   ... and ${notFoundProducts.length - 10} more`);
    }
  }

  if (failedUpdates.length > 0) {
    console.log(`\n❌ Failed updates (${failedUpdates.length}):`);
    failedUpdates.slice(0, 10).forEach((f) => {
      console.log(`   - ${f.url}: ${f.error}`);
    });
    if (failedUpdates.length > 10) {
      console.log(`   ... and ${failedUpdates.length - 10} more`);
    }
  }

  console.log("\n✨ Process complete!\n");
}

// Run main function
main().catch((err) => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});
