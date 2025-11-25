import { GlossaryTemplate } from '../GlossaryTemplate';

export function GlycemicControlPage() {
  return (
    <GlossaryTemplate
      term="Glycemic Control"
      definition="The regulation of blood glucose (sugar) levels within a healthy range, crucial for preventing diabetes complications and maintaining metabolic health."
      detailedExplanation="Glycemic control refers to how well blood sugar levels are managed and maintained within target ranges. It's assessed through several biomarkers: fasting blood glucose (normal: 70-99 mg/dL), postprandial (after-meal) glucose, and hemoglobin A1C (HbA1c), which reflects average blood sugar over the previous 2-3 months. An HbA1c below 5.7% is normal, 5.7-6.4% indicates prediabetes, and 6.5% or higher indicates diabetes.

Poor glycemic control occurs when blood sugar frequently spikes too high (hyperglycemia) or drops too low (hypoglycemia). Chronic hyperglycemia leads to glycation—where excess glucose binds to proteins and fats, forming harmful advanced glycation end products (AGEs) that damage blood vessels, nerves, kidneys, eyes, and other tissues. This is why maintaining glycemic control is critical for preventing diabetes complications.

Glycemic control is influenced by diet (particularly carbohydrate quality and quantity), physical activity, body composition, insulin sensitivity, medications, stress, sleep quality, and gut health. Supplements that may support glycemic control include magnesium, chromium, alpha-lipoic acid, berberine, and cinnamon, though lifestyle interventions (diet, exercise, weight management) remain most effective."
      examples={[
        "Magnesium supplementation (300-500mg daily for 3+ months) reduces fasting glucose by 8.1 mg/dL and HbA1c by 0.26% in people with diabetes or prediabetes",
        "Fiber-rich foods and supplements slow glucose absorption, reducing postprandial blood sugar spikes and improving overall glycemic control",
        "Regular physical activity enhances insulin sensitivity and glucose uptake by muscles, significantly improving glycemic control even without weight loss"
      ]}
      relatedTerms={[
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="glycemiccontrol"
    />
  );
}
