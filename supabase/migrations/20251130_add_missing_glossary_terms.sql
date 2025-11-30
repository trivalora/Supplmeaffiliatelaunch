-- Add missing glossary terms for SEO
-- These terms are referenced in external links but were missing from database

INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  examples,
  related_terms,
  meta_title,
  meta_description,
  created_at
) VALUES
-- BCAA (Branched-Chain Amino Acids)
(
  'bcaa',
  'BCAA',
  'Branched-Chain Amino Acids',
  'A group of three essential amino acids—leucine, isoleucine, and valine—characterized by their branched molecular structure. BCAAs make up approximately 35% of muscle protein and play critical roles in protein synthesis, energy production, and muscle recovery.',
  '<p>Branched-chain amino acids (BCAAs) are a subgroup of essential amino acids that the body cannot produce and must obtain through diet or supplementation. The three BCAAs are <a href="/glossary/leucine">leucine</a>, <a href="/glossary/isoleucine">isoleucine</a>, and <a href="/glossary/valine">valine</a>.</p>

<p>Unlike other amino acids that are primarily metabolized in the liver, BCAAs are metabolized directly in skeletal muscle tissue, making them uniquely important for muscle metabolism and energy production during exercise.</p>

<p><strong>Key Functions:</strong></p>
<ul>
<li><strong>Protein Synthesis:</strong> Leucine is particularly potent at activating the <a href="/glossary/mtor">mTOR pathway</a>, the primary signaling mechanism for <a href="/glossary/muscleproteinsynthesis">muscle protein synthesis</a>.</li>
<li><strong>Energy Source:</strong> During prolonged exercise or fasting, BCAAs can be used as fuel by muscles, potentially sparing muscle protein breakdown.</li>
<li><strong>Neurotransmitter Production:</strong> BCAAs compete with tryptophan for transport across the blood-brain barrier, potentially influencing <a href="/glossary/neurotransmitter">neurotransmitter</a> production and central fatigue.</li>
<li><strong>Immune Function:</strong> Particularly isoleucine plays roles in immune cell function and hemoglobin production.</li>
</ul>

<p><strong>Clinical Applications:</strong> BCAA supplementation is studied for reducing exercise-induced muscle damage, supporting recovery, managing hepatic encephalopathy in liver disease, and preserving muscle mass during weight loss or aging.</p>',
  ARRAY[
    'Leucine activates mTOR signaling to stimulate muscle protein synthesis',
    'BCAA supplementation may reduce delayed-onset muscle soreness (DOMS) after intense exercise',
    'In liver cirrhosis, BCAA supplementation can help correct amino acid imbalances',
    'Athletes often consume BCAAs in a 2:1:1 ratio (leucine:isoleucine:valine)'
  ],
  ARRAY[
    (SELECT id FROM api.glossary_terms WHERE slug = 'leucine'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'isoleucine'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'valine'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'essentialaminoacids'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'muscleproteinsynthesis'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'mtor')
  ],
  'BCAA (Branched-Chain Amino Acids) - Suppl.me Glossary',
  'Three essential amino acids critical for muscle protein synthesis, recovery, and energy production',
  NOW()
),

-- Creatine
(
  'creatine',
  'Creatine',
  NULL,
  'A naturally occurring compound found primarily in muscle tissue that plays a crucial role in rapid energy production. Creatine combines with phosphate to form <a href="/glossary/phosphocreatine">phosphocreatine</a>, serving as a quick energy reserve for regenerating <a href="/glossary/atp">ATP</a> during high-intensity, short-duration activities.',
  '<p>Creatine is one of the most extensively researched and effective sports supplements, with benefits extending beyond athletic performance to cognitive function, muscle preservation, and various clinical applications.</p>

<p><strong>Biochemistry and Function:</strong></p>
<ul>
<li><strong>Energy System:</strong> The phosphocreatine system provides rapid ATP regeneration during the first 10-15 seconds of high-intensity exercise, before aerobic or anaerobic glycolysis takes over.</li>
<li><strong>Synthesis:</strong> The body produces approximately 1-2g of creatine daily from amino acids (arginine, glycine, and methionine), primarily in the liver and kidneys.</li>
<li><strong>Storage:</strong> About 95% of creatine is stored in skeletal muscle as free creatine (60-70%) and <a href="/glossary/phosphocreatine">phosphocreatine</a> (30-40%).</li>
</ul>

<p><strong>Evidence-Based Benefits:</strong></p>
<ul>
<li><strong>Athletic Performance:</strong> Meta-analyses consistently show improvements in strength, power output, and high-intensity exercise capacity.</li>
<li><strong>Muscle Mass:</strong> Creatine supplementation combined with resistance training enhances muscle hypertrophy beyond training alone.</li>
<li><strong>Cognitive Function:</strong> Emerging research suggests benefits for memory, cognitive processing speed, and mental fatigue, particularly in conditions of sleep deprivation or cognitive stress.</li>
<li><strong>Neuroprotection:</strong> Preliminary evidence indicates potential benefits in neurodegenerative conditions and traumatic brain injury.</li>
</ul>

<p><strong>Forms and Dosing:</strong> Creatine monohydrate remains the most studied and cost-effective form. Standard protocols include either a loading phase (20g/day for 5-7 days, then 3-5g/day maintenance) or a gradual approach (3-5g/day without loading). The loading phase saturates muscle creatine stores faster but isn''t necessary for long-term benefits.</p>

<p><strong>Safety Profile:</strong> Decades of research demonstrate excellent safety when used as directed. Contrary to myths, creatine does not damage kidneys in healthy individuals, cause dehydration, or lead to muscle cramping. The most common side effect is water retention (typically 1-2kg), as creatine draws water into muscle cells.</p>',
  ARRAY[
    'Creatine monohydrate supplementation typically increases muscle creatine stores by 10-40%',
    'A meta-analysis found creatine supplementation improved maximum strength by 8% and exercise performance by 14%',
    'Vegetarians and vegans often see greater benefits from creatine supplementation due to lower baseline muscle creatine stores',
    'Taking creatine with carbohydrates may enhance uptake through insulin-mediated transport mechanisms'
  ],
  ARRAY[
    (SELECT id FROM api.glossary_terms WHERE slug = 'phosphocreatine'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'atp'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'creatinekinase'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'muscleproteinsynthesis')
  ],
  'Creatine - Suppl.me Glossary',
  'Naturally occurring compound that enhances rapid energy production, strength, and muscle mass',
  NOW()
),

-- Prebiotics
(
  'prebiotics',
  'Prebiotics',
  NULL,
  'Non-digestible food ingredients, typically specialized plant fibers, that selectively stimulate the growth and activity of beneficial gut bacteria, particularly <em>Bifidobacteria</em> and <em>Lactobacillus</em> species. Prebiotics serve as fuel for probiotic bacteria, supporting a healthy <a href="/glossary/gutmicrobiome">gut microbiome</a>.',
  '<p>Prebiotics represent a nutritional approach to modulating the gut microbiome by feeding beneficial bacteria rather than directly introducing them (as with <a href="/glossary/probiotics">probiotics</a>). The concept is based on the principle that certain carbohydrates resist digestion in the upper gastrointestinal tract, reaching the colon intact where they become fermentable substrates for beneficial bacteria.</p>

<p><strong>Classification and Types:</strong></p>
<ul>
<li><strong><a href="/glossary/inulintypefructans">Inulin-type fructans</a>:</strong> Including inulin and fructooligosaccharides (FOS), naturally found in chicory root, Jerusalem artichokes, garlic, and onions.</li>
<li><strong><a href="/glossary/gos">Galacto-oligosaccharides (GOS)</a>:</strong> Derived from lactose, particularly effective at promoting Bifidobacteria growth.</li>
<li><strong>Resistant starch:</strong> A type of starch that resists digestion and acts as a prebiotic in the colon.</li>
<li><strong>Polyphenols:</strong> Some plant compounds exhibit prebiotic-like effects through selective antimicrobial activity and promotion of beneficial bacteria.</li>
</ul>

<p><strong>Mechanisms of Action:</strong></p>
<ul>
<li><strong>Selective Fermentation:</strong> Beneficial bacteria possess enzymes to break down prebiotic fibers, while many pathogenic bacteria do not.</li>
<li><strong><a href="/glossary/scfa">SCFA Production</a>:</strong> Fermentation produces short-chain fatty acids (<a href="/glossary/butyrate">butyrate</a>, <a href="/glossary/propionate">propionate</a>, <a href="/glossary/acetate">acetate</a>) that provide energy for colonocytes, reduce inflammation, and regulate metabolism.</li>
<li><strong>Competitive Exclusion:</strong> Proliferation of beneficial bacteria helps crowd out potential pathogens.</li>
<li><strong>pH Reduction:</strong> SCFA production lowers colonic pH, creating an environment less favorable for pathogenic bacteria.</li>
</ul>

<p><strong>Evidence-Based Benefits:</strong></p>
<ul>
<li><strong>Digestive Health:</strong> Improvements in bowel regularity, stool consistency, and symptoms in functional gastrointestinal disorders.</li>
<li><strong>Mineral Absorption:</strong> Enhanced absorption of calcium and magnesium through increased solubility and colonic surface area.</li>
<li><strong>Metabolic Health:</strong> Improvements in glucose metabolism, insulin sensitivity, and appetite regulation through production of satiety hormones like <a href="/glossary/glp1">GLP-1</a> and <a href="/glossary/pyy">PYY</a>.</li>
<li><strong>Immune Function:</strong> Modulation of immune responses through interaction between gut bacteria and the gut-associated lymphoid tissue.</li>
</ul>

<p><strong>Dosing and Tolerability:</strong> Effective doses typically range from 5-20g daily, depending on the specific prebiotic. A gradual introduction is recommended to minimize gas and bloating, common side effects as gut bacteria adapt to increased fermentation. Individual tolerance varies considerably.</p>

<p><strong>Synbiotics:</strong> Products combining prebiotics with <a href="/glossary/probiotics">probiotics</a> aim to provide both the beneficial bacteria and their preferred food source, potentially enhancing colonization and activity.</p>',
  ARRAY[
    'Chicory root is one of the richest natural sources of inulin, containing up to 40% by dry weight',
    'Prebiotic fiber consumption increases Bifidobacteria populations within 1-2 weeks of supplementation',
    'Short-chain fatty acids produced from prebiotic fermentation provide approximately 10% of daily caloric needs',
    'Low-FODMAP diets restrict many prebiotics, which may be why they can negatively impact microbiome diversity'
  ],
  ARRAY[
    (SELECT id FROM api.glossary_terms WHERE slug = 'probiotics'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'gutmicrobiome'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'gos'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'inulintypefructans'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'scfa'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'butyrate'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'fodmap')
  ],
  'Prebiotics - Suppl.me Glossary',
  'Non-digestible fibers that selectively feed beneficial gut bacteria and support digestive health',
  NOW()
),

-- Probiotics
(
  'probiotics',
  'Probiotics',
  NULL,
  'Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. Probiotics typically consist of bacterial strains (primarily <em>Lactobacillus</em> and <em>Bifidobacterium</em> species) or yeasts (<em>Saccharomyces boulardii</em>) that support digestive health, immune function, and overall microbiome balance.',
  '<p>The concept of probiotics dates back to Nobel laureate Élie Metchnikoff''s early 20th-century hypothesis that consuming fermented milk products containing <em>Lactobacillus</em> could promote health and longevity. Modern probiotic research has expanded dramatically, though strain-specific effects and optimal applications remain areas of active investigation.</p>

<p><strong>Common Probiotic Strains and Applications:</strong></p>
<ul>
<li><strong><em>Lactobacillus rhamnosus</em> GG:</strong> One of the most extensively studied strains, particularly for antibiotic-associated diarrhea and pediatric gastrointestinal infections.</li>
<li><strong><em>Bifidobacterium</em> species:</strong> Dominant in infant gut microbiomes, studied for <a href="/glossary/ibs">IBS</a>, immune function, and metabolic health.</li>
<li><strong><em>Lactobacillus acidophilus</em>:</strong> Common in yogurt and dairy products, studied for lactose intolerance and general digestive health.</li>
<li><strong><em>Saccharomyces boulardii</em>:</strong> A probiotic yeast particularly effective for <em>Clostridium difficile</em> infection prevention and traveler''s diarrhea.</li>
<li><strong>Multi-strain products:</strong> Combinations theoretically offer broader benefits, though individual strain effects may be more predictable.</li>
</ul>

<p><strong>Mechanisms of Action:</strong></p>
<ul>
<li><strong>Competitive Exclusion:</strong> Probiotics compete with pathogenic bacteria for nutrients and adhesion sites on the intestinal wall.</li>
<li><strong>Antimicrobial Production:</strong> Many probiotic strains produce substances (bacteriocins, organic acids) that inhibit pathogenic bacteria.</li>
<li><strong>Barrier Function:</strong> Probiotics strengthen intestinal barrier integrity, reducing permeability and inflammation.</li>
<li><strong>Immune Modulation:</strong> Interaction with gut-associated lymphoid tissue influences both local and systemic immune responses.</li>
<li><strong>Metabolite Production:</strong> Production of vitamins (particularly B vitamins and vitamin K), <a href="/glossary/scfa">short-chain fatty acids</a>, and other bioactive compounds.</li>
</ul>

<p><strong>Evidence-Based Applications:</strong></p>
<ul>
<li><strong>Antibiotic-Associated Diarrhea:</strong> Meta-analyses show 40-60% reduction in risk when probiotics are taken alongside antibiotics.</li>
<li><strong><a href="/glossary/ibs">Irritable Bowel Syndrome</a>:</strong> Certain strains improve symptoms, particularly bloating and abdominal pain, with variable effects on bowel habits.</li>
<li><strong>Infectious Diarrhea:</strong> Reduces duration and severity, particularly in children with acute gastroenteritis.</li>
<li><strong><a href="/glossary/inflammatoryboweldisease">Inflammatory Bowel Disease</a>:</strong> Specific strains (VSL#3, <em>E. coli</em> Nissle 1917) show benefits for maintaining remission in ulcerative colitis.</li>
<li><strong>Immune Function:</strong> May reduce incidence and duration of respiratory tract infections, particularly in vulnerable populations.</li>
</ul>

<p><strong>Quality and Viability Considerations:</strong></p>
<ul>
<li><strong>CFU Count:</strong> Colony-forming units should be guaranteed through the expiration date, not just at manufacture. Effective doses typically range from 1-10 billion CFU daily, though some conditions require higher doses.</li>
<li><strong>Strain Specificity:</strong> Effects are highly strain-specific; benefits from one strain cannot be extrapolated to other strains of the same species.</li>
<li><strong>Shelf Stability:</strong> Some strains require refrigeration, while others are shelf-stable. Storage conditions significantly impact viability.</li>
<li><strong>Delivery Systems:</strong> Enteric coating or microencapsulation can protect probiotics from stomach acid, potentially enhancing survival to the colon.</li>
</ul>

<p><strong>Safety Profile:</strong> Probiotics are generally safe for healthy individuals. However, immunocompromised individuals, those with central venous catheters, or severe acute illness should consult healthcare providers, as rare cases of systemic infection have been reported in vulnerable populations.</p>

<p><strong>Synergy with <a href="/glossary/prebiotics">Prebiotics</a>:</strong> Combining probiotics with prebiotic fibers (synbiotics) may enhance probiotic survival and colonization, though evidence for superior efficacy over probiotics alone remains mixed.</p>',
  ARRAY[
    'The human gut microbiome contains approximately 100 trillion microorganisms, outnumbering human cells',
    'Probiotic supplements must survive stomach acid (pH 1.5-3.5) and bile salts to reach the colon viable',
    'Fermented foods like kimchi, sauerkraut, and kefir naturally contain diverse probiotic strains',
    'Taking probiotics with food may enhance survival through the stomach by buffering pH'
  ],
  ARRAY[
    (SELECT id FROM api.glossary_terms WHERE slug = 'prebiotics'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'gutmicrobiome'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'dysbiosis'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'ibs'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'inflammatoryboweldisease'),
    (SELECT id FROM api.glossary_terms WHERE slug = 'scfa')
  ],
  'Probiotics - Suppl.me Glossary',
  'Live beneficial bacteria that support digestive health, immune function, and microbiome balance',
  NOW()
)
ON CONFLICT (slug) DO NOTHING;
