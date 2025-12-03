import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import fs from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function listExternalImages() {
  console.log("🔍 Fetching products with external image URLs...\n");

  // Get all products
  const { data: allProducts, error } = await supabase
    .from("products")
    .select("id, product_name, product_image_url");

  if (error) {
    console.error("❌ Error fetching products:", error);
    return;
  }

  // Filter for external URLs (not local paths)
  const products = allProducts.filter(
    (p) =>
      p.product_image_url &&
      !p.product_image_url.startsWith("/images/products/")
  );

  console.log(
    `📊 Found ${products.length} products with external image URLs\n`
  );

  // Group by domain
  const byDomain = {};
  products.forEach((p) => {
    try {
      const url = new URL(p.product_image_url);
      const domain = url.hostname;
      if (!byDomain[domain]) byDomain[domain] = [];
      byDomain[domain].push(p);
    } catch (e) {
      console.log("⚠️  Invalid URL:", p.product_image_url);
    }
  });

  console.log("📈 BREAKDOWN BY DOMAIN:\n");
  Object.entries(byDomain)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([domain, prods]) => {
      console.log(`  ${domain}: ${prods.length} products`);
    });

  // Write full list to file
  const output = products
    .map((p) => `${p.product_image_url}\t${p.product_name}\t(ID: ${p.id})`)
    .join("\n");

  fs.writeFileSync("external-image-urls.txt", output);
  console.log("\n✅ Full list written to: external-image-urls.txt");
  console.log(`📝 Total: ${products.length} external image URLs\n`);

  // Also create a clean URL-only list
  const urlsOnly = products.map((p) => p.product_image_url).join("\n");
  fs.writeFileSync("external-image-urls-clean.txt", urlsOnly);
  console.log("✅ Clean URL list written to: external-image-urls-clean.txt\n");
}

listExternalImages();
