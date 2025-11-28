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
    title: "Ashwagandha Benefits, Dosage & Research",
    description:
      "Evidence-based ashwagandha review for stress, anxiety, and cognition. Clinical trials, dosing, and safety. Compare prices from top retailers.",
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
    title: "BCAAs for Muscle Recovery & Performance",
    description:
      "BCAAs (leucine, isoleucine, valine) for muscle recovery and performance. Clinical studies, protocols, and price comparison across retailers.",
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
    title: "Calcium for Bone Health & Safety",
    description:
      "Calcium for bone health and osteoporosis prevention. Forms (citrate vs carbonate), absorption, dosing, and safety. Compare retailer prices.",
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
    title: "Casein Protein for Muscle Growth",
    description:
      "Micellar casein for overnight muscle recovery and lean mass gains. Compare with whey protein and find best prices across top retailers.",
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
    title: "Collagen for Skin, Joints & Bones",
    description:
      "Hydrolyzed collagen for skin elasticity, joints, and bones. Clinical trials, bioavailability, dosing, and price comparison across retailers.",
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
    title: "Creatine for Strength & Cognition",
    description:
      "Creatine monohydrate for strength, power, and cognitive function. 1000+ studies, loading protocols, safety, and best retailer prices.",
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
    title: "Curcumin Benefits & Bioavailability",
    description:
      "Curcumin for inflammation and joint health. Bioavailability solutions (piperine, liposomal), clinical efficacy, and price comparison.",
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
    title: "Iron Forms, Absorption & Safety",
    description:
      "Iron for anemia and fatigue. Forms (ferrous sulfate, bisglycinate, heme), absorption strategies, side effects, and price comparison.",
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
    name: "Magnesium Supplement",
    title: "Magnesium for Sleep, Muscle & Heart",
    description:
      "Magnesium for sleep, muscles, and heart health. Bioavailable forms (glycinate, citrate, threonate), optimal dosing, and price comparison.",
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
    title: "Multivitamin Efficacy & Quality Guide",
    description:
      "Multivitamins for nutrient deficiencies and immune support. Bioavailable forms, third-party testing, cost-effectiveness, and price comparison.",
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
    title: "Omega-3 for Heart, Brain & Inflammation",
    description:
      "Omega-3 (EPA/DHA) for heart, brain, and inflammation. Clinical trials, IFOS purity standards, optimal dosing, and retailer price comparison.",
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
    title: "Prebiotics for Gut Health & Microbiome",
    description:
      "Prebiotic fibers (inulin, FOS, GOS) for gut health and microbiome. Clinical efficacy, FODMAP considerations, synergy with probiotics, prices.",
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
    title: "Probiotics for Gut & Immune Health",
    description:
      "Probiotic strains (Lactobacillus, Bifidobacterium) for gut and immune health. CFU counts, strain specificity, storage, and price comparison.",
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
    title: "Sulforaphane for Detox & Antioxidants",
    description:
      "Sulforaphane from broccoli sprouts for detox and antioxidant defense. Myrosinase activity, bioavailability, clinical applications, and prices.",
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
    title: "Vitamin C for Immune & Collagen",
    description:
      "Vitamin C for immune function, antioxidants, and collagen. Forms (ascorbic acid, liposomal), mega-dosing, safety, and price comparison.",
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
    title: "Vitamin D Levels & Dosing Guide",
    description:
      "Vitamin D3 for bones, immunity, and disease prevention. Blood level targets (25-hydroxyvitamin D), dosing, K2 synergy, and retailer prices.",
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
    title: "Whey Protein for Muscle Growth",
    description:
      "Whey protein (concentrate, isolate, hydrolysate) for muscle growth and recovery. Leucine content, digestion rates, quality, and prices.",
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
    title: "Zinc for Immune & Hormonal Health",
    description:
      "Scientific review of zinc for immune support, wound healing, testosterone, and skin health. Analysis of forms (picolinate, citrate, gluconate) and balance.",
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
