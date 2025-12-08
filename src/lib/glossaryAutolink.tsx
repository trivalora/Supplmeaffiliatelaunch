// AUTO-GENERATED from database - 2025-12-01
// This file provides automatic linking of glossary terms in text content
// Run: node scripts/generate-glossary-autolink.mjs to regenerate

import { ReactNode } from "react";
import Link from "next/link";
import { GLOSSARY_DATA } from "./glossaryData";

/**
 * Glossary term definition for autolinking
 */
interface GlossaryTerm {
  key: string;
  terms: string[]; // All variations that should link to this page
}

/**
 * All glossary terms with their variations
 * Loaded from scripts/generated-autolink-terms.ts
 */
const GLOSSARY_TERMS: GlossaryTerm[] = [
  { key: "absorption", terms: ["Absorption", "absorption"] },
  { key: "acetate", terms: ["Acetate", "Acetic Acid, C2:0", "acetate"] },
  { key: "adaptogen", terms: ["Adaptogen", "adaptogen"] },
  {
    key: "adverseeffects",
    terms: [
      "Adverse Effects",
      "Side Effects, Adverse Reactions",
      "adverse effects",
      "adverse-effects",
    ],
  },
  {
    key: "akkermansia",
    terms: [
      "Akkermansia muciniphila",
      "akkermansia muciniphila",
      "akkermansia-muciniphila",
    ],
  },
  {
    key: "ala",
    terms: [
      "ALA (Alpha-Linolenic Acid)",
      "ALA",
      "α-Linolenic Acid",
      "ala (alpha-linolenic acid)",
      "ala-(alpha-linolenic-acid)",
    ],
  },
  { key: "aminoacids", terms: ["Amino Acids", "amino acids", "amino-acids"] },
  {
    key: "anabolicresistance",
    terms: [
      "Anabolic Resistance",
      "anabolic resistance",
      "anabolic-resistance",
    ],
  },
  {
    key: "anecdotalevidence",
    terms: ["Anecdotal Evidence", "anecdotal evidence", "anecdotal-evidence"],
  },
  { key: "anemia", terms: ["Anemia", "anemia"] },
  { key: "antioxidant", terms: ["Antioxidant", "antioxidant"] },
  {
    key: "arachidonicacid",
    terms: [
      "Arachidonic Acid (AA)",
      "AA",
      "arachidonic acid (aa)",
      "arachidonic-acid-(aa)",
    ],
  },
  {
    key: "arr",
    terms: [
      "Absolute Risk Reduction",
      "ARR",
      "absolute risk reduction",
      "absolute-risk-reduction",
    ],
  },
  { key: "atherosclerosis", terms: ["Atherosclerosis", "atherosclerosis"] },
  {
    key: "atp",
    terms: [
      "ATP (Adenosine Triphosphate)",
      "ATP",
      "atp (adenosine triphosphate)",
      "atp-(adenosine-triphosphate)",
    ],
  },
  { key: "bacteroides", terms: ["Bacteroides", "bacteroides"] },
  {
    key: "betacarotene",
    terms: ["Beta-Carotene", "β-Carotene", "Provitamin A", "beta-carotene"],
  },
  { key: "bifidobacterium", terms: ["Bifidobacterium", "bifidobacterium"] },
  { key: "bioavailability", terms: ["Bioavailability", "bioavailability"] },
  { key: "biomarker", terms: ["Biomarker", "biomarker"] },
  {
    key: "bloodglucose",
    terms: ["Blood Glucose", "blood glucose", "blood-glucose"],
  },
  {
    key: "bloodpressure",
    terms: ["Blood Pressure", "blood pressure", "blood-pressure"],
  },
  { key: "bmi", terms: ["BMI", "Body Mass Index", "bmi"] },
  {
    key: "bonedensity",
    terms: ["Bone Density", "BMD", "bone density", "bone-density"],
  },
  { key: "butyrate", terms: ["Butyrate", "Butyric Acid", "C4:0", "butyrate"] },
  {
    key: "calciumcarbonate",
    terms: [
      "Calcium Carbonate",
      "CaCO₃",
      "calcium carbonate",
      "calcium-carbonate",
    ],
  },
  {
    key: "calciumcitrate",
    terms: ["Calcium Citrate", "calcium citrate", "calcium-citrate"],
  },
  { key: "cardiovascular", terms: ["Cardiovascular", "cardiovascular"] },
  { key: "carotenoids", terms: ["Carotenoids", "carotenoids"] },
  { key: "catalase", terms: ["Catalase", "catalase"] },
  { key: "chelated", terms: ["Chelated", "chelated"] },
  { key: "chylomicrons", terms: ["Chylomicrons", "chylomicrons"] },
  {
    key: "ci",
    terms: [
      "Confidence Interval",
      "CI",
      "confidence interval",
      "confidence-interval",
    ],
  },
  {
    key: "clinicalsignificance",
    terms: [
      "Clinical Significance",
      "clinical significance",
      "clinical-significance",
    ],
  },
  {
    key: "coenzymeq10",
    terms: [
      "Coenzyme Q10",
      "CoQ10",
      "ubiquinone",
      "coenzyme q10",
      "coenzyme-q10",
    ],
  },
  {
    key: "cognitivefunction",
    terms: ["Cognitive Function", "cognitive function", "cognitive-function"],
  },
  {
    key: "cohortstudy",
    terms: ["Cohort Study", "cohort study", "cohort-study"],
  },
  { key: "collagen", terms: ["Collagen", "collagen"] },
  { key: "colonocytes", terms: ["Colonocytes", "colonocytes"] },
  {
    key: "contraindications",
    terms: ["Contraindications", "contraindications"],
  },
  { key: "cortisol", terms: ["Cortisol", "cortisol"] },
  {
    key: "creatinekinase",
    terms: [
      "Creatine Kinase",
      "CK",
      "CPK",
      "Creatine Phosphokinase",
      "creatine kinase",
      "creatine-kinase",
    ],
  },
  {
    key: "crosssectionalstudy",
    terms: [
      "Cross-Sectional Study",
      "cross-sectional study",
      "cross-sectional-study",
    ],
  },
  {
    key: "crp",
    terms: [
      "CRP (C-Reactive Protein)",
      "CRP",
      "hs-CRP",
      "high-sensitivity CRP",
      "crp (c-reactive protein)",
      "crp-(c-reactive-protein)",
    ],
  },
  { key: "cytokines", terms: ["Cytokines", "cytokines"] },
  { key: "deficiency", terms: ["Deficiency", "deficiency"] },
  {
    key: "dha",
    terms: [
      "DHA (Docosahexaenoic Acid)",
      "DHA",
      "dha (docosahexaenoic acid)",
      "dha-(docosahexaenoic-acid)",
    ],
  },
  {
    key: "diastolic",
    terms: [
      "Diastolic Blood Pressure",
      "diastolic blood pressure",
      "diastolic-blood-pressure",
    ],
  },
  {
    key: "doms",
    terms: [
      "DOMS (Delayed Onset Muscle Soreness)",
      "DOMS",
      "doms (delayed onset muscle soreness)",
      "doms-(delayed-onset-muscle-soreness)",
    ],
  },
  { key: "dosedependent", terms: ["Dose-Dependent", "dose-dependent"] },
  {
    key: "doubleblinded",
    terms: ["Double Blinded", "double blinded", "double-blinded"],
  },
  {
    key: "druginteractions",
    terms: ["Drug Interactions", "drug interactions", "drug-interactions"],
  },
  { key: "dysbiosis", terms: ["Dysbiosis", "dysbiosis"] },
  { key: "effectsize", terms: ["Effect Size", "effect size", "effect-size"] },
  { key: "efficacy", terms: ["Efficacy", "efficacy"] },
  { key: "eicosanoids", terms: ["Eicosanoids", "eicosanoids"] },
  {
    key: "eightohdg",
    terms: ["8-OHdG", "8-hydroxy-2'-deoxyguanosine", "8-oxo-dG", "8-ohdg"],
  },
  { key: "electrolytes", terms: ["Electrolytes", "electrolytes"] },
  {
    key: "empiricalevidence",
    terms: ["Empirical Evidence", "empirical evidence", "empirical-evidence"],
  },
  { key: "endothelium", terms: ["Endothelium", "endothelium"] },
  {
    key: "enterocytes",
    terms: ["Enterocytes", "Intestinal Epithelial Cells", "enterocytes"],
  },
  {
    key: "epa",
    terms: [
      "EPA (Eicosapentaenoic Acid)",
      "EPA",
      "epa (eicosapentaenoic acid)",
      "epa-(eicosapentaenoic-acid)",
    ],
  },
  {
    key: "esr",
    terms: [
      "ESR (Erythrocyte Sedimentation Rate)",
      "ESR",
      "esr (erythrocyte sedimentation rate)",
      "esr-(erythrocyte-sedimentation-rate)",
    ],
  },
  {
    key: "essentialaminoacids",
    terms: [
      "Essential Amino Acids",
      "EAAs",
      "essential amino acids",
      "essential-amino-acids",
    ],
  },
  {
    key: "faecalibacterium",
    terms: [
      "Faecalibacterium prausnitzii",
      "faecalibacterium prausnitzii",
      "faecalibacterium-prausnitzii",
    ],
  },
  { key: "ferriciron", terms: ["Ferric Iron", "ferric iron", "ferric-iron"] },
  {
    key: "ferrousiron",
    terms: ["Ferrous Iron", "ferrous iron", "ferrous-iron"],
  },
  { key: "fibrinogen", terms: ["Fibrinogen", "fibrinogen"] },
  { key: "flavonoids", terms: ["Flavonoids", "flavonoids"] },
  {
    key: "fmd",
    terms: [
      "Flow-Mediated Dilation",
      "FMD",
      "flow-mediated dilation",
      "flow-mediated-dilation",
    ],
  },
  {
    key: "fodmap",
    terms: [
      "FODMAP",
      "Fermentable Oligosaccharides",
      "Disaccharides",
      "Monosaccharides",
      "Polyols",
      "fodmap",
    ],
  },
  { key: "folicacid", terms: ["Folic Acid", "folic acid", "folic-acid"] },
  {
    key: "fos",
    terms: [
      "Fructooligosaccharides (FOS)",
      "FOS",
      "fructooligosaccharides (fos)",
      "fructooligosaccharides-(fos)",
    ],
  },
  {
    key: "freeradicals",
    terms: ["Free Radicals", "free radicals", "free-radicals"],
  },
  {
    key: "glp1",
    terms: [
      "Glucagon-Like Peptide-1",
      "GLP-1",
      "glucagon-like peptide-1",
      "glucagon-like-peptide-1",
    ],
  },
  { key: "glucagon", terms: ["Glucagon", "glucagon"] },
  {
    key: "glucosemetabolism",
    terms: ["Glucose Metabolism", "glucose metabolism", "glucose-metabolism"],
  },
  { key: "glutathione", terms: ["Glutathione", "GSH", "glutathione"] },
  {
    key: "glutathioneperoxidase",
    terms: [
      "Glutathione Peroxidase",
      "GPx",
      "glutathione peroxidase",
      "glutathione-peroxidase",
    ],
  },
  {
    key: "glycemiccontrol",
    terms: ["Glycemic Control", "glycemic control", "glycemic-control"],
  },
  { key: "glycine", terms: ["Glycine", "Gly", "glycine"] },
  {
    key: "gos",
    terms: ["Galacto-oligosaccharides", "GOS", "galacto-oligosaccharides"],
  },
  {
    key: "grade",
    terms: [
      "GRADE (Grading of Recommendations Assessment, Development and Evaluation)",
      "GRADE",
      "grade (grading of recommendations assessment, development and evaluation)",
      "grade-(grading-of-recommendations-assessment,-development-and-evaluation)",
    ],
  },
  {
    key: "gutmicrobiome",
    terms: ["Gut Microbiome", "gut microbiome", "gut-microbiome"],
  },
  { key: "halflife", terms: ["Half-Life", "half-life"] },
  {
    key: "hba1c",
    terms: [
      "HbA1c (Hemoglobin A1c)",
      "HbA1c",
      "A1C",
      "Glycated Hemoglobin",
      "hba1c (hemoglobin a1c)",
      "hba1c-(hemoglobin-a1c)",
    ],
  },
  {
    key: "hdlcholesterol",
    terms: [
      "HDL Cholesterol (High-Density Lipoprotein)",
      "HDL",
      "HDL-C",
      "Good Cholesterol",
      "hdl cholesterol (high-density lipoprotein)",
      "hdl-cholesterol-(high-density-lipoprotein)",
    ],
  },
  { key: "hedgesg", terms: ["Hedges' g", "hedges' g", "hedges'-g"] },
  { key: "hemeiron", terms: ["Heme Iron", "heme iron", "heme-iron"] },
  { key: "hemoglobin", terms: ["Hemoglobin", "Hb", "hemoglobin"] },
  {
    key: "hepaticencephalopathy",
    terms: [
      "Hepatic Encephalopathy",
      "hepatic encephalopathy",
      "hepatic-encephalopathy",
    ],
  },
  {
    key: "homa-ir",
    terms: [
      "HOMA-IR",
      "Homeostatic Model Assessment of Insulin Resistance",
      "homa-ir",
    ],
  },
  { key: "homocysteine", terms: ["Homocysteine", "homocysteine"] },
  { key: "hydrolyzed", terms: ["Hydrolyzed", "hydrolyzed"] },
  { key: "hydroxyproline", terms: ["Hydroxyproline", "hydroxyproline"] },
  { key: "hyperglycemia", terms: ["Hyperglycemia", "hyperglycemia"] },
  { key: "hypertensive", terms: ["Hypertensive", "hypertensive"] },
  {
    key: "ibs",
    terms: [
      "Irritable Bowel Syndrome",
      "IBS",
      "irritable bowel syndrome",
      "irritable-bowel-syndrome",
    ],
  },
  { key: "il1", terms: ["Interleukin-1", "IL-1", "interleukin-1"] },
  { key: "il6", terms: ["Interleukin-6", "IL-6", "interleukin-6"] },
  {
    key: "immunesystem",
    terms: ["Immune System", "immune system", "immune-system"],
  },
  { key: "inflammation", terms: ["Inflammation", "inflammation"] },
  {
    key: "inflammatoryboweldisease",
    terms: [
      "Inflammatory Bowel Disease",
      "IBD",
      "inflammatory bowel disease",
      "inflammatory-bowel-disease",
    ],
  },
  { key: "insulin", terms: ["Insulin", "insulin"] },
  {
    key: "insulinresistance",
    terms: ["Insulin Resistance", "insulin resistance", "insulin-resistance"],
  },
  {
    key: "inulintypefructans",
    terms: [
      "Inulin-type Fructans",
      "inulin-type fructans",
      "inulin-type-fructans",
    ],
  },
  { key: "isoleucine", terms: ["Isoleucine", "Ile", "I", "isoleucine"] },
  {
    key: "jointhealth",
    terms: ["Joint Health", "joint health", "joint-health"],
  },
  { key: "lactobacillus", terms: ["Lactobacillus", "lactobacillus"] },
  {
    key: "ldlcholesterol",
    terms: [
      "LDL Cholesterol (Low-Density Lipoprotein)",
      "LDL",
      "LDL-C",
      "Bad Cholesterol",
      "ldl cholesterol (low-density lipoprotein)",
      "ldl-cholesterol-(low-density-lipoprotein)",
    ],
  },
  { key: "leucine", terms: ["Leucine", "Leu", "L", "leucine"] },
  {
    key: "lipidperoxidation",
    terms: ["Lipid Peroxidation", "lipid peroxidation", "lipid-peroxidation"],
  },
  {
    key: "loadingphase",
    terms: ["Loading Phase", "loading phase", "loading-phase"],
  },
  { key: "lycopene", terms: ["Lycopene", "lycopene"] },
  { key: "macromineral", terms: ["Macromineral", "macromineral"] },
  {
    key: "magnesiumcitrate",
    terms: ["Magnesium Citrate", "magnesium citrate", "magnesium-citrate"],
  },
  {
    key: "magnesiumoxide",
    terms: ["Magnesium Oxide", "MgO", "magnesium oxide", "magnesium-oxide"],
  },
  {
    key: "maintenancedose",
    terms: ["Maintenance Dose", "maintenance dose", "maintenance-dose"],
  },
  { key: "mda", terms: ["Malondialdehyde", "MDA", "malondialdehyde"] },
  { key: "metaanalysis", terms: ["Meta-Analysis", "meta-analysis"] },
  {
    key: "metabolicsyndrome",
    terms: ["Metabolic Syndrome", "metabolic syndrome", "metabolic-syndrome"],
  },
  { key: "metabolism", terms: ["Metabolism", "metabolism"] },
  {
    key: "methylcobalamin",
    terms: ["Methylcobalamin", "MeCbl", "methylcobalamin"],
  },
  { key: "methylfolate", terms: ["Methylfolate", "5-MTHF", "methylfolate"] },
  { key: "micronized", terms: ["Micronized", "micronized"] },
  { key: "mineral", terms: ["Mineral", "mineral"] },
  { key: "mitochondria", terms: ["Mitochondria", "mitochondria"] },
  { key: "mtor", terms: ["mTOR", "Mechanistic Target of Rapamycin", "mtor"] },
  {
    key: "muscleproteinsynthesis",
    terms: [
      "Muscle Protein Synthesis",
      "MPS",
      "muscle protein synthesis",
      "muscle-protein-synthesis",
    ],
  },
  { key: "myoglobin", terms: ["Myoglobin", "myoglobin"] },
  { key: "neurotransmitter", terms: ["Neurotransmitter", "neurotransmitter"] },
  { key: "nfkb", terms: ["NF-κB", "Nuclear Factor Kappa B", "nf-κb"] },
  {
    key: "nitricoxide",
    terms: [
      "Nitric Oxide (NO)",
      "NO",
      "nitric oxide (no)",
      "nitric-oxide-(no)",
    ],
  },
  {
    key: "nonhemeiron",
    terms: ["Non-Heme Iron", "non-heme iron", "non-heme-iron"],
  },
  { key: "normotensive", terms: ["Normotensive", "normotensive"] },
  {
    key: "nrf2",
    terms: ["Nrf2", "Nuclear Factor Erythroid 2-Related Factor 2", "nrf2"],
  },
  {
    key: "observationalstudy",
    terms: [
      "Observational Study",
      "observational study",
      "observational-study",
    ],
  },
  {
    key: "omega3",
    terms: [
      "Omega-3 Fatty Acids",
      "omega-3 fatty acids",
      "omega-3-fatty-acids",
      "omega-3",
      "omega 3",
    ],
  },
  { key: "or", terms: ["Odds Ratio", "OR", "odds ratio", "odds-ratio"] },
  { key: "osteomalacia", terms: ["Osteomalacia", "osteomalacia"] },
  { key: "osteoporosis", terms: ["Osteoporosis", "osteoporosis"] },
  { key: "oxalates", terms: ["Oxalates", "Oxalic Acid", "oxalates"] },
  {
    key: "oxidativedamage",
    terms: ["Oxidative Damage", "oxidative damage", "oxidative-damage"],
  },
  {
    key: "oxidativestress",
    terms: ["Oxidative Stress", "oxidative stress", "oxidative-stress"],
  },
  {
    key: "oxidizedldl",
    terms: ["Oxidized LDL", "oxLDL", "oxidized ldl", "oxidized-ldl"],
  },
  { key: "pancreatitis", terms: ["Pancreatitis", "pancreatitis"] },
  {
    key: "pedro",
    terms: ["PEDro Scale", "PEDro", "pedro scale", "pedro-scale"],
  },
  { key: "peerreviewed", terms: ["Peer-reviewed", "peer-reviewed"] },
  { key: "pharmacokinetics", terms: ["Pharmacokinetics", "pharmacokinetics"] },
  {
    key: "phosphocreatine",
    terms: ["Phosphocreatine", "PCr", "Creatine Phosphate", "phosphocreatine"],
  },
  {
    key: "phytates",
    terms: [
      "Phytates",
      "Phytic Acid",
      "Inositol Hexaphosphate",
      "IP6",
      "phytates",
    ],
  },
  { key: "placebo", terms: ["Placebo", "placebo"] },
  { key: "plasma", terms: ["Plasma", "plasma"] },
  {
    key: "pms",
    terms: [
      "PMS (Premenstrual Syndrome)",
      "PMS",
      "pms (premenstrual syndrome)",
      "pms-(premenstrual-syndrome)",
    ],
  },
  { key: "polyphenols", terms: ["Polyphenols", "polyphenols"] },
  { key: "prediabetes", terms: ["Prediabetes", "prediabetes"] },
  { key: "preeclampsia", terms: ["Pre-eclampsia", "pre-eclampsia"] },
  { key: "proline", terms: ["Proline", "Pro", "proline"] },
  {
    key: "propionate",
    terms: ["Propionate", "Propionic Acid", "C3:0", "propionate"],
  },
  { key: "protein", terms: ["Protein", "protein"] },
  {
    key: "proteinsynthesis",
    terms: ["Protein Synthesis", "protein synthesis", "protein-synthesis"],
  },
  { key: "pyy", terms: ["Peptide YY", "PYY", "peptide yy", "peptide-yy"] },
  {
    key: "rct",
    terms: [
      "Randomized Controlled Trial",
      "RCT",
      "randomized controlled trial",
      "randomized-controlled-trial",
    ],
  },
  {
    key: "resolvins",
    terms: [
      "Resolvins",
      "RvE",
      "RvD series",
      "resolution-phase interaction products",
      "resolvins",
    ],
  },
  { key: "resveratrol", terms: ["Resveratrol", "resveratrol"] },
  {
    key: "rheumatoidarthritis",
    terms: [
      "Rheumatoid Arthritis",
      "RA",
      "rheumatoid arthritis",
      "rheumatoid-arthritis",
    ],
  },
  { key: "rickets", terms: ["Rickets", "rickets"] },
  { key: "rr", terms: ["Risk Ratio", "RR", "risk ratio", "risk-ratio"] },
  { key: "satiety", terms: ["Satiety", "satiety"] },
  { key: "saturation", terms: ["Saturation", "saturation"] },
  {
    key: "scfa",
    terms: [
      "SCFA (Short-Chain Fatty Acids)",
      "SCFA",
      "SCFAs",
      "scfa (short-chain fatty acids)",
      "scfa-(short-chain-fatty-acids)",
    ],
  },
  { key: "serum", terms: ["Serum", "serum"] },
  {
    key: "serum25ohd",
    terms: [
      "Serum 25-hydroxyvitamin D / 25(OH)D",
      "25-hydroxyvitamin D",
      "serum 25-hydroxyvitamin d / 25(oh)d",
      "serum-25-hydroxyvitamin-d-/-25(oh)d",
    ],
  },
  {
    key: "sibo",
    terms: [
      "Small Intestinal Bacterial Overgrowth",
      "SIBO",
      "small intestinal bacterial overgrowth",
      "small-intestinal-bacterial-overgrowth",
    ],
  },
  {
    key: "singleblinded",
    terms: ["Single Blinded", "single blinded", "single-blinded"],
  },
  {
    key: "sleepquality",
    terms: ["Sleep Quality", "sleep quality", "sleep-quality"],
  },
  {
    key: "smd",
    terms: [
      "Standardized Mean Difference",
      "SMD",
      "standardized mean difference",
      "standardized-mean-difference",
    ],
  },
  {
    key: "standardizedextract",
    terms: [
      "Standardized Extract",
      "standardized extract",
      "standardized-extract",
    ],
  },
  {
    key: "statisticalsignificance",
    terms: [
      "Statistical Significance",
      "statistical significance",
      "statistical-significance",
    ],
  },
  {
    key: "subgroupanalysis",
    terms: ["Subgroup Analysis", "subgroup analysis", "subgroup-analysis"],
  },
  {
    key: "sublingual",
    terms: [
      "Sublingual Administration",
      "sublingual administration",
      "sublingual-administration",
    ],
  },
  {
    key: "superoxidedismutase",
    terms: [
      "Superoxide Dismutase",
      "SOD",
      "superoxide dismutase",
      "superoxide-dismutase",
    ],
  },
  {
    key: "synergisticeffect",
    terms: ["Synergistic Effect", "synergistic effect", "synergistic-effect"],
  },
  {
    key: "systematicreview",
    terms: ["Systematic Review", "systematic review", "systematic-review"],
  },
  {
    key: "systolic",
    terms: [
      "Systolic Blood Pressure",
      "systolic blood pressure",
      "systolic-blood-pressure",
    ],
  },
  {
    key: "tac",
    terms: [
      "Total Antioxidant Capacity",
      "TAC",
      "total antioxidant capacity",
      "total-antioxidant-capacity",
    ],
  },
  {
    key: "therapeuticdose",
    terms: ["Therapeutic Dose", "therapeutic dose", "therapeutic-dose"],
  },
  {
    key: "thirdpartytesting",
    terms: [
      "Third-Party Testing",
      "third-party testing",
      "third-party-testing",
    ],
  },
  {
    key: "thyroidfunction",
    terms: ["Thyroid Function", "thyroid function", "thyroid-function"],
  },
  {
    key: "tnfalpha",
    terms: [
      "Tumor Necrosis Factor-Alpha",
      "TNF-α",
      "tumor necrosis factor-alpha",
      "tumor-necrosis-factor-alpha",
    ],
  },
  {
    key: "tolerableupperintakelevel",
    terms: [
      "Tolerable Upper Intake Level",
      "UL",
      "tolerable upper intake level",
      "tolerable-upper-intake-level",
    ],
  },
  { key: "triglycerides", terms: ["Triglycerides", "triglycerides"] },
  {
    key: "ulcerativecolitis",
    terms: [
      "Ulcerative Colitis",
      "UC",
      "ulcerative colitis",
      "ulcerative-colitis",
    ],
  },
  { key: "valine", terms: ["Valine", "Val", "V", "valine"] },
  {
    key: "vitamindeficiency",
    terms: ["Vitamin Deficiency", "vitamin deficiency", "vitamin-deficiency"],
  },
  { key: "vldl", terms: ["VLDL", "Very Low-Density Lipoprotein", "vldl"] },
  {
    key: "wmd",
    terms: [
      "Weighted Mean Difference",
      "WMD",
      "weighted mean difference",
      "weighted-mean-difference",
    ],
  },
];

/**
 * Autolink glossary terms in text content
 * Converts plain text into JSX with glossary term links
 *
 * @param content - Text or JSX content to process
 * @param currentPage - Current glossary term slug to avoid self-linking
 * @returns JSX with autolinked glossary terms or empty string
 */
export function autolinkGlossaryContent(
  content: string | ReactNode,
  currentPage?: string
): string | ReactNode {
  // If content is already JSX/ReactNode, return as-is (can't safely parse)
  if (typeof content !== "string") {
    return content;
  }

  // If empty string, return empty string (not null to avoid type issues)
  if (!content || content.trim() === "") {
    return "";
  }

  // Build regex pattern from all term variations
  // Sort by length (longest first) to match longer terms before shorter ones
  // Separate abbreviations (all caps, 2-6 chars) for case-sensitive matching
  const allTerms = GLOSSARY_TERMS.flatMap(({ key, terms }) =>
    terms.map((term) => ({
      key,
      term,
      length: term.length,
      isAbbreviation:
        /^[A-Z]{1,6}$/.test(term) || /^[A-Z]{1,6}\s*\(/.test(term),
    }))
  ).sort((a, b) => b.length - a.length);

  // Split into abbreviations (case-sensitive) and regular terms (case-insensitive)
  const abbreviations = allTerms.filter((t) => t.isAbbreviation);
  const regularTerms = allTerms.filter((t) => !t.isAbbreviation);

  // Create two separate regex patterns
  const abbrevPattern = abbreviations
    .map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const regularPattern = regularTerms
    .map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  // Combine patterns:
  // - Abbreviations: exact word boundary match (case-sensitive)
  // - Regular terms: match with optional plural 's' (case-insensitive)
  const combinedPattern = abbrevPattern
    ? `\\b(${abbrevPattern})\\b|\\b(${regularPattern})s?\\b`
    : `\\b(${regularPattern})s?\\b`;

  const regex = new RegExp(combinedPattern, "gi");

  // Split content by matches
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let linkCount = 0;

  while ((match = regex.exec(content)) !== null) {
    const matchedText = match[0];
    const matchIndex = match.index;

    // Add text before match
    if (matchIndex > lastIndex) {
      parts.push(content.substring(lastIndex, matchIndex));
    }

    // Remove trailing 's' if present for matching (but keep it in display)
    const matchedTextNoPlural = matchedText.replace(/s$/i, "");

    // Find which term this matched
    // For abbreviations, use exact match; for regular terms, use case-insensitive with optional plural
    const termData = allTerms.find(({ term, isAbbreviation }) => {
      if (isAbbreviation) {
        // Exact match for abbreviations (case-sensitive)
        return term === matchedText;
      } else {
        // Case-insensitive match for regular terms, allow plural
        const termLower = term.toLowerCase();
        const matchedLower = matchedText.toLowerCase();
        const matchedNoPlural = matchedTextNoPlural.toLowerCase();
        return termLower === matchedLower || termLower === matchedNoPlural;
      }
    });

    if (termData && termData.key !== currentPage) {
      // Add linked term with tooltip including definition
      const glossaryInfo = GLOSSARY_DATA[termData.key];
      const tooltipText = glossaryInfo
        ? `${glossaryInfo.title}${
            glossaryInfo.abbreviation ? ` (${glossaryInfo.abbreviation})` : ""
          }: ${glossaryInfo.summary}`
        : `See glossary: ${
            GLOSSARY_TERMS.find((t) => t.key === termData.key)?.terms[0] ||
            matchedText
          }`;

      parts.push(
        <Link
          key={`glossary-link-${linkCount++}`}
          href={`/glossary/${termData.key}`}
          className="glossary-link text-primary underline decoration-1 underline-offset-2 hover:text-primary/80 transition-colors"
          title={tooltipText}
        >
          {matchedText}
        </Link>
      );
    } else {
      // Don't link to current page or if no data found
      parts.push(matchedText);
    }

    lastIndex = matchIndex + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  // If no links were created, return original string
  if (parts.length === 1 && typeof parts[0] === "string") {
    return parts[0];
  }

  return <>{parts}</>;
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use autolinkGlossaryContent instead
 */
export function autolinkGlossaryTerms(
  content: string | ReactNode,
  currentPage?: string
): string | ReactNode {
  return autolinkGlossaryContent(content, currentPage);
}
