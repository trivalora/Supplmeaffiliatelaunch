import { GlossaryTemplate } from '../GlossaryTemplate';

export function EndotheliumPage() {
  return (
      <GlossaryTemplate
        term="Endothelium"
        definition="The thin layer of specialized cells (endothelial cells) that lines the interior surface of all blood vessels and lymphatic vessels. This single-cell layer plays critical roles in vascular health, blood flow regulation, and cardiovascular function."
        content={
          <>
            <p className="content-text">
              The endothelium forms the interface between circulating blood and the vessel wall. Far from being a passive barrier, it is a highly active organ that regulates blood vessel tone, prevents blood clotting, controls inflammation, and influences the development of atherosclerosis. Endothelial dysfunction is recognized as an early marker of cardiovascular disease.
            </p>
            
            <h2 className="content-heading">Key Functions</h2>
            <ul className="glossary-list">
              <li><strong>Vascular tone regulation</strong> — Produces nitric oxide (NO) that dilates blood vessels, regulating blood pressure and flow</li>
              <li><strong>Barrier function</strong> — Controls permeability, regulating what passes from blood into tissues</li>
              <li><strong>Antithrombotic activity</strong> — Prevents inappropriate blood clotting and platelet adhesion</li>
              <li><strong>Anti-inflammatory role</strong> — Regulates leukocyte adhesion and controls inflammatory responses</li>
              <li><strong>Angiogenesis</strong> — Involved in new blood vessel formation</li>
              <li><strong>Hemostasis regulation</strong> — Balances clotting and anticoagulation</li>
            </ul>
            
            <h2 className="content-heading">Nitric Oxide and Vasodilation</h2>
            <p className="content-text">
              Nitric oxide is the endothelium's primary vasodilator:
            </p>
            <ul className="glossary-list">
              <li><strong>eNOS enzyme</strong> — Endothelial nitric oxide synthase produces NO from L-arginine</li>
              <li><strong>Vasodilation</strong> — NO relaxes smooth muscle in vessel walls, increasing blood flow</li>
              <li><strong>Shear stress response</strong> — Blood flow stimulates NO production (mechanism behind flow-mediated dilation)</li>
              <li><strong>Protective effects</strong> — NO inhibits platelet aggregation, smooth muscle proliferation, and leukocyte adhesion</li>
              <li><strong>Bioavailability</strong> — Oxidative stress reduces NO availability, impairing endothelial function</li>
            </ul>
            
            <h2 className="content-heading">Endothelial Dysfunction</h2>
            <p className="content-text">
              When the endothelium doesn't function properly:
            </p>
            <ul className="glossary-list">
              <li><strong>Reduced NO production</strong> — Impaired vasodilation and blood flow</li>
              <li><strong>Increased oxidative stress</strong> — Free radicals inactivate NO and damage endothelial cells</li>
              <li><strong>Pro-inflammatory state</strong> — Increased adhesion molecule expression, leukocyte recruitment</li>
              <li><strong>Pro-thrombotic tendency</strong> — Increased clotting risk</li>
              <li><strong>Increased permeability</strong> — Allows LDL cholesterol and inflammatory cells into vessel walls</li>
            </ul>
            
            <h2 className="content-heading">Risk Factors for Endothelial Dysfunction</h2>
            <ul className="glossary-list">
              <li>Hypertension (high blood pressure)</li>
              <li>Diabetes and insulin resistance</li>
              <li>Dyslipidemia (high LDL, low HDL cholesterol)</li>
              <li>Smoking</li>
              <li>Obesity and metabolic syndrome</li>
              <li>Sedentary lifestyle</li>
              <li>Chronic inflammation</li>
              <li>Oxidative stress</li>
              <li>Aging</li>
            </ul>
            
            <h2 className="content-heading">Measuring Endothelial Function</h2>
            <p className="content-text">
              Common assessment methods:
            </p>
            <ul className="glossary-list">
              <li><strong>Flow-mediated dilation (FMD)</strong> — Non-invasive ultrasound technique measuring artery dilation in response to increased blood flow; gold standard for assessing endothelial function</li>
              <li><strong>Peripheral arterial tonometry</strong> — Measures arterial pulse wave changes</li>
              <li><strong>Biomarkers</strong> — Circulating markers like endothelial microparticles, von Willebrand factor, asymmetric dimethylarginine (ADMA)</li>
            </ul>
            
            <h2 className="content-heading">Endothelium and Atherosclerosis</h2>
            <p className="content-text">
              Endothelial dysfunction is the first step in atherosclerosis development:
            </p>
            <ul className="glossary-list">
              <li><strong>Initial injury</strong> — Risk factors damage endothelium, reducing NO and increasing permeability</li>
              <li><strong>LDL infiltration</strong> — Dysfunctional endothelium allows LDL cholesterol into vessel wall</li>
              <li><strong>Oxidation</strong> — LDL becomes oxidized, triggering inflammation</li>
              <li><strong>Immune response</strong> — Endothelium recruits monocytes that become foam cells</li>
              <li><strong>Plaque formation</strong> — Progressive accumulation leads to atherosclerotic plaques</li>
            </ul>
            
            <h2 className="content-heading">Improving Endothelial Function</h2>
            <p className="content-text">
              <strong>Lifestyle interventions:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Regular exercise</strong> — Improves NO production and endothelial function</li>
              <li><strong>Heart-healthy diet</strong> — Mediterranean diet rich in fruits, vegetables, whole grains, healthy fats</li>
              <li><strong>Weight management</strong> — Reducing obesity improves endothelial health</li>
              <li><strong>Smoking cessation</strong> — Eliminates major source of endothelial damage</li>
              <li><strong>Blood pressure control</strong> — Reduces mechanical stress on endothelium</li>
              <li><strong>Glycemic control</strong> — Managing blood sugar prevents glycation damage</li>
            </ul>
            
            <p className="content-text">
              <strong>Supplements with evidence for endothelial function:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Omega-3 fatty acids</strong> — Improve FMD; reduce inflammation and oxidative stress; typical dose 2-4 g/day EPA+DHA</li>
              <li><strong>Magnesium</strong> — Increases nitric oxide availability; improves endothelial function</li>
              <li><strong>Curcumin</strong> — Antioxidant and anti-inflammatory effects support endothelial health</li>
              <li><strong>Vitamin C</strong> — Antioxidant that may improve endothelial function, especially in deficiency</li>
              <li><strong>Vitamin D</strong> — Deficiency associated with endothelial dysfunction</li>
              <li><strong>L-arginine/L-citrulline</strong> — Substrates for NO production</li>
            </ul>
            
            <h2 className="content-heading">Clinical Significance</h2>
            <p className="content-text">
              Endothelial function is important because:
            </p>
            <ul className="glossary-list">
              <li>Predicts cardiovascular events independent of traditional risk factors</li>
              <li>Represents an early, potentially reversible stage of cardiovascular disease</li>
              <li>Responds to both pharmaceutical and lifestyle interventions</li>
              <li>Serves as a biomarker for assessing intervention effectiveness</li>
              <li>Reflects overall vascular health and systemic inflammation</li>
            </ul>
            
            <p className="content-text">
              Understanding and preserving endothelial function is central to cardiovascular disease prevention and represents a key target for nutritional and lifestyle interventions aimed at reducing cardiovascular risk.
            </p>
          </>
        }
      currentPage="endothelium"

      />
  );
}