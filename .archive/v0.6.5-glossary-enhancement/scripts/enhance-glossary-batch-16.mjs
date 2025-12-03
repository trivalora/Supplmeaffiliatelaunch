/**
 * Batch 16: Enhance glossary terms 151-160 (alphabetically)
 * Terms: Phosphocreatine, Phytates, Placebo, Plasma, PMS (Premenstrual Syndrome),
 *        Polyphenols, Pre-eclampsia, Prediabetes, Proline, Propionate
 *
 * Run: node scripts/enhance-glossary-batch-16.mjs
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
    slug: "phosphocreatine",
    why_it_matters: `Phosphocreatine is your muscles' instant energy reserve—and it's why creatine is one of the most effective sports supplements ever studied. For supplement shoppers, understanding phosphocreatine explains exactly how creatine supplementation works. During intense exercise (lifting, sprinting), your muscles burn ATP faster than they can regenerate it from oxygen. Phosphocreatine donates its phosphate to rapidly regenerate ATP, sustaining high-intensity output for 10-15 more seconds. Taking creatine supplements increases your phosphocreatine stores by 10-40%, extending this buffer and improving performance in short, intense efforts. This isn't marketing theory—it's established biochemistry with decades of supporting research.`,
    simple_explanation: `Phosphocreatine (also called creatine phosphate) is your muscles' backup battery for explosive efforts. Your cells run on ATP (adenosine triphosphate)—when you contract a muscle, ATP releases energy and becomes ADP. Normally, ATP is regenerated slowly using oxygen. But during intense exercise, you burn ATP faster than this slow process can work. That's where phosphocreatine comes in: it instantly donates its phosphate group to ADP, regenerating ATP in milliseconds. This buys you about 10-15 seconds of maximum effort before phosphocreatine is depleted. When you take creatine supplements, you increase phosphocreatine stores in your muscles, extending this high-power buffer. That's why creatine improves lifting performance, sprinting, and repeated high-intensity efforts.`,
    key_points: `### Key Facts About Phosphocreatine

- **Rapid ATP regeneration**: Phosphocreatine regenerates ATP faster than any other system—essential for maximum-intensity efforts lasting 5-15 seconds
- **Limited stores**: Muscle phosphocreatine depletes in ~10 seconds of all-out effort; recovery takes 3-5 minutes, which is why rest periods matter for strength training
- **Creatine connection**: Dietary creatine is converted to phosphocreatine in muscles; supplementation increases stores by 10-40%, directly improving high-intensity capacity
- **Not for endurance**: Phosphocreatine matters for brief, intense efforts—not steady-state cardio where oxidative metabolism dominates
- **Brain too**: Phosphocreatine also supports brain energy metabolism; this is why creatine may have cognitive benefits`,
    common_misconceptions: [
      `**Myth:** Phosphocreatine provides energy for long-duration exercise.\n**Fact:** Phosphocreatine is depleted in about 10-15 seconds of maximum effort. For anything longer, aerobic metabolism and glycolysis take over. It's for explosive power, not endurance.`,
      `**Myth:** You need to load creatine to build phosphocreatine stores.\n**Fact:** Loading (20g/day for 5-7 days) saturates stores faster, but 3-5g daily achieves the same stores within 3-4 weeks. Loading is optional, not required.`,
      `**Myth:** Phosphocreatine only matters for athletes.\n**Fact:** Phosphocreatine supports any high-intensity effort and brain function. This is relevant for everyday activities, aging muscle function, and cognitive performance—not just sports.`,
    ],
    examples: [
      "A powerlifter taking 5g creatine daily has ~25% higher muscle phosphocreatine, allowing one or two more reps at maximum weight before fatigue",
      "During a sprint, phosphocreatine provides most ATP for the first 5-10 seconds; then glycolysis kicks in, producing lactate and the burning sensation",
      "Rest intervals of 3-5 minutes between heavy sets allow phosphocreatine to nearly fully regenerate; shorter rest means starting the next set with depleted stores",
      "Vegetarians often have lower baseline phosphocreatine (creatine comes mainly from meat) and may see larger benefits from creatine supplementation",
    ],
  },
  {
    slug: "phytates",
    why_it_matters: `Phytates (phytic acid) bind minerals like iron and zinc, reducing absorption—making this concept crucial for supplement shoppers concerned about mineral status. For those taking mineral supplements or relying on plant foods for minerals, phytates explain why theoretical mineral content doesn't equal absorbed minerals. Whole grains, legumes, nuts, and seeds are high in phytates. While this isn't a problem for most people with varied diets, vegetarians, vegans, and those with high mineral needs should understand that phytate-rich foods reduce mineral absorption from that meal. Timing supplements away from high-phytate foods can optimize absorption.`,
    simple_explanation: `Phytates (the salt form of phytic acid) are compounds found in seeds, grains, legumes, and nuts—basically, storage forms of phosphorus for plants. The issue for humans: phytates bind tightly to minerals like iron, zinc, calcium, and magnesium in your digestive tract. These bound minerals form insoluble complexes that pass through without being absorbed. This is why a bowl of oatmeal with theoretical 4mg iron might only deliver 0.5mg of absorbable iron. For most people with varied diets, this isn't a major concern. But for vegetarians, vegans, or anyone with high iron or zinc needs, phytate awareness helps explain why plant-based mineral sources aren't as efficient as animal sources.`,
    key_points: `### Key Facts About Phytates

- **Mineral chelator**: Phytates bind iron, zinc, calcium, and magnesium, forming insoluble complexes that reduce absorption by 50-80% in high-phytate meals
- **Food sources**: Highest in whole grains, legumes, nuts, and seeds—the same foods promoted for their mineral content, creating a paradox
- **Reduction methods**: Soaking, sprouting, fermenting, and cooking reduce phytate content—traditional food preparation methods that improve mineral availability
- **Meal-specific**: Phytates only affect mineral absorption from the same meal; spacing iron supplements from high-phytate foods preserves absorption
- **Not all bad**: Phytates have antioxidant properties and may protect against cancer and kidney stones—it's about balance, not elimination`,
    common_misconceptions: [
      `**Myth:** You should eliminate phytates from your diet.\n**Fact:** Phytates have beneficial effects too (antioxidant, potential cancer protection). For most people, reducing excessive phytates while maintaining legume and whole grain intake is the balanced approach.`,
      `**Myth:** Whole grains and beans are good iron sources for vegetarians.\n**Fact:** While they contain iron, phytates significantly reduce absorption. Vegetarians need 1.8x more iron than omnivores partly because of phytate binding. Pairing with vitamin C helps.`,
      `**Myth:** Taking mineral supplements with meals maximizes absorption.\n**Fact:** Taking iron or zinc supplements with high-phytate meals (oatmeal, beans) reduces absorption. Taking them separately (different meal, or with vitamin C) improves absorption.`,
    ],
    examples: [
      "Taking iron supplement with breakfast oatmeal: phytates reduce iron absorption by 50-70%. Taking it with orange juice (no phytates, plus vitamin C) dramatically improves absorption",
      "Traditional bread fermentation (sourdough) reduces phytates by 50-70%; quick-rise bread retains most phytates—one reason traditional methods were nutritionally superior",
      "Sprouting lentils for 2-3 days reduces phytate content significantly while also increasing protein digestibility and vitamin content",
      "A vegan with marginal zinc status should consider taking zinc supplements away from high-phytate meals or using chelated forms that resist binding",
    ],
  },
  {
    slug: "placebo",
    why_it_matters: `Placebo effects are real, measurable improvements from believing you're taking something helpful—understanding them is essential for evaluating supplement claims. For supplement shoppers, placebos explain why so many people swear by supplements that fail controlled trials. The placebo effect can reduce pain, improve mood, increase energy perception, and more—simply because you expect improvement. This is why randomized, placebo-controlled trials are the gold standard: they separate the supplement's true effect from the substantial placebo component. When a supplement "works" without placebo controls, you don't know if it's the supplement or just the expectation of benefit.`,
    simple_explanation: `A placebo is an inactive treatment—a sugar pill, saline injection, or sham procedure—that has no therapeutic effect on its own. The "placebo effect" is the real improvement people experience just from expecting to get better. It's not imaginary: brain imaging shows placebo treatments activate real pain-relief and reward pathways. The placebo effect can reduce pain, improve mood, decrease anxiety, and enhance performance. In supplement research, placebo effects are substantial—often 20-40% of the "benefit" people report. This is why controlled trials compare supplements to placebos: if the supplement isn't better than placebo, the perceived benefit was just expectation, not the supplement.`,
    key_points: `### Key Facts About Placebos

- **Real physiological effects**: Placebos aren't "fake"—they trigger real neurological and hormonal changes, including endorphin release for pain relief
- **Condition-dependent**: Placebo effects are strongest for subjective symptoms (pain, mood, energy, nausea) and weaker for objective outcomes (tumor size, blood glucose)
- **Expectation-driven**: Larger, more expensive, branded placebos work better than small, generic ones—expectations shape the response
- **Controls are essential**: Without placebo comparison, we can't know if supplement benefits are real pharmacological effects or just belief-driven placebo responses
- **Nocebo exists too**: Expecting negative effects can cause them—reading side effect lists can cause people to experience those side effects from sugar pills`,
    common_misconceptions: [
      `**Myth:** Placebo effects are just imaginary or psychological.\n**Fact:** Placebos cause measurable physiological changes—endorphin release, dopamine activation, immune modulation. The effects are real, even if the treatment isn't pharmacologically active.`,
      `**Myth:** If a supplement helps me, it must be working.\n**Fact:** Personal experience can't separate true effects from placebo effects. You might feel better because of the supplement OR because you expected to feel better. Only controlled trials can distinguish.`,
      `**Myth:** Placebo-controlled means participants get nothing.\n**Fact:** Placebo groups still receive substantial care, monitoring, and attention. The "placebo" often includes the entire therapeutic context minus the active ingredient.`,
    ],
    examples: [
      "A glucosamine study finds both glucosamine and placebo groups improve by 25%—suggesting the perceived benefit is largely placebo, not the supplement",
      "Someone takes a new energy supplement and feels more energetic; they're experiencing real subjective improvement, but controlled trials show the supplement equals placebo",
      "Pain trials routinely see 30-40% improvement in placebo groups; a painkiller must beat this substantial placebo response to be considered effective",
      "The same sugar pill labeled as a premium brand produces larger placebo effects than one labeled as generic—our brains respond to context and expectation",
    ],
  },
  {
    slug: "plasma",
    why_it_matters: `Plasma is the liquid portion of blood where many nutrients and biomarkers are measured—understanding it helps you interpret blood tests and research about supplement levels. For supplement shoppers, "plasma levels" or "serum levels" appear constantly in research discussing how well supplements are absorbed. When you take vitamin D and get a blood test, you're measuring plasma 25(OH)D. When curcumin studies report "plasma curcumin," they're measuring how much reached your bloodstream. Understanding that plasma is where supplements must reach to have systemic effects helps you appreciate why absorption and bioavailability matter so much.`,
    simple_explanation: `Blood has two main parts: cells (red blood cells, white blood cells, platelets) and plasma (the liquid they float in). Plasma is about 55% of blood volume—it's mostly water but carries proteins, hormones, nutrients, waste products, and many things we measure in blood tests. When doctors check your vitamin D level, they're measuring it in plasma. When supplement research measures "bioavailability," they're usually tracking how much of the supplement appears in plasma after you take it. Serum is plasma minus clotting factors—practically similar for most tests. "Plasma concentration" tells you how much of a nutrient or supplement is circulating in your blood, available to reach tissues throughout your body.`,
    key_points: `### Key Facts About Plasma

- **Blood composition**: Plasma is the liquid matrix of blood (~55% of volume), carrying nutrients, hormones, proteins, and waste products throughout the body
- **Measurement matrix**: Most blood tests measure substances in plasma or serum; this is how we assess vitamin D, minerals, drug levels, and supplement absorption
- **Plasma vs. tissue**: Plasma levels don't always reflect tissue levels—some nutrients concentrate in tissues while plasma remains low, and vice versa
- **Bioavailability marker**: Supplement absorption is often measured by plasma appearance; higher and longer plasma elevation suggests better bioavailability
- **Serum vs. plasma**: Serum is plasma minus clotting proteins; for most nutrition tests, results are essentially equivalent`,
    common_misconceptions: [
      `**Myth:** Plasma levels equal tissue levels.\n**Fact:** Plasma is a transport medium. Some nutrients concentrate in specific tissues while plasma levels stay low (like magnesium, 99% in tissues). Plasma is accessible for testing but doesn't always reflect whole-body status.`,
      `**Myth:** Higher plasma levels always mean better.\n**Fact:** Optimal ranges exist. Too-high plasma levels of some nutrients (iron, calcium, vitamin A) can indicate excess or dysfunction. More isn't always better.`,
      `**Myth:** If a supplement doesn't raise plasma levels, it doesn't work.\n**Fact:** Some supplements act locally (probiotics in gut) or are rapidly distributed to tissues without sustained plasma elevation. Plasma pharmacokinetics isn't the whole story.`,
    ],
    examples: [
      "A vitamin D blood test measures plasma 25(OH)D; levels of 30-50 ng/mL are generally considered optimal, while <20 ng/mL indicates deficiency",
      "Curcumin studies track plasma curcumin after dosing; standard curcumin barely appears in plasma, but enhanced forms achieve measurable levels",
      "Magnesium blood tests measure plasma/serum magnesium, but 99% of body magnesium is in cells and bones—plasma can be normal even with whole-body depletion",
      "After taking a supplement, researchers draw blood at multiple time points to create a 'plasma concentration curve' showing absorption and elimination",
    ],
  },
  {
    slug: "pms",
    why_it_matters: `PMS (Premenstrual Syndrome) affects up to 75% of menstruating women to some degree—making it one of the most common reasons women seek supplement solutions. For supplement shoppers, several supplements have evidence for PMS symptoms: calcium (1000-1200mg) has the strongest evidence, followed by magnesium, vitamin B6, and chasteberry (Vitex). Understanding PMS helps you evaluate the extensive marketing targeting this common condition. While some supplements genuinely help, many products make overblown claims. Knowing which have evidence and which don't helps you choose effectively.`,
    simple_explanation: `PMS is a collection of physical and emotional symptoms that occur in the 1-2 weeks before menstruation and resolve within a few days of your period starting. Symptoms include mood swings, irritability, depression, anxiety, bloating, breast tenderness, headaches, food cravings, and fatigue. The cause involves the natural hormonal shifts of the menstrual cycle—estrogen and progesterone fluctuations affect neurotransmitters like serotonin. While PMS is extremely common, severity varies widely. Mild PMS is manageable; severe PMS (now called PMDD, premenstrual dysphoric disorder) significantly impairs daily life and may require medical treatment. Various supplements target different PMS symptoms with varying levels of evidence.`,
    key_points: `### Key Facts About PMS

- **Timing pattern**: Symptoms occur during the luteal phase (after ovulation, before menstruation) and resolve within a few days of period starting
- **Hormonal trigger**: Fluctuating estrogen and progesterone levels affect serotonin, GABA, and other neurotransmitters, causing mood and physical symptoms
- **Calcium evidence**: Multiple RCTs show 1000-1200mg calcium daily reduces PMS symptoms by 30-50%—one of the most evidence-backed interventions
- **Other supplements**: Magnesium (200-400mg), vitamin B6 (50-100mg), chasteberry (Vitex), and evening primrose oil have varying evidence levels
- **PMDD distinction**: Severe PMS with significant mood symptoms is PMDD, a diagnosable condition that may require medical treatment beyond supplements`,
    common_misconceptions: [
      `**Myth:** PMS is just moodiness that women exaggerate.\n**Fact:** PMS involves real physiological changes affecting neurotransmitters and fluid balance. Symptoms are measurable and can significantly impact quality of life. PMDD is a recognized psychiatric condition.`,
      `**Myth:** Evening primrose oil is proven for PMS.\n**Fact:** Despite popularity, most controlled trials show evening primrose oil is no better than placebo for PMS. It may help breast tenderness specifically, but overall PMS evidence is weak.`,
      `**Myth:** PMS supplements work immediately.\n**Fact:** Calcium, magnesium, and chasteberry typically require 2-3 menstrual cycles of consistent use before showing benefits. Don't judge effectiveness after one month.`,
    ],
    examples: [
      "A woman with PMS mood symptoms and bloating takes 1200mg calcium daily; after 2-3 months, she notices meaningful reduction in irritability and water retention",
      "Magnesium (200-400mg) taken during the luteal phase may reduce bloating, headaches, and mood symptoms; some prefer glycinate form for better absorption",
      "Chasteberry (Vitex, 20-40mg extract) may help by modulating prolactin levels; effects take 2-3 cycles to manifest",
      "Someone with severe PMDD finds supplements insufficient and benefits from SSRI antidepressants, which are effective when taken just during the luteal phase",
    ],
  },
  {
    slug: "polyphenols",
    why_it_matters: `Polyphenols are plant compounds behind many "superfood" claims—understanding them helps you evaluate everything from green tea to grape seed extract to dark chocolate. For supplement shoppers, polyphenols are what make wine, tea, berries, and cocoa "healthy" beyond basic nutrition. They're antioxidants, but their benefits likely extend beyond antioxidant activity to include anti-inflammatory effects, gut microbiome modulation, and cell signaling. However, polyphenol absorption is generally poor, and individual compounds may not replicate whole-food benefits. Understanding polyphenols helps you appreciate why food sources may be superior to isolated supplements for many of these compounds.`,
    simple_explanation: `Polyphenols are a huge family of plant chemicals—over 8,000 types—that give plants their colors and protect them from UV damage and pests. Common categories include flavonoids (in tea, berries, citrus), anthocyanins (in blue/purple fruits), resveratrol (in grapes), catechins (in green tea), and curcumin (in turmeric). These compounds act as antioxidants, meaning they neutralize free radicals. But their benefits probably go beyond simple antioxidant activity: polyphenols influence gene expression, reduce inflammation, affect gut bacteria, and modulate cell signaling. The challenge is that most polyphenols are poorly absorbed—often less than 5%—and are rapidly metabolized. Your gut bacteria transform many polyphenols into metabolites that may actually be the active compounds.`,
    key_points: `### Key Facts About Polyphenols

- **Diverse family**: Over 8,000 polyphenol compounds exist; different foods provide different types with different effects—diversity matters
- **Poor absorption**: Most polyphenols have <5% bioavailability; gut bacteria metabolize them into compounds that may be the actual active metabolites
- **Beyond antioxidant**: Polyphenols affect NF-κB inflammation, Nrf2 antioxidant genes, cell signaling, and gut microbiome—more than just free radical neutralization
- **Food synergy**: Polyphenols in whole foods may work better than isolated supplements due to synergy with fiber, other compounds, and food matrix effects
- **Common sources**: Tea, coffee, red wine, berries, dark chocolate, olive oil, and colorful vegetables are major dietary sources`,
    common_misconceptions: [
      `**Myth:** Polyphenol supplements equal polyphenol-rich foods.\n**Fact:** Isolated polyphenols may not replicate food benefits. The food matrix, fiber, and synergy between compounds affects how polyphenols work. Whole foods are often superior.`,
      `**Myth:** More polyphenols means more absorption.\n**Fact:** Polyphenol absorption is limited and saturates. Taking megadoses doesn't proportionally increase blood levels. Some may even interfere with absorption of others.`,
      `**Myth:** Polyphenols work by being antioxidants in your body.\n**Fact:** Given poor absorption, the direct antioxidant contribution is minimal. Benefits likely come from cell signaling effects, microbiome changes, and metabolite activity rather than simply neutralizing radicals.`,
    ],
    examples: [
      "Green tea EGCG has extensive research but ~2% bioavailability; the benefits of tea drinking may involve metabolites and gut effects rather than circulating EGCG",
      "Dark chocolate (70%+ cacao) provides flavanols that improve blood flow; effects are seen with 30-100g daily, not just isolated flavanol supplements",
      "Quercetin supplements are popular but poorly absorbed; eating quercetin-rich onions with fat improves absorption vs. taking quercetin capsules alone",
      "Coffee is the #1 polyphenol source in Western diets—chlorogenic acid in coffee may explain some of coffee's health associations",
    ],
  },
  {
    slug: "preeclampsia",
    why_it_matters: `Pre-eclampsia is a dangerous pregnancy complication characterized by high blood pressure and organ damage—understanding it is crucial for pregnant women considering supplements. For supplement shoppers, pre-eclampsia is relevant because calcium supplementation (1000-2000mg) significantly reduces risk in women with low calcium intake, and low-dose aspirin is recommended for high-risk women. Vitamin D deficiency is also associated with increased risk. While most pregnancy supplements focus on fetal development, pre-eclampsia prevention is a maternal health issue where specific supplements have genuine preventive evidence.`,
    simple_explanation: `Pre-eclampsia is a pregnancy complication that usually develops after 20 weeks, characterized by high blood pressure plus signs of organ damage (protein in urine, liver problems, kidney dysfunction, or low platelets). It affects 2-8% of pregnancies and can be life-threatening for both mother and baby. The exact cause isn't fully understood but involves abnormal placental blood vessel development and systemic inflammation. Pre-eclampsia can progress to eclampsia (seizures) or HELLP syndrome (a severe variant). Treatment is ultimately delivery—the condition resolves after the placenta is removed. Prevention strategies include low-dose aspirin for high-risk women and calcium supplementation for those with inadequate intake.`,
    key_points: `### Key Facts About Pre-eclampsia

- **Definition**: High blood pressure (≥140/90) developing after 20 weeks pregnancy PLUS organ involvement (proteinuria, liver/kidney dysfunction, low platelets)
- **Risk factors**: First pregnancy, previous pre-eclampsia, chronic hypertension, diabetes, kidney disease, obesity, multiple pregnancy, age extremes
- **Calcium protection**: 1000-2000mg calcium daily reduces pre-eclampsia risk by ~50% in women with low calcium intake; less effect if intake is already adequate
- **Aspirin prevention**: Low-dose aspirin (81-150mg) started before 16 weeks reduces risk in high-risk women by ~17%
- **Vitamin D association**: Low vitamin D is associated with increased pre-eclampsia risk; supplementation may help, though evidence is less robust than calcium`,
    common_misconceptions: [
      `**Myth:** Pre-eclampsia is just high blood pressure during pregnancy.\n**Fact:** Pre-eclampsia is a systemic disorder affecting multiple organs. Blood pressure elevation is one sign, but organ damage (kidneys, liver, brain) makes it dangerous. Gestational hypertension without organ involvement is different.`,
      `**Myth:** Pre-eclampsia only affects the mother.\n**Fact:** Pre-eclampsia restricts blood flow to the placenta, causing fetal growth restriction, preterm birth (often necessary for maternal safety), and infant complications.`,
      `**Myth:** Once you've had pre-eclampsia, there's no way to prevent it next time.\n**Fact:** Low-dose aspirin started early in subsequent high-risk pregnancies reduces recurrence risk. Calcium supplementation and healthy weight also help.`,
    ],
    examples: [
      "A pregnant woman with low dietary calcium intake takes 1000mg calcium daily starting early in pregnancy, significantly reducing her pre-eclampsia risk",
      "A woman with previous pre-eclampsia starts 81mg aspirin daily at 12 weeks in her next pregnancy to reduce recurrence risk",
      "Pre-eclampsia develops at 32 weeks; delivery is necessary for maternal safety, resulting in preterm birth—this is why prevention matters",
      "Some studies suggest adequate vitamin D (4000 IU/day in deficient women) may reduce pre-eclampsia risk, but evidence is still accumulating",
    ],
  },
  {
    slug: "prediabetes",
    why_it_matters: `Prediabetes is the reversible stage before type 2 diabetes—understanding it creates an opportunity for supplement-supported prevention. For supplement shoppers, prediabetes affects over 88 million Americans, and progression to diabetes is NOT inevitable. Lifestyle change (diet, exercise) is the primary intervention, but certain supplements may help: berberine has glucose-lowering effects comparable to metformin, magnesium addresses common deficiency that worsens insulin resistance, and chromium may have modest effects. Understanding prediabetes helps you recognize this critical window where targeted interventions can prevent a lifelong chronic disease.`,
    simple_explanation: `Prediabetes means your blood sugar is higher than normal but not yet high enough to diagnose diabetes. It's the yellow warning light before the red. The key numbers: fasting glucose of 100-125 mg/dL (diabetes is ≥126), or HbA1c of 5.7-6.4% (diabetes is ≥6.5%). About 1 in 3 American adults have prediabetes, but most don't know it. The critical point: prediabetes is reversible. Modest weight loss (5-7%), regular physical activity, and dietary changes can prevent or delay progression to type 2 diabetes by 58%. This is where supplements that support blood sugar control and insulin sensitivity can potentially help—not as replacements for lifestyle change, but as additional support.`,
    key_points: `### Key Facts About Prediabetes

- **Diagnostic criteria**: Fasting glucose 100-125 mg/dL, HbA1c 5.7-6.4%, or 2-hour glucose 140-199 mg/dL (OGTT)
- **Reversibility**: Unlike type 2 diabetes, prediabetes can be reversed with lifestyle changes; 5-7% weight loss reduces progression risk by 58%
- **Progression rate**: Without intervention, 15-30% of people with prediabetes develop type 2 diabetes within 5 years
- **Supplement options**: Berberine has evidence for glucose lowering; magnesium addresses common deficiency; chromium has modest, inconsistent evidence
- **Insulin resistance core**: Prediabetes reflects insulin resistance—cells don't respond properly to insulin, so glucose stays elevated despite adequate insulin production`,
    common_misconceptions: [
      `**Myth:** Prediabetes always progresses to diabetes.\n**Fact:** With lifestyle changes, many people with prediabetes return to normal blood sugar levels. It's not an inevitable progression—it's a critical intervention window.`,
      `**Myth:** You need diabetes medication for prediabetes.\n**Fact:** Lifestyle change is first-line treatment. Metformin is sometimes used for high-risk prediabetes, but diet and exercise are more effective than medication in trials (Diabetes Prevention Program).`,
      `**Myth:** Supplements can't meaningfully affect prediabetes.\n**Fact:** Berberine has shown glucose-lowering effects comparable to metformin in some trials. Magnesium supplementation in deficient individuals improves insulin sensitivity. They support—not replace—lifestyle change.`,
    ],
    examples: [
      "Someone with fasting glucose of 115 mg/dL (prediabetes) loses 10 pounds through diet/exercise; 6 months later, fasting glucose is 95 mg/dL (normal)—progression prevented",
      "Berberine (500mg 2-3x daily) reduces HbA1c by 0.5-1% in prediabetes trials—similar to metformin but with different side effect profile",
      "Many people with prediabetes are magnesium deficient (common with insulin resistance); 400mg magnesium daily may improve insulin sensitivity",
      "A prediabetic starts 30 minutes of daily walking and reduces refined carbs; adds berberine for additional support—comprehensive approach",
    ],
  },
  {
    slug: "proline",
    why_it_matters: `Proline is an amino acid essential for collagen synthesis—understanding it explains the amino acid basis of collagen supplements and joint health products. For supplement shoppers, proline is one of the key amino acids in collagen (along with glycine and hydroxyproline). It comprises about 13% of collagen's amino acid content. When you take collagen supplements or bone broth, you're getting significant proline. Your body can make proline from other amino acids, but demand increases during wound healing, tissue repair, and potentially aging. Understanding proline helps you appreciate what collagen supplements actually provide and why high-protein diets support connective tissue health.`,
    simple_explanation: `Proline is an amino acid with a unique ring structure that gives collagen its triple-helix shape and structural stability. Collagen—the protein making up your skin, tendons, cartilage, bones, and blood vessels—is about 13% proline (and 10% hydroxyproline, which is made from proline). This makes proline crucial for connective tissue. Your body can synthesize proline from glutamate and other amino acids, so it's not "essential" in the strict dietary sense. However, during wound healing, growth, or aging, demand may exceed production. Dietary proline comes mainly from collagen-rich foods (bone broth, skin, cartilage) and collagen/gelatin supplements, plus general protein sources.`,
    key_points: `### Key Facts About Proline

- **Collagen component**: Proline and hydroxyproline together make up ~23% of collagen; proline's ring structure enables collagen's unique helical form
- **Conditionally essential**: Body can synthesize proline, but demand may exceed production during wound healing, burns, trauma, or possibly aging
- **Hydroxyproline conversion**: Vitamin C is required to convert proline to hydroxyproline within collagen; this is why scurvy (vitamin C deficiency) impairs collagen formation
- **Food sources**: Highest in collagen-rich foods (bone broth, skin, gelatin) and generally in high-protein foods (meat, dairy, eggs, legumes)
- **Collagen supplement content**: Collagen peptide supplements are essentially concentrated proline, glycine, and hydroxyproline in a bioavailable form`,
    common_misconceptions: [
      `**Myth:** You need to supplement proline specifically.\n**Fact:** Collagen supplements or bone broth provide proline in context with glycine and other collagen amino acids. Isolated proline supplements are rarely necessary with adequate protein intake.`,
      `**Myth:** Proline alone can rebuild collagen.\n**Fact:** Collagen synthesis requires proline plus glycine, vitamin C (for hydroxylation), copper, and adequate overall protein. Proline is one component of the process.`,
      `**Myth:** Plant proteins provide adequate proline for collagen synthesis.\n**Fact:** Plant proteins contain proline, but in lower concentrations than animal collagen sources. Vegans may benefit from ensuring adequate overall protein and vitamin C for collagen support.`,
    ],
    examples: [
      "Collagen peptide supplements (10-15g daily) provide 1.3-2g proline—significantly more than typical meals, directly supporting collagen synthesis",
      "Someone healing from surgery has increased proline demand; adequate protein intake plus possible collagen supplementation supports tissue repair",
      "Bone broth simmered for 24+ hours extracts proline and glycine from collagen in bones and connective tissue—traditional 'healing food'",
      "Vitamin C deficiency (scurvy) impairs conversion of proline to hydroxyproline, causing collagen defects—bleeding gums, poor wound healing, weakened blood vessels",
    ],
  },
  {
    slug: "propionate",
    why_it_matters: `Propionate is a short-chain fatty acid (SCFA) produced by gut bacteria when they ferment fiber—understanding it reveals how fiber affects metabolism and appetite. For supplement shoppers, propionate is one reason why high-fiber diets and prebiotic supplements support metabolic health and weight management. Unlike butyrate (which feeds colon cells), propionate travels to the liver and affects glucose production, cholesterol synthesis, and appetite signaling. Some research suggests propionate reduces food intake and body weight. Understanding propionate helps you appreciate the gut-metabolism connection and why fiber intake matters beyond just "keeping you regular."`,
    simple_explanation: `When the bacteria in your colon ferment fiber, they produce short-chain fatty acids (SCFAs) as byproducts. Propionate is one of the three main SCFAs (along with acetate and butyrate). Unlike butyrate (which mainly feeds colon cells) and acetate (which enters general circulation), propionate has a special route to the liver. There, it affects metabolism: it reduces glucose production, inhibits cholesterol synthesis, and triggers satiety hormones. Basically, propionate helps explain how eating fiber affects your metabolism beyond the fiber itself. Some researchers are exploring propionate-releasing supplements or fibers that specifically increase propionate production for metabolic benefits.`,
    key_points: `### Key Facts About Propionate

- **Gut bacterial product**: Propionate is produced when gut bacteria ferment certain fibers; levels depend on both fiber intake and gut bacterial composition
- **Liver metabolism**: Unlike other SCFAs, propionate primarily travels to the liver, where it reduces gluconeogenesis (glucose production) and cholesterol synthesis
- **Appetite effects**: Propionate stimulates release of satiety hormones (PYY, GLP-1); delivering propionate directly to the colon reduces food intake in human studies
- **Specific fiber sources**: Propionate production varies by fiber type; beta-glucan (oats, barley) and inulin promote propionate production more than some other fibers
- **Weight management research**: IPE (inulin-propionate ester) is a supplement designed to deliver propionate to the colon; early trials show reduced food intake and weight gain`,
    common_misconceptions: [
      `**Myth:** All fiber produces the same SCFAs.\n**Fact:** Different fibers favor different SCFAs. Some produce more butyrate, others more propionate or acetate. The type of fiber and your gut bacteria both affect the SCFA profile.`,
      `**Myth:** You should supplement with propionate directly.\n**Fact:** Oral propionate would be absorbed in the small intestine, missing the colon where it's normally produced. Colonic delivery systems or propionate-promoting fibers are being researched.`,
      `**Myth:** Propionate only affects the gut.\n**Fact:** Propionate significantly affects liver metabolism and brain appetite centers through hormone signaling—it's a gut-liver-brain connection mediator.`,
    ],
    examples: [
      "Eating oatmeal (beta-glucan fiber) increases propionate production in the gut, which may contribute to oatmeal's cholesterol-lowering and satiety effects",
      "Inulin-propionate ester (IPE) supplements deliver propionate directly to the colon; studies show reduced appetite and less weight gain compared to inulin alone",
      "Someone taking a prebiotic inulin supplement may have increased propionate production, potentially affecting their appetite and metabolic markers",
      "The Hadza tribe (traditional hunter-gatherers with high fiber intake) have much higher propionate levels than Western populations—possibly contributing to their metabolic health",
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
  console.log("=== BATCH 16: Enhancing Glossary Terms 151-160 ===\n");

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
