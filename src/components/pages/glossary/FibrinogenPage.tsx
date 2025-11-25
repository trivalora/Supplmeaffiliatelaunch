import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function FibrinogenPage() {
  return (
    <GlossaryTemplate
      term="Fibrinogen"
      abbreviation=""
      definition="A soluble plasma protein produced by the liver that plays a central role in blood clotting and is also an important biomarker of inflammation and cardiovascular disease risk."
      detailedExplanation="Fibrinogen is a glycoprotein that circulates in blood and converts to insoluble fibrin during the clotting process, forming the structural framework of blood clots. Beyond its essential role in hemostasis, fibrinogen is also an acute phase reactant—its levels increase during inflammation, infection, or tissue injury. Normal fibrinogen levels range from 200-400 mg/dL in healthy adults, though reference ranges vary slightly between laboratories.

Elevated fibrinogen (hyperfibrinogenemia) is associated with increased cardiovascular disease risk, as it contributes to atherosclerosis, blood viscosity, and thrombosis risk. High fibrinogen levels promote platelet aggregation, increase blood thickness, and contribute to arterial plaque formation. Each 100 mg/dL increase in fibrinogen is associated with approximately 20% increased risk of coronary heart disease and stroke.

In supplement research, fibrinogen is measured as a biomarker of both inflammation and cardiovascular risk. Supplements with anti-inflammatory or cardioprotective properties—such as omega-3 fatty acids, vitamin E, garlic, and certain plant extracts—have been studied for their effects on fibrinogen levels. Reductions in fibrinogen may indicate decreased inflammation and reduced cardiovascular risk, though the clinical significance depends on baseline values and concurrent changes in other markers.

Fibrinogen levels are influenced by numerous factors including age, smoking, obesity, diabetes, hormonal status, and chronic disease. When interpreting research, consider whether participants had elevated baseline fibrinogen and whether observed reductions are clinically meaningful. A decrease from very high levels (e.g., 500 to 400 mg/dL) may be more significant than a decrease within normal range (e.g., 300 to 280 mg/dL)."
      examples={[
        "A meta-analysis might show that omega-3 supplementation reduced fibrinogen by -0.31 g/L (95% CI -0.52 to -0.10) in cardiovascular patients",
        "Baseline fibrinogen of 450 mg/dL decreasing to 380 mg/dL after supplementation indicates reduced inflammation and clotting risk",
        "Studies examining anti-inflammatory supplements often measure fibrinogen alongside CRP and IL-6 as markers of systemic inflammation"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" }
      ]}
      currentPage="fibrinogen"
    />
  );
}
