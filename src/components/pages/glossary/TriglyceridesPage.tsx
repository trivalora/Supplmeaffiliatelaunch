import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function TriglyceridesPage() {
  return (
    <GlossaryTemplate
      term="Triglycerides"
      definition="A type of fat (lipid) found in the blood that serves as the body's primary form of energy storage, with elevated levels increasing cardiovascular disease risk."
      detailedExplanation="Triglycerides are composed of glycerol bound to three fatty acid chains and represent the main form of fat storage in the body. After eating, triglycerides from food are packaged into chylomicrons for transport, while the liver produces triglycerides from excess carbohydrates and packages them into very low-density lipoproteins (VLDL). Normal fasting triglyceride levels are below 150 mg/dL, with 150-199 mg/dL considered borderline high, 200-499 mg/dL high, and 500+ mg/dL very high.

Elevated triglycerides contribute to atherosclerosis (arterial plaque buildup) and increase cardiovascular disease risk, particularly when combined with other risk factors like low HDL cholesterol or high LDL cholesterol. Very high triglycerides (over 500 mg/dL) significantly raise the risk of acute pancreatitis. Factors that elevate triglycerides include excess calorie intake, high carbohydrate diets (especially refined carbs and sugars), obesity, physical inactivity, alcohol consumption, certain medications, and metabolic conditions like diabetes and metabolic syndrome.

Lowering triglycerides involves dietary changes (reducing refined carbs and sugars, limiting alcohol), weight loss if overweight, regular physical activity, and for some people, supplements or medications. Omega-3 fatty acids (EPA and DHA) are particularly effective at reducing triglycerides, with prescription-strength formulations reducing levels by 20-50% in people with hypertriglyceridemia."
      examples={[
        "Omega-3 supplementation (2-4g EPA+DHA daily) reduces triglycerides by 15-30% in individuals with elevated levels",
        "Weight loss of 5-10% body weight can reduce triglyceride levels by 20% or more in overweight individuals",
        "Replacing refined carbohydrates with fiber-rich whole grains, vegetables, and legumes significantly lowers triglycerides"
      ]}
      relatedTerms={[
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="triglycerides"
    />
  );
}
