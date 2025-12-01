/**
 * Batch 13: Enhance glossary terms 121-130 (alphabetically)
 * Terms: Metabolic Syndrome, Metabolism, Methylcobalamin, Methylfolate, Micronized,
 *        Mineral, Mitochondria, mTOR, Muscle Protein Synthesis, Myoglobin
 *
 * Run: node scripts/enhance-glossary-batch-13.mjs
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
    slug: "metabolicsyndrome",
    why_it_matters: `Metabolic syndrome affects over a third of American adults and dramatically increases risk of heart disease, stroke, and diabetes. For supplement shoppers, understanding metabolic syndrome reveals why so many supplements target "metabolic health." The syndrome is a cluster of interconnected problems: belly fat, high blood sugar, high blood pressure, high triglycerides, and low HDL cholesterol. These conditions feed each other in a vicious cycle driven largely by insulin resistance. Supplements targeting metabolic syndrome include berberine, omega-3s, magnesium, and chromium. However, lifestyle changes (weight loss, exercise, diet) have far larger effects. Understanding metabolic syndrome helps you recognize when supplements might help and when they're insufficient alone.`,
    simple_explanation: `Metabolic syndrome isn't a single disease—it's a cluster of five conditions that often occur together and dramatically raise your risk of heart disease and diabetes. You have metabolic syndrome if you have three or more of: (1) large waistline (>40" for men, >35" for women), (2) high triglycerides (≥150 mg/dL), (3) low HDL cholesterol (<40 men, <50 women), (4) high blood pressure (≥130/85), or (5) high fasting glucose (≥100 mg/dL). These conditions are connected—central obesity drives insulin resistance, which raises blood sugar, triglycerides, and blood pressure while lowering HDL. Think of it as a metabolic traffic jam: when insulin stops working properly, multiple systems back up. Losing 5-10% of body weight often improves all five components simultaneously because it addresses the root cause.`,
    key_points: `### Key Facts About Metabolic Syndrome

- **Diagnostic criteria**: Three or more of: large waist, high triglycerides, low HDL, high blood pressure, high fasting glucose—any combination of three qualifies
- **Prevalence**: Affects 34% of American adults and increases with age; often undiagnosed despite simple diagnostic criteria
- **Insulin resistance core**: Most components trace back to insulin resistance and central (visceral) fat accumulation—addressing these helps everything
- **Cardiovascular risk**: Metabolic syndrome doubles cardiovascular disease risk; 5x increased risk of developing type 2 diabetes
- **Lifestyle is primary**: Weight loss of 5-10% dramatically improves all components; exercise and diet changes are first-line treatment before medications`,
    common_misconceptions: [
      `**Myth:** Metabolic syndrome is just a collection of separate health problems.\n**Fact:** The conditions in metabolic syndrome are interconnected through insulin resistance and inflammation. They cluster together because they share common underlying causes—it's one syndrome, not five separate problems.`,
      `**Myth:** You need medications to address each component separately.\n**Fact:** Weight loss and exercise often improve all five components simultaneously by addressing the root cause (insulin resistance). Treating individual numbers without addressing root causes is less effective.`,
      `**Myth:** Thin people can't have metabolic syndrome.\n**Fact:** "Metabolically obese normal weight" individuals exist—normal BMI but with visceral fat, insulin resistance, and metabolic abnormalities. Waist circumference and metabolic markers matter more than scale weight.`,
    ],
    examples: [
      "Someone with 42-inch waist, triglycerides 180, HDL 38, BP 135/88, and glucose 105 has all five criteria—metabolic syndrome is very likely",
      "Losing 15 pounds reduces waist circumference, lowers triglycerides 20%, raises HDL 10%, drops blood pressure 10 points, and improves glucose—addressing root cause improves everything",
      "Berberine (500mg 2-3x daily) may improve several metabolic syndrome components, but effects are modest compared to the 5-10% weight loss standard of care",
      "A 35-year-old with metabolic syndrome has the cardiovascular age of a 50-year-old—the syndrome accelerates arterial aging and damage",
    ],
  },
  {
    slug: "metabolism",
    why_it_matters: `Metabolism is one of the most misunderstood concepts in health—and one of the most marketed in the supplement industry. For supplement shoppers, "metabolism boosters" are everywhere, but understanding what metabolism actually is reveals why most claims are exaggerated. Metabolism includes thousands of chemical reactions constantly occurring in your body: breaking down food for energy (catabolism), building and repairing tissues (anabolism), and maintaining basic functions. Your basal metabolic rate (BMR) is largely determined by body size and muscle mass, not supplements. While some compounds (caffeine, green tea extract) modestly increase metabolic rate, effects are small and temporary. Understanding metabolism helps you focus on what actually works: building muscle, staying active, and eating appropriately.`,
    simple_explanation: `Metabolism is the sum of all chemical reactions happening in your body right now—thousands of processes converting food into energy, building new cells, repairing damage, and keeping everything running. It has two main parts: catabolism (breaking things down for energy) and anabolism (building things up). When people talk about "fast" or "slow" metabolism, they usually mean basal metabolic rate (BMR)—the calories your body burns just existing, which accounts for 60-70% of daily energy expenditure. BMR is mostly determined by body size, muscle mass, age, and genetics. More muscle = higher metabolism because muscle tissue is metabolically active. This is why building muscle is the most effective long-term "metabolism booster"—not pills or supplements.`,
    key_points: `### Key Facts About Metabolism

- **Two components**: Catabolism (breaking down molecules for energy) and anabolism (building complex molecules like proteins and DNA)
- **BMR dominates**: Basal metabolic rate (calories burned at rest) accounts for 60-70% of daily energy expenditure—much more than exercise for most people
- **Muscle matters**: Each pound of muscle burns ~6 calories/day at rest; building 10 lbs of muscle raises BMR by 60 calories—modest but adds up
- **Age decline**: Metabolism decreases ~2% per decade after 20, largely due to muscle loss (sarcopenia)—resistance training counteracts this
- **Supplement limits**: Stimulants (caffeine, green tea) increase metabolism 3-4% temporarily; thermogenics have small, often overstated effects`,
    common_misconceptions: [
      `**Myth:** Some people have naturally "fast" or "slow" metabolisms that determine their weight.\n**Fact:** BMR varies less between individuals than commonly believed. Most variation is explained by body size and composition. Obesity research shows overweight individuals typically have HIGHER absolute metabolic rates because larger bodies require more energy.`,
      `**Myth:** Metabolism boosting supplements dramatically increase calorie burn.\n**Fact:** Most "metabolism boosters" increase calorie burn by 3-8% temporarily (50-100 extra calories/day). This is easily offset by slightly larger portions. They're not magic weight loss solutions.`,
      `**Myth:** Eating frequently "stokes your metabolic fire."\n**Fact:** Meal frequency has no meaningful effect on metabolism. Total calories and macronutrients matter; whether you eat 3 or 6 meals is personal preference, not a metabolic strategy.`,
    ],
    examples: [
      "A 180-pound man has BMR around 1,800 calories/day; adding 10 lbs of muscle might raise this to 1,860—meaningful over years but not dramatic",
      "Caffeine (200mg) increases metabolic rate by about 3-4% for a few hours—roughly 20-40 extra calories burned per dose",
      "Someone who crash-diets loses muscle along with fat, reducing BMR; they regain weight easily because their metabolism adapted to support a smaller, less muscular body",
      "Cold exposure (cold showers, cold environments) can activate brown fat and increase metabolism, but effects are small and uncomfortable to sustain",
    ],
  },
  {
    slug: "methylcobalamin",
    why_it_matters: `Methylcobalamin is one of the two active forms of vitamin B12—and understanding it helps you navigate the confusing B12 supplement market. For supplement shoppers, B12 comes in four forms: cyanocobalamin (synthetic, cheapest), methylcobalamin (active, for methylation), adenosylcobalamin (active, for energy), and hydroxocobalamin (injectable). Methylcobalamin is particularly important for neurological health and methylation—biochemical reactions affecting mood, detoxification, and gene expression. People with MTHFR variants or neurological symptoms may specifically benefit from methylcobalamin over cyanocobalamin. However, for basic B12 deficiency prevention, any form works for most people. Knowing the differences helps you match the form to your needs.`,
    simple_explanation: `Methylcobalamin is vitamin B12 with a methyl group attached—making it one of the "active" forms your body can use directly without conversion. When you take cyanocobalamin (the cheap, synthetic form), your body must convert it to methylcobalamin or adenosylcobalamin before using it. This conversion requires energy and doesn't work efficiently in everyone. Methylcobalamin is especially important for two things: (1) supporting the nervous system—B12 deficiency causes neurological damage, and methylcobalamin is the form nerves use, and (2) methylation—the biochemical process of adding methyl groups to molecules, which affects DNA expression, detoxification, and neurotransmitter production. If you have neurological symptoms, MTHFR gene variants, or want to skip the conversion step, methylcobalamin may be worth the higher cost.`,
    key_points: `### Key Facts About Methylcobalamin

- **Active form**: Used directly by cells without conversion—skips the enzymatic steps required by cyanocobalamin
- **Neurological preference**: The form used in the nervous system; may be particularly beneficial for neuropathy and neurological B12 deficiency symptoms
- **Methylation support**: Provides a ready methyl group for methylation reactions, supporting homocysteine metabolism and neurotransmitter synthesis
- **MTHFR relevance**: People with MTHFR variants may benefit more from methylcobalamin since their methylation pathways are already compromised
- **Stability**: Less stable than cyanocobalamin; sensitive to light—some degradation in supplements over time; amber bottles help`,
    common_misconceptions: [
      `**Myth:** Methylcobalamin is always better than cyanocobalamin.\n**Fact:** For basic B12 deficiency prevention, either form works fine. Cyanocobalamin is well-studied, stable, and effective for most people. Methylcobalamin offers potential advantages for neurological symptoms or MTHFR carriers, but isn't universally superior.`,
      `**Myth:** You need methylcobalamin for methylation; cyanocobalamin can't support methylation.\n**Fact:** Your body converts cyanocobalamin to methylcobalamin and uses it for methylation. The conversion works fine for most people. Methylcobalamin just skips that step.`,
      `**Myth:** High doses of methylcobalamin provide additional benefits.\n**Fact:** Once B12 needs are met, higher doses don't provide extra neurological or energy benefits. B12 isn't a stimulant—deficiency causes problems; excess doesn't enhance function beyond baseline.`,
    ],
    examples: [
      "Someone with peripheral neuropathy and B12 deficiency might specifically choose methylcobalamin for its direct neurological activity",
      "A person with MTHFR C677T variant takes methylcobalamin (along with methylfolate) to support their compromised methylation pathway",
      "Cyanocobalamin is the form used in fortified foods and most studies proving B12 benefits—it works fine for general supplementation",
      "Sublingual methylcobalamin dissolves under the tongue for potentially better absorption in people with digestive issues affecting B12 absorption",
    ],
  },
  {
    slug: "methylfolate",
    why_it_matters: `Methylfolate (5-MTHF) is the active form of folate—and understanding it has become important given widespread MTHFR gene testing. For supplement shoppers, methylfolate matters because about 40% of people have MTHFR variants that reduce their ability to convert folic acid to methylfolate. While controversy exists about how much this matters clinically, methylfolate supplements bypass the conversion issue entirely. For pregnancy (neural tube defect prevention), mental health (depression is linked to folate status), and anyone with known MTHFR variants, methylfolate may be preferable to folic acid. Understanding the folic acid → dihydrofolate → tetrahydrofolate → methylfolate pathway helps you decide which form to take.`,
    simple_explanation: `Methylfolate is folate (vitamin B9) in its final active form—what your body actually uses for DNA synthesis, cell division, and methylation reactions. When you eat folic acid (the synthetic form in supplements and fortified foods), your body must convert it through several enzymatic steps to reach methylfolate. The final step requires the MTHFR enzyme, and about 40% of people have genetic variants that slow this enzyme. If you have these variants, folic acid backs up while methylfolate runs low. Methylfolate supplements skip the entire conversion process, providing the active form directly. This is particularly important during pregnancy (when folate demands are high), for depression (low folate is linked to poor response to antidepressants), and for anyone with confirmed MTHFR mutations.`,
    key_points: `### Key Facts About Methylfolate

- **Active form**: 5-methyltetrahydrofolate (5-MTHF) is the form that enters cells and participates in one-carbon metabolism—no conversion needed
- **MTHFR bypass**: Directly provides what MTHFR produces, benefiting the ~40% of people with MTHFR variants that slow folic acid conversion
- **Neural tube prevention**: Works as well as folic acid for preventing birth defects; may be preferable for women with MTHFR variants
- **Depression link**: Low folate/methylfolate status is associated with depression and poor antidepressant response; L-methylfolate is adjunctive treatment for depression
- **Label names**: L-methylfolate, 5-MTHF, Metafolin, Quatrefolic—different names for essentially the same active compound`,
    common_misconceptions: [
      `**Myth:** Everyone with MTHFR variants must avoid folic acid and take methylfolate.\n**Fact:** Even with MTHFR variants, some conversion still occurs. Many people with variants do fine on folic acid. Methylfolate may be optimal but isn't absolutely required for everyone with these variants.`,
      `**Myth:** Folic acid is dangerous for MTHFR carriers.\n**Fact:** High-dose folic acid that accumulates unconverted is theoretically concerning, but normal doses (400-800mcg) are safe. The concern is more about efficacy than danger—methylfolate may simply work better for some.`,
      `**Myth:** Methylfolate is better for everyone, not just MTHFR carriers.\n**Fact:** For people who convert folic acid efficiently, both forms work equally well. Methylfolate is specifically advantageous when conversion is impaired.`,
    ],
    examples: [
      "A woman with MTHFR C677T homozygous variant chooses a prenatal vitamin with methylfolate instead of folic acid for optimal neural tube protection",
      "Someone with treatment-resistant depression adds L-methylfolate (15mg) to their antidepressant regimen based on research showing improved response",
      "Elevated homocysteine despite folic acid supplementation suggests poor conversion; switching to methylfolate often normalizes levels",
      "Quatrefolic and Metafolin are branded forms of methylfolate with documented bioavailability—quality markers on supplement labels",
    ],
  },
  {
    slug: "micronized",
    why_it_matters: `Micronized supplements are marketed as having superior absorption—but does smaller particle size actually matter? For supplement shoppers, understanding micronization helps evaluate marketing claims. The science is real: smaller particles have more surface area, dissolving faster and potentially absorbing better. This matters most for poorly soluble compounds like creatine, progesterone, and some minerals. Micronized creatine dissolves more easily in water and may cause less stomach upset. However, for compounds that already dissolve well, micronization provides little benefit. Knowing when particle size matters (and when it's marketing) helps you decide whether to pay premium prices for micronized versions.`,
    simple_explanation: `Micronized means a supplement has been processed to create extremely small particles—typically less than 20 micrometers (that's 0.02 millimeters, about 1/5 the width of a human hair). Why does this matter? Smaller particles have more surface area relative to their volume, which means they can dissolve faster. Think of sugar cubes versus powdered sugar—the powder dissolves almost instantly because tiny particles contact water from all sides. For supplements that don't dissolve easily (like creatine monohydrate), micronization can genuinely improve mixability and potentially absorption. The powder blends smoothly instead of clumping at the bottom of your glass. However, for supplements that already dissolve well, micronization is marketing rather than science.`,
    key_points: `### Key Facts About Micronized Supplements

- **Particle size reduction**: Micronization reduces particles to <20 micrometers, increasing surface area for faster dissolution
- **Dissolution improvement**: Smaller particles dissolve more quickly and completely, reducing grittiness and improving mixability
- **Absorption claims**: Faster dissolution may improve absorption for poorly soluble compounds; effect is less significant for water-soluble substances
- **Creatine example**: Micronized creatine mixes better and may cause less GI upset than regular creatine, though both are ultimately absorbed
- **Premium pricing**: Micronized versions often cost more; worth it for poorly soluble compounds where dissolution is genuinely problematic`,
    common_misconceptions: [
      `**Myth:** Micronized supplements are always dramatically better absorbed.\n**Fact:** Micronization improves dissolution speed, which may improve absorption for poorly soluble compounds. For supplements that already dissolve well, particle size has minimal impact on actual absorption.`,
      `**Myth:** Regular (non-micronized) creatine is poorly absorbed.\n**Fact:** Both regular and micronized creatine are eventually absorbed; studies show similar muscle creatine elevation. Micronized is mainly about mixability and potentially less stomach upset, not fundamentally different absorption.`,
      `**Myth:** Micronization is a complex, high-tech process.\n**Fact:** It's mechanical grinding to achieve small particle size—not a novel chemistry. The same active ingredient is just in smaller pieces.`,
    ],
    examples: [
      "Micronized creatine monohydrate mixes instantly in water; regular creatine settles to the bottom and requires vigorous stirring",
      "Someone experiences stomach upset from regular creatine but tolerates micronized creatine better—possibly due to faster, more complete dissolution",
      "Micronized DHEA or progesterone may have better bioavailability because these hormones are poorly water-soluble in their regular form",
      "Micronized vitamin C likely provides no advantage over regular vitamin C since it's already highly water-soluble",
    ],
  },
  {
    slug: "mineral",
    why_it_matters: `Minerals are essential nutrients that your body can't produce—making supplementation relevant when diet falls short. For supplement shoppers, understanding minerals helps navigate this major supplement category. Unlike vitamins (organic compounds), minerals are elements from the periodic table—they can't be created or destroyed. This means quality comes from the form (what the mineral is bound to), not the mineral itself. Magnesium oxide differs from magnesium glycinate not in the magnesium but in the binding partner and resulting absorption. Minerals also interact—too much zinc depletes copper; calcium can interfere with iron absorption. Understanding these basics helps you choose appropriate forms and avoid imbalanced supplementation.`,
    simple_explanation: `Minerals are chemical elements your body needs for thousands of critical functions—from building bones (calcium) to carrying oxygen (iron) to supporting enzyme reactions (zinc, magnesium). Unlike vitamins, which are complex organic molecules, minerals are simple atoms from the periodic table. Your body can't make minerals; they must come from food, water, or supplements. In the ground, minerals are just rocks; plants absorb them through roots; you absorb them from plants or animals. In supplements, minerals are bound to other molecules (citrate, oxide, glycinate) that affect absorption and tolerability. There are two categories: macrominerals (needed in large amounts: calcium, magnesium, potassium) and trace minerals (needed in tiny amounts: iron, zinc, selenium, iodine). Both are essential.`,
    key_points: `### Key Facts About Minerals

- **Elemental, not organic**: Minerals are elements (iron, calcium, zinc)—they can't be synthesized and aren't destroyed by cooking or light like some vitamins
- **Form matters**: The same mineral bound to different molecules (oxide, citrate, glycinate) has different absorption and tolerability profiles
- **Macro vs. trace**: Macrominerals needed in >100mg/day (calcium, magnesium, potassium); trace minerals in <100mg/day (iron, zinc, copper, selenium)
- **Interactions exist**: Minerals compete for absorption—high-dose zinc depletes copper; calcium interferes with iron; taking together may reduce absorption of both
- **Soil dependent**: Mineral content in food depends on soil quality where plants grew; regional deficiencies exist (iodine, selenium in certain areas)`,
    common_misconceptions: [
      `**Myth:** All mineral supplements are essentially the same.\n**Fact:** The form dramatically affects absorption and tolerability. Magnesium oxide is 4% absorbed; magnesium glycinate is 25%+ absorbed. Same mineral, very different bioavailability.`,
      `**Myth:** More minerals are always better.\n**Fact:** Minerals can be toxic in excess (iron, selenium) and compete with each other. Balanced intake is key; mega-dosing individual minerals can create imbalances.`,
      `**Myth:** You need to supplement every mineral.\n**Fact:** Most people eating varied diets get adequate amounts of many minerals. Common deficiencies are specific: magnesium, iron (in some populations), iodine, zinc. Blanket supplementation isn't necessary.`,
    ],
    examples: [
      "Magnesium from spinach has different absorption than magnesium citrate supplement; food matrix affects mineral bioavailability just like supplement form does",
      "Taking iron with calcium reduces iron absorption by up to 50%—why iron supplements should be taken separately from dairy or calcium pills",
      "Selenium content in Brazil nuts varies 10-fold depending on where they were grown—soil selenium levels vary dramatically by region",
      "Zinc supplementation at 50mg/day for months can cause copper deficiency; balanced multi-mineral or copper co-supplementation prevents this",
    ],
  },
  {
    slug: "mitochondria",
    why_it_matters: `Mitochondria are your cells' power plants, and understanding them explains why CoQ10, NAD+ precursors, PQQ, and other "cellular energy" supplements exist. For supplement shoppers, mitochondrial health is marketed for energy, anti-aging, and athletic performance. The science is real: mitochondria produce 90% of your cellular energy (ATP), and their function declines with age. CoQ10 is essential for mitochondrial energy production; NAD+ (supported by NMN and NR supplements) is required for key mitochondrial enzymes. Whether supplements meaningfully improve mitochondrial function in healthy people is debated, but for certain conditions (CoQ10 deficiency, statin-induced mitochondrial stress), support may be beneficial. Understanding mitochondria helps you evaluate these "energy at the cellular level" claims.`,
    simple_explanation: `Mitochondria are tiny structures inside almost every cell in your body—often called "cellular powerhouses" because they generate most of your energy. They take oxygen and nutrients from your food and convert them into ATP (adenosine triphosphate), the energy currency cells use for everything: thinking, moving, building proteins, and staying alive. Each cell contains hundreds to thousands of mitochondria, with energy-hungry cells (brain, heart, muscles) having the most. Mitochondria have their own DNA and are thought to have been independent bacteria billions of years ago that merged with our ancestor cells. As we age, mitochondrial function declines—they produce less ATP and more damaging free radicals. This "mitochondrial dysfunction" is linked to aging, fatigue, and many chronic diseases. Supplements like CoQ10, NAD+ precursors, and PQQ aim to support mitochondrial health.`,
    key_points: `### Key Facts About Mitochondria

- **ATP factories**: Mitochondria produce ~90% of cellular ATP through oxidative phosphorylation; without them, cells can't meet energy demands
- **Abundance varies**: Energy-demanding tissues (heart, brain, muscles) have the most mitochondria—thousands per cell in heart muscle
- **Own DNA**: Mitochondria have their own genome (mtDNA), inherited only from mothers; mitochondrial diseases often involve mtDNA mutations
- **Aging connection**: Mitochondrial function declines with age—less energy production, more oxidative damage; this decline contributes to aging
- **Supplement targets**: CoQ10 (electron transport), NAD+ (required for key enzymes), PQQ (mitochondrial biogenesis)—various compounds target different aspects`,
    common_misconceptions: [
      `**Myth:** Taking mitochondrial supplements will give you noticeably more energy.\n**Fact:** Unless you have a specific deficiency (CoQ10 depletion from statins) or mitochondrial dysfunction, supplements may not produce noticeable energy improvements in healthy people.`,
      `**Myth:** Mitochondria are just energy factories with no other function.\n**Fact:** Mitochondria also regulate calcium signaling, cell death (apoptosis), immune responses, and produce metabolic intermediates. They're central to cell physiology beyond energy.`,
      `**Myth:** You can't improve mitochondrial function.\n**Fact:** Exercise is the most powerful stimulus for mitochondrial biogenesis—creating new, healthy mitochondria. Endurance training can increase mitochondrial density in muscles by 50-100%.`,
    ],
    examples: [
      "Statin medications can inhibit CoQ10 synthesis, reducing mitochondrial function; CoQ10 supplementation may help restore energy production in statin users",
      "Endurance athletes have significantly more mitochondria in their muscles than sedentary individuals—exercise stimulates mitochondrial biogenesis",
      "NAD+ levels decline 50% between ages 40 and 60; NMN and NR supplements aim to restore NAD+ and support mitochondrial enzyme function",
      "Someone with chronic fatigue and low CoQ10 blood levels may experience energy improvement from CoQ10 supplementation—addressing a specific deficiency",
    ],
  },
  {
    slug: "mtor",
    why_it_matters: `mTOR is the master switch for muscle building—understanding it explains why leucine and protein timing matter, and why some longevity researchers advocate mTOR "cycling." For supplement shoppers, mTOR is relevant because leucine directly activates it, making protein quality and timing scientifically meaningful. mTOR turns on muscle protein synthesis when nutrients (especially amino acids) and growth signals are present. However, chronically elevated mTOR is linked to aging and potentially cancer, which is why intermittent fasting (which lowers mTOR) is promoted for longevity. This creates a nuanced picture: you want mTOR activation for muscle building, but not constant activation. Understanding mTOR helps you appreciate both protein timing science and the logic behind fasting protocols.`,
    simple_explanation: `mTOR (mechanistic Target of Rapamycin) is a protein inside your cells that acts like a construction foreman—when it's activated, it tells cells to build more proteins, grow, and multiply. When nutrients are available (especially the amino acid leucine), mTOR switches "on" and muscle protein synthesis revs up. When nutrients are scarce (like during fasting), mTOR switches "off" and cells enter a conservation/cleanup mode. This makes mTOR central to muscle building: eating protein, especially leucine-rich protein, activates mTOR and triggers muscle growth. But here's the catch—chronically elevated mTOR (from constant eating) is linked to accelerated aging and potentially cancer. This is why intermittent fasting proponents suggest giving mTOR periodic breaks. The name comes from rapamycin, a drug that inhibits mTOR and extends lifespan in animal studies.`,
    key_points: `### Key Facts About mTOR

- **Nutrient sensor**: mTOR integrates signals from amino acids (especially leucine), insulin, growth factors, and cellular energy status
- **Protein synthesis master switch**: Activation of mTOR directly turns on the machinery for muscle protein synthesis—essential for muscle growth
- **Leucine connection**: Leucine is the most potent amino acid activator of mTOR; this explains why leucine/protein intake drives muscle building
- **Aging trade-off**: Chronic mTOR activation promotes growth but also accelerates aging; mTOR inhibition extends lifespan in animals
- **Fasting cycles mTOR**: Intermittent fasting allows periodic mTOR suppression, theoretically balancing growth benefits with longevity benefits`,
    common_misconceptions: [
      `**Myth:** You want mTOR activated all the time for maximum muscle growth.\n**Fact:** While mTOR drives muscle building, constant activation prevents autophagy (cellular cleanup) and may accelerate aging. Cycling between fed (mTOR active) and fasted (mTOR suppressed) states may be optimal.`,
      `**Myth:** mTOR is only about muscles.\n**Fact:** mTOR regulates growth and metabolism in all cells, not just muscle. It influences immune function, brain function, cancer risk, and lifespan—it's a fundamental cellular regulator.`,
      `**Myth:** Supplements can meaningfully inhibit mTOR for anti-aging benefits.\n**Fact:** While some compounds (resveratrol, curcumin) have modest mTOR effects in lab studies, fasting and caloric restriction are far more powerful mTOR modulators than any supplement.`,
    ],
    examples: [
      "Eating 30g whey protein (high leucine) activates mTOR within 30 minutes, triggering muscle protein synthesis for 3-5 hours",
      "A 16-hour overnight fast suppresses mTOR, allowing autophagy to clear damaged proteins before the next meal reactivates growth pathways",
      "Rapamycin (an mTOR inhibitor) extends lifespan 20-30% in mice; this sparked interest in mTOR's role in aging",
      "Leucine supplements (3-5g) can activate mTOR even without complete protein, though complete protein provides all building blocks for actual muscle synthesis",
    ],
  },
  {
    slug: "muscleproteinsynthesis",
    why_it_matters: `Muscle protein synthesis (MPS) is the process by which your body builds muscle—understanding it transforms how you think about protein, exercise, and supplements. For supplement shoppers, MPS is the target of protein powders, amino acids, creatine, and many other products. The key insight is that MPS isn't constant; it spikes in response to training and protein intake (especially leucine), then returns to baseline. Maximizing muscle growth means repeatedly triggering MPS spikes through proper training and nutrition timing. Knowing that each protein meal stimulates MPS for about 3-5 hours, and that you need adequate leucine (~2.5g) to fully trigger it, makes protein distribution across meals scientifically meaningful, not just bro-science.`,
    simple_explanation: `Muscle protein synthesis is your body's muscle-building process—taking amino acids from protein you eat and assembling them into muscle tissue. Your muscles are constantly turning over: old proteins break down (muscle protein breakdown) while new proteins are built (synthesis). When synthesis exceeds breakdown, muscles grow; when breakdown exceeds synthesis, muscles shrink. MPS isn't constant—it spikes dramatically after you eat protein (especially leucine-rich protein) and after resistance exercise, then gradually returns to baseline over 3-5 hours. The combination of exercise and protein creates the largest MPS response—which is why post-workout protein is emphasized. To build muscle, you need to repeatedly trigger these MPS spikes through training and protein distribution, while ensuring total daily protein is adequate.`,
    key_points: `### Key Facts About Muscle Protein Synthesis

- **Trigger required**: MPS spikes in response to resistance exercise and protein intake (especially leucine); it doesn't stay elevated continuously
- **3-5 hour window**: After a protein-rich meal, MPS is elevated for about 3-5 hours before returning to baseline—this guides meal spacing
- **Leucine threshold**: About 2.5-3g leucine (typically from 25-30g protein) maximally triggers MPS; more protein doesn't increase MPS further
- **Exercise amplifies**: Resistance exercise sensitizes muscles to protein for 24-48 hours; protein eaten during this window triggers larger MPS response
- **Net balance matters**: Muscle growth = MPS - muscle protein breakdown; you need MPS to exceed breakdown over time`,
    common_misconceptions: [
      `**Myth:** Eating protein constantly keeps MPS elevated all day.\n**Fact:** MPS becomes refractory (unresponsive) after being elevated—muscles need time to "reset" before responding to another protein dose. Eating every 2 hours doesn't further elevate MPS.`,
      `**Myth:** You need 50g+ protein to maximize MPS.\n**Fact:** MPS maxes out around 25-40g protein (depending on age and body size). Extra protein beyond this doesn't increase MPS further—it just gets used for other purposes or oxidized.`,
      `**Myth:** MPS only matters for bodybuilders.\n**Fact:** Everyone needs adequate MPS to maintain muscle mass, especially with aging. Preserving muscle through proper protein intake protects metabolic health, bone density, and physical function at any age.`,
    ],
    examples: [
      "Eating 30g whey protein triggers maximum MPS; eating 60g doesn't double the response—excess protein is used for energy or converted to glucose",
      "Spacing 4 protein meals across the day (each ~25-40g) triggers 4 distinct MPS spikes; cramming all protein into 1-2 meals triggers fewer spikes",
      "Resistance exercise elevates MPS for 24-48 hours; eating protein any time during this window captures the enhanced anabolic sensitivity",
      "Elderly individuals have 'anabolic resistance'—they need 35-40g protein (more leucine) to trigger the same MPS that 20g triggers in young adults",
    ],
  },
  {
    slug: "myoglobin",
    why_it_matters: `Myoglobin is the oxygen-storage protein in muscles—understanding it explains why muscles are red and why iron deficiency causes fatigue. For supplement shoppers, myoglobin connects iron supplementation to actual muscle function. Like hemoglobin in blood, myoglobin contains iron that binds oxygen. When blood delivers oxygen to muscles, myoglobin stores it for use during contraction. Athletes with more myoglobin can sustain higher-intensity efforts because their muscles have larger oxygen reserves. Iron deficiency reduces myoglobin (not just hemoglobin), explaining why anemia causes muscle fatigue and weakness beyond just feeling breathless. This is why iron status matters for athletic performance even when you're not technically anemic.`,
    simple_explanation: `Myoglobin is a protein in your muscles that stores oxygen for immediate use during exercise. While hemoglobin carries oxygen in your blood, myoglobin is the "local oxygen tank" in each muscle cell. It grabs oxygen from hemoglobin when blood passes through muscles and holds it until your muscle needs energy for contraction. This is why muscle tissue is red—myoglobin (like hemoglobin) contains iron that gives it a red color. When you exercise intensely, myoglobin releases its stored oxygen to mitochondria so they can keep producing ATP. Muscles with more myoglobin (like the dark meat in chicken legs) can sustain longer activity. Diving mammals like whales have extremely high myoglobin levels, allowing them to store massive oxygen reserves for extended dives.`,
    key_points: `### Key Facts About Myoglobin

- **Oxygen storage**: Myoglobin stores oxygen in muscle tissue, providing a local reserve during exercise when blood can't deliver oxygen fast enough
- **Iron-containing**: Like hemoglobin, myoglobin contains an iron-heme group that binds oxygen; iron deficiency affects both proteins
- **Red color source**: Myoglobin gives muscles their red color; more myoglobin = darker meat (chicken thighs vs. breast)
- **Fiber type connection**: Slow-twitch (endurance) muscle fibers have more myoglobin than fast-twitch (power) fibers—matching oxygen needs
- **Training adaptation**: Endurance training increases muscle myoglobin content, improving oxygen storage and aerobic capacity`,
    common_misconceptions: [
      `**Myth:** Hemoglobin and myoglobin are the same thing.\n**Fact:** Both bind oxygen using iron-heme groups, but they're different proteins in different locations. Hemoglobin is in red blood cells for oxygen transport; myoglobin is in muscle cells for oxygen storage.`,
      `**Myth:** Iron deficiency only affects blood oxygen levels.\n**Fact:** Iron deficiency reduces both hemoglobin AND myoglobin. Even before anemia develops, muscle myoglobin can decline, causing exercise fatigue and reduced endurance.`,
      `**Myth:** All muscles have the same myoglobin content.\n**Fact:** Slow-twitch endurance fibers have much higher myoglobin than fast-twitch power fibers. This is why "dark meat" (active muscles like legs) is darker than "white meat" (less active breast).`,
    ],
    examples: [
      "A long-distance runner has higher myoglobin in leg muscles than a sprinter—endurance training increases myoglobin content for better oxygen storage",
      "Iron-deficient athletes experience muscle fatigue even before blood tests show anemia—myoglobin depletion affects muscles directly",
      "Whale muscles are nearly black due to extreme myoglobin content; this allows storage of enough oxygen for dives lasting over an hour",
      "Rhabdomyolysis (severe muscle damage) releases myoglobin into blood, turning urine brown and potentially damaging kidneys—why it's a medical emergency",
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
  console.log("=== BATCH 13: Enhancing Glossary Terms 121-130 ===\n");

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
