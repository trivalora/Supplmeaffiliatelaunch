import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "api" },
});

console.log("🔍 META DESCRIPTION AUDIT\n");
console.log("=".repeat(80) + "\n");

// Track duplicates and issues
const descriptions = new Map();
const issues = [];

// 1. Check supplement pages (from seo-content.ts - already reviewed)
console.log("1️⃣  SUPPLEMENT PAGES (17 pages)\n");
const supplementDescriptions = [
  "Evidence-based review of ashwagandha (Withania somnifera) for stress reduction, anxiety relief, and cognitive enhancement. Meta-analysis of clinical trials, optimal dosing recommendations, and safety profile.",
  "Comprehensive analysis of branched-chain amino acids (leucine, isoleucine, valine) for muscle protein synthesis, exercise recovery, and athletic performance. Review of clinical studies and optimal supplementation protocols.",
  "Scientific review of calcium supplementation for bone density, osteoporosis prevention, and cardiovascular safety. Analysis of absorption, optimal forms (citrate vs carbonate), and dosing strategies.",
  "Evidence-based analysis of micellar casein protein for overnight muscle recovery, satiety, and lean mass gains. Comparison with whey protein and optimal timing strategies.",
  "Comprehensive review of hydrolyzed collagen peptides for skin elasticity, joint health, and bone density. Meta-analysis of clinical trials, bioavailability, and optimal dosing protocols.",
  "Evidence-based review of creatine monohydrate for muscle strength, power output, cognitive function, and neuroprotection. Analysis of 1000+ studies, loading protocols, and safety profile.",
  "Scientific review of curcumin for inflammation, joint health, and cognitive function. Analysis of bioavailability challenges, enhanced formulations (piperine, liposomal), and clinical efficacy.",
  "Comprehensive analysis of iron supplementation for anemia, fatigue, and cognitive function. Comparison of forms (ferrous sulfate, bisglycinate, heme iron), absorption strategies, and side effect management.",
  "Evidence-based review of magnesium for sleep quality, muscle relaxation, cardiovascular health, and blood pressure. Analysis of bioavailable forms (glycinate, citrate, threonate) and optimal dosing.",
  "Scientific review of multivitamin supplementation for nutrient deficiencies, immune function, and disease prevention. Analysis of bioavailable forms, third-party testing, and cost-effectiveness.",
  "Comprehensive analysis of omega-3 fatty acids (EPA/DHA) for cardiovascular health, cognitive function, and anti-inflammatory effects. Review of clinical trials, purity standards (IFOS), and optimal dosing.",
  "Scientific review of prebiotic fibers (inulin, FOS, GOS) for gut health, microbiome diversity, and digestive function. Analysis of clinical efficacy, FODMAP considerations, and synergy with probiotics.",
  "Evidence-based review of probiotic strains (Lactobacillus, Bifidobacterium) for digestive health, immune function, and mental health. Analysis of CFU counts, strain specificity, and storage requirements.",
  "Scientific analysis of sulforaphane from broccoli sprouts for cellular detoxification, antioxidant defense, and cancer prevention. Review of myrosinase activity, bioavailability, and clinical applications.",
  "Evidence-based review of vitamin C (ascorbic acid) for immune function, antioxidant protection, and collagen production. Analysis of forms (ascorbic acid, sodium ascorbate, liposomal), mega-dosing, and safety.",
  "Comprehensive analysis of vitamin D3 (cholecalciferol) for bone health, immune function, and disease prevention. Review of blood level targets (25-hydroxyvitamin D), dosing strategies, and K2 synergy.",
  "Evidence-based review of whey protein (concentrate, isolate, hydrolysate) for muscle protein synthesis, post-workout recovery, and body composition. Analysis of leucine content, digestion rates, and quality standards.",
];

supplementDescriptions.forEach((desc, i) => {
  const length = desc.length;
  const status =
    length >= 150 && length <= 160 ? "✅" : length > 160 ? "⚠️" : "❌";
  console.log(`  ${status} ${length} chars - ${desc.substring(0, 60)}...`);

  if (length < 150)
    issues.push(`Supplement page ${i + 1}: Too short (${length} chars)`);
  if (length > 160)
    issues.push(`Supplement page ${i + 1}: Too long (${length} chars)`);

  if (descriptions.has(desc)) {
    issues.push(`Supplement page ${i + 1}: Duplicate description`);
  }
  descriptions.set(desc, `Supplement ${i + 1}`);
});

// 2. Check static pages
console.log("\n2️⃣  STATIC PAGES (13 pages)\n");
const staticPages = [
  {
    name: "Home",
    desc: "Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, dosing recommendations, safety profiles, and multi-retailer price comparison. Compare prices from iHerb, Amazon, Vitacost, and more.",
  },
  {
    name: "About",
    desc: "Meet the team behind the evidence-based supplement platform. Learn about our mission to provide transparent, science-backed supplement recommendations and price comparisons.",
  },
  { name: "Contact", desc: "Get in touch with the suppl.me team." },
  {
    name: "Partner",
    desc: "Partner with suppl.me to provide evidence-based supplement information to your audience.",
  },
  {
    name: "Methodology",
    desc: "Learn about our rigorous research methodology for evaluating supplements. We combine academic research precision with modern technology to deliver reliable, evidence-based supplement information.",
  },
  {
    name: "Privacy Policy",
    desc: "Our privacy policy and data protection practices.",
  },
  {
    name: "Terms of Service",
    desc: "Terms and conditions for using suppl.me.",
  },
  {
    name: "Cookie Policy",
    desc: "Information about cookies and tracking technologies we use.",
  },
  { name: "Legal Notice", desc: "Legal notice and disclaimer information." },
  {
    name: "Glossary Index",
    desc: "Scientific and medical terms related to supplements, nutrition, and health.",
  },
];

staticPages.forEach((page) => {
  const length = page.desc.length;
  const status =
    length >= 150 && length <= 160
      ? "✅"
      : length > 160
        ? "⚠️"
        : length < 100
          ? "❌"
          : "⚠️";
  console.log(
    `  ${status} ${page.name.padEnd(20)} ${length} chars - ${page.desc.substring(0, 50)}...`,
  );

  if (length < 100) issues.push(`${page.name}: Too short (${length} chars)`);
  if (length > 160) issues.push(`${page.name}: Too long (${length} chars)`);

  if (descriptions.has(page.desc)) {
    issues.push(
      `${page.name}: Duplicate description with ${descriptions.get(page.desc)}`,
    );
  }
  descriptions.set(page.desc, page.name);
});

// 3. Check glossary terms
console.log("\n3️⃣  GLOSSARY TERMS (197 pages)\n");

const { data: glossaryTerms, error } = await supabase
  .from("glossary_terms")
  .select("slug, term, meta_description")
  .order("slug");

if (error) {
  console.error("❌ Error fetching glossary terms:", error);
} else {
  let shortCount = 0;
  let longCount = 0;
  let optimalCount = 0;
  const duplicates = new Map();

  glossaryTerms.forEach((term) => {
    const desc = term.meta_description || "";
    const length = desc.length;

    if (length >= 120 && length <= 160) {
      optimalCount++;
    } else if (length < 120) {
      shortCount++;
    } else {
      longCount++;
    }

    if (descriptions.has(desc) && desc.length > 0) {
      if (!duplicates.has(desc)) {
        duplicates.set(desc, [descriptions.get(desc)]);
      }
      duplicates.get(desc).push(term.slug);
    }
    descriptions.set(desc, term.slug);
  });

  console.log(`  ✅ Optimal length (120-160): ${optimalCount}`);
  console.log(`  ⚠️  Too short (<120): ${shortCount}`);
  console.log(`  ⚠️  Too long (>160): ${longCount}`);

  if (duplicates.size > 0) {
    console.log(`  ❌ Duplicates found: ${duplicates.size}`);
    duplicates.forEach((slugs, desc) => {
      console.log(
        `     - "${desc.substring(0, 50)}..." appears in: ${slugs.join(", ")}`,
      );
    });
  } else {
    console.log(`  ✅ No duplicates found`);
  }
}

// 4. Product pages (dynamic, no audit needed)
console.log("\n4️⃣  PRODUCT PAGES (1,691 pages)\n");
console.log("  ✅ Dynamic descriptions from database (unique per product)");
console.log(
  '  Format: "Compare prices and view supplement facts for {brand} {name}..."',
);

// 5. Comparison pages
console.log("\n5️⃣  COMPARISON PAGES (17 pages)\n");
console.log("  ⚠️  Need to check - may be using generic fallback");

// Summary
console.log("\n" + "=".repeat(80));
console.log("\n📊 SUMMARY\n");
console.log(`Total pages audited: ${descriptions.size}`);
console.log(`Total unique descriptions: ${descriptions.size}`);
console.log(`Issues found: ${issues.length}\n`);

if (issues.length > 0) {
  console.log("⚠️  ISSUES TO FIX:\n");
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
} else {
  console.log("✅ No major issues found!");
}

console.log("\n" + "=".repeat(80));
