import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { writeFileSync } from "fs";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

const { data, error } = await supabase
  .from("products")
  .select("id, product_name, product_image_url, brand")
  .not("product_image_url", "is", null)
  .order("product_image_url");

if (error) {
  console.error("Error:", error);
  process.exit(1);
}

// Filter external URLs
const vitacost = data.filter((p) =>
  p.product_image_url?.includes("vitacost.com"),
);
const iherb = data.filter((p) =>
  p.product_image_url?.includes("images-iherb.com"),
);
const nullUrls = data.filter(
  (p) => !p.product_image_url || p.product_image_url.length === 0,
);

console.log("📝 Exporting external image URLs...\n");

// Export Vitacost URLs
const vitacostOutput = vitacost.map((p) => p.product_image_url).join("\n");
writeFileSync("remaining-vitacost-urls.txt", vitacostOutput);
console.log(
  `✅ Vitacost URLs: ${vitacost.length} → remaining-vitacost-urls.txt`,
);

// Export iHerb URLs
const iherbOutput = iherb.map((p) => p.product_image_url).join("\n");
writeFileSync("remaining-iherb-urls.txt", iherbOutput);
console.log(`✅ iHerb URLs: ${iherb.length} → remaining-iherb-urls.txt`);

// Export products with null URLs
const nullOutput = nullUrls
  .map((p) => `${p.id}\t${p.brand || "N/A"}\t${p.product_name}`)
  .join("\n");
writeFileSync(
  "products-without-images.txt",
  "Product ID\tBrand\tProduct Name\n" + nullOutput,
);
console.log(
  `❌ Products without images: ${nullUrls.length} → products-without-images.txt`,
);

// Export detailed CSV for all external URLs
const csvHeader = "product_id,brand,product_name,image_url,source\n";
const csvRows = [
  ...vitacost.map(
    (p) =>
      `${p.id},"${p.brand || ""}","${p.product_name}","${p.product_image_url}",vitacost`,
  ),
  ...iherb.map(
    (p) =>
      `${p.id},"${p.brand || ""}","${p.product_name}","${p.product_image_url}",iherb`,
  ),
].join("\n");
writeFileSync("external-images-detailed.csv", csvHeader + csvRows);
console.log(
  `📋 Detailed CSV: ${vitacost.length + iherb.length} → external-images-detailed.csv`,
);

console.log("\n✨ Done! Files created in current directory.");
