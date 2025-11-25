'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, TrendingUp, Activity } from 'lucide-react';

export function SystolicPage() {
  return (
    <GlossaryTemplate
      term="Systolic Blood Pressure"
      pronunciation="sis-tol-ik"
      definition="Systolic blood pressure is the top number in a blood pressure reading, representing the maximum pressure in the arteries when the heart contracts and pumps blood. It measures the force exerted on artery walls during the heart's active pumping phase."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            When your heart beats, it contracts (a phase called systole) to pump blood from the left ventricle into the aorta and throughout the body's arterial system. This contraction creates a surge of pressure that pushes blood through your arteries. Systolic blood pressure measures this peak pressure.
          </p>
          <p className="mb-4">
            In a blood pressure reading written as "120/80 mmHg," the first number (120) is the systolic pressure. This is typically the higher of the two numbers and is considered more important for assessing cardiovascular risk, especially in people over 50.
          </p>
          <p className="mb-4">
            <strong>Systolic blood pressure categories:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Normal:</strong> Less than 120 mmHg</li>
            <li><strong>Elevated:</strong> 120-129 mmHg (with diastolic &lt;80 mmHg)</li>
            <li><strong>Hypertension Stage 1:</strong> 130-139 mmHg</li>
            <li><strong>Hypertension Stage 2:</strong> 140 mmHg or higher</li>
            <li><strong>Hypertensive Crisis:</strong> Higher than 180 mmHg (requires immediate medical attention)</li>
          </ul>
          <p className="mb-4">
            Elevated systolic pressure (isolated systolic hypertension) is particularly common in older adults due to stiffening of the arteries with age. Even when diastolic pressure is normal, elevated systolic pressure significantly increases the risk of heart attack, stroke, heart failure, and kidney disease.
          </p>
          <p className="mb-4">
            Factors that can increase systolic blood pressure include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Arterial stiffness (arteriosclerosis)</li>
            <li>High sodium intake</li>
            <li>Excess body weight</li>
            <li>Physical inactivity</li>
            <li>Excessive alcohol consumption</li>
            <li>Chronic stress</li>
            <li>Age (blood vessels become stiffer over time)</li>
            <li>Certain medical conditions (kidney disease, thyroid disorders, sleep apnea)</li>
          </ul>
          <p className="mb-4">
            Lowering elevated systolic pressure through lifestyle modifications (diet, exercise, weight loss, stress management) and, when necessary, medications can significantly reduce cardiovascular risk and improve overall health outcomes.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Peak Arterial Pressure", 
          description: "Systolic pressure measures the maximum force on artery walls when the heart contracts. It's the top number in a blood pressure reading and typically the higher value." 
        },
        { 
          icon: TrendingUp, 
          title: "Primary Risk Indicator", 
          description: "Systolic pressure is considered more important than diastolic for predicting cardiovascular events, especially in people over 50. Elevated systolic pressure increases risk of heart attack, stroke, and organ damage." 
        },
        { 
          icon: Activity, 
          title: "Increases with Age", 
          description: "Systolic blood pressure tends to rise with age due to arterial stiffening. Isolated systolic hypertension (high systolic with normal diastolic) is common in older adults and requires treatment." 
        }
      ]}
      
      relatedTerms={['bloodpressure', 'diastolic', 'cardiovascular', 'hypertensive']}
    />
  );
}
