/**
 * Batch 2: Enhance glossary terms 11-20 (alphabetically)
 * Terms: Anecdotal Evidence, Anemia, Antioxidant, Arachidonic Acid,
 *        Atherosclerosis, ATP, Bacteroides, Beta-Carotene, Bifidobacterium, Bioavailability
 *
 * Run: node scripts/enhance-glossary-batch-2.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// Enhanced content for Batch 2 terms
const enhancements = [
  {
    slug: "anecdotalevidence",
    why_it_matters: `In the supplement industry, anecdotal evidence is everywhere—from glowing Amazon reviews to "life-changing" testimonials on social media. While these personal stories can be compelling and sometimes point researchers toward promising leads, they're fundamentally unreliable for making informed supplement decisions. Understanding the difference between anecdotal reports and scientific evidence can save you money, protect your health, and help you avoid wasting time on products that don't deliver. This matters especially when companies use cherry-picked testimonials to sell expensive supplements that have never been tested in clinical trials.`,
    simple_explanation: `Anecdotal evidence is like asking your friend if a restaurant is good versus reading professional reviews. Your friend might love spicy food while you don't, had a particularly good server that night, or might just be easily pleased. Their experience is real to them, but it might not predict YOUR experience at all. In supplements, when someone says "this cured my fatigue," you don't know if it was the supplement, better sleep they started getting, the placebo effect, or just their condition naturally improving. One person's story—or even a hundred stories—can't tell you if something actually works because there's no comparison group, no objective measurements, and no control for all the other things happening in people's lives.`,
    key_points: `### Key Facts About Anecdotal Evidence

- **Memory bias**: People remember dramatic changes more than gradual ones, and tend to attribute improvement to whatever they started taking, even if unrelated
- **Publication bias**: You only hear success stories—the thousands who tried something and saw no effect don't post reviews
- **Placebo effect**: 30-40% of people report improvement from inactive pills in clinical trials, showing belief alone can create perceived benefits
- **Regression to the mean**: People often try supplements when symptoms are at their worst, so natural improvement gets credited to the supplement
- **Confounding factors**: Someone taking a new supplement often also improves sleep, diet, or exercise simultaneously`,
    common_misconceptions: [
      `**Myth:** If thousands of people report the same benefit, it must be real.\n**Fact:** Mass belief doesn't equal scientific validity. Thousands of people also reported benefits from now-debunked treatments throughout history. Without controlled studies, you can't know if the benefit is from the product or from other factors all those people might share.`,
      `**Myth:** My own experience is the most reliable evidence for me.\n**Fact:** Our perception of our own health is heavily influenced by expectations, mood, and attention. Controlled trials with objective measurements consistently show that people's self-reported improvements often don't match measurable physiological changes.`,
      `**Myth:** Doctors and scientists dismiss anecdotal evidence because they're closed-minded.\n**Fact:** Scientists actually value anecdotal reports—they generate hypotheses and point to areas worth studying. But they know that proper testing is needed because human perception is unreliable. This isn't closed-mindedness; it's understanding how easy it is to fool ourselves.`,
    ],
    examples: [
      "Someone credits their vitamin D supplement for curing seasonal depression, but they also started exercising and got more sunlight during their recovery",
      "A celebrity endorses a detox tea for weight loss, but their results came from personal trainers, nutritionists, and possible undisclosed procedures",
      "An online forum has hundreds of posts praising a nootropic, but the disappointed users simply left and stopped posting",
      'A supplement "worked immediately" for someone, but most supplements take weeks to affect anything measurable—suggesting placebo effect',
      "Product reviews show 90% positive ratings, but only enthusiastic customers tend to leave reviews, creating survivorship bias",
    ],
  },
  {
    slug: "anemia",
    why_it_matters: `Anemia affects over 1.6 billion people worldwide, making it one of the most common nutritional deficiencies. For supplement shoppers, understanding anemia is crucial because it directly impacts which supplements you might need and how effective they'll be. If you're anemic, even the best fitness regimen won't deliver results because your muscles aren't getting enough oxygen. Fatigue, weakness, and poor exercise recovery often have anemia as an underlying cause. Before spending money on energy boosters or pre-workouts, it's worth checking whether the real issue is iron, B12, or folate deficiency—all of which are correctable with the right supplements when properly diagnosed.`,
    simple_explanation: `Think of your red blood cells as delivery trucks carrying oxygen packages to every cell in your body. Anemia means you either don't have enough trucks (low red blood cell count) or your trucks are too small or poorly built (abnormal hemoglobin). Either way, your cells don't get enough oxygen delivery, so they can't produce energy efficiently. This is why anemia makes you feel exhausted—your body is essentially suffocating at the cellular level. Different causes require different fixes: iron deficiency means you need more iron to build trucks, B12 deficiency means the truck factory isn't working right, and some anemias are genetic and need medical management rather than supplements.`,
    key_points: `### Key Facts About Anemia

- **Multiple types**: Iron-deficiency is most common, but B12, folate, and chronic disease anemias require different treatments—taking iron won't help if you're B12 deficient
- **Hidden symptoms**: Mild anemia often goes undiagnosed because fatigue is attributed to stress, poor sleep, or aging
- **Testing matters**: A simple CBC (complete blood count) test can diagnose anemia, but further testing determines the cause and correct treatment
- **Absorption issues**: Even with adequate dietary intake, conditions like celiac disease, gastric bypass, or heavy menstruation can cause deficiency
- **Dangerous to self-treat**: Taking iron supplements when you're not deficient can cause organ damage—always test before supplementing`,
    common_misconceptions: [
      `**Myth:** Feeling tired all the time means you're probably anemic and should take iron.\n**Fact:** Fatigue has dozens of potential causes. Taking iron without a deficiency can be harmful—excess iron accumulates in organs and increases oxidative stress. Always get blood work before assuming you need iron supplements.`,
      `**Myth:** Eating more spinach will cure iron-deficiency anemia.\n**Fact:** Plant-based (non-heme) iron is poorly absorbed, especially when eaten with common foods containing phytates or calcium. Severe iron deficiency typically requires supplements or dietary changes beyond just "eating more greens."`,
      `**Myth:** If your hemoglobin is in the "normal" range, you can't be anemic.\n**Fact:** Ferritin (iron stores) can be depleted long before hemoglobin drops. You can have symptoms of iron deficiency with "normal" hemoglobin levels. Request ferritin testing for a complete picture.`,
    ],
    examples: [
      "A vegetarian athlete experiences declining performance and assumes they need more protein, when actually they have iron-deficiency anemia from inadequate heme iron intake",
      'A woman on a restrictive diet has ferritin levels of 12 ng/mL (depleted stores) but hemoglobin of 12.5 g/dL (low-normal), meaning she feels tired but might be told her blood work is "fine"',
      "An older adult with B12 anemia shows neurological symptoms like tingling and memory issues alongside fatigue—symptoms that won't improve with iron",
      "Someone with undiagnosed celiac disease keeps taking iron supplements but levels never improve because the damaged intestine can't absorb it",
    ],
  },
  {
    slug: "antioxidant",
    why_it_matters: `Antioxidants are among the most heavily marketed supplement ingredients, with claims ranging from anti-aging to cancer prevention to enhanced athletic performance. Understanding what antioxidants actually do—and don't do—can help you avoid wasting money on expensive "super antioxidant" supplements while ensuring you're getting genuine benefits from your diet. The science has become much more nuanced than the simple "antioxidants good, free radicals bad" message that dominated the 1990s-2000s. High-dose antioxidant supplements have actually shown potential harms in some studies, while food-based antioxidants remain beneficial. This distinction is crucial for making smart supplement choices.`,
    simple_explanation: `Imagine your body as a busy kitchen where cooking produces smoke (free radicals) as a natural byproduct. You need ventilation (antioxidants) to clear the smoke, or it builds up and damages your kitchen (oxidative stress). But here's where it gets complicated: some "smoke" is actually useful—your immune system produces free radicals to kill bacteria, and exercise-induced oxidative stress triggers beneficial adaptations. Taking massive amounts of antioxidant supplements is like installing industrial ventilation in a home kitchen—it doesn't make things better and might interfere with normal cooking. Food-based antioxidants come in balanced amounts with other beneficial compounds, working together naturally. Isolated high-dose supplements don't provide this balance.`,
    key_points: `### Key Facts About Antioxidants

- **Not all equal**: Vitamins C and E, beta-carotene, selenium, and polyphenols all work differently and in different body compartments—one can't substitute for another
- **Food vs. supplements**: Clinical trials show food-based antioxidants protect health, while high-dose supplements often don't—and sometimes cause harm
- **Exercise interference**: Taking antioxidants around workouts may blunt training adaptations because oxidative stress signals muscle growth and mitochondrial production
- **Network effect**: Antioxidants work together in networks—vitamin C regenerates vitamin E, for example—so isolating single antioxidants disrupts natural balance
- **Targeted use cases**: Some conditions (like macular degeneration) benefit from specific antioxidant combinations proven in clinical trials`,
    common_misconceptions: [
      `**Myth:** More antioxidants are always better for health.\n**Fact:** Multiple large trials found high-dose antioxidant supplements provided no benefit and sometimes increased mortality. The ATBC trial showed beta-carotene supplements increased lung cancer in smokers. Your body maintains a careful oxidant/antioxidant balance; flooding it with one side isn't beneficial.`,
      `**Myth:** Antioxidant supplements will prevent aging.\n**Fact:** While oxidative damage contributes to aging, clinical trials haven't shown antioxidant supplements extend lifespan or prevent age-related diseases. The complex aging process involves much more than oxidative stress alone.`,
      `**Myth:** High ORAC scores mean a food is healthier.\n**Fact:** The ORAC (Oxygen Radical Absorbance Capacity) test was so misused that the USDA withdrew its database. In-vitro antioxidant activity doesn't translate to in-vivo benefits—your body doesn't absorb and use antioxidants the same way a test tube does.`,
    ],
    examples: [
      'Açai berries are marketed for "super high antioxidant content," but clinical benefits beyond basic nutrition have never been demonstrated in humans',
      "An athlete takes vitamin C and E around workouts and wonders why their gains plateau—the supplements may be interfering with training adaptations",
      "The AREDS2 formula (specific antioxidant combination) is proven to slow macular degeneration progression—an example of targeted, evidence-based antioxidant supplementation",
      'Dark chocolate contains flavanols with cardiovascular benefits, but "chocolate antioxidant supplements" don\'t provide the same effects as the whole food matrix',
    ],
  },
  {
    slug: "arachidonicacid",
    why_it_matters: `Arachidonic acid (AA) occupies a unique and often misunderstood position in supplement science. As an omega-6 fatty acid, it's often demonized in wellness circles that promote omega-3s while warning against omega-6s. However, AA is essential for human health, playing crucial roles in muscle growth, brain function, and immune response. For athletes and bodybuilders, understanding AA's role in inflammation can inform smarter recovery strategies. The key insight is that inflammation isn't simply "bad"—it's a necessary signal that triggers muscle repair and adaptation. Manipulating AA levels through supplements or diet requires understanding these nuances.`,
    simple_explanation: `Arachidonic acid is like the starting gun for your body's inflammatory response. When a cell is damaged—say, from an intense workout—AA gets released and converted into signaling molecules (prostaglandins) that tell your body "hey, there's damage here, send repair crews." This inflammatory response is why you get sore after exercise, but it's also what triggers muscle rebuilding. Without adequate AA and inflammation, your body doesn't get the signal to adapt and grow stronger. The problem isn't AA itself—it's chronic, unresolved inflammation from poor diet, stress, or disease. For healthy people doing resistance training, having enough AA is actually important for making gains.`,
    key_points: `### Key Facts About Arachidonic Acid

- **Essential for infants**: AA is required for brain and retinal development and is added to infant formula because breast milk contains significant amounts
- **Muscle building signal**: Post-exercise AA release triggers prostaglandin E2 production, which activates satellite cells for muscle repair and hypertrophy
- **Not the enemy**: The omega-6 to omega-3 ratio matters more than absolute AA intake—problems arise from excessive processed food consumption, not natural AA sources
- **Brain function**: AA comprises about 10% of brain fatty acids and is involved in neurotransmitter release, learning, and memory
- **Food sources**: Eggs, poultry, and meat provide AA directly; your body can also make it from linoleic acid (vegetable oils)`,
    common_misconceptions: [
      `**Myth:** Omega-6 fatty acids like arachidonic acid cause inflammation and should be avoided.\n**Fact:** AA is conditionally essential and necessary for numerous physiological functions. The issue is excessive omega-6 relative to omega-3, not omega-6 itself. AA in whole foods like eggs hasn't been linked to inflammatory diseases.`,
      `**Myth:** Taking fish oil while eating a high-AA diet cancels out the AA benefits.\n**Fact:** Omega-3s and AA work differently in the body. While EPA can compete with AA for enzyme access, both can coexist and serve their functions. The goal is balance, not elimination of one or the other.`,
      `**Myth:** Vegetarians and vegans can't get enough arachidonic acid.\n**Fact:** While direct dietary AA comes from animal foods, the body can synthesize AA from linoleic acid found abundantly in plant foods. However, conversion efficiency varies, and some plant-based athletes may benefit from monitoring their AA status.`,
    ],
    examples: [
      "Bodybuilders supplementing with arachidonic acid (1-2g/day) reported enhanced muscle soreness and, in some studies, improved strength gains over placebo",
      'A person taking high-dose fish oil to "reduce inflammation" might be blunting their training response by competing with AA for enzyme activity',
      "Infant formula without added AA led to developmental concerns in early formulations, demonstrating AA's essential role in human development",
      "Someone following an extreme anti-inflammatory diet might wonder why they're not recovering well from workouts—adequate AA is needed for the repair signal",
    ],
  },
  {
    slug: "atherosclerosis",
    why_it_matters: `Atherosclerosis—the buildup of plaque in your arteries—is the underlying cause of most heart attacks and strokes, making it the leading cause of death worldwide. For supplement shoppers, understanding atherosclerosis is essential because many supplements are marketed for "cardiovascular health" without evidence they actually affect this core disease process. Some supplements (like omega-3s at specific doses) have meaningful evidence for cardiovascular protection, while others (like most "artery cleansing" products) are pure marketing hype. Knowing how atherosclerosis develops helps you evaluate supplement claims critically and focus on interventions that actually matter.`,
    simple_explanation: `Picture your arteries as flexible pipes carrying blood throughout your body. Atherosclerosis happens when damage to the pipe walls (from high blood pressure, smoking, or high blood sugar) allows LDL cholesterol to sneak into the wall and get stuck there. Your immune system sees this as a threat and sends white blood cells to clean it up, but they get overwhelmed and die, creating a growing pile of debris (plaque). Over decades, this plaque narrows your arteries and can rupture suddenly, causing a clot that blocks blood flow—resulting in heart attack or stroke. The process starts in childhood and progresses silently for decades before causing symptoms.`,
    key_points: `### Key Facts About Atherosclerosis

- **Decades in development**: Fatty streaks (early atherosclerosis) begin in childhood—by age 30, most people have some arterial plaque
- **More than cholesterol**: While LDL is a key driver, inflammation, blood pressure, blood sugar, and oxidative stress all contribute to progression
- **Reversible to a point**: Aggressive lifestyle and medical intervention can stabilize and even modestly reverse plaque in some cases
- **Silent until crisis**: Arteries can be 70%+ blocked before causing symptoms—regular screening is essential for at-risk individuals
- **Supplements with evidence**: High-dose omega-3s (EPA specifically), berberine, and aged garlic extract have some evidence for cardiovascular markers—but none replace statins for high-risk individuals`,
    common_misconceptions: [
      `**Myth:** You can "cleanse" your arteries with detox supplements or juice fasts.\n**Fact:** No supplement or food can remove established plaque from arteries. Atherosclerosis is a complex inflammatory and lipid-storage process that takes decades to develop. Claims of arterial cleansing are not supported by evidence.`,
      `**Myth:** If your cholesterol numbers are normal, you don't have atherosclerosis.\n**Fact:** Standard cholesterol tests don't reveal arterial plaque. People with "normal" cholesterol can have significant atherosclerosis, while some with high cholesterol have clean arteries. Coronary calcium scores and advanced imaging reveal actual plaque burden.`,
      `**Myth:** Atherosclerosis only affects older people.\n**Fact:** Autopsy studies of young trauma victims show fatty streaks (early atherosclerosis) are present in the majority of people by their 20s. The disease begins early—interventions shouldn't wait until middle age.`,
    ],
    examples: [
      "High-dose EPA (4g/day icosapent ethyl) reduced cardiovascular events by 25% in the REDUCE-IT trial—one of few supplements with major clinical outcome evidence",
      'Someone takes a "heart health" supplement with minimal-dose omega-3s (500mg), missing the 2-4g therapeutic dose needed for cardiovascular effects',
      "A fitness enthusiast with perfect cholesterol assumes their arteries are clean, when a coronary calcium score reveals early plaque accumulation",
      "Aged garlic extract (Kyolic) has modest evidence for blood pressure reduction—a risk factor for atherosclerosis—unlike raw garlic supplements",
    ],
  },
  {
    slug: "atp",
    why_it_matters: `ATP (adenosine triphosphate) is literally the energy currency of life—every movement you make, every thought you have, every heartbeat requires ATP. Understanding ATP production is crucial for supplement shoppers because many popular supplements (creatine, CoQ10, B vitamins, ribose) are marketed based on claims about enhancing ATP production or availability. Some of these claims are well-supported by science, while others are physiologically implausible marketing speak. Knowing how ATP actually works in your body helps you evaluate which "energy" supplements might genuinely help and which are selling you something your body already makes plenty of.`,
    simple_explanation: `ATP is like a rechargeable battery that powers every cell in your body. When your cell needs energy—to contract a muscle, fire a neuron, or build a protein—it grabs an ATP molecule and breaks off one phosphate group, releasing energy and leaving ADP (adenosine diphosphate). This happens billions of times per second throughout your body. Your mitochondria work constantly to recharge ADP back into ATP, using fuel from food (carbs, fats, proteins) and oxygen. You actually cycle through your entire body weight in ATP every single day! Supplements that genuinely support ATP don't give you more ATP directly—they help the recharging process work better or provide raw materials.`,
    key_points: `### Key Facts About ATP

- **Rapid turnover**: Your body contains only about 250 grams of ATP at any moment but produces and recycles 40-70 kg of ATP daily
- **Multiple production pathways**: Creatine phosphate (immediate), glycolysis (fast, moderate duration), and oxidative phosphorylation (slow, long duration) each serve different energy demands
- **Creatine connection**: Creatine phosphate donates its phosphate to rapidly regenerate ATP during high-intensity efforts—this is why creatine supplementation works
- **CoQ10 role**: CoQ10 is essential for mitochondrial ATP production and may help in deficiency states or high-demand situations
- **Can't supplement ATP directly**: Oral ATP supplements break down in digestion before reaching cells; any effects are likely mediated by adenosine breakdown products`,
    common_misconceptions: [
      `**Myth:** Taking ATP supplements gives your cells more ATP energy.\n**Fact:** Oral ATP is rapidly degraded in the digestive system and doesn't increase cellular ATP levels. Any effects from ATP supplements likely come from adenosine (a breakdown product) affecting blood flow, not from supplying actual ATP to cells.`,
      `**Myth:** Feeling tired means your cells are running low on ATP.\n**Fact:** Fatigue is a complex brain signal involving neurotransmitters, perception, and central regulation—not cellular ATP depletion. Even during exhaustive exercise, muscle ATP rarely drops below 60% of resting levels.`,
      `**Myth:** Energy drinks and B vitamins give you energy by boosting ATP.\n**Fact:** Caffeine affects adenosine receptors (not ATP), and B vitamins only help ATP production if you're deficient. Most people with adequate nutrition can't produce more ATP by taking extra B vitamins—the production system is already running at capacity.`,
    ],
    examples: [
      "Creatine supplementation increases muscle creatine phosphate stores by 20-40%, allowing faster ATP regeneration during sets—hence improved rep performance",
      "A CoQ10 supplement might benefit someone on statins (which can deplete CoQ10) or with mitochondrial disorders, but won't boost ATP in healthy young people",
      'Someone takes an "ATP boosting" pre-workout not realizing the actual benefit comes from caffeine\'s adenosine-blocking effects, not ATP supplementation',
      "Ribose supplements were popular for cardiac patients but studies show minimal benefit for healthy athletes—the ATP regeneration system isn't usually ribose-limited",
    ],
  },
  {
    slug: "bacteroides",
    why_it_matters: `Bacteroides is one of the most abundant bacterial genera in the human gut, comprising up to 30% of all gut bacteria in some people. Understanding Bacteroides matters for supplement shoppers because the gut microbiome industry has exploded with probiotic products, prebiotic fibers, and "gut health" claims. However, Bacteroides species aren't found in typical probiotic supplements—they're strict anaerobes that die when exposed to oxygen, making them nearly impossible to deliver in pill form. Understanding which bacteria actually live in your gut versus which are in supplements helps you make smarter choices about microbiome health and avoid marketing that oversimplifies gut science.`,
    simple_explanation: `Bacteroides are like the waste management workers of your digestive system. These bacteria specialize in breaking down complex plant fibers and other tough carbohydrates that your human enzymes can't touch. They ferment these fibers and produce short-chain fatty acids (especially propionate and succinate) that feed your gut lining cells and influence metabolism. Different Bacteroides species have different jobs—some help regulate immune responses, others affect how you extract calories from food. The key thing to understand is that you can't take Bacteroides in a pill because they die instantly in oxygen. Instead, you feed them by eating the fibers they like to eat.`,
    key_points: `### Key Facts About Bacteroides

- **Oxygen intolerant**: Bacteroides are strict anaerobes—even brief oxygen exposure kills them, making shelf-stable supplementation impossible
- **Fiber specialists**: They excel at breaking down complex polysaccharides from plant foods that would otherwise pass through undigested
- **Enterotype marker**: High Bacteroides levels characterize one of the three main gut "enterotypes" and are associated with diets rich in protein and animal fat
- **Probiotic connection**: You won't find Bacteroides in supplements, but you can support their growth by eating prebiotic fibers like resistant starch and pectin
- **Weight associations**: The Bacteroides-to-Firmicutes ratio has been studied in obesity research, though the relationship is more complex than early studies suggested`,
    common_misconceptions: [
      `**Myth:** You can take Bacteroides probiotics to improve gut health.\n**Fact:** Bacteroides are strict anaerobes that cannot survive manufacturing, storage, or the oxygen exposure involved in taking a supplement. No legitimate probiotic contains live Bacteroides species.`,
      `**Myth:** More Bacteroides means a healthier gut.\n**Fact:** Gut health isn't about maximizing any single bacterial genus. Different Bacteroides species have different effects—some are beneficial, others are associated with disease states. Diversity and balance matter more than abundance of specific bacteria.`,
      `**Myth:** A gut microbiome test will tell you exactly which bacteria you need more of.\n**Fact:** Current science can't reliably translate microbiome test results into specific dietary or supplement recommendations. These tests show what bacteria are present but not what their optimal levels should be for you individually.`,
    ],
    examples: [
      'Someone takes a "complete gut health" probiotic expecting it to boost their Bacteroides, not realizing none of the live cultures in supplements are Bacteroides species',
      "Eating more resistant starch (cooled potatoes, green bananas, legumes) feeds Bacteroides and other fiber-fermenting bacteria naturally",
      "A gut microbiome test shows low Bacteroides relative to reference ranges, but no supplement can directly fix this—only dietary fiber changes can",
      'Researchers have studied "next-generation probiotics" including Bacteroides species, but oxygen sensitivity makes commercialization extremely challenging',
    ],
  },
  {
    slug: "betacarotene",
    why_it_matters: `Beta-carotene's story is one of the most important cautionary tales in supplement history. Once hailed as a potential cancer-preventing miracle nutrient based on observational studies, beta-carotene supplements were later shown in clinical trials to INCREASE lung cancer risk in smokers—the opposite of what was expected. This dramatic reversal demonstrates why observational studies showing "people who eat X have less disease" don't prove "taking X as a supplement prevents disease." For supplement shoppers, beta-carotene illustrates why food-based nutrition often can't be replicated in pill form and why claims based on observational data alone should be viewed skeptically.`,
    simple_explanation: `Beta-carotene is an orange pigment in carrots, sweet potatoes, and leafy greens that your body can convert into vitamin A as needed. In food form, it's associated with health benefits—people who eat beta-carotene-rich foods have lower rates of several diseases. But here's where it gets interesting: when scientists tried to isolate beta-carotene and give it as a supplement, the magic disappeared. In smokers, it actually increased lung cancer risk by 18-28%. Why? In whole foods, beta-carotene comes alongside hundreds of other carotenoids and nutrients that work together. Isolating one compound at high doses creates different effects than eating it naturally. Your body is designed to process foods, not isolated chemicals.`,
    key_points: `### Key Facts About Beta-Carotene

- **The ATBC and CARET trials**: Two major studies found beta-carotene supplements increased lung cancer risk in smokers by 18-28%, leading to early trial termination
- **Provitamin A**: Beta-carotene is converted to vitamin A (retinol) based on your body's needs—unlike preformed vitamin A, it's nearly impossible to cause toxicity from food sources
- **Colorful indicator**: Orange and yellow in vegetables signals beta-carotene content; leafy greens also contain high amounts hidden by chlorophyll
- **Supplement forms persist**: Despite negative trial results, beta-carotene supplements remain widely available—often in multivitamins and "antioxidant" formulas
- **Safe from food**: No evidence of harm from dietary beta-carotene, only from supplements; eating lots of carrots just turns your skin slightly orange`,
    common_misconceptions: [
      `**Myth:** Beta-carotene supplements are a safe way to get vitamin A without toxicity risk.\n**Fact:** While beta-carotene doesn't cause vitamin A toxicity, high-dose supplements carry their own risks, including increased lung cancer risk in smokers and former smokers. Food sources remain safest.`,
      `**Myth:** If beta-carotene foods are healthy, beta-carotene supplements must be too.\n**Fact:** The ATBC and CARET trials definitively showed this isn't true. The health benefits of carotenoid-rich foods come from the entire food matrix—hundreds of compounds working together—not from isolated beta-carotene.`,
      `**Myth:** Non-smokers can safely take beta-carotene supplements.\n**Fact:** While the cancer risk was specifically demonstrated in smokers, there's no evidence of benefit for non-smokers either. Taking beta-carotene supplements provides no proven advantage over eating colorful vegetables.`,
    ],
    examples: [
      "The ATBC trial gave 20mg beta-carotene daily to Finnish male smokers and found 18% higher lung cancer incidence versus placebo",
      "Someone takes a multivitamin containing 5,000 IU beta-carotene not realizing this is unnecessary if they eat vegetables, and potentially risky if they smoke",
      "A person eating 3-4 servings of orange vegetables daily gets ample beta-carotene safely, with all the synergistic compounds nature intended",
      "Carrots, sweet potatoes, and butternut squash provide beta-carotene in a food matrix with fiber, other carotenoids, and protective compounds absent from supplements",
    ],
  },
  {
    slug: "bifidobacterium",
    why_it_matters: `Bifidobacterium species are among the most studied and commonly used probiotic bacteria, found in countless supplements and fermented foods. Unlike many overhyped probiotic genera, Bifidobacteria actually have meaningful clinical evidence for specific health benefits, particularly for digestive issues and immune function. Understanding what Bifidobacterium can (and can't) do helps you evaluate probiotic products critically. The key insight is that benefits are strain-specific—not all Bifidobacterium species or strains do the same things, and the claims on one probiotic don't automatically apply to another just because it contains "Bifidobacterium."`,
    simple_explanation: `Bifidobacteria are some of the first beneficial bacteria to colonize your gut after birth—babies get them from breast milk. These Y-shaped bacteria specialize in fermenting complex sugars, producing beneficial acids that lower gut pH and create an inhospitable environment for harmful bacteria. They're like friendly neighbors who keep the bad elements out of your digestive neighborhood. Different Bifidobacterium species and strains have different specialties: some help with IBS symptoms, others support immune function in infants, and some produce specific vitamins. When choosing a probiotic, the specific strain matters—Bifidobacterium longum BB536 has different evidence than B. longum subsp. infantis or B. lactis HN019.`,
    key_points: `### Key Facts About Bifidobacterium

- **Dominant in infants**: Bifidobacteria comprise up to 90% of a breastfed infant's gut bacteria, declining with age to 3-6% in adults
- **Species matter**: B. infantis, B. longum, B. breve, B. lactis, and B. animalis have different effects—don't treat them as interchangeable
- **Strain specificity**: Clinical evidence applies to tested strains only—B. lactis HN019 benefits don't automatically transfer to B. lactis BB-12
- **Production stability**: Bifidobacteria are more oxygen-sensitive than Lactobacillus, making manufacturing and storage challenging—quality varies widely
- **Evidence base**: IBS symptoms, acute diarrhea, immune function, and infant eczema have the most clinical support for specific Bifidobacterium strains`,
    common_misconceptions: [
      `**Myth:** Any probiotic with Bifidobacterium will provide the same benefits.\n**Fact:** Benefits are strain-specific and can't be generalized. A study showing B. longum BB536 helps with allergies doesn't mean other B. longum strains will do the same. Always check which specific strain is in your supplement.`,
      `**Myth:** More CFUs (colony forming units) means a better probiotic.\n**Fact:** Clinical trials often use modest doses (1-10 billion CFU) of well-researched strains. A product with 100 billion CFU of unstudied strains isn't superior to one with 1 billion CFU of a clinically proven strain.`,
      `**Myth:** Bifidobacterium supplements permanently colonize your gut.\n**Fact:** Most probiotic bacteria pass through within days to weeks of stopping supplementation. They work by transiently influencing gut conditions and immune signaling, not by permanently taking up residence.`,
    ],
    examples: [
      "B. longum BB536 has evidence for reducing allergy symptoms and supporting immune function in multiple clinical trials",
      "B. infantis 35624 (Align) is FDA-regulated and has specific evidence for IBS symptom relief that other Bifidobacterium strains don't share",
      'A supplement label says "Bifidobacterium longum" without specifying strain—this is a red flag because you can\'t verify what clinical evidence applies',
      "Breast milk contains oligosaccharides specifically designed to feed Bifidobacterium in infant guts—nature's original prebiotic-probiotic system",
    ],
  },
  {
    slug: "bioavailability",
    why_it_matters: `Bioavailability might be the single most important concept for supplement shoppers to understand, yet it's often overlooked when comparing products. A supplement can contain generous amounts of an ingredient on the label, but if your body can't absorb it, you're paying for expensive urine. The difference between forms can be dramatic—magnesium oxide has about 4% bioavailability while magnesium glycinate reaches 80%+. Understanding bioavailability helps you evaluate supplement quality beyond just price and dose, and explains why some cheap supplements are truly worthless while others are genuine bargains.`,
    simple_explanation: `Bioavailability is the percentage of a substance that actually reaches your bloodstream and becomes available for your body to use. Think of it like ordering food delivery: if you order $100 worth of food, but $60 worth gets lost, eaten by the driver, or arrives spoiled, you only received $40 worth of usable food. Supplements work the same way. A 500mg magnesium oxide tablet might deliver only 20mg to your bloodstream, while a 200mg magnesium glycinate tablet might deliver 160mg. The label doesn't tell you this—you need to understand the forms. Multiple factors affect bioavailability: how well the compound survives stomach acid, whether it dissolves properly, how efficiently intestinal cells absorb it, and whether it gets filtered by your liver before reaching general circulation.`,
    key_points: `### Key Facts About Bioavailability

- **Form matters enormously**: Curcumin is ~1% bioavailable alone, but 2000%+ with piperine or in liposomal form; zinc picolinate absorbs better than zinc oxide; methylfolate works while folic acid fails for many people
- **Not always on labels**: Supplement Facts panels show total ingredient amount, not absorbed amount—bioavailability differences can make identical label claims wildly different in actual effect
- **Synergies and antagonists**: Vitamin C increases iron absorption 2-3x; calcium blocks iron absorption; fat-soluble vitamins need dietary fat; some compounds compete for the same transporters
- **Individual variation**: Genetics, gut health, age, and existing nutrient status all affect how well you absorb supplements—bioavailability numbers are averages
- **Higher cost often justified**: More bioavailable forms typically cost more because they require more processing or expensive raw materials—but the cost per absorbed mg may actually be lower`,
    common_misconceptions: [
      `**Myth:** More milligrams on the label means a stronger supplement.\n**Fact:** Bioavailability can vary 10-20x between forms. A 100mg highly bioavailable form may deliver more to your bloodstream than a 1000mg poorly absorbed form. Always compare forms, not just doses.`,
      `**Myth:** If a supplement is absorbed, it must be effective.\n**Fact:** Bioavailability is necessary but not sufficient. Even well-absorbed compounds need to reach target tissues, enter cells, and have the claimed biological effect. Absorption is just the first hurdle.`,
      `**Myth:** "Chelated" or "whole food" forms are always better absorbed.\n**Fact:** These terms are marketing-speak without standardized meaning. Some chelated minerals absorb well, others don't. Some whole food supplements have better bioavailability, some worse. Look for specific form names and research, not marketing claims.`,
    ],
    examples: [
      "Magnesium citrate, glycinate, and malate typically show 20-25% bioavailability while magnesium oxide is around 4%—yet oxide supplements are often cheaper and more common",
      "Curcumin supplements range from <1% to >2000% bioavailability depending on formulation (standard, with piperine, phytosome, liposomal, nano)",
      "Someone takes 1000mg of cheap calcium carbite without food and absorbs very little, while 500mg calcium citrate with meals provides more usable calcium",
      "Iron bisglycinate causes less GI upset and absorbs better than ferrous sulfate, often justifying the higher price per tablet",
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
  console.log("=== BATCH 2: Enhancing Glossary Terms 11-20 ===\n");

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
