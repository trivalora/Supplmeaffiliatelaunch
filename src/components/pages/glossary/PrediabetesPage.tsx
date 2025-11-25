import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function PrediabetesPage() {
  return (
    <GlossaryTemplate
      term="Prediabetes"
      definition="A condition in which blood glucose levels are higher than normal but not high enough to be classified as type 2 diabetes. It represents an increased risk for developing diabetes and cardiovascular disease."
      expandedExplanation={`Prediabetes is a metabolic state between normal glucose regulation and type 2 diabetes, characterized by impaired fasting glucose (IFG), impaired glucose tolerance (IGT), or elevated HbA1c. Without intervention, 15-30% of people with prediabetes will develop type 2 diabetes within 5 years.

**Diagnostic Criteria (Any One of Three):**

1. **Impaired Fasting Glucose (IFG):** Fasting plasma glucose 100-125 mg/dL (5.6-6.9 mmol/L)
2. **Impaired Glucose Tolerance (IGT):** 2-hour plasma glucose during oral glucose tolerance test 140-199 mg/dL (7.8-11.0 mmol/L)
3. **Elevated HbA1c:** 5.7-6.4% (39-47 mmol/mol)

Diabetes is diagnosed when fasting glucose ≥126 mg/dL, 2-hour glucose ≥200 mg/dL, or HbA1c ≥6.5%.

**Pathophysiology**

Prediabetes develops due to insulin resistance (cells become less responsive to insulin) and progressive beta-cell dysfunction (pancreatic cells that produce insulin begin to fail). The body initially compensates by producing more insulin (hyperinsulinemia), maintaining near-normal blood glucose. Over time, beta cells can't keep up, and blood glucose begins to rise into the prediabetic and eventually diabetic range.

**Risk Factors**

Overweight/obesity (especially abdominal obesity), physical inactivity, family history of type 2 diabetes, age ≥45 years, history of gestational diabetes, PCOS, certain ethnicities (African American, Hispanic/Latino, Native American, Asian American, Pacific Islander), high blood pressure, low HDL cholesterol or high triglycerides, and cardiovascular disease.

**Health Consequences**

Increased risk of progression to type 2 diabetes (15-30% within 5 years), increased cardiovascular disease risk (even before progression to diabetes), higher risk of microvascular complications (retinopathy, nephropathy, neuropathy can begin in prediabetes), and association with metabolic syndrome.

**Clinical Significance**

Prediabetes is often asymptomatic—most people don't know they have it without screening. However, it represents a critical window for intervention. Lifestyle changes during the prediabetes stage can prevent or significantly delay progression to type 2 diabetes and may even restore normal glucose regulation.

**Prevention and Treatment**

**Lifestyle Modifications (Most Effective):**
- Weight loss: 5-7% body weight reduction reduces diabetes risk by 58%
- Physical activity: ≥150 minutes/week moderate-intensity exercise
- Dietary changes: Mediterranean diet, DASH diet, or reduced calorie diet
- The Diabetes Prevention Program (DPP) showed lifestyle intervention was more effective than metformin in preventing diabetes

**Medications (When Appropriate):**
- Metformin: May be considered for high-risk individuals (BMI ≥35, age &lt;60, history of gestational diabetes, rapidly progressing glycemia)
- Generally reserved for those at very high risk or unable to achieve lifestyle changes

**Monitoring:**
- Annual testing of glucose/HbA1c to monitor progression
- Screening for cardiovascular risk factors
- Assessment of microvascular complications in long-standing prediabetes

**Supplement Research**

Several supplements have been studied for prediabetes management including vitamin D (especially if deficient), magnesium (improves insulin sensitivity), chromium, berberine, and omega-3 fatty acids. However, lifestyle modification remains the most evidence-based intervention.

**Reversibility**

Unlike type 2 diabetes, prediabetes is often reversible with lifestyle changes. Studies show that sustained weight loss, regular exercise, and dietary improvements can restore normal glucose metabolism in many individuals with prediabetes.`}
      examples={[
        "A 50-year-old with BMI 32, fasting glucose 110 mg/dL, and HbA1c 6.0% has prediabetes and should begin lifestyle intervention to prevent diabetes.",
        "In the Diabetes Prevention Program, participants who achieved 7% weight loss through diet and exercise reduced their 3-year diabetes risk by 58%.",
        "Someone with prediabetes may have HOMA-IR of 3.5, indicating significant insulin resistance that improves with weight loss and exercise."
      ]}
      relatedTerms={[
        { term: "Blood Glucose", key: "bloodglucose" },
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "HbA1c", key: "hba1c" },
        { term: "HOMA-IR", key: "homair" },
        { term: "Metabolic Syndrome", key: "metabolicsyndrome" },
        { term: "Glycemic Control", key: "glycemiccontrol" }
      ]}
      currentPage="prediabetes"
    />
  );
}
