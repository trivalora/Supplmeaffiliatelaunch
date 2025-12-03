import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function compareUrls() {
  console.log("🔍 Comparing database external URLs with CSV mapping...\n");

  // Read CSV file
  const csvPath =
    "/Users/roxyjune/Downloads/input/images-remaining/vitacost_image_mapping.csv";
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const csvLines = csvContent.split("\n").slice(1); // Skip header

  const csvUrls = new Set();
  const csvMappings = {};

  csvLines.forEach((line) => {
    if (!line.trim()) return;
    const [originalUrl, downloadUrl, filename] = line.split(",");
    if (originalUrl) {
      csvUrls.add(originalUrl.trim());
      csvMappings[originalUrl.trim()] = {
        filename: filename?.trim(),
        downloadUrl: downloadUrl?.trim(),
      };
    }
  });

  console.log(`📊 CSV contains ${csvUrls.size} Vitacost image URLs\n`);

  // Get database external URLs
  const { data: products } = await supabase
    .from("products")
    .select("id, product_name, product_image_url");

  const dbExternalUrls = products
    .filter(
      (p) =>
        p.product_image_url &&
        !p.product_image_url.startsWith("/images/products/")
    )
    .map((p) => ({
      url: p.product_image_url,
      id: p.id,
      name: p.product_name,
    }));

  console.log(
    `📊 Database has ${dbExternalUrls.length} products with external URLs\n`
  );

  // Compare
  const inBoth = [];
  const inDbOnly = [];

  dbExternalUrls.forEach((dbItem) => {
    if (csvUrls.has(dbItem.url)) {
      inBoth.push(dbItem);
    } else {
      inDbOnly.push(dbItem);
    }
  });

  const inCsvOnly = Array.from(csvUrls).filter(
    (url) => !dbExternalUrls.find((db) => db.url === url)
  );

  console.log("📈 COMPARISON RESULTS:\n");
  console.log(`  ✅ In BOTH CSV & Database: ${inBoth.length} products`);
  console.log(
    `  🗄️  In Database ONLY (not in CSV): ${inDbOnly.length} products`
  );
  console.log(`  📄 In CSV ONLY (not in database): ${inCsvOnly.length} URLs\n`);

  // Detail the ones in database only
  if (inDbOnly.length > 0) {
    console.log("🔍 PRODUCTS IN DATABASE BUT NOT IN CSV MAPPING:\n");
    inDbOnly.forEach((p) => {
      console.log(`  • ${p.name}`);
      console.log(`    URL: ${p.url}`);
      console.log(`    ID: ${p.id}\n`);
    });
  }

  // Save detailed reports
  fs.writeFileSync(
    "vitacost-in-both.txt",
    inBoth.map((p) => `${p.url}\t${p.name}\t(ID: ${p.id})`).join("\n")
  );

  fs.writeFileSync(
    "vitacost-db-only.txt",
    inDbOnly.map((p) => `${p.url}\t${p.name}\t(ID: ${p.id})`).join("\n")
  );

  fs.writeFileSync("vitacost-csv-only.txt", inCsvOnly.join("\n"));

  console.log("✅ Reports saved:");
  console.log("   • vitacost-in-both.txt - URLs in both CSV and database");
  console.log(
    "   • vitacost-db-only.txt - Products in database but not in CSV"
  );
  console.log("   • vitacost-csv-only.txt - URLs in CSV but not in database\n");

  // Summary
  console.log("📋 SUMMARY:");
  console.log(
    `   ${inBoth.length} products CAN be migrated (have images in CSV)`
  );
  console.log(
    `   ${inDbOnly.length} products CANNOT be migrated (no images in CSV)`
  );
  console.log(
    `   ${inCsvOnly.length} CSV images are for products not in your database\n`
  );
}

compareUrls();
