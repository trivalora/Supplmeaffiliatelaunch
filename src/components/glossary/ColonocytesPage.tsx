import { GlossaryTemplate } from '../GlossaryTemplate';

export function ColonocytesPage() {
  return (
      <GlossaryTemplate
        term="Colonocytes"
        definition="The epithelial cells that line the colon (large intestine). These specialized cells form a protective barrier and play crucial roles in nutrient absorption, water reabsorption, and immune function."
        content={
          <>
            <p className="content-text">
              Colonocytes are the primary cells forming the inner lining of the colon. They create a single-layer epithelial barrier that separates the gut lumen (containing trillions of bacteria and partially digested food) from the underlying tissues and bloodstream. These cells have a rapid turnover rate, typically replacing themselves every 3-5 days.
            </p>
            
            <h2 className="content-heading">Primary Functions</h2>
            <ul className="glossary-list">
              <li><strong>Barrier function</strong> — Form tight junctions that prevent harmful substances and bacteria from entering the bloodstream</li>
              <li><strong>Water and electrolyte absorption</strong> — Reabsorb water and sodium from stool, preventing dehydration</li>
              <li><strong>Nutrient absorption</strong> — Absorb some vitamins, minerals, and short-chain fatty acids</li>
              <li><strong>Mucus secretion</strong> — Some colonocytes (goblet cells) produce protective mucus layer</li>
              <li><strong>Immune surveillance</strong> — Interact with immune cells and help maintain gut immune balance</li>
            </ul>
            
            <h2 className="content-heading">Energy Metabolism</h2>
            <p className="content-text">
              Colonocytes have unique nutritional requirements:
            </p>
            <ul className="glossary-list">
              <li><strong>Primary fuel source</strong> — Butyrate (a short-chain fatty acid) provides 60-70% of energy needs</li>
              <li><strong>Preference for SCFAs</strong> — Colonocytes preferentially use butyrate, propionate, and acetate over glucose</li>
              <li><strong>Bacterial fermentation</strong> — Gut bacteria ferment dietary fiber into SCFAs that feed colonocytes</li>
              <li><strong>Metabolic switching</strong> — Can use glutamine and other nutrients when SCFAs are insufficient</li>
            </ul>
            
            <h2 className="content-heading">Butyrate: The Preferred Fuel</h2>
            <p className="content-text">
              Butyrate's special relationship with colonocytes:
            </p>
            <ul className="glossary-list">
              <li><strong>Energy production</strong> — Oxidized by colonocytes to generate ATP for cellular functions</li>
              <li><strong>Cell health</strong> — Maintains colonocyte health, differentiation, and normal cell cycle</li>
              <li><strong>Anti-inflammatory effects</strong> — Inhibits NF-κB, reducing inflammatory signaling</li>
              <li><strong>Barrier integrity</strong> — Strengthens tight junctions between colonocytes</li>
              <li><strong>Histone deacetylase (HDAC) inhibition</strong> — Affects gene expression in ways that support colon health</li>
            </ul>
            
            <h2 className="content-heading">Role in Colon Health and Disease</h2>
            <p className="content-text">
              Colonocyte health is central to various conditions:
            </p>
            <ul className="glossary-list">
              <li><strong>Inflammatory bowel disease (IBD)</strong> — Colonocyte dysfunction and barrier breakdown contribute to ulcerative colitis and Crohn's disease</li>
              <li><strong>Colorectal cancer</strong> — Dysregulated colonocyte growth and differentiation; butyrate may have protective effects</li>
              <li><strong>Diarrheal diseases</strong> — Impaired colonocyte function reduces water absorption</li>
              <li><strong>Gut barrier dysfunction</strong> — "Leaky gut" involves compromised colonocyte tight junctions</li>
            </ul>
            
            <h2 className="content-heading">Prebiotics and Colonocyte Nutrition</h2>
            <p className="content-text">
              Dietary interventions that support colonocytes:
            </p>
            <ul className="glossary-list">
              <li><strong>Prebiotic fibers</strong> — Inulin, FOS, GOS, and resistant starch are fermented into SCFAs</li>
              <li><strong>Fermented foods</strong> — May increase SCFA-producing bacteria</li>
              <li><strong>Adequate fiber intake</strong> — Provides substrate for bacterial SCFA production (25-38 g/day recommended)</li>
              <li><strong>Butyrate-producing bacteria</strong> — Faecalibacterium prausnitzii and other species that generate colonocyte fuel</li>
            </ul>
            
            <h2 className="content-heading">Colonocytes in Research</h2>
            <p className="content-text">
              Key measurements and observations:
            </p>
            <ul className="glossary-list">
              <li>Fecal SCFA concentrations reflect bacterial fermentation and colonocyte fuel availability</li>
              <li>Colonocyte proliferation rates indicate colon health and cancer risk</li>
              <li>Tight junction protein expression shows barrier integrity</li>
              <li>Inflammatory markers in colon tissue reflect colonocyte stress and disease activity</li>
            </ul>
            
            <h2 className="content-heading">Clinical Relevance</h2>
            <p className="content-text">
              Understanding colonocytes is important for:
            </p>
            <ul className="glossary-list">
              <li><strong>Dietary fiber recommendations</strong> — Adequate fiber ensures colonocyte energy supply</li>
              <li><strong>Prebiotic supplementation</strong> — Targeted fibers increase SCFA production</li>
              <li><strong>IBD management</strong> — Supporting colonocyte health may reduce inflammation</li>
              <li><strong>Colorectal cancer prevention</strong> — Adequate butyrate may have protective effects</li>
            </ul>
            
            <p className="content-text">
              The health of colonocytes depends heavily on the gut microbiome and dietary fiber intake. Prebiotics work primarily by increasing SCFA production, which directly nourishes and protects these critical cells.
            </p>
          </>
        }
      currentPage="colonocytes"

      />
  );
}