'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { TrendingUp, Activity, AlertCircle } from 'lucide-react';

export function BloodGlucosePage() {
  return (
    <GlossaryTemplate
      term="Blood Glucose"
      pronunciation="blud gloo-kohs"
      definition="Blood glucose, also called blood sugar, is the amount of glucose (a simple sugar) present in the blood. It's the body's primary energy source and its levels are tightly regulated by hormones like insulin and glucagon."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Blood glucose comes primarily from the food you eat, especially carbohydrates, which are broken down into glucose during digestion. Your body maintains blood glucose levels within a narrow range (typically 70-100 mg/dL when fasting) through a complex system of hormones and metabolic processes.
          </p>
          <p className="mb-4">
            When blood glucose rises after eating, the pancreas releases insulin, which helps cells absorb glucose from the bloodstream. Between meals, when blood glucose levels drop, the liver releases stored glucose (glycogen) to maintain stable levels. This balance is crucial for providing steady energy to cells, especially the brain, which relies almost exclusively on glucose for fuel.
          </p>
          <p className="mb-4">
            Blood glucose levels are measured in several ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Fasting blood glucose:</strong> Measured after 8+ hours without eating; normal is 70-100 mg/dL</li>
            <li><strong>Random/casual blood glucose:</strong> Measured at any time; typically should be below 140 mg/dL</li>
            <li><strong>Postprandial (after meal) glucose:</strong> Measured 1-2 hours after eating; typically should be below 140 mg/dL</li>
            <li><strong>HbA1c (hemoglobin A1C):</strong> Reflects average blood glucose over the past 2-3 months; normal is below 5.7%</li>
          </ul>
          <p className="mb-4">
            Chronically elevated blood glucose (hyperglycemia) is the hallmark of diabetes. Pre-diabetes is defined as fasting glucose of 100-125 mg/dL or HbA1c of 5.7-6.4%. Diabetes is diagnosed at fasting glucose ≥126 mg/dL or HbA1c ≥6.5%.
          </p>
          <p className="mb-4">
            Maintaining healthy blood glucose levels is important for preventing complications including cardiovascular disease, kidney disease, nerve damage, and eye problems. Diet, exercise, stress management, sleep, and certain supplements can all influence blood glucose regulation.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Activity, 
          title: "Energy Regulation", 
          description: "Blood glucose is the body's primary fuel source. It must be maintained within a narrow range to provide steady energy while avoiding both hypoglycemia (dangerously low) and hyperglycemia (damaging high)." 
        },
        { 
          icon: TrendingUp, 
          title: "Hormonal Control", 
          description: "Insulin lowers blood glucose by promoting cellular uptake, while glucagon raises it by triggering glucose release from the liver. This precise balance maintains stable blood sugar throughout the day." 
        },
        { 
          icon: AlertCircle, 
          title: "Long-term Health Impact", 
          description: "Chronically elevated blood glucose damages blood vessels and nerves, leading to serious complications. Maintaining healthy levels through diet, exercise, and lifestyle is crucial for metabolic health." 
        }
      ]}
      
      currentPage="bloodglucose"

      
      relatedTerms={[
        { term: "Glycemic Control", key: "glycemiccontrol" },
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
