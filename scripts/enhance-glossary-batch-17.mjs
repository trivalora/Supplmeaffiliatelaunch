/**
 * Batch 17: Enhance glossary terms 161-170 (alphabetically)
 * Terms: Protein, Protein Synthesis, Randomized Controlled Trial, Resolvins,
 *        Resveratrol, Rheumatoid Arthritis, Rickets, Risk Ratio, Satiety, Saturation
 *
 * Run: node scripts/enhance-glossary-batch-17.mjs
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
    slug: "protein",
    why_it_matters: `Protein is the most important macronutrient for body composition and the foundation of the supplement industry—understanding it properly helps you evaluate protein powders, amino acids, and countless related products. For supplement shoppers, protein questions are fundamental: How much do you need? Does timing matter? Are protein powders necessary? Is whey better than plant protein? The answers are nuanced: most people eating adequate food get enough protein, but athletes, older adults, and dieters genuinely benefit from higher intakes (often achievable through supplements). Understanding protein quality, completeness, and practical intake targets helps you make informed decisions about a market worth billions annually.`,
    simple_explanation: `Proteins are large molecules made of amino acid chains that do most of the work in your body: building muscle, making enzymes, running your immune system, creating hormones, and much more. Dietary protein is broken down into amino acids during digestion, which your body then reassembles into the specific proteins it needs. Of the 20 amino acids, 9 are "essential"—your body can't make them, so they must come from food. Protein quality depends on amino acid profile (does it contain all essentials?) and digestibility. Animal proteins (meat, eggs, dairy, whey) are complete and highly digestible. Most plant proteins lack one or more essential amino acids but can be combined for completeness. Beyond just building muscle, adequate protein supports satiety, metabolism, and preserving muscle during weight loss or aging.`,
    key_points: `### Key Facts About Protein

- **Essential amino acids**: 9 of 20 amino acids must come from diet; complete proteins contain all 9 in adequate amounts; most animal proteins are complete
- **Daily needs**: RDA is 0.8g/kg but optimal for muscle and satiety is likely 1.2-2.0g/kg, especially for athletes, older adults, and dieters
- **Quality measures**: PDCAAS and DIAAS rate protein quality; whey (1.0) and egg (1.0) are highest; most plant proteins score 0.5-0.7 individually
- **Timing nuance**: Total daily intake matters most; peri-workout protein helps but isn't magic—you don't "waste" a workout without immediate protein
- **Muscle protein synthesis**: ~20-40g protein per meal maximally stimulates muscle building; more may help older adults with anabolic resistance`,
    common_misconceptions: [
      `**Myth:** You can only absorb 30g protein per meal.\n**Fact:** You can digest and absorb much more; the 30g myth refers to maximal muscle protein synthesis stimulation per meal. Excess protein isn't wasted—it's used for other bodily functions.`,
      `**Myth:** High protein intake damages kidneys.\n**Fact:** In healthy people, high protein intake (up to 2.0g/kg or more) shows no kidney harm. Those with existing kidney disease should limit protein, but healthy kidneys handle high intake fine.`,
      `**Myth:** You need protein powder to build muscle.\n**Fact:** Protein powders are convenient but not necessary. Whole food protein works equally well. Supplements just help people reach protein targets who struggle with food alone.`,
    ],
    examples: [
      "An 80kg person aiming for 1.5g/kg needs 120g protein daily—achievable through food (chicken breast = 31g, Greek yogurt = 17g, eggs = 6g each) or supplemented with protein powder",
      "Whey protein digests quickly (peaks in 1-2 hours), casein slowly (peaks in 3-4 hours); both effective, with casein potentially better before bed",
      "A vegan combines legumes + grains to get complete protein: rice provides methionine, beans provide lysine—together they're complete",
      "Older adults may need 1.2-1.6g/kg protein due to 'anabolic resistance'—their muscles respond less efficiently to protein intake than young adults",
    ],
  },
  {
    slug: "proteinsynthesis",
    why_it_matters: `Protein synthesis is how your body builds new proteins, especially muscle—understanding it explains why protein intake, timing, and exercise matter for body composition. For supplement shoppers, muscle protein synthesis (MPS) is what protein powders, amino acids (especially leucine), and muscle-building supplements claim to enhance. Knowing that MPS is stimulated by both protein intake (especially leucine-rich protein) and resistance exercise helps you understand the science behind timing, dosing, and supplement marketing. The "anabolic window" concept is based on MPS, though the science is more nuanced than supplement marketing suggests.`,
    simple_explanation: `Protein synthesis is the process of building new proteins from amino acids. Your cells read genetic instructions (DNA → mRNA) and ribosomes assemble amino acids into proteins accordingly. For muscle, we focus on muscle protein synthesis (MPS)—building new muscle proteins. MPS is balanced against muscle protein breakdown (MPB); when MPS exceeds MPB, you gain muscle (net positive protein balance). Both resistance exercise and protein intake stimulate MPS. Exercise sensitizes muscles to protein, and protein provides the raw materials. The amino acid leucine is a key trigger—it activates the mTOR pathway that initiates MPS. This is why leucine-rich proteins (whey) and leucine supplements are marketed for muscle building.`,
    key_points: `### Key Facts About Protein Synthesis

- **Building process**: DNA → mRNA → ribosome assembly of amino acids into proteins; this occurs constantly throughout the body, not just in muscle
- **Balance concept**: Muscle mass = MPS minus MPB over time; you need MPS to exceed breakdown for net muscle gain
- **Leucine trigger**: Leucine activates the mTOR pathway, initiating MPS; ~2-3g leucine per meal appears to maximally trigger the response
- **Exercise amplifier**: Resistance exercise increases MPS for 24-48 hours and amplifies the protein response; combined effect exceeds either alone
- **Threshold concept**: ~20-40g protein per meal maximizes MPS in most adults; spreading protein across meals may optimize total daily MPS`,
    common_misconceptions: [
      `**Myth:** You must consume protein within 30 minutes of exercise or waste the workout.\n**Fact:** The "anabolic window" is real but much longer than 30 minutes—likely 4-6 hours or more. Total daily protein intake matters more than precise timing for most people.`,
      `**Myth:** More protein always means more muscle protein synthesis.\n**Fact:** MPS plateaus around 20-40g protein per meal (higher end for older adults and after intense exercise). Eating 80g at once doesn't double the response.`,
      `**Myth:** Cardio prevents muscle protein synthesis.\n**Fact:** Cardio can slightly reduce MPS if done extensively before weights, but moderate cardio doesn't prevent muscle building. Concurrent training is fine for most goals.`,
    ],
    examples: [
      "Whey protein contains ~10% leucine (vs ~8% in casein, ~6% in many plant proteins), which partly explains its superior MPS stimulation in acute studies",
      "Consuming 40g protein produces higher MPS in older adults than 20g, while younger adults may maximize MPS at lower intakes—age affects the threshold",
      "Resistance exercise elevates MPS for 24-48 hours; this is why protein intake throughout the day (not just post-workout) contributes to muscle growth",
      "Someone doing heavy squats in the morning benefits from protein at breakfast, lunch, and dinner—each meal during the elevated MPS window contributes",
    ],
  },
  {
    slug: "rct",
    why_it_matters: `The randomized controlled trial (RCT) is the gold standard for determining whether supplements actually work—understanding RCTs helps you evaluate claims critically. For supplement shoppers, knowing that an RCT exists for a supplement is fundamentally different from seeing observational studies, testimonials, or mechanistic speculation. RCTs eliminate many biases by randomly assigning people to treatment or control groups, blinding them to which they receive, and comparing outcomes. When a supplement "works in studies," asking whether those were RCTs or weaker study designs helps you distinguish well-supported claims from speculation.`,
    simple_explanation: `A randomized controlled trial is an experiment where researchers randomly assign participants to groups: one gets the treatment (supplement), another gets a control (usually placebo). "Randomized" means assignment is by chance—not based on who researchers think should get what. This prevents selection bias (healthier people ending up in the treatment group). "Controlled" means there's a comparison group receiving placebo or standard treatment. "Blinded" (when possible) means participants don't know which group they're in, preventing expectation from influencing results. Double-blind means researchers administering the treatment don't know either. This design establishes cause-and-effect: if the supplement group does better, it's because of the supplement, not chance or bias.`,
    key_points: `### Key Facts About Randomized Controlled Trials

- **Causation, not correlation**: RCTs are the only study design that can prove cause-and-effect; observational studies only show associations
- **Randomization importance**: Random assignment ensures groups are similar in both known and unknown factors that might affect outcomes
- **Blinding levels**: Single-blind (participants don't know), double-blind (participants and researchers don't know), open-label (everyone knows)
- **Placebo control**: Control group receives inactive treatment; comparing to placebo reveals true supplement effect beyond expectation
- **Limitations exist**: RCTs are expensive, often short-term, may not reflect real-world use, and can't study everything (you can't randomize smoking exposure)`,
    common_misconceptions: [
      `**Myth:** If a supplement is "clinically studied," it must have passed RCTs.\n**Fact:** "Clinically studied" is vague marketing language. It could mean one small RCT, observational studies, or even just in vitro research. Demand specifics.`,
      `**Myth:** Large observational studies are as reliable as RCTs.\n**Fact:** Size doesn't overcome the fundamental limitation: observational studies can't establish causation. The Women's Health Initiative showed hormone therapy benefits observationally, but RCTs showed harm.`,
      `**Myth:** If an RCT shows no effect, the supplement definitely doesn't work.\n**Fact:** Negative RCTs could reflect wrong dose, duration, population, or outcome measured. However, multiple well-designed negative RCTs strongly suggest lack of effect.`,
    ],
    examples: [
      "Creatine has hundreds of RCTs showing consistent benefits—this is why it's considered one of the most evidence-backed supplements",
      "Vitamin E observational studies suggested heart benefits; RCTs found no benefit and possible harm—demonstrating why RCTs are essential",
      "A 12-week double-blind RCT comparing curcumin to placebo for joint pain is far stronger evidence than a survey of curcumin users",
      "Meta-analyses pool multiple RCTs together, increasing statistical power and providing stronger conclusions than any single trial",
    ],
  },
  {
    slug: "resolvins",
    why_it_matters: `Resolvins are anti-inflammatory molecules made from omega-3 fatty acids—understanding them reveals why fish oil may reduce inflammation more specifically than just providing "antioxidants." For supplement shoppers, resolvins explain one mechanism by which omega-3s (EPA and DHA) exert anti-inflammatory effects. Unlike simply blocking inflammation, resolvins actively promote resolution—they tell the immune system "job done, clean up and heal." This is a fundamentally different approach than anti-inflammatory drugs that just suppress inflammation. The resolvin story provides scientific depth to omega-3 claims and suggests why adequate EPA/DHA is important for healthy inflammation resolution.`,
    simple_explanation: `When your body encounters injury or infection, it triggers inflammation to fight the problem. But inflammation needs to turn off once the threat is resolved—this active "turn off" process involves specialized molecules called resolvins (also protectins and maresins). These are made from omega-3 fatty acids (EPA and DHA) in your cell membranes. Resolvins don't just block inflammation; they actively promote resolution: stopping neutrophil recruitment, enhancing macrophage cleanup of debris, and promoting tissue healing. Think of inflammation like a fire department responding to a fire—resolvins are the signal that says "fire's out, go home." Without adequate omega-3s to make resolvins, inflammation may persist longer than needed, contributing to chronic inflammatory conditions.`,
    key_points: `### Key Facts About Resolvins

- **Active resolution**: Resolvins don't block inflammation; they promote its active resolution—a distinct process, not just the absence of pro-inflammatory signals
- **Omega-3 derived**: Made from EPA (E-series resolvins) and DHA (D-series resolvins); adequate omega-3 intake is required for adequate resolvin production
- **Multiple actions**: Resolvins stop neutrophil infiltration, stimulate macrophage clearance of cellular debris, reduce pain, and promote tissue repair
- **Chronic inflammation link**: Failure to resolve inflammation underlies many chronic diseases; resolvin deficiency may contribute to persistent inflammation
- **Research stage**: Resolvin-based drugs are in development; currently, ensuring adequate omega-3 intake is the practical way to support resolvin production`,
    common_misconceptions: [
      `**Myth:** Anti-inflammatory means blocking inflammation.\n**Fact:** Resolution is an active process separate from blocking inflammation's initiation. You can block inflammation but still have failed resolution. Resolvins specifically drive resolution.`,
      `**Myth:** Any omega-3 source provides resolvins.\n**Fact:** Resolvins are made specifically from EPA and DHA (marine omega-3s). ALA (plant omega-3) converts poorly to EPA/DHA and thus contributes minimally to resolvin production.`,
      `**Myth:** You can take resolvin supplements.\n**Fact:** Resolvins themselves aren't available as supplements yet (they're being developed as drugs). Currently, you support resolvin production by consuming adequate EPA and DHA.`,
    ],
    examples: [
      "Someone with chronic low-grade inflammation takes fish oil (2g EPA+DHA daily); over months, inflammatory markers improve partly through enhanced resolvin production",
      "Athletes with excessive training inflammation may benefit from omega-3s not just to reduce inflammation but to actively resolve it and promote recovery",
      "Research shows diabetic patients have impaired resolvin production—partly explaining their prolonged inflammation and poor wound healing",
      "High omega-6 to omega-3 ratios favor pro-inflammatory prostaglandins over pro-resolution resolvins; balancing this ratio may improve inflammation resolution",
    ],
  },
  {
    slug: "resveratrol",
    why_it_matters: `Resveratrol is the polyphenol behind red wine's health halo—but understanding the science helps you separate hype from reality. For supplement shoppers, resveratrol is heavily marketed for anti-aging, heart health, and longevity based on impressive laboratory studies. The problem: human evidence is far weaker than cell and animal data. Resveratrol has poor absorption and is rapidly metabolized; achieving study doses through wine would require toxic alcohol levels. High-dose supplements exist but haven't replicated dramatic animal findings in humans. Understanding resveratrol's reality check helps you calibrate expectations for this popular but overhyped compound.`,
    simple_explanation: `Resveratrol is a polyphenol found in grape skins, red wine, peanuts, and some berries. It gained fame from the "French paradox"—the observation that French people had lower heart disease despite high fat intake, possibly due to red wine. Laboratory studies showed resveratrol activates sirtuins (longevity-associated enzymes), reduces inflammation, and extended lifespan in yeast, worms, and mice. The hype was enormous. However, translation to humans has been disappointing: resveratrol has ~1% bioavailability, is rapidly metabolized, and human trials show modest effects at best. Red wine's health associations may come from other compounds, alcohol's effects on blood vessels, or lifestyle factors of wine drinkers—not necessarily resveratrol specifically.`,
    key_points: `### Key Facts About Resveratrol

- **Limited bioavailability**: Only ~1% of oral resveratrol reaches circulation unchanged; it's rapidly metabolized in the intestine and liver
- **Dose disparity**: Impressive animal studies used doses equivalent to hundreds of glasses of wine daily; red wine contains only 0.2-2mg per glass
- **Human evidence weak**: Despite promising mechanisms, human RCTs show modest effects on metabolic markers; dramatic longevity benefits not demonstrated
- **Sirtuin activation debate**: Resveratrol's sirtuin-activating effects were overstated; effects are weaker and less consistent than initially reported
- **Metabolites may matter**: Resveratrol metabolites might have activity; the parent compound's poor bioavailability may not tell the whole story`,
    common_misconceptions: [
      `**Myth:** Red wine's health benefits come from resveratrol.\n**Fact:** Red wine contains minimal resveratrol (0.2-2mg/glass). Wine's health associations more likely come from other polyphenols, alcohol's effects, or lifestyle factors of moderate wine drinkers.`,
      `**Myth:** Resveratrol extends lifespan in humans.\n**Fact:** Lifespan extension was seen in yeast, worms, and some mice studies. Human trials haven't shown longevity benefits, and extrapolating from simple organisms to humans is problematic.`,
      `**Myth:** More resveratrol is always better.\n**Fact:** Very high doses (>1000mg) may have pro-oxidant effects. More isn't necessarily better, and optimal dosing for any benefit remains unclear.`,
    ],
    examples: [
      "Someone taking 500mg resveratrol supplement daily is getting 250-2500x more than from a glass of red wine—yet still may not achieve tissue concentrations seen in animal studies",
      "A meta-analysis of resveratrol trials shows modest reductions in blood pressure and inflammatory markers—real but not dramatic effects",
      "Resveratrol-related drugs (SIRT1 activators) failed in clinical development; pharmaceutical companies couldn't replicate dramatic preclinical effects",
      "Pterostilbene, a resveratrol analog with better bioavailability, is now being studied as an alternative—absorption matters for polyphenols",
    ],
  },
  {
    slug: "rheumatoidarthritis",
    why_it_matters: `Rheumatoid arthritis (RA) is an autoimmune disease where the immune system attacks joints—understanding it helps evaluate supplements marketed for "joint health" and anti-inflammatory effects. For supplement shoppers, RA is fundamentally different from osteoarthritis (wear-and-tear): it's immune-mediated systemic inflammation. Supplements that help osteoarthritis may not help RA, and vice versa. Fish oil has the strongest evidence in RA (reducing inflammation, potentially reducing NSAID need). Other anti-inflammatory supplements (curcumin, boswellia) have preliminary evidence. Understanding RA's autoimmune nature explains why immune-modulating treatments matter.`,
    simple_explanation: `Rheumatoid arthritis is an autoimmune disease where your immune system mistakenly attacks the lining of your joints (synovium), causing inflammation, pain, swelling, and eventually joint damage. Unlike osteoarthritis (mechanical wear-and-tear of cartilage), RA is a systemic inflammatory disease that can also affect other organs. It typically affects joints symmetrically (both hands, both wrists) and causes morning stiffness lasting over an hour. RA is treated with disease-modifying drugs (DMARDs) that suppress the overactive immune system. Supplements may play a supporting role: fish oil reduces inflammation and may decrease NSAID requirements, while other anti-inflammatory supplements are being studied as complementary approaches.`,
    key_points: `### Key Facts About Rheumatoid Arthritis

- **Autoimmune mechanism**: The immune system attacks joint synovium, causing chronic inflammation that erodes cartilage and bone
- **Systemic disease**: RA isn't just joints—it can cause fatigue, anemia, lung problems, and increased cardiovascular risk due to chronic inflammation
- **Different from osteoarthritis**: OA is mechanical wear; RA is immune-mediated. Treatments differ, and supplements that help one may not help the other
- **Fish oil evidence**: 3-6g EPA+DHA daily reduces inflammation and may reduce NSAID need in RA—one of the better-studied supplements for this condition
- **Complementary role**: Supplements complement but don't replace DMARDs; uncontrolled RA causes irreversible joint damage requiring medical treatment`,
    common_misconceptions: [
      `**Myth:** Glucosamine helps rheumatoid arthritis.\n**Fact:** Glucosamine is studied for osteoarthritis (cartilage support), not RA. Since RA is immune-mediated inflammation, glucosamine's mechanism isn't relevant to RA.`,
      `**Myth:** Natural anti-inflammatories can replace RA medications.\n**Fact:** Supplements may reduce symptoms but don't stop disease progression. Untreated RA causes permanent joint destruction. DMARDs are essential for disease control.`,
      `**Myth:** Joint pain means arthritis, and all arthritis is the same.\n**Fact:** RA, osteoarthritis, gout, and other forms have different causes and treatments. Accurate diagnosis is essential for appropriate treatment.`,
    ],
    examples: [
      "Someone with RA takes methotrexate (DMARD) plus 3g fish oil daily; after 3 months, they need less naproxen for breakthrough pain—fish oil as adjunct therapy",
      "Curcumin (500mg enhanced absorption, twice daily) is being studied for RA as an add-on to standard treatment; preliminary results show modest anti-inflammatory effects",
      "A patient mistakes early RA for general joint pain and takes glucosamine for months; the delay in diagnosis allows more joint damage—proper diagnosis matters",
      "Vitamin D deficiency is common in RA patients and associated with disease activity; ensuring adequate vitamin D status may support overall management",
    ],
  },
  {
    slug: "rickets",
    why_it_matters: `Rickets is childhood vitamin D deficiency causing soft, deformed bones—understanding it shows why vitamin D supplementation became standard for infants and why deficiency has serious consequences. For supplement shoppers, rickets represents the extreme endpoint of vitamin D deficiency that we've largely prevented through fortification and supplementation. However, vitamin D deficiency short of rickets is common and may affect muscle function, immunity, and other systems. Understanding that vitamin D requirements were established to prevent rickets (400-600 IU) helps explain ongoing debates about whether higher doses optimize other health outcomes.`,
    simple_explanation: `Rickets is what happens when children don't get enough vitamin D for proper bone development. Without vitamin D, calcium can't be properly absorbed and deposited in growing bones. The result is soft, weak bones that bend under the body's weight—causing bowed legs, knock knees, a bumpy "rachitic rosary" on the ribcage, and delayed growth. Rickets was common in industrialized cities in the 1800s where smog blocked sunlight, and in northern climates during winter. The discovery that cod liver oil (vitamin D) and sunlight prevented rickets led to vitamin D fortification of milk and routine supplementation for breastfed infants. Rickets is now rare in developed countries but still occurs with severe deficiency, exclusively breastfed infants without supplementation, or certain medical conditions.`,
    key_points: `### Key Facts About Rickets

- **Vitamin D deficiency**: Rickets results from severe vitamin D deficiency (usually <10 ng/mL for extended periods) during childhood bone development
- **Calcium metabolism**: Vitamin D is required for calcium absorption; without it, bones can't mineralize properly despite adequate calcium intake
- **Physical signs**: Bowed legs, knock knees, rachitic rosary (bumpy rib junctions), delayed fontanelle closure, and poor growth
- **Prevention established**: 400 IU vitamin D daily prevents rickets; this is why breastfed infants receive vitamin D drops and milk is fortified
- **Still occurs**: Rickets occurs in exclusively breastfed infants without supplementation, in very dark-skinned children in northern climates, and with malabsorption conditions`,
    common_misconceptions: [
      `**Myth:** Rickets is a disease of the past.\n**Fact:** While rare, rickets still occurs in developed countries, especially in exclusively breastfed infants without vitamin D supplementation and in high-risk populations (dark skin, northern latitudes, covered dress).`,
      `**Myth:** Breastmilk provides all needed nutrients including vitamin D.\n**Fact:** Breastmilk is nutritionally complete except vitamin D is typically low (25-50 IU/L). Breastfed infants need 400 IU vitamin D supplement daily.`,
      `**Myth:** Rickets and osteomalacia are the same.\n**Fact:** Same mechanism (vitamin D deficiency → soft bones), but rickets occurs in children with growing bones (causing deformities), while osteomalacia occurs in adults (causing pain and weakness without visible deformity).`,
    ],
    examples: [
      "An exclusively breastfed infant in Seattle whose parents don't give vitamin D drops develops rickets by 18 months—preventable with 400 IU daily supplement",
      "A heavily veiled dark-skinned family in London has multiple children with rickets despite no dietary deficiency—inadequate sun exposure in northern latitude",
      "Historical rickets epidemics in industrial cities led to food fortification; adding vitamin D to milk in the 1930s nearly eliminated rickets in the US",
      "A child with celiac disease develops rickets despite vitamin D intake because intestinal damage prevents vitamin D absorption—malabsorption cause",
    ],
  },
  {
    slug: "rr",
    why_it_matters: `Risk ratio (relative risk) is a statistical measure comparing disease risk between groups—understanding it helps you interpret supplement research claims. For supplement shoppers, headlines like "Omega-3s reduce heart attack risk by 25%" are based on risk ratios. A risk ratio of 0.75 means the supplement group had 75% of the control group's risk (25% reduction). However, relative risk doesn't tell you absolute risk: a 25% relative reduction from 0.4% to 0.3% is very different from 40% to 30%. Learning to ask "what's the absolute difference?" helps you avoid being misled by impressive-sounding relative risk reductions.`,
    simple_explanation: `Risk ratio (also called relative risk) compares the probability of an outcome in two groups. If 10 out of 100 people taking a supplement develop heart disease, and 15 out of 100 people taking placebo develop it, the risk ratio is 10/15 = 0.67. This means the supplement group had 67% of the placebo group's risk—a 33% relative risk reduction. Risk ratio of 1.0 means no difference. Below 1.0 suggests protection. Above 1.0 suggests increased risk. The tricky part: relative risk sounds impressive but can be misleading. A 50% relative risk reduction sounds huge, but if baseline risk was 2%, you've reduced it to 1%—only 1 person in 100 actually benefits. Always ask about absolute risk reduction.`,
    key_points: `### Key Facts About Risk Ratio

- **Comparison measure**: RR compares outcome probability between exposed/treatment group and unexposed/control group
- **Interpretation**: RR=1.0 means no difference; RR<1.0 means reduced risk (treatment protective); RR>1.0 means increased risk
- **Relative vs absolute**: A 50% relative risk reduction can be clinically trivial (2%→1%) or substantial (50%→25%) depending on baseline risk
- **Confidence intervals**: RR with 95% CI crossing 1.0 isn't statistically significant; the true effect could be harm, benefit, or nothing
- **NNT calculation**: Number Needed to Treat = 1/Absolute Risk Reduction; this tells you how many people must take supplement for one to benefit`,
    common_misconceptions: [
      `**Myth:** A 50% risk reduction means half the people were saved.\n**Fact:** 50% relative risk reduction means you cut the risk in half—if baseline risk was 2%, it becomes 1%. Only 1 in 100 additional people benefits; 99 would have been fine anyway.`,
      `**Myth:** Risk ratio and odds ratio are the same.\n**Fact:** They're similar when outcomes are rare but differ when outcomes are common. Odds ratio can overstate effects. Know which measure you're reading.`,
      `**Myth:** Larger risk ratios always mean more important effects.\n**Fact:** A RR of 0.50 for a rare outcome (0.2%→0.1%) may be less meaningful than RR of 0.80 for a common outcome (40%→32%). Absolute numbers matter.`,
    ],
    examples: [
      "Vitamin D supplement shows RR=0.80 for fractures: 20% relative risk reduction. If baseline risk is 10%, absolute reduction is 2% (NNT=50—50 people take vitamin D for 1 fewer fracture)",
      "A supplement reduces cancer risk from 5% to 4% (RR=0.80, 20% relative reduction). Headlines say '20% less cancer!' but absolute benefit is 1 in 100",
      "Fish oil trial: RR=0.75 for heart attack with 95% CI 0.65-0.87. This doesn't cross 1.0, so it's statistically significant—real protective effect",
      "If a side effect has RR=2.0 and baseline risk is 0.1%, absolute risk is still only 0.2%—doubling a tiny risk may still be acceptable",
    ],
  },
  {
    slug: "satiety",
    why_it_matters: `Satiety is the feeling of fullness that stops you from eating—understanding it explains how protein, fiber, and certain supplements may support weight management. For supplement shoppers, satiety is what appetite suppressants and weight management products claim to enhance. Protein and fiber genuinely increase satiety through hormonal mechanisms (releasing PYY, GLP-1, CCK). Specific supplements (5-HTP, glucomannan, some fiber supplements) are marketed for satiety with varying evidence. Understanding what actually triggers satiety helps you evaluate weight management products and choose foods and supplements that genuinely help you feel satisfied with fewer calories.`,
    simple_explanation: `Satiety is the feeling of satisfaction and fullness that develops during and after eating, telling you to stop eating. It's different from hunger (the drive to eat) and satiation (the process of becoming full during a meal). Multiple signals create satiety: stomach stretch (mechanoreceptors), nutrient sensing (amino acids, fatty acids), and hormones released by your gut (PYY, GLP-1, CCK) that signal your brain's satiety center. Different foods trigger satiety differently: protein is the most satiating macronutrient, followed by fiber, then carbohydrates, with fat being least satiating calorie-for-calorie. This is why high-protein, high-fiber diets help with weight management—you naturally eat less because you feel full sooner and longer.`,
    key_points: `### Key Facts About Satiety

- **Multi-signal process**: Satiety involves stomach stretch, nutrient sensing, gut hormones (PYY, GLP-1, CCK), and brain processing—not just one mechanism
- **Protein most satiating**: Per calorie, protein produces the strongest satiety response, partly through amino acid sensing and hormone release
- **Fiber's role**: Fiber adds bulk (stretch receptors), slows digestion, and ferments to SCFAs that affect gut hormones—multiple satiety pathways
- **Calorie density matters**: Low calorie-density foods (high water, high fiber) provide more satiety per calorie than energy-dense foods
- **Supplement applications**: Glucomannan (fiber), 5-HTP (serotonin precursor), and protein supplements are marketed for satiety with varying evidence levels`,
    common_misconceptions: [
      `**Myth:** Eating fat keeps you full.\n**Fact:** Fat is calorie-dense but produces weaker satiety signals than protein. High-fat foods are often overeaten because they're palatable but not very satiating per calorie.`,
      `**Myth:** Hunger and satiety are the same thing (opposites).\n**Fact:** They're related but distinct. You can have low hunger but also low satiety (not hungry but not satisfied). Different mechanisms regulate each.`,
      `**Myth:** Appetite suppressant supplements dramatically reduce food intake.\n**Fact:** Most satiety supplements produce modest effects—maybe 5-10% reduction in food intake. They support but don't replace diet and behavior changes.`,
    ],
    examples: [
      "Eating 300 calories of chicken breast (protein) produces more satiety than 300 calories of bread (carbohydrate) or 300 calories of oil (fat)",
      "Glucomannan fiber (1g before meals with water) expands in the stomach, triggering stretch receptors and reducing subsequent food intake by ~10%",
      "A high-protein breakfast (eggs, Greek yogurt) reduces hunger and calorie intake at lunch compared to a high-carb breakfast (cereal, toast)",
      "Eating slowly allows satiety hormones time to reach the brain; eating fast can lead to overconsumption before satiety signals arrive",
    ],
  },
  {
    slug: "saturation",
    why_it_matters: `Saturation refers to whether fat molecules have double bonds—understanding it helps you interpret claims about saturated vs unsaturated fats in supplements and foods. For supplement shoppers, saturation matters for omega-3s, MCT oil, and various fat-based supplements. Saturated fats (no double bonds) are stable but linked to cardiovascular concerns. Unsaturated fats (with double bonds) include heart-healthy omega-3s but oxidize more easily. This is why fish oil supplements include vitamin E (to prevent oxidation) and why MCT oil (saturated) is more stable than fish oil (highly unsaturated). Understanding saturation helps you evaluate fat-related supplement quality and storage recommendations.`,
    simple_explanation: `In chemistry, saturation describes whether a fatty acid's carbon chain has double bonds. Saturated fats have no double bonds—all carbon atoms are "saturated" with hydrogen atoms. The chain is straight and packs tightly, making saturated fats solid at room temperature (butter, coconut oil). Unsaturated fats have one or more double bonds, creating kinks in the chain. Monounsaturated (one double bond) include olive oil. Polyunsaturated (multiple double bonds) include omega-3s and omega-6s. More double bonds = more kinks = liquid at room temperature = more susceptible to oxidation (rancidity). This chemistry explains why different fats behave differently in your body and in storage.`,
    key_points: `### Key Facts About Saturation

- **Chemical definition**: Saturated = no double bonds (straight chain); unsaturated = one or more double bonds (kinked chain)
- **Physical properties**: Saturated fats are solid at room temperature; unsaturated are liquid. More unsaturation = lower melting point
- **Oxidation susceptibility**: Double bonds are vulnerable to oxidation; polyunsaturated fats (omega-3s) oxidize faster than saturated fats
- **Health implications**: Saturated fat raises LDL cholesterol; unsaturated fats (especially omega-3s) have cardiovascular benefits
- **Supplement relevance**: Fish oil (highly unsaturated) needs antioxidant protection and proper storage; MCT oil (saturated) is very stable`,
    common_misconceptions: [
      `**Myth:** All saturated fat is bad.\n**Fact:** Saturated fat is not one thing—stearic acid (in chocolate) has neutral effects; different saturated fats behave differently. Context and overall diet matter more than demonizing one category.`,
      `**Myth:** Unsaturated is always better than saturated.\n**Fact:** For health, generally yes. But for stability and cooking, saturated fats resist oxidation better. Highly unsaturated oils can oxidize during cooking, potentially forming harmful compounds.`,
      `**Myth:** Fish oil doesn't go rancid.\n**Fact:** Fish oil is highly unsaturated and very susceptible to oxidation. Rancid fish oil may be harmful. Quality products include vitamin E, use dark bottles, and require refrigeration after opening.`,
    ],
    examples: [
      "Omega-3 supplements include vitamin E (tocopherol) to prevent the highly unsaturated EPA and DHA from oxidizing during shelf life",
      "MCT oil (medium-chain triglycerides from coconut) is saturated, making it very stable—no refrigeration needed and long shelf life",
      "Olive oil (monounsaturated) is more stable than flaxseed oil (polyunsaturated) but less stable than coconut oil (saturated) for cooking",
      "A fish oil supplement stored in clear bottles on a warm shelf is likely oxidized; quality supplements use dark glass, nitrogen flushing, and recommend refrigeration",
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
  console.log("=== BATCH 17: Enhancing Glossary Terms 161-170 ===\n");

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
