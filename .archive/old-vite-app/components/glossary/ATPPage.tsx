'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Zap, Battery, Activity } from 'lucide-react';

export function ATPPage() {
  return (
    <GlossaryTemplate
      term="ATP (Adenosine Triphosphate)"
      pronunciation="ay-tee-pee / uh-den-uh-seen try-fos-fate"
      definition="ATP (adenosine triphosphate) is the primary energy currency of cells, a high-energy molecule that stores and transfers chemical energy for virtually all cellular processes. Often called the 'molecular unit of currency' of intracellular energy transfer."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            ATP is a nucleotide consisting of three components: an adenine base, a ribose sugar, and three phosphate groups. The energy is stored in the high-energy phosphate bonds, particularly between the second and third phosphate groups. When this bond is broken (through hydrolysis), ATP becomes ADP (adenosine diphosphate) plus an inorganic phosphate (Pi), releasing energy that powers cellular work.
          </p>
          <p className="mb-4">
            <strong>Structure of ATP:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Adenine:</strong> A nitrogenous base (purine)</li>
            <li><strong>Ribose:</strong> A five-carbon sugar</li>
            <li><strong>Three phosphate groups:</strong> Linked by high-energy bonds; the terminal phosphate bond stores the most readily available energy</li>
          </ul>
          <p className="mb-4">
            The hydrolysis reaction: ATP + H₂O → ADP + Pi + Energy (approximately 7.3 kcal/mol under standard conditions)
          </p>
          <p className="mb-4">
            <strong>ATP production pathways:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Cellular respiration (aerobic):</strong> The most efficient pathway, producing approximately 30-32 ATP molecules per glucose molecule
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Glycolysis:</strong> Occurs in cytoplasm, breaks down glucose to pyruvate, produces 2 ATP (net)</li>
                <li><strong>Krebs cycle (Citric Acid Cycle):</strong> Occurs in mitochondrial matrix, produces 2 ATP (directly) plus NADH and FADH₂</li>
                <li><strong>Oxidative phosphorylation (Electron Transport Chain):</strong> Occurs in inner mitochondrial membrane, produces ~26-28 ATP through chemiosmosis</li>
              </ul>
            </li>
            <li>
              <strong>Anaerobic glycolysis:</strong> When oxygen is limited (intense exercise), produces only 2 ATP per glucose molecule, much less efficient but faster
            </li>
            <li>
              <strong>Phosphocreatine system:</strong> Immediate energy source for very short bursts (1-10 seconds), rapidly regenerates ATP from ADP using creatine phosphate stored in muscles
            </li>
            <li>
              <strong>Beta-oxidation:</strong> Breaks down fatty acids to produce ATP (yields more ATP per molecule than glucose but takes longer)
            </li>
            <li>
              <strong>Amino acid catabolism:</strong> Proteins can be broken down for energy when needed, though this is not the primary function
            </li>
          </ul>
          <p className="mb-4">
            <strong>Functions of ATP (energy uses):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Mechanical work:</strong> Muscle contraction, cell division, chromosome movement, ciliary and flagellar movement</li>
            <li><strong>Transport work:</strong> Active transport of molecules across cell membranes against concentration gradients (e.g., sodium-potassium pump)</li>
            <li><strong>Chemical work:</strong> Synthesis of macromolecules (proteins, nucleic acids, lipids), activation of molecules in metabolic pathways</li>
            <li><strong>Electrical work:</strong> Generation of nerve impulses and electrical signals</li>
            <li><strong>Heat production:</strong> Maintaining body temperature</li>
            <li><strong>Bioluminescence:</strong> In organisms like fireflies</li>
          </ul>
          <p className="mb-4">
            <strong>ATP turnover:</strong>
          </p>
          <p className="mb-4">
            The human body contains only about 250 grams of ATP at any given time, but this represents an incredibly dynamic pool. At rest, the average person recycles their entire body weight in ATP per day—during intense exercise, this can increase to 0.5 kg of ATP per minute! ATP is constantly being produced and consumed, with cells maintaining a delicate balance through energy homeostasis.
          </p>
          <p className="mb-4">
            <strong>ATP and mitochondria:</strong>
          </p>
          <p className="mb-4">
            Mitochondria are often called the "powerhouses" of the cell because they produce the vast majority of cellular ATP through oxidative phosphorylation. Cells with high energy demands (muscle cells, neurons, liver cells) have thousands of mitochondria. Mitochondrial dysfunction impairs ATP production and is implicated in aging, neurodegenerative diseases, and metabolic disorders.
          </p>
          <p className="mb-4">
            <strong>Clinical and research significance:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Exercise performance:</strong> ATP availability limits high-intensity performance; creatine supplementation helps regenerate ATP</li>
            <li><strong>Metabolic diseases:</strong> Conditions affecting ATP production (mitochondrial diseases) cause severe symptoms</li>
            <li><strong>Drug development:</strong> Many drugs target ATP-dependent processes (e.g., kinase inhibitors in cancer treatment)</li>
            <li><strong>Cellular signaling:</strong> ATP also functions as a signaling molecule (purinergic signaling) independent of its energy role</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Zap, 
          title: "Universal Energy Currency", 
          description: "ATP powers virtually all energy-requiring cellular processes including muscle contraction, active transport, biosynthesis, and nerve impulses. Energy is released when the terminal phosphate bond is broken, converting ATP to ADP." 
        },
        { 
          icon: Battery, 
          title: "Produced by Cellular Respiration", 
          description: "Primarily generated in mitochondria through oxidative phosphorylation (~26-28 ATP) combined with glycolysis and Krebs cycle (~4 ATP total). Aerobic respiration yields ~30-32 ATP per glucose molecule." 
        },
        { 
          icon: Activity, 
          title: "Rapid Turnover Rate", 
          description: "The body recycles its entire ATP pool many times per day—only ~250g exists at any moment, but you produce your body weight in ATP daily. During exercise, turnover dramatically increases to meet energy demands." 
        }
      ]}
      
      relatedTerms={[
        { term: "Mitochondria", key: "mitochondria" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Glucose Metabolism", key: "glucosemetabolism" },
        { term: "Oxidative Stress", key: "oxidativestress" }
      ]}
    />
  );
}
