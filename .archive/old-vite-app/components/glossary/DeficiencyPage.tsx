'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { AlertTriangle, Activity, TestTube, TrendingDown, Stethoscope, CheckCircle } from 'lucide-react';

export function DeficiencyPage() {
  return (
    <GlossaryTemplate
      term="Deficiency"
      partOfSpeech="noun"
      definition="A nutrient deficiency occurs when the body doesn't get or can't absorb enough of a nutrient to meet its physiological needs. Deficiencies can range from subclinical (measurable in lab tests but not causing obvious symptoms) to severe (causing clear clinical symptoms and disease)."
      
      whyItMatters="Supplement effectiveness often depends on baseline status. In deficient individuals, supplementation typically shows strong benefits as it corrects the deficiency. In sufficient individuals, additional supplementation may show minimal benefits or none. This is why baseline testing and stratification by deficiency status is important in clinical trials."
      
      keyPoints={[
        {
          icon: AlertTriangle,
          title: "Types of Deficiency",
          description: "Clinical deficiency causes recognizable symptoms and disease (e.g., scurvy from vitamin C deficiency). Subclinical deficiency shows low levels in testing but without obvious symptoms. Marginal deficiency means levels below optimal but above deficiency threshold. Functional deficiency shows adequate blood levels but impaired function at cellular or tissue level."
        },
        {
          icon: TrendingDown,
          title: "Common Causes",
          description: "Deficiencies can result from inadequate intake (poor diet, food insecurity, restrictive diets), malabsorption (GI disorders like celiac, Crohn's, IBS), increased needs (pregnancy, lactation, growth, illness), increased losses (heavy menstruation, kidney disease, medications), impaired activation (liver or kidney disease), or genetic factors affecting absorption or utilization."
        },
        {
          icon: TestTube,
          title: "Diagnostic Methods",
          description: "Deficiency is typically diagnosed through blood tests (serum or plasma levels), functional tests (enzyme activity or metabolic markers), clinical symptoms (physical signs specific to each nutrient), dietary assessment (intake below recommended levels), and response to supplementation (improvement with repletion)."
        }
      ]}
      
      examples={[
        "Iron deficiency: Most common nutrient deficiency worldwide; causes anemia and fatigue",
        "Vitamin D deficiency: Extremely common in northern climates; affects bone health and immunity",
        "Vitamin B12 deficiency: Common in vegans and older adults; causes anemia and neurological symptoms",
        "Magnesium deficiency: Often subclinical; may affect cardiovascular health and muscle function",
        "Iodine deficiency: Rare in developed countries with iodized salt; causes thyroid dysfunction"
      ]}
      
      expandedExplanation={
        <>
          <p><strong>Treatment approaches:</strong> Treating deficiency typically involves higher repletion doses initially (often above RDA), addressing underlying causes (diet, malabsorption, medications), choosing highly bioavailable forms, monitoring response through follow-up testing, and transitioning to maintenance doses once replete.</p>
          
          <p className="mt-4">Different nutrients have different definitions of deficiency based on blood levels, tissue stores, or functional markers. For example, serum vitamin D &lt;20 ng/mL is considered deficient, while iron deficiency is diagnosed through multiple markers including serum ferritin, hemoglobin, and transferrin saturation.</p>
        </>
      }
      
      relatedTerms={[
        'Bioavailability',
        'Absorption',
        'Biomarker',
        'Serum',
        'Therapeutic Dose'
      ]}
    />
  );
}
