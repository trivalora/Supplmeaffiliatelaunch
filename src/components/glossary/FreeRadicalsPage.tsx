import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function FreeRadicalsPage() {
  const content = {
    term: "Free Radicals",
    definition: "Highly reactive molecules or atoms that contain one or more unpaired electrons, making them unstable and capable of damaging cells, proteins, and DNA through oxidative reactions.",
    
    detailedExplanation: (
      <>
        <p>Free radicals are a natural byproduct of normal metabolism and cellular function. In controlled amounts, they serve important roles in immune function and cell signaling. However, when free radical production exceeds the body's antioxidant defenses, they can cause oxidative damage that contributes to aging and disease.</p>
        
        <p><strong className="glossary-highlight">Types of Free Radicals:</strong></p>
        
        <p><strong>Reactive Oxygen Species (ROS):</strong> Most common and well-studied free radicals</p>
        <ul className="glossary-list">
          <li><strong>Superoxide Radical (O₂•⁻):</strong> Formed during cellular respiration in mitochondria; first step in ROS production cascade</li>
          <li><strong>Hydroxyl Radical (•OH):</strong> Extremely reactive; can damage virtually any biomolecule it encounters</li>
          <li><strong>Hydrogen Peroxide (H₂O₂):</strong> Not technically a free radical but easily converts to highly reactive radicals</li>
          <li><strong>Singlet Oxygen (¹O₂):</strong> Excited form of oxygen; particularly damaging to lipids</li>
          <li><strong>Peroxyl Radical (ROO•):</strong> Propagates lipid peroxidation in cell membranes</li>
        </ul>

        <p><strong>Reactive Nitrogen Species (RNS):</strong></p>
        <ul className="glossary-list">
          <li><strong>Nitric Oxide (NO•):</strong> Important signaling molecule but can form damaging compounds</li>
          <li><strong>Peroxynitrite (ONOO⁻):</strong> Formed when NO• reacts with superoxide; highly damaging</li>
        </ul>

        <p><strong className="glossary-highlight">Sources of Free Radicals:</strong></p>
        
        <p><strong>Internal (Endogenous) Sources:</strong></p>
        <ul className="glossary-list">
          <li><strong>Cellular Respiration:</strong> Mitochondria naturally produce superoxide during ATP generation
            <ul className="glossary-list" style={{marginTop: '0.5rem'}}>
              <li>About 1-2% of oxygen consumed becomes superoxide</li>
              <li>Normal, unavoidable part of energy production</li>
            </ul>
          </li>
          <li><strong>Immune Response:</strong> White blood cells deliberately generate ROS to kill pathogens</li>
          <li><strong>Inflammatory Processes:</strong> Inflammation increases free radical production</li>
          <li><strong>Metabolic Processes:</strong> Various enzymatic reactions produce ROS as byproducts</li>
          <li><strong>Exercise:</strong> Increases oxygen consumption and ROS production (but also upregulates antioxidant defenses)</li>
        </ul>

        <p><strong>External (Exogenous) Sources:</strong></p>
        <ul className="glossary-list">
          <li><strong>UV Radiation:</strong> Sunlight generates ROS in skin</li>
          <li><strong>Pollution:</strong> Air pollutants, smoke, vehicle exhaust</li>
          <li><strong>Tobacco Smoke:</strong> Contains numerous free radicals and pro-oxidants</li>
          <li><strong>Radiation:</strong> X-rays, cosmic rays, radon</li>
          <li><strong>Certain Foods:</strong> Fried foods, processed meats, alcohol</li>
          <li><strong>Pesticides and Chemicals:</strong> Industrial chemicals, heavy metals</li>
        </ul>

        <p><strong className="glossary-highlight">How Free Radicals Cause Damage:</strong></p>
        
        <p><strong>1. Chain Reactions:</strong></p>
        <ul className="glossary-list">
          <li>Free radical steals electron from stable molecule</li>
          <li>That molecule becomes a free radical, steals another electron</li>
          <li>Chain reaction continues, amplifying damage</li>
          <li>Can damage hundreds of molecules before being neutralized</li>
        </ul>

        <p><strong>2. Lipid Peroxidation:</strong></p>
        <ul className="glossary-list">
          <li>Free radicals attack polyunsaturated fatty acids in cell membranes</li>
          <li>Creates chain reaction damaging membrane integrity</li>
          <li>Produces toxic byproducts like malondialdehyde (MDA)</li>
          <li>Compromises cell function and survival</li>
        </ul>

        <p><strong>3. Protein Oxidation:</strong></p>
        <ul className="glossary-list">
          <li>Damages amino acid side chains</li>
          <li>Alters protein structure and function</li>
          <li>Can inactivate enzymes and damage structural proteins</li>
          <li>Leads to protein aggregation</li>
        </ul>

        <p><strong>4. DNA Damage:</strong></p>
        <ul className="glossary-list">
          <li>Causes strand breaks and base modifications</li>
          <li>Can lead to mutations if not repaired</li>
          <li>Associated with cancer risk and aging</li>
          <li>Damages both nuclear and mitochondrial DNA</li>
        </ul>

        <p><strong className="glossary-highlight">The Body's Defense Systems:</strong></p>
        
        <p><strong>Enzymatic Antioxidants:</strong></p>
        <ul className="glossary-list">
          <li><strong>Superoxide Dismutase (SOD):</strong> Converts superoxide to hydrogen peroxide</li>
          <li><strong>Catalase:</strong> Breaks down hydrogen peroxide to water and oxygen</li>
          <li><strong>Glutathione Peroxidase:</strong> Reduces hydrogen peroxide and lipid peroxides</li>
        </ul>

        <p><strong>Non-Enzymatic Antioxidants:</strong></p>
        <ul className="glossary-list">
          <li><strong>Glutathione:</strong> Master antioxidant; directly neutralizes free radicals</li>
          <li><strong>Vitamin C:</strong> Water-soluble antioxidant in blood and cells</li>
          <li><strong>Vitamin E:</strong> Fat-soluble; protects cell membranes from lipid peroxidation</li>
          <li><strong>Carotenoids:</strong> Beta-carotene, lycopene; quench singlet oxygen</li>
          <li><strong>Polyphenols:</strong> Plant compounds with antioxidant properties</li>
          <li><strong>Coenzyme Q10:</strong> Protects mitochondrial membranes</li>
        </ul>

        <p><strong className="glossary-highlight">The Oxidative Balance:</strong></p>
        <p>Health depends on balance between free radical production and antioxidant defenses:</p>
        <ul className="glossary-list">
          <li><strong>Normal Balance:</strong> Beneficial signaling, immune function, cellular regulation</li>
          <li><strong>Oxidative Stress:</strong> Excess free radicals overwhelm defenses; contributes to disease and aging</li>
          <li><strong>Excessive Antioxidants:</strong> May impair beneficial free radical functions like immune response and exercise adaptations</li>
        </ul>
      </>
    ),

    commonUse: "&quot;Vitamin C is a potent antioxidant that neutralizes free radicals by donating electrons, thereby preventing oxidative damage to cells.&quot;",

    importanceInResearch: "Understanding free radical biology is essential for evaluating antioxidant supplements and their potential to reduce oxidative stress. Research examines whether supplemental antioxidants can beneficially shift the oxidative balance in various conditions without interfering with beneficial free radical functions.",

    relatedTerms: ["Oxidative Stress", "Antioxidant", "Glutathione", "MDA", "TAC"],

    exampleContext: "During intense exercise, muscle cells produce increased free radicals as a byproduct of elevated oxygen consumption. While excessive ROS can damage muscle tissue, moderate levels actually trigger beneficial adaptations like increased mitochondrial production and enhanced antioxidant enzyme expression. This is why mega-dose antioxidant supplementation during training may actually impair some exercise adaptations."
  };

  return <GlossaryTemplate {...content} />;
}
