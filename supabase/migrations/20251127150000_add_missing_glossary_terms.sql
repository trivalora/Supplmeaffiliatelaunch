-- Add Missing Glossary Terms (24 terms with non-standard patterns)
-- Generated: 2025-11-27T14:39:43.766Z
-- Includes 17 template string terms + 7 variable pattern terms

BEGIN;

-- 1. Atherosclerosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'atherosclerosis',
  'Atherosclerosis',
  NULL,
  'Arterial plaque buildup leading to narrowed and hardened arteries.',
  'Atherosclerosis is a chronic progressive disease characterized by the accumulation of lipids, inflammatory cells, and fibrous material within the arterial walls, forming plaques that narrow and harden arteries. This process reduces blood flow and can lead to cardiovascular events like heart attack and stroke.

**Disease Process**

Atherosclerosis develops over decades through several stages:

**Endothelial Dysfunction:** The process begins with damage to the endothelium (inner arterial lining) from risk factors like high LDL cholesterol, hypertension, smoking, diabetes, and inflammation. This increases permeability and allows LDL cholesterol to enter the arterial wall.

**Lipid Accumulation:** LDL cholesterol particles become trapped in the arterial wall and undergo oxidation, creating oxidized LDL (oxLDL). The immune system recognizes oxLDL as harmful, triggering an inflammatory response.

**Inflammatory Response:** Monocytes (white blood cells) enter the arterial wall, transform into macrophages, and engulf oxLDL, becoming foam cells. Foam cell accumulation forms fatty streaks—the earliest visible lesion of atherosclerosis.

**Plaque Formation:** Over time, smooth muscle cells migrate into the area, producing collagen and forming a fibrous cap over the lipid core. This creates a mature atherosclerotic plaque that narrows the arterial lumen.

**Plaque Complications:** Plaques can become unstable and rupture, exposing thrombogenic material that triggers blood clot formation, potentially causing acute events like myocardial infarction or stroke. Plaques can also calcify, making arteries rigid, or enlarge enough to significantly obstruct blood flow.

**Risk Factors**

Major modifiable risk factors include high LDL cholesterol, low HDL cholesterol, high triglycerides, hypertension, smoking, diabetes, obesity, physical inactivity, and unhealthy diet. Non-modifiable factors include age, male sex (or postmenopausal women), and family history.

**Prevention and Treatment**

Lifestyle modifications (heart-healthy diet, regular exercise, smoking cessation, weight management) are foundational. Medications include statins (reduce LDL cholesterol), antiplatelet agents (prevent clot formation), antihypertensives, and diabetes medications. Severe cases may require procedures like angioplasty, stenting, or bypass surgery.

**Role of Inflammation**

Atherosclerosis is increasingly recognized as an inflammatory disease, not just lipid accumulation. Inflammatory biomarkers like CRP predict cardiovascular risk independently of cholesterol levels, and anti-inflammatory interventions show promise in reducing cardiovascular events.',
  ARRAY['A 60-year-old man with high LDL cholesterol may develop coronary artery atherosclerosis over decades, eventually experiencing chest pain (angina) with exertion.',
    'Carotid artery atherosclerosis can reduce blood flow to the brain, increasing stroke risk.',
    'Statin therapy reduces LDL cholesterol and stabilizes atherosclerotic plaques, reducing heart attack and stroke risk.'],
  'Atherosclerosis - Suppl.me Glossary',
  'Arterial plaque buildup leading to narrowed and hardened arteries.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 2. Coenzyme Q10
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'coenzymeq10',
  'Coenzyme Q10',
  'CoQ10, ubiquinone',
  'A fat-soluble compound found in every cell of the body that serves two critical functions: as an essential component of the mitochondrial electron transport chain for ATP production, and as a powerful antioxidant that protects cell membranes and lipoproteins from oxidative damage. The body produces CoQ10 naturally, but levels decline with age and certain medications (particularly statins).',
  'Coenzyme Q10 (CoQ10) is a compound your body makes that helps produce cellular energy and acts as an antioxidant. It''s found in every cell but is especially concentrated in organs with high energy demands like the heart, liver, and kidneys. Your body''s production of CoQ10 decreases as you age and can also be reduced by cholesterol-lowering statin medications, which is why some people take CoQ10 supplements, particularly those on statins.',
  NULL,
  'Coenzyme Q10 - Suppl.me Glossary',
  'A fat-soluble compound found in every cell of the body that serves two critical functions: as an essential component of the mitochondrial electron transpor'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 3. Cytokines
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'cytokines',
  'Cytokines',
  NULL,
  'A broad category of small signaling proteins secreted by cells, particularly immune cells, that mediate and regulate immune responses, inflammation, and cell communication. Cytokines include interleukins (IL), interferons (IFN), tumor necrosis factors (TNF), and many others.',
  'Cytokines are chemical messengers that cells use to communicate, especially during immune and inflammatory responses. Think of them as the ''text messages'' that immune cells send to coordinate their response to infection or injury. Some cytokines promote inflammation (pro-inflammatory), while others reduce it (anti-inflammatory). Common examples include IL-6, IL-1β, TNF-α, and IL-10.',
  NULL,
  'Cytokines - Suppl.me Glossary',
  'A broad category of small signaling proteins secreted by cells, particularly immune cells, that mediate and regulate immune responses, inflammation, and ce'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 4. Dysbiosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'dysbiosis',
  'Dysbiosis',
  NULL,
  'An imbalance in the composition, diversity, or function of the gut microbiome, characterized by a reduction in beneficial bacteria and/or overgrowth of potentially harmful microorganisms. Dysbiosis represents a disruption from the healthy symbiotic relationship between host and gut microbes.',
  'Dysbiosis is when the balance of bacteria in your gut is disrupted—you have too few beneficial bacteria (like Bifidobacteria and Lactobacillus) and/or too many potentially harmful bacteria. A healthy gut microbiome is diverse and dominated by beneficial species, but dysbiosis occurs when this balance is lost. This can be caused by antibiotics, poor diet (low fiber, high processed foods), stress, infections, or medications. Dysbiosis is associated with numerous health problems including digestive issues, inflammation, obesity, and immune dysfunction.',
  NULL,
  'Dysbiosis - Suppl.me Glossary',
  'An imbalance in the composition, diversity, or function of the gut microbiome, characterized by a reduction in beneficial bacteria and/or overgrowth of pot'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 5. HOMA-IR
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'homair',
  'HOMA-IR',
  'Homeostatic Model Assessment of Insulin Resistance',
  'A mathematical formula quantifying insulin resistance from fasting glucose and insulin levels.',
  'HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is a method used to quantify insulin resistance and beta-cell function from fasting blood glucose and fasting insulin levels. It provides an estimate of insulin resistance without the need for complex testing procedures like the hyperinsulinemic-euglycemic clamp (the gold standard but impractical for routine use).

**Calculation**

HOMA-IR = (Fasting Insulin × Fasting Glucose) / 405

Where fasting insulin is measured in µU/mL and fasting glucose in mg/dL. If glucose is measured in mmol/L, the denominator becomes 22.5.

**Interpretation**

Higher HOMA-IR values indicate greater insulin resistance. While cutoffs vary by population and laboratory, general guidelines suggest:
- HOMA-IR &lt;1.0: Optimal insulin sensitivity
- HOMA-IR 1.0-2.9: Early/mild insulin resistance
- HOMA-IR ≥ 2.9-3.0: Significant insulin resistance (common cutoff, though some use 2.5 or 2.6)
- HOMA-IR &gt;5.0: Severe insulin resistance

These cutoffs can vary based on ethnicity, age, BMI, and other factors.

**Clinical Applications**

HOMA-IR is used to assess insulin resistance in research and clinical settings, particularly for metabolic syndrome screening, prediabetes and type 2 diabetes risk assessment, polycystic ovary syndrome (PCOS) evaluation, and monitoring interventions aimed at improving insulin sensitivity (lifestyle changes, medications, supplements).

**Advantages**

Simple and inexpensive (requires only fasting glucose and insulin measurement), widely validated against gold-standard methods, useful for population studies and clinical screening, and correlates well with metabolic disease risk.

**Limitations**

Less accurate than hyperinsulinemic-euglycemic clamp or frequently sampled intravenous glucose tolerance test. Not validated for people with diabetes taking insulin or certain medications. Results can vary between insulin assays. Requires proper fasting (typically 8-12 hours). May not reflect postprandial insulin resistance.

**HOMA-β (Beta-Cell Function)**

A related calculation, HOMA-β, estimates pancreatic beta-cell function: HOMA-β = (360 × Fasting Insulin) / (Fasting Glucose - 63). This assesses the ability of beta cells to secrete insulin. Lower values indicate reduced beta-cell function.

**Research Use**

In clinical trials evaluating supplements or interventions for metabolic health (magnesium, omega-3s, probiotics, dietary interventions), HOMA-IR is commonly used as an endpoint to assess changes in insulin sensitivity. Reductions in HOMA-IR indicate improved insulin sensitivity.',
  ARRAY['A person with fasting glucose of 100 mg/dL and fasting insulin of 10 µU/mL would have HOMA-IR = (10 × 100) / 405 = 2.5, indicating early insulin resistance.',
    'After 12 weeks of lifestyle intervention, a patient''s HOMA-IR decreased from 4.2 to 2.1, indicating improved insulin sensitivity.',
    'In a study of metformin treatment, HOMA-IR decreased significantly compared to placebo, demonstrating improved insulin sensitivity.'],
  'HOMA-IR - Suppl.me Glossary',
  'A mathematical formula quantifying insulin resistance from fasting glucose and insulin levels.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 6. Half-Life
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'halflife',
  'Half-Life',
  NULL,
  'Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body''s natural elimination processes. It is typically denoted as t½ or t₁/₂. Half-life is a key pharmacokinetic parameter that helps determine optimal dosing frequency and how long a substance remains active in the body.',
  NULL,
  ARRAY['Caffeine: Half-life of ~5 hours; effects wear off fairly quickly',
    'Vitamin C: Short half-life; multiple daily doses may be beneficial',
    'Magnesium: Varies by form; some have extended release profiles',
    'Vitamin D: Very long half-life (weeks); can be dosed weekly or even monthly',
    'Creatine: Long half-life in muscle tissue; once-daily dosing sufficient'],
  'Half-Life - Suppl.me Glossary',
  'Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body''s natural elimination processes'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 7. Hyperglycemia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'hyperglycemia',
  'Hyperglycemia',
  NULL,
  'Elevated blood glucose levels above the normal range, commonly associated with diabetes and prediabetes.',
  'Hyperglycemia refers to abnormally high blood glucose (blood sugar) levels. While exact thresholds vary by context, hyperglycemia is generally defined as fasting blood glucose &gt;100 mg/dL (5.6 mmol/L) or random blood glucose &gt;140 mg/dL (7.8 mmol/L).

**Classification**

**Mild-Moderate Hyperglycemia:** Fasting glucose 100-180 mg/dL; often asymptomatic but indicates impaired glucose regulation.

**Severe Hyperglycemia:** Glucose &gt;180-200 mg/dL; symptoms become more apparent; risk of acute complications increases.

**Diabetic Hyperglycemia:** Chronic elevation consistent with diabetes diagnosis (fasting ≥126 mg/dL or HbA1c ≥6.5%).

**Causes**

**Diabetes-Related:** Type 1 diabetes (absolute insulin deficiency), type 2 diabetes (insulin resistance and relative insulin deficiency), gestational diabetes, medication non-adherence, or incorrect insulin dosing.

**Non-Diabetic Causes:** Stress hyperglycemia (illness, surgery, trauma), medications (corticosteroids, certain antipsychotics, diuretics), hormonal disorders (Cushing''s syndrome, hyperthyroidism, acromegaly), pancreatic diseases (pancreatitis, pancreatic cancer), and excessive carbohydrate intake without adequate insulin.

**Symptoms**

**Early/Mild Symptoms:**
- Increased thirst (polydipsia)
- Frequent urination (polyuria)
- Increased hunger (polyphagia)
- Fatigue
- Blurred vision
- Headaches

**Severe/Prolonged Hyperglycemia:**
- Weight loss
- Slow-healing wounds
- Frequent infections
- Dry skin and mouth
- Ketones in urine (fruity breath odor)

**Acute Complications (Diabetic Emergencies):**

**Diabetic Ketoacidosis (DKA):** Primarily in type 1 diabetes; occurs when lack of insulin causes fat breakdown and ketone production, leading to acidosis. Symptoms include nausea, vomiting, abdominal pain, rapid breathing, confusion, and potentially coma. Life-threatening without treatment.

**Hyperosmolar Hyperglycemic State (HHS):** Primarily in type 2 diabetes; extreme hyperglycemia (often &gt;600 mg/dL) without significant ketosis, causing severe dehydration. Can lead to seizures, coma, death. More common in elderly.

**Chronic Complications**

Persistent hyperglycemia over years causes microvascular damage (retinopathy leading to blindness, nephropathy leading to kidney failure, neuropathy causing nerve damage and pain) and macrovascular damage (accelerated atherosclerosis increasing risk of heart attack, stroke, peripheral artery disease).

High glucose also promotes glycation (glucose binding to proteins), forming advanced glycation end products (AGEs) that contribute to tissue damage and aging.

**Management**

**Lifestyle:**
- Carbohydrate management (consistent timing, portion control, choosing low glycemic index foods)
- Regular physical activity (improves insulin sensitivity)
- Weight management
- Stress reduction

**Medications:**
- Insulin therapy (type 1 diabetes, advanced type 2 diabetes)
- Oral diabetes medications (metformin, sulfonylureas, SGLT2 inhibitors, etc.)
- GLP-1 receptor agonists
- Dosage adjustments based on monitoring

**Monitoring:**
- Frequent blood glucose monitoring (finger-stick or continuous glucose monitor)
- Regular HbA1c testing (every 3-6 months)
- Adjusting treatment based on patterns

**Prevention (For At-Risk Individuals):**

For those with prediabetes or at risk for diabetes, preventing hyperglycemia involves weight loss, regular exercise, healthy diet, and sometimes metformin or other preventive medications.',
  ARRAY['A person with type 2 diabetes may experience hyperglycemia (blood glucose 250 mg/dL) after eating a large carbohydrate-heavy meal without adequate medication.',
    'Someone hospitalized for surgery may develop stress hyperglycemia even without prior diabetes history, requiring temporary insulin therapy.',
    'Chronic hyperglycemia with HbA1c of 9.5% significantly increases risk of diabetic complications like retinopathy and nephropathy.'],
  'Hyperglycemia - Suppl.me Glossary',
  'Elevated blood glucose levels above the normal range, commonly associated with diabetes and prediabetes.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 8. Inflammatory Bowel Disease
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'inflammatoryboweldisease',
  'Inflammatory Bowel Disease',
  'IBD',
  'A group of chronic inflammatory conditions of the gastrointestinal tract, primarily including Crohn''s disease and ulcerative colitis. These autoimmune-mediated diseases involve inappropriate immune responses to intestinal contents, causing inflammation, ulceration, and digestive symptoms.',
  'Inflammatory Bowel Disease (IBD) includes Crohn''s disease and ulcerative colitis—conditions where the immune system attacks the digestive tract, causing chronic inflammation. Ulcerative colitis affects only the colon and rectum, causing continuous inflammation of the innermost lining. Crohn''s disease can affect any part of the GI tract from mouth to anus and causes patchy, deeper inflammation. Symptoms include abdominal pain, diarrhea (often bloody), weight loss, and fatigue. IBD is different from IBS (irritable bowel syndrome), which doesn''t involve inflammation or tissue damage.',
  NULL,
  'Inflammatory Bowel Disease - Suppl.me Glossary',
  'A group of chronic inflammatory conditions of the gastrointestinal tract, primarily including Crohn''s disease and ulcerative colitis. These autoimmune-medi'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 9. Loading Phase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'loadingphase',
  'Loading Phase',
  NULL,
  'A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or blood levels, followed by a lower maintenance dose to sustain those levels. This approach is used when a supplement takes time to accumulate in the body and when faster saturation is desirable.',
  NULL,
  ARRAY['Creatine: Loading dose of 20g/day for 5-7 days, then 3-5g/day maintenance. Achieves muscle saturation in ~1 week vs. 3-4 weeks without loading. Loading is optional but speeds up results.',
    'Vitamin D: High-dose initial protocol (e.g., 50,000 IU weekly for 8 weeks) used to rapidly correct deficiency, followed by lower maintenance dose (1,000-2,000 IU daily).',
    'Beta-alanine: Higher doses initially to saturate muscle carnosine, speeding time to full ergogenic effects.'],
  'Loading Phase - Suppl.me Glossary',
  'A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or bl'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 10. Maintenance Dose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'maintenancedose',
  'Maintenance Dose',
  NULL,
  'A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically lower than a loading dose (if used) and is designed to match the body''s elimination rate, keeping levels stable over time. The maintenance dose is the long-term, ongoing dose that most users will take indefinitely.',
  NULL,
  ARRAY['Creatine: 3-5g/day after loading phase (or from the start if no loading)',
    'Vitamin D: 1,000-2,000 IU/day after correcting deficiency',
    'Magnesium: 200-400mg/day for most individuals',
    'Omega-3s: 1-2g EPA+DHA/day for general health',
    'Vitamin B12: 1,000 mcg/day or weekly for maintenance'],
  'Maintenance Dose - Suppl.me Glossary',
  'A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically l'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 11. Metabolic Syndrome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'metabolicsyndrome',
  'Metabolic Syndrome',
  NULL,
  'A cluster of conditions including central obesity, high blood pressure, high blood sugar, and abnormal cholesterol levels that increase the risk of heart disease, stroke, and type 2 diabetes.',
  'Metabolic syndrome is defined by the presence of at least three of five metabolic abnormalities. Different organizations use slightly different criteria, but the most commonly used are from the National Cholesterol Education Program Adult Treatment Panel III (NCEP ATP III) with modifications:

**Diagnostic Criteria (≥3 of 5 required):**

1. **Central Obesity:** Waist circumference &gt;40 inches (102 cm) in men or &gt;35 inches (88 cm) in women (US criteria; varies by ethnicity)
2. **Elevated Triglycerides:** ≥150 mg/dL (1.7 mmol/L) or drug treatment for elevated triglycerides
3. **Reduced HDL Cholesterol:** &lt;40 mg/dL (1.0 mmol/L) in men or &lt;50 mg/dL (1.3 mmol/L) in women, or drug treatment for low HDL
4. **Elevated Blood Pressure:** Systolic ≥130 mmHg and/or diastolic ≥85 mmHg, or antihypertensive drug treatment
5. **Elevated Fasting Glucose:** ≥100 mg/dL (5.6 mmol/L) or drug treatment for elevated blood glucose

**Pathophysiology**

The core feature is insulin resistance—reduced cellular responsiveness to insulin, forcing the pancreas to produce more insulin to maintain normal blood glucose. This leads to hyperinsulinemia, which contributes to hypertension, dyslipidemia, and eventually beta-cell exhaustion and type 2 diabetes.

Central (visceral) obesity, particularly excess fat around abdominal organs, is strongly linked to insulin resistance and metabolic syndrome. Visceral fat is metabolically active, releasing inflammatory cytokines and free fatty acids that worsen insulin resistance.

Chronic low-grade inflammation is characteristic, with elevated levels of CRP, IL-6, and TNF-α. This inflammation contributes to insulin resistance and atherosclerosis.

**Health Consequences**

Metabolic syndrome increases risk of type 2 diabetes (5-fold), cardiovascular disease (2-3 fold increased risk of heart attack and stroke), non-alcoholic fatty liver disease (NAFLD/NASH), polycystic ovary syndrome (PCOS), sleep apnea, chronic kidney disease, and certain cancers.

**Prevalence**

Approximately 35% of US adults have metabolic syndrome. Prevalence increases with age and obesity rates.

**Treatment and Management**

**Lifestyle Modifications (First-Line):**
- Weight loss (5-10% body weight can significantly improve all components)
- Regular physical activity (≥150 min/week moderate-intensity exercise)
- Heart-healthy diet (Mediterranean diet, DASH diet)
- Smoking cessation
- Stress management

**Medications (When Needed):**
- Metformin for blood glucose management
- Statins for dyslipidemia
- Antihypertensive medications
- Sometimes fibrates for severe hypertriglyceridemia

**Supplement Research**

Several supplements have been studied for metabolic syndrome components including omega-3 fatty acids (improve triglycerides and inflammation), magnesium (improves insulin sensitivity), vitamin D, probiotics, berberine, and chromium. However, lifestyle modifications remain the most effective intervention.',
  ARRAY['A 55-year-old man with waist circumference 44 inches, blood pressure 140/90, fasting glucose 110 mg/dL, triglycerides 180 mg/dL, and HDL 35 mg/dL meets all five criteria for metabolic syndrome.',
    'After 6 months of diet and exercise, a woman with metabolic syndrome lost 20 pounds, reducing her waist circumference, blood pressure, and triglycerides, and increasing HDL—no longer meeting metabolic syndrome criteria.',
    'A person with metabolic syndrome has approximately 5 times the risk of developing type 2 diabetes compared to someone without the syndrome.'],
  'Metabolic Syndrome - Suppl.me Glossary',
  'A cluster of conditions including central obesity, high blood pressure, high blood sugar, and abnormal cholesterol levels that increase the risk of heart d'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 12. Osteomalacia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'osteomalach',
  'Osteomalacia',
  NULL,
  'Softening of the bones in adults due to defective bone mineralization, most commonly caused by severe vitamin D deficiency.',
  'Osteomalacia is the adult equivalent of rickets, characterized by impaired bone mineralization resulting in soft, weak bones prone to deformity and fracture. Unlike osteoporosis (which involves loss of mineralized bone), osteomalacia involves accumulation of unmineralized bone matrix (osteoid).

**Causes**

**Vitamin D Deficiency (Most Common in Developed Countries):**
- Inadequate sun exposure
- Insufficient dietary vitamin D intake
- Malabsorption (celiac disease, Crohn''s disease, gastric bypass, chronic pancreatitis)
- Liver disease (impairs conversion of vitamin D to 25(OH)D)
- Chronic kidney disease (impairs conversion of 25(OH)D to active 1,25(OH)₂D)
- Medications (anticonvulsants, rifampin) that increase vitamin D metabolism

**Phosphate Deficiency:**
- Hereditary hypophosphatemia
- Renal tubular disorders (Fanconi syndrome)
- Tumor-induced osteomalacia (rare tumors secreting FGF23, causing renal phosphate wasting)
- Antacid overuse (aluminum-containing antacids bind phosphate)

**Other Causes:**
- Hypophosphatasia (rare genetic disorder affecting alkaline phosphatase)
- Chronic acidosis
- Fluoride toxicity

**Pathophysiology**

When vitamin D, calcium, or phosphate levels are insufficient, new bone matrix (osteoid) cannot properly mineralize with calcium and phosphate to form strong, rigid hydroxyapatite crystals. This results in accumulation of unmineralized or poorly mineralized osteoid, making bones soft, weak, and prone to deformity under normal mechanical stress.

**Symptoms**

**Musculoskeletal:**
- Diffuse bone pain and tenderness (especially in spine, pelvis, ribs, legs)
- Muscle weakness (proximal muscles—difficulty climbing stairs, rising from chair)
- Waddling gait
- Bone deformities (vertebral compression, pelvic deformities)
- Increased fracture risk, including pseudofractures (Looser zones)

**Biochemical:**
- Symptoms of hypocalcemia (in severe cases): muscle cramps, paresthesias, tetany

Symptoms often develop gradually and may be attributed to other conditions (arthritis, fibromyalgia), delaying diagnosis.

**Diagnosis**

**Laboratory Tests:**
- Low 25(OH)D (&lt;20 ng/mL, often &lt;10 ng/mL)
- Low or low-normal serum calcium
- Low or low-normal serum phosphate
- Elevated alkaline phosphatase (indicates increased bone turnover)
- Elevated parathyroid hormone (secondary hyperparathyroidism)

**Imaging:**
- X-rays: Decreased bone density, Looser zones (pseudofractures—thin lucent lines perpendicular to cortex)
- DEXA scan: Low bone mineral density (can overlap with osteoporosis)
- Bone biopsy (rarely needed): Shows excess unmineralized osteoid; definitive diagnosis

**Treatment**

**Vitamin D Deficiency Osteomalacia:**
- High-dose vitamin D replacement (typically 50,000 IU weekly for 8-12 weeks, then maintenance dose 1,000-2,000 IU daily)
- Calcium supplementation (1,000-1,500 mg daily) if dietary intake inadequate
- Addressing underlying causes (treating malabsorption, adjusting medications)
- Adequate sun exposure when feasible

**Monitoring:**
- Serum 25(OH)D, calcium, phosphate, alkaline phosphatase, PTH
- Improvement typically seen within weeks to months
- Alkaline phosphatase normalizes as bone mineralizes

**Phosphate Deficiency Osteomalacia:**
- Oral phosphate supplementation (divided doses throughout day to improve absorption)
- Active vitamin D (calcitriol) to enhance calcium absorption
- Treatment of underlying renal disorders

**Outcomes**

With appropriate treatment, symptoms typically improve within weeks to months. Bone pain and muscle weakness often resolve first. Radiographic healing (disappearance of pseudofractures, improved mineralization) may take months. Long-standing deformities may be permanent.

**Prevention**

- Adequate vitamin D intake (800-1,000 IU daily for most adults, higher for at-risk individuals)
- Regular sun exposure (15-30 minutes several times weekly, depending on skin tone and latitude)
- Dietary sources (fortified foods, fatty fish)
- Screening high-risk populations (elderly, homebound, dark-skinned individuals in northern latitudes, those with malabsorption)
- Monitoring vitamin D levels in patients on medications affecting vitamin D metabolism

**Distinction from Osteoporosis**

Osteoporosis involves loss of normally mineralized bone (low bone mass), while osteomalacia involves defective mineralization of new bone. Both cause low bone density on DEXA, but osteomalacia has biochemical abnormalities (low vitamin D, elevated alkaline phosphatase, elevated PTH) and responds to vitamin D/mineral replacement, whereas osteoporosis does not.',
  ARRAY['A 65-year-old homebound woman with chronic diffuse bone pain and vitamin D level of 8 ng/mL likely has osteomalacia, which improves with high-dose vitamin D supplementation.',
    'A patient post-gastric bypass surgery develops osteomalacia due to vitamin D and calcium malabsorption, requiring lifelong supplementation.',
    'Looser zones (pseudofractures) visible on X-ray of the pelvis or femur are pathognomonic for osteomalacia.'],
  'Osteomalacia - Suppl.me Glossary',
  'Softening of the bones in adults due to defective bone mineralization, most commonly caused by severe vitamin D deficiency.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 13. Pancreatitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'pancreatitis',
  'Pancreatitis',
  NULL,
  'Inflammation of the pancreas, which can be acute or chronic, causing digestive enzyme activation within the pancreas and potentially leading to serious complications.',
  'Pancreatitis is inflammation of the pancreas—a large gland behind the stomach that produces digestive enzymes and hormones (insulin, glucagon). When the pancreas becomes inflamed, digestive enzymes that are normally released into the small intestine become activated while still in the pancreas, causing damage to pancreatic tissue.

**Types**

**Acute Pancreatitis:** Sudden inflammation that usually resolves within days to weeks with appropriate treatment. Severity ranges from mild (self-limiting with full recovery) to severe (with complications like organ failure, pancreatic necrosis, and death in severe cases).

**Chronic Pancreatitis:** Long-standing inflammation causing permanent structural damage and progressive loss of pancreatic function. This can lead to diabetes (from loss of insulin-producing cells) and malabsorption (from loss of enzyme-producing cells).

**Causes**

**Most Common:**
- Gallstones (40%): Obstruction of the pancreatic duct
- Alcohol (30%): Heavy, prolonged alcohol consumption
- Hypertriglyceridemia: Very high triglycerides (&gt;1000 mg/dL) can trigger acute pancreatitis

**Other Causes:**
- Medications (certain antibiotics, diuretics, immunosuppressants)
- Trauma or surgery
- Infections
- Hypercalcemia (high blood calcium)
- Genetic mutations (hereditary pancreatitis, cystic fibrosis)
- Autoimmune pancreatitis
- Pancreatic cancer or structural abnormalities
- Idiopathic (10-20%): No identifiable cause

**Symptoms**

**Acute Pancreatitis:**
- Severe upper abdominal pain (often radiating to the back)
- Nausea and vomiting
- Fever
- Rapid pulse
- Abdominal tenderness and distension
- In severe cases: hypotension, respiratory distress, altered mental status

**Chronic Pancreatitis:**
- Recurrent or persistent upper abdominal pain
- Weight loss (malabsorption of nutrients)
- Steatorrhea (fatty, foul-smelling stools)
- Diabetes (from loss of insulin production)
- Jaundice (if bile duct obstruction)

**Diagnosis**

Diagnosed based on clinical symptoms plus elevated pancreatic enzymes (lipase and amylase ≥3 times upper limit of normal), imaging findings on CT or MRI showing pancreatic inflammation or complications, and sometimes endoscopic ultrasound.

**Treatment**

**Acute Pancreatitis:**
- Hospitalization with NPO (nothing by mouth) initially
- IV fluids for hydration
- Pain management
- Nutritional support (enteral nutrition preferred over parenteral)
- Treatment of underlying cause (e.g., removing gallstones, stopping alcohol)
- Monitoring and management of complications

**Chronic Pancreatitis:**
- Pain management
- Pancreatic enzyme replacement therapy (for malabsorption)
- Diabetes management (insulin if needed)
- Alcohol cessation (critical)
- Low-fat diet
- Fat-soluble vitamin supplementation (A, D, E, K)
- Sometimes procedures or surgery for complications

**Complications**

Pseudocysts (fluid collections), infected pancreatic necrosis, sepsis, organ failure (kidney, lung, cardiovascular), diabetes, malabsorption and nutritional deficiencies, chronic pain, and pancreatic cancer risk (in chronic pancreatitis).

**Supplement Considerations**

In chronic pancreatitis with malabsorption, supplementation with pancreatic enzymes and fat-soluble vitamins is essential. For prevention, avoiding alcohol and managing triglycerides (with omega-3 supplementation or medications if needed) may reduce risk. Antioxidant therapy has been studied with mixed results.',
  ARRAY['A patient presenting with sudden severe upper abdominal pain after a bout of heavy drinking, with lipase 5 times normal, likely has acute alcoholic pancreatitis.',
    'Someone with chronic pancreatitis may experience recurrent pain, weight loss despite adequate food intake, and fatty stools due to pancreatic insufficiency.',
    'Patients with triglyceride levels &gt;1000 mg/dL are at risk for acute pancreatitis and may benefit from triglyceride-lowering therapy.'],
  'Pancreatitis - Suppl.me Glossary',
  'Inflammation of the pancreas, which can be acute or chronic, causing digestive enzyme activation within the pancreas and potentially leading to serious com'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 14. Prediabetes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'prediabetes',
  'Prediabetes',
  NULL,
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as type 2 diabetes. It represents an increased risk for developing diabetes and cardiovascular disease.',
  'Prediabetes is a metabolic state between normal glucose regulation and type 2 diabetes, characterized by impaired fasting glucose (IFG), impaired glucose tolerance (IGT), or elevated HbA1c. Without intervention, 15-30% of people with prediabetes will develop type 2 diabetes within 5 years.

**Diagnostic Criteria (Any One of Three):**

1. **Impaired Fasting Glucose (IFG):** Fasting plasma glucose 100-125 mg/dL (5.6-6.9 mmol/L)
2. **Impaired Glucose Tolerance (IGT):** 2-hour plasma glucose during oral glucose tolerance test 140-199 mg/dL (7.8-11.0 mmol/L)
3. **Elevated HbA1c:** 5.7-6.4% (39-47 mmol/mol)

Diabetes is diagnosed when fasting glucose ≥126 mg/dL, 2-hour glucose ≥200 mg/dL, or HbA1c ≥6.5%.

**Pathophysiology**

Prediabetes develops due to insulin resistance (cells become less responsive to insulin) and progressive beta-cell dysfunction (pancreatic cells that produce insulin begin to fail). The body initially compensates by producing more insulin (hyperinsulinemia), maintaining near-normal blood glucose. Over time, beta cells can''t keep up, and blood glucose begins to rise into the prediabetic and eventually diabetic range.

**Risk Factors**

Overweight/obesity (especially abdominal obesity), physical inactivity, family history of type 2 diabetes, age ≥45 years, history of gestational diabetes, PCOS, certain ethnicities (African American, Hispanic/Latino, Native American, Asian American, Pacific Islander), high blood pressure, low HDL cholesterol or high triglycerides, and cardiovascular disease.

**Health Consequences**

Increased risk of progression to type 2 diabetes (15-30% within 5 years), increased cardiovascular disease risk (even before progression to diabetes), higher risk of microvascular complications (retinopathy, nephropathy, neuropathy can begin in prediabetes), and association with metabolic syndrome.

**Clinical Significance**

Prediabetes is often asymptomatic—most people don''t know they have it without screening. However, it represents a critical window for intervention. Lifestyle changes during the prediabetes stage can prevent or significantly delay progression to type 2 diabetes and may even restore normal glucose regulation.

**Prevention and Treatment**

**Lifestyle Modifications (Most Effective):**
- Weight loss: 5-7% body weight reduction reduces diabetes risk by 58%
- Physical activity: ≥150 minutes/week moderate-intensity exercise
- Dietary changes: Mediterranean diet, DASH diet, or reduced calorie diet
- The Diabetes Prevention Program (DPP) showed lifestyle intervention was more effective than metformin in preventing diabetes

**Medications (When Appropriate):**
- Metformin: May be considered for high-risk individuals (BMI ≥35, age &lt;60, history of gestational diabetes, rapidly progressing glycemia)
- Generally reserved for those at very high risk or unable to achieve lifestyle changes

**Monitoring:**
- Annual testing of glucose/HbA1c to monitor progression
- Screening for cardiovascular risk factors
- Assessment of microvascular complications in long-standing prediabetes

**Supplement Research**

Several supplements have been studied for prediabetes management including vitamin D (especially if deficient), magnesium (improves insulin sensitivity), chromium, berberine, and omega-3 fatty acids. However, lifestyle modification remains the most evidence-based intervention.

**Reversibility**

Unlike type 2 diabetes, prediabetes is often reversible with lifestyle changes. Studies show that sustained weight loss, regular exercise, and dietary improvements can restore normal glucose metabolism in many individuals with prediabetes.',
  ARRAY['A 50-year-old with BMI 32, fasting glucose 110 mg/dL, and HbA1c 6.0% has prediabetes and should begin lifestyle intervention to prevent diabetes.',
    'In the Diabetes Prevention Program, participants who achieved 7% weight loss through diet and exercise reduced their 3-year diabetes risk by 58%.',
    'Someone with prediabetes may have HOMA-IR of 3.5, indicating significant insulin resistance that improves with weight loss and exercise.'],
  'Prediabetes - Suppl.me Glossary',
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as type 2 diabetes. It represents an increased risk f'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 15. Rheumatoid Arthritis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'rheumatoidarthritis',
  'Rheumatoid Arthritis',
  'RA',
  'An autoimmune disease causing chronic inflammation of the joints and other organs.',
  'Rheumatoid arthritis (RA) is a chronic autoimmune inflammatory disorder that primarily affects joints but can also involve other organs. In RA, the immune system mistakenly attacks the synovium (the lining of the membranes that surround the joints), causing painful swelling that can eventually result in bone erosion and joint deformity.

Unlike osteoarthritis, which is caused by mechanical wear and tear, RA is an inflammatory disease driven by immune system dysfunction.

**Disease Mechanism**

RA develops through a complex interplay of genetic and environmental factors. The immune system produces autoantibodies (rheumatoid factor and anti-CCP antibodies) that target components of the joint lining. Immune cells infiltrate the synovium, releasing inflammatory cytokines including TNF-α, IL-6, and IL-1, creating chronic inflammation in the joint.

The inflamed synovium forms pannus—abnormal tissue that invades and destroys cartilage and bone, leading to progressive joint damage, erosion, and deformity.

**Symptoms**

Joint symptoms typically affect small joints symmetrically (both hands, both feet) and include pain, swelling, warmth, stiffness (especially morning stiffness lasting &gt;30-60 minutes), reduced range of motion, and eventual deformity with progression.

Systemic symptoms include fatigue, low-grade fever, weight loss, rheumatoid nodules (firm lumps under skin), and extra-articular manifestations affecting eyes, lungs, heart, blood vessels, and other organs.

**Treatment**

Modern treatment aims for early aggressive control to prevent joint damage. Disease-modifying antirheumatic drugs (DMARDs) like methotrexate are the cornerstone. Biologic DMARDs target specific inflammatory pathways (TNF-α inhibitors, IL-6 inhibitors, etc.). NSAIDs and corticosteroids provide symptom relief. Physical therapy and exercise maintain function. Surgery may be needed for severe joint damage.

**Supplement Research**

Some supplements studied for RA include omega-3 fatty acids (modest anti-inflammatory effects), vitamin D (many RA patients deficient), curcumin (anti-inflammatory properties), and probiotics (immune modulation). Supplements should complement, not replace, disease-modifying medications.',
  ARRAY['A patient with early RA may experience symmetric swelling and stiffness in both wrists and hands, improving with methotrexate treatment.',
    'Long-standing RA can lead to characteristic hand deformities like ulnar deviation and swan-neck deformities.',
    'RA patients often have elevated inflammatory markers (ESR, CRP) and positive anti-CCP antibodies.'],
  'Rheumatoid Arthritis - Suppl.me Glossary',
  'An autoimmune disease causing chronic inflammation of the joints and other organs.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 16. Rickets
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'rickets',
  'Rickets',
  NULL,
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency, resulting in soft, weak bones and skeletal deformities.',
  'Rickets is a bone disease that occurs in growing children when bones fail to mineralize properly, causing them to become soft, weak, and deformed. The adult equivalent is osteomalacia. Rickets primarily affects the growth plates (areas of growing tissue near the ends of long bones), leading to characteristic skeletal abnormalities.

**Causes**

**Vitamin D Deficiency (Most Common):**
- Inadequate sun exposure (vitamin D is synthesized in skin from sunlight)
- Inadequate dietary vitamin D intake
- Dark skin pigmentation (requires more sun exposure to produce vitamin D)
- Exclusive breastfeeding without vitamin D supplementation
- Malabsorption disorders (celiac disease, inflammatory bowel disease, cystic fibrosis)
- Liver or kidney disease (impairs vitamin D activation)

**Calcium Deficiency:**
- Very low dietary calcium intake (rare in developed countries)
- Often occurs alongside vitamin D deficiency

**Phosphate Deficiency:**
- Hereditary hypophosphatemic rickets (genetic disorder causing kidney phosphate wasting)
- Tumor-induced osteomalacia
- Certain medications or renal tubular disorders

**Pathophysiology**

Vitamin D is essential for calcium absorption from the gut. Without adequate vitamin D, calcium absorption is impaired, leading to low blood calcium levels (hypocalcemia). The body responds by releasing parathyroid hormone (PTH) to maintain blood calcium, which pulls calcium from bones and prevents bone mineralization. In growing children, this causes the characteristic features of rickets.

Insufficient calcium or phosphate directly impairs bone mineralization, as both minerals are required to form hydroxyapatite crystals in bone matrix.

**Symptoms and Signs**

**Skeletal:**
- Delayed closure of fontanelles (soft spots on infant skulls)
- Craniotabes (soft, thin skull bones)
- Frontal bossing (prominent forehead)
- Rachitic rosary (beading of ribs at costochondral junctions)
- Bowed legs (genu varum) or knock-knees (genu valgum)
- Widening of wrists and ankles
- Spinal curvature (kyphosis, scoliosis)
- Short stature and growth delays

**Other Symptoms:**
- Delayed motor milestones (sitting, crawling, walking)
- Muscle weakness and hypotonia
- Bone pain and tenderness
- Dental problems (delayed tooth eruption, enamel defects)
- In severe cases: seizures from hypocalcemia, cardiomyopathy

**Diagnosis**

Clinical presentation (skeletal deformities, delayed growth), X-rays showing characteristic changes (widened growth plates, fraying of metaphyses, decreased bone density, bowing deformities), and laboratory findings including low 25(OH)D (vitamin D deficiency rickets), low serum calcium and/or phosphate, elevated alkaline phosphatase, elevated parathyroid hormone.

**Treatment**

**Vitamin D Deficiency Rickets:**
- High-dose vitamin D supplementation (typically 2,000-6,000 IU daily or higher for weeks to months)
- Calcium supplementation if dietary intake inadequate
- Sun exposure (when safe)
- Addressing underlying causes (malabsorption, dietary deficiency)
- Monitoring vitamin D, calcium, phosphate, alkaline phosphatase, PTH

**Calcium Deficiency Rickets:**
- Calcium supplementation with adequate vitamin D

**Hypophosphatemic Rickets:**
- Phosphate supplementation with active vitamin D (calcitriol)
- May require newer treatments (burosumab for X-linked hypophosphatemic rickets)

**Prognosis**

With early diagnosis and treatment, rickets is reversible. Bone deformities often improve or resolve, though severe or long-standing deformities may be permanent. Some children may require orthopedic interventions for severe skeletal deformities.

**Prevention**

- Adequate vitamin D supplementation (AAP recommends 400 IU daily for all infants and children)
- Adequate sun exposure (15-30 minutes several times per week, depending on skin tone and latitude)
- Dietary sources of vitamin D (fortified milk, fatty fish)
- Adequate calcium and phosphate intake
- Screening and treatment of at-risk populations (exclusively breastfed infants, dark-skinned children in northern latitudes, children with malabsorption)',
  ARRAY['An exclusively breastfed infant without vitamin D supplementation may develop rickets by 6-12 months of age, presenting with delayed fontanelle closure and rachitic rosary.',
    'A child with celiac disease and vitamin D malabsorption may develop rickets despite adequate dietary vitamin D intake.',
    'Treatment with 2,000 IU vitamin D daily for 2-3 months typically normalizes vitamin D levels and begins healing of rickets, with improvement visible on X-rays.'],
  'Rickets - Suppl.me Glossary',
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency, resulting in soft, weak bones and skeletal deformities.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 17. Ulcerative Colitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'ulcerativecolitis',
  'Ulcerative Colitis',
  'UC',
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum.',
  'Ulcerative colitis (UC) is a type of inflammatory bowel disease (IBD) characterized by chronic inflammation and ulceration of the innermost lining (mucosa) of the colon (large intestine) and rectum.

Unlike Crohn''s disease, which can affect any part of the digestive tract and involves all layers of the bowel wall, UC is limited to the colon and rectum and affects only the mucosal layer. The inflammation typically begins in the rectum and extends continuously upward through the colon.

**Disease Mechanism**

UC develops through a complex interaction of genetic susceptibility, immune dysregulation, environmental factors, and gut microbiome alterations:

**Immune System Dysfunction:** In UC, the immune system mounts an inappropriate and persistent inflammatory response against the gut''s own tissues and/or commensal bacteria in the colon. This involves increased production of pro-inflammatory cytokines such as TNF-α, IL-6, and IL-1, infiltration of immune cells (neutrophils, T cells, macrophages) into the colonic mucosa, and impaired regulation of the inflammatory response.

**Mucosal Damage:** Chronic inflammation leads to ulceration of the colonic lining, crypt abscesses (accumulations of pus in intestinal glands), depletion of goblet cells and mucus production, and impaired barrier function, increasing permeability.

**Gut Microbiome Alterations:** UC is associated with dysbiosis—an imbalance in the gut microbiome with reduced diversity and altered composition, particularly decreased levels of beneficial butyrate-producing bacteria.

**Classification by Extent:**
- **Ulcerative proctitis:** Inflammation limited to the rectum (~30% of cases); generally mildest form
- **Left-sided colitis (distal colitis):** Inflammation extends from the rectum up to the splenic flexure (~40%)
- **Extensive colitis (pancolitis):** Inflammation extends beyond the splenic flexure or involves the entire colon (~30%); associated with more severe symptoms

**Symptoms**

**Gastrointestinal Symptoms:**
- Bloody diarrhea (most common symptom)
- Rectal bleeding
- Urgent bowel movements
- Tenesmus (feeling of incomplete evacuation)
- Abdominal pain and cramping (often left-sided)
- Mucus in stool

**Systemic Symptoms:**
- Fatigue and weakness
- Fever (during flares)
- Weight loss
- Anemia (from chronic blood loss or chronic disease)
- Dehydration (from diarrhea)

**Extra-Intestinal Manifestations:** Up to 25-40% of UC patients experience symptoms outside the digestive tract including arthritis, skin conditions (erythema nodosum, pyoderma gangrenosum), eye problems (uveitis, episcleritis), and liver issues (primary sclerosing cholangitis in ~5%).

**Diagnosis**

UC diagnosis is based on a combination of clinical presentation, endoscopic findings, and histopathology. Colonoscopy with biopsy is the gold standard, showing continuous inflammation starting from the rectum, friable mucosa, ulcers, and loss of vascular pattern. Laboratory tests show elevated CRP and ESR, elevated fecal calprotectin, anemia, and elevated platelets.

**Treatment**

**Medications:** 5-Aminosalicylates (mesalamine, sulfasalazine) are first-line for mild to moderate UC. Corticosteroids for moderate to severe flares. Immunomodulators (azathioprine) as steroid-sparing agents. Biologic therapies (TNF-α inhibitors, integrin inhibitors, IL-12/23 inhibitors) and JAK inhibitors for more severe disease.

**Surgical Treatment:** Colectomy (removal of the colon) is curative for UC but involves major surgery. Indications include severe disease refractory to medical therapy, toxic megacolon, perforation, dysplasia/cancer, or intolerable medication side effects.

**Diet and Lifestyle Management**

During flares, a low-fiber, low-residue diet helps reduce bowel movements. In remission, gradually reintroduce high-fiber foods and consider a Mediterranean diet. Identify personal trigger foods, ensure adequate nutrition (calories, protein, vitamins especially B12, folate, vitamin D, iron), maintain hydration, manage stress, and engage in regular exercise.

**Supplement Research**

Some supplements have been studied as adjunctive therapies for UC:
- **Probiotics:** VSL#3 (multi-strain probiotic) has evidence for maintaining remission
- **Curcumin:** Some evidence for reducing inflammation and maintaining remission when added to 5-ASA therapy
- **Omega-3 fatty acids:** Anti-inflammatory properties; mixed evidence for UC
- **Vitamin D:** Many UC patients are deficient; supplementation may have immunomodulatory benefits
- **Butyrate:** Short-chain fatty acid that nourishes colonocytes; some evidence as enema for distal UC

Supplements should complement, not replace, evidence-based medical treatments.

**Potential Complications**

Severe bleeding, toxic megacolon (life-threatening dilation), perforation, increased colon cancer risk (especially with extensive disease and longer duration), osteoporosis (from chronic inflammation and corticosteroid use), and increased risk of blood clots.

**Prognosis**

UC is a chronic disease with a relapsing-remitting course. Most patients alternate between periods of remission and active disease. Approximately 50% are in remission at any given time. Cumulative colectomy rates are ~10-15% at 10 years and ~25-30% at 25 years. Modern biologic therapies have improved outcomes and reduced surgery rates. Colorectal cancer risk begins increasing after 8-10 years of disease.',
  ARRAY['A 25-year-old with ulcerative proctitis experiencing bloody stools and urgency may respond well to topical mesalamine suppositories.',
    'A patient with extensive UC refractory to conventional therapy may achieve remission with biologic therapy like infliximab.',
    'Long-term UC patients require surveillance colonoscopy every 1-2 years after 8-10 years of disease to monitor for dysplasia.'],
  'Ulcerative Colitis - Suppl.me Glossary',
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum.'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 18. Essential Amino Acids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'essentialaminoacids',
  'Essential Amino Acids',
  'EAAs',
  'The nine amino acids that the human body cannot synthesize in sufficient quantities and must be obtained through diet: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.',
  'Essential amino acids are "essential" not because they''re more important than other amino acids, but because they must come from external sources. Without adequate intake of all nine EAAs, the body cannot efficiently build new proteins, leading to various health problems.

## The Nine Essential Amino Acids

**1. Histidine**
- **Primary Functions:** Produces histamine (immune response), maintains myelin sheaths (nerve protection), tissue growth and repair
- **Typical Daily Need:** ~10-14 mg/kg body weight
- **Good Sources:** Meat, fish, poultry, dairy, whole grains
- **Special Notes:** Particularly important for children''s growth; involved in red and white blood cell production

**2. Isoleucine (BCAA)**
- **Primary Functions:** Muscle metabolism, immune function, hemoglobin production, energy regulation
- **Typical Daily Need:** ~15-20 mg/kg body weight
- **Good Sources:** Eggs, chicken, fish, lentils, almonds
- **Special Notes:** One of three branched-chain amino acids; concentrated in muscle tissue

**3. Leucine (BCAA)**
- **Primary Functions:** Primary trigger for muscle protein synthesis, blood sugar regulation, wound healing, growth hormone production
- **Typical Daily Need:** ~34-42 mg/kg body weight
- **Good Sources:** Whey protein, meat, dairy, soybeans, eggs
- **Special Notes:** Most important BCAA for muscle building; threshold of ~2-3g needed to maximize protein synthesis

**4. Lysine**
- **Primary Functions:** Protein synthesis, calcium absorption, collagen and elastin production, immune function, carnitine production
- **Typical Daily Need:** ~30-38 mg/kg body weight
- **Good Sources:** Meat, fish, dairy, eggs, legumes
- **Special Notes:** Often the limiting amino acid in grain-based diets; important for bone health

**5. Methionine**
- **Primary Functions:** Metabolism, detoxification, tissue growth, zinc and selenium absorption, antioxidant production
- **Typical Daily Need:** ~10-15 mg/kg body weight (combined with cysteine)
- **Good Sources:** Eggs, fish, meat, Brazil nuts, sesame seeds
- **Special Notes:** Contains sulfur; precursor to cysteine and taurine; involved in DNA methylation

**6. Phenylalanine**
- **Primary Functions:** Precursor to tyrosine, dopamine, norepinephrine, and epinephrine; structural component of proteins
- **Typical Daily Need:** ~25-33 mg/kg body weight (combined with tyrosine)
- **Good Sources:** Meat, fish, eggs, dairy, soy products
- **Special Notes:** Important for mood regulation and cognitive function; individuals with PKU cannot metabolize it

**7. Threonine**
- **Primary Functions:** Protein balance, immune function, collagen and elastin production, fat metabolism
- **Typical Daily Need:** ~15-20 mg/kg body weight
- **Good Sources:** Cottage cheese, poultry, fish, lentils, sesame seeds
- **Special Notes:** Important for mucus production in digestive and respiratory tracts

**8. Tryptophan**
- **Primary Functions:** Precursor to serotonin and melatonin, nitrogen balance, niacin (vitamin B3) production
- **Typical Daily Need:** ~4-5 mg/kg body weight (lowest requirement)
- **Good Sources:** Turkey, chicken, milk, cheese, pumpkin seeds, oats
- **Special Notes:** Important for mood, sleep, and appetite regulation

**9. Valine (BCAA)**
- **Primary Functions:** Muscle growth and repair, energy production, cognitive function
- **Typical Daily Need:** ~24-26 mg/kg body weight
- **Good Sources:** Dairy, meat, mushrooms, peanuts, soy protein
- **Special Notes:** One of three BCAAs; involved in preventing muscle breakdown during exercise

## Why All Nine Matter

Protein synthesis follows the "limiting amino acid" principle—like a chain is only as strong as its weakest link, protein synthesis can only proceed at the rate allowed by whichever essential amino acid is in shortest supply. If even one EAA is deficient, the body cannot efficiently build new proteins, regardless of total protein intake.

## Complete vs. Incomplete Proteins

- **Complete Proteins:** Contain all nine EAAs in adequate amounts
  - Animal sources: meat, fish, poultry, eggs, dairy
  - Plant sources: quinoa, soy, buckwheat, hemp, chia seeds

- **Incomplete Proteins:** Low or lacking in one or more EAAs
  - Grains: often low in lysine
  - Legumes: often low in methionine
  - Solution: Combine complementary proteins (e.g., rice and beans)

## EAA Supplements

EAA supplements provide all nine essential amino acids in free form, allowing for rapid absorption. They may be beneficial when:
- Maximizing protein synthesis with minimal calories
- Supporting muscle recovery without full meal
- Addressing specific dietary restrictions
- Enhancing protein quality of lower-quality protein sources',
  NULL,
  'Essential Amino Acids - Suppl.me Glossary',
  'The nine amino acids that the human body cannot synthesize in sufficient quantities and must be obtained through diet: histidine, isoleucine, leucine, lysi'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 19. Free Radicals
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'freeradicals',
  'Free Radicals',
  NULL,
  'Highly reactive molecules or atoms that contain one or more unpaired electrons, making them unstable and capable of damaging cells, proteins, and DNA through oxidative reactions.',
  'Free radicals are a natural byproduct of normal metabolism and cellular function. In controlled amounts, they serve important roles in immune function and cell signaling. However, when free radical production exceeds the body''s antioxidant defenses, they can cause oxidative damage that contributes to aging and disease.

## Types of Free Radicals

**Reactive Oxygen Species (ROS):** Most common and well-studied free radicals
- **Superoxide Radical (O₂•⁻):** Formed during cellular respiration in mitochondria; first step in ROS production cascade
- **Hydroxyl Radical (•OH):** Extremely reactive; can damage virtually any biomolecule it encounters
- **Hydrogen Peroxide (H₂O₂):** Not technically a free radical but easily converts to highly reactive radicals
- **Singlet Oxygen (¹O₂):** Excited form of oxygen; particularly damaging to lipids
- **Peroxyl Radical (ROO•):** Propagates lipid peroxidation in cell membranes

**Reactive Nitrogen Species (RNS):**
- **Nitric Oxide (NO•):** Important signaling molecule but can form damaging compounds
- **Peroxynitrite (ONOO⁻):** Formed when NO• reacts with superoxide; highly damaging

## Sources of Free Radicals

**Internal (Endogenous) Sources:**
- **Cellular Respiration:** Mitochondria naturally produce superoxide during ATP generation (about 1-2% of oxygen consumed becomes superoxide; normal, unavoidable part of energy production)
- **Immune Response:** White blood cells deliberately generate ROS to kill pathogens
- **Inflammatory Processes:** Inflammation increases free radical production
- **Metabolic Processes:** Various enzymatic reactions produce ROS as byproducts
- **Exercise:** Increases oxygen consumption and ROS production (but also upregulates antioxidant defenses)

**External (Exogenous) Sources:**
- UV Radiation, Pollution, Tobacco Smoke, Radiation, Certain Foods, Pesticides and Chemicals

## How Free Radicals Cause Damage

**Chain Reactions, Lipid Peroxidation, Protein Oxidation, DNA Damage**

## The Body''s Defense Systems

**Enzymatic Antioxidants:** Superoxide Dismutase (SOD), Catalase, Glutathione Peroxidase

**Non-Enzymatic Antioxidants:** Glutathione, Vitamin C, Vitamin E, Carotenoids, Polyphenols, Coenzyme Q10

## The Oxidative Balance

Health depends on balance between free radical production and antioxidant defenses:
- **Normal Balance:** Beneficial signaling, immune function, cellular regulation
- **Oxidative Stress:** Excess free radicals overwhelm defenses; contributes to disease and aging
- **Excessive Antioxidants:** May impair beneficial free radical functions like immune response and exercise adaptations',
  NULL,
  'Free Radicals - Suppl.me Glossary',
  'Highly reactive molecules or atoms that contain one or more unpaired electrons, making them unstable and capable of damaging cells, proteins, and DNA throu'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 20. Glutathione Peroxidase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'glutathioneperoxidase',
  'Glutathione Peroxidase',
  'GPx',
  'A family of selenium-dependent antioxidant enzymes that catalyze the reduction of hydrogen peroxide and lipid peroxides, protecting cells from oxidative damage.',
  'Glutathione peroxidase (GPx) is one of the body''s primary antioxidant enzyme systems, working alongside superoxide dismutase (SOD) and catalase to neutralize reactive oxygen species and prevent oxidative damage.

## Function and Mechanism

GPx enzymes use glutathione (GSH) as a cofactor to reduce harmful peroxides:
- Converts hydrogen peroxide (H₂O₂) to water (H₂O)
- Reduces lipid peroxides to their corresponding alcohols
- Protects cell membranes from lipid peroxidation
- Prevents oxidative damage to proteins and DNA

**Chemical Reaction:**
2 GSH + H₂O₂ → GSSG + 2 H₂O

Where GSH is reduced glutathione and GSSG is oxidized glutathione (which can be recycled back to GSH by glutathione reductase).

## Types of Glutathione Peroxidase

There are eight GPx isoforms in mammals, with different locations and functions:

**GPx1 (Cellular/Cytosolic):** Most abundant; found in cytoplasm of all cells; general antioxidant protection

**GPx2 (Gastrointestinal):** Expressed in GI tract; protects intestinal epithelium

**GPx3 (Plasma/Extracellular):** Found in blood plasma; protects against circulating oxidants

**GPx4 (Phospholipid Hydroperoxide):** Unique ability to reduce lipid peroxides in cell membranes; prevents ferroptosis (iron-dependent cell death)

## Selenium Dependency

GPx enzymes contain selenium in the form of selenocysteine at their active sites:
- Selenium is essential for GPx synthesis and function
- Selenium deficiency impairs GPx activity
- This is why selenium is considered an essential antioxidant nutrient
- Adequate selenium intake maintains optimal GPx levels

## Role in Health and Disease

**Cardiovascular Health:** GPx protects LDL cholesterol and arterial walls from oxidation

**Cancer Prevention:** Reduces oxidative DNA damage; selenium/GPx status linked to cancer risk

**Immune Function:** Protects immune cells from self-generated ROS

**Aging:** GPx activity often declines with age; may contribute to age-related diseases

**Neurological Health:** Protects brain from oxidative stress

## Factors Affecting GPx Activity

**Increase GPx:**
- Adequate selenium intake (55-200 mcg/day)
- Antioxidant-rich diet
- Regular exercise (upregulates antioxidant enzymes)
- Adequate protein intake (for glutathione synthesis)

**Decrease GPx:**
- Selenium deficiency
- Oxidative stress overwhelming capacity
- Aging
- Chronic diseases
- Smoking and alcohol

## Measurement

GPx activity can be measured in:
- Red blood cells (most common)
- Plasma
- Tissue samples

Often measured alongside selenium status and other antioxidant markers.

## Clinical Significance

Low GPx activity associated with:
- Increased cardiovascular disease risk
- Cancer susceptibility
- Inflammatory diseases
- Neurodegenerative diseases
- Accelerated aging

## Selenium Supplementation

- Can increase GPx activity if selenium deficient
- 200 mcg/day selenium shown to optimize GPx activity
- Excess selenium (>400 mcg/day long-term) can be toxic
- Best to assess selenium status before high-dose supplementation',
  NULL,
  'Glutathione Peroxidase - Suppl.me Glossary',
  'A family of selenium-dependent antioxidant enzymes that catalyze the reduction of hydrogen peroxide and lipid peroxides, protecting cells from oxidative da'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 21. Observational Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'observationalstudy',
  'Observational Study',
  NULL,
  'A research study where investigators observe participants and measure outcomes without manipulating or assigning interventions, allowing researchers to study associations and patterns as they naturally occur.',
  'In observational studies, researchers do not control or assign the exposure or intervention. Instead, they observe and record what happens naturally, making these studies valuable for examining real-world patterns, long-term outcomes, and situations where randomized controlled trials would be unethical or impractical.

## Types of Observational Studies

- **Cohort Studies:** Follow groups over time to see who develops outcomes of interest; can be prospective (forward-looking) or retrospective (looking back)
- **Case-Control Studies:** Compare people with a condition (cases) to similar people without it (controls), looking back at exposures
- **Cross-Sectional Studies:** Examine data from a population at one specific point in time
- **Ecological Studies:** Analyze data at the population or group level rather than individual level

## Advantages

- **Real-World Evidence:** Captures how interventions work in actual practice, not controlled conditions
- **Long-Term Follow-Up:** Can track outcomes over years or decades
- **Ethical Flexibility:** Allows study of exposures that couldn''t ethically be assigned
- **Cost-Effective:** Generally less expensive than RCTs
- **Multiple Outcomes:** Can examine many different outcomes simultaneously
- **Rare Outcomes:** Useful for studying uncommon conditions or events

## Limitations

- **Confounding:** Other variables may influence the observed associations
- **Selection Bias:** How participants are chosen may affect results
- **Causation vs. Association:** Can show relationships but not definitively prove cause and effect
- **Recall Bias:** Participants may not accurately remember past exposures
- **Measurement Error:** Without standardized interventions, exposure measurement may vary

## Evidence Hierarchy

In the hierarchy of scientific evidence, observational studies generally rank below randomized controlled trials but above case reports and expert opinion. Well-designed observational studies, particularly large prospective cohort studies, can provide valuable evidence, especially when:
- RCTs are not feasible or ethical
- Long-term outcomes need to be studied
- Real-world effectiveness needs to be assessed
- Rare events or outcomes are being investigated',
  NULL,
  'Observational Study - Suppl.me Glossary',
  'A research study where investigators observe participants and measure outcomes without manipulating or assigning interventions, allowing researchers to stu'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 22. Systematic Review
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'systematicreview',
  'Systematic Review',
  NULL,
  'A comprehensive, structured research methodology that systematically identifies, evaluates, and synthesizes all available evidence on a specific research question using predefined, transparent, and reproducible methods.',
  'A systematic review is considered one of the highest levels of evidence in medical and scientific research. Unlike narrative reviews that may be subjective, systematic reviews follow rigorous protocols to minimize bias and provide reliable conclusions.

## Key Characteristics

- **Predefined Protocol:** Research questions, inclusion/exclusion criteria, and analysis methods are established before the review begins
- **Comprehensive Search:** Multiple databases and sources are systematically searched to find all relevant studies
- **Quality Assessment:** Each included study is critically appraised for methodological quality and risk of bias
- **Transparent Reporting:** All methods, decisions, and findings are clearly documented and reproducible
- **Objective Synthesis:** Results are combined systematically, often using statistical methods (meta-analysis)

## The Systematic Review Process

1. Formulate Question using PICO framework
2. Develop Protocol (often registered publicly)
3. Search Literature systematically
4. Screen Studies by two independent reviewers
5. Extract Data systematically
6. Assess Quality and risk of bias
7. Synthesize Results narratively or statistically
8. Draw Conclusions and assess strength of evidence

## Systematic Review vs. Meta-Analysis

- **Systematic Review:** The overall process of systematically identifying and evaluating evidence
- **Meta-Analysis:** A statistical technique used within some systematic reviews to quantitatively combine results
- All meta-analyses should be based on systematic reviews, but not all systematic reviews include meta-analysis',
  NULL,
  'Systematic Review - Suppl.me Glossary',
  'A comprehensive, structured research methodology that systematically identifies, evaluates, and synthesizes all available evidence on a specific research q'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 23. Third-Party Testing
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'thirdpartytesting',
  'Third-Party Testing',
  NULL,
  'Quality verification performed by an independent laboratory or certification organization that has no financial interest in the supplement manufacturer or product outcome.',
  'Unlike pharmaceuticals, dietary supplements in many countries don''t require pre-market approval. Third-party testing provides independent verification of supplement quality, purity, and accuracy.

## Major Third-Party Testing Organizations

**USP (United States Pharmacopeia):** Tests for ingredient accuracy, purity, potency, and manufacturing quality

**ConsumerLab:** Independent testing service that purchases supplements off the shelf and publishes detailed reports

**NSF International:** Tests products and inspects manufacturing facilities

**Informed Choice/Informed Sport:** Specializes in testing for banned substances for athletes

**Labdoor:** Tests products and ranks them based on quality, accuracy, and value

## What Third-Party Testing Evaluates

- Identity testing, Potency analysis, Contaminant screening, Microbial testing, Banned substance testing, Pesticide testing, Dissolution testing

## Benefits

Consumer protection, Quality verification, Contaminant detection, Brand accountability, Informed choices

## Limitations

Not comprehensive, Snapshot in time, Cost barrier, Voluntary participation, Different standards, No efficacy testing',
  NULL,
  'Third-Party Testing - Suppl.me Glossary',
  'Quality verification performed by an independent laboratory or certification organization that has no financial interest in the supplement manufacturer or '
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

-- 24. mTOR
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'mtor',
  'mTOR',
  'Mechanistic Target of Rapamycin',
  'A protein kinase that acts as a central regulator of cell growth, proliferation, metabolism, and protein synthesis in response to nutrients, growth factors, and cellular energy.',
  'The mechanistic target of rapamycin (mTOR) is a serine/threonine protein kinase that functions as the catalytic subunit of two distinct protein complexes: mTORC1 and mTORC2. mTOR serves as a master regulator of cell growth and metabolism.

## Two mTOR Complexes

**mTORC1:** Promotes anabolic processes (protein synthesis, lipid synthesis, cell growth). Sensitive to nutrients, growth factors, and energy status. Key roles include muscle protein synthesis, ribosome biogenesis, lipid synthesis, and inhibition of autophagy.

**mTORC2:** Cell survival, metabolism, cytoskeletal organization. Less well-understood compared to mTORC1.

## Regulation of mTORC1

**Activators:** Amino acids (especially leucine), insulin and growth factors, high energy status, resistance exercise

**Inhibitors:** Nutrient deprivation, energy stress, hypoxia, cellular stress, rapamycin

## mTOR and Protein Synthesis

When activated, mTORC1 promotes protein synthesis through S6K1 phosphorylation, 4E-BP1 phosphorylation, and increased ribosome biogenesis.

**Leucine''s Special Role:** Primary trigger for mTOR activation. Requires ~2-3g leucine per meal to maximally stimulate muscle protein synthesis.

## mTOR in Muscle Growth

mTOR is central to muscle protein synthesis. Resistance training + protein intake maximally stimulates mTOR for hypertrophy.

## mTOR and Aging (The mTOR Paradox)

- **Good for Muscle:** Promotes protein synthesis, prevents sarcopenia
- **May Accelerate Aging:** Chronic overactivation associated with shortened lifespan in animal models
- **Balance:** Cycle between mTOR activation (fed, exercising) and suppression (fasted, resting)

## Modulating mTOR Through Lifestyle

**To Activate (For Muscle):** Protein intake (20-40g with 2-3g leucine), resistance training, post-workout nutrition

**To Suppress (For Longevity):** Fasting, caloric restriction, certain compounds (resveratrol, curcumin)',
  NULL,
  'mTOR - Suppl.me Glossary',
  'A protein kinase that acts as a central regulator of cell growth, proliferation, metabolism, and protein synthesis in response to nutrients, growth factors'
)
ON CONFLICT (slug) DO UPDATE SET
  term = EXCLUDED.term,
  abbreviation = EXCLUDED.abbreviation,
  definition = EXCLUDED.definition,
  expanded_explanation = EXCLUDED.expanded_explanation,
  examples = EXCLUDED.examples,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  updated_at = CURRENT_TIMESTAMP;

COMMIT;

-- Verification query
SELECT 
  slug,
  term,
  CASE 
    WHEN expanded_explanation IS NULL THEN '❌ NULL'
    WHEN LENGTH(expanded_explanation) < 50 THEN '⚠️  SHORT'
    ELSE '✅ OK'
  END as status,
  LENGTH(expanded_explanation) as content_length
FROM api.glossary_terms
WHERE slug IN (
  'atherosclerosis',
  'coenzymeq10',
  'cytokines',
  'dysbiosis',
  'homair',
  'halflife',
  'hyperglycemia',
  'inflammatoryboweldisease',
  'loadingphase',
  'maintenancedose',
  'metabolicsyndrome',
  'osteomalach',
  'pancreatitis',
  'prediabetes',
  'rheumatoidarthritis',
  'rickets',
  'ulcerativecolitis',
  'essentialaminoacids',
  'freeradicals',
  'glutathioneperoxidase',
  'observationalstudy',
  'systematicreview',
  'thirdpartytesting',
  'mtor'
)
ORDER BY slug;
