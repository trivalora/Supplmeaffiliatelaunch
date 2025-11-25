import { GlossaryTemplate } from '../GlossaryTemplate';

export function ContraindicationsPage() {
  return (
    <GlossaryTemplate
      term="Contraindications"
      definition="A specific situation, condition, or characteristic that makes a particular supplement or treatment inadvisable or potentially harmful. Contraindications indicate when a supplement should not be used because the risks outweigh any potential benefits."
      
      detailedExplanation="Understanding contraindications is essential for safe supplement use and helps avoid potentially dangerous situations.

Types of Contraindications:

Absolute Contraindications: Situations where a supplement should NEVER be used because it poses serious or life-threatening risk. The supplement is strictly forbidden under these circumstances.

Examples of absolute contraindications:
• St. John's Wort with certain antidepressants (risk of serotonin syndrome)
• High-dose vitamin K with warfarin (interferes with blood thinning)
• Iron supplements in hemochromatosis (iron overload disorder)

Relative Contraindications: Situations where a supplement is generally not recommended but might be used with caution, close monitoring, or medical supervision if benefits are judged to outweigh risks.

Examples of relative contraindications:
• Omega-3 supplements before surgery (bleeding risk, but manageable)
• Calcium supplements with certain antibiotics (absorption interference)
• Ginkgo biloba with bleeding disorders (increased bleeding risk)

Common Contraindication Categories:

Medical Conditions - Certain health conditions create contraindications for specific supplements:
• Kidney disease: High-dose protein, potassium, phosphorus, or magnesium supplements
• Liver disease: High-dose vitamins A and D, certain herbs (kava, comfrey)
• Bleeding disorders: Blood-thinning supplements (garlic, ginkgo, high-dose omega-3s)
• Autoimmune conditions: Immune-stimulating supplements (echinacea, astragalus)
• Hormone-sensitive cancers: Phytoestrogen supplements (soy isoflavones, red clover)
• Hyperthyroidism: Iodine or iodine-containing supplements (kelp, seaweed)

Medications - Many supplement-drug combinations create contraindications:
• Blood thinners: Supplements with anticoagulant effects
• Diabetes medications: Supplements affecting blood glucose
• Immunosuppressants: Immune-boosting supplements
• Blood pressure medications: Supplements affecting blood pressure
• Thyroid hormones: Supplements affecting thyroid function

Life Stages:
• Pregnancy: Many herbs, high-dose vitamins, weight loss supplements
• Breastfeeding: Supplements that pass into breast milk and may affect infant
• Children: Adult-dosed supplements, certain herbs, stimulants
• Elderly: May have increased sensitivity or multiple medications

Upcoming Medical Procedures:
• Surgery: Blood-thinning supplements, immune modulators, supplements affecting anesthesia
• Medical testing: Supplements that might interfere with test results

Specific Supplement Examples:

Vitamin K: Contraindicated with warfarin and other anticoagulants. Reason: Vitamin K promotes blood clotting and directly counteracts warfarin's therapeutic effect.

Ginkgo Biloba: Contraindicated with bleeding disorders, upcoming surgery, blood-thinning medications. Reason: May increase bleeding risk.

Iron Supplements: Contraindicated with hemochromatosis, hemosiderosis, repeated blood transfusions. Reason: Can worsen iron overload conditions.

Calcium Supplements: Contraindicated with hypercalcemia, certain kidney conditions, specific heart conditions. Reason: May worsen high blood calcium or contribute to calcium deposits.

Potassium Supplements: Contraindicated with kidney disease, certain medications (ACE inhibitors, potassium-sparing diuretics). Reason: Can lead to dangerous hyperkalemia (high potassium levels).

Why Contraindications Matter:

Understanding and respecting contraindications is crucial because:
• Safety: Prevents potentially life-threatening situations
• Treatment efficacy: Avoids interference with necessary medications
• Disease management: Prevents worsening of existing conditions
• Legal/ethical responsibility: Healthcare providers must inform patients of contraindications
• Informed decision-making: Consumers can make safer choices

How to Identify Contraindications:

Resources for finding contraindication information:
• Product labels: Should list major contraindications and warnings
• Healthcare providers: Doctors, pharmacists, and dietitians can assess your specific situation
• Medical databases: Professional resources like drug interaction checkers
• Reputable health websites: NIH, Mayo Clinic, WebMD provide contraindication information
• Scientific literature: Case reports and studies document contraindications
• Package inserts: Detailed product information sheets

Before Starting a New Supplement:

To identify potential contraindications:
1. List your conditions: Document all diagnosed medical conditions
2. List your medications: Include prescription, over-the-counter, and other supplements
3. Note upcoming procedures: Surgeries, medical tests, or treatments planned
4. Consider life stage: Pregnancy, breastfeeding, age-related factors
5. Research the supplement: Look for contraindication information
6. Consult professionals: Discuss with healthcare providers before starting
7. Start carefully: Even without known contraindications, monitor for adverse effects

Special Populations:

Pregnancy and Breastfeeding - Many supplements are contraindicated during pregnancy/nursing due to:
• Potential birth defects (teratogenic effects)
• Uterine stimulation or effects on pregnancy
• Passage into breast milk
• Lack of safety data in pregnant women

Children - Pediatric contraindications often exist because:
• Developing bodies process supplements differently
• Safety has not been established in children
• Risk of overdose with adult-formulated products
• Potential interference with growth and development

Limitations and Evolving Knowledge:

Contraindication information has limitations:
• Incomplete research: Not all potential contraindications are known
• Individual variation: Some people may have unique contraindications
• Emerging evidence: New contraindications are discovered over time
• Dose-dependent: Some contraindications apply only at high doses
• Quality variation: Contaminated or mislabeled products create unpredicted contraindications"
      
      relatedTerms={[
        { term: "Adverse Effects", key: "adverse-effects" },
        { term: "Drug Interactions", key: "drug-interactions" },
        { term: "Therapeutic Dose", key: "therapeutic-dose" },
        { term: "Blood Glucose", key: "blood-glucose" },
        { term: "Thyroid Function", key: "thyroid-function" }
      ]}
    />
  );
}
