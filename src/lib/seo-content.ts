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
      "Reduces stress by 30%, improves sleep, boosts testosterone. Evidence-based dosing for anxiety and performance. Compare top ashwagandha products.",
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
      "Reduces muscle soreness, speeds recovery, prevents breakdown. Optimal leucine-rich ratios by training intensity. Compare BCAA supplements.",
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
      "Strengthens bones, prevents osteoporosis, supports muscles. Citrate vs carbonate forms, dosing by age. Compare calcium supplements.",
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
      "Slow-release protein for overnight recovery, builds lean mass, prevents breakdown. Dosing for fat loss and muscle gains. Compare casein products.",
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
      "Improves skin elasticity, reduces joint pain, strengthens hair. Type I vs II for beauty and joints. Compare hydrolyzed collagen supplements.",
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
      "Increases strength 8%, boosts muscle and brain function. Loading vs maintenance dosing. 1000+ studies validate safety. Compare creatine products.",
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
      "Reduces inflammation, eases joint pain, supports brain health. Piperine vs liposomal for absorption. Compare curcumin supplements.",
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
      "Treats anemia, boosts energy and cognition. Bisglycinate vs ferrous sulfate forms, dosing by deficiency. Compare iron supplements.",
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
      "Improves sleep, relieves cramps, lowers blood pressure. Glycinate vs citrate forms for different goals. Compare magnesium supplements.",
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
      "Fills nutrient gaps, supports immunity, boosts energy. Methylated vs standard forms, third-party testing. Compare multivitamin supplements.",
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
      "Lowers triglycerides 25%, supports brain and heart health. EPA vs DHA ratios, IFOS purity certified. Compare omega-3 supplements.",
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
      "Feeds gut bacteria, improves digestion, enhances absorption. Inulin vs FOS vs GOS for IBS. Compare prebiotic fiber supplements.",
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
      "Improves gut health, strengthens immunity, aids digestion. Lactobacillus vs Bifidobacterium strains, CFU counts. Compare probiotic products.",
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
      "Activates detox pathways, powerful antioxidant, supports cells. Myrosinase-activated vs stabilized. Compare sulforaphane supplements.",
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
      "Boosts immunity, speeds wound healing, supports collagen. Ascorbic acid vs liposomal forms. Compare vitamin C supplements.",
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
      "Strengthens bones, boosts immunity, regulates mood. D3 with K2 synergy, optimal dosing by blood levels. Compare vitamin D supplements.",
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
      "Builds muscle, speeds recovery, supports weight loss. Isolate vs concentrate forms, dosing by training. Compare whey protein powders.",
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
      "Strengthens immunity, boosts testosterone, improves skin. Picolinate vs gluconate forms, dosing to avoid copper depletion. Compare zinc products.",
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
