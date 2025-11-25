// Glossary data for tooltips
// Contains title, abbreviation (if any), and short summary for each glossary term

export interface GlossaryTermData {
  key: string;
  title: string;
  abbreviation?: string;
  summary: string; // Short explanation shown in tooltip
}

export const GLOSSARY_DATA: Record<string, GlossaryTermData> = {
  rct: {
    key: 'rct',
    title: 'Randomized Controlled Trial',
    abbreviation: 'RCT',
    summary: 'A type of scientific experiment that randomly assigns participants to different groups to test the effectiveness of an intervention.'
  },
  metaanalysis: {
    key: 'metaanalysis',
    title: 'Meta-Analysis',
    summary: 'A statistical analysis that combines the results of multiple scientific studies to identify patterns, disagreements, or overall effects.'
  },
  empiricalevidence: {
    key: 'empiricalevidence',
    title: 'Empirical Evidence',
    summary: 'Evidence based on observation, experience, or experiment rather than theory or pure logic.'
  },
  anecdotalevidence: {
    key: 'anecdotalevidence',
    title: 'Anecdotal Evidence',
    summary: 'Evidence based on personal accounts or isolated examples rather than rigorous scientific studies.'
  },
  placebo: {
    key: 'placebo',
    title: 'Placebo',
    summary: 'An inactive substance or treatment used as a control in experiments to test the effects of active treatments.'
  },
  peerreviewed: {
    key: 'peerreviewed',
    title: 'Peer-Reviewed',
    summary: 'Research that has been evaluated by independent experts in the field before publication to ensure quality and validity.'
  },
  statisticalsignificance: {
    key: 'statisticalsignificance',
    title: 'Statistical Significance',
    summary: 'A measure indicating that a result is unlikely to have occurred by chance alone, typically using p-values.'
  },
  clinicalsignificance: {
    key: 'clinicalsignificance',
    title: 'Clinical Significance',
    summary: 'The practical importance or real-world relevance of a research finding for patient care or health outcomes.'
  },
  subgroupanalysis: {
    key: 'subgroupanalysis',
    title: 'Subgroup Analysis',
    summary: 'Analysis of data from specific subsets of participants to identify differential effects in different populations.'
  },
  efficacy: {
    key: 'efficacy',
    title: 'Efficacy',
    summary: 'The ability of an intervention to produce a desired beneficial effect under ideal conditions.'
  },
  singleblinded: {
    key: 'singleblinded',
    title: 'Single-Blinded',
    summary: 'A study design where either participants or researchers (but not both) don\'t know which treatment is being given.'
  },
  doubleblinded: {
    key: 'doubleblinded',
    title: 'Double-Blinded',
    summary: 'A study design where neither participants nor researchers know which treatment is being given, reducing bias.'
  },
  bioavailability: {
    key: 'bioavailability',
    title: 'Bioavailability',
    summary: 'The proportion of a substance that enters circulation and is able to have an active effect in the body.'
  },
  inflammation: {
    key: 'inflammation',
    title: 'Inflammation',
    summary: 'The body\'s immune response to injury or infection, characterized by redness, swelling, heat, and pain.'
  },
  oxidativestress: {
    key: 'oxidativestress',
    title: 'Oxidative Stress',
    summary: 'An imbalance between free radicals and antioxidants in the body, potentially causing cellular damage.'
  },
  antioxidant: {
    key: 'antioxidant',
    title: 'Antioxidant',
    summary: 'A molecule that inhibits oxidation and neutralizes free radicals, protecting cells from damage.'
  },
  insulinresistance: {
    key: 'insulinresistance',
    title: 'Insulin Resistance',
    summary: 'A condition where cells don\'t respond normally to insulin, leading to elevated blood sugar levels.'
  },
  biomarker: {
    key: 'biomarker',
    title: 'Biomarker',
    summary: 'A measurable indicator of a biological state, condition, or disease that can be objectively measured.'
  },
  absorption: {
    key: 'absorption',
    title: 'Absorption',
    summary: 'The process by which nutrients or substances are taken up from the digestive tract into the bloodstream.'
  },
  metabolism: {
    key: 'metabolism',
    title: 'Metabolism',
    summary: 'The chemical processes that occur within living organisms to maintain life, including converting food to energy.'
  },
  cardiovascular: {
    key: 'cardiovascular',
    title: 'Cardiovascular',
    summary: 'Relating to the heart and blood vessels, the system that circulates blood throughout the body.'
  },
  dosedependent: {
    key: 'dosedependent',
    title: 'Dose-Dependent',
    summary: 'A relationship where the magnitude of effect varies with the amount of substance administered.'
  },
  homocysteine: {
    key: 'homocysteine',
    title: 'Homocysteine',
    summary: 'An amino acid in the blood; elevated levels are associated with increased cardiovascular disease risk.'
  },
  bonedensity: {
    key: 'bonedensity',
    title: 'Bone Density',
    abbreviation: 'BMD',
    summary: 'A measurement of the amount of minerals (mainly calcium) in bone tissue, indicating bone strength.'
  },
  glycemiccontrol: {
    key: 'glycemiccontrol',
    title: 'Glycemic Control',
    summary: 'The regulation of blood sugar levels, particularly important in diabetes management.'
  },
  cognitivefunction: {
    key: 'cognitivefunction',
    title: 'Cognitive Function',
    summary: 'Mental processes including memory, attention, reasoning, and decision-making.'
  },
  anemia: {
    key: 'anemia',
    title: 'Anemia',
    summary: 'A condition characterized by insufficient red blood cells or hemoglobin, causing fatigue and weakness.'
  },
  triglycerides: {
    key: 'triglycerides',
    title: 'Triglycerides',
    summary: 'A type of fat found in blood; high levels increase risk of heart disease and stroke.'
  },
  collagen: {
    key: 'collagen',
    title: 'Collagen',
    summary: 'The most abundant protein in the body, providing structure to skin, bones, tendons, and connective tissue.'
  },
  cortisol: {
    key: 'cortisol',
    title: 'Cortisol',
    summary: 'A steroid hormone produced by the adrenal glands, often called the "stress hormone."'
  },
  thyroidfunction: {
    key: 'thyroidfunction',
    title: 'Thyroid Function',
    summary: 'The activity of the thyroid gland in regulating metabolism through hormone production.'
  },
  gutmicrobiome: {
    key: 'gutmicrobiome',
    title: 'Gut Microbiome',
    summary: 'The community of microorganisms living in the digestive tract, influencing health and disease.'
  },
  immunesystem: {
    key: 'immunesystem',
    title: 'Immune System',
    summary: 'The body\'s defense system against infections, diseases, and foreign substances.'
  },
  muscleproteinsynthesis: {
    key: 'muscleproteinsynthesis',
    title: 'Muscle Protein Synthesis',
    abbreviation: 'MPS',
    summary: 'The process of building new muscle proteins, essential for muscle growth and repair.'
  },
  proteinsynthesis: {
    key: 'proteinsynthesis',
    title: 'Protein Synthesis',
    summary: 'The biological process of creating new proteins from amino acids.'
  },
  neurotransmitter: {
    key: 'neurotransmitter',
    title: 'Neurotransmitter',
    summary: 'Chemical messengers that transmit signals between nerve cells in the brain and nervous system.'
  },
  electrolytes: {
    key: 'electrolytes',
    title: 'Electrolytes',
    summary: 'Minerals in blood and body fluids that carry an electric charge and regulate various bodily functions.'
  },
  jointhealth: {
    key: 'jointhealth',
    title: 'Joint Health',
    summary: 'The condition and function of joints, including cartilage, bones, and surrounding tissues.'
  },
  sleepquality: {
    key: 'sleepquality',
    title: 'Sleep Quality',
    summary: 'The overall effectiveness and restfulness of sleep, including duration, depth, and continuity.'
  },
  mitochondria: {
    key: 'mitochondria',
    title: 'Mitochondria',
    summary: 'Organelles within cells that produce energy (ATP), often called the "powerhouses" of the cell.'
  },
  protein: {
    key: 'protein',
    title: 'Protein',
    summary: 'Essential macronutrients made of amino acids, crucial for building and repairing tissues.'
  },
  vitamindeficiency: {
    key: 'vitamindeficiency',
    title: 'Vitamin Deficiency',
    summary: 'Insufficient levels of vitamins in the body, leading to various health problems.'
  },
  adaptogen: {
    key: 'adaptogen',
    title: 'Adaptogen',
    summary: 'Herbs or substances that help the body adapt to stress and promote homeostasis.'
  },
  smd: {
    key: 'smd',
    title: 'Standardized Mean Difference',
    abbreviation: 'SMD',
    summary: 'A statistical measure of effect size used in meta-analyses to compare outcomes across different studies.'
  },
  bloodglucose: {
    key: 'bloodglucose',
    title: 'Blood Glucose',
    summary: 'The concentration of sugar (glucose) in the blood, a key indicator of metabolic health.'
  },
  bloodpressure: {
    key: 'bloodpressure',
    title: 'Blood Pressure',
    summary: 'The force of blood pushing against artery walls, measured as systolic over diastolic pressure.'
  },
  epa: {
    key: 'epa',
    title: 'Eicosapentaenoic Acid',
    abbreviation: 'EPA',
    summary: 'An omega-3 fatty acid found in fish oil with anti-inflammatory properties.'
  },
  dha: {
    key: 'dha',
    title: 'Docosahexaenoic Acid',
    abbreviation: 'DHA',
    summary: 'An omega-3 fatty acid essential for brain health and development.'
  },
  'omega-3': {
    key: 'omega-3',
    title: 'Omega-3',
    summary: 'Essential fatty acids with anti-inflammatory properties, found in fish and certain plant sources.'
  },
  grade: {
    key: 'grade',
    title: 'GRADE',
    abbreviation: 'GRADE',
    summary: 'Grading of Recommendations Assessment, Development and Evaluation - a system for rating quality of evidence.'
  },
  glucosemetabolism: {
    key: 'glucosemetabolism',
    title: 'Glucose Metabolism',
    summary: 'The biochemical processes involved in utilizing glucose for energy production.'
  },
  systolic: {
    key: 'systolic',
    title: 'Systolic Blood Pressure',
    summary: 'The pressure in arteries when the heart beats (the higher number in blood pressure readings).'
  },
  diastolic: {
    key: 'diastolic',
    title: 'Diastolic Blood Pressure',
    summary: 'The pressure in arteries between heartbeats (the lower number in blood pressure readings).'
  },
  normotensive: {
    key: 'normotensive',
    title: 'Normotensive',
    summary: 'Having normal blood pressure levels (typically around 120/80 mmHg).'
  },
  hypertensive: {
    key: 'hypertensive',
    title: 'Hypertensive',
    summary: 'Having high blood pressure (typically 130/80 mmHg or higher).'
  },
  macromineral: {
    key: 'macromineral',
    title: 'Macromineral',
    summary: 'Minerals needed by the body in larger amounts (more than 100mg/day), like calcium and magnesium.'
  },
  mineral: {
    key: 'mineral',
    title: 'Mineral',
    summary: 'Inorganic nutrients essential for various body functions, including bone health and metabolism.'
  },
  pms: {
    key: 'pms',
    title: 'Premenstrual Syndrome',
    abbreviation: 'PMS',
    summary: 'A group of physical and emotional symptoms occurring before menstruation.'
  },
  preeclampsia: {
    key: 'preeclampsia',
    title: 'Preeclampsia',
    summary: 'A pregnancy complication characterized by high blood pressure and signs of organ damage.'
  },
  osteoporosis: {
    key: 'osteoporosis',
    title: 'Osteoporosis',
    summary: 'A condition where bones become weak and brittle, increasing fracture risk.'
  },
  hydrolyzed: {
    key: 'hydrolyzed',
    title: 'Hydrolyzed',
    summary: 'Broken down into smaller components through chemical processes, often improving absorption.'
  },
  glycine: {
    key: 'glycine',
    title: 'Glycine',
    abbreviation: 'Gly',
    summary: 'The simplest amino acid, important for protein synthesis and various metabolic functions.'
  },
  proline: {
    key: 'proline',
    title: 'Proline',
    abbreviation: 'Pro',
    summary: 'An amino acid particularly abundant in collagen, important for structural proteins.'
  },
  hydroxyproline: {
    key: 'hydroxyproline',
    title: 'Hydroxyproline',
    summary: 'A modified amino acid found primarily in collagen, formed from proline.'
  },
  atp: {
    key: 'atp',
    title: 'Adenosine Triphosphate',
    abbreviation: 'ATP',
    summary: 'The primary energy currency of cells, storing and providing energy for cellular processes.'
  },
  pedro: {
    key: 'pedro',
    title: 'PEDro Scale',
    abbreviation: 'PEDro',
    summary: 'Physiotherapy Evidence Database scale - a tool for rating the quality of clinical trials.'
  },
  hemoglobin: {
    key: 'hemoglobin',
    title: 'Hemoglobin',
    abbreviation: 'Hb',
    summary: 'A protein in red blood cells that carries oxygen from lungs to tissues throughout the body.'
  },
  myoglobin: {
    key: 'myoglobin',
    title: 'Myoglobin',
    summary: 'An oxygen-binding protein found in muscle tissue, facilitating oxygen delivery to muscle cells.'
  },
  rr: {
    key: 'rr',
    title: 'Risk Ratio',
    abbreviation: 'RR',
    summary: 'A measure comparing the risk of an outcome in exposed versus unexposed groups.'
  },
  or: {
    key: 'or',
    title: 'Odds Ratio',
    abbreviation: 'OR',
    summary: 'A measure of association between an exposure and outcome, comparing odds in different groups.'
  },
  fmd: {
    key: 'fmd',
    title: 'Flow-Mediated Dilation',
    abbreviation: 'FMD',
    summary: 'A measure of endothelial function and arterial health, assessing blood vessel responsiveness.'
  },
  wmd: {
    key: 'wmd',
    title: 'Weighted Mean Difference',
    abbreviation: 'WMD',
    summary: 'A statistical measure used in meta-analyses to combine continuous outcome data from multiple studies.'
  },
  il6: {
    key: 'il6',
    title: 'Interleukin-6',
    abbreviation: 'IL-6',
    summary: 'A pro-inflammatory cytokine involved in immune responses and inflammation.'
  },
  tac: {
    key: 'tac',
    title: 'Total Antioxidant Capacity',
    abbreviation: 'TAC',
    summary: 'A measure of the overall antioxidant activity in a sample, indicating free radical scavenging ability.'
  },
  fibrinogen: {
    key: 'fibrinogen',
    title: 'Fibrinogen',
    summary: 'A blood protein involved in clot formation; elevated levels increase cardiovascular risk.'
  },
  il1: {
    key: 'il1',
    title: 'Interleukin-1',
    abbreviation: 'IL-1',
    summary: 'A group of cytokines that play a central role in inflammation and immune responses.'
  },
  tnfalpha: {
    key: 'tnfalpha',
    title: 'Tumor Necrosis Factor Alpha',
    abbreviation: 'TNF-α',
    summary: 'A pro-inflammatory cytokine involved in systemic inflammation and immune regulation.'
  },
  mda: {
    key: 'mda',
    title: 'Malondialdehyde',
    abbreviation: 'MDA',
    summary: 'A marker of oxidative stress and lipid peroxidation, indicating cellular damage.'
  },
  glutathione: {
    key: 'glutathione',
    title: 'Glutathione',
    abbreviation: 'GSH',
    summary: 'A powerful antioxidant produced by the body, protecting cells from oxidative damage.'
  },
  fodmap: {
    key: 'fodmap',
    title: 'FODMAP',
    abbreviation: 'FODMAP',
    summary: 'Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols - short-chain carbohydrates that can cause digestive issues.'
  },
  ibs: {
    key: 'ibs',
    title: 'Irritable Bowel Syndrome',
    abbreviation: 'IBS',
    summary: 'A common digestive disorder causing abdominal pain, bloating, and changes in bowel habits.'
  },
  sibo: {
    key: 'sibo',
    title: 'Small Intestinal Bacterial Overgrowth',
    abbreviation: 'SIBO',
    summary: 'An abnormal increase in bacteria in the small intestine, causing digestive symptoms.'
  },
  gos: {
    key: 'gos',
    title: 'Galacto-Oligosaccharides',
    abbreviation: 'GOS',
    summary: 'Prebiotic fibers that promote beneficial gut bacteria growth.'
  },
  inulintypefructans: {
    key: 'inulintypefructans',
    title: 'Inulin-Type Fructans',
    summary: 'Prebiotic fibers found in plants that feed beneficial gut bacteria.'
  },
  glp1: {
    key: 'glp1',
    title: 'Glucagon-Like Peptide-1',
    abbreviation: 'GLP-1',
    summary: 'A hormone that enhances insulin secretion, slows gastric emptying, and promotes satiety.'
  },
  pyy: {
    key: 'pyy',
    title: 'Peptide YY',
    abbreviation: 'PYY',
    summary: 'A hormone released by the intestines that reduces appetite and promotes feelings of fullness.'
  },
  arr: {
    key: 'arr',
    title: 'Absolute Risk Reduction',
    abbreviation: 'ARR',
    summary: 'The difference in risk between control and treatment groups, showing actual risk reduction.'
  },
  ci: {
    key: 'ci',
    title: 'Confidence Interval',
    abbreviation: 'CI',
    summary: 'A range of values indicating the uncertainty around a statistical estimate.'
  },
  ulcerativecolitis: {
    key: 'ulcerativecolitis',
    title: 'Ulcerative Colitis',
    abbreviation: 'UC',
    summary: 'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon.'
  },
  inflammatoryboweldisease: {
    key: 'inflammatoryboweldisease',
    title: 'Inflammatory Bowel Disease',
    abbreviation: 'IBD',
    summary: 'A group of chronic inflammatory conditions affecting the digestive tract, including Crohn\'s disease and ulcerative colitis.'
  },
  hba1c: {
    key: 'hba1c',
    title: 'Hemoglobin A1c',
    abbreviation: 'HbA1c',
    summary: 'A measure of average blood sugar levels over the past 2-3 months, used to diagnose and monitor diabetes.'
  },
  crp: {
    key: 'crp',
    title: 'C-Reactive Protein',
    abbreviation: 'CRP',
    summary: 'A blood marker of inflammation, elevated in various inflammatory conditions and infections.'
  },
  ldlcholesterol: {
    key: 'ldlcholesterol',
    title: 'LDL Cholesterol',
    abbreviation: 'LDL',
    summary: 'Low-density lipoprotein cholesterol, often called "bad" cholesterol due to its role in plaque buildup.'
  },
  hdlcholesterol: {
    key: 'hdlcholesterol',
    title: 'HDL Cholesterol',
    abbreviation: 'HDL',
    summary: 'High-density lipoprotein cholesterol, known as "good" cholesterol for its protective cardiovascular effects.'
  },
  scfa: {
    key: 'scfa',
    title: 'Short-Chain Fatty Acids',
    abbreviation: 'SCFA',
    summary: 'Fatty acids produced by gut bacteria fermenting dietary fiber, supporting gut and metabolic health.'
  },
  betacarotene: {
    key: 'betacarotene',
    title: 'Beta-Carotene',
    summary: 'A carotenoid that the body converts to vitamin A, found in orange and yellow vegetables.'
  },
  lycopene: {
    key: 'lycopene',
    title: 'Lycopene',
    summary: 'A red carotenoid pigment and antioxidant found in tomatoes and other red fruits.'
  },
  oxidizedldl: {
    key: 'oxidizedldl',
    title: 'Oxidized LDL',
    summary: 'LDL cholesterol that has been damaged by free radicals, particularly harmful to arterial walls.'
  },
  eightohdg: {
    key: 'eightohdg',
    title: '8-Hydroxy-2\'-Deoxyguanosine',
    abbreviation: '8-OHdG',
    summary: 'A marker of oxidative DNA damage, indicating cellular stress.'
  },
  enterocytes: {
    key: 'enterocytes',
    title: 'Enterocytes',
    summary: 'Absorptive cells lining the small intestine that take up nutrients from digested food.'
  },
  lipidperoxidation: {
    key: 'lipidperoxidation',
    title: 'Lipid Peroxidation',
    summary: 'Oxidative degradation of lipids in cell membranes, leading to cellular damage.'
  },
  hemeiron: {
    key: 'hemeiron',
    title: 'Heme Iron',
    summary: 'Iron bound to heme protein, found in animal foods, more easily absorbed than non-heme iron.'
  },
  nonhemeiron: {
    key: 'nonhemeiron',
    title: 'Non-Heme Iron',
    summary: 'Iron not bound to heme, found in plant foods and supplements, less readily absorbed.'
  },
  rickets: {
    key: 'rickets',
    title: 'Rickets',
    summary: 'A childhood bone disease caused by vitamin D deficiency, leading to soft and weak bones.'
  },
  osteomalacia: {
    key: 'osteomalacia',
    title: 'Osteomalacia',
    summary: 'Softening of bones in adults, typically due to vitamin D deficiency.'
  },
  hyperglycemia: {
    key: 'hyperglycemia',
    title: 'Hyperglycemia',
    summary: 'Abnormally high blood sugar levels, a characteristic of diabetes.'
  },
  prediabetes: {
    key: 'prediabetes',
    title: 'Prediabetes',
    summary: 'A condition where blood sugar levels are higher than normal but not high enough for a diabetes diagnosis.'
  }
};
