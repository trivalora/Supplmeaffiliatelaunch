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
    name: 'Ashwagandha Supplement',
    title: 'Ashwagandha: Science-Based Benefits, Dosage & Clinical Research',
    description: 'Evidence-based review of ashwagandha (Withania somnifera) for stress reduction, anxiety relief, and cognitive enhancement. Meta-analysis of clinical trials, optimal dosing recommendations, and safety profile.',
    keywords: ['ashwagandha', 'withania somnifera', 'adaptogen', 'stress relief', 'anxiety supplement', 'cortisol reduction', 'clinical trials', 'evidence-based'],
    category: 'Adaptogens & Phytochemicals'
  },
  
  bcaas: {
    name: 'BCAAs (Branched-Chain Amino Acids)',
    title: 'BCAAs: Clinical Evidence for Muscle Recovery & Performance',
    description: 'Comprehensive analysis of branched-chain amino acids (leucine, isoleucine, valine) for muscle protein synthesis, exercise recovery, and athletic performance. Review of clinical studies and optimal supplementation protocols.',
    keywords: ['BCAAs', 'branched-chain amino acids', 'leucine', 'isoleucine', 'valine', 'muscle recovery', 'protein synthesis', 'sports nutrition'],
    category: 'Sports Nutrition'
  },
  
  calcium: {
    name: 'Calcium Supplement',
    title: 'Calcium: Evidence-Based Review for Bone Health & Safety',
    description: 'Scientific review of calcium supplementation for bone density, osteoporosis prevention, and cardiovascular safety. Analysis of absorption, optimal forms (citrate vs carbonate), and dosing strategies.',
    keywords: ['calcium', 'bone health', 'osteoporosis', 'calcium citrate', 'calcium carbonate', 'bone density', 'vitamin D synergy'],
    category: 'Minerals'
  },
  
  caseinprotein: {
    name: 'Casein Protein',
    title: 'Casein Protein: Slow-Digesting Protein for Muscle Growth',
    description: 'Evidence-based analysis of micellar casein protein for overnight muscle recovery, satiety, and lean mass gains. Comparison with whey protein and optimal timing strategies.',
    keywords: ['casein protein', 'micellar casein', 'slow-digesting protein', 'muscle recovery', 'nighttime protein', 'muscle growth'],
    category: 'Protein Supplements'
  },
  
  collagenpeptides: {
    name: 'Collagen Peptides',
    title: 'Collagen Peptides: Clinical Evidence for Skin, Joints & Bone Health',
    description: 'Comprehensive review of hydrolyzed collagen peptides for skin elasticity, joint health, and bone density. Meta-analysis of clinical trials, bioavailability, and optimal dosing protocols.',
    keywords: ['collagen peptides', 'hydrolyzed collagen', 'skin health', 'joint health', 'bone health', 'bioavailability', 'type I collagen'],
    category: 'Structural Support'
  },
  
  creatine: {
    name: 'Creatine Monohydrate',
    title: 'Creatine: Most Researched Supplement for Strength & Cognition',
    description: 'Evidence-based review of creatine monohydrate for muscle strength, power output, cognitive function, and neuroprotection. Analysis of 1000+ studies, loading protocols, and safety profile.',
    keywords: ['creatine monohydrate', 'muscle strength', 'power output', 'cognitive enhancement', 'ATP production', 'sports supplement'],
    category: 'Sports Nutrition'
  },
  
  curcumin: {
    name: 'Curcumin (Turmeric Extract)',
    title: 'Curcumin: Anti-Inflammatory Benefits & Bioavailability Solutions',
    description: 'Scientific review of curcumin for inflammation, joint health, and cognitive function. Analysis of bioavailability challenges, enhanced formulations (piperine, liposomal), and clinical efficacy.',
    keywords: ['curcumin', 'turmeric extract', 'anti-inflammatory', 'bioavailability', 'piperine', 'joint health', 'curcuminoids'],
    category: 'Anti-Inflammatory'
  },
  
  iron: {
    name: 'Iron Supplement',
    title: 'Iron: Evidence-Based Guide to Forms, Absorption & Safety',
    description: 'Comprehensive analysis of iron supplementation for anemia, fatigue, and cognitive function. Comparison of forms (ferrous sulfate, bisglycinate, heme iron), absorption strategies, and side effect management.',
    keywords: ['iron supplement', 'iron deficiency', 'anemia', 'ferrous sulfate', 'iron bisglycinate', 'heme iron', 'absorption'],
    category: 'Minerals'
  },
  
  magnesium: {
    name: 'Magnesium Supplement',
    title: 'Magnesium: Clinical Evidence for Sleep, Muscle & Heart Health',
    description: 'Evidence-based review of magnesium for sleep quality, muscle relaxation, cardiovascular health, and blood pressure. Analysis of bioavailable forms (glycinate, citrate, threonate) and optimal dosing.',
    keywords: ['magnesium', 'magnesium glycinate', 'magnesium citrate', 'sleep quality', 'muscle cramps', 'blood pressure', 'bioavailability'],
    category: 'Minerals'
  },
  
  multivitamin: {
    name: 'Multivitamin',
    title: 'Multivitamins: Evidence-Based Analysis of Efficacy & Quality',
    description: 'Scientific review of multivitamin supplementation for nutrient deficiencies, immune function, and disease prevention. Analysis of bioavailable forms, third-party testing, and cost-effectiveness.',
    keywords: ['multivitamin', 'daily vitamin', 'nutrient deficiency', 'immune support', 'bioavailable vitamins', 'third-party tested'],
    category: 'Essential Nutrients'
  },
  
  omega3: {
    name: 'Omega-3 Fish Oil',
    title: 'Omega-3: EPA & DHA Benefits for Heart, Brain & Inflammation',
    description: 'Comprehensive analysis of omega-3 fatty acids (EPA/DHA) for cardiovascular health, cognitive function, and anti-inflammatory effects. Review of clinical trials, purity standards (IFOS), and optimal dosing.',
    keywords: ['omega-3', 'fish oil', 'EPA', 'DHA', 'heart health', 'brain health', 'anti-inflammatory', 'triglycerides'],
    category: 'Essential Fatty Acids'
  },
  
  prebiotics: {
    name: 'Prebiotic Fiber',
    title: 'Prebiotics: Evidence-Based Guide to Gut Health & Microbiome',
    description: 'Scientific review of prebiotic fibers (inulin, FOS, GOS) for gut health, microbiome diversity, and digestive function. Analysis of clinical efficacy, FODMAP considerations, and synergy with probiotics.',
    keywords: ['prebiotics', 'prebiotic fiber', 'gut health', 'microbiome', 'inulin', 'FOS', 'GOS', 'digestive health'],
    category: 'Digestive Health'
  },
  
  probiotics: {
    name: 'Probiotic Supplement',
    title: 'Probiotics: Strain-Specific Benefits for Gut & Immune Health',
    description: 'Evidence-based review of probiotic strains (Lactobacillus, Bifidobacterium) for digestive health, immune function, and mental health. Analysis of CFU counts, strain specificity, and storage requirements.',
    keywords: ['probiotics', 'gut health', 'digestive health', 'immune support', 'lactobacillus', 'bifidobacterium', 'CFU', 'microbiome'],
    category: 'Digestive Health'
  },
  
  sulforaphane: {
    name: 'Sulforaphane (Broccoli Extract)',
    title: 'Sulforaphane: Nrf2 Activation for Detoxification & Antioxidant Support',
    description: 'Scientific analysis of sulforaphane from broccoli sprouts for cellular detoxification, antioxidant defense, and cancer prevention. Review of myrosinase activity, bioavailability, and clinical applications.',
    keywords: ['sulforaphane', 'broccoli sprouts', 'Nrf2', 'detoxification', 'antioxidant', 'glucoraphanin', 'myrosinase'],
    category: 'Antioxidants & Detoxification'
  },
  
  vitaminc: {
    name: 'Vitamin C Supplement',
    title: 'Vitamin C: Immune Support, Antioxidant & Collagen Synthesis',
    description: 'Evidence-based review of vitamin C (ascorbic acid) for immune function, antioxidant protection, and collagen production. Analysis of forms (ascorbic acid, sodium ascorbate, liposomal), mega-dosing, and safety.',
    keywords: ['vitamin C', 'ascorbic acid', 'immune support', 'antioxidant', 'collagen synthesis', 'liposomal vitamin C', 'mega-dose'],
    category: 'Vitamins'
  },
  
  vitamind: {
    name: 'Vitamin D3 Supplement',
    title: 'Vitamin D: Evidence-Based Guide to Optimal Levels & Dosing',
    description: 'Comprehensive analysis of vitamin D3 (cholecalciferol) for bone health, immune function, and disease prevention. Review of blood level targets (25-hydroxyvitamin D), dosing strategies, and K2 synergy.',
    keywords: ['vitamin D', 'vitamin D3', 'cholecalciferol', 'bone health', 'immune function', '25-hydroxyvitamin D', 'vitamin K2'],
    category: 'Vitamins'
  },
  
  wheyprotein: {
    name: 'Whey Protein',
    title: 'Whey Protein: Fast-Absorbing Protein for Muscle Growth',
    description: 'Evidence-based review of whey protein (concentrate, isolate, hydrolysate) for muscle protein synthesis, post-workout recovery, and body composition. Analysis of leucine content, digestion rates, and quality standards.',
    keywords: ['whey protein', 'whey isolate', 'whey concentrate', 'muscle growth', 'protein synthesis', 'leucine', 'post-workout'],
    category: 'Protein Supplements'
  },
  
  zincv2: {
    name: 'Zinc Supplement',
    title: 'Zinc: Immune Function, Wound Healing & Hormonal Health',
    description: 'Scientific review of zinc supplementation for immune support, wound healing, testosterone production, and skin health. Analysis of forms (picolinate, citrate, gluconate), absorption, and copper balance.',
    keywords: ['zinc', 'zinc picolinate', 'immune support', 'wound healing', 'testosterone', 'skin health', 'copper balance'],
    category: 'Minerals'
  }
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
    .replace(/v2$/i, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
