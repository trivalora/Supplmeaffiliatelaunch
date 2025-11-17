import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function EssentialAminoAcidsPage() {
  const content = {
    term: "Essential Amino Acids (EAAs)",
    definition: "The nine amino acids that the human body cannot synthesize in sufficient quantities and must be obtained through diet: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.",
    
    detailedExplanation: (
      <>
        <p>Essential amino acids are "essential" not because they're more important than other amino acids, but because they must come from external sources. Without adequate intake of all nine EAAs, the body cannot efficiently build new proteins, leading to various health problems.</p>
        
        <p><strong className="glossary-highlight">The Nine Essential Amino Acids:</strong></p>
        
        <p><strong>1. Histidine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Produces histamine (immune response), maintains myelin sheaths (nerve protection), tissue growth and repair</li>
          <li><strong>Typical Daily Need:</strong> ~10-14 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, poultry, dairy, whole grains</li>
          <li><strong>Special Notes:</strong> Particularly important for children's growth; involved in red and white blood cell production</li>
        </ul>

        <p><strong>2. Isoleucine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle metabolism, immune function, hemoglobin production, energy regulation</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Eggs, chicken, fish, lentils, almonds</li>
          <li><strong>Special Notes:</strong> One of three branched-chain amino acids; concentrated in muscle tissue</li>
        </ul>

        <p><strong>3. Leucine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Primary trigger for muscle protein synthesis, blood sugar regulation, wound healing, growth hormone production</li>
          <li><strong>Typical Daily Need:</strong> ~34-42 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Whey protein, meat, dairy, soybeans, eggs</li>
          <li><strong>Special Notes:</strong> Most important BCAA for muscle building; threshold of ~2-3g needed to maximize protein synthesis</li>
        </ul>

        <p><strong>4. Lysine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Protein synthesis, calcium absorption, collagen and elastin production, immune function, carnitine production</li>
          <li><strong>Typical Daily Need:</strong> ~30-38 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, dairy, eggs, legumes</li>
          <li><strong>Special Notes:</strong> Often the limiting amino acid in grain-based diets; important for bone health</li>
        </ul>

        <p><strong>5. Methionine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Metabolism, detoxification, tissue growth, zinc and selenium absorption, antioxidant production</li>
          <li><strong>Typical Daily Need:</strong> ~10-15 mg/kg body weight (combined with cysteine)</li>
          <li><strong>Good Sources:</strong> Eggs, fish, meat, Brazil nuts, sesame seeds</li>
          <li><strong>Special Notes:</strong> Contains sulfur; precursor to cysteine and taurine; involved in DNA methylation</li>
        </ul>

        <p><strong>6. Phenylalanine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to tyrosine, dopamine, norepinephrine, and epinephrine; structural component of proteins</li>
          <li><strong>Typical Daily Need:</strong> ~25-33 mg/kg body weight (combined with tyrosine)</li>
          <li><strong>Good Sources:</strong> Meat, fish, eggs, dairy, soy products</li>
          <li><strong>Special Notes:</strong> Important for mood regulation and cognitive function; individuals with PKU cannot metabolize it</li>
        </ul>

        <p><strong>7. Threonine</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Protein balance, immune function, collagen and elastin production, fat metabolism</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Cottage cheese, poultry, fish, lentils, sesame seeds</li>
          <li><strong>Special Notes:</strong> Important for mucus production in digestive and respiratory tracts</li>
        </ul>

        <p><strong>8. Tryptophan</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to serotonin and melatonin, nitrogen balance, niacin (vitamin B3) production</li>
          <li><strong>Typical Daily Need:</strong> ~4-5 mg/kg body weight (lowest requirement)</li>
          <li><strong>Good Sources:</strong> Turkey, chicken, milk, cheese, pumpkin seeds, oats</li>
          <li><strong>Special Notes:</strong> Important for mood, sleep, and appetite regulation</li>
        </ul>

        <p><strong>9. Valine (BCAA)</strong></p>
        <ul className="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle growth and repair, energy production, cognitive function</li>
          <li><strong>Typical Daily Need:</strong> ~24-26 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Dairy, meat, mushrooms, peanuts, soy protein</li>
          <li><strong>Special Notes:</strong> One of three BCAAs; involved in preventing muscle breakdown during exercise</li>
        </ul>

        <p><strong className="glossary-highlight">Why All Nine Matter:</strong></p>
        <p>Protein synthesis follows the "limiting amino acid" principle—like a chain is only as strong as its weakest link, protein synthesis can only proceed at the rate allowed by whichever essential amino acid is in shortest supply. If even one EAA is deficient, the body cannot efficiently build new proteins, regardless of total protein intake.</p>

        <p><strong className="glossary-highlight">Complete vs. Incomplete Proteins:</strong></p>
        <ul className="glossary-list">
          <li><strong>Complete Proteins:</strong> Contain all nine EAAs in adequate amounts
            <ul className="glossary-list" style={{marginTop: '0.5rem'}}>
              <li>Animal sources: meat, fish, poultry, eggs, dairy</li>
              <li>Plant sources: quinoa, soy, buckwheat, hemp, chia seeds</li>
            </ul>
          </li>
          <li><strong>Incomplete Proteins:</strong> Low or lacking in one or more EAAs
            <ul className="glossary-list" style={{marginTop: '0.5rem'}}>
              <li>Grains: often low in lysine</li>
              <li>Legumes: often low in methionine</li>
              <li>Solution: Combine complementary proteins (e.g., rice and beans)</li>
            </ul>
          </li>
        </ul>

        <p><strong className="glossary-highlight">EAA Supplements:</strong></p>
        <p>EAA supplements provide all nine essential amino acids in free form, allowing for rapid absorption. They may be beneficial when:</p>
        <ul className="glossary-list">
          <li>Maximizing protein synthesis with minimal calories</li>
          <li>Supporting muscle recovery without full meal</li>
          <li>Addressing specific dietary restrictions</li>
          <li>Enhancing protein quality of lower-quality protein sources</li>
        </ul>
      </>
    ),

    commonUse: "&quot;This plant-based protein powder is fortified with additional lysine and methionine to provide a complete essential amino acid profile comparable to whey protein.&quot;",

    importanceInResearch: "EAA research focuses on optimal ratios for muscle protein synthesis, minimum effective doses, timing strategies, and comparisons between complete protein sources versus isolated EAA supplements. Understanding EAA requirements is crucial for developing effective protein supplementation protocols.",

    relatedTerms: ["Amino Acids", "Protein", "Muscle Protein Synthesis", "Leucine", "Isoleucine", "Valine"],

    exampleContext: "A 70kg person needs approximately 2.4-2.9g of leucine daily. This can be obtained from ~30g of whey protein, 150g of chicken breast, or through EAA supplements providing all nine essential amino acids in balanced ratios. Without adequate intake of all nine EAAs, even high total protein intake cannot fully support muscle protein synthesis."
  };

  return <GlossaryTemplate {...content} />;
}
