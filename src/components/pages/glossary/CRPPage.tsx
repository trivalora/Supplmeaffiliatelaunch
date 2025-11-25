'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Flame, Heart, TrendingUp } from 'lucide-react';

export function CRPPage() {
  return (
    <GlossaryTemplate
      term="CRP (C-Reactive Protein)"
      abbreviation="CRP, hs-CRP (high-sensitivity CRP)"
      pronunciation="see-are-pee / see-ree-ak-tiv pro-teen"
      definition="An acute phase protein produced by the liver in response to inflammation, serving as a sensitive biomarker of systemic inflammation and cardiovascular disease risk."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            C-reactive protein (CRP) is one of the most widely used biomarkers of inflammation in clinical practice and research. It is produced by the liver in response to inflammatory signals, particularly the cytokine interleukin-6 (IL-6). CRP levels rise rapidly during acute inflammation from infection, injury, or tissue damage, and decline once the inflammatory stimulus resolves. However, chronically elevated CRP indicates ongoing low-grade systemic inflammation, which is associated with numerous chronic diseases.
          </p>
          <p className="mb-4">
            <strong>CRP measurement types and ranges:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Standard CRP test:</strong> Measures CRP in the range of 10-1000 mg/L, used primarily to detect acute inflammation, infection, or inflammatory diseases</li>
            <li><strong>High-sensitivity CRP (hs-CRP):</strong> Measures much lower concentrations (0.5-10 mg/L), used to assess cardiovascular disease risk and chronic low-grade inflammation</li>
          </ul>
          <p className="mb-4">
            <strong>hs-CRP ranges for cardiovascular risk assessment:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Low risk:</strong> &lt;1.0 mg/L — minimal inflammatory cardiovascular risk</li>
            <li><strong>Average risk:</strong> 1.0-3.0 mg/L — moderate inflammatory cardiovascular risk</li>
            <li><strong>High risk:</strong> &gt;3.0 mg/L — elevated inflammatory cardiovascular risk; associated with increased risk of heart attack and stroke</li>
            <li><strong>Very high (acute):</strong> &gt;10 mg/L — suggests acute inflammation, infection, or inflammatory disease rather than cardiovascular risk alone</li>
          </ul>
          <p className="mb-4">
            <strong>What causes elevated CRP:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Acute causes (rapid, dramatic increases):</strong> Bacterial or viral infections, injuries, surgery, acute inflammatory conditions (appendicitis, pancreatitis), autoimmune disease flares
            </li>
            <li>
              <strong>Chronic causes (persistent mild-moderate elevations):</strong> Obesity (particularly visceral fat), metabolic syndrome, type 2 diabetes, cardiovascular disease, chronic infections, inflammatory bowel disease, rheumatoid arthritis, smoking, poor diet, physical inactivity, chronic stress, poor sleep
            </li>
          </ul>
          <p className="mb-4">
            <strong>CRP and cardiovascular disease:</strong>
          </p>
          <p className="mb-4">
            CRP is not just a marker of inflammation—it may also actively contribute to atherosclerosis and cardiovascular disease. Elevated CRP is associated with endothelial dysfunction, increased arterial stiffness, plaque instability, and higher risk of heart attack and stroke. Individuals with hs-CRP &gt;3 mg/L have approximately 2-fold higher cardiovascular risk compared to those with levels &lt;1 mg/L, even after adjusting for traditional risk factors like cholesterol and blood pressure.
          </p>
          <p className="mb-4">
            <strong>CRP in supplement research:</strong>
          </p>
          <p className="mb-4">
            CRP is one of the most frequently measured outcomes in anti-inflammatory supplement studies. Numerous interventions have demonstrated CRP reductions in populations with elevated baseline inflammation:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Curcumin:</strong> Reduces CRP by approximately 1.55 mg/L in populations with chronic inflammation (statistically significant across multiple meta-analyses)</li>
            <li><strong>Magnesium:</strong> Reduces serum CRP (SMD -0.356) in individuals with baseline CRP &gt;3 mg/L, with effects most pronounced at doses of 250mg/day for ≥12 weeks</li>
            <li><strong>Omega-3 fatty acids (EPA/DHA):</strong> Meta-analyses show significant CRP reductions (1-4g/day), particularly in individuals with metabolic syndrome, rheumatoid arthritis, or inflammatory bowel disease</li>
            <li><strong>Vitamin D:</strong> Modest CRP reductions in vitamin D-deficient individuals, though effects are inconsistent across studies</li>
          </ul>
          <p className="mb-4">
            <strong>Interpreting CRP changes:</strong>
          </p>
          <p className="mb-4">
            Reductions in CRP are generally considered clinically meaningful if they move an individual from a higher risk category to a lower one (e.g., from &gt;3 mg/L to &lt;1 mg/L). Changes of 0.5-1.0 mg/L or greater are often considered significant. However, CRP should be interpreted alongside other inflammatory markers (IL-6, fibrinogen, TNF-α) and clinical outcomes. CRP can fluctuate with acute illness, so testing should be repeated or avoided during active infections.
          </p>
          <p className="mb-4">
            <strong>Limitations:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>CRP is a nonspecific marker—it rises with any type of inflammation and doesn't indicate the source</li>
            <li>Acute infections or injuries can cause dramatic but temporary CRP elevations that obscure baseline chronic inflammation levels</li>
            <li>CRP levels vary between individuals due to genetics, with some people naturally having higher or lower baseline levels</li>
            <li>Some individuals with cardiovascular disease have normal CRP, and some with elevated CRP remain healthy—it's one risk factor among many</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Flame, 
          title: "Marker of Systemic Inflammation", 
          description: "CRP is produced by the liver in response to inflammatory cytokines like IL-6. Chronic elevations indicate ongoing low-grade inflammation associated with metabolic syndrome, cardiovascular disease, and chronic conditions." 
        },
        { 
          icon: Heart, 
          title: "Cardiovascular Risk Indicator", 
          description: "hs-CRP &gt;3 mg/L indicates high cardiovascular risk and approximately doubles the risk of heart attack and stroke. Values &lt;1 mg/L indicate low inflammatory cardiovascular risk." 
        },
        { 
          icon: TrendingUp, 
          title: "Responsive to Interventions", 
          description: "CRP levels can be reduced through lifestyle changes (weight loss, exercise, diet) and supplements like curcumin (-1.55 mg/L), magnesium, and omega-3 fatty acids in individuals with elevated baseline inflammation." 
        }
      ]}
      
      examples={[
        "An individual with hs-CRP of 4.2 mg/L (high cardiovascular risk) who loses weight, exercises regularly, and takes curcumin supplements may reduce it to 2.1 mg/L (average risk)",
        "Curcumin supplementation reduced CRP by 1.55 mg/L in meta-analyses of populations with chronic inflammation, representing a meaningful risk reduction",
        "Magnesium supplementation (250-500mg daily) reduced serum CRP significantly (SMD -0.356) in individuals with baseline CRP &gt;3 mg/L, showing anti-inflammatory benefits"
      ]}
      
      currentPage="crp"

      
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "IL-6", key: "il6" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Fibrinogen", key: "fibrinogen" }
      ]}
    />
  );
}
