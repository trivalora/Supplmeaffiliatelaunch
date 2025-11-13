import { GlossaryTemplate } from '../GlossaryTemplate';
import { Scale, TrendingUp, AlertCircle } from 'lucide-react';

export function BMIPage() {
  return (
    <GlossaryTemplate
      term="BMI"
      abbreviation="Body Mass Index"
      pronunciation="bee-em-eye"
      definition="A numerical value calculated from a person's weight and height, used as a screening tool to categorize individuals into different weight status categories. It is calculated by dividing weight in kilograms by height in meters squared (kg/m²)."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Body Mass Index (BMI) is a simple, widely used metric for assessing body weight relative to height. While it doesn't directly measure body fat or health status, it provides a quick screening tool for weight categories that may be associated with health risks.
          </p>
          <p className="mb-4">
            <strong>BMI Categories (Adults):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Underweight:</strong> &lt;18.5 kg/m²</li>
            <li><strong>Normal Weight:</strong> 18.5-24.9 kg/m²</li>
            <li><strong>Overweight:</strong> 25.0-29.9 kg/m²</li>
            <li><strong>Obese (Class I):</strong> 30.0-34.9 kg/m²</li>
            <li><strong>Obese (Class II):</strong> 35.0-39.9 kg/m²</li>
            <li><strong>Obese (Class III):</strong> ≥40.0 kg/m²</li>
          </ul>
          <p className="mb-4">
            <strong>Use in Research:</strong>
          </p>
          <p className="mb-4">
            In supplement research, BMI is commonly used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Categorize study participants:</strong> BMI is used for subgroup analysis to assess whether effects differ by weight status</li>
            <li><strong>Determine eligibility:</strong> Studies may include or exclude participants based on BMI thresholds</li>
            <li><strong>Control for confounding:</strong> BMI can be adjusted for as a variable that might influence outcomes</li>
            <li><strong>Assess metabolic health:</strong> BMI is often measured alongside metabolic biomarkers like blood glucose, lipids, and blood pressure</li>
          </ul>
          <p className="mb-4">
            For example, a study might find that vitamin D supplementation has more pronounced effects on insulin sensitivity in participants with BMI ≥30 kg/m² compared to those with normal BMI, suggesting that weight status influences response to the intervention.
          </p>
          <p className="mb-4">
            <strong>Limitations:</strong>
          </p>
          <p className="mb-4">
            BMI has several important limitations as a measure of health:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Doesn't distinguish fat from muscle:</strong> Athletes with high muscle mass may be classified as overweight or obese despite low body fat</li>
            <li><strong>Age and sex differences:</strong> The same BMI can represent different body fat percentages in different demographics</li>
            <li><strong>Ethnicity variations:</strong> Health risks associated with certain BMI values differ across ethnic groups. For example, Asian populations may have increased health risks at lower BMI values</li>
            <li><strong>Body fat distribution:</strong> BMI doesn't account for where fat is stored. Visceral (abdominal) fat is more metabolically harmful than subcutaneous fat</li>
            <li><strong>Not a diagnostic tool:</strong> BMI is a screening tool, not a direct measure of health, body fat percentage, or disease risk</li>
          </ul>
          <p className="mb-4">
            Despite these limitations, BMI remains valuable for population-level assessments and research because it's simple to calculate, inexpensive, and correlates reasonably well with health risks at the population level.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Scale, 
          title: "Simple Weight Assessment", 
          description: "BMI is calculated as weight (kg) divided by height (m) squared. It provides a quick, standardized way to categorize weight status from underweight (<18.5) to obese (≥30 kg/m²)." 
        },
        { 
          icon: TrendingUp, 
          title: "Research Tool", 
          description: "In supplement studies, BMI helps researchers categorize participants, perform subgroup analyses, and assess whether weight status influences intervention effects or metabolic outcomes." 
        },
        { 
          icon: AlertCircle, 
          title: "Screening, Not Diagnosis", 
          description: "BMI has important limitations—it doesn't distinguish muscle from fat, account for body fat distribution, or apply equally across all age groups and ethnicities. It's a screening tool, not a definitive health measure." 
        }
      ]}
      
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Subgroup Analysis", key: "subgroupanalysis" },
        { term: "Metabolic Syndrome", key: "metabolicsyndrome" }
      ]}
    />
  );
}
