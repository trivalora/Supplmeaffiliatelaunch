import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

const { data, error, count } = await supabase
  .from("products")
  .select("product_image_url", { count: "exact" });

if (error) {
  console.error("Error:", error);
  process.exit(1);
}

const local = data.filter((p) =>
  p.product_image_url?.startsWith("/images/products/"),
).length;
const vitacost = data.filter((p) =>
  p.product_image_url?.includes("vitacost.com"),
).length;
const iherb = data.filter((p) =>
  p.product_image_url?.includes("images-iherb.com"),
).length;
const nullUrls = data.filter(
  (p) => !p.product_image_url || p.product_image_url.length === 0,
).length;
const other = data.length - local - vitacost - iherb - nullUrls;

console.log("📊 Image URL Distribution:");
console.log("✅ Self-hosted (/images/products/):", local);
console.log("🔗 Vitacost (external):", vitacost);
console.log("🔗 iHerb Cloudinary (external):", iherb);
console.log("🔗 Other external URLs:", other);
console.log("❌ Null/empty:", nullUrls);
console.log("📈 Total products:", count);
console.log("");
console.log(
  "✨ Self-hosted coverage:",
  ((local / count) * 100).toFixed(1) + "%",
);
console.log(
  "⚠️  External URLs remaining:",
  vitacost + iherb + other,
  "(" + (((vitacost + iherb + other) / count) * 100).toFixed(1) + "%)",
);
