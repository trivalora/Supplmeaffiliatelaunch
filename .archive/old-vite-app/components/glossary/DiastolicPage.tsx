'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, Activity, TrendingDown } from 'lucide-react';

export function DiastolicPage() {
  return (
    <GlossaryTemplate
      term="Diastolic Blood Pressure"
      pronunciation="dye-uh-stol-ik"
      definition="Diastolic blood pressure is the bottom number in a blood pressure reading, representing the pressure in the arteries when the heart is at rest between beats. It measures the minimum pressure on artery walls during the heart's relaxation phase."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Between heartbeats, your heart relaxes and refills with blood in a phase called diastole. During this relaxation phase, the pressure in your arteries decreases to its lowest point. Diastolic blood pressure measures this minimum pressure.
          </p>
          <p className="mb-4">
            In a blood pressure reading written as "120/80 mmHg," the second number (80) is the diastolic pressure. While typically lower and historically considered less important than systolic pressure, diastolic pressure still provides valuable information about cardiovascular health, especially in younger individuals.
          </p>
          <p className="mb-4">
            <strong>Diastolic blood pressure categories:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Normal:</strong> Less than 80 mmHg</li>
            <li><strong>Elevated:</strong> Not applicable for diastolic alone</li>
            <li><strong>Hypertension Stage 1:</strong> 80-89 mmHg</li>
            <li><strong>Hypertension Stage 2:</strong> 90 mmHg or higher</li>
            <li><strong>Hypertensive Crisis:</strong> Higher than 120 mmHg (requires immediate medical attention)</li>
          </ul>
          <p className="mb-4">
            Diastolic pressure reflects the resistance in the peripheral blood vessels and the health of the arterial system. A high diastolic pressure means the heart is working harder than normal during its resting phase, which can indicate increased vascular resistance.
          </p>
          <p className="mb-4">
            Factors that can elevate diastolic blood pressure include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Vasoconstriction (narrowing of blood vessels)</li>
            <li>Increased blood volume</li>
            <li>Stress and anxiety</li>
            <li>Kidney disease</li>
            <li>Thyroid problems</li>
            <li>Certain medications (NSAIDs, decongestants, some antidepressants)</li>
            <li>Sleep apnea</li>
            <li>Excessive caffeine or stimulant use</li>
          </ul>
          <p className="mb-4">
            In younger adults (under 50), diastolic pressure may be a better predictor of cardiovascular risk than systolic pressure. Isolated diastolic hypertension (high diastolic with normal systolic) is more common in younger people and still requires treatment.
          </p>
          <p className="mb-4">
            Very low diastolic pressure (below 60 mmHg) can also be concerning, as it may indicate insufficient blood flow to the heart muscle itself, especially in people with heart disease or those taking blood pressure medications.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Resting Arterial Pressure", 
          description: "Diastolic pressure measures the minimum force on artery walls when the heart relaxes between beats. It's the bottom number in a blood pressure reading and reflects vascular resistance." 
        },
        { 
          icon: Activity, 
          title: "Important in Younger Adults", 
          description: "While systolic pressure is emphasized for older adults, diastolic pressure can be a better predictor of cardiovascular risk in people under 50. Elevated diastolic indicates increased vascular resistance." 
        },
        { 
          icon: TrendingDown, 
          title: "Both High and Low Can Be Problems", 
          description: "High diastolic pressure strains the cardiovascular system and requires treatment. However, very low diastolic pressure (below 60) may reduce blood flow to the heart muscle, especially in those with heart disease." 
        }
      ]}
      
      relatedTerms={['bloodpressure', 'systolic', 'cardiovascular', 'hypertensive']}
    />
  );
}
