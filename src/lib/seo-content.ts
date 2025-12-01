/**
 * SEO-Optimized Content Map for Structured Data & Page Metadata
 *
 * This file contains hand-crafted SEO titles and descriptions for all supplement pages.
 * Used in both JSON-LD structured data and Next.js page metadata.
 */

export interface SEOSupplementContent {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
}

export const SEO_SUPPLEMENT_DATA: Record<string, SEOSupplementContent> = {
  ashwagandha: {
    name: "Ashwagandha Supplement",
    title: "Ashwagandha - Benefits, Risks & Best Price",
    description:
      "Ashwagandha benefits, risks & best price. Evidence-based review for stress, anxiety, and cognition. Clinical trials, dosing, safety, and retailer comparison.",
    keywords: [
      "ashwagandha",
      "withania somnifera",
      "adaptogen",
      "stress relief",
      "anxiety supplement",
      "cortisol reduction",
      "clinical trials",
      "evidence-based",
    ],
    category: "Adaptogens & Phytochemicals",
  },

  bcaas: {
    name: "BCAAs (Branched-Chain Amino Acids)",
    title: "BCAAs - Benefits, Risks & Best Price",
    description:
      "BCAAs (leucine, isoleucine, valine) benefits for muscle recovery, potential risks, and best prices. Clinical studies, dosing protocols, and retailer comparison.",
    keywords: [
      "BCAAs",
      "branched-chain amino acids",
      "leucine",
      "isoleucine",
      "valine",
      "muscle recovery",
      "protein synthesis",
      "sports nutrition",
    ],
    category: "Sports Nutrition",
  },

  calcium: {
    name: "Calcium Supplement",
    title: "Calcium - Benefits, Risks & Best Price",
    description:
      "Calcium benefits for bone health, risks (cardiovascular considerations), and best prices. Forms (citrate vs carbonate), absorption, dosing, safety, and retailer comparison.",
    keywords: [
      "calcium",
      "bone health",
      "osteoporosis",
      "calcium citrate",
      "calcium carbonate",
      "bone density",
      "vitamin D synergy",
    ],
    category: "Minerals",
  },

  caseinprotein: {
    name: "Casein Protein",
    title: "Casein Protein - Benefits, Risks & Best Price",
    description:
      "Casein protein benefits for overnight muscle recovery, potential risks, and best prices. Micellar casein for lean mass gains. Compare with whey protein across retailers.",
    keywords: [
      "casein protein",
      "micellar casein",
      "slow-digesting protein",
      "muscle recovery",
      "nighttime protein",
      "muscle growth",
    ],
    category: "Protein Supplements",
  },

  collagenpeptides: {
    name: "Collagen Peptides",
    title: "Collagen - Benefits, Risks & Best Price",
    description:
      "Collagen benefits for skin, joints, and bones, safety profile, and best prices. Hydrolyzed collagen clinical trials, bioavailability, dosing, and retailer comparison.",
    keywords: [
      "collagen peptides",
      "hydrolyzed collagen",
      "skin health",
      "joint health",
      "bone health",
      "bioavailability",
      "type I collagen",
    ],
    category: "Structural Support",
  },

  creatine: {
    name: "Creatine Monohydrate",
    title: "Creatine - Benefits, Risks & Best Price",
    description:
      "Creatine benefits for strength and cognition, safety profile, and best prices. 1000+ studies, loading protocols, side effects, and retailer comparison.",
    keywords: [
      "creatine monohydrate",
      "muscle strength",
      "power output",
      "cognitive enhancement",
      "ATP production",
      "sports supplement",
    ],
    category: "Sports Nutrition",
  },

  curcumin: {
    name: "Curcumin (Turmeric Extract)",
    title: "Curcumin - Benefits, Risks & Best Price",
    description:
      "Curcumin benefits for inflammation, potential risks, and best prices. Bioavailability solutions (piperine, liposomal), clinical efficacy, safety, and retailer comparison.",
    keywords: [
      "curcumin",
      "turmeric extract",
      "anti-inflammatory",
      "bioavailability",
      "piperine",
      "joint health",
      "curcuminoids",
    ],
    category: "Anti-Inflammatory",
  },

  iron: {
    name: "Iron Supplement",
    title: "Iron - Benefits, Risks & Best Price",
    description:
      "Iron benefits for anemia, risks (GI side effects, overload), and best prices. Forms (ferrous sulfate, bisglycinate, heme), absorption strategies, and retailer comparison.",
    keywords: [
      "iron supplement",
      "iron deficiency",
      "anemia",
      "ferrous sulfate",
      "iron bisglycinate",
      "heme iron",
      "absorption",
    ],
    category: "Minerals",
  },

  magnesium: {
    name: "Magnesium Glycinate",
    title: "Magnesium - Benefits, Risks & Best Price",
    description:
      "Magnesium benefits for sleep and muscles, safety profile, and best prices. Glycinate vs citrate forms, bioavailability, dosing, and retailer comparison.",
    keywords: [
      "magnesium",
      "magnesium glycinate",
      "magnesium citrate",
      "sleep quality",
      "muscle cramps",
      "blood pressure",
      "bioavailability",
    ],
    category: "Minerals",
  },

  multivitamin: {
    name: "Multivitamin",
    title: "Multivitamin - Benefits, Risks & Best Price",
    description:
      "Multivitamin benefits for nutrient gaps, risks (overdosing considerations), and best prices. Bioavailable forms, third-party testing, cost-effectiveness, and retailer comparison.",
    keywords: [
      "multivitamin",
      "daily vitamin",
      "nutrient deficiency",
      "immune support",
      "bioavailable vitamins",
      "third-party tested",
    ],
    category: "Essential Nutrients",
  },

  omega3: {
    name: "Omega-3 Fish Oil",
    title: "Omega-3 - Benefits, Risks & Best Price",
    description:
      "Omega-3 benefits for heart and brain, risks (oxidation, purity), and best prices. EPA/DHA clinical trials, IFOS standards, dosing, and retailer comparison.",
    keywords: [
      "omega-3",
      "fish oil",
      "EPA",
      "DHA",
      "heart health",
      "brain health",
      "anti-inflammatory",
      "triglycerides",
    ],
    category: "Essential Fatty Acids",
  },

  prebiotics: {
    name: "Prebiotic Fiber",
    title: "Prebiotics - Benefits, Risks & Best Price",
    description:
      "Prebiotic benefits for gut health, risks (FODMAP sensitivity), and best prices. Inulin, FOS, GOS clinical efficacy, synergy with probiotics, and retailer comparison.",
    keywords: [
      "prebiotics",
      "prebiotic fiber",
      "gut health",
      "microbiome",
      "inulin",
      "FOS",
      "GOS",
      "digestive health",
    ],
    category: "Digestive Health",
  },

  probiotics: {
    name: "Probiotic Supplement",
    title: "Probiotics - Benefits, Risks & Best Price",
    description:
      "Probiotic benefits for gut and immune health, safety considerations, and best prices. Lactobacillus, Bifidobacterium strains, CFU counts, storage, and retailer comparison.",
    keywords: [
      "probiotics",
      "gut health",
      "digestive health",
      "immune support",
      "lactobacillus",
      "bifidobacterium",
      "CFU",
      "microbiome",
    ],
    category: "Digestive Health",
  },

  sulforaphane: {
    name: "Sulforaphane (Broccoli Extract)",
    title: "Sulforaphane - Benefits, Risks & Best Price",
    description:
      "Sulforaphane benefits for detox and antioxidants, safety profile, and best prices. Broccoli sprouts myrosinase activity, bioavailability, clinical applications, and retailer comparison.",
    keywords: [
      "sulforaphane",
      "broccoli sprouts",
      "Nrf2",
      "detoxification",
      "antioxidant",
      "glucoraphanin",
      "myrosinase",
    ],
    category: "Antioxidants & Detoxification",
  },

  vitaminc: {
    name: "Vitamin C Supplement",
    title: "Vitamin C - Benefits, Risks & Best Price",
    description:
      "Vitamin C benefits for immune and collagen, risks (GI upset at high doses), and best prices. Forms (ascorbic acid, liposomal), mega-dosing safety, and retailer comparison.",
    keywords: [
      "vitamin C",
      "ascorbic acid",
      "immune support",
      "antioxidant",
      "collagen synthesis",
      "liposomal vitamin C",
      "mega-dose",
    ],
    category: "Vitamins",
  },

  vitamind: {
    name: "Vitamin D3 Supplement",
    title: "Vitamin D - Benefits, Risks & Best Price",
    description:
      "Vitamin D benefits for bones and immunity, risks (toxicity at excessive doses), and best prices. Blood level targets (25-hydroxyvitamin D), dosing, K2 synergy, and retailer comparison.",
    keywords: [
      "vitamin D",
      "vitamin D3",
      "cholecalciferol",
      "bone health",
      "immune function",
      "25-hydroxyvitamin D",
      "vitamin K2",
    ],
    category: "Vitamins",
  },

  wheyprotein: {
    name: "Whey Protein",
    title: "Whey Protein - Benefits, Risks & Best Price",
    description:
      "Whey protein benefits for muscle growth, potential risks (lactose intolerance, allergies), and best prices. Concentrate, isolate, hydrolysate forms, leucine content, quality, and retailer comparison.",
    keywords: [
      "whey protein",
      "whey isolate",
      "whey concentrate",
      "muscle growth",
      "protein synthesis",
      "leucine",
      "post-workout",
    ],
    category: "Protein Supplements",
  },

  zincv2: {
    name: "Zinc Supplement",
    title: "Zinc - Benefits, Risks & Best Price",
    description:
      "Zinc benefits for immune and hormonal health, risks (copper depletion, nausea), and best prices. Forms (picolinate, citrate, gluconate), wound healing, testosterone, skin health, and retailer comparison.",
    keywords: [
      "zinc",
      "zinc picolinate",
      "immune support",
      "wound healing",
      "testosterone",
      "skin health",
      "copper balance",
    ],
    category: "Minerals",
  },
};

/**
 * Get SEO-optimized content for a supplement route
 */
export function getSEOContent(routeKey: string): SEOSupplementContent | null {
  return SEO_SUPPLEMENT_DATA[routeKey] || null;
}

/**
 * Get clean supplement name from route key
 */
export function getCleanSupplementName(routeKey: string): string {
  const seoData = SEO_SUPPLEMENT_DATA[routeKey];
  if (seoData) return seoData.name;

  // Fallback: clean up the key
  return routeKey
    .replace(/v2$/i, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
