'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, CheckCircle, TrendingUp } from 'lucide-react';

export function NormotensivePage() {
  return (
    <GlossaryTemplate
      term="Normotensive"
      pronunciation="nor-moh-ten-siv"
      definition="Normotensive describes a person who has normal blood pressure levels, typically defined as systolic pressure less than 120 mmHg and diastolic pressure less than 80 mmHg. It indicates that blood pressure is within the healthy range without medication."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            The term "normotensive" is used in medical and research contexts to classify individuals based on their blood pressure status. Someone who is normotensive has blood pressure readings consistently in the normal range, indicating healthy cardiovascular function and appropriate arterial pressure.
          </p>
          <p className="mb-4">
            <strong>Normal blood pressure classification:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Systolic:</strong> Less than 120 mmHg</li>
            <li><strong>Diastolic:</strong> Less than 80 mmHg</li>
            <li><strong>Both values must be in the normal range</strong> for a person to be classified as normotensive</li>
          </ul>
          <p className="mb-4">
            Being normotensive is associated with lower risk of cardiovascular disease, stroke, kidney disease, and other complications related to abnormal blood pressure. However, it's important to maintain this status through healthy lifestyle habits, as blood pressure naturally tends to increase with age.
          </p>
          <p className="mb-4">
            <strong>How normotensive status is used in research:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Baseline comparison:</strong> Studies often compare interventions in normotensive versus hypertensive populations to see if effects differ</li>
            <li><strong>Prevention studies:</strong> Research may examine whether supplements or lifestyle interventions help normotensive individuals maintain healthy blood pressure as they age</li>
            <li><strong>Safety assessment:</strong> Interventions are tested in normotensive individuals to ensure they don't lower blood pressure excessively</li>
            <li><strong>Subgroup analysis:</strong> Results may differ between normotensive and hypertensive participants, affecting clinical recommendations</li>
          </ul>
          <p className="mb-4">
            Even normotensive individuals can benefit from heart-healthy behaviors including regular exercise, a balanced diet rich in fruits and vegetables, maintaining a healthy weight, limiting sodium intake, managing stress, getting adequate sleep, and limiting alcohol consumption. These practices help maintain normotensive status and support overall cardiovascular health.
          </p>
          <p className="mb-4">
            It's worth noting that "normotensive" specifically refers to natural, unmedicated blood pressure. Someone taking blood pressure medication who achieves normal readings would be described as having "controlled hypertension" rather than being normotensive.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Normal Blood Pressure", 
          description: "Normotensive means having blood pressure in the healthy range (systolic &lt;120 and diastolic &lt;80 mmHg) without medication. It indicates good cardiovascular health and low risk of hypertension-related complications." 
        },
        { 
          icon: CheckCircle, 
          title: "Optimal Health Status", 
          description: "Being normotensive is associated with lower risk of heart attack, stroke, kidney disease, and other cardiovascular complications. Maintaining this status through lifestyle is important for long-term health." 
        },
        { 
          icon: TrendingUp, 
          title: "Important Research Category", 
          description: "Studies distinguish between normotensive and hypertensive participants because interventions may have different effects or safety profiles in each group. Results often differ between populations." 
        }
      ]}
      
      currentPage="normotensive"

      
      relatedTerms={['bloodpressure', 'hypertensive', 'systolic', 'diastolic']}
    />
  );
}
