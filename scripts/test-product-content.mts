/**
 * Test script to verify unique content generation across products
 *
 * Run with: npx tsx scripts/test-product-content.mts
 */

import { generateProductContent } from "../src/lib/product-content-generator";

// Sample products to test with different attributes
const testProducts = [
  {
    id: "prod-001-mag-glycinate-400",
    brand: "NOW Foods",
    dsld_product_name: "Magnesium Glycinate 400mg",
    amount_per_serving: 400,
    unit: "mg",
    form: ["capsule"],
    filters: ["vegan", "non_gmo"],
  },
  {
    id: "prod-002-mag-citrate-200",
    brand: "Doctor's Best",
    dsld_product_name: "High Absorption Magnesium",
    amount_per_serving: 200,
    unit: "mg",
    form: ["tablet"],
    filters: ["third_party_tested"],
  },
  {
    id: "prod-003-mag-powder-350",
    brand: "Natural Vitality",
    dsld_product_name: "CALM Magnesium Powder",
    amount_per_serving: 350,
    unit: "mg",
    form: ["powder"],
    filters: ["organic", "vegan"],
    flavor: ["raspberry lemon"],
  },
  {
    id: "prod-004-vitamin-d-5000",
    brand: "Thorne",
    dsld_product_name: "Vitamin D-5000",
    amount_per_serving: 5000,
    unit: "IU",
    form: ["capsule"],
    filters: ["third_party_tested", "nsf_certified"],
  },
  {
    id: "prod-005-vitamin-d-1000",
    brand: "Nature Made",
    dsld_product_name: "Vitamin D3 1000 IU",
    amount_per_serving: 1000,
    unit: "IU",
    form: ["softgel"],
    filters: ["usp_verified"],
  },
];

console.log("=".repeat(80));
console.log("PRODUCT CONTENT UNIQUENESS TEST");
console.log("=".repeat(80));
console.log("");

// Test magnesium products
console.log("--- MAGNESIUM PRODUCTS ---");
console.log("");

for (const product of testProducts.slice(0, 3)) {
  const content = generateProductContent("magnesium", product);

  if (content) {
    console.log(`📦 ${product.brand} - ${product.dsld_product_name}`);
    console.log("-".repeat(60));
    console.log("PARAGRAPH 1:", content.overviewParagraph);
    console.log("");
    console.log("PARAGRAPH 2:", content.detailsParagraph);
    console.log("");
    console.log("BENEFITS:", content.keyBenefits.join(" | "));
    if (content.whatToExpect) {
      console.log(
        "EXPECT:",
        `${content.whatToExpect.primaryOutcome.label} in ${content.whatToExpect.primaryOutcome.timeframe}`
      );
    }
    if (content.qualityNote) console.log("QUALITY:", content.qualityNote);
    console.log("");
    console.log("");
  }
}

// Test vitamin D products
console.log("--- VITAMIN D PRODUCTS ---");
console.log("");

for (const product of testProducts.slice(3)) {
  const content = generateProductContent("vitamin-d", product);

  if (content) {
    console.log(`📦 ${product.brand} - ${product.dsld_product_name}`);
    console.log("-".repeat(60));
    console.log("PARAGRAPH 1:", content.overviewParagraph);
    console.log("");
    console.log("PARAGRAPH 2:", content.detailsParagraph);
    console.log("");
    console.log("BENEFITS:", content.keyBenefits.join(" | "));
    console.log("");
    console.log("");
  }
}

console.log("=".repeat(80));
console.log("TEST COMPLETE - Verify each product has unique text combinations");
console.log("=".repeat(80));
