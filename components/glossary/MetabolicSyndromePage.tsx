import { GlossaryTemplate } from '../GlossaryTemplate';

interface MetabolicSyndromePageProps {
  onNavigate?: (key: string) => void;
}

export function MetabolicSyndromePage({ onNavigate }: MetabolicSyndromePageProps) {
  return (
    <GlossaryTemplate
      term="Metabolic Syndrome"
      onNavigate={onNavigate}
      currentPage="metabolicsyndrome"
      definition="A cluster of conditions including central obesity, high blood pressure, high blood sugar, and abnormal cholesterol levels that increase the risk of heart disease, stroke, and type 2 diabetes."
      detailedExplanation={`Metabolic syndrome is defined by the presence of at least three of five metabolic abnormalities. Different organizations use slightly different criteria, but the most commonly used are from the National Cholesterol Education Program Adult Treatment Panel III (NCEP ATP III) with modifications:

**Diagnostic Criteria (≥3 of 5 required):**

1. **Central Obesity:** Waist circumference &gt;40 inches (102 cm) in men or &gt;35 inches (88 cm) in women (US criteria; varies by ethnicity)
2. **Elevated Triglycerides:** ≥150 mg/dL (1.7 mmol/L) or drug treatment for elevated triglycerides
3. **Reduced HDL Cholesterol:** &lt;40 mg/dL (1.0 mmol/L) in men or &lt;50 mg/dL (1.3 mmol/L) in women, or drug treatment for low HDL
4. **Elevated Blood Pressure:** Systolic ≥130 mmHg and/or diastolic ≥85 mmHg, or antihypertensive drug treatment
5. **Elevated Fasting Glucose:** ≥100 mg/dL (5.6 mmol/L) or drug treatment for elevated blood glucose

**Pathophysiology**

The core feature is insulin resistance—reduced cellular responsiveness to insulin, forcing the pancreas to produce more insulin to maintain normal blood glucose. This leads to hyperinsulinemia, which contributes to hypertension, dyslipidemia, and eventually beta-cell exhaustion and type 2 diabetes.

Central (visceral) obesity, particularly excess fat around abdominal organs, is strongly linked to insulin resistance and metabolic syndrome. Visceral fat is metabolically active, releasing inflammatory cytokines and free fatty acids that worsen insulin resistance.

Chronic low-grade inflammation is characteristic, with elevated levels of CRP, IL-6, and TNF-α. This inflammation contributes to insulin resistance and atherosclerosis.

**Health Consequences**

Metabolic syndrome increases risk of type 2 diabetes (5-fold), cardiovascular disease (2-3 fold increased risk of heart attack and stroke), non-alcoholic fatty liver disease (NAFLD/NASH), polycystic ovary syndrome (PCOS), sleep apnea, chronic kidney disease, and certain cancers.

**Prevalence**

Approximately 35% of US adults have metabolic syndrome. Prevalence increases with age and obesity rates.

**Treatment and Management**

**Lifestyle Modifications (First-Line):**
- Weight loss (5-10% body weight can significantly improve all components)
- Regular physical activity (≥150 min/week moderate-intensity exercise)
- Heart-healthy diet (Mediterranean diet, DASH diet)
- Smoking cessation
- Stress management

**Medications (When Needed):**
- Metformin for blood glucose management
- Statins for dyslipidemia
- Antihypertensive medications
- Sometimes fibrates for severe hypertriglyceridemia

**Supplement Research**

Several supplements have been studied for metabolic syndrome components including omega-3 fatty acids (improve triglycerides and inflammation), magnesium (improves insulin sensitivity), vitamin D, probiotics, berberine, and chromium. However, lifestyle modifications remain the most effective intervention.`}
      examples={[
        "A 55-year-old man with waist circumference 44 inches, blood pressure 140/90, fasting glucose 110 mg/dL, triglycerides 180 mg/dL, and HDL 35 mg/dL meets all five criteria for metabolic syndrome.",
        "After 6 months of diet and exercise, a woman with metabolic syndrome lost 20 pounds, reducing her waist circumference, blood pressure, and triglycerides, and increasing HDL—no longer meeting metabolic syndrome criteria.",
        "A person with metabolic syndrome has approximately 5 times the risk of developing type 2 diabetes compared to someone without the syndrome."
      ]}
      relatedTerms={[
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "Blood Glucose", key: "bloodglucose" },
        { term: "Triglycerides", key: "triglycerides" },
        { term: "HDL Cholesterol", key: "hdlcholesterol" },
        { term: "Blood Pressure", key: "bloodpressure" },
        { term: "Inflammation", key: "inflammation" },
        { term: "HOMA-IR", key: "homair" },
        { term: "BMI", key: "bmi" }
      ]}
    />
  );
}
