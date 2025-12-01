/**
 * Batch 4: Enhance glossary terms 31-40 (alphabetically)
 * Terms: Catalase, Chelated, Chylomicrons, Clinical Significance, Coenzyme Q10,
 *        Cognitive Function, Cohort Study, Collagen, Colonocytes, (+ next unique)
 *
 * Run: node scripts/enhance-glossary-batch-4.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

// Enhanced content for Batch 4 terms
const enhancements = [
  {
    slug: "catalase",
    why_it_matters: `Catalase is one of your body's most powerful antioxidant enzymes, breaking down hydrogen peroxide—a toxic byproduct of cellular metabolism—into harmless water and oxygen. For supplement shoppers, understanding catalase matters because it explains why simply taking more antioxidant supplements isn't always the answer. Your body has sophisticated built-in antioxidant systems (catalase, superoxide dismutase, glutathione peroxidase) that work together. Some supplements support these systems; others might interfere with them. Catalase activity naturally declines with age, which may contribute to oxidative damage and aging—a key reason why supporting endogenous antioxidant systems is gaining attention in longevity research.`,
    simple_explanation: `Every second, your cells produce hydrogen peroxide (H₂O₂) as a byproduct of energy production. While a little bit is actually useful (your immune system uses it to kill bacteria), too much damages your cells, proteins, and DNA. Catalase is like a super-efficient cleanup crew—one catalase molecule can break down millions of hydrogen peroxide molecules per second into harmless water and oxygen. It's one of the fastest enzymes known to science. You can't really supplement catalase directly (it gets digested), but you can support your body's ability to make it through adequate nutrition and certain supplements that upregulate antioxidant enzyme production.`,
    key_points: `### Key Facts About Catalase

- **Speed champion**: Catalase is one of the fastest enzymes, converting up to 40 million H₂O₂ molecules per second per enzyme molecule
- **Iron-dependent**: Catalase requires iron at its active site to function—iron deficiency can impair catalase activity
- **Age-related decline**: Catalase activity decreases with age, potentially contributing to accumulated oxidative damage and age-related diseases
- **Can't supplement directly**: Oral catalase is digested before reaching cells; interest focuses on compounds that increase endogenous catalase production
- **Gray hair connection**: Hydrogen peroxide buildup in hair follicles (from declining catalase) contributes to gray hair—though no supplement has been proven to reverse this`,
    common_misconceptions: [
      `**Myth:** Taking antioxidant supplements replaces the need for enzymes like catalase.\n**Fact:** Dietary antioxidants (vitamins C, E) work differently than enzymatic antioxidants. They sacrifice themselves to neutralize free radicals one-to-one, while catalase works catalytically—one enzyme handles millions of reactions. Both systems are important and complementary.`,
      `**Myth:** Catalase supplements can prevent gray hair.\n**Fact:** While hydrogen peroxide buildup does contribute to gray hair, oral catalase supplements are destroyed during digestion and don't reach hair follicles. Products claiming to restore hair color via catalase lack scientific validation.`,
      `**Myth:** More hydrogen peroxide in the body is always bad.\n**Fact:** Low levels of H₂O₂ serve important signaling functions and help your immune system kill pathogens. The goal isn't eliminating all H₂O₂ but maintaining healthy balance—which your body does naturally when properly supported.`,
    ],
    examples: [
      "Someone with iron deficiency may have reduced catalase activity, contributing to oxidative stress even if they take other antioxidants",
      "Certain compounds like sulforaphane (from broccoli) upregulate Nrf2, which increases production of catalase and other protective enzymes",
      'Gray hair supplements claiming "catalase technology" have no clinical evidence that orally-ingested catalase reaches hair follicles intact',
      "Exercise temporarily increases oxidative stress but upregulates catalase production long-term—one reason regular exercisers have better antioxidant defenses",
    ],
  },
  {
    slug: "chelated",
    why_it_matters: `Chelated minerals are among the most commonly marketed "premium" supplement forms, commanding prices 2-5x higher than standard mineral salts. For supplement shoppers, understanding what chelation actually means—and when it genuinely matters—prevents both overpaying for unnecessary upgrades and underpaying for forms that won't work for you. The truth is nuanced: some chelated forms (like magnesium glycinate or iron bisglycinate) offer real advantages in absorption and tolerability, while others are marketing hype with minimal evidence of superiority. Knowing the difference protects your wallet and your health outcomes.`,
    simple_explanation: `"Chelated" means a mineral atom is wrapped in or bonded to organic molecules, typically amino acids. Picture a mineral like a celebrity and the amino acids as bodyguards surrounding them. This "escort" helps the mineral navigate through your digestive system in ways that free mineral ions can't. Regular minerals (like magnesium oxide or ferrous sulfate) must compete with other minerals and food components for absorption pathways. Chelated minerals can often use amino acid absorption pathways instead, potentially bypassing this competition. The quality matters hugely though—not all chelated products are created equal, and some "chelated" labels are just marketing with poorly-bound minerals that fall apart in your stomach.`,
    key_points: `### Key Facts About Chelated Minerals

- **Genuine chelation**: True chelates like Albion's TRAACS minerals have the mineral firmly bonded to amino acids through multiple attachment points, surviving stomach acid intact
- **Bisglycinate advantage**: Iron bisglycinate and magnesium bisglycinate are well-studied chelates with evidence for better absorption and fewer GI side effects than standard forms
- **Marketing abuse**: The term "chelated" isn't regulated—some products merely mix minerals with amino acids without true chelation, offering no absorption benefit
- **Cost-benefit varies**: Chelated forms may be worth the premium for minerals with absorption problems (iron, magnesium, zinc) but less important for easily-absorbed minerals
- **Individual factors**: People with digestive issues, low stomach acid, or taking medications that affect absorption may benefit most from chelated forms`,
    common_misconceptions: [
      `**Myth:** "Chelated" on a label guarantees better absorption.\n**Fact:** Without regulation, any mineral mixed with amino acids can be called chelated. True chelation requires specific bonding that not all products achieve. Look for branded forms with research (like Albion chelates) rather than generic "chelated" claims.`,
      `**Myth:** Chelated minerals are always worth the extra cost.\n**Fact:** For healthy people with normal digestion taking minerals with meals, the absorption difference may be minimal. Chelated forms provide the biggest advantage for people with absorption challenges or those who need to take minerals on an empty stomach.`,
      `**Myth:** All amino acid chelates are equivalent.\n**Fact:** Different amino acids create different chelates with different properties. Glycine chelates (bisglycinate) are small and well-absorbed; larger amino acids may create bulkier molecules with different absorption characteristics.`,
    ],
    examples: [
      "Iron bisglycinate causes significantly less constipation and nausea than ferrous sulfate, making it worth the premium for people who struggle with iron supplements",
      "Magnesium glycinate (bisglycinate) absorbs well and has calming effects from the glycine, while magnesium oxide is only ~4% absorbed",
      'A product labeled "chelated zinc" but without specifying the chelate type may just be zinc mixed with—not bonded to—amino acids',
      "Albion Minerals' TRAACS (The Real Amino Acid Chelate System) is a patented process with research backing true chelation",
    ],
  },
  {
    slug: "chylomicrons",
    why_it_matters: `Chylomicrons are the transport vehicles your body creates to move dietary fats and fat-soluble nutrients from your intestines into your bloodstream. For supplement shoppers, understanding chylomicrons explains why fat-soluble vitamins (A, D, E, K) and supplements like CoQ10, curcumin, and omega-3s absorb dramatically better when taken with dietary fat. It also explains why some people—especially those with fat malabsorption conditions, gallbladder issues, or on very low-fat diets—may not absorb fat-soluble supplements well even at high doses. This knowledge can transform a supplement that "doesn't work" into one that does.`,
    simple_explanation: `Fats and water don't mix—so how does your body move fatty nutrients through your water-based blood? It builds special transport vehicles called chylomicrons. When you eat fat, your intestinal cells absorb it and package it into these microscopic spheres. Each chylomicron has a water-friendly outside (so it can travel in blood) and a fatty inside (where it carries triglycerides, fat-soluble vitamins, and other lipophilic substances). No fat in your meal means few chylomicrons get made, which means fat-soluble supplements have no ride into your bloodstream. They just pass through unabsorbed. This is why taking vitamin D or CoQ10 with your morning coffee (no fat) is far less effective than taking it with eggs and avocado.`,
    key_points: `### Key Facts About Chylomicrons

- **Fat-dependent formation**: Chylomicrons are only produced when dietary fat is present—no fat intake means no chylomicron transport for fat-soluble nutrients
- **What hitches a ride**: Triglycerides, cholesterol, fat-soluble vitamins (A, D, E, K), carotenoids, CoQ10, and other lipophilic compounds travel via chylomicrons
- **Minimum fat needed**: As little as 5-10 grams of fat significantly increases chylomicron production and fat-soluble nutrient absorption
- **Malabsorption implications**: Conditions affecting fat digestion (celiac, Crohn's, pancreatic insufficiency, bile acid issues) impair chylomicron formation and fat-soluble nutrient status
- **Timing matters**: Taking fat-soluble supplements hours away from fat-containing meals dramatically reduces their absorption`,
    common_misconceptions: [
      `**Myth:** Fat-soluble vitamins absorb fine without dietary fat.\n**Fact:** Without fat triggering chylomicron production, fat-soluble vitamins have severely reduced absorption. Studies show vitamin D absorption increases 32-50% when taken with fat versus without.`,
      `**Myth:** Any amount of fat works equally well.\n**Fact:** Chylomicron production is dose-dependent. A meal with 15-20g of fat produces more robust chylomicron transport than a meal with 3-5g. Very low-fat meals provide minimal absorption advantage.`,
      `**Myth:** People on low-fat diets absorb supplements the same as everyone else.\n**Fact:** Chronically low fat intake can impair fat-soluble nutrient absorption and status. People on very low-fat diets may need higher doses of fat-soluble supplements or should take them with their higher-fat meals.`,
    ],
    examples: [
      "Taking vitamin D with breakfast eggs and butter increases absorption by ~50% compared to taking it with black coffee",
      "CoQ10 in oil-based softgels absorbs better than powder capsules because the oil helps trigger chylomicron production",
      "Someone with gallbladder removal may need higher doses of vitamin D because impaired bile flow reduces fat and chylomicron-dependent nutrient absorption",
      "A person takes curcumin supplements on an empty stomach and sees no benefits; switching to taking with an avocado-containing meal dramatically improves absorption",
    ],
  },
  {
    slug: "clinicalsignificance",
    why_it_matters: `Clinical significance is the distinction between a result that's statistically interesting and one that actually matters for your health. For supplement shoppers, this concept is critical because many supplement claims are based on studies showing "statistically significant" effects that are too small to notice or benefit from in real life. A supplement might lower blood pressure by 2 mmHg with high statistical significance (p<0.001), but that's clinically meaningless—you'd never feel it or benefit from it. Learning to spot clinically insignificant results protects you from products that technically "work" but don't work enough to matter.`,
    simple_explanation: `Imagine a weight loss pill that helps people lose 0.5 pounds over 6 months with extremely high statistical confidence. Statistically significant? Yes—the math says it's a real effect, not random chance. Clinically significant? Absolutely not—half a pound in six months is undetectable and meaningless for health. Statistical significance just means an effect is likely real; clinical significance means the effect is large enough to matter. Drug companies and supplement makers love to highlight statistical significance while downplaying the actual effect size. When evaluating any health claim, always ask: "What was the actual magnitude of the effect?" not just "Was it statistically significant?"`,
    key_points: `### Key Facts About Clinical Significance

- **Effect size matters**: A 1% improvement that's statistically significant is very different from a 30% improvement—always look at the actual numbers, not just p-values
- **Context determines threshold**: A 5 mmHg blood pressure reduction is clinically significant; a 5-point IQ increase would be transformative; context defines what "meaningful" means
- **Large studies find tiny effects**: With enough participants, even trivial differences become statistically significant—don't be impressed by significance in huge studies without checking effect size
- **Minimal clinically important difference (MCID)**: Researchers define thresholds for different outcomes—the smallest change patients would notice or that affects health outcomes
- **Surrogate vs. clinical outcomes**: Effects on biomarkers may be statistically significant but only matter if they translate to actual health improvements`,
    common_misconceptions: [
      `**Myth:** If a study finds a statistically significant effect, the supplement works.\n**Fact:** Statistical significance only means the effect is likely real, not random. A real effect can still be too small to matter. Many supplements show statistically significant effects that are clinically irrelevant.`,
      `**Myth:** P-values tell you how strong an effect is.\n**Fact:** P-values indicate probability the result occurred by chance, not effect magnitude. P<0.001 doesn't mean a strong effect—it just means high confidence a (possibly tiny) effect exists.`,
      `**Myth:** If you can't feel a difference, the supplement isn't working.\n**Fact:** Some clinically significant effects aren't perceptible—you can't "feel" your cholesterol dropping or your bone density increasing. Clinical significance relates to objective health outcomes, not always subjective experience.`,
    ],
    examples: [
      "A garlic supplement study shows 3 mmHg systolic blood pressure reduction (p<0.01)—statistically significant but below the 5-10 mmHg considered clinically meaningful",
      "An omega-3 study shows 25% reduction in cardiovascular events—both statistically and clinically significant, representing meaningful disease prevention",
      "A cognitive supplement improves memory test scores by 2% (p=0.03) in 2000 subjects—the large sample found statistical significance, but 2% improvement is imperceptible",
      "A sleep supplement reduces time to fall asleep by 4 minutes (statistically significant)—too small to matter versus the 15-20 minutes considered clinically relevant",
    ],
  },
  {
    slug: "coenzymeq10",
    why_it_matters: `Coenzyme Q10 (CoQ10) is one of the most popular supplements with one of the most complex evidence landscapes. For supplement shoppers, understanding CoQ10 is important because it has legitimate, well-documented uses—but also many overhyped claims. CoQ10 is genuinely depleted by statin drugs and genuinely helps heart failure patients. But claims about energy, anti-aging, and athletic performance in healthy people are much weaker. Knowing when CoQ10 actually helps (and which form to choose) separates evidence-based supplementation from expensive wishful thinking.`,
    simple_explanation: `CoQ10 is like a spark plug in your cells' energy factories (mitochondria). It's essential for the electron transport chain—the process that produces 95% of your body's energy as ATP. Your body makes CoQ10, but production declines with age, and certain medications (especially statins) further deplete it. CoQ10 also works as an antioxidant, protecting cells from oxidative damage. The heart, which beats 100,000 times daily, has exceptionally high CoQ10 demands—which is why heart-related conditions show the strongest evidence for supplementation. For healthy young people, the body makes plenty; the question is whether aging or medications have created a deficit worth correcting.`,
    key_points: `### Key Facts About CoQ10

- **Statin interaction**: Statins block the same pathway that produces CoQ10, often depleting levels by 40%+; CoQ10 supplementation may help with statin-related muscle symptoms
- **Ubiquinone vs. ubiquinol**: CoQ10 comes in two forms—ubiquinone (oxidized) and ubiquinol (reduced, active); ubiquinol may absorb better, especially in older adults, but costs more
- **Heart failure evidence**: Multiple trials show 100-300mg CoQ10 daily improves symptoms and possibly survival in heart failure patients (Q-SYMBIO trial)
- **Age-related decline**: CoQ10 levels drop with age, particularly after 40; whether supplementation benefits healthy older adults is less clear than in disease states
- **Absorption challenges**: Standard CoQ10 has poor bioavailability; oil-based formulations, ubiquinol, or specialized delivery systems significantly improve absorption`,
    common_misconceptions: [
      `**Myth:** Everyone should take CoQ10 for energy.\n**Fact:** Healthy young people produce adequate CoQ10. Supplementation primarily benefits those with documented deficiency, statin users, heart failure patients, or possibly older adults—not healthy individuals seeking an energy boost.`,
      `**Myth:** All CoQ10 supplements are equivalent.\n**Fact:** CoQ10 bioavailability varies enormously by formulation. Powder-filled capsules may deliver minimal active compound, while oil-based softgels or solubilized formulations absorb significantly better. Form matters more than many realize.`,
      `**Myth:** CoQ10 works immediately like a stimulant.\n**Fact:** CoQ10 takes weeks to months to build up in tissues and produce effects. It's not a stimulant—any energy improvement comes from improved cellular metabolism, not a quick boost.`,
    ],
    examples: [
      "A statin user experiencing muscle pain tries CoQ10 (100-200mg ubiquinol) and notices improvement—one of the best-supported uses",
      "The Q-SYMBIO trial gave heart failure patients 300mg CoQ10 daily for 2 years and found significantly reduced cardiovascular events and mortality",
      "Someone buys cheap CoQ10 powder capsules and absorbs a fraction of the dose compared to a quality ubiquinol softgel",
      "A healthy 25-year-old takes CoQ10 hoping for more energy—unlikely to notice anything since they probably produce adequate amounts naturally",
    ],
  },
  {
    slug: "cognitivefunction",
    why_it_matters: `Cognitive function supplements—marketed for memory, focus, and mental clarity—represent one of the fastest-growing and most misleading supplement categories. For supplement shoppers, understanding what cognitive function actually means and which supplements have real evidence is crucial because most "brain boosters" rely on minimal research, proprietary blends, and exaggerated claims. A few compounds (like certain omega-3s, specific B vitamins for deficiency, and some nootropics) have meaningful evidence; many others are essentially expensive placebos trading on cognitive anxiety. Smart shopping here requires cutting through substantial marketing noise.`,
    simple_explanation: `Cognitive function is an umbrella term covering all mental processes: memory (storing and retrieving information), attention (focusing on relevant stimuli), processing speed (how quickly you think), executive function (planning, decision-making, impulse control), and more. These functions depend on brain health—adequate blood flow, neurotransmitter balance, neuronal connections, and protection from inflammation and oxidative damage. Supplements claim to enhance one or more of these, but the brain is extraordinarily complex. Most nutrients that affect cognition do so by correcting deficiencies or supporting general brain health, not by boosting function beyond normal in healthy, well-nourished individuals.`,
    key_points: `### Key Facts About Cognitive Function Supplements

- **Deficiency correction vs. enhancement**: B vitamins, omega-3s, and iron improve cognition when deficient but generally don't enhance function beyond normal in replete individuals
- **Limited evidence for healthy adults**: Most nootropics lack rigorous long-term trials in healthy people; positive studies are often small, short-term, or industry-funded
- **Lifestyle dwarfs supplements**: Sleep, exercise, social engagement, and stress management have far larger effects on cognitive function than any supplement
- **Placebo effects are huge**: Expectation strongly influences perceived cognitive performance; many supplement "benefits" disappear in blinded studies
- **Conditions where supplements help**: Age-related cognitive decline, specific deficiencies (B12, iron), and certain conditions (ADHD, early dementia) show more supplement response than young healthy populations`,
    common_misconceptions: [
      `**Myth:** Nootropics can significantly boost intelligence or memory in healthy people.\n**Fact:** No supplement has been shown to meaningfully increase cognitive capacity in healthy, well-nourished adults. Most effects are modest at best, and many popular nootropics lack human clinical evidence entirely.`,
      `**Myth:** "Clinically studied ingredients" means proven cognitive benefits.\n**Fact:** Ingredients may be "clinically studied" for any purpose; a study existing isn't the same as proven benefits. Many studies show no effect or trivially small effects that get spun as positive.`,
      `**Myth:** Age-related cognitive decline is inevitable and supplements can't help.\n**Fact:** While some decline is normal, certain interventions (including omega-3s, potentially phosphatidylserine, and addressing nutritional deficiencies) may help maintain function. Prevention is more effective than reversal.`,
    ],
    examples: [
      "B12 supplementation dramatically improves cognition in deficient elderly patients but does nothing for young people with normal B12 status",
      'A healthy college student takes a "brain stack" with 12 ingredients and thinks they\'re smarter—likely experiencing placebo and stimulant (caffeine) effects, not true cognitive enhancement',
      "DHA omega-3s have the best evidence for cognitive support, particularly in aging populations and during pregnancy/infancy for brain development",
      "Lion's mane mushroom shows interesting preliminary research for nerve growth factor, but human cognitive enhancement studies are limited and results modest",
    ],
  },
  {
    slug: "cohortstudy",
    why_it_matters: `Cohort studies generate the vast majority of headlines you see about nutrition, supplements, and health—yet they can't prove cause and effect. For supplement shoppers, understanding this study type is essential for critically evaluating claims. When you read "Vitamin X linked to 30% lower cancer risk," that's almost certainly a cohort study showing association, not causation. People who take vitamin X might also exercise more, eat better, and have higher income—any of which could explain the health difference. Knowing this prevents you from being misled by correlational findings that may not replicate in real-world supplementation.`,
    simple_explanation: `A cohort study follows a group of people over time, tracking their exposures (like supplement use, diet, or lifestyle) and health outcomes (like heart disease or cancer). Researchers then look for statistical associations: "People who took fish oil had 20% fewer heart attacks." Sounds compelling, but here's the problem—people who choose to take fish oil are systematically different from those who don't. They probably also eat more vegetables, exercise more, smoke less, and see doctors regularly. Any of these differences could explain the health outcome, not the fish oil itself. Only randomized controlled trials (where people are randomly assigned to take fish oil or not) can actually prove causation.`,
    key_points: `### Key Facts About Cohort Studies

- **Observational, not experimental**: Researchers observe natural behavior rather than assigning interventions—this limits causal conclusions
- **Confounding variables**: Unmeasured factors that correlate with both the exposure and outcome can create false associations
- **Healthy user bias**: People who take supplements tend to have healthier overall lifestyles, making supplements appear more beneficial than they are
- **Valuable for hypotheses**: Cohort studies identify patterns worth testing but shouldn't be used to make definitive health recommendations
- **Large and long-term**: Famous cohorts like the Nurses' Health Study follow thousands of people for decades, providing rich correlational data`,
    common_misconceptions: [
      `**Myth:** Large cohort studies prove what causes disease.\n**Fact:** Size increases statistical power but doesn't eliminate confounding. A study of 100,000 people still can't prove causation if it's observational. Many cohort findings fail to replicate in randomized trials.`,
      `**Myth:** "Associated with" and "causes" mean the same thing.\n**Fact:** Association only means two things occur together statistically. Ice cream sales are associated with drowning deaths (both increase in summer), but ice cream doesn't cause drowning. Always note this language distinction.`,
      `**Myth:** If multiple cohort studies agree, it must be true.\n**Fact:** Systematic biases can affect multiple studies similarly. Healthy user bias, for example, affects virtually all supplement cohort research. Consistent observational findings are hypothesis-generating, not proof.`,
    ],
    examples: [
      "Cohort studies consistently showed hormone replacement therapy protected hearts; randomized trials then showed it actually increased cardiovascular risk—a famous reversal",
      "Beta-carotene was associated with lower lung cancer in cohort studies, but randomized trials showed supplements actually increased cancer in smokers",
      'A news headline states "Multivitamin users live longer"—almost certainly a cohort study that can\'t account for the healthier overall lifestyles of supplement users',
      "The Nurses' Health Study (120,000+ nurses followed for decades) generates associations that still require RCT confirmation before becoming recommendations",
    ],
  },
  {
    slug: "collagen",
    why_it_matters: `Collagen supplements have exploded in popularity, with claims ranging from wrinkle reduction to joint pain relief to gut healing. For supplement shoppers, the collagen category is particularly challenging because the marketing is sophisticated and scientific-sounding, but the evidence is decidedly mixed. Some collagen peptide studies show promising results for skin and joints; others show nothing. The science of whether digested collagen actually reaches and benefits target tissues is still being worked out. Understanding what we know—and don't know—helps you decide whether collagen is worth trying and sets realistic expectations.`,
    simple_explanation: `Collagen is the most abundant protein in your body—the structural scaffold that holds you together. It's in your skin (providing firmness), joints (cushioning cartilage), bones, tendons, and gut lining. As you age, collagen production slows, contributing to wrinkles, joint stiffness, and other aging signs. Collagen supplements are typically broken-down collagen (peptides or hydrolyzed collagen) that you consume hoping to stimulate your body's collagen production. The theory is that digested collagen fragments signal your body to make more collagen. Some research supports this; other research doesn't. The honest answer is that collagen supplements might help, particularly for skin and joints, but they're not the miracle the marketing suggests.`,
    key_points: `### Key Facts About Collagen

- **Types matter**: There are 28 collagen types; types I and III are most abundant in skin, type II in cartilage. Different supplements target different tissues
- **Hydrolyzed for absorption**: Whole collagen is too large to absorb; hydrolyzed collagen (peptides) are broken into smaller pieces that can enter the bloodstream
- **Skin evidence is decent**: Several RCTs show collagen peptides (2.5-10g daily) improve skin hydration and elasticity, with some evidence for wrinkle reduction
- **Joint evidence is mixed**: Some studies show benefit for joint pain and osteoarthritis; others don't. Type II collagen and hydrolyzed collagen have different mechanisms
- **Vitamin C is essential**: Your body requires vitamin C to synthesize collagen—taking collagen without adequate vitamin C limits its usefulness`,
    common_misconceptions: [
      `**Myth:** Eating collagen directly rebuilds your collagen.\n**Fact:** Digestion breaks collagen into amino acids and small peptides. Your body doesn't absorb intact collagen and insert it into your skin. The benefit, if any, comes from these fragments signaling increased collagen production or providing building blocks.`,
      `**Myth:** All collagen supplements are equally effective.\n**Fact:** Peptide size, source (bovine, marine, chicken), type (I, II, III), and processing method all vary. Different products have different (or no) research behind them. Quality and specific formulation matter.`,
      `**Myth:** Bone broth provides the same benefits as collagen supplements.\n**Fact:** Bone broth collagen content varies wildly (often much lower than supplements) and isn't standardized or hydrolyzed. It may provide some amino acids but isn't equivalent to studied collagen peptide doses.`,
    ],
    examples: [
      "Studies using Verisol collagen peptides (2.5g daily) showed improved skin elasticity and reduced wrinkles after 8 weeks in middle-aged women",
      "UC-II (undenatured type II collagen) at 40mg daily showed benefits for joint comfort in some osteoarthritis trials through a different mechanism than hydrolyzed collagen",
      "A person takes collagen but has low vitamin C intake—their body can't efficiently use the collagen building blocks without this essential cofactor",
      "Marine collagen peptides may absorb better than bovine due to smaller peptide size, but head-to-head comparison data is limited",
    ],
  },
  {
    slug: "colonocytes",
    why_it_matters: `Colonocytes are the cells lining your colon, and understanding their unique nutritional needs explains why gut health is so closely tied to diet—particularly fiber intake. For supplement shoppers, colonocyte health matters because these cells don't primarily use glucose like most body cells; they prefer short-chain fatty acids (especially butyrate) produced by gut bacteria fermenting fiber. This means your colon's health depends not on what you eat directly, but on what your gut bacteria can make from what you eat. It's a compelling argument for prebiotic fibers over most gut-health supplements.`,
    simple_explanation: `Your colon is lined with specialized cells called colonocytes that form the barrier between your gut contents and your body. These cells have a peculiar preference: while most of your cells run on glucose (blood sugar), colonocytes get about 70% of their energy from butyrate—a fatty acid produced when gut bacteria ferment fiber. When you don't eat enough fiber, your bacteria can't make enough butyrate, and your colonocytes essentially starve. Starving colonocytes weaken, the gut barrier becomes "leaky," and inflammation increases. This is why fiber intake correlates so strongly with colon health—you're not just feeding yourself, you're feeding the bacteria that feed your colon lining.`,
    key_points: `### Key Facts About Colonocytes

- **Butyrate dependent**: Colonocytes derive 70% of their energy from butyrate; glucose is a secondary fuel. No butyrate = stressed, weakened colonocytes
- **Barrier function**: Healthy colonocytes maintain tight junctions that prevent gut contents (bacteria, toxins) from entering the bloodstream
- **Fiber connection**: Dietary fiber → bacterial fermentation → butyrate → colonocyte fuel. This pathway is more effective than butyrate supplements
- **Turnover rate**: Colonocytes are replaced every 3-5 days, making them one of the fastest-regenerating cell types—they need constant nutritional support
- **Cancer relevance**: Colonocyte dysfunction and chronic inflammation from fiber deficiency are linked to increased colon cancer risk`,
    common_misconceptions: [
      `**Myth:** You can directly supplement what colonocytes need.\n**Fact:** Oral butyrate supplements are largely absorbed before reaching the colon. The most effective way to feed colonocytes is through prebiotic fibers that your gut bacteria ferment into butyrate on-site.`,
      `**Myth:** "Gut health" supplements are more effective than dietary fiber.\n**Fact:** Most gut supplements (probiotics, L-glutamine, etc.) don't address colonocyte nutrition directly. Fermentable fiber reaching your colon provides the substrate for butyrate production that colonocytes actually need.`,
      `**Myth:** All fiber benefits colonocytes equally.\n**Fact:** Different fibers ferment at different rates and produce different short-chain fatty acids. Resistant starch and certain soluble fibers preferentially produce butyrate, while other fibers produce more acetate or propionate.`,
    ],
    examples: [
      "Eating cooled potatoes (resistant starch) feeds colon bacteria that produce butyrate, directly supporting colonocyte health",
      "Someone on a low-fiber ketogenic diet may have reduced butyrate production and colonocyte stress despite other health benefits",
      "Inflammatory bowel disease involves damaged colonocytes and barrier dysfunction—butyrate-producing bacteria are often depleted in these conditions",
      "A person takes an expensive gut supplement but eats only 10g of fiber daily—they're missing the fundamental colonocyte nutrition that fiber provides",
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
  console.log("=== BATCH 4: Enhancing Glossary Terms 31-40 ===\n");

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
