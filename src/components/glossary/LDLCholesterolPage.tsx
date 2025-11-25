'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, AlertTriangle, TrendingDown } from 'lucide-react';

export function LDLCholesterolPage() {
  return (
    <GlossaryTemplate
      term="LDL Cholesterol (Low-Density Lipoprotein)"
      abbreviation="LDL, LDL-C, Bad Cholesterol"
      pronunciation="el-dee-el kuh-les-tuh-rawl"
      definition="A type of lipoprotein that transports cholesterol from the liver to peripheral tissues, with elevated levels strongly associated with atherosclerosis and cardiovascular disease risk. Often called 'bad cholesterol' because high levels contribute to arterial plaque buildup."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Low-density lipoprotein (LDL) cholesterol is one of several lipoproteins that transport cholesterol and triglycerides through the bloodstream. LDL particles carry cholesterol from the liver to cells throughout the body where it's needed for cell membrane structure, hormone production, and other vital functions. However, when LDL cholesterol levels are too high, excess LDL can infiltrate artery walls, become oxidized, trigger inflammation, and contribute to atherosclerotic plaque formation—the underlying cause of most heart attacks and strokes.
          </p>
          <p className="mb-4">
            <strong>LDL cholesterol ranges and cardiovascular risk:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Optimal:</strong> &lt;100 mg/dL (2.6 mmol/L) — ideal for cardiovascular health</li>
            <li><strong>Near optimal:</strong> 100-129 mg/dL (2.6-3.3 mmol/L) — acceptable for most people, though lower is better for high-risk individuals</li>
            <li><strong>Borderline high:</strong> 130-159 mg/dL (3.4-4.1 mmol/L) — increased cardiovascular risk; lifestyle changes recommended</li>
            <li><strong>High:</strong> 160-189 mg/dL (4.1-4.9 mmol/L) — high cardiovascular risk; medication often recommended</li>
            <li><strong>Very high:</strong> ≥190 mg/dL (≥4.9 mmol/L) — very high risk; aggressive treatment typically recommended</li>
          </ul>
          <p className="mb-4">
            For individuals with established cardiovascular disease, diabetes, or very high risk, target LDL is often &lt;70 mg/dL or even &lt;55 mg/dL.
          </p>
          <p className="mb-4">
            <strong>How LDL contributes to cardiovascular disease:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Plaque formation:</strong> Excess LDL particles penetrate the endothelial lining of arteries, particularly at sites of inflammation or damage. Once in the artery wall, LDL becomes oxidized (oxidized LDL or oxLDL), which triggers immune responses.
            </li>
            <li>
              <strong>Inflammation and immune activation:</strong> Oxidized LDL is recognized as dangerous by immune cells (macrophages), which engulf it and become foam cells—key components of atherosclerotic plaques.
            </li>
            <li>
              <strong>Plaque growth and instability:</strong> Over time, plaques grow, narrow arteries (reducing blood flow), and can become unstable. Plaque rupture triggers blood clot formation, causing heart attacks or strokes.
            </li>
            <li>
              <strong>Endothelial dysfunction:</strong> High LDL impairs the function of the endothelium (artery lining), reducing nitric oxide production and impairing vasodilation.
            </li>
          </ul>
          <p className="mb-4">
            <strong>LDL particle size and subfractions:</strong>
          </p>
          <p className="mb-4">
            Not all LDL particles are equal. Advanced lipid testing can distinguish between:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Small, dense LDL particles:</strong> More atherogenic (plaque-forming) because they penetrate artery walls more easily and are more susceptible to oxidation. Associated with higher cardiovascular risk.</li>
            <li><strong>Large, buoyant LDL particles:</strong> Less atherogenic and less likely to contribute to plaque formation.</li>
            <li><strong>LDL particle number (LDL-P):</strong> Some evidence suggests that the total number of LDL particles may be a better predictor of cardiovascular risk than LDL cholesterol concentration alone.</li>
          </ul>
          <p className="mb-4">
            <strong>Factors that raise LDL cholesterol:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Diet high in saturated fats (particularly from fatty meats, butter, full-fat dairy, tropical oils)</li>
            <li>Diet high in trans fats (partially hydrogenated oils in processed foods)</li>
            <li>Excess dietary cholesterol (though this has less impact than saturated/trans fats for most people)</li>
            <li>Obesity and excess body weight, particularly visceral fat</li>
            <li>Physical inactivity and sedentary lifestyle</li>
            <li>Genetics (familial hypercholesterolemia, family history)</li>
            <li>Hypothyroidism, kidney disease, diabetes</li>
            <li>Smoking</li>
          </ul>
          <p className="mb-4">
            <strong>LDL reduction strategies:</strong>
          </p>
          <p className="mb-4">
            <strong>Lifestyle interventions:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Reduce saturated fat intake (replace with unsaturated fats from nuts, seeds, olive oil, avocado, fatty fish)</li>
            <li>Eliminate trans fats completely</li>
            <li>Increase soluble fiber intake (oats, beans, lentils, vegetables, fruits)</li>
            <li>Include plant sterols/stanols (naturally in plants, also added to certain foods)</li>
            <li>Regular aerobic exercise (30+ minutes most days)</li>
            <li>Weight loss if overweight (5-10% body weight reduction can significantly lower LDL)</li>
            <li>Stop smoking</li>
          </ul>
          <p className="mb-4">
            <strong>Supplements with evidence for LDL reduction:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Whey protein:</strong> Meta-analyses show LDL cholesterol reduction of approximately 5.38 mg/dL (p&lt;0.01) in adults under 50 years, with metabolic syndrome showing improvements in total and LDL cholesterol</li>
            <li><strong>Curcumin:</strong> Lipid profile improvements documented in umbrella meta-analyses, including benefits for LDL cholesterol alongside total cholesterol and triglycerides</li>
            <li><strong>Omega-3 fatty acids (EPA/DHA):</strong> Primarily reduce triglycerides, with variable effects on LDL (may increase slightly in some individuals but shift particle size to less atherogenic forms)</li>
            <li><strong>Plant sterols/stanols:</strong> 2g daily reduces LDL by approximately 5-10%</li>
            <li><strong>Soluble fiber supplements:</strong> Psyllium, beta-glucan reduce LDL by binding bile acids and cholesterol in the gut</li>
            <li><strong>Red yeast rice:</strong> Contains naturally occurring statins (monacolin K); effective but quality and potency vary; medical supervision recommended</li>
          </ul>
          <p className="mb-4">
            <strong>Medications:</strong>
          </p>
          <p className="mb-4">
            Statins are the most effective and widely prescribed LDL-lowering medications, reducing LDL by 30-50% depending on dose. Other options include ezetimibe, PCSK9 inhibitors, bile acid sequestrants, and bempedoic acid.
          </p>
          <p className="mb-4">
            <strong>Clinical significance:</strong>
          </p>
          <p className="mb-4">
            Every 39 mg/dL (1 mmol/L) reduction in LDL cholesterol is associated with approximately 20-25% reduction in major cardiovascular events (heart attack, stroke, cardiovascular death) over time. This dose-response relationship is consistent across interventions (lifestyle, supplements, medications) and makes LDL one of the most important modifiable cardiovascular risk factors.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Primary Cardiovascular Risk Factor", 
          description: "Elevated LDL cholesterol is a major cause of atherosclerosis and cardiovascular disease. Every 39 mg/dL reduction in LDL is associated with ~20-25% reduction in cardiovascular events." 
        },
        { 
          icon: AlertTriangle, 
          title: "Oxidized LDL Drives Plaque Formation", 
          description: "LDL particles that infiltrate artery walls become oxidized, triggering inflammation and immune responses that form atherosclerotic plaques. Small, dense LDL particles are particularly atherogenic." 
        },
        { 
          icon: TrendingDown, 
          title: "Responsive to Diet & Supplements", 
          description: "LDL can be reduced through diet (lower saturated/trans fats, higher fiber), exercise, weight loss, and supplements like whey protein (-5.38 mg/dL), plant sterols (-5-10%), and soluble fiber." 
        }
      ]}
      
      examples={[
        "An individual with LDL of 160 mg/dL who adopts a Mediterranean diet, exercises regularly, and takes plant sterols may reduce LDL to 120 mg/dL, significantly lowering cardiovascular risk",
        "Whey protein supplementation (20-40g daily) reduced LDL cholesterol by mean difference of 5.38 mg/dL (p&lt;0.01) in meta-analyses of adults under 50 years",
        "A person with familial hypercholesterolemia (genetic high cholesterol) combining lifestyle changes, supplements, and statin medication may achieve LDL &lt;70 mg/dL, dramatically reducing their very high cardiovascular risk"
      ]}
      
      currentPage="ldlcholesterol"

      
      relatedTerms={[
        { term: "HDL Cholesterol", key: "hdlcholesterol" },
        { term: "Triglycerides", key: "triglycerides" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
