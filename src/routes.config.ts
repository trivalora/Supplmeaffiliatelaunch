/**
 * Routes Configuration
 * 
 * Centralized routing configuration for all knowledgebase pages.
 * This eliminates the need for manual prop threading and reduces navigation bugs.
 * 
 * To add a new page:
 * 1. Add entry to KNOWLEDGEBASE_ROUTES array
 * 2. Page will automatically appear in navigation and search
 */

export type SubcategoryType = 
  | 'Protein Supplements'
  | 'Vitamins'
  | 'Minerals'
  | 'Amino Acids'
  | 'Probiotics'
  | 'Omega-3 Fatty Acids'
  | 'Phytochemicals'
  | 'Enzymes'
  | 'Others';

export interface RouteConfig {
  key: string;
  title: string;
  description: string;
  componentPath: string;
  componentName: string;
  showInNav: boolean;
  category?: 'v1' | 'v2' | 'glossary';
  subcategory?: SubcategoryType;
  abbreviation?: string;
}

export const KNOWLEDGEBASE_ROUTES: RouteConfig[] = [
  // V2 Pages (Primary - shown in navigation)
  {
    key: 'ashwagandhav2',
    title: 'Ashwagandha',
    description: 'Enhanced meta-analysis review of ashwagandha with updated research data',
    componentPath: './components/AshwagandhaPageNewV2',
    componentName: 'AshwagandhaPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Phytochemicals'
  },
  {
    key: 'calciumv2',
    title: 'Calcium',
    description: 'Enhanced meta-analysis review of calcium for bone health and cardiovascular effects',
    componentPath: './components/CalciumPageNewV2',
    componentName: 'CalciumPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Minerals'
  },
  {
    key: 'collagenpeptidesv2',
    title: 'Collagen Peptides',
    description: 'Enhanced meta-analysis review of collagen peptides for skin, joints, and connective tissue',
    componentPath: './components/CollagenPeptidesPageNewV2',
    componentName: 'CollagenPeptidesPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Protein Supplements'
  },
  {
    key: 'creatinev2',
    title: 'Creatine',
    description: 'Enhanced meta-analysis review of creatine with updated research data',
    componentPath: './components/CreatinePageNewV2',
    componentName: 'CreatinePageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Amino Acids'
  },
  {
    key: 'ironv2',
    title: 'Iron',
    description: 'Enhanced meta-analysis review of iron for anemia, heart failure, and chronic kidney disease',
    componentPath: './components/IronPageNewV2',
    componentName: 'IronPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Minerals'
  },
  {
    key: 'magnesiumv2',
    title: 'Magnesium',
    description: 'Enhanced meta-analysis review of magnesium for blood pressure, glucose, and inflammation',
    componentPath: './components/MagnesiumPageNewV2',
    componentName: 'MagnesiumPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Minerals'
  },
  {
    key: 'omega3v2',
    title: 'Omega-3',
    description: 'Enhanced meta-analysis review of omega-3 with updated research data',
    componentPath: './components/Omega3PageNewV2',
    componentName: 'Omega3PageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Omega-3 Fatty Acids'
  },
  {
    key: 'prebioticsv2',
    title: 'Prebiotics',
    description: 'Enhanced meta-analysis review of prebiotics for gut health and metabolic effects',
    componentPath: './components/PrebioticsPageNewV2',
    componentName: 'PrebioticsPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Probiotics'
  },
  {
    key: 'probioticsv2',
    title: 'Probiotics',
    description: 'Enhanced meta-analysis review of probiotics for digestive and immune health',
    componentPath: './components/ProbioticsPageNewV2',
    componentName: 'ProbioticsPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Probiotics'
  },
  {
    key: 'sulforaphanev2',
    title: 'Sulforaphane',
    description: 'Enhanced meta-analysis review of sulforaphane with updated research data',
    componentPath: './components/SulforaphanePageNewV2',
    componentName: 'SulforaphanePageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Phytochemicals'
  },
  {
    key: 'vitamincv2',
    title: 'Vitamin C',
    description: 'Enhanced meta-analysis review of vitamin C with updated research data',
    componentPath: './components/VitaminCPageNewV2',
    componentName: 'VitaminCPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Vitamins'
  },
  {
    key: 'vitamindv2',
    title: 'Vitamin D',
    description: 'Enhanced meta-analysis review of vitamin D with updated research data',
    componentPath: './components/VitaminDPageNewV2',
    componentName: 'VitaminDPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Vitamins'
  },

  // V2 Pages (Primary - shown in navigation) - continued
  {
    key: 'bcaasv2',
    title: 'BCAAs',
    description: 'Enhanced meta-analysis review of branched-chain amino acids for muscle recovery and hepatic health',
    componentPath: './components/BCAAsPageNewV2',
    componentName: 'BCAAsPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Amino Acids'
  },

  // V2 Pages (Primary - shown in navigation) - continued
  {
    key: 'curcuminv2',
    title: 'Curcumin',
    description: 'Enhanced meta-analysis review of curcumin with anti-inflammatory and metabolic effects',
    componentPath: './components/CurcuminPageNewV2',
    componentName: 'CurcuminPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Phytochemicals'
  },
  {
    key: 'multivitaminv2',
    title: 'Multivitamin',
    description: 'Enhanced meta-analysis review of multivitamins with population-specific efficacy and safety data',
    componentPath: './components/MultivitaminPageNewV2',
    componentName: 'MultivitaminPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Vitamins'
  },
  {
    key: 'wheyproteinv2',
    title: 'Whey Protein',
    description: 'Enhanced meta-analysis review of whey protein for body composition, metabolic health, and athletic performance',
    componentPath: './components/WheyProteinPageNewV2',
    componentName: 'WheyProteinPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Protein Supplements'
  },
  {
    key: 'caseinproteinv2',
    title: 'Casein Protein',
    description: 'Enhanced meta-analysis review of casein protein for blood pressure, muscle mass, and inflammatory outcomes',
    componentPath: './components/CaseinProteinPageNewV2',
    componentName: 'CaseinProteinPageNewV2',
    showInNav: true,
    category: 'v2',
    subcategory: 'Protein Supplements'
  },

  // V1 Pages (Archived - hidden from navigation)
  {
    key: 'wheyprotein',
    title: 'Whey Protein (V1 - Archived)',
    description: 'High-quality dairy protein for muscle mass, strength, and metabolic health',
    componentPath: './components/WheyProteinPageNew',
    componentName: 'WheyProteinPageNew',
    showInNav: false,
    category: 'v1',
    subcategory: 'Protein Supplements'
  },
  {
    key: 'multivitamin',
    title: 'Multivitamin (V1 - Archived)',
    description: 'Comprehensive blend of essential vitamins and minerals',
    componentPath: './components/MultivitaminPageNew',
    componentName: 'MultivitaminPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'curcumin',
    title: 'Curcumin (V1 - Archived)',
    description: 'Active compound from turmeric with anti-inflammatory and metabolic effects',
    componentPath: './components/CurcuminPageNew',
    componentName: 'CurcuminPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'bcaas',
    title: 'BCAAs (V1 - Archived)',
    description: 'Essential branched-chain amino acids for muscle recovery and hepatic health',
    componentPath: './components/BCAAsPageNew',
    componentName: 'BCAAsPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'ashwagandha',
    title: 'Ashwagandha (V1 - Archived)',
    description: 'Adaptogenic herb for stress management and cognitive function',
    componentPath: './components/AshwagandhaPageNew',
    componentName: 'AshwagandhaPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'calcium',
    title: 'Calcium (V1 - Archived)',
    description: 'Essential mineral for bone health and cellular functions',
    componentPath: './components/CalciumPageNew',
    componentName: 'CalciumPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'collagenpeptides',
    title: 'Collagen Peptides (V1 - Archived)',
    description: 'Structural protein for skin, joints, and connective tissue',
    componentPath: './components/CollagenPeptidesPageNew',
    componentName: 'CollagenPeptidesPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'creatine',
    title: 'Creatine (V1 - Archived)',
    description: 'Performance supplement for strength, power, and muscle growth',
    componentPath: './components/CreatinePageNew',
    componentName: 'CreatinePageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'iron',
    title: 'Iron (V1 - Archived)',
    description: 'Essential mineral for oxygen transport and energy metabolism',
    componentPath: './components/IronPageNew',
    componentName: 'IronPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'magnesium',
    title: 'Magnesium (V1 - Archived)',
    description: 'Vital mineral for muscle function, bone health, and energy metabolism',
    componentPath: './components/MagnesiumPageNew',
    componentName: 'MagnesiumPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'omega3',
    title: 'Omega-3 (V1 - Archived)',
    description: 'Essential fatty acids for heart health, brain function, and inflammation',
    componentPath: './components/Omega3PageNew',
    componentName: 'Omega3PageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'prebiotics',
    title: 'Prebiotics (V1 - Archived)',
    description: 'Dietary fibers that support beneficial gut bacteria',
    componentPath: './components/PrebioticsPageNew',
    componentName: 'PrebioticsPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'probiotics',
    title: 'Probiotics (V1 - Archived)',
    description: 'Live beneficial bacteria for digestive and immune health',
    componentPath: './components/ProbioticsPageNew',
    componentName: 'ProbioticsPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'sulforaphane',
    title: 'Sulforaphane (V1 - Archived)',
    description: 'Bioactive compound from cruciferous vegetables',
    componentPath: './components/SulforaphanePageNew',
    componentName: 'SulforaphanePageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'vitaminc',
    title: 'Vitamin C (V1 - Archived)',
    description: 'Essential antioxidant vitamin for immune support and collagen synthesis',
    componentPath: './components/VitaminCPageNew',
    componentName: 'VitaminCPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'vitamind',
    title: 'Vitamin D (V1 - Archived)',
    description: 'Essential vitamin for bone health, immune function, and mood',
    componentPath: './components/VitaminDPageNew',
    componentName: 'VitaminDPageNew',
    showInNav: false,
    category: 'v1'
  },
  {
    key: 'ashwagandha-comparison',
    title: 'Ashwagandha Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Ashwagandha supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'AshwagandhaComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'calcium-comparison',
    title: 'Calcium Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Calcium supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'CalciumComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'collagen-comparison',
    title: 'Collagen Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Collagen supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'CollagenComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'creatine-comparison',
    title: 'Creatine Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Creatine supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'CreatineComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'iron-comparison',
    title: 'Iron Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Iron supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'IronComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'magnesium-comparison',
    title: 'Magnesium Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Magnesium supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'MagnesiumComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'omega-3-comparison',
    title: 'Omega-3 Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Omega-3 supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'Omega3Comparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'prebiotics-comparison',
    title: 'Prebiotics Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Prebiotics supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'PrebioticsComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'probiotics-comparison',
    title: 'Probiotics Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Probiotics supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'ProbioticsComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'vitamin-c-comparison',
    title: 'Vitamin C Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Vitamin C supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'VitaminCComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'vitamin-d-comparison',
    title: 'Vitamin D Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Vitamin D supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'VitaminDComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'bcaa-comparison',
    title: 'BCAA Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for BCAA supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'BCAAsComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'curcumin-comparison',
    title: 'Curcumin Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Curcumin supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'CurcuminComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'multivitamin-comparison',
    title: 'Multivitamin Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Multivitamin supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'MultivitaminComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'whey-protein-comparison',
    title: 'Whey Protein Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Whey Protein supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'WheyProteinComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'casein-protein-comparison',
    title: 'Casein Protein Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Casein Protein supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'CaseinProteinComparison',
    showInNav: false,
    category: 'comparison'
  },
  {
    key: 'zinc-comparison',
    title: 'Zinc Price Comparison | Best Deals at iHerb & Amazon',
    description: 'Compare prices for Zinc supplements across top retailers. Find the best deals, certifications, and quality products.',
    componentPath: './components/ProductComparisonWrapper',
    componentName: 'ZincComparison',
    showInNav: false,
    category: 'comparison'
  }
];

// Glossary routes
export const GLOSSARY_ROUTES: RouteConfig[] = [
  {
    key: 'rct',
    title: 'Randomized Controlled Trial',
    abbreviation: 'RCT',
    description: 'A type of scientific experiment that randomly assigns participants to different groups to test effectiveness',
    componentPath: './components/glossary/RCTPage',
    componentName: 'RCTPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'metaanalysis',
    title: 'Meta-Analysis',
    description: 'A statistical method that combines results from multiple studies to identify overall effects',
    componentPath: './components/glossary/MetaAnalysisPage',
    componentName: 'MetaAnalysisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'empiricalevidence',
    title: 'Empirical Evidence',
    description: 'Evidence obtained through observation, experimentation, or direct experience',
    componentPath: './components/glossary/EmpiricalEvidencePage',
    componentName: 'EmpiricalEvidencePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'anecdotalevidence',
    title: 'Anecdotal Evidence',
    description: 'Information based on personal accounts rather than systematic scientific research',
    componentPath: './components/glossary/AnecdotalEvidencePage',
    componentName: 'AnecdotalEvidencePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'placebo',
    title: 'Placebo',
    description: 'An inactive substance given to a control group to compare against the active intervention',
    componentPath: './components/glossary/PlaceboPage',
    componentName: 'PlaceboPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'peerreviewed',
    title: 'Peer-reviewed',
    description: 'Scientific research evaluated and approved by independent experts before publication',
    componentPath: './components/glossary/PeerReviewedPage',
    componentName: 'PeerReviewedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'statisticalsignificance',
    title: 'Statistical Significance',
    description: 'A measure indicating that a finding is unlikely to have occurred by chance alone',
    componentPath: './components/glossary/StatisticalSignificancePage',
    componentName: 'StatisticalSignificancePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'clinicalsignificance',
    title: 'Clinical Significance',
    description: 'The practical importance of a treatment effect in real-world health outcomes',
    componentPath: './components/glossary/ClinicalSignificancePage',
    componentName: 'ClinicalSignificancePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'subgroupanalysis',
    title: 'Subgroup Analysis',
    description: 'Examination of treatment effects within specific subsets of a study population',
    componentPath: './components/glossary/SubgroupAnalysisPage',
    componentName: 'SubgroupAnalysisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'efficacy',
    title: 'Efficacy',
    description: 'The ability of a treatment to produce the desired effect under ideal conditions',
    componentPath: './components/glossary/EfficacyPage',
    componentName: 'EfficacyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'singleblinded',
    title: 'Single Blinded',
    description: 'A study where participants don\'t know their group assignment but researchers do',
    componentPath: './components/glossary/SingleBlindedPage',
    componentName: 'SingleBlindedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'doubleblinded',
    title: 'Double Blinded',
    description: 'A study where neither participants nor researchers know group assignments',
    componentPath: './components/glossary/DoubleBlindedPage',
    componentName: 'DoubleBlindedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bioavailability',
    title: 'Bioavailability',
    description: 'The proportion of a nutrient that enters the bloodstream and becomes available for use',
    componentPath: './components/glossary/BioavailabilityPage',
    componentName: 'BioavailabilityPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'inflammation',
    title: 'Inflammation',
    description: 'The body\'s natural immune response to injury, infection, or harmful stimuli',
    componentPath: './components/glossary/InflammationPage',
    componentName: 'InflammationPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'oxidativestress',
    title: 'Oxidative Stress',
    description: 'An imbalance between free radicals and antioxidants leading to cellular damage',
    componentPath: './components/glossary/OxidativeStressPage',
    componentName: 'OxidativeStressPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'antioxidant',
    title: 'Antioxidant',
    description: 'A molecule that neutralizes free radicals and protects cells from oxidative damage',
    componentPath: './components/glossary/AntioxidantPage',
    componentName: 'AntioxidantPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'insulinresistance',
    title: 'Insulin Resistance',
    description: 'A condition where cells don\'t respond effectively to insulin signaling',
    componentPath: './components/glossary/InsulinResistancePage',
    componentName: 'InsulinResistancePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'biomarker',
    title: 'Biomarker',
    description: 'A measurable biological indicator of health status or disease processes',
    componentPath: './components/glossary/BiomarkerPage',
    componentName: 'BiomarkerPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'absorption',
    title: 'Absorption',
    description: 'The process by which nutrients pass from the gut into the bloodstream',
    componentPath: './components/glossary/AbsorptionPage',
    componentName: 'AbsorptionPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'metabolism',
    title: 'Metabolism',
    description: 'The sum of chemical reactions that convert nutrients into energy and building blocks',
    componentPath: './components/glossary/MetabolismPage',
    componentName: 'MetabolismPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'cardiovascular',
    title: 'Cardiovascular',
    description: 'Relating to the heart and blood vessels - the circulatory system',
    componentPath: './components/glossary/CardiovascularPage',
    componentName: 'CardiovascularPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'dosedependent',
    title: 'Dose-Dependent',
    description: 'A relationship where effect magnitude changes with the amount administered',
    componentPath: './components/glossary/DoseDependentPage',
    componentName: 'DoseDependentPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'homocysteine',
    title: 'Homocysteine',
    description: 'An amino acid associated with cardiovascular disease risk when elevated',
    componentPath: './components/glossary/HomocysteinePage',
    componentName: 'HomocysteinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bonedensity',
    title: 'Bone Density',
    abbreviation: 'BMD',
    description: 'Measurement of minerals in bone used to assess strength and fracture risk',
    componentPath: './components/glossary/BoneDensityPage',
    componentName: 'BoneDensityPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glycemiccontrol',
    title: 'Glycemic Control',
    description: 'Regulation of blood glucose levels within a healthy range',
    componentPath: './components/glossary/GlycemicControlPage',
    componentName: 'GlycemicControlPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'cognitivefunction',
    title: 'Cognitive Function',
    description: 'Mental processes including memory, attention, reasoning, and problem-solving',
    componentPath: './components/glossary/CognitiveFunction',
    componentName: 'CognitiveFunction',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'anemia',
    title: 'Anemia',
    description: 'Insufficient red blood cells or hemoglobin causing reduced oxygen capacity',
    componentPath: './components/glossary/AnemiaPage',
    componentName: 'AnemiaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'triglycerides',
    title: 'Triglycerides',
    description: 'Type of fat in blood that serves as energy storage',
    componentPath: './components/glossary/TriglyceridesPage',
    componentName: 'TriglyceridesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'collagen',
    title: 'Collagen',
    description: 'Most abundant protein providing structural support to tissues',
    componentPath: './components/glossary/CollagenPage',
    componentName: 'CollagenPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'cortisol',
    title: 'Cortisol',
    description: 'Stress hormone regulating metabolism and immune function',
    componentPath: './components/glossary/CortisolPage',
    componentName: 'CortisolPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'thyroidfunction',
    title: 'Thyroid Function',
    description: 'Activity of the thyroid gland in regulating metabolism',
    componentPath: './components/glossary/ThyroidFunctionPage',
    componentName: 'ThyroidFunctionPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'gutmicrobiome',
    title: 'Gut Microbiome',
    description: 'Community of microorganisms living in the digestive tract',
    componentPath: './components/glossary/GutMicrobiomePage',
    componentName: 'GutMicrobiomePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'immunesystem',
    title: 'Immune System',
    description: 'Body defense network protecting against pathogens and disease',
    componentPath: './components/glossary/ImmuneSystemPage',
    componentName: 'ImmuneSystemPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'muscleproteinsynthesis',
    title: 'Muscle Protein Synthesis',
    abbreviation: 'MPS',
    description: 'Process of building muscle protein from amino acids',
    componentPath: './components/glossary/MuscleProteinSynthesisPage',
    componentName: 'MuscleProteinSynthesisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'neurotransmitter',
    title: 'Neurotransmitter',
    description: 'Chemical messengers transmitting signals between neurons',
    componentPath: './components/glossary/NeurotransmitterPage',
    componentName: 'NeurotransmitterPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'electrolytes',
    title: 'Electrolytes',
    description: 'Minerals carrying electrical charge essential for cellular function',
    componentPath: './components/glossary/ElectrolytesPage',
    componentName: 'ElectrolytesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'jointhealth',
    title: 'Joint Health',
    description: 'Structural integrity and functional capacity of joints',
    componentPath: './components/glossary/JointHealthPage',
    componentName: 'JointHealthPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'sleepquality',
    title: 'Sleep Quality',
    description: 'Assessment of sleep duration, efficiency, and restfulness',
    componentPath: './components/glossary/SleepQualityPage',
    componentName: 'SleepQualityPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'mitochondria',
    title: 'Mitochondria',
    description: 'Cell organelles generating energy through ATP production',
    componentPath: './components/glossary/MitochondriaPage',
    componentName: 'MitochondriaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'protein',
    title: 'Protein',
    description: 'Macronutrient composed of amino acids essential for tissue building',
    componentPath: './components/glossary/ProteinPage',
    componentName: 'ProteinPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'vitamindeficiency',
    title: 'Vitamin Deficiency',
    description: 'Insufficient vitamin levels causing various health problems',
    componentPath: './components/glossary/VitaminDeficiencyPage',
    componentName: 'VitaminDeficiencyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'adaptogen',
    title: 'Adaptogen',
    description: 'Natural substance helping the body adapt to stress',
    componentPath: './components/glossary/AdaptogenPage',
    componentName: 'AdaptogenPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'smd',
    title: 'Standardized Mean Difference',
    abbreviation: 'SMD',
    description: 'Statistical measure of effect size used in meta-analyses',
    componentPath: './components/glossary/SMDPage',
    componentName: 'SMDPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'grade',
    title: 'GRADE',
    description: 'Grading of Recommendations Assessment, Development and Evaluation - a systematic approach for rating evidence quality',
    componentPath: './components/glossary/GRADEPage',
    componentName: 'GRADEPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'epa',
    title: 'EPA',
    description: 'Eicosapentaenoic acid - a long-chain omega-3 fatty acid with anti-inflammatory properties',
    componentPath: './components/glossary/EPAPage',
    componentName: 'EPAPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'dha',
    title: 'DHA',
    description: 'Docosahexaenoic acid - an omega-3 fatty acid essential for brain and eye health',
    componentPath: './components/glossary/DHAPage',
    componentName: 'DHAPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'omega-3',
    title: 'Omega-3 Fatty Acids',
    description: 'Essential polyunsaturated fatty acids important for heart and brain health',
    componentPath: './components/glossary/Omega3Page',
    componentName: 'Omega3Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bloodglucose',
    title: 'Blood Glucose',
    description: 'The amount of glucose (sugar) present in the blood, the body\'s primary energy source',
    componentPath: './components/glossary/BloodGlucosePage',
    componentName: 'BloodGlucosePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bloodpressure',
    title: 'Blood Pressure',
    description: 'The force of blood pushing against artery walls, measured as systolic over diastolic',
    componentPath: './components/glossary/BloodPressurePage',
    componentName: 'BloodPressurePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'proteinsynthesis',
    title: 'Protein Synthesis',
    description: 'The biological process of building new proteins from amino acids',
    componentPath: './components/glossary/ProteinSynthesisPage',
    componentName: 'ProteinSynthesisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glucosemetabolism',
    title: 'Glucose Metabolism',
    description: 'All biochemical processes involved in the formation, breakdown, and regulation of glucose',
    componentPath: './components/glossary/GlucoseMetabolismPage',
    componentName: 'GlucoseMetabolismPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'systolic',
    title: 'Systolic Blood Pressure',
    description: 'The top number in blood pressure readings, measuring peak arterial pressure when the heart contracts',
    componentPath: './components/glossary/SystolicPage',
    componentName: 'SystolicPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'diastolic',
    title: 'Diastolic Blood Pressure',
    description: 'The bottom number in blood pressure readings, measuring minimum arterial pressure when the heart rests',
    componentPath: './components/glossary/DiastolicPage',
    componentName: 'DiastolicPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'normotensive',
    title: 'Normotensive',
    description: 'Having normal blood pressure levels without medication',
    componentPath: './components/glossary/NormotensivePage',
    componentName: 'NormotensivePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hypertensive',
    title: 'Hypertensive',
    description: 'Having high blood pressure (hypertension) above normal ranges',
    componentPath: './components/glossary/HypertensivePage',
    componentName: 'HypertensivePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'macromineral',
    title: 'Macromineral',
    description: 'Essential minerals required in amounts greater than 100 mg per day',
    componentPath: './components/glossary/MacromineralPage',
    componentName: 'MacromineralPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'mineral',
    title: 'Mineral',
    description: 'Inorganic chemical elements essential for various physiological functions',
    componentPath: './components/glossary/MineralPage',
    componentName: 'MineralPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'pms',
    title: 'PMS (Premenstrual Syndrome)',
    description: 'Physical, emotional, and behavioral symptoms occurring before menstruation',
    componentPath: './components/glossary/PMSPage',
    componentName: 'PMSPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'preeclampsia',
    title: 'Pre-eclampsia',
    description: 'Serious pregnancy complication with high blood pressure and organ damage',
    componentPath: './components/glossary/PreeclampsiaPage',
    componentName: 'PreeclampsiaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'osteoporosis',
    title: 'Osteoporosis',
    description: 'Systemic skeletal disease with low bone mass and increased fracture risk',
    componentPath: './components/glossary/OsteoporosisPage',
    componentName: 'OsteoporosisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hydrolyzed',
    title: 'Hydrolyzed',
    description: 'Proteins broken down into smaller peptides through hydrolysis for easier absorption',
    componentPath: './components/glossary/HydrolyzedPage',
    componentName: 'HydrolyzedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glycine',
    title: 'Glycine',
    description: 'Simplest amino acid, major component of collagen and inhibitory neurotransmitter',
    componentPath: './components/glossary/GlycinePage',
    componentName: 'GlycinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'proline',
    title: 'Proline',
    description: 'Amino acid with unique cyclic structure critical for collagen stability',
    componentPath: './components/glossary/ProlinePage',
    componentName: 'ProlinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hydroxyproline',
    title: 'Hydroxyproline',
    description: 'Modified amino acid found almost exclusively in collagen, essential for stability',
    componentPath: './components/glossary/HydroxyprolinePage',
    componentName: 'HydroxyprolinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'atp',
    title: 'ATP (Adenosine Triphosphate)',
    description: 'Primary energy currency of cells, storing and transferring chemical energy',
    componentPath: './components/glossary/ATPPage',
    componentName: 'ATPPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'pedro',
    title: 'PEDro Scale',
    description: 'Quality assessment tool rating methodological quality of RCTs in physiotherapy',
    componentPath: './components/glossary/PEDroPage',
    componentName: 'PEDroPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hemoglobin',
    title: 'Hemoglobin',
    description: 'Iron-containing protein in red blood cells that transports oxygen',
    componentPath: './components/glossary/HemoglobinPage',
    componentName: 'HemoglobinPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'myoglobin',
    title: 'Myoglobin',
    description: 'Oxygen-binding protein in muscle tissue that stores oxygen for energy production',
    componentPath: './components/glossary/MyoglobinPage',
    componentName: 'MyoglobinPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'rr',
    title: 'Risk Ratio',
    abbreviation: 'RR',
    description: 'Measure of relative risk comparing the probability of an event in treatment vs. control groups',
    componentPath: './components/glossary/RRPage',
    componentName: 'RRPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'or',
    title: 'Odds Ratio',
    abbreviation: 'OR',
    description: 'Statistical measure comparing odds of an outcome in treatment vs. control groups',
    componentPath: './components/glossary/ORPage',
    componentName: 'ORPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'fmd',
    title: 'Flow-Mediated Dilation',
    abbreviation: 'FMD',
    description: 'Non-invasive ultrasound measurement of endothelial function and cardiovascular health',
    componentPath: './components/glossary/FMDPage',
    componentName: 'FMDPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'wmd',
    title: 'Weighted Mean Difference',
    abbreviation: 'WMD',
    description: 'Statistical measure pooling results from studies using the same measurement scale',
    componentPath: './components/glossary/WMDPage',
    componentName: 'WMDPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'il6',
    title: 'Interleukin-6',
    abbreviation: 'IL-6',
    description: 'Pro-inflammatory cytokine serving as a biomarker of systemic inflammation',
    componentPath: './components/glossary/IL6Page',
    componentName: 'IL6Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'tac',
    title: 'Total Antioxidant Capacity',
    abbreviation: 'TAC',
    description: 'Measurement of overall antioxidant power in blood or tissue',
    componentPath: './components/glossary/TACPage',
    componentName: 'TACPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'fibrinogen',
    title: 'Fibrinogen',
    description: 'Plasma protein essential for blood clotting and biomarker of inflammation',
    componentPath: './components/glossary/FibrinogenPage',
    componentName: 'FibrinogenPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'il1',
    title: 'Interleukin-1',
    abbreviation: 'IL-1',
    description: 'Pro-inflammatory cytokine initiating and amplifying inflammatory responses',
    componentPath: './components/glossary/IL1Page',
    componentName: 'IL1Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'tnfalpha',
    title: 'Tumor Necrosis Factor-Alpha',
    abbreviation: 'TNF-α',
    description: 'Potent pro-inflammatory cytokine regulating immune responses and inflammation',
    componentPath: './components/glossary/TNFAlphaPage',
    componentName: 'TNFAlphaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'mda',
    title: 'Malondialdehyde',
    abbreviation: 'MDA',
    description: 'Biomarker of oxidative stress and lipid peroxidation',
    componentPath: './components/glossary/MDAPage',
    componentName: 'MDAPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glutathione',
    title: 'Glutathione',
    abbreviation: 'GSH',
    description: 'Master antioxidant protecting against oxidative stress and supporting detoxification',
    componentPath: './components/glossary/GlutathionePage',
    componentName: 'GlutathionePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'fodmap',
    title: 'FODMAP',
    abbreviation: 'Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols',
    description: 'Short-chain carbohydrates poorly absorbed in small intestine, causing digestive symptoms in sensitive individuals',
    componentPath: './components/glossary/FODMAPPage',
    componentName: 'FODMAPPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ibs',
    title: 'Irritable Bowel Syndrome',
    abbreviation: 'IBS',
    description: 'Chronic functional gastrointestinal disorder with recurrent abdominal pain and altered bowel habits',
    componentPath: './components/glossary/IBSPage',
    componentName: 'IBSPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'sibo',
    title: 'Small Intestinal Bacterial Overgrowth',
    abbreviation: 'SIBO',
    description: 'Excessive bacterial colonization of small intestine causing malabsorption and gastrointestinal symptoms',
    componentPath: './components/glossary/SIBOPage',
    componentName: 'SIBOPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'gos',
    title: 'Galacto-oligosaccharides',
    abbreviation: 'GOS',
    description: 'Prebiotic fibers selectively stimulating beneficial gut bacteria, particularly Bifidobacteria',
    componentPath: './components/glossary/GOSPage',
    componentName: 'GOSPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'inulintypefructans',
    title: 'Inulin-type Fructans',
    description: 'Prebiotic fibers including inulin and FOS that promote beneficial gut bacteria growth',
    componentPath: './components/glossary/InulinTypeFructansPage',
    componentName: 'InulinTypeFructansPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glp1',
    title: 'Glucagon-Like Peptide-1',
    abbreviation: 'GLP-1',
    description: 'Incretin hormone regulating insulin secretion, gastric emptying, and appetite',
    componentPath: './components/glossary/GLP1Page',
    componentName: 'GLP1Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'pyy',
    title: 'Peptide YY',
    abbreviation: 'PYY',
    description: 'Satiety hormone that reduces appetite and food consumption',
    componentPath: './components/glossary/PYYPage',
    componentName: 'PYYPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'arr',
    title: 'Absolute Risk Reduction',
    abbreviation: 'ARR',
    description: 'Absolute difference in event rates between treatment and control groups',
    componentPath: './components/glossary/ARRPage',
    componentName: 'ARRPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ci',
    title: 'Confidence Interval',
    abbreviation: 'CI',
    description: 'Range of values likely to contain the true effect size with specified confidence',
    componentPath: './components/glossary/CIPage',
    componentName: 'CIPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hba1c',
    title: 'HbA1c (Hemoglobin A1c)',
    abbreviation: 'HbA1c',
    description: 'Blood test measuring average blood glucose levels over the past 2-3 months',
    componentPath: './components/glossary/HbA1cPage',
    componentName: 'HbA1cPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'crp',
    title: 'CRP (C-Reactive Protein)',
    abbreviation: 'CRP',
    description: 'Inflammatory biomarker produced by the liver in response to inflammation',
    componentPath: './components/glossary/CRPPage',
    componentName: 'CRPPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ldlcholesterol',
    title: 'LDL Cholesterol',
    abbreviation: 'LDL',
    description: 'Low-density lipoprotein cholesterol, the primary contributor to arterial plaque buildup',
    componentPath: './components/glossary/LDLCholesterolPage',
    componentName: 'LDLCholesterolPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hdlcholesterol',
    title: 'HDL Cholesterol',
    abbreviation: 'HDL',
    description: 'High-density lipoprotein cholesterol, protective against cardiovascular disease',
    componentPath: './components/glossary/HDLCholesterolPage',
    componentName: 'HDLCholesterolPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'scfa',
    title: 'SCFA (Short-Chain Fatty Acids)',
    abbreviation: 'SCFA',
    description: 'Fatty acids produced by gut bacteria fermenting dietary fiber',
    componentPath: './components/glossary/SCFAPage',
    componentName: 'SCFAPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'standardizedextract',
    title: 'Standardized Extract',
    description: 'Botanical extract processed to contain guaranteed concentration of active compounds',
    componentPath: './components/glossary/StandardizedExtractPage',
    componentName: 'StandardizedExtractPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'thirdpartytesting',
    title: 'Third-Party Testing',
    description: 'Independent laboratory verification of supplement quality, purity, and potency',
    componentPath: './components/glossary/ThirdPartyTestingPage',
    componentName: 'ThirdPartyTestingPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'chelated',
    title: 'Chelated Minerals',
    description: 'Minerals bound to organic molecules to enhance absorption and bioavailability',
    componentPath: './components/glossary/ChelatedPage',
    componentName: 'ChelatedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'micronized',
    title: 'Micronized',
    description: 'Process reducing particles to microscopic size to improve dissolution and absorption',
    componentPath: './components/glossary/MicronizedPage',
    componentName: 'MicronizedPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'therapeuticdose',
    title: 'Therapeutic Dose',
    description: 'Amount of supplement that produces desired beneficial effect while remaining safe',
    componentPath: './components/glossary/TherapeuticDosePage',
    componentName: 'TherapeuticDosePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'adverseeffects',
    title: 'Adverse Effects',
    description: 'Unintended harmful or unpleasant responses to supplements ranging from mild to severe',
    componentPath: './components/glossary/AdverseEffectsPage',
    componentName: 'AdverseEffectsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'contraindications',
    title: 'Contraindications',
    description: 'Specific situations or conditions where a supplement should not be used',
    componentPath: './components/glossary/ContraindicationsPage',
    componentName: 'ContraindicationsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'druginteractions',
    title: 'Drug Interactions',
    description: 'How supplements affect medication effectiveness or create new health risks',
    componentPath: './components/glossary/DrugInteractionsPage',
    componentName: 'DrugInteractionsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'sublingual',
    title: 'Sublingual Administration',
    description: 'Placing supplement under tongue for direct absorption into bloodstream',
    componentPath: './components/glossary/SublingualPage',
    componentName: 'SublingualPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'polyphenols',
    title: 'Polyphenols',
    description: 'Plant compounds with antioxidant and anti-inflammatory properties',
    componentPath: './components/glossary/PolyphenolsPage',
    componentName: 'PolyphenolsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'flavonoids',
    title: 'Flavonoids',
    description: 'Largest class of polyphenols with diverse antioxidant and anti-inflammatory effects',
    componentPath: './components/glossary/FlavonoidsPage',
    componentName: 'FlavonoidsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'carotenoids',
    title: 'Carotenoids',
    description: 'Fat-soluble pigments with antioxidant properties; some convert to vitamin A',
    componentPath: './components/glossary/CarotenoidsPage',
    componentName: 'CarotenoidsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'catalase',
    title: 'Catalase',
    description: 'Antioxidant enzyme breaking down hydrogen peroxide to protect cells',
    componentPath: './components/glossary/CatalasePage',
    componentName: 'CatalasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glutathioneperoxidase',
    title: 'Glutathione Peroxidase (GPx)',
    abbreviation: 'GPx',
    description: 'Selenium-dependent antioxidant enzyme reducing hydrogen peroxide and lipid peroxides',
    componentPath: './components/glossary/GlutathionePeroxidasePage',
    componentName: 'GlutathionePeroxidasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'coenzymeq10',
    title: 'Coenzyme Q10 (CoQ10)',
    abbreviation: 'CoQ10',
    description: 'Compound critical for mitochondrial energy production and antioxidant protection',
    componentPath: './components/glossary/CoenzymeQ10Page',
    componentName: 'CoenzymeQ10Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'resveratrol',
    title: 'Resveratrol',
    description: 'Polyphenolic compound from grapes and red wine studied for anti-aging benefits',
    componentPath: './components/glossary/ResveratrolPage',
    componentName: 'ResveratrolPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'mtor',
    title: 'mTOR (Mechanistic Target of Rapamycin)',
    abbreviation: 'mTOR',
    description: 'Protein kinase regulating cell growth, metabolism, and protein synthesis',
    componentPath: './components/glossary/mTORPage',
    componentName: 'mTORPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'effectsize',
    title: 'Effect Size',
    description: 'Quantitative measure of treatment magnitude, independent of sample size',
    componentPath: './components/glossary/EffectSizePage',
    componentName: 'EffectSizePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hedgesg',
    title: "Hedges' g",
    description: 'Standardized effect size measure with correction for small sample bias',
    componentPath: './components/glossary/HedgesgPage',
    componentName: 'HedgesgPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'superoxidedismutase',
    title: 'Superoxide Dismutase',
    abbreviation: 'SOD',
    description: 'Family of antioxidant enzymes that neutralize superoxide radicals',
    componentPath: './components/glossary/SuperoxideDismutasePage',
    componentName: 'SuperoxideDismutasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'cytokines',
    title: 'Cytokines',
    description: 'Signaling proteins that mediate and regulate immune responses and inflammation',
    componentPath: './components/glossary/CytokinesPage',
    componentName: 'CytokinesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'metabolicsyndrome',
    title: 'Metabolic Syndrome',
    description: 'Cluster of conditions increasing risk of heart disease, diabetes, and stroke',
    componentPath: './components/glossary/MetabolicSyndromePage',
    componentName: 'MetabolicSyndromePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'atherosclerosis',
    title: 'Atherosclerosis',
    description: 'Arterial plaque buildup leading to narrowed and hardened arteries',
    componentPath: './components/glossary/AtherosclerosisPage',
    componentName: 'AtherosclerosisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'rheumatoidarthritis',
    title: 'Rheumatoid Arthritis',
    abbreviation: 'RA',
    description: 'Autoimmune disease causing chronic joint inflammation and systemic effects',
    componentPath: './components/glossary/RheumatoidArthritisPage',
    componentName: 'RheumatoidArthritisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'inflammatoryboweldisease',
    title: 'Inflammatory Bowel Disease',
    abbreviation: 'IBD',
    description: 'Chronic inflammatory GI conditions including Crohn\'s disease and ulcerative colitis',
    componentPath: './components/glossary/InflammatoryBowelDiseasePage',
    componentName: 'InflammatoryBowelDiseasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'dysbiosis',
    title: 'Dysbiosis',
    description: 'Imbalance in gut microbiome composition reducing beneficial bacteria',
    componentPath: './components/glossary/DysbiosisPage',
    componentName: 'DysbiosisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ala',
    title: 'ALA (Alpha-Linolenic Acid)',
    abbreviation: 'ALA',
    description: 'Plant-based omega-3 fatty acid that converts poorly to EPA and DHA',
    componentPath: './components/glossary/ALAPage',
    componentName: 'ALAPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'butyrate',
    title: 'Butyrate',
    description: 'Short-chain fatty acid produced by gut bacteria, critical for colonocyte health',
    componentPath: './components/glossary/ButyratePage',
    componentName: 'ButyratePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'propionate',
    title: 'Propionate',
    description: 'Short-chain fatty acid produced by gut bacteria with metabolic effects',
    componentPath: './components/glossary/PropionatePage',
    componentName: 'PropionatePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'acetate',
    title: 'Acetate',
    description: 'Most abundant short-chain fatty acid produced by gut bacteria',
    componentPath: './components/glossary/AcetatePage',
    componentName: 'AcetatePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'leucine',
    title: 'Leucine',
    description: 'Essential branched-chain amino acid, primary driver of muscle protein synthesis',
    componentPath: './components/glossary/LeucinePage',
    componentName: 'LeucinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'isoleucine',
    title: 'Isoleucine',
    description: 'Essential branched-chain amino acid important for muscle metabolism and immune function',
    componentPath: './components/glossary/IsoleucinePage',
    componentName: 'IsoleucinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'valine',
    title: 'Valine',
    description: 'Essential branched-chain amino acid supporting muscle growth and energy',
    componentPath: './components/glossary/ValinePage',
    componentName: 'ValinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'creatinekinase',
    title: 'Creatine Kinase',
    abbreviation: 'CK',
    description: 'Enzyme and biomarker of muscle damage',
    componentPath: './components/glossary/CreatineKinasePage',
    componentName: 'CreatineKinasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'phosphocreatine',
    title: 'Phosphocreatine',
    description: 'High-energy phosphate compound critical for ATP regeneration in muscles',
    componentPath: './components/glossary/PhosphocreatinePage',
    componentName: 'PhosphocreatinePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'eicosanoids',
    title: 'Eicosanoids',
    description: 'Signaling molecules derived from omega-3 and omega-6 fatty acids',
    componentPath: './components/glossary/EicosanoidsPage',
    componentName: 'EicosanoidsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'resolvins',
    title: 'Resolvins',
    description: 'Anti-inflammatory compounds derived from omega-3 fatty acids',
    componentPath: './components/glossary/ResolvinsPage',
    componentName: 'ResolvinsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'phytates',
    title: 'Phytates',
    description: 'Plant compounds that can inhibit mineral absorption',
    componentPath: './components/glossary/PhytatesPage',
    componentName: 'PhytatesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'oxalates',
    title: 'Oxalates',
    description: 'Plant compounds affecting mineral absorption and kidney stone risk',
    componentPath: './components/glossary/OxalatesPage',
    componentName: 'OxalatesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'aminoacids',
    title: 'Amino Acids',
    description: 'Building blocks of proteins essential for tissue growth and repair',
    componentPath: './components/glossary/AminoAcidsPage',
    componentName: 'AminoAcidsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'essentialaminoacids',
    title: 'Essential Amino Acids',
    abbreviation: 'EAAs',
    description: 'Nine amino acids that must be obtained from diet',
    componentPath: './components/glossary/EssentialAminoAcidsPage',
    componentName: 'EssentialAminoAcidsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bmi',
    title: 'BMI (Body Mass Index)',
    abbreviation: 'BMI',
    description: 'Weight-to-height ratio used to categorize body weight status',
    componentPath: './components/glossary/BMIPage',
    componentName: 'BMIPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'observationalstudy',
    title: 'Observational Study',
    description: 'Research where investigators observe outcomes without assigning interventions',
    componentPath: './components/glossary/ObservationalStudyPage',
    componentName: 'ObservationalStudyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'cohortstudy',
    title: 'Cohort Study',
    description: 'Observational study following groups over time to assess exposure-outcome relationships',
    componentPath: './components/glossary/CohortStudyPage',
    componentName: 'CohortStudyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'crosssectionalstudy',
    title: 'Cross-Sectional Study',
    description: 'Observational study analyzing data from a population at one specific point in time',
    componentPath: './components/glossary/CrossSectionalStudyPage',
    componentName: 'CrossSectionalStudyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'systematicreview',
    title: 'Systematic Review',
    description: 'Comprehensive, structured literature review using predefined methods to answer research questions',
    componentPath: './components/glossary/SystematicReviewPage',
    componentName: 'SystematicReviewPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'pharmacokinetics',
    title: 'Pharmacokinetics',
    description: 'Study of how the body absorbs, distributes, metabolizes, and excretes substances',
    componentPath: './components/glossary/PharmacokineticsPage',
    componentName: 'PharmacokineticsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'homair',
    title: 'HOMA-IR',
    abbreviation: 'Homeostatic Model Assessment of Insulin Resistance',
    description: 'Mathematical formula quantifying insulin resistance from fasting glucose and insulin',
    componentPath: './components/glossary/HOMAIRPage',
    componentName: 'HOMAIRPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'nfkb',
    title: 'NF-κB',
    abbreviation: 'Nuclear Factor Kappa B',
    description: 'Master transcription factor regulating inflammatory and immune responses',
    componentPath: './components/glossary/NFkBPage',
    componentName: 'NFkBPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'nrf2',
    title: 'Nrf2',
    abbreviation: 'Nuclear Factor Erythroid 2-Related Factor 2',
    description: 'Master transcription factor regulating antioxidant defense and cellular protection',
    componentPath: './components/glossary/Nrf2Page',
    componentName: 'Nrf2Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'vldl',
    title: 'VLDL',
    abbreviation: 'Very Low-Density Lipoprotein',
    description: 'Lipoprotein particle transporting triglycerides from liver to tissues',
    componentPath: './components/glossary/VLDLPage',
    componentName: 'VLDLPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ferrousiron',
    title: 'Ferrous Iron',
    description: 'Iron in +2 oxidation state, better absorbed form for supplements',
    componentPath: './components/glossary/FerrousIronPage',
    componentName: 'FerrousIronPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ferriciron',
    title: 'Ferric Iron',
    description: 'Iron in +3 oxidation state, less well absorbed than ferrous iron',
    componentPath: './components/glossary/FerricIronPage',
    componentName: 'FerricIronPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'homa-ir',
    title: 'HOMA-IR',
    description: 'Homeostatic Model Assessment of Insulin Resistance - a method to quantify insulin resistance',
    componentPath: './components/glossary/HOMAIRPage',
    componentName: 'HOMAIRPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'pancreatitis',
    title: 'Pancreatitis',
    description: 'Inflammation of the pancreas, which can be acute or chronic',
    componentPath: './components/glossary/PancreatitisPage',
    componentName: 'PancreatitisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'ulcerativecolitis',
    title: 'Ulcerative Colitis',
    abbreviation: 'UC',
    description: 'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum',
    componentPath: './components/glossary/UlcerativeColitisPage',
    componentName: 'UlcerativeColitisPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'prediabetes',
    title: 'Prediabetes',
    description: 'A condition in which blood glucose levels are higher than normal but not high enough to be classified as diabetes',
    componentPath: './components/glossary/PrediabetesPage',
    componentName: 'PrediabetesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hyperglycemia',
    title: 'Hyperglycemia',
    description: 'Elevated blood glucose levels above the normal range',
    componentPath: './components/glossary/HyperglycemiaPage',
    componentName: 'HyperglycemiaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'rickets',
    title: 'Rickets',
    description: 'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency',
    componentPath: './components/glossary/RicketsPage',
    componentName: 'RicketsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'osteomalacia',
    title: 'Osteomalacia',
    description: 'Softening of the bones in adults due to defective bone mineralization',
    componentPath: './components/glossary/OsteomalachPage',
    componentName: 'OsteomalachPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'akkermansia',
    title: 'Akkermansia muciniphila',
    description: 'Beneficial gut bacteria associated with metabolic health and healthy body weight',
    componentPath: './components/glossary/AkkermansiaPage',
    componentName: 'AkkermansiaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'anabolicresistance',
    title: 'Anabolic Resistance',
    description: 'Reduced muscle protein synthesis response to anabolic stimuli like protein intake',
    componentPath: './components/glossary/AnabolicResistancePage',
    componentName: 'AnabolicResistancePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'arachidonicacid',
    title: 'Arachidonic Acid',
    abbreviation: 'AA',
    description: 'Omega-6 fatty acid that serves as precursor to inflammatory and regulatory eicosanoids',
    componentPath: './components/glossary/ArachidonicAcidPage',
    componentName: 'ArachidonicAcidPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bacteroides',
    title: 'Bacteroides',
    description: 'Major genus of beneficial gut bacteria involved in fiber fermentation and immune modulation',
    componentPath: './components/glossary/BacteroidesPage',
    componentName: 'BacteroidesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'betacarotene',
    title: 'Beta-Carotene',
    description: 'Orange plant pigment and provitamin A carotenoid with antioxidant properties',
    componentPath: './components/glossary/BetaCarotenePage',
    componentName: 'BetaCarotenePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'bifidobacterium',
    title: 'Bifidobacterium',
    description: 'Beneficial bacterial genus that inhabits the gut and supports digestive and immune health',
    componentPath: './components/glossary/BifidobacteriumPage',
    componentName: 'BifidobacteriumPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'calciumcarbonate',
    title: 'Calcium Carbonate',
    description: 'Common calcium supplement form with 40% elemental calcium, requires stomach acid for absorption',
    componentPath: './components/glossary/CalciumCarbonatePage',
    componentName: 'CalciumCarbonatePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'calciumcitrate',
    title: 'Calcium Citrate',
    description: 'Highly bioavailable calcium supplement form that can be taken with or without food',
    componentPath: './components/glossary/CalciumCitratePage',
    componentName: 'CalciumCitratePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'chylomicrons',
    title: 'Chylomicrons',
    description: 'Lipoprotein particles that transport dietary fats from intestines to tissues',
    componentPath: './components/glossary/ChylomicronsPage',
    componentName: 'ChylomicronsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'colonocytes',
    title: 'Colonocytes',
    description: 'Epithelial cells lining the colon that rely on butyrate for energy',
    componentPath: './components/glossary/ColonocytesPage',
    componentName: 'ColonocytesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'doms',
    title: 'DOMS (Delayed Onset Muscle Soreness)',
    abbreviation: 'DOMS',
    description: 'Muscle pain and stiffness occurring 12-72 hours after intense or unfamiliar exercise',
    componentPath: './components/glossary/DOMSPage',
    componentName: 'DOMSPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'deficiency',
    title: 'Deficiency',
    description: 'Insufficient nutrient levels in the body causing impaired function or clinical symptoms',
    componentPath: './components/glossary/DeficiencyPage',
    componentName: 'DeficiencyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'esr',
    title: 'ESR (Erythrocyte Sedimentation Rate)',
    abbreviation: 'ESR',
    description: 'Blood test measuring inflammation by how fast red blood cells settle',
    componentPath: './components/glossary/ESRPage',
    componentName: 'ESRPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: '8ohdg',
    title: '8-OHdG',
    abbreviation: '8-hydroxy-2\'-deoxyguanosine',
    description: 'Biomarker of oxidative DNA damage and oxidative stress',
    componentPath: './components/glossary/EightOHdGPage',
    componentName: 'EightOHdGPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'endothelium',
    title: 'Endothelium',
    description: 'Single-cell layer lining blood vessels that regulates vascular function and health',
    componentPath: './components/glossary/EndotheliumPage',
    componentName: 'EndotheliumPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'enterocytes',
    title: 'Enterocytes',
    description: 'Intestinal absorptive cells responsible for nutrient uptake from the gut lumen',
    componentPath: './components/glossary/EnterocytesPage',
    componentName: 'EnterocytesPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'fos',
    title: 'FOS (Fructooligosaccharides)',
    abbreviation: 'FOS',
    description: 'Short-chain prebiotic fibers that selectively feed beneficial gut bacteria',
    componentPath: './components/glossary/FOS_Page',
    componentName: 'FOS_Page',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'faecalibacterium',
    title: 'Faecalibacterium prausnitzii',
    description: 'Major butyrate-producing gut bacteria associated with anti-inflammatory effects',
    componentPath: './components/glossary/FaecalibacteriumPage',
    componentName: 'FaecalibacteriumPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'folicacid',
    title: 'Folic Acid',
    description: 'Synthetic form of vitamin B9 used in supplements and fortified foods',
    componentPath: './components/glossary/FolicAcidPage',
    componentName: 'FolicAcidPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'freeradicals',
    title: 'Free Radicals',
    description: 'Highly reactive molecules with unpaired electrons that can damage cells and DNA',
    componentPath: './components/glossary/FreeRadicalsPage',
    componentName: 'FreeRadicalsPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'glucagon',
    title: 'Glucagon',
    description: 'Pancreatic hormone that raises blood glucose by promoting glycogen breakdown and gluconeogenesis',
    componentPath: './components/glossary/GlucagonPage',
    componentName: 'GlucagonPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'halflife',
    title: 'Half-Life',
    description: 'Time required for half of a substance to be eliminated from the body',
    componentPath: './components/glossary/HalfLifePage',
    componentName: 'HalfLifePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hemeiron',
    title: 'Heme Iron',
    description: 'Highly bioavailable iron form found in animal foods, bound to hemoglobin or myoglobin',
    componentPath: './components/glossary/HemeIronPage',
    componentName: 'HemeIronPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'hepaticencephalopathy',
    title: 'Hepatic Encephalopathy',
    description: 'Brain dysfunction caused by severe liver disease and ammonia accumulation',
    componentPath: './components/glossary/HepaticEncephalopathyPage',
    componentName: 'HepaticEncephalopathyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'insulin',
    title: 'Insulin',
    description: 'Pancreatic hormone regulating blood glucose by promoting cellular glucose uptake',
    componentPath: './components/glossary/InsulinPage',
    componentName: 'InsulinPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'lactobacillus',
    title: 'Lactobacillus',
    description: 'Genus of beneficial lactic acid bacteria used widely in probiotics and fermented foods',
    componentPath: './components/glossary/LactobacillusPage',
    componentName: 'LactobacillusPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'lipidperoxidation',
    title: 'Lipid Peroxidation',
    description: 'Oxidative degradation of lipids causing cellular damage and producing reactive compounds',
    componentPath: './components/glossary/LipidPeroxidationPage',
    componentName: 'LipidPeroxidationPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'loadingphase',
    title: 'Loading Phase',
    description: 'Initial period of higher supplement doses to rapidly saturate body stores',
    componentPath: './components/glossary/LoadingPhasePage',
    componentName: 'LoadingPhasePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'lycopene',
    title: 'Lycopene',
    description: 'Red carotenoid pigment with antioxidant properties, abundant in tomatoes',
    componentPath: './components/glossary/LycopenePage',
    componentName: 'LycopenePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'magnesiumcitrate',
    title: 'Magnesium Citrate',
    description: 'Highly bioavailable magnesium supplement form with mild laxative effect',
    componentPath: './components/glossary/MagnesiumCitratePage',
    componentName: 'MagnesiumCitratePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'magnesiumoxide',
    title: 'Magnesium Oxide',
    description: 'Common but poorly absorbed magnesium supplement form, often used as laxative',
    componentPath: './components/glossary/MagnesiumOxidePage',
    componentName: 'MagnesiumOxidePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'maintenancedose',
    title: 'Maintenance Dose',
    description: 'Ongoing supplement dose to maintain optimal levels after loading phase',
    componentPath: './components/glossary/MaintenanceDosePage',
    componentName: 'MaintenanceDosePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'methylcobalamin',
    title: 'Methylcobalamin',
    description: 'Active form of vitamin B12 used in supplements, readily utilized by the body',
    componentPath: './components/glossary/MethylcobalaminPage',
    componentName: 'MethylcobalaminPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'methylfolate',
    title: 'Methylfolate',
    abbreviation: '5-MTHF',
    description: 'Active form of folate that bypasses MTHFR enzyme, superior to folic acid',
    componentPath: './components/glossary/MethylfolatePage',
    componentName: 'MethylfolatePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'nitricoxide',
    title: 'Nitric Oxide',
    abbreviation: 'NO',
    description: 'Signaling molecule that regulates blood vessel dilation and cardiovascular function',
    componentPath: './components/glossary/NitricOxidePage',
    componentName: 'NitricOxidePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'nonhemeiron',
    title: 'Non-Heme Iron',
    description: 'Plant-based iron form with lower bioavailability than heme iron',
    componentPath: './components/glossary/NonHemeIronPage',
    componentName: 'NonHemeIronPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'oxidativedamage',
    title: 'Oxidative Damage',
    description: 'Cellular and molecular damage caused by reactive oxygen species and free radicals',
    componentPath: './components/glossary/OxidativeDamagePage',
    componentName: 'OxidativeDamagePage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'oxidizedldl',
    title: 'Oxidized LDL',
    abbreviation: 'oxLDL',
    description: 'Modified LDL cholesterol that promotes atherosclerosis and cardiovascular disease',
    componentPath: './components/glossary/OxidizedLDLPage',
    componentName: 'OxidizedLDLPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'plasma',
    title: 'Plasma',
    description: 'Liquid component of blood containing water, proteins, nutrients, and waste products',
    componentPath: './components/glossary/PlasmaPage',
    componentName: 'PlasmaPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'satiety',
    title: 'Satiety',
    description: 'Feeling of fullness and satisfaction after eating that suppresses further food intake',
    componentPath: './components/glossary/SatietyPage',
    componentName: 'SatietyPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'saturation',
    title: 'Saturation',
    description: 'State where body stores of a nutrient are filled to capacity',
    componentPath: './components/glossary/SaturationPage',
    componentName: 'SaturationPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'serum25ohd',
    title: 'Serum 25(OH)D',
    abbreviation: '25-hydroxyvitamin D',
    description: 'Primary blood test for vitamin D status, reflecting total vitamin D stores',
    componentPath: './components/glossary/Serum25OHDPage',
    componentName: 'Serum25OHDPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'serum',
    title: 'Serum',
    description: 'Blood plasma without clotting factors, commonly used for laboratory testing',
    componentPath: './components/glossary/SerumPage',
    componentName: 'SerumPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'synergisticeffect',
    title: 'Synergistic Effect',
    description: 'Combined effect of substances that is greater than the sum of individual effects',
    componentPath: './components/glossary/SynergisticEffectPage',
    componentName: 'SynergisticEffectPage',
    showInNav: true,
    category: 'glossary'
  },
  {
    key: 'tolerableupperintakelevel',
    title: 'Tolerable Upper Intake Level',
    abbreviation: 'UL',
    description: 'Maximum daily nutrient intake unlikely to cause adverse health effects',
    componentPath: './components/glossary/TolerableUpperIntakeLevelPage',
    componentName: 'TolerableUpperIntakeLevelPage',
    showInNav: true,
    category: 'glossary'
  }
];

// Other page routes (non-knowledgebase)
export interface StaticRouteConfig {
  key: string;
  title: string;
  componentPath: string;
  componentName: string;
}

export const STATIC_ROUTES: StaticRouteConfig[] = [
  {
    key: 'about',
    title: 'About Us',
    componentPath: './components/AboutPage',
    componentName: 'AboutPage'
  },
  {
    key: 'contact',
    title: 'Contact',
    componentPath: './components/ContactPage',
    componentName: 'ContactPage'
  },
  {
    key: 'legal',
    title: 'Legal Disclaimer',
    componentPath: './components/LegalDisclaimerPage',
    componentName: 'LegalDisclaimerPage'
  },
  {
    key: 'privacy',
    title: 'Privacy Policy',
    componentPath: './components/PrivacyPolicyPage',
    componentName: 'PrivacyPolicyPage'
  },
  {
    key: 'terms',
    title: 'Terms of Service',
    componentPath: './components/TermsOfServicePage',
    componentName: 'TermsOfServicePage'
  },
  {
    key: 'cookies',
    title: 'Cookie Policy',
    componentPath: './components/CookiePolicyPage',
    componentName: 'CookiePolicyPage'
  },
  {
    key: 'impressum',
    title: 'Impressum',
    componentPath: './components/ImpressumPage',
    componentName: 'ImpressumPage'
  },
  {
    key: 'product-comparison',
    title: 'Product Comparison',
    componentPath: './components/ProductComparison',
    componentName: 'ProductComparison'
  },
  {
    key: 'knowledgebase',
    title: 'Knowledgebase',
    componentPath: './components/KnowledgebasePage',
    componentName: 'KnowledgebasePage'
  },
  {
    key: 'glossary',
    title: 'Glossary',
    componentPath: './components/GlossaryPage',
    componentName: 'GlossaryPage'
  },
  {
    key: 'methodology',
    title: 'Our Methodology',
    componentPath: './components/MethodologyPage',
    componentName: 'MethodologyPage'
  },
  {
    key: 'partner',
    title: 'Partner With Us',
    componentPath: './components/PartnerPage',
    componentName: 'PartnerPage'
  }
];

// Helper functions
export const getAllRoutes = () => [...KNOWLEDGEBASE_ROUTES, ...GLOSSARY_ROUTES, ...STATIC_ROUTES];

export const getNavRoutes = () => KNOWLEDGEBASE_ROUTES.filter(route => route.showInNav);

export const getRouteByKey = (key: string) => getAllRoutes().find(route => route.key === key);

export const getSearchableRoutes = () => [...KNOWLEDGEBASE_ROUTES, ...GLOSSARY_ROUTES];

// Type for all possible page keys
export type PageKey = 
  | 'landing' 
  | typeof KNOWLEDGEBASE_ROUTES[number]['key']
  | typeof GLOSSARY_ROUTES[number]['key']
  | typeof STATIC_ROUTES[number]['key'];
