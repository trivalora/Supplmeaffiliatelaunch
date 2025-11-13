import { Header } from '../Header';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Footer } from '../Footer';

export function ArachidonicAcidPage() {
  return (
    <>
      <Header />
      <GlossaryTemplate
        term="Arachidonic Acid (AA)"
        definition="An omega-6 polyunsaturated fatty acid that serves as a precursor to eicosanoids, including both pro-inflammatory and some regulatory signaling molecules. It plays important roles in inflammation, immune function, and cell signaling."
        content={
          <>
            <p className="content-text">
              Arachidonic acid (AA, 20:4 n-6) is a 20-carbon omega-6 fatty acid found in cell membranes throughout the body, particularly in brain tissue, muscles, and immune cells. While often characterized as "pro-inflammatory," AA actually gives rise to both inflammatory and anti-inflammatory mediators, and it's essential for normal physiological functions including immune response, tissue repair, and brain development.
            </p>
            
            <h2 className="content-heading">Sources and Synthesis</h2>
            <ul className="glossary-list">
              <li><strong>Direct dietary sources</strong> — Found in animal products: meat (especially organ meats), poultry, eggs, fish</li>
              <li><strong>Endogenous synthesis</strong> — Humans can convert linoleic acid (LA, 18:2 n-6) to AA through a series of desaturation and elongation steps</li>
              <li><strong>Primary source</strong> — Linoleic acid from vegetable oils (soybean, corn, sunflower) → converted to AA in the body</li>
              <li><strong>Conversion efficiency</strong> — The LA to AA conversion is limited and tightly regulated</li>
            </ul>
            
            <h2 className="content-heading">Biological Functions</h2>
            <ul className="glossary-list">
              <li><strong>Cell membrane component</strong> — Important structural component of phospholipids in cell membranes</li>
              <li><strong>Eicosanoid precursor</strong> — Substrate for synthesis of prostaglandins, thromboxanes, and leukotrienes</li>
              <li><strong>Cell signaling</strong> — Participates in numerous signaling pathways affecting inflammation, immunity, and cell growth</li>
              <li><strong>Brain function</strong> — Highly concentrated in brain tissue; important for neurotransmission and brain development</li>
              <li><strong>Muscle growth</strong> — May play a role in muscle protein synthesis and muscle growth signaling</li>
            </ul>
            
            <h2 className="content-heading">Eicosanoid Production</h2>
            <p className="content-text">
              When released from cell membranes by phospholipase A2, AA is converted into bioactive eicosanoids:
            </p>
            <ul className="glossary-list">
              <li><strong>Prostaglandins</strong> — Mediate inflammation, fever, pain; also regulate blood flow and gastric protection (via COX enzymes)</li>
              <li><strong>Thromboxanes</strong> — Promote platelet aggregation and vasoconstriction (via COX enzymes)</li>
              <li><strong>Leukotrienes</strong> — Promote inflammation, bronchoconstriction, and allergic responses (via LOX enzymes)</li>
              <li><strong>Lipoxins</strong> — Specialized pro-resolving mediators that help resolve inflammation</li>
            </ul>
            
            <h2 className="content-heading">Omega-6 vs. Omega-3 Competition</h2>
            <p className="content-text">
              AA competes with omega-3 fatty acids EPA and DHA:
            </p>
            <ul className="glossary-list">
              <li><strong>Enzyme competition</strong> — AA and EPA compete for the same COX and LOX enzymes</li>
              <li><strong>Membrane incorporation</strong> — Higher omega-3 intake increases EPA/DHA in membranes at the expense of AA</li>
              <li><strong>Eicosanoid balance</strong> — EPA produces less inflammatory eicosanoids (3-series prostaglandins, 5-series leukotrienes) compared to AA (2-series prostaglandins, 4-series leukotrienes)</li>
              <li><strong>Resolvins from EPA/DHA</strong> — Omega-3s produce specialized pro-resolving mediators (resolvins, protectins) that actively resolve inflammation</li>
              <li><strong>Ratio matters</strong> — The omega-6/omega-3 ratio influences overall inflammatory balance</li>
            </ul>
            
            <h2 className="content-heading">The Omega-6/Omega-3 Ratio Debate</h2>
            <ul className="glossary-list">
              <li><strong>Evolutionary perspective</strong> — Human ancestors likely consumed a ratio of ~1:1 to 4:1 omega-6:omega-3</li>
              <li><strong>Modern Western diet</strong> — Ratio has increased to ~15:1 to 20:1, primarily due to increased vegetable oil consumption</li>
              <li><strong>Inflammatory concerns</strong> — Very high omega-6 intake relative to omega-3 may promote chronic low-grade inflammation</li>
              <li><strong>Nuanced view</strong> — LA (the parent omega-6) itself may not be problematic; absolute omega-3 intake is more important than the ratio</li>
            </ul>
            
            <h2 className="content-heading">Health Implications</h2>
            <p className="content-text">
              <strong>Potential concerns with excessive AA/omega-6:</strong>
            </p>
            <ul className="glossary-list">
              <li>May contribute to chronic inflammation when omega-3 intake is insufficient</li>
              <li>High AA-derived eicosanoids could promote cardiovascular disease, though evidence is mixed</li>
              <li>May compete with EPA for anti-inflammatory effects</li>
            </ul>
            
            <p className="content-text">
              <strong>Essential roles and benefits:</strong>
            </p>
            <ul className="glossary-list">
              <li>Critical for brain development in infants</li>
              <li>Necessary for normal immune function and wound healing</li>
              <li>Some AA-derived mediators (lipoxins) actually help resolve inflammation</li>
              <li>May support muscle growth when combined with resistance training</li>
            </ul>
            
            <h2 className="content-heading">How Omega-3 Supplementation Affects AA</h2>
            <p className="content-text">
              EPA supplementation modulates AA metabolism:
            </p>
            <ul className="glossary-list">
              <li><strong>Membrane replacement</strong> — EPA incorporation reduces AA content in cell membranes</li>
              <li><strong>Enzyme competition</strong> — EPA competes with AA for COX and LOX enzymes, reducing pro-inflammatory eicosanoid production</li>
              <li><strong>Alternative pathways</strong> — More EPA → more anti-inflammatory/pro-resolving eicosanoids (resolvins, protectins)</li>
              <li><strong>Clinical effect</strong> — This mechanism explains much of omega-3's anti-inflammatory benefits</li>
            </ul>
            
            <h2 className="content-heading">Dietary Recommendations</h2>
            <p className="content-text">
              Balancing omega-6 and omega-3 intake:
            </p>
            <ul className="glossary-list">
              <li><strong>Don't eliminate omega-6</strong> — Linoleic acid is an essential fatty acid; moderate intake is necessary</li>
              <li><strong>Increase omega-3</strong> — Focus on increasing EPA and DHA from fatty fish or supplements (rather than drastically reducing omega-6)</li>
              <li><strong>Limit excessive vegetable oils</strong> — Reduce processed foods high in omega-6 oils (soybean, corn, sunflower oil)</li>
              <li><strong>Choose better fats</strong> — Olive oil, avocado oil have more favorable fatty acid profiles</li>
              <li><strong>Target ratio</strong> — Aim for omega-6:omega-3 ratio closer to 4:1 or lower (typical Western diet is 15-20:1)</li>
            </ul>
            
            <h2 className="content-heading">Clinical Relevance</h2>
            <p className="content-text">
              Understanding AA is important for:
            </p>
            <ul className="glossary-list">
              <li><strong>Omega-3 supplementation rationale</strong> — EPA's benefits partly result from reducing AA-derived inflammatory mediators</li>
              <li><strong>Anti-inflammatory diets</strong> — Balancing omega-6/omega-3 is a key dietary anti-inflammatory strategy</li>
              <li><strong>NSAID mechanism</strong> — Drugs like ibuprofen and aspirin work by blocking COX enzymes that convert AA to prostaglandins</li>
              <li><strong>Infant nutrition</strong> — AA is added to infant formula due to its importance for brain development</li>
            </ul>
            
            <p className="content-text">
              While AA is often labeled "pro-inflammatory," it's actually an essential fatty acid with important physiological roles. The key is maintaining balance—ensuring adequate omega-3 intake (EPA and DHA) to compete with AA and promote anti-inflammatory, pro-resolving pathways rather than simply trying to eliminate all omega-6 fats.
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}