import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function extractProductImages() {
  console.log("Fetching all product images...\n");

  const { data: products, error } = await supabase
    .from("products")
    .select("id, product_name, product_image_url")
    .order("id");

  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log(`Total products: ${products.length}\n`);

  // Get unique image URLs
  const uniqueImages = [...new Set(products.map((p) => p.product_image_url))];
  console.log(`Unique image URLs: ${uniqueImages.length}\n`);

  // Output all unique URLs
  console.log("=== ALL UNIQUE IMAGE URLS ===\n");
  uniqueImages.forEach((url) => console.log(url));

  // Also show count by domain
  console.log("\n=== IMAGE URL STATISTICS ===\n");
  const domains = {};
  uniqueImages.forEach((url) => {
    try {
      const domain = new URL(url).hostname;
      domains[domain] = (domains[domain] || 0) + 1;
    } catch (e) {
      domains["invalid"] = (domains["invalid"] || 0) + 1;
    }
  });

  Object.entries(domains)
    .sort((a, b) => b[1] - a[1])
    .forEach(([domain, count]) => {
      console.log(`${domain}: ${count} images`);
    });
}

extractProductImages();
