import { GlossaryTemplate } from '../GlossaryTemplate';

export function NFkBPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <GlossaryTemplate
      term="NF-κB"
      pronunciation="en-eff KAP-uh bee"
      partOfSpeech="noun (protein complex)"
      onNavigate={onNavigate}
      
      definition={
        <p>
          <strong>Nuclear Factor Kappa B (NF-κB)</strong> is a family of <span className="font-medium">transcription factor proteins</span> that function as a master regulator of inflammatory and immune responses, cell survival, and proliferation. When activated, NF-κB moves into the cell nucleus and turns on genes involved in inflammation, stress responses, and immunity.
        </p>
      }
      
      laypersonExplanation={
        <>
          <p>
            NF-κB is like a molecular "inflammation switch" inside your cells. When your body detects threats—like infections, toxins, or cellular stress—NF-κB gets activated and triggers the production of inflammatory molecules to defend against the threat.
          </p>
          <p>
            While this response is protective in acute situations, chronic activation of NF-κB contributes to long-term inflammation, which underlies many chronic diseases including heart disease, diabetes, arthritis, and cancer.
          </p>
        </>
      }
      
      detailedExplanation={
        <>
          <p>
            <strong>Mechanism of Action:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Inactive state:</span> NF-κB is held in the cytoplasm by inhibitory proteins called IκB (inhibitor of kappa B)</li>
            <li><span className="font-medium">Activation triggers:</span> Stimuli like TNF-α, IL-1, oxidative stress, or pathogens activate IKK (IκB kinase)</li>
            <li><span className="font-medium">IκB degradation:</span> IKK phosphorylates IκB, marking it for destruction</li>
            <li><span className="font-medium">Nuclear translocation:</span> Free NF-κB moves into the nucleus</li>
            <li><span className="font-medium">Gene transcription:</span> NF-κB binds to DNA and activates inflammatory gene expression</li>
          </ul>
          <p>
            <strong>Target Genes Regulated by NF-κB:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Pro-inflammatory cytokines:</span> TNF-α, IL-1, IL-6, IL-8</li>
            <li><span className="font-medium">Adhesion molecules:</span> ICAM-1, VCAM-1 (promote immune cell migration)</li>
            <li><span className="font-medium">Enzymes:</span> COX-2 (produces inflammatory prostaglandins), iNOS (produces nitric oxide)</li>
            <li><span className="font-medium">Acute phase proteins:</span> C-reactive protein (CRP)</li>
            <li><span className="font-medium">Anti-apoptotic proteins:</span> Bcl-2 family members (protect cells from death)</li>
          </ul>
          <p>
            <strong>Role in Disease:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Chronic inflammation:</span> Sustained NF-κB activation drives inflammatory diseases</li>
            <li><span className="font-medium">Atherosclerosis:</span> NF-κB promotes plaque formation and instability</li>
            <li><span className="font-medium">Insulin resistance:</span> NF-κB activation in fat and muscle impairs insulin signaling</li>
            <li><span className="font-medium">Cancer:</span> NF-κB can promote tumor growth and survival</li>
            <li><span className="font-medium">Autoimmune diseases:</span> Excessive NF-κB drives conditions like rheumatoid arthritis and inflammatory bowel disease</li>
          </ul>
          <p>
            <strong>Supplement Effects on NF-κB:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Curcumin:</span> Inhibits IKK activation, blocking NF-κB pathway</li>
            <li><span className="font-medium">Omega-3 fatty acids:</span> Reduce NF-κB activation through multiple mechanisms</li>
            <li><span className="font-medium">Resveratrol:</span> Directly inhibits NF-κB nuclear translocation</li>
            <li><span className="font-medium">Sulforaphane:</span> Activates Nrf2 which counterbalances NF-κB</li>
          </ul>
          <p>
            Many anti-inflammatory interventions work, at least in part, by reducing NF-κB activity, making it a central therapeutic target for chronic inflammatory conditions.
          </p>
        </>
      }
      
      exampleSentences={[
        "TNF-α binding to its receptor triggers a signaling cascade leading to activation of NF-κB and other inflammatory pathways.",
        "Curcumin's anti-inflammatory effects are primarily mediated through inhibition of NF-κB signaling.",
        "Chronic NF-κB activation in adipose tissue contributes to systemic inflammation and insulin resistance in obesity."
      ]}
      
      relatedTerms={[
        { term: 'Inflammation', page: 'inflammation' },
        { term: 'TNF-α', page: 'tnfalpha' },
        { term: 'IL-6', page: 'il6' },
        { term: 'IL-1', page: 'il1' },
        { term: 'CRP', page: 'crp' },
        { term: 'Cytokines', page: 'cytokines' },
        { term: 'Oxidative Stress', page: 'oxidativestress' }
      ]}
    />
  );
}