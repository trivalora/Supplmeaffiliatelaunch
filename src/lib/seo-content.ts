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
      "Ashwagandha benefits, risks & best price: Reduces stress and cortisol by 30%, improves sleep quality, boosts testosterone. Evidence-based dosing for anxiety, athletic performance, and cognitive health. Compare top-rated products.",
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
      "BCAAs benefits, risks & best price: Reduces muscle soreness, accelerates recovery, prevents muscle breakdown during training. Optimal dosing by workout intensity and body weight. Find quality leucine-rich formulas.",
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
      "Calcium benefits, risks & best price: Strengthens bones, prevents osteoporosis, supports muscle and nerve function. Citrate vs carbonate comparison, dosing by age and diet. Balance cardiovascular safety with bone health.",
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
      "Casein protein benefits, risks & best price: Slow-release amino acids for overnight muscle recovery, increases lean mass, reduces muscle breakdown. Dosing for nighttime use, fat loss, and muscle building goals.",
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
      "Collagen peptides benefits, risks & best price: Improves skin elasticity, reduces joint pain, strengthens bones and hair. Type I vs II comparison, dosing for beauty vs joint health goals. Find verified hydrolyzed formulas.",
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
      "Creatine benefits, risks & best price: Increases strength by 8%, boosts muscle growth, enhances brain function. Loading vs maintenance protocols, timing strategies. 1000+ studies validate safety and efficacy.",
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
      "Curcumin benefits, risks & best price: Reduces inflammation, eases joint pain, supports brain health. Bioavailability critical—piperine vs liposomal absorption. Dosing for arthritis, recovery, and daily wellness.",
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
      "Iron benefits, risks & best price: Treats anemia, boosts energy and cognition, supports pregnancy. Bisglycinate for sensitive stomachs vs ferrous sulfate for cost. Dosing by deficiency severity and absorption timing.",
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
      "Magnesium benefits, risks & best price: Improves sleep quality, relieves muscle cramps, reduces blood pressure. Glycinate for relaxation vs citrate for digestion. Dosing by health goal and deficiency symptoms.",
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
      "Multivitamin benefits, risks & best price: Fills nutrient gaps, supports immune function, boosts energy levels. Methylated vs standard forms, third-party testing importance. Dosing for age, gender, and dietary restrictions.",
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
      "Omega-3 benefits, risks & best price: Lowers triglycerides by 25%, supports brain health, reduces inflammation. EPA vs DHA ratios for different goals, IFOS purity certification. Dosing for heart, joints, and cognitive function.",
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
      "Prebiotic benefits, risks & best price: Feeds beneficial gut bacteria, improves digestion, enhances mineral absorption. Inulin vs FOS vs GOS for IBS sensitivity. Dosing to maximize probiotic synergy without bloating.",
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
      "Probiotic benefits, risks & best price: Improves gut health, strengthens immunity, aids digestion. Lactobacillus for digestive health vs Bifidobacterium for immunity. CFU counts, strain selection, and refrigeration needs.",
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
      "Sulforaphane benefits, risks & best price: Activates detox pathways, powerful antioxidant protection, supports cellular health. Myrosinase-activated vs stabilized forms. Dosing for cancer prevention and anti-aging goals.",
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
      "Vitamin C benefits, risks & best price: Boosts immune function, accelerates wound healing, supports collagen production. Ascorbic acid vs liposomal absorption. Dosing for daily wellness, illness prevention, and high-dose therapy.",
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
      "Vitamin D benefits, risks & best price: Strengthens bones, enhances immunity, regulates mood. D3 superior to D2, K2 synergy for calcium utilization. Dosing by blood levels, season, and deficiency status to reach optimal 40-60 ng/mL.",
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
      "Whey protein benefits, risks & best price: Builds muscle mass, accelerates recovery, supports weight loss. Isolate for low-lactose vs concentrate for value. Dosing by training intensity, body weight, and protein goals.",
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
      "Zinc benefits, risks & best price: Strengthens immune system, boosts testosterone, improves skin health. Picolinate for absorption vs gluconate for affordability. Dosing to avoid copper depletion, optimize immunity and hormone balance.",
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
