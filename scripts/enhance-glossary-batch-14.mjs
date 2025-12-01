/**
 * Batch 14: Enhance glossary terms 131-140 (alphabetically)
 * Terms: Neurotransmitter, NF-κB, Nitric Oxide, Non-Heme Iron, Normotensive,
 *        Nrf2, Observational Study, Odds Ratio, Omega-3 Fatty Acids, Osteomalacia
 *
 * Run: node scripts/enhance-glossary-batch-14.mjs
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
    slug: "neurotransmitter",
    why_it_matters: `Neurotransmitters are the chemical messengers of your brain—understanding them explains why amino acid supplements, B vitamins, and adaptogenic herbs are marketed for mood and cognitive function. For supplement shoppers, neurotransmitter-related claims are everywhere: 5-HTP for serotonin, L-tyrosine for dopamine, GABA for relaxation, choline for acetylcholine. The science is real: your brain synthesizes neurotransmitters from amino acids and cofactors that come from diet and supplements. However, taking a neurotransmitter precursor doesn't automatically raise brain levels—the blood-brain barrier, enzyme saturation, and complex feedback systems limit direct control. Understanding these pathways helps you evaluate claims more critically.`,
    simple_explanation: `Neurotransmitters are chemicals that brain cells (neurons) use to communicate with each other. When one neuron wants to send a message to another, it releases neurotransmitters into the tiny gap (synapse) between them. The receiving neuron has receptors that detect these chemicals and respond accordingly. Different neurotransmitters do different things: serotonin influences mood and sleep, dopamine drives motivation and pleasure, GABA calms brain activity, acetylcholine supports memory and focus, norepinephrine increases alertness. Your brain makes these from amino acids in food: tryptophan becomes serotonin, tyrosine becomes dopamine, choline becomes acetylcholine. This is why protein intake affects mental function—it provides raw materials for neurotransmitter synthesis.`,
    key_points: `### Key Facts About Neurotransmitters

- **Chemical messengers**: Neurotransmitters carry signals between neurons; dozens exist, each with different effects on mood, cognition, and behavior
- **Amino acid precursors**: Most neurotransmitters are made from amino acids—tryptophan→serotonin, tyrosine→dopamine, choline→acetylcholine
- **Cofactors required**: Synthesis requires B vitamins (B6, B12, folate), iron, magnesium, and other nutrients as enzyme cofactors
- **Blood-brain barrier**: Many supplements can't easily cross into the brain; precursors like L-tryptophan and L-tyrosine can, but with limitations
- **Balance matters**: Neurotransmitter systems interact; boosting one may affect others—brain chemistry is a network, not individual on/off switches`,
    common_misconceptions: [
      `**Myth:** Taking serotonin or dopamine supplements directly raises brain levels.\n**Fact:** Serotonin and dopamine can't cross the blood-brain barrier. Supplements use precursors (5-HTP, L-tyrosine) that can cross and be converted to neurotransmitters in the brain.`,
      `**Myth:** You can precisely control brain chemistry with supplements.\n**Fact:** The brain has extensive feedback mechanisms. Taking excess precursors doesn't linearly increase neurotransmitter levels—enzymes saturate, receptors downregulate, and balance is maintained.`,
      `**Myth:** Low serotonin = depression, so raising serotonin fixes depression.\n**Fact:** The "chemical imbalance" theory is oversimplified. Depression involves complex network dysfunction, not just low serotonin. SSRIs raise serotonin within hours but take weeks to improve mood.`,
    ],
    examples: [
      "5-HTP (50-200mg) is a serotonin precursor that crosses the blood-brain barrier and may support mood; L-tryptophan must first convert to 5-HTP",
      "L-tyrosine (500-2000mg) supports dopamine synthesis, potentially helping with stress-induced cognitive demands but not deficiency in healthy people",
      "GABA supplements are sold for relaxation, but GABA itself poorly crosses the blood-brain barrier; effects may be from peripheral receptors or placebo",
      "Vitamin B6 deficiency can impair neurotransmitter synthesis since it's required for converting amino acids to serotonin and dopamine",
    ],
  },
  {
    slug: "nfkb",
    why_it_matters: `NF-κB (Nuclear Factor kappa-B) is the master switch for inflammation—understanding it explains why curcumin, omega-3s, resveratrol, and many other supplements are marketed as anti-inflammatory. For supplement shoppers, NF-κB is what many "inflammation" supplements actually target. When activated, NF-κB enters the cell nucleus and turns on genes for inflammatory cytokines, COX-2, and other inflammatory proteins. Chronic NF-κB activation underlies conditions from arthritis to cancer. Many plant compounds (curcumin, quercetin, EGCG) inhibit NF-κB activation in cell studies, which is why they're called anti-inflammatory. However, cell studies don't always translate to real-world effects, and NF-κB has protective immune functions too.`,
    simple_explanation: `NF-κB is a protein complex inside your cells that acts as a master switch for inflammation. Normally, NF-κB sits inactive in the cytoplasm, held in place by inhibitor proteins. When cells detect threats—infection, toxins, injury—these inhibitors release NF-κB, which travels to the nucleus and turns on dozens of inflammatory genes. This activates the immune system, increases inflammatory cytokines (IL-6, TNF-α), and creates the inflammatory response that fights infection and heals injuries. The problem is chronic activation: in obesity, autoimmune diseases, and aging, NF-κB stays turned on, driving persistent inflammation that damages tissues. Many supplements (curcumin, omega-3s, resveratrol) are studied for their ability to reduce NF-κB activation.`,
    key_points: `### Key Facts About NF-κB

- **Master inflammation switch**: NF-κB controls expression of 150+ inflammatory genes, including cytokines (IL-1, IL-6, TNF-α), COX-2, and adhesion molecules
- **Acute vs. chronic**: Acute NF-κB activation fights infection; chronic activation drives aging, arthritis, cancer, heart disease, and other inflammatory conditions
- **Redox sensitive**: Oxidative stress activates NF-κB; antioxidants can suppress it—linking oxidative stress and inflammation mechanistically
- **Supplement targets**: Curcumin, omega-3s, resveratrol, quercetin, EGCG all inhibit NF-κB in cell studies; real-world effects are less dramatic
- **Dual role**: Complete NF-κB inhibition impairs immunity; the goal is moderating chronic over-activation, not eliminating NF-κB function`,
    common_misconceptions: [
      `**Myth:** Blocking NF-κB is always beneficial.\n**Fact:** NF-κB is essential for immune function and tissue repair. Complete suppression would leave you vulnerable to infection and impair wound healing. The goal is reducing chronic over-activation, not elimination.`,
      `**Myth:** If a supplement blocks NF-κB in cells, it will reduce inflammation in your body.\n**Fact:** Cell study effects often don't translate to human bodies. Absorption, metabolism, and dosing determine whether test-tube effects occur in real tissues at achievable concentrations.`,
      `**Myth:** NF-κB inhibition is a new, cutting-edge target.\n**Fact:** Aspirin, ibuprofen, and corticosteroids have been blocking NF-κB for decades—this isn't new science, just a molecular explanation for how traditional anti-inflammatories work.`,
    ],
    examples: [
      "Curcumin blocks NF-κB activation in multiple cell studies; human trials show modest anti-inflammatory effects at high doses (500mg+ with enhanced absorption)",
      "Omega-3 fatty acids suppress NF-κB activation, partly explaining why fish oil reduces inflammatory markers like CRP",
      "Visceral (belly) fat cells have chronically activated NF-κB, contributing to the inflammation that drives metabolic syndrome",
      "Exercise paradoxically activates NF-κB acutely (inflammation after workout) but reduces chronic NF-κB activation over time—hormesis in action",
    ],
  },
  {
    slug: "nitricoxide",
    why_it_matters: `Nitric oxide (NO) is the molecule behind blood flow, exercise performance, and cardiovascular supplements—understanding it explains why beet juice, L-arginine, and L-citrulline are popular. For supplement shoppers, NO is what "pump" supplements actually target. NO relaxes blood vessel walls, increasing blood flow to muscles (better pumps, endurance) and throughout the body (better blood pressure, erectile function). Your body makes NO from the amino acid L-arginine via the enzyme eNOS, but also from dietary nitrates (beets, leafy greens) via bacteria in your mouth. Knowing both pathways helps you choose between L-arginine/citrulline supplements and nitrate-rich foods or beetroot supplements.`,
    simple_explanation: `Nitric oxide is a gas that your body produces as a signaling molecule—its main job is telling blood vessels to relax and widen. When the inner lining of blood vessels (endothelium) releases NO, the surrounding muscle cells relax, blood vessels dilate, and blood flow increases. This affects everything: exercise performance (more blood to muscles), blood pressure (wider vessels = lower pressure), erectile function, and cardiovascular health. Your body makes NO two ways: (1) from L-arginine using the enzyme eNOS, and (2) from dietary nitrates that bacteria in your mouth convert to nitrite, then your body converts to NO. As we age, NO production declines, contributing to high blood pressure and reduced exercise capacity.`,
    key_points: `### Key Facts About Nitric Oxide

- **Vasodilator**: NO signals blood vessel smooth muscle to relax, increasing blood flow and reducing blood pressure
- **Two production pathways**: Enzymatic (L-arginine → NO via eNOS) and nitrate pathway (dietary nitrate → nitrite → NO via oral bacteria)
- **Exercise performance**: NO increases blood flow to working muscles, improving oxygen/nutrient delivery and exercise capacity
- **Erectile function**: Erections require NO to dilate penile blood vessels; Viagra works by prolonging NO's effects
- **Age-related decline**: NO production decreases with age and with endothelial dysfunction; this drives hypertension and cardiovascular disease`,
    common_misconceptions: [
      `**Myth:** L-arginine is the best way to boost nitric oxide.\n**Fact:** L-arginine is poorly absorbed and rapidly metabolized. L-citrulline (which converts to arginine) is often more effective. Dietary nitrates (beets, leafy greens) use an entirely separate pathway.`,
      `**Myth:** Mouthwash doesn't affect nitric oxide production.\n**Fact:** Antibacterial mouthwash kills the oral bacteria that convert dietary nitrate to nitrite—a key step in the nitrate-NO pathway. Using mouthwash can actually reduce NO production and raise blood pressure.`,
      `**Myth:** More NO is always better.\n**Fact:** While boosting NO helps when production is low, excessive NO can cause dangerously low blood pressure. NO also forms peroxynitrite when combined with superoxide—a damaging free radical.`,
    ],
    examples: [
      "Beetroot juice (500ml or nitrate equivalent) increases NO production, improving endurance exercise performance by 1-3% in trained athletes",
      "L-citrulline (6-8g) raises arginine levels better than arginine itself because it bypasses intestinal and liver metabolism",
      "Someone using antiseptic mouthwash twice daily may have 25% higher blood pressure than someone who doesn't—they've killed their nitrate-converting bacteria",
      "Nitroglycerin for chest pain works by releasing NO to dilate coronary arteries; it's been used for over a century before we understood the mechanism",
    ],
  },
  {
    slug: "nonhemeiron",
    why_it_matters: `Non-heme iron is the form found in plants, supplements, and fortified foods—understanding it helps you maximize iron absorption or avoid excess. For supplement shoppers, knowing that non-heme iron absorption varies from 2% to 20% depending on meal composition is crucial. Unlike heme iron from meat (absorbed consistently at 15-35%), non-heme iron absorption is dramatically affected by enhancers (vitamin C) and inhibitors (phytates, calcium, polyphenols). Taking iron with orange juice can triple absorption; taking it with coffee can cut it by 60%. This explains why vegetarians need higher iron intake and why iron supplement timing matters.`,
    simple_explanation: `Non-heme iron is iron that isn't bound to hemoglobin or myoglobin—it's the form found in plant foods (spinach, beans, fortified cereals), eggs, dairy, and iron supplements. Unlike heme iron from meat (which is absorbed efficiently regardless of meal content), non-heme iron absorption is highly variable—anywhere from 2% to 20% depending on what else you eat with it. Vitamin C dramatically increases absorption by converting iron to a more absorbable form. Phytates (in whole grains, legumes), polyphenols (in tea, coffee), and calcium decrease absorption by binding iron. This is why iron status differs so much between individuals: same iron intake, vastly different absorption based on dietary context.`,
    key_points: `### Key Facts About Non-Heme Iron

- **Variable absorption**: Non-heme iron absorption ranges from 2-20%; meal composition matters enormously
- **Vitamin C enhancer**: Taking vitamin C with iron can increase absorption 2-6 fold; this is why iron supplements often include vitamin C
- **Common inhibitors**: Phytates (grains, legumes), polyphenols (tea, coffee, wine), calcium, and antacids all reduce non-heme iron absorption
- **Supplement form**: Iron supplements contain non-heme iron (ferrous sulfate, ferrous gluconate, etc.)—subject to same enhancers/inhibitors
- **Vegetarian relevance**: Plant-based diets contain only non-heme iron; RDA is 1.8x higher for vegetarians to compensate for lower absorption`,
    common_misconceptions: [
      `**Myth:** Spinach is a great iron source.\n**Fact:** Spinach contains iron but also oxalates that inhibit absorption. You absorb only ~2% of spinach iron. The Popeye myth vastly overstates spinach's iron contribution.`,
      `**Myth:** All iron supplements are absorbed equally.\n**Fact:** Iron supplements are non-heme iron. Absorption varies significantly with form (ferrous vs. ferric), timing (empty vs. full stomach), and what you consume with them. Following best practices matters.`,
      `**Myth:** Taking iron with meals improves absorption.\n**Fact:** Taking iron with meals often reduces absorption (food contains inhibitors). Taking iron on an empty stomach with vitamin C maximizes absorption—though may increase stomach upset.`,
    ],
    examples: [
      "Taking 30mg iron supplement with 100mg vitamin C increases absorption from 10% to 30%—tripling the amount that reaches your blood",
      "Drinking coffee or tea with meals reduces iron absorption by 40-60% due to polyphenol binding",
      "A vegetarian eating 18mg iron daily may absorb similar amounts to a meat-eater consuming 10mg, due to lower non-heme absorption",
      "Taking iron supplements 2 hours away from calcium supplements prevents competitive inhibition at intestinal absorption sites",
    ],
  },
  {
    slug: "normotensive",
    why_it_matters: `Normotensive means having normal blood pressure—understanding this term helps you interpret research and determine whether blood pressure supplements apply to you. For supplement shoppers, many studies show supplements (magnesium, beetroot, omega-3s) lowering blood pressure in hypertensive people, but effects in normotensive individuals are often smaller or absent. Your body has homeostatic mechanisms that resist lowering blood pressure below healthy levels. Knowing whether a study was conducted in hypertensive or normotensive populations helps you predict whether you'll see similar effects. Supplements that work for high blood pressure don't necessarily "optimize" already-normal pressure.`,
    simple_explanation: `Normotensive simply means having blood pressure in the normal range—typically below 120/80 mmHg. It's the opposite of hypertensive (high blood pressure, ≥130/80). Medical studies often specify whether participants were normotensive or hypertensive because treatments affect these groups differently. For example, something that lowers blood pressure in hypertensive patients may have little effect in normotensive individuals—their bodies are already regulating blood pressure appropriately and resist further lowering. This distinction matters when evaluating supplements: a study showing beetroot juice lowers blood pressure in hypertensive adults may not mean it will lower YOUR blood pressure if it's already normal.`,
    key_points: `### Key Facts About Normotensive

- **Definition**: Blood pressure below 120/80 mmHg; the "normal" range that indicates healthy cardiovascular function
- **Homeostatic regulation**: Normotensive individuals have properly functioning blood pressure regulation; the body resists lowering it further
- **Study interpretation**: Blood pressure-lowering effects in hypertensives often don't replicate in normotensives; population matters
- **Supplement relevance**: Magnesium, CoQ10, beetroot may lower elevated blood pressure but have minimal effects on already-normal pressure
- **Prevention vs. treatment**: Some interventions prevent hypertension development (exercise, weight control) rather than lowering normal pressure`,
    common_misconceptions: [
      `**Myth:** If a supplement lowers blood pressure in studies, it will lower mine too.\n**Fact:** Most positive studies are in hypertensive populations. If your blood pressure is normal, the supplement may have little effect—your body maintains homeostasis.`,
      `**Myth:** Lower blood pressure is always better.\n**Fact:** Blood pressure below 90/60 (hypotension) causes dizziness, fainting, and inadequate organ perfusion. There's an optimal range, not a "lower is better" rule.`,
      `**Myth:** Normotensive people don't need to worry about blood pressure.\n**Fact:** Blood pressure tends to rise with age. Lifestyle factors (exercise, sodium reduction, weight management) help maintain normotensive status as you age—prevention is valuable.`,
    ],
    examples: [
      "A meta-analysis shows magnesium lowers blood pressure by 5/3 mmHg in hypertensives; subgroup analysis shows only 1/1 mmHg in normotensives—context matters",
      "Someone with blood pressure of 118/75 (normotensive) takes beetroot supplements expecting dramatic reduction; they see minimal change because their BP is already well-regulated",
      "A 30-year-old normotensive who maintains healthy habits has better odds of remaining normotensive at 60 than someone who ignores lifestyle factors",
      "Clinical trials for blood pressure medications specifically recruit hypertensive patients; testing in normotensives would be unethical and uninformative",
    ],
  },
  {
    slug: "nrf2",
    why_it_matters: `Nrf2 is the master switch for your body's antioxidant defenses—understanding it explains why sulforaphane, curcumin, and other plant compounds are marketed as more powerful than antioxidant vitamins. For supplement shoppers, Nrf2 activators represent a different approach than simply taking vitamin C or E. Instead of providing antioxidants directly, Nrf2 activators turn on genes for your body's own antioxidant enzymes (glutathione, SOD, catalase)—which are far more powerful and persistent than dietary antioxidants. This is why broccoli sprouts (sulforaphane) and certain phytonutrients are promoted for "activating your body's defenses" rather than just neutralizing individual free radicals.`,
    simple_explanation: `Nrf2 (Nuclear factor erythroid 2-related factor 2) is a protein inside your cells that controls antioxidant and detoxification genes. Normally, Nrf2 is held inactive by a protein called Keap1. When cells experience stress—oxidative damage, toxins, or certain plant compounds—Keap1 releases Nrf2, which travels to the nucleus and turns on protective genes. These genes produce antioxidant enzymes (glutathione, superoxide dismutase, catalase) and detoxification enzymes (phase II enzymes) that protect cells far more effectively than any antioxidant vitamin. Think of it this way: vitamin C is one soldier fighting free radicals; Nrf2 activation trains an entire army of cellular defenders.`,
    key_points: `### Key Facts About Nrf2

- **Master regulator**: Nrf2 controls expression of 200+ cytoprotective genes including antioxidant enzymes, phase II detoxification, and anti-inflammatory proteins
- **Hormetic activation**: Many Nrf2 activators (sulforaphane, curcumin) are mild cellular stressors that trigger adaptive protective responses
- **Sulforaphane leader**: Broccoli sprout-derived sulforaphane is one of the most potent natural Nrf2 activators, supported by human clinical data
- **Better than antioxidant vitamins**: Nrf2-induced enzymes are more powerful, regenerating, and persistent than dietary antioxidants like vitamin C
- **Decline with age**: Nrf2 activity decreases with aging, contributing to increased oxidative damage and reduced stress resilience in elderly`,
    common_misconceptions: [
      `**Myth:** Taking antioxidant supplements is the best way to fight oxidative stress.\n**Fact:** Activating Nrf2 to boost endogenous antioxidant enzymes is more powerful than dietary antioxidants. One molecule of glutathione peroxidase neutralizes thousands of peroxides; vitamin E neutralizes one.`,
      `**Myth:** If a compound activates Nrf2 in cells, it will work the same way in your body.\n**Fact:** Bioavailability matters. Curcumin potently activates Nrf2 in cell studies but absorbs poorly in humans. Sulforaphane from broccoli sprouts has documented human Nrf2 activation.`,
      `**Myth:** Nrf2 activation is always beneficial.\n**Fact:** Some cancers hijack Nrf2 to protect themselves from chemotherapy. In certain contexts, excessive Nrf2 activity could theoretically protect cancer cells.`,
    ],
    examples: [
      "Sulforaphane from broccoli sprouts (30-60mg) activates Nrf2 in humans, measurably increasing glutathione and detoxification enzyme activity",
      "Aged cells show 50% less Nrf2 activity than young cells—contributing to the increased oxidative damage and reduced resilience seen in aging",
      "Curcumin is a potent Nrf2 activator in vitro but requires enhanced absorption formulations (piperine, lipid-based) for meaningful human effects",
      "Regular broccoli has minimal sulforaphane; broccoli sprouts have 20-100x more, making them the practical food source for Nrf2 activation",
    ],
  },
  {
    slug: "observationalstudy",
    why_it_matters: `Observational studies form the bulk of nutrition research—understanding their limitations helps you interpret supplement claims correctly. For supplement shoppers, most studies cited to support supplements are observational: they observe people's habits and correlate them with health outcomes. The problem is correlation vs. causation: people who take fish oil may be healthier, but is it the fish oil or that health-conscious people take fish oil? Randomized controlled trials (RCTs) are stronger but rare and expensive. Knowing that observational studies can find associations (useful for generating hypotheses) but can't prove causation helps you hold claims to appropriate evidence standards.`,
    simple_explanation: `An observational study watches people living their normal lives and looks for patterns. Researchers observe what people eat, what supplements they take, and what happens to their health—but they don't control anything. This is different from experiments (randomized controlled trials) where researchers assign people to take supplements or placebos. The advantage of observational studies is they're cheaper and can follow thousands of people for decades. The disadvantage is they can only show correlations, not prove causation. If people who take vitamin D have less heart disease, is it because of vitamin D, or because vitamin D takers tend to be wealthier, healthier, and more health-conscious overall? Observational studies can't separate these.`,
    key_points: `### Key Facts About Observational Studies

- **Correlation only**: Observational studies can identify associations but cannot prove cause and effect—confounding variables may explain results
- **Types**: Cross-sectional (snapshot in time), case-control (compare sick vs. healthy), cohort (follow groups over time)
- **Confounding problem**: Health-conscious behavior clusters together; people who exercise also eat better, take supplements, see doctors—hard to isolate single factors
- **Healthy user bias**: Supplement users tend to be healthier overall, making supplements appear beneficial when the benefit comes from overall lifestyle
- **Hypothesis generating**: Observational studies identify promising associations for RCTs to test definitively`,
    common_misconceptions: [
      `**Myth:** Large observational studies are as reliable as clinical trials.\n**Fact:** Size doesn't overcome the correlation-causation problem. The Women's Health Initiative (160,000 women) found hormone therapy beneficial observationally, but the RCT showed harm—observation was misleading.`,
      `**Myth:** Multiple observational studies showing the same thing prove causation.\n**Fact:** If the same confounding factors exist across studies, they'll consistently produce the same misleading correlation. Meta-analyses of flawed studies just combine flawed data.`,
      `**Myth:** Observational studies are worthless.\n**Fact:** They're valuable for identifying patterns, generating hypotheses, and studying things you can't ethically randomize (like smoking). They're just not the final word on supplement efficacy.`,
    ],
    examples: [
      "Observational studies consistently showed vitamin E prevents heart disease; RCTs found it useless or harmful—healthy user bias explained the observation",
      "Observational studies link fish consumption to brain health; is it the omega-3s, or that fish-eaters tend to be more educated and health-conscious?",
      "A cohort study follows 10,000 people for 20 years, recording supplement use and health outcomes—valuable data but correlation only",
      "Case-control studies compare supplement use between cancer patients and healthy controls; recall bias (sick people remembering differently) can skew results",
    ],
  },
  {
    slug: "or",
    why_it_matters: `Odds ratio (OR) is a statistical measure you'll encounter in health research—understanding it helps you interpret study results critically. For supplement shoppers, odds ratios appear in headlines like "Omega-3s linked to 25% lower heart disease risk" (OR=0.75). Knowing what OR actually means helps you avoid overinterpreting small effects. An OR of 1.0 means no association; below 1.0 suggests reduced risk; above 1.0 suggests increased risk. However, OR is not the same as percentage risk reduction—it's more complex and can be misleading. Learning to ask "Is this clinically meaningful?" rather than just "Is it statistically significant?" helps you evaluate supplement claims.`,
    simple_explanation: `An odds ratio compares the odds of something happening in one group versus another. In supplement research, it often compares supplement users to non-users. An OR of 1.0 means no difference—equal odds in both groups. An OR of 0.75 means supplement users have 25% lower odds of the outcome (like disease). An OR of 1.50 means 50% higher odds. The key understanding: odds ratio isn't the same as relative risk, though they're similar when outcomes are rare. When outcomes are common, OR can exaggerate effects. Also, statistical significance (p<0.05) just means the result is unlikely due to chance—it doesn't tell you if the effect is large enough to matter clinically.`,
    key_points: `### Key Facts About Odds Ratio

- **Interpretation**: OR=1 means no association; OR<1 means reduced odds; OR>1 means increased odds; further from 1.0 = stronger association
- **Not percentage risk**: OR of 0.75 doesn't mean 25% risk reduction—it means 25% lower odds, which differs from risk especially when outcomes are common
- **Confidence intervals**: OR with 95% CI crossing 1.0 isn't statistically significant; the true effect could be benefit, harm, or nothing
- **Effect size context**: A statistically significant OR of 0.95 may be clinically meaningless; small effects in huge studies reach significance without being important
- **Rare outcomes**: When outcomes are rare (<10%), OR approximates relative risk; when outcomes are common, OR exaggerates the effect`,
    common_misconceptions: [
      `**Myth:** An odds ratio of 0.50 means risk is cut in half.\n**Fact:** It means odds are halved, which isn't identical to risk being halved. For rare outcomes they're similar, but for common outcomes OR can significantly overstate relative risk.`,
      `**Myth:** Statistically significant odds ratios indicate important effects.\n**Fact:** In large studies, tiny effects can be statistically significant. An OR of 0.95 (p=0.01) might represent only 5 fewer cases per 1,000 people—real but not practically meaningful.`,
      `**Myth:** All studies use odds ratios the same way.\n**Fact:** Case-control studies require OR; cohort studies can use relative risk. Comparing ORs across different study types can be misleading.`,
    ],
    examples: [
      "A study finds vitamin D users have OR=0.80 for fractures—odds are 20% lower, but the absolute risk reduction may be only 2 fewer fractures per 100 people",
      "An OR of 0.50 with 95% CI of 0.30-0.85 is statistically significant (doesn't include 1.0) and suggests a substantial effect",
      "An OR of 0.85 with 95% CI of 0.80-0.91 in a study of 50,000 people is significant but represents a small effect that may not guide individual decisions",
      "Meta-analyses combine odds ratios across studies to estimate overall effect, but garbage-in-garbage-out applies—pooling biased studies doesn't eliminate bias",
    ],
  },
  {
    slug: "omega3",
    why_it_matters: `Omega-3 fatty acids are among the most studied supplements—and the evidence is more nuanced than marketing suggests. For supplement shoppers, omega-3s (EPA and DHA from fish, ALA from plants) have strong evidence for triglyceride reduction and some heart benefits, moderate evidence for inflammation and depression, and weak evidence for many other claimed benefits. The recent REDUCE-IT trial showed prescription-strength EPA (4g/day Vascepa) reduced cardiovascular events, reviving interest. However, standard fish oil doses (1-2g) have shown mixed results. Understanding the dose-response and which outcomes have evidence helps you set realistic expectations.`,
    simple_explanation: `Omega-3 fatty acids are essential fats your body needs but can't make—you must get them from food or supplements. The main types are EPA and DHA (from fatty fish, fish oil, algae) and ALA (from flaxseed, walnuts, chia). EPA and DHA are the biologically active forms; your body converts ALA to them but very inefficiently (5-10%). Omega-3s are incorporated into cell membranes, affecting inflammation, brain function, and heart health. They're most clearly proven to lower triglycerides (high doses reduce them 25-30%). For heart disease prevention, depression, and inflammation, evidence is more mixed and dose-dependent. Most Americans eat far fewer omega-3s than optimal, making supplementation reasonable even if benefits are modest.`,
    key_points: `### Key Facts About Omega-3 Fatty Acids

- **Types matter**: EPA and DHA are active forms from fish/algae; ALA from plants converts poorly (5-10%)—EPA/DHA supplements are more directly beneficial
- **Triglyceride effect**: Strong evidence that 2-4g EPA+DHA daily reduces triglycerides 25-30%—FDA-approved at prescription doses for this
- **Cardiovascular mixed**: Large trials show mixed results at typical doses (1-2g); REDUCE-IT showed benefit at high-dose pure EPA (4g), renewing interest
- **Brain and mood**: Moderate evidence for depression (EPA-dominant formulas work best) and brain health; not a cure-all but may help as adjunct
- **Anti-inflammatory**: Omega-3s reduce inflammatory markers (CRP, IL-6) at higher doses; compete with pro-inflammatory omega-6s for incorporation into membranes`,
    common_misconceptions: [
      `**Myth:** All omega-3s are equally beneficial.\n**Fact:** EPA and DHA from marine sources have the evidence; ALA from plants converts poorly to EPA/DHA. Flaxseed oil isn't equivalent to fish oil for most outcomes.`,
      `**Myth:** Any fish oil supplement dose is effective.\n**Fact:** Many benefits require 2-4g EPA+DHA daily. Standard capsules contain 300mg combined; achieving therapeutic doses requires multiple capsules or concentrated formulas.`,
      `**Myth:** Fish oil supplements are equivalent to eating fish.\n**Fact:** Eating fish provides omega-3s plus protein, selenium, and may replace less healthy foods. Some fish benefits may not translate to isolated supplements.`,
    ],
    examples: [
      "Someone with triglycerides of 300 mg/dL takes 4g EPA+DHA daily for 12 weeks; triglycerides drop to 210—a clinically meaningful reduction",
      "A vegetarian takes 250mg algae-sourced DHA daily to maintain omega-3 status without fish consumption—algae is the original source fish get their DHA from",
      "Standard 1000mg fish oil capsule contains only 300mg EPA+DHA; reaching 2g daily requires 6-7 capsules or concentrated formulas with 500-900mg per capsule",
      "EPA-dominant formulas (>60% EPA) show stronger effects for depression than balanced EPA/DHA formulas in clinical trials",
    ],
  },
  {
    slug: "osteomalach",
    why_it_matters: `Osteomalacia is what happens when adults don't get enough vitamin D—understanding it shows why severe deficiency is a medical problem, not just a optimization target. For supplement shoppers, osteomalacia represents the extreme end of vitamin D deficiency: bones that soften because they can't mineralize properly. Unlike osteoporosis (where bone is lost), osteomalacia means bone can't harden because calcium and phosphorus can't be deposited without adequate vitamin D. This causes bone pain, muscle weakness, and fractures. Knowing osteomalacia helps you understand that while everyone debates optimal vitamin D levels, severe deficiency is unambiguously harmful. Preventing osteomalacia is vitamin D's clearest, most proven benefit.`,
    simple_explanation: `Osteomalacia literally means "soft bones"—it's the adult form of rickets that happens when severe vitamin D deficiency prevents bones from mineralizing properly. Your bones are constantly being remodeled: old bone is removed and new bone is laid down. The new bone matrix (osteoid) needs calcium and phosphorus to harden. Vitamin D is essential for absorbing calcium from food and regulating calcium-phosphorus balance. Without enough vitamin D, the new bone remains soft and rubbery instead of becoming hard. This causes diffuse bone pain (often misdiagnosed as fibromyalgia), muscle weakness, and bones that fracture easily. Osteomalacia is rare in developed countries but still occurs in elderly, institutionalized, or heavily covered populations with minimal sun exposure.`,
    key_points: `### Key Facts About Osteomalacia

- **Soft, unmineralized bone**: Unlike osteoporosis (bone loss), osteomalacia is inadequate mineralization—bone matrix is laid down but can't harden
- **Vitamin D deficiency cause**: Usually caused by severe vitamin D deficiency (25(OH)D <10-12 ng/mL), sometimes by phosphorus deficiency or rare genetic conditions
- **Symptoms**: Diffuse bone pain (especially hips, pelvis, lower back), muscle weakness, waddling gait, increased fracture risk
- **Reversible**: Unlike osteoporosis, osteomalacia can be fully reversed with vitamin D supplementation—bone mineralizes once vitamin D is restored
- **Risk groups**: Elderly homebound, heavily veiled women, people with malabsorption (celiac, gastric bypass), severe obesity`,
    common_misconceptions: [
      `**Myth:** Osteomalacia and osteoporosis are the same thing.\n**Fact:** They're different conditions. Osteoporosis = bone loss (less bone overall). Osteomalacia = soft bone (bone present but not mineralized). Treatments and causes differ.`,
      `**Myth:** Osteomalacia is rare and not a real concern.\n**Fact:** While overt osteomalacia is uncommon, subclinical osteomalacia (early softening) may be underdiagnosed. Elderly, institutionalized, and certain ethnic groups remain at real risk.`,
      `**Myth:** You'd know if you had osteomalacia.\n**Fact:** Symptoms (bone pain, fatigue, weakness) are vague and often attributed to aging, fibromyalgia, or other conditions. Many cases are missed until fractures occur.`,
    ],
    examples: [
      "An elderly homebound woman with bone pain and muscle weakness is found to have vitamin D of 8 ng/mL—high-dose vitamin D treatment over 3 months resolves her symptoms",
      "Someone with celiac disease has osteomalacia despite sun exposure because intestinal damage prevents vitamin D and calcium absorption",
      "X-rays showing pseudofractures (Looser zones) suggest osteomalacia; these are incomplete stress fractures where bone can't mineralize and repair properly",
      "Treatment typically requires high-dose vitamin D (50,000 IU weekly) initially, then maintenance dosing once levels normalize—monitoring is important",
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
  console.log("=== BATCH 14: Enhancing Glossary Terms 131-140 ===\n");

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
