-- Seed Glossary Terms
-- Generated: 2025-11-27T13:50:16.737Z
-- This file inserts 197 glossary terms into the api.glossary_terms table

BEGIN;

-- Disable triggers for faster insertion
ALTER TABLE api.glossary_terms DISABLE TRIGGER ALL;

-- 1. Absorption
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'absorption',
  'Absorption',
  NULL,
  NULL,
  'The process by which nutrients, drugs, or other substances pass from the gastrointestinal tract into the bloodstream or lymphatic system, making them available for use by the body.',
  'Absorption primarily occurs in the small intestine, where nutrients must cross the intestinal epithelial cells (enterocytes) to enter circulation. Different nutrients use different absorption mechanisms: passive diffusion (fat-soluble vitamins), facilitated diffusion (some sugars), active transport requiring energy (most minerals and some vitamins), or endocytosis (large molecules). The efficiency of absorption varies widely depending on the nutrient''s chemical form, solubility, and interaction with other dietary components.

Multiple factors influence absorption efficiency: the chemical form of the nutrient (ferrous iron absorbs better than ferric; magnesium citrate better than magnesium oxide), presence of absorption enhancers or inhibitors (vitamin C increases iron absorption; phytates and oxalates decrease mineral absorption), digestive health (gut inflammation or disease reduces absorption), timing relative to meals, and individual factors like age, genetics, and existing nutrient status.

Understanding absorption is essential for optimizing supplement effectiveness. Poor absorption is why some nutrients require much higher supplemental doses than dietary intakes to achieve the same effect. Strategies to improve absorption include consuming supplements with appropriate meals (fat-soluble vitamins with dietary fat), spacing competing nutrients (calcium and iron), using chelated or more bioavailable forms, and addressing underlying digestive issues. Absorption rate is a key component of overall bioavailability.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Heme iron from animal sources has 15-35% absorption rate, while non-heme iron from plants has only 2-20% absorption rate', 'Taking vitamin D supplements with a meal containing fat increases absorption since vitamin D is fat-soluble', 'Calcium carbonate requires stomach acid for absorption and should be taken with meals, while calcium citrate can be taken anytime'],
  NULL,
  'Absorption - Suppl.me Glossary',
  'The process by which nutrients pass from the gut into the bloodstream'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 2. Acetate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'acetate',
  'Acetate',
  'Acetic Acid, C2:0',
  NULL,
  'A two-carbon short-chain fatty acid and the most abundantly produced SCFA from bacterial fermentation of dietary fiber in the colon, with roles in energy metabolism, lipid synthesis, appetite regulation, and inflammation modulation.',
  'Acetate (acetic acid) is a two-carbon saturated fatty acid (C2:0) that represents the most abundant short-chain fatty acid (SCFA) produced by gut bacterial fermentation of dietary fibers. It typically accounts for approximately 60-70% of total colonic SCFA production, with the remainder being propionate (~20-25%) and butyrate (~15-20%).

Unlike butyrate, which is primarily used locally by colonocytes, and propionate, which is largely taken up by the liver, a significant portion of acetate enters systemic circulation. This widespread distribution allows acetate to exert metabolic effects in multiple tissues throughout the body, including adipose tissue, skeletal muscle, brain, and heart.

**Key metabolic roles of acetate:**

**Lipogenesis substrate:** Acetate serves as a building block for fatty acid and cholesterol synthesis. In the liver and adipose tissue, acetate is converted to acetyl-CoA, which then enters lipogenic pathways. While this might seem counterproductive, the relationship between acetate and fat metabolism is complex, with context-dependent effects on energy balance.

**Energy substrate:** Acetate can be oxidized in mitochondria to generate ATP, providing energy to peripheral tissues. Approximately 10-20% of total daily energy expenditure in humans may be derived from SCFA oxidation, with acetate being the primary contributor due to its abundance.

**Appetite and metabolism:** Acetate crosses the blood-brain barrier and may influence hypothalamic appetite regulation. Some research suggests acetate can activate hypothalamic neurons involved in appetite suppression, though evidence is mixed. Acetate also stimulates the release of satiety hormones GLP-1 and PYY from intestinal L-cells, similar to propionate.

**Glucose homeostasis:** Acetate may influence glucose metabolism through multiple mechanisms, including improved insulin sensitivity in peripheral tissues and modulation of hepatic glucose production. The overall effect appears beneficial for glycemic control, though mechanisms are still being elucidated.

**Anti-inflammatory effects:** Acetate, like other SCFAs, exhibits anti-inflammatory properties through multiple mechanisms including GPR43 receptor activation on immune cells, suppression of NF-κB signaling, and promotion of regulatory T cell differentiation.

**Cardiovascular effects:** Emerging research suggests acetate may influence blood pressure regulation through GPR43-dependent mechanisms and effects on the renin-angiotensin system, though clinical significance requires further investigation.

Acetate production is influenced by overall fiber intake and gut microbiome composition. Virtually all major bacterial phyla in the gut can produce acetate, making it the most consistently produced SCFA across diverse microbial communities. Diets rich in fermentable fibers, particularly from whole grains, fruits, vegetables, and legumes, enhance acetate production.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A person consuming 30-40 grams of dietary fiber daily may produce 100-200 mmol of acetate in the colon daily, representing the majority of total SCFA production.', 'Fecal acetate concentrations typically range from 50-100 mmol/kg in healthy individuals consuming adequate fiber, decreasing substantially on low-fiber diets.', 'Studies show that increased colonic acetate production from prebiotic supplementation correlates with improved markers of insulin sensitivity and reduced inflammatory markers.'],
  NULL,
  'Acetate - Suppl.me Glossary',
  'Most abundant short-chain fatty acid produced by gut bacteria'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 3. Adaptogen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'adaptogen',
  'Adaptogen',
  NULL,
  NULL,
  'A natural substance, typically from plants or fungi, that helps the body adapt to stress and promotes homeostasis by modulating physiological responses to physical, chemical, or biological stressors.',
  'The concept of adaptogens originated in Soviet research in the 1940s-1950s, with criteria defined by scientist Nikolai Lazarev. To be classified as an adaptogen, a substance must: (1) increase resistance to a wide variety of stressors, (2) have a normalizing influence regardless of the direction of change from normal, and (3) be safe and cause minimal disruption to normal bodily functions. Adaptogens help maintain homeostasis by supporting the hypothalamic-pituitary-adrenal (HPA) axis and sympathoadrenal system.

Common adaptogens include ashwagandha (Withania somnifera), rhodiola rosea, holy basil (tulsi), panax ginseng, schisandra, and cordyceps mushrooms. These compounds typically work through multiple mechanisms affecting stress hormone regulation, energy metabolism, immune modulation, and neuroprotection. Rather than producing a single dramatic effect, adaptogens tend to gently shift multiple systems toward balance over time with regular use.

Scientific evidence for adaptogens varies by substance and claimed benefit. Ashwagandha has the strongest evidence for reducing stress and cortisol levels, while rhodiola shows promise for mental performance under stress. However, the adaptogen concept itself remains somewhat controversial in conventional medicine, with critics arguing that the broad definition makes it difficult to study and validate specific effects. Quality and standardization also vary widely among products.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Ashwagandha (300-600mg daily) reduced stress scores and cortisol levels in multiple randomized controlled trials with stressed adults', 'Rhodiola rosea (200-600mg daily) improved mental performance, reduced fatigue, and enhanced stress resilience in several clinical trials', 'Panax ginseng has been used in traditional medicine for centuries and shows some evidence for improving energy and cognitive function'],
  NULL,
  'Adaptogen - Suppl.me Glossary',
  'Natural substance helping the body adapt to stress'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 4. Adverse Effects
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'adverseeffects',
  'Adverse Effects',
  'Side Effects, Adverse Reactions',
  NULL,
  'Unintended, harmful, or unpleasant responses to a supplement or medication that occur in addition to the desired therapeutic response, ranging from mild and temporary to severe and life-threatening.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['High-dose iron (100mg+) commonly causes gastrointestinal adverse effects including nausea, constipation, and stomach upset—dose-dependent effects that increase with dosage', 'Excessive magnesium (>400mg) frequently causes diarrhea, a predictable dose-dependent adverse effect that resolves when dose is reduced', 'Some individuals experience allergic reactions to specific supplement ingredients (e.g., shellfish-derived glucosamine)—an idiosyncratic adverse effect unrelated to dose'],
  NULL,
  'Adverse Effects - Suppl.me Glossary',
  'Unintended harmful or unpleasant responses to supplements ranging from mild to severe'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 5. Akkermansia muciniphila
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'akkermansia',
  'Akkermansia muciniphila',
  NULL,
  NULL,
  'A beneficial bacterial species that lives in the mucus layer of the intestinal tract. It is associated with metabolic health, healthy body weight, and improved glucose metabolism.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Akkermansia muciniphila - Suppl.me Glossary',
  'Beneficial gut bacteria associated with metabolic health and healthy body weight'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 6. ALA (Alpha-Linolenic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ala',
  'ALA (Alpha-Linolenic Acid)',
  'ALA, α-Linolenic Acid',
  NULL,
  'An essential omega-3 fatty acid found primarily in plant sources that must be obtained through diet, as the human body cannot produce it, serving as a precursor to EPA and DHA though conversion rates are typically low.',
  'Alpha-linolenic acid (ALA) is an 18-carbon polyunsaturated fatty acid with three double bonds, making it the shortest-chain omega-3 fatty acid. It is classified as essential because humans lack the enzymes needed to synthesize it de novo, requiring dietary intake.

ALA is found abundantly in plant sources, particularly flaxseeds, chia seeds, hemp seeds, walnuts, and certain vegetable oils like flaxseed oil and canola oil. While it provides health benefits on its own, ALA is also considered a precursor to the longer-chain omega-3 fatty acids EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), which have well-documented cardiovascular and neurological benefits.

However, the conversion efficiency of ALA to EPA and DHA in humans is notably poor. Research indicates that typically less than 10% of dietary ALA is converted to EPA, and conversion to DHA is even lower, often less than 1%. This conversion occurs through a series of desaturation and elongation steps that can be limited by various factors including genetic variation, sex (women convert more efficiently than men, likely due to estrogen), age, and dietary composition (particularly the ratio of omega-6 to omega-3 fatty acids).

Despite low conversion rates, ALA still provides independent health benefits. Studies have linked higher ALA intake with reduced cardiovascular disease risk, improved lipid profiles, and anti-inflammatory effects. The American Heart Association recommends consuming ALA-rich foods as part of a heart-healthy diet.

For individuals following plant-based diets who may not consume EPA and DHA from marine sources, ALA represents the primary omega-3 source. While some conversion to EPA and DHA does occur, supplementation with algae-derived EPA and DHA may be advisable for optimal omega-3 status, particularly for pregnant or lactating women and individuals with increased omega-3 requirements.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['One tablespoon of ground flaxseed provides approximately 1.6 grams of ALA, representing a significant portion of the adequate intake recommendation of 1.1-1.6 grams daily.', 'A person consuming 1 tablespoon of flaxseed oil (7.3g ALA) may convert roughly 300-700mg to EPA but likely less than 50mg to DHA, illustrating the limited conversion efficiency.', 'Walnuts provide about 2.5 grams of ALA per ounce, making them one of the best nut sources of this essential omega-3 fatty acid.'],
  NULL,
  'ALA (Alpha-Linolenic Acid) - Suppl.me Glossary',
  'Plant-based omega-3 fatty acid that converts poorly to EPA and DHA'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 7. Amino Acids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'aminoacids',
  'Amino Acids',
  NULL,
  NULL,
  'Organic compounds that serve as the building blocks of proteins, each containing an amino group (-NH₂), a carboxyl group (-COOH), and a unique side chain that determines its properties and function.',
  'Amino acids are fundamental molecules in biology, combining in various sequences to form the proteins that make up muscles, enzymes, hormones, antibodies, and countless other vital structures and functions in the body. There are 20 standard amino acids that combine to create all human proteins.

**Classification by Nutritional Essentiality:**

**Essential Amino Acids (EAAs):** Must be obtained from diet—the body cannot synthesize them

- **Histidine:** Important for growth, tissue repair, and making histamine
- **Isoleucine:** Branched-chain amino acid (BCAA); involved in muscle metabolism and energy
- **Leucine:** BCAA; primary trigger for muscle protein synthesis
- **Lysine:** Critical for protein synthesis, calcium absorption, and collagen formation
- **Methionine:** Contains sulfur; important for metabolism and detoxification
- **Phenylalanine:** Precursor to neurotransmitters like dopamine and norepinephrine
- **Threonine:** Important for protein balance, immune function, and collagen
- **Tryptophan:** Precursor to serotonin and melatonin
- **Valine:** BCAA; involved in muscle metabolism and tissue repair

**Conditionally Essential Amino Acids:** Can be synthesized but may become essential under certain conditions (stress, illness, growth)

- **Arginine:** Important for wound healing, immune function, and nitric oxide production
- **Cysteine:** Contains sulfur; component of glutathione (major antioxidant)
- **Glutamine:** Fuel for immune cells and intestinal cells; most abundant amino acid in blood
- **Glycine:** Smallest amino acid; major component of collagen
- **Proline:** Important for collagen structure and skin health
- **Tyrosine:** Precursor to thyroid hormones and neurotransmitters

**Non-Essential Amino Acids:** The body can synthesize these from other compounds

- **Alanine:** Important for glucose metabolism
- **Asparagine:** Required for nervous system function
- **Aspartic Acid:** Involved in hormone production and neurotransmission
- **Glutamic Acid:** Important neurotransmitter; involved in learning and memory
- **Serine:** Important for metabolism and nerve function

**Classification by Chemical Properties:**

- **Polar (hydrophilic):** Serine, threonine, asparagine, glutamine
- **Nonpolar (hydrophobic):** Glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, tryptophan, methionine
- **Charged (acidic):** Aspartic acid, glutamic acid
- **Charged (basic):** Lysine, arginine, histidine
- **Sulfur-containing:** Cysteine, methionine
- **Aromatic:** Phenylalanine, tyrosine, tryptophan

**Functions in the Body:**

- **Protein Synthesis:** Build and repair muscle, skin, organs, enzymes, and hormones
- **Energy Production:** Can be broken down for energy when needed
- **Neurotransmitter Precursors:** Several amino acids are converted to brain chemicals
- **Immune Function:** Components of antibodies and immune cells
- **Nutrient Transport:** Help move vitamins, minerals, and other nutrients
- **Metabolic Regulation:** Involved in countless metabolic pathways

**Dietary Sources:**

**Complete Proteins:** Contain all nine essential amino acids in adequate amounts
- Animal sources: meat, poultry, fish, eggs, dairy
- Plant sources: quinoa, soy, buckwheat, hemp seeds

**Incomplete Proteins:** Lack one or more essential amino acids
- Most plant sources: grains, legumes, nuts, vegetables
- Can be combined to create complete protein profiles',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Whey protein provides all essential amino acids in optimal ratios for muscle protein synthesis, making it a popular post-workout supplement.', 'A complete protein source like whey provides all nine essential amino acids, with particularly high levels of leucine (3g per serving) to trigger muscle protein synthesis.', 'Eating only rice would provide incomplete protein, but combining it with beans creates a complementary amino acid profile that meets all essential amino acid requirements.'],
  NULL,
  'Amino Acids - Suppl.me Glossary',
  'Building blocks of proteins essential for tissue growth and repair'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 8. Anabolic Resistance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'anabolicresistance',
  'Anabolic Resistance',
  NULL,
  NULL,
  'The age-related reduction in skeletal muscle''s sensitivity to anabolic stimuli, particularly protein intake and resistance exercise, requiring greater protein doses to achieve the same muscle protein synthesis response seen in younger individuals.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Anabolic Resistance - Suppl.me Glossary',
  'Reduced muscle protein synthesis response to anabolic stimuli like protein intake'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 9. Anecdotal Evidence
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'anecdotalevidence',
  'Anecdotal Evidence',
  NULL,
  NULL,
  'Information based on personal accounts, individual experiences, or observations rather than systematic scientific research.',
  'Anecdotal evidence consists of personal stories, testimonials, or individual observations that have not been systematically studied or verified through controlled research. While such evidence can be valuable for generating hypotheses and understanding patient experiences, it is considered the weakest form of evidence in scientific research.

The main limitation of anecdotal evidence is that it lacks the controls necessary to rule out alternative explanations. Personal experiences can be influenced by placebo effects, natural fluctuations in health, concurrent lifestyle changes, or simple coincidence. Without proper controls and systematic measurement, it''s impossible to determine whether observed effects are truly due to the intervention.

In supplement research, anecdotal evidence should be viewed as a starting point for investigation rather than proof of effectiveness. While individual experiences can be compelling, they should be confirmed through rigorous empirical research before drawing conclusions.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Anecdotal Evidence - Suppl.me Glossary',
  'Information based on personal accounts rather than systematic scientific research'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 10. Anemia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'anemia',
  'Anemia',
  NULL,
  'uh-nee-mee-uh',
  'Anemia is a condition characterized by a deficiency in the number or quality of red blood cells, or a reduction in hemoglobin concentration, resulting in decreased oxygen-carrying capacity of the blood. It manifests as fatigue, weakness, and various other symptoms due to insufficient oxygen delivery to tissues.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Anemia - Suppl.me Glossary',
  'Insufficient red blood cells or hemoglobin causing reduced oxygen capacity'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 11. Antioxidant
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'antioxidant',
  'Antioxidant',
  NULL,
  NULL,
  'A molecule that inhibits oxidation reactions by neutralizing free radicals, thereby protecting cells from oxidative damage.',
  'Antioxidants work by donating an electron to unstable free radicals, stabilizing them and preventing chain reactions of cellular damage. The body produces endogenous antioxidants (made internally) such as glutathione, superoxide dismutase (SOD), catalase, and coenzyme Q10, while exogenous antioxidants must be obtained from diet and include vitamins C and E, carotenoids (beta-carotene, lycopene), polyphenols (curcumin, resveratrol), and minerals like selenium and zinc.

Antioxidants operate through different mechanisms: some directly neutralize free radicals (direct antioxidants like vitamin C), others chelate metal ions that catalyze oxidation reactions (like flavonoids), while antioxidant enzymes catalyze reactions that convert reactive oxygen species into harmless molecules. The antioxidant defense system works as a network where different antioxidants regenerate each other—for example, vitamin C regenerates oxidized vitamin E back to its active form.

While antioxidants are beneficial, balance is crucial. Moderate levels of free radicals are necessary for immune function, cell signaling, and exercise adaptations. Excessive antioxidant supplementation, particularly with isolated high-dose synthetic forms, may interfere with these beneficial processes and has shown mixed or even negative results in some clinical trials. Antioxidants from whole foods appear safer and more effective than high-dose isolated supplements.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Curcumin significantly increased antioxidant enzymes: superoxide dismutase (SOD) SMD 0.82, catalase 10.26, and glutathione peroxidase 8.90', 'Vitamin C acts as a water-soluble antioxidant that neutralizes free radicals in blood and tissues, while vitamin E protects fat-soluble cell membranes', 'Sulforaphane activates Nrf2, a master regulator that increases production of multiple endogenous antioxidant enzymes'],
  NULL,
  'Antioxidant - Suppl.me Glossary',
  'A molecule that neutralizes free radicals and protects cells from oxidative damage'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 12. Arachidonic Acid (AA)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'arachidonicacid',
  'Arachidonic Acid (AA)',
  'AA',
  NULL,
  'An omega-6 polyunsaturated fatty acid that serves as a precursor to eicosanoids, including both pro-inflammatory and some regulatory signaling molecules. It plays important roles in inflammation, immune function, and cell signaling.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Arachidonic Acid (AA) - Suppl.me Glossary',
  'Omega-6 fatty acid that serves as precursor to inflammatory and regulatory eicosanoids'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 13. Absolute Risk Reduction
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'arr',
  'Absolute Risk Reduction',
  'ARR',
  NULL,
  'The absolute difference in event rates between the treatment and control groups, representing the actual percentage point reduction in risk achieved by an intervention.',
  'Absolute Risk Reduction (ARR) is calculated by subtracting the event rate in the treatment group from the event rate in the control group: ARR = Control Event Rate - Treatment Event Rate. Unlike relative measures (like RR or OR), ARR provides a direct, intuitive understanding of the actual benefit in percentage points. For example, if 20% of the control group experiences an event but only 15% of the treatment group does, the ARR is 5 percentage points (20% - 15% = 5%).

ARR is crucial for clinical decision-making because it reveals the absolute magnitude of benefit. A supplement might have an impressive 50% relative risk reduction (RR = 0.50), but if the baseline risk is only 2%, the ARR is merely 1% (from 2% to 1%). This means 100 people would need to take the supplement for one person to benefit—a much less impressive picture than the relative measure suggests.

The inverse of ARR is the Number Needed to Treat (NNT), calculated as NNT = 1/ARR. This tells you how many people need to receive the intervention for one additional person to experience the benefit. For instance, an ARR of 0.05 (5%) yields an NNT of 20, meaning 20 people must be treated to prevent one event. NNT is particularly useful for weighing benefits against costs, side effects, and inconvenience.

ARR varies with baseline risk even when relative risk stays constant. If a supplement reduces risk by 50% (RR = 0.50), the ARR will be 5% in a population with 10% baseline risk but 20% in a population with 40% baseline risk. This is why subgroup analyses showing consistent RRs but different ARRs aren''t contradictory—they reflect different baseline risks in different populations.

In supplement research, always consider ARR alongside relative measures. Headlines often emphasize relative risk reductions, which can sound dramatic, but ARR reveals whether the benefit is clinically meaningful. A tiny ARR might not justify the cost, effort, or potential side effects of supplementation, even if the relative risk reduction is impressive. Evidence-based clinical guidelines increasingly emphasize ARR and NNT to guide recommendations.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Omega-3 reduces sudden cardiac death from 4.5% to 3.0% (ARR = 1.5%, NNT = 67), meaning 67 people need supplementation to prevent one death', 'Vitamin D supplementation reduces falls from 45% to 36% in elderly (ARR = 9%, NNT = 11), a clinically meaningful benefit', 'A supplement with RR = 0.75 for heart attack produces ARR = 2.5% in high-risk patients (baseline 10%) but only ARR = 0.25% in low-risk patients (baseline 1%)'],
  NULL,
  'Absolute Risk Reduction - Suppl.me Glossary',
  'Absolute difference in event rates between treatment and control groups'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 14. Atherosclerosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'atherosclerosis',
  'Atherosclerosis',
  NULL,
  NULL,
  'Arterial plaque buildup leading to narrowed and hardened arteries.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 60-year-old man with high LDL cholesterol may develop coronary artery atherosclerosis over decades, eventually experiencing chest pain (angina) with exertion.', 'Carotid artery atherosclerosis can reduce blood flow to the brain, increasing stroke risk.', 'Statin therapy reduces LDL cholesterol and stabilizes atherosclerotic plaques, reducing heart attack and stroke risk.'],
  NULL,
  'Atherosclerosis - Suppl.me Glossary',
  'Arterial plaque buildup leading to narrowed and hardened arteries'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 15. ATP (Adenosine Triphosphate)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'atp',
  'ATP (Adenosine Triphosphate)',
  'ATP',
  'ay-tee-pee / uh-den-uh-seen try-fos-fate',
  'ATP (adenosine triphosphate) is the primary energy currency of cells, a high-energy molecule that stores and transfers chemical energy for virtually all cellular processes. Often called the ''molecular unit of currency'' of intracellular energy transfer.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'ATP (Adenosine Triphosphate) - Suppl.me Glossary',
  'Primary energy currency of cells, storing and transferring chemical energy'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 16. Bacteroides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bacteroides',
  'Bacteroides',
  NULL,
  NULL,
  'A genus of Gram-negative, anaerobic bacteria that represents one of the most abundant groups in the human gut microbiome. Bacteroides species are specialized in breaking down complex carbohydrates and play important roles in nutrition and immune function.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Bacteroides - Suppl.me Glossary',
  'Major genus of beneficial gut bacteria involved in fiber fermentation and immune modulation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 17. Beta-Carotene
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'betacarotene',
  'Beta-Carotene',
  'β-Carotene, Provitamin A',
  NULL,
  'A red-orange pigment and provitamin A carotenoid found in plants that the body can convert to vitamin A (retinol), while also functioning as a potent antioxidant that protects cells from oxidative damage.',
  'Beta-carotene (β-carotene) is one of the most abundant and well-studied carotenoids, belonging to a family of over 600 fat-soluble pigments found in plants. It''s classified as a provitamin A carotenoid because the body can cleave it to produce vitamin A (retinol), though not all beta-carotene consumed is converted—some circulates intact and provides independent antioxidant benefits.

**Key characteristics and functions:**

**Provitamin A conversion:** Beta-carotene is split by the enzyme beta-carotene 15,15''-monooxygenase (BCMO1) in the intestinal mucosa and liver, theoretically yielding two molecules of retinal (which is then converted to retinol). However, conversion efficiency varies widely based on genetics, vitamin A status, dietary fat intake, and overall health. On average, approximately 12 micrograms of dietary beta-carotene equals 1 microgram of retinol activity equivalent (RAE).

**Antioxidant properties:** Beta-carotene functions as a singlet oxygen quencher and free radical scavenger, particularly effective against peroxyl radicals. This antioxidant activity is most pronounced at low oxygen tensions, making it particularly relevant for protecting tissues from lipid peroxidation. Unlike direct antioxidants, beta-carotene can also help regenerate other antioxidants like vitamin E.

**Dietary sources:** The richest sources are orange and deep-green vegetables: carrots (6-8 mg per medium carrot), sweet potatoes (9-12 mg per medium potato), pumpkin, butternut squash, spinach, kale, and other dark leafy greens. Despite being green, vegetables like spinach contain substantial beta-carotene masked by chlorophyll.

**Absorption considerations:** Beta-carotene is fat-soluble, so absorption is enhanced when consumed with dietary fat. Cooking and mechanical processing (chopping, blending) rupture plant cell walls and improve bioavailability. Raw carrot provides ~3% absorption, while cooked carrot with added fat can achieve 20-30% absorption.

**Supplementation concerns:** While dietary beta-carotene from whole foods appears safe and beneficial, high-dose supplements (20-30 mg/day) have raised concerns. The ATBC and CARET trials found increased lung cancer risk in smokers taking high-dose beta-carotene supplements. Current recommendations favor obtaining beta-carotene from food rather than isolated supplements, particularly for current or former smokers.

**Individual variation:** Genetic polymorphisms in BCMO1 affect conversion efficiency. Some individuals are low converters who accumulate more circulating beta-carotene and may show yellow-orange skin discoloration (carotenemia) when consuming large amounts—a harmless condition that reverses when intake decreases.

**Beyond vitamin A:** Independent of vitamin A conversion, beta-carotene may influence immune function, gap junction communication between cells, and gene expression. Research suggests beta-carotene and other carotenoids work synergistically, highlighting the value of consuming a variety of colorful plant foods.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A medium carrot (61g) provides approximately 5,000-6,000 mcg of beta-carotene, theoretically yielding about 400-500 mcg RAE of vitamin A activity.', 'Consuming 100g of cooked spinach with a source of fat (e.g., olive oil dressing) provides ~5,600 mcg beta-carotene with enhanced absorption compared to raw spinach.', 'Studies show that consuming 6-8 mg/day of beta-carotene from food sources is associated with reduced markers of oxidative stress without adverse effects.'],
  NULL,
  'Beta-Carotene - Suppl.me Glossary',
  'Orange plant pigment and provitamin A carotenoid with antioxidant properties'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 18. Bifidobacterium
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bifidobacterium',
  'Bifidobacterium',
  NULL,
  'biff-id-oh-back-TEER-ee-um',
  'Bifidobacterium is a genus of beneficial anaerobic bacteria that naturally inhabit the human gastrointestinal tract, particularly the colon. These bacteria are considered key members of a healthy gut microbiome and play crucial roles in digestion, immune function, and metabolic health.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Bifidobacterium - Suppl.me Glossary',
  'Beneficial bacterial genus that inhabits the gut and supports digestive and immune health'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 19. Bioavailability
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bioavailability',
  'Bioavailability',
  NULL,
  NULL,
  'The proportion of a nutrient or drug that enters the bloodstream and becomes available for use by the body after administration or consumption.',
  'Bioavailability measures how much of an ingested substance actually reaches systemic circulation and can exert its biological effects. It''s expressed as a percentage, with 100% bioavailability meaning the entire dose enters the bloodstream unchanged. When a supplement is taken orally, it must survive stomach acid, pass through the intestinal wall, and avoid significant breakdown by the liver before reaching the bloodstream—all factors that can reduce bioavailability.

Many factors affect bioavailability, including the chemical form of the substance (e.g., ferrous vs. ferric iron, curcumin vs. curcumin with piperine), the presence of other nutrients that enhance or inhibit absorption (vitamin C increases iron absorption while calcium decreases it), timing relative to meals, individual digestive health, and formulation technology (nanoparticles, liposomes, or chelation can dramatically increase bioavailability).

Understanding bioavailability is crucial when comparing supplement forms or dosages. A supplement with 50% bioavailability at 200 mg delivers the same active amount as one with 25% bioavailability at 400 mg. Enhanced bioavailability formulations allow lower doses to achieve the same therapeutic effect, potentially reducing side effects while maintaining efficacy.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Standard curcumin has very poor bioavailability (~1%), but adding piperine (black pepper extract) can increase absorption by up to 2000%', 'Heme iron from animal sources has 15-35% bioavailability, while non-heme iron from plants has only 2-20% bioavailability', 'Magnesium citrate has higher bioavailability than magnesium oxide, meaning more of the elemental magnesium reaches the bloodstream'],
  NULL,
  'Bioavailability - Suppl.me Glossary',
  'The proportion of a nutrient that enters the bloodstream and becomes available for use'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 20. Biomarker
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'biomarker',
  'Biomarker',
  NULL,
  NULL,
  'A measurable biological indicator that reflects normal biological processes, disease states, or responses to therapeutic interventions. Biomarkers can be measured in blood, urine, tissues, or other biological samples.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['C-reactive protein (CRP) serves as an inflammatory biomarker; levels >3 mg/L indicate elevated inflammation and increased cardiovascular risk', 'Hemoglobin A1c (HbA1c) biomarker reflects average blood glucose levels over the past 2-3 months, used to diagnose and monitor diabetes', 'Serum 25-hydroxyvitamin D measures vitamin D status, with levels below 20 ng/mL indicating deficiency'],
  NULL,
  'Biomarker - Suppl.me Glossary',
  'A measurable biological indicator of health status or disease processes'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 21. Blood Glucose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bloodglucose',
  'Blood Glucose',
  NULL,
  'blud gloo-kohs',
  'Blood glucose, also called blood sugar, is the amount of glucose (a simple sugar) present in the blood. It''s the body''s primary energy source and its levels are tightly regulated by hormones like insulin and glucagon.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 22. Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bloodpressure',
  'Blood Pressure',
  NULL,
  'blud presh-er',
  'Blood pressure is the force exerted by circulating blood against the walls of blood vessels. It''s measured as two numbers: systolic pressure (when the heart beats) over diastolic pressure (when the heart rests between beats), expressed in millimeters of mercury (mmHg).',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Blood Pressure - Suppl.me Glossary',
  'The force of blood pushing against artery walls, measured as systolic over diastolic'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 23. BMI
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bmi',
  'BMI',
  'Body Mass Index',
  'bee-em-eye',
  'A numerical value calculated from a person''s weight and height, used as a screening tool to categorize individuals into different weight status categories. It is calculated by dividing weight in kilograms by height in meters squared (kg/m²).',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'BMI - Suppl.me Glossary',
  'Weight-to-height ratio used to categorize body weight status'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 24. Bone Density
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'bonedensity',
  'Bone Density',
  'BMD',
  NULL,
  'A measurement of the amount of minerals (primarily calcium and phosphorus) contained in a specific volume of bone, used to assess bone strength and fracture risk.',
  'Bone mineral density (BMD) is the primary biomarker used to diagnose osteoporosis and assess fracture risk. It''s measured using dual-energy X-ray absorptiometry (DXA or DEXA) scans, typically at the hip and spine, and reported as a T-score comparing an individual''s bone density to that of a healthy 30-year-old adult. A T-score of -1.0 or above is normal, -1.0 to -2.5 indicates osteopenia (low bone mass), and -2.5 or below indicates osteoporosis.

Bone is living tissue that constantly remodels through two processes: bone resorption (breakdown by osteoclasts) and bone formation (building by osteoblasts). Peak bone mass is typically reached in the late 20s to early 30s, after which bone density gradually declines. Factors affecting bone density include genetics, hormones (particularly estrogen), physical activity, nutrition (calcium, vitamin D, protein, magnesium), lifestyle factors (smoking, alcohol), and certain medications.

Low bone density significantly increases fracture risk, particularly hip, spine, and wrist fractures. Maintaining and improving bone density involves adequate calcium and vitamin D intake, regular weight-bearing exercise, resistance training, adequate protein, and for some individuals, medications that slow bone loss or promote bone formation. Supplements like calcium, vitamin D, magnesium, vitamin K2, and collagen peptides may support bone health.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Vitamin D supplementation combined with calcium improves bone mineral density and reduces fracture risk in older adults with deficiency', 'Collagen peptides at 5-15g daily may improve bone mineral density by providing amino acids for bone matrix formation', 'Weight-bearing exercise and resistance training stimulate bone formation and can increase or maintain bone density at any age'],
  NULL,
  'Bone Density - Suppl.me Glossary',
  'Measurement of minerals in bone used to assess strength and fracture risk'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 25. Butyrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'butyrate',
  'Butyrate',
  'Butyric Acid, C4:0',
  NULL,
  'A short-chain fatty acid with four carbon atoms produced by bacterial fermentation of dietary fiber in the colon, serving as the primary energy source for colonocytes and playing crucial roles in gut health, inflammation regulation, and metabolic function.',
  'Butyrate is a four-carbon saturated fatty acid (C4:0) that represents one of the three main short-chain fatty acids (SCFAs) produced in the human colon, alongside acetate and propionate. It is synthesized when beneficial gut bacteria ferment non-digestible carbohydrates, particularly dietary fibers such as resistant starch, inulin, and other prebiotics.

What makes butyrate particularly important is its role as the preferred energy source for colonocytes—the epithelial cells lining the colon. These cells derive approximately 70-90% of their energy from butyrate oxidation. This metabolic preference makes butyrate essential for maintaining intestinal barrier integrity, supporting cell differentiation and proliferation, and promoting overall colon health.

Beyond its nutritional role for colonocytes, butyrate exerts multiple beneficial effects:

**Anti-inflammatory properties:** Butyrate inhibits pro-inflammatory pathways, particularly through suppression of NF-κB activation in intestinal cells and immune cells. It also promotes the differentiation of regulatory T cells (Tregs), which help maintain immune tolerance and reduce inappropriate inflammatory responses.

**Gut barrier function:** Butyrate strengthens tight junctions between intestinal cells, reducing intestinal permeability (sometimes called ''leaky gut''). This barrier function is critical for preventing the translocation of bacteria and bacterial products into systemic circulation.

**Metabolic effects:** Butyrate influences glucose and lipid metabolism, improves insulin sensitivity, and may help regulate appetite through effects on gut hormone secretion (GLP-1 and PYY).

**Epigenetic regulation:** As a histone deacetylase (HDAC) inhibitor, butyrate can influence gene expression and has been investigated for potential anti-cancer properties, particularly in colorectal cancer prevention.

Butyrate production is influenced by diet, particularly fiber intake. Diets low in fermentable fiber result in reduced butyrate production, which has been associated with various gastrointestinal disorders including inflammatory bowel disease, irritable bowel syndrome, and colorectal cancer. Conversely, increasing prebiotic fiber intake can enhance butyrate production and its associated health benefits.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Consuming 10-15 grams of resistant starch daily (from foods like cooked and cooled potatoes or green bananas) can significantly increase colonic butyrate production.', 'Individuals with inflammatory bowel disease often show reduced butyrate-producing bacteria and lower fecal butyrate concentrations compared to healthy individuals.', 'Supplementation with inulin-type fructans at 10 grams daily increases fecal butyrate concentration, which correlates with improved markers of gut barrier integrity.'],
  NULL,
  'Butyrate - Suppl.me Glossary',
  'Short-chain fatty acid produced by gut bacteria, critical for colonocyte health'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 26. Calcium Carbonate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'calciumcarbonate',
  'Calcium Carbonate',
  'CaCO₃',
  NULL,
  'An inorganic salt containing approximately 40% elemental calcium by weight—the highest percentage among commonly available calcium supplements. It is the primary ingredient in limestone, chalk, and antacid tablets like Tums.',
  'Calcium carbonate is one of the most widely used forms of calcium in dietary supplements and fortified foods due to its low cost, high calcium content, and dual function as both a calcium source and antacid. However, its absorption is highly dependent on stomach acid, which affects its suitability for certain individuals.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Calcium Carbonate - Suppl.me Glossary',
  'Common calcium supplement form with 40% elemental calcium, requires stomach acid for absorption'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 27. Calcium Citrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'calciumcitrate',
  'Calcium Citrate',
  NULL,
  NULL,
  'A calcium salt of citric acid that contains approximately 21% elemental calcium by weight. It is a well-absorbed form of calcium that doesn''t require stomach acid for absorption, making it suitable for a wider range of individuals compared to calcium carbonate.',
  'Calcium citrate is often recommended for older adults, people taking acid-reducing medications, and those with digestive issues. While it contains less elemental calcium per gram than calcium carbonate, its superior absorption under various conditions often makes it the preferred choice for many healthcare practitioners.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Calcium Citrate - Suppl.me Glossary',
  'Highly bioavailable calcium supplement form that can be taken with or without food'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 28. Cardiovascular
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'cardiovascular',
  'Cardiovascular',
  NULL,
  NULL,
  'Relating to the heart (cardio) and blood vessels (vascular)—the circulatory system responsible for transporting blood, oxygen, nutrients, hormones, and waste products throughout the body.',
  'The cardiovascular system consists of the heart (a muscular pump), arteries (vessels carrying oxygenated blood away from the heart), veins (vessels returning deoxygenated blood to the heart), and capillaries (tiny vessels where nutrient and gas exchange occurs). This system maintains blood pressure, delivers oxygen and nutrients to tissues, removes metabolic waste products, distributes heat, and transports immune cells and signaling molecules throughout the body.

Cardiovascular health is assessed through multiple biomarkers and measurements including blood pressure, lipid profile (total cholesterol, LDL ''bad'' cholesterol, HDL ''good'' cholesterol, triglycerides), inflammatory markers (CRP), homocysteine, blood glucose, and measures of arterial stiffness and function. Cardiovascular disease (CVD)—including coronary artery disease, heart attack, stroke, and peripheral vascular disease—remains the leading cause of death globally, driven by risk factors like high blood pressure, elevated cholesterol, diabetes, smoking, obesity, physical inactivity, and chronic inflammation.

Many supplements target cardiovascular health through various mechanisms: omega-3 fatty acids reduce triglycerides and inflammation; magnesium helps regulate blood pressure; vitamin D may support vascular function; coenzyme Q10 supports heart muscle energy production; and antioxidants may protect blood vessels from oxidative damage. Lifestyle factors—particularly diet quality, physical activity, stress management, sleep, and smoking cessation—remain the most powerful interventions for cardiovascular health, with supplements playing a supportive role.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium supplementation (at least 300 mg/day for 1+ month) reduces systolic blood pressure by ~2.0 mmHg and diastolic by ~1.78 mmHg in normotensive and hypertensive adults', 'Omega-3 fatty acids (EPA and DHA) consistently reduce triglycerides by 15-30% in people with elevated levels, improving cardiovascular risk profile', 'Some studies suggest very high supplemental calcium may be associated with increased cardiovascular risk, though evidence remains mixed'],
  NULL,
  'Cardiovascular - Suppl.me Glossary',
  'Relating to the heart and blood vessels - the circulatory system'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 29. Carotenoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'carotenoids',
  'Carotenoids',
  NULL,
  NULL,
  'A family of fat-soluble pigments produced by plants and certain microorganisms that provide yellow, orange, and red colors to fruits and vegetables. Carotenoids function as antioxidants and some serve as precursors to vitamin A (provitamin A carotenoids).',
  'Carotenoids are tetraterpenoid compounds containing 40 carbon atoms with an extensive conjugated double-bond system responsible for their characteristic colors and antioxidant properties. Over 600 carotenoids exist in nature, but only about 40-50 are consumed regularly in the human diet, and approximately 20 are found in human blood and tissues.

**Classification of carotenoids:**

Carotenoids are divided into two main classes based on their chemical structure:

**1. Carotenes (hydrocarbons with no oxygen):**
- **Alpha-carotene:** Found in carrots, pumpkin, winter squash
- **Beta-carotene:** Most abundant provitamin A carotenoid; found in carrots, sweet potatoes, spinach, kale, cantaloupe
- **Lycopene:** Red pigment with no vitamin A activity; found in tomatoes, watermelon, pink grapefruit, papaya
- **These contain only carbon and hydrogen atoms**

**2. Xanthophylls (oxygenated carotenoids):**
- **Lutein:** Found in dark leafy greens (spinach, kale), corn, egg yolks
- **Zeaxanthin:** Found in corn, orange peppers, egg yolks, goji berries
- **Beta-cryptoxanthin:** Provitamin A carotenoid found in oranges, tangerines, red peppers, pumpkin
- **Astaxanthin:** Found in salmon, shrimp, krill, algae (not converted to vitamin A)
- **These contain oxygen in addition to carbon and hydrogen**

**Provitamin A versus non-provitamin A carotenoids:**

**Provitamin A carotenoids** can be converted to retinol (vitamin A) in the body:
- Beta-carotene (most efficient conversion)
- Alpha-carotene (half the vitamin A activity of beta-carotene)
- Beta-cryptoxanthin (half the vitamin A activity of beta-carotene)

The conversion efficiency varies significantly based on genetic factors (BCO1 enzyme polymorphisms), nutritional status, dietary fat intake, and individual variation. Approximately 12 mcg of dietary beta-carotene equals 1 mcg of retinol (1 RAE - Retinol Activity Equivalent).

**Non-provitamin A carotenoids** cannot be converted to vitamin A but provide other health benefits:
- Lycopene
- Lutein
- Zeaxanthin
- Astaxanthin

**Mechanisms of action:**

**Antioxidant activity:** Carotenoids are exceptionally effective at quenching singlet oxygen (a reactive oxygen species) and scavenging peroxyl radicals, making them powerful antioxidants. The long chain of conjugated double bonds enables electron delocalization, stabilizing free radicals without becoming pro-oxidant themselves (unlike some antioxidants at high concentrations).

**Light filtering:** Lutein and zeaxanthin selectively accumulate in the macula of the retina where they filter blue light (wavelengths 400-500 nm), protecting photoreceptors from phototoxic damage and oxidative stress. These are the only carotenoids found in the retina and are collectively called ''macular pigment.''

**Cell signaling:** Carotenoids and their metabolites modulate gene expression through interactions with nuclear receptors (RAR, RXR), influence gap junction communication, and affect cell differentiation and proliferation.

**Immune modulation:** Carotenoids enhance immune function through various mechanisms including increased lymphocyte proliferation, natural killer cell activity, and cytokine production.

**Anti-inflammatory effects:** Some carotenoids reduce inflammatory markers by inhibiting NF-κB signaling and reducing pro-inflammatory cytokine production.

**Bioavailability and absorption:**

Carotenoid absorption is highly variable (5-65% depending on multiple factors) and requires dietary fat for optimal uptake since they are lipophilic. Factors affecting bioavailability:

**Food matrix:** 
- Raw versus cooked (cooking generally increases bioavailability by breaking down cell walls)
- Whole foods versus juiced (mechanical disruption increases availability)
- Particle size (smaller = better absorption)

**Dietary fat:** At least 3-5g of fat per meal significantly enhances carotenoid absorption. Fat-soluble vitamins compete for absorption, so balanced intake is important.

**Individual variation:**
- Genetic polymorphisms (especially in BCO1, SCARB1 genes)
- Gut health and bile acid production
- Existing carotenoid status (lower stores = more efficient absorption)

**Processing:** Heating, chopping, and adding small amounts of oil dramatically improves lycopene absorption from tomatoes. Conversely, some processing can degrade carotenoids.

**Health benefits from research:**

**Eye health:** 
- **Age-related macular degeneration (AMD):** The AREDS2 trial showed lutein (10 mg) + zeaxanthin (2 mg) reduced AMD progression by 10-25% in high-risk individuals
- **Cataracts:** Higher lutein and zeaxanthin intake associated with 20-30% reduced cataract risk
- **Visual performance:** Macular pigment density correlates with improved visual acuity, contrast sensitivity, and glare recovery

**Cardiovascular health:**
- Higher dietary carotenoid intake associated with 10-30% reduced cardiovascular disease risk in observational studies
- Lycopene shows particular promise for blood pressure reduction (systolic BP reduced by 4-5 mmHg with high intake/supplementation)
- Carotenoids reduce LDL oxidation, a critical step in atherosclerosis

**Cancer prevention:**
- **Lycopene:** Meta-analyses show 10-20% reduced prostate cancer risk with high dietary lycopene intake (primarily from cooked tomato products)
- **Beta-carotene:** Observational studies suggest protective associations, but supplementation trials in smokers showed increased lung cancer risk (see safety section)
- Evidence is strongest for dietary sources rather than supplements

**Skin health:**
- Carotenoids accumulate in skin, providing photoprotection against UV damage
- Beta-carotene supplementation (25-50 mg/day) reduces sunburn severity by approximately 20-40%
- Improves skin appearance (tone, elasticity)

**Cognitive function:**
- Higher lutein levels associated with better cognitive performance and reduced age-related cognitive decline
- Some evidence for protective effects against dementia

**Dietary intake and sources:**

No official RDA for non-provitamin A carotenoids, though observational studies suggest benefits at:
- Lutein + zeaxanthin: 6-10 mg/day combined
- Lycopene: 5-10 mg/day
- Beta-carotene: 3-6 mg/day from food sources

**Rich dietary sources:**
- **Beta-carotene:** Sweet potato (1 medium = 15 mg), carrot (1 medium = 5-10 mg), spinach (1 cup cooked = 11 mg)
- **Lycopene:** Tomato sauce (1/2 cup = 20-30 mg), watermelon (1 cup = 6-8 mg), pink grapefruit (1/2 = 2-3 mg)
- **Lutein:** Kale (1 cup cooked = 23 mg), spinach (1 cup cooked = 20 mg), egg yolks (1 yolk = 0.2-0.3 mg)
- **Zeaxanthin:** Corn (1/2 cup = 0.5 mg), orange peppers (1 medium = 1-2 mg), egg yolks (1 yolk = 0.2 mg)

**Supplement considerations:**

Carotenoid supplements are available as single compounds or mixtures. Important considerations:

- **Natural versus synthetic:** Natural beta-carotene is a mixture of cis- and trans-isomers; synthetic is primarily all-trans. Natural may be preferable.
- **Dosing:** Supplement doses often exceed dietary levels (10-25 mg beta-carotene, 10-20 mg lutein, 15-30 mg lycopene)
- **Third-party testing:** Verify content and purity through USP, ConsumerLab, or NSF certification
- **Taken with fat:** Consume with meals containing fat for optimal absorption

**Safety and cautions:**

**Carotenodermia:** Very high carotenoid intake (especially beta-carotene) causes harmless yellowing/oranging of skin, particularly palms and soles. Resolves when intake is reduced. Not harmful, but cosmetically noticeable.

**Beta-carotene and smoking:** Two major trials (ATBC, CARET) found high-dose beta-carotene supplementation (20-30 mg/day) increased lung cancer risk by 18-28% in smokers and asbestos-exposed individuals. Mechanism unclear but may involve pro-oxidant effects at high doses in oxidative environments. **Current and former heavy smokers should avoid high-dose beta-carotene supplements.**

**Food sources are safe:** No adverse effects from dietary carotenoid intake, regardless of amount.

**Drug interactions:** Carotenoids can interact with orlistat (fat absorption blocker) and cholestyramine (bile acid sequestrant), reducing absorption. Mineral oil laxatives also impair absorption.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['The AREDS2 trial found that 10 mg lutein + 2 mg zeaxanthin daily reduced progression to advanced age-related macular degeneration by 10-25% over 5 years', 'One medium sweet potato provides approximately 15 mg beta-carotene (about 1,250 mcg RAE of vitamin A), exceeding the daily adequate intake', 'Meta-analyses show lycopene intake of 9-21 mg/day (from tomato products) reduces systolic blood pressure by 4-5 mmHg and is associated with 10-20% reduced prostate cancer risk', 'Cooking tomatoes with a small amount of oil increases lycopene bioavailability by 2-4 fold compared to raw tomatoes due to cell wall breakdown and lipid presence'],
  NULL,
  'Carotenoids - Suppl.me Glossary',
  'Fat-soluble pigments with antioxidant properties; some convert to vitamin A'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 30. Catalase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'catalase',
  'Catalase',
  NULL,
  NULL,
  'An endogenous antioxidant enzyme that breaks down hydrogen peroxide into water and oxygen, protecting cells from oxidative damage.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Catalase - Suppl.me Glossary',
  'Antioxidant enzyme breaking down hydrogen peroxide to protect cells'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 31. Chelated
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'chelated',
  'Chelated',
  NULL,
  'key-LAY-shun',
  'A process where a mineral is bound to an organic molecule, such as an amino acid or organic acid. This binding creates a stable complex that may enhance the mineral''s absorption and bioavailability in the body.',
  'The term comes from the Greek word ''chele,'' meaning claw, referring to how the organic molecule ''grabs onto'' the mineral like a crab''s claw.

How Chelation Works:

In a chelated mineral supplement:
1. Binding: The mineral ion is bonded to an organic molecule (the chelating agent)
2. Protection: This complex protects the mineral from interacting with other compounds in the digestive tract that might inhibit absorption
3. Transport: The chelated complex may be absorbed more efficiently through the intestinal wall
4. Release: Once absorbed, the mineral is released from the chelating agent for use by the body

Common Chelating Agents:

• Amino acid chelates: Minerals bound to amino acids like glycine (e.g., magnesium glycinate, zinc glycinate)
• Picolinates: Minerals bound to picolinic acid (e.g., chromium picolinate)
• Citrates: Minerals bound to citric acid (e.g., calcium citrate, magnesium citrate)
• Malates: Minerals bound to malic acid (e.g., magnesium malate)
• Aspartates: Minerals bound to aspartic acid
• Orotates: Minerals bound to orotic acid (e.g., magnesium orotate)

Advantages of Chelated Minerals:

• Enhanced absorption: Chelation may improve bioavailability compared to inorganic mineral salts
• Reduced interactions: Chelation protects minerals from binding with phytates, oxalates, or other dietary factors that inhibit absorption
• Better tolerance: Some chelated forms cause less gastrointestinal discomfort than inorganic salts
• Stability: The chelate complex remains stable through the digestive process
• Lower doses needed: Higher bioavailability may allow for smaller doses

Common Chelated Mineral Supplements:

Magnesium Glycinate: Magnesium bound to glycine; known for high bioavailability and minimal laxative effect compared to other magnesium forms.

Zinc Picolinate: Zinc bound to picolinic acid; research suggests superior absorption compared to zinc oxide or zinc gluconate.

Iron Bisglycinate: Iron bound to two glycine molecules; associated with better absorption and fewer gastrointestinal side effects than ferrous sulfate.

Calcium Citrate: Calcium bound to citric acid; more easily absorbed than calcium carbonate, especially in individuals with low stomach acid.

Chelated vs. Non-Chelated Forms:

Non-chelated (inorganic) forms include:
• Oxides (e.g., magnesium oxide, zinc oxide)
• Sulfates (e.g., ferrous sulfate)
• Carbonates (e.g., calcium carbonate)

These forms are often less expensive but may have lower bioavailability and cause more digestive side effects. However, some inorganic forms (like magnesium oxide) can be therapeutic for specific purposes (e.g., as a laxative).

Research Evidence:

Scientific evidence for enhanced absorption of chelated minerals varies:
• Well-supported: Iron bisglycinate and zinc picolinate show consistent evidence of improved absorption
• Moderately supported: Magnesium glycinate and calcium citrate have some evidence of benefits
• Mixed evidence: Some chelated forms lack strong comparative research
• Individual variation: Bioavailability differences may be more pronounced in certain individuals (e.g., those with digestive issues)

Considerations:

• Cost: Chelated minerals typically cost more than inorganic forms
• Elemental content: Chelated forms may contain less elemental mineral per dose due to the weight of the chelating agent
• Quality matters: Not all ''chelated'' products are created equal; manufacturing processes vary
• Context-dependent benefits: Bioavailability advantages may be more significant in certain populations or with certain minerals',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Chelated - Suppl.me Glossary',
  'Minerals bound to organic molecules to enhance absorption and bioavailability'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 32. Chylomicrons
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'chylomicrons',
  'Chylomicrons',
  NULL,
  NULL,
  'Large lipoprotein particles produced by intestinal cells that transport dietary fats and fat-soluble vitamins from the digestive system through the lymphatic system into the bloodstream.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Chylomicrons - Suppl.me Glossary',
  'Lipoprotein particles that transport dietary fats from intestines to tissues'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 33. Confidence Interval
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ci',
  'Confidence Interval',
  'CI',
  NULL,
  'A range of values that is likely to contain the true effect size with a specified level of confidence (typically 95%), providing information about the precision and uncertainty of a study''s findings.',
  'A Confidence Interval (CI) quantifies the uncertainty around an estimated effect. When a study reports a mean difference of -5.2 mmHg (95% CI: -8.1 to -2.3), this means we can be 95% confident that the true effect lies somewhere between -8.1 and -2.3 mmHg. The width of the CI indicates precision: narrow intervals suggest precise estimates with low uncertainty, while wide intervals indicate high uncertainty and imprecise estimates.

The 95% confidence level is conventional, meaning if we repeated the study many times, 95% of the calculated CIs would contain the true effect. However, any single CI either contains the true value or doesn''t—the 95% refers to the long-run performance of the method, not the probability that a specific interval contains the true value.

For hypothesis testing, the CI provides more information than a p-value alone. If a CI for a mean difference includes zero, the result is not statistically significant at the corresponding α level (e.g., 95% CI corresponds to α = 0.05). If the entire CI is on one side of zero, the result is statistically significant. For example, RR = 0.72 (95% CI: 0.58-0.89) is statistically significant because the entire interval is below 1.0 (indicating benefit), while RR = 0.85 (95% CI: 0.68-1.06) is not significant because the CI includes 1.0 (no effect).

CI width depends on sample size, outcome variability, and the chosen confidence level. Larger studies produce narrower CIs. Meta-analyses combine data from multiple studies to achieve narrower, more precise CIs than any single study. A meta-analysis reporting SMD = -0.35 (95% CI: -0.49 to -0.21) provides better precision than a single RCT reporting SMD = -0.40 (95% CI: -0.71 to -0.09), even though the point estimates are similar.

When evaluating supplement research, always examine the CI, not just the point estimate. A study showing ''significant'' benefit might have a wide CI barely excluding zero, suggesting weak evidence. Conversely, a ''non-significant'' finding with a narrow CI near zero provides strong evidence of minimal or no effect. The CI reveals whether the uncertainty is compatible with clinically meaningful benefit, no effect, or potential harm.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium reduces systolic blood pressure by -4.18 mmHg (95% CI: -5.84 to -2.52), showing a statistically significant and precisely estimated benefit', 'Probiotic supplementation shows WMD = -0.8 kg (95% CI: -2.1 to 0.5 kg) for body weight—not significant (includes zero) and compatible with minimal effect', 'Vitamin D supplementation: RR = 0.88 (95% CI: 0.79-0.98) for fractures—statistically significant, but the narrow CI near 1.0 suggests a modest effect'],
  NULL,
  'Confidence Interval - Suppl.me Glossary',
  'Range of values likely to contain the true effect size with specified confidence'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 34. Clinical Significance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'clinicalsignificance',
  'Clinical Significance',
  NULL,
  NULL,
  'The practical importance of a treatment effect—whether it makes a real, noticeable difference in people''s health and daily lives.',
  'Clinical significance refers to whether a research finding has practical, meaningful implications for patient care and health outcomes. Unlike statistical significance, which is a mathematical measure, clinical significance considers whether the magnitude of an effect is large enough to matter in real-world settings.

A study result can be statistically significant but not clinically significant. For example, a supplement might produce a statistically significant 2% improvement in a health marker, but this small change may not translate to noticeable health benefits or be worth the cost and effort of supplementation.

In supplement research, clinical significance helps bridge the gap between laboratory findings and practical recommendations. It considers factors like the size of the effect, the importance of the outcome, potential side effects, cost, and how the results compare to other available interventions. Clinically significant results are those that would reasonably influence clinical practice or personal health decisions.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A calcium supplement showing both statistically and clinically significant reduction in fracture risk in elderly populations.', 'Omega-3 supplementation producing a statistically significant but clinically insignificant 1% change in cholesterol levels.', 'Vitamin D supplementation leading to clinically meaningful improvements in muscle strength and fall prevention in older adults.'],
  NULL,
  'Clinical Significance - Suppl.me Glossary',
  'The practical importance of a treatment effect in real-world health outcomes'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 35. Coenzyme Q10
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'coenzymeq10',
  'Coenzyme Q10',
  'CoQ10, ubiquinone',
  'koh-EN-zime Q-ten',
  'A fat-soluble compound found in every cell of the body that serves two critical functions: as an essential component of the mitochondrial electron transport chain for ATP production, and as a powerful antioxidant that protects cell membranes and lipoproteins from oxidative damage. The body produces CoQ10 naturally, but levels decline with age and certain medications (particularly statins).',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Coenzyme Q10 - Suppl.me Glossary',
  'Compound critical for mitochondrial energy production and antioxidant protection'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 36. Cognitive Function
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'cognitivefunction.tsx',
  'Cognitive Function',
  NULL,
  NULL,
  'The mental processes involved in acquiring knowledge and understanding, including attention, memory, reasoning, problem-solving, decision-making, and processing speed.',
  'Cognitive function encompasses multiple domains of mental ability that allow us to think, learn, remember, and interact with the world. Key domains include: executive function (planning, decision-making, impulse control), working memory (holding and manipulating information), processing speed (how quickly information is processed), verbal ability (language and communication), and visuospatial skills (understanding spatial relationships). Cognitive performance varies naturally throughout the day and across the lifespan.

Cognitive function is assessed through standardized tests like the Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA), and domain-specific tests measuring memory, attention, and processing speed. Normal cognitive aging involves some decline in processing speed and working memory, but wisdom, vocabulary, and accumulated knowledge often improve with age. Pathological cognitive decline (as seen in dementia or Alzheimer''s disease) is more severe and interferes with daily functioning.

Factors supporting cognitive health include regular physical exercise (particularly aerobic activity), mentally stimulating activities, quality sleep, stress management, social engagement, cardiovascular health, and nutrition. Certain supplements show promise for cognitive support, including omega-3 fatty acids (particularly DHA), B vitamins, vitamin D, magnesium, creatine, and specific compounds like ashwagandha and citicoline, though evidence varies by population and cognitive domain.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Ashwagandha supplementation (300-600mg daily) improved memory, executive function, attention, and information processing speed in healthy adults and those with mild cognitive impairment', 'Omega-3 DHA is a major structural component of brain cell membranes and may support cognitive function, particularly in older adults with low baseline intake', 'Creatine supplementation (5g daily) enhanced working memory and processing speed in healthy adults, particularly during cognitive stress or sleep deprivation'],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 37. Cohort Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'cohortstudy',
  'Cohort Study',
  NULL,
  NULL,
  'A type of observational research that follows a group of people (cohort) who share a common characteristic over time to determine how different exposures affect the development of specific outcomes.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Cohort Study - Suppl.me Glossary',
  'Observational study following groups over time to assess exposure-outcome relationships'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 38. Collagen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'collagen',
  'Collagen',
  NULL,
  NULL,
  'The most abundant protein in the human body, providing structural support and strength to skin, bones, tendons, ligaments, cartilage, and connective tissues throughout the body.',
  'Collagen is a family of fibrous proteins that form a triple-helix structure, providing tensile strength and structural integrity to tissues. There are at least 28 different types of collagen, with Type I (skin, bone, tendon), Type II (cartilage), and Type III (skin, blood vessels) being most abundant. Collagen molecules are made from amino acids, particularly glycine, proline, and hydroxyproline, with vitamin C required for proper collagen synthesis.

Natural collagen production peaks in early adulthood and declines with age, decreasing about 1% per year after age 20. This decline manifests as wrinkles, reduced skin elasticity, joint stiffness, weaker bones, and slower wound healing. Factors that accelerate collagen breakdown include UV radiation, smoking, high sugar consumption, chronic inflammation, and oxidative stress.

Collagen supplements typically provide hydrolyzed collagen (collagen peptides)—broken-down collagen that''s easier to digest and absorb. Once absorbed, these amino acids can be used by the body to build new collagen and other proteins. Research suggests collagen peptide supplementation (typically 2.5-15g daily) may improve skin hydration and elasticity, reduce joint pain, support bone density, and enhance muscle mass when combined with resistance training, though individual responses vary.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Collagen peptide supplementation (2.5-10g daily for 8+ weeks) improved skin elasticity, hydration, and reduced wrinkles in multiple clinical trials', 'Collagen supplements (10g daily) reduced joint pain and improved joint function in athletes and people with osteoarthritis', 'Vitamin C (at least 100mg daily) is essential for collagen synthesis, working synergistically with collagen supplements'],
  NULL,
  'Collagen - Suppl.me Glossary',
  'Most abundant protein providing structural support to tissues'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 39. Colonocytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'colonocytes',
  'Colonocytes',
  NULL,
  NULL,
  'The epithelial cells that line the colon (large intestine). These specialized cells form a protective barrier and play crucial roles in nutrient absorption, water reabsorption, and immune function.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Colonocytes - Suppl.me Glossary',
  'Epithelial cells lining the colon that rely on butyrate for energy'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 40. Contraindications
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'contraindications',
  'Contraindications',
  NULL,
  NULL,
  'A specific situation, condition, or characteristic that makes a particular supplement or treatment inadvisable or potentially harmful. Contraindications indicate when a supplement should not be used because the risks outweigh any potential benefits.',
  'Understanding contraindications is essential for safe supplement use and helps avoid potentially dangerous situations.

Types of Contraindications:

Absolute Contraindications: Situations where a supplement should NEVER be used because it poses serious or life-threatening risk. The supplement is strictly forbidden under these circumstances.

Examples of absolute contraindications:
• St. John''s Wort with certain antidepressants (risk of serotonin syndrome)
• High-dose vitamin K with warfarin (interferes with blood thinning)
• Iron supplements in hemochromatosis (iron overload disorder)

Relative Contraindications: Situations where a supplement is generally not recommended but might be used with caution, close monitoring, or medical supervision if benefits are judged to outweigh risks.

Examples of relative contraindications:
• Omega-3 supplements before surgery (bleeding risk, but manageable)
• Calcium supplements with certain antibiotics (absorption interference)
• Ginkgo biloba with bleeding disorders (increased bleeding risk)

Common Contraindication Categories:

Medical Conditions - Certain health conditions create contraindications for specific supplements:
• Kidney disease: High-dose protein, potassium, phosphorus, or magnesium supplements
• Liver disease: High-dose vitamins A and D, certain herbs (kava, comfrey)
• Bleeding disorders: Blood-thinning supplements (garlic, ginkgo, high-dose omega-3s)
• Autoimmune conditions: Immune-stimulating supplements (echinacea, astragalus)
• Hormone-sensitive cancers: Phytoestrogen supplements (soy isoflavones, red clover)
• Hyperthyroidism: Iodine or iodine-containing supplements (kelp, seaweed)

Medications - Many supplement-drug combinations create contraindications:
• Blood thinners: Supplements with anticoagulant effects
• Diabetes medications: Supplements affecting blood glucose
• Immunosuppressants: Immune-boosting supplements
• Blood pressure medications: Supplements affecting blood pressure
• Thyroid hormones: Supplements affecting thyroid function

Life Stages:
• Pregnancy: Many herbs, high-dose vitamins, weight loss supplements
• Breastfeeding: Supplements that pass into breast milk and may affect infant
• Children: Adult-dosed supplements, certain herbs, stimulants
• Elderly: May have increased sensitivity or multiple medications

Upcoming Medical Procedures:
• Surgery: Blood-thinning supplements, immune modulators, supplements affecting anesthesia
• Medical testing: Supplements that might interfere with test results

Specific Supplement Examples:

Vitamin K: Contraindicated with warfarin and other anticoagulants. Reason: Vitamin K promotes blood clotting and directly counteracts warfarin''s therapeutic effect.

Ginkgo Biloba: Contraindicated with bleeding disorders, upcoming surgery, blood-thinning medications. Reason: May increase bleeding risk.

Iron Supplements: Contraindicated with hemochromatosis, hemosiderosis, repeated blood transfusions. Reason: Can worsen iron overload conditions.

Calcium Supplements: Contraindicated with hypercalcemia, certain kidney conditions, specific heart conditions. Reason: May worsen high blood calcium or contribute to calcium deposits.

Potassium Supplements: Contraindicated with kidney disease, certain medications (ACE inhibitors, potassium-sparing diuretics). Reason: Can lead to dangerous hyperkalemia (high potassium levels).

Why Contraindications Matter:

Understanding and respecting contraindications is crucial because:
• Safety: Prevents potentially life-threatening situations
• Treatment efficacy: Avoids interference with necessary medications
• Disease management: Prevents worsening of existing conditions
• Legal/ethical responsibility: Healthcare providers must inform patients of contraindications
• Informed decision-making: Consumers can make safer choices

How to Identify Contraindications:

Resources for finding contraindication information:
• Product labels: Should list major contraindications and warnings
• Healthcare providers: Doctors, pharmacists, and dietitians can assess your specific situation
• Medical databases: Professional resources like drug interaction checkers
• Reputable health websites: NIH, Mayo Clinic, WebMD provide contraindication information
• Scientific literature: Case reports and studies document contraindications
• Package inserts: Detailed product information sheets

Before Starting a New Supplement:

To identify potential contraindications:
1. List your conditions: Document all diagnosed medical conditions
2. List your medications: Include prescription, over-the-counter, and other supplements
3. Note upcoming procedures: Surgeries, medical tests, or treatments planned
4. Consider life stage: Pregnancy, breastfeeding, age-related factors
5. Research the supplement: Look for contraindication information
6. Consult professionals: Discuss with healthcare providers before starting
7. Start carefully: Even without known contraindications, monitor for adverse effects

Special Populations:

Pregnancy and Breastfeeding - Many supplements are contraindicated during pregnancy/nursing due to:
• Potential birth defects (teratogenic effects)
• Uterine stimulation or effects on pregnancy
• Passage into breast milk
• Lack of safety data in pregnant women

Children - Pediatric contraindications often exist because:
• Developing bodies process supplements differently
• Safety has not been established in children
• Risk of overdose with adult-formulated products
• Potential interference with growth and development

Limitations and Evolving Knowledge:

Contraindication information has limitations:
• Incomplete research: Not all potential contraindications are known
• Individual variation: Some people may have unique contraindications
• Emerging evidence: New contraindications are discovered over time
• Dose-dependent: Some contraindications apply only at high doses
• Quality variation: Contaminated or mislabeled products create unpredicted contraindications',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Contraindications - Suppl.me Glossary',
  'Specific situations or conditions where a supplement should not be used'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 41. Cortisol
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'cortisol',
  'Cortisol',
  NULL,
  NULL,
  'A steroid hormone produced by the adrenal glands that regulates metabolism, immune function, and the body''s stress response, following a natural daily rhythm.',
  'Cortisol is often called the ''stress hormone'' because it rises in response to physical or psychological stress as part of the fight-or-flight response. However, cortisol has many essential functions beyond stress response: it regulates blood sugar by promoting glucose production, influences immune function, controls inflammation, affects sleep-wake cycles, and helps maintain blood pressure. Cortisol follows a diurnal rhythm, typically peaking 30-45 minutes after waking (the cortisol awakening response) and gradually declining throughout the day to reach lowest levels at night.

Chronically elevated cortisol from ongoing stress can lead to problems including weight gain (particularly abdominal fat), insulin resistance, high blood pressure, weakened immune function, poor sleep, memory problems, and mood disturbances. Cushing''s syndrome is a rare condition of severe cortisol excess. Conversely, insufficient cortisol production (adrenal insufficiency or Addison''s disease) causes fatigue, weakness, low blood pressure, and inability to respond to stress.

Cortisol levels are measured through blood, saliva, or urine tests. Managing stress through lifestyle interventions—including regular exercise, adequate sleep, meditation, social connection, and time in nature—helps maintain healthy cortisol patterns. Some supplements, particularly adaptogens like ashwagandha and Rhodiola, may help modulate cortisol responses to stress, though evidence is still emerging.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Ashwagandha supplementation (300-600mg daily for 6-8 weeks) reduced cortisol levels by 14-28% in chronically stressed adults', 'Regular moderate-intensity exercise helps normalize cortisol rhythms, though excessive high-intensity training without adequate recovery can elevate cortisol', 'Chronic sleep deprivation disrupts normal cortisol patterns, leading to elevated evening cortisol and blunted morning response'],
  NULL,
  'Cortisol - Suppl.me Glossary',
  'Stress hormone regulating metabolism and immune function'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 42. Creatine Kinase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'creatinekinase',
  'Creatine Kinase',
  'CK, CPK (Creatine Phosphokinase)',
  'kree-uh-tin ky-nase',
  'An enzyme found primarily in muscle tissue (skeletal muscle, heart, and brain) that catalyzes the conversion of creatine to phosphocreatine, storing energy for rapid ATP regeneration. Blood creatine kinase levels are used as a biomarker of muscle damage or stress.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Creatine Kinase - Suppl.me Glossary',
  'Enzyme and biomarker of muscle damage'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 43. Cross-Sectional Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'crosssectionalstudy',
  'Cross-Sectional Study',
  NULL,
  NULL,
  'A type of observational research that analyzes data from a population at a single point in time, providing a ''snapshot'' of the relationship between variables without following participants over time.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Cross-Sectional Study - Suppl.me Glossary',
  'Observational study analyzing data from a population at one specific point in time'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 44. CRP (C-Reactive Protein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'crp',
  'CRP (C-Reactive Protein)',
  'CRP, hs-CRP (high-sensitivity CRP)',
  'see-are-pee / see-ree-ak-tiv pro-teen',
  'An acute phase protein produced by the liver in response to inflammation, serving as a sensitive biomarker of systemic inflammation and cardiovascular disease risk.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['An individual with hs-CRP of 4.2 mg/L (high cardiovascular risk) who loses weight, exercises regularly, and takes curcumin supplements may reduce it to 2.1 mg/L (average risk)', 'Curcumin supplementation reduced CRP by 1.55 mg/L in meta-analyses of populations with chronic inflammation, representing a meaningful risk reduction', 'Magnesium supplementation (250-500mg daily) reduced serum CRP significantly (SMD -0.356) in individuals with baseline CRP >3 mg/L, showing anti-inflammatory benefits'],
  NULL,
  'CRP (C-Reactive Protein) - Suppl.me Glossary',
  'Inflammatory biomarker produced by the liver in response to inflammation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 45. Cytokines
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'cytokines',
  'Cytokines',
  NULL,
  'SY-toh-kines',
  'A broad category of small signaling proteins secreted by cells, particularly immune cells, that mediate and regulate immune responses, inflammation, and cell communication. Cytokines include interleukins (IL), interferons (IFN), tumor necrosis factors (TNF), and many others.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Cytokines - Suppl.me Glossary',
  'Signaling proteins that mediate and regulate immune responses and inflammation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 46. Deficiency
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'deficiency',
  'Deficiency',
  NULL,
  NULL,
  'A nutrient deficiency occurs when the body doesn''t get or can''t absorb enough of a nutrient to meet its physiological needs. Deficiencies can range from subclinical (measurable in lab tests but not causing obvious symptoms) to severe (causing clear clinical symptoms and disease).',
  NULL,
  'Supplement effectiveness often depends on baseline status. In deficient individuals, supplementation typically shows strong benefits as it corrects the deficiency. In sufficient individuals, additional supplementation may show minimal benefits or none. This is why baseline testing and stratification by deficiency status is important in clinical trials.',
  NULL,
  NULL,
  NULL,
  ARRAY['Iron deficiency: Most common nutrient deficiency worldwide; causes anemia and fatigue', 'Vitamin D deficiency: Extremely common in northern climates; affects bone health and immunity', 'Vitamin B12 deficiency: Common in vegans and older adults; causes anemia and neurological symptoms', 'Magnesium deficiency: Often subclinical; may affect cardiovascular health and muscle function', 'Iodine deficiency: Rare in developed countries with iodized salt; causes thyroid dysfunction'],
  NULL,
  'Deficiency - Suppl.me Glossary',
  'Insufficient nutrient levels in the body causing impaired function or clinical symptoms'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 47. DHA (Docosahexaenoic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'dha',
  'DHA (Docosahexaenoic Acid)',
  'DHA',
  'doh-koh-suh-hex-uh-ee-no-ik as-id',
  'DHA is a long-chain omega-3 fatty acid that serves as a major structural component of the brain, retina, and nervous system. It''s essential for brain development in infants and cognitive function throughout life.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'DHA (Docosahexaenoic Acid) - Suppl.me Glossary',
  'Docosahexaenoic acid - an omega-3 fatty acid essential for brain and eye health'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 48. Diastolic Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'diastolic',
  'Diastolic Blood Pressure',
  NULL,
  'dye-uh-stol-ik',
  'Diastolic blood pressure is the bottom number in a blood pressure reading, representing the pressure in the arteries when the heart is at rest between beats. It measures the minimum pressure on artery walls during the heart''s relaxation phase.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Diastolic Blood Pressure - Suppl.me Glossary',
  'The bottom number in blood pressure readings, measuring minimum arterial pressure when the heart rests'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 49. DOMS (Delayed Onset Muscle Soreness)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'doms',
  'DOMS (Delayed Onset Muscle Soreness)',
  'DOMS',
  NULL,
  'Muscle pain and stiffness that develops 12-24 hours after unaccustomed or intense exercise, typically peaking at 24-72 hours and gradually resolving over 5-7 days.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'DOMS (Delayed Onset Muscle Soreness) - Suppl.me Glossary',
  'Muscle pain and stiffness occurring 12-72 hours after intense or unfamiliar exercise'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 50. Dose-Dependent
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'dosedependent',
  'Dose-Dependent',
  NULL,
  NULL,
  'A relationship where the magnitude of a biological effect (either beneficial or adverse) changes systematically with the amount of substance administered. Also called dose-response relationship.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Dose-Dependent - Suppl.me Glossary',
  'A relationship where effect magnitude changes with the amount administered'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 51. Double Blinded
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'doubleblinded',
  'Double Blinded',
  NULL,
  NULL,
  'A study design where neither participants nor researchers know who is receiving the active treatment versus placebo until the study ends.',
  'Double-blinded studies represent the gold standard in clinical research. In these studies, neither the participants nor the researchers who interact with them and collect data know which participants are receiving the active supplement and which are receiving the placebo. Only an independent party (often a data management team) maintains the code that reveals group assignments, and this code is not broken until after all data has been collected.

This design eliminates both participant bias and researcher bias. Participants cannot alter their behavior or reporting based on knowing what they''re receiving, and researchers cannot unconsciously influence participants or interpret results differently based on knowing who received the treatment. This ensures that observed differences between groups are due to the supplement itself, not to expectations or biased assessments.

Double-blinding is particularly important in supplement research where many outcomes (like pain levels, energy, or mood) are subjective and could be influenced by expectations. It provides the most reliable evidence about whether a supplement truly works.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A vitamin D trial where neither participants nor research staff know group assignments until the study concludes and the code is broken.', 'An ashwagandha study using identical-looking capsules where both subjects and investigators are blinded to treatment allocation.', 'A magnesium study where an independent pharmacy prepares numbered bottles so neither researchers nor participants know which contains the active supplement.'],
  NULL,
  'Double Blinded - Suppl.me Glossary',
  'A study where neither participants nor researchers know group assignments'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 52. Drug Interactions
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'druginteractions',
  'Drug Interactions',
  NULL,
  NULL,
  'Situations where a supplement, food, or medication affects how another drug works in the body. These interactions can increase or decrease the effectiveness of medications, alter their side effects, or create new health risks.',
  'In the context of supplements, drug interactions specifically refer to how dietary supplements influence pharmaceutical medications or other supplements.

Types of Drug Interactions:

Pharmacodynamic Interactions: The supplement and drug have similar or opposite effects on the body, leading to additive, synergistic, or antagonistic results.

Examples:
• Additive: Omega-3 supplements + blood-thinning medication = increased bleeding risk
• Antagonistic: Vitamin K + warfarin = reduced blood-thinning effect
• Synergistic: St. John''s Wort + antidepressants = risk of serotonin syndrome

Pharmacokinetic Interactions: The supplement affects how the body absorbs, distributes, metabolizes, or excretes the medication.

Types include:
• Absorption: Calcium supplements interfere with thyroid medication absorption
• Metabolism: St. John''s Wort increases enzyme activity, speeding up drug breakdown
• Distribution: Supplements competing for protein binding sites
• Excretion: Supplements affecting kidney function alter drug elimination

Common Supplement-Drug Interactions:

St. John''s Wort:
• Interacts with: Antidepressants, birth control pills, blood thinners, immunosuppressants, HIV medications, chemotherapy drugs
• Mechanism: Induces liver enzymes (particularly CYP3A4), accelerating drug metabolism
• Result: Reduced medication effectiveness; potentially dangerous with antidepressants

Calcium:
• Interacts with: Thyroid medications, certain antibiotics (tetracyclines, fluoroquinolones), bisphosphonates
• Mechanism: Binds to medications in the digestive tract, preventing absorption
• Result: Reduced medication effectiveness
• Solution: Separate doses by 2-4 hours

Iron:
• Interacts with: Thyroid medications, antibiotics, levodopa, proton pump inhibitors
• Mechanism: Forms complexes with medications, preventing absorption
• Result: Reduced effectiveness of both iron and medication
• Solution: Separate doses, often by 2-4 hours

Ginkgo Biloba:
• Interacts with: Blood thinners (warfarin, aspirin), NSAIDs, antiplatelet drugs
• Mechanism: Has antiplatelet effects that add to medication effects
• Result: Increased bleeding risk

Vitamin K:
• Interacts with: Warfarin and other anticoagulants
• Mechanism: Promotes blood clotting, directly opposes warfarin''s action
• Result: Reduced anticoagulant effect, increased clotting risk

Magnesium:
• Interacts with: Antibiotics (tetracyclines, fluoroquinolones), bisphosphonates, certain diuretics
• Mechanism: Binds to medications or affects electrolyte balance
• Result: Reduced medication absorption or altered electrolyte levels

Grapefruit Juice (not a supplement, but relevant):
• Interacts with: Statins, calcium channel blockers, many other medications
• Mechanism: Inhibits intestinal enzymes, increasing drug absorption
• Result: Dangerously high drug levels and increased side effects

Interactions by Drug Class:

Blood Thinners (Anticoagulants/Antiplatelets):
Supplements to avoid or use cautiously:
• Vitamin E (high doses)
• Omega-3 fatty acids (high doses)
• Garlic supplements
• Ginkgo biloba
• Vitamin K (opposes effect)
• Ginger (high doses)
• Turmeric/curcumin (high doses)

Diabetes Medications:
Supplements that may affect blood glucose:
• Chromium
• Alpha-lipoic acid
• Cinnamon
• Fenugreek
• Bitter melon
Risk: Hypoglycemia (dangerously low blood sugar) if combined effects are too strong

Blood Pressure Medications:
Supplements that may affect blood pressure:
• Potassium (with potassium-sparing diuretics or ACE inhibitors)
• Coenzyme Q10
• Hawthorn
• Fish oil (high doses)

Immunosuppressants:
Supplements to avoid:
• Echinacea
• Astragalus
• Other immune-stimulating herbs
• St. John''s Wort (reduces drug levels)
Risk: Reduced medication effectiveness or immune system activation

Timing Strategies to Minimize Interactions:

Many absorption-related interactions can be minimized by separating doses:
• General rule: Space supplements and medications 2-4 hours apart
• Thyroid medications: Take on empty stomach; wait 4 hours before calcium, iron, or other supplements
• Antibiotics: Follow specific timing instructions for each type
• Bisphosphonates: Take alone on empty stomach; wait 30-60 minutes before other substances

Note: Timing separation doesn''t help with metabolic interactions (e.g., St. John''s Wort effects persist regardless of timing).

Risk Factors for Drug Interactions:

• Multiple medications: More drugs = higher interaction risk (polypharmacy)
• Multiple supplements: Taking many supplements increases interaction complexity
• High doses: Interactions more likely at higher supplement doses
• Chronic conditions: Kidney or liver disease affects how substances are processed
• Age: Elderly often take more medications and process drugs differently
• Genetic factors: Variation in enzyme activity affects interaction risk

Detecting Drug Interactions:

Before They Occur:
• Consult healthcare providers: Inform all doctors about all supplements and medications
• Ask pharmacists: They can check for interactions when filling prescriptions
• Use interaction checkers: Online tools can screen for known interactions
• Read labels: Supplement and medication labels list major interactions

After They Occur:
Signs a supplement may be interacting with medication:
• Medication becomes less effective
• Medication becomes more effective (unusual responses)
• New or worsened side effects appear
• Lab test results change unexpectedly
• Symptoms of the condition being treated return or worsen

Preventing Drug Interactions:

1. Maintain a complete list: Document all medications, supplements, and OTC products
2. Communicate openly: Share your complete list with all healthcare providers
3. Ask before adding: Consult professionals before starting new supplements
4. Read all labels: Check for interaction warnings
5. Use one pharmacy: Pharmacists can track your medications and check for interactions
6. Monitor effects: Pay attention to changes when starting new supplements
7. Keep current: Update your list as you start or stop products
8. Don''t assume ''natural = safe'': Plant-based doesn''t mean interaction-free

When Drug Interactions Are Serious:

Some interactions require immediate medical attention:
• Signs of excessive bleeding (unusual bruising, prolonged bleeding)
• Symptoms of serotonin syndrome (confusion, rapid heart rate, fever, muscle rigidity)
• Severe low blood sugar (shakiness, confusion, loss of consciousness)
• Signs of organ toxicity (jaundice, dark urine, severe abdominal pain)
• Allergic reactions
• Sudden worsening of the condition being treated

Special Considerations:

Surgery:
Many supplements should be stopped before surgery due to interaction risks:
• Blood-thinning supplements (stop 1-2 weeks before)
• Supplements affecting blood pressure
• Supplements affecting blood sugar
• Supplements interacting with anesthesia

Emergency Situations:
In emergencies, inform medical staff about all supplements you take, as they can:
• Affect emergency medications
• Influence test results
• Complicate diagnosis
• Impact treatment decisions

Research Limitations:

Knowledge about supplement-drug interactions has gaps:
• Limited studies: Not all possible interactions have been researched
• Case reports: Many interactions known only from individual reports
• Dose-dependence: Interaction risk may vary with dose, but data is limited
• Quality variation: Different supplement products may interact differently
• Individual variation: Genetics and health status affect interaction likelihood',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Drug Interactions - Suppl.me Glossary',
  'How supplements affect medication effectiveness or create new health risks'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 53. Dysbiosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'dysbiosis',
  'Dysbiosis',
  NULL,
  'dis-by-OH-sis',
  'An imbalance in the composition, diversity, or function of the gut microbiome, characterized by a reduction in beneficial bacteria and/or overgrowth of potentially harmful microorganisms. Dysbiosis represents a disruption from the healthy symbiotic relationship between host and gut microbes.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Dysbiosis - Suppl.me Glossary',
  'Imbalance in gut microbiome composition reducing beneficial bacteria'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 54. Effect Size
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'effectsize',
  'Effect Size',
  NULL,
  NULL,
  'A quantitative measure of the magnitude of a phenomenon or the strength of a relationship, allowing comparison across different studies, outcome measures, and units of measurement.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Effect Size - Suppl.me Glossary',
  'Quantitative measure of treatment magnitude, independent of sample size'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 55. Efficacy
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'efficacy',
  'Efficacy',
  NULL,
  NULL,
  'The ability of a supplement or treatment to produce the desired beneficial effect under ideal, controlled conditions.',
  'Efficacy refers to how well a supplement works under optimal, controlled circumstances, such as in a randomized controlled trial. It answers the question: ''Can this supplement work when used under ideal conditions with high adherence and careful monitoring?''

Efficacy is distinct from effectiveness, which measures how well a supplement works in real-world settings where adherence may be imperfect and conditions are less controlled. A supplement might have high efficacy in clinical trials but lower effectiveness in everyday use if people struggle to take it consistently or if it requires specific conditions (like taking with food) that aren''t always met.

In supplement research, establishing efficacy through rigorous clinical trials is the first step. Once efficacy is demonstrated, researchers and healthcare providers can then assess whether those benefits translate to real-world effectiveness and whether the supplement should be recommended for general use.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Clinical trials demonstrating the efficacy of vitamin D in improving bone mineral density when taken daily at the recommended dose.', 'Studies showing the efficacy of omega-3 supplements in reducing triglyceride levels under controlled conditions.', 'Research establishing the efficacy of probiotic strains in reducing digestive symptoms when taken as directed.'],
  NULL,
  'Efficacy - Suppl.me Glossary',
  'The ability of a treatment to produce the desired effect under ideal conditions'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 56. Eicosanoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'eicosanoids',
  'Eicosanoids',
  'None (general class of compounds)',
  'eye-koh-suh-noids',
  'A family of signaling molecules derived from 20-carbon polyunsaturated fatty acids (primarily arachidonic acid and EPA) that regulate inflammation, immune function, blood clotting, pain, fever, blood pressure, and numerous other physiological processes at the cellular level.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['During tissue injury, arachidonic acid is converted to prostaglandin E2 (PGE2), causing pain, fever, redness, and swelling—classic signs of inflammation', 'Omega-3 supplementation (2g EPA daily) increases EPA in cell membranes, which competes with arachidonic acid for COX enzymes, reducing production of pro-inflammatory PGE2 by 20-30%', 'An individual taking ibuprofen for headache blocks COX-2 enzyme, preventing prostaglandin synthesis that causes pain and blood vessel dilation'],
  NULL,
  'Eicosanoids - Suppl.me Glossary',
  'Signaling molecules derived from omega-3 and omega-6 fatty acids'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 57. 8-OHdG
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'eightohdg',
  '8-OHdG',
  '8-hydroxy-2''-deoxyguanosine, 8-oxo-dG',
  NULL,
  'A modified DNA nucleoside formed when reactive oxygen species attack guanine bases in DNA, serving as one of the most widely used biomarkers for oxidative DNA damage and oxidative stress.',
  '8-hydroxy-2''-deoxyguanosine (8-OHdG), also known as 8-oxo-deoxyguanosine, is formed when hydroxyl radicals or other reactive oxygen species oxidize the guanine base in DNA. Among the four DNA bases (adenine, guanine, cytosine, thymine), guanine is most susceptible to oxidation due to its lowest redox potential. The formation and accumulation of 8-OHdG represents oxidative DNA damage that can lead to mutations if not properly repaired.

**Formation and significance:**

DNA is constantly exposed to oxidative stress from both endogenous sources (mitochondrial respiration, immune responses, metabolism) and exogenous sources (radiation, environmental toxins, cigarette smoke). When reactive oxygen species attack DNA, they can modify nucleotide bases, with 8-OHdG being one of the most abundant and well-characterized oxidative lesions. Approximately 10,000-100,000 oxidative DNA lesions occur per cell per day under normal physiological conditions, many of which are 8-OHdG.

**Repair mechanisms:**

Cells possess DNA repair systems to remove 8-OHdG and prevent its mutagenic effects. The base excision repair (BER) pathway, primarily involving 8-oxoguanine DNA glycosylase (OGG1), recognizes and removes 8-OHdG from DNA. The excised nucleoside is released into circulation and eventually excreted in urine. This urinary 8-OHdG reflects the balance between oxidative damage formation and repair capacity.

**Measurement and interpretation:**

**Urinary 8-OHdG:** The most common clinical measurement. Urinary levels reflect systemic oxidative DNA damage over the preceding hours and are often normalized to creatinine excretion (reported as ng 8-OHdG/mg creatinine). Normal levels typically range from 2-10 ng/mg creatinine, with higher values indicating increased oxidative stress.

**Serum/plasma 8-OHdG:** Reflects circulating 8-OHdG from damaged cells but is more variable and less standardized than urinary measurement.

**DNA 8-OHdG content:** Can be measured directly in cells or tissues using immunoassays or chromatographic methods, providing information about steady-state DNA damage levels.

**Clinical and research applications:**

8-OHdG has been extensively studied as a biomarker in numerous conditions:

**Cancer:** Elevated 8-OHdG has been observed in various cancers and is associated with increased cancer risk. The mutagenic potential of unrepaired 8-OHdG (it pairs with adenine instead of cytosine during replication, causing G→T transversions) contributes to carcinogenesis.

**Cardiovascular disease:** Higher 8-OHdG levels are associated with atherosclerosis, hypertension, and cardiovascular events, reflecting vascular oxidative stress.

**Metabolic disorders:** Diabetes, metabolic syndrome, and obesity show elevated 8-OHdG, correlating with glycemic control and insulin resistance.

**Neurodegenerative diseases:** Increased 8-OHdG has been found in Alzheimer''s disease, Parkinson''s disease, and other neurodegenerative conditions.

**Aging:** 8-OHdG levels tend to increase with age, supporting the oxidative stress theory of aging.

**Intervention responses:**

Multiple studies have used 8-OHdG to assess antioxidant interventions:
- Antioxidant supplementation (vitamins C and E, polyphenols, carotenoids) has shown variable effects on reducing 8-OHdG
- Exercise training paradoxically may transiently increase 8-OHdG acutely but reduce resting levels chronically
- Dietary patterns high in fruits, vegetables, and antioxidants are generally associated with lower 8-OHdG

**Limitations:**

While widely used, 8-OHdG has some limitations:
- Significant inter-individual variability
- Influenced by kidney function (affects urinary excretion)
- Collection and storage conditions affect stability
- Represents only one type of oxidative damage (other DNA lesions exist)
- Unclear whether reducing 8-OHdG translates to improved health outcomes',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Baseline urinary 8-OHdG in healthy adults typically ranges from 3-8 ng/mg creatinine, while smokers often show levels of 10-15 ng/mg creatinine, reflecting increased oxidative DNA damage.', 'A study of antioxidant supplementation (vitamins C and E plus beta-carotene for 3 months) reduced urinary 8-OHdG from 12.3 to 8.7 ng/mg creatinine in individuals with metabolic syndrome.', 'Individuals with poorly controlled type 2 diabetes (HbA1c >8%) show urinary 8-OHdG levels approximately 40-60% higher than non-diabetic controls.'],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 58. Electrolytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'electrolytes',
  'Electrolytes',
  NULL,
  NULL,
  'Minerals in the blood and body fluids that carry an electrical charge, essential for nerve function, muscle contraction, hydration, pH balance, and numerous other physiological processes.',
  'The major electrolytes include sodium, potassium, chloride, calcium, magnesium, bicarbonate, and phosphate. These minerals exist as ions (charged particles) in body fluids and must be maintained within narrow ranges for proper cellular function. Electrolytes regulate fluid balance between intracellular and extracellular compartments, enable nerve impulse transmission, trigger muscle contractions (including the heartbeat), maintain blood pH, support enzyme activity, and facilitate nutrient transport across cell membranes.

Electrolyte imbalances can be caused by dehydration, excessive sweating, vomiting, diarrhea, kidney disease, certain medications (diuretics), hormonal disorders, or inadequate dietary intake. Symptoms vary by which electrolyte is imbalanced but may include muscle cramps, weakness, fatigue, irregular heartbeat, confusion, seizures, or in severe cases, life-threatening cardiac or neurological complications.

Maintaining electrolyte balance involves adequate hydration, consuming a varied diet rich in fruits, vegetables, whole grains, and minerals, and replacing electrolytes lost during prolonged exercise or illness. Most healthy individuals eating a balanced diet don''t require electrolyte supplements, though athletes during endurance events, people in hot climates, or those with certain medical conditions may benefit. Sports drinks, electrolyte powders, or specific mineral supplements can restore electrolyte balance when needed.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium supplementation (300-400mg daily) can alleviate muscle cramps and support heart rhythm in people with low magnesium status', 'During prolonged exercise exceeding 60-90 minutes, consuming electrolyte-containing beverages helps maintain performance and prevents hyponatremia', 'Potassium-rich foods (bananas, sweet potatoes, spinach) help counterbalance high sodium intake and support healthy blood pressure'],
  NULL,
  'Electrolytes - Suppl.me Glossary',
  'Minerals carrying electrical charge essential for cellular function'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 59. Empirical Evidence
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'empiricalevidence',
  'Empirical Evidence',
  NULL,
  NULL,
  'Evidence obtained through observation, experimentation, or direct experience rather than theory or belief.',
  'Empirical evidence forms the foundation of scientific knowledge. It is information acquired through direct observation or experimentation that can be verified and replicated by others. In the context of supplement research, empirical evidence comes from controlled studies, clinical trials, and systematic observations.

Unlike theoretical predictions or anecdotal reports, empirical evidence follows rigorous scientific methods and is subject to peer review. This type of evidence is crucial for establishing the safety and efficacy of supplements because it provides objective, measurable data that can be independently verified.

The strength of empirical evidence varies depending on the study design, with randomized controlled trials typically providing the strongest empirical evidence, followed by observational studies and case reports.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Blood test results showing changes in vitamin D levels before and after supplementation.', 'Measured improvements in bone density from calcium supplementation documented through DEXA scans.', 'Laboratory analysis of inflammation markers in response to omega-3 supplementation.'],
  NULL,
  'Empirical Evidence - Suppl.me Glossary',
  'Evidence obtained through observation, experimentation, or direct experience'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 60. Endothelium
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'endothelium',
  'Endothelium',
  NULL,
  NULL,
  'The thin layer of specialized cells (endothelial cells) that lines the interior surface of all blood vessels and lymphatic vessels. This single-cell layer plays critical roles in vascular health, blood flow regulation, and cardiovascular function.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Endothelium - Suppl.me Glossary',
  'Single-cell layer lining blood vessels that regulates vascular function and health'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 61. Enterocytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'enterocytes',
  'Enterocytes',
  'Intestinal Epithelial Cells',
  NULL,
  'The absorptive epithelial cells that line the small intestine, responsible for digesting and absorbing nutrients from food and forming a selective barrier between the intestinal lumen and internal body environment.',
  'Enterocytes are columnar epithelial cells that form the majority (~80%) of the intestinal epithelium lining the small intestine. They are highly specialized cells with a short lifespan (3-5 days) that must efficiently absorb nutrients while maintaining barrier function. The small intestine contains approximately 200-300 square meters of absorptive surface area, largely due to the microscopic structure of enterocytes.

**Structural features:**

**Microvilli (brush border):** Each enterocyte has thousands of finger-like projections called microvilli on its apical (lumen-facing) surface, forming the &quot;brush border.&quot; This dramatically increases absorptive surface area—each cell has ~3,000 microvilli, expanding surface area approximately 20-fold. The brush border membrane contains digestive enzymes (lactase, sucrase, peptidases) and nutrient transporters.

**Tight junctions:** Adjacent enterocytes are connected by tight junction proteins (occludin, claudins, ZO proteins) that regulate paracellular permeability—the passage of substances between cells. These junctions are selectively permeable, allowing water and some ions to pass while blocking larger molecules and pathogens. Tight junction integrity is crucial for gut barrier function.

**Apical vs. basolateral membranes:** Enterocytes maintain distinct apical (facing intestinal lumen) and basolateral (facing bloodstream) membrane domains with different protein and lipid compositions. This polarity enables directional nutrient transport from the intestinal lumen into blood circulation.

**Nutrient absorption mechanisms:**

Enterocytes employ multiple strategies to absorb different nutrients:

**Carbohydrates:** Brush border enzymes (sucrase, maltase, lactase) break down disaccharides into monosaccharides. Glucose and galactose are actively transported via SGLT1 (sodium-glucose cotransporter), while fructose uses facilitated diffusion via GLUT5.

**Proteins/amino acids:** Peptidases on the brush border and within enterocytes break proteins into amino acids and small peptides. Various amino acid transporters move them across membranes, with some requiring sodium cotransport.

**Lipids:** Fat digestion products (monoglycerides, fatty acids) passively diffuse across membranes. Inside enterocytes, they''re reassembled into triglycerides, packaged into chylomicrons, and secreted into lymphatic vessels (lacteals) rather than blood vessels.

**Vitamins and minerals:** Water-soluble vitamins use specific transporters. Fat-soluble vitamins (A, D, E, K) are incorporated into micelles and absorbed with dietary fats. Minerals like iron, calcium, and zinc have dedicated transport systems, often involving active transport.

**Metabolic functions:**

Beyond absorption, enterocytes perform important metabolic functions:
- First-pass metabolism of some nutrients and xenobiotics
- Synthesis of apolipoproteins for chylomicron formation
- Production of intestinal hormones (GLP-1, GIP, CCK)
- Antioxidant defense (glutathione system)
- Immune sampling and signaling

**Gut barrier function:**

Enterocytes form a critical barrier that:
- Selectively allows nutrient passage while excluding pathogens and toxins
- Prevents translocation of gut bacteria into systemic circulation
- Samples antigens and communicates with the immune system
- Responds to damage with rapid cell turnover and repair

**Factors affecting enterocyte health:**

**Beneficial:** Adequate nutrition (glutamine, short-chain fatty acids, zinc), balanced microbiome, appropriate inflammation control

**Harmful:** Chronic inflammation, oxidative stress, alcohol, NSAIDs, certain infections (celiac disease, IBD), nutrient deficiencies

**Clinical relevance:**

Enterocyte dysfunction contributes to malabsorption syndromes, celiac disease, inflammatory bowel disease, and increased intestinal permeability (&quot;leaky gut&quot;). Understanding enterocyte biology is essential for addressing digestive disorders and optimizing nutrient absorption.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['In celiac disease, gluten exposure damages enterocyte microvilli (villous atrophy), dramatically reducing absorptive surface area and causing malabsorption of nutrients including iron, calcium, and fat-soluble vitamins.', 'Short-chain fatty acids like butyrate serve as the preferred energy source for colonocytes (colon epithelial cells analogous to enterocytes), while enterocytes in the small intestine primarily use glutamine.', 'The entire intestinal epithelium, including enterocytes, is completely renewed every 3-5 days, requiring rapid cell division and differentiation to maintain barrier and absorptive functions.'],
  NULL,
  'Enterocytes - Suppl.me Glossary',
  'Intestinal absorptive cells responsible for nutrient uptake from the gut lumen'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 62. EPA (Eicosapentaenoic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'epa',
  'EPA (Eicosapentaenoic Acid)',
  'EPA',
  'eye-koh-suh-pen-tuh-ee-no-ik as-id',
  'EPA is a long-chain omega-3 fatty acid found primarily in fatty fish and fish oil supplements. It''s a key structural component of cell membranes and serves as a precursor to anti-inflammatory signaling molecules called eicosanoids.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'EPA (Eicosapentaenoic Acid) - Suppl.me Glossary',
  'Eicosapentaenoic acid - a long-chain omega-3 fatty acid with anti-inflammatory properties'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 63. ESR (Erythrocyte Sedimentation Rate)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'esr',
  'ESR (Erythrocyte Sedimentation Rate)',
  'ESR',
  NULL,
  'A blood test that measures how quickly red blood cells (erythrocytes) settle to the bottom of a test tube. An elevated ESR is a non-specific indicator of inflammation in the body.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'ESR (Erythrocyte Sedimentation Rate) - Suppl.me Glossary',
  'Blood test measuring inflammation by how fast red blood cells settle'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 64. Essential Amino Acids (EAAs)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'essentialaminoacids',
  'Essential Amino Acids (EAAs)',
  'EAAs',
  NULL,
  'The nine amino acids that the human body cannot synthesize in sufficient quantities and must be obtained through diet: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.',
  '<p>Essential amino acids are "essential" not because they''re more important than other amino acids, but because they must come from external sources. Without adequate intake of all nine EAAs, the body cannot efficiently build new proteins, leading to various health problems.</p>
        
        <p><strong className="glossary-highlight">The Nine Essential Amino Acids:</strong></p>
        
        <p><strong>1. Histidine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Produces histamine (immune response), maintains myelin sheaths (nerve protection), tissue growth and repair</li>
          <li><strong>Typical Daily Need:</strong> ~10-14 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, poultry, dairy, whole grains</li>
          <li><strong>Special Notes:</strong> Particularly important for children''s growth; involved in red and white blood cell production</li>
        </ul>

        <p><strong>2. Isoleucine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle metabolism, immune function, hemoglobin production, energy regulation</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Eggs, chicken, fish, lentils, almonds</li>
          <li><strong>Special Notes:</strong> One of three branched-chain amino acids; concentrated in muscle tissue</li>
        </ul>

        <p><strong>3. Leucine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Primary trigger for muscle protein synthesis, blood sugar regulation, wound healing, growth hormone production</li>
          <li><strong>Typical Daily Need:</strong> ~34-42 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Whey protein, meat, dairy, soybeans, eggs</li>
          <li><strong>Special Notes:</strong> Most important BCAA for muscle building; threshold of ~2-3g needed to maximize protein synthesis</li>
        </ul>

        <p><strong>4. Lysine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Protein synthesis, calcium absorption, collagen and elastin production, immune function, carnitine production</li>
          <li><strong>Typical Daily Need:</strong> ~30-38 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, dairy, eggs, legumes</li>
          <li><strong>Special Notes:</strong> Often the limiting amino acid in grain-based diets; important for bone health</li>
        </ul>

        <p><strong>5. Methionine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Metabolism, detoxification, tissue growth, zinc and selenium absorption, antioxidant production</li>
          <li><strong>Typical Daily Need:</strong> ~10-15 mg/kg body weight (combined with cysteine)</li>
          <li><strong>Good Sources:</strong> Eggs, fish, meat, Brazil nuts, sesame seeds</li>
          <li><strong>Special Notes:</strong> Contains sulfur; precursor to cysteine and taurine; involved in DNA methylation</li>
        </ul>

        <p><strong>6. Phenylalanine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to tyrosine, dopamine, norepinephrine, and epinephrine; structural component of proteins</li>
          <li><strong>Typical Daily Need:</strong> ~25-33 mg/kg body weight (combined with tyrosine)</li>
          <li><strong>Good Sources:</strong> Meat, fish, eggs, dairy, soy products</li>
          <li><strong>Special Notes:</strong> Important for mood regulation and cognitive function; individuals with PKU cannot metabolize it</li>
        </ul>

        <p><strong>7. Threonine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Protein balance, immune function, collagen and elastin production, fat metabolism</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Cottage cheese, poultry, fish, lentils, sesame seeds</li>
          <li><strong>Special Notes:</strong> Important for mucus production in digestive and respiratory tracts</li>
        </ul>

        <p><strong>8. Tryptophan</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to serotonin and melatonin, nitrogen balance, niacin (vitamin B3) production</li>
          <li><strong>Typical Daily Need:</strong> ~4-5 mg/kg body weight (lowest requirement)</li>
          <li><strong>Good Sources:</strong> Turkey, chicken, milk, cheese, pumpkin seeds, oats</li>
          <li><strong>Special Notes:</strong> Important for mood, sleep, and appetite regulation</li>
        </ul>

        <p><strong>9. Valine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle growth and repair, energy production, cognitive function</li>
          <li><strong>Typical Daily Need:</strong> ~24-26 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Dairy, meat, mushrooms, peanuts, soy protein</li>
          <li><strong>Special Notes:</strong> One of three BCAAs; involved in preventing muscle breakdown during exercise</li>
        </ul>

        <p><strong className="glossary-highlight">Why All Nine Matter:</strong></p>
        <p>Protein synthesis follows the "limiting amino acid" principle—like a chain is only as strong as its weakest link, protein synthesis can only proceed at the rate allowed by whichever essential amino acid is in shortest supply. If even one EAA is deficient, the body cannot efficiently build new proteins, regardless of total protein intake.</p>

        <p><strong className="glossary-highlight">Complete vs. Incomplete Proteins:</strong></p>
        <ul className="glossary-list">
          <li><strong>Complete Proteins:</strong> Contain all nine EAAs in adequate amounts
            <ul className="glossary-list" style={{marginTop: ''0.5rem''}}>
              <li>Animal sources: meat, fish, poultry, eggs, dairy</li>
              <li>Plant sources: quinoa, soy, buckwheat, hemp, chia seeds</li>
            </ul>
          </li>
          <li><strong>Incomplete Proteins:</strong> Low or lacking in one or more EAAs
            <ul className="glossary-list" style={{marginTop: ''0.5rem''}}>
              <li>Grains: often low in lysine</li>
              <li>Legumes: often low in methionine</li>
              <li>Solution: Combine complementary proteins (e.g., rice and beans)</li>
            </ul>
          </li>
        </ul>

        <p><strong className="glossary-highlight">EAA Supplements:</strong></p>
        <p>EAA supplements provide all nine essential amino acids in free form, allowing for rapid absorption. They may be beneficial when:</p>
        <ul className="glossary-list">
          <li>Maximizing protein synthesis with minimal calories</li>
          <li>Supporting muscle recovery without full meal</li>
          <li>Addressing specific dietary restrictions</li>
          <li>Enhancing protein quality of lower-quality protein sources</li>
        </ul>',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Essential Amino Acids (EAAs) - Suppl.me Glossary',
  'Nine amino acids that must be obtained from diet'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 65. Faecalibacterium prausnitzii
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'faecalibacterium',
  'Faecalibacterium prausnitzii',
  NULL,
  NULL,
  'One of the most abundant beneficial bacterial species in the healthy human colon. It is a major producer of butyrate, an important short-chain fatty acid that fuels colonocytes and has anti-inflammatory properties.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Faecalibacterium prausnitzii - Suppl.me Glossary',
  'Major butyrate-producing gut bacteria associated with anti-inflammatory effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 66. Ferric Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ferriciron',
  'Ferric Iron',
  NULL,
  'FEHR-ik EYE-urn',
  'Ferric iron is the oxidized form of iron (Fe³⁺), also known as ferric iron or iron(III), which is the primary form found in most iron supplements and fortified foods, but requires conversion to ferrous iron for absorption in the intestines.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Ferric Iron - Suppl.me Glossary',
  'Iron in +3 oxidation state, less well absorbed than ferrous iron'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 67. Ferrous Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ferrousiron',
  'Ferrous Iron',
  NULL,
  'FEHR-us EYE-urn',
  'Ferrous iron is the reduced form of iron (Fe²⁺), also known as ferrous iron or iron(II), which is the bioavailable form that can be directly absorbed by intestinal cells and is found in meat, some iron supplements, and results from ferric iron reduction in the gut.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Ferrous Iron - Suppl.me Glossary',
  'Iron in +2 oxidation state, better absorbed form for supplements'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 68. Fibrinogen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'fibrinogen',
  'Fibrinogen',
  NULL,
  NULL,
  'A soluble plasma protein produced by the liver that plays a central role in blood clotting and is also an important biomarker of inflammation and cardiovascular disease risk.',
  'Fibrinogen is a glycoprotein that circulates in blood and converts to insoluble fibrin during the clotting process, forming the structural framework of blood clots. Beyond its essential role in hemostasis, fibrinogen is also an acute phase reactant—its levels increase during inflammation, infection, or tissue injury. Normal fibrinogen levels range from 200-400 mg/dL in healthy adults, though reference ranges vary slightly between laboratories.

Elevated fibrinogen (hyperfibrinogenemia) is associated with increased cardiovascular disease risk, as it contributes to atherosclerosis, blood viscosity, and thrombosis risk. High fibrinogen levels promote platelet aggregation, increase blood thickness, and contribute to arterial plaque formation. Each 100 mg/dL increase in fibrinogen is associated with approximately 20% increased risk of coronary heart disease and stroke.

In supplement research, fibrinogen is measured as a biomarker of both inflammation and cardiovascular risk. Supplements with anti-inflammatory or cardioprotective properties—such as omega-3 fatty acids, vitamin E, garlic, and certain plant extracts—have been studied for their effects on fibrinogen levels. Reductions in fibrinogen may indicate decreased inflammation and reduced cardiovascular risk, though the clinical significance depends on baseline values and concurrent changes in other markers.

Fibrinogen levels are influenced by numerous factors including age, smoking, obesity, diabetes, hormonal status, and chronic disease. When interpreting research, consider whether participants had elevated baseline fibrinogen and whether observed reductions are clinically meaningful. A decrease from very high levels (e.g., 500 to 400 mg/dL) may be more significant than a decrease within normal range (e.g., 300 to 280 mg/dL).',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis might show that omega-3 supplementation reduced fibrinogen by -0.31 g/L (95% CI -0.52 to -0.10) in cardiovascular patients', 'Baseline fibrinogen of 450 mg/dL decreasing to 380 mg/dL after supplementation indicates reduced inflammation and clotting risk', 'Studies examining anti-inflammatory supplements often measure fibrinogen alongside CRP and IL-6 as markers of systemic inflammation'],
  NULL,
  'Fibrinogen - Suppl.me Glossary',
  'Plasma protein essential for blood clotting and biomarker of inflammation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 69. Flavonoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'flavonoids',
  'Flavonoids',
  NULL,
  NULL,
  'The largest subclass of polyphenols, characterized by a common 15-carbon skeleton consisting of two benzene rings connected by a 3-carbon bridge. Flavonoids are powerful antioxidants with anti-inflammatory, cardioprotective, and neuroprotective properties found abundantly in fruits, vegetables, tea, and cocoa.',
  'Flavonoids represent over 6,000 different compounds, making them the most diverse and abundant category of polyphenols in the human diet. They provide much of the color in fruits, vegetables, and flowers (yellows, reds, blues, purples). The term ''flavonoid'' comes from the Latin word ''flavus'' meaning yellow, though flavonoids encompass many colors.

**Classification of flavonoids:**

Flavonoids are divided into six main subclasses based on their chemical structure, particularly the oxidation state and saturation of the 3-carbon connecting bridge:

**1. Flavonols:** Characterized by a double bond in the C-ring and a hydroxyl group at position 3
- **Main compounds:** Quercetin, kaempferol, myricetin, isorhamnetin
- **Food sources:** Onions (quercetin is exceptionally high), kale, broccoli, apples, berries, tea, red wine
- **Benefits:** Strong antioxidant and anti-inflammatory activity, cardiovascular protection, potential anti-cancer properties
- **Typical intake:** 20-50 mg/day, with quercetin being the most consumed flavonol

**2. Flavones:** Similar to flavonols but lacking the 3-hydroxyl group
- **Main compounds:** Apigenin, luteolin, baicalein
- **Food sources:** Parsley, celery, chamomile, thyme, oregano, green peppers
- **Benefits:** Anti-inflammatory, anxiolytic (anxiety-reducing), antioxidant
- **Typical intake:** 1-5 mg/day (lower than other flavonoid classes)

**3. Flavanones:** Saturated C-ring with a carbonyl group at position 4
- **Main compounds:** Hesperidin, naringenin, eriodictyol
- **Food sources:** Citrus fruits (oranges, lemons, grapefruit)
- **Benefits:** Cardiovascular health, anti-inflammatory, may improve insulin sensitivity
- **Typical intake:** 25-50 mg/day, higher with regular citrus consumption
- **Note:** Naringenin in grapefruit inhibits CYP3A4 enzyme, causing drug interactions

**4. Flavan-3-ols (Flavanols):** No carbonyl group in the C-ring; can exist as monomers or polymers
- **Main compounds:** 
  - Monomers: Catechin, epicatechin, gallocatechin, EGCG (epigallocatechin gallate)
  - Polymers: Proanthocyanidins (condensed tannins)
- **Food sources:** Green and black tea, cocoa, dark chocolate, grapes, apples, berries, red wine
- **Benefits:** Cardiovascular protection, improved endothelial function, cognitive enhancement, blood pressure reduction
- **Typical intake:** 50-200 mg/day; can exceed 500 mg/day with regular tea or cocoa consumption
- **Most studied:** Green tea catechins (especially EGCG) and cocoa flavanols

**5. Anthocyanins:** Distinctive pigments responsible for red, purple, and blue colors
- **Main compounds:** Cyanidin, delphinidin, malvidin, pelargonidin, peonidin, petunidin
- **Food sources:** Berries (blueberries, blackberries, strawberries), red cabbage, red grapes, red wine, purple potatoes, eggplant
- **Benefits:** Powerful antioxidants, cardiovascular benefits, improved vision, cognitive protection, anti-diabetic effects
- **Typical intake:** 10-30 mg/day, higher in berry-rich diets
- **Unique:** Exist as glycosides in foods; highly bioavailable compared to other flavonoids

**6. Isoflavones:** Structural isomers with the B-ring attached at position 3 instead of position 2
- **Main compounds:** Genistein, daidzein, glycitein
- **Food sources:** Soybeans, soy products (tofu, tempeh, soy milk), legumes
- **Benefits:** Phytoestrogenic activity, cardiovascular health, bone health, potential cancer risk reduction
- **Typical intake:** Very low (&lt;1 mg/day) in Western diets; 25-50 mg/day in Asian diets with regular soy consumption
- **Controversy:** Estrogenic effects raise questions about safety in hormone-sensitive conditions

**Mechanisms of action:**

**Antioxidant activity:** Flavonoids donate hydrogen atoms to neutralize free radicals, breaking oxidative chain reactions. They also chelate pro-oxidant metal ions (iron, copper). However, direct antioxidant activity may not fully explain benefits.

**Cell signaling modulation:** Flavonoids interact with multiple signaling pathways:
- **Nrf2 activation:** Upregulates endogenous antioxidant enzymes (SOD, catalase, glutathione peroxidase)
- **NF-κB inhibition:** Reduces production of inflammatory cytokines (IL-6, TNF-α, IL-1β)
- **AMPK activation:** Improves metabolic function and insulin sensitivity
- **eNOS activation:** Increases nitric oxide production, improving endothelial function
- **MAPK pathways:** Modulates cell proliferation, differentiation, and apoptosis

**Gut microbiota interaction:** Many flavonoids are poorly absorbed but reach the colon where gut bacteria metabolize them into bioactive phenolic acids. This produces beneficial metabolites and modulates microbiota composition, promoting beneficial species.

**Enzyme modulation:** Flavonoids inhibit or activate various enzymes including COX-2 (anti-inflammatory), xanthine oxidase (reduces uric acid), α-glucosidase (reduces glucose absorption), and cytochrome P450 enzymes (drug interactions).

**Bioavailability:**

Flavonoid bioavailability varies widely (1-30% depending on compound and food matrix). Factors affecting bioavailability:
- **Chemical structure:** Glycosides (sugar-bound) versus aglycones (free form)
- **Food matrix:** Presence of fats, fiber, and other compounds
- **Gut microbiota:** Individual variation in bacterial species affects metabolism
- **Processing:** Cooking, fermentation, and food processing alter bioavailability

**Health benefits from clinical research:**

**Cardiovascular disease:** Meta-analyses consistently show 10-20% reduced cardiovascular disease risk with high flavonoid intake. Mechanisms include improved endothelial function, reduced blood pressure (especially cocoa flavanols), improved lipid profiles, reduced platelet aggregation, and anti-inflammatory effects.

**Type 2 diabetes:** Higher flavonoid intake associated with 10-15% reduced diabetes risk. Flavonoids improve insulin sensitivity, reduce postprandial glucose spikes, and protect pancreatic beta cells.

**Cognitive function:** Flavonoid-rich foods (berries, cocoa, tea) show promise for cognitive preservation, memory improvement, and reduced dementia risk, possibly through improved cerebral blood flow, neuroprotection, and neuroplasticity enhancement.

**Inflammation and oxidative stress:** Clinical trials show flavonoid supplementation reduces inflammatory markers (CRP, IL-6) and oxidative stress markers (MDA, 8-OHdG) in various populations.

**Cancer:** Observational studies suggest protective associations, though evidence is inconsistent across cancer types and study designs.

**Dietary intake recommendations:**

No official RDA exists, but observational studies suggest benefits at:
- Total flavonoids: 400-600 mg/day
- Individual classes vary (flavonols 20-50 mg/day, anthocyanins 10-30 mg/day, etc.)

Achieving adequate intake requires consuming diverse colorful fruits, vegetables, tea, and dark chocolate regularly.

**Supplement considerations:**

Common flavonoid supplements include quercetin (500-1,000 mg/day), EGCG from green tea extract (200-400 mg/day), and anthocyanin extracts. Look for third-party tested products (USP, ConsumerLab, NSF). Whole foods provide flavonoid mixtures that may be more beneficial than isolated compounds.

**Safety:**

Flavonoids from food are safe. Supplemental forms in high doses may cause gastrointestinal upset. Grapefruit flavonoids (naringenin) cause significant drug interactions by inhibiting CYP3A4. High-dose isoflavone supplements may have hormonal effects and should be used cautiously in hormone-sensitive conditions.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis of 14 cohort studies found that each 500 mg/day increase in flavonoid intake was associated with 18% lower cardiovascular mortality', 'Cocoa flavanols (500-900 mg/day) improve endothelial function (measured by flow-mediated dilation) by 3-4% in clinical trials, comparable to some blood pressure medications', 'Quercetin supplementation (500-1,000 mg/day) reduces systolic blood pressure by approximately 3-4 mmHg and diastolic blood pressure by 2-3 mmHg in meta-analyses', 'One cup of green tea provides approximately 150-200 mg of catechins (primarily EGCG), while a piece of dark chocolate (30g) provides 200-300 mg of flavanols'],
  NULL,
  'Flavonoids - Suppl.me Glossary',
  'Largest class of polyphenols with diverse antioxidant and anti-inflammatory effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 70. Flow-Mediated Dilation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'fmd',
  'Flow-Mediated Dilation',
  'FMD',
  NULL,
  'A non-invasive ultrasound-based measurement of endothelial function that assesses how well blood vessels dilate in response to increased blood flow, serving as an indicator of cardiovascular health.',
  'Flow-Mediated Dilation (FMD) is measured by temporarily restricting blood flow to the arm using a blood pressure cuff, then releasing the cuff and measuring how much the brachial artery dilates in response to the sudden increase in blood flow. This dilation is endothelium-dependent, meaning it reflects the ability of the inner lining of blood vessels to produce nitric oxide and other vasodilating substances.

FMD is expressed as a percentage change from baseline arterial diameter, typically ranging from 2-15% in healthy individuals. Higher FMD values indicate better endothelial function and cardiovascular health, while lower values are associated with increased cardiovascular disease risk. A 1% decrease in FMD has been associated with approximately 13% increase in cardiovascular event risk.

In supplement research, FMD is used as a surrogate marker to assess whether interventions improve vascular health. For example, omega-3 fatty acids, vitamin D, and certain polyphenols have been studied for their effects on FMD. Improvements in FMD suggest the supplement may have cardiovascular protective effects by enhancing nitric oxide bioavailability and reducing endothelial dysfunction.

FMD measurements are highly standardized but can be influenced by factors such as time of day, recent food intake, caffeine consumption, and ambient temperature. Well-designed studies control for these variables to ensure reliable results. When interpreting FMD data, look for absolute percentage changes as well as relative improvements compared to baseline or control groups.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A study might report that omega-3 supplementation increased FMD by 2.3% compared to placebo, indicating improved endothelial function', 'Baseline FMD of 4.2% improving to 6.8% after vitamin D supplementation represents a 62% relative improvement', 'Meta-analyses often report weighted mean differences in FMD (e.g., WMD = 1.52%, 95% CI 0.87-2.17) across multiple studies'],
  NULL,
  'Flow-Mediated Dilation - Suppl.me Glossary',
  'Non-invasive ultrasound measurement of endothelial function and cardiovascular health'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 71. FODMAP
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'fodmap',
  'FODMAP',
  'Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols',
  NULL,
  'A group of short-chain carbohydrates and sugar alcohols that are poorly absorbed in the small intestine and rapidly fermented by gut bacteria, causing digestive symptoms in sensitive individuals.',
  'FODMAPs are a collection of fermentable carbohydrates that share common characteristics: they are poorly absorbed in the small intestine, osmotically active (drawing water into the intestinal lumen), and rapidly fermented by gut bacteria. The acronym breaks down into: Fermentable Oligosaccharides (fructans and galacto-oligosaccharides/GOS), Disaccharides (lactose), Monosaccharides (excess fructose), And Polyols (sorbitol, mannitol, xylitol, maltitol).

When FODMAPs reach the colon unabsorbed, they undergo rapid bacterial fermentation, producing gas (hydrogen, carbon dioxide, and methane) and short-chain fatty acids. Additionally, their osmotic effect increases water content in the intestinal lumen. These combined effects can trigger symptoms like bloating, gas, abdominal pain, diarrhea, and constipation—particularly in people with irritable bowel syndrome (IBS) or other functional gastrointestinal disorders.

The low FODMAP diet, developed by researchers at Monash University, involves three phases: (1) elimination of high-FODMAP foods for 2-6 weeks, (2) systematic reintroduction to identify personal triggers, and (3) personalization to create a long-term sustainable diet. Evidence consistently shows that 50-80% of IBS patients experience symptom improvement on a low FODMAP diet. However, prolonged restriction without proper reintroduction can negatively impact gut microbiome diversity and nutritional intake.

Common high-FODMAP foods include wheat, onions, garlic, legumes, certain fruits (apples, pears, stone fruits), dairy products with lactose, and artificial sweeteners. Low-FODMAP alternatives exist for most food categories. The diet should ideally be implemented under guidance from a registered dietitian specializing in gastrointestinal disorders, as improper implementation can lead to unnecessary dietary restriction and nutritional deficiencies.

Prebiotics often contain high-FODMAP fibers (inulin, GOS, fructans), which is why some prebiotic supplements may exacerbate symptoms in FODMAP-sensitive individuals. Research is ongoing into low-FODMAP prebiotics and gradual tolerance-building strategies.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A person with IBS eliminates high-FODMAP foods for 6 weeks and experiences 60% reduction in bloating and abdominal pain', 'During reintroduction, a patient discovers they can tolerate GOS but not fructans, allowing personalized diet modification', 'Studies show that low FODMAP diet reduces IBS symptom severity by 3-4 points on a 10-point scale in responders'],
  NULL,
  'FODMAP - Suppl.me Glossary',
  'Short-chain carbohydrates poorly absorbed in small intestine, causing digestive symptoms in sensitive individuals'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 72. Folic Acid
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'folicacid',
  'Folic Acid',
  NULL,
  NULL,
  'The synthetic, oxidized form of folate (vitamin B9) used in dietary supplements and food fortification programs. Unlike naturally occurring folate found in foods, folic acid is a manufactured compound that must be converted through multiple enzymatic steps before the body can use it.',
  'While folic acid has been highly successful in reducing neural tube defects through mandatory food fortification programs in many countries, there is growing recognition that it may not be the optimal form of folate supplementation for everyone, particularly those with certain genetic variants.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Folic Acid - Suppl.me Glossary',
  'Synthetic form of vitamin B9 used in supplements and fortified foods'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 73. Fructooligosaccharides (FOS)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'fos',
  'Fructooligosaccharides (FOS)',
  'FOS',
  NULL,
  'Short-chain carbohydrates composed of fructose molecules that resist digestion in the upper gastrointestinal tract, serving as prebiotic substrates that selectively stimulate beneficial gut bacteria.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Fructooligosaccharides (FOS) - Suppl.me Glossary',
  'Short-chain prebiotic fibers that selectively feed beneficial gut bacteria'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 74. Free Radicals
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'freeradicals',
  'Free Radicals',
  NULL,
  NULL,
  'Highly reactive molecules or atoms that contain one or more unpaired electrons, making them unstable and capable of damaging cells, proteins, and DNA through oxidative reactions.',
  '<p>Free radicals are a natural byproduct of normal metabolism and cellular function. In controlled amounts, they serve important roles in immune function and cell signaling. However, when free radical production exceeds the body''s antioxidant defenses, they can cause oxidative damage that contributes to aging and disease.</p>
        
        <p><strong className="glossary-highlight">Types of Free Radicals:</strong></p>
        
        <p><strong>Reactive Oxygen Species (ROS):</strong> Most common and well-studied free radicals</p>
        <ul className="glossary-list">
          <li><strong>Superoxide Radical (O₂•⁻):</strong> Formed during cellular respiration in mitochondria; first step in ROS production cascade</li>
          <li><strong>Hydroxyl Radical (•OH):</strong> Extremely reactive; can damage virtually any biomolecule it encounters</li>
          <li><strong>Hydrogen Peroxide (H₂O₂):</strong> Not technically a free radical but easily converts to highly reactive radicals</li>
          <li><strong>Singlet Oxygen (¹O₂):</strong> Excited form of oxygen; particularly damaging to lipids</li>
          <li><strong>Peroxyl Radical (ROO•):</strong> Propagates lipid peroxidation in cell membranes</li>
        </ul>

        <p><strong>Reactive Nitrogen Species (RNS):</strong></p>
        <ul className="glossary-list">
          <li><strong>Nitric Oxide (NO•):</strong> Important signaling molecule but can form damaging compounds</li>
          <li><strong>Peroxynitrite (ONOO⁻):</strong> Formed when NO• reacts with superoxide; highly damaging</li>
        </ul>

        <p><strong className="glossary-highlight">Sources of Free Radicals:</strong></p>
        
        <p><strong>Internal (Endogenous) Sources:</strong></p>
        <ul className="glossary-list">
          <li><strong>Cellular Respiration:</strong> Mitochondria naturally produce superoxide during ATP generation
            <ul className="glossary-list" style={{marginTop: ''0.5rem''}}>
              <li>About 1-2% of oxygen consumed becomes superoxide</li>
              <li>Normal, unavoidable part of energy production</li>
            </ul>
          </li>
          <li><strong>Immune Response:</strong> White blood cells deliberately generate ROS to kill pathogens</li>
          <li><strong>Inflammatory Processes:</strong> Inflammation increases free radical production</li>
          <li><strong>Metabolic Processes:</strong> Various enzymatic reactions produce ROS as byproducts</li>
          <li><strong>Exercise:</strong> Increases oxygen consumption and ROS production (but also upregulates antioxidant defenses)</li>
        </ul>

        <p><strong>External (Exogenous) Sources:</strong></p>
        <ul className="glossary-list">
          <li><strong>UV Radiation:</strong> Sunlight generates ROS in skin</li>
          <li><strong>Pollution:</strong> Air pollutants, smoke, vehicle exhaust</li>
          <li><strong>Tobacco Smoke:</strong> Contains numerous free radicals and pro-oxidants</li>
          <li><strong>Radiation:</strong> X-rays, cosmic rays, radon</li>
          <li><strong>Certain Foods:</strong> Fried foods, processed meats, alcohol</li>
          <li><strong>Pesticides and Chemicals:</strong> Industrial chemicals, heavy metals</li>
        </ul>

        <p><strong className="glossary-highlight">How Free Radicals Cause Damage:</strong></p>
        
        <p><strong>1. Chain Reactions:</strong></p>
        <ul className="glossary-list">
          <li>Free radical steals electron from stable molecule</li>
          <li>That molecule becomes a free radical, steals another electron</li>
          <li>Chain reaction continues, amplifying damage</li>
          <li>Can damage hundreds of molecules before being neutralized</li>
        </ul>

        <p><strong>2. Lipid Peroxidation:</strong></p>
        <ul className="glossary-list">
          <li>Free radicals attack polyunsaturated fatty acids in cell membranes</li>
          <li>Creates chain reaction damaging membrane integrity</li>
          <li>Produces toxic byproducts like malondialdehyde (MDA)</li>
          <li>Compromises cell function and survival</li>
        </ul>

        <p><strong>3. Protein Oxidation:</strong></p>
        <ul className="glossary-list">
          <li>Damages amino acid side chains</li>
          <li>Alters protein structure and function</li>
          <li>Can inactivate enzymes and damage structural proteins</li>
          <li>Leads to protein aggregation</li>
        </ul>

        <p><strong>4. DNA Damage:</strong></p>
        <ul className="glossary-list">
          <li>Causes strand breaks and base modifications</li>
          <li>Can lead to mutations if not repaired</li>
          <li>Associated with cancer risk and aging</li>
          <li>Damages both nuclear and mitochondrial DNA</li>
        </ul>

        <p><strong className="glossary-highlight">The Body''s Defense Systems:</strong></p>
        
        <p><strong>Enzymatic Antioxidants:</strong></p>
        <ul className="glossary-list">
          <li><strong>Superoxide Dismutase (SOD):</strong> Converts superoxide to hydrogen peroxide</li>
          <li><strong>Catalase:</strong> Breaks down hydrogen peroxide to water and oxygen</li>
          <li><strong>Glutathione Peroxidase:</strong> Reduces hydrogen peroxide and lipid peroxides</li>
        </ul>

        <p><strong>Non-Enzymatic Antioxidants:</strong></p>
        <ul className="glossary-list">
          <li><strong>Glutathione:</strong> Master antioxidant; directly neutralizes free radicals</li>
          <li><strong>Vitamin C:</strong> Water-soluble antioxidant in blood and cells</li>
          <li><strong>Vitamin E:</strong> Fat-soluble; protects cell membranes from lipid peroxidation</li>
          <li><strong>Carotenoids:</strong> Beta-carotene, lycopene; quench singlet oxygen</li>
          <li><strong>Polyphenols:</strong> Plant compounds with antioxidant properties</li>
          <li><strong>Coenzyme Q10:</strong> Protects mitochondrial membranes</li>
        </ul>

        <p><strong className="glossary-highlight">The Oxidative Balance:</strong></p>
        <p>Health depends on balance between free radical production and antioxidant defenses:</p>
        <ul className="glossary-list">
          <li><strong>Normal Balance:</strong> Beneficial signaling, immune function, cellular regulation</li>
          <li><strong>Oxidative Stress:</strong> Excess free radicals overwhelm defenses; contributes to disease and aging</li>
          <li><strong>Excessive Antioxidants:</strong> May impair beneficial free radical functions like immune response and exercise adaptations</li>
        </ul>',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Free Radicals - Suppl.me Glossary',
  'Highly reactive molecules with unpaired electrons that can damage cells and DNA'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 75. Glucagon-Like Peptide-1
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glp1',
  'Glucagon-Like Peptide-1',
  'GLP-1',
  NULL,
  'An incretin hormone secreted by intestinal L-cells in response to nutrient intake that stimulates insulin secretion, suppresses glucagon release, delays gastric emptying, and reduces appetite, playing crucial roles in glucose homeostasis and satiety.',
  'Glucagon-Like Peptide-1 (GLP-1) is a 30-amino acid peptide hormone derived from post-translational processing of the proglucagon gene. It is secreted by enteroendocrine L-cells located primarily in the distal small intestine and colon in response to nutrient ingestion, particularly carbohydrates, proteins, and fats. GLP-1 is part of the incretin system, accounting for 50-70% of postprandial insulin secretion.

GLP-1 exerts multiple physiological effects: (1) enhances glucose-dependent insulin secretion from pancreatic beta-cells, (2) suppresses glucagon secretion from alpha-cells, (3) delays gastric emptying, slowing nutrient absorption, (4) reduces appetite and food intake through central and peripheral mechanisms, (5) may promote beta-cell proliferation and reduce apoptosis, and (6) potentially benefits cardiovascular function. These effects collectively improve glycemic control and promote satiety.

Native GLP-1 has a very short half-life (1-2 minutes) due to rapid degradation by the enzyme dipeptidyl peptidase-4 (DPP-4). This led to development of GLP-1 receptor agonist medications (like semaglutide, liraglutide) that resist DPP-4 degradation and have prolonged action, now widely used for type 2 diabetes and obesity treatment.

In supplement research, interventions that increase endogenous GLP-1 secretion are of interest. Dietary fibers (particularly viscous soluble fibers and prebiotics like inulin and GOS) increase GLP-1through colonic fermentation producing short-chain fatty acids that stimulate L-cells. Protein intake also stimulates GLP-1 secretion. Some polyphenols and bioactive compounds are being investigated for GLP-1-enhancing effects.

Fasting GLP-1 levels are typically 5-10 pmol/L, rising to 15-50 pmol/L postprandially in healthy individuals. People with obesity or type 2 diabetes often have blunted GLP-1 responses. In studies, GLP-1 measurements (fasting and/or postprandial) serve as biomarkers of metabolic health and mechanisms underlying glucose control improvements. However, measurement is technically challenging due to GLP-1''s rapid degradation, requiring immediate sample processing with DPP-4 inhibitors.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Glucagon-Like Peptide-1 - Suppl.me Glossary',
  'Incretin hormone regulating insulin secretion, gastric emptying, and appetite'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 76. Glucagon
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glucagon',
  'Glucagon',
  NULL,
  NULL,
  'A peptide hormone produced by alpha cells in the pancreas that raises blood glucose levels by promoting glucose release from the liver. It acts as insulin''s counter-regulatory hormone, preventing hypoglycemia during fasting.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Glucagon - Suppl.me Glossary',
  'Pancreatic hormone that raises blood glucose by promoting glycogen breakdown and gluconeogenesis'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 77. Glucose Metabolism
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glucosemetabolism',
  'Glucose Metabolism',
  NULL,
  'gloo-kohs meh-tab-uh-liz-um',
  'Glucose metabolism refers to all the biochemical processes involved in the formation, breakdown, and interconversion of glucose in living organisms. It includes how the body processes glucose from food, stores it as glycogen, breaks it down for energy, and maintains stable blood glucose levels.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Glucose Metabolism - Suppl.me Glossary',
  'All biochemical processes involved in the formation, breakdown, and regulation of glucose'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 78. Glutathione
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glutathione',
  'Glutathione',
  'GSH',
  NULL,
  'A tripeptide antioxidant composed of glutamine, cysteine, and glycine that serves as the body''s master antioxidant, playing critical roles in detoxification, immune function, and protection against oxidative stress.',
  'Glutathione (GSH) is produced naturally in every cell of the body and is essential for maintaining cellular health. It exists in two forms: reduced glutathione (GSH, the active antioxidant form) and oxidized glutathione (GSSG, the inactive form produced after neutralizing free radicals). The ratio of GSH to GSSG is an important indicator of cellular oxidative stress—higher GSH:GSSG ratios indicate better antioxidant status and cellular health.

Glutathione performs multiple critical functions: (1) directly neutralizing free radicals and reactive oxygen species, (2) recycling other antioxidants like vitamins C and E back to their active forms, (3) supporting detoxification by conjugating with toxins in the liver, (4) regulating immune cell function and inflammation, and (5) maintaining protein structure through redox regulation. It''s particularly concentrated in the liver, lungs, and immune cells.

Normal blood glutathione levels vary by measurement method and sample type (whole blood, red blood cells, plasma), but healthy adults typically have total glutathione levels around 800-1200 μmol/L in whole blood or 2-4 μmol/L in plasma. Glutathione levels decline with age, chronic disease, oxidative stress, poor nutrition, and certain medications. Low glutathione is associated with numerous health conditions including neurodegenerative diseases, diabetes, cardiovascular disease, liver disease, and immune dysfunction.

In supplement research, glutathione is measured both as a biomarker of antioxidant status and as a supplement itself. Direct glutathione supplementation has variable bioavailability, leading to interest in precursors like N-acetylcysteine (NAC) and liposomal glutathione formulations. Other supplements like whey protein, vitamin C, selenium, and alpha-lipoic acid may support glutathione production. Increases in glutathione levels or improvements in the GSH:GSSG ratio suggest enhanced antioxidant defenses and reduced oxidative stress.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A study might report that NAC supplementation increased reduced glutathione (GSH) by 120 μmol/L compared to placebo', 'Baseline GSH:GSSG ratio of 10:1 improving to 25:1 after liposomal glutathione indicates significantly reduced oxidative stress', 'Meta-analyses examining antioxidant interventions often measure glutathione alongside MDA, TAC, and other oxidative stress markers'],
  NULL,
  'Glutathione - Suppl.me Glossary',
  'Master antioxidant protecting against oxidative stress and supporting detoxification'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 79. Glutathione Peroxidase (GPx)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glutathioneperoxidase',
  'Glutathione Peroxidase (GPx)',
  'GPx',
  NULL,
  'A selenium-dependent antioxidant enzyme that reduces hydrogen peroxide and lipid peroxides, protecting cells from oxidative damage.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Glutathione Peroxidase (GPx) - Suppl.me Glossary',
  'Selenium-dependent antioxidant enzyme reducing hydrogen peroxide and lipid peroxides'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 80. Glycemic Control
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glycemiccontrol',
  'Glycemic Control',
  NULL,
  NULL,
  'The regulation of blood glucose (sugar) levels within a healthy range, crucial for preventing diabetes complications and maintaining metabolic health.',
  'Glycemic control refers to how well blood sugar levels are managed and maintained within target ranges. It''s assessed through several biomarkers: fasting blood glucose (normal: 70-99 mg/dL), postprandial (after-meal) glucose, and hemoglobin A1C (HbA1c), which reflects average blood sugar over the previous 2-3 months. An HbA1c below 5.7% is normal, 5.7-6.4% indicates prediabetes, and 6.5% or higher indicates diabetes.

Poor glycemic control occurs when blood sugar frequently spikes too high (hyperglycemia) or drops too low (hypoglycemia). Chronic hyperglycemia leads to glycation—where excess glucose binds to proteins and fats, forming harmful advanced glycation end products (AGEs) that damage blood vessels, nerves, kidneys, eyes, and other tissues. This is why maintaining glycemic control is critical for preventing diabetes complications.

Glycemic control is influenced by diet (particularly carbohydrate quality and quantity), physical activity, body composition, insulin sensitivity, medications, stress, sleep quality, and gut health. Supplements that may support glycemic control include magnesium, chromium, alpha-lipoic acid, berberine, and cinnamon, though lifestyle interventions (diet, exercise, weight management) remain most effective.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium supplementation (300-500mg daily for 3+ months) reduces fasting glucose by 8.1 mg/dL and HbA1c by 0.26% in people with diabetes or prediabetes', 'Fiber-rich foods and supplements slow glucose absorption, reducing postprandial blood sugar spikes and improving overall glycemic control', 'Regular physical activity enhances insulin sensitivity and glucose uptake by muscles, significantly improving glycemic control even without weight loss'],
  NULL,
  'Glycemic Control - Suppl.me Glossary',
  'Regulation of blood glucose levels within a healthy range'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 81. Glycine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'glycine',
  'Glycine',
  'Gly',
  'gly-seen',
  'Glycine is the smallest and simplest amino acid, classified as a non-essential (or conditionally essential) amino acid because the body can produce it, though dietary intake may be beneficial. It serves as a building block for proteins and plays numerous important roles in metabolism, neurotransmission, and tissue structure.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Glycine - Suppl.me Glossary',
  'Simplest amino acid, major component of collagen and inhibitory neurotransmitter'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 82. Galacto-oligosaccharides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'gos',
  'Galacto-oligosaccharides',
  'GOS',
  NULL,
  'Short-chain carbohydrates composed of galactose molecules linked together, functioning as prebiotics that selectively stimulate the growth and activity of beneficial gut bacteria, particularly Bifidobacteria.',
  'Galacto-oligosaccharides (GOS) are non-digestible carbohydrates consisting of chains of galactose units with a terminal glucose molecule, typically containing 2-8 sugar units. They are naturally present in human breast milk and small amounts in legumes and certain vegetables. Commercial GOS is produced enzymatically from lactose using β-galactosidase, creating mixtures with varying chain lengths and linkage types.

As a prebiotic fiber, GOS resists digestion in the upper gastrointestinal tract and reaches the colon intact, where it undergoes fermentation by resident bacteria. This fermentation produces short-chain fatty acids (acetate, propionate, butyrate) that provide energy to colonocytes, reduce colonic pH (inhibiting pathogen growth), and have systemic anti-inflammatory effects. GOS particularly stimulates Bifidobacterium species, which are associated with numerous health benefits.

GOS is classified as a high-FODMAP carbohydrate, meaning it can trigger digestive symptoms (gas, bloating, abdominal discomfort) in FODMAP-sensitive individuals, particularly those with IBS. However, the same fermentable properties that cause short-term symptoms may provide long-term benefits to gut health. Some research suggests gradual introduction at low doses may improve tolerance over time.

Clinical studies show GOS supplementation (typically 3-10g daily) can increase beneficial bacteria, improve stool consistency in constipation, modestly reduce gut inflammation markers, and may benefit conditions like IBS (in non-FODMAP-sensitive individuals), metabolic syndrome, and immune function. Effects on satiety hormones (GLP-1, PYY) have been observed, suggesting potential metabolic benefits.

Compared to other prebiotics like inulin and fructo-oligosaccharides (FOS), GOS is generally better tolerated at moderate doses and causes less gas production. It''s often combined with other prebiotics or probiotics in synbiotic formulations. Doses above 10-15g daily commonly cause gastrointestinal side effects even in healthy individuals. GOS is considered safe (GRAS status in US) and is used in infant formulas to mimic breast milk oligosaccharides.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Study shows 5.5g GOS daily increases fecal Bifidobacteria by 10-fold and improves stool frequency in adults with constipation', 'Meta-analysis reports GOS supplementation modestly reduces inflammatory markers and improves metabolic parameters in overweight adults', 'Patient with IBS initially experiences increased bloating with GOS, but symptoms improve after starting with 1g daily and gradually increasing'],
  NULL,
  'Galacto-oligosaccharides - Suppl.me Glossary',
  'Prebiotic fibers selectively stimulating beneficial gut bacteria, particularly Bifidobacteria'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 83. GRADE (Grading of Recommendations Assessment, Development and Evaluation)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'grade',
  'GRADE (Grading of Recommendations Assessment, Development and Evaluation)',
  'GRADE',
  'grayd',
  'GRADE is a systematic approach for rating the quality (or certainty) of evidence and the strength of recommendations in healthcare and clinical practice. It provides a transparent framework for moving from evidence to recommendations, taking into account the balance of benefits and harms, patient values and preferences, and resource use.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'GRADE (Grading of Recommendations Assessment, Development and Evaluation) - Suppl.me Glossary',
  'Grading of Recommendations Assessment, Development and Evaluation - a systematic approach for rating evidence quality'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 84. Gut Microbiome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'gutmicrobiome',
  'Gut Microbiome',
  NULL,
  NULL,
  'The complex community of trillions of microorganisms (bacteria, viruses, fungi, and other microbes) living in the digestive tract, particularly the colon, that influence digestion, immunity, and overall health.',
  'The gut microbiome contains approximately 100 trillion microbial cells representing thousands of different species, collectively weighing about 2-3 pounds. This ecosystem performs essential functions including breaking down dietary fiber into short-chain fatty acids (SCFAs like butyrate, propionate, acetate), synthesizing certain vitamins (K, B12, folate, biotin), training and modulating the immune system, protecting against pathogens, influencing gut barrier integrity, and producing neurotransmitters that affect brain function via the gut-brain axis.

Microbiome diversity and composition vary widely between individuals and are influenced by genetics, mode of birth, infant feeding, diet, geography, medications (especially antibiotics), stress, sleep, and age. A healthy microbiome is characterized by high diversity and abundance of beneficial bacteria (like Bifidobacterium, Lactobacillus, Akkermansia, Faecalibacterium). Dysbiosis—an imbalance in the microbiome—is associated with inflammatory bowel disease, obesity, diabetes, allergies, autoimmune conditions, mood disorders, and many other health problems.

Supporting microbiome health involves eating diverse plant foods rich in fiber and polyphenols, consuming fermented foods (yogurt, kefir, sauerkraut, kimchi), avoiding unnecessary antibiotics, managing stress, getting adequate sleep, and considering probiotics or prebiotics. Probiotics introduce live beneficial bacteria, while prebiotics (certain fibers) feed existing beneficial bacteria.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Prebiotic fiber supplementation (like inulin or GOS at 5-20g daily) increases beneficial bacteria and SCFA production, improving gut health markers', 'Probiotic supplementation with specific strains can improve digestive symptoms, support immune function, and may influence mood through the gut-brain axis', 'A single course of broad-spectrum antibiotics can significantly disrupt microbiome diversity for months or even years'],
  NULL,
  'Gut Microbiome - Suppl.me Glossary',
  'Community of microorganisms living in the digestive tract'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 85. Half-Life
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'halflife',
  'Half-Life',
  NULL,
  NULL,
  'Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body''s natural elimination processes. It is typically denoted as t½ or t₁/₂. Half-life is a key pharmacokinetic parameter that helps determine optimal dosing frequency and how long a substance remains active in the body.',
  NULL,
  'Half-life directly influences dosing recommendations and helps predict how long a substance will remain active in the body. Understanding half-life is crucial for determining whether a supplement should be taken once daily, multiple times per day, or less frequently. It also helps predict when steady-state levels will be reached with consistent supplementation.',
  NULL,
  NULL,
  NULL,
  ARRAY['Caffeine: Half-life of ~5 hours; effects wear off fairly quickly', 'Vitamin C: Short half-life; multiple daily doses may be beneficial', 'Magnesium: Varies by form; some have extended release profiles', 'Vitamin D: Very long half-life (weeks); can be dosed weekly or even monthly', 'Creatine: Long half-life in muscle tissue; once-daily dosing sufficient'],
  NULL,
  'Half-Life - Suppl.me Glossary',
  'Time required for half of a substance to be eliminated from the body'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 86. HbA1c (Hemoglobin A1c)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hba1c',
  'HbA1c (Hemoglobin A1c)',
  'HbA1c, A1C, Glycated Hemoglobin',
  'aych-bee-ay-wuhn-see / gly-kay-ted hee-muh-glow-bin',
  'A blood test that measures the average blood glucose (sugar) levels over the past 2-3 months by detecting the percentage of hemoglobin proteins that have glucose attached to them, serving as a key diagnostic and monitoring tool for diabetes.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['An individual with HbA1c of 6.2% (prediabetes range) who adopts lifestyle changes and supplements may reduce it to 5.6% (normal range), significantly lowering diabetes risk', 'Magnesium supplementation (300-500mg daily for 3+ months) reduces HbA1c by approximately 0.26% in people with diabetes or prediabetes, a meaningful improvement', 'A person with type 2 diabetes lowering HbA1c from 8.5% to 7.0% through diet, medication, and supplements reduces their risk of complications by approximately 25-40%'],
  NULL,
  'HbA1c (Hemoglobin A1c) - Suppl.me Glossary',
  'Blood test measuring average blood glucose levels over the past 2-3 months'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 87. HDL Cholesterol (High-Density Lipoprotein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hdlcholesterol',
  'HDL Cholesterol (High-Density Lipoprotein)',
  'HDL, HDL-C, Good Cholesterol',
  'aych-dee-el kuh-les-tuh-rawl',
  'A type of lipoprotein that transports cholesterol from peripheral tissues back to the liver for disposal, often called ''good cholesterol'' because higher levels are associated with lower cardiovascular disease risk and protection against atherosclerosis.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'HDL Cholesterol (High-Density Lipoprotein) - Suppl.me Glossary',
  'High-density lipoprotein cholesterol, protective against cardiovascular disease'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 88. Hedges' g
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hedgesg',
  'Hedges'' g',
  NULL,
  'hej-iz jee',
  'A standardized effect size measure similar to Cohen''s d but with a correction for small sample bias, commonly used in meta-analyses to quantify the magnitude of differences between groups.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 89. Heme Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hemeiron',
  'Heme Iron',
  'None',
  NULL,
  'The form of iron found in animal tissues bound within heme proteins (hemoglobin and myoglobin), which is absorbed via a dedicated transport mechanism and has significantly higher bioavailability (15-35%) compared to non-heme iron from plant sources.',
  'Heme iron is iron incorporated into the porphyrin ring structure of heme, the iron-containing component of hemoglobin (in blood) and myoglobin (in muscle tissue). This form of iron is found exclusively in animal-derived foods and represents approximately 40% of the iron in meat, with the remaining 60% present as non-heme iron. Despite constituting a smaller proportion of dietary iron overall, heme iron''s superior absorption makes it a critical dietary source, especially for populations at risk of iron deficiency.

**Absorption mechanism:**

Unlike non-heme iron, which must be released from food components and reduced from Fe3+ to Fe2+ for absorption, heme iron is absorbed as an intact metalloporphyrin complex. The absorption process differs fundamentally from non-heme iron:

**Brush border uptake:** Heme is taken up at the enterocyte brush border, likely through heme carrier protein 1 (HCP1, also known as PCFT/SLC46A1), though the exact mechanism is still being elucidated. The intact heme-iron complex crosses the apical membrane without requiring reduction or solubilization.

**Intracellular release:** Inside enterocytes, heme oxygenase enzymes cleave the porphyrin ring, releasing free iron (Fe2+), which then enters the common intracellular iron pool alongside iron from non-heme sources. From there, iron can be stored (in ferritin), used for cellular functions, or exported to circulation via ferroportin.

**Reduced inhibition:** Heme iron absorption is largely unaffected by dietary factors that strongly inhibit non-heme iron absorption, including phytates, polyphenols (tannins in tea/coffee), calcium, and certain proteins. This independence from dietary inhibitors is a major advantage.

**Enhanced absorption:** Only cooking temperature significantly affects heme iron availability—excessive heat can denature heme proteins and slightly reduce absorption, but normal cooking methods typically enhance iron availability by making meat proteins more digestible.

**Absorption efficiency:**

Heme iron absorption rates range from 15-35%, with the rate influenced by:
- Iron status (absorption increases when iron stores are low)
- Overall iron demand (pregnancy, growth phases increase absorption)
- Individual genetics (variations in iron transporters)
- Minimal influence from dietary composition (unlike non-heme iron)

By comparison, non-heme iron absorption ranges from only 2-20%, with significant variability based on dietary factors.

**Dietary sources:**

**Rich sources (per 3 oz/85g serving):**
- Beef liver: 5 mg (mostly heme)
- Oysters: 6-8 mg (mix of heme and non-heme)
- Beef (various cuts): 2-3 mg (40% heme)
- Chicken liver: 8-12 mg (mostly heme)
- Chicken (dark meat): 1.1 mg (40% heme)
- Pork: 0.8-1.2 mg (40% heme)
- Fatty fish (sardines, tuna): 1-2 mg (40% heme)

**Heme vs. non-heme iron:**

While heme iron has superior absorption, most dietary iron (~85-90%) comes from non-heme sources (plant foods, fortified foods, and non-heme iron in meat). The higher absorption efficiency of heme iron makes animal foods particularly valuable for individuals with increased iron needs or poor non-heme iron absorption.

**Clinical considerations:**

**Iron deficiency anemia:** Heme iron sources are often recommended for treatment and prevention because they provide readily absorbed iron without requiring careful attention to inhibitory factors or absorption enhancers.

**Vegetarian/vegan diets:** Absence of heme iron necessitates careful planning to ensure adequate iron intake from non-heme sources, often requiring 1.8 times higher iron intake to compensate for lower absorption. Combining plant iron sources with vitamin C enhances non-heme absorption.

**Excess iron concerns:** High heme iron intake from red and processed meat has been associated with increased colorectal cancer risk and oxidative stress in some observational studies. Proposed mechanisms include heme''s catalytic activity promoting lipid peroxidation and formation of N-nitroso compounds. Moderation is advised, with dietary guidelines recommending limiting red and processed meat intake.

**Iron overload:** Individuals with hereditary hemochromatosis (genetic iron overload disorder) absorb heme iron excessively and must limit dietary heme iron and often undergo therapeutic phlebotomy.

**Balanced approach:**

While heme iron offers superior bioavailability, a balanced diet incorporating both heme (from lean meats, poultry, fish) and non-heme sources (legumes, fortified grains, dark leafy greens) provides adequate iron without excessive intake of any single source.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 3 oz serving of beef steak provides approximately 2.5 mg total iron, of which ~1 mg is heme iron with 20-35% absorption (200-350 mcg absorbed) versus ~1.5 mg non-heme iron with ~5% absorption (~75 mcg absorbed).', 'For a person with iron deficiency anemia, consuming beef liver twice weekly can provide 10-12 mg highly bioavailable heme iron per week, substantially improving iron status more rapidly than plant sources alone.', 'Studies show that adding just 50g of meat to a plant-based meal can double total iron absorption, not only from the heme iron in meat but also by enhancing non-heme iron absorption from plant foods.'],
  NULL,
  'Heme Iron - Suppl.me Glossary',
  'Highly bioavailable iron form found in animal foods, bound to hemoglobin or myoglobin'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 90. Hemoglobin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hemoglobin',
  'Hemoglobin',
  'Hb',
  'hee-muh-gloh-bin',
  'Hemoglobin (Hb or Hgb) is the iron-containing protein in red blood cells responsible for transporting oxygen from the lungs to tissues throughout the body and returning carbon dioxide from tissues to the lungs. Each hemoglobin molecule can carry up to four oxygen molecules.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Hemoglobin - Suppl.me Glossary',
  'Iron-containing protein in red blood cells that transports oxygen'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 91. Hepatic Encephalopathy
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hepaticencephalopathy',
  'Hepatic Encephalopathy',
  NULL,
  NULL,
  'A decline in brain function that occurs when the liver is unable to adequately remove toxins from the blood, particularly ammonia. This condition is a complication of advanced liver disease or cirrhosis.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Hepatic Encephalopathy - Suppl.me Glossary',
  'Brain dysfunction caused by severe liver disease and ammonia accumulation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 92. HOMA-IR
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'homair',
  'HOMA-IR',
  'Homeostatic Model Assessment of Insulin Resistance',
  NULL,
  'A mathematical formula quantifying insulin resistance from fasting glucose and insulin levels.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'HOMA-IR - Suppl.me Glossary',
  'Mathematical formula quantifying insulin resistance from fasting glucose and insulin'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 93. Homocysteine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'homocysteine',
  'Homocysteine',
  NULL,
  NULL,
  'An amino acid produced during the metabolism of methionine that, when elevated in the blood, is associated with increased risk of cardiovascular disease and other health problems.',
  'Homocysteine is an intermediate product in the metabolism of the essential amino acid methionine. Under normal conditions, homocysteine is quickly converted to other beneficial compounds through pathways requiring vitamins B6, B12, and folate. When these vitamins are deficient or when genetic variations affect these pathways, homocysteine accumulates in the blood—a condition called hyperhomocysteinemia.

Elevated homocysteine levels are associated with increased cardiovascular disease risk, including atherosclerosis, heart attack, and stroke. High homocysteine may damage blood vessel walls, promote blood clot formation, and contribute to oxidative stress and inflammation. Normal homocysteine levels are typically below 15 micromol/L, with levels above this threshold considered elevated and potentially concerning.

B-vitamin supplementation, particularly with folate, vitamin B12, and vitamin B6, can effectively lower homocysteine levels. However, clinical trials have shown mixed results regarding whether lowering homocysteine through supplementation actually reduces cardiovascular events, suggesting that elevated homocysteine may be a marker of risk rather than a direct cause. Nonetheless, maintaining adequate B-vitamin status appears beneficial for overall health.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Folate (folic acid) supplementation can reduce homocysteine levels by 25% or more in individuals with elevated baseline levels', 'Vitamin B12 deficiency is a common cause of elevated homocysteine, particularly in older adults and vegetarians/vegans', 'Genetic variations in the MTHFR gene affect homocysteine metabolism and may require higher folate intake to maintain normal levels'],
  NULL,
  'Homocysteine - Suppl.me Glossary',
  'An amino acid associated with cardiovascular disease risk when elevated'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 94. Hydrolyzed
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hydrolyzed',
  'Hydrolyzed',
  NULL,
  'hy-druh-lyzd',
  'Hydrolyzed refers to proteins or other compounds that have been broken down into smaller fragments through hydrolysis—a chemical process that uses water to break chemical bonds. In supplements, hydrolyzed proteins are partially digested proteins broken into smaller peptides and amino acids.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Hydrolyzed - Suppl.me Glossary',
  'Proteins broken down into smaller peptides through hydrolysis for easier absorption'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 95. Hydroxyproline
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hydroxyproline',
  'Hydroxyproline',
  NULL,
  'hy-drok-see-proh-leen',
  'Hydroxyproline is a modified amino acid found almost exclusively in collagen, created through post-translational hydroxylation of proline residues. It comprises about 13% of collagen''s amino acid content and is essential for collagen stability. Its presence in blood or urine serves as a biomarker of collagen turnover.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Hydroxyproline - Suppl.me Glossary',
  'Modified amino acid found almost exclusively in collagen, essential for stability'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 96. Hyperglycemia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hyperglycemia',
  'Hyperglycemia',
  NULL,
  NULL,
  'Elevated blood glucose levels above the normal range, commonly associated with diabetes and prediabetes.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A person with type 2 diabetes may experience hyperglycemia (blood glucose 250 mg/dL) after eating a large carbohydrate-heavy meal without adequate medication.', 'Someone hospitalized for surgery may develop stress hyperglycemia even without prior diabetes history, requiring temporary insulin therapy.', 'Chronic hyperglycemia with HbA1c of 9.5% significantly increases risk of diabetic complications like retinopathy and nephropathy.'],
  NULL,
  'Hyperglycemia - Suppl.me Glossary',
  'Elevated blood glucose levels above the normal range'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 97. Hypertensive
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'hypertensive',
  'Hypertensive',
  NULL,
  'hy-per-ten-siv',
  'Hypertensive describes a person who has high blood pressure (hypertension), typically defined as systolic pressure of 130 mmHg or higher and/or diastolic pressure of 80 mmHg or higher. It indicates elevated pressure in the arteries that increases cardiovascular risk.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Hypertensive - Suppl.me Glossary',
  'Having high blood pressure (hypertension) above normal ranges'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 98. Irritable Bowel Syndrome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ibs',
  'Irritable Bowel Syndrome',
  'IBS',
  NULL,
  'A chronic functional gastrointestinal disorder characterized by recurrent abdominal pain associated with altered bowel habits (diarrhea, constipation, or both) in the absence of structural or biochemical abnormalities.',
  'Irritable Bowel Syndrome (IBS) is a disorder of gut-brain interaction affecting 10-15% of the global population. It''s diagnosed using Rome IV criteria, which require recurrent abdominal pain at least one day per week over the past three months, associated with two or more of: (1) related to defecation, (2) associated with change in stool frequency, or (3) associated with change in stool form or appearance. Symptoms must have started at least six months before diagnosis.

IBS is classified into subtypes based on predominant stool pattern: IBS-D (diarrhea predominant), IBS-C (constipation predominant), IBS-M (mixed), and IBS-U (unclassified). The subtypes can change over time and guide treatment selection. IBS is a diagnosis of exclusion, meaning organic diseases must be ruled out through appropriate testing based on symptoms and red flags.

The pathophysiology is multifactorial and incompletely understood, involving visceral hypersensitivity, altered gut motility, intestinal permeability changes, gut microbiome dysbiosis, immune activation, and disrupted gut-brain axis signaling. Many patients report symptom onset after gastroenteritis (post-infectious IBS), psychological stress, or antibiotic use.

Evidence-based treatments include dietary modifications (low FODMAP diet, fiber supplementation depending on subtype), probiotics (strain-specific), peppermint oil, antispasmodics, antidepressants (tricyclics or SSRIs at low doses for neuromodulation), and psychological therapies (cognitive behavioral therapy, gut-directed hypnotherapy). No single treatment works for all patients, necessitating individualized, trial-based approaches.

In supplement research, IBS is a common target condition for probiotics, prebiotics, digestive enzymes, and botanical products. Studies often measure outcomes using validated questionnaires like IBS Symptom Severity Score (IBS-SSS) or IBS Quality of Life (IBS-QOL) scales. Responder rates (typically defined as ≥50-point reduction in IBS-SSS or adequate relief) are key endpoints.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis reports that probiotic strain X reduces IBS symptom severity by 40 points on the IBS-SSS scale compared to placebo', 'Patient with IBS-D experiences 4-6 loose stools daily with urgency, improving to 1-2 formed stools daily on low FODMAP diet', 'Clinical trial shows 52% responder rate in IBS patients receiving specific multi-strain probiotic vs. 36% with placebo'],
  NULL,
  'Irritable Bowel Syndrome - Suppl.me Glossary',
  'Chronic functional gastrointestinal disorder with recurrent abdominal pain and altered bowel habits'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 99. Interleukin-1
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'il1',
  'Interleukin-1',
  'IL-1',
  NULL,
  'A pro-inflammatory cytokine that exists in two primary forms (IL-1α and IL-1β) and plays a crucial role in initiating and amplifying inflammatory responses, fever, and immune cell activation.',
  'Interleukin-1 (IL-1) is one of the first cytokines to be released during inflammation or immune activation. It exists primarily as two forms: IL-1α (typically associated with localized inflammation) and IL-1β (the predominant circulating form). IL-1β is produced mainly by activated macrophages and monocytes in response to infection, injury, or inflammatory triggers. Once released, IL-1β triggers a cascade of inflammatory responses including fever, acute phase protein production, immune cell recruitment, and activation of other inflammatory pathways.

IL-1β production is tightly regulated through the inflammasome pathway. Inactive pro-IL-1β must be cleaved by caspase-1 to become active IL-1β. This regulation prevents excessive inflammation under normal conditions but can become dysregulated in chronic inflammatory states. Chronically elevated IL-1 is implicated in conditions like rheumatoid arthritis, inflammatory bowel disease, type 2 diabetes, atherosclerosis, and neurodegenerative diseases.

Normal circulating IL-1β levels are very low in healthy individuals (often &lt;1 pg/mL or undetectable), as IL-1 primarily acts locally at sites of inflammation. Detectable or elevated serum IL-1β indicates systemic inflammation. In supplement research, IL-1β is measured to assess anti-inflammatory effects. Omega-3 fatty acids, curcumin, probiotics, and various antioxidants have been studied for their ability to reduce IL-1β levels or inhibit IL-1 signaling pathways.

Therapeutic drugs that block IL-1 signaling (IL-1 receptor antagonists like anakinra, or IL-1β antibodies like canakinumab) have proven effective for certain inflammatory conditions, demonstrating IL-1''s importance in disease pathology. When evaluating supplement research on IL-1, look for baseline inflammation status, as benefits are typically greater in populations with elevated baseline markers.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A study might report that curcumin supplementation reduced IL-1β by -2.54 pg/mL (95% CI -4.28 to -0.80) in patients with metabolic syndrome', 'Meta-analyses examining omega-3 fatty acids often show significant reductions in IL-1β (SMD = -0.45) particularly in inflammatory conditions', 'Baseline IL-1β of 5.8 pg/mL decreasing to 2.1 pg/mL after probiotic supplementation indicates reduced systemic inflammation'],
  NULL,
  'Interleukin-1 - Suppl.me Glossary',
  'Pro-inflammatory cytokine initiating and amplifying inflammatory responses'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 100. Interleukin-6
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'il6',
  'Interleukin-6',
  'IL-6',
  NULL,
  'A pro-inflammatory cytokine produced by immune cells, muscle tissue, and fat cells that plays a dual role in immune response and chronic inflammation, commonly measured as a biomarker of systemic inflammation.',
  'Interleukin-6 (IL-6) is a signaling protein (cytokine) with complex functions in the body. During acute inflammation or infection, IL-6 is rapidly released by immune cells to help coordinate the immune response, promote fever, and stimulate the production of acute phase proteins like C-reactive protein (CRP). However, chronically elevated IL-6 is associated with numerous health problems including cardiovascular disease, diabetes, obesity, autoimmune conditions, and age-related decline.

Normal serum IL-6 levels are typically less than 5-7 pg/mL in healthy adults, though reference ranges vary by laboratory and population. Levels can spike dramatically during acute illness but should return to baseline once the condition resolves. Persistently elevated IL-6 indicates chronic low-grade inflammation, which is linked to metabolic dysfunction and increased disease risk.

In supplement research, IL-6 is frequently measured as an outcome to assess anti-inflammatory effects. Omega-3 fatty acids, curcumin, vitamin D, probiotics, and various antioxidants have been studied for their ability to reduce IL-6 levels. Reductions in IL-6 may indicate decreased systemic inflammation and improved metabolic health, though the clinical significance depends on baseline levels and the magnitude of change.

IL-6 can also increase temporarily after exercise, where it serves beneficial metabolic functions rather than indicating harmful inflammation. This context-dependent nature of IL-6 makes interpretation complex—the same elevated IL-6 level might be beneficial (post-exercise) or harmful (chronic elevation). When evaluating research, consider baseline IL-6 levels, the population studied, and whether changes represent acute or chronic patterns.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis might report that curcumin supplementation reduced IL-6 by -1.12 pg/mL (95% CI -1.92 to -0.33) in people with metabolic syndrome', 'Baseline IL-6 of 8.5 pg/mL decreasing to 5.2 pg/mL after omega-3 supplementation indicates reduced chronic inflammation', 'Studies often show greater IL-6 reductions in populations with elevated baseline inflammation (e.g., obesity, diabetes) compared to healthy individuals'],
  NULL,
  'Interleukin-6 - Suppl.me Glossary',
  'Pro-inflammatory cytokine serving as a biomarker of systemic inflammation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 101. Immune System
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'immunesystem',
  'Immune System',
  NULL,
  NULL,
  'The body''s defense network of cells, tissues, and organs that protect against pathogens, foreign substances, and abnormal cells, comprising both innate and adaptive immune responses.',
  'The immune system consists of two main components: the innate immune system (first line of defense including physical barriers like skin, and cells like neutrophils and macrophages that respond quickly but non-specifically) and the adaptive immune system (specialized responses involving B cells that produce antibodies and T cells that kill infected cells or coordinate immune responses). These systems work together to detect and eliminate threats while avoiding attacks on the body''s own cells.

Immune function can be assessed through various biomarkers including white blood cell counts, immunoglobulin levels, inflammatory markers (CRP, IL-6), and functional tests measuring immune cell activity. A balanced immune system is crucial—too little activity increases infection and cancer risk, while excessive or misdirected activity causes autoimmune diseases, allergies, and chronic inflammation.

Numerous factors affect immune function including nutrition (vitamins C, D, A, zinc, selenium, protein), sleep quality and duration, physical activity level, stress, age, gut microbiome health, and chronic health conditions. Certain supplements may support immune function, particularly vitamin D, vitamin C, zinc, and probiotics, though claims often exceed evidence. A healthy lifestyle remains the foundation of good immune health.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Vitamin D sufficiency (blood levels 30-50 ng/mL) supports immune cell function and may reduce respiratory infection risk', 'Zinc supplementation (75-100mg daily at symptom onset) may reduce common cold duration by approximately one day', 'Chronic sleep deprivation (less than 6 hours nightly) significantly impairs immune function and increases infection susceptibility'],
  NULL,
  'Immune System - Suppl.me Glossary',
  'Body defense network protecting against pathogens and disease'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 102. Inflammation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'inflammation',
  'Inflammation',
  NULL,
  NULL,
  'The body''s natural immune response to injury, infection, or harmful stimuli, characterized by increased blood flow, immune cell activity, and the release of signaling molecules called cytokines.',
  'Inflammation serves as the body''s protective mechanism to remove harmful stimuli and initiate healing. Acute inflammation is typically short-lived (hours to days) and resolves once the threat is eliminated—such as redness and swelling after a cut or during infection recovery. This type of inflammation is beneficial and necessary for survival.

Chronic inflammation occurs when the inflammatory response persists for months or years, often without an obvious external threat. This sustained activation can damage healthy tissues and is implicated in numerous diseases including cardiovascular disease, type 2 diabetes, arthritis, Alzheimer''s disease, and certain cancers. Chronic inflammation can result from ongoing infections, autoimmune disorders, prolonged exposure to irritants, obesity, poor diet, stress, or lack of physical activity.

Inflammation is measured through biomarkers such as C-reactive protein (CRP), interleukin-6 (IL-6), and tumor necrosis factor-alpha (TNF-α). Elevated levels of these markers in blood tests indicate active inflammatory processes. Many supplements and lifestyle interventions aim to reduce chronic inflammation by modulating these inflammatory pathways without suppressing the acute immune responses needed for fighting infections and healing injuries.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Curcumin supplementation reduced C-reactive protein by 1.55 mg/L, interleukin-6 by 1.69 pg/mL, and tumor necrosis factor-α by 3.13 pg/mL in populations with chronic inflammation', 'Magnesium reduces serum CRP (SMD -0.356) in individuals with baseline CRP >3 mg/L, demonstrating anti-inflammatory effects', 'Omega-3 fatty acids (EPA and DHA) reduce pro-inflammatory cytokines and increase anti-inflammatory mediators called resolvins'],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 103. Inflammatory Bowel Disease
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'inflammatoryboweldisease',
  'Inflammatory Bowel Disease',
  'IBD',
  'in-FLAM-uh-tor-ee BOW-ul dih-ZEEZ',
  'A group of chronic inflammatory conditions of the gastrointestinal tract, primarily including Crohn''s disease and ulcerative colitis. These autoimmune-mediated diseases involve inappropriate immune responses to intestinal contents, causing inflammation, ulceration, and digestive symptoms.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 104. Insulin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'insulin',
  'Insulin',
  NULL,
  NULL,
  'A peptide hormone produced by beta cells in the pancreas that regulates blood glucose levels by promoting cellular uptake of glucose and inhibiting glucose production. It is central to carbohydrate, fat, and protein metabolism.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Insulin - Suppl.me Glossary',
  'Pancreatic hormone regulating blood glucose by promoting cellular glucose uptake'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 105. Insulin Resistance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'insulinresistance',
  'Insulin Resistance',
  NULL,
  NULL,
  'A condition where cells in muscles, fat, and liver don''t respond effectively to insulin, requiring higher levels of insulin to move glucose from the bloodstream into cells.',
  'Insulin resistance develops when cells become less sensitive to insulin''s signals, forcing the pancreas to produce more insulin to achieve normal blood glucose control. Initially, the pancreas compensates by producing extra insulin, maintaining relatively normal blood sugar levels but at the cost of elevated insulin (hyperinsulinemia). Over time, the pancreas may fail to keep up with demand, leading to elevated blood glucose levels and eventually type 2 diabetes if left unaddressed.

Multiple factors contribute to insulin resistance including excess body fat (particularly visceral abdominal fat), physical inactivity, chronic inflammation, oxidative stress, poor sleep, certain medications, genetics, and aging. The condition is strongly associated with metabolic syndrome—a cluster of conditions including high blood pressure, elevated triglycerides, low HDL cholesterol, and increased waist circumference that collectively increase cardiovascular disease risk.

Insulin resistance is assessed through various methods including fasting insulin levels, fasting glucose, glucose tolerance tests, and calculated indices like HOMA-IR (Homeostatic Model Assessment of Insulin Resistance). The condition is often reversible through lifestyle interventions including weight loss, regular physical activity, improved diet quality, stress management, and adequate sleep. Some supplements show promise in improving insulin sensitivity, though lifestyle modifications remain the cornerstone of treatment.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium supplementation improved insulin resistance (WMD -0.67, 95% CI -1.20 to -0.14) in people with diabetes or high metabolic risk with at least 12 weeks of use', 'Chromium picolinate may enhance insulin signaling and improve glucose uptake in insulin-resistant individuals', 'Weight loss of 5-10% body weight can significantly improve insulin sensitivity in overweight individuals with insulin resistance'],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 106. Inulin-type Fructans
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'inulintypefructans',
  'Inulin-type Fructans',
  NULL,
  NULL,
  'A subgroup of fructans consisting of linear chains of fructose molecules terminated by a glucose unit, including inulin and fructo-oligosaccharides (FOS), that function as prebiotic fibers selectively promoting beneficial gut bacteria growth.',
  'Inulin-type fructans are polymers of fructose molecules linked by β(2→1) glycosidic bonds with a terminal glucose unit. They are classified by chain length: short-chain fructo-oligosaccharides (scFOS or simply FOS) contain 2-8 fructose units, while inulin typically contains 10-60 units. Both occur naturally in foods like chicory root, Jerusalem artichoke, onions, garlic, leeks, asparagus, bananas, and wheat.

Humans lack the enzymes to hydrolyze β(2→1) fructosyl linkages, making inulin-type fructans indigestible in the small intestine. Upon reaching the colon, they undergo bacterial fermentation, primarily by Bifidobacterium and Bacteroides species. This fermentation produces short-chain fatty acids (SCFAs)—particularly acetate, propionate, and butyrate—which provide energy to colonocytes, reduce colonic pH, and have systemic metabolic and anti-inflammatory effects.

Inulin-type fructans are among the most extensively studied prebiotics. Evidence shows they increase beneficial bacteria (especially Bifidobacterium), improve calcium absorption, may enhance satiety and glucose metabolism, support immune function, and improve bowel regularity. Typical effective doses range from 5-15g daily, though benefits are dose-dependent and individual responses vary.

As high-FODMAP carbohydrates, inulin and FOS can cause gas, bloating, and abdominal discomfort, particularly in individuals with IBS or FODMAP sensitivity. Tolerance varies significantly between individuals and depends on baseline gut microbiome composition, dose, and adaptation period. Gradual dose escalation starting at 2-3g daily may improve tolerance. Some people never tolerate even low doses, while others adapt over weeks.

Chain length affects fermentation rate and location: FOS is rapidly fermented in the proximal colon, potentially causing more gas initially, while longer-chain inulin is fermented more gradually throughout the colon. Some products use a blend to provide broader colonic coverage. Native inulin (extracted from chicory root) has mixed chain lengths, while synthetic versions may have more controlled distribution.

Inulin-type fructans are generally recognized as safe (GRAS) and widely used as food ingredients for fat replacement, texture modification, and fiber fortification, in addition to their prebiotic applications in supplements.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Study shows 10g inulin daily increases Bifidobacteria from 8% to 24% of total gut bacteria and improves bowel movement frequency', 'Patient with mild constipation starts with 5g FOS daily, gradually increasing to 12g over 3 weeks with good tolerance and symptom improvement', 'Meta-analysis reports inulin-type fructans reduce body weight by 1-2 kg and improve glycemic control in overweight adults over 8-12 weeks'],
  NULL,
  'Inulin-type Fructans - Suppl.me Glossary',
  'Prebiotic fibers including inulin and FOS that promote beneficial gut bacteria growth'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 107. Isoleucine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'isoleucine',
  'Isoleucine',
  'Ile, I (single-letter code)',
  'eye-so-loo-seen',
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Isoleucine plays important roles in muscle metabolism, immune function, hemoglobin production, and energy regulation.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Isoleucine - Suppl.me Glossary',
  'Essential branched-chain amino acid important for muscle metabolism and immune function'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 108. Joint Health
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'jointhealth',
  'Joint Health',
  NULL,
  NULL,
  'The structural integrity and functional capacity of joints—where two or more bones meet—involving cartilage, synovial fluid, ligaments, and surrounding tissues that enable smooth, pain-free movement.',
  'Healthy joints allow smooth, pain-free movement through several key components: articular cartilage (smooth tissue covering bone ends that cushions impact), synovial fluid (lubricating fluid that nourishes cartilage and reduces friction), synovial membrane (tissue producing synovial fluid), ligaments (connect bones and stabilize joints), tendons (connect muscles to bones), and surrounding muscles. Joint health is crucial for mobility, quality of life, and independence, especially as we age.

The most common joint condition is osteoarthritis, characterized by cartilage degradation, inflammation, pain, stiffness, and reduced range of motion. Risk factors include aging, obesity, joint injury, repetitive stress, genetics, and inflammatory conditions. Cartilage has limited blood supply and regenerates slowly, making prevention and early intervention particularly important.

Supporting joint health involves maintaining healthy body weight (reduces mechanical stress), regular low-impact exercise (swimming, cycling, walking), strength training (supports and stabilizes joints), proper movement mechanics, adequate nutrition (particularly omega-3s, vitamin C, vitamin D), and staying well-hydrated. Supplements that may support joint health include collagen peptides, glucosamine and chondroitin (though evidence is mixed), omega-3 fatty acids (anti-inflammatory), and methylsulfonylmethane (MSM).',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Collagen peptide supplementation (10g daily) reduced activity-related joint pain in athletes and may slow cartilage degradation', 'Weight loss of 10% body weight in overweight individuals significantly reduces knee osteoarthritis pain and improves function', 'Omega-3 supplementation (2-3g EPA+DHA daily) reduced joint pain and stiffness in rheumatoid arthritis and may help osteoarthritis'],
  NULL,
  'Joint Health - Suppl.me Glossary',
  'Structural integrity and functional capacity of joints'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 109. Lactobacillus
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'lactobacillus',
  'Lactobacillus',
  NULL,
  'lack-toh-buh-SILL-us',
  'Lactobacillus is a genus of beneficial bacteria that naturally inhabit various parts of the human body (primarily the gut, mouth, and urogenital tract) and are widely used as probiotics for supporting digestive health, immune function, and microbial balance.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Lactobacillus - Suppl.me Glossary',
  'Genus of beneficial lactic acid bacteria used widely in probiotics and fermented foods'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 110. LDL Cholesterol (Low-Density Lipoprotein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ldlcholesterol',
  'LDL Cholesterol (Low-Density Lipoprotein)',
  'LDL, LDL-C, Bad Cholesterol',
  'el-dee-el kuh-les-tuh-rawl',
  'A type of lipoprotein that transports cholesterol from the liver to peripheral tissues, with elevated levels strongly associated with atherosclerosis and cardiovascular disease risk. Often called ''bad cholesterol'' because high levels contribute to arterial plaque buildup.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['An individual with LDL of 160 mg/dL who adopts a Mediterranean diet, exercises regularly, and takes plant sterols may reduce LDL to 120 mg/dL, significantly lowering cardiovascular risk', 'Whey protein supplementation (20-40g daily) reduced LDL cholesterol by mean difference of 5.38 mg/dL (p<0.01) in meta-analyses of adults under 50 years', 'A person with familial hypercholesterolemia (genetic high cholesterol) combining lifestyle changes, supplements, and statin medication may achieve LDL <70 mg/dL, dramatically reducing their very high cardiovascular risk'],
  NULL,
  'LDL Cholesterol (Low-Density Lipoprotein) - Suppl.me Glossary',
  'Low-density lipoprotein cholesterol, the primary contributor to arterial plaque buildup'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 111. Leucine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'leucine',
  'Leucine',
  'Leu, L (single-letter code)',
  'loo-seen',
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Leucine is the most potent amino acid for stimulating muscle protein synthesis through activation of the mTOR signaling pathway.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 30g serving of whey protein isolate provides approximately 3g of leucine, crossing the threshold needed to maximally stimulate muscle protein synthesis', 'An older adult consuming 40g of high-quality protein per meal (providing ~3.5-4g leucine) can better overcome anabolic resistance and maintain muscle mass', 'A meal with 150g chicken breast (~35g protein, ~2.8g leucine) combined with quinoa provides sufficient leucine to trigger the mTOR pathway and initiate muscle building'],
  NULL,
  'Leucine - Suppl.me Glossary',
  'Essential branched-chain amino acid, primary driver of muscle protein synthesis'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 112. Lipid Peroxidation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'lipidperoxidation',
  'Lipid Peroxidation',
  'None',
  NULL,
  'The oxidative degradation of lipids (fats) in cell membranes by reactive oxygen species, creating a chain reaction that damages membrane structure and produces toxic byproducts, serving as a key mechanism of oxidative damage in disease and aging.',
  'Lipid peroxidation is a destructive process where reactive oxygen species (ROS) attack polyunsaturated fatty acids (PUFAs) in cellular membranes, initiating a self-propagating chain reaction of oxidative damage. This process compromises membrane integrity, alters membrane protein function, and generates toxic aldehyde byproducts that can damage proteins and DNA throughout the cell.

**Mechanism—Three-Phase Chain Reaction:**

**Initiation:** A reactive oxygen species (typically hydroxyl radical, but also peroxyl radicals or peroxynitrite) abstracts a hydrogen atom from a methylene group (-CH2-) in a polyunsaturated fatty acid, creating a lipid radical (L•). PUFAs are particularly vulnerable because they contain multiple carbon-carbon double bonds with adjacent methylene groups that have relatively weak C-H bonds.

**Propagation:** The lipid radical rapidly reacts with molecular oxygen (O2) to form a lipid peroxyl radical (LOO•). This peroxyl radical can abstract hydrogen from an adjacent PUFA, generating a lipid hydroperoxide (LOOH) and creating a new lipid radical (L•), perpetuating the chain reaction. Without intervention, one initiating event can oxidize numerous PUFA molecules.

**Termination:** Chain reactions are terminated when two radicals react with each other, when a lipid radical is reduced by an antioxidant (like vitamin E, which donates a hydrogen atom), or when enzyme systems (glutathione peroxidase, phospholipid hydroperoxide glutathione peroxidase) reduce lipid hydroperoxides to alcohols.

**Consequences of lipid peroxidation:**

**Membrane damage:** Oxidized phospholipids disrupt membrane fluidity, permeability, and organization. This impairs membrane protein function, ion gradients, and cellular compartmentalization. Severe peroxidation can cause membrane rupture and cell death.

**Toxic aldehyde formation:** Lipid hydroperoxides decompose to form reactive aldehydes including malondialdehyde (MDA), 4-hydroxynonenal (4-HNE), and acrolein. These aldehydes can:
- Form adducts with proteins (altering their function)
- Cross-link proteins (contributing to aging)
- Damage DNA (causing mutations)
- Propagate oxidative stress throughout the cell

**Inflammatory signaling:** Lipid peroxidation products activate inflammatory pathways, including NF-κB, and can be incorporated into oxidized LDL particles that drive atherosclerosis.

**Factors influencing susceptibility:**

**PUFA content:** Membranes rich in omega-3 and omega-6 fatty acids (which have multiple double bonds) are more susceptible than those rich in saturated or monounsaturated fats. This creates a paradox—PUFAs have health benefits but require adequate antioxidant protection.

**Antioxidant status:** Lipid-soluble antioxidants (vitamin E, carotenoids, coenzyme Q10) and water-soluble antioxidants (vitamin C, glutathione) provide protection. Vitamin E is particularly important, residing in membranes where it intercepts lipid peroxyl radicals.

**Transition metals:** Iron and copper catalyze lipid peroxidation through Fenton-like reactions, converting relatively stable lipid hydroperoxides into reactive alkoxyl radicals that propagate damage.

**Oxygen tension:** Higher oxygen partial pressure accelerates lipid peroxidation.

**Measurement:**

**Direct markers:** Lipid hydroperoxides can be measured, but they''re unstable. F2-isoprostanes (prostaglandin-like compounds formed from arachidonic acid peroxidation) are considered gold-standard markers.

**Byproduct measurement:** Malondialdehyde (MDA) measured by thiobarbituric acid reactive substances (TBARS) assay is most common but has specificity issues. 4-HNE and 4-HNE-protein adducts are more specific but require specialized assays.

**Oxidized lipoproteins:** Oxidized LDL measurement reflects lipid peroxidation in the vascular context.

**Pathological relevance:**

Lipid peroxidation contributes to:
- **Atherosclerosis:** Oxidized LDL formation
- **Neurodegenerative diseases:** Neuronal membrane damage in Alzheimer''s, Parkinson''s
- **Ischemia-reperfusion injury:** ROS burst during reperfusion
- **Aging:** Cumulative membrane damage
- **Cancer:** DNA damage from aldehydes
- **Inflammatory diseases:** Propagation of inflammatory signaling

**Protection strategies:**

- Adequate dietary antioxidants (vitamin E from nuts, seeds, oils; vitamin C; carotenoids)
- Omega-3 fatty acids (despite being highly unsaturated, they may reduce overall oxidative stress through anti-inflammatory effects)
- Polyphenol-rich foods (fruits, vegetables, tea)
- Avoiding pro-oxidant exposures (smoking, excessive alcohol, pollution)
- Maintaining iron stores in normal range (excess iron catalyzes peroxidation)',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['When vitamin E intake is inadequate, erythrocyte (red blood cell) membranes show increased lipid peroxidation, measured as elevated MDA levels (>2.5 μmol/L plasma), potentially leading to hemolysis.', 'Isoprostane levels (F2-IsoP) in healthy adults typically range from 15-40 pg/mL plasma, but can exceed 100 pg/mL in conditions of severe oxidative stress like sepsis or myocardial infarction.', 'Supplementation with vitamin E (400-800 IU daily) can reduce markers of lipid peroxidation by 20-40% in individuals with elevated oxidative stress, though effects on clinical outcomes are less consistent.'],
  NULL,
  'Lipid Peroxidation - Suppl.me Glossary',
  'Oxidative degradation of lipids causing cellular damage and producing reactive compounds'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 113. Loading Phase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'loadingphase',
  'Loading Phase',
  NULL,
  NULL,
  'A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or blood levels, followed by a lower maintenance dose to sustain those levels. This approach is used when a supplement takes time to accumulate in the body and when faster saturation is desirable.',
  NULL,
  'Loading phases are beneficial when rapid results are desired and when a supplement accumulates slowly at standard doses. Understanding when loading is appropriate can help optimize supplement protocols for faster onset of benefits, particularly for supplements with established tissue storage capacity.',
  NULL,
  NULL,
  NULL,
  ARRAY['Creatine: Loading dose of 20g/day for 5-7 days, then 3-5g/day maintenance. Achieves muscle saturation in ~1 week vs. 3-4 weeks without loading. Loading is optional but speeds up results.', 'Vitamin D: High-dose initial protocol (e.g., 50,000 IU weekly for 8 weeks) used to rapidly correct deficiency, followed by lower maintenance dose (1,000-2,000 IU daily).', 'Beta-alanine: Higher doses initially to saturate muscle carnosine, speeding time to full ergogenic effects.'],
  NULL,
  'Loading Phase - Suppl.me Glossary',
  'Initial period of higher supplement doses to rapidly saturate body stores'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 114. Lycopene
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'lycopene',
  'Lycopene',
  NULL,
  NULL,
  'A bright red carotenoid pigment found predominantly in tomatoes and other red fruits. Unlike beta-carotene, lycopene has no vitamin A activity but functions as a powerful antioxidant with particular benefits for cardiovascular health, prostate health, and skin protection.',
  'Lycopene is an acyclic isomer of beta-carotene, containing 11 conjugated and 2 non-conjugated double bonds in its all-trans configuration. This extensive conjugated system makes lycopene one of the most potent singlet oxygen quenchers among dietary carotenoids, with antioxidant capacity approximately twice that of beta-carotene and 10 times that of alpha-tocopherol (vitamin E) in vitro.

**Chemical structure and properties:**

Lycopene''s linear structure (lacking the beta-ionone rings found in beta-carotene) prevents its conversion to vitamin A, but this same structure contributes to its exceptional antioxidant properties. The molecule exists primarily in all-trans form in fresh tomatoes, but cooking and processing convert some to more bioavailable cis-isomers (particularly 5-cis, 9-cis, 13-cis, and 15-cis lycopene).

**Dietary sources and bioavailability:**

**Primary sources:**
- **Tomatoes and tomato products:** Fresh tomatoes (3-5 mg/100g), tomato paste (5-15 mg/100g), tomato sauce (10-30 mg/100g), ketchup (10-15 mg/100g)
- **Watermelon:** 4-7 mg/100g
- **Pink grapefruit:** 3-4 mg per half grapefruit
- **Papaya:** 2-5 mg/100g
- **Red bell peppers:** 0.5-2 mg/100g
- **Guava:** 5-6 mg/100g

Tomatoes and tomato products provide approximately 80-85% of lycopene intake in Western diets.

**Bioavailability factors:**

Unlike many nutrients, lycopene bioavailability is dramatically enhanced by cooking and processing. Heat processing:
- Breaks down plant cell walls, releasing lycopene from the matrix
- Converts all-trans lycopene to more absorbable cis-isomers
- Increases surface area for absorption

Studies show lycopene absorption from tomato paste or sauce is 2-4 times higher than from fresh raw tomatoes. Adding fat (olive oil, cheese, etc.) further increases absorption since lycopene is lipophilic. A study found lycopene bioavailability increased 4-fold when tomatoes were cooked with oil versus raw consumption.

**Absorption and distribution:**

After intestinal absorption (which requires dietary fat and micelle formation), lycopene is incorporated into chylomicrons and transported via lymphatics to the bloodstream. It accumulates in various tissues with highest concentrations in:
- Testes, adrenal glands, and liver
- Prostate gland (concentrations 5-10 times higher than blood levels)
- Adipose tissue (serves as storage depot)
- Skin (contributes to UV protection)

Plasma lycopene levels typically range from 0.2-1.0 μmol/L in populations consuming lycopene-rich diets. Unlike beta-carotene, lycopene does not cause carotenodermia (skin yellowing) as readily, even at high intakes.

**Mechanisms of action:**

**Antioxidant activity:** Lycopene''s primary mechanism involves singlet oxygen quenching and peroxyl radical scavenging. It protects lipids, proteins, and DNA from oxidative damage without becoming pro-oxidant at physiological concentrations. Unlike some antioxidants, lycopene functions effectively at low oxygen tensions (similar to those in most tissues).

**Anti-inflammatory effects:** Lycopene reduces NF-κB activation and decreases production of pro-inflammatory cytokines (IL-6, TNF-α, IL-1β). Studies show reduced CRP and other inflammatory markers with higher lycopene intake.

**Gene expression modulation:** Lycopene and its metabolites influence gene expression related to antioxidant enzymes, cell cycle regulation, gap junction communication, and growth factor signaling. It may enhance phase II detoxification enzymes through Nrf2 pathway activation.

**Cell signaling:** Lycopene affects IGF-1 signaling, androgen signaling (relevant for prostate health), and cell proliferation pathways, potentially explaining anti-cancer properties.

**LDL protection:** Lycopene incorporates into LDL particles and protects against oxidation, a critical early step in atherosclerosis development.

**Health benefits from research:**

**Cardiovascular health:**
- Meta-analyses show lycopene intake (primarily from tomato products) associated with 10-20% reduced cardiovascular disease risk
- Blood pressure reduction: Lycopene supplementation (9-21 mg/day) reduces systolic blood pressure by 4-5 mmHg and diastolic by 2-3 mmHg in meta-analyses
- LDL oxidation: Reduces susceptibility of LDL to oxidation by 15-30% in intervention studies
- Endothelial function: Improvements in flow-mediated dilation (marker of endothelial health) with lycopene supplementation
- Atherosclerosis: Higher lycopene levels associated with reduced carotid intima-media thickness and plaque formation

**Prostate health:**
- Observational studies: 10-20% reduced prostate cancer risk with highest versus lowest lycopene intake
- Mechanism: Lycopene accumulates preferentially in prostate tissue and may reduce oxidative stress, inflammation, and androgen signaling
- Mixed intervention results: Some trials show PSA reduction and slower cancer progression, while others show no benefit
- Strongest evidence for cooked tomato products rather than supplements
- May be most beneficial for aggressive prostate cancer subtypes

**Skin protection:**
- UV protection: Lycopene supplementation (10-16 mg/day for 10-12 weeks) reduces UV-induced erythema (sunburn) by 20-40%
- Photoaging: Reduces UV-induced damage, collagen degradation, and wrinkle formation
- Mechanism: Lycopene accumulates in skin layers and quenches singlet oxygen generated by UV exposure
- Not a substitute for sunscreen but provides complementary protection

**Metabolic health:**
- Some evidence for improved insulin sensitivity and reduced diabetes risk with higher intake
- Lycopene may reduce markers of metabolic syndrome
- Effects on lipid profiles (modest LDL reduction, triglyceride reduction in some studies)

**Bone health:**
- Emerging evidence suggests lycopene may reduce bone resorption and oxidative stress in bone tissue
- Higher intake associated with reduced osteoporosis risk in observational studies

**Male fertility:**
- Some studies show lycopene supplementation (4-8 mg/day) improves sperm quality parameters (count, motility, morphology)
- Mechanisms likely include reduced oxidative stress in reproductive tissues

**Dosing and intake recommendations:**

No official RDA for lycopene, but observational studies suggest benefits at:
- General health: 5-10 mg/day from diet
- Cardiovascular benefits: 9-15 mg/day
- Prostate health: 10-30 mg/day (primarily from cooked tomato products)

**Achieving target intake:**
- 1/2 cup tomato sauce: ~20-25 mg
- 1/4 cup tomato paste: ~15-20 mg
- 2 tablespoons ketchup: ~5 mg
- 1 cup watermelon: ~6-8 mg
- 1 medium raw tomato: ~3-5 mg

**Supplementation:**

Lycopene supplements typically provide 5-30 mg per dose. Forms include:
- Synthetic lycopene (primarily all-trans)
- Natural extracts from tomatoes (mixed isomers)
- LycoRed™ and other proprietary formulations

Natural extracts with mixed cis-trans isomers may have superior bioavailability. Take with fat-containing meals for optimal absorption. Third-party testing (USP, ConsumerLab, NSF) ensures quality.

**Safety:**

Lycopene from food sources is extremely safe with no known adverse effects. Supplemental lycopene (up to 75 mg/day) has been studied without serious adverse events. Very high intakes may cause:
- Mild gastrointestinal upset
- Lycopenodermia (orangish skin discoloration, harmless and reversible)

**Drug interactions:** Minimal; lycopene may theoretically enhance effects of cholesterol-lowering drugs or blood pressure medications, but clinical significance is unclear.

**Populations to consider supplementation:**
- Individuals with low tomato product consumption
- Those seeking cardiovascular or prostate health support
- People with limited sun exposure (for skin health)
- Men with fertility concerns

**Synergy with other nutrients:**

Lycopene may work synergistically with other tomato compounds (vitamin C, beta-carotene, vitamin E) and is often more effective when consumed as whole foods rather than isolated supplements. Some research suggests combining lycopene with other antioxidants (vitamin E, selenium) may enhance benefits.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis of 25 studies found lycopene intake of 9-21 mg/day reduced systolic blood pressure by 5.66 mmHg in hypertensive individuals', 'Men consuming ≥10 servings of tomato products weekly (approximately 30-50 mg lycopene/day) had 18-34% lower risk of prostate cancer compared to those consuming <1.5 servings weekly', 'One-half cup of tomato sauce provides approximately 20-25 mg of highly bioavailable lycopene, exceeding typical daily intake from all sources', 'Lycopene supplementation (16 mg/day for 12 weeks) reduced UV-induced erythema by 40% compared to placebo in a controlled trial'],
  NULL,
  'Lycopene - Suppl.me Glossary',
  'Red carotenoid pigment with antioxidant properties, abundant in tomatoes'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 115. Macromineral
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'macromineral',
  'Macromineral',
  NULL,
  'mak-roh-min-er-ul',
  'Macrominerals (also called major minerals) are essential minerals required by the body in relatively large amounts—typically more than 100 milligrams per day. They include calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Macromineral - Suppl.me Glossary',
  'Essential minerals required in amounts greater than 100 mg per day'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 116. Magnesium Citrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'magnesiumcitrate',
  'Magnesium Citrate',
  NULL,
  NULL,
  'A magnesium salt of citric acid that combines elemental magnesium with citrate molecules. It is one of the most commonly used and well-absorbed forms of magnesium in dietary supplements.',
  'The citrate form offers several advantages over other magnesium compounds, particularly in terms of absorption and tolerability. The citrate component itself may also provide additional benefits for certain health applications.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Magnesium Citrate - Suppl.me Glossary',
  'Highly bioavailable magnesium supplement form with mild laxative effect'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 117. Magnesium Oxide
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'magnesiumoxide',
  'Magnesium Oxide',
  'MgO',
  NULL,
  'An inorganic compound consisting of magnesium and oxygen. Despite being one of the most commonly used forms of magnesium in dietary supplements due to its low cost and high elemental magnesium content, it has relatively poor bioavailability compared to other magnesium forms.',
  'Magnesium oxide is frequently found in multivitamins and standalone magnesium supplements, often chosen by manufacturers because it contains approximately 60% elemental magnesium by weight—the highest percentage among common magnesium forms. However, this high elemental content does not translate to high absorption in the body.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Magnesium Oxide - Suppl.me Glossary',
  'Common but poorly absorbed magnesium supplement form, often used as laxative'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 118. Maintenance Dose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'maintenancedose',
  'Maintenance Dose',
  NULL,
  NULL,
  'A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically lower than a loading dose (if used) and is designed to match the body''s elimination rate, keeping levels stable over time. The maintenance dose is the long-term, ongoing dose that most users will take indefinitely.',
  NULL,
  'The maintenance dose represents the optimal long-term supplementation strategy that balances efficacy with safety and tolerability while minimizing cost. Understanding maintenance dosing helps ensure consistent benefits without the need for continuous high-dose supplementation.',
  NULL,
  NULL,
  NULL,
  ARRAY['Creatine: 3-5g/day after loading phase (or from the start if no loading)', 'Vitamin D: 1,000-2,000 IU/day after correcting deficiency', 'Magnesium: 200-400mg/day for most individuals', 'Omega-3s: 1-2g EPA+DHA/day for general health', 'Vitamin B12: 1,000 mcg/day or weekly for maintenance'],
  NULL,
  'Maintenance Dose - Suppl.me Glossary',
  'Ongoing supplement dose to maintain optimal levels after loading phase'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 119. Malondialdehyde
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'mda',
  'Malondialdehyde',
  'MDA',
  NULL,
  'A reactive compound produced during lipid peroxidation that serves as a widely-used biomarker of oxidative stress and cellular damage, particularly reflecting damage to cell membranes and lipids.',
  'Malondialdehyde (MDA) is formed when reactive oxygen species (free radicals) attack polyunsaturated fatty acids in cell membranes through a process called lipid peroxidation. As lipids are oxidized, they break down into various byproducts, with MDA being one of the most abundant and stable. Because MDA formation directly reflects oxidative damage to lipids, it''s considered a reliable marker of overall oxidative stress in the body.

MDA is typically measured in blood plasma or serum using the TBARS (thiobarbituric acid reactive substances) assay or more specific methods like HPLC. Results are usually expressed in μmol/L or nmol/mL, with normal values typically ranging from 1-3 μmol/L in healthy adults, though reference ranges vary by laboratory and method. Higher MDA levels indicate greater oxidative stress and lipid damage, which is associated with aging, chronic disease, and various pathological conditions.

Elevated MDA levels are found in numerous conditions including diabetes, cardiovascular disease, neurodegenerative disorders, metabolic syndrome, and chronic inflammation. Because cell membranes are rich in polyunsaturated fatty acids, MDA serves as a sensitive indicator of membrane damage from oxidative stress. In supplement research, MDA is commonly measured to assess whether antioxidant interventions reduce oxidative damage. Supplements like vitamin E, vitamin C, omega-3 fatty acids, coenzyme Q10, and polyphenols are studied for their ability to lower MDA levels.

Reductions in MDA suggest decreased oxidative stress and potentially reduced risk of oxidative damage-related diseases. However, MDA is just one marker of oxidative stress—it''s best interpreted alongside other markers like total antioxidant capacity (TAC), glutathione status, and oxidized LDL. When evaluating research, look for meaningful reductions in populations with elevated baseline MDA, as healthy individuals with normal oxidative stress may show minimal changes.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis might report that vitamin E supplementation reduced MDA by -0.82 μmol/L (95% CI -1.25 to -0.39) in diabetic patients', 'Baseline MDA of 4.8 μmol/L decreasing to 2.9 μmol/L after omega-3 supplementation indicates substantial reduction in lipid peroxidation', 'Studies examining antioxidant effects often show greater MDA reductions in populations with chronic disease compared to healthy controls'],
  NULL,
  'Malondialdehyde - Suppl.me Glossary',
  'Biomarker of oxidative stress and lipid peroxidation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 120. Meta-Analysis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'metaanalysis',
  'Meta-Analysis',
  NULL,
  NULL,
  'A statistical method that combines results from multiple studies to identify patterns, disagreements, or overall effects.',
  'A meta-analysis is a powerful research tool that synthesizes data from multiple independent studies addressing the same research question. By pooling results from numerous trials, meta-analyses can provide more precise estimates of treatment effects and identify patterns that might not be apparent in individual studies.

Meta-analyses are particularly valuable in supplement research because individual studies often have small sample sizes or conflicting results. By combining data from multiple RCTs, researchers can draw more reliable conclusions about a supplement''s effectiveness.

The quality of a meta-analysis depends heavily on the quality of the included studies, the comprehensiveness of the literature search, and the appropriateness of the statistical methods used.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis combining results from 20 different RCTs to determine the overall effect of vitamin D on bone mineral density.', 'Research synthesizing data from multiple studies on omega-3 supplementation and cardiovascular disease risk.', 'An analysis pooling results from various trials testing the cognitive effects of different dosages of ashwagandha.'],
  NULL,
  'Meta-Analysis - Suppl.me Glossary',
  'A statistical method that combines results from multiple studies to identify overall effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 121. Metabolic Syndrome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'metabolicsyndrome',
  'Metabolic Syndrome',
  NULL,
  NULL,
  'A cluster of conditions including central obesity, high blood pressure, high blood sugar, and abnormal cholesterol levels that increase the risk of heart disease, stroke, and type 2 diabetes.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 55-year-old man with waist circumference 44 inches, blood pressure 140/90, fasting glucose 110 mg/dL, triglycerides 180 mg/dL, and HDL 35 mg/dL meets all five criteria for metabolic syndrome.', 'After 6 months of diet and exercise, a woman with metabolic syndrome lost 20 pounds, reducing her waist circumference, blood pressure, and triglycerides, and increasing HDL—no longer meeting metabolic syndrome criteria.', 'A person with metabolic syndrome has approximately 5 times the risk of developing type 2 diabetes compared to someone without the syndrome.'],
  NULL,
  'Metabolic Syndrome - Suppl.me Glossary',
  'Cluster of conditions increasing risk of heart disease, diabetes, and stroke'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 122. Metabolism
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'metabolism',
  'Metabolism',
  NULL,
  NULL,
  'The sum of all chemical reactions in the body that convert nutrients into energy and building blocks for growth, repair, and maintenance of tissues. Includes both catabolic (breakdown) and anabolic (synthesis) processes.',
  'Metabolism encompasses thousands of coordinated chemical reactions organized into metabolic pathways. Catabolism breaks down molecules (carbohydrates, fats, proteins) to release energy stored in chemical bonds, producing ATP (adenosine triphosphate)—the cell''s energy currency. Anabolism uses energy and simple molecules to build complex structures like proteins, nucleic acids, and cell membranes. These processes are tightly regulated by enzymes, hormones, and cellular signals to maintain homeostasis.

Metabolic rate—often measured as basal metabolic rate (BMR) or resting metabolic rate (RMR)—represents the energy expenditure needed for basic physiological functions like breathing, circulation, temperature regulation, and cellular processes. Total daily energy expenditure includes BMR plus activity and thermogenesis. Metabolic rate varies based on age, sex, body composition (muscle burns more calories than fat), genetics, hormones (thyroid hormones strongly influence metabolism), activity level, diet composition, and environmental temperature.

Metabolic health refers to the body''s ability to efficiently process and utilize nutrients, maintain stable blood sugar and lipid levels, and respond appropriately to insulin signaling. Poor metabolic health (metabolic syndrome) involves insulin resistance, elevated blood pressure, abnormal cholesterol, and increased waist circumference. Supplements and lifestyle interventions can influence metabolic pathways—for example, magnesium supports glucose metabolism, omega-3s affect lipid metabolism, and creatine enhances energy metabolism in muscles and brain.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium acts as a cofactor in over 300 enzymatic reactions involved in energy metabolism, protein synthesis, and glucose control', 'Creatine supports energy metabolism by regenerating ATP during high-intensity activities, allowing rapid energy availability', 'Iron is essential for energy metabolism as a component of cytochromes in the electron transport chain that produces ATP'],
  NULL,
  'Metabolism - Suppl.me Glossary',
  'The sum of chemical reactions that convert nutrients into energy and building blocks'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 123. Methylcobalamin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'methylcobalamin',
  'Methylcobalamin',
  'MeCbl',
  NULL,
  'An active, coenzyme form of vitamin B12 that participates directly in biochemical reactions without requiring conversion, particularly important for neurological function and methylation.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Methylcobalamin - Suppl.me Glossary',
  'Active form of vitamin B12 used in supplements, readily utilized by the body'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 124. Methylfolate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'methylfolate',
  'Methylfolate',
  '5-MTHF',
  NULL,
  'The active, bioavailable form of folate (5-methyltetrahydrofolate) that requires no metabolic conversion and can be used directly by cells for methylation and DNA synthesis.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Methylfolate - Suppl.me Glossary',
  'Active form of folate that bypasses MTHFR enzyme, superior to folic acid'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 125. Micronized
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'micronized',
  'Micronized',
  NULL,
  NULL,
  'A process that reduces supplement particles to extremely small sizes, typically less than 20 micrometers (0.02 millimeters) in diameter. This mechanical process increases the surface area of particles, which can improve dissolution, absorption, and bioavailability of certain supplements.',
  'How Micronization Works:

The micronization process typically involves:
1. Mechanical grinding: Using specialized mills or jet mills to break down particles
2. Air classification: Separating particles by size to ensure uniform micron-sized particles
3. Quality control: Testing to verify particle size meets specifications

The resulting powder has dramatically increased surface area compared to standard particle sizes, which affects how it interacts with digestive fluids.

Benefits of Micronization:

• Faster dissolution: Smaller particles dissolve more quickly in digestive fluids
• Improved absorption: Increased surface area allows for more efficient absorption
• Enhanced bioavailability: More of the active ingredient becomes available to the body
• Better mixing: Micronized powders blend more uniformly in formulations
• Reduced grittiness: Smoother texture in powdered supplements
• Lower doses possible: Better absorption may allow for smaller effective doses

Common Micronized Supplements:

Micronized Creatine: One of the most popular micronized supplements. Micronized creatine monohydrate dissolves more easily in water and may cause less stomach discomfort than regular creatine. The smaller particles also mean the powder mixes better and doesn''t settle as quickly in drinks.

Micronized Resveratrol: Resveratrol naturally has poor bioavailability. Micronization increases surface area, potentially improving absorption and therapeutic effectiveness.

Micronized Curcumin: Curcumin has notoriously poor bioavailability. Micronization is one strategy (among many) to enhance absorption, though it may be less effective than other approaches like combining with piperine or using specialized formulations.

Micronized DHEA: The hormone DHEA is sometimes micronized to improve absorption and consistency.

When Micronization Helps:

Micronization is most beneficial for:
• Poorly water-soluble compounds: Substances that naturally dissolve slowly benefit most from increased surface area
• Supplements with bioavailability challenges: Compounds like creatine, curcumin, and resveratrol
• Powder formulations: Where mixing and texture matter
• Compounds sensitive to particle size: Where dissolution rate affects therapeutic effect

When Micronization May Not Matter:

Micronization provides minimal benefit for:
• Already highly bioavailable supplements: If absorption is already excellent, smaller particles won''t help much
• Liquid or oil-based supplements: Particle size is irrelevant for these forms
• Supplements absorbed via other mechanisms: Some nutrients use active transport that isn''t affected by particle size

Research Evidence:

Evidence for micronization benefits varies:
• Well-supported: Micronized creatine shows improved solubility and potentially reduced GI discomfort
• Promising: Some evidence for improved bioavailability of micronized curcumin and resveratrol
• Limited research: Many micronized products lack head-to-head comparison studies
• Manufacturing variability: Particle size and quality can vary between manufacturers

Micronized vs. Nano-sized:

• Micronized: Particles measured in micrometers (1-20 micrometers)
• Nano-sized: Even smaller particles measured in nanometers (1-100 nanometers)
• Liposomal: Particles encapsulated in lipid structures (different technology)

Nano-sized particles may offer additional bioavailability advantages but raise some safety questions that are still being researched.

Practical Considerations:

• Cost: Micronized supplements typically cost more due to additional processing
• Marketing vs. reality: Not all supplements benefit equally from micronization despite marketing claims
• Particle size verification: Look for products that specify particle size and testing methods
• Combination with other technologies: Micronization is sometimes combined with other bioavailability enhancers
• Dosing adjustments: Some micronized supplements may require lower doses due to improved absorption

Quality and Manufacturing:

• Standardization matters: Particle size should be consistent and verified
• Agglomeration risk: Very small particles can clump together, reducing the benefit
• Stability: Some micronized products may be less stable over time
• Third-party testing: Look for products tested for particle size and purity',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Micronized - Suppl.me Glossary',
  'Process reducing particles to microscopic size to improve dissolution and absorption'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 126. Mineral
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'mineral',
  'Mineral',
  NULL,
  'min-er-ul',
  'Minerals are inorganic chemical elements essential for various physiological functions in the human body. Unlike vitamins, minerals are not made by living organisms and must be obtained from diet or supplements. They remain unchanged during digestion and cannot be destroyed by heat or light.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Mineral - Suppl.me Glossary',
  'Inorganic chemical elements essential for various physiological functions'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 127. Mitochondria
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'mitochondria',
  'Mitochondria',
  NULL,
  NULL,
  'Specialized organelles within cells that generate most of the cell''s energy (ATP) through oxidative phosphorylation, often called the ''powerhouses of the cell.''',
  'Mitochondria convert nutrients (glucose, fatty acids, amino acids) into adenosine triphosphate (ATP), the universal energy currency of cells, through a process called oxidative phosphorylation occurring in the electron transport chain. A single cell can contain hundreds to thousands of mitochondria depending on its energy demands—muscle cells and neurons are particularly mitochondria-rich. Beyond energy production, mitochondria regulate calcium signaling, produce reactive oxygen species for signaling, participate in apoptosis (programmed cell death), and synthesize certain hormones and heme.

Mitochondrial dysfunction—reduced efficiency in ATP production—contributes to aging, fatigue, and numerous diseases including neurodegenerative disorders (Parkinson''s, Alzheimer''s), metabolic syndrome, diabetes, cardiovascular disease, and chronic fatigue syndrome. Mitochondria are unique in containing their own DNA (mtDNA), inherited exclusively from the mother, and are susceptible to damage from oxidative stress, toxins, and mutations that accumulate with age.

Supporting mitochondrial health involves regular exercise (particularly endurance and high-intensity interval training, which stimulates mitochondrial biogenesis), adequate sleep, stress management, and nutrition. Nutrients supporting mitochondrial function include B vitamins (cofactors in energy metabolism), coenzyme Q10 (CoQ10, electron transport chain component), alpha-lipoic acid (antioxidant and glucose metabolism), L-carnitine (fatty acid transport into mitochondria), magnesium (ATP production), and omega-3 fatty acids (mitochondrial membrane integrity).',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Coenzyme Q10 supplementation (100-300mg daily) may support mitochondrial function and energy production, particularly in older adults with lower endogenous levels', 'High-intensity interval training and endurance exercise stimulate mitochondrial biogenesis, increasing mitochondrial number and efficiency', 'Creatine supplementation enhances cellular energy availability by regenerating ATP, indirectly supporting mitochondrial function'],
  NULL,
  'Mitochondria - Suppl.me Glossary',
  'Cell organelles generating energy through ATP production'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 128. mTOR (Mechanistic Target of Rapamycin)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'mtor',
  'mTOR (Mechanistic Target of Rapamycin)',
  'mTOR',
  NULL,
  'A protein kinase that acts as a central regulator of cell growth, proliferation, metabolism, and protein synthesis in response to nutrients, growth factors, and cellular energy.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'mTOR (Mechanistic Target of Rapamycin) - Suppl.me Glossary',
  'Protein kinase regulating cell growth, metabolism, and protein synthesis'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 129. Muscle Protein Synthesis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'muscleproteinsynthesis',
  'Muscle Protein Synthesis',
  'MPS',
  NULL,
  'The metabolic process by which amino acids are incorporated into muscle proteins, essential for muscle growth, repair, and maintenance after exercise or injury.',
  'Muscle protein synthesis (MPS) and muscle protein breakdown (MPB) occur continuously, with the balance between them determining whether muscle mass increases, decreases, or remains stable (net protein balance). Resistance exercise creates microscopic muscle damage that triggers an elevated MPS response lasting 24-48 hours. Consuming protein provides amino acids as building blocks, further stimulating MPS, particularly when combined with resistance training.

The amino acid leucine is particularly important for triggering MPS through activation of the mTOR signaling pathway. A leucine threshold of approximately 2-3g per meal appears necessary to maximally stimulate MPS in younger adults, with older adults potentially requiring higher amounts due to anabolic resistance. Total daily protein intake, timing relative to exercise, and distribution across meals all influence MPS and muscle adaptation.

Maximizing MPS for muscle growth and maintenance requires adequate protein intake (1.6-2.2g/kg body weight for active individuals), regular resistance training, sufficient calories, quality sleep, and recovery time. While whey protein is particularly effective due to its leucine content and rapid absorption, total daily protein intake matters most. Other supplements that may support MPS include creatine (enhances training stimulus) and beta-hydroxy-beta-methylbutyrate (HMB, reduces muscle protein breakdown).',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Consuming 20-40g of high-quality protein after resistance training maximally stimulates muscle protein synthesis in most individuals', 'Creatine supplementation (5g daily) enhances muscle protein synthesis indirectly by allowing greater training volume and intensity', 'Distributing protein across 4-5 meals (rather than concentrating in 1-2 meals) may optimize muscle protein synthesis over 24 hours'],
  NULL,
  'Muscle Protein Synthesis - Suppl.me Glossary',
  'Process of building muscle protein from amino acids'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 130. Myoglobin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'myoglobin',
  'Myoglobin',
  NULL,
  'my-uh-gloh-bin',
  'Myoglobin is an iron- and oxygen-binding protein found in cardiac and skeletal muscle tissue. It functions as an oxygen storage molecule, accepting oxygen from hemoglobin in the blood and releasing it to mitochondria in muscle cells for aerobic energy production. It gives muscle tissue its characteristic red color.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Myoglobin - Suppl.me Glossary',
  'Oxygen-binding protein in muscle tissue that stores oxygen for energy production'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 131. Neurotransmitter
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'neurotransmitter',
  'Neurotransmitter',
  NULL,
  NULL,
  'Chemical messengers that transmit signals across synapses from one neuron to another neuron, muscle cell, or gland cell, enabling communication throughout the nervous system.',
  'Neurotransmitters are synthesized in neurons from precursor molecules (often amino acids or derived from diet), stored in vesicles, and released in response to electrical signals. Once released into the synaptic cleft, they bind to specific receptors on target cells, triggering responses ranging from muscle contraction to mood changes. After transmission, neurotransmitters are either broken down by enzymes or reabsorbed by the releasing neuron (reuptake) for recycling.

Major neurotransmitters include: serotonin (mood, sleep, appetite), dopamine (motivation, reward, movement), norepinephrine (alertness, stress response), GABA (inhibitory, calming), glutamate (excitatory, learning, memory), acetylcholine (muscle activation, memory, attention), and endorphins (pain relief, pleasure). Imbalances in neurotransmitter systems are implicated in depression, anxiety, ADHD, Parkinson''s disease, schizophrenia, and many other neurological and psychiatric conditions.

Many medications target neurotransmitter systems—SSRIs increase serotonin, stimulants affect dopamine and norepinephrine, benzodiazepines enhance GABA activity. Some supplements provide neurotransmitter precursors or influence their metabolism: tryptophan and 5-HTP convert to serotonin, tyrosine converts to dopamine and norepinephrine, and magnesium modulates glutamate and GABA receptors. However, neurotransmitter system complexity means effects are often unpredictable and individual.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Neurotransmitter - Suppl.me Glossary',
  'Chemical messengers transmitting signals between neurons'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 132. NF-κB
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'nfkb',
  'NF-κB',
  'Nuclear Factor Kappa B',
  'en-eff KAP-uh bee',
  'Nuclear Factor Kappa B (NF-κB) is a protein complex that acts as a master transcription factor regulating the expression of genes involved in inflammation, immune responses, cell survival, and proliferation. It is often called the ''molecular switch'' for inflammation.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'NF-κB - Suppl.me Glossary',
  'Master transcription factor regulating inflammatory and immune responses'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 133. Nitric Oxide (NO)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'nitricoxide',
  'Nitric Oxide (NO)',
  'NO',
  NULL,
  'A gaseous signaling molecule produced by cells throughout the body that plays critical roles in cardiovascular function, particularly blood vessel dilation (vasodilation), blood flow regulation, and blood pressure control.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Nitric Oxide (NO) - Suppl.me Glossary',
  'Signaling molecule that regulates blood vessel dilation and cardiovascular function'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 134. Non-Heme Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'nonhemeiron',
  'Non-Heme Iron',
  'None',
  NULL,
  'The form of iron found in plant foods, dairy products, eggs, and as part of the total iron in meat (comprising about 60% of meat iron), which has lower bioavailability (2-20%) than heme iron and is highly influenced by dietary absorption enhancers and inhibitors.',
  'Non-heme iron represents the majority of dietary iron consumed globally, constituting ~85-90% of total iron intake in typical Western diets and virtually 100% of iron in vegetarian and vegan diets. Unlike heme iron, which is absorbed as an intact complex, non-heme iron must be liberated from food components, solubilized, and reduced before absorption, making it much more susceptible to dietary factors that either enhance or inhibit absorption.

**Chemical forms and absorption:**

Non-heme iron exists in two oxidation states:
- **Ferric iron (Fe3+):** The predominant form in most foods and supplements (ferric sulfate, ferric citrate)
- **Ferrous iron (Fe2+):** The form required for absorption, more readily absorbed

**Absorption process:**

**Solubilization and reduction:** Non-heme iron must be released from binding proteins and organic complexes during digestion. Gastric acid (HCl) solubilizes iron and helps maintain it in solution. Dietary reducing agents, particularly vitamin C (ascorbic acid), reduce ferric iron to ferrous iron, the form that can be transported across the intestinal epithelium.

**Brush border transport:** Ferrous iron (Fe2+) is transported across the enterocyte apical membrane primarily by divalent metal transporter 1 (DMT1). A ferrireductase enzyme (duodenal cytochrome b, Dcytb) at the brush border can also reduce Fe3+ to Fe2+ at the site of absorption.

**Regulation:** DMT1 expression and iron absorption are tightly regulated by iron status via hepcidin, a hormone that reduces iron absorption when body stores are adequate. This regulation helps prevent iron overload from non-heme iron sources.

**Factors affecting non-heme iron absorption:**

**Enhancers:**

**Vitamin C (ascorbic acid):** Most potent enhancer. Vitamin C creates a chelate complex with iron, keeping it soluble at higher pH in the small intestine and maintaining it in the ferrous (Fe2+) state. As little as 25-75 mg vitamin C can increase non-heme iron absorption 2-4 fold.

**Organic acids:** Citric acid, lactic acid, and other organic acids enhance absorption by chelating iron and promoting solubility.

**Meat, poultry, fish factor (MPF):** Animal tissue (even if it contains heme iron) enhances non-heme iron absorption from plant foods in the same meal through mechanisms not fully understood—likely involving amino acids (cysteine) and peptides that promote iron solubility.

**Inhibitors:**

**Phytates (phytic acid):** Found in whole grains, legumes, nuts, and seeds. Phytates bind iron, forming insoluble complexes. The effect is dose-dependent; even small amounts can reduce absorption by 50% or more. Processing methods (soaking, sprouting, fermentation) can reduce phytate content.

**Polyphenols and tannins:** Found in tea, coffee, cocoa, red wine, and some fruits/vegetables. They bind iron and reduce absorption. One cup of tea or coffee can reduce iron absorption by 60-90% if consumed with a meal.

**Calcium:** High calcium intake (&gt;300 mg in a single meal) can inhibit non-heme iron absorption by 30-50%, likely through competition for absorption pathways or formation of insoluble complexes.

**Other minerals:** Zinc and manganese can compete with iron for DMT1 transporter, though this is typically only significant with high-dose supplementation.

**Proteins:** Certain proteins in eggs (especially egg yolk) and dairy products inhibit non-heme iron absorption.

**Dietary sources:**

**Plant sources (per cup cooked):**
- Lentils: 6.6 mg
- Tofu (firm): 6.6 mg
- Spinach: 6.4 mg
- Kidney beans: 5.2 mg
- Chickpeas: 4.7 mg
- Quinoa: 2.8 mg

**Fortified foods:**
- Breakfast cereals: 3-18 mg (fortified with ferrous sulfate or other non-heme forms)
- Enriched bread: 1-2 mg per slice

**Other sources:**
- Eggs: 1.2 mg per large egg (mostly in yolk)
- Meat/poultry: 60% of their iron content is non-heme

**Absorption efficiency:**

Non-heme iron absorption is highly variable:
- **Optimal conditions** (consumed with vitamin C, without inhibitors, low iron stores): 15-20%
- **Average conditions** (mixed diet): 5-10%
- **Poor conditions** (consumed with phytates, polyphenols, calcium, adequate iron stores): 2-5%

**Clinical and dietary implications:**

**Vegetarian/vegan diets:** Require careful planning to ensure adequate iron absorption:
- Consume vitamin C-rich foods with iron-rich meals
- Limit tea/coffee consumption with meals (consume between meals)
- Use food preparation methods that reduce phytates (soaking beans, fermenting grains)
- Consider iron-fortified foods
- Monitor iron status regularly (serum ferritin)

**Iron supplementation:** Non-heme iron supplements (ferrous sulfate, ferrous gluconate, ferric citrate) are standard for treating iron deficiency. Taking supplements with vitamin C and on an empty stomach enhances absorption, though this can increase gastrointestinal side effects.

**Strategic meal planning:** Combining foods thoughtfully can dramatically affect iron status:
- Add bell peppers, citrus, or tomatoes to legume-based meals
- Avoid taking calcium supplements with iron-rich meals
- Drink tea and coffee between meals rather than with meals

**Population considerations:** The lower bioavailability of non-heme iron is particularly relevant for populations with increased iron needs (pregnant women, adolescents, menstruating women) who rely heavily on plant sources. The Institute of Medicine recommends vegetarians consume 1.8 times the normal RDA to compensate for lower absorption.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A cup of cooked lentils provides 6.6 mg non-heme iron with ~5% baseline absorption (330 mcg absorbed). Adding 75 mg vitamin C (from a medium bell pepper) can increase absorption to 10-15% (660-990 mcg absorbed), tripling iron intake.', 'Drinking a cup of black tea with a plant-based meal containing 10 mg non-heme iron can reduce absorption from 500 mcg (5%) to 100 mcg (1%) due to tea polyphenols—an 80% reduction.', 'Studies show that vegetarians who strategically pair iron-rich foods with vitamin C sources maintain normal iron status despite consuming only non-heme iron, while those who regularly consume tea with meals show higher rates of iron deficiency.'],
  NULL,
  'Non-Heme Iron - Suppl.me Glossary',
  'Plant-based iron form with lower bioavailability than heme iron'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 135. Normotensive
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'normotensive',
  'Normotensive',
  NULL,
  'nor-moh-ten-siv',
  'Normotensive describes a person who has normal blood pressure levels, typically defined as systolic pressure less than 120 mmHg and diastolic pressure less than 80 mmHg. It indicates that blood pressure is within the healthy range without medication.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Normotensive - Suppl.me Glossary',
  'Having normal blood pressure levels without medication'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 136. Nrf2
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'nrf2',
  'Nrf2',
  'Nuclear Factor Erythroid 2-Related Factor 2',
  'en-arr-eff-two',
  'Nuclear factor erythroid 2-related factor 2 (Nrf2) is a transcription factor that regulates the expression of antioxidant and detoxification genes, acting as the body''s master regulator of the cellular antioxidant defense system.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Nrf2 - Suppl.me Glossary',
  'Master transcription factor regulating antioxidant defense and cellular protection'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 137. Observational Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'observationalstudy',
  'Observational Study',
  NULL,
  NULL,
  'A research study where investigators observe participants and measure outcomes without manipulating or assigning interventions, allowing researchers to study associations and patterns as they naturally occur.',
  '<p>In observational studies, researchers do not control or assign the exposure or intervention. Instead, they observe and record what happens naturally, making these studies valuable for examining real-world patterns, long-term outcomes, and situations where randomized controlled trials would be unethical or impractical.</p>
        
        <p><strong className="glossary-highlight">Types of Observational Studies:</strong></p>
        <ul className="glossary-list">
          <li><strong>Cohort Studies:</strong> Follow groups over time to see who develops outcomes of interest; can be prospective (forward-looking) or retrospective (looking back)</li>
          <li><strong>Case-Control Studies:</strong> Compare people with a condition (cases) to similar people without it (controls), looking back at exposures</li>
          <li><strong>Cross-Sectional Studies:</strong> Examine data from a population at one specific point in time</li>
          <li><strong>Ecological Studies:</strong> Analyze data at the population or group level rather than individual level</li>
        </ul>

        <p><strong className="glossary-highlight">Advantages:</strong></p>
        <ul className="glossary-list">
          <li><strong>Real-World Evidence:</strong> Captures how interventions work in actual practice, not controlled conditions</li>
          <li><strong>Long-Term Follow-Up:</strong> Can track outcomes over years or decades</li>
          <li><strong>Ethical Flexibility:</strong> Allows study of exposures that couldn''t ethically be assigned (e.g., smoking, nutritional deficiencies)</li>
          <li><strong>Cost-Effective:</strong> Generally less expensive than randomized controlled trials</li>
          <li><strong>Multiple Outcomes:</strong> Can examine many different outcomes simultaneously</li>
          <li><strong>Rare Outcomes:</strong> Useful for studying uncommon conditions or events</li>
        </ul>

        <p><strong className="glossary-highlight">Limitations:</strong></p>
        <ul className="glossary-list">
          <li><strong>Confounding:</strong> Other variables may influence the observed associations</li>
          <li><strong>Selection Bias:</strong> How participants are chosen may affect results</li>
          <li><strong>Causation vs. Association:</strong> Can show relationships but not definitively prove cause and effect</li>
          <li><strong>Recall Bias:</strong> Participants may not accurately remember past exposures</li>
          <li><strong>Measurement Error:</strong> Without standardized interventions, exposure measurement may vary</li>
        </ul>

        <p><strong className="glossary-highlight">Evidence Hierarchy:</strong></p>
        <p>In the hierarchy of scientific evidence, observational studies generally rank below randomized controlled trials but above case reports and expert opinion. Well-designed observational studies, particularly large prospective cohort studies, can provide valuable evidence, especially when:</p>
        <ul className="glossary-list">
          <li>RCTs are not feasible or ethical</li>
          <li>Long-term outcomes need to be studied</li>
          <li>Real-world effectiveness needs to be assessed</li>
          <li>Rare events or outcomes are being investigated</li>
        </ul>',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Observational Study - Suppl.me Glossary',
  'Research where investigators observe outcomes without assigning interventions'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 138. Omega-3 Fatty Acids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'omega3',
  'Omega-3 Fatty Acids',
  NULL,
  'oh-may-guh three fat-ee as-ids',
  'Omega-3 fatty acids are a family of essential polyunsaturated fatty acids that play crucial roles in heart health, brain function, and inflammation regulation. The three main types are ALA (plant-based), EPA, and DHA (both primarily from fish).',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 139. Odds Ratio
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'or',
  'Odds Ratio',
  'OR',
  NULL,
  'A statistical measure that quantifies the odds of an outcome occurring in one group relative to the odds in another group, commonly used in case-control studies and logistic regression analyses.',
  'Odds Ratio (OR) compares the odds of an event in the treatment group to the odds in the control group. Unlike Risk Ratio which uses probabilities, OR uses odds—calculated as the probability of an event occurring divided by the probability of it not occurring. An OR of 1.0 indicates no difference between groups. An OR greater than 1.0 suggests increased odds in the treatment group, while an OR less than 1.0 suggests decreased odds.

For example, an OR of 0.28 for heart failure hospitalization means the odds of hospitalization in the treatment group are 28% of the odds in the control group. While this might seem similar to Risk Ratio, odds and risk are mathematically different. When the outcome is rare (occurs less than 10% of the time), OR approximates RR closely. However, as outcomes become more common, OR tends to overestimate the effect size compared to RR.

Odds Ratio is particularly useful in case-control studies where you cannot directly calculate risk because you don''t know the total population at risk. It''s also the primary measure in logistic regression analyses. In meta-analyses, OR is sometimes preferred for combining results across different study designs.

When interpreting OR in supplement research, be aware that ORs can appear more dramatic than RRs, especially for common outcomes. For instance, reducing an outcome from 50% to 33% yields an RR of 0.67 but an OR of 0.50. Both are valid measures, but OR should not be interpreted as if it were RR. Always check whether the reported measure is OR or RR, and consider the baseline rate of the outcome when assessing clinical significance.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Odds Ratio - Suppl.me Glossary',
  'Statistical measure comparing odds of an outcome in treatment vs. control groups'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 140. Osteomalacia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'osteomalach',
  'Osteomalacia',
  NULL,
  NULL,
  'Softening of the bones in adults due to defective bone mineralization, most commonly caused by severe vitamin D deficiency.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 65-year-old homebound woman with chronic diffuse bone pain and vitamin D level of 8 ng/mL likely has osteomalacia, which improves with high-dose vitamin D supplementation.', 'A patient post-gastric bypass surgery develops osteomalacia due to vitamin D and calcium malabsorption, requiring lifelong supplementation.', 'Looser zones (pseudofractures) visible on X-ray of the pelvis or femur are pathognomonic for osteomalacia.'],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 141. Osteoporosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'osteoporosis',
  'Osteoporosis',
  NULL,
  'os-tee-oh-puh-roh-sis',
  'Osteoporosis is a systemic skeletal disease characterized by low bone mass and deterioration of bone tissue, leading to increased bone fragility and susceptibility to fractures. The term literally means ''porous bones.''',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Osteoporosis - Suppl.me Glossary',
  'Systemic skeletal disease with low bone mass and increased fracture risk'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 142. Oxalates
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'oxalates',
  'Oxalates',
  'Oxalic Acid',
  'ox-uh-lates',
  'Natural organic compounds found in many plant foods that can bind to minerals (especially calcium) in the digestive tract, reducing absorption, and contribute to kidney stone formation in susceptible individuals when consumed in high amounts.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['One cup of cooked spinach (~600mg oxalate) binds most of its calcium content, making it a poor calcium source despite containing ~250mg calcium—only ~10-15mg is absorbed', 'An individual with history of calcium oxalate kidney stones limits spinach, rhubarb, and Swiss chard while consuming 1,200mg calcium daily with meals, reducing urinary oxalate by 30-40%', 'Very high-dose vitamin C supplementation (3,000mg daily) metabolizes partially to oxalate, potentially increasing urinary oxalate by 20-30% and raising stone risk in susceptible individuals'],
  NULL,
  'Oxalates - Suppl.me Glossary',
  'Plant compounds affecting mineral absorption and kidney stone risk'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 143. Oxidative Damage
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'oxidativedamage',
  'Oxidative Damage',
  NULL,
  'OK-sih-day-tiv DAM-ij',
  'Cellular and molecular damage caused by reactive oxygen species (ROS) and other free radicals that oxidize critical biological components including DNA, proteins, and lipids, potentially impairing cellular function and contributing to disease and aging.',
  NULL,
  'Oxidative damage is implicated in numerous chronic diseases (cardiovascular disease, cancer, diabetes, neurodegenerative disorders), aging processes, and inflammatory conditions. Understanding and measuring oxidative damage helps assess disease risk, evaluate antioxidant interventions, and understand the mechanisms linking lifestyle factors to health outcomes.',
  'Oxidative damage is like rust forming on your body''s cellular machinery. Just as oxygen in air causes metal to rust and deteriorate, free radicals in your body cause your cells'' DNA, proteins, and fats to become damaged and dysfunctional. Your body has repair systems and antioxidants to prevent and fix this damage, but when damage outpaces repair, it accumulates over time—contributing to aging and disease.',
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Oxidative Damage - Suppl.me Glossary',
  'Cellular and molecular damage caused by reactive oxygen species and free radicals'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 144. Oxidative Stress
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'oxidativestress',
  'Oxidative Stress',
  NULL,
  NULL,
  'An imbalance between the production of reactive oxygen species (free radicals) and the body''s ability to neutralize them with antioxidants, leading to cellular damage.',
  'Oxidative stress occurs when free radicals—highly reactive molecules with unpaired electrons—accumulate faster than the body''s antioxidant defense systems can neutralize them. Free radicals are normal byproducts of cellular metabolism, particularly energy production in mitochondria, but their levels increase with exposure to pollution, radiation, cigarette smoke, certain foods, and during intense exercise or inflammation.

When unchecked, free radicals damage cellular components including DNA, proteins, and lipid membranes. This damage accumulates over time and contributes to aging and chronic diseases such as cardiovascular disease, neurodegenerative disorders, cancer, and diabetes. Lipid peroxidation—the oxidative degradation of fats in cell membranes—is particularly damaging and measured through markers like malondialdehyde (MDA).

The body maintains several antioxidant defense mechanisms including enzymes (superoxide dismutase, catalase, glutathione peroxidase) and molecules from diet (vitamins C and E, polyphenols, carotenoids). Measuring oxidative stress involves assessing both oxidative damage markers (MDA, 8-OHdG) and antioxidant capacity. Reducing oxidative stress through diet, supplements, and lifestyle can protect cellular health and potentially slow disease progression.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Curcumin supplementation decreased malondialdehyde (MDA) levels with SMD -0.46, indicating reduced lipid peroxidation and oxidative damage', 'Vitamin C neutralizes free radicals directly and regenerates vitamin E, providing comprehensive antioxidant protection', 'Excessive iron supplementation can increase oxidative stress by promoting free radical formation through the Fenton reaction'],
  NULL,
  'Oxidative Stress - Suppl.me Glossary',
  'An imbalance between free radicals and antioxidants leading to cellular damage'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 145. Oxidized LDL
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'oxidizedldl',
  'Oxidized LDL',
  'oxLDL',
  NULL,
  'Low-density lipoprotein particles that have undergone oxidative modification, transforming them from cholesterol transport particles into pro-inflammatory molecules that play a central role in atherosclerosis development and cardiovascular disease.',
  'Oxidized LDL (oxLDL) represents LDL cholesterol particles that have been chemically modified by reactive oxygen species, making them more atherogenic (plaque-forming) than native LDL. This oxidation process is considered a critical early event in atherosclerosis development, transforming LDL from a relatively benign cholesterol carrier into a pathogenic trigger of vascular inflammation.

**Formation and oxidation process:**

LDL particles become trapped in the arterial wall (subendothelial space), where they encounter reactive oxygen species, transition metals, and enzymes like myeloperoxidase and lipoxygenase. These oxidizing agents attack the polyunsaturated fatty acids in LDL, triggering a chain reaction of lipid peroxidation. The oxidation process modifies both the lipid components and the apolipoprotein B-100 protein on the LDL surface, creating structurally altered particles with enhanced atherogenic properties.

**Pathological consequences:**

**Macrophage foam cell formation:** Unlike native LDL, oxLDL is readily taken up by macrophages via scavenger receptors (particularly SR-A and CD36) rather than the regulated LDL receptor. This unregulated uptake causes macrophages to accumulate cholesterol, transforming into foam cells—the hallmark of early atherosclerotic lesions.

**Inflammatory signaling:** OxLDL activates endothelial cells to express adhesion molecules (VCAM-1, ICAM-1) that recruit more immune cells to the arterial wall. It also stimulates production of pro-inflammatory cytokines (IL-1, IL-6, TNF-α) and chemokines (MCP-1), perpetuating vascular inflammation.

**Endothelial dysfunction:** OxLDL impairs endothelial nitric oxide production, reducing vasodilation and promoting vasoconstriction. It also increases endothelial permeability and promotes a pro-thrombotic state, contributing to cardiovascular event risk.

**Autoimmune component:** The body generates antibodies against oxLDL, and immune complexes containing oxLDL and anti-oxLDL antibodies may contribute to ongoing inflammation. Elevated anti-oxLDL antibody levels have been associated with increased cardiovascular risk in some studies.

**Clinical measurement:**

Unlike standard LDL cholesterol, oxLDL is not routinely measured in clinical practice due to assay standardization challenges. Research assays include measuring oxLDL directly or measuring antibodies against oxLDL epitopes. Small, dense LDL particles are considered more susceptible to oxidation, and their measurement may provide indirect information about oxidation risk.

**Factors influencing LDL oxidation:**

- **Antioxidant status:** Low levels of antioxidants (vitamin E, vitamin C, carotenoids, polyphenols) may increase susceptibility to LDL oxidation
- **Oxidative stress markers:** Elevated systemic oxidative stress (high MDA, low TAC) correlates with increased oxLDL
- **LDL particle characteristics:** Smaller, denser LDL particles oxidize more readily
- **Glycation:** In diabetes, glycated LDL is more prone to oxidation
- **Dietary factors:** High intake of saturated fats and refined carbohydrates may increase oxidation susceptibility, while Mediterranean diet patterns rich in antioxidants may reduce it

**Therapeutic implications:**

Reducing both LDL cholesterol levels (through statins, diet, lifestyle) and oxidative stress (through antioxidant-rich diets, omega-3 fatty acids, polyphenols) represents a dual approach to reducing atherogenic risk. Antioxidant supplementation trials have shown mixed results, possibly because dietary patterns matter more than isolated antioxidants.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['In individuals with metabolic syndrome, oxLDL levels are typically 30-50% higher than in healthy controls, correlating with increased inflammatory markers and cardiovascular risk.', 'Studies show that Mediterranean diet adherence for 3-6 months can reduce oxLDL levels by 15-20% while also improving antioxidant capacity.', 'High-dose omega-3 supplementation (2-4g EPA+DHA daily) has been shown to reduce oxLDL by approximately 10-15% in some studies, independent of LDL cholesterol reduction.'],
  NULL,
  'Oxidized LDL - Suppl.me Glossary',
  'Modified LDL cholesterol that promotes atherosclerosis and cardiovascular disease'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 146. Pancreatitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'pancreatitis',
  'Pancreatitis',
  NULL,
  NULL,
  'Inflammation of the pancreas, which can be acute or chronic, causing digestive enzyme activation within the pancreas and potentially leading to serious complications.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A patient presenting with sudden severe upper abdominal pain after a bout of heavy drinking, with lipase 5 times normal, likely has acute alcoholic pancreatitis.', 'Someone with chronic pancreatitis may experience recurrent pain, weight loss despite adequate food intake, and fatty stools due to pancreatic insufficiency.', 'Patients with triglyceride levels >1000 mg/dL are at risk for acute pancreatitis and may benefit from triglyceride-lowering therapy.'],
  NULL,
  'Pancreatitis - Suppl.me Glossary',
  'Inflammation of the pancreas, which can be acute or chronic'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 147. PEDro Scale
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'pedro',
  'PEDro Scale',
  'PEDro',
  'ped-roh',
  'The PEDro Scale (Physiotherapy Evidence Database Scale) is an 11-item quality assessment tool designed to rate the methodological quality and statistical reporting of randomized controlled trials (RCTs) in physiotherapy and rehabilitation research. Scores range from 0 to 10, with higher scores indicating better methodological quality.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'PEDro Scale - Suppl.me Glossary',
  'Quality assessment tool rating methodological quality of RCTs in physiotherapy'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 148. Peer-reviewed
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'peerreviewed',
  'Peer-reviewed',
  NULL,
  NULL,
  'Scientific research that has been evaluated and approved by independent experts in the same field before publication.',
  'Peer review is a critical quality control process in scientific publishing. Before a research paper is published in a reputable journal, it undergoes rigorous evaluation by independent experts (peers) who assess the study''s methodology, analysis, conclusions, and significance. These reviewers check for errors, biases, and ensure that the research meets the journal''s standards.

The peer review process helps ensure that published research is credible, valid, and contributes meaningfully to scientific knowledge. For supplement research, peer-reviewed studies are considered more reliable than non-peer-reviewed sources because they have been scrutinized by experts who can identify methodological flaws or overreaching conclusions.

However, peer review is not infallible. Even peer-reviewed studies can have limitations, and findings should be considered in the context of the broader body of research. Meta-analyses of multiple peer-reviewed studies typically provide the strongest evidence.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A vitamin D study published in the Journal of Clinical Endocrinology & Metabolism after being reviewed by endocrinology experts.', 'Omega-3 research appearing in the American Journal of Clinical Nutrition following peer evaluation.', 'A creatine study published in the Journal of the International Society of Sports Nutrition after expert review.'],
  NULL,
  'Peer-reviewed - Suppl.me Glossary',
  'Scientific research evaluated and approved by independent experts before publication'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 149. Pharmacokinetics
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'pharmacokinetics',
  'Pharmacokinetics',
  NULL,
  NULL,
  'The study of how the body affects a drug or supplement over time, including how it is absorbed, distributed, metabolized, and excreted. It essentially describes ''what the body does to the drug'' as opposed to pharmacodynamics, which describes ''what the drug does to the body.''',
  'The ADME Framework:

Pharmacokinetics is commonly described using the ADME framework:

Absorption:
The process by which a supplement enters the bloodstream from its administration site.
Key factors: Bioavailability, route of administration, food interactions

Distribution:
The dispersion of the supplement throughout the body''s fluids and tissues.
Key factors: Blood flow, protein binding, tissue permeability

Metabolism:
The biochemical modification of the supplement by the body, primarily in the liver.
Key factors: Enzyme activity, first-pass metabolism, genetic variations

Excretion:
The removal of the supplement and its metabolites from the body.
Key factors: Renal function, biliary excretion, half-life

Key Pharmacokinetic Parameters:

Cmax (Maximum Concentration):
The highest concentration of supplement in the blood after a dose

Tmax (Time to Maximum Concentration):
The time it takes to reach Cmax after administration

AUC (Area Under the Curve):
Total exposure to the supplement over time; indicates overall absorption

Half-Life (t½):
Time required for the concentration to decrease by half

Clearance (CL):
The rate at which the body eliminates the supplement

Volume of Distribution (Vd):
Theoretical volume in which the supplement would need to be distributed to achieve the observed blood concentration

Importance in Supplement Research:

• Optimal Dosing: Helps determine how much and how often a supplement should be taken
• Formulation Comparison: Compares different forms of the same supplement (e.g., magnesium citrate vs. magnesium glycinate)
• Food Interactions: Identifies whether supplements should be taken with or without food
• Timing Strategies: Determines optimal timing for loading phases or pre-workout supplements
• Individual Variability: Explains why some people respond differently to the same dose',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Pharmacokinetics - Suppl.me Glossary',
  'Study of how the body absorbs, distributes, metabolizes, and excretes substances'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 150. Phosphocreatine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'phosphocreatine',
  'Phosphocreatine',
  'PCr, Creatine Phosphate',
  'foss-fo-kree-uh-tin',
  'A high-energy phosphate compound stored in muscle cells that serves as a rapid reserve for ATP regeneration during the first few seconds of intense muscle activity. Phosphocreatine donates its phosphate group to ADP to quickly produce ATP without requiring oxygen.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Phosphocreatine - Suppl.me Glossary',
  'High-energy phosphate compound critical for ATP regeneration in muscles'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 151. Phytates
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'phytates',
  'Phytates',
  'Phytic Acid, Inositol Hexaphosphate, IP6',
  'fy-tates',
  'Natural compounds found in plant seeds, grains, legumes, and nuts that can bind to minerals (particularly iron, zinc, calcium, and magnesium) in the digestive tract, reducing their absorption. Also called ''anti-nutrients'' though they have some beneficial properties.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meal with 100g cooked black beans (~240mg phytate) can reduce iron absorption from that meal by 40-50%, but adding a bell pepper (vitamin C) increases absorption 3-4 fold, overcoming the inhibition', 'Soaking oats overnight before cooking reduces phytate content by approximately 30%, improving mineral bioavailability from morning oatmeal', 'A vegetarian with marginal iron stores consuming primarily whole grains and legumes may benefit from traditional preparation methods (soaking, fermenting) to reduce phytate-induced iron inhibition and prevent deficiency'],
  NULL,
  'Phytates - Suppl.me Glossary',
  'Plant compounds that can inhibit mineral absorption'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 152. Placebo
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'placebo',
  'Placebo',
  NULL,
  NULL,
  'An inactive substance or treatment given to a control group in research studies to compare against the active intervention.',
  'A placebo is a substance with no therapeutic effect that is designed to look, taste, and feel identical to the active treatment being studied. Placebos are essential in clinical research because they help control for the placebo effect—the phenomenon where people experience improvements simply because they believe they are receiving treatment.

In supplement research, placebos are typically sugar pills, capsules filled with inert substances, or other inactive preparations that match the appearance of the supplement being tested. By comparing outcomes between the treatment group and placebo group, researchers can determine whether observed benefits are due to the supplement itself or to psychological and contextual factors.

The use of placebos is fundamental to double-blind studies, where neither participants nor researchers know who is receiving the active treatment versus the placebo, further reducing bias in the results.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Sugar pills given to the control group while the treatment group receives actual vitamin C supplements.', 'Capsules filled with rice flour used as placebo in a probiotic study.', 'Inactive oil capsules given to participants while others receive omega-3 fish oil supplements.'],
  NULL,
  'Placebo - Suppl.me Glossary',
  'An inactive substance given to a control group to compare against the active intervention'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 153. Plasma
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'plasma',
  'Plasma',
  NULL,
  NULL,
  'The liquid component of blood obtained by centrifuging blood collected with anticoagulants. It contains water, electrolytes, nutrients, hormones, proteins (including clotting factors like fibrinogen), antibodies, and waste products. Plasma makes up about 55% of total blood volume.',
  'Composition:

Plasma consists of:
• ~90% Water
• ~7% Proteins (albumin, globulins, fibrinogen)
• ~1% Electrolytes, nutrients, hormones
• &lt;1% Gases, waste products

Plasma vs. Serum:

Characteristic | Plasma | Serum
Clotting | Prevented (anticoagulant used) | Allowed to occur
Fibrinogen | Present | Absent
Volume | Slightly more (includes clotting factors) | Slightly less
Processing Time | Faster (15-20 minutes) | Slower (30-60 minutes)
Preferred For | Coagulation studies, urgent tests | Most routine chemistry tests

Use in Supplement Research:

Plasma is commonly used to measure:
• Plasma amino acid profiles (post-protein supplementation)
• Plasma glucose and insulin (metabolic studies)
• Plasma omega-3 fatty acid levels
• Plasma antioxidant capacity
• Plasma concentrations of supplements after absorption
• Plasma vitamin K (clotting factor studies)

Common Anticoagulants:

EDTA (Purple/Lavender top tube):
Used for hematology tests and some chemistry tests

Heparin (Green top tube):
Used for many chemistry and molecular tests

Citrate (Light blue top tube):
Used for coagulation studies',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Plasma - Suppl.me Glossary',
  'Liquid component of blood containing water, proteins, nutrients, and waste products'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 154. PMS (Premenstrual Syndrome)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'pms',
  'PMS (Premenstrual Syndrome)',
  'PMS',
  'pree-men-stroo-ul sin-drohm',
  'Premenstrual syndrome (PMS) is a combination of physical, emotional, and behavioral symptoms that occur in the luteal phase of the menstrual cycle (typically 1-2 weeks before menstruation) and resolve shortly after menstruation begins. It affects up to 75% of menstruating women to varying degrees.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'PMS (Premenstrual Syndrome) - Suppl.me Glossary',
  'Physical, emotional, and behavioral symptoms occurring before menstruation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 155. Polyphenols
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'polyphenols',
  'Polyphenols',
  NULL,
  NULL,
  'A large family of naturally occurring plant compounds characterized by multiple phenol units. Polyphenols function as antioxidants and signaling molecules with anti-inflammatory, cardioprotective, and metabolic benefits.',
  'Polyphenols are among the most abundant antioxidants in the human diet, found predominantly in fruits, vegetables, tea, coffee, wine, cocoa, and whole grains. They are synthesized by plants as defense compounds against UV radiation, pathogens, and oxidative stress. In humans, polyphenols exert biological effects through multiple mechanisms: direct antioxidant activity (scavenging free radicals), modulation of cellular signaling pathways (especially Nrf2, NF-κB, and AMPK), influence on gut microbiota composition, and epigenetic regulation.

Polyphenols are classified into several major categories based on their chemical structure:

**Flavonoids:** The largest polyphenol subclass, further divided into:
- **Flavonols** (quercetin, kaempferol, myricetin) — found in onions, kale, broccoli, apples, tea
- **Flavones** (apigenin, luteolin) — found in parsley, celery, chamomile
- **Flavanones** (hesperidin, naringenin) — found in citrus fruits
- **Flavan-3-ols/Flavanols** (catechins, epicatechins, proanthocyanidins) — found in tea, cocoa, grapes, apples
- **Anthocyanins** (cyanidin, delphinidin, malvidin) — found in berries, red/purple fruits and vegetables
- **Isoflavones** (genistein, daidzein) — found in soybeans and soy products

**Phenolic acids:** Divided into:
- **Hydroxybenzoic acids** (gallic acid, ellagic acid, protocatechuic acid)
- **Hydroxycinnamic acids** (caffeic acid, ferulic acid, chlorogenic acid, coumaric acid)

**Stilbenes:** Including resveratrol (grapes, red wine, peanuts)

**Lignans:** Including secoisolariciresinol (flaxseed), matairesinol

**Other polyphenols:** Curcumin (turmeric), oleuropein (olive oil), tyrosol

**Bioavailability and metabolism:**

Polyphenol bioavailability varies dramatically depending on structure, food matrix, and individual gut microbiota. Most polyphenols have relatively poor absorption (bioavailability often 5-10%), though some like quercetin and resveratrol can reach higher levels. After consumption, polyphenols undergo extensive metabolism through conjugation (glucuronidation, sulfation, methylation) in the small intestine and liver. Many polyphenols reach the colon where gut bacteria metabolize them into smaller phenolic metabolites, which may contribute significantly to biological effects.

The ''paradox'' of polyphenols is that despite low systemic bioavailability, they demonstrate consistent health benefits in clinical studies. This is explained by several factors: (1) high local concentrations in the gastrointestinal tract affecting gut health and microbiota, (2) biological activity of metabolites rather than parent compounds, (3) cumulative effects from regular consumption, and (4) modulation of gene expression at low concentrations.

**Health effects supported by research:**

**Cardiovascular protection:** Polyphenol-rich diets are associated with reduced cardiovascular disease risk. Mechanisms include improved endothelial function, reduced LDL oxidation, anti-inflammatory effects, improved lipid profiles, and reduced blood pressure. Meta-analyses show flavonoid intake reduces cardiovascular mortality by approximately 18%.

**Metabolic health:** Polyphenols improve insulin sensitivity, glucose metabolism, and may reduce diabetes risk. They activate AMPK (cellular energy sensor), inhibit carbohydrate-digesting enzymes, and modulate gut hormone secretion.

**Anti-inflammatory and antioxidant effects:** Polyphenols reduce oxidative stress markers (MDA, 8-OHdG) and inflammatory cytokines (CRP, IL-6, TNF-α). They upregulate endogenous antioxidant systems by activating Nrf2 transcription factor.

**Cognitive function:** Flavonoids, particularly from berries and cocoa, show promise for cognitive preservation and improvement, possibly through enhanced cerebral blood flow, neurogenesis, and neuroprotection.

**Gut health:** Polyphenols modulate gut microbiota composition, promoting beneficial bacteria (Bifidobacterium, Lactobacillus, Akkermansia) while inhibiting pathogenic species. Polyphenols also have direct antimicrobial effects and support gut barrier integrity.

**Dosing and sources:**

Total polyphenol intake in Western diets ranges from 500-1,500 mg/day, though Mediterranean and Asian diets may provide 2,000+ mg/day. No official recommended intake exists, but higher intakes within food-based ranges are associated with better health outcomes.

Rich dietary sources:
- **Coffee:** 200-550 mg polyphenols per cup (chlorogenic acids)
- **Tea:** 150-300 mg per cup (catechins, theaflavins)
- **Red wine:** 100-200 mg per glass (anthocyanins, resveratrol, tannins)
- **Dark chocolate:** 500-800 mg per 100g (flavanols)
- **Berries:** 200-600 mg per 100g (anthocyanins, ellagitannins)
- **Extra virgin olive oil:** 50-800 mg/kg (oleuropein, tyrosol)

**Supplements:**

Common polyphenol supplements include green tea extract (EGCG), grape seed extract (proanthocyanidins), curcumin, resveratrol, quercetin, and mixed berry extracts. When evaluating supplements, look for standardized extracts with verified polyphenol content, as quality varies widely. Third-party testing (USP, ConsumerLab, NSF) ensures purity and potency.

**Safety and considerations:**

Polyphenols from food sources are generally safe. Supplemental polyphenols in concentrated forms may have different safety profiles. Very high doses of certain polyphenols (e.g., green tea extract) have been associated with liver toxicity in rare cases. Polyphenols can interact with certain medications (affecting drug metabolism through cytochrome P450 enzymes) and may have anticoagulant effects at high doses.

Polyphenol content in foods varies based on plant variety, growing conditions, ripeness, processing, and storage. Cooking and processing can reduce polyphenol content, though some processes (fermentation, roasting) may increase bioavailability.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis found that flavonoid intake reduced cardiovascular mortality by 18% when comparing highest versus lowest intake groups', 'Green tea catechins (EGCG 400-800 mg/day) reduce oxidative stress markers and improve endothelial function in multiple clinical trials', 'Cocoa flavanols (500-900 mg/day) improve cognitive function and cerebral blood flow in older adults with mild cognitive impairment', 'A cup of coffee provides approximately 200-550 mg of polyphenols, primarily chlorogenic acids, contributing significantly to total dietary polyphenol intake'],
  NULL,
  'Polyphenols - Suppl.me Glossary',
  'Plant compounds with antioxidant and anti-inflammatory properties'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 156. Prediabetes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'prediabetes',
  'Prediabetes',
  NULL,
  NULL,
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as type 2 diabetes. It represents an increased risk for developing diabetes and cardiovascular disease.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 50-year-old with BMI 32, fasting glucose 110 mg/dL, and HbA1c 6.0% has prediabetes and should begin lifestyle intervention to prevent diabetes.', 'In the Diabetes Prevention Program, participants who achieved 7% weight loss through diet and exercise reduced their 3-year diabetes risk by 58%.', 'Someone with prediabetes may have HOMA-IR of 3.5, indicating significant insulin resistance that improves with weight loss and exercise.'],
  NULL,
  'Prediabetes - Suppl.me Glossary',
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as diabetes'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 157. Pre-eclampsia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'preeclampsia',
  'Pre-eclampsia',
  NULL,
  'pree-ee-klamp-see-uh',
  'Pre-eclampsia is a serious pregnancy complication characterized by high blood pressure (hypertension) and signs of damage to other organ systems, most often the liver and kidneys. It typically develops after 20 weeks of pregnancy in women whose blood pressure was previously normal.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Pre-eclampsia - Suppl.me Glossary',
  'Serious pregnancy complication with high blood pressure and organ damage'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 158. Proline
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'proline',
  'Proline',
  'Pro',
  'proh-leen',
  'Proline is a non-essential amino acid with a unique cyclic structure that plays critical roles in protein structure, particularly in collagen where it comprises approximately 15% of amino acid residues. Its distinctive ring structure makes it important for protein stability and flexibility.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Proline - Suppl.me Glossary',
  'Amino acid with unique cyclic structure critical for collagen stability'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 159. Propionate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'propionate',
  'Propionate',
  'Propionic Acid, C3:0',
  NULL,
  'A three-carbon short-chain fatty acid produced by bacterial fermentation of dietary fiber in the colon, with important roles in glucose and lipid metabolism, appetite regulation, and gut health.',
  'Propionate (also called propionic acid) is a three-carbon saturated fatty acid (C3:0) produced when beneficial gut bacteria ferment non-digestible carbohydrates in the colon. It is one of the three major short-chain fatty acids (SCFAs), alongside acetate and butyrate, though it is typically produced in smaller quantities than acetate but larger quantities than butyrate.

After production in the colon, propionate is absorbed into the bloodstream and primarily transported to the liver via the portal vein. Unlike butyrate, which is largely consumed by colonocytes for energy, propionate enters hepatic circulation where it exerts significant metabolic effects.

**Key functions and effects of propionate:**

**Gluconeogenesis substrate:** In the liver, propionate serves as a substrate for glucose production through gluconeogenesis. This process helps maintain blood glucose homeostasis, particularly during fasting states. Propionate can contribute to hepatic glucose production without causing hyperglycemia, making it metabolically favorable.

**Lipid metabolism:** Propionate appears to inhibit cholesterol synthesis in the liver by reducing the activity of HMG-CoA reductase, the rate-limiting enzyme in cholesterol production. Some studies suggest this may contribute to improved lipid profiles, though effects are modest.

**Appetite and satiety:** Propionate influences appetite regulation through multiple mechanisms. It stimulates the release of satiety hormones including PYY (peptide YY) and GLP-1 (glucagon-like peptide-1) from intestinal L-cells. These hormones signal fullness to the brain and slow gastric emptying, potentially reducing food intake.

**Metabolic health:** Research has linked higher colonic propionate production with improved insulin sensitivity, reduced hepatic lipogenesis (fat production), and better metabolic outcomes. These effects may contribute to the metabolic benefits associated with high-fiber diets.

**Immune modulation:** Like other SCFAs, propionate exhibits anti-inflammatory properties and can influence immune cell function, though these effects are less pronounced than those of butyrate.

Propionate production varies based on gut microbiome composition and dietary fiber intake. Specific bacteria, including various species of Bacteroides, Negativicutes, and Clostridium, are primary propionate producers. Dietary interventions that increase fermentable fiber, particularly certain prebiotics, can enhance propionate production and potentially amplify its metabolic benefits.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Consuming 15-20 grams of prebiotic fiber daily, particularly from sources like chicory root inulin, can increase colonic propionate production by 20-40%.', 'Studies using propionate esters delivered to the colon have shown reduced appetite, increased satiety hormone release (PYY and GLP-1), and reduced body weight gain in overweight individuals.', 'Individuals with metabolic syndrome often show reduced fecal propionate concentrations compared to metabolically healthy individuals, suggesting a potential link between gut-derived propionate and metabolic health.'],
  NULL,
  'Propionate - Suppl.me Glossary',
  'Short-chain fatty acid produced by gut bacteria with metabolic effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 160. Protein
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'protein',
  'Protein',
  NULL,
  NULL,
  'A macronutrient composed of amino acids that serves as the primary building block for tissues, enzymes, hormones, antibodies, and numerous other biological molecules essential for life.',
  'Proteins are large, complex molecules made up of chains of amino acids linked by peptide bonds. There are 20 different amino acids, nine of which are essential (must be obtained from diet) and 11 non-essential (can be synthesized by the body). The sequence and arrangement of amino acids determine each protein''s unique structure and function. Dietary protein is broken down into amino acids during digestion, which are then absorbed and used to build new proteins or converted to energy.

Protein serves numerous critical functions: building and repairing tissues (muscle, skin, organs), producing enzymes that catalyze biochemical reactions, creating hormones and signaling molecules, forming antibodies for immune defense, transporting molecules throughout the body (like hemoglobin carrying oxygen), maintaining fluid balance, and providing structure to cells and tissues. Adequate protein intake is essential for growth, development, tissue repair, immune function, and maintaining muscle mass.

Protein quality varies based on amino acid profile and digestibility. Complete proteins (containing all nine essential amino acids in adequate amounts) include animal sources like meat, fish, eggs, and dairy, as well as soy and quinoa. Most plant proteins are incomplete but can be combined to provide all essential amino acids. Recommended daily protein intake varies by age, activity level, and health status, typically ranging from 0.8 g/kg body weight for sedentary adults to 1.6-2.2 g/kg for athletes and older adults seeking to maintain muscle mass.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Consuming 20-40g of high-quality protein after resistance training maximizes muscle protein synthesis and supports muscle growth and recovery', 'Older adults (65+) may need higher protein intake (1.2-1.5 g/kg daily) to prevent age-related muscle loss (sarcopenia)', 'Distributing protein across meals (25-30g per meal) may optimize muscle protein synthesis better than consuming most protein in one meal'],
  NULL,
  'Protein - Suppl.me Glossary',
  'Macronutrient composed of amino acids essential for tissue building'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 161. Protein Synthesis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'proteinsynthesis',
  'Protein Synthesis',
  NULL,
  'proh-teen sin-thuh-sis',
  'Protein synthesis is the biological process by which cells build new proteins from amino acids. It involves two main stages: transcription (DNA to mRNA) and translation (mRNA to protein), and is essential for growth, repair, and maintenance of all body tissues.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Protein Synthesis - Suppl.me Glossary',
  'The biological process of building new proteins from amino acids'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 162. Peptide YY
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'pyy',
  'Peptide YY',
  'PYY',
  NULL,
  'A satiety hormone secreted by intestinal L-cells in response to food intake that reduces appetite, slows gastric emptying, and decreases food consumption, playing a key role in appetite regulation and energy balance.',
  'Peptide YY (PYY) is a 36-amino acid hormone belonging to the neuropeptide Y family. It is co-secreted with GLP-1 by enteroendocrine L-cells located primarily in the distal small intestine and colon. PYY is released in response to food intake, with secretion proportional to calorie content and particularly responsive to fat and protein. Secretion begins within 15-30 minutes of eating and peaks 1-2 hours postprandially.

PYY exists in two forms: PYY1-36 (full length) and PYY3-36 (the predominant circulating form, created by DPP-4 cleavage). PYY3-36 accounts for roughly two-thirds of circulating PYY and acts primarily through Y2 receptors in the hypothalamus and brainstem to reduce appetite. PYY slows gastric emptying and intestinal transit, allowing more complete nutrient absorption and prolonging satiety signals.

Fasting PYY levels typically range from 10-30 pg/mL, rising to 40-80 pg/mL (or higher) after meals. People with obesity often have lower fasting PYY and blunted postprandial responses, which may contribute to reduced satiety and overeating. Weight loss through caloric restriction tends to decrease PYY further, potentially contributing to weight regain—this is one mechanism explaining the difficulty maintaining weight loss.

Interventions that increase PYY include: (1) high-protein diets (protein is the most potent macronutrient stimulus), (2) dietary fiber, particularly fermentable fibers that produce short-chain fatty acids stimulating L-cells, (3) structured meal patterns, and (4) certain bioactive compounds under investigation. Exercise acutely suppresses PYY during activity but may enhance responses to subsequent meals.

In supplement and nutrition research, PYY is measured as a biomarker of satiety mechanisms. Studies evaluating interventions for weight management, appetite control, or metabolic health frequently measure fasting and/or postprandial PYY. Increases in PYY, particularly if accompanied by increased satiety ratings and reduced food intake, suggest beneficial effects on appetite regulation. However, like GLP-1, PYY measurement requires careful sample handling.

Some research explores exogenous PYY administration for obesity treatment, but practical delivery challenges exist. Dietary and supplement strategies to naturally enhance endogenous PYY secretion represent more accessible approaches.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Peptide YY - Suppl.me Glossary',
  'Satiety hormone that reduces appetite and food consumption'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 163. Randomized Controlled Trial
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'rct',
  'Randomized Controlled Trial',
  'RCT',
  NULL,
  'A type of scientific experiment that randomly assigns participants to different groups to test the effectiveness of an intervention.',
  'A Randomized Controlled Trial (RCT) is considered the gold standard in clinical research. In an RCT, participants are randomly assigned to either a treatment group or a control group. This randomization helps eliminate bias and ensures that differences in outcomes can be attributed to the intervention being tested rather than other factors.

The control group typically receives either a placebo, standard treatment, or no treatment, while the treatment group receives the intervention being studied. By comparing outcomes between these groups, researchers can determine the true effect of the treatment.

RCTs are particularly valuable in supplement research because they help establish causal relationships between supplement intake and health outcomes, rather than just correlations.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A study testing whether vitamin D supplementation reduces the risk of fractures by randomly assigning participants to receive either vitamin D or a placebo.', 'Research comparing the effects of omega-3 supplements versus placebo on heart health outcomes in a randomized population.', 'An experiment randomly assigning athletes to receive either creatine or placebo to measure differences in muscle strength gains.'],
  NULL,
  'Randomized Controlled Trial - Suppl.me Glossary',
  'A type of scientific experiment that randomly assigns participants to different groups to test effectiveness'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 164. Resolvins
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'resolvins',
  'Resolvins',
  'RvE, RvD series (resolution-phase interaction products)',
  'reh-zol-vinz',
  'Specialized pro-resolving mediators (SPMs) derived from omega-3 fatty acids EPA and DHA that actively resolve inflammation, reduce pain, promote tissue repair, and restore homeostasis rather than simply suppressing inflammatory responses.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['During tissue inflammation, omega-3-derived resolvins (RvD1, RvE1) actively signal immune cells to stop recruiting neutrophils and begin clearing debris, resolving inflammation within days rather than weeks', 'Fish oil supplementation (2g EPA+DHA daily for 8 weeks) increases blood RvE1 and RvD1 levels by 40-60%, correlating with reduced inflammatory pain scores in arthritis patients', 'An individual taking low-dose aspirin (81mg) along with omega-3s produces aspirin-triggered resolvins (AT-RvD1), enhancing anti-inflammatory and cardioprotective effects beyond either intervention alone'],
  NULL,
  'Resolvins - Suppl.me Glossary',
  'Anti-inflammatory compounds derived from omega-3 fatty acids'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 165. Resveratrol
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'resveratrol',
  'Resveratrol',
  NULL,
  'rez-VER-uh-trol',
  'A polyphenolic stilbene compound produced by certain plants as a defense mechanism against stress, pathogens, and UV radiation. Found in grape skins, red wine, berries, and peanuts, resveratrol has been extensively studied for potential anti-aging, cardioprotective, and metabolic benefits.',
  'Resveratrol (3,5,4''-trihydroxystilbene) gained widespread attention in the 1990s due to the ''French Paradox''—the observation that French populations exhibited relatively low cardiovascular disease rates despite consuming diets high in saturated fat, with red wine consumption proposed as a protective factor. Since then, resveratrol has become one of the most studied polyphenols, with research exploring its effects on aging, cardiovascular health, metabolism, and neurodegenerative diseases.

**Chemical structure and sources:**

Resveratrol exists in two isomeric forms:
- **Trans-resveratrol:** The biologically active and stable form found in plants and supplements
- **Cis-resveratrol:** Less stable form that can be produced from trans-resveratrol through heat or UV exposure

**Dietary sources:**
- **Red wine:** 0.5-2 mg per 150ml glass (concentration varies by grape variety, growing conditions, and winemaking process)
- **Grape skins:** 50-100 μg/g (red grapes contain more than white grapes)
- **Grape juice:** 0.5-1.5 mg per glass (lower than wine due to reduced skin contact during processing)
- **Peanuts:** 0.02-1.8 μg/g
- **Blueberries:** 0.02-0.5 μg/g
- **Cranberries:** 0.5-2 μg/g
- **Dark chocolate:** 0.04-0.1 μg/g
- **Japanese knotweed (Polygonum cuspidatum):** Primary source for supplements (very high resveratrol content)

Dietary intake from food sources is typically very low (1-2 mg/day maximum, often much less), which is several orders of magnitude below doses used in most research studies.

**Bioavailability challenge:**

The major limitation of resveratrol is its extremely poor bioavailability—typically &lt;1% of oral doses reach systemic circulation unchanged. After oral administration:
- **Rapid absorption:** Absorbed in the small intestine within 30 minutes
- **Extensive first-pass metabolism:** Undergoes rapid glucuronidation and sulfation in intestinal epithelial cells and liver
- **Short half-life:** Approximately 1.5-3 hours
- **Low plasma concentrations:** Even with 500 mg oral dose, peak plasma levels of free resveratrol are only 0.5-2 μmol/L
- **High metabolite levels:** Glucuronide and sulfate conjugates reach much higher concentrations than free resveratrol

This bioavailability problem raises questions about whether oral supplementation can achieve tissue concentrations similar to those used in laboratory studies showing benefits. However, some argue that metabolites may be biologically active or that even low tissue concentrations can influence gene expression and cellular signaling.

**Mechanisms of action:**

Despite bioavailability limitations, resveratrol demonstrates various biological activities in cellular and animal studies:

**SIRT1 activation:** Resveratrol activates sirtuin 1 (SIRT1), a NAD+-dependent deacetylase enzyme involved in regulating metabolism, inflammation, cellular stress responses, and longevity pathways. In animal models, SIRT1 activation mimics some benefits of caloric restriction. However, whether resveratrol directly activates SIRT1 or works through indirect mechanisms remains debated.

**AMPK activation:** Activates AMP-activated protein kinase (AMPK), a cellular energy sensor that promotes glucose uptake, fatty acid oxidation, and mitochondrial biogenesis. This mechanism may explain metabolic benefits.

**Antioxidant activity:** Direct free radical scavenging and upregulation of endogenous antioxidant enzymes through Nrf2 pathway activation.

**Anti-inflammatory effects:** Inhibits NF-κB signaling pathway, reducing production of pro-inflammatory cytokines (TNF-α, IL-6, IL-1β).

**Mitochondrial effects:** Increases mitochondrial biogenesis and function, potentially improving cellular energy metabolism.

**Cardiovascular mechanisms:** Increases endothelial nitric oxide synthase (eNOS) activity, improving endothelial function and vasodilation. Reduces platelet aggregation and protects LDL from oxidation.

**Gene expression:** Modulates expression of genes involved in inflammation, oxidative stress, apoptosis, and cell cycle regulation.

**Research evidence in humans:**

Despite impressive preclinical findings, human clinical trials have yielded mixed and often modest results:

**Cardiovascular health:**
- Some studies show modest improvements in endothelial function (flow-mediated dilation)
- Meta-analyses show small reductions in systolic blood pressure (2-3 mmHg) at high doses (≥150 mg/day)
- Improvements in lipid profiles are inconsistent across studies
- No large-scale cardiovascular outcome trials exist

**Metabolic health:**
- Some evidence for improved insulin sensitivity and glucose metabolism in obese or insulin-resistant individuals
- Effects on metabolic syndrome markers are inconsistent
- High-dose resveratrol (1,000-2,000 mg/day) shows more consistent metabolic benefits than lower doses

**Cognitive function:**
- Limited evidence for improved cerebral blood flow and cognitive performance
- Some studies show benefits in older adults with mild cognitive impairment
- Long-term effects on dementia risk unknown

**Anti-aging and longevity:**
- No evidence that resveratrol extends human lifespan
- Lifespan extension in animals (yeast, worms, flies) doesn''t translate to mammals
- Studies in mice show benefits primarily in disease/obesity models, not healthy mice

**Inflammation and oxidative stress:**
- Reductions in inflammatory markers (CRP, TNF-α) in some but not all studies
- Decreases in oxidative stress markers (MDA, 8-OHdG) at high doses

**Dosing in research and supplements:**

Human studies typically use:
- **Low dose:** 10-50 mg/day (closer to achievable dietary intake with supplements)
- **Moderate dose:** 100-250 mg/day (most common in research)
- **High dose:** 500-2,000 mg/day (far exceeding dietary intake)

Most studies use doses of 100-500 mg/day, which is 50-250 times higher than typical dietary intake from red wine or food sources.

**Supplement formulations:**

To address bioavailability, various formulations have been developed:
- **Micronized resveratrol:** Reduced particle size for improved absorption
- **Trans-resveratrol:** Specific isomer extraction
- **Liposomal formulations:** Encapsulation in lipid vesicles
- **Nanoparticle delivery:** Enhanced tissue penetration
- **Combination products:** Often paired with quercetin, pterostilbene, or grape seed extract

Japanese knotweed extract is the most common source for supplements, typically providing 50-98% trans-resveratrol.

**Safety and tolerability:**

Resveratrol appears generally safe at typical supplement doses:
- **Well-tolerated doses:** Up to 1,000 mg/day in studies lasting several months
- **High doses (2,000-5,000 mg/day):** May cause gastrointestinal upset, diarrhea, nausea
- **No serious adverse events:** Reported in clinical trials at doses up to 5,000 mg/day

**Potential concerns:**
- **Estrogenic activity:** Resveratrol has weak estrogenic properties; unclear clinical significance
- **Drug interactions:** May affect cytochrome P450 enzymes (particularly CYP3A4, CYP2C9, CYP2D6), potentially affecting drug metabolism
- **Anticoagulant effects:** May inhibit platelet aggregation; theoretical concern when combined with blood thinners
- **SIRT1 inhibition in some contexts:** Paradoxically, resveratrol can inhibit SIRT1 at very high concentrations

**Current scientific consensus:**

While resveratrol shows promising effects in cellular and animal studies, human evidence remains limited and inconsistent. The poor bioavailability is a major obstacle, and it''s unclear whether supplement doses can achieve the tissue concentrations needed for biological effects observed in vitro. More research is needed to:
- Determine optimal dosing and formulations
- Identify populations most likely to benefit
- Understand long-term safety and efficacy
- Clarify whether metabolites contribute to biological effects
- Conduct large-scale clinical outcome trials

The enthusiasm for resveratrol as an anti-aging supplement may be premature based on current human evidence, though it may offer modest cardiovascular and metabolic benefits in specific populations.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A glass of red wine provides 0.5-2 mg resveratrol, while typical supplements provide 100-500 mg, doses that are 50-250 times higher than achievable dietary intake', 'Meta-analyses show resveratrol supplementation (≥150 mg/day) reduces systolic blood pressure by 2-3 mmHg, a modest but potentially meaningful effect', 'Studies using high-dose resveratrol (1,000-1,500 mg/day) show improved insulin sensitivity and metabolic parameters in obese individuals, but bioavailability remains <1%', 'Resveratrol activated SIRT1 and extended lifespan in yeast by 70%, but similar effects have not been demonstrated in healthy mammals or humans'],
  NULL,
  'Resveratrol - Suppl.me Glossary',
  'Polyphenolic compound from grapes and red wine studied for anti-aging benefits'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 166. Rheumatoid Arthritis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'rheumatoidarthritis',
  'Rheumatoid Arthritis',
  'RA',
  NULL,
  'An autoimmune disease causing chronic inflammation of the joints and other organs.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A patient with early RA may experience symmetric swelling and stiffness in both wrists and hands, improving with methotrexate treatment.', 'Long-standing RA can lead to characteristic hand deformities like ulnar deviation and swan-neck deformities.', 'RA patients often have elevated inflammatory markers (ESR, CRP) and positive anti-CCP antibodies.'],
  NULL,
  'Rheumatoid Arthritis - Suppl.me Glossary',
  'Autoimmune disease causing chronic joint inflammation and systemic effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 167. Rickets
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'rickets',
  'Rickets',
  NULL,
  NULL,
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency, resulting in soft, weak bones and skeletal deformities.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['An exclusively breastfed infant without vitamin D supplementation may develop rickets by 6-12 months of age, presenting with delayed fontanelle closure and rachitic rosary.', 'A child with celiac disease and vitamin D malabsorption may develop rickets despite adequate dietary vitamin D intake.', 'Treatment with 2,000 IU vitamin D daily for 2-3 months typically normalizes vitamin D levels and begins healing of rickets, with improvement visible on X-rays.'],
  NULL,
  'Rickets - Suppl.me Glossary',
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 168. Risk Ratio
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'rr',
  'Risk Ratio',
  'RR',
  NULL,
  'A statistical measure that compares the probability (risk) of an outcome occurring in one group versus another, commonly used in prospective studies and clinical trials to quantify treatment effects.',
  'Risk Ratio (RR), also called Relative Risk, is calculated by dividing the risk of an outcome in the treatment group by the risk in the control group. Risk is simply the probability of an event occurring, calculated as the number of events divided by the total number of people in the group. An RR of 1.0 indicates no difference between groups. An RR greater than 1.0 suggests increased risk in the treatment group, while an RR less than 1.0 suggests decreased risk (protective effect).

For example, an RR of 0.75 for cardiovascular events means the treatment group has 75% the risk of the control group, or equivalently, a 25% relative risk reduction. If the control group had a 20% event rate, an RR of 0.75 would mean the treatment group has a 15% event rate (20% × 0.75 = 15%). This makes RR intuitive to interpret—it directly tells you how much the intervention changes the likelihood of an outcome.

Risk Ratio is preferred in prospective studies (cohort studies, randomized controlled trials) where you can directly observe and count events over time in both groups. It''s more intuitive than Odds Ratio (OR), especially for common outcomes. Unlike OR which can exaggerate effect sizes for common events, RR provides a more conservative and interpretable estimate of benefit or harm.

When interpreting RR in supplement research, consider both the relative risk reduction (RR) and the absolute risk reduction (ARR). An RR of 0.50 sounds impressive (50% risk reduction), but if the baseline risk is only 2%, the ARR is just 1% (from 2% to 1%). Both measures provide valuable information—RR shows the proportional benefit, while ARR shows the actual number of people who benefit. The Number Needed to Treat (NNT = 1/ARR) tells you how many people need to take the supplement to prevent one event.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['An RR of 0.80 for heart attack means the supplement group has 20% lower risk than placebo', 'If omega-3 supplementation produces RR = 0.65 for sudden cardiac death, this represents a 35% relative risk reduction', 'Meta-analyses might report RR = 1.15 (95% CI 0.98-1.35) for adverse events, indicating no statistically significant increase in risk'],
  NULL,
  'Risk Ratio - Suppl.me Glossary',
  'Measure of relative risk comparing the probability of an event in treatment vs. control groups'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 169. Satiety
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'satiety',
  'Satiety',
  NULL,
  'suh-TY-uh-tee',
  'Satiety is the feeling of fullness and satisfaction that occurs after eating, which suppresses further food intake until the next meal. It is distinct from satiation (the process that leads to meal termination during eating). Satiety is regulated by complex interactions between the gut, hormones, and brain, and plays a crucial role in appetite control and body weight regulation.',
  NULL,
  'Understanding satiety is important for weight management and obesity treatment, managing hunger during calorie restriction, improving diet adherence and sustainability, developing functional foods and supplements, and understanding eating behavior and disorders. Enhanced satiety can support weight management by reducing overall calorie intake without conscious restriction.',
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Satiety - Suppl.me Glossary',
  'Feeling of fullness and satisfaction after eating that suppresses further food intake'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 170. Saturation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'saturation',
  'Saturation',
  NULL,
  'sach-uh-RAY-shun',
  'In supplement and nutrition contexts, the state where tissues have reached their maximum capacity to absorb, store, or utilize a nutrient. Beyond this point, additional intake provides no further benefit and may simply be excreted or potentially cause adverse effects.',
  NULL,
  'Understanding saturation helps optimize supplement dosing—taking more than the saturation point wastes money and may increase risk of side effects without providing additional benefits. Saturation thresholds also explain why ''loading doses'' work for some supplements (to quickly reach saturation) but not others, and why timing and dose frequency matter for different nutrients.',
  'Think of saturation like a sponge that can only hold so much water. Once the sponge is fully saturated, pouring more water on it doesn''t make it wetter—the excess just runs off. Similarly, your body''s tissues can only hold and use a certain amount of each nutrient. Once saturated, taking more doesn''t provide more benefits. For example, vitamin C saturates at certain doses—beyond that point, your kidneys just filter out the excess into urine.',
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Saturation - Suppl.me Glossary',
  'State where body stores of a nutrient are filled to capacity'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 171. SCFA (Short-Chain Fatty Acids)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'scfa',
  'SCFA (Short-Chain Fatty Acids)',
  'SCFA, SCFAs',
  'short-chayn fa-tee as-ids',
  'Fatty acids containing fewer than six carbon atoms (primarily acetate, propionate, and butyrate) that are produced by bacterial fermentation of dietary fiber in the colon, providing energy to colonocytes and exerting wide-ranging metabolic, anti-inflammatory, and immune-modulating effects throughout the body.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Prebiotic fiber supplementation (inulin, GOS at 5-20g daily) increases beneficial Bifidobacterium populations and fecal SCFA production, improving gut health markers', 'GOS supplementation consistently increases fecal acetate and butyrate in meta-analyses of randomized controlled trials, demonstrating successful colonic fermentation', 'Individuals consuming 30-40g fiber daily from diverse sources (whole grains, legumes, vegetables, fruits) typically have higher fecal SCFA concentrations and healthier gut microbiomes compared to low-fiber diets'],
  NULL,
  'SCFA (Short-Chain Fatty Acids) - Suppl.me Glossary',
  'Fatty acids produced by gut bacteria fermenting dietary fiber'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 172. Serum
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'serum',
  'Serum',
  NULL,
  NULL,
  'The clear, yellowish liquid component of blood that remains after blood has been allowed to clot and the clot has been removed. It contains water, electrolytes, nutrients, hormones, antibodies, and other proteins, but lacks clotting factors (particularly fibrinogen) and blood cells.',
  'Serum vs. Plasma:

Serum:
• Blood after clotting
• No clotting factors
• No anticoagulants needed
• Takes 30+ minutes to process

Plasma:
• Blood before clotting
• Contains clotting factors
• Requires anticoagulants
• Faster processing time

Use in Supplement Research:

Serum measurements are commonly used to assess:

Vitamin and Mineral Status:
• Serum vitamin D
• Serum iron
• Serum magnesium
• Serum calcium

Metabolic Markers:
• Serum glucose
• Serum lipids
• Serum insulin

Inflammatory Markers:
• Serum CRP
• Serum IL-6
• Serum TNF-α

Organ Function:
• Serum creatinine
• Serum liver enzymes

Important Considerations:

• Timing matters: Many serum markers fluctuate throughout the day and require fasting samples
• Not always representative: Some nutrients are stored in tissues, so serum levels may not reflect total body stores
• Reference ranges vary: Different laboratories may use different reference ranges for the same marker',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Serum - Suppl.me Glossary',
  'Blood plasma without clotting factors, commonly used for laboratory testing'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 173. Serum 25-hydroxyvitamin D / 25(OH)D
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'serum25ohd',
  'Serum 25-hydroxyvitamin D / 25(OH)D',
  '25-hydroxyvitamin D',
  NULL,
  'The major circulating form of vitamin D in the blood and the standard biomarker used to assess vitamin D status. It reflects both dietary intake and sunlight-induced production of vitamin D.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Serum 25-hydroxyvitamin D / 25(OH)D - Suppl.me Glossary',
  'Primary blood test for vitamin D status, reflecting total vitamin D stores'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 174. Small Intestinal Bacterial Overgrowth
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'sibo',
  'Small Intestinal Bacterial Overgrowth',
  'SIBO',
  NULL,
  'A condition characterized by excessive bacterial colonization of the small intestine (typically &gt;10³ colony-forming units per mL of jejunal aspirate or positive breath test), causing malabsorption, bloating, diarrhea, and other gastrointestinal symptoms.',
  'Small Intestinal Bacterial Overgrowth (SIBO) occurs when bacteria that normally reside predominantly in the colon proliferate abnormally in the small intestine. The small intestine typically maintains relatively low bacterial counts through mechanisms including gastric acid, bile salts, pancreatic enzymes, intestinal motility (especially the migrating motor complex), and the ileocecal valve. When these protective mechanisms fail, bacterial overgrowth can develop.

SIBO is classified by the predominant gas produced during bacterial fermentation: hydrogen-SIBO, methane-SIBO (now sometimes called intestinal methanogen overgrowth or IMO), or hydrogen sulfide-SIBO. The gas type influences symptoms: hydrogen-SIBO often causes diarrhea, methane-SIBO typically causes constipation, and hydrogen sulfide-SIBO may cause diarrhea with characteristic sulfurous belching.

Risk factors include conditions that slow motility (diabetes, scleroderma, hypothyroidism), structural abnormalities (diverticula, surgical blind loops, strictures), reduced gastric acid (chronic PPI use, atrophic gastritis), pancreatic insufficiency, and immune deficiency. There''s significant overlap between SIBO and IBS, with studies reporting 4-78% SIBO prevalence in IBS patients (wide range reflects diagnostic variability).

Diagnosis is challenging. The gold standard is jejunal aspirate culture (&gt;10³ CFU/mL), but this is invasive and rarely performed. Instead, breath tests measuring hydrogen and methane after lactulose or glucose ingestion are commonly used, though specificity and sensitivity are debated. Interpretation criteria vary, and false positives/negatives occur.

Treatment typically involves antibiotics (rifaximin is most studied, with 40-50% symptom improvement), sometimes combined with neomycin or metronidazole for methane-dominant SIBO. Dietary modifications (low fermentation diet, specific carbohydrate diet), prokinetics to restore motility, and addressing underlying causes are important. Probiotics'' role is controversial—some evidence suggests benefit, but certain strains might theoretically worsen overgrowth. Herbal antimicrobials are studied as alternatives. Relapse rates are high (12-44% within 3-6 months), often necessitating maintenance strategies.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Patient with chronic diarrhea and bloating has positive lactulose breath test (hydrogen rise >20 ppm within 90 minutes), responds to rifaximin treatment', 'Meta-analysis shows rifaximin treatment leads to 50-70% breath test normalization and 40-50% symptom improvement in SIBO patients', 'Person with constipation-predominant IBS has methane level >10 ppm on breath test, suggesting IMO contributing to symptoms'],
  NULL,
  'Small Intestinal Bacterial Overgrowth - Suppl.me Glossary',
  'Excessive bacterial colonization of small intestine causing malabsorption and gastrointestinal symptoms'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 175. Single Blinded
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'singleblinded',
  'Single Blinded',
  NULL,
  NULL,
  'A study design where participants do not know whether they are receiving the active treatment or placebo, but researchers do know.',
  'In a single-blinded study, participants are kept unaware of whether they are receiving the actual supplement or a placebo, but the researchers conducting the study know which group each participant is in. This design helps control for placebo effects and participant bias, as people cannot alter their behavior or reporting based on knowing what they''re receiving.

Single-blinding reduces the risk that participants'' expectations will influence their perception of results. For example, if someone knows they''re taking a supplement expected to improve energy, they might unconsciously report feeling more energetic even if the supplement has no real effect.

However, single-blinded studies are still vulnerable to researcher bias, as the investigators who know which participants are receiving the treatment might unconsciously influence how they interact with participants or interpret results. This is why double-blinded studies, where both participants and researchers are kept unaware of group assignments, are generally preferred in supplement research.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  NULL,
  NULL
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 176. Sleep Quality
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'sleepquality',
  'Sleep Quality',
  NULL,
  NULL,
  'A multidimensional assessment of sleep encompassing sleep duration, efficiency, latency, continuity, and subjective restfulness, all crucial for physical health, cognitive function, and emotional wellbeing.',
  'Sleep quality involves several measurable components: sleep latency (time to fall asleep, ideally under 30 minutes), sleep duration (7-9 hours for most adults), sleep efficiency (time asleep divided by time in bed, ideally above 85%), number of awakenings, time awake after sleep onset, sleep architecture (proper cycling through light, deep, and REM sleep stages), and subjective ratings of restfulness. Poor sleep quality can occur even with adequate duration if sleep is fragmented or lacking restorative deep sleep.

Sleep serves critical functions including memory consolidation, cellular repair, immune system maintenance, hormone regulation (growth hormone, cortisol, leptin, ghrelin), metabolic homeostasis, cardiovascular health, and emotional processing. Chronic poor sleep increases risk of obesity, diabetes, cardiovascular disease, cognitive decline, mood disorders, weakened immune function, and all-cause mortality. Even mild sleep restriction (6 hours vs. 8 hours) accumulates significant cognitive and physiological deficits over time.

Improving sleep quality involves sleep hygiene practices: consistent sleep-wake schedule, cool dark quiet bedroom, limiting blue light exposure before bed, avoiding caffeine after noon, regular exercise (but not close to bedtime), stress management, and limiting alcohol. Supplements that may support sleep include magnesium, melatonin (for circadian rhythm issues), glycine, and herbs like valerian or chamomile, though addressing lifestyle factors and sleep hygiene should come first.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Magnesium supplementation (300-500mg taken 1-2 hours before bed) may improve sleep quality by regulating neurotransmitters and reducing arousal', 'Regular aerobic exercise (30-40 minutes, 4-5 days weekly) improves sleep quality and increases deep sleep duration', 'Consistent sleep-wake times (even on weekends) strengthen circadian rhythm and improve sleep quality more than any supplement'],
  NULL,
  'Sleep Quality - Suppl.me Glossary',
  'Assessment of sleep duration, efficiency, and restfulness'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 177. Standardized Mean Difference
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'smd',
  'Standardized Mean Difference',
  'SMD',
  NULL,
  'A statistical measure used in meta-analyses to express the size of an intervention effect relative to the variability in the data, allowing comparison across studies using different measurement scales.',
  'Standardized Mean Difference (SMD) is calculated by dividing the difference between two group means by the pooled standard deviation. This standardization allows researchers to combine and compare results from studies that measured the same construct using different scales or instruments. For example, if multiple studies examined the effect of a supplement on anxiety using different anxiety questionnaires, SMD allows all these results to be pooled into a single analysis.

SMD is interpreted using effect size conventions established by Cohen: small effect (SMD = 0.2), medium effect (SMD = 0.5), and large effect (SMD = 0.8 or higher). A positive SMD typically indicates the intervention group performed better than the control group, while a negative SMD favors the control. However, the direction can vary depending on how outcomes are measured—for example, when measuring anxiety or depression, a negative SMD might indicate improvement (lower scores = less symptoms).

SMD is particularly valuable in systematic reviews and meta-analyses where multiple studies investigate the same question but use different measurement tools. It provides a common metric for synthesizing evidence across diverse studies. When reading research, SMD helps quantify not just whether an effect exists (statistical significance) but how large and meaningful that effect is (clinical significance). SMDs should be interpreted alongside confidence intervals to understand the precision and reliability of the estimate.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['In ashwagandha research, an SMD of -0.63 for stress reduction indicates a medium-to-large beneficial effect, with lower stress scores in the treatment group', 'A meta-analysis showing magnesium reduced depression with SMD = -0.71 suggests a large effect size, indicating substantial improvement compared to placebo', 'When comparing studies using different cognitive tests, SMD allows researchers to determine the overall effect of a supplement on cognition despite varied assessment methods'],
  NULL,
  'Standardized Mean Difference - Suppl.me Glossary',
  'Statistical measure of effect size used in meta-analyses'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 178. Standardized Extract
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'standardizedextract',
  'Standardized Extract',
  NULL,
  NULL,
  'A botanical or herbal extract that has been processed to contain a guaranteed minimum concentration of one or more specific active compounds or marker compounds. This ensures consistent potency and quality across different batches of the supplement.',
  'Why Standardization Matters:

Natural plant materials can vary significantly in their active compound content due to factors like:
• Growing conditions: Soil quality, climate, and rainfall affect plant chemistry
• Harvest timing: Active compound levels change throughout the plant''s growth cycle
• Plant part used: Different parts (root, leaf, seed) contain different compound concentrations
• Storage and processing: Degradation can occur if materials aren''t properly handled

Standardization addresses this variability by adjusting extract concentrations to meet specific targets.

How Standardization Works:

The standardization process typically involves:
1. Testing: Analytical testing measures the concentration of target compounds in raw material
2. Concentration or dilution: The extract is adjusted to reach the desired potency
3. Addition of excipients: Sometimes inert ingredients are added to achieve standardization
4. Quality control: Final product is tested to confirm it meets specifications

Common Examples:

• Curcumin extract: Standardized to 95% curcuminoids
• Ashwagandha: Standardized to 5% withanolides
• Ginkgo biloba: Standardized to 24% ginkgo flavone glycosides and 6% terpene lactones
• St. John''s Wort: Standardized to 0.3% hypericin
• Milk thistle: Standardized to 80% silymarin

Reading Supplement Labels:

Standardized extracts on supplement labels typically show:
• Extract ratio: (e.g., 10:1) indicates 10 grams of herb produced 1 gram of extract
• Percentage standardization: (e.g., ''standardized to 5% active compound'')
• Actual compound amount: Some labels list both the total extract amount and the standardized compound amount

Advantages of Standardized Extracts:

• Consistent dosing: Each batch contains the same amount of active compounds
• Research reproducibility: Studies using standardized extracts can be replicated
• Predictable effects: Consumers get consistent therapeutic effects
• Quality assurance: Indicates manufacturer attention to quality control
• Comparison possible: Easier to compare products when standardization is specified

Limitations:

While standardization improves consistency, it has some limitations:
• Marker vs. active compounds: Sometimes standardization targets marker compounds that may not be the actual therapeutic agents
• Missing synergy: Whole plant extracts may contain beneficial compounds not captured by standardization
• Not all compounds: Typically only 1-3 compounds are standardized; others may still vary
• Manufacturing variations: Different manufacturers may use different marker compounds or methods

Standardized Extract vs. Whole Herb:

Standardized Extract:
• Known concentration of active compounds
• More consistent effects
• Usually more concentrated
• May remove some plant compounds

Whole Herb (Non-Standardized):
• Variable active compound content
• Contains full spectrum of plant compounds
• Less predictable potency
• May preserve synergistic effects

Research Considerations:

When reading research on herbal supplements:
• Check if the study used a standardized extract
• Note what compound it was standardized to
• Be cautious applying research on standardized extracts to non-standardized products
• Different standardization levels may produce different effects

Choosing Quality Standardized Extracts:

Look for:
• Clear labeling of standardization (percentage and compound)
• Reputable manufacturers with quality control processes
• Third-party testing verification
• Research supporting the standardization level used
• Transparency about extraction methods',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Standardized Extract - Suppl.me Glossary',
  'Botanical extract processed to contain guaranteed concentration of active compounds'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 179. Statistical Significance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'statisticalsignificance',
  'Statistical Significance',
  NULL,
  NULL,
  'A measure indicating that a research finding is unlikely to have occurred by chance alone, typically represented by a p-value less than 0.05.',
  'Statistical significance is a mathematical measure used to determine whether the results of a study are likely due to the intervention being tested or simply due to random chance. A result is typically considered statistically significant when the p-value is less than 0.05, meaning there is less than a 5% probability that the observed effect occurred by chance.

In supplement research, statistical significance helps researchers determine whether observed differences between treatment and control groups are real effects of the supplement or just random variation. For example, if a study finds that vitamin D supplementation leads to statistically significant improvements in bone density, it means the improvement is unlikely to be due to chance alone.

However, statistical significance does not necessarily indicate clinical importance. A result can be statistically significant but have such a small effect size that it may not be meaningful in real-world applications. This is why clinical significance is also important to consider.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A creatine study showing a statistically significant increase in muscle strength (p=0.03) compared to placebo.', 'Research finding that omega-3 supplementation leads to a statistically significant reduction in triglycerides (p<0.001).', 'A vitamin D trial demonstrating statistically significant improvements in immune markers (p=0.02).'],
  NULL,
  'Statistical Significance - Suppl.me Glossary',
  'A measure indicating that a finding is unlikely to have occurred by chance alone'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 180. Subgroup Analysis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'subgroupanalysis',
  'Subgroup Analysis',
  NULL,
  NULL,
  'An examination of treatment effects within specific subsets of a study population, such as by age, sex, or baseline health status.',
  'Subgroup analysis involves analyzing whether a treatment has different effects in specific groups of participants within a larger study. Researchers might examine whether a supplement works better in men versus women, in older versus younger adults, or in people with certain health conditions versus healthy individuals.

Subgroup analyses are valuable because they can reveal important differences in how people respond to supplements. For example, vitamin D supplementation might be more effective in people with low baseline vitamin D levels than in those with adequate levels. Or calcium supplements might provide greater benefits for postmenopausal women than for younger adults.

However, subgroup analyses must be interpreted cautiously. They are often exploratory and can produce false-positive findings, especially when many subgroups are examined. The most reliable subgroup findings are those that were pre-specified before the study began and are confirmed in multiple independent studies.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Analyzing whether omega-3 supplements are more effective for heart health in people over 65 compared to younger adults.', 'Examining if vitamin D supplementation has different effects on bone health in men versus women.', 'Investigating whether probiotic benefits differ between people with and without digestive disorders.'],
  NULL,
  'Subgroup Analysis - Suppl.me Glossary',
  'Examination of treatment effects within specific subsets of a study population'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 181. Sublingual Administration
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'sublingual',
  'Sublingual Administration',
  NULL,
  NULL,
  'A method of taking supplements by placing them (typically tablets, lozenges, liquids, or sprays) under the tongue where they dissolve and are absorbed directly into the bloodstream through the mucous membranes, bypassing the digestive system and first-pass liver metabolism.',
  'The term comes from the Latin ''sub'' (under) and ''lingua'' (tongue). This route bypasses the digestive system and first-pass liver metabolism, potentially offering faster absorption and higher bioavailability for certain compounds.

How Sublingual Absorption Works:

1. Placement: The supplement is placed under the tongue
2. Dissolution: The tablet/liquid makes contact with the sublingual mucosa
3. Absorption: Compounds pass through the thin, highly vascularized tissue under the tongue
4. Direct entry: Substances enter the bloodstream via sublingual veins
5. Rapid circulation: Blood from sublingual veins goes directly to the heart, then throughout the body

This bypasses the gastrointestinal tract and avoids first-pass metabolism in the liver, where many compounds are broken down before reaching systemic circulation.

Advantages of Sublingual Administration:

• Faster absorption: Typically takes effect in minutes rather than 30-60+ minutes for oral supplements
• Higher bioavailability: Avoids degradation in stomach acid and liver metabolism
• Consistent absorption: Not affected by food, stomach contents, or digestive issues
• Lower doses possible: Better bioavailability may allow for smaller effective doses
• Convenient: No water needed; easy to use anywhere
• Useful for swallowing difficulties: Alternative for those who can''t swallow pills
• Reduced GI side effects: Doesn''t pass through stomach or intestines

Disadvantages and Limitations:

• Not suitable for all compounds: Only works for substances that can cross mucous membranes
• Limited surface area: The sublingual region is small, limiting how much can be absorbed at once
• Taste: Must keep substances in mouth; unpleasant flavors can be problematic
• Timing required: Must hold substances under tongue for several minutes
• Salivation: Excess saliva production can cause swallowing, reducing sublingual absorption
• Higher cost: Sublingual formulations often cost more than regular oral forms
• Limited research: Many sublingual supplements lack clinical evidence of superiority

Common Sublingual Supplements:

Vitamin B12 (Methylcobalamin): One of the most popular sublingual supplements. Sublingual B12 bypasses the need for intrinsic factor (required for B12 absorption in the gut), making it useful for people with absorption issues. Research supports its effectiveness, showing comparable or better absorption than oral B12.

Vitamin D: Available in sublingual drops or sprays. However, since vitamin D is fat-soluble and well-absorbed orally when taken with fat, the sublingual advantage is debated.

Melatonin: Sublingual melatonin may have faster onset of action, which can be beneficial for sleep initiation. It also bypasses first-pass metabolism, potentially providing more consistent effects.

CBD Oil: Often marketed as sublingual for improved bioavailability. CBD has poor oral bioavailability, so sublingual administration may offer advantages.

Proper Sublingual Technique:

To maximize sublingual absorption:
1. Place under tongue: Put the tablet, lozenge, or liquid directly under your tongue
2. Hold still: Keep the substance in place; avoid moving it around
3. Don''t swallow: Resist the urge to swallow saliva for as long as possible (typically 1-5 minutes)
4. Wait for dissolution: Allow the tablet to completely dissolve
5. Avoid eating/drinking: Don''t consume food or beverages immediately before or after
6. Don''t talk: Minimize speaking during absorption period
7. Rinse if desired: After absorption is complete, you can swallow any remaining solution or rinse your mouth

Sublingual vs. Buccal Administration:

• Sublingual: Under the tongue; faster absorption due to more blood vessels
• Buccal: Between cheek and gum; slower but more surface area; better for sustained release

Both bypass the GI tract and first-pass metabolism, but sublingual is generally preferred for rapid effects.

When Sublingual Makes Sense:

Sublingual administration is most beneficial for:
• Compounds with poor oral bioavailability: Those extensively metabolized in the liver or degraded in stomach acid
• Time-sensitive effects: When rapid action is desired (e.g., melatonin for sleep)
• Absorption issues: Individuals with GI disorders, low stomach acid, or B12 malabsorption
• Convenience situations: When swallowing pills is difficult or water isn''t available
• Precise titration: Liquid forms allow for very specific dosing adjustments

When Sublingual May Not Matter:

Sublingual formulations may not provide significant advantages for:
• Already well-absorbed compounds: Substances with high oral bioavailability
• Large molecules: Very large or poorly lipid-soluble molecules can''t easily cross mucous membranes
• High-dose supplements: The sublingual area can only absorb limited quantities
• Fat-soluble vitamins: These often require dietary fat for absorption regardless of route

Research Evidence:

The effectiveness of sublingual administration varies by compound:
• Well-supported: Vitamin B12, certain pharmaceutical compounds
• Promising but limited data: Melatonin, CBD, some botanical extracts
• Theoretical but unproven: Many supplements marketed as sublingual lack specific comparative research
• Questionable benefit: Some fat-soluble vitamins, minerals, and large molecules

Marketing claims often outpace scientific evidence for sublingual supplement benefits.

Formulation Considerations:

Effective sublingual products require specific formulation characteristics:
• Rapid dissolution: Must dissolve quickly in small amounts of saliva
• Appropriate molecular size: Small enough to cross membranes
• Lipid solubility: Must be able to pass through lipid-rich mucous membranes
• pH optimization: Formulated for the pH of the mouth
• Taste masking: Must be tolerable to keep under tongue
• Stability: Must remain stable in the oral environment

Cost-Benefit Analysis:

When considering sublingual supplements:
• Higher price: Typically cost more than conventional oral forms
• Potential for lower doses: Better bioavailability might mean less product needed
• Convenience value: Faster action and easier use may justify higher cost for some
• Individual variation: Benefits vary between people; some may notice significant differences, others none
• Research for specific products: Look for evidence that the sublingual form actually provides advantages for that particular supplement',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Sublingual Administration - Suppl.me Glossary',
  'Placing supplement under tongue for direct absorption into bloodstream'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 182. Superoxide Dismutase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'superoxidedismutase',
  'Superoxide Dismutase',
  'SOD',
  'soo-per-OK-side dis-MYOO-tase',
  'A family of metalloenzymes that catalyzes the dismutation of superoxide radicals (O₂•⁻) into oxygen (O₂) and hydrogen peroxide (H₂O₂), representing the first line of enzymatic defense against oxidative stress in cells.',
  'Superoxide dismutase (SOD) is one of the most important antioxidant enzymes in living organisms, present in nearly all aerobic organisms and most subcellular compartments. SOD enzymes protect cells from the damaging effects of superoxide radicals, which are continuously produced as byproducts of cellular metabolism, particularly during mitochondrial respiration.

**The catalytic reaction:**

SOD catalyzes the conversion of superoxide radicals through a two-step process:

1. M(n+1)⁺-SOD + O₂•⁻ → Mⁿ⁺-SOD + O₂
2. Mⁿ⁺-SOD + O₂•⁻ + 2H⁺ → M(n+1)⁺-SOD + H₂O₂

Where M represents the metal cofactor (copper, zinc, or manganese). The net result is:

2O₂•⁻ + 2H⁺ → H₂O₂ + O₂

This reaction is called ''dismutation'' because the same substrate (superoxide) is both oxidized (to O₂) and reduced (to H₂O₂). SOD is extraordinarily efficient, with catalytic rates approaching diffusion-limited speeds (10⁹ M⁻¹s⁻¹), meaning nearly every encounter between SOD and superoxide results in catalysis.

**Types of SOD in humans:**

**1. SOD1 (Cu/Zn-SOD):**
- **Location:** Cytoplasm (cytosol), nucleus, lysosomes, peroxisomes, and mitochondrial intermembrane space
- **Structure:** Homodimer of 32 kDa containing copper and zinc ions
- **Function:** Primary SOD in cytoplasm; accounts for ~80% of total SOD activity in most cells
- **Genetic defects:** Mutations in SOD1 gene cause familial amyotrophic lateral sclerosis (ALS, Lou Gehrig''s disease)
- **Expression:** Constitutively expressed; levels increase with oxidative stress

**2. SOD2 (Mn-SOD):**
- **Location:** Mitochondrial matrix
- **Structure:** Homotetramer of 96 kDa containing manganese ions
- **Function:** Critical for protecting mitochondria from superoxide generated during electron transport chain activity
- **Importance:** SOD2 knockout mice die within days of birth due to severe oxidative damage, demonstrating its essential role
- **Regulation:** Induced by oxidative stress, cytokines, and transcription factors (NF-κB, Nrf2)
- **Clinical significance:** Reduced SOD2 activity linked to various age-related diseases

**3. SOD3 (EC-SOD, extracellular SOD):**
- **Location:** Extracellular space (tissues and body fluids)
- **Structure:** Homotetramer of 135 kDa containing copper and zinc ions
- **Function:** Protects against extracellular oxidative stress, particularly in blood vessels and lungs
- **Distribution:** Highly expressed in blood vessels, lungs, kidneys, and uterus
- **Binding:** Contains heparin-binding domain allowing it to bind to cell surfaces and extracellular matrix
- **Cardiovascular role:** Protects endothelium and preserves nitric oxide bioavailability

**Physiological importance:**

**Superoxide as a reactive oxygen species:**

Superoxide radicals are continuously generated in cells through:
- **Mitochondrial electron transport chain:** 1-2% of oxygen consumed forms superoxide
- **NADPH oxidases:** Intentional superoxide production for immune function and cell signaling
- **Xanthine oxidase:** Produces superoxide during purine metabolism
- **Cytochrome P450 enzymes:** Generate superoxide during drug and toxin metabolism
- **Auto-oxidation reactions:** Various biomolecules spontaneously react with oxygen

While superoxide itself is moderately reactive, it can:
- Damage iron-sulfur clusters in enzymes
- React with nitric oxide (NO) to form peroxynitrite (ONOO⁻), a highly reactive oxidant
- Initiate lipid peroxidation chain reactions
- Contribute to DNA damage

**SOD as part of the antioxidant defense system:**

SOD works in concert with other antioxidant enzymes:
- **SOD:** Converts superoxide → hydrogen peroxide
- **Catalase:** Converts hydrogen peroxide → water + oxygen (primarily in peroxisomes)
- **Glutathione peroxidase:** Converts hydrogen peroxide → water (using glutathione as electron donor)

This enzymatic cascade neutralizes superoxide and its downstream products, preventing oxidative damage.

**Clinical significance and disease associations:**

**Reduced SOD activity or expression is associated with:**
- **Cardiovascular disease:** Endothelial dysfunction, atherosclerosis, hypertension
- **Neurodegenerative diseases:** ALS (SOD1 mutations), Parkinson''s disease, Alzheimer''s disease
- **Diabetes:** Reduced SOD2 activity contributes to diabetic complications
- **Cancer:** Altered SOD expression in various cancers; complex role as both tumor suppressor and promoter
- **Aging:** Progressive decline in SOD activity with age
- **Inflammatory conditions:** Rheumatoid arthritis, inflammatory bowel disease

**SOD polymorphisms and genetics:**

Genetic variations in SOD genes affect enzyme activity and disease risk:
- **SOD2 Ala16Val (rs4880):** Common polymorphism affecting mitochondrial targeting; associated with various disease risks
- **SOD1 mutations:** Over 100 mutations cause familial ALS through toxic gain-of-function
- **SOD3 Arg213Gly:** Affects heparin binding and vascular SOD availability

**Factors affecting SOD activity:**

**Upregulation:**
- Exercise (particularly SOD2 in muscles)
- Phytochemicals activating Nrf2 (sulforaphane, curcumin, resveratrol, EGCG)
- Oxidative stress (adaptive response)
- Caloric restriction

**Downregulation/impairment:**
- Aging
- Chronic inflammation
- Hyperglycemia (glycation of SOD reduces activity)
- Nutritional deficiencies (copper, zinc, manganese)
- Chronic alcohol consumption
- Smoking

**Nutritional support for SOD:**

**Cofactor minerals:**
- **Copper:** Required for SOD1 and SOD3 (RDA: 900 mcg/day)
- **Zinc:** Required for SOD1 and SOD3 (RDA: 8-11 mg/day)
- **Manganese:** Required for SOD2 (AI: 1.8-2.3 mg/day)

Deficiencies in these minerals can reduce SOD activity, though severe deficiency is rare in developed countries.

**Dietary compounds that upregulate SOD through Nrf2 activation:**
- **Sulforaphane** (broccoli sprouts, cruciferous vegetables)
- **Curcumin** (turmeric)
- **EGCG** (green tea)
- **Resveratrol** (grapes, red wine)
- **Quercetin** (onions, apples, berries)
- **Melatonin**

These compounds don''t directly provide SOD but enhance endogenous SOD gene expression.

**SOD supplementation considerations:**

**Oral SOD supplements:**
- Poor bioavailability: SOD is a protein enzyme that is digested in the gastrointestinal tract
- Most oral SOD supplements are ineffective at raising systemic SOD levels
- **Exception:** Some formulations use enteric coating or combine SOD with gliadin (wheat protein) to improve absorption (GliSODin®)

**SOD mimetics:**
- Synthetic compounds that mimic SOD catalytic activity
- Include manganese-based complexes and other metal catalysts
- Primarily used in research and some therapeutic applications
- Not widely available as supplements

**Topical SOD:**
- Used in some cosmetic formulations for skin protection
- May provide localized antioxidant effects
- Limited absorption into deeper skin layers

**Indirect approaches (more effective):**
- Consuming minerals (copper, zinc, manganese) to support endogenous SOD
- Phytochemicals that upregulate SOD expression through Nrf2 (sulforaphane, curcumin, EGCG)
- Lifestyle interventions (exercise, caloric restriction)

**Measurement of SOD:**

SOD activity can be measured in:
- **Blood (erythrocytes, plasma):** Reflects systemic antioxidant capacity
- **Tissue biopsies:** Research setting
- **Indirect markers:** Measure downstream effects on oxidative stress markers (MDA, 8-OHdG)

Higher SOD activity generally correlates with better antioxidant defense, though very high levels may indicate compensatory upregulation in response to oxidative stress.

**Therapeutic potential:**

**Recombinant SOD therapies:**
- **Pegylated SOD:** Extended circulation time; studied for inflammatory conditions
- **SOD-containing liposomes:** Improved delivery to tissues
- **Limited clinical use:** Primarily experimental; challenges include production cost, delivery, and immunogenicity

**More practical approaches:**
- Enhancing endogenous SOD through nutrition and lifestyle
- Targeting Nrf2 pathway to upregulate multiple antioxidant enzymes including SOD
- Addressing underlying causes of oxidative stress (hyperglycemia, inflammation, smoking)',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Exercise training increases muscle SOD2 (Mn-SOD) activity by 20-60% depending on intensity and duration, enhancing mitochondrial antioxidant capacity', 'Sulforaphane from broccoli sprouts activates Nrf2, increasing SOD1 and SOD2 expression by 40-100% in various tissues', 'SOD1 mutations cause approximately 20% of familial ALS cases, demonstrating the critical importance of proper SOD function in neuron survival', 'SOD catalyzes superoxide dismutation at near-diffusion-limited rates (10⁹ M⁻¹s⁻¹), making it one of the fastest enzymes known'],
  NULL,
  'Superoxide Dismutase - Suppl.me Glossary',
  'Family of antioxidant enzymes that neutralize superoxide radicals'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 183. Synergistic Effect
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'synergisticeffect',
  'Synergistic Effect',
  NULL,
  'sin-er-JIS-tik eh-FEKT',
  'A phenomenon where the combined effect of two or more substances is greater than the sum of their individual effects when used separately. In supplement research, synergy occurs when compounds work together to enhance efficacy beyond what would be predicted from their independent actions.',
  NULL,
  'Understanding synergistic effects is crucial for optimizing supplement formulations, preventing nutrient deficiencies that limit other nutrients'' effectiveness, and recognizing that isolated nutrients may work differently than when consumed in whole food contexts. Synergy explains why nutrient combinations are often more effective than single nutrients in large doses.',
  'Synergy is when 1 + 1 = 3. When two substances work synergistically, taking them together produces benefits greater than if you added up their separate effects. It''s like a sports team where players work together so well that the team performs better than you''d expect from just adding up each player''s individual skill. In supplements, vitamin D and calcium work synergistically—together they build stronger bones than either could alone.',
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Synergistic Effect - Suppl.me Glossary',
  'Combined effect of substances that is greater than the sum of individual effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 184. Systematic Review
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'systematicreview',
  'Systematic Review',
  NULL,
  NULL,
  'A comprehensive, structured research methodology that systematically identifies, evaluates, and synthesizes all available evidence on a specific research question using predefined, transparent, and reproducible methods.',
  '<p>A systematic review is considered one of the highest levels of evidence in medical and scientific research. Unlike narrative reviews that may be subjective, systematic reviews follow rigorous protocols to minimize bias and provide reliable conclusions.</p>
        
        <p><strong className="glossary-highlight">Key Characteristics:</strong></p>
        <ul className="glossary-list">
          <li><strong>Predefined Protocol:</strong> Research questions, inclusion/exclusion criteria, and analysis methods are established before the review begins</li>
          <li><strong>Comprehensive Search:</strong> Multiple databases and sources are systematically searched to find all relevant studies</li>
          <li><strong>Quality Assessment:</strong> Each included study is critically appraised for methodological quality and risk of bias</li>
          <li><strong>Transparent Reporting:</strong> All methods, decisions, and findings are clearly documented and reproducible</li>
          <li><strong>Objective Synthesis:</strong> Results are combined systematically, often using statistical methods (meta-analysis)</li>
        </ul>

        <p><strong className="glossary-highlight">The Systematic Review Process:</strong></p>
        <ul className="glossary-list">
          <li><strong>Formulate Question:</strong> Define a clear, focused research question using frameworks like PICO (Population, Intervention, Comparison, Outcome)</li>
          <li><strong>Develop Protocol:</strong> Create detailed methods document, often registered publicly</li>
          <li><strong>Search Literature:</strong> Systematically search databases (PubMed, Cochrane Library, etc.)</li>
          <li><strong>Screen Studies:</strong> Apply inclusion/exclusion criteria, usually by two independent reviewers</li>
          <li><strong>Extract Data:</strong> Systematically collect relevant information from included studies</li>
          <li><strong>Assess Quality:</strong> Evaluate risk of bias and study quality</li>
          <li><strong>Synthesize Results:</strong> Combine findings narratively or statistically</li>
          <li><strong>Draw Conclusions:</strong> Interpret findings and assess strength of evidence</li>
        </ul>

        <p><strong className="glossary-highlight">Systematic Review vs. Meta-Analysis:</strong></p>
        <p>While related, these are distinct concepts:</p>
        <ul className="glossary-list">
          <li><strong>Systematic Review:</strong> The overall process of systematically identifying and evaluating evidence; may or may not include statistical pooling</li>
          <li><strong>Meta-Analysis:</strong> A statistical technique used within some systematic reviews to quantitatively combine results from multiple studies</li>
          <li>All meta-analyses should be based on systematic reviews, but not all systematic reviews include meta-analysis</li>
        </ul>',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Systematic Review - Suppl.me Glossary',
  'Comprehensive, structured literature review using predefined methods to answer research questions'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 185. Systolic Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'systolic',
  'Systolic Blood Pressure',
  NULL,
  'sis-tol-ik',
  'Systolic blood pressure is the top number in a blood pressure reading, representing the maximum pressure in the arteries when the heart contracts and pumps blood. It measures the force exerted on artery walls during the heart''s active pumping phase.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Systolic Blood Pressure - Suppl.me Glossary',
  'The top number in blood pressure readings, measuring peak arterial pressure when the heart contracts'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 186. Total Antioxidant Capacity
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'tac',
  'Total Antioxidant Capacity',
  'TAC',
  NULL,
  'A measurement of the overall antioxidant power of blood or tissue, reflecting the combined contribution of all antioxidant compounds and enzymes that can neutralize free radicals and reactive oxygen species.',
  'Total Antioxidant Capacity (TAC) provides a comprehensive assessment of antioxidant status by measuring the collective ability of all antioxidants present in a sample to prevent oxidation. Rather than measuring individual antioxidants (like vitamin C, vitamin E, or glutathione separately), TAC captures the synergistic effects of all antioxidant compounds working together, including vitamins, minerals, enzymes, polyphenols, and other molecules.

TAC is measured using various laboratory assays (FRAP, ABTS, ORAC, DPPH), each with slightly different methodologies. Results are typically expressed in units like mmol/L Trolox equivalents or μmol/L, with higher values indicating greater antioxidant capacity. Reference ranges vary depending on the assay used, but generally healthy adults have TAC values between 1.0-2.5 mmol/L (by FRAP method).

In supplement research, TAC is used as a biomarker to assess whether interventions increase overall antioxidant defenses and potentially reduce oxidative stress. Antioxidant-rich supplements like vitamin C, vitamin E, polyphenols, omega-3 fatty acids, and various plant extracts are studied for their effects on TAC. Increases in TAC suggest enhanced capacity to neutralize free radicals, which may translate to reduced oxidative damage and inflammation.

However, TAC has limitations. Higher TAC doesn''t automatically mean better health outcomes—clinical benefits depend on whether oxidative stress was actually a problem at baseline and whether increased antioxidant capacity translates to reduced oxidative damage markers (like MDA, oxidized LDL). Some studies show TAC improvements without corresponding clinical benefits. TAC is best interpreted alongside other oxidative stress markers and clinical outcomes.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A study might report that vitamin C supplementation increased TAC by 0.34 mmol/L (95% CI 0.21-0.47) compared to placebo', 'Baseline TAC of 1.2 mmol/L increasing to 1.8 mmol/L after polyphenol supplementation represents a 50% improvement in antioxidant capacity', 'Meta-analyses examining curcumin often show significant TAC increases (SMD = 0.62) in populations with chronic disease'],
  NULL,
  'Total Antioxidant Capacity - Suppl.me Glossary',
  'Measurement of overall antioxidant power in blood or tissue'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 187. Therapeutic Dose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'therapeuticdose',
  'Therapeutic Dose',
  NULL,
  NULL,
  'The amount of a supplement or medication that produces a desired beneficial effect or therapeutic outcome. This dose has been demonstrated through clinical research to be effective for treating or preventing a specific condition while remaining within safe limits.',
  'For supplements, therapeutic doses are typically derived from clinical trials showing positive outcomes, though individual needs may vary.

Key Dose-Related Concepts:

Minimum Effective Dose:
The smallest amount that produces a measurable therapeutic effect. Doses below this threshold typically show no benefit.

Optimal Dose:
The amount that provides maximum benefit with minimal risk. This represents the best balance between efficacy and safety.

Maximum Safe Dose:
The highest amount that can be taken without causing unacceptable adverse effects. Often represented by the Tolerable Upper Intake Level (UL).

Toxic Dose:
The amount that causes harmful effects. The gap between therapeutic and toxic doses is called the ''therapeutic window'' or ''therapeutic index.''

Factors Affecting Therapeutic Dose:

• Body weight: Larger individuals often require higher doses
• Age: Children, elderly, and adults may have different dose requirements
• Bioavailability: How well the substance is absorbed affects needed dose
• Health status: Certain conditions affect how supplements are processed
• Genetic factors: Individual variations in metabolism and enzyme activity
• Other medications: Drug interactions can increase or decrease effective doses
• Diet: Food can enhance or inhibit absorption
• Baseline levels: Deficient individuals may need different doses than those with adequate status

Examples of Therapeutic Doses:

Common supplements with established therapeutic dose ranges:
• Vitamin D: 1,000-4,000 IU/day for maintenance; higher doses (up to 10,000 IU/day) may be therapeutic for deficiency
• Omega-3 fatty acids: 1,000-3,000 mg combined EPA/DHA daily for cardiovascular benefits
• Magnesium: 300-500 mg/day for various therapeutic applications
• Curcumin: 500-2,000 mg/day of bioavailable forms for anti-inflammatory effects
• Creatine: 3-5 g/day for performance and cognitive benefits
• Probiotic bacteria: 1-10 billion CFU/day, depending on strain and intended use

Dose-Response Relationship:

The relationship between dose and effect follows several possible patterns:
• Linear: Effect increases proportionally with dose
• Threshold: No effect until a minimum dose is reached
• Plateau: Effect increases with dose up to a point, then additional dose provides no further benefit
• U-shaped: Both too little and too much can be problematic; optimal benefits occur at moderate doses
• Inverse: More is actually less effective (rare but possible with some compounds)

Determining Therapeutic Doses:

Therapeutic doses are established through:
• Clinical trials: Randomized controlled trials testing different dose levels
• Meta-analyses: Pooling data from multiple studies to identify effective dose ranges
• Safety assessments: Evaluating tolerability and adverse effects at various doses
• Biomarker studies: Measuring physiological changes in response to different doses
• Historical use: Traditional dosing patterns, though less rigorous than clinical research

Why Therapeutic Dose Matters:

Understanding therapeutic doses is important because:
• Under-dosing: Taking too little provides no benefit and wastes money
• Over-dosing: Taking too much increases risk of adverse effects without additional benefit
• Individual optimization: Helps identify the right dose for your specific needs
• Research interpretation: Comparing supplement doses to those used in research
• Cost-effectiveness: Achieving benefits with the minimum effective dose

Common Dosing Mistakes:

• Assuming ''more is better'': Many supplements show a plateau effect
• Using doses below research levels: Taking amounts too small to be effective
• Ignoring bioavailability: Not accounting for form differences (e.g., standard vs. micronized)
• Inconsistent dosing: Missing doses or taking sporadically instead of daily
• Not adjusting for body weight: Especially important for children and very small/large adults
• Splitting doses incorrectly: Some supplements work better as single daily doses, others benefit from splitting

Dose Titration:

Starting with a therapeutic dose approach:
• Start low: Begin with a lower dose to assess tolerance
• Increase gradually: If needed, increase dose incrementally
• Monitor effects: Pay attention to both benefits and any adverse effects
• Find your minimum effective dose: Use the smallest amount that produces desired results
• Periodic reassessment: Needs may change over time

Loading Dose vs. Maintenance Dose:

Some supplements use a two-phase approach:
• Loading dose: Higher initial dose to rapidly achieve tissue saturation (e.g., creatine loading)
• Maintenance dose: Lower ongoing dose to maintain desired levels
• Not always necessary: Many supplements work fine with consistent maintenance dosing from the start

Therapeutic Dose vs. RDA/DRI:

• RDA (Recommended Dietary Allowance): Amount to prevent deficiency in healthy populations
• Therapeutic dose: Amount to achieve specific health benefits beyond deficiency prevention
• Often different: Therapeutic doses are frequently higher than RDAs
• Context matters: RDAs apply to food and total intake; therapeutic doses are for supplementation

When to Seek Professional Guidance:

Consult a healthcare provider for dosing when:
• You have medical conditions affecting absorption or metabolism
• You''re taking medications that may interact
• You''re pregnant, breastfeeding, or planning pregnancy
• You''re considering doses above established upper limits
• You''re not seeing expected results at standard therapeutic doses
• You experience adverse effects',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Therapeutic Dose - Suppl.me Glossary',
  'Amount of supplement that produces desired beneficial effect while remaining safe'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 188. Third-Party Testing
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'thirdpartytesting',
  'Third-Party Testing',
  NULL,
  NULL,
  'Quality verification performed by an independent laboratory or certification organization that has no financial interest in the supplement manufacturer or product outcome. These unbiased organizations test supplements to verify their contents, purity, and quality claims.',
  NULL,
  'Third-party testing provides independent verification that the product contains what the label claims, is free from harmful contaminants, active ingredients meet claimed concentrations, and manufacturing processes meet quality standards.',
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Third-Party Testing - Suppl.me Glossary',
  'Independent laboratory verification of supplement quality, purity, and potency'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 189. Thyroid Function
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'thyroidfunction',
  'Thyroid Function',
  NULL,
  NULL,
  'The activity of the thyroid gland in producing hormones that regulate metabolism, energy production, body temperature, heart rate, and numerous other bodily functions.',
  'The thyroid gland, located in the neck, produces two main hormones: thyroxine (T4) and triiodothyronine (T3). T4 is the inactive form that''s converted to active T3 in peripheral tissues. These hormones regulate metabolic rate, protein synthesis, bone growth, brain development in children, and sensitivity to other hormones. The pituitary gland releases thyroid-stimulating hormone (TSH) to regulate thyroid hormone production through a feedback loop.

Hypothyroidism (underactive thyroid) causes fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, depression, and slow heart rate. It''s commonly caused by autoimmune thyroiditis (Hashimoto''s disease), iodine deficiency, or thyroid damage. Hyperthyroidism (overactive thyroid) causes weight loss, heat intolerance, rapid heartbeat, anxiety, tremors, and insomnia, often from Graves'' disease or thyroid nodules.

Thyroid function is assessed through blood tests measuring TSH, free T4, and free T3. Normal TSH ranges from 0.4-4.0 mIU/L, though optimal ranges are debated. Iodine and selenium are essential for thyroid hormone synthesis and conversion. Iron, zinc, and vitamin D also support thyroid health. Supplementation should be approached cautiously and ideally under medical supervision, as excessive iodine can worsen some thyroid conditions.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Iodine supplementation corrects hypothyroidism caused by iodine deficiency, but excessive iodine can trigger or worsen autoimmune thyroid disease', 'Selenium (100-200mcg daily) may benefit autoimmune thyroiditis by reducing thyroid antibodies and supporting T4 to T3 conversion', 'Iron deficiency impairs thyroid hormone synthesis and can reduce the effectiveness of thyroid medication in hypothyroid patients'],
  NULL,
  'Thyroid Function - Suppl.me Glossary',
  'Activity of the thyroid gland in regulating metabolism'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 190. Tumor Necrosis Factor-Alpha
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'tnfalpha',
  'Tumor Necrosis Factor-Alpha',
  'TNF-α',
  NULL,
  'A potent pro-inflammatory cytokine produced primarily by macrophages and adipose tissue that regulates immune responses, inflammation, cell survival, and apoptosis, playing a central role in systemic and chronic inflammation.',
  'Tumor Necrosis Factor-alpha (TNF-α) is one of the most important inflammatory mediators in the body. Originally named for its ability to cause tumor necrosis in animal models, TNF-α is now recognized as a master regulator of inflammation with wide-ranging effects on metabolism, immune function, and tissue homeostasis. It''s produced mainly by activated macrophages but also by adipose tissue (fat cells), which explains why obesity is associated with elevated TNF-α and chronic inflammation.

TNF-α triggers inflammatory cascades by binding to cell surface receptors (TNFR1 and TNFR2), leading to activation of NF-κB and other inflammatory pathways. This results in production of additional cytokines (IL-1, IL-6), adhesion molecules, and inflammatory mediators, amplifying the inflammatory response. While essential for fighting infections and healing injuries, chronically elevated TNF-α contributes to insulin resistance, atherosclerosis, muscle wasting, bone loss, and various autoimmune and inflammatory diseases.

Normal serum TNF-α levels are typically very low (&lt;8.1 pg/mL) in healthy individuals. Elevated levels are associated with metabolic syndrome, type 2 diabetes, cardiovascular disease, rheumatoid arthritis, inflammatory bowel disease, and other chronic inflammatory conditions. In supplement research, TNF-α is a key biomarker for assessing anti-inflammatory effects. Omega-3 fatty acids, curcumin, vitamin D, probiotics, and various polyphenols have been studied for their ability to reduce TNF-α levels.

The success of TNF-α blocking drugs (like infliximab, adalimumab, etanercept) in treating autoimmune diseases demonstrates the critical role of TNF-α in inflammatory pathology. Supplements that effectively reduce TNF-α may offer similar but milder anti-inflammatory benefits. When interpreting research, consider baseline TNF-α levels, as populations with higher baseline inflammation typically show greater response to intervention.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis might show that omega-3 supplementation reduced TNF-α by -0.36 pg/mL (95% CI -0.68 to -0.04) across multiple studies', 'In obesity studies, TNF-α might decrease from 12.5 pg/mL at baseline to 8.7 pg/mL after curcumin supplementation, indicating reduced inflammation', 'Studies examining probiotic effects often report standardized mean differences in TNF-α (SMD = -0.52) rather than absolute changes due to assay variability'],
  NULL,
  'Tumor Necrosis Factor-Alpha - Suppl.me Glossary',
  'Potent pro-inflammatory cytokine regulating immune responses and inflammation'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 191. Tolerable Upper Intake Level
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'tolerableupperintakelevel',
  'Tolerable Upper Intake Level',
  'UL',
  NULL,
  'The Tolerable Upper Intake Level (UL) is the highest average daily nutrient intake level that is likely to pose no risk of adverse health effects for almost all individuals in the general population. The UL is not a recommended intake level; rather, it represents a safety threshold above which the risk of adverse effects increases.',
  NULL,
  'The UL provides a safety ceiling for supplement dosing, helping consumers and healthcare providers avoid excessive intake that could cause harm. Understanding ULs is essential for safe supplementation, particularly when combining dietary sources with supplements. ULs are established by expert panels such as the Institute of Medicine (now National Academy of Medicine).',
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'Tolerable Upper Intake Level - Suppl.me Glossary',
  'Maximum daily nutrient intake unlikely to cause adverse health effects'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 192. Triglycerides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'triglycerides',
  'Triglycerides',
  NULL,
  NULL,
  'A type of fat (lipid) found in the blood that serves as the body''s primary form of energy storage, with elevated levels increasing cardiovascular disease risk.',
  'Triglycerides are composed of glycerol bound to three fatty acid chains and represent the main form of fat storage in the body. After eating, triglycerides from food are packaged into chylomicrons for transport, while the liver produces triglycerides from excess carbohydrates and packages them into very low-density lipoproteins (VLDL). Normal fasting triglyceride levels are below 150 mg/dL, with 150-199 mg/dL considered borderline high, 200-499 mg/dL high, and 500+ mg/dL very high.

Elevated triglycerides contribute to atherosclerosis (arterial plaque buildup) and increase cardiovascular disease risk, particularly when combined with other risk factors like low HDL cholesterol or high LDL cholesterol. Very high triglycerides (over 500 mg/dL) significantly raise the risk of acute pancreatitis. Factors that elevate triglycerides include excess calorie intake, high carbohydrate diets (especially refined carbs and sugars), obesity, physical inactivity, alcohol consumption, certain medications, and metabolic conditions like diabetes and metabolic syndrome.

Lowering triglycerides involves dietary changes (reducing refined carbs and sugars, limiting alcohol), weight loss if overweight, regular physical activity, and for some people, supplements or medications. Omega-3 fatty acids (EPA and DHA) are particularly effective at reducing triglycerides, with prescription-strength formulations reducing levels by 20-50% in people with hypertriglyceridemia.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Omega-3 supplementation (2-4g EPA+DHA daily) reduces triglycerides by 15-30% in individuals with elevated levels', 'Weight loss of 5-10% body weight can reduce triglyceride levels by 20% or more in overweight individuals', 'Replacing refined carbohydrates with fiber-rich whole grains, vegetables, and legumes significantly lowers triglycerides'],
  NULL,
  'Triglycerides - Suppl.me Glossary',
  'Type of fat in blood that serves as energy storage'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 193. Ulcerative Colitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'ulcerativecolitis',
  'Ulcerative Colitis',
  'UC',
  NULL,
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 25-year-old with ulcerative proctitis experiencing bloody stools and urgency may respond well to topical mesalamine suppositories.', 'A patient with extensive UC refractory to conventional therapy may achieve remission with biologic therapy like infliximab.', 'Long-term UC patients require surveillance colonoscopy every 1-2 years after 8-10 years of disease to monitor for dysplasia.'],
  NULL,
  'Ulcerative Colitis - Suppl.me Glossary',
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 194. Valine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'valine',
  'Valine',
  'Val, V (single-letter code)',
  'vay-leen',
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Valine supports muscle metabolism, mental focus, energy production, and immune function.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A 30g serving of whey protein contains approximately 1.5-1.8g valine, contributing to the total BCAA content that supports muscle recovery', 'A BCAA supplement with 2:1:1 ratio providing 5g total BCAAs delivers 1.25g valine, sufficient to maintain balanced BCAA levels during training', 'A meal with 200g of cooked lentils (~18g protein) provides roughly 0.9g valine, demonstrating how plant proteins also supply all three BCAAs'],
  NULL,
  'Valine - Suppl.me Glossary',
  'Essential branched-chain amino acid supporting muscle growth and energy'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 195. Vitamin Deficiency
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'vitamindeficiency',
  'Vitamin Deficiency',
  NULL,
  NULL,
  'An insufficient level of one or more essential vitamins in the body, resulting from inadequate dietary intake, poor absorption, increased requirements, or excessive losses, leading to various health problems.',
  'Vitamin deficiencies occur when vitamin intake or absorption fails to meet the body''s needs. Vitamins are organic compounds required in small amounts for normal metabolism, growth, and health maintenance. They function as cofactors for enzymes, antioxidants, hormone precursors, and gene regulators. Deficiencies can be primary (inadequate dietary intake) or secondary (adequate intake but impaired absorption, increased needs, or excessive losses).

Common vitamin deficiencies worldwide include vitamin D (affecting bone health, immune function), vitamin B12 (causing anemia and neurological problems, particularly in older adults and vegetarians), folate (linked to anemia and birth defects), vitamin A (leading to vision problems and immune dysfunction), and vitamin C (causing scurvy with bleeding gums and poor wound healing). Even in developed countries, subclinical deficiencies are surprisingly common, often causing subtle symptoms like fatigue, poor concentration, or frequent infections before progressing to overt disease.

Diagnosis involves blood tests measuring vitamin levels and assessing functional markers. Treatment typically involves supplementation along with addressing underlying causes. Some populations at higher risk include older adults (reduced absorption, limited sun exposure), pregnant women (increased requirements), people with malabsorption disorders (celiac disease, Crohn''s disease), those on restricted diets (vegans, extreme dieters), and individuals taking certain medications that interfere with vitamin absorption or metabolism.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['Vitamin D deficiency (levels below 20 ng/mL) affects an estimated 40% of US adults, impacting bone health, immune function, and mood', 'Vitamin B12 deficiency is common in older adults due to reduced stomach acid production and in vegans due to lack of dietary sources', 'Folate deficiency during early pregnancy significantly increases risk of neural tube defects, which is why folic acid supplementation is recommended'],
  NULL,
  'Vitamin Deficiency - Suppl.me Glossary',
  'Insufficient vitamin levels causing various health problems'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 196. VLDL
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'vldl',
  'VLDL',
  'Very Low-Density Lipoprotein',
  'vee-el-dee-el',
  'Very Low-Density Lipoprotein (VLDL) is a type of lipoprotein produced by the liver that carries triglycerides, cholesterol, and other lipids from the liver to various tissues in the body, serving as the primary transport vehicle for endogenously synthesized triglycerides.',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY[]::text[],
  NULL,
  'VLDL - Suppl.me Glossary',
  'Lipoprotein particle transporting triglycerides from liver to tissues'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 197. Weighted Mean Difference
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  pronunciation,
  definition,
  expanded_explanation,
  why_it_matters,
  simple_explanation,
  technical_explanation,
  real_world_context,
  examples,
  key_points,
  meta_title,
  meta_description
) VALUES (
  'wmd',
  'Weighted Mean Difference',
  'WMD',
  NULL,
  'A statistical measure used in meta-analyses to pool results across studies that measured the same outcome using the same scale or units, with each study''s contribution weighted by its precision.',
  'Weighted Mean Difference (WMD) combines results from multiple studies measuring an outcome in identical units (e.g., mg/dL for blood glucose, mmHg for blood pressure, or kg for body weight). Unlike Standardized Mean Difference (SMD) which standardizes results to a unitless scale, WMD preserves the original measurement units, making interpretation more intuitive and clinically meaningful.

The ''weighted'' aspect means studies are not simply averaged together—instead, larger and more precise studies (those with smaller standard errors) receive more weight in the calculation. This approach gives more influence to higher-quality evidence while still incorporating data from smaller trials. Studies are typically weighted by the inverse of their variance: studies with less variability contribute more to the pooled estimate.

WMD is particularly valuable when all included studies use the same measurement tool or scale. For example, when pooling trials that measured fasting blood glucose in mg/dL, a WMD of -10 mg/dL means the intervention reduced blood glucose by an average of 10 mg/dL compared to control. This direct interpretation in familiar units makes WMD easier to understand than SMD for clinicians and patients.

When reading meta-analyses, WMD is often reported alongside a 95% confidence interval (CI). If the CI does not cross zero and p &lt;0.05, the difference is statistically significant. The width of the CI indicates precision—narrower intervals suggest more confidence in the estimate. Heterogeneity statistics (I², τ²) indicate whether results varied consistently across studies or showed substantial differences.',
  NULL,
  NULL,
  NULL,
  NULL,
  ARRAY['A meta-analysis showing magnesium supplementation reduced fasting plasma glucose with WMD = -4.64 mg/dL (95% CI -6.40 to -2.87) indicates an average reduction of about 4.6 mg/dL', 'For blood pressure, WMD of -2.0 mmHg systolic (95% CI -3.5 to -0.5) suggests a modest but significant reduction in blood pressure', 'When examining omega-3 effects on triglycerides, WMD = -18.3 mg/dL would indicate the average reduction in triglyceride levels across all pooled studies'],
  NULL,
  'Weighted Mean Difference - Suppl.me Glossary',
  'Statistical measure pooling results from studies using the same measurement scale'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  pronunciation = EXCLUDED.pronunciation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  why_it_matters = EXCLUDED.why_it_matters,
  simple_explanation = EXCLUDED.simple_explanation,
  technical_explanation = EXCLUDED.technical_explanation,
  real_world_context = EXCLUDED.real_world_context,
  examples = EXCLUDED.examples,
  key_points = EXCLUDED.key_points,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- Update related terms (links between glossary entries)
-- Using a second pass to ensure all UUIDs exist

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'leucine')
)
WHERE slug = 'anabolicresistance';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'lipophilic')
)
WHERE slug = 'chylomicrons';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Absorption', 'Biomarker', 'Serum', 'Therapeutic Dose')
)
WHERE slug = 'deficiency';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('epa', 'omega-3', 'cognitive-function', 'cardiovascular', 'bioavailability', 'metabolism')
)
WHERE slug = 'dha';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'systolic', 'cardiovascular', 'hypertensive')
)
WHERE slug = 'diastolic';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('meta-analysis', 'statistical-significance', 'clinical-significance')
)
WHERE slug = 'effectsize';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('dha', 'omega-3', 'cardiovascular', 'inflammation', 'triglycerides', 'bioavailability')
)
WHERE slug = 'epa';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'probiotics')
)
WHERE slug = 'fos';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodglucose', 'insulinresistance', 'glycemiccontrol', 'metabolism')
)
WHERE slug = 'glucosemetabolism';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Antioxidant', 'Glutathione', 'Oxidative Stress', 'Selenium', 'Catalase', 'Superoxide Dismutase')
)
WHERE slug = 'glutathioneperoxidase';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('protein', 'collagen', 'proline', 'hydroxyproline', 'proteinsynthesis')
)
WHERE slug = 'glycine';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('meta-analysis', 'rct', 'statistical-significance', 'clinical-significance', 'peer-reviewed')
)
WHERE slug = 'grade';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Pharmacokinetics', 'Bioavailability', 'Loading Phase', 'Maintenance Dose', 'Absorption')
)
WHERE slug = 'halflife';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('anemia', 'myoglobin', 'bloodglucose', 'biomarker', 'mineral')
)
WHERE slug = 'hemoglobin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('protein', 'absorption', 'bioavailability', 'collagen')
)
WHERE slug = 'hydrolyzed';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('collagen', 'proline', 'glycine', 'biomarker', 'osteoporosis')
)
WHERE slug = 'hydroxyproline';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'normotensive', 'systolic', 'diastolic', 'cardiovascular')
)
WHERE slug = 'hypertensive';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Maintenance Dose', 'Saturation', 'Half-Life', 'Bioavailability', 'Therapeutic Dose')
)
WHERE slug = 'loadingphase';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('mineral', 'electrolytes', 'bioavailability', 'absorption')
)
WHERE slug = 'macromineral';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Loading Phase', 'Therapeutic Dose', 'Half-Life', 'Pharmacokinetics', 'Biomarker')
)
WHERE slug = 'maintenancedose';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'methylfolate', 'absorption', 'mthfr')
)
WHERE slug = 'methylcobalamin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('folicacid', 'bioavailability', 'mthfr', 'methylcobalamin')
)
WHERE slug = 'methylfolate';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('macromineral', 'bioavailability', 'absorption', 'electrolytes')
)
WHERE slug = 'mineral';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Protein Synthesis', 'Muscle Protein Synthesis', 'Leucine', 'Metabolism', 'Anabolic')
)
WHERE slug = 'mtor';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('hemoglobin', 'biomarker', 'atp', 'mitochondria', 'cardiovascular')
)
WHERE slug = 'myoglobin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'hypertensive', 'systolic', 'diastolic')
)
WHERE slug = 'normotensive';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('epa', 'dha', 'cardiovascular', 'inflammation', 'triglycerides', 'cognitive-function', 'bioavailability')
)
WHERE slug = 'omega3';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bonedensity', 'mineral', 'macromineral', 'biomarker')
)
WHERE slug = 'osteoporosis';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Free Radicals', 'Oxidative Stress', 'Lipid Peroxidation', 'Antioxidant', '8-OHdG', 'MDA', 'Glutathione')
)
WHERE slug = 'oxidativedamage';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('rct', 'doubleblinded', 'singleblinded', 'clinicalsignificance', 'statisticalsignificance', 'grade')
)
WHERE slug = 'pedro';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('inflammation', 'biomarker', 'metabolism', 'neurotransmitter')
)
WHERE slug = 'pms';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'hypertensive', 'biomarker', 'cardiovascular')
)
WHERE slug = 'preeclampsia';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('collagen', 'glycine', 'hydroxyproline', 'protein', 'proteinsynthesis')
)
WHERE slug = 'proline';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('muscleproteinsynthesis', 'metabolism', 'absorption', 'bioavailability')
)
WHERE slug = 'proteinsynthesis';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('GLP-1', 'PYY', 'Protein', 'FODMAP', 'Fiber')
)
WHERE slug = 'satiety';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Loading Phase', 'Absorption', 'Half-Life', 'Maintenance Dose')
)
WHERE slug = 'saturation';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Absorption', 'Vitamin C', 'Vitamin D', 'Calcium', 'Iron')
)
WHERE slug = 'synergisticeffect';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'diastolic', 'cardiovascular', 'hypertensive')
)
WHERE slug = 'systolic';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Deficiency', 'Therapeutic Dose', 'Adverse Effects', 'Biomarker', 'Drug Interactions')
)
WHERE slug = 'tolerableupperintakelevel';

-- Re-enable triggers
ALTER TABLE api.glossary_terms ENABLE TRIGGER ALL;

COMMIT;

-- Verify insertion
SELECT COUNT(*) as total_terms FROM api.glossary_terms;
