/**
 * Batch 9: Enhance glossary terms 81-90 (alphabetically)
 * Terms: Glycemic Control, Glycine, GRADE, Gut Microbiome, Half-Life,
 *        HbA1c, HDL Cholesterol, Hedges' g, Heme Iron, Hemoglobin
 *
 * Run: node scripts/enhance-glossary-batch-9.mjs
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
    slug: "glycemiccontrol",
    why_it_matters: `Glycemic control is the foundation of metabolic health—and it's not just for diabetics. For supplement shoppers, understanding glycemic control helps evaluate the flood of products claiming to "support healthy blood sugar." Berberine, chromium, cinnamon, alpha-lipoic acid, gymnema, and bitter melon all target glycemic control, but through different mechanisms and with varying evidence quality. The key insight is that blood sugar is a symptom, not the root cause—insulin sensitivity and metabolic flexibility matter more. Good glycemic control means stable energy, reduced cravings, protection from diabetic complications, and lower long-term disease risk. Poor control leads to energy crashes, hunger swings, and gradual metabolic deterioration.`,
    simple_explanation: `Glycemic control is your body's ability to keep blood sugar (glucose) within a healthy range—typically 70-100 mg/dL fasting and under 140 mg/dL after meals. Think of blood sugar like the temperature in a house with a thermostat: good glycemic control means the thermostat works properly, keeping the temperature steady despite changing conditions. When you eat carbohydrates, blood sugar rises; insulin is released to bring it back down. Between meals, glucagon releases stored glucose to prevent levels from dropping too low. In well-controlled glycemia, blood sugar rises modestly after eating, returns to baseline within 2 hours, and stays stable overnight. When control breaks down—as in prediabetes and diabetes—blood sugar swings higher, stays elevated longer, and causes damage to blood vessels, nerves, and organs over time.`,
    key_points: `### Key Facts About Glycemic Control

- **Target ranges**: Normal fasting glucose is 70-100 mg/dL; after meals, healthy is under 140 mg/dL at 2 hours; HbA1c under 5.7% indicates good long-term control
- **Insulin sensitivity is key**: Blood sugar is a downstream marker; improving insulin sensitivity (how well cells respond to insulin) improves control at the source
- **Post-meal matters most**: Fasting glucose can be normal while post-meal spikes are damaging; continuous glucose monitors reveal these hidden patterns
- **Time in range**: Modern diabetes management focuses on "time in range" (70-180 mg/dL)—the percentage of time spent in healthy range matters more than averages
- **Beyond numbers**: Good glycemic control protects blood vessels, nerves, kidneys, and eyes from the microvascular damage that high glucose causes over years`,
    common_misconceptions: [
      `**Myth:** Glycemic control only matters if you have diabetes.\n**Fact:** Blood sugar dysregulation begins years before diabetes diagnosis. Prediabetes affects 38% of US adults. Optimizing glycemic control prevents progression to diabetes and reduces cardiovascular risk even in "normal" ranges.`,
      `**Myth:** Low-carb diets are the only way to improve glycemic control.\n**Fact:** Exercise, sleep, stress management, and fiber intake dramatically affect glycemic control. Many people achieve excellent control with moderate carb intake when combined with lifestyle factors. Carb restriction is one tool, not the only tool.`,
      `**Myth:** Supplements can replace medications for blood sugar control.\n**Fact:** Berberine and some other supplements have modest effects (~0.5% HbA1c reduction), but cannot replace metformin or insulin for diagnosed diabetes. They may help in prediabetes or as adjuncts, not replacements.`,
    ],
    examples: [
      "A continuous glucose monitor reveals that rice spikes blood sugar to 180 mg/dL, but the same carbs from sweet potato only reach 140 mg/dL—individual responses vary",
      "Taking a 15-minute walk after dinner reduces post-meal glucose peak by 25%—muscle contraction directly enhances glucose uptake without needing extra insulin",
      "Someone with HbA1c of 5.9% (prediabetes) improves to 5.4% (normal) after 3 months of berberine (500mg 2x/day) plus walking—diet and lifestyle amplify supplement effects",
      "Sleeping only 5 hours for a week reduces insulin sensitivity by 25%, worsening glycemic control even with unchanged diet—sleep is metabolic medicine",
    ],
  },
  {
    slug: "glycine",
    why_it_matters: `Glycine is having a moment in the supplement world—research reveals it does far more than just build proteins. For supplement shoppers, glycine is relevant for sleep (3g before bed improves sleep quality), collagen synthesis (it's 33% of collagen), glutathione production (it's one of three glutathione precursors), and even longevity (glycine supplementation extends lifespan in animal models). Unlike most amino acids, glycine is cheap, well-tolerated, and has a pleasant sweet taste. It's considered "conditionally essential" because while your body makes it, production may not meet needs—especially for collagen synthesis, detoxification, and optimal health. Understanding glycine helps you recognize this often-overlooked amino acid's broad benefits.`,
    simple_explanation: `Glycine is the smallest amino acid—so simple it's almost like a "blank" amino acid that fits wherever flexibility is needed. Your body uses glycine to build proteins, especially collagen (where every third amino acid is glycine), create glutathione (the master antioxidant), produce creatine (for energy), synthesize DNA building blocks, and make bile acids (for digestion). In the brain, glycine acts as both an excitatory and inhibitory neurotransmitter—it calms the nervous system and helps regulate sleep. The body can make glycine from serine (another amino acid), but production may fall short of optimal needs by 10g or more daily. This "glycine gap" means supplementation can provide benefits even though it's technically non-essential. Glycine also tastes sweet, making it pleasant to take.`,
    key_points: `### Key Facts About Glycine

- **Collagen building block**: Every third amino acid in collagen is glycine; inadequate glycine limits collagen production for skin, joints, and connective tissue
- **Sleep improvement**: 3g glycine before bed consistently improves subjective sleep quality and reduces next-day fatigue in multiple human trials—without sedation or dependence
- **Glutathione precursor**: Along with cysteine and glutamate, glycine is required for glutathione synthesis; supplementing glycine supports antioxidant capacity
- **The "glycine gap"**: Your body synthesizes ~3g daily but may need 10-15g for optimal function—dietary intake and supplementation bridge this gap
- **Sweet taste**: Glycine tastes naturally sweet and is used as a food additive; this makes powder supplementation pleasant without sweeteners`,
    common_misconceptions: [
      `**Myth:** Your body makes enough glycine, so supplementation is unnecessary.\n**Fact:** Glycine is "conditionally essential"—endogenous production (~3g/day) may not meet metabolic demands (estimated 10-15g/day). The "glycine gap" explains why supplementation often shows benefits.`,
      `**Myth:** Glycine is just for collagen supplements.\n**Fact:** While glycine is crucial for collagen, it also supports sleep, glutathione production, creatine synthesis, methylation (via conversion to serine), and neurological function. It's far more than a collagen ingredient.`,
      `**Myth:** Taking glycine will make you drowsy during the day.\n**Fact:** Glycine's sleep benefits don't come from sedation. Unlike sleeping pills, glycine appears to improve sleep architecture and lower body temperature for sleep initiation without daytime impairment.`,
    ],
    examples: [
      "Taking 3g glycine 30-60 minutes before bed improves sleep quality scores and reduces daytime fatigue without morning grogginess—works differently than sedatives",
      "Collagen supplements typically provide 2-3g glycine per serving; adding pure glycine (5-10g) may further support collagen synthesis and joint health",
      "Elderly individuals with low glutathione levels showed improved antioxidant status after glycine + NAC supplementation—glycine and cysteine together boost glutathione production",
      "Bone broth is naturally high in glycine (from collagen)—one reason traditional diets that included broths may have provided more glycine than modern diets",
    ],
  },
  {
    slug: "grade",
    why_it_matters: `GRADE is the gold standard system for rating evidence quality and recommendation strength in healthcare—understanding it helps you interpret supplement research more accurately. When you see claims like "clinically proven" or "studies show," GRADE provides a framework to ask: What kind of studies? How many? How consistent? What's the certainty? GRADE distinguishes between evidence quality (how confident we are in the findings) and recommendation strength (how strongly we should act on them). This matters for supplements because most supplement evidence is low-to-moderate quality by GRADE standards, which doesn't mean it's useless—it means we should hold claims with appropriate humility.`,
    simple_explanation: `GRADE is a systematic framework researchers and guidelines use to rate how confident we should be in research findings. It answers: "How much should we trust these study results?" GRADE starts with study design (randomized trials start high, observational studies start low) and then adjusts up or down based on factors like study quality, consistency across studies, directness of evidence, precision, and publication bias. The result is a rating from "very low" to "high" certainty. GRADE also separates evidence quality from recommendation strength—you might have moderate-quality evidence but still make a strong recommendation if benefits clearly outweigh harms. This framework helps translate scientific uncertainty into practical guidance, making it clear when evidence is solid versus preliminary.`,
    key_points: `### Key Facts About GRADE

- **Four certainty levels**: High (confident), Moderate (moderately confident), Low (limited confidence), Very Low (very uncertain)—most supplement evidence is Low or Moderate
- **RCTs start high, observational starts low**: Randomized controlled trials begin at "high" certainty; cohort and case-control studies begin at "low"—design matters
- **Five downgrade factors**: Risk of bias, inconsistency, indirectness, imprecision, and publication bias can lower the certainty rating
- **Three upgrade factors**: Large effect size, dose-response relationship, and plausible confounding can raise observational evidence ratings
- **Evidence ≠ recommendation**: GRADE separates certainty in evidence from strength of recommendations; you can strongly recommend something despite moderate evidence if benefits clearly outweigh risks`,
    common_misconceptions: [
      `**Myth:** Low-quality evidence means the findings are wrong.\n**Fact:** Low-quality evidence means we have less confidence in the findings—they might be right or wrong, and new research could change conclusions. It's about certainty, not truth.`,
      `**Myth:** Only high-quality evidence should guide decisions.\n**Fact:** We often must make decisions with imperfect evidence. GRADE helps by being explicit about uncertainty. Low-quality evidence supporting a low-risk intervention might still warrant a recommendation.`,
      `**Myth:** GRADE is only for doctors and researchers.\n**Fact:** Understanding GRADE helps consumers evaluate supplement claims. When a company says "clinically studied," knowing to ask about study design and evidence quality helps you interpret that claim accurately.`,
    ],
    examples: [
      "A Cochrane review rates vitamin D for fracture prevention as 'moderate certainty'—meaning results are probably reliable but new research could affect conclusions",
      "Observational studies showing fish oil reduces heart disease are rated 'low certainty'; RCTs showing mixed results are 'moderate certainty'—conflicting evidence across study types",
      "A single small RCT showing benefits from a novel supplement would be rated 'low certainty' due to imprecision (wide confidence intervals from small sample)",
      "Strong dose-response relationship (higher curcumin doses → greater effects) can upgrade evidence certainty even from observational studies",
    ],
  },
  {
    slug: "gutmicrobiome",
    why_it_matters: `The gut microbiome has revolutionized our understanding of health—and spawned a massive probiotic and prebiotic supplement industry. For supplement shoppers, understanding the microbiome helps you navigate claims about "good bacteria," evaluate probiotic strains, and recognize that most supplements affect a tiny fraction of your 38 trillion gut microbes. The microbiome influences digestion, immunity, mental health, weight, and disease risk. But it's also incredibly complex and individual. What works for one person's microbiome may not work for another's. The best approach is usually supporting microbial diversity through fiber-rich foods, with targeted probiotics for specific conditions backed by clinical evidence.`,
    simple_explanation: `Your gut microbiome is an entire ecosystem of trillions of microorganisms—mostly bacteria, but also viruses, fungi, and other microbes—living in your digestive tract. Think of it as a rainforest inside you, with thousands of species interacting in complex ways. These microbes help digest food (especially fiber you can't break down), produce vitamins and beneficial compounds, train your immune system, protect against pathogens, and even communicate with your brain via the "gut-brain axis." A healthy microbiome is diverse—many different species in balance. An unhealthy microbiome (dysbiosis) has less diversity and may be dominated by problematic species. Diet is the biggest influence on your microbiome; fiber feeds beneficial bacteria, while processed foods and antibiotics can harm diversity.`,
    key_points: `### Key Facts About the Gut Microbiome

- **Astronomical scale**: ~38 trillion bacteria (roughly equal to human cells), 500-1000 species per person, 2-3 pounds of microbial mass
- **Metabolic powerhouse**: Microbes produce short-chain fatty acids (butyrate, acetate, propionate), vitamin K, B vitamins, and neurotransmitter precursors
- **Immune training ground**: 70% of immune cells are in the gut; the microbiome teaches immune cells what to attack and what to tolerate
- **Individual fingerprint**: Your microbiome is as unique as a fingerprint; this explains why probiotics work for some people but not others
- **Fiber is key**: Dietary fiber is the primary food for beneficial bacteria; increasing fiber diversity increases microbial diversity`,
    common_misconceptions: [
      `**Myth:** Probiotics colonize your gut and permanently change your microbiome.\n**Fact:** Most probiotic strains pass through within 1-2 weeks if you stop taking them. They provide transient benefits but rarely establish permanent residence—your native microbiome is remarkably stable.`,
      `**Myth:** Killing "bad" bacteria is the path to microbiome health.\n**Fact:** Many "bad" bacteria are only problematic when overgrown. A healthy microbiome keeps them in check through competition. Trying to eliminate species often backfires; supporting beneficial species is usually more effective.`,
      `**Myth:** One probiotic supplement can address all gut issues.\n**Fact:** Different strains have different effects; Lactobacillus rhamnosus GG prevents antibiotic diarrhea, Bifidobacterium infantis helps IBS, S. boulardii prevents C. diff. Match the strain to the condition.`,
    ],
    examples: [
      "Someone takes antibiotics for an infection; the microbiome diversity drops 30% and takes 3-6 months to recover—why pairing probiotics with antibiotics is often recommended",
      "Eating 30+ different plant foods weekly is associated with greater microbiome diversity than eating the same 5 plants—variety feeds different bacterial species",
      "Fecal microbiome transplant (transferring stool from healthy donor) cures 90% of recurrent C. difficile infections—demonstrating the microbiome's power",
      "The same high-fiber meal causes a larger blood sugar spike in one person than another, partly explained by different microbiome compositions affecting glucose metabolism",
    ],
  },
  {
    slug: "halflife",
    why_it_matters: `Half-life is fundamental to understanding how supplements work—how often to take them, how long effects last, and when to expect results. For supplement shoppers, half-life explains why some supplements need multiple daily doses (vitamin C, with a 30-minute half-life), while others work with once-daily or even weekly dosing. Caffeine's 5-hour half-life explains why afternoon coffee disrupts sleep. Vitamin D's 3-week half-life explains why it takes months to build up levels and why daily vs. weekly dosing yields similar results. Understanding half-life helps you time doses optimally and set realistic expectations for how quickly supplements will reach steady state.`,
    simple_explanation: `Half-life is how long it takes for half of a substance to leave your body. If a supplement has a 4-hour half-life, and you take 100mg, after 4 hours you'll have ~50mg remaining, after 8 hours ~25mg, after 12 hours ~12.5mg, and so on. This matters for dosing timing: short half-life substances (vitamin C, most B vitamins) need frequent dosing or extended-release forms to maintain steady levels. Long half-life substances (vitamin D, vitamin A) can be taken less frequently because they stick around. It typically takes 4-5 half-lives to reach steady state (consistent levels) when you start a supplement—so a supplement with a 1-day half-life reaches steady state in 4-5 days, while one with a 2-week half-life takes 8-10 weeks. This explains different timelines for feeling effects.`,
    key_points: `### Key Facts About Half-Life

- **4-5 half-lives to steady state**: When starting a supplement, it takes approximately 5 half-lives to reach consistent blood levels—crucial for knowing when to evaluate effects
- **4-5 half-lives for elimination**: Similarly, after stopping, it takes 5 half-lives for a substance to be essentially eliminated—important for washout periods
- **Dosing frequency**: Short half-life compounds need more frequent dosing; long half-life compounds can use less frequent, larger doses
- **Vitamin examples**: Vitamin C ~30 minutes (take 2-3x daily), B12 ~6 days (daily is fine), Vitamin D ~3 weeks (daily or weekly works)
- **Individual variation**: Half-life varies between people based on age, liver/kidney function, genetics, and other factors—published values are averages`,
    common_misconceptions: [
      `**Myth:** Taking more of a supplement makes it last longer in your body.\n**Fact:** Half-life is constant regardless of dose (in most cases). Taking 500mg vs. 250mg of vitamin C doesn't change the half-life; you just start with more and end with more after the same time period.`,
      `**Myth:** If a supplement has a long half-life, you feel effects immediately.\n**Fact:** Long half-life means slow accumulation AND slow onset. Vitamin D's 3-week half-life means it takes 2-3 months to reach steady state—you won't notice effects for weeks.`,
      `**Myth:** Missing one dose of a daily supplement is always a problem.\n**Fact:** For long half-life supplements (vitamin D, B12), missing a day barely changes blood levels. For short half-life supplements (vitamin C), levels drop quickly—but usually recover with the next dose.`,
    ],
    examples: [
      "Caffeine has a 5-hour half-life; 200mg coffee at 2pm means ~100mg still active at 7pm and ~50mg at midnight—explaining afternoon coffee's sleep impact",
      "Melatonin's 40-minute half-life explains why regular melatonin works for sleep onset but not maintenance; extended-release versions address this",
      "Vitamin D's 3-week half-life means weekly 50,000 IU doses produce similar blood levels to daily 7,000 IU—weekly megadoses aren't superior, just different timing",
      "Curcumin's short half-life (6-7 hours) is why enhanced absorption forms or multiple daily doses are recommended for sustained effects",
    ],
  },
  {
    slug: "hba1c",
    why_it_matters: `HbA1c is the gold standard for assessing long-term blood sugar control—far more useful than a single glucose reading. For supplement shoppers interested in metabolic health, HbA1c tells you whether something is actually working over months, not just affecting one day's readings. When evaluating supplements like berberine, chromium, or cinnamon for blood sugar support, HbA1c changes are the most meaningful outcome. An HbA1c reduction of 0.5% is clinically significant; anything less might be noise. Understanding your HbA1c range—normal (<5.7%), prediabetes (5.7-6.4%), or diabetes (≥6.5%)—helps you gauge where you stand and track progress objectively.`,
    simple_explanation: `HbA1c measures what percentage of your hemoglobin (the oxygen-carrying protein in red blood cells) has glucose attached to it. When blood sugar is high, more glucose sticks to hemoglobin, like how a car gets dirtier the longer it stays outside. Since red blood cells live about 3 months, HbA1c reflects your average blood sugar over that period—a much better picture than a single fasting glucose measurement. A normal HbA1c is below 5.7% (about 117 mg/dL average glucose). Prediabetes is 5.7-6.4%, and diabetes is 6.5% or higher. Each 1% increase in HbA1c corresponds to roughly 28 mg/dL higher average glucose. This test doesn't require fasting and reveals patterns that fasting glucose misses—like post-meal spikes that return to normal by morning.`,
    key_points: `### Key Facts About HbA1c

- **Three-month average**: HbA1c reflects average blood glucose over ~3 months, with more recent weeks weighted slightly higher
- **Diagnostic thresholds**: <5.7% normal, 5.7-6.4% prediabetes, ≥6.5% diabetes—each 0.5% reduction meaningfully lowers complication risk
- **No fasting required**: Unlike fasting glucose, HbA1c can be measured anytime, making it more convenient and less affected by recent meals
- **Conversion to glucose**: HbA1c of 5.7% ≈ average glucose of 117 mg/dL; 6.5% ≈ 140 mg/dL; 7.0% ≈ 154 mg/dL
- **Limitations**: Anemia, hemoglobin variants, and conditions affecting red blood cell lifespan can affect HbA1c accuracy independent of actual blood sugar`,
    common_misconceptions: [
      `**Myth:** If my fasting glucose is normal, my HbA1c will be normal too.\n**Fact:** You can have normal fasting glucose but elevated HbA1c if you have significant post-meal blood sugar spikes that your body eventually brings back down. HbA1c captures the full 24-hour picture.`,
      `**Myth:** HbA1c changes quickly with diet changes.\n**Fact:** Since HbA1c reflects 3 months of blood sugar, meaningful changes take 2-3 months to appear. Testing after 2-4 weeks of dietary change is premature and misleading.`,
      `**Myth:** A 0.3% HbA1c reduction from a supplement is impressive.\n**Fact:** 0.3% is within normal test-to-test variation and not clinically meaningful. Significant effects are 0.5% or more; metformin reduces HbA1c by 1-1.5%; lifestyle changes can achieve 0.5-1%.`,
    ],
    examples: [
      "Someone with fasting glucose of 95 mg/dL ('normal') has HbA1c of 6.2% (prediabetes)—post-meal spikes to 180 mg/dL are raising their average without affecting fasting levels",
      "Berberine (500mg 2-3x daily) typically reduces HbA1c by 0.4-0.9% in clinical trials—meaningful but less than metformin's 1-1.5% reduction",
      "After 3 months of low-carb eating, HbA1c drops from 6.4% to 5.5%—from prediabetic to normal range without medication",
      "A person with sickle cell trait may have artificially lower HbA1c readings due to altered red blood cell lifespan—blood sugar may be higher than HbA1c suggests",
    ],
  },
  {
    slug: "hdlcholesterol",
    why_it_matters: `HDL cholesterol has been called "good cholesterol" for decades—but the story is more nuanced than that label suggests. For supplement shoppers, this matters because many products claim to "raise HDL," implying cardiovascular benefit. However, research has shown that artificially raising HDL with drugs doesn't necessarily reduce heart disease. What matters is HDL function—how well it removes cholesterol from arteries—not just the number. Exercise, moderate alcohol, and certain fats naturally raise HDL while also improving function. Niacin raises HDL numbers dramatically but trials show no cardiovascular benefit. Understanding this helps you evaluate HDL-focused supplement claims more critically.`,
    simple_explanation: `HDL (high-density lipoprotein) particles act like garbage trucks for cholesterol, picking it up from tissues and artery walls and delivering it back to the liver for disposal—a process called "reverse cholesterol transport." Higher HDL levels are associated with lower heart disease risk, earning it the "good cholesterol" nickname. But HDL is actually a complex particle with many functions: antioxidant, anti-inflammatory, and blood vessel-protective effects beyond just cholesterol transport. The catch is that more HDL particles doesn't always mean better function. Some ways of raising HDL (exercise, diet) improve both quantity and quality. Other ways (certain drugs, very high alcohol intake) raise the number without improving function—which explains why HDL-raising drugs haven't reduced heart attacks in trials.`,
    key_points: `### Key Facts About HDL Cholesterol

- **Reverse cholesterol transport**: HDL's primary protective function is carrying cholesterol from arteries back to the liver for elimination—like a cleanup crew
- **Function vs. level**: HDL function (how well particles actually remove cholesterol) matters more than just HDL concentration; raising levels doesn't guarantee benefit
- **Healthy range**: Generally, HDL above 40 mg/dL for men and 50 mg/dL for women is considered healthy; very high HDL (>80-100) may not provide additional protection
- **What raises HDL naturally**: Aerobic exercise, moderate alcohol, omega-3 fatty acids, monounsaturated fats, weight loss—these improve both levels AND function
- **Drug disappointments**: CETP inhibitors and niacin raise HDL dramatically but didn't reduce cardiovascular events in large trials—changing the paradigm`,
    common_misconceptions: [
      `**Myth:** Higher HDL is always better for heart health.\n**Fact:** The relationship between HDL and heart health is not linear. Very high HDL (>100 mg/dL) doesn't provide additional protection and may even indicate dysfunction in some cases. Function matters more than absolute levels.`,
      `**Myth:** Supplements that raise HDL will protect your heart.\n**Fact:** Raising HDL through supplements or drugs hasn't been shown to reduce heart disease events. Natural HDL increases from exercise and diet are associated with protection; pharmacological increases often aren't.`,
      `**Myth:** HDL is just one type of particle.\n**Fact:** HDL comes in various sizes and subtypes with different functions. Large HDL2 particles may be more protective than small HDL3 particles. Simple HDL measurements don't capture this complexity.`,
    ],
    examples: [
      "Regular aerobic exercise raises HDL by 5-10% AND improves HDL functionality—one reason exercise reduces heart disease independent of weight loss",
      "Niacin (vitamin B3) can raise HDL by 20-35%, but the AIM-HIGH trial showed no reduction in heart attacks—the first major blow to 'raise HDL at all costs' thinking",
      "Someone with HDL of 80 mg/dL who doesn't exercise may have less protection than someone with HDL of 55 mg/dL who exercises regularly—function matters",
      "Replacing saturated fat with olive oil improves HDL function (anti-inflammatory capacity) even if the HDL number doesn't change much",
    ],
  },
  {
    slug: "hedgesg",
    why_it_matters: `Hedges' g is a statistical measure you'll encounter in systematic reviews and meta-analyses of supplement research. Understanding it helps you interpret whether an effect is meaningful, not just statistically significant. A Hedges' g of 0.2 is "small," 0.5 is "medium," and 0.8 is "large." When a meta-analysis reports that creatine improves strength with g = 0.24, you know that's a small but real effect. When another reports omega-3s improve depression with g = 0.78, you know that's a large effect. This context helps you compare supplements and judge whether benefits are clinically meaningful—not just technically detectable.`,
    simple_explanation: `Hedges' g is a way to measure how big an effect is in standardized terms—comparing apples to apples across different studies. Raw numbers from studies are hard to compare: does a 2-pound muscle gain matter? What about a 3-point improvement on a depression questionnaire? Hedges' g converts everything to the same scale by expressing effects in terms of standard deviations. A Hedges' g of 0.5 means the treatment group improved by half a standard deviation compared to the control group. Cohen proposed rough guidelines: 0.2 = small effect, 0.5 = medium, 0.8 = large. Hedges' g is similar to Cohen's d but includes a correction for small sample sizes (studies with fewer participants), making it slightly more accurate—hence its preference in meta-analyses.`,
    key_points: `### Key Facts About Hedges' g

- **Standardized effect size**: Hedges' g expresses effects in standard deviation units, allowing comparison across different outcome measures and studies
- **Cohen's d cousin**: Very similar to Cohen's d but includes a small-sample bias correction—preferred in meta-analyses that combine studies of varying sizes
- **Rule-of-thumb interpretation**: g = 0.2 (small), 0.5 (medium), 0.8 (large)—but "small" effects can be clinically meaningful if outcomes are important
- **Why it matters**: Statistical significance (p-value) tells you if an effect is real; effect size tells you if it's meaningful. A statistically significant but tiny effect may not be worth pursuing
- **Confidence intervals matter**: Hedges' g should be reported with confidence intervals; wide intervals indicate uncertainty about the true effect size`,
    common_misconceptions: [
      `**Myth:** A statistically significant finding is always clinically meaningful.\n**Fact:** With large enough sample sizes, even trivially small effects become "statistically significant." Hedges' g tells you the magnitude. A significant p-value with g = 0.1 is a real but tiny effect.`,
      `**Myth:** Only "large" effect sizes (g > 0.8) matter.\n**Fact:** Small effects (g = 0.2-0.3) on important outcomes can be clinically meaningful. A small effect on mortality or major disease is more valuable than a large effect on minor symptoms.`,
      `**Myth:** Hedges' g and Cohen's d give very different results.\n**Fact:** The correction factor in Hedges' g is small, especially for larger samples. For practical purposes, they're often nearly identical; Hedges' g is technically preferred but Cohen's d is also widely used.`,
    ],
    examples: [
      "A meta-analysis reports creatine improves strength with Hedges' g = 0.24—a small effect that's clinically meaningful for athletes where every marginal gain matters",
      "Meta-analysis of probiotics for IBS shows g = 0.41—a small-to-medium effect that's meaningful given IBS's significant quality-of-life impact",
      "Vitamin D supplementation for depression shows g = 0.12 in meta-analysis—statistically detectable but probably too small to prioritize for depression treatment",
      "Omega-3 fatty acids for major depression show g = 0.78 in some analyses—a large effect supporting their use as adjunct therapy",
    ],
  },
  {
    slug: "hemeiron",
    why_it_matters: `Understanding the difference between heme and non-heme iron is crucial for addressing iron deficiency—the world's most common nutrient deficiency. For supplement shoppers, this matters because most iron supplements contain non-heme iron (ferrous sulfate, ferrous gluconate), which has lower absorption (5-15%) and more GI side effects than heme iron (15-35% absorption). Heme iron supplements exist and may be better tolerated, but are less common and more expensive. If you're struggling with iron supplement side effects, knowing that heme iron is an alternative—or that vitamin C dramatically increases non-heme absorption—gives you options beyond just suffering through nausea.`,
    simple_explanation: `Iron in food comes in two forms: heme iron (from the blood and muscle of animals) and non-heme iron (from plants and added to supplements). Heme iron is bound within a ring-shaped molecule called a porphyrin ring—the same structure that makes blood red. This structure is recognized by a specific transporter in your intestines that efficiently absorbs the entire package. Non-heme iron is "naked" and must compete with other minerals and be converted to the right form before absorption. The result: heme iron has 15-35% absorption while non-heme iron is only 5-15% absorbed. Vitamin C dramatically helps non-heme absorption by keeping iron in its absorbable form, but has no effect on heme iron (it's already in the optimal package). This explains why vegetarians need 1.8x more dietary iron than meat-eaters.`,
    key_points: `### Key Facts About Heme Iron

- **Superior absorption**: Heme iron is absorbed 2-3x better (15-35%) than non-heme iron (5-15%) because it uses a dedicated intestinal transporter (HCP1)
- **Animal sources only**: Heme iron is found exclusively in animal tissues—red meat, poultry, and fish. No plant contains heme iron
- **Less affected by inhibitors**: Phytates, tannins, and calcium that inhibit non-heme iron absorption have minimal effect on heme iron
- **GI tolerability**: Heme iron supplements cause fewer gastrointestinal side effects (nausea, constipation) than non-heme forms like ferrous sulfate
- **Conversion factor**: Vegetarians/vegans need 1.8x more dietary iron than meat-eaters to compensate for the absorption difference`,
    common_misconceptions: [
      `**Myth:** Spinach is a great iron source (the Popeye myth).\n**Fact:** Spinach contains non-heme iron that's poorly absorbed (~2%) due to high oxalate content. Red meat provides heme iron with 15-35% absorption—you'd need to eat a mountain of spinach to match a small steak.`,
      `**Myth:** Iron is iron—the form doesn't matter.\n**Fact:** Absorption differs dramatically between forms. 100mg of non-heme iron might deliver 5-15mg to your body; 100mg of heme iron might deliver 15-35mg. Form determines actual iron delivery.`,
      `**Myth:** Heme iron supplements are always better than non-heme supplements.\n**Fact:** Heme iron is better absorbed and tolerated, but also more expensive and less studied. Non-heme iron with vitamin C is effective and evidence-based. Choice depends on tolerability, cost, and individual response.`,
    ],
    examples: [
      "Someone with iron deficiency taking ferrous sulfate experiences severe constipation; switching to heme iron polypeptide supplements resolves GI issues while still correcting deficiency",
      "Taking 100mg vitamin C with a non-heme iron supplement can double or triple absorption—from 10% to 20-30%—bridging much of the gap with heme iron",
      "A 3-ounce serving of beef provides ~2.5mg highly-absorbable heme iron; a cup of lentils provides ~3.3mg poorly-absorbed non-heme iron—beef actually delivers more iron despite lower content",
      "Cooking in cast iron adds non-heme iron to acidic foods like tomato sauce—a classic (though modest) way to boost iron intake",
    ],
  },
  {
    slug: "hemoglobin",
    why_it_matters: `Hemoglobin is the protein that carries oxygen in your blood—it's why blood is red and why iron deficiency causes fatigue. For supplement shoppers, hemoglobin levels indicate whether iron, B12, or folate supplementation is working. Low hemoglobin (anemia) is common, affecting 1.6 billion people worldwide, and has many causes that require different treatments. Simply taking iron won't help if your anemia is from B12 deficiency. Knowing your hemoglobin level, and which type of anemia you might have, helps you work with healthcare providers to choose appropriate supplements. Many people take iron unnecessarily, while missing the B12 or folate deficiency that's actually causing their symptoms.`,
    simple_explanation: `Hemoglobin is the oxygen-carrying protein packed inside red blood cells. Each hemoglobin molecule has four iron-containing "heme" groups that grab oxygen in your lungs and release it in your tissues. When you breathe in, oxygen binds to the iron in hemoglobin (turning blood bright red). When blood reaches tissues that need oxygen, hemoglobin releases it (turning blood darker). This is why iron deficiency causes fatigue—without enough iron, you can't make enough hemoglobin, so tissues don't get enough oxygen. Hemoglobin levels are measured in g/dL; normal is roughly 14-18 g/dL for men and 12-16 g/dL for women. Low hemoglobin is called anemia, but there are many types: iron-deficiency anemia (most common), B12-deficiency anemia, folate-deficiency anemia, and others with different causes and treatments.`,
    key_points: `### Key Facts About Hemoglobin

- **Oxygen delivery**: Each hemoglobin molecule carries up to 4 oxygen molecules; hemoglobin concentration directly determines blood's oxygen-carrying capacity
- **Iron is essential**: Each hemoglobin molecule contains 4 iron atoms; iron deficiency directly reduces hemoglobin production and causes the most common type of anemia
- **Normal ranges**: Men: 14-18 g/dL; Women: 12-16 g/dL; these are population averages and individual optimal ranges may vary
- **Anemia types differ**: Iron-deficiency, B12-deficiency, folate-deficiency, and hemolytic anemias all cause low hemoglobin but require different treatments—diagnosis matters
- **Production requirements**: Making hemoglobin requires iron, B vitamins (especially B12 and folate), protein, copper, and vitamin A—deficiency in any can impair production`,
    common_misconceptions: [
      `**Myth:** Low hemoglobin always means you need iron supplements.\n**Fact:** Iron deficiency is the most common cause, but B12 deficiency, folate deficiency, chronic disease, and blood loss all cause low hemoglobin. Taking iron for B12-deficiency anemia won't help and delays proper treatment.`,
      `**Myth:** Athletes with "low normal" hemoglobin are iron deficient.\n**Fact:** Endurance athletes often have lower hemoglobin due to increased plasma volume (sports anemia)—it's a normal adaptation, not deficiency. Ferritin (iron stores) is a better indicator of iron status.`,
      `**Myth:** Higher hemoglobin is always better.\n**Fact:** Very high hemoglobin (>18 g/dL) thickens blood and increases clotting risk. This can occur with dehydration, living at altitude, or blood doping. There's an optimal range, not "more is better."`,
    ],
    examples: [
      "A woman with fatigue has hemoglobin of 10.5 g/dL (low) and ferritin of 8 ng/mL (depleted stores)—iron deficiency anemia, responds well to iron supplementation",
      "A vegan with hemoglobin of 11 g/dL has normal iron but low B12—B12-deficiency anemia that iron supplements can't fix; needs B12 injections or high-dose oral B12",
      "An athlete at altitude has hemoglobin of 17 g/dL—normal adaptation to low oxygen environment, increasing oxygen-carrying capacity through extra red blood cells",
      "Someone taking iron for 3 months sees hemoglobin rise from 11 to 13 g/dL—confirming iron deficiency was the cause and supplementation is working",
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
  console.log("=== BATCH 9: Enhancing Glossary Terms 81-90 ===\n");

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
