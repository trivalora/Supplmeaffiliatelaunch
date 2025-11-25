import { GlossaryTemplate } from '../GlossaryTemplate';

export function SerumPage() {
  return (
    <GlossaryTemplate
      term="Serum"
      definition="The clear, yellowish liquid component of blood that remains after blood has been allowed to clot and the clot has been removed. It contains water, electrolytes, nutrients, hormones, antibodies, and other proteins, but lacks clotting factors (particularly fibrinogen) and blood cells."
      
      detailedExplanation="Serum vs. Plasma:

Serum:
• Blood after clotting
• No clotting factors
• No anticoagulants needed
• Takes 30+ minutes to process

Plasma:
• Blood before clotting
• Contains clotting factors
• Requires anticoagulants
• Faster processing time

Use in Supplement Research:

Serum measurements are commonly used to assess:

Vitamin and Mineral Status:
• Serum vitamin D
• Serum iron
• Serum magnesium
• Serum calcium

Metabolic Markers:
• Serum glucose
• Serum lipids
• Serum insulin

Inflammatory Markers:
• Serum CRP
• Serum IL-6
• Serum TNF-α

Organ Function:
• Serum creatinine
• Serum liver enzymes

Important Considerations:

• Timing matters: Many serum markers fluctuate throughout the day and require fasting samples
• Not always representative: Some nutrients are stored in tissues, so serum levels may not reflect total body stores
• Reference ranges vary: Different laboratories may use different reference ranges for the same marker"
      
      exampleContext="After 12 weeks of supplementation, serum 25(OH)D levels increased from 18.3 ng/mL to 42.7 ng/mL in the treatment group, while the placebo group showed no significant change (19.1 ng/mL to 20.4 ng/mL)."
      
      relatedTerms={[
        { term: "Plasma", key: "plasma" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
