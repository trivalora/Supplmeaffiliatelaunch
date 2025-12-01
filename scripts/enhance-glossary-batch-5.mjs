/**
 * Batch 5: Enhance glossary terms 41-50 (alphabetically)
 * Terms: Confidence Interval, Contraindications, Cortisol, Creatine Kinase,
 *        Cross-Sectional Study, CRP, Cytokines, Deficiency, DHA, Diastolic Blood Pressure
 *
 * Run: node scripts/enhance-glossary-batch-5.mjs
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
    slug: "ci",
    why_it_matters: `Confidence intervals are one of the most important statistical concepts for evaluating supplement research, yet they're often ignored or misunderstood. When a study says "vitamin D reduced fracture risk by 20%," the confidence interval tells you whether that number is reliable or could easily be zero—or even negative. For supplement shoppers, understanding confidence intervals helps you distinguish between solid findings and statistical noise. A supplement with a "50% benefit" and a wide confidence interval crossing zero is far less convincing than one with a "15% benefit" where the interval stays firmly positive. This knowledge protects you from products marketed on shaky science.`,
    simple_explanation: `Imagine you're trying to measure the average height of adults in your city. You can't measure everyone, so you measure 100 people and get an average of 5'7". But you know that's just an estimate—the true average might be slightly different. A confidence interval gives you a range: "We're 95% confident the true average is between 5'6" and 5'8"." In supplement research, when a study says fish oil reduces triglycerides by 20% with a 95% CI of 15-25%, it means we're reasonably confident the true effect is somewhere in that range. If the CI were -5% to 45%, the effect might be nothing—or huge—we can't tell. Wide intervals mean uncertainty; narrow intervals mean precision.`,
    key_points: `### Key Facts About Confidence Intervals

- **95% convention**: Most studies use 95% confidence intervals, meaning if the study were repeated 100 times, about 95 of those intervals would contain the true effect
- **Width indicates precision**: Narrow CI = precise estimate; wide CI = high uncertainty. Small studies typically have wider intervals than large studies
- **Crossing zero matters**: If a 95% CI for an effect includes zero (or 1.0 for ratios), the effect isn't statistically significant—it might not exist at all
- **More informative than p-values**: CIs show effect size AND precision, while p-values only indicate whether an effect exists—CIs give you more complete information
- **Overlapping intervals**: When comparing two treatments, overlapping confidence intervals suggest the difference between them may not be meaningful`,
    common_misconceptions: [
      `**Myth:** A 95% confidence interval means 95% probability the true value is in the range.\n**Fact:** Frequentist interpretation: if we repeated the experiment many times, 95% of calculated intervals would contain the true value. Any specific interval either contains the true value or doesn't—we just don't know which.`,
      `**Myth:** If two confidence intervals overlap, the treatments are equivalent.\n**Fact:** Overlapping CIs don't necessarily mean no significant difference exists. Statistical tests comparing groups can find significant differences even with some CI overlap. Non-overlapping CIs definitively indicate difference; overlap requires further analysis.`,
      `**Myth:** Narrow confidence intervals mean the result is correct.\n**Fact:** Narrow CIs indicate precision of measurement, not accuracy. A precisely measured wrong answer is still wrong. Systematic biases in study design aren't captured in confidence intervals.`,
    ],
    examples: [
      "A fish oil study shows 25% triglyceride reduction (95% CI: 20-30%)—this narrow interval suggests a reliable, meaningful effect",
      "A vitamin E study shows 15% reduced mortality (95% CI: -5% to 35%)—the interval crosses zero, meaning the effect might not exist or could even be harmful",
      'A supplement shows "50% improvement" but with CI of 10-90%—technically significant but so imprecise that the true effect could be minimal',
      "Two supplements show 20% (CI: 15-25%) and 18% (CI: 13-23%) benefits—the overlapping intervals suggest they may be similarly effective",
    ],
  },
  {
    slug: "contraindications",
    why_it_matters: `Contraindications are conditions or circumstances where a supplement (or drug) should NOT be taken because it could cause harm. For supplement shoppers, understanding contraindications is literally a safety issue—certain supplements that are beneficial for most people can be dangerous or even life-threatening for others. The supplement industry's "natural = safe" marketing obscures real risks. Iron is dangerous with hemochromatosis; vitamin K interferes with blood thinners; St. John's Wort can render medications ineffective; high-dose fish oil increases bleeding risk before surgery. Knowing your personal contraindications before buying supplements is essential due diligence.`,
    simple_explanation: `Think of contraindications as the "do not use if..." warnings on products. They identify situations where something normally beneficial becomes harmful. You wouldn't take a blood thinner before surgery—that's a contraindication. Supplements have them too, but they're often not prominently labeled. A condition you have, a medication you take, or even an upcoming medical procedure might make an otherwise safe supplement dangerous. For example, melatonin is generally safe, but it's contraindicated in people with autoimmune diseases because it modulates immunity. These aren't rare edge cases—millions of people have conditions that contraindicate common supplements.`,
    key_points: `### Key Facts About Contraindications

- **Absolute vs. relative**: Absolute contraindications mean "never use"; relative contraindications mean "use with caution" or "only if benefits outweigh risks"
- **Drug interactions**: Many supplement contraindications involve interactions with medications—St. John's Wort alone interacts with over 500 drugs
- **Condition-specific**: The same supplement can be helpful for one condition and harmful for another—iron helps anemia but worsens hemochromatosis
- **Surgery considerations**: Many supplements (fish oil, vitamin E, garlic, ginkgo, ginger) should be stopped 1-2 weeks before surgery due to bleeding risk
- **Pregnancy and nursing**: Many supplements lack safety data in pregnancy; contraindicated by default due to unknown risk to fetus`,
    common_misconceptions: [
      `**Myth:** Natural supplements don't have contraindications like drugs do.\n**Fact:** Supplements absolutely have contraindications. St. John's Wort can cause serotonin syndrome with antidepressants. High-dose fish oil can cause dangerous bleeding in people on blood thinners. Natural doesn't mean free of risks.`,
      `**Myth:** If a supplement is sold over-the-counter, it's safe for everyone.\n**Fact:** OTC availability reflects general population safety, not individual safety. Iron is OTC but deadly for people with hemochromatosis. The FDA doesn't require supplements to list all contraindications.`,
      `**Myth:** My doctor would have told me if a supplement was contraindicated.\n**Fact:** Many doctors aren't trained in supplement interactions, and patients often don't report supplement use. It's YOUR responsibility to research contraindications and inform all healthcare providers of everything you take.`,
    ],
    examples: [
      "Vitamin K is contraindicated with warfarin (Coumadin) because it directly counteracts the blood-thinning effect",
      "Iron supplements are absolutely contraindicated in hemochromatosis—the body already has toxic iron overload",
      "Ginkgo biloba should be stopped before surgery due to increased bleeding risk; it's also contraindicated with blood thinners",
      "Melatonin is relatively contraindicated in autoimmune conditions because it can stimulate immune activity",
    ],
  },
  {
    slug: "cortisol",
    why_it_matters: `Cortisol has become the villain of wellness marketing, blamed for everything from belly fat to brain fog to burnout. For supplement shoppers, the "cortisol-lowering" supplement market is enormous—and largely based on oversimplified science. While chronically elevated cortisol is harmful, cortisol itself is essential for life, energy, immune function, and stress response. The goal isn't minimizing cortisol but optimizing its rhythm: high in the morning (for alertness), declining through the day, lowest at night (for sleep). Understanding cortisol's actual biology helps you evaluate supplements claiming to "balance" or "lower" it more critically.`,
    simple_explanation: `Cortisol is your body's built-in alarm system and energy manager. When you wake up, cortisol surges (the "cortisol awakening response") to get you alert and moving. Throughout the day, it helps regulate blood sugar, reduce inflammation, and manage stress. When you face a threat, cortisol spikes to provide emergency energy. The problem isn't cortisol existing—it's when the rhythm gets disrupted. Chronic stress can keep cortisol elevated when it should be low (especially at night), disrupting sleep, promoting fat storage, and causing anxiety. But artificially suppressing cortisol isn't the answer either—you need it for normal function. The goal is healthy rhythm, not minimal cortisol.`,
    key_points: `### Key Facts About Cortisol

- **Essential for life**: Without cortisol (Addison's disease), you'd have severe fatigue, low blood pressure, and couldn't survive stress—cortisol isn't the enemy
- **Natural rhythm**: Cortisol peaks 30-45 minutes after waking and should decline through the day, reaching lowest levels around midnight
- **Chronic vs. acute**: Acute cortisol spikes are healthy responses; chronically elevated baseline cortisol (often from chronic stress) causes problems
- **Testing matters**: Single cortisol tests are nearly useless; cortisol varies dramatically throughout the day. 4-point salivary cortisol mapping shows actual rhythm
- **Evidence-backed support**: Ashwagandha and phosphatidylserine have reasonable evidence for moderating cortisol; most "adrenal support" products don't`,
    common_misconceptions: [
      `**Myth:** Lower cortisol is always better.\n**Fact:** Cortisol is essential for waking up, responding to stress, controlling inflammation, and maintaining blood sugar. Too-low cortisol causes fatigue, weakness, and inability to handle stress. Optimal is about rhythm, not minimization.`,
      `**Myth:** "Adrenal fatigue" from chronic stress causes low cortisol.\n**Fact:** "Adrenal fatigue" isn't a recognized medical diagnosis. Chronic stress more often causes cortisol dysregulation (elevated or flat rhythm) than true cortisol deficiency. Actual adrenal insufficiency is a serious medical condition requiring hormone replacement.`,
      `**Myth:** Cortisol causes belly fat directly.\n**Fact:** Chronically elevated cortisol can promote abdominal fat storage, but the relationship is complex. Stress eating, poor sleep, and reduced activity from stress contribute more to fat gain than cortisol itself in most people.`,
    ],
    examples: [
      "Ashwagandha at 300-600mg daily has shown 15-30% reductions in cortisol in chronically stressed individuals across multiple studies",
      "Someone with healthy cortisol rhythm takes a cortisol-lowering supplement and feels MORE fatigued because morning cortisol is necessary for energy",
      'A 4-point salivary cortisol test reveals high nighttime cortisol explaining insomnia—better than a random blood test showing "normal" levels',
      "Phosphatidylserine (300-800mg) has evidence for blunting excessive cortisol response to exercise stress, popular among athletes",
    ],
  },
  {
    slug: "creatinekinase",
    why_it_matters: `Creatine kinase (CK) is a muscle enzyme that becomes elevated when muscle tissue is damaged. For supplement shoppers—especially athletes—understanding CK is important because elevated levels can indicate both normal adaptation (post-workout) and problematic overtraining or injury. Additionally, the muscle symptoms some people attribute to supplements might actually show up as elevated CK, helping distinguish real muscle effects from perceived ones. If you're tracking recovery, investigating muscle soreness, or concerned about rhabdomyolysis from extreme training, CK is the relevant biomarker.`,
    simple_explanation: `Creatine kinase is an enzyme found inside muscle cells. When muscle fibers are damaged—from exercise, injury, or medication side effects—they leak CK into the bloodstream. Think of it as a muscle damage meter: low CK means minimal damage, high CK means significant muscle breakdown. After intense exercise, CK can rise 10-20x normal levels, peaking 24-72 hours later. This is usually normal adaptation. But extremely high CK (5-10x normal or more) can indicate rhabdomyolysis—dangerous muscle breakdown that can damage kidneys. If you experience severe muscle pain, weakness, and dark urine after extreme exercise or starting new medications, checking CK is important.`,
    key_points: `### Key Facts About Creatine Kinase

- **Normal range context**: Normal CK is roughly 30-170 U/L, but athletes often have higher baselines; what matters more is sudden spikes above YOUR normal
- **Exercise-induced elevation**: Intense exercise, especially eccentric (lengthening) movements, can raise CK 10-20x normal; this typically resolves in 3-7 days
- **Statin connection**: Statins can cause muscle breakdown (statin myopathy) detected as elevated CK—one reason some people supplement CoQ10 with statins
- **Rhabdomyolysis warning**: CK levels >10,000 U/L with dark urine and severe muscle pain is a medical emergency—extreme training, crush injuries, or certain drugs can cause this
- **Not the same as creatine**: Despite similar names, creatine kinase (the enzyme) is different from creatine (the supplement)—they're related in the same metabolic pathway but distinct molecules`,
    common_misconceptions: [
      `**Myth:** High CK after exercise means you're overtraining.\n**Fact:** CK elevation after hard training is normal and doesn't indicate harm unless extremely high or accompanied by concerning symptoms. It's part of the muscle adaptation process. Persistent elevation without recovery suggests overtraining.`,
      `**Myth:** Creatine supplements raise creatine kinase levels.\n**Fact:** Creatine (the supplement) doesn't directly raise CK levels. Creatine kinase is released from damaged muscle, not from creatine supplementation. If anything, creatine may help protect muscle and reduce CK elevation after exercise.`,
      `**Myth:** CK testing is useful for routine fitness monitoring.\n**Fact:** CK is highly variable day-to-day and affected by any recent exercise. It's useful for diagnosing muscle disorders or investigating unexplained symptoms, not routine fitness tracking.`,
    ],
    examples: [
      "A marathon runner's CK rises to 3,000 U/L two days post-race—elevated but typical for extreme endurance events; resolves within a week",
      "Someone on statins develops muscle aches and CK test shows 500 U/L (mildly elevated), suggesting statin myopathy—may need dose adjustment or CoQ10",
      "CrossFit rhabdomyolysis: a newcomer does extreme workout, develops severe arm pain, dark urine, and CK >20,000 U/L—requires hospitalization",
      "An athlete's baseline CK is always around 300 U/L (higher than textbook normal) because they train regularly—their normal, not pathological",
    ],
  },
  {
    slug: "crosssectionalstudy",
    why_it_matters: `Cross-sectional studies are the most common type of nutrition and supplement research you'll encounter, yet they're among the weakest for proving causation. For supplement shoppers, recognizing cross-sectional studies helps you appropriately weight the evidence behind product claims. When you read "People with higher vitamin D levels have lower rates of depression," that's likely cross-sectional data—it can't tell you whether vitamin D prevents depression, or whether depressed people go outside less and therefore have lower vitamin D. These studies generate hypotheses but shouldn't drive supplement purchasing decisions on their own.`,
    simple_explanation: `A cross-sectional study is like taking a photograph of a population at one moment in time. Researchers measure things simultaneously—vitamin D levels AND depression rates, omega-3 intake AND heart disease, etc.—and look for correlations. If people with higher vitamin D have less depression, that's interesting, but you can't tell which came first or if there's a causal connection. Maybe healthy, active people both go outside more (higher D) and are less depressed. Maybe depression reduces appetite for vitamin D-rich foods. Maybe an unknown third factor affects both. Cross-sectional studies identify associations worth investigating but can't establish cause-and-effect relationships.`,
    key_points: `### Key Facts About Cross-Sectional Studies

- **Snapshot in time**: Measures exposure and outcome simultaneously—can't determine temporal sequence (which came first)
- **Association ≠ causation**: Finding two things correlated doesn't mean one causes the other; confounding variables may explain the relationship
- **Reverse causation risk**: The outcome might cause the exposure rather than vice versa—sick people might eat differently BECAUSE they're sick
- **Quick and inexpensive**: Cross-sectional studies are relatively easy to conduct, which is why they're so common in nutrition research
- **Hypothesis generating**: Best used to identify patterns worth investigating in more rigorous study designs (RCTs, prospective cohorts)`,
    common_misconceptions: [
      `**Myth:** Large cross-sectional studies provide strong evidence.\n**Fact:** Sample size improves precision of the association measurement but doesn't address whether the association is causal. A huge cross-sectional study still can't prove causation.`,
      `**Myth:** If multiple cross-sectional studies agree, the finding is reliable.\n**Fact:** Multiple studies can replicate an association that isn't causal if they share the same confounding factors. Consistency across study types (including RCTs) is more convincing than consistency within one study type.`,
      `**Myth:** Cross-sectional studies showing supplement users are healthier prove supplements work.\n**Fact:** Supplement users systematically differ from non-users in many ways—they often exercise more, smoke less, and eat better. These differences can explain health associations without the supplements being responsible.`,
    ],
    examples: [
      "A study finds people taking multivitamins have 20% less heart disease—but can't determine if vitamins caused this or if health-conscious people take vitamins AND live healthier overall",
      "Cross-sectional data shows magnesium deficiency correlates with anxiety—doesn't prove supplementation helps; maybe anxiety increases magnesium excretion",
      "Higher omega-3 blood levels associate with less depression in cross-sectional studies, but RCTs of supplementation show mixed results—associations didn't prove causation",
      "Vitamin D levels correlate with many diseases in cross-sectional studies, leading to supplementation trials that often show disappointingly little benefit",
    ],
  },
  {
    slug: "crp",
    why_it_matters: `C-Reactive Protein (CRP) is one of the most clinically useful inflammatory markers, with high-sensitivity CRP (hs-CRP) specifically predicting cardiovascular risk independent of cholesterol. For supplement shoppers interested in reducing inflammation, CRP provides an objective way to measure whether interventions actually work. Some supplements—particularly omega-3s, curcumin, and certain polyphenols—have evidence for reducing CRP, while others claiming "anti-inflammatory" effects don't move this marker. Tracking CRP gives you data rather than relying on subjective feelings of "inflammation."`,
    simple_explanation: `CRP is a protein your liver produces in response to inflammation anywhere in your body. Think of it as a fire alarm—it doesn't tell you WHERE the fire is, just that there IS a fire (inflammation) somewhere. When infection, injury, or chronic inflammation occurs, CRP rises rapidly. For cardiovascular risk, high-sensitivity CRP (hs-CRP) detects low-level chronic inflammation that contributes to atherosclerosis. Levels under 1.0 mg/L indicate low risk; 1.0-3.0 is moderate; over 3.0 is high risk (or current infection/inflammation). Unlike some markers, CRP changes relatively quickly—within weeks to months—making it useful for tracking interventions.`,
    key_points: `### Key Facts About CRP

- **Two tests exist**: Regular CRP (detects large elevations from infection/acute inflammation) and high-sensitivity CRP (detects subtle elevations relevant to cardiovascular risk)
- **Cardiovascular prediction**: hs-CRP above 3.0 mg/L doubles cardiovascular risk compared to below 1.0, independent of cholesterol levels
- **Non-specific**: CRP rises from any inflammation—infection, autoimmune disease, injury, obesity, chronic disease—so context matters
- **Responsive to intervention**: Lifestyle changes (weight loss, exercise, diet) and some supplements can lower CRP within weeks to months
- **Evidence-backed reducers**: Omega-3s at therapeutic doses, curcumin, and Mediterranean diet consistently lower CRP in clinical trials`,
    common_misconceptions: [
      `**Myth:** High CRP means you have heart disease.\n**Fact:** CRP indicates inflammation risk, not existing disease. It's elevated by many conditions—a recent cold, autoimmune flare, or even intense exercise can temporarily raise it. One high reading needs context and follow-up.`,
      `**Myth:** If your CRP is low, you don't have inflammation.\n**Fact:** CRP reflects systemic inflammation but may not capture localized inflammation (like in joints or gut). Normal CRP doesn't rule out all inflammatory conditions.`,
      `**Myth:** Any "anti-inflammatory" supplement will lower CRP.\n**Fact:** Many supplements marketed as anti-inflammatory don't have evidence for actually reducing CRP. Some claims are based on cell studies or weak evidence that doesn't translate to measurable CRP changes in humans.`,
    ],
    examples: [
      "High-dose omega-3s (2-4g EPA/DHA daily) typically reduce CRP by 15-30% in people with elevated levels",
      "Someone with hs-CRP of 4.5 mg/L (high risk) loses 20 pounds and sees it drop to 1.8 mg/L—lifestyle changes work",
      "Curcumin supplementation (500-1000mg standardized extract) has shown CRP reductions of 0.5-1.0 mg/L in multiple studies",
      "A person's CRP is 8.0 mg/L—too high for cardiovascular interpretation alone; need to rule out infection or other acute inflammation first",
    ],
  },
  {
    slug: "cytokines",
    why_it_matters: `Cytokines are the signaling molecules of your immune system, orchestrating everything from fighting infections to regulating inflammation to (unfortunately) causing the misery of colds and autoimmune diseases. For supplement shoppers, cytokine science underlies many "immune support" and "anti-inflammatory" claims. Some supplements do modulate cytokine production—vitamin D affects numerous cytokines, omega-3s shift the inflammatory/anti-inflammatory balance, and elderberry influences cytokine release during colds. Understanding cytokines helps you evaluate these claims and understand why boosting immunity isn't always good (sometimes you want to calm overactive cytokine responses).`,
    simple_explanation: `Cytokines are the communication system of your immune cells—molecular text messages that cells send to coordinate immune responses. Some cytokines are pro-inflammatory (like IL-6, TNF-α, IL-1β), recruiting immune cells to fight threats and causing the redness, swelling, and fever of infection. Others are anti-inflammatory (like IL-10), calming things down after the threat passes. Problems arise when this communication goes haywire: too many pro-inflammatory cytokines cause chronic inflammation and autoimmune diseases; too few mean you can't fight infections. COVID-19's dangerous "cytokine storm" showed what happens when cytokine production becomes dangerously excessive. Balance, not maximization, is the goal.`,
    key_points: `### Key Facts About Cytokines

- **Pro vs. anti-inflammatory**: IL-1, IL-6, TNF-α drive inflammation (necessary for fighting infections); IL-10, TGF-β calm inflammation (necessary for resolution)
- **Cytokine storm danger**: Excessive cytokine release (seen in severe COVID-19, sepsis) can be fatal—"boosting immunity" isn't always beneficial
- **Chronic disease connection**: Elevated pro-inflammatory cytokines (especially IL-6) are associated with cardiovascular disease, diabetes, depression, and aging
- **Diet modulates cytokines**: Mediterranean diet, omega-3s, and various polyphenols shift cytokine balance toward less inflammation in clinical studies
- **Individual variation**: People have different baseline cytokine levels and responses to stimuli—genetic and lifestyle factors both play roles`,
    common_misconceptions: [
      `**Myth:** "Boosting immunity" is always beneficial.\n**Fact:** An overactive immune system causes autoimmune diseases and allergies. Cytokine storms can be deadly. The goal is balanced, appropriate immune responses—not maximum immune activation.`,
      `**Myth:** You can measure your cytokine levels with routine testing.\n**Fact:** Cytokine testing isn't standard clinical practice because levels fluctuate rapidly, vary by time of day, and normal ranges aren't well-established for general health. It's mainly used in research or specific disease contexts.`,
      `**Myth:** Supplements that affect cytokines in cell studies will have the same effects in humans.\n**Fact:** Cell culture studies often use concentrations far higher than achievable in humans. A supplement "reducing TNF-α in vitro" may have no measurable effect on human cytokine levels at realistic doses.`,
    ],
    examples: [
      "Omega-3s at 2-4g daily shift the ratio of pro/anti-inflammatory cytokines, reducing IL-6 and TNF-α production",
      "Vitamin D deficiency is associated with elevated inflammatory cytokines; repletion can help normalize cytokine balance",
      "Elderberry extract may increase cytokine production when fighting a cold—helpful for infection clearance but theoretically concerning if already having cytokine storm",
      "Curcumin's anti-inflammatory effects work partly by inhibiting NF-κB, the master switch for pro-inflammatory cytokine production",
    ],
  },
  {
    slug: "deficiency",
    why_it_matters: `Understanding deficiency is crucial for supplement shoppers because it determines whether supplementation is genuinely needed or a waste of money. A true deficiency means your body doesn't have enough of a nutrient to function optimally, causing measurable symptoms or health consequences. For deficient individuals, supplementation can be transformative—correcting B12 deficiency resolves neurological symptoms; fixing iron deficiency eliminates fatigue; replenishing vitamin D improves multiple health markers. But for people who aren't deficient, supplements often provide no additional benefit and sometimes cause harm. The question isn't "is this nutrient good?" but "am I actually deficient?"`,
    simple_explanation: `Deficiency means your body has less of something than it needs to function properly. Think of it like a car running low on oil—it can still drive for a while, but eventually damage occurs. Nutrient deficiencies work similarly: mild deficiency might cause subtle symptoms (fatigue, slow healing, mood issues), while severe deficiency causes disease (scurvy from vitamin C, beriberi from thiamine, anemia from iron). The key insight is that supplementation benefits primarily exist in the journey from deficient to sufficient. Once you're sufficient, more doesn't help—your car doesn't run better with MORE oil than it needs. This is why testing matters: supplements targeting actual deficiencies work; supplements taken by already-replete people usually don't.`,
    key_points: `### Key Facts About Deficiency

- **Clinical vs. subclinical**: Overt deficiency causes obvious disease; subclinical deficiency causes subtle dysfunction that standard tests might miss
- **Common deficiencies**: Vitamin D (40%+ of population), magnesium (~50%), iron (especially women), B12 (especially elderly and vegetarians), and omega-3s are widespread
- **Testing before supplementing**: Reputable testing exists for most nutrients; supplementing without knowing your status is guessing that might waste money or cause harm
- **Optimal vs. normal**: "Normal" lab ranges include the middle 95% of the population—including sick people. Optimal levels for health may differ from merely "normal"
- **Absorption matters**: You can have deficiency despite adequate dietary intake if absorption is impaired (celiac, gastric bypass, low stomach acid, etc.)`,
    common_misconceptions: [
      `**Myth:** If I eat a balanced diet, I can't be deficient.\n**Fact:** Modern food is often lower in nutrients than historical equivalents (depleted soils, storage, processing). Geographic factors affect vitamin D. Individual absorption varies. Medications deplete nutrients. Balanced diet doesn't guarantee sufficiency.`,
      `**Myth:** More is always better if a little bit helps deficiency.\n**Fact:** Correcting deficiency helps. Once replete, additional supplementation provides no benefit and may cause harm. Iron supplementation helps anemia but causes organ damage in iron-replete people.`,
      `**Myth:** Deficiency always causes obvious symptoms.\n**Fact:** Subclinical deficiency can exist for years without dramatic symptoms. Vitamin D deficiency might just cause vague fatigue; magnesium deficiency might manifest as muscle tension or poor sleep. Testing reveals what symptoms might not.`,
    ],
    examples: [
      "A person with vitamin D level of 15 ng/mL (deficient) supplements to reach 50 ng/mL and notices improved energy, mood, and fewer infections",
      "Someone with normal B12 takes high-dose B12 supplements and notices nothing—they weren't deficient, so supplementation had no effect",
      "A vegetarian develops B12 deficiency over years because plants don't contain B12; neurological symptoms appear before anemia",
      "Iron deficiency shows as ferritin <30 ng/mL with symptoms; taking iron when ferritin is already 100+ provides no benefit and potential harm",
    ],
  },
  {
    slug: "dha",
    why_it_matters: `DHA (docosahexaenoic acid) is the omega-3 fatty acid that makes up a significant portion of your brain and retina, making it especially important for neurological health. For supplement shoppers, understanding DHA is crucial because omega-3 marketing often lumps EPA and DHA together when they have different functions. DHA is preferentially important for brain structure, cognitive development, and neurological health, while EPA is more associated with anti-inflammatory effects and cardiovascular benefits. Knowing this helps you choose the right omega-3 product for your specific goals—a brain-focused supplement should be DHA-heavy; a heart-focused one might emphasize EPA.`,
    simple_explanation: `DHA is an omega-3 fat that's highly concentrated in your brain (about 15-20% of your brain's fat) and eyes (makes up over 50% of the retinal photoreceptors). Think of it as structural material—your brain literally needs DHA to build and maintain itself, especially during development and aging. This is why DHA is added to infant formula and why pregnant women are advised to take it for fetal brain development. Unlike EPA (the other main omega-3), which mainly fights inflammation, DHA is incorporated into cell membranes where it affects how neurons communicate. The best direct source is fatty fish; algae-derived DHA provides a vegetarian option since fish get their DHA from algae anyway.`,
    key_points: `### Key Facts About DHA

- **Brain structural component**: DHA comprises 15-20% of the brain's fatty acids; it's essential for neuronal membrane structure and function
- **Development critical periods**: DHA is crucial during pregnancy (fetal brain development), infancy (rapid brain growth), and aging (maintaining cognitive function)
- **Different from EPA**: While often combined in fish oil, DHA and EPA have different primary functions—DHA for structure/cognition, EPA for inflammation/cardiovascular
- **Conversion is poor**: The body can convert plant omega-3 (ALA from flax, chia) to DHA, but conversion is only 1-5%—not sufficient to meet needs for most people
- **Eye health**: DHA is the primary structural fat in retinal photoreceptors; adequate DHA intake supports visual function and may protect against macular degeneration`,
    common_misconceptions: [
      `**Myth:** Fish oil EPA and DHA are interchangeable.\n**Fact:** EPA and DHA have different functions. DHA is structural and cognitive-focused; EPA is more anti-inflammatory. Products with different ratios serve different purposes—check labels rather than assuming all fish oil is the same.`,
      `**Myth:** Flaxseed oil provides adequate DHA.\n**Fact:** Flaxseed provides ALA (a plant omega-3), not DHA. Conversion of ALA to DHA is roughly 1-5% efficient—you'd need to consume enormous amounts of flax to get meaningful DHA. Preformed DHA (fish or algae) is far more efficient.`,
      `**Myth:** DHA benefits are only important for pregnant women and infants.\n**Fact:** While DHA is critical for development, adults need ongoing DHA intake for brain maintenance, especially with aging. Cognitive decline and neurodegeneration are associated with low DHA status.`,
    ],
    examples: [
      "Pregnant women are recommended 200-300mg DHA daily for fetal brain development—many prenatal vitamins include DHA specifically",
      "Infant formulas are required to contain DHA (and often ARA) because breast milk naturally provides these essential fatty acids",
      "An algae-based DHA supplement provides 200-400mg per capsule—a viable option for vegetarians/vegans or those concerned about fish sustainability",
      "Cognitive studies often use DHA-dominant formulations (e.g., 1000mg DHA) rather than EPA-heavy fish oils for brain-related endpoints",
    ],
  },
  {
    slug: "diastolic",
    why_it_matters: `Diastolic blood pressure—the bottom number in a blood pressure reading—tells you the pressure in your arteries between heartbeats, when your heart is resting and refilling. For supplement shoppers, understanding diastolic pressure is important because it behaves differently than systolic pressure and provides different health information. While systolic pressure gets more attention, chronically elevated diastolic pressure in younger adults is a strong predictor of future cardiovascular disease. Some supplements that lower systolic pressure don't equally affect diastolic, and vice versa. Knowing your numbers helps you track whether interventions are actually working.`,
    simple_explanation: `When your heart beats, it squeezes blood out into your arteries—that's systolic pressure (the top number). Between beats, your heart relaxes and refills with blood, and the pressure in your arteries drops—that's diastolic pressure (the bottom number). Think of it like waves: systolic is the wave peak, diastolic is the trough. A reading of 120/80 means peak pressure of 120 mmHg and trough pressure of 80 mmHg. High diastolic pressure (above 80 mmHg) means your arteries stay under significant pressure even when your heart rests. This chronic pressure damages artery walls over time, especially the smaller blood vessels that feed vital organs like your kidneys and brain.`,
    key_points: `### Key Facts About Diastolic Blood Pressure

- **Normal range**: Normal is under 80 mmHg; 80-89 is Stage 1 hypertension; 90+ is Stage 2 hypertension
- **Age relationship**: Diastolic pressure tends to rise until age 50-60, then may actually decrease while systolic continues rising (explaining wide pulse pressure in elderly)
- **Young adult predictor**: Elevated diastolic pressure in people under 50 is a stronger predictor of future cardiovascular events than systolic elevation
- **Arterial stiffness indicator**: Very low diastolic pressure with high systolic (wide pulse pressure) suggests stiff arteries—common in elderly and concerning for heart health
- **Response to interventions**: Diastolic pressure often responds to the same interventions as systolic (weight loss, sodium reduction, exercise, supplements like beetroot/nitrates) but magnitude may differ`,
    common_misconceptions: [
      `**Myth:** Only the top (systolic) number matters.\n**Fact:** Both numbers matter, but their importance varies by age. In younger adults (<50), elevated diastolic pressure is a stronger cardiovascular risk predictor. In older adults (>50), systolic pressure becomes more important.`,
      `**Myth:** Diastolic pressure under 80 is always healthy.\n**Fact:** Very low diastolic pressure (<60-70 mmHg) combined with high systolic pressure indicates stiff arteries and is associated with worse outcomes, particularly in older adults. There's a "sweet spot" for diastolic too.`,
      `**Myth:** If one number is normal, overall blood pressure is fine.\n**Fact:** Either number being elevated (isolated systolic or diastolic hypertension) increases cardiovascular risk. Both numbers need to be in range for optimal blood pressure classification.`,
    ],
    examples: [
      "A 35-year-old with consistent readings of 125/92 has elevated diastolic pressure that significantly increases their cardiovascular risk—worth intervention",
      'A 75-year-old with 160/65 has isolated systolic hypertension with wide pulse pressure—indicates stiff arteries and cardiovascular risk despite "normal" diastolic',
      "Beetroot juice/nitrates can lower both systolic and diastolic pressure by 3-10 mmHg through nitric oxide vasodilation",
      "Weight loss typically reduces both numbers; someone losing 20 lbs might see blood pressure drop from 135/88 to 122/78",
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
  console.log("=== BATCH 5: Enhancing Glossary Terms 41-50 ===\n");

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
