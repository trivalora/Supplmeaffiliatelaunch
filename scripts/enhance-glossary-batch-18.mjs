/**
 * Batch 18: Enhance glossary terms 171-180 (alphabetically)
 * Terms: SCFA (Short-Chain Fatty Acids), Serum, Serum 25-hydroxyvitamin D,
 *        Single Blinded, Sleep Quality, Small Intestinal Bacterial Overgrowth,
 *        Standardized Extract, Standardized Mean Difference, Statistical Significance,
 *        Subgroup Analysis
 *
 * Run: node scripts/enhance-glossary-batch-18.mjs
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
    slug: "scfa",
    why_it_matters: `Short-chain fatty acids (SCFAs) are metabolites produced when gut bacteria ferment fiber—understanding them reveals the mechanism behind many fiber and prebiotic supplement benefits. For supplement shoppers, SCFAs explain why fiber is more than just "roughage." When you eat prebiotic fiber (inulin, FOS, resistant starch), your gut bacteria produce SCFAs like butyrate, propionate, and acetate. These aren't waste products—they're signaling molecules that feed colon cells, reduce inflammation, regulate appetite, improve insulin sensitivity, and strengthen the gut barrier. Many gut health supplements work by increasing SCFA production. Understanding SCFAs helps you appreciate why fiber type matters and why feeding your gut bacteria is a legitimate health strategy.`,
    simple_explanation: `Short-chain fatty acids are small fat molecules (2-6 carbons) produced when bacteria in your large intestine ferment dietary fiber. The main SCFAs are acetate (2 carbons), propionate (3 carbons), and butyrate (4 carbons). Your body can't digest fiber directly, but your gut bacteria can—and SCFAs are what they produce. These aren't waste; they're incredibly useful. Butyrate is the primary fuel for colon cells and has anti-inflammatory effects. Propionate travels to the liver and affects metabolism. Acetate enters general circulation and influences appetite and fat storage. SCFAs also strengthen the gut barrier, regulate immune function, and may affect brain health through the gut-brain axis. This is why dietary fiber and prebiotic supplements have effects far beyond just "keeping you regular."`,
    key_points: `### Key Facts About SCFAs

- **Bacterial metabolites**: SCFAs are produced by gut bacteria fermenting fiber; no bacteria or no fiber means minimal SCFA production
- **Three main types**: Butyrate (fuel for colon cells), propionate (liver metabolism), acetate (systemic circulation)—each has distinct effects
- **Gut health foundation**: Butyrate maintains colon cell health, reduces inflammation, and strengthens gut barrier—low butyrate linked to inflammatory bowel disease
- **Metabolic effects**: SCFAs improve insulin sensitivity, regulate appetite hormones (PYY, GLP-1), and may help with weight management
- **Fiber-dependent**: Different fibers produce different SCFA ratios; resistant starch and inulin are particularly good butyrate promoters`,
    common_misconceptions: [
      `**Myth:** You can supplement SCFAs directly to get the benefits.\n**Fact:** Oral SCFAs are absorbed in the small intestine before reaching the colon where they're needed. Feeding gut bacteria fiber to produce SCFAs locally is more effective.`,
      `**Myth:** All fiber produces the same SCFAs.\n**Fact:** Different fibers favor different SCFAs. Resistant starch promotes butyrate; inulin produces more acetate and propionate. Fiber diversity supports SCFA diversity.`,
      `**Myth:** SCFA production happens instantly when you eat fiber.\n**Fact:** It takes time to build up SCFA-producing bacteria. Starting a high-fiber diet or prebiotic supplement may take weeks to fully shift your microbiome and SCFA production.`,
    ],
    examples: [
      "Taking a prebiotic inulin supplement increases gut SCFA production, particularly acetate and propionate, affecting appetite and metabolism",
      "Resistant starch (from cooled potatoes, green bananas) is fermented to butyrate, supporting colon cell health and potentially reducing colon cancer risk",
      "Someone with ulcerative colitis may have reduced butyrate-producing bacteria; butyrate enemas are sometimes used therapeutically",
      "A high-fiber diet produces 100-150 mmol SCFAs daily; low-fiber Western diets produce far less, potentially contributing to gut and metabolic issues",
    ],
  },
  {
    slug: "serum",
    why_it_matters: `Serum is the liquid portion of blood after clotting—and it's where most blood tests measure nutrients and biomarkers. For supplement shoppers, "serum levels" appear constantly in research: serum vitamin D, serum magnesium, serum B12. Understanding that serum is essentially plasma minus clotting factors helps you interpret blood tests and research. However, serum levels don't always reflect whole-body status—magnesium is mostly in cells and bones, not serum. Knowing when serum levels are meaningful (vitamin D, B12) versus potentially misleading (magnesium) helps you understand your lab results and the research behind supplement recommendations.`,
    simple_explanation: `When blood is drawn and allowed to clot, the liquid that remains after removing the clot is serum. It's basically plasma (the liquid part of blood) minus the clotting proteins (fibrinogen, etc.) that got used up forming the clot. Serum contains proteins, hormones, nutrients, electrolytes, and waste products—basically everything dissolved in blood except clotting factors. Most clinical blood tests measure substances in serum: your vitamin D level, cholesterol, blood sugar, liver enzymes—these are serum measurements. In research, "serum concentration" tells you how much of a supplement reaches your bloodstream. Serum and plasma are often used interchangeably for most tests, though technically they're slightly different.`,
    key_points: `### Key Facts About Serum

- **Post-clotting liquid**: Serum is plasma minus clotting proteins; it's what remains after blood clots and the clot is removed
- **Standard test medium**: Most blood tests measure serum concentrations; this is how we assess nutrient status and biomarkers
- **Not always representative**: Serum levels don't always reflect tissue or total body stores—only about 1% of magnesium is in serum
- **Research measure**: Bioavailability studies track serum levels after supplementation to see how much reaches circulation
- **Practical equivalence**: For most nutrition tests, serum and plasma results are essentially equivalent—the difference rarely matters clinically`,
    common_misconceptions: [
      `**Myth:** Serum levels tell you your total body status.\n**Fact:** For some nutrients (vitamin D, B12), serum levels correlate well with body status. For others (magnesium, potassium), most is intracellular; serum can be normal despite deficiency.`,
      `**Myth:** Serum and plasma are the same thing.\n**Fact:** Serum lacks clotting proteins that plasma contains. For most nutrition tests the difference is negligible, but some specialized tests specify which to use.`,
      `**Myth:** Higher serum levels always mean better status.\n**Fact:** There are optimal ranges. Very high serum levels of some nutrients (iron, vitamin A, calcium) can indicate toxicity or dysfunction, not just good status.`,
    ],
    examples: [
      "A vitamin D blood test measures serum 25(OH)D; levels of 30-50 ng/mL are generally optimal, while <20 ng/mL indicates deficiency",
      "Serum magnesium of 2.0 mg/dL appears 'normal' but the person may still be magnesium depleted since 99% is in cells and bones",
      "After taking a supplement, researchers measure serum levels at multiple time points to create an absorption curve showing pharmacokinetics",
      "Serum B12 below 200 pg/mL suggests deficiency, but functional deficiency can occur even with 'normal' levels of 200-400 pg/mL",
    ],
  },
  {
    slug: "serum25ohd",
    why_it_matters: `Serum 25(OH)D is THE test for vitamin D status—understanding it helps you interpret your own results and research findings. For supplement shoppers, this is the number that tells you if you're deficient, sufficient, or optimal in vitamin D. The 25(OH)D form (calcidiol) is what your liver makes from vitamin D3 and circulates for weeks, making it the best marker of vitamin D status. Knowing optimal ranges, what affects levels, and the ongoing debate about ideal targets (20 vs 30 vs 40+ ng/mL) helps you make informed decisions about vitamin D supplementation—one of the most commonly taken supplements worldwide.`,
    simple_explanation: `When you get vitamin D from sunlight or supplements, your liver converts it to 25-hydroxyvitamin D, abbreviated 25(OH)D. This is the storage form that circulates in your blood for 2-3 weeks. Measuring serum 25(OH)D is the standard test for vitamin D status because it reflects both dietary intake and sun production, and it's stable enough to give a meaningful picture. Levels below 20 ng/mL are considered deficient; 20-30 ng/mL is "insufficient" by some standards; 30-50 ng/mL is generally considered optimal; above 100 ng/mL risks toxicity. The kidneys convert 25(OH)D to the active hormone (1,25(OH)2D) as needed, but that's not what we measure for status—it's tightly regulated and doesn't reflect your vitamin D stores.`,
    key_points: `### Key Facts About Serum 25(OH)D

- **Gold standard test**: 25(OH)D is the established marker for vitamin D status; it's what doctors order and research measures
- **Half-life advantage**: 25(OH)D circulates for 2-3 weeks, providing a stable measure unlike the active form which fluctuates hourly
- **Reference ranges**: <20 ng/mL = deficient; 20-30 = insufficient; 30-50 = sufficient; 50-100 = upper normal; >100 = potential toxicity
- **Ongoing debate**: Some experts argue 40-60 ng/mL is optimal; official recommendations are more conservative at 20-30 ng/mL
- **Influencing factors**: Skin color, sun exposure, latitude, season, age, body fat, and supplement dose all affect your levels`,
    common_misconceptions: [
      `**Myth:** The active form of vitamin D (1,25(OH)2D) should be tested.\n**Fact:** 1,25(OH)2D is tightly regulated and doesn't reflect your vitamin D stores. It can be normal or even elevated during deficiency. 25(OH)D is the correct test.`,
      `**Myth:** Everyone should aim for the same 25(OH)D level.\n**Fact:** There's no consensus on "optimal." 20-30 ng/mL prevents deficiency diseases; whether higher levels (40-60) provide additional benefits is debated.`,
      `**Myth:** Once your level is good, you can stop supplementing.\n**Fact:** 25(OH)D has a 2-3 week half-life. Without ongoing sun or supplements, levels decline. Maintenance dosing is needed to maintain target levels.`,
    ],
    examples: [
      "A blood test shows 25(OH)D of 18 ng/mL (deficient); the doctor recommends 2000-4000 IU vitamin D3 daily with retest in 3 months",
      "Someone with 25(OH)D of 35 ng/mL takes 1000 IU daily for maintenance; levels remain stable in the optimal range",
      "A dark-skinned person living in northern latitudes has 25(OH)D of 12 ng/mL despite being outdoors regularly—melanin reduces vitamin D synthesis",
      "After high-dose supplementation (50,000 IU weekly for 8 weeks), 25(OH)D rises from 15 to 45 ng/mL, then maintenance dosing begins",
    ],
  },
  {
    slug: "singleblinded",
    why_it_matters: `Single-blinded studies hide treatment assignment from participants but not researchers—understanding this helps you assess study quality and potential bias. For supplement shoppers, knowing blinding levels helps you evaluate research reliability. In a single-blind study, you don't know if you're getting the real supplement or placebo, but the researchers administering it do know. This prevents participant expectation bias but allows researcher bias (they might treat groups differently or interpret outcomes favorably). Double-blind is better; open-label (no blinding) is weakest. When claims are based on single-blind studies, they're more reliable than open-label but less reliable than double-blind.`,
    simple_explanation: `In clinical trials, "blinding" means hiding which treatment participants receive. Single-blinded means participants don't know if they're getting the real treatment or placebo, but the researchers do know. This is better than no blinding (open-label) because participants can't let expectations affect their responses—they genuinely don't know what they're taking. However, researchers knowing the assignments can introduce subtle bias: they might unintentionally treat groups differently, interpret subjective outcomes favorably for the treatment group, or drop participants differentially. Double-blind studies, where neither participants nor researchers know assignments until the end, eliminate both sources of bias and are the gold standard.`,
    key_points: `### Key Facts About Single-Blinded Studies

- **Participant blinded**: Participants don't know if they receive treatment or placebo, preventing expectation-driven responses
- **Researcher aware**: Researchers know assignments, introducing potential for bias in administration, measurement, or interpretation
- **Better than open-label**: Single-blind eliminates participant placebo effects, which is valuable for subjective outcomes like pain or mood
- **Weaker than double-blind**: Researcher knowledge can influence results, especially for subjective outcome measures
- **Practical necessity sometimes**: Some treatments can't be blinded (exercise interventions, obvious supplements); single-blind may be the best achievable`,
    common_misconceptions: [
      `**Myth:** Single-blind is just as good as double-blind.\n**Fact:** Single-blind eliminates patient expectation bias but not researcher bias. For subjective outcomes especially, double-blind produces more reliable results.`,
      `**Myth:** Blinding only matters for subjective outcomes.\n**Fact:** Even "objective" outcomes can be affected. Researchers might measure differently, decide differently about borderline cases, or influence participant behavior through their expectations.`,
      `**Myth:** All clinical trials are at least single-blind.\n**Fact:** Many nutrition and supplement trials are open-label (no blinding), especially for food interventions. This significantly weakens the evidence they provide.`,
    ],
    examples: [
      "A melatonin sleep study is single-blind: participants get identical capsules (don't know which), but researchers tracking sleep know who got melatonin",
      "Single-blind is often used when placebo matching is possible but researcher blinding isn't practical—better than nothing but not ideal",
      "A single-blind fish oil trial shows benefit for joint pain; the benefit might be partly because researchers evaluated pain differently knowing who got fish oil",
      "Exercise studies are often single-blind at best—participants know if they're exercising, but outcome assessors can be blinded to group assignment",
    ],
  },
  {
    slug: "sleepquality",
    why_it_matters: `Sleep quality is one of the most common outcomes for supplement marketing—understanding how it's measured helps you evaluate claims. For supplement shoppers, "improves sleep quality" is a claim attached to magnesium, melatonin, ashwagandha, glycine, valerian, and many other products. But sleep quality is subjective and measured various ways: self-reported questionnaires (Pittsburgh Sleep Quality Index), actigraphy (movement tracking), or polysomnography (brain waves). Knowing that self-reported improvements can be heavily influenced by placebo effect while objective measures may not change helps you calibrate your expectations for sleep supplements.`,
    simple_explanation: `Sleep quality refers to how restorative and satisfying your sleep is—beyond just how many hours you sleep. It includes factors like: how long it takes to fall asleep (sleep latency), how often you wake during the night, how much time you spend in deep sleep vs light sleep, and how rested you feel in the morning. Measuring sleep quality is tricky because much of it is subjective. The Pittsburgh Sleep Quality Index (PSQI) is a common questionnaire asking about sleep habits and satisfaction. Objective measures include actigraphy (wrist devices tracking movement) and polysomnography (sleep lab with brain wave monitoring). These often don't match—someone might report sleeping better without objective sleep architecture changes, or vice versa.`,
    key_points: `### Key Facts About Sleep Quality

- **Multidimensional**: Sleep quality includes latency (time to fall asleep), efficiency, duration, depth (stages), disruptions, and subjective refreshment
- **Subjective vs objective**: Self-reported quality doesn't always match objective measures; both matter but capture different aspects
- **Common measures**: PSQI (questionnaire), actigraphy (movement), polysomnography (brain waves, gold standard but impractical for most research)
- **Placebo-sensitive**: Subjective sleep quality is highly susceptible to placebo effect; objective measures less so
- **Supplement relevance**: Many sleep supplements improve self-reported quality without changing objective sleep architecture—the perceived benefit is real even if sleep stages don't change`,
    common_misconceptions: [
      `**Myth:** If a supplement improves reported sleep quality, it's objectively improving sleep.\n**Fact:** Subjective improvements often occur without objective changes in sleep architecture. The placebo effect is strong for sleep—believing you'll sleep better often means you feel like you did.`,
      `**Myth:** More hours of sleep always means better quality.\n**Fact:** Sleep quality depends on sleep architecture (time in each stage), continuity, and timing—not just duration. 6 hours of deep, consolidated sleep may be more restorative than 8 hours of fragmented sleep.`,
      `**Myth:** Feeling tired means you had poor sleep quality.\n**Fact:** Fatigue can result from many factors besides sleep quality: nutrition, stress, illness, activity levels. Good sleep quality doesn't guarantee feeling energetic if other factors are off.`,
    ],
    examples: [
      "A magnesium study shows improved PSQI scores (subjective) but no change in polysomnography (objective); participants feel they sleep better without measurable sleep architecture changes",
      "Melatonin reduces sleep latency (objective: time to fall asleep) in studies, but may not increase total sleep time or improve sleep stages",
      "Someone starts glycine (3g before bed) and reports waking more refreshed; whether this is the glycine or expectation is hard to separate without placebo control",
      "Consumer sleep trackers (Fitbit, Oura) estimate sleep stages but aren't as accurate as polysomnography; useful for trends, not precise measurement",
    ],
  },
  {
    slug: "sibo",
    why_it_matters: `Small Intestinal Bacterial Overgrowth (SIBO) is a digestive condition with implications for supplement absorption and gut health products. For supplement shoppers, SIBO is relevant because it can cause malabsorption of nutrients (especially B12 and fat-soluble vitamins), and it's often treated with probiotics, herbal antimicrobials, or dietary changes. Understanding SIBO helps you interpret claims about "gut healing" supplements and recognize when digestive symptoms might need medical evaluation rather than just probiotic supplements. Many people self-diagnose SIBO based on symptoms, but proper testing is important for appropriate treatment.`,
    simple_explanation: `SIBO occurs when bacteria that normally live in the large intestine overgrow in the small intestine. Your small intestine should have relatively few bacteria—that's where nutrients are absorbed. When bacteria overpopulate there, they ferment carbohydrates before you can absorb them, producing gas (bloating, distension), and can damage the intestinal lining (causing malabsorption and diarrhea). Symptoms include bloating, gas, abdominal pain, diarrhea or constipation, and nutrient deficiencies. SIBO is diagnosed via breath tests measuring hydrogen or methane after consuming a sugar solution. It's associated with conditions that slow intestinal movement, reduce stomach acid, or have structural abnormalities. Treatment involves antibiotics (rifaximin) or herbal antimicrobials, plus addressing underlying causes.`,
    key_points: `### Key Facts About SIBO

- **Location matters**: Bacteria in the wrong place (small intestine instead of colon) cause problems; it's not just about having too many bacteria overall
- **Symptoms overlap IBS**: Bloating, gas, abdominal pain, altered bowel habits—SIBO is thought to underlie many IBS cases
- **Malabsorption risk**: SIBO can impair absorption of B12, iron, fat-soluble vitamins (A, D, E, K), and fats—causing deficiencies despite adequate intake
- **Breath testing**: Hydrogen and methane breath tests after lactulose or glucose are used for diagnosis; not perfect but commonly used
- **Root cause important**: SIBO often recurs if underlying causes (low stomach acid, slow motility, structural issues) aren't addressed`,
    common_misconceptions: [
      `**Myth:** Taking probiotics always helps SIBO.\n**Fact:** Probiotics can help some SIBO cases but may worsen others—you're adding more bacteria to an already overpopulated small intestine. Evidence is mixed; some strains help, others may not.`,
      `**Myth:** SIBO means you have too many bad bacteria.\n**Fact:** SIBO often involves normal gut bacteria—just in the wrong location. The issue is where they are (small intestine), not necessarily what type they are.`,
      `**Myth:** You can diagnose SIBO based on symptoms alone.\n**Fact:** SIBO symptoms overlap with IBS, food intolerances, and other conditions. Breath testing or other diagnostics are needed for proper diagnosis.`,
    ],
    examples: [
      "Someone with persistent B12 deficiency despite adequate intake is found to have SIBO; the bacteria were consuming B12 before absorption",
      "Herbal antimicrobials (oregano oil, berberine, neem) are sometimes used as alternatives to antibiotics for SIBO treatment",
      "A person with SIBO follows a low-FODMAP diet to reduce fermentation while treating with rifaximin; symptoms improve significantly",
      "Prokinetics (motility-enhancing drugs or supplements like ginger) are used after SIBO treatment to prevent recurrence by keeping small intestine contents moving",
    ],
  },
  {
    slug: "standardizedextract",
    why_it_matters: `Standardized extracts ensure consistent active compound levels—understanding this helps you choose quality herbal supplements. For supplement shoppers, "standardized to X%" on a label means the extract is guaranteed to contain a specific amount of the presumed active compound. This addresses a major problem with herbal products: natural variation means unstandardized products can vary 10-fold in potency between batches. Standardization enables consistent dosing and makes research results applicable to the product you're taking. However, standardization has limitations—the standardized compound may not be the only active one, and extraction can alter the natural balance of compounds.`,
    simple_explanation: `When you see "standardized extract" on an herbal supplement, it means the manufacturer has processed the herb to contain a specific, guaranteed amount of one or more marker compounds. For example, ginkgo biloba standardized to 24% flavonoid glycosides means every dose contains that percentage of those specific compounds. Without standardization, the amount of active compounds varies based on where the plant was grown, when harvested, and how processed—one batch might have three times more than another. Standardization makes products consistent and allows research findings to apply to specific products. The limitation is that herbs contain many compounds; standardizing one doesn't guarantee the others are present in effective amounts.`,
    key_points: `### Key Facts About Standardized Extracts

- **Consistency guarantee**: Standardization ensures each dose contains a specific amount of marker compound(s), reducing batch-to-batch variation
- **Research applicability**: Most herbal research uses standardized extracts; using the same standardization makes applying research results more reliable
- **Marker selection challenge**: The standardized compound may not be the only—or even the main—active ingredient; other important compounds may vary
- **Extraction methods matter**: How the extract is made affects which compounds are retained; standardization to one marker doesn't guarantee complete profile
- **Common examples**: Ginkgo (24% flavonoids, 6% terpenes), milk thistle (80% silymarin), saw palmetto (85-95% fatty acids)`,
    common_misconceptions: [
      `**Myth:** Standardized extracts are always better than whole herb.\n**Fact:** Standardization ensures consistency but may alter natural compound ratios. Some herbalists prefer whole plant preparations believing in synergy between compounds—evidence for either is herb-specific.`,
      `**Myth:** If a product is standardized, all the active compounds are controlled.\n**Fact:** Standardization typically controls one or a few marker compounds. Other potentially important compounds aren't guaranteed—they may vary.`,
      `**Myth:** Higher standardization percentages are always better.\n**Fact:** Percentage indicates concentration, not quality. A 50% extract isn't necessarily better than 24%—what matters is whether the dose matches effective research doses.`,
    ],
    examples: [
      "Ginkgo biloba extract standardized to 24% flavonoid glycosides and 6% terpene lactones—this matches the EGb 761 extract used in most research",
      "Two milk thistle products: one standardized to 80% silymarin, one unstandardized—the standardized version provides predictable dosing",
      "St. John's Wort standardized to 0.3% hypericin, though research now suggests hyperforin may be more important—standardization to the wrong marker",
      "Ashwagandha standardized to 5% withanolides provides consistent active compound levels; root powder products vary widely",
    ],
  },
  {
    slug: "smd",
    why_it_matters: `Standardized Mean Difference (SMD) is a statistical measure that allows comparing effects across studies using different measurement scales—essential for understanding meta-analyses. For supplement shoppers, SMD appears in research summaries and meta-analyses. It tells you how large an effect is in standard deviation units, making it possible to combine studies that measured outcomes differently (one used a 10-point pain scale, another used a 100-point scale). Knowing how to interpret SMD (0.2 = small, 0.5 = medium, 0.8 = large) helps you understand whether a supplement's effect is meaningful or trivial, even when you can't interpret the original measurement units.`,
    simple_explanation: `When researchers want to combine results from multiple studies that used different measurement tools, they use Standardized Mean Difference. Imagine two pain studies: one uses a 0-10 scale, another uses a 0-100 scale. You can't just average "2 points" and "20 points." SMD converts effects to a common scale by expressing them in standard deviation units. An SMD of 0.5 means the treatment group improved by half a standard deviation compared to control. This allows combining and comparing across different studies and measures. The interpretation: SMD around 0.2 is a small effect, 0.5 is medium, 0.8 is large. Most supplement effects are in the small-to-medium range.`,
    key_points: `### Key Facts About SMD

- **Universal comparison**: SMD expresses effects in standard deviations, allowing comparison across different scales and studies
- **Effect size categories**: Cohen's conventions: 0.2 = small, 0.5 = medium, 0.8 = large—though clinical significance depends on context
- **Meta-analysis essential**: SMD enables pooling data from studies using different measurement instruments into one summary effect
- **Direction matters**: Positive or negative SMD indicates which direction the effect goes; the sign depends on how outcomes are coded
- **Clinical translation**: SMD doesn't tell you how many pain points or mood scale points improved—just the relative magnitude of effect`,
    common_misconceptions: [
      `**Myth:** SMD tells you the actual size of improvement.\n**Fact:** SMD is in standard deviation units, not original units. An SMD of 0.5 doesn't mean "half a point better"—you need the original scale's standard deviation to translate back.`,
      `**Myth:** Small SMD means the treatment doesn't work.\n**Fact:** Small effects (0.2) can be meaningful for common conditions or when treatments are low-risk. Effect size interpretation requires clinical context, not just statistical convention.`,
      `**Myth:** SMD and Cohen's d are the same thing.\n**Fact:** They're related but can differ based on which standard deviation is used (pooled, control group only, etc.). In practice, they're often similar and interpreted the same way.`,
    ],
    examples: [
      "A meta-analysis of magnesium for anxiety shows SMD of 0.35—a small-to-medium effect favoring magnesium across multiple studies using different anxiety scales",
      "Omega-3s for depression have SMD around 0.5-0.6 in meta-analyses—a medium effect, clinically meaningful for a low-risk intervention",
      "An SMD of 0.15 for glucosamine on knee pain is small and may not be clinically noticeable, even if statistically significant in large studies",
      "Comparing fish oil to antidepressants: fish oil SMD ~0.5, SSRIs SMD ~0.3-0.5—surprisingly similar effect sizes, though mechanisms differ",
    ],
  },
  {
    slug: "statisticalsignificance",
    why_it_matters: `Statistical significance tells you whether a result is likely real vs due to chance—but it doesn't tell you if the effect matters clinically. For supplement shoppers, understanding statistical significance helps you avoid being impressed by "significant" results that are trivially small. A study with 10,000 participants can find "statistically significant" differences of 0.5% that have no practical relevance. The p<0.05 threshold is arbitrary and often misunderstood. Conversely, non-significant results don't prove zero effect—the study may have been too small. Learning to ask "is this clinically meaningful?" rather than just "is it significant?" helps you evaluate supplement research properly.`,
    simple_explanation: `Statistical significance answers one question: "Is this result likely real, or could it have happened by random chance?" The standard threshold is p<0.05, meaning there's less than 5% probability the result occurred by chance if the treatment has no real effect. But here's the crucial part: statistical significance says nothing about size or importance of the effect. A huge study can find statistically significant effects too small to matter clinically. A small study might miss real effects because it lacked power. "Significant" in statistics doesn't mean "important"—it just means "probably not random chance." Always ask: significant AND clinically meaningful?`,
    key_points: `### Key Facts About Statistical Significance

- **Probability statement**: p<0.05 means <5% chance of seeing this result if the null hypothesis (no effect) were true—not 95% certainty the treatment works
- **Not clinical significance**: Statistical significance doesn't indicate effect size or clinical importance; tiny effects can be statistically significant in large studies
- **Sample size dependent**: Larger studies find smaller effects significant; smaller studies need larger effects to reach significance
- **Arbitrary threshold**: p<0.05 is convention, not magic. p=0.049 is "significant," p=0.051 is "not significant"—but they're practically identical
- **Type I and II errors**: Significance testing balances false positives (claiming effect when none exists) vs false negatives (missing real effects)`,
    common_misconceptions: [
      `**Myth:** Statistically significant means clinically important.\n**Fact:** Significance just means "probably not chance." A 0.5-point improvement on a 100-point scale can be significant with enough participants—but completely meaningless clinically.`,
      `**Myth:** Non-significant results mean the treatment doesn't work.\n**Fact:** Non-significance could mean no effect OR insufficient power to detect a real effect. Small studies regularly miss modest effects. "Absence of evidence isn't evidence of absence."`,
      `**Myth:** p=0.05 is a meaningful cutoff.\n**Fact:** It's arbitrary convention. p=0.049 and p=0.051 aren't meaningfully different, yet one is "significant" and one isn't. The dichotomy is problematic.`,
    ],
    examples: [
      "A supplement trial with 5,000 participants shows blood pressure reduction of 0.5 mmHg (p=0.02)—statistically significant but clinically meaningless",
      "A 30-person trial of vitamin D for mood shows p=0.12 (not significant); this doesn't prove no effect—the study was likely underpowered",
      "Meta-analysis shows fish oil reduces triglycerides by 25 mg/dL (p<0.001)—both statistically significant AND clinically meaningful",
      "Publication bias means non-significant results often go unpublished; we see only the significant findings, overestimating effects",
    ],
  },
  {
    slug: "subgroupanalysis",
    why_it_matters: `Subgroup analysis examines whether treatment effects differ in specific groups—understanding its limitations helps you interpret supplement research claims correctly. For supplement shoppers, subgroup analyses often generate headlines: "Supplement X helps older adults" or "Vitamin Y works for people with low baseline levels." While sometimes revealing real effect modifications, subgroup analyses are often unreliable—multiple comparisons create false positives, and they're frequently done after seeing the data (cherry-picking). Knowing that subgroup findings should be treated as hypothesis-generating rather than conclusive helps you avoid overinterpreting promising-looking subset results.`,
    simple_explanation: `Subgroup analysis is when researchers look at whether a treatment works differently in specific subgroups of participants—say, older vs younger, male vs female, deficient vs sufficient at baseline. This can reveal important effect modifiers: maybe vitamin D only helps people who were deficient, not everyone. The problem is statistical: if you compare enough subgroups, some will show "significant" differences by chance alone. If a main trial is negative but one subgroup looks positive, that's often chance rather than a real effect. Subgroup analyses are valuable for generating hypotheses ("maybe this works for X population") but shouldn't be treated as proof. Reliable subgroup effects require pre-specification and replication.`,
    key_points: `### Key Facts About Subgroup Analysis

- **Effect modification**: Subgroup analyses explore whether effects differ by participant characteristics (age, sex, baseline status, genetics)
- **Multiple comparison problem**: Testing many subgroups inflates false positive risk; 1 in 20 subgroups will appear significant by chance at p<0.05
- **Pre-specified vs post-hoc**: Pre-specified subgroups (planned before data collection) are more credible than post-hoc (after seeing data) analyses
- **Hypothesis generating**: Subgroup findings should generate hypotheses for new trials, not be treated as established facts
- **Cherry-picking risk**: Highlighting positive subgroups from otherwise negative trials is common in marketing—beware selective reporting`,
    common_misconceptions: [
      `**Myth:** If a subgroup shows significant benefit, the supplement works for that group.\n**Fact:** Multiple subgroup comparisons generate false positives. A single subgroup finding needs replication in a trial designed to test that specific group.`,
      `**Myth:** Negative main result + positive subgroup = supplement works for subgroup.\n**Fact:** This is often chance variation or cherry-picking. The overall negative result is usually more reliable than a post-hoc subgroup finding.`,
      `**Myth:** All subgroup analyses are equally reliable.\n**Fact:** Pre-specified subgroups with biological rationale are more credible. Post-hoc subgroups, especially when multiple are tested, are often spurious.`,
    ],
    examples: [
      "A vitamin D trial shows no overall fracture benefit, but subgroup analysis suggests benefit in those with baseline <20 ng/mL—needs replication in a deficient-only trial",
      "A supplement company highlights a significant subgroup (men over 50) from a negative overall trial—likely cherry-picking rather than real effect modification",
      "Pre-specified subgroup: omega-3 trial planned to analyze high vs low triglyceride groups separately—more credible than post-hoc discovery",
      "Meta-analyses often show larger effects in smaller, lower-quality trials—a subgroup analysis revealing this suggests publication bias rather than real subgroup effect",
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
  console.log("=== BATCH 18: Enhancing Glossary Terms 171-180 ===\n");

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
