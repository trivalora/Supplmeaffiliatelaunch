import { Header } from '../Header';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Footer } from '../Footer';

export function NitricOxidePage() {
  return (
    <>
      <Header />
      <GlossaryTemplate
        term="Nitric Oxide (NO)"
        definition="A gaseous signaling molecule produced by cells throughout the body that plays critical roles in cardiovascular function, particularly blood vessel dilation (vasodilation), blood flow regulation, and blood pressure control."
        content={
          <>
            <p className="content-text">
              Nitric oxide (NO) is one of the most important signaling molecules in human physiology. Despite being a simple gas composed of one nitrogen and one oxygen atom, NO regulates numerous vital functions including blood pressure, vascular health, immune response, neurotransmission, and exercise performance. The 1998 Nobel Prize in Physiology or Medicine was awarded for discovering NO's role in cardiovascular signaling.
            </p>
            
            <h2 className="content-heading">Production: NO Synthase Enzymes</h2>
            <p className="content-text">
              Three different enzymes produce nitric oxide:
            </p>
            <ul className="glossary-list">
              <li><strong>eNOS (Endothelial NOS)</strong> — Continuously produces NO in vascular endothelium; regulates blood flow and pressure; calcium/calmodulin-dependent</li>
              <li><strong>nNOS (Neuronal NOS)</strong> — Found in nervous system; involved in neurotransmission and neuroplasticity; calcium/calmodulin-dependent</li>
              <li><strong>iNOS (Inducible NOS)</strong> — Produced during immune responses and inflammation; generates large amounts of NO to kill pathogens; calcium-independent</li>
            </ul>
            
            <p className="content-text">
              <strong>Synthesis pathway:</strong>
            </p>
            <ul className="glossary-list">
              <li>L-arginine + O₂ → L-citrulline + NO (via NOS enzymes)</li>
              <li>Requires cofactors: tetrahydrobiopterin (BH4), NADPH, FAD, FMN, heme</li>
              <li>Alternative pathway: Nitrate → Nitrite → NO (dietary nitrates from vegetables)</li>
            </ul>
            
            <h2 className="content-heading">Cardiovascular Functions</h2>
            <ul className="glossary-list">
              <li><strong>Vasodilation</strong> — NO relaxes vascular smooth muscle, widening blood vessels and reducing blood pressure</li>
              <li><strong>Blood flow regulation</strong> — Adjusts vessel diameter to match tissue oxygen demands</li>
              <li><strong>Endothelial health</strong> — Protects vessel lining from damage</li>
              <li><strong>Anti-platelet effects</strong> — Prevents inappropriate blood clot formation</li>
              <li><strong>Anti-inflammatory</strong> — Reduces adhesion molecule expression, preventing leukocyte recruitment to vessel walls</li>
              <li><strong>Prevents smooth muscle proliferation</strong> — Inhibits pathological vessel wall thickening</li>
            </ul>
            
            <h2 className="content-heading">Mechanism of Vasodilation</h2>
            <p className="content-text">
              How NO relaxes blood vessels:
            </p>
            <ul className="glossary-list">
              <li><strong>NO production</strong> — Endothelial cells produce NO in response to shear stress (blood flow), acetylcholine, or other stimuli</li>
              <li><strong>Diffusion</strong> — NO diffuses from endothelium into adjacent smooth muscle cells</li>
              <li><strong>Guanylate cyclase activation</strong> — NO binds to and activates soluble guanylate cyclase (sGC)</li>
              <li><strong>cGMP production</strong> — Activated sGC produces cyclic GMP (cGMP)</li>
              <li><strong>Smooth muscle relaxation</strong> — cGMP activates protein kinase G, which reduces calcium levels and causes relaxation</li>
              <li><strong>Vessel dilation</strong> — Relaxed smooth muscle allows vessel to widen, increasing blood flow and reducing blood pressure</li>
            </ul>
            
            <h2 className="content-heading">Flow-Mediated Dilation (FMD)</h2>
            <p className="content-text">
              A key mechanism and measurement:
            </p>
            <ul className="glossary-list">
              <li><strong>Shear stress response</strong> — Blood flow creates friction (shear stress) on endothelium, stimulating NO production</li>
              <li><strong>Exercise benefit</strong> — Increased blood flow during exercise enhances NO production through this mechanism</li>
              <li><strong>FMD testing</strong> — Clinical test measuring artery dilation in response to increased blood flow; assesses endothelial function and NO bioavailability</li>
              <li><strong>Prognostic value</strong> — Impaired FMD predicts cardiovascular events; reflects endothelial dysfunction and reduced NO</li>
            </ul>
            
            <h2 className="content-heading">Factors Reducing NO Bioavailability</h2>
            <ul className="glossary-list">
              <li><strong>Oxidative stress</strong> — Superoxide (O₂⁻) rapidly reacts with NO, forming peroxynitrite and depleting NO</li>
              <li><strong>eNOS uncoupling</strong> — When BH4 cofactor is insufficient, eNOS produces superoxide instead of NO</li>
              <li><strong>Aging</strong> — NO production decreases with age</li>
              <li><strong>Endothelial dysfunction</strong> — Diabetes, hypertension, smoking, obesity impair NO production</li>
              <li><strong>Inflammation</strong> — Inflammatory cytokines reduce eNOS expression and activity</li>
              <li><strong>ADMA accumulation</strong> — Asymmetric dimethylarginine (ADMA) inhibits NOS enzymes; elevated in cardiovascular disease</li>
            </ul>
            
            <h2 className="content-heading">Strategies to Increase NO</h2>
            <p className="content-text">
              <strong>Lifestyle interventions:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Exercise</strong> — Increases shear stress, stimulating NO production and improving endothelial function</li>
              <li><strong>Dietary nitrates</strong> — Beetroot, leafy greens (spinach, arugula), celery provide nitrates converted to NO</li>
              <li><strong>Weight loss</strong> — Reduces oxidative stress and inflammation, improving NO bioavailability</li>
              <li><strong>Smoking cessation</strong> — Smoking depletes NO and damages endothelium</li>
              <li><strong>Stress reduction</strong> — Chronic stress impairs endothelial function</li>
            </ul>
            
            <p className="content-text">
              <strong>Supplements and nutrients:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>L-arginine</strong> — Direct substrate for NO production; evidence mixed (may help in deficiency, less effective with normal levels)</li>
              <li><strong>L-citrulline</strong> — Converts to L-arginine; may be more effective than arginine itself; typical dose 3-6g/day</li>
              <li><strong>Beetroot juice/extract</strong> — Rich in dietary nitrates; improves blood flow and may lower blood pressure; ~500mg nitrate equivalent</li>
              <li><strong>Magnesium</strong> — Research shows increased NO bioavailability (SMD 0.321)</li>
              <li><strong>Omega-3 fatty acids</strong> — Improve endothelial function and NO production</li>
              <li><strong>Antioxidants</strong> — Vitamin C, vitamin E, polyphenols protect NO from oxidative degradation</li>
              <li><strong>Folate/B vitamins</strong> — Help maintain BH4 levels, preventing eNOS uncoupling</li>
            </ul>
            
            <h2 className="content-heading">NO in Exercise Performance</h2>
            <ul className="glossary-list">
              <li><strong>Blood flow</strong> — Increases oxygen and nutrient delivery to working muscles</li>
              <li><strong>Mitochondrial function</strong> — NO regulates mitochondrial biogenesis and efficiency</li>
              <li><strong>Muscle contraction</strong> — Modulates calcium handling and contractile function</li>
              <li><strong>Beetroot juice</strong> — Popular among athletes for performance enhancement via dietary nitrate → NO pathway</li>
            </ul>
            
            <h2 className="content-heading">NO Beyond the Cardiovascular System</h2>
            <ul className="glossary-list">
              <li><strong>Immune function</strong> — Macrophages produce large amounts of NO to kill bacteria and parasites</li>
              <li><strong>Neurotransmission</strong> — nNOS-derived NO involved in learning, memory, and neuroplasticity</li>
              <li><strong>Erectile function</strong> — NO mediates penile smooth muscle relaxation (mechanism of sildenafil/Viagra)</li>
              <li><strong>Platelet function</strong> — Prevents excessive platelet aggregation and clot formation</li>
              <li><strong>Gastrointestinal motility</strong> — Regulates smooth muscle relaxation in GI tract</li>
            </ul>
            
            <h2 className="content-heading">Pharmaceutical Agents Affecting NO</h2>
            <ul className="glossary-list">
              <li><strong>PDE5 inhibitors</strong> — Sildenafil (Viagra), tadalafil (Cialis) prevent cGMP breakdown, amplifying NO effects</li>
              <li><strong>Nitrates</strong> — Nitroglycerin, isosorbide provide exogenous NO for angina treatment</li>
              <li><strong>ACE inhibitors/ARBs</strong> — Indirectly enhance NO bioavailability</li>
              <li><strong>Statins</strong> — Improve endothelial function and NO production (pleiotropic effects)</li>
            </ul>
            
            <h2 className="content-heading">Clinical Measurement</h2>
            <ul className="glossary-list">
              <li><strong>Flow-mediated dilation (FMD)</strong> — Non-invasive ultrasound assessment of NO-mediated endothelial function</li>
              <li><strong>Nitrate/nitrite levels</strong> — Blood or urine NOx levels reflect NO production</li>
              <li><strong>ADMA levels</strong> — Endogenous NOS inhibitor; elevated in endothelial dysfunction</li>
            </ul>
            
            <h2 className="content-heading">Clinical Importance</h2>
            <p className="content-text">
              Nitric oxide is critical for:
            </p>
            <ul className="glossary-list">
              <li>Blood pressure regulation and cardiovascular health</li>
              <li>Endothelial function and prevention of atherosclerosis</li>
              <li>Exercise performance and recovery</li>
              <li>Immune defense against pathogens</li>
              <li>Neurological function and cognition</li>
            </ul>
            
            <p className="content-text">
              Maintaining adequate NO production through exercise, dietary nitrates, managing cardiovascular risk factors, and potentially targeted supplementation represents an important strategy for cardiovascular health and overall wellbeing. Impaired NO bioavailability is a hallmark of endothelial dysfunction and cardiovascular disease.
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}