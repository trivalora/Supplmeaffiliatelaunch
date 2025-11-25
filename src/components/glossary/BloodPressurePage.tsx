'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, Activity, TrendingDown } from 'lucide-react';

export function BloodPressurePage() {
  return (
    <GlossaryTemplate
      term="Blood Pressure"
      pronunciation="blud presh-er"
      definition="Blood pressure is the force exerted by circulating blood against the walls of blood vessels. It's measured as two numbers: systolic pressure (when the heart beats) over diastolic pressure (when the heart rests between beats), expressed in millimeters of mercury (mmHg)."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Blood pressure is one of the most important vital signs and a key indicator of cardiovascular health. When your heart beats, it pumps blood into your arteries, creating pressure on the arterial walls. This is the systolic pressure (the top number). Between beats, when your heart relaxes, the pressure in your arteries decreases—this is the diastolic pressure (the bottom number).
          </p>
          <p className="mb-4">
            Blood pressure is classified as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Normal:</strong> Systolic &lt;120 mmHg and Diastolic &lt;80 mmHg</li>
            <li><strong>Elevated:</strong> Systolic 120-129 mmHg and Diastolic &lt;80 mmHg</li>
            <li><strong>Hypertension Stage 1:</strong> Systolic 130-139 mmHg or Diastolic 80-89 mmHg</li>
            <li><strong>Hypertension Stage 2:</strong> Systolic ≥140 mmHg or Diastolic ≥90 mmHg</li>
            <li><strong>Hypertensive Crisis:</strong> Systolic &gt;180 mmHg and/or Diastolic &gt;120 mmHg (requires immediate medical attention)</li>
          </ul>
          <p className="mb-4">
            Multiple factors influence blood pressure including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Blood volume:</strong> More fluid in the bloodstream increases pressure</li>
            <li><strong>Cardiac output:</strong> How much blood the heart pumps per minute</li>
            <li><strong>Vascular resistance:</strong> How narrow or wide blood vessels are</li>
            <li><strong>Blood viscosity:</strong> How thick or thin the blood is</li>
          </ul>
          <p className="mb-4">
            High blood pressure (hypertension) is called the "silent killer" because it often has no symptoms but significantly increases the risk of heart attack, stroke, kidney disease, and other serious conditions. It damages blood vessels over time, making them stiffer and narrower.
          </p>
          <p className="mb-4">
            Blood pressure can be managed through lifestyle modifications including reducing sodium intake, increasing potassium intake, regular exercise, weight management, stress reduction, limiting alcohol, and getting adequate sleep. Certain supplements like magnesium, omega-3 fatty acids, and potassium may also help support healthy blood pressure levels.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Cardiovascular Health Marker", 
          description: "Blood pressure is one of the most important indicators of heart and blood vessel health. Maintaining healthy levels reduces risk of heart attack, stroke, and other cardiovascular diseases." 
        },
        { 
          icon: Activity, 
          title: "Two-Number Measurement", 
          description: "Systolic pressure (top number) measures pressure when the heart contracts, while diastolic pressure (bottom number) measures pressure when the heart relaxes. Both numbers are important for assessing cardiovascular risk." 
        },
        { 
          icon: TrendingDown, 
          title: "Lifestyle Sensitive", 
          description: "Blood pressure responds significantly to lifestyle factors including diet (especially sodium and potassium intake), exercise, weight, stress, sleep, and alcohol consumption." 
        }
      ]}
      
      relatedTerms={[
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Electrolytes", key: "electrolytes" },
        { term: "Inflammation", key: "inflammation" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
