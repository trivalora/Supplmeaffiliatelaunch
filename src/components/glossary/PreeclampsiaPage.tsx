'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { AlertCircle, Heart, Activity } from 'lucide-react';

export function PreeclampsiaPage() {
  return (
    <GlossaryTemplate
      term="Pre-eclampsia"
      pronunciation="pree-ee-klamp-see-uh"
      definition="Pre-eclampsia is a serious pregnancy complication characterized by high blood pressure (hypertension) and signs of damage to other organ systems, most often the liver and kidneys. It typically develops after 20 weeks of pregnancy in women whose blood pressure was previously normal."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Pre-eclampsia affects approximately 5-8% of pregnancies worldwide and is a leading cause of maternal and fetal complications. If left untreated, it can progress to eclampsia (seizures) or HELLP syndrome (hemolysis, elevated liver enzymes, low platelets), both of which are life-threatening.
          </p>
          <p className="mb-4">
            <strong>Diagnostic criteria for pre-eclampsia:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Blood pressure:</strong> Systolic ≥140 mmHg or diastolic ≥90 mmHg on two occasions at least 4 hours apart, measured after 20 weeks of pregnancy</li>
            <li><strong>Proteinuria:</strong> ≥300 mg of protein in a 24-hour urine collection, or protein/creatinine ratio ≥0.3</li>
            <li><strong>Or, in the absence of proteinuria, new onset of:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Thrombocytopenia (platelet count {'<'}100,000/microliter)</li>
                <li>Impaired liver function (elevated liver enzymes)</li>
                <li>Renal insufficiency (serum creatinine {'>'}1.1 mg/dL)</li>
                <li>Pulmonary edema</li>
                <li>New-onset headache or visual disturbances</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Classification:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Mild pre-eclampsia:</strong> Blood pressure 140-159/90-109 mmHg with proteinuria or other organ involvement</li>
            <li><strong>Severe pre-eclampsia:</strong> Blood pressure ≥160/110 mmHg and/or severe symptoms (headache, vision changes, upper abdominal pain, significantly elevated liver enzymes, low platelets, pulmonary edema, impaired kidney function)</li>
            <li><strong>Superimposed pre-eclampsia:</strong> Pre-eclampsia that develops in women with chronic hypertension</li>
          </ul>
          <p className="mb-4">
            <strong>Risk factors:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>First pregnancy</li>
            <li>Previous history of pre-eclampsia</li>
            <li>Chronic hypertension or kidney disease</li>
            <li>Autoimmune disorders (lupus, antiphospholipid syndrome)</li>
            <li>Diabetes (pre-existing or gestational)</li>
            <li>Multiple gestation (twins, triplets)</li>
            <li>Obesity (BMI ≥30)</li>
            <li>Age ({'<'}18 or {'>'}35 years)</li>
            <li>Family history of pre-eclampsia</li>
            <li>In vitro fertilization (IVF) pregnancy</li>
          </ul>
          <p className="mb-4">
            <strong>Complications:</strong> Pre-eclampsia can lead to serious maternal complications including stroke, seizures (eclampsia), organ failure, placental abruption, and HELLP syndrome. For the baby, it can cause intrauterine growth restriction, preterm birth, low birth weight, and stillbirth.
          </p>
          <p className="mb-4">
            <strong>Management and prevention:</strong> Low-dose aspirin (81 mg daily) started before 16 weeks of pregnancy is recommended for women at high risk. Calcium supplementation may reduce risk in populations with low dietary calcium intake. The only definitive cure for pre-eclampsia is delivery of the baby, though timing depends on gestational age and severity. Management includes blood pressure control, magnesium sulfate to prevent seizures, and close monitoring.
          </p>
          <p className="mb-4">
            Women who have had pre-eclampsia are at increased risk for cardiovascular disease later in life, making long-term follow-up important.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: AlertCircle, 
          title: "Serious Pregnancy Complication", 
          description: "Pre-eclampsia affects 5-8% of pregnancies, causing high blood pressure and organ damage after 20 weeks. If untreated, it can progress to life-threatening eclampsia (seizures) or HELLP syndrome." 
        },
        { 
          icon: Heart, 
          title: "Multiple Risk Factors", 
          description: "Risk factors include first pregnancy, previous pre-eclampsia, chronic hypertension, autoimmune disorders, diabetes, obesity, multiple gestation, and extremes of maternal age. Low-dose aspirin can reduce risk in high-risk women." 
        },
        { 
          icon: Activity, 
          title: "Requires Close Monitoring", 
          description: "Diagnosis involves elevated blood pressure (≥140/90 mmHg) plus proteinuria or other organ involvement. Management includes BP control, magnesium sulfate, and close monitoring. Delivery is the only definitive cure." 
        }
      ]}
      
      currentPage="preeclampsia"

      
      relatedTerms={['bloodpressure', 'hypertensive', 'biomarker', 'cardiovascular']}
    />
  );
}
