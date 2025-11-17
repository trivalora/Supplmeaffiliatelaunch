import { GlossaryTemplate } from '../GlossaryTemplate';
import { AlertTriangle, Shield, Scale, AlertCircle } from 'lucide-react';

export function TolerableUpperIntakeLevelPage() {
  return (
    <GlossaryTemplate
      term="Tolerable Upper Intake Level"
      abbreviation="UL"
      partOfSpeech="noun"
      definition="The Tolerable Upper Intake Level (UL) is the highest average daily nutrient intake level that is likely to pose no risk of adverse health effects for almost all individuals in the general population. The UL is not a recommended intake level; rather, it represents a safety threshold above which the risk of adverse effects increases."
      
      whyItMatters="The UL provides a safety ceiling for supplement dosing, helping consumers and healthcare providers avoid excessive intake that could cause harm. Understanding ULs is essential for safe supplementation, particularly when combining dietary sources with supplements. ULs are established by expert panels such as the Institute of Medicine (now National Academy of Medicine)."
      
      keyPoints={[
        {
          icon: Shield,
          title: "Key Characteristics",
          description: "UL is a safety ceiling where exceeding increases risk of harm (though harm is not guaranteed). It applies to total intake from food, water, and supplements combined. It's based on chronic intake over time, not single-dose events. Set conservatively to protect nearly all people, including sensitive groups. Not all nutrients have ULs—lack of a UL doesn't mean unlimited intake is safe."
        },
        {
          icon: AlertTriangle,
          title: "Examples of Nutrient ULs",
          description: "Vitamin D: 4,000 IU/day (higher may cause hypercalcemia). Magnesium from supplements: 350mg/day (dietary not included; excess may cause diarrhea). Vitamin C: 2,000mg/day (higher may cause GI distress). Zinc: 40mg/day (chronic excess interferes with copper absorption). Vitamin A (preformed): 3,000 mcg/day (does not apply to beta-carotene)."
        },
        {
          icon: AlertCircle,
          title: "Nutrients Without ULs",
          description: "Some nutrients lack established ULs due to insufficient data. This doesn't mean they're safe in unlimited amounts—just that data is insufficient to set a threshold. Extra caution is needed with high doses. Examples include vitamin K, thiamin, riboflavin, vitamin B12, pantothenic acid, biotin, and chromium."
        },
        {
          icon: Scale,
          title: "Practical Application",
          description: "Stay well below the UL unless under medical supervision. Account for dietary intake plus supplements. Consider individual risk factors (age, health conditions, medications). Be especially cautious during pregnancy and childhood. Consult healthcare providers when using doses approaching the UL."
        }
      ]}
      
      expandedExplanation={
        <>
          <p><strong>UL vs. Recommended Intake:</strong> It's important to distinguish between different reference values:</p>
          
          <ul className="space-y-2 mt-3">
            <li><strong>RDA (Recommended Dietary Allowance):</strong> Amount sufficient to meet needs of 97-98% of healthy people</li>
            <li><strong>UL (Tolerable Upper Intake Level):</strong> Maximum amount unlikely to cause harm</li>
          </ul>
          
          <p className="mt-4">The optimal therapeutic dose for specific health outcomes may fall between the RDA and UL, which is why research-backed dosing recommendations are valuable. The UL provides an upper boundary for safety, while the RDA provides a lower boundary for adequacy.</p>
        </>
      }
      
      relatedTerms={[
        'Deficiency',
        'Therapeutic Dose',
        'Adverse Effects',
        'Biomarker',
        'Drug Interactions'
      ]}
    />
  );
}
