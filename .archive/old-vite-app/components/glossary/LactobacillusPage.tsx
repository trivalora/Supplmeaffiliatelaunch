import { GlossaryTemplate } from '../GlossaryTemplate';

export function LactobacillusPage() {
  return (
    <GlossaryTemplate
      term="Lactobacillus"
      pronunciation="lack-toh-buh-SILL-us"
      partOfSpeech="noun (bacterial genus)"
      
      definition="Lactobacillus is a genus of beneficial bacteria that naturally inhabit various parts of the human body (primarily the gut, mouth, and urogenital tract) and are widely used as probiotics for supporting digestive health, immune function, and microbial balance."
      
      laypersonExplanation={
        <>
          <p>
            Lactobacilli (plural of Lactobacillus) are "good bacteria" that help keep your gut, mouth, and other body sites healthy. They're called "lactic acid bacteria" because they ferment sugars to produce lactic acid, which creates an acidic environment that discourages harmful bacteria from growing.
          </p>
          <p>
            You've probably consumed Lactobacillus bacteria many times—they're naturally present in yogurt, kefir, sauerkraut, kimchi, and many other fermented foods. They're also one of the most common types of bacteria in probiotic supplements.
          </p>
        </>
      }
      
      expandedExplanation={
        <>
          <p>
            <strong>Classification and Common Species:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Phylum:</span> Firmicutes</li>
            <li><span className="font-medium">Common species used as probiotics:</span>
              <ul style={{ marginLeft: '1.5rem', listStyle: 'circle' }}>
                <li>L. acidophilus (one of most common in supplements)</li>
                <li>L. rhamnosus (extensively studied for health benefits)</li>
                <li>L. plantarum (found in fermented vegetables)</li>
                <li>L. casei</li>
                <li>L. reuteri (naturally inhabits human gut)</li>
                <li>L. fermentum</li>
                <li>L. gasseri</li>
                <li>L. salivarius</li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Mechanisms of Action:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Lactic acid production:</span> Creates acidic environment (pH 3.5-4.5) that inhibits pathogenic bacteria</li>
            <li><span className="font-medium">Bacteriocins:</span> Produce antimicrobial peptides that directly kill harmful bacteria</li>
            <li><span className="font-medium">Immune modulation:</span> Interact with immune cells to enhance immune response</li>
            <li><span className="font-medium">Competitive exclusion:</span> Compete with pathogens for nutrients and adhesion sites on intestinal walls</li>
            <li><span className="font-medium">Gut barrier support:</span> Strengthen tight junctions between intestinal cells</li>
            <li><span className="font-medium">Vitamin synthesis:</span> Produce B vitamins and vitamin K</li>
          </ul>
          <p>
            <strong>Health Benefits (Strain-Specific):</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Digestive health:</span> Reduce symptoms of IBS, constipation, diarrhea, and lactose intolerance</li>
            <li><span className="font-medium">Immune function:</span> Enhance immune response and reduce infection risk</li>
            <li><span className="font-medium">Antibiotic-associated diarrhea:</span> L. rhamnosus GG reduces AAD risk by ~50%</li>
            <li><span className="font-medium">Vaginal health:</span> Maintain vaginal pH and prevent infections (L. crispatus, L. reuteri)</li>
            <li><span className="font-medium">Cholesterol:</span> Some strains (L. reuteri) may modestly reduce LDL cholesterol</li>
            <li><span className="font-medium">Oral health:</span> L. reuteri may reduce gingivitis and dental caries</li>
            <li><span className="font-medium">Allergies:</span> L. rhamnosus may reduce eczema risk in infants</li>
          </ul>
          <p>
            <strong>Food Sources:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Dairy:</span> Yogurt (contains L. bulgaricus, L. acidophilus), kefir, some cheeses</li>
            <li><span className="font-medium">Fermented vegetables:</span> Sauerkraut, kimchi, pickles (naturally fermented)</li>
            <li><span className="font-medium">Other fermented foods:</span> Miso, tempeh, some sourdough bread</li>
            <li><span className="font-medium">Fermented beverages:</span> Kombucha (though predominantly contains yeasts)</li>
          </ul>
          <p>
            <strong>Probiotic Supplementation:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Typical doses:</span>1-10 billion CFU (colony-forming units) per day</li>
            <li><span className="font-medium">Strain specificity:</span> Different strains have different effects—look for specific strain designations (e.g., "L. rhamnosus GG")</li>
            <li><span className="font-medium">Survival:</span> Many Lactobacillus strains survive stomach acid and reach the colon</li>
            <li><span className="font-medium">Transient colonization:</span> Most probiotic strains don't permanently colonize; require ongoing intake</li>
          </ul>
          <p>
            <strong>Factors Supporting Lactobacillus:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Prebiotic fibers:</span> Inulin, FOS, GOS support growth</li>
            <li><span className="font-medium">Fermented foods:</span> Regular consumption introduces strains and supports existing populations</li>
            <li><span className="font-medium">Limited antibiotic use:</span> Broad-spectrum antibiotics can significantly reduce populations</li>
          </ul>
          <p>
            <strong>Safety:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Generally recognized as safe (GRAS):</span> Long history of safe use in fermented foods</li>
            <li><span className="font-medium">Well-tolerated:</span> Rare adverse effects, mostly mild GI symptoms initially</li>
            <li><span className="font-medium">Caution:</span> Immunocompromised individuals should consult healthcare providers before high-dose probiotic use</li>
          </ul>
          <p>
            <strong>Research Considerations:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Strain-specific effects:</span> Not all Lactobacillus strains have the same benefits</li>
            <li><span className="font-medium">Individual variation:</span> Response to probiotics varies based on existing microbiome composition</li>
            <li><span className="font-medium">Quality matters:</span> Viability and strain identity vary among commercial products</li>
          </ul>
          <p>
            Lactobacillus species represent some of the most extensively studied and commonly used probiotic bacteria. While benefits are strain-specific, certain strains have robust evidence for digestive health, immune function, and prevention of antibiotic-associated diarrhea. Consuming fermented foods or taking well-studied probiotic strains may support overall gut health.
          </p>
        </>
      }
      
      exampleSentences={[
        "The gut microbiome contains beneficial bacteria like Bifidobacterium, Lactobacillus, Akkermansia, and Faecalibacterium.",
        "Yogurt naturally contains Lactobacillus bulgaricus and Streptococcus thermophilus, the bacteria used in the fermentation process.",
        "L. rhamnosus GG is one of the most extensively studied probiotic strains, with evidence for preventing antibiotic-associated diarrhea."
      ]}
      
      relatedTerms={[
        { term: 'Gut Microbiome', page: 'gutmicrobiome' },
        { term: 'Immune System', page: 'immunesystem' },
        { term: 'Dysbiosis', page: 'dysbiosis' },
        { term: 'Inflammation', page: 'inflammation' }
      ]}
    />
  );
}