import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function HyperglycemiaPage() {
  return (
    <GlossaryTemplate
      term="Hyperglycemia"
      definition="Elevated blood glucose levels above the normal range, commonly associated with diabetes and prediabetes."
      expandedExplanation={`Hyperglycemia refers to abnormally high blood glucose (blood sugar) levels. While exact thresholds vary by context, hyperglycemia is generally defined as fasting blood glucose &gt;100 mg/dL (5.6 mmol/L) or random blood glucose &gt;140 mg/dL (7.8 mmol/L).

**Classification**

**Mild-Moderate Hyperglycemia:** Fasting glucose 100-180 mg/dL; often asymptomatic but indicates impaired glucose regulation.

**Severe Hyperglycemia:** Glucose &gt;180-200 mg/dL; symptoms become more apparent; risk of acute complications increases.

**Diabetic Hyperglycemia:** Chronic elevation consistent with diabetes diagnosis (fasting ≥126 mg/dL or HbA1c ≥6.5%).

**Causes**

**Diabetes-Related:** Type 1 diabetes (absolute insulin deficiency), type 2 diabetes (insulin resistance and relative insulin deficiency), gestational diabetes, medication non-adherence, or incorrect insulin dosing.

**Non-Diabetic Causes:** Stress hyperglycemia (illness, surgery, trauma), medications (corticosteroids, certain antipsychotics, diuretics), hormonal disorders (Cushing's syndrome, hyperthyroidism, acromegaly), pancreatic diseases (pancreatitis, pancreatic cancer), and excessive carbohydrate intake without adequate insulin.

**Symptoms**

**Early/Mild Symptoms:**
- Increased thirst (polydipsia)
- Frequent urination (polyuria)
- Increased hunger (polyphagia)
- Fatigue
- Blurred vision
- Headaches

**Severe/Prolonged Hyperglycemia:**
- Weight loss
- Slow-healing wounds
- Frequent infections
- Dry skin and mouth
- Ketones in urine (fruity breath odor)

**Acute Complications (Diabetic Emergencies):**

**Diabetic Ketoacidosis (DKA):** Primarily in type 1 diabetes; occurs when lack of insulin causes fat breakdown and ketone production, leading to acidosis. Symptoms include nausea, vomiting, abdominal pain, rapid breathing, confusion, and potentially coma. Life-threatening without treatment.

**Hyperosmolar Hyperglycemic State (HHS):** Primarily in type 2 diabetes; extreme hyperglycemia (often &gt;600 mg/dL) without significant ketosis, causing severe dehydration. Can lead to seizures, coma, death. More common in elderly.

**Chronic Complications**

Persistent hyperglycemia over years causes microvascular damage (retinopathy leading to blindness, nephropathy leading to kidney failure, neuropathy causing nerve damage and pain) and macrovascular damage (accelerated atherosclerosis increasing risk of heart attack, stroke, peripheral artery disease).

High glucose also promotes glycation (glucose binding to proteins), forming advanced glycation end products (AGEs) that contribute to tissue damage and aging.

**Management**

**Lifestyle:**
- Carbohydrate management (consistent timing, portion control, choosing low glycemic index foods)
- Regular physical activity (improves insulin sensitivity)
- Weight management
- Stress reduction

**Medications:**
- Insulin therapy (type 1 diabetes, advanced type 2 diabetes)
- Oral diabetes medications (metformin, sulfonylureas, SGLT2 inhibitors, etc.)
- GLP-1 receptor agonists
- Dosage adjustments based on monitoring

**Monitoring:**
- Frequent blood glucose monitoring (finger-stick or continuous glucose monitor)
- Regular HbA1c testing (every 3-6 months)
- Adjusting treatment based on patterns

**Prevention (For At-Risk Individuals):**

For those with prediabetes or at risk for diabetes, preventing hyperglycemia involves weight loss, regular exercise, healthy diet, and sometimes metformin or other preventive medications.`}
      examples={[
        "A person with type 2 diabetes may experience hyperglycemia (blood glucose 250 mg/dL) after eating a large carbohydrate-heavy meal without adequate medication.",
        "Someone hospitalized for surgery may develop stress hyperglycemia even without prior diabetes history, requiring temporary insulin therapy.",
        "Chronic hyperglycemia with HbA1c of 9.5% significantly increases risk of diabetic complications like retinopathy and nephropathy."
      ]}
      relatedTerms={[
        { term: "Blood Glucose", key: "bloodglucose" },
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "HbA1c", key: "hba1c" },
        { term: "Prediabetes", key: "prediabetes" },
        { term: "Glycemic Control", key: "glycemiccontrol" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="hyperglycemia"
    />
  );
}
