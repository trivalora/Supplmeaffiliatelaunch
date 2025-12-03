/**
 * Batch 10: Enhance glossary terms 91-100 (alphabetically)
 * Terms: Hepatic Encephalopathy, HOMA-IR, Homocysteine, Hydrolyzed, Hydroxyproline,
 *        Hyperglycemia, Hypertensive, Immune System, Inflammation, Inflammatory Bowel Disease
 *
 * Run: node scripts/enhance-glossary-batch-10.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

const enhancements = [
  {
    slug: "hepaticencephalopathy",
    why_it_matters: `Hepatic encephalopathy is a serious condition that connects liver health to brain function—important for understanding why liver support supplements exist and who truly needs them. For supplement shoppers, this matters because some supplements (like L-ornithine-L-aspartate, BCAA amino acids, and lactulose alternatives) are specifically researched for hepatic encephalopathy management. However, this is a medical condition requiring professional supervision, not a DIY supplement project. Understanding hepatic encephalopathy also explains why certain supplements are contraindicated in liver disease—protein supplements, for example, can worsen ammonia buildup. This knowledge helps you recognize when liver health claims are legitimate versus when they're marketing hype.`,
    simple_explanation: `Hepatic encephalopathy happens when a damaged liver can't properly filter toxins—especially ammonia—from the blood. Ammonia is a normal byproduct of protein digestion and gut bacteria activity, but a healthy liver quickly converts it to harmless urea for elimination. When the liver fails at this job, ammonia and other toxins accumulate and cross into the brain, causing symptoms ranging from confusion and forgetfulness to personality changes and eventually coma. Think of your liver as a water treatment plant: when it breaks down, toxins that should be filtered out start flowing to sensitive organs. The brain is especially vulnerable because ammonia directly disrupts brain cell function and energy production. Treatment involves reducing ammonia production (with lactulose, which changes gut environment) and sometimes special amino acid formulas.`,
    key_points: `### Key Facts About Hepatic Encephalopathy

- **Ammonia is the main culprit**: The liver normally converts ammonia to urea; liver failure allows ammonia to accumulate and damage brain function
- **Grades of severity**: Ranges from Grade 1 (subtle cognitive changes) to Grade 4 (coma)—even mild forms significantly impair quality of life
- **Gut bacteria involvement**: Intestinal bacteria produce ammonia from protein; altering gut flora is a treatment strategy (lactulose, rifaximin)
- **Protein management**: High protein intake can worsen symptoms; branched-chain amino acid (BCAA) supplements may be better tolerated than regular protein
- **Precipitating factors**: Infections, GI bleeding, constipation, and certain medications can trigger episodes in susceptible patients`,
    common_misconceptions: [
      `**Myth:** Hepatic encephalopathy only affects people with obvious liver failure.\n**Fact:** Minimal hepatic encephalopathy (MHE) affects up to 70% of cirrhosis patients without obvious symptoms but still impairs driving ability, work performance, and quality of life. It's vastly underdiagnosed.`,
      `**Myth:** Supplements can treat hepatic encephalopathy without medical supervision.\n**Fact:** This is a serious medical condition requiring professional management. Some supplements (L-ornithine-L-aspartate, BCAAs) may help, but only as part of comprehensive medical care—not as standalone treatments.`,
      `**Myth:** People with hepatic encephalopathy should avoid all protein.\n**Fact:** Protein restriction is outdated and harmful; adequate protein is needed for healing. The approach now emphasizes moderate protein intake, plant proteins, and BCAAs which produce less ammonia than other amino acids.`,
    ],
    examples: [
      "A person with cirrhosis experiences confusion after eating a large steak; the protein load increased ammonia production beyond the liver's reduced processing capacity",
      "Lactulose is prescribed to alter gut pH and reduce ammonia-producing bacteria—a prebiotic-like approach for a medical condition",
      "BCAA supplements (leucine, isoleucine, valine) may improve cognitive function in hepatic encephalopathy because they compete with aromatic amino acids that cross into the brain",
      "Someone with minimal hepatic encephalopathy fails a driving simulation despite feeling 'fine'—subtle cognitive impairment they can't perceive",
    ],
  },
  {
    slug: "homair",
    why_it_matters: `HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is a key biomarker for metabolic health that tells you how efficiently your body responds to insulin—often years before diabetes develops. For supplement shoppers interested in blood sugar, weight management, or metabolic health, HOMA-IR is more informative than fasting glucose alone. When evaluating supplements like berberine, chromium, or cinnamon, changes in HOMA-IR indicate whether they're actually improving insulin sensitivity versus just lowering glucose. A HOMA-IR under 1.0 is optimal; 1.0-2.0 is normal; above 2.0 suggests insulin resistance. Knowing your HOMA-IR helps you catch metabolic problems early and objectively track whether interventions are working.`,
    simple_explanation: `HOMA-IR is a simple calculation that estimates how resistant your cells are to insulin. It uses two blood test values: fasting glucose and fasting insulin. The formula multiplies them together and divides by a constant. The logic is: if you need a lot of insulin to keep glucose normal, your cells are resistant (high HOMA-IR). If a little insulin keeps glucose controlled, you're sensitive (low HOMA-IR). Think of it like a car's fuel efficiency—if you need tons of gas (insulin) to travel a given distance (control glucose), there's a problem. Normal HOMA-IR is roughly 1.0; values above 2.0-2.5 indicate insulin resistance, even if your glucose and HbA1c are still in normal range. This makes HOMA-IR an early warning system for metabolic dysfunction that fasting glucose alone misses.`,
    key_points: `### Key Facts About HOMA-IR

- **Formula**: HOMA-IR = (Fasting Insulin × Fasting Glucose) ÷ 405 (with glucose in mg/dL) or ÷ 22.5 (glucose in mmol/L)
- **Reference ranges**: <1.0 optimal; 1.0-2.0 normal; >2.0-2.5 indicates insulin resistance; >3.0 significant resistance
- **Early detection**: HOMA-IR identifies insulin resistance before glucose or HbA1c becomes abnormal—can detect prediabetes risk 5-10 years earlier
- **Intervention tracking**: Useful for tracking effects of diet, exercise, or supplements on insulin sensitivity, not just glucose control
- **Requires fasting insulin**: Many standard blood panels don't include fasting insulin; you may need to specifically request it`,
    common_misconceptions: [
      `**Myth:** Normal fasting glucose means you don't have insulin resistance.\n**Fact:** In early insulin resistance, your pancreas compensates by producing more insulin, keeping glucose normal while insulin levels soar. HOMA-IR reveals this hidden resistance that glucose alone misses.`,
      `**Myth:** HOMA-IR is only relevant for diabetics.\n**Fact:** HOMA-IR is most valuable for detecting PRE-diabetic insulin resistance years before diabetes diagnosis. By the time you have diabetes, HOMA-IR has less clinical utility.`,
      `**Myth:** A single HOMA-IR measurement is definitive.\n**Fact:** HOMA-IR varies with recent diet, stress, and sleep. It's best interpreted as trends over time, and should be measured fasted under consistent conditions.`,
    ],
    examples: [
      "Someone with fasting glucose of 90 mg/dL (normal) but fasting insulin of 18 μIU/mL has HOMA-IR of 4.0—indicating significant insulin resistance despite normal glucose",
      "After 3 months of berberine (500mg 2x/day), HOMA-IR drops from 3.2 to 2.1—objective evidence that insulin sensitivity improved, not just glucose lowered",
      "An athlete with fasting glucose 85 and insulin 3 has HOMA-IR of 0.6—excellent insulin sensitivity from regular exercise and muscle mass",
      "Weight loss of 10% typically reduces HOMA-IR by 20-40%, often more effective than any supplement for improving insulin sensitivity",
    ],
  },
  {
    slug: "homocysteine",
    why_it_matters: `Homocysteine is a metabolic byproduct that serves as a sensitive marker for B vitamin status and cardiovascular risk. For supplement shoppers, homocysteine matters because elevated levels clearly indicate you need more B vitamins (B12, folate, B6)—and supplementation reliably lowers it. However, here's the twist: while high homocysteine is associated with heart disease, stroke, and cognitive decline, clinical trials lowering it with B vitamins haven't consistently reduced cardiovascular events. This doesn't mean B vitamins are worthless—it means homocysteine might be a marker rather than a direct cause. Still, checking homocysteine helps identify B vitamin deficiencies and guides supplementation, especially for vegetarians, elderly, and those with MTHFR variants.`,
    simple_explanation: `Homocysteine is an amino acid your body produces when processing methionine (from dietary protein). Normally, homocysteine is quickly recycled back to methionine (using B12 and folate) or converted to cysteine (using B6). When these B vitamins are deficient, homocysteine builds up in the blood. Elevated homocysteine damages blood vessel walls, promotes blood clots, and is linked to heart disease, stroke, and dementia. Think of homocysteine as a "metabolic stoplight"—when it's elevated, it's signaling that important methylation pathways are backed up due to B vitamin insufficiency. Healthy levels are under 10-12 μmol/L; above 15 is clearly elevated. The good news is that B vitamin supplementation reliably reduces homocysteine in most people.`,
    key_points: `### Key Facts About Homocysteine

- **B vitamin marker**: Homocysteine elevation directly reflects inadequate B12, folate, and/or B6—it's one of the best functional markers of B vitamin status
- **Cardiovascular association**: Elevated homocysteine is associated with 20-30% increased heart disease and stroke risk per 5 μmol/L elevation
- **MTHFR connection**: MTHFR gene variants impair folate metabolism, leading to higher homocysteine; methylfolate supplements may help more than folic acid
- **Treatment response**: B vitamins (B12, folate, B6) reliably lower homocysteine by 20-30% in most people—a consistent and well-documented effect
- **Controversy**: Despite reliably lowering homocysteine, B vitamin supplementation hasn't clearly reduced cardiovascular events in trials—suggesting homocysteine may be a marker rather than cause`,
    common_misconceptions: [
      `**Myth:** High homocysteine directly causes heart disease.\n**Fact:** The relationship is likely more complex. Homocysteine may be a marker of underlying issues (B vitamin deficiency, metabolic dysfunction) rather than a direct cause. Lowering it with B vitamins hasn't clearly prevented heart attacks in trials.`,
      `**Myth:** If your homocysteine is high, you definitely have an MTHFR mutation.\n**Fact:** MTHFR variants are common causes of elevated homocysteine, but simple B vitamin deficiency, kidney dysfunction, and certain medications can also elevate it without any genetic factors.`,
      `**Myth:** Lowering homocysteine with B vitamins is useless since trials didn't show cardiovascular benefit.\n**Fact:** Even if homocysteine isn't a direct cause of heart disease, the B vitamin deficiencies it reveals are still worth correcting. B vitamins have benefits beyond cardiovascular effects (nerve function, energy, cognitive health).`,
    ],
    examples: [
      "A vegan with homocysteine of 22 μmol/L (elevated) takes B12 and folate; three months later, homocysteine drops to 9 μmol/L—confirming B12 deficiency was the cause",
      "Someone with MTHFR C677T variant has persistently elevated homocysteine despite folic acid; switching to methylfolate (5-MTHF) finally normalizes levels",
      "Elderly person with cognitive decline has homocysteine of 18 μmol/L; B vitamin supplementation may slow cognitive decline even if cardiovascular effects are uncertain",
      "Kidney disease patients often have high homocysteine despite B vitamin supplementation—the kidneys play a role in homocysteine clearance",
    ],
  },
  {
    slug: "hydrolyzed",
    why_it_matters: `Hydrolyzed proteins are everywhere in the supplement world—collagen, whey, casein, and plant proteins all come in hydrolyzed forms. For supplement shoppers, understanding hydrolysis helps you evaluate marketing claims about "faster absorption" and "better bioavailability." Hydrolyzed proteins ARE absorbed faster because they're pre-digested into smaller peptides. But does faster always mean better? For post-workout protein, maybe. For satiety, probably not (whole proteins are more filling). For collagen, hydrolyzation is practically necessary for absorption. Context matters. Knowing what hydrolyzed means helps you choose appropriately: hydrolyzed whey for rapid post-workout recovery, regular whey for meal replacement and satiety.`,
    simple_explanation: `Hydrolyzed means proteins have been broken down into smaller pieces using water and enzymes—essentially pre-digestion in a factory instead of your stomach. Whole proteins are long chains of amino acids folded into complex shapes. Hydrolysis breaks these chains into shorter peptides (small chains) and free amino acids. The degree of hydrolysis varies: partial hydrolysis creates medium-sized peptides; extensive hydrolysis creates very small peptides and individual amino acids. This matters for absorption because smaller molecules pass through your intestinal wall faster. Your stomach and intestines normally do this breaking-down work, but hydrolyzed proteins arrive pre-broken, speeding absorption significantly. This is why hydrolyzed formulas are used for infants with allergies (small peptides are less allergenic) and athletes wanting fast post-workout protein uptake.`,
    key_points: `### Key Facts About Hydrolyzed Proteins

- **Faster absorption**: Hydrolyzed proteins absorb 2-3x faster than intact proteins because smaller peptides cross the intestinal barrier more easily
- **Degree matters**: Hydrolysis percentage ranges from partial (larger peptides, ~20-40% hydrolyzed) to extensive (mostly di/tripeptides and amino acids, >80%)
- **Reduced allergenicity**: Hydrolysis breaks apart protein structures that trigger allergies; hydrolyzed formulas are used for infants with milk protein allergy
- **Collagen special case**: Intact collagen is poorly absorbed; hydrolyzed collagen (collagen peptides) is practically required for bioavailability
- **Trade-offs**: Faster absorption isn't always better—intact proteins provide sustained amino acid release and greater satiety than hydrolyzed versions`,
    common_misconceptions: [
      `**Myth:** Hydrolyzed protein is always better than regular protein.\n**Fact:** Faster absorption is beneficial in some contexts (post-workout) but not others. Whole proteins provide longer satiety, more sustained amino acid release, and may better stimulate muscle protein synthesis over time.`,
      `**Myth:** Hydrolyzed means completely broken into individual amino acids.\n**Fact:** Most hydrolyzed proteins contain a mix of peptides (short chains) and free amino acids. Complete breakdown to individual amino acids is expensive and may not offer advantages over peptides.`,
      `**Myth:** Hydrolyzed protein tastes the same as regular protein.\n**Fact:** Hydrolysis often produces bitter peptides, which is why extensively hydrolyzed formulas typically taste worse than intact protein powders. Flavoring helps mask this.`,
    ],
    examples: [
      "Hydrolyzed whey protein raises blood amino acids within 30 minutes versus 60-90 minutes for intact whey—beneficial for immediate post-workout window",
      "Hydrolyzed infant formula is recommended when babies can't tolerate intact milk protein; the smaller peptides don't trigger the same allergic response",
      "Hydrolyzed collagen (collagen peptides) shows up in blood within 30 minutes of ingestion; intact collagen would be destroyed by digestion without being absorbed",
      "Someone wanting a filling protein shake for meal replacement might prefer non-hydrolyzed whey—it digests slower and keeps you fuller longer",
    ],
  },
  {
    slug: "hydroxyproline",
    why_it_matters: `Hydroxyproline is a unique amino acid found almost exclusively in collagen—making it a specific biomarker for collagen turnover in your body. For supplement shoppers interested in collagen and joint health, hydroxyproline matters for two reasons: first, collagen supplements provide hydroxyproline directly, and research shows hydroxyproline-containing peptides are absorbed and detected in blood after collagen supplementation. Second, urinary hydroxyproline can indicate bone turnover—it's released when collagen breaks down. Understanding hydroxyproline helps you appreciate why collagen supplements may have unique benefits that generic amino acids don't provide; hydroxyproline and its peptides may have signaling effects beyond just providing building blocks.`,
    simple_explanation: `Hydroxyproline is a modified version of the amino acid proline that's created AFTER proteins are assembled—your cells can't use hydroxyproline directly to build new proteins. It's made by enzymes that add oxygen to proline residues already incorporated into collagen. This process requires vitamin C, which is why scurvy (severe vitamin C deficiency) causes collagen to fall apart. Hydroxyproline makes up about 13% of collagen and is critical for collagen's triple-helix structure—without it, collagen can't form its characteristic strong, stable coils. Because hydroxyproline appears almost nowhere else in the body, finding it in blood or urine tells you about collagen: hydroxyproline in blood after taking supplements means collagen peptides were absorbed; hydroxyproline in urine indicates collagen breakdown (bone turnover marker).`,
    key_points: `### Key Facts About Hydroxyproline

- **Collagen-specific**: About 13% of collagen is hydroxyproline; it's nearly unique to collagen and elastin in the human body
- **Post-translational modification**: Created by adding oxygen to proline AFTER it's incorporated into protein; requires vitamin C as a cofactor
- **Structural role**: Hydroxyproline stabilizes collagen's triple helix through hydrogen bonding; without it, collagen unravels (scurvy)
- **Absorption evidence**: Hydroxyproline-containing peptides appear in blood after collagen supplement ingestion—proving absorption of collagen-specific peptides
- **Bone turnover marker**: Urinary hydroxyproline historically used to measure bone breakdown (though now largely replaced by newer markers like CTX)`,
    common_misconceptions: [
      `**Myth:** You can take hydroxyproline supplements to build collagen.\n**Fact:** Your body can't use free hydroxyproline to make new collagen. Hydroxyproline must be created from proline AFTER it's already incorporated into the collagen protein. Collagen peptide supplements work differently—through signaling effects.`,
      `**Myth:** Hydroxyproline is just another amino acid.\n**Fact:** Hydroxyproline is unique—it can't be incorporated into proteins during synthesis and is almost exclusively found in collagen. This specificity makes it a useful biomarker for collagen-related processes.`,
      `**Myth:** If collagen supplements contain hydroxyproline, the body just recycles it into new collagen.\n**Fact:** Absorbed hydroxyproline and hydroxyproline-containing peptides likely work through signaling mechanisms that stimulate fibroblasts to make new collagen, rather than being directly reused as building blocks.`,
    ],
    examples: [
      "Blood levels of Pro-Hyp (proline-hydroxyproline dipeptide) increase after taking collagen supplements—evidence that collagen-specific peptides are absorbed intact",
      "Vitamin C deficiency prevents hydroxylation of proline into hydroxyproline; collagen can't stabilize properly, leading to scurvy symptoms (bleeding gums, wound healing problems)",
      "A bone turnover panel may include urinary hydroxyproline, though NTX and CTX markers have largely replaced it for monitoring osteoporosis treatment",
      "Hydroxyproline-containing peptides from collagen supplements may signal fibroblasts in joints to produce more cartilage matrix—a proposed mechanism for joint health benefits",
    ],
  },
  {
    slug: "hyperglycemia",
    why_it_matters: `Hyperglycemia—high blood sugar—is the central feature of diabetes and prediabetes, affecting metabolic health, energy levels, and long-term disease risk. For supplement shoppers, understanding hyperglycemia helps evaluate blood sugar support products and recognize their limitations. Supplements like berberine, chromium, and cinnamon may modestly reduce hyperglycemia, but perspective matters: diet, exercise, and weight loss have far larger effects. Acute hyperglycemia (post-meal spikes) and chronic hyperglycemia (elevated average blood sugar) both matter but require different interventions. Understanding what causes hyperglycemia—insulin resistance, insufficient insulin production, or dietary excess—helps you choose appropriate strategies.`,
    simple_explanation: `Hyperglycemia simply means blood sugar (glucose) levels are higher than normal. After eating carbohydrates, blood sugar naturally rises as glucose enters your bloodstream from digestion. In a healthy person, insulin is released, cells absorb glucose, and blood sugar returns to baseline within 1-2 hours. Hyperglycemia happens when this system fails: cells become resistant to insulin, the pancreas doesn't make enough insulin, or carbohydrate intake overwhelms the system. Mild hyperglycemia might cause increased thirst, frequent urination, and fatigue. Severe, prolonged hyperglycemia damages blood vessels, nerves, kidneys, and eyes over time—this is how diabetes causes complications. Hyperglycemia is defined as fasting glucose above 100 mg/dL or random glucose above 140 mg/dL; diabetic range is fasting above 126 mg/dL.`,
    key_points: `### Key Facts About Hyperglycemia

- **Diagnostic thresholds**: Normal fasting glucose <100 mg/dL; prediabetic 100-125 mg/dL; diabetic ≥126 mg/dL (or HbA1c ≥6.5%)
- **Two patterns**: Fasting hyperglycemia (elevated morning glucose, liver overproduction) and postprandial hyperglycemia (spikes after meals, insulin resistance/insufficiency)
- **Damage mechanism**: High glucose damages blood vessels through glycation (glucose sticking to proteins), oxidative stress, and inflammation—causing microvascular complications
- **Reversibility**: Prediabetic hyperglycemia is often reversible with lifestyle changes; established diabetes requires ongoing management but can improve significantly
- **Symptoms**: Mild hyperglycemia is often asymptomatic; symptoms (thirst, urination, fatigue, blurred vision) typically appear at glucose >180-200 mg/dL`,
    common_misconceptions: [
      `**Myth:** Hyperglycemia only matters for diabetics.\n**Fact:** Prediabetic hyperglycemia affects 38% of US adults and already increases cardiovascular risk. Even "high-normal" glucose levels (90-99 mg/dL) may carry slightly elevated risk compared to optimal levels.`,
      `**Myth:** Avoiding sugar prevents hyperglycemia.\n**Fact:** All carbohydrates raise blood sugar, not just sugar. And the main driver is usually insulin resistance, not just carbohydrate intake. Someone with good insulin sensitivity can handle moderate carbs; someone insulin-resistant may spike blood sugar on "healthy" whole grains.`,
      `**Myth:** Supplements can control hyperglycemia as well as medications.\n**Fact:** Berberine approaches metformin efficacy in some studies, but most supplements have modest effects (10-20 mg/dL reduction). Lifestyle changes (weight loss, exercise) often outperform all supplements combined.`,
    ],
    examples: [
      "A continuous glucose monitor reveals blood sugar spiking to 180 mg/dL after rice but only 120 mg/dL after the same carbs from beans—fiber and food matrix matter",
      "Someone with HbA1c of 6.3% (prediabetic) achieves 5.4% (normal) through 7% weight loss and daily walking—reversing prediabetic hyperglycemia without medication",
      "Post-meal glucose peaks at 160 mg/dL; a 15-minute walk immediately after eating reduces the peak to 125 mg/dL—muscle contraction directly lowers blood sugar",
      "Berberine (500mg with meals) reduces fasting glucose by 15-20 mg/dL in clinical trials—meaningful but modest compared to 30-50 mg/dL from major lifestyle changes",
    ],
  },
  {
    slug: "hypertensive",
    why_it_matters: `Hypertension (high blood pressure) is the leading risk factor for cardiovascular disease worldwide, and "hypertensive" describes someone with this condition. For supplement shoppers, blood pressure is relevant because several supplements have genuine evidence for modest blood pressure reduction: potassium, magnesium, omega-3s, coenzyme Q10, hibiscus, and garlic. However, the magnitude matters—most supplements reduce blood pressure by 2-8 mmHg, while medications can reduce it by 10-20+ mmHg. Understanding what "hypertensive" means (≥130/80 mmHg) and how supplements fit into blood pressure management helps set realistic expectations. Supplements may help borderline cases avoid medication or complement drug therapy, but rarely replace medications for significantly elevated blood pressure.`,
    simple_explanation: `Being hypertensive means having high blood pressure—specifically, systolic pressure of 130 mmHg or higher and/or diastolic pressure of 80 mmHg or higher according to current guidelines. Blood pressure is the force your blood exerts on artery walls. "Systolic" is the pressure when your heart beats; "diastolic" is the pressure between beats. Normal blood pressure is under 120/80. Stage 1 hypertension is 130-139/80-89; Stage 2 is 140+/90+. Why does it matter? High pressure damages artery walls over time, causing stiffening, plaque buildup, and increased risk of heart attack, stroke, kidney disease, and dementia. The tricky part is that hypertension usually has no symptoms—you feel fine while damage accumulates. That's why it's called "the silent killer" and why regular monitoring is important.`,
    key_points: `### Key Facts About Being Hypertensive

- **Current thresholds**: Normal <120/80; Elevated 120-129/<80; Stage 1 130-139/80-89; Stage 2 ≥140/≥90 mmHg
- **Prevalence**: Nearly half of US adults (47%) are hypertensive; only about 1 in 4 have it controlled
- **Risk factor**: Hypertension is the #1 modifiable risk factor for cardiovascular disease, stroke, and kidney disease worldwide
- **Usually asymptomatic**: Most people with hypertension feel completely normal; symptoms typically only occur at very high levels (>180/120)
- **Lifestyle impact**: Weight loss (1 mmHg reduction per kg lost), DASH diet (11 mmHg), exercise (5-8 mmHg), and sodium reduction (2-8 mmHg) are evidence-based non-drug approaches`,
    common_misconceptions: [
      `**Myth:** You'd feel it if your blood pressure were high.\n**Fact:** Hypertension is usually completely asymptomatic, earning its nickname "the silent killer." By the time symptoms appear (headaches, vision changes), blood pressure is usually dangerously high.`,
      `**Myth:** Supplements can replace blood pressure medications.\n**Fact:** Supplements like potassium, magnesium, and hibiscus can reduce blood pressure by 2-8 mmHg—helpful but modest. For significantly elevated blood pressure (Stage 2), medications providing 10-20+ mmHg reduction are usually necessary.`,
      `**Myth:** Blood pressure medications are a lifetime sentence.\n**Fact:** For some people, significant lifestyle changes (weight loss, DASH diet, exercise, stress reduction) can lower blood pressure enough to reduce or eliminate medication need—though this requires ongoing commitment.`,
    ],
    examples: [
      "Someone with blood pressure of 142/88 (Stage 2) starts the DASH diet, loses 10 pounds, and reduces BP to 128/82 (Stage 1)—significant but likely still needs monitoring or treatment",
      "Hibiscus tea (3 cups daily) has been shown to reduce systolic BP by 7 mmHg in trials—meaningful for someone at 135/85 but insufficient alone for someone at 160/100",
      "Potassium supplementation (increasing intake to 3,500-4,700 mg/day) can lower systolic BP by 4-8 mmHg, especially in those with low potassium intake",
      "A person on blood pressure medication adds CoQ10 (100-200mg) and achieves slightly better control with lower medication dose—adjunctive use with medical supervision",
    ],
  },
  {
    slug: "immunesystem",
    why_it_matters: `The immune system is the target of countless supplement marketing claims—"boost your immunity," "support immune health," "strengthen your defenses." For supplement shoppers, understanding how the immune system actually works helps separate evidence-based support from marketing hype. The immune system isn't a single thing to "boost"—it's a complex network of cells and organs with different components doing different jobs. Some supplements (vitamin D, zinc, vitamin C) genuinely support immune function, especially when correcting deficiencies. Others have preliminary evidence (elderberry, probiotics) for specific outcomes. Understanding that immune "boosting" isn't always good—autoimmune diseases and allergies are immune overreaction—helps you think more nuanced about immune health.`,
    simple_explanation: `Your immune system is your body's defense force—a network of cells, tissues, and organs that protect against bacteria, viruses, parasites, and even abnormal cells like cancer. It has two main branches: innate immunity (fast, non-specific first responders like neutrophils and macrophages that attack anything foreign) and adaptive immunity (slower, specialized forces like T cells and B cells that create targeted antibodies against specific threats and remember them). White blood cells are the soldiers; lymph nodes are command posts; your bone marrow and thymus are training facilities. A healthy immune system responds quickly to real threats, remembers past invaders, and calms down when the fight is over. Problems occur when it's too weak (immunodeficiency, frequent infections) or too active (allergies, autoimmune diseases).`,
    key_points: `### Key Facts About the Immune System

- **Two branches**: Innate immunity (immediate, non-specific) and adaptive immunity (slower, targeted, creates memory)—both are essential
- **Balance matters**: Immune health isn't about maximizing power—overactive immunity causes allergies and autoimmune disease; underactive immunity causes susceptibility to infections
- **Key nutrients**: Vitamin D, zinc, vitamin C, and vitamin A are essential for immune cell function; deficiencies clearly impair immunity
- **Gut connection**: 70% of immune cells reside in the gut; the microbiome significantly influences immune development and function
- **Sleep and stress**: Chronic sleep deprivation and stress hormones suppress immune function—lifestyle factors matter as much as supplements`,
    common_misconceptions: [
      `**Myth:** You want to "boost" your immune system as much as possible.\n**Fact:** An overactive immune system causes allergies, autoimmune diseases, and chronic inflammation. The goal is balanced, appropriate immune responses—not maximum power.`,
      `**Myth:** Supplements can prevent you from getting sick.\n**Fact:** Supplements can support immune function, especially when correcting deficiencies, but they won't create an impenetrable shield. Good nutrition, sleep, exercise, and hygiene all contribute to immune resilience.`,
      `**Myth:** Vitamin C megadoses cure colds.\n**Fact:** Vitamin C may modestly reduce cold duration (by about 8% in adults) when taken regularly before getting sick. It doesn't prevent colds or work as a cure once you're already ill. Megadoses beyond 200mg don't add benefit.`,
    ],
    examples: [
      "Someone with vitamin D deficiency (common) is more susceptible to respiratory infections; correcting deficiency reduces infection risk—evidence-based immune support",
      "Zinc lozenges (75mg elemental zinc) started within 24 hours of cold onset reduce cold duration by about 1 day—one of the better-studied immune supplements",
      "A person with autoimmune thyroiditis shouldn't take 'immune boosters'—their immune system is already overactive against their own tissue",
      "Daily exercise (moderate intensity) enhances immune surveillance, but excessive exercise (overtraining) temporarily suppresses immunity—balance matters",
    ],
  },
  {
    slug: "inflammation",
    why_it_matters: `Inflammation is one of the most researched—and most marketed—concepts in supplements. "Anti-inflammatory" is attached to everything from turmeric to omega-3s to green tea. For supplement shoppers, understanding what inflammation actually is helps you evaluate these claims critically. Acute inflammation is GOOD—it's how your body heals injuries and fights infections. Chronic, low-grade inflammation is associated with aging, obesity, heart disease, diabetes, and cancer. The supplements targeting inflammation (curcumin, fish oil, resveratrol) aim to reduce chronic inflammation, not prevent healthy acute responses. Understanding inflammation helps you recognize that lifestyle factors (weight, diet, sleep, stress) are the primary drivers, with supplements as supporting players.`,
    simple_explanation: `Inflammation is your immune system's response to injury or threat—like sounding an alarm and sending firefighters. When you cut your finger, inflammation brings blood flow, immune cells, and healing factors to the area, causing redness, warmth, swelling, and pain. This acute inflammation is essential for healing and fighting infections. Problems arise with chronic inflammation—when the alarm stays on continuously without an actual threat. This low-grade, persistent inflammation damages tissues over time and underlies many chronic diseases. What causes chronic inflammation? Obesity (fat tissue produces inflammatory signals), poor diet, chronic stress, lack of sleep, and environmental toxins. Many supplements claim to reduce inflammation by targeting inflammatory pathways like NF-κB and COX enzymes, similar to how anti-inflammatory drugs work.`,
    key_points: `### Key Facts About Inflammation

- **Acute vs. chronic**: Acute inflammation is protective and necessary for healing; chronic, low-grade inflammation drives disease and aging
- **Biomarkers**: C-reactive protein (CRP), IL-6, TNF-alpha are common measures; high-sensitivity CRP (hs-CRP) is widely used clinically
- **Obesity connection**: Fat tissue is an endocrine organ producing inflammatory cytokines; weight loss reduces inflammation more than most supplements
- **Anti-inflammatory supplements**: Curcumin, omega-3s, and specialized pro-resolving mediators (SPMs) have evidence for reducing inflammatory markers
- **Resolution is key**: Healthy inflammation resolves and turns off; impaired resolution (not just excessive initiation) may drive chronic inflammation`,
    common_misconceptions: [
      `**Myth:** All inflammation is bad and should be suppressed.\n**Fact:** Acute inflammation is essential for healing, fighting infections, and even muscle adaptation to exercise. Chronic low-grade inflammation is the problem—the goal is proper resolution, not complete suppression.`,
      `**Myth:** Anti-inflammatory supplements are like natural NSAIDs.\n**Fact:** Most anti-inflammatory supplements work through different mechanisms than drugs like ibuprofen. Curcumin modulates NF-κB signaling; omega-3s produce pro-resolving mediators. Effects are typically more modest and work over longer timeframes.`,
      `**Myth:** You can measure your inflammation with at-home tests and treat with supplements.\n**Fact:** While hs-CRP can be checked, it's nonspecific and influenced by many factors. More importantly, addressing root causes (weight, diet, sleep) is more effective than adding supplements to a pro-inflammatory lifestyle.`,
    ],
    examples: [
      "Someone with BMI of 32 has hs-CRP of 5 mg/L (elevated); losing 15 pounds reduces hs-CRP to 1.5 mg/L—weight loss is powerfully anti-inflammatory",
      "Curcumin (500-1000mg with piperine) reduces inflammatory markers in clinical trials, though effects are more modest than weight loss or exercise",
      "An athlete takes NSAIDs after every workout to reduce soreness; this may actually impair muscle adaptation because some inflammation is necessary for training response",
      "Omega-3 supplementation (2-4g EPA+DHA) reduces hs-CRP by 15-30% in meta-analyses—meaningful but not a replacement for lifestyle changes",
    ],
  },
  {
    slug: "inflammatoryboweldisease",
    why_it_matters: `Inflammatory bowel disease (IBD)—Crohn's disease and ulcerative colitis—represents serious, chronic inflammation of the digestive tract that significantly impacts quality of life. For supplement shoppers, IBD matters because (1) many people with IBD explore supplements as complementary approaches, (2) nutrient deficiencies are extremely common in IBD and require supplementation, and (3) some supplements may genuinely help maintain remission or reduce inflammation. Evidence exists for omega-3s, vitamin D, curcumin, and certain probiotics as adjunctive therapies. However, IBD requires medical management—supplements support but don't replace treatment. Understanding IBD helps you navigate the space between conventional medicine and complementary approaches.`,
    simple_explanation: `Inflammatory bowel disease (IBD) refers to two main conditions: Crohn's disease (which can affect anywhere from mouth to anus, often in patches) and ulcerative colitis (which affects only the colon and rectum in a continuous pattern). In both, the immune system mistakenly attacks the digestive tract, causing chronic inflammation, ulcers, pain, diarrhea, bleeding, and nutrient malabsorption. Think of it as friendly fire—your immune system treating your own intestines like an enemy. Unlike irritable bowel syndrome (IBS), which is uncomfortable but not damaging, IBD causes visible damage to intestinal tissue and can lead to serious complications like strictures, fistulas, and increased cancer risk. IBD typically requires medication (steroids, biologics, immunomodulators) to control inflammation and maintain remission.`,
    key_points: `### Key Facts About Inflammatory Bowel Disease

- **Two main types**: Crohn's disease (can affect any part of GI tract, often ileum/colon) and ulcerative colitis (colon and rectum only, continuous inflammation)
- **Autoimmune-like**: The immune system attacks intestinal tissue; genetics, microbiome, and environmental factors all contribute to development
- **Nutrient deficiencies common**: Iron, B12, vitamin D, zinc, and other deficiencies are extremely prevalent due to malabsorption and inflammation
- **Remission goal**: Treatment aims for remission (no active inflammation); supplements may help maintain remission alongside medications
- **Distinguished from IBS**: IBD causes visible tissue damage and inflammation; IBS causes symptoms but no structural damage—different conditions despite similar names`,
    common_misconceptions: [
      `**Myth:** IBD and IBS are the same thing.\n**Fact:** They're completely different conditions. IBS is a functional disorder with symptoms but no tissue damage. IBD involves visible inflammation, ulceration, and tissue damage requiring medical treatment. The names are confusingly similar but conditions are distinct.`,
      `**Myth:** Diet causes IBD.\n**Fact:** Diet doesn't cause IBD, which has genetic and immune components. However, diet can trigger flares and affect symptom severity. Specific dietary patterns (like the SCD or Mediterranean diet) may help some patients manage symptoms.`,
      `**Myth:** Supplements can replace IBD medications.\n**Fact:** IBD is a serious condition requiring medical management. Some supplements (curcumin, omega-3s, vitamin D) may help maintain remission or reduce inflammation as adjuncts, but they don't replace biologics, steroids, or other medications that control the disease.`,
    ],
    examples: [
      "Someone with Crohn's disease in remission takes curcumin (2-3g daily) alongside maintenance medication; studies suggest this combination may help prolong remission",
      "A person with ulcerative colitis is found to have vitamin D deficiency (common in IBD); supplementation improves vitamin D status and may support immune regulation",
      "VSL#3 probiotic (high-dose multi-strain) has evidence for maintaining remission in ulcerative colitis—one of the better-studied probiotics for IBD",
      "Iron deficiency anemia is present in 30-50% of IBD patients; IV iron may be preferred over oral iron, which can irritate the gut and be poorly absorbed",
    ],
  },
];

async function enhanceTerm(enhancement) {
  const { slug, ...updates } = enhancement;

  const { data, error } = await supabase
    .from("glossary_terms")
    .update(updates)
    .eq("slug", slug)
    .select("term, slug")
    .single();

  if (error) {
    console.error(`❌ Error updating ${slug}:`, error.message);
    return false;
  }

  console.log(`✅ Enhanced: ${data.term} (${data.slug})`);
  return true;
}

async function main() {
  console.log("=== BATCH 10: Enhancing Glossary Terms 91-100 ===\n");

  let success = 0;
  let failed = 0;

  for (const enhancement of enhancements) {
    const result = await enhanceTerm(enhancement);
    if (result) success++;
    else failed++;
  }

  console.log(`\n=== COMPLETE ===`);
  console.log(`✅ Success: ${success}`);
  console.log(`❌ Failed: ${failed}`);

  // Verify word counts
  console.log("\n=== WORD COUNT VERIFICATION ===");
  const { data: terms } = await supabase
    .from("glossary_terms")
    .select(
      "term, slug, definition, why_it_matters, simple_explanation, key_points, common_misconceptions, examples"
    )
    .in(
      "slug",
      enhancements.map((e) => e.slug)
    );

  for (const term of terms) {
    const wordCount = [
      term.definition || "",
      term.why_it_matters || "",
      term.simple_explanation || "",
      term.key_points || "",
      (term.common_misconceptions || []).join(" "),
      (term.examples || []).join(" "),
    ]
      .join(" ")
      .split(/\s+/)
      .filter((w) => w.length > 0).length;

    const status = wordCount >= 500 ? "✅" : "⚠️";
    console.log(`${status} ${term.term}: ${wordCount} words`);
  }
}

main().catch(console.error);
