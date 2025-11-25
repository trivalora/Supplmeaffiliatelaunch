import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function DrugInteractionsPage() {
  return (
    <GlossaryTemplate
      term="Drug Interactions"
      definition="Situations where a supplement, food, or medication affects how another drug works in the body. These interactions can increase or decrease the effectiveness of medications, alter their side effects, or create new health risks."
      
      detailedExplanation="In the context of supplements, drug interactions specifically refer to how dietary supplements influence pharmaceutical medications or other supplements.

Types of Drug Interactions:

Pharmacodynamic Interactions: The supplement and drug have similar or opposite effects on the body, leading to additive, synergistic, or antagonistic results.

Examples:
• Additive: Omega-3 supplements + blood-thinning medication = increased bleeding risk
• Antagonistic: Vitamin K + warfarin = reduced blood-thinning effect
• Synergistic: St. John's Wort + antidepressants = risk of serotonin syndrome

Pharmacokinetic Interactions: The supplement affects how the body absorbs, distributes, metabolizes, or excretes the medication.

Types include:
• Absorption: Calcium supplements interfere with thyroid medication absorption
• Metabolism: St. John's Wort increases enzyme activity, speeding up drug breakdown
• Distribution: Supplements competing for protein binding sites
• Excretion: Supplements affecting kidney function alter drug elimination

Common Supplement-Drug Interactions:

St. John's Wort:
• Interacts with: Antidepressants, birth control pills, blood thinners, immunosuppressants, HIV medications, chemotherapy drugs
• Mechanism: Induces liver enzymes (particularly CYP3A4), accelerating drug metabolism
• Result: Reduced medication effectiveness; potentially dangerous with antidepressants

Calcium:
• Interacts with: Thyroid medications, certain antibiotics (tetracyclines, fluoroquinolones), bisphosphonates
• Mechanism: Binds to medications in the digestive tract, preventing absorption
• Result: Reduced medication effectiveness
• Solution: Separate doses by 2-4 hours

Iron:
• Interacts with: Thyroid medications, antibiotics, levodopa, proton pump inhibitors
• Mechanism: Forms complexes with medications, preventing absorption
• Result: Reduced effectiveness of both iron and medication
• Solution: Separate doses, often by 2-4 hours

Ginkgo Biloba:
• Interacts with: Blood thinners (warfarin, aspirin), NSAIDs, antiplatelet drugs
• Mechanism: Has antiplatelet effects that add to medication effects
• Result: Increased bleeding risk

Vitamin K:
• Interacts with: Warfarin and other anticoagulants
• Mechanism: Promotes blood clotting, directly opposes warfarin's action
• Result: Reduced anticoagulant effect, increased clotting risk

Magnesium:
• Interacts with: Antibiotics (tetracyclines, fluoroquinolones), bisphosphonates, certain diuretics
• Mechanism: Binds to medications or affects electrolyte balance
• Result: Reduced medication absorption or altered electrolyte levels

Grapefruit Juice (not a supplement, but relevant):
• Interacts with: Statins, calcium channel blockers, many other medications
• Mechanism: Inhibits intestinal enzymes, increasing drug absorption
• Result: Dangerously high drug levels and increased side effects

Interactions by Drug Class:

Blood Thinners (Anticoagulants/Antiplatelets):
Supplements to avoid or use cautiously:
• Vitamin E (high doses)
• Omega-3 fatty acids (high doses)
• Garlic supplements
• Ginkgo biloba
• Vitamin K (opposes effect)
• Ginger (high doses)
• Turmeric/curcumin (high doses)

Diabetes Medications:
Supplements that may affect blood glucose:
• Chromium
• Alpha-lipoic acid
• Cinnamon
• Fenugreek
• Bitter melon
Risk: Hypoglycemia (dangerously low blood sugar) if combined effects are too strong

Blood Pressure Medications:
Supplements that may affect blood pressure:
• Potassium (with potassium-sparing diuretics or ACE inhibitors)
• Coenzyme Q10
• Hawthorn
• Fish oil (high doses)

Immunosuppressants:
Supplements to avoid:
• Echinacea
• Astragalus
• Other immune-stimulating herbs
• St. John's Wort (reduces drug levels)
Risk: Reduced medication effectiveness or immune system activation

Timing Strategies to Minimize Interactions:

Many absorption-related interactions can be minimized by separating doses:
• General rule: Space supplements and medications 2-4 hours apart
• Thyroid medications: Take on empty stomach; wait 4 hours before calcium, iron, or other supplements
• Antibiotics: Follow specific timing instructions for each type
• Bisphosphonates: Take alone on empty stomach; wait 30-60 minutes before other substances

Note: Timing separation doesn't help with metabolic interactions (e.g., St. John's Wort effects persist regardless of timing).

Risk Factors for Drug Interactions:

• Multiple medications: More drugs = higher interaction risk (polypharmacy)
• Multiple supplements: Taking many supplements increases interaction complexity
• High doses: Interactions more likely at higher supplement doses
• Chronic conditions: Kidney or liver disease affects how substances are processed
• Age: Elderly often take more medications and process drugs differently
• Genetic factors: Variation in enzyme activity affects interaction risk

Detecting Drug Interactions:

Before They Occur:
• Consult healthcare providers: Inform all doctors about all supplements and medications
• Ask pharmacists: They can check for interactions when filling prescriptions
• Use interaction checkers: Online tools can screen for known interactions
• Read labels: Supplement and medication labels list major interactions

After They Occur:
Signs a supplement may be interacting with medication:
• Medication becomes less effective
• Medication becomes more effective (unusual responses)
• New or worsened side effects appear
• Lab test results change unexpectedly
• Symptoms of the condition being treated return or worsen

Preventing Drug Interactions:

1. Maintain a complete list: Document all medications, supplements, and OTC products
2. Communicate openly: Share your complete list with all healthcare providers
3. Ask before adding: Consult professionals before starting new supplements
4. Read all labels: Check for interaction warnings
5. Use one pharmacy: Pharmacists can track your medications and check for interactions
6. Monitor effects: Pay attention to changes when starting new supplements
7. Keep current: Update your list as you start or stop products
8. Don't assume 'natural = safe': Plant-based doesn't mean interaction-free

When Drug Interactions Are Serious:

Some interactions require immediate medical attention:
• Signs of excessive bleeding (unusual bruising, prolonged bleeding)
• Symptoms of serotonin syndrome (confusion, rapid heart rate, fever, muscle rigidity)
• Severe low blood sugar (shakiness, confusion, loss of consciousness)
• Signs of organ toxicity (jaundice, dark urine, severe abdominal pain)
• Allergic reactions
• Sudden worsening of the condition being treated

Special Considerations:

Surgery:
Many supplements should be stopped before surgery due to interaction risks:
• Blood-thinning supplements (stop 1-2 weeks before)
• Supplements affecting blood pressure
• Supplements affecting blood sugar
• Supplements interacting with anesthesia

Emergency Situations:
In emergencies, inform medical staff about all supplements you take, as they can:
• Affect emergency medications
• Influence test results
• Complicate diagnosis
• Impact treatment decisions

Research Limitations:

Knowledge about supplement-drug interactions has gaps:
• Limited studies: Not all possible interactions have been researched
• Case reports: Many interactions known only from individual reports
• Dose-dependence: Interaction risk may vary with dose, but data is limited
• Quality variation: Different supplement products may interact differently
• Individual variation: Genetics and health status affect interaction likelihood"
      
      relatedTerms={[
        { term: "Contraindications", key: "contraindications" },
        { term: "Adverse Effects", key: "adverse-effects" },
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Pharmacokinetics", key: "pharmacokinetics" },
        { term: "Absorption", key: "absorption" },
        { term: "Electrolytes", key: "electrolytes" },
        { term: "Blood Glucose", key: "blood-glucose" }
      ]}
      currentPage="druginteractions"
    />
  );
}
