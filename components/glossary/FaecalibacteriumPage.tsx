import { Header } from '../Header';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Footer } from '../Footer';

export function FaecalibacteriumPage() {
  return (
    <>
      <Header />
      <GlossaryTemplate
        term="Faecalibacterium prausnitzii"
        definition="One of the most abundant beneficial bacterial species in the healthy human colon. It is a major producer of butyrate, an important short-chain fatty acid that fuels colonocytes and has anti-inflammatory properties."
        content={
          <>
            <p className="content-text">
              Faecalibacterium prausnitzii is a Gram-positive, strictly anaerobic bacterium that typically comprises 5-15% of the gut microbiota in healthy adults, making it one of the most prevalent species in the colon. It is considered a biomarker of intestinal health, with reduced levels consistently observed in various inflammatory and metabolic disorders.
            </p>
            
            <h2 className="content-heading">Key Characteristics</h2>
            <ul className="glossary-list">
              <li><strong>Abundance</strong> — One of the most common gut bacteria in healthy adults (5-15% of total microbiota)</li>
              <li><strong>Strict anaerobe</strong> — Extremely oxygen-sensitive, thrives only in oxygen-free environments</li>
              <li><strong>Butyrate producer</strong> — Major contributor to colonic butyrate production</li>
              <li><strong>Commensal bacterium</strong> — Lives in mutualistic relationship with human host</li>
              <li><strong>Difficult to culture</strong> — High oxygen sensitivity makes laboratory cultivation challenging</li>
            </ul>
            
            <h2 className="content-heading">Primary Functions and Benefits</h2>
            <ul className="glossary-list">
              <li><strong>Butyrate production</strong> — Ferments dietary fiber to produce butyrate, the primary energy source for colonocytes</li>
              <li><strong>Anti-inflammatory activity</strong> — Secretes metabolites that suppress inflammatory pathways (NF-κB, IL-8 production)</li>
              <li><strong>Gut barrier protection</strong> — Butyrate strengthens tight junctions between colonocytes, reducing intestinal permeability</li>
              <li><strong>Immune modulation</strong> — Promotes regulatory T-cell development, balancing immune responses</li>
              <li><strong>Colonocyte health</strong> — Provides energy for colon cells, supporting their function and integrity</li>
            </ul>
            
            <h2 className="content-heading">Anti-Inflammatory Mechanisms</h2>
            <p className="content-text">
              F. prausnitzii exerts anti-inflammatory effects through multiple pathways:
            </p>
            <ul className="glossary-list">
              <li><strong>Butyrate production</strong> — Inhibits NF-κB signaling, reducing inflammatory cytokine production</li>
              <li><strong>Microbial Anti-inflammatory Molecule (MAM)</strong> — Secretes specific proteins with anti-inflammatory properties</li>
              <li><strong>Histone deacetylase inhibition</strong> — Butyrate acts as HDAC inhibitor, affecting gene expression</li>
              <li><strong>Regulatory T-cell induction</strong> — Promotes immune tolerance and reduces excessive inflammation</li>
              <li><strong>IL-10 stimulation</strong> — Increases production of anti-inflammatory cytokine IL-10</li>
            </ul>
            
            <h2 className="content-heading">Diseases Associated with Low F. prausnitzii</h2>
            <p className="content-text">
              Reduced abundance is consistently found in:
            </p>
            <ul className="glossary-list">
              <li><strong>Inflammatory bowel disease (IBD)</strong> — Particularly Crohn's disease; low levels predict disease recurrence after surgery</li>
              <li><strong>Ulcerative colitis</strong> — Decreased levels during active disease</li>
              <li><strong>Irritable bowel syndrome (IBS)</strong> — Lower abundance in some IBS patients</li>
              <li><strong>Obesity and metabolic syndrome</strong> — Inverse correlation with body weight and metabolic dysfunction</li>
              <li><strong>Type 2 diabetes</strong> — Reduced levels compared to healthy controls</li>
              <li><strong>Colorectal cancer</strong> — Decreased abundance observed in some studies</li>
              <li><strong>Celiac disease</strong> — Lower levels in active disease</li>
            </ul>
            
            <h2 className="content-heading">F. prausnitzii in IBD Research</h2>
            <p className="content-text">
              This bacterium has special significance in IBD:
            </p>
            <ul className="glossary-list">
              <li><strong>Biomarker of disease</strong> — Low F. prausnitzii levels correlate with disease activity and severity</li>
              <li><strong>Predictive value</strong> — Reduced levels after surgery predict higher risk of Crohn's disease recurrence</li>
              <li><strong>Therapeutic potential</strong> — Animal studies show that administering F. prausnitzii reduces colitis severity</li>
              <li><strong>Dysbiosis marker</strong> — Its depletion represents a key feature of IBD-associated dysbiosis</li>
            </ul>
            
            <h2 className="content-heading">Factors Affecting F. prausnitzii Abundance</h2>
            <p className="content-text">
              <strong>Factors that decrease F. prausnitzii:</strong>
            </p>
            <ul className="glossary-list">
              <li>Antibiotics (particularly broad-spectrum)</li>
              <li>Western diet (high fat, low fiber)</li>
              <li>Inflammatory conditions</li>
              <li>Stress</li>
              <li>Lack of dietary fiber</li>
            </ul>
            
            <p className="content-text">
              <strong>Factors that may increase F. prausnitzii:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Dietary fiber</strong> — Particularly resistant starch and complex carbohydrates</li>
              <li><strong>Prebiotics</strong> — Inulin-type fructans and other fermentable fibers</li>
              <li><strong>Polyphenols</strong> — Plant compounds that may promote F. prausnitzii growth</li>
              <li><strong>Mediterranean diet</strong> — High-fiber, plant-rich diet supports F. prausnitzii</li>
              <li><strong>Exercise</strong> — Regular physical activity associated with higher levels</li>
            </ul>
            
            <h2 className="content-heading">Therapeutic Potential</h2>
            <p className="content-text">
              Potential applications as a next-generation probiotic:
            </p>
            <ul className="glossary-list">
              <li><strong>Challenges</strong> — Extreme oxygen sensitivity makes formulation difficult; cannot survive standard probiotic manufacturing</li>
              <li><strong>Alternative approaches</strong> — Providing substrates (prebiotics) to promote existing F. prausnitzii may be more practical than direct supplementation</li>
              <li><strong>Fecal microbiota transplant</strong> — FMT can restore F. prausnitzii in depleted individuals</li>
              <li><strong>Active research</strong> — Scientists working on oxygen-protective formulations and pasteurized forms</li>
              <li><strong>Supernatant administration</strong> — Studies using F. prausnitzii metabolites rather than live bacteria</li>
            </ul>
            
            <h2 className="content-heading">Clinical Measurement</h2>
            <p className="content-text">
              F. prausnitzii can be assessed through:
            </p>
            <ul className="glossary-list">
              <li>Stool microbiome testing (16S rRNA sequencing or shotgun metagenomics)</li>
              <li>Quantitative PCR to measure specific bacterial abundance</li>
              <li>Fecal butyrate levels as an indirect marker of butyrate-producing bacteria</li>
            </ul>
            
            <h2 className="content-heading">Importance in Gut Health</h2>
            <p className="content-text">
              F. prausnitzii represents:
            </p>
            <ul className="glossary-list">
              <li>A cornerstone species for gut health and mucosal immunity</li>
              <li>A key producer of the most important SCFA for colon health</li>
              <li>A biomarker for assessing gut microbiome health</li>
              <li>A potential therapeutic target for inflammatory and metabolic diseases</li>
              <li>An example of the critical role beneficial bacteria play in human health</li>
            </ul>
            
            <p className="content-text">
              While direct supplementation with F. prausnitzii remains challenging, supporting its growth through adequate dietary fiber intake (especially resistant starch and inulin-type fructans) is an evidence-based strategy for promoting gut health and reducing inflammation.
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}