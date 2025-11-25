import { GlossaryTemplate } from '../GlossaryTemplate';

export function InsulinResistancePage() {
  return (
    <GlossaryTemplate
      term="Insulin Resistance"
      definition="A condition where cells in muscles, fat, and liver don't respond effectively to insulin, requiring higher levels of insulin to move glucose from the bloodstream into cells."
      
      detailedExplanation="Insulin resistance develops when cells become less sensitive to insulin's signals, forcing the pancreas to produce more insulin to achieve normal blood glucose control. Initially, the pancreas compensates by producing extra insulin, maintaining relatively normal blood sugar levels but at the cost of elevated insulin (hyperinsulinemia). Over time, the pancreas may fail to keep up with demand, leading to elevated blood glucose levels and eventually type 2 diabetes if left unaddressed.

Multiple factors contribute to insulin resistance including excess body fat (particularly visceral abdominal fat), physical inactivity, chronic inflammation, oxidative stress, poor sleep, certain medications, genetics, and aging. The condition is strongly associated with metabolic syndrome—a cluster of conditions including high blood pressure, elevated triglycerides, low HDL cholesterol, and increased waist circumference that collectively increase cardiovascular disease risk.

Insulin resistance is assessed through various methods including fasting insulin levels, fasting glucose, glucose tolerance tests, and calculated indices like HOMA-IR (Homeostatic Model Assessment of Insulin Resistance). The condition is often reversible through lifestyle interventions including weight loss, regular physical activity, improved diet quality, stress management, and adequate sleep. Some supplements show promise in improving insulin sensitivity, though lifestyle modifications remain the cornerstone of treatment."
      
      examples={[
        "Magnesium supplementation improved insulin resistance (WMD -0.67, 95% CI -1.20 to -0.14) in people with diabetes or high metabolic risk with at least 12 weeks of use",
        "Chromium picolinate may enhance insulin signaling and improve glucose uptake in insulin-resistant individuals",
        "Weight loss of 5-10% body weight can significantly improve insulin sensitivity in overweight individuals with insulin resistance"
      ]}
      
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Inflammation", key: "inflammation" }
      ]}
    />
  );
}
