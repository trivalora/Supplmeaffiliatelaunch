import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

async function checkImageStats() {
  const { data, count } = await supabase
    .from("products")
    .select("product_image_url", { count: "exact" });

  console.log("📊 TOTAL PRODUCTS IN DATABASE:", count);

  const localImages =
    data?.filter((p) => p.product_image_url?.startsWith("/images/products/")) ||
    [];
  console.log("✅ Products with LOCAL images:", localImages.length);

  const externalImages =
    data?.filter(
      (p) =>
        p.product_image_url &&
        !p.product_image_url.startsWith("/images/products/")
    ) || [];
  console.log("🌐 Products with EXTERNAL images:", externalImages.length);

  const noImages = data?.filter((p) => !p.product_image_url) || [];
  console.log("❌ Products with NO images:", noImages.length);

  console.log("\n📈 MIGRATION PROGRESS:");
  console.log(
    "   Local:",
    Math.round((localImages.length / count) * 100) + "%"
  );
  console.log(
    "   External:",
    Math.round((externalImages.length / count) * 100) + "%"
  );
  console.log("   Missing:", Math.round((noImages.length / count) * 100) + "%");
}

checkImageStats();
