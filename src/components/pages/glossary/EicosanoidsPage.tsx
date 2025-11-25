'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Activity, AlertTriangle, TrendingDown } from 'lucide-react';

export function EicosanoidsPage() {
  return (
    <GlossaryTemplate
      term="Eicosanoids"
      abbreviation="None (general class of compounds)"
      pronunciation="eye-koh-suh-noids"
      definition="A family of signaling molecules derived from 20-carbon polyunsaturated fatty acids (primarily arachidonic acid and EPA) that regulate inflammation, immune function, blood clotting, pain, fever, blood pressure, and numerous other physiological processes at the cellular level."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Eicosanoids are hormone-like substances produced locally in cells throughout the body that act as short-range signaling molecules, affecting nearby cells and tissues. The name comes from the Greek word "eikosi" meaning twenty, referring to their 20-carbon structure. Unlike hormones that travel through the bloodstream to distant targets, eicosanoids are produced on demand, act quickly in the local environment, and are rapidly metabolized.
          </p>
          <p className="mb-4">
            <strong>Major classes of eicosanoids:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Prostaglandins:</strong> Regulate inflammation, pain, fever, blood clotting, and smooth muscle contraction (including uterine contractions during labor)</li>
            <li><strong>Thromboxanes:</strong> Promote blood clotting and vasoconstriction (narrowing of blood vessels)</li>
            <li><strong>Leukotrienes:</strong> Mediate allergic responses and inflammation, particularly in airways (involved in asthma)</li>
            <li><strong>Lipoxins:</strong> Generally anti-inflammatory, helping resolve inflammation and promote healing</li>
          </ul>
          <p className="mb-4">
            <strong>Omega-6 versus omega-3 derived eicosanoids:</strong>
          </p>
          <p className="mb-4">
            The fatty acid precursor determines the type and effects of eicosanoids produced:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Omega-6 pathway (arachidonic acid):</strong> Produces mostly pro-inflammatory eicosanoids—2-series prostaglandins (PGE2, PGI2), 4-series leukotrienes, thromboxane A2. These promote inflammation, platelet aggregation, and immune activation. While labeled "pro-inflammatory," these are essential for normal immune function, wound healing, and blood clotting.</li>
            <li><strong>Omega-3 pathway (EPA):</strong> Produces less inflammatory or anti-inflammatory eicosanoids—3-series prostaglandins (PGE3), 5-series leukotrienes. These generally have weaker inflammatory effects than their omega-6 counterparts.</li>
          </ul>
          <p className="mb-4">
            <strong>Competitive inhibition mechanism:</strong>
          </p>
          <p className="mb-4">
            EPA (from omega-3 fatty acids) and arachidonic acid (omega-6) compete for the same enzymes that convert them into eicosanoids—primarily cyclooxygenase (COX) and lipoxygenase (LOX). When EPA intake is high, it occupies these enzymes, reducing the production of arachidonic acid-derived pro-inflammatory eicosanoids. This competitive mechanism is a key reason omega-3 supplementation has anti-inflammatory effects.
          </p>
          <p className="mb-4">
            <strong>How NSAIDs work through eicosanoids:</strong>
          </p>
          <p className="mb-4">
            Non-steroidal anti-inflammatory drugs (NSAIDs) like aspirin, ibuprofen, and naproxen work by inhibiting COX enzymes (COX-1 and COX-2), preventing the conversion of arachidonic acid into pro-inflammatory prostaglandins and thromboxanes. This reduces pain, fever, inflammation, and blood clotting. However, blocking all prostaglandin production also causes side effects—stomach ulcers (prostaglandins protect the stomach lining) and impaired kidney function (prostaglandins regulate kidney blood flow).
          </p>
          <p className="mb-4">
            <strong>Eicosanoids in inflammation:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Initiation phase:</strong> Tissue injury or infection triggers release of arachidonic acid from cell membranes → converted to prostaglandins and leukotrienes → increased blood flow, vascular permeability, pain, immune cell recruitment</li>
            <li><strong>Resolution phase:</strong> EPA and DHA-derived specialized pro-resolving mediators (resolvins, lipoxins, protectins, maresins) actively turn off inflammation, clear cellular debris, and promote tissue repair</li>
          </ul>
          <p className="mb-4">
            <strong>Balance matters more than absolute amounts:</strong>
          </p>
          <p className="mb-4">
            Both omega-6 and omega-3 derived eicosanoids are essential. The problem arises with imbalance—modern Western diets typically provide omega-6:omega-3 ratios of 15:1 to 20:1, whereas ratios closer to 4:1 or lower are considered optimal. This skew favors production of pro-inflammatory eicosanoids. Omega-3 supplementation helps restore balance without eliminating necessary omega-6 derived eicosanoids.
          </p>
          <p className="mb-4">
            <strong>Eicosanoids in omega-3 supplementation research:</strong>
          </p>
          <p className="mb-4">
            Fish oil supplementation (providing EPA and DHA) consistently increases EPA incorporation into cell membranes and shifts eicosanoid production toward less inflammatory forms. Studies measuring eicosanoid metabolites show reduced production of pro-inflammatory prostaglandin E2 (PGE2) and leukotriene B4 (LTB4) with increased omega-3 intake. These changes correlate with clinical improvements in inflammatory conditions like rheumatoid arthritis, inflammatory bowel disease, and cardiovascular disease.
          </p>
          <p className="mb-4">
            <strong>Specialized pro-resolving mediators (SPMs):</strong>
          </p>
          <p className="mb-4">
            Recent research has identified EPA and DHA-derived eicosanoids called specialized pro-resolving mediators, including resolvins, protectins, and maresins. Unlike traditional eicosanoids that initiate inflammation, SPMs actively resolve inflammation, reduce pain, promote tissue repair, and clear immune cells and debris. This discovery explains why omega-3s don't simply suppress inflammation but help the body resolve it properly and return to homeostasis.
          </p>
          <p className="mb-4">
            <strong>Clinical applications:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Cardiovascular disease:</strong> Balancing eicosanoid production reduces platelet aggregation, blood pressure, and vascular inflammation</li>
            <li><strong>Autoimmune conditions:</strong> Shifting eicosanoid balance reduces joint inflammation in rheumatoid arthritis, intestinal inflammation in IBD</li>
            <li><strong>Asthma:</strong> Leukotriene-blocking medications reduce airway inflammation and constriction</li>
            <li><strong>Pain and fever:</strong> NSAIDs block prostaglandin production to reduce symptoms</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Activity, 
          title: "Local Signaling Molecules", 
          description: "Short-lived, locally-acting compounds derived from 20-carbon fatty acids that regulate inflammation, immunity, pain, blood clotting, and many physiological processes. Produced on demand and act near their site of synthesis." 
        },
        { 
          icon: AlertTriangle, 
          title: "Omega-6 vs Omega-3", 
          description: "Omega-6 (arachidonic acid) produces pro-inflammatory eicosanoids; omega-3 (EPA) produces less inflammatory versions. Both compete for the same enzymes, so high omega-3 intake reduces pro-inflammatory eicosanoid production." 
        },
        { 
          icon: TrendingDown, 
          title: "NSAID Target", 
          description: "NSAIDs (aspirin, ibuprofen) reduce pain and inflammation by blocking COX enzymes, preventing conversion of arachidonic acid to pro-inflammatory prostaglandins and thromboxanes. Omega-3s provide a natural alternative mechanism." 
        }
      ]}
      
      examples={[
        "During tissue injury, arachidonic acid is converted to prostaglandin E2 (PGE2), causing pain, fever, redness, and swelling—classic signs of inflammation",
        "Omega-3 supplementation (2g EPA daily) increases EPA in cell membranes, which competes with arachidonic acid for COX enzymes, reducing production of pro-inflammatory PGE2 by 20-30%",
        "An individual taking ibuprofen for headache blocks COX-2 enzyme, preventing prostaglandin synthesis that causes pain and blood vessel dilation"
      ]}
      
      currentPage="eicosanoids"

      
      relatedTerms={[
        { term: "EPA", key: "epa" },
        { term: "Arachidonic Acid", key: "arachidonicacid" },
        { term: "Inflammation", key: "inflammation" },
        { term: "Resolvins", key: "resolvins" },
        { term: "Omega-3", key: "omega3" },
        { term: "Cytokines", key: "cytokines" }
      ]}
    />
  );
}
