/**
 * Batch 6: Enhance glossary terms 51-60 (alphabetically)
 * Terms: Dose-Dependent, Double Blinded, Drug Interactions, Dysbiosis,
 *        Effect Size, Efficacy, Eicosanoids, Electrolytes, Empirical Evidence, Endothelium
 *
 * Run: node scripts/enhance-glossary-batch-6.mjs
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
    slug: "dosedependent",
    why_it_matters: `Dose-dependent relationships are fundamental to understanding whether a supplement will help, do nothing, or potentially harm you. For supplement shoppers, this concept is crucial because marketing often oversimplifies—implying that if some is good, more must be better. In reality, many supplements have a therapeutic window: too little does nothing, the right amount helps, and too much causes problems. Vitamin D, fish oil, vitamin A, iron, and zinc all show dose-dependent toxicity at high levels. Conversely, some supplements need higher doses than typically sold to be effective. Understanding dose-response helps you find the sweet spot where benefits are maximized and risks minimized.`,
    simple_explanation: `Dose-dependent means the effect you get changes based on how much you take—like the difference between one cup of coffee (alert), three cups (jittery), and ten cups (heart pounding anxiety). Your body responds differently to different amounts of the same substance. This relationship isn't always linear or intuitive. Some supplements have a "threshold" where nothing happens until you reach a certain dose, then effects kick in. Others follow a U-shaped curve where both too little AND too much are problematic, with an optimal middle range. For example, selenium is essential at 55-200mcg daily but toxic above 400mcg. Understanding this helps you interpret research—a study using 5000 IU of vitamin D tells you nothing about what 1000 IU will do for you.`,
    key_points: `### Key Facts About Dose-Dependent Relationships

- **Therapeutic window**: Many supplements have an optimal dose range—too low is ineffective, too high causes side effects or toxicity. This range varies by individual and supplement
- **Non-linear responses**: Effects don't always scale proportionally with dose. Doubling a dose might produce minimal additional benefit or dramatically increase side effects
- **U-shaped and J-shaped curves**: Some nutrients show optimal effects at moderate doses with diminished benefits or increased risks at both extremes (selenium, vitamin E, zinc)
- **Individual variation**: Dose-response varies by body weight, metabolism, genetics, and health status—a 120lb person and a 220lb person may need different doses
- **Research implications**: Study results at one dose may not apply to other doses—positive results at 2000mg don't guarantee 500mg works; negative results at megadoses don't mean moderate doses are harmful`,
    common_misconceptions: [
      `**Myth:** If a small dose is beneficial, a larger dose is even better.\n**Fact:** Dose-response curves often plateau (no additional benefit) or reverse (higher doses cause harm). Vitamin A, iron, zinc, and many antioxidants become toxic at high doses while being essential at moderate levels.`,
      `**Myth:** The dose on the bottle is optimal for everyone.\n**Fact:** Supplement labels typically provide general recommendations that may be too low for some people and too high for others. Body weight, health status, existing levels, and individual metabolism all affect your optimal dose.`,
      `**Myth:** Natural supplements can't have dose-dependent toxicity.\n**Fact:** Natural substances follow the same pharmacological principles as drugs. Selenium, vitamin A, vitamin D, and iron are all naturally occurring and all toxic at high doses. "Natural" doesn't exempt a substance from dose-response relationships.`,
    ],
    examples: [
      "Melatonin shows paradoxical dose-response: 0.3-0.5mg often works better for sleep than 5-10mg, where higher doses can cause grogginess or even rebound wakefulness",
      "Fish oil at 1g daily may provide cardiovascular benefits, but 4g+ daily can increase bleeding risk and LDL cholesterol in some people",
      "Magnesium citrate at 200-400mg aids sleep and muscle relaxation; at 800mg+ it causes diarrhea—this is dose-dependent GI tolerance",
      "Vitamin D needs differ by starting level: someone at 15 ng/mL might need 5000 IU daily, while someone at 40 ng/mL might only need 1000 IU maintenance",
    ],
  },
  {
    slug: "doubleblinded",
    why_it_matters: `Double-blinded studies are the gold standard for eliminating bias in research, and for supplement shoppers, understanding this concept helps you evaluate which product claims are supported by reliable evidence. When both researchers and participants don't know who receives the real supplement versus placebo, expectations can't influence the results. This is especially important for supplements because many effects (energy, mood, sleep, pain) are highly susceptible to placebo effects. A supplement that performs well only in unblinded studies but fails in double-blind trials probably doesn't work beyond placebo. Always ask: was the study double-blinded?`,
    simple_explanation: `Imagine testing a new energy supplement. If participants KNOW they're getting the real thing, they might feel energized just from expectation—that's placebo effect. If the researchers KNOW who gets what, they might unconsciously treat groups differently or interpret results favorably. Double-blinding solves both problems: neither participants nor researchers know who gets the active supplement versus placebo until the study ends and the "code is broken." The supplement and placebo are made to look, taste, and smell identical. A third party holds the code. This way, any difference in outcomes must come from the supplement itself, not from expectations or researcher bias. It's like a fair taste test where no one knows which cola is which.`,
    key_points: `### Key Facts About Double-Blinded Studies

- **Eliminates expectation bias**: Participants can't have placebo responses if they don't know which treatment they received
- **Prevents researcher bias**: Blinded researchers can't unconsciously influence measurements, interpretations, or participant interactions
- **Not always possible**: Some interventions can't be blinded (exercise, dietary interventions, treatments with obvious side effects)—these require other bias-reduction strategies
- **Code breaking at end**: The randomization code revealing who got what is only opened after all data is collected and analyzed
- **Active placebos**: Sometimes researchers use placebos that mimic the supplement's side effects (like vitamin B causing yellow urine) to maintain blinding integrity`,
    common_misconceptions: [
      `**Myth:** Single-blinded studies are almost as good as double-blinded.\n**Fact:** Single-blinding (only participants are blinded) still allows researcher bias in measurements, data recording, and result interpretation. Double-blinding eliminates bias from both sides—the difference in reliability is substantial.`,
      `**Myth:** Blinding doesn't matter for objective outcomes like blood tests.\n**Fact:** While blinding matters most for subjective outcomes, it still affects objective measures through researcher behavior during the study, participant compliance, and data handling decisions.`,
      `**Myth:** If a double-blind study shows no effect, the supplement definitely doesn't work.\n**Fact:** The study could have methodological issues: wrong dose, wrong form, wrong population, too short duration, too small sample. Null results need context, but they ARE more reliable than positive results from unblinded studies.`,
    ],
    examples: [
      "A double-blind trial of St. John's Wort for depression: capsules are identical, neither patients nor doctors know who gets the herb vs. placebo, and depression scales are measured objectively",
      "Omega-3 studies use fishy-smelling placebo oils to maintain blinding—participants can't tell which capsule they received by smell or taste",
      "Creatine studies are relatively easy to blind because creatine powder and placebo powder look identical and have minimal taste",
      "A vitamin B complex trial uses riboflavin in the placebo to cause yellow urine in both groups—otherwise neon urine would reveal who got the real supplement",
    ],
  },
  {
    slug: "druginteractions",
    why_it_matters: `Drug interactions are the most serious safety consideration for supplement shoppers, yet they're frequently overlooked. Many people assume supplements are "natural" and therefore safe to combine with anything—this is dangerously incorrect. Some supplements can make medications ineffective (potentially life-threatening if you depend on that medication), while others can amplify drug effects to toxic levels. St. John's Wort alone interacts with over 500 prescription drugs. Grapefruit affects dozens of medications. Before adding any supplement to a medication regimen, you MUST research interactions or consult a pharmacist. Your doctor may not know—many aren't trained in supplement interactions.`,
    simple_explanation: `Drug interactions occur when two substances affect each other's behavior in your body. With supplements, this typically happens in three ways: (1) Competition—the supplement and drug fight for the same enzyme that processes them, causing one to build up to dangerous levels; (2) Opposing effects—a supplement does the opposite of what your medication does (like vitamin K opposing blood thinners); (3) Additive effects—both substances do similar things, making the combined effect too strong (like multiple blood-thinning supplements with blood-thinning drugs). Think of your liver like a processing plant: if two substances need the same equipment (enzymes), there's a bottleneck. One backs up while the other hogs the machinery.`,
    key_points: `### Key Facts About Drug Interactions

- **CYP450 enzymes**: Most drug interactions involve cytochrome P450 liver enzymes (especially CYP3A4)—substances that inhibit or induce these enzymes affect medication levels
- **St. John's Wort danger**: This herb is a potent enzyme inducer that makes many medications ineffective, including birth control, HIV medications, transplant drugs, and antidepressants
- **Blood thinner caution**: Fish oil, vitamin E, ginkgo, garlic, turmeric, and many other supplements enhance bleeding risk when combined with blood thinners like warfarin
- **Pharmacist resource**: Pharmacists are often better than doctors for interaction checking because drug interactions are a pharmacy specialty—use your pharmacist as a resource
- **Timing can help**: Some interactions are mitigated by taking the supplement and drug at different times (e.g., minerals that bind medications should be spaced several hours apart)`,
    common_misconceptions: [
      `**Myth:** Natural supplements don't interact with prescription drugs.\n**Fact:** Supplements contain pharmacologically active compounds that absolutely interact with drugs. "Natural" means nothing regarding drug interactions—plant chemicals interact with the same enzymes and receptors as synthetic drugs.`,
      `**Myth:** If my doctor prescribed the medication, they'd warn me about supplement interactions.\n**Fact:** Many physicians receive minimal training in supplement interactions and may not ask about your supplements. It's YOUR responsibility to check interactions and inform all healthcare providers of everything you take.`,
      `**Myth:** Over-the-counter supplements are tested for drug interactions before being sold.\n**Fact:** Unlike drugs, supplements aren't required to have interaction testing before market. Interaction data comes from post-market reports, case studies, and independent research—the burden is on consumers to research.`,
    ],
    examples: [
      "St. John's Wort induces CYP3A4 enzymes, reducing blood levels of birth control pills and causing contraceptive failure—documented unintended pregnancies have occurred",
      "Grapefruit juice (and concentrated extracts) inhibits CYP3A4, causing many drugs (statins, calcium channel blockers, some sedatives) to reach dangerously high levels",
      "Calcium and magnesium supplements can bind thyroid medication (levothyroxine) in the gut, reducing absorption—take at least 4 hours apart",
      "Fish oil, vitamin E, and garlic all thin blood mildly; combined with warfarin or aspirin, they can increase bleeding risk significantly",
    ],
  },
  {
    slug: "dysbiosis",
    why_it_matters: `Dysbiosis—gut microbiome imbalance—is increasingly recognized as underlying or contributing to numerous health conditions beyond digestive issues, including mental health, autoimmune diseases, obesity, and cardiovascular disease. For supplement shoppers, understanding dysbiosis helps you evaluate the growing market of probiotics, prebiotics, and gut health products. Not all probiotics address dysbiosis effectively; strain selection, dose, and the type of imbalance matter enormously. Additionally, understanding what causes dysbiosis (antibiotics, poor diet, chronic stress) helps you protect your microbiome rather than just treating symptoms with supplements after damage occurs.`,
    simple_explanation: `Your gut contains trillions of bacteria, fungi, and other microbes—your microbiome. When this community is balanced and diverse, it helps digest food, produces vitamins, trains your immune system, and even affects your mood via the gut-brain axis. Dysbiosis is when this community becomes unbalanced: beneficial species decline, potentially harmful species overgrow, or diversity drops dramatically. Think of it like a garden: a healthy garden has many plant species working together; dysbiosis is like weeds taking over while flowers die. Antibiotics are the most dramatic cause (like herbicide killing everything), but poor diet (low fiber starves good bacteria), chronic stress, and infections also shift the balance. Symptoms range from digestive issues to brain fog to systemic inflammation.`,
    key_points: `### Key Facts About Dysbiosis

- **Diversity matters most**: Microbiome health is primarily about diversity—having many different species. Dysbiosis typically involves loss of diversity, not just "bad" bacteria overgrowth
- **Antibiotic devastation**: A single course of antibiotics can reduce microbiome diversity for months to years; some species may never fully recover
- **Diet is foundational**: Fiber feeds beneficial bacteria; processed foods, sugar, and artificial sweeteners tend to promote dysbiosis. Diet beats supplements for microbiome health
- **Beyond digestion**: Dysbiosis is associated with depression, anxiety, autoimmune conditions, obesity, cardiovascular disease, and allergies via immune and metabolic pathways
- **Probiotic limitations**: Standard probiotics may not colonize permanently—they're often transient. Addressing root causes (diet, stress) matters more than continuous probiotic use`,
    common_misconceptions: [
      `**Myth:** Taking probiotics after antibiotics fully restores the microbiome.\n**Fact:** Probiotics may help recovery but can't fully replace lost species. Some antibiotic-killed bacteria never return. Spore-based probiotics and fermented foods may help, but full recovery often takes months to years and may be incomplete.`,
      `**Myth:** Dysbiosis always causes obvious digestive symptoms.\n**Fact:** Dysbiosis can exist without significant GI symptoms. The gut-brain axis means dysbiosis might manifest as mood issues, brain fog, or fatigue. Systemic inflammation from dysbiosis can affect joints, skin, or cardiovascular system.`,
      `**Myth:** All probiotics correct dysbiosis equally.\n**Fact:** Different probiotic strains have different effects. A Lactobacillus strain proven for antibiotic-associated diarrhea may do nothing for IBS-related dysbiosis. Strain specificity and matching the right probiotic to the right condition matters enormously.`,
    ],
    examples: [
      "Someone takes broad-spectrum antibiotics for 10 days; their microbiome diversity drops 30-40% and certain beneficial species (like Bifidobacteria) may take 6+ months to recover",
      "A high-fiber diet (beans, vegetables, whole grains) consistently increases Bifidobacteria and Lactobacilli populations within weeks—feeding the beneficial bacteria",
      "Saccharomyces boulardii, a beneficial yeast, survives antibiotics and is specifically evidence-based for preventing antibiotic-associated diarrhea",
      "Chronic stress increases gut permeability and shifts microbiome composition toward inflammatory species—stress management is legitimate gut health intervention",
    ],
  },
  {
    slug: "effectsize",
    why_it_matters: `Effect size tells you how BIG a difference or effect is—not just whether it exists. For supplement shoppers, this is crucial because statistical significance and practical significance are different things. A supplement study might find a "statistically significant" improvement with p<0.05, but if the actual difference is tiny (say, 2% improvement), is it worth the money and effort? Effect size answers that question. It also allows you to compare different supplements studied in different ways. If Supplement A has an effect size of 0.2 (small) and Supplement B has 0.8 (large) for the same outcome, you know B produces much bigger effects regardless of how the studies were designed.`,
    simple_explanation: `Imagine two weight loss supplements. Supplement A produces "statistically significant" weight loss of 0.5 pounds in a large study. Supplement B produces 8 pounds of weight loss. Both are "significant" (the p-value says the effect is real, not chance), but the effect SIZE is wildly different. Effect size quantifies this magnitude. The most common measure, Cohen's d, uses standard deviations: 0.2 is a small effect (barely noticeable), 0.5 is medium (noticeable), and 0.8+ is large (substantial). When reading supplement research, always look beyond "significant" to ask "how big was the effect?" A small effect might not justify the cost, side effects, or hassle of supplementation.`,
    key_points: `### Key Facts About Effect Size

- **Cohen's d scale**: d=0.2 is small, d=0.5 is medium, d=0.8 is large—this applies across psychology, medicine, and supplement research
- **Independent of sample size**: Effect size doesn't change with study size, unlike p-values. A weak effect is weak whether you measure 50 or 50,000 people
- **Meta-analysis essential**: When combining multiple studies (meta-analysis), effect sizes are pooled to estimate true effects across all available evidence
- **Clinical significance**: Effect size helps determine if an effect matters in real life. Statistical significance just means "not zero"—effect size tells you if it's worth caring about
- **Variation by outcome**: The same supplement might have large effect sizes for one outcome (e.g., creatine for strength) and small/none for another (e.g., creatine for endurance)`,
    common_misconceptions: [
      `**Myth:** Statistically significant results are always meaningful.\n**Fact:** With large enough sample sizes, even trivial effects become statistically significant. A huge study might detect a "significant" 1% difference that no one would notice in real life. Effect size reveals when significance is meaningful.`,
      `**Myth:** Small effect sizes mean the supplement is worthless.\n**Fact:** Small effects can be valuable if the outcome is serious (even small reductions in heart attacks matter), if the supplement is cheap and safe, or if effects accumulate over time. Context determines value.`,
      `**Myth:** Effect sizes are consistent across populations and conditions.\n**Fact:** Effect sizes often vary dramatically between studies due to population differences, dosing, duration, and outcome measures. Meta-analyses account for this heterogeneity when pooling results.`,
    ],
    examples: [
      "Creatine for strength gains shows large effect sizes (d≈0.8) in meta-analyses—it consistently produces substantial, noticeable improvements",
      "Many nootropics (cognitive enhancers) show only small effect sizes (d=0.1-0.3) in healthy adults—statistically detectable but barely perceptible in daily life",
      "Omega-3s for depression show medium effect sizes (d≈0.5) in meta-analyses of depressed populations—meaningful clinical improvement",
      "A study finds 'significant' blood pressure reduction of 2 mmHg (d=0.15)—technically real but unlikely to matter for cardiovascular outcomes",
    ],
  },
  {
    slug: "efficacy",
    why_it_matters: `Efficacy refers to whether a treatment works under ideal conditions—controlled studies with selected participants who comply perfectly. This differs from "effectiveness" (how it works in the real world). For supplement shoppers, understanding efficacy helps interpret research claims properly. A supplement with proven efficacy might still fail for you if you don't match the study population, don't take it correctly, or don't get a quality product. Conversely, something with modest efficacy data might work well in real-world conditions. Efficacy is the starting point for evaluating supplements, but real-world factors determine whether that efficacy translates to your actual results.`,
    simple_explanation: `Efficacy is like testing a car's performance on a perfect racetrack with a professional driver—it shows what's possible under ideal conditions. In supplement research, efficacy studies use controlled environments: carefully selected participants, standardized products, verified compliance (often with pill counts or blood tests), and elimination of confounding factors. These studies answer "CAN this supplement work?" but not necessarily "WILL it work for average people in normal life?" You might not take it consistently, your product might vary from what was studied, or you might have conditions that differ from study participants. Efficacy is necessary but not sufficient for real-world results.`,
    key_points: `### Key Facts About Efficacy

- **Efficacy vs. effectiveness**: Efficacy is performance under ideal conditions; effectiveness is performance in real-world use. Effectiveness is usually lower than efficacy
- **Ideal conditions**: Efficacy studies control for compliance, product quality, participant selection, and confounding variables—conditions that don't exist in normal supplement use
- **Randomized controlled trials**: RCTs are the gold standard for establishing efficacy because they isolate the supplement's effect from other factors
- **Population specific**: Efficacy demonstrated in athletes doesn't guarantee efficacy in elderly; effects in deficient people may not apply to sufficient people
- **Dose and form dependent**: Efficacy at one dose or form doesn't extend to all doses and forms—magnesium citrate efficacy doesn't prove magnesium oxide works equally`,
    common_misconceptions: [
      `**Myth:** If a supplement has proven efficacy, it will definitely work for me.\n**Fact:** Efficacy studies use ideal conditions with selected populations. Your compliance, product quality, individual biology, and health status may differ from study conditions—real-world results vary.`,
      `**Myth:** Lack of efficacy data means a supplement doesn't work.\n**Fact:** Absence of evidence isn't evidence of absence. Many traditional supplements simply haven't been studied adequately. However, after decades of use without efficacy data, claims are more suspect.`,
      `**Myth:** Efficacy is more important than safety.\n**Fact:** A supplement with moderate efficacy and excellent safety may be preferable to one with high efficacy but significant side effects. The benefit-risk ratio matters more than efficacy alone.`,
    ],
    examples: [
      "Creatine has robust efficacy data from dozens of RCTs—it works under controlled conditions AND translates well to real-world use for strength gains",
      "Omega-3 efficacy for triglyceride reduction is clear (20-30% reduction at 2-4g/day), but real-world effectiveness depends on consistent daily intake",
      "A proprietary herbal blend might have one efficacy study funded by the manufacturer using specific extraction—results may not apply to other brands",
      "Vitamin D efficacy for bone health is established in deficient populations, but supplementing already-sufficient people shows little to no efficacy",
    ],
  },
  {
    slug: "eicosanoids",
    why_it_matters: `Eicosanoids are the molecular messengers that execute inflammation, pain, blood clotting, and immune responses at the cellular level. For supplement shoppers, understanding eicosanoids explains WHY omega-3s, omega-6s, and anti-inflammatory supplements work (or don't). Your dietary fat intake directly determines which eicosanoids your body produces. Omega-6 fats produce pro-inflammatory eicosanoids (prostaglandins, leukotrienes); omega-3 fats produce less inflammatory alternatives. This is the mechanism behind fish oil's anti-inflammatory effects—it shifts eicosanoid production toward less inflammatory species. It also explains why the omega-6:omega-3 ratio in your diet matters more than absolute amounts.`,
    simple_explanation: `Eicosanoids are chemical messengers derived from fatty acids that control inflammation, pain, fever, blood clotting, and immune responses. Think of them as local hormones—they're produced in cells, act nearby, and break down quickly. The key insight: the fats you eat become the raw materials for eicosanoids. Arachidonic acid (an omega-6 fat from meat and eggs) becomes pro-inflammatory eicosanoids like prostaglandin E2 (causes pain and inflammation) and leukotriene B4 (recruits immune cells). EPA (an omega-3 from fish) produces less inflammatory versions. When you take fish oil, you're literally changing the raw materials available for eicosanoid production, shifting the balance toward less inflammation. This is why dietary fat quality affects inflammatory conditions like arthritis, cardiovascular disease, and asthma.`,
    key_points: `### Key Facts About Eicosanoids

- **Three main families**: Prostaglandins (pain, fever, inflammation, blood vessel tone), leukotrienes (allergic and inflammatory responses), and thromboxanes (blood clotting)
- **Fat determines production**: Omega-6 (arachidonic acid) produces pro-inflammatory eicosanoids; omega-3 (EPA) produces less inflammatory alternatives. Diet shifts this balance
- **NSAIDs mechanism**: Aspirin and ibuprofen work by blocking eicosanoid production (specifically COX enzymes that make prostaglandins)—that's why they reduce pain and inflammation
- **Omega-6:omega-3 ratio**: Modern diets with ratios of 15:1 or higher (heavy omega-6) promote pro-inflammatory eicosanoid production; ancestral ratios around 1:1 to 4:1 were more balanced
- **Rapid and local**: Eicosanoids are produced on demand, act locally, and are quickly degraded—they don't circulate like hormones but affect immediate cellular environment`,
    common_misconceptions: [
      `**Myth:** All inflammation is bad, so eicosanoids that cause inflammation are harmful.\n**Fact:** Inflammatory eicosanoids are essential for fighting infections, healing wounds, and signaling tissue damage. Problems arise when pro-inflammatory eicosanoid production is chronically elevated, not when it's appropriately activated.`,
      `**Myth:** Omega-6 fats should be eliminated because they produce inflammatory eicosanoids.\n**Fact:** Omega-6s are essential fatty acids—your body can't make them. The goal is balance with omega-3s, not elimination of omega-6s. Extreme restriction causes essential fatty acid deficiency.`,
      `**Myth:** Taking omega-3s guarantees anti-inflammatory eicosanoid production.\n**Fact:** If your omega-6 intake remains very high, arachidonic acid still dominates as eicosanoid substrate. Reducing omega-6 intake alongside increasing omega-3s produces better eicosanoid balance.`,
    ],
    examples: [
      "Fish oil supplements providing 2g+ EPA daily measurably shift eicosanoid production away from pro-inflammatory prostaglandins and toward less inflammatory species",
      "Someone with asthma takes leukotriene inhibitors (like Singulair) to block the eicosanoids that cause airway constriction—omega-3s work on similar pathways",
      "Reducing vegetable oils (high omega-6) while increasing fish intake improves the omega-6:omega-3 ratio and shifts eicosanoid production",
      "GLA (from evening primrose oil) produces anti-inflammatory prostaglandin E1, explaining its traditional use for eczema and inflammatory conditions",
    ],
  },
  {
    slug: "electrolytes",
    why_it_matters: `Electrolytes—sodium, potassium, magnesium, calcium, chloride—are among the most important minerals for daily function, yet they're often overlooked until problems arise. For supplement shoppers, understanding electrolytes is crucial because they're genuinely depleted in common scenarios: sweating (exercise, hot weather), fasting, low-carb diets, certain medications, and excessive water intake. Symptoms of electrolyte imbalance—fatigue, muscle cramps, headaches, heart palpitations, brain fog—are commonly misattributed to other causes. Conversely, electrolyte supplements are sometimes oversold when the real issue is something else entirely. Knowing when electrolytes actually help versus when they're irrelevant saves money and improves outcomes.`,
    simple_explanation: `Electrolytes are minerals that carry electrical charges when dissolved in your body's fluids. They're like the battery acid that makes your body's electrical systems work. Sodium and potassium control nerve signals and muscle contractions (including your heartbeat). Magnesium is involved in 300+ enzymatic reactions. Calcium enables muscle contraction and bone structure. Without proper electrolyte balance, your nerves can't fire correctly, muscles cramp, heart rhythm becomes irregular, and cells can't regulate fluid properly. You lose electrolytes through sweat (especially sodium), urine, and digestion. Most people get enough from food, but athletes, low-carb dieters, fasters, and those with certain conditions often need supplementation. It's not just about hydration—water without electrolytes can actually worsen the imbalance.`,
    key_points: `### Key Facts About Electrolytes

- **The big four**: Sodium (nerve function, fluid balance), potassium (heart rhythm, muscle function), magnesium (enzyme function, muscle relaxation), and calcium (muscle contraction, bones)
- **Sweat losses**: Heavy sweating can deplete 1-2g of sodium per hour; water alone doesn't replace this and can cause hyponatremia (low sodium) if consumed excessively
- **Low-carb connection**: Insulin causes sodium retention; when insulin drops on keto/low-carb diets, sodium is rapidly excreted—"keto flu" is often electrolyte depletion
- **Ratio matters**: Potassium and sodium work in opposition; high sodium with low potassium is problematic. Most people need MORE potassium, not more sodium
- **Signs of imbalance**: Muscle cramps, fatigue, headaches, heart palpitations, dizziness, brain fog, and irritability can all indicate electrolyte deficiency`,
    common_misconceptions: [
      `**Myth:** Sports drinks provide optimal electrolyte replacement.\n**Fact:** Most sports drinks are sugar-heavy with modest electrolytes—typically 200-450mg sodium vs. 1000-2000mg lost per hour of heavy sweating. Electrolyte powders or tablets often provide better ratios without excessive sugar.`,
      `**Myth:** Drinking more water is always good for hydration.\n**Fact:** Excessive water without electrolytes dilutes blood sodium levels (hyponatremia), which can be dangerous. This is common in marathon runners who overhydrate—water must be balanced with electrolytes.`,
      `**Myth:** If I eat a healthy diet, I don't need electrolyte supplements.\n**Fact:** For most people, diet is sufficient. But heavy exercise, low-carb diets, fasting, excessive sweating, and certain medications create electrolyte needs that diet alone may not meet, especially for sodium and magnesium.`,
    ],
    examples: [
      "An endurance athlete loses 2 liters of sweat per hour, each liter containing 500-2000mg sodium—they need targeted electrolyte replacement, not just water",
      "Someone starting a keto diet experiences fatigue, headaches, and cramps in week 1—supplementing 3-5g sodium and 3-4g potassium daily resolves 'keto flu'",
      "A person takes a diuretic for blood pressure and becomes magnesium and potassium deficient, experiencing muscle cramps and heart palpitations",
      "Drinking a gallon of water during a hot day without sodium causes fatigue and headache—adding electrolytes reverses symptoms within 30 minutes",
    ],
  },
  {
    slug: "empiricalevidence",
    why_it_matters: `Empirical evidence is information gathered through observation and experiment, as opposed to theory, belief, or speculation. For supplement shoppers, understanding this concept is crucial for evaluating claims. The supplement industry is full of assertions based on tradition, theory, or logical-sounding arguments that lack empirical support. "It makes sense that X would do Y" is not evidence that it actually does. Empirical evidence means someone actually tested it and observed results. When evaluating supplements, always ask: Is this claim based on empirical evidence from human studies, or is it theoretical reasoning, animal research, or tradition? Only human empirical evidence directly applies to human supplement decisions.`,
    simple_explanation: `Empirical evidence means knowledge gained through direct observation and experimentation—seeing what actually happens rather than theorizing about what should happen. Imagine someone claims a supplement boosts energy. Theoretical evidence might be: "This compound affects mitochondria in cell studies, so it should increase energy." Empirical evidence would be: "We gave it to 100 people and measured their energy levels, and they improved compared to placebo." The difference is between reasoning and testing. In supplement science, empirical evidence comes from clinical trials where real humans take real supplements and researchers measure actual outcomes. Cell studies, animal studies, and mechanistic theories are preliminary—they suggest what MIGHT happen but don't tell us what actually happens in human bodies.`,
    key_points: `### Key Facts About Empirical Evidence

- **Observation-based**: Empirical evidence comes from systematically observing what happens, not from logic, tradition, or authority claims
- **Hierarchy of evidence**: Human clinical trials > human observational studies > animal studies > cell studies > mechanistic theory. Only the first two are direct empirical evidence in humans
- **Replication matters**: Single studies can be wrong; empirical evidence gains strength when multiple independent studies find similar results
- **Negative evidence counts**: Finding that something doesn't work is valid empirical evidence—it just doesn't support marketing claims
- **Vs. anecdotal**: Individual testimonials ("It worked for me!") are weak empirical evidence because they lack controls for placebo effect, other variables, and chance`,
    common_misconceptions: [
      `**Myth:** Theoretical mechanisms prove a supplement works.\n**Fact:** Mechanisms explain HOW something might work, not WHETHER it works in humans. Many plausible-sounding mechanisms fail when actually tested. Empirical evidence from human trials is required to confirm efficacy.`,
      `**Myth:** Animal studies provide strong evidence for human effects.\n**Fact:** Animal metabolism differs from humans; many interventions that work in mice fail in people. Animal studies generate hypotheses worth testing in humans, but they're not proof of human effects.`,
      `**Myth:** Centuries of traditional use is empirical evidence.\n**Fact:** Traditional use is observational at best, typically confounded by placebo effects, selection bias, and attribution errors. Traditions persist for many reasons beyond efficacy—cultural, ritualistic, or simply inertia.`,
    ],
    examples: [
      "Turmeric has strong theoretical mechanisms (NF-κB inhibition, antioxidant effects) but mixed empirical evidence in human trials—mechanisms don't guarantee clinical effects",
      "Beta-alanine's tingling sensation (paresthesia) provides immediate empirical feedback it's absorbing, but the performance benefits require separate empirical testing",
      "Someone says 'I felt amazing after taking this supplement'—that's anecdotal, not rigorous empirical evidence; placebo response can't be ruled out",
      "Meta-analyses pool empirical evidence from multiple trials to estimate true effects—this is how we know creatine reliably builds strength (consistent positive findings across many studies)",
    ],
  },
  {
    slug: "endothelium",
    why_it_matters: `The endothelium is the thin layer of cells lining all your blood vessels, and its health is now recognized as central to cardiovascular disease prevention. For supplement shoppers, understanding the endothelium explains why supplements marketed for "blood flow," "circulation," and "heart health" target nitric oxide production and endothelial function. When endothelial cells are healthy, they produce nitric oxide (a vasodilator), prevent blood clots, and resist plaque buildup. Damaged endothelium—from high blood pressure, high blood sugar, smoking, or inflammation—is where atherosclerosis begins. Supplements like beetroot, L-arginine, citrulline, and various polyphenols aim to support endothelial function, with varying evidence.`,
    simple_explanation: `The endothelium is like the non-stick coating on your blood vessel walls. This single layer of cells isn't just a passive barrier—it actively controls blood vessel diameter (by producing nitric oxide), prevents blood from clotting inside vessels, and blocks cholesterol from invading the artery wall. When endothelial cells are healthy, blood flows freely, vessels flex appropriately with blood pressure changes, and plaques can't form easily. When the endothelium is damaged—by inflammation, high blood sugar, smoking, or chronic high blood pressure—it loses these protective functions. Vessels become stiff, prone to clotting, and vulnerable to cholesterol buildup. Cardiovascular disease literally starts with endothelial dysfunction. This is why protecting and restoring endothelial function is a major target for cardiovascular supplements.`,
    key_points: `### Key Facts About the Endothelium

- **Nitric oxide producer**: Healthy endothelial cells produce nitric oxide (NO), which relaxes blood vessels, lowers blood pressure, and improves blood flow
- **Atherosclerosis gatekeeper**: Damaged endothelium allows LDL cholesterol to enter the artery wall, initiating plaque formation—healthy endothelium resists this
- **Endothelial dysfunction**: Precedes and predicts cardiovascular disease; measurable by flow-mediated dilation (FMD) testing of artery responses
- **Damage causes**: Smoking, high blood pressure, high blood sugar, chronic inflammation, and oxidative stress all damage endothelial function
- **Supplement targets**: Beetroot/nitrates, L-arginine, L-citrulline, and cocoa flavanols have evidence for improving endothelial function via different mechanisms`,
    common_misconceptions: [
      `**Myth:** Endothelial health is only relevant for people with heart disease.\n**Fact:** Endothelial dysfunction begins decades before heart attacks or strokes occur. Young, apparently healthy people can have endothelial dysfunction from poor diet, inactivity, or smoking. It's a precursor worth addressing early.`,
      `**Myth:** Supplements that produce nitric oxide always improve endothelial function.\n**Fact:** Exogenous nitric oxide (from nitrates or arginine) is different from endothelial cells producing their own NO. Some supplements bypass the endothelium entirely; others may improve NO availability without improving underlying endothelial cell health.`,
      `**Myth:** Cholesterol is the main cause of atherosclerosis.\n**Fact:** Cholesterol contributes to plaques, but endothelial damage is required for cholesterol to enter the artery wall. Healthy endothelium resists cholesterol infiltration even at moderate cholesterol levels. Endothelial health and cholesterol levels both matter.`,
    ],
    examples: [
      "Beetroot juice provides dietary nitrates that convert to nitric oxide, improving flow-mediated dilation (a measure of endothelial function) by 20-30% within hours",
      "Cocoa flavanols at 400-900mg daily improve endothelial function in clinical trials, explaining some of dark chocolate's cardiovascular benefits",
      "Diabetic patients have impaired endothelial function due to high blood sugar damage to endothelial cells—this partly explains elevated cardiovascular risk",
      "L-citrulline (which converts to L-arginine) has better evidence for improving endothelial function than L-arginine itself due to better bioavailability",
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
  console.log("=== BATCH 6: Enhancing Glossary Terms 51-60 ===\n");

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
