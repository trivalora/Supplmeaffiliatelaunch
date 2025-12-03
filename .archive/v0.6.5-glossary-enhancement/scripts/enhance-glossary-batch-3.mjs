/**
 * Batch 3: Enhance glossary terms 21-30 (alphabetically)
 * Terms: Biomarker, Blood Glucose, Blood Pressure, BMI, Bone Density,
 *        Butyrate, Calcium Carbonate, Calcium Citrate, Cardiovascular, Carotenoids
 *
 * Run: node scripts/enhance-glossary-batch-3.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// Enhanced content for Batch 3 terms
const enhancements = [
  {
    slug: "biomarker",
    why_it_matters: `Biomarkers are the objective measurements that separate science-backed supplement decisions from guesswork. While subjective feelings like "I have more energy" are notoriously unreliable, biomarkers provide hard numbers: your vitamin D level went from 22 to 45 ng/mL, your fasting glucose dropped from 105 to 92 mg/dL, your inflammatory marker CRP decreased by 40%. For supplement shoppers, understanding biomarkers transforms the buying process from hoping a product works to actually measuring whether it does. This knowledge helps you avoid wasting money on supplements that aren't moving your specific numbers and double down on those that are.`,
    simple_explanation: `Think of biomarkers as the gauges on your car's dashboard—they tell you what's actually happening under the hood rather than just how the ride feels. Your car might feel fine while the oil pressure is dangerously low; similarly, you might feel okay while your blood sugar or inflammation levels are problematic. Biomarkers are measurable substances in your blood, urine, or tissues that indicate what's happening physiologically. Some show disease risk (like LDL cholesterol), some track nutritional status (like vitamin B12 or ferritin), and some reveal how well your body is functioning (like kidney or liver enzymes). When evaluating supplements, biomarkers give you before-and-after data instead of relying on subjective impressions.`,
    key_points: `### Key Facts About Biomarkers

- **Types of biomarkers**: Diagnostic (identify disease), prognostic (predict outcomes), monitoring (track changes over time), and pharmacodynamic (show treatment response)
- **Nutritional biomarkers**: Serum vitamin D, ferritin (iron stores), B12, RBC magnesium, and homocysteine directly measure nutrient status
- **Inflammatory markers**: CRP, IL-6, and ESR indicate systemic inflammation—often elevated in chronic disease and lowered by some supplements
- **Surrogate vs. clinical**: A biomarker improvement (like lower LDL) doesn't always mean better outcomes—the gold standard is actual health events
- **Individual baselines**: Your optimal range may differ from population averages; track your own trends over time for meaningful insights`,
    common_misconceptions: [
      `**Myth:** If my biomarkers are in the "normal" range, I'm optimally healthy.\n**Fact:** Reference ranges are based on population averages, often including sick people. "Normal" might be common but not optimal. Many functional medicine practitioners use tighter "optimal" ranges that better correlate with long-term health.`,
      `**Myth:** A single biomarker test gives a complete picture.\n**Fact:** Biomarkers fluctuate based on recent food, exercise, sleep, stress, and time of day. A single snapshot can be misleading—trends over multiple tests are more meaningful than any single value.`,
      `**Myth:** If a supplement improves a biomarker, it must improve health outcomes.\n**Fact:** Some biomarker changes don't translate to actual health benefits. Niacin dramatically raises HDL cholesterol but failed to reduce heart attacks in trials. Surrogate markers aren't the same as clinical outcomes.`,
    ],
    examples: [
      "Testing vitamin D levels before and after 3 months of supplementation shows whether your dose is actually achieving optimal status (40-60 ng/mL)",
      "HbA1c reflects average blood sugar over 3 months—more useful than a single fasting glucose reading for assessing metabolic health",
      "High-sensitivity CRP under 1.0 mg/L indicates low cardiovascular inflammation risk; some supplements like omega-3s and curcumin can lower this marker",
      "Tracking ferritin reveals iron stores long before hemoglobin drops—catching deficiency early before anemia develops",
    ],
  },
  {
    slug: "bloodglucose",
    why_it_matters: `Blood glucose regulation is at the center of metabolic health, affecting everything from energy levels and body composition to long-term disease risk. For supplement shoppers, understanding blood glucose is essential because many popular supplements—berberine, chromium, cinnamon, alpha-lipoic acid, and others—are marketed for "blood sugar support." Some of these have meaningful evidence, while others are largely hype. Beyond supplements, blood glucose awareness helps you understand why you crash after certain meals, why some diets work better for you than others, and whether pre-diabetes might be affecting your health before obvious symptoms appear.`,
    simple_explanation: `Blood glucose is simply the amount of sugar (specifically glucose) circulating in your bloodstream at any moment. When you eat carbohydrates, they break down into glucose and enter your blood. Your body then releases insulin, which acts like a key to unlock your cells and let glucose in for energy. Problems arise when this system gets overwhelmed: too much glucose too often leads to insulin resistance, where cells stop responding well to insulin's "unlock" signal. Glucose then stays elevated in blood, damaging blood vessels and organs over time. A healthy fasting glucose is under 100 mg/dL; the pre-diabetic range is 100-125; diabetes is diagnosed at 126+. Post-meal spikes matter too—ideally staying under 140 mg/dL.`,
    key_points: `### Key Facts About Blood Glucose

- **Fasting vs. post-meal**: Fasting glucose shows baseline regulation; post-meal (postprandial) glucose reveals how well you handle carbohydrates
- **HbA1c advantage**: This test shows average glucose over 2-3 months, capturing fluctuations that single tests miss—optimal is under 5.5%, pre-diabetes is 5.7-6.4%
- **Continuous monitoring**: CGMs (continuous glucose monitors) reveal personal responses to specific foods—some people spike from rice but not bread, or vice versa
- **Evidence-backed supplements**: Berberine has the strongest evidence (comparable to metformin in some studies); chromium and alpha-lipoic acid have modest support; cinnamon results are mixed
- **Lifestyle trumps supplements**: Exercise, sleep, stress management, and carbohydrate quality/quantity have far larger effects than any supplement`,
    common_misconceptions: [
      `**Myth:** Blood sugar only matters if you have diabetes.\n**Fact:** Elevated glucose causes damage long before reaching diabetic thresholds. Pre-diabetes affects 1 in 3 American adults, often without symptoms. Optimizing glucose early prevents progression and reduces cardiovascular risk.`,
      `**Myth:** "Blood sugar support" supplements can replace diet and exercise.\n**Fact:** Even the most effective supplement (berberine) produces modest effects compared to lifestyle changes. Supplements may help optimize an already-healthy lifestyle but can't compensate for poor diet and inactivity.`,
      `**Myth:** All carbohydrates spike blood sugar equally.\n**Fact:** Fiber content, food matrix, preparation method, and what you eat alongside carbs all affect glucose response. 50g of carbs from beans affects blood sugar very differently than 50g from white bread.`,
    ],
    examples: [
      "Berberine at 500mg 2-3x daily has shown fasting glucose reductions of 15-25 mg/dL in some studies—meaningful but modest compared to dietary changes",
      'A CGM reveals that your "healthy" breakfast of oatmeal and banana spikes your glucose to 180 mg/dL, while eggs and avocado keep you stable at 110',
      "Chromium picolinate at 200-1000mcg daily shows small improvements in insulin sensitivity, primarily in people who are deficient",
      "Someone with fasting glucose of 108 mg/dL (pre-diabetic) may have no symptoms but is already experiencing blood vessel damage and increased disease risk",
    ],
  },
  {
    slug: "bloodpressure",
    why_it_matters: `High blood pressure (hypertension) is called the "silent killer" for good reason—it damages your cardiovascular system for years without obvious symptoms until a heart attack or stroke occurs. Understanding blood pressure matters for supplement shoppers because several supplements have legitimate evidence for modest blood pressure reduction, while many others make claims they can't support. More importantly, knowing your numbers helps you decide whether lifestyle optimization and supplements are appropriate or whether you need medical intervention. Uncontrolled hypertension isn't something to experiment with—it's a leading cause of preventable death.`,
    simple_explanation: `Blood pressure measures the force of blood pushing against your artery walls. The top number (systolic) is pressure when your heart beats; the bottom number (diastolic) is pressure between beats. Think of it like water pressure in a hose—too much pressure stresses the hose walls and connections. In your body, high pressure damages artery linings, makes your heart work harder (causing it to enlarge and weaken), and increases risk of stroke, heart attack, kidney damage, and vision loss. Normal is under 120/80 mmHg; elevated is 120-129/<80; Stage 1 hypertension is 130-139/80-89; Stage 2 is 140+/90+. Even small reductions (5-10 mmHg) significantly lower cardiovascular event risk.`,
    key_points: `### Key Facts About Blood Pressure

- **Measurement matters**: Blood pressure varies throughout the day and with stress—home monitoring with a validated device gives more accurate data than occasional clinic readings
- **Evidence-backed supplements**: Beetroot juice/nitrates (3-10 mmHg reduction), high-dose omega-3s (2-4 mmHg), magnesium (modest effect), CoQ10 (modest effect), and aged garlic extract have clinical evidence
- **Potassium balance**: The sodium-to-potassium ratio matters more than sodium alone—most people need more potassium (4,700mg/day target) rather than just less sodium
- **DASH diet effect**: The DASH diet reduces blood pressure as much as a single medication—10-15 mmHg in hypertensive individuals—far exceeding any supplement
- **When supplements aren't enough**: Stage 2 hypertension (140+/90+) typically needs medication; supplements are adjuncts, not replacements for proven drug therapy`,
    common_misconceptions: [
      `**Myth:** I feel fine, so my blood pressure must be okay.\n**Fact:** Hypertension usually has no symptoms until organ damage has occurred. Many people walk around with dangerously high blood pressure for years without knowing. Regular measurement is the only way to know your status.`,
      `**Myth:** Natural supplements are safer than blood pressure medications.\n**Fact:** Blood pressure medications are among the most studied drugs in medicine with well-understood safety profiles. Uncontrolled hypertension is far more dangerous than medication side effects. Supplements produce modest effects suitable for borderline cases, not a replacement for treatment of true hypertension.`,
      `**Myth:** Once blood pressure is controlled, I can stop treatment.\n**Fact:** Hypertension is typically a chronic condition. Stopping medication or supplements usually causes blood pressure to rise again. Lifestyle improvements can sometimes allow medication reduction under medical supervision, but "curing" hypertension is rare.`,
    ],
    examples: [
      "Drinking 250ml of beetroot juice (providing ~300mg nitrates) lowers blood pressure by 4-10 mmHg within hours through nitric oxide production",
      "Someone with blood pressure of 145/92 (Stage 2) shouldn't rely on supplements—they need medical evaluation and likely medication",
      "Aged garlic extract (Kyolic) at 1.2-2.4g daily has shown 7-10 mmHg reductions in systolic blood pressure in multiple trials",
      "A person reduces processed food intake, increases vegetables and potassium, and sees a 12 mmHg drop—more than any supplement could provide",
    ],
  },
  {
    slug: "bmi",
    why_it_matters: `BMI (Body Mass Index) is one of the most widely used—and widely misunderstood—health metrics. For supplement shoppers, understanding BMI's limitations is important because the fitness and supplement industry often exploits BMI anxiety to sell products. Many "metabolism boosters" and "fat burners" target people whose BMI looks problematic but who may actually be healthy, while people with "normal" BMI but poor body composition might be falsely reassured. Knowing what BMI can and can't tell you helps you make better decisions about your health goals and which interventions (including supplements) might actually be useful.`,
    simple_explanation: `BMI is a simple formula: your weight in kilograms divided by your height in meters squared (or for Americans: weight in pounds × 703 ÷ height in inches squared). It was invented in the 1800s by a statistician studying populations, not individuals. The formula spits out a number: under 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, 30+ is obese. The problem? BMI can't distinguish between muscle and fat. A bodybuilder with 10% body fat and a sedentary person with 35% body fat can have identical BMIs. It also ignores where you carry fat (visceral abdominal fat is far more dangerous than subcutaneous fat) and varies in accuracy across ethnicities and ages.`,
    key_points: `### Key Facts About BMI

- **Population vs. individual tool**: BMI works reasonably well for tracking trends in large populations but is often misleading for individuals, especially athletes and older adults
- **Missing body composition**: Two people with BMI of 27 could have vastly different health risks—one muscular with low body fat, one with high body fat and low muscle
- **Waist circumference adds value**: Waist-to-height ratio (keep waist under half your height) and waist circumference (men <40 inches, women <35 inches) better predict metabolic risk
- **Metabolically healthy obesity**: Some obese individuals have normal blood pressure, blood sugar, and lipids; "normal weight obesity" (thin but high body fat) carries significant risk
- **Better metrics exist**: DEXA scans, bioelectrical impedance (quality devices), and waist measurements provide more actionable health information`,
    common_misconceptions: [
      `**Myth:** A normal BMI means you're at a healthy weight.\n**Fact:** "Normal weight obesity"—having a healthy BMI but high body fat percentage—is associated with increased metabolic disease and mortality risk. Conversely, fit individuals with elevated BMI due to muscle mass often have excellent health markers.`,
      `**Myth:** Lowering your BMI is always a good health goal.\n**Fact:** Losing muscle to reduce BMI is counterproductive and unhealthy. The goal should be optimizing body composition (reducing fat, preserving or building muscle), which may or may not change your BMI significantly.`,
      `**Myth:** BMI categories are scientifically precise cutoffs.\n**Fact:** The cutoffs (25 for overweight, 30 for obese) are somewhat arbitrary and don't account for individual variation. Some ethnicities have elevated disease risk at lower BMIs; others are healthier at higher BMIs.`,
    ],
    examples: [
      "A 5'10\" man weighing 200 lbs has a BMI of 28.7 (overweight), but if he's muscular with 15% body fat, his health risk is low",
      "A sedentary woman with BMI of 23 (normal) but 38% body fat has higher metabolic disease risk than her BMI suggests",
      'The supplement industry targets people with BMI 26-28, selling "fat burners" when what many actually need is strength training to improve body composition',
      "Waist-to-height ratio provides better metabolic risk prediction: a 5'8\" person should aim for waist under 34 inches regardless of what the scale says",
    ],
  },
  {
    slug: "bonedensity",
    why_it_matters: `Bone density determines whether you'll maintain an active, independent life into old age or face debilitating fractures that often mark the beginning of rapid decline. For supplement shoppers, understanding bone density is crucial because calcium supplements alone—the most common "bone health" product—may not be enough and could even be counterproductive without proper cofactors. The research has evolved significantly: we now know that vitamin D, vitamin K2, magnesium, and weight-bearing exercise are equally or more important than calcium for bone health. Making informed choices here can literally determine whether you're hiking at 80 or bedridden after a hip fracture.`,
    simple_explanation: `Your bones aren't the dead scaffolding they might seem—they're living tissue constantly being broken down and rebuilt. Specialized cells called osteoclasts dissolve old bone while osteoblasts build new bone. In youth, building outpaces breakdown; you reach peak bone mass around age 30. After that, breakdown gradually wins, and bones slowly weaken. Bone density measures how much mineral (mainly calcium and phosphorus) is packed into a given volume of bone. Higher density means stronger bones. A DEXA scan compares your density to young-adult peak (T-score) and age-matched norms (Z-score). T-score above -1 is normal; -1 to -2.5 is osteopenia (low bone mass); below -2.5 is osteoporosis.`,
    key_points: `### Key Facts About Bone Density

- **Peak bone mass matters**: Building maximum bone density before age 30 through nutrition and exercise provides lifelong protection—prevention is far easier than treatment
- **Calcium alone isn't enough**: Without vitamin D (for absorption), vitamin K2 (to direct calcium to bones, not arteries), and magnesium, calcium supplementation may be ineffective or harmful
- **Weight-bearing exercise is essential**: Bones strengthen in response to mechanical stress—walking, running, weightlifting, and jumping stimulate bone formation in ways supplements can't
- **Protein supports bone**: Contrary to outdated myths, adequate protein intake supports bone health; low protein intake is associated with bone loss and fracture risk
- **Testing timing**: Women should get baseline DEXA around menopause; men around age 70 or earlier with risk factors; earlier if family history, medication use, or other concerns`,
    common_misconceptions: [
      `**Myth:** Taking more calcium builds stronger bones.\n**Fact:** Beyond a threshold (~1000-1200mg/day from food and supplements combined), additional calcium doesn't improve bone density and may increase cardiovascular risk by depositing in arteries. Cofactors like D3 and K2 matter more than calcium quantity.`,
      `**Myth:** Osteoporosis is a normal part of aging that can't be prevented.\n**Fact:** While some bone loss is typical with age, severe osteoporosis is not inevitable. Lifestyle factors—exercise, nutrition, not smoking, limiting alcohol—significantly influence bone density trajectory.`,
      `**Myth:** If you drink milk, you don't need to worry about bone health.\n**Fact:** Countries with the highest dairy consumption don't have the lowest fracture rates. Bone health depends on the complete nutritional picture—vitamin D, K2, magnesium, protein—plus exercise and hormonal factors, not just calcium intake.`,
    ],
    examples: [
      'Vitamin K2 (MK-7 form, 100-200mcg daily) directs calcium to bones and teeth while keeping it out of arteries—often missing from basic "bone health" formulas',
      "A postmenopausal woman taking calcium without vitamin D or K2 may not improve bone density and could increase arterial calcification risk",
      "Weight-bearing exercise 3-4x weekly stimulates osteoblast activity more effectively than any supplement—you can't pill your way to strong bones",
      "Someone with osteopenia (T-score -1.5) can often stabilize or improve bone density with optimized nutrition, K2, D3, and resistance training",
    ],
  },
  {
    slug: "butyrate",
    why_it_matters: `Butyrate is emerging as one of the most important molecules for gut and metabolic health, yet it's impossible to supplement directly in meaningful amounts—making this a case where understanding the science helps you spend money wisely. Butyrate is a short-chain fatty acid produced when gut bacteria ferment fiber. It's the primary fuel for colon cells, strengthens the gut barrier, reduces inflammation, and may influence everything from immune function to brain health and insulin sensitivity. Rather than buying overpriced butyrate supplements (which don't survive to the colon anyway), this knowledge points you toward effective alternatives: prebiotic fibers that feed butyrate-producing bacteria.`,
    simple_explanation: `Imagine your gut bacteria as tiny chefs in your colon's kitchen. When you feed them the right ingredients (certain types of fiber), they cook up butyrate as their specialty dish. Your colon cells absolutely love this dish—it's their preferred fuel source, keeping them healthy and maintaining the gut barrier that separates your intestinal contents from your bloodstream. Without enough fiber reaching your colon, the bacteria can't make enough butyrate, and your gut lining weakens. This leads to increased intestinal permeability ("leaky gut"), inflammation, and potentially contributes to various chronic diseases. The solution isn't buying butyrate pills—it's eating the fibers that let your own gut bacteria produce it fresh.`,
    key_points: `### Key Facts About Butyrate

- **Primary colonocyte fuel**: Colon cells get 70% of their energy from butyrate—without it, they weaken and gut barrier function declines
- **Anti-inflammatory effects**: Butyrate inhibits NF-κB (a master inflammatory switch), reducing gut and systemic inflammation
- **Prebiotic sources**: Resistant starch (cooled potatoes/rice, green bananas), inulin, pectin, and beta-glucans (oats) are fermented to butyrate by gut bacteria
- **Supplement limitations**: Oral butyrate supplements largely get absorbed in the upper GI tract before reaching the colon where it's needed; encapsulated forms may help but evidence is limited
- **Indirect approach works**: Rather than supplementing butyrate, feeding butyrate-producing bacteria (Faecalibacterium, Roseburia, Eubacterium) with appropriate fibers is more effective`,
    common_misconceptions: [
      `**Myth:** Taking butyrate supplements is the best way to increase butyrate in your gut.\n**Fact:** Standard butyrate supplements are absorbed before reaching the colon. Even enteric-coated versions provide a one-time dose rather than the continuous production from fiber fermentation. Prebiotic fibers are more effective and economical.`,
      `**Myth:** All fiber increases butyrate production equally.\n**Fact:** Different fibers feed different bacteria and produce different short-chain fatty acids. Resistant starch and specific fermentable fibers preferentially boost butyrate, while other fibers may produce more acetate or propionate.`,
      `**Myth:** You can test butyrate levels to know if you're making enough.\n**Fact:** Butyrate is rapidly absorbed by colon cells, making stool or blood levels unreliable indicators of production. Indirect markers like increased Faecalibacterium prausnitzii on a microbiome test suggest good butyrate production capacity.`,
    ],
    examples: [
      "Eating cooled potatoes or rice creates resistant starch that gut bacteria ferment into butyrate—reheating doesn't eliminate the resistant starch",
      "Tributyrin (a butyrate precursor) supplements may survive better to the colon than straight butyrate, but evidence is still limited compared to prebiotic approaches",
      "Someone with IBD or IBS may benefit from slowly increasing resistant starch intake to boost natural butyrate production and support gut healing",
      "Green banana flour or raw potato starch (2-4 tablespoons daily) are concentrated resistant starch sources for people struggling to get enough from whole foods",
    ],
  },
  {
    slug: "calciumcarbonate",
    why_it_matters: `Calcium carbonate is the cheapest and most common form of supplemental calcium, found in products like Tums and most budget calcium supplements. For supplement shoppers, understanding calcium carbonate's specific characteristics helps you decide whether it's right for you or whether alternatives are worth the extra cost. The key issues are bioavailability (how much you absorb) and digestive tolerance. Calcium carbonate requires stomach acid for absorption, meaning it works poorly in older adults or anyone taking acid-reducing medications. It also causes more digestive side effects than other forms. For some people, it's perfectly adequate; for others, it's a waste of money.`,
    simple_explanation: `Calcium carbonate is basically refined chalk or limestone—the same stuff in antacids and blackboard chalk. When you take it, your stomach acid dissolves the calcium so your intestines can absorb it. This works fine if you take it with food (which triggers stomach acid) and have normal digestion. But here's the problem: as we age, stomach acid production naturally declines. Many people also take acid reducers (PPIs like omeprazole or H2 blockers like Pepcid) that further reduce acid. Without enough acid, calcium carbonate just passes through unabsorbed. Also, calcium carbonate is 40% elemental calcium by weight—high compared to other forms—but only about 20-25% of that actually gets absorbed even under ideal conditions.`,
    key_points: `### Key Facts About Calcium Carbonate

- **Highest elemental calcium**: 40% calcium by weight, meaning a 1,250mg tablet provides 500mg elemental calcium—more than citrate or other forms
- **Requires stomach acid**: Must be taken with meals for absorption; nearly useless in people with low stomach acid (achlorhydria) or those on acid-suppressing medications
- **Cost advantage**: 2-4x cheaper per milligram of elemental calcium than calcium citrate, making it attractive for budget-conscious consumers with normal digestion
- **GI side effects**: More likely than other forms to cause constipation, bloating, and gas—sometimes severe enough to cause discontinuation
- **Antacid interaction**: While it neutralizes stomach acid (hence its use in Tums), this same property reduces its own absorption when taken alone`,
    common_misconceptions: [
      `**Myth:** Calcium carbonate is just as well absorbed as other calcium forms.\n**Fact:** While absorption is similar to calcium citrate when taken with food in young adults with normal digestion, it's significantly lower in older adults, those with low stomach acid, or anyone taking PPIs or H2 blockers.`,
      `**Myth:** The amount on the label is what your body gets.\n**Fact:** A 500mg calcium carbonate supplement means 500mg of elemental calcium, but your body absorbs only 20-25% of that (100-125mg) under ideal conditions—even less without adequate stomach acid.`,
      `**Myth:** Taking more calcium is always beneficial for bone health.\n**Fact:** Beyond 1,000-1,200mg daily from food and supplements combined, additional calcium provides no bone benefit and may increase cardiovascular risk. Many people taking calcium carbonate take more than necessary because they don't realize how much they get from food.`,
    ],
    examples: [
      "An elderly woman on omeprazole takes calcium carbonate for bone health but absorbs very little because PPIs suppress the stomach acid needed to dissolve it",
      "Taking calcium carbonate with a protein-rich meal increases stomach acid and absorption significantly compared to taking it on an empty stomach",
      "Someone switches from calcium carbonate to calcium citrate and notices their constipation resolves—a common experience due to citrate's easier digestibility",
      "A budget-conscious young adult with normal digestion uses calcium carbonate effectively by always taking it with meals and splitting doses throughout the day",
    ],
  },
  {
    slug: "calciumcitrate",
    why_it_matters: `Calcium citrate is often recommended as the "better" calcium supplement, but at nearly double the price of calcium carbonate, is it worth the upgrade? For supplement shoppers, understanding when calcium citrate genuinely matters versus when it's an unnecessary expense helps optimize both health outcomes and budget. Calcium citrate's key advantages—acid-independent absorption and fewer side effects—make it the clear choice for specific populations but potentially overkill for healthy young adults with normal digestion. Knowing which category you fall into prevents both underpaying for inadequate calcium and overpaying for unnecessary premium forms.`,
    simple_explanation: `Calcium citrate is calcium bound to citric acid (the same stuff that makes lemons sour). Unlike calcium carbonate, which needs stomach acid to dissolve, calcium citrate is already in a form your body can absorb regardless of stomach acid levels. Think of it like the difference between a locked box (carbonate needs the acid "key") and an open container (citrate is ready to absorb). This makes calcium citrate ideal for older adults, people on acid-reducing medications, or anyone with digestive issues. The trade-off? It's only 21% elemental calcium (versus 40% for carbonate), meaning you need bigger or more tablets to get the same dose, and it costs more.`,
    key_points: `### Key Facts About Calcium Citrate

- **Acid-independent absorption**: Can be taken with or without food; absorbs equally well regardless of stomach acid status
- **Lower elemental calcium**: 21% calcium by weight—you need about twice as many milligrams of calcium citrate to equal calcium carbonate's elemental dose
- **Ideal populations**: Older adults (50+), people on PPIs/H2 blockers, gastric bypass patients, and those with achlorhydria or digestive conditions
- **Better GI tolerance**: Significantly less constipation and bloating compared to calcium carbonate—important for long-term compliance
- **May improve oxalate issues**: Citrate can bind oxalate in the gut, potentially reducing kidney stone risk in susceptible individuals`,
    common_misconceptions: [
      `**Myth:** Calcium citrate is always better than calcium carbonate.\n**Fact:** For healthy young adults with normal stomach acid who take calcium with meals, absorption is similar. Calcium citrate's advantages matter most for specific populations—older adults, those on acid blockers, and people with GI issues.`,
      `**Myth:** You need to take calcium citrate with food for it to work.\n**Fact:** Unlike calcium carbonate, calcium citrate absorbs well on an empty stomach. You can take it whenever convenient, which improves compliance for people who forget to take supplements with meals.`,
      `**Myth:** The higher cost of calcium citrate is never justified.\n**Fact:** For people over 50, those on stomach acid medications, or anyone who gets constipated from calcium carbonate, the better absorption and tolerance of calcium citrate provides genuine value that justifies the higher cost.`,
    ],
    examples: [
      "A 65-year-old taking omeprazole daily switches from calcium carbonate to calcium citrate and finally sees improvement in bone density after years of no change",
      "Someone with irritable bowel syndrome finds that calcium citrate doesn't trigger the bloating and constipation they experienced with carbonate",
      "A gastric bypass patient uses calcium citrate because their modified digestive system can't produce enough acid to absorb calcium carbonate",
      "A healthy 30-year-old with no digestive issues saves money using calcium carbonate with meals—calcium citrate's benefits don't apply to their situation",
    ],
  },
  {
    slug: "cardiovascular",
    why_it_matters: `Cardiovascular disease remains the leading cause of death globally, responsible for more deaths than all cancers combined. For supplement shoppers, "cardiovascular health" is one of the most common (and most abused) marketing claims. Some supplements—high-dose omega-3s, CoQ10, magnesium, and aged garlic extract—have genuine evidence for cardiovascular benefits. Many others trade on vague "heart healthy" claims with minimal or no supporting data. Understanding what cardiovascular health actually means, which risk factors are modifiable, and which supplements have real evidence helps you separate effective products from expensive placebos in a category where getting it right literally matters for your life.`,
    simple_explanation: `Cardiovascular refers to your heart (cardio) and blood vessels (vascular)—the system that pumps blood throughout your body. Think of it as your body's plumbing and pump system. The heart beats about 100,000 times daily, pushing blood through roughly 60,000 miles of blood vessels. Cardiovascular disease happens when this system gets damaged: arteries clog with plaque (atherosclerosis), blood pressure stays elevated (hypertension), the heart weakens (heart failure), or irregular rhythms develop (arrhythmias). Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, physical inactivity, and family history. Many supplements claim to support this system, but evidence quality varies enormously.`,
    key_points: `### Key Facts About Cardiovascular Health

- **Modifiable risk factors**: Blood pressure, LDL cholesterol, blood sugar, weight, physical activity, and smoking status—these account for most cardiovascular risk and respond to intervention
- **Evidence-backed supplements**: High-dose EPA omega-3s (REDUCE-IT trial), CoQ10 (for heart failure), magnesium (for blood pressure), and aged garlic extract have meaningful clinical evidence
- **Supplements with weak evidence**: Many "heart health" products use minimal doses or forms with no clinical outcome data—red yeast rice quality varies wildly; most herbal "circulation" products lack human trials
- **Lifestyle impact is massive**: Diet (especially DASH or Mediterranean patterns), exercise, and not smoking reduce cardiovascular risk more than any supplement possibly could
- **Prevention beats treatment**: Supplements work best as part of an overall prevention strategy in people without existing disease; they're not alternatives to medical treatment for diagnosed conditions`,
    common_misconceptions: [
      `**Myth:** If a supplement label says "supports heart health," it must have cardiovascular benefits.\n**Fact:** The FDA allows structure-function claims without requiring proof of effectiveness. Most supplements making heart health claims have never been tested in cardiovascular outcome trials.`,
      `**Myth:** Natural supplements are safer than heart medications.\n**Fact:** Cardiovascular medications like statins, blood pressure drugs, and aspirin have decades of outcome data proving they prevent heart attacks and strokes. Supplements have far less evidence and still carry potential risks and interactions.`,
      `**Myth:** Taking omega-3s automatically protects your heart.\n**Fact:** Not all omega-3 supplements are equal. The REDUCE-IT trial showing cardiovascular benefit used 4g/day of pure EPA (icosapent ethyl). Standard fish oil at 1g/day hasn't shown the same outcome benefits in recent trials.`,
    ],
    examples: [
      "Icosapent ethyl (Vascepa) at 4g/day reduced cardiovascular events by 25% in high-risk patients—the gold standard for omega-3 heart evidence",
      "CoQ10 at 100-300mg daily improved outcomes in heart failure patients in the Q-SYMBIO trial, but evidence for prevention in healthy people is weaker",
      'Someone takes a basic fish oil claiming "heart health support" not realizing the 1g dose contains only 300mg EPA—far below clinically effective amounts',
      "A person at cardiovascular risk would benefit more from daily walking, reducing processed foods, and managing stress than from any supplement alone",
    ],
  },
  {
    slug: "carotenoids",
    why_it_matters: `Carotenoids are a family of plant pigments that give fruits and vegetables their yellow, orange, and red colors—and they're heavily marketed in supplements for eye health, skin protection, and antioxidant benefits. For supplement shoppers, understanding carotenoids is important because the story is more nuanced than simple "antioxidants good" marketing suggests. While food-based carotenoids are consistently associated with health benefits, isolated carotenoid supplements have a mixed (and sometimes concerning) track record. The beta-carotene lung cancer trials stand as a warning about assuming food benefits translate to supplement form. Knowing which carotenoid supplements have solid evidence helps you choose wisely.`,
    simple_explanation: `Carotenoids are the pigments that paint the plant world in warm colors—the orange in carrots, red in tomatoes, yellow in corn, and even the pink in flamingos (who get it from the shrimp they eat). Humans can't make carotenoids; we must get them from food. There are over 600 known carotenoids, but about 6 are important in human nutrition: alpha-carotene, beta-carotene, beta-cryptoxanthin (which your body can convert to vitamin A), and lutein, zeaxanthin, and lycopene (which can't become vitamin A but have other functions). They accumulate in specific tissues—lutein and zeaxanthin concentrate in your eyes' macula, lycopene in the prostate, beta-carotene in skin and fat tissue—where they may protect against oxidative damage.`,
    key_points: `### Key Facts About Carotenoids

- **Provitamin A vs. non-provitamin A**: Beta-carotene, alpha-carotene, and beta-cryptoxanthin convert to vitamin A; lutein, zeaxanthin, and lycopene don't—they serve other functions
- **Food matrix matters**: Carotenoid absorption increases with dietary fat and cooking (which breaks cell walls); raw carrots release less carotenoid than cooked carrots with olive oil
- **Eye health evidence**: Lutein and zeaxanthin at 10-20mg daily (AREDS2 formula) have solid evidence for slowing macular degeneration progression
- **Beta-carotene warning**: High-dose supplements increased lung cancer risk in smokers (ATBC, CARET trials)—a cautionary tale about isolating nutrients from their food context
- **Lycopene potential**: Concentrated in prostate tissue and associated with lower prostate cancer risk in observational studies, though supplementation trials are less conclusive`,
    common_misconceptions: [
      `**Myth:** All carotenoids do the same thing because they're all antioxidants.\n**Fact:** Different carotenoids accumulate in different tissues and serve different functions. Lutein and zeaxanthin specifically protect the eye's macula; lycopene concentrates in prostate tissue; beta-carotene is more widespread. One can't substitute for another.`,
      `**Myth:** Carotenoid supplements are as beneficial as eating colorful vegetables.\n**Fact:** Vegetables provide carotenoids alongside fiber, other phytochemicals, vitamins, and minerals in a balanced food matrix. Isolated supplements miss this synergy and, in the case of beta-carotene, have actually shown harm in some populations.`,
      `**Myth:** You can't get too many carotenoids.\n**Fact:** While food-based carotenoids are generally safe (the worst that happens is carotenemia—harmless orange skin tint), high-dose supplements carry risks. Beta-carotene supplements are contraindicated in smokers due to lung cancer risk.`,
    ],
    examples: [
      "The AREDS2 formula contains 10mg lutein and 2mg zeaxanthin—proven to slow macular degeneration progression in people with intermediate AMD",
      "Cooking tomatoes in olive oil dramatically increases lycopene absorption compared to eating raw tomatoes—food preparation affects carotenoid bioavailability",
      "A smoker takes a multivitamin with 15mg beta-carotene not realizing this exceeds amounts associated with increased lung cancer risk in smokers",
      "Eating a variety of colorful vegetables (orange, red, yellow, dark green) provides a natural balance of multiple carotenoids that supplements can't replicate",
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
  console.log("=== BATCH 3: Enhancing Glossary Terms 21-30 ===\n");

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
