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
  | "Protein Supplements"
  | "Vitamins"
  | "Minerals"
  | "Amino Acids"
  | "Probiotics"
  | "Omega-3 Fatty Acids"
  | "Phytochemicals"
  | "Enzymes"
  | "Others";

export interface RouteConfig {
  key: string;
  title: string;
  path?: string; // Added for routes that have explicit paths
  description: string;
  componentPath: string;
  componentName: string;
  showInNav: boolean;
  category?: "knowledgebase" | "glossary" | "comparison";
  subcategory?: SubcategoryType;
  abbreviation?: string;
  supplementId?: string; // For comparison pages
}

export const KNOWLEDGEBASE_ROUTES: RouteConfig[] = [
  // Knowledgebase Pages (Primary - shown in navigation)
  {
    key: "ashwagandha",
    title: "Ashwagandha",
    path: "/ashwagandha",
    description:
      "Enhanced meta-analysis review of ashwagandha with updated research data",
    componentPath:
      "./components/pages/supplements/AshwagandhaKnowledgebasePage",
    componentName: "AshwagandhaKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Phytochemicals",
  },
  {
    key: "calcium",
    title: "Calcium",
    path: "/calcium",
    description:
      "Enhanced meta-analysis review of calcium for bone health and cardiovascular effects",
    componentPath: "./components/pages/supplements/CalciumKnowledgebasePage",
    componentName: "CalciumKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Minerals",
  },
  {
    key: "collagenpeptides",
    title: "Collagen Peptides",
    path: "/collagen",
    description:
      "Enhanced meta-analysis review of collagen peptides for skin, joints, and connective tissue",
    componentPath: "./components/pages/supplements/CollagenKnowledgebasePage",
    componentName: "CollagenKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Protein Supplements",
  },
  {
    key: "creatine",
    title: "Creatine",
    path: "/creatine",
    description:
      "Enhanced meta-analysis review of creatine with updated research data",
    componentPath: "./components/pages/supplements/CreatineKnowledgebasePage",
    componentName: "CreatineKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Amino Acids",
  },
  {
    key: "iron",
    title: "Iron",
    path: "/iron",
    description:
      "Enhanced meta-analysis review of iron for anemia, heart failure, and chronic kidney disease",
    componentPath: "./components/pages/supplements/IronKnowledgebasePage",
    componentName: "IronKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Minerals",
  },
  {
    key: "magnesium",
    title: "Magnesium Glycinate",
    path: "/magnesium",
    description:
      "Enhanced meta-analysis review of magnesium glycinate for blood pressure, glucose, and inflammation",
    componentPath: "./components/pages/supplements/MagnesiumKnowledgebasePage",
    componentName: "MagnesiumKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Minerals",
  },
  {
    key: "omega3",
    title: "Omega-3",
    path: "/omega-3",
    description:
      "Enhanced meta-analysis review of omega-3 with updated research data",
    componentPath: "./components/pages/supplements/Omega3KnowledgebasePage",
    componentName: "Omega3KnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Omega-3 Fatty Acids",
  },
  {
    key: "prebiotics",
    title: "Prebiotics",
    path: "/prebiotics",
    description:
      "Enhanced meta-analysis review of prebiotics for gut health and metabolic effects",
    componentPath: "./components/pages/supplements/PrebioticsKnowledgebasePage",
    componentName: "PrebioticsKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Probiotics",
  },
  {
    key: "probiotics",
    title: "Probiotics",
    path: "/probiotics",
    description:
      "Enhanced meta-analysis review of probiotics for digestive and immune health",
    componentPath: "./components/pages/supplements/ProbioticsKnowledgebasePage",
    componentName: "ProbioticsKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Probiotics",
  },
  {
    key: "sulforaphane",
    title: "Sulforaphane",
    path: "/sulforaphane",
    description:
      "Enhanced meta-analysis review of sulforaphane with updated research data",
    componentPath:
      "./components/pages/supplements/SulforaphaneKnowledgebasePage",
    componentName: "SulforaphaneKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Phytochemicals",
  },
  {
    key: "vitaminc",
    title: "Vitamin C",
    path: "/vitamin-c",
    description:
      "Enhanced meta-analysis review of vitamin C with updated research data",
    componentPath: "./components/pages/supplements/VitaminCKnowledgebasePage",
    componentName: "VitaminCKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Vitamins",
  },
  {
    key: "vitamind",
    title: "Vitamin D",
    path: "/vitamin-d",
    description:
      "Enhanced meta-analysis review of vitamin D with updated research data",
    componentPath: "./components/pages/supplements/VitaminDKnowledgebasePage",
    componentName: "VitaminDKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Vitamins",
  },

  // V2 Pages (Primary - shown in navigation) - continued
  {
    key: "bcaas",
    title: "BCAAs",
    path: "/bcaa",
    description:
      "Enhanced meta-analysis review of branched-chain amino acids for muscle recovery and hepatic health",
    componentPath: "./components/pages/supplements/BcaaKnowledgebasePage",
    componentName: "BcaaKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Amino Acids",
  },

  // V2 Pages (Primary - shown in navigation) - continued
  {
    key: "curcumin",
    title: "Curcumin",
    path: "/curcumin",
    description:
      "Enhanced meta-analysis review of curcumin with anti-inflammatory and metabolic effects",
    componentPath: "./components/pages/supplements/CurcuminKnowledgebasePage",
    componentName: "CurcuminKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Phytochemicals",
  },
  {
    key: "multivitamin",
    title: "Multivitamin",
    path: "/multivitamin",
    description:
      "Enhanced meta-analysis review of multivitamins with population-specific efficacy and safety data",
    componentPath:
      "./components/pages/supplements/MultivitaminKnowledgebasePage",
    componentName: "MultivitaminKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Vitamins",
  },
  {
    key: "wheyprotein",
    title: "Whey Protein",
    path: "/whey-protein",
    description:
      "Enhanced meta-analysis review of whey protein for body composition, metabolic health, and athletic performance",
    componentPath:
      "./components/pages/supplements/WheyProteinKnowledgebasePage",
    componentName: "WheyProteinKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Protein Supplements",
  },
  {
    key: "caseinprotein",
    title: "Casein Protein",
    path: "/casein-protein",
    description:
      "Enhanced meta-analysis review of casein protein for blood pressure, muscle mass, and inflammatory outcomes",
    componentPath:
      "./components/pages/supplements/CaseinProteinKnowledgebasePage",
    componentName: "CaseinProteinKnowledgebasePage",
    showInNav: true,
    category: "knowledgebase",
    subcategory: "Protein Supplements",
  },

  {
    key: "ashwagandha-comparison",
    title: "Ashwagandha Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Ashwagandha supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "AshwagandhaComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "calcium-comparison",
    title: "Calcium Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Calcium supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "CalciumComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "collagen-comparison",
    title: "Collagen Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Collagen supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "CollagenComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "creatine-comparison",
    title: "Creatine Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Creatine supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "CreatineComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "iron-comparison",
    title: "Iron Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Iron supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "IronComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "magnesium-comparison",
    title: "Magnesium Glycinate Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Magnesium Glycinate supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "MagnesiumComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "omega-3-comparison",
    title: "Omega-3 Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Omega-3 supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "Omega3Comparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "prebiotics-comparison",
    title: "Prebiotics Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Prebiotics supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "PrebioticsComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "probiotics-comparison",
    title: "Probiotics Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Probiotics supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "ProbioticsComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "vitamin-c-comparison",
    title: "Vitamin C Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Vitamin C supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "VitaminCComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "vitamin-d-comparison",
    title: "Vitamin D Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Vitamin D supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "VitaminDComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "bcaa-comparison",
    title: "BCAA Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for BCAA supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "BCAAsComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "curcumin-comparison",
    title: "Curcumin Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Curcumin supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "CurcuminComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "multivitamin-comparison",
    title: "Multivitamin Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Multivitamin supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "MultivitaminComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "whey-protein-comparison",
    title: "Whey Protein Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Whey Protein supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "WheyProteinComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "casein-protein-comparison",
    title: "Casein Protein Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Casein Protein supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "CaseinProteinComparison",
    showInNav: false,
    category: "comparison",
  },
  {
    key: "sulforaphane-comparison",
    title: "Sulforaphane Price Comparison | Best Supplement Deals",
    description:
      "Compare prices for Sulforaphane supplements across top retailers. Find the best deals, certifications, and quality products.",
    componentPath: "./components/pages/comparisons",
    componentName: "SulforaphaneComparison",
    showInNav: false,
    category: "comparison",
  },
];

// Glossary routes
export const GLOSSARY_ROUTES: RouteConfig[] = [
  {
    key: "rct",
    title: "Randomized Controlled Trial",
    abbreviation: "RCT",
    description:
      "A type of scientific experiment that randomly assigns participants to different groups to test effectiveness",
    componentPath: "./components/pages/glossary/RCTPage",
    componentName: "RCTPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "metaanalysis",
    title: "Meta-Analysis",
    description:
      "A statistical method that combines results from multiple studies to identify overall effects",
    componentPath: "./components/pages/glossary/MetaAnalysisPage",
    componentName: "MetaAnalysisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "empiricalevidence",
    title: "Empirical Evidence",
    description:
      "Evidence obtained through observation, experimentation, or direct experience",
    componentPath: "./components/pages/glossary/EmpiricalEvidencePage",
    componentName: "EmpiricalEvidencePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "anecdotalevidence",
    title: "Anecdotal Evidence",
    description:
      "Information based on personal accounts rather than systematic scientific research",
    componentPath: "./components/pages/glossary/AnecdotalEvidencePage",
    componentName: "AnecdotalEvidencePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "placebo",
    title: "Placebo",
    description:
      "An inactive substance given to a control group to compare against the active intervention",
    componentPath: "./components/pages/glossary/PlaceboPage",
    componentName: "PlaceboPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "peerreviewed",
    title: "Peer-reviewed",
    description:
      "Scientific research evaluated and approved by independent experts before publication",
    componentPath: "./components/pages/glossary/PeerReviewedPage",
    componentName: "PeerReviewedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "statisticalsignificance",
    title: "Statistical Significance",
    description:
      "A measure indicating that a finding is unlikely to have occurred by chance alone",
    componentPath: "./components/pages/glossary/StatisticalSignificancePage",
    componentName: "StatisticalSignificancePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "clinicalsignificance",
    title: "Clinical Significance",
    description:
      "The practical importance of a treatment effect in real-world health outcomes",
    componentPath: "./components/pages/glossary/ClinicalSignificancePage",
    componentName: "ClinicalSignificancePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "subgroupanalysis",
    title: "Subgroup Analysis",
    description:
      "Examination of treatment effects within specific subsets of a study population",
    componentPath: "./components/pages/glossary/SubgroupAnalysisPage",
    componentName: "SubgroupAnalysisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "efficacy",
    title: "Efficacy",
    description:
      "The ability of a treatment to produce the desired effect under ideal conditions",
    componentPath: "./components/pages/glossary/EfficacyPage",
    componentName: "EfficacyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "singleblinded",
    title: "Single Blinded",
    description:
      "A study where participants don't know their group assignment but researchers do",
    componentPath: "./components/pages/glossary/SingleBlindedPage",
    componentName: "SingleBlindedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "doubleblinded",
    title: "Double Blinded",
    description:
      "A study where neither participants nor researchers know group assignments",
    componentPath: "./components/pages/glossary/DoubleBlindedPage",
    componentName: "DoubleBlindedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bioavailability",
    title: "Bioavailability",
    description:
      "The proportion of a nutrient that enters the bloodstream and becomes available for use",
    componentPath: "./components/pages/glossary/BioavailabilityPage",
    componentName: "BioavailabilityPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "inflammation",
    title: "Inflammation",
    description:
      "The body's natural immune response to injury, infection, or harmful stimuli",
    componentPath: "./components/pages/glossary/InflammationPage",
    componentName: "InflammationPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "oxidativestress",
    title: "Oxidative Stress",
    description:
      "An imbalance between free radicals and antioxidants leading to cellular damage",
    componentPath: "./components/pages/glossary/OxidativeStressPage",
    componentName: "OxidativeStressPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "antioxidant",
    title: "Antioxidant",
    description:
      "A molecule that neutralizes free radicals and protects cells from oxidative damage",
    componentPath: "./components/pages/glossary/AntioxidantPage",
    componentName: "AntioxidantPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "insulinresistance",
    title: "Insulin Resistance",
    description:
      "A condition where cells don't respond effectively to insulin signaling",
    componentPath: "./components/pages/glossary/InsulinResistancePage",
    componentName: "InsulinResistancePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "biomarker",
    title: "Biomarker",
    description:
      "A measurable biological indicator of health status or disease processes",
    componentPath: "./components/pages/glossary/BiomarkerPage",
    componentName: "BiomarkerPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "absorption",
    title: "Absorption",
    description:
      "The process by which nutrients pass from the gut into the bloodstream",
    componentPath: "./components/pages/glossary/AbsorptionPage",
    componentName: "AbsorptionPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "metabolism",
    title: "Metabolism",
    description:
      "The sum of chemical reactions that convert nutrients into energy and building blocks",
    componentPath: "./components/pages/glossary/MetabolismPage",
    componentName: "MetabolismPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "cardiovascular",
    title: "Cardiovascular",
    description:
      "Relating to the heart and blood vessels - the circulatory system",
    componentPath: "./components/pages/glossary/CardiovascularPage",
    componentName: "CardiovascularPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "dosedependent",
    title: "Dose-Dependent",
    description:
      "A relationship where effect magnitude changes with the amount administered",
    componentPath: "./components/pages/glossary/DoseDependentPage",
    componentName: "DoseDependentPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "homocysteine",
    title: "Homocysteine",
    description:
      "An amino acid associated with cardiovascular disease risk when elevated",
    componentPath: "./components/pages/glossary/HomocysteinePage",
    componentName: "HomocysteinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bonedensity",
    title: "Bone Density",
    abbreviation: "BMD",
    description:
      "Measurement of minerals in bone used to assess strength and fracture risk",
    componentPath: "./components/pages/glossary/BoneDensityPage",
    componentName: "BoneDensityPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glycemiccontrol",
    title: "Glycemic Control",
    description: "Regulation of blood glucose levels within a healthy range",
    componentPath: "./components/pages/glossary/GlycemicControlPage",
    componentName: "GlycemicControlPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "cognitivefunction",
    title: "Cognitive Function",
    description:
      "Mental processes including memory, attention, reasoning, and problem-solving",
    componentPath: "./components/pages/glossary/CognitiveFunction",
    componentName: "CognitiveFunction",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "anemia",
    title: "Anemia",
    description:
      "Insufficient red blood cells or hemoglobin causing reduced oxygen capacity",
    componentPath: "./components/pages/glossary/AnemiaPage",
    componentName: "AnemiaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "triglycerides",
    title: "Triglycerides",
    description: "Type of fat in blood that serves as energy storage",
    componentPath: "./components/pages/glossary/TriglyceridesPage",
    componentName: "TriglyceridesPage",
    showInNav: true,
    category: "glossary",
  },

  {
    key: "cortisol",
    title: "Cortisol",
    description: "Stress hormone regulating metabolism and immune function",
    componentPath: "./components/pages/glossary/CortisolPage",
    componentName: "CortisolPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "thyroidfunction",
    title: "Thyroid Function",
    description: "Activity of the thyroid gland in regulating metabolism",
    componentPath: "./components/pages/glossary/ThyroidFunctionPage",
    componentName: "ThyroidFunctionPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "gutmicrobiome",
    title: "Gut Microbiome",
    description: "Community of microorganisms living in the digestive tract",
    componentPath: "./components/pages/glossary/GutMicrobiomePage",
    componentName: "GutMicrobiomePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "immunesystem",
    title: "Immune System",
    description:
      "Body defense network protecting against pathogens and disease",
    componentPath: "./components/pages/glossary/ImmuneSystemPage",
    componentName: "ImmuneSystemPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "muscleproteinsynthesis",
    title: "Muscle Protein Synthesis",
    abbreviation: "MPS",
    description: "Process of building muscle protein from amino acids",
    componentPath: "./components/pages/glossary/MuscleProteinSynthesisPage",
    componentName: "MuscleProteinSynthesisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "neurotransmitter",
    title: "Neurotransmitter",
    description: "Chemical messengers transmitting signals between neurons",
    componentPath: "./components/pages/glossary/NeurotransmitterPage",
    componentName: "NeurotransmitterPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "electrolytes",
    title: "Electrolytes",
    description:
      "Minerals carrying electrical charge essential for cellular function",
    componentPath: "./components/pages/glossary/ElectrolytesPage",
    componentName: "ElectrolytesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "jointhealth",
    title: "Joint Health",
    description: "Structural integrity and functional capacity of joints",
    componentPath: "./components/pages/glossary/JointHealthPage",
    componentName: "JointHealthPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "sleepquality",
    title: "Sleep Quality",
    description: "Assessment of sleep duration, efficiency, and restfulness",
    componentPath: "./components/pages/glossary/SleepQualityPage",
    componentName: "SleepQualityPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "mitochondria",
    title: "Mitochondria",
    description: "Cell organelles generating energy through ATP production",
    componentPath: "./components/pages/glossary/MitochondriaPage",
    componentName: "MitochondriaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "protein",
    title: "Protein",
    description:
      "Macronutrient composed of amino acids essential for tissue building",
    componentPath: "./components/pages/glossary/ProteinPage",
    componentName: "ProteinPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "vitamindeficiency",
    title: "Vitamin Deficiency",
    description: "Insufficient vitamin levels causing various health problems",
    componentPath: "./components/pages/glossary/VitaminDeficiencyPage",
    componentName: "VitaminDeficiencyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "adaptogen",
    title: "Adaptogen",
    description: "Natural substance helping the body adapt to stress",
    componentPath: "./components/pages/glossary/AdaptogenPage",
    componentName: "AdaptogenPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "smd",
    title: "Standardized Mean Difference",
    abbreviation: "SMD",
    description: "Statistical measure of effect size used in meta-analyses",
    componentPath: "./components/pages/glossary/SMDPage",
    componentName: "SMDPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "grade",
    title: "GRADE",
    description:
      "Grading of Recommendations Assessment, Development and Evaluation - a systematic approach for rating evidence quality",
    componentPath: "./components/pages/glossary/GRADEPage",
    componentName: "GRADEPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "epa",
    title: "EPA",
    description:
      "Eicosapentaenoic acid - a long-chain omega-3 fatty acid with anti-inflammatory properties",
    componentPath: "./components/pages/glossary/EPAPage",
    componentName: "EPAPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "dha",
    title: "DHA",
    description:
      "Docosahexaenoic acid - an omega-3 fatty acid essential for brain and eye health",
    componentPath: "./components/pages/glossary/DHAPage",
    componentName: "DHAPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bloodglucose",
    title: "Blood Glucose",
    description:
      "The amount of glucose (sugar) present in the blood, the body's primary energy source",
    componentPath: "./components/pages/glossary/BloodGlucosePage",
    componentName: "BloodGlucosePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bloodpressure",
    title: "Blood Pressure",
    description:
      "The force of blood pushing against artery walls, measured as systolic over diastolic",
    componentPath: "./components/pages/glossary/BloodPressurePage",
    componentName: "BloodPressurePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "proteinsynthesis",
    title: "Protein Synthesis",
    description:
      "The biological process of building new proteins from amino acids",
    componentPath: "./components/pages/glossary/ProteinSynthesisPage",
    componentName: "ProteinSynthesisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glucosemetabolism",
    title: "Glucose Metabolism",
    description:
      "All biochemical processes involved in the formation, breakdown, and regulation of glucose",
    componentPath: "./components/pages/glossary/GlucoseMetabolismPage",
    componentName: "GlucoseMetabolismPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "systolic",
    title: "Systolic Blood Pressure",
    description:
      "The top number in blood pressure readings, measuring peak arterial pressure when the heart contracts",
    componentPath: "./components/pages/glossary/SystolicPage",
    componentName: "SystolicPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "diastolic",
    title: "Diastolic Blood Pressure",
    description:
      "The bottom number in blood pressure readings, measuring minimum arterial pressure when the heart rests",
    componentPath: "./components/pages/glossary/DiastolicPage",
    componentName: "DiastolicPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "normotensive",
    title: "Normotensive",
    description: "Having normal blood pressure levels without medication",
    componentPath: "./components/pages/glossary/NormotensivePage",
    componentName: "NormotensivePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hypertensive",
    title: "Hypertensive",
    description:
      "Having high blood pressure (hypertension) above normal ranges",
    componentPath: "./components/pages/glossary/HypertensivePage",
    componentName: "HypertensivePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "macromineral",
    title: "Macromineral",
    description:
      "Essential minerals required in amounts greater than 100 mg per day",
    componentPath: "./components/pages/glossary/MacromineralPage",
    componentName: "MacromineralPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "mineral",
    title: "Mineral",
    description:
      "Inorganic chemical elements essential for various physiological functions",
    componentPath: "./components/pages/glossary/MineralPage",
    componentName: "MineralPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "pms",
    title: "PMS (Premenstrual Syndrome)",
    description:
      "Physical, emotional, and behavioral symptoms occurring before menstruation",
    componentPath: "./components/pages/glossary/PMSPage",
    componentName: "PMSPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "preeclampsia",
    title: "Pre-eclampsia",
    description:
      "Serious pregnancy complication with high blood pressure and organ damage",
    componentPath: "./components/pages/glossary/PreeclampsiaPage",
    componentName: "PreeclampsiaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "osteoporosis",
    title: "Osteoporosis",
    description:
      "Systemic skeletal disease with low bone mass and increased fracture risk",
    componentPath: "./components/pages/glossary/OsteoporosisPage",
    componentName: "OsteoporosisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hydrolyzed",
    title: "Hydrolyzed",
    description:
      "Proteins broken down into smaller peptides through hydrolysis for easier absorption",
    componentPath: "./components/pages/glossary/HydrolyzedPage",
    componentName: "HydrolyzedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glycine",
    title: "Glycine",
    description:
      "Simplest amino acid, major component of collagen and inhibitory neurotransmitter",
    componentPath: "./components/pages/glossary/GlycinePage",
    componentName: "GlycinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "proline",
    title: "Proline",
    description:
      "Amino acid with unique cyclic structure critical for collagen stability",
    componentPath: "./components/pages/glossary/ProlinePage",
    componentName: "ProlinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hydroxyproline",
    title: "Hydroxyproline",
    description:
      "Modified amino acid found almost exclusively in collagen, essential for stability",
    componentPath: "./components/pages/glossary/HydroxyprolinePage",
    componentName: "HydroxyprolinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "atp",
    title: "ATP (Adenosine Triphosphate)",
    description:
      "Primary energy currency of cells, storing and transferring chemical energy",
    componentPath: "./components/pages/glossary/ATPPage",
    componentName: "ATPPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "pedro",
    title: "PEDro Scale",
    description:
      "Quality assessment tool rating methodological quality of RCTs in physiotherapy",
    componentPath: "./components/pages/glossary/PEDroPage",
    componentName: "PEDroPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hemoglobin",
    title: "Hemoglobin",
    description:
      "Iron-containing protein in red blood cells that transports oxygen",
    componentPath: "./components/pages/glossary/HemoglobinPage",
    componentName: "HemoglobinPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "myoglobin",
    title: "Myoglobin",
    description:
      "Oxygen-binding protein in muscle tissue that stores oxygen for energy production",
    componentPath: "./components/pages/glossary/MyoglobinPage",
    componentName: "MyoglobinPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "rr",
    title: "Risk Ratio",
    abbreviation: "RR",
    description:
      "Measure of relative risk comparing the probability of an event in treatment vs. control groups",
    componentPath: "./components/pages/glossary/RRPage",
    componentName: "RRPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "or",
    title: "Odds Ratio",
    abbreviation: "OR",
    description:
      "Statistical measure comparing odds of an outcome in treatment vs. control groups",
    componentPath: "./components/pages/glossary/ORPage",
    componentName: "ORPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "fmd",
    title: "Flow-Mediated Dilation",
    abbreviation: "FMD",
    description:
      "Non-invasive ultrasound measurement of endothelial function and cardiovascular health",
    componentPath: "./components/pages/glossary/FMDPage",
    componentName: "FMDPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "wmd",
    title: "Weighted Mean Difference",
    abbreviation: "WMD",
    description:
      "Statistical measure pooling results from studies using the same measurement scale",
    componentPath: "./components/pages/glossary/WMDPage",
    componentName: "WMDPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "il6",
    title: "Interleukin-6",
    abbreviation: "IL-6",
    description:
      "Pro-inflammatory cytokine serving as a biomarker of systemic inflammation",
    componentPath: "./components/pages/glossary/IL6Page",
    componentName: "IL6Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "tac",
    title: "Total Antioxidant Capacity",
    abbreviation: "TAC",
    description: "Measurement of overall antioxidant power in blood or tissue",
    componentPath: "./components/pages/glossary/TACPage",
    componentName: "TACPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "fibrinogen",
    title: "Fibrinogen",
    description:
      "Plasma protein essential for blood clotting and biomarker of inflammation",
    componentPath: "./components/pages/glossary/FibrinogenPage",
    componentName: "FibrinogenPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "il1",
    title: "Interleukin-1",
    abbreviation: "IL-1",
    description:
      "Pro-inflammatory cytokine initiating and amplifying inflammatory responses",
    componentPath: "./components/pages/glossary/IL1Page",
    componentName: "IL1Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "tnfalpha",
    title: "Tumor Necrosis Factor-Alpha",
    abbreviation: "TNF-α",
    description:
      "Potent pro-inflammatory cytokine regulating immune responses and inflammation",
    componentPath: "./components/pages/glossary/TNFAlphaPage",
    componentName: "TNFAlphaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "mda",
    title: "Malondialdehyde",
    abbreviation: "MDA",
    description: "Biomarker of oxidative stress and lipid peroxidation",
    componentPath: "./components/pages/glossary/MDAPage",
    componentName: "MDAPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glutathione",
    title: "Glutathione",
    abbreviation: "GSH",
    description:
      "Master antioxidant protecting against oxidative stress and supporting detoxification",
    componentPath: "./components/pages/glossary/GlutathionePage",
    componentName: "GlutathionePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "fodmap",
    title: "FODMAP",
    abbreviation:
      "Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols",
    description:
      "Short-chain carbohydrates poorly absorbed in small intestine, causing digestive symptoms in sensitive individuals",
    componentPath: "./components/pages/glossary/FODMAPPage",
    componentName: "FODMAPPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ibs",
    title: "Irritable Bowel Syndrome",
    abbreviation: "IBS",
    description:
      "Chronic functional gastrointestinal disorder with recurrent abdominal pain and altered bowel habits",
    componentPath: "./components/pages/glossary/IBSPage",
    componentName: "IBSPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "sibo",
    title: "Small Intestinal Bacterial Overgrowth",
    abbreviation: "SIBO",
    description:
      "Excessive bacterial colonization of small intestine causing malabsorption and gastrointestinal symptoms",
    componentPath: "./components/pages/glossary/SIBOPage",
    componentName: "SIBOPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "gos",
    title: "Galacto-oligosaccharides",
    abbreviation: "GOS",
    description:
      "Prebiotic fibers selectively stimulating beneficial gut bacteria, particularly Bifidobacteria",
    componentPath: "./components/pages/glossary/GOSPage",
    componentName: "GOSPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "inulintypefructans",
    title: "Inulin-type Fructans",
    description:
      "Prebiotic fibers including inulin and FOS that promote beneficial gut bacteria growth",
    componentPath: "./components/pages/glossary/InulinTypeFructansPage",
    componentName: "InulinTypeFructansPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glp1",
    title: "Glucagon-Like Peptide-1",
    abbreviation: "GLP-1",
    description:
      "Incretin hormone regulating insulin secretion, gastric emptying, and appetite",
    componentPath: "./components/pages/glossary/GLP1Page",
    componentName: "GLP1Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "pyy",
    title: "Peptide YY",
    abbreviation: "PYY",
    description: "Satiety hormone that reduces appetite and food consumption",
    componentPath: "./components/pages/glossary/PYYPage",
    componentName: "PYYPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "arr",
    title: "Absolute Risk Reduction",
    abbreviation: "ARR",
    description:
      "Absolute difference in event rates between treatment and control groups",
    componentPath: "./components/pages/glossary/ARRPage",
    componentName: "ARRPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ci",
    title: "Confidence Interval",
    abbreviation: "CI",
    description:
      "Range of values likely to contain the true effect size with specified confidence",
    componentPath: "./components/pages/glossary/CIPage",
    componentName: "CIPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hba1c",
    title: "HbA1c (Hemoglobin A1c)",
    abbreviation: "HbA1c",
    description:
      "Blood test measuring average blood glucose levels over the past 2-3 months",
    componentPath: "./components/pages/glossary/HbA1cPage",
    componentName: "HbA1cPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "crp",
    title: "CRP (C-Reactive Protein)",
    abbreviation: "CRP",
    description:
      "Inflammatory biomarker produced by the liver in response to inflammation",
    componentPath: "./components/pages/glossary/CRPPage",
    componentName: "CRPPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ldlcholesterol",
    title: "LDL Cholesterol",
    abbreviation: "LDL",
    description:
      "Low-density lipoprotein cholesterol, the primary contributor to arterial plaque buildup",
    componentPath: "./components/pages/glossary/LDLCholesterolPage",
    componentName: "LDLCholesterolPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hdlcholesterol",
    title: "HDL Cholesterol",
    abbreviation: "HDL",
    description:
      "High-density lipoprotein cholesterol, protective against cardiovascular disease",
    componentPath: "./components/pages/glossary/HDLCholesterolPage",
    componentName: "HDLCholesterolPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "scfa",
    title: "SCFA (Short-Chain Fatty Acids)",
    abbreviation: "SCFA",
    description:
      "Fatty acids produced by gut bacteria fermenting dietary fiber",
    componentPath: "./components/pages/glossary/SCFAPage",
    componentName: "SCFAPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "standardizedextract",
    title: "Standardized Extract",
    description:
      "Botanical extract processed to contain guaranteed concentration of active compounds",
    componentPath: "./components/pages/glossary/StandardizedExtractPage",
    componentName: "StandardizedExtractPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "thirdpartytesting",
    title: "Third-Party Testing",
    description:
      "Independent laboratory verification of supplement quality, purity, and potency",
    componentPath: "./components/pages/glossary/ThirdPartyTestingPage",
    componentName: "ThirdPartyTestingPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "chelated",
    title: "Chelated Minerals",
    description:
      "Minerals bound to organic molecules to enhance absorption and bioavailability",
    componentPath: "./components/pages/glossary/ChelatedPage",
    componentName: "ChelatedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "micronized",
    title: "Micronized",
    description:
      "Process reducing particles to microscopic size to improve dissolution and absorption",
    componentPath: "./components/pages/glossary/MicronizedPage",
    componentName: "MicronizedPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "therapeuticdose",
    title: "Therapeutic Dose",
    description:
      "Amount of supplement that produces desired beneficial effect while remaining safe",
    componentPath: "./components/pages/glossary/TherapeuticDosePage",
    componentName: "TherapeuticDosePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "adverseeffects",
    title: "Adverse Effects",
    description:
      "Unintended harmful or unpleasant responses to supplements ranging from mild to severe",
    componentPath: "./components/pages/glossary/AdverseEffectsPage",
    componentName: "AdverseEffectsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "contraindications",
    title: "Contraindications",
    description:
      "Specific situations or conditions where a supplement should not be used",
    componentPath: "./components/pages/glossary/ContraindicationsPage",
    componentName: "ContraindicationsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "druginteractions",
    title: "Drug Interactions",
    description:
      "How supplements affect medication effectiveness or create new health risks",
    componentPath: "./components/pages/glossary/DrugInteractionsPage",
    componentName: "DrugInteractionsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "sublingual",
    title: "Sublingual Administration",
    description:
      "Placing supplement under tongue for direct absorption into bloodstream",
    componentPath: "./components/pages/glossary/SublingualPage",
    componentName: "SublingualPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "polyphenols",
    title: "Polyphenols",
    description:
      "Plant compounds with antioxidant and anti-inflammatory properties",
    componentPath: "./components/pages/glossary/PolyphenolsPage",
    componentName: "PolyphenolsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "flavonoids",
    title: "Flavonoids",
    description:
      "Largest class of polyphenols with diverse antioxidant and anti-inflammatory effects",
    componentPath: "./components/pages/glossary/FlavonoidsPage",
    componentName: "FlavonoidsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "carotenoids",
    title: "Carotenoids",
    description:
      "Fat-soluble pigments with antioxidant properties; some convert to vitamin A",
    componentPath: "./components/pages/glossary/CarotenoidsPage",
    componentName: "CarotenoidsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "catalase",
    title: "Catalase",
    description:
      "Antioxidant enzyme breaking down hydrogen peroxide to protect cells",
    componentPath: "./components/pages/glossary/CatalasePage",
    componentName: "CatalasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glutathioneperoxidase",
    title: "Glutathione Peroxidase (GPx)",
    abbreviation: "GPx",
    description:
      "Selenium-dependent antioxidant enzyme reducing hydrogen peroxide and lipid peroxides",
    componentPath: "./components/pages/glossary/GlutathionePeroxidasePage",
    componentName: "GlutathionePeroxidasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "coenzymeq10",
    title: "Coenzyme Q10 (CoQ10)",
    abbreviation: "CoQ10",
    description:
      "Compound critical for mitochondrial energy production and antioxidant protection",
    componentPath: "./components/pages/glossary/CoenzymeQ10Page",
    componentName: "CoenzymeQ10Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "resveratrol",
    title: "Resveratrol",
    description:
      "Polyphenolic compound from grapes and red wine studied for anti-aging benefits",
    componentPath: "./components/pages/glossary/ResveratrolPage",
    componentName: "ResveratrolPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "mtor",
    title: "mTOR (Mechanistic Target of Rapamycin)",
    abbreviation: "mTOR",
    description:
      "Protein kinase regulating cell growth, metabolism, and protein synthesis",
    componentPath: "./components/pages/glossary/mTORPage",
    componentName: "mTORPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "effectsize",
    title: "Effect Size",
    description:
      "Quantitative measure of treatment magnitude, independent of sample size",
    componentPath: "./components/pages/glossary/EffectSizePage",
    componentName: "EffectSizePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hedgesg",
    title: "Hedges' g",
    description:
      "Standardized effect size measure with correction for small sample bias",
    componentPath: "./components/pages/glossary/HedgesgPage",
    componentName: "HedgesgPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "superoxidedismutase",
    title: "Superoxide Dismutase",
    abbreviation: "SOD",
    description:
      "Family of antioxidant enzymes that neutralize superoxide radicals",
    componentPath: "./components/pages/glossary/SuperoxideDismutasePage",
    componentName: "SuperoxideDismutasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "cytokines",
    title: "Cytokines",
    description:
      "Signaling proteins that mediate and regulate immune responses and inflammation",
    componentPath: "./components/pages/glossary/CytokinesPage",
    componentName: "CytokinesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "metabolicsyndrome",
    title: "Metabolic Syndrome",
    description:
      "Cluster of conditions increasing risk of heart disease, diabetes, and stroke",
    componentPath: "./components/pages/glossary/MetabolicSyndromePage",
    componentName: "MetabolicSyndromePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "atherosclerosis",
    title: "Atherosclerosis",
    description:
      "Arterial plaque buildup leading to narrowed and hardened arteries",
    componentPath: "./components/pages/glossary/AtherosclerosisPage",
    componentName: "AtherosclerosisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "rheumatoidarthritis",
    title: "Rheumatoid Arthritis",
    abbreviation: "RA",
    description:
      "Autoimmune disease causing chronic joint inflammation and systemic effects",
    componentPath: "./components/pages/glossary/RheumatoidArthritisPage",
    componentName: "RheumatoidArthritisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "inflammatoryboweldisease",
    title: "Inflammatory Bowel Disease",
    abbreviation: "IBD",
    description:
      "Chronic inflammatory GI conditions including Crohn's disease and ulcerative colitis",
    componentPath: "./components/pages/glossary/InflammatoryBowelDiseasePage",
    componentName: "InflammatoryBowelDiseasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "dysbiosis",
    title: "Dysbiosis",
    description:
      "Imbalance in gut microbiome composition reducing beneficial bacteria",
    componentPath: "./components/pages/glossary/DysbiosisPage",
    componentName: "DysbiosisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ala",
    title: "ALA (Alpha-Linolenic Acid)",
    abbreviation: "ALA",
    description:
      "Plant-based omega-3 fatty acid that converts poorly to EPA and DHA",
    componentPath: "./components/pages/glossary/ALAPage",
    componentName: "ALAPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "butyrate",
    title: "Butyrate",
    description:
      "Short-chain fatty acid produced by gut bacteria, critical for colonocyte health",
    componentPath: "./components/pages/glossary/ButyratePage",
    componentName: "ButyratePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "propionate",
    title: "Propionate",
    description:
      "Short-chain fatty acid produced by gut bacteria with metabolic effects",
    componentPath: "./components/pages/glossary/PropionatePage",
    componentName: "PropionatePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "acetate",
    title: "Acetate",
    description:
      "Most abundant short-chain fatty acid produced by gut bacteria",
    componentPath: "./components/pages/glossary/AcetatePage",
    componentName: "AcetatePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "leucine",
    title: "Leucine",
    description:
      "Essential branched-chain amino acid, primary driver of muscle protein synthesis",
    componentPath: "./components/pages/glossary/LeucinePage",
    componentName: "LeucinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "isoleucine",
    title: "Isoleucine",
    description:
      "Essential branched-chain amino acid important for muscle metabolism and immune function",
    componentPath: "./components/pages/glossary/IsoleucinePage",
    componentName: "IsoleucinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "valine",
    title: "Valine",
    description:
      "Essential branched-chain amino acid supporting muscle growth and energy",
    componentPath: "./components/pages/glossary/ValinePage",
    componentName: "ValinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "creatinekinase",
    title: "Creatine Kinase",
    abbreviation: "CK",
    description: "Enzyme and biomarker of muscle damage",
    componentPath: "./components/pages/glossary/CreatineKinasePage",
    componentName: "CreatineKinasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "phosphocreatine",
    title: "Phosphocreatine",
    description:
      "High-energy phosphate compound critical for ATP regeneration in muscles",
    componentPath: "./components/pages/glossary/PhosphocreatinePage",
    componentName: "PhosphocreatinePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "eicosanoids",
    title: "Eicosanoids",
    description:
      "Signaling molecules derived from omega-3 and omega-6 fatty acids",
    componentPath: "./components/pages/glossary/EicosanoidsPage",
    componentName: "EicosanoidsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "resolvins",
    title: "Resolvins",
    description: "Anti-inflammatory compounds derived from omega-3 fatty acids",
    componentPath: "./components/pages/glossary/ResolvinsPage",
    componentName: "ResolvinsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "phytates",
    title: "Phytates",
    description: "Plant compounds that can inhibit mineral absorption",
    componentPath: "./components/pages/glossary/PhytatesPage",
    componentName: "PhytatesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "oxalates",
    title: "Oxalates",
    description:
      "Plant compounds affecting mineral absorption and kidney stone risk",
    componentPath: "./components/pages/glossary/OxalatesPage",
    componentName: "OxalatesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "aminoacids",
    title: "Amino Acids",
    description:
      "Building blocks of proteins essential for tissue growth and repair",
    componentPath: "./components/pages/glossary/AminoAcidsPage",
    componentName: "AminoAcidsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "essentialaminoacids",
    title: "Essential Amino Acids",
    abbreviation: "EAAs",
    description: "Nine amino acids that must be obtained from diet",
    componentPath: "./components/pages/glossary/EssentialAminoAcidsPage",
    componentName: "EssentialAminoAcidsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bmi",
    title: "BMI (Body Mass Index)",
    abbreviation: "BMI",
    description: "Weight-to-height ratio used to categorize body weight status",
    componentPath: "./components/pages/glossary/BMIPage",
    componentName: "BMIPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "observationalstudy",
    title: "Observational Study",
    description:
      "Research where investigators observe outcomes without assigning interventions",
    componentPath: "./components/pages/glossary/ObservationalStudyPage",
    componentName: "ObservationalStudyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "cohortstudy",
    title: "Cohort Study",
    description:
      "Observational study following groups over time to assess exposure-outcome relationships",
    componentPath: "./components/pages/glossary/CohortStudyPage",
    componentName: "CohortStudyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "crosssectionalstudy",
    title: "Cross-Sectional Study",
    description:
      "Observational study analyzing data from a population at one specific point in time",
    componentPath: "./components/pages/glossary/CrossSectionalStudyPage",
    componentName: "CrossSectionalStudyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "systematicreview",
    title: "Systematic Review",
    description:
      "Comprehensive, structured literature review using predefined methods to answer research questions",
    componentPath: "./components/pages/glossary/SystematicReviewPage",
    componentName: "SystematicReviewPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "pharmacokinetics",
    title: "Pharmacokinetics",
    description:
      "Study of how the body absorbs, distributes, metabolizes, and excretes substances",
    componentPath: "./components/pages/glossary/PharmacokineticsPage",
    componentName: "PharmacokineticsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "homair",
    title: "HOMA-IR",
    abbreviation: "Homeostatic Model Assessment of Insulin Resistance",
    description:
      "Mathematical formula quantifying insulin resistance from fasting glucose and insulin",
    componentPath: "./components/pages/glossary/HOMAIRPage",
    componentName: "HOMAIRPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "nfkb",
    title: "NF-κB",
    abbreviation: "Nuclear Factor Kappa B",
    description:
      "Master transcription factor regulating inflammatory and immune responses",
    componentPath: "./components/pages/glossary/NFkBPage",
    componentName: "NFkBPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "nrf2",
    title: "Nrf2",
    abbreviation: "Nuclear Factor Erythroid 2-Related Factor 2",
    description:
      "Master transcription factor regulating antioxidant defense and cellular protection",
    componentPath: "./components/pages/glossary/Nrf2Page",
    componentName: "Nrf2Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "vldl",
    title: "VLDL",
    abbreviation: "Very Low-Density Lipoprotein",
    description:
      "Lipoprotein particle transporting triglycerides from liver to tissues",
    componentPath: "./components/pages/glossary/VLDLPage",
    componentName: "VLDLPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ferrousiron",
    title: "Ferrous Iron",
    description:
      "Iron in +2 oxidation state, better absorbed form for supplements",
    componentPath: "./components/pages/glossary/FerrousIronPage",
    componentName: "FerrousIronPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ferriciron",
    title: "Ferric Iron",
    description:
      "Iron in +3 oxidation state, less well absorbed than ferrous iron",
    componentPath: "./components/pages/glossary/FerricIronPage",
    componentName: "FerricIronPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "homa-ir",
    title: "HOMA-IR",
    description:
      "Homeostatic Model Assessment of Insulin Resistance - a method to quantify insulin resistance",
    componentPath: "./components/pages/glossary/HOMAIRPage",
    componentName: "HOMAIRPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "pancreatitis",
    title: "Pancreatitis",
    description: "Inflammation of the pancreas, which can be acute or chronic",
    componentPath: "./components/pages/glossary/PancreatitisPage",
    componentName: "PancreatitisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "ulcerativecolitis",
    title: "Ulcerative Colitis",
    abbreviation: "UC",
    description:
      "A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum",
    componentPath: "./components/pages/glossary/UlcerativeColitisPage",
    componentName: "UlcerativeColitisPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "prediabetes",
    title: "Prediabetes",
    description:
      "A condition in which blood glucose levels are higher than normal but not high enough to be classified as diabetes",
    componentPath: "./components/pages/glossary/PrediabetesPage",
    componentName: "PrediabetesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hyperglycemia",
    title: "Hyperglycemia",
    description: "Elevated blood glucose levels above the normal range",
    componentPath: "./components/pages/glossary/HyperglycemiaPage",
    componentName: "HyperglycemiaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "rickets",
    title: "Rickets",
    description:
      "A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency",
    componentPath: "./components/pages/glossary/RicketsPage",
    componentName: "RicketsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "osteomalacia",
    title: "Osteomalacia",
    description:
      "Softening of the bones in adults due to defective bone mineralization",
    componentPath: "./components/pages/glossary/OsteomalachPage",
    componentName: "OsteomalachPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "akkermansia",
    title: "Akkermansia muciniphila",
    description:
      "Beneficial gut bacteria associated with metabolic health and healthy body weight",
    componentPath: "./components/pages/glossary/AkkermansiaPage",
    componentName: "AkkermansiaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "anabolicresistance",
    title: "Anabolic Resistance",
    description:
      "Reduced muscle protein synthesis response to anabolic stimuli like protein intake",
    componentPath: "./components/pages/glossary/AnabolicResistancePage",
    componentName: "AnabolicResistancePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "arachidonicacid",
    title: "Arachidonic Acid",
    abbreviation: "AA",
    description:
      "Omega-6 fatty acid that serves as precursor to inflammatory and regulatory eicosanoids",
    componentPath: "./components/pages/glossary/ArachidonicAcidPage",
    componentName: "ArachidonicAcidPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bacteroides",
    title: "Bacteroides",
    description:
      "Major genus of beneficial gut bacteria involved in fiber fermentation and immune modulation",
    componentPath: "./components/pages/glossary/BacteroidesPage",
    componentName: "BacteroidesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "betacarotene",
    title: "Beta-Carotene",
    description:
      "Orange plant pigment and provitamin A carotenoid with antioxidant properties",
    componentPath: "./components/pages/glossary/BetaCarotenePage",
    componentName: "BetaCarotenePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "bifidobacterium",
    title: "Bifidobacterium",
    description:
      "Beneficial bacterial genus that inhabits the gut and supports digestive and immune health",
    componentPath: "./components/pages/glossary/BifidobacteriumPage",
    componentName: "BifidobacteriumPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "calciumcarbonate",
    title: "Calcium Carbonate",
    description:
      "Common calcium supplement form with 40% elemental calcium, requires stomach acid for absorption",
    componentPath: "./components/pages/glossary/CalciumCarbonatePage",
    componentName: "CalciumCarbonatePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "calciumcitrate",
    title: "Calcium Citrate",
    description:
      "Highly bioavailable calcium supplement form that can be taken with or without food",
    componentPath: "./components/pages/glossary/CalciumCitratePage",
    componentName: "CalciumCitratePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "chylomicrons",
    title: "Chylomicrons",
    description:
      "Lipoprotein particles that transport dietary fats from intestines to tissues",
    componentPath: "./components/pages/glossary/ChylomicronsPage",
    componentName: "ChylomicronsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "colonocytes",
    title: "Colonocytes",
    description:
      "Epithelial cells lining the colon that rely on butyrate for energy",
    componentPath: "./components/pages/glossary/ColonocytesPage",
    componentName: "ColonocytesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "doms",
    title: "DOMS (Delayed Onset Muscle Soreness)",
    abbreviation: "DOMS",
    description:
      "Muscle pain and stiffness occurring 12-72 hours after intense or unfamiliar exercise",
    componentPath: "./components/pages/glossary/DOMSPage",
    componentName: "DOMSPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "deficiency",
    title: "Deficiency",
    description:
      "Insufficient nutrient levels in the body causing impaired function or clinical symptoms",
    componentPath: "./components/pages/glossary/DeficiencyPage",
    componentName: "DeficiencyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "esr",
    title: "ESR (Erythrocyte Sedimentation Rate)",
    abbreviation: "ESR",
    description:
      "Blood test measuring inflammation by how fast red blood cells settle",
    componentPath: "./components/pages/glossary/ESRPage",
    componentName: "ESRPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "eightohdg",
    title: "8-OHdG",
    abbreviation: "8-hydroxy-2'-deoxyguanosine",
    description: "Biomarker of oxidative DNA damage and oxidative stress",
    componentPath: "./components/pages/glossary/EightOHdGPage",
    componentName: "EightOHdGPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "endothelium",
    title: "Endothelium",
    description:
      "Single-cell layer lining blood vessels that regulates vascular function and health",
    componentPath: "./components/pages/glossary/EndotheliumPage",
    componentName: "EndotheliumPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "enterocytes",
    title: "Enterocytes",
    description:
      "Intestinal absorptive cells responsible for nutrient uptake from the gut lumen",
    componentPath: "./components/pages/glossary/EnterocytesPage",
    componentName: "EnterocytesPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "fos",
    title: "FOS (Fructooligosaccharides)",
    abbreviation: "FOS",
    description:
      "Short-chain prebiotic fibers that selectively feed beneficial gut bacteria",
    componentPath: "./components/pages/glossary/FOS_Page",
    componentName: "FOS_Page",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "faecalibacterium",
    title: "Faecalibacterium prausnitzii",
    description:
      "Major butyrate-producing gut bacteria associated with anti-inflammatory effects",
    componentPath: "./components/pages/glossary/FaecalibacteriumPage",
    componentName: "FaecalibacteriumPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "folicacid",
    title: "Folic Acid",
    description:
      "Synthetic form of vitamin B9 used in supplements and fortified foods",
    componentPath: "./components/pages/glossary/FolicAcidPage",
    componentName: "FolicAcidPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "freeradicals",
    title: "Free Radicals",
    description:
      "Highly reactive molecules with unpaired electrons that can damage cells and DNA",
    componentPath: "./components/pages/glossary/FreeRadicalsPage",
    componentName: "FreeRadicalsPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "glucagon",
    title: "Glucagon",
    description:
      "Pancreatic hormone that raises blood glucose by promoting glycogen breakdown and gluconeogenesis",
    componentPath: "./components/pages/glossary/GlucagonPage",
    componentName: "GlucagonPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "halflife",
    title: "Half-Life",
    description:
      "Time required for half of a substance to be eliminated from the body",
    componentPath: "./components/pages/glossary/HalfLifePage",
    componentName: "HalfLifePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hemeiron",
    title: "Heme Iron",
    description:
      "Highly bioavailable iron form found in animal foods, bound to hemoglobin or myoglobin",
    componentPath: "./components/pages/glossary/HemeIronPage",
    componentName: "HemeIronPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "hepaticencephalopathy",
    title: "Hepatic Encephalopathy",
    description:
      "Brain dysfunction caused by severe liver disease and ammonia accumulation",
    componentPath: "./components/pages/glossary/HepaticEncephalopathyPage",
    componentName: "HepaticEncephalopathyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "insulin",
    title: "Insulin",
    description:
      "Pancreatic hormone regulating blood glucose by promoting cellular glucose uptake",
    componentPath: "./components/pages/glossary/InsulinPage",
    componentName: "InsulinPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "lactobacillus",
    title: "Lactobacillus",
    description:
      "Genus of beneficial lactic acid bacteria used widely in probiotics and fermented foods",
    componentPath: "./components/pages/glossary/LactobacillusPage",
    componentName: "LactobacillusPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "lipidperoxidation",
    title: "Lipid Peroxidation",
    description:
      "Oxidative degradation of lipids causing cellular damage and producing reactive compounds",
    componentPath: "./components/pages/glossary/LipidPeroxidationPage",
    componentName: "LipidPeroxidationPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "loadingphase",
    title: "Loading Phase",
    description:
      "Initial period of higher supplement doses to rapidly saturate body stores",
    componentPath: "./components/pages/glossary/LoadingPhasePage",
    componentName: "LoadingPhasePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "lycopene",
    title: "Lycopene",
    description:
      "Red carotenoid pigment with antioxidant properties, abundant in tomatoes",
    componentPath: "./components/pages/glossary/LycopenePage",
    componentName: "LycopenePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "magnesiumcitrate",
    title: "Magnesium Citrate",
    description:
      "Highly bioavailable magnesium supplement form with mild laxative effect",
    componentPath: "./components/pages/glossary/MagnesiumCitratePage",
    componentName: "MagnesiumCitratePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "magnesiumoxide",
    title: "Magnesium Oxide",
    description:
      "Common but poorly absorbed magnesium supplement form, often used as laxative",
    componentPath: "./components/pages/glossary/MagnesiumOxidePage",
    componentName: "MagnesiumOxidePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "maintenancedose",
    title: "Maintenance Dose",
    description:
      "Ongoing supplement dose to maintain optimal levels after loading phase",
    componentPath: "./components/pages/glossary/MaintenanceDosePage",
    componentName: "MaintenanceDosePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "methylcobalamin",
    title: "Methylcobalamin",
    description:
      "Active form of vitamin B12 used in supplements, readily utilized by the body",
    componentPath: "./components/pages/glossary/MethylcobalaminPage",
    componentName: "MethylcobalaminPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "methylfolate",
    title: "Methylfolate",
    abbreviation: "5-MTHF",
    description:
      "Active form of folate that bypasses MTHFR enzyme, superior to folic acid",
    componentPath: "./components/pages/glossary/MethylfolatePage",
    componentName: "MethylfolatePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "nitricoxide",
    title: "Nitric Oxide",
    abbreviation: "NO",
    description:
      "Signaling molecule that regulates blood vessel dilation and cardiovascular function",
    componentPath: "./components/pages/glossary/NitricOxidePage",
    componentName: "NitricOxidePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "nonhemeiron",
    title: "Non-Heme Iron",
    description:
      "Plant-based iron form with lower bioavailability than heme iron",
    componentPath: "./components/pages/glossary/NonHemeIronPage",
    componentName: "NonHemeIronPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "oxidativedamage",
    title: "Oxidative Damage",
    description:
      "Cellular and molecular damage caused by reactive oxygen species and free radicals",
    componentPath: "./components/pages/glossary/OxidativeDamagePage",
    componentName: "OxidativeDamagePage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "oxidizedldl",
    title: "Oxidized LDL",
    abbreviation: "oxLDL",
    description:
      "Modified LDL cholesterol that promotes atherosclerosis and cardiovascular disease",
    componentPath: "./components/pages/glossary/OxidizedLDLPage",
    componentName: "OxidizedLDLPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "plasma",
    title: "Plasma",
    description:
      "Liquid component of blood containing water, proteins, nutrients, and waste products",
    componentPath: "./components/pages/glossary/PlasmaPage",
    componentName: "PlasmaPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "satiety",
    title: "Satiety",
    description:
      "Feeling of fullness and satisfaction after eating that suppresses further food intake",
    componentPath: "./components/pages/glossary/SatietyPage",
    componentName: "SatietyPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "saturation",
    title: "Saturation",
    description: "State where body stores of a nutrient are filled to capacity",
    componentPath: "./components/pages/glossary/SaturationPage",
    componentName: "SaturationPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "serum25ohd",
    title: "Serum 25(OH)D",
    abbreviation: "25-hydroxyvitamin D",
    description:
      "Primary blood test for vitamin D status, reflecting total vitamin D stores",
    componentPath: "./components/pages/glossary/Serum25OHDPage",
    componentName: "Serum25OHDPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "serum",
    title: "Serum",
    description:
      "Blood plasma without clotting factors, commonly used for laboratory testing",
    componentPath: "./components/pages/glossary/SerumPage",
    componentName: "SerumPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "synergisticeffect",
    title: "Synergistic Effect",
    description:
      "Combined effect of substances that is greater than the sum of individual effects",
    componentPath: "./components/pages/glossary/SynergisticEffectPage",
    componentName: "SynergisticEffectPage",
    showInNav: true,
    category: "glossary",
  },
  {
    key: "tolerableupperintakelevel",
    title: "Tolerable Upper Intake Level",
    abbreviation: "UL",
    description:
      "Maximum daily nutrient intake unlikely to cause adverse health effects",
    componentPath: "./components/pages/glossary/TolerableUpperIntakeLevelPage",
    componentName: "TolerableUpperIntakeLevelPage",
    showInNav: true,
    category: "glossary",
  },
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
    key: "about",
    title: "About Us",
    componentPath: "./components/pages/static/AboutPage",
    componentName: "AboutPage",
  },
  {
    key: "contact",
    title: "Contact",
    componentPath: "./components/pages/static/ContactPage",
    componentName: "ContactPage",
  },
  {
    key: "legal",
    title: "Legal Disclaimer",
    componentPath: "./components/pages/static/LegalDisclaimerPage",
    componentName: "LegalDisclaimerPage",
  },
  {
    key: "privacy",
    title: "Privacy Policy",
    componentPath: "./components/pages/static/PrivacyPolicyPage",
    componentName: "PrivacyPolicyPage",
  },
  {
    key: "terms",
    title: "Terms of Service",
    componentPath: "./components/pages/static/TermsOfServicePage",
    componentName: "TermsOfServicePage",
  },
  {
    key: "cookies",
    title: "Cookie Policy",
    componentPath: "./components/pages/static/CookiePolicyPage",
    componentName: "CookiePolicyPage",
  },
  {
    key: "impressum",
    title: "Impressum",
    componentPath: "./components/pages/static/ImpressumPage",
    componentName: "ImpressumPage",
  },
  {
    key: "product-comparison",
    title: "Product Comparison",
    componentPath: "./components/ProductComparison",
    componentName: "ProductComparison",
  },
  {
    key: "knowledgebase",
    title: "Knowledgebase",
    componentPath: "./components/pages/static/KnowledgebasePage",
    componentName: "KnowledgebasePage",
  },
  {
    key: "glossary",
    title: "Glossary",
    componentPath: "./components/pages/static/GlossaryPage",
    componentName: "GlossaryPage",
  },
  {
    key: "methodology",
    title: "Our Methodology",
    componentPath: "./components/pages/static/MethodologyPage",
    componentName: "MethodologyPage",
  },
  {
    key: "partner",
    title: "Partner With Us",
    componentPath: "./components/pages/static/PartnerPage",
    componentName: "PartnerPage",
  },
];

// Helper functions
export const getAllRoutes = () => [
  ...KNOWLEDGEBASE_ROUTES,
  ...GLOSSARY_ROUTES,
  ...STATIC_ROUTES,
];

export const getNavRoutes = () =>
  KNOWLEDGEBASE_ROUTES.filter((route) => route.showInNav);

export const getRouteByKey = (key: string) =>
  getAllRoutes().find((route) => route.key === key);

export const getSearchableRoutes = () => [
  ...KNOWLEDGEBASE_ROUTES,
  ...GLOSSARY_ROUTES,
];

// Type for all possible page keys
export type PageKey =
  | "landing"
  | (typeof KNOWLEDGEBASE_ROUTES)[number]["key"]
  | (typeof GLOSSARY_ROUTES)[number]["key"]
  | (typeof STATIC_ROUTES)[number]["key"];
