'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, AlertCircle, TrendingUp } from 'lucide-react';

export function HypertensivePage() {
  return (
    <GlossaryTemplate
      term="Hypertensive"
      pronunciation="hy-per-ten-siv"
      definition="Hypertensive describes a person who has high blood pressure (hypertension), typically defined as systolic pressure of 130 mmHg or higher and/or diastolic pressure of 80 mmHg or higher. It indicates elevated pressure in the arteries that increases cardiovascular risk."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            The term "hypertensive" is used to classify individuals with elevated blood pressure above normal ranges. Hypertension is one of the most common chronic conditions worldwide and a major risk factor for heart disease, stroke, kidney failure, and other serious health problems.
          </p>
          <p className="mb-4">
            <strong>Blood pressure classifications for hypertensive status:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Elevated:</strong> Systolic 120-129 mmHg and diastolic &lt;80 mmHg (at increased risk, not yet hypertensive)</li>
            <li><strong>Hypertension Stage 1:</strong> Systolic 130-139 mmHg or diastolic 80-89 mmHg</li>
            <li><strong>Hypertension Stage 2:</strong> Systolic ≥140 mmHg or diastolic ≥90 mmHg</li>
            <li><strong>Hypertensive Crisis:</strong> Systolic &gt;180 mmHg and/or diastolic &gt;120 mmHg (requires immediate medical care)</li>
          </ul>
          <p className="mb-4">
            Hypertension is often called the "silent killer" because it typically produces no symptoms until significant damage has occurred. Many people are hypertensive without knowing it, which is why regular blood pressure screening is important.
          </p>
          <p className="mb-4">
            <strong>Types of hypertension:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Primary (essential) hypertension:</strong> The most common type (90-95% of cases) with no identifiable cause, develops gradually over years</li>
            <li><strong>Secondary hypertension:</strong> Caused by an underlying condition (kidney disease, hormonal disorders, sleep apnea, certain medications)</li>
            <li><strong>Isolated systolic hypertension:</strong> High systolic (≥130) with normal diastolic, common in older adults</li>
            <li><strong>Isolated diastolic hypertension:</strong> High diastolic (≥80) with normal systolic, more common in younger adults</li>
            <li><strong>White coat hypertension:</strong> Blood pressure is high in medical settings but normal at home</li>
            <li><strong>Masked hypertension:</strong> Normal in medical settings but high at home (often missed)</li>
          </ul>
          <p className="mb-4">
            <strong>How hypertensive status is used in research:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Studies often specifically recruit hypertensive participants to test blood pressure-lowering interventions</li>
            <li>Effects of supplements or lifestyle changes may be more pronounced in hypertensive versus normotensive individuals</li>
            <li>Baseline blood pressure affects the magnitude of response to interventions</li>
            <li>Safety monitoring is critical since excessive blood pressure reduction can be harmful</li>
          </ul>
          <p className="mb-4">
            Managing hypertension involves lifestyle modifications (diet, exercise, weight loss, stress reduction, limiting sodium and alcohol) and often medications. Even modest reductions in blood pressure (5-10 mmHg) can significantly reduce cardiovascular risk.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "High Blood Pressure", 
          description: "Hypertensive indicates blood pressure ≥130/80 mmHg. It's a major cardiovascular risk factor that damages blood vessels, heart, kidneys, and other organs over time if left untreated." 
        },
        { 
          icon: AlertCircle, 
          title: "Silent but Serious", 
          description: "Hypertension usually has no symptoms but significantly increases risk of heart attack, stroke, heart failure, and kidney disease. Regular screening is essential since many people are hypertensive without knowing it." 
        },
        { 
          icon: TrendingUp, 
          title: "Treatment Required", 
          description: "Hypertensive individuals benefit from lifestyle modifications (diet, exercise, weight loss, stress management) and often require medication. Even modest blood pressure reductions substantially lower cardiovascular risk." 
        }
      ]}
      
      relatedTerms={['bloodpressure', 'normotensive', 'systolic', 'diastolic', 'cardiovascular']}
    />
  );
}
