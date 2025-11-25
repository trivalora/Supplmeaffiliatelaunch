import { GlossaryTemplate } from '../GlossaryTemplate';

export function Nrf2Page() {
  return (
    <GlossaryTemplate
      term="Nrf2"
      pronunciation="en-arr-eff-two"
      partOfSpeech="noun (protein)"
      
      definition="Nuclear factor erythroid 2-related factor 2 (Nrf2) is a transcription factor that regulates the expression of antioxidant and detoxification genes, acting as the body's master regulator of the cellular antioxidant defense system."
      
      laypersonExplanation={
        <>
          <p>
            Nrf2 is like your cells' "defense coordinator"—when activated, it triggers the production of your body's natural protective molecules to defend against oxidative stress, toxins, and damage. Rather than just providing external antioxidants (like vitamin C), activating Nrf2 tells your cells to make their own powerful antioxidant enzymes.
          </p>
          <p>
            This is particularly valuable because your body's own antioxidant enzymes are much more powerful and longer-lasting than dietary antioxidants. One Nrf2-activated enzyme can neutralize millions of free radicals, whereas dietary antioxidants typically neutralize only one.
          </p>
        </>
      }
      
      expandedExplanation={
        <>
          <p>
            <strong>Mechanism of Activation:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Baseline state:</span> Nrf2 is held in the cytoplasm by Keap1 (Kelch-like ECH-associated protein 1), which marks it for degradation</li>
            <li><span className="font-medium">Activation signals:</span> Oxidative stress, electrophiles, or certain phytochemicals modify cysteine residues on Keap1</li>
            <li><span className="font-medium">Release:</span> Modified Keap1 releases Nrf2, which accumulates in the cell</li>
            <li><span className="font-medium">Nuclear translocation:</span> Nrf2 enters the nucleus and binds to ARE (Antioxidant Response Element) sequences in DNA</li>
            <li><span className="font-medium">Gene transcription:</span> Hundreds of protective genes are turned on</li>
          </ul>
          <p>
            <strong>Key Genes Activated by Nrf2:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Antioxidant enzymes:</span> Superoxide dismutase (SOD), catalase, glutathione peroxidase</li>
            <li><span className="font-medium">Glutathione synthesis:</span> GCL (glutamate-cysteine ligase), the rate-limiting enzyme for glutathione production</li>
            <li><span className="font-medium">Detoxification enzymes:</span> NAD(P)H quinone oxidoreductase 1 (NQO1), glutathione S-transferases</li>
            <li><span className="font-medium">Phase II enzymes:</span> Proteins that help eliminate toxins and carcinogens</li>
            <li><span className="font-medium">Iron metabolism:</span> Ferritin and heme oxygenase-1 (HO-1)</li>
          </ul>
          <p>
            <strong>Health Benefits of Nrf2 Activation:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Oxidative stress protection:</span> Increases endogenous antioxidant capacity by 200-300%</li>
            <li><span className="font-medium">Anti-inflammatory effects:</span> Reduces inflammatory signaling (counterbalances NF-κB)</li>
            <li><span className="font-medium">Detoxification:</span> Enhances elimination of environmental toxins and pollutants</li>
            <li><span className="font-medium">Cancer prevention:</span> Protects DNA from damage and helps eliminate carcinogens</li>
            <li><span className="font-medium">Neuroprotection:</span> Protects brain cells from oxidative damage</li>
            <li><span className="font-medium">Metabolic health:</span> Improves mitochondrial function and insulin sensitivity</li>
          </ul>
          <p>
            <strong>Natural Nrf2 Activators:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Sulforaphane:</span> Most potent dietary Nrf2 activator from broccoli sprouts</li>
            <li><span className="font-medium">Curcumin:</span> Polyphenol from turmeric</li>
            <li><span className="font-medium">Resveratrol:</span> Polyphenol from grapes and berries</li>
            <li><span className="font-medium">EGCG:</span> Catechin from green tea</li>
            <li><span className="font-medium">Other isothiocyanates:</span> Found in cruciferous vegetables</li>
          </ul>
          <p>
            <strong>Important Considerations:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Adaptive response:</span> Mild stressors activate Nrf2, triggering beneficial adaptation (hormesis)</li>
            <li><span className="font-medium">Balance needed:</span> Excessive Nrf2 activation may protect cancer cells; context-dependent effects</li>
            <li><span className="font-medium">Synergy with exercise:</span> Physical activity also activates Nrf2 pathways</li>
          </ul>
          <p>
            The Nrf2 pathway represents a fundamental cellular defense mechanism that can be therapeutically targeted through diet, supplements, and lifestyle interventions to enhance resilience against oxidative stress and inflammation.
          </p>
        </>
      }
      
      exampleSentences={[
        "Sulforaphane activates Nrf2, a master regulator that increases production of multiple endogenous antioxidant enzymes.",
        "The benefits of cruciferous vegetables are largely attributed to Nrf2 activation by their isothiocyanate compounds.",
        "Nrf2 activation upregulates phase II detoxification enzymes, enhancing the body's ability to eliminate carcinogens."
      ]}
      
      relatedTerms={[
        { term: 'Antioxidant', page: 'antioxidant' },
        { term: 'Oxidative Stress', page: 'oxidativestress' },
        { term: 'Glutathione', page: 'glutathione' },
        { term: 'Superoxide Dismutase', page: 'superoxidedismutase' },
        { term: 'Catalase', page: 'catalase' },
        { term: 'Glutathione Peroxidase', page: 'glutathioneperoxidase' }
      ]}
    />
  );
}