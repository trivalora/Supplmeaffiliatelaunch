import { GlossaryTemplate } from '../GlossaryTemplate';

export function VLDLPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <GlossaryTemplate
      term="VLDL"
      pronunciation="vee-el-dee-el"
      partOfSpeech="noun (lipoprotein)"
      onNavigate={onNavigate}
      
      definition={
        <p>
          <strong>Very Low-Density Lipoprotein (VLDL)</strong> is a type of <span className="font-medium">lipoprotein particle</span> produced by the liver that transports <span className="font-medium">triglycerides</span> and cholesterol from the liver to peripheral tissues. VLDL is one of the "bad" lipoproteins that contributes to cardiovascular disease risk when elevated.
        </p>
      }
      
      laypersonExplanation={
        <>
          <p>
            VLDL is like a delivery truck carrying fats (mainly triglycerides) from your liver to other parts of your body. When you eat more carbohydrates or calories than your body needs, your liver converts the excess into triglycerides and packages them into VLDL particles for transport.
          </p>
          <p>
            High VLDL levels are a sign that your liver is producing too much fat, often due to excess calorie intake, high-carbohydrate diets, insulin resistance, or metabolic syndrome. Like LDL cholesterol, high VLDL increases your risk of heart disease.
          </p>
        </>
      }
      
      detailedExplanation={
        <>
          <p>
            <strong>VLDL Metabolism:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Synthesis:</span> The liver produces triglycerides from excess carbohydrates and packages them with cholesterol, phospholipids, and apolipoproteins (mainly ApoB-100, ApoC, ApoE) to form VLDL</li>
            <li><span className="font-medium">Secretion:</span> VLDL particles are released into the bloodstream</li>
            <li><span className="font-medium">Triglyceride delivery:</span> Lipoprotein lipase (LPL) in tissues breaks down VLDL triglycerides, releasing fatty acids for energy or storage</li>
            <li><span className="font-medium">Transformation:</span> As triglycerides are removed, VLDL becomes smaller and denser, first becoming IDL (intermediate-density lipoprotein), then eventually LDL</li>
            <li><span className="font-medium">Remnant clearance:</span> Some VLDL remnants are taken up by the liver; others continue to LDL</li>
          </ul>
          <p>
            <strong>Composition:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Triglycerides:</span> 50-65% (highest among lipoproteins)</li>
            <li><span className="font-medium">Cholesterol:</span> 10-15%</li>
            <li><span className="font-medium">Phospholipids:</span> 15-20%</li>
            <li><span className="font-medium">Proteins (apolipoproteins):</span> 5-10%</li>
          </ul>
          <p>
            <strong>Measurement:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Not directly measured:</span> Standard lipid panels don't measure VLDL directly</li>
            <li><span className="font-medium">Estimated calculation:</span> VLDL cholesterol ≈ Triglycerides / 5 (in mg/dL) or Triglycerides / 2.2 (in mmol/L)</li>
            <li><span className="font-medium">This estimate is valid when triglycerides are below 400 mg/dL</span></li>
            <li><span className="font-medium">Normal range:</span> VLDL cholesterol &lt; 30 mg/dL</li>
          </ul>
          <p>
            <strong>Health Implications:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Cardiovascular risk:</span> Elevated VLDL contributes to atherosclerosis</li>
            <li><span className="font-medium">Metabolic syndrome marker:</span> High VLDL often accompanies insulin resistance, abdominal obesity, and hypertension</li>
            <li><span className="font-medium">Type 2 diabetes:</span> Diabetics typically have elevated VLDL and triglycerides</li>
            <li><span className="font-medium">Remnant particles:</span> VLDL remnants are particularly atherogenic (plaque-forming)</li>
          </ul>
          <p>
            <strong>Factors Increasing VLDL:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">High-carbohydrate diets:</span> Excess carbs are converted to triglycerides</li>
            <li><span className="font-medium">Excess calorie intake:</span> Overfeeding drives VLDL production</li>
            <li><span className="font-medium">Insulin resistance:</span> Impairs VLDL clearance and increases production</li>
            <li><span className="font-medium">Obesity:</span> Particularly visceral (abdominal) fat</li>
            <li><span className="font-medium">Alcohol:</span> Increases hepatic triglyceride synthesis</li>
            <li><span className="font-medium">Certain medications:</span> Beta-blockers, diuretics, steroids</li>
          </ul>
          <p>
            <strong>Interventions to Reduce VLDL:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Dietary changes:</span> Reduce refined carbohydrates and total calories</li>
            <li><span className="font-medium">Weight loss:</span> Particularly effective for reducing VLDL</li>
            <li><span className="font-medium">Omega-3 fatty acids:</span> EPA/DHA reduce VLDL production and triglycerides</li>
            <li><span className="font-medium">Exercise:</span> Improves insulin sensitivity and VLDL clearance</li>
            <li><span className="font-medium">Medications:</span> Fibrates, niacin, statins (to varying degrees)</li>
          </ul>
          <p>
            Since VLDL is closely linked to triglyceride levels, interventions that lower triglycerides also reduce VLDL. The estimated VLDL value on standard lipid panels provides useful information about metabolic health and cardiovascular risk.
          </p>
        </>
      }
      
      exampleSentences={[
        "The liver produces triglycerides from excess carbohydrates and packages them into very low-density lipoproteins (VLDL) for transport to peripheral tissues.",
        "Omega-3 supplementation reduced triglycerides primarily by decreasing hepatic VLDL production.",
        "Individuals with metabolic syndrome typically have elevated VLDL, low HDL, and small dense LDL particles."
      ]}
      
      relatedTerms={[
        { term: 'Triglycerides', page: 'triglycerides' },
        { term: 'LDL Cholesterol', page: 'ldlcholesterol' },
        { term: 'HDL Cholesterol', page: 'hdlcholesterol' },
        { term: 'Cardiovascular', page: 'cardiovascular' },
        { term: 'Metabolic Syndrome', page: 'metabolicsyndrome' },
        { term: 'Insulin Resistance', page: 'insulinresistance' }
      ]}
    />
  );
}