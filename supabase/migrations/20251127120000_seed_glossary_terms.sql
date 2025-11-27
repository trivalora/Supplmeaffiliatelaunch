-- Seed Glossary Terms
-- Generated: 2025-11-27T11:45:23.982Z
-- This file inserts 197 glossary terms into the api.glossary_terms table

BEGIN;

-- Disable triggers for faster insertion
ALTER TABLE api.glossary_terms DISABLE TRIGGER ALL;

-- 1. Absorption
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'absorption',
  'Absorption',
  NULL,
  'The process by which nutrients, drugs, or other substances pass from the gastrointestinal tract into the bloodstream or lymphatic system, making them available for use by the body.',
  NULL,
  'Absorption - Suppl.me Glossary',
  'The process by which nutrients pass from the gut into the bloodstream'
);

-- 2. Acetate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'acetate',
  'Acetate',
  NULL,
  'A two-carbon short-chain fatty acid and the most abundantly produced SCFA from bacterial fermentation of dietary fiber in the colon, with roles in energy metabolism, lipid synthesis, appetite regulation, and inflammation modulation.',
  NULL,
  'Acetate - Suppl.me Glossary',
  'Most abundant short-chain fatty acid produced by gut bacteria'
);

-- 3. Adaptogen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'adaptogen',
  'Adaptogen',
  NULL,
  'A natural substance, typically from plants or fungi, that helps the body adapt to stress and promotes homeostasis by modulating physiological responses to physical, chemical, or biological stressors.',
  NULL,
  'Adaptogen - Suppl.me Glossary',
  'Natural substance helping the body adapt to stress'
);

-- 4. Adverse Effects
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'adverseeffects',
  'Adverse Effects',
  NULL,
  'Unintended, harmful, or unpleasant responses to a supplement or medication that occur in addition to the desired therapeutic response, ranging from mild and temporary to severe and life-threatening.',
  NULL,
  'Adverse Effects - Suppl.me Glossary',
  'Unintended harmful or unpleasant responses to supplements ranging from mild to severe'
);

-- 5. Akkermansia muciniphila
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'akkermansia',
  'Akkermansia muciniphila',
  NULL,
  'A beneficial bacterial species that lives in the mucus layer of the intestinal tract. It is associated with metabolic health, healthy body weight, and improved glucose metabolism.',
  NULL,
  'Akkermansia muciniphila - Suppl.me Glossary',
  'Beneficial gut bacteria associated with metabolic health and healthy body weight'
);

-- 6. ALA (Alpha-Linolenic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ala',
  'ALA (Alpha-Linolenic Acid)',
  'ALA',
  'An essential omega-3 fatty acid found primarily in plant sources that must be obtained through diet, as the human body cannot produce it, serving as a precursor to EPA and DHA though conversion rates are typically low.',
  NULL,
  'ALA (Alpha-Linolenic Acid) - Suppl.me Glossary',
  'Plant-based omega-3 fatty acid that converts poorly to EPA and DHA'
);

-- 7. Amino Acids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'aminoacids',
  'Amino Acids',
  NULL,
  'Organic compounds that serve as the building blocks of proteins, each containing an amino group (-NH₂), a carboxyl group (-COOH), and a unique side chain that determines its properties and function.',
  NULL,
  'Amino Acids - Suppl.me Glossary',
  'Building blocks of proteins essential for tissue growth and repair'
);

-- 8. Anabolic Resistance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'anabolicresistance',
  'Anabolic Resistance',
  NULL,
  'The age-related reduction in skeletal muscle''s sensitivity to anabolic stimuli, particularly protein intake and resistance exercise, requiring greater protein doses to achieve the same muscle protein synthesis response seen in younger individuals.',
  NULL,
  'Anabolic Resistance - Suppl.me Glossary',
  'Reduced muscle protein synthesis response to anabolic stimuli like protein intake'
);

-- 9. Anecdotal Evidence
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'anecdotalevidence',
  'Anecdotal Evidence',
  NULL,
  'Information based on personal accounts, individual experiences, or observations rather than systematic scientific research.',
  NULL,
  'Anecdotal Evidence - Suppl.me Glossary',
  'Information based on personal accounts rather than systematic scientific research'
);

-- 10. Anemia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'anemia',
  'Anemia',
  NULL,
  'Anemia is a condition characterized by a deficiency in the number or quality of red blood cells, or a reduction in hemoglobin concentration, resulting in decreased oxygen-carrying capacity of the blood. It manifests as fatigue, weakness, and various other symptoms due to insufficient oxygen delivery to tissues.',
  NULL,
  'Anemia - Suppl.me Glossary',
  'Insufficient red blood cells or hemoglobin causing reduced oxygen capacity'
);

-- 11. Antioxidant
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'antioxidant',
  'Antioxidant',
  NULL,
  'A molecule that inhibits oxidation reactions by neutralizing free radicals, thereby protecting cells from oxidative damage.',
  NULL,
  'Antioxidant - Suppl.me Glossary',
  'A molecule that neutralizes free radicals and protects cells from oxidative damage'
);

-- 12. Arachidonic Acid (AA)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'arachidonicacid',
  'Arachidonic Acid (AA)',
  'AA',
  'An omega-6 polyunsaturated fatty acid that serves as a precursor to eicosanoids, including both pro-inflammatory and some regulatory signaling molecules. It plays important roles in inflammation, immune function, and cell signaling.',
  NULL,
  'Arachidonic Acid (AA) - Suppl.me Glossary',
  'Omega-6 fatty acid that serves as precursor to inflammatory and regulatory eicosanoids'
);

-- 13. Absolute Risk Reduction
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'arr',
  'Absolute Risk Reduction',
  'ARR',
  'The absolute difference in event rates between the treatment and control groups, representing the actual percentage point reduction in risk achieved by an intervention.',
  NULL,
  'Absolute Risk Reduction - Suppl.me Glossary',
  'Absolute difference in event rates between treatment and control groups'
);

-- 14. Atherosclerosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'atherosclerosis',
  'Atherosclerosis',
  NULL,
  'Arterial plaque buildup leading to narrowed and hardened arteries.',
  NULL,
  'Atherosclerosis - Suppl.me Glossary',
  'Arterial plaque buildup leading to narrowed and hardened arteries'
);

-- 15. ATP (Adenosine Triphosphate)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'atp',
  'ATP (Adenosine Triphosphate)',
  'ATP',
  'ATP (adenosine triphosphate) is the primary energy currency of cells, a high-energy molecule that stores and transfers chemical energy for virtually all cellular processes. Often called the ''molecular unit of currency'' of intracellular energy transfer.',
  NULL,
  'ATP (Adenosine Triphosphate) - Suppl.me Glossary',
  'Primary energy currency of cells, storing and transferring chemical energy'
);

-- 16. Bacteroides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bacteroides',
  'Bacteroides',
  NULL,
  'A genus of Gram-negative, anaerobic bacteria that represents one of the most abundant groups in the human gut microbiome. Bacteroides species are specialized in breaking down complex carbohydrates and play important roles in nutrition and immune function.',
  NULL,
  'Bacteroides - Suppl.me Glossary',
  'Major genus of beneficial gut bacteria involved in fiber fermentation and immune modulation'
);

-- 17. Beta-Carotene
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'betacarotene',
  'Beta-Carotene',
  NULL,
  'A red-orange pigment and provitamin A carotenoid found in plants that the body can convert to vitamin A (retinol), while also functioning as a potent antioxidant that protects cells from oxidative damage.',
  NULL,
  'Beta-Carotene - Suppl.me Glossary',
  'Orange plant pigment and provitamin A carotenoid with antioxidant properties'
);

-- 18. Bifidobacterium
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bifidobacterium',
  'Bifidobacterium',
  NULL,
  'Bifidobacterium is a genus of beneficial anaerobic bacteria that naturally inhabit the human gastrointestinal tract, particularly the colon. These bacteria are considered key members of a healthy gut microbiome and play crucial roles in digestion, immune function, and metabolic health.',
  NULL,
  'Bifidobacterium - Suppl.me Glossary',
  'Beneficial bacterial genus that inhabits the gut and supports digestive and immune health'
);

-- 19. Bioavailability
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bioavailability',
  'Bioavailability',
  NULL,
  'The proportion of a nutrient or drug that enters the bloodstream and becomes available for use by the body after administration or consumption.',
  NULL,
  'Bioavailability - Suppl.me Glossary',
  'The proportion of a nutrient that enters the bloodstream and becomes available for use'
);

-- 20. Biomarker
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'biomarker',
  'Biomarker',
  NULL,
  'A measurable biological indicator that reflects normal biological processes, disease states, or responses to therapeutic interventions. Biomarkers can be measured in blood, urine, tissues, or other biological samples.',
  NULL,
  'Biomarker - Suppl.me Glossary',
  'A measurable biological indicator of health status or disease processes'
);

-- 21. Blood Glucose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bloodglucose',
  'Blood Glucose',
  NULL,
  'Blood glucose, also called blood sugar, is the amount of glucose (a simple sugar) present in the blood. It''s the body''s primary energy source and its levels are tightly regulated by hormones like insulin and glucagon.',
  NULL,
  NULL,
  NULL
);

-- 22. Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bloodpressure',
  'Blood Pressure',
  NULL,
  'Blood pressure is the force exerted by circulating blood against the walls of blood vessels. It''s measured as two numbers: systolic pressure (when the heart beats) over diastolic pressure (when the heart rests between beats), expressed in millimeters of mercury (mmHg).',
  NULL,
  'Blood Pressure - Suppl.me Glossary',
  'The force of blood pushing against artery walls, measured as systolic over diastolic'
);

-- 23. BMI
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bmi',
  'BMI',
  'BMI',
  'A numerical value calculated from a person''s weight and height, used as a screening tool to categorize individuals into different weight status categories. It is calculated by dividing weight in kilograms by height in meters squared (kg/m²).',
  NULL,
  'BMI - Suppl.me Glossary',
  'Weight-to-height ratio used to categorize body weight status'
);

-- 24. Bone Density
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'bonedensity',
  'Bone Density',
  'BMD',
  'A measurement of the amount of minerals (primarily calcium and phosphorus) contained in a specific volume of bone, used to assess bone strength and fracture risk.',
  NULL,
  'Bone Density - Suppl.me Glossary',
  'Measurement of minerals in bone used to assess strength and fracture risk'
);

-- 25. Butyrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'butyrate',
  'Butyrate',
  NULL,
  'A short-chain fatty acid with four carbon atoms produced by bacterial fermentation of dietary fiber in the colon, serving as the primary energy source for colonocytes and playing crucial roles in gut health, inflammation regulation, and metabolic function.',
  NULL,
  'Butyrate - Suppl.me Glossary',
  'Short-chain fatty acid produced by gut bacteria, critical for colonocyte health'
);

-- 26. Calcium Carbonate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'calciumcarbonate',
  'Calcium Carbonate',
  NULL,
  'An inorganic salt containing approximately 40% elemental calcium by weight—the highest percentage among commonly available calcium supplements. It is the primary ingredient in limestone, chalk, and antacid tablets like Tums.',
  NULL,
  'Calcium Carbonate - Suppl.me Glossary',
  'Common calcium supplement form with 40% elemental calcium, requires stomach acid for absorption'
);

-- 27. Calcium Citrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'calciumcitrate',
  'Calcium Citrate',
  NULL,
  'A calcium salt of citric acid that contains approximately 21% elemental calcium by weight. It is a well-absorbed form of calcium that doesn''t require stomach acid for absorption, making it suitable for a wider range of individuals compared to calcium carbonate.',
  NULL,
  'Calcium Citrate - Suppl.me Glossary',
  'Highly bioavailable calcium supplement form that can be taken with or without food'
);

-- 28. Cardiovascular
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'cardiovascular',
  'Cardiovascular',
  NULL,
  'Relating to the heart (cardio) and blood vessels (vascular)—the circulatory system responsible for transporting blood, oxygen, nutrients, hormones, and waste products throughout the body.',
  NULL,
  'Cardiovascular - Suppl.me Glossary',
  'Relating to the heart and blood vessels - the circulatory system'
);

-- 29. Carotenoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'carotenoids',
  'Carotenoids',
  NULL,
  'A family of fat-soluble pigments produced by plants and certain microorganisms that provide yellow, orange, and red colors to fruits and vegetables. Carotenoids function as antioxidants and some serve as precursors to vitamin A (provitamin A carotenoids).',
  NULL,
  'Carotenoids - Suppl.me Glossary',
  'Fat-soluble pigments with antioxidant properties; some convert to vitamin A'
);

-- 30. Catalase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'catalase',
  'Catalase',
  NULL,
  'An endogenous antioxidant enzyme that breaks down hydrogen peroxide into water and oxygen, protecting cells from oxidative damage.',
  NULL,
  'Catalase - Suppl.me Glossary',
  'Antioxidant enzyme breaking down hydrogen peroxide to protect cells'
);

-- 31. Chelated
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'chelated',
  'Chelated',
  NULL,
  'A process where a mineral is bound to an organic molecule, such as an amino acid or organic acid. This binding creates a stable complex that may enhance the mineral''s absorption and bioavailability in the body.',
  NULL,
  'Chelated - Suppl.me Glossary',
  'Minerals bound to organic molecules to enhance absorption and bioavailability'
);

-- 32. Chylomicrons
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'chylomicrons',
  'Chylomicrons',
  NULL,
  'Large lipoprotein particles produced by intestinal cells that transport dietary fats and fat-soluble vitamins from the digestive system through the lymphatic system into the bloodstream.',
  NULL,
  'Chylomicrons - Suppl.me Glossary',
  'Lipoprotein particles that transport dietary fats from intestines to tissues'
);

-- 33. Confidence Interval
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ci',
  'Confidence Interval',
  'CI',
  'A range of values that is likely to contain the true effect size with a specified level of confidence (typically 95%), providing information about the precision and uncertainty of a study''s findings.',
  NULL,
  'Confidence Interval - Suppl.me Glossary',
  'Range of values likely to contain the true effect size with specified confidence'
);

-- 34. Clinical Significance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'clinicalsignificance',
  'Clinical Significance',
  NULL,
  'The practical importance of a treatment effect—whether it makes a real, noticeable difference in people''s health and daily lives.',
  NULL,
  'Clinical Significance - Suppl.me Glossary',
  'The practical importance of a treatment effect in real-world health outcomes'
);

-- 35. Coenzyme Q10
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'coenzymeq10',
  'Coenzyme Q10',
  'CoQ10',
  'A fat-soluble compound found in every cell of the body that serves two critical functions: as an essential component of the mitochondrial electron transport chain for ATP production, and as a powerful antioxidant that protects cell membranes and lipoproteins from oxidative damage. The body produces CoQ10 naturally, but levels decline with age and certain medications (particularly statins).',
  NULL,
  'Coenzyme Q10 - Suppl.me Glossary',
  'Compound critical for mitochondrial energy production and antioxidant protection'
);

-- 36. Cognitive Function
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'cognitivefunction.tsx',
  'Cognitive Function',
  NULL,
  'The mental processes involved in acquiring knowledge and understanding, including attention, memory, reasoning, problem-solving, decision-making, and processing speed.',
  NULL,
  NULL,
  NULL
);

-- 37. Cohort Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'cohortstudy',
  'Cohort Study',
  NULL,
  'A type of observational research that follows a group of people (cohort) who share a common characteristic over time to determine how different exposures affect the development of specific outcomes.',
  NULL,
  'Cohort Study - Suppl.me Glossary',
  'Observational study following groups over time to assess exposure-outcome relationships'
);

-- 38. Collagen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'collagen',
  'Collagen',
  NULL,
  'The most abundant protein in the human body, providing structural support and strength to skin, bones, tendons, ligaments, cartilage, and connective tissues throughout the body.',
  NULL,
  'Collagen - Suppl.me Glossary',
  'Most abundant protein providing structural support to tissues'
);

-- 39. Colonocytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'colonocytes',
  'Colonocytes',
  NULL,
  'The epithelial cells that line the colon (large intestine). These specialized cells form a protective barrier and play crucial roles in nutrient absorption, water reabsorption, and immune function.',
  NULL,
  'Colonocytes - Suppl.me Glossary',
  'Epithelial cells lining the colon that rely on butyrate for energy'
);

-- 40. Contraindications
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'contraindications',
  'Contraindications',
  NULL,
  'A specific situation, condition, or characteristic that makes a particular supplement or treatment inadvisable or potentially harmful. Contraindications indicate when a supplement should not be used because the risks outweigh any potential benefits.',
  NULL,
  'Contraindications - Suppl.me Glossary',
  'Specific situations or conditions where a supplement should not be used'
);

-- 41. Cortisol
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'cortisol',
  'Cortisol',
  NULL,
  'A steroid hormone produced by the adrenal glands that regulates metabolism, immune function, and the body''s stress response, following a natural daily rhythm.',
  NULL,
  'Cortisol - Suppl.me Glossary',
  'Stress hormone regulating metabolism and immune function'
);

-- 42. Creatine Kinase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'creatinekinase',
  'Creatine Kinase',
  'CK',
  'An enzyme found primarily in muscle tissue (skeletal muscle, heart, and brain) that catalyzes the conversion of creatine to phosphocreatine, storing energy for rapid ATP regeneration. Blood creatine kinase levels are used as a biomarker of muscle damage or stress.',
  NULL,
  'Creatine Kinase - Suppl.me Glossary',
  'Enzyme and biomarker of muscle damage'
);

-- 43. Cross-Sectional Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'crosssectionalstudy',
  'Cross-Sectional Study',
  NULL,
  'A type of observational research that analyzes data from a population at a single point in time, providing a ''snapshot'' of the relationship between variables without following participants over time.',
  NULL,
  'Cross-Sectional Study - Suppl.me Glossary',
  'Observational study analyzing data from a population at one specific point in time'
);

-- 44. CRP (C-Reactive Protein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'crp',
  'CRP (C-Reactive Protein)',
  'CRP',
  'An acute phase protein produced by the liver in response to inflammation, serving as a sensitive biomarker of systemic inflammation and cardiovascular disease risk.',
  NULL,
  'CRP (C-Reactive Protein) - Suppl.me Glossary',
  'Inflammatory biomarker produced by the liver in response to inflammation'
);

-- 45. Cytokines
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'cytokines',
  'Cytokines',
  NULL,
  'A broad category of small signaling proteins secreted by cells, particularly immune cells, that mediate and regulate immune responses, inflammation, and cell communication. Cytokines include interleukins (IL), interferons (IFN), tumor necrosis factors (TNF), and many others.',
  NULL,
  'Cytokines - Suppl.me Glossary',
  'Signaling proteins that mediate and regulate immune responses and inflammation'
);

-- 46. Deficiency
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'deficiency',
  'Deficiency',
  NULL,
  'A nutrient deficiency occurs when the body doesn''t get or can''t absorb enough of a nutrient to meet its physiological needs. Deficiencies can range from subclinical (measurable in lab tests but not causing obvious symptoms) to severe (causing clear clinical symptoms and disease).',
  NULL,
  'Deficiency - Suppl.me Glossary',
  'Insufficient nutrient levels in the body causing impaired function or clinical symptoms'
);

-- 47. DHA (Docosahexaenoic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'dha',
  'DHA (Docosahexaenoic Acid)',
  'DHA',
  'DHA is a long-chain omega-3 fatty acid that serves as a major structural component of the brain, retina, and nervous system. It''s essential for brain development in infants and cognitive function throughout life.',
  NULL,
  'DHA (Docosahexaenoic Acid) - Suppl.me Glossary',
  'Docosahexaenoic acid - an omega-3 fatty acid essential for brain and eye health'
);

-- 48. Diastolic Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'diastolic',
  'Diastolic Blood Pressure',
  NULL,
  'Diastolic blood pressure is the bottom number in a blood pressure reading, representing the pressure in the arteries when the heart is at rest between beats. It measures the minimum pressure on artery walls during the heart''s relaxation phase.',
  NULL,
  'Diastolic Blood Pressure - Suppl.me Glossary',
  'The bottom number in blood pressure readings, measuring minimum arterial pressure when the heart rests'
);

-- 49. DOMS (Delayed Onset Muscle Soreness)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'doms',
  'DOMS (Delayed Onset Muscle Soreness)',
  'DOMS',
  'Muscle pain and stiffness that develops 12-24 hours after unaccustomed or intense exercise, typically peaking at 24-72 hours and gradually resolving over 5-7 days.',
  NULL,
  'DOMS (Delayed Onset Muscle Soreness) - Suppl.me Glossary',
  'Muscle pain and stiffness occurring 12-72 hours after intense or unfamiliar exercise'
);

-- 50. Dose-Dependent
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'dosedependent',
  'Dose-Dependent',
  NULL,
  'A relationship where the magnitude of a biological effect (either beneficial or adverse) changes systematically with the amount of substance administered. Also called dose-response relationship.',
  NULL,
  'Dose-Dependent - Suppl.me Glossary',
  'A relationship where effect magnitude changes with the amount administered'
);

-- 51. Double Blinded
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'doubleblinded',
  'Double Blinded',
  NULL,
  'A study design where neither participants nor researchers know who is receiving the active treatment versus placebo until the study ends.',
  NULL,
  'Double Blinded - Suppl.me Glossary',
  'A study where neither participants nor researchers know group assignments'
);

-- 52. Drug Interactions
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'druginteractions',
  'Drug Interactions',
  NULL,
  'Situations where a supplement, food, or medication affects how another drug works in the body. These interactions can increase or decrease the effectiveness of medications, alter their side effects, or create new health risks.',
  NULL,
  'Drug Interactions - Suppl.me Glossary',
  'How supplements affect medication effectiveness or create new health risks'
);

-- 53. Dysbiosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'dysbiosis',
  'Dysbiosis',
  NULL,
  'An imbalance in the composition, diversity, or function of the gut microbiome, characterized by a reduction in beneficial bacteria and/or overgrowth of potentially harmful microorganisms. Dysbiosis represents a disruption from the healthy symbiotic relationship between host and gut microbes.',
  NULL,
  'Dysbiosis - Suppl.me Glossary',
  'Imbalance in gut microbiome composition reducing beneficial bacteria'
);

-- 54. Effect Size
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'effectsize',
  'Effect Size',
  NULL,
  'A quantitative measure of the magnitude of a phenomenon or the strength of a relationship, allowing comparison across different studies, outcome measures, and units of measurement.',
  NULL,
  'Effect Size - Suppl.me Glossary',
  'Quantitative measure of treatment magnitude, independent of sample size'
);

-- 55. Efficacy
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'efficacy',
  'Efficacy',
  NULL,
  'The ability of a supplement or treatment to produce the desired beneficial effect under ideal, controlled conditions.',
  NULL,
  'Efficacy - Suppl.me Glossary',
  'The ability of a treatment to produce the desired effect under ideal conditions'
);

-- 56. Eicosanoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'eicosanoids',
  'Eicosanoids',
  NULL,
  'A family of signaling molecules derived from 20-carbon polyunsaturated fatty acids (primarily arachidonic acid and EPA) that regulate inflammation, immune function, blood clotting, pain, fever, blood pressure, and numerous other physiological processes at the cellular level.',
  NULL,
  'Eicosanoids - Suppl.me Glossary',
  'Signaling molecules derived from omega-3 and omega-6 fatty acids'
);

-- 57. 8-OHdG
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'eightohdg',
  '8-OHdG',
  NULL,
  'A modified DNA nucleoside formed when reactive oxygen species attack guanine bases in DNA, serving as one of the most widely used biomarkers for oxidative DNA damage and oxidative stress.',
  NULL,
  NULL,
  NULL
);

-- 58. Electrolytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'electrolytes',
  'Electrolytes',
  NULL,
  'Minerals in the blood and body fluids that carry an electrical charge, essential for nerve function, muscle contraction, hydration, pH balance, and numerous other physiological processes.',
  NULL,
  'Electrolytes - Suppl.me Glossary',
  'Minerals carrying electrical charge essential for cellular function'
);

-- 59. Empirical Evidence
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'empiricalevidence',
  'Empirical Evidence',
  NULL,
  'Evidence obtained through observation, experimentation, or direct experience rather than theory or belief.',
  NULL,
  'Empirical Evidence - Suppl.me Glossary',
  'Evidence obtained through observation, experimentation, or direct experience'
);

-- 60. Endothelium
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'endothelium',
  'Endothelium',
  NULL,
  'The thin layer of specialized cells (endothelial cells) that lines the interior surface of all blood vessels and lymphatic vessels. This single-cell layer plays critical roles in vascular health, blood flow regulation, and cardiovascular function.',
  NULL,
  'Endothelium - Suppl.me Glossary',
  'Single-cell layer lining blood vessels that regulates vascular function and health'
);

-- 61. Enterocytes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'enterocytes',
  'Enterocytes',
  NULL,
  'The absorptive epithelial cells that line the small intestine, responsible for digesting and absorbing nutrients from food and forming a selective barrier between the intestinal lumen and internal body environment.',
  NULL,
  'Enterocytes - Suppl.me Glossary',
  'Intestinal absorptive cells responsible for nutrient uptake from the gut lumen'
);

-- 62. EPA (Eicosapentaenoic Acid)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'epa',
  'EPA (Eicosapentaenoic Acid)',
  'EPA',
  'EPA is a long-chain omega-3 fatty acid found primarily in fatty fish and fish oil supplements. It''s a key structural component of cell membranes and serves as a precursor to anti-inflammatory signaling molecules called eicosanoids.',
  NULL,
  'EPA (Eicosapentaenoic Acid) - Suppl.me Glossary',
  'Eicosapentaenoic acid - a long-chain omega-3 fatty acid with anti-inflammatory properties'
);

-- 63. ESR (Erythrocyte Sedimentation Rate)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'esr',
  'ESR (Erythrocyte Sedimentation Rate)',
  'ESR',
  'A blood test that measures how quickly red blood cells (erythrocytes) settle to the bottom of a test tube. An elevated ESR is a non-specific indicator of inflammation in the body.',
  NULL,
  'ESR (Erythrocyte Sedimentation Rate) - Suppl.me Glossary',
  'Blood test measuring inflammation by how fast red blood cells settle'
);

-- 64. Essential Amino Acids (EAAs)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'essentialaminoacids',
  'Essential Amino Acids (EAAs)',
  'EAAs',
  'The nine amino acids that the human body cannot synthesize in sufficient quantities and must be obtained through diet: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.',
  '<p>Essential amino acids are "essential" not because they''re more important than other amino acids, but because they must come from external sources. Without adequate intake of all nine EAAs, the body cannot efficiently build new proteins, leading to various health problems.</p>

        <p><strong class="glossary-highlight">The Nine Essential Amino Acids:</strong></p>

        <p><strong>1. Histidine</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Produces histamine (immune response), maintains myelin sheaths (nerve protection), tissue growth and repair</li>
          <li><strong>Typical Daily Need:</strong> ~10-14 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, poultry, dairy, whole grains</li>
          <li><strong>Special Notes:</strong> Particularly important for children''s growth; involved in red and white blood cell production</li>
        </ul>

        <p><strong>2. Isoleucine (BCAA)</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle metabolism, immune function, hemoglobin production, energy regulation</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Eggs, chicken, fish, lentils, almonds</li>
          <li><strong>Special Notes:</strong> One of three branched-chain amino acids; concentrated in muscle tissue</li>
        </ul>

        <p><strong>3. Leucine (BCAA)</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Primary trigger for muscle protein synthesis, blood sugar regulation, wound healing, growth hormone production</li>
          <li><strong>Typical Daily Need:</strong> ~34-42 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Whey protein, meat, dairy, soybeans, eggs</li>
          <li><strong>Special Notes:</strong> Most important BCAA for muscle building; threshold of ~2-3g needed to maximize protein synthesis</li>
        </ul>

        <p><strong>4. Lysine</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Protein synthesis, calcium absorption, collagen and elastin production, immune function, carnitine production</li>
          <li><strong>Typical Daily Need:</strong> ~30-38 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Meat, fish, dairy, eggs, legumes</li>
          <li><strong>Special Notes:</strong> Often the limiting amino acid in grain-based diets; important for bone health</li>
        </ul>

        <p><strong>5. Methionine</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Metabolism, detoxification, tissue growth, zinc and selenium absorption, antioxidant production</li>
          <li><strong>Typical Daily Need:</strong> ~10-15 mg/kg body weight (combined with cysteine)</li>
          <li><strong>Good Sources:</strong> Eggs, fish, meat, Brazil nuts, sesame seeds</li>
          <li><strong>Special Notes:</strong> Contains sulfur; precursor to cysteine and taurine; involved in DNA methylation</li>
        </ul>

        <p><strong>6. Phenylalanine</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to tyrosine, dopamine, norepinephrine, and epinephrine; structural component of proteins</li>
          <li><strong>Typical Daily Need:</strong> ~25-33 mg/kg body weight (combined with tyrosine)</li>
          <li><strong>Good Sources:</strong> Meat, fish, eggs, dairy, soy products</li>
          <li><strong>Special Notes:</strong> Important for mood regulation and cognitive function; individuals with PKU cannot metabolize it</li>
        </ul>

        <p><strong>7. Threonine</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Protein balance, immune function, collagen and elastin production, fat metabolism</li>
          <li><strong>Typical Daily Need:</strong> ~15-20 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Cottage cheese, poultry, fish, lentils, sesame seeds</li>
          <li><strong>Special Notes:</strong> Important for mucus production in digestive and respiratory tracts</li>
        </ul>

        <p><strong>8. Tryptophan</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Precursor to serotonin and melatonin, nitrogen balance, niacin (vitamin B3) production</li>
          <li><strong>Typical Daily Need:</strong> ~4-5 mg/kg body weight (lowest requirement)</li>
          <li><strong>Good Sources:</strong> Turkey, chicken, milk, cheese, pumpkin seeds, oats</li>
          <li><strong>Special Notes:</strong> Important for mood, sleep, and appetite regulation</li>
        </ul>

        <p><strong>9. Valine (BCAA)</strong></p>
        <ul class="glossary-list">
          <li><strong>Primary Functions:</strong> Muscle growth and repair, energy production, cognitive function</li>
          <li><strong>Typical Daily Need:</strong> ~24-26 mg/kg body weight</li>
          <li><strong>Good Sources:</strong> Dairy, meat, mushrooms, peanuts, soy protein</li>
          <li><strong>Special Notes:</strong> One of three BCAAs; involved in preventing muscle breakdown during exercise</li>
        </ul>

        <p><strong class="glossary-highlight">Why All Nine Matter:</strong></p>
        <p>Protein synthesis follows the "limiting amino acid" principle—like a chain is only as strong as its weakest link, protein synthesis can only proceed at the rate allowed by whichever essential amino acid is in shortest supply. If even one EAA is deficient, the body cannot efficiently build new proteins, regardless of total protein intake.</p>

        <p><strong class="glossary-highlight">Complete vs. Incomplete Proteins:</strong></p>
        <ul class="glossary-list">
          <li><strong>Complete Proteins:</strong> Contain all nine EAAs in adequate amounts
            <ul class="glossary-list" style={{marginTop: ''0.5rem''}}>
              <li>Animal sources: meat, fish, poultry, eggs, dairy</li>
              <li>Plant sources: quinoa, soy, buckwheat, hemp, chia seeds</li>
            </ul>
          </li>
          <li><strong>Incomplete Proteins:</strong> Low or lacking in one or more EAAs
            <ul class="glossary-list" style={{marginTop: ''0.5rem''}}>
              <li>Grains: often low in lysine</li>
              <li>Legumes: often low in methionine</li>
              <li>Solution: Combine complementary proteins (e.g., rice and beans)</li>
            </ul>
          </li>
        </ul>

        <p><strong class="glossary-highlight">EAA Supplements:</strong></p>
        <p>EAA supplements provide all nine essential amino acids in free form, allowing for rapid absorption. They may be beneficial when:</p>
        <ul class="glossary-list">
          <li>Maximizing protein synthesis with minimal calories</li>
          <li>Supporting muscle recovery without full meal</li>
          <li>Addressing specific dietary restrictions</li>
          <li>Enhancing protein quality of lower-quality protein sources</li>
        </ul>',
  'Essential Amino Acids (EAAs) - Suppl.me Glossary',
  'Nine amino acids that must be obtained from diet'
);

-- 65. Faecalibacterium prausnitzii
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'faecalibacterium',
  'Faecalibacterium prausnitzii',
  NULL,
  'One of the most abundant beneficial bacterial species in the healthy human colon. It is a major producer of butyrate, an important short-chain fatty acid that fuels colonocytes and has anti-inflammatory properties.',
  NULL,
  'Faecalibacterium prausnitzii - Suppl.me Glossary',
  'Major butyrate-producing gut bacteria associated with anti-inflammatory effects'
);

-- 66. Ferric Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ferriciron',
  'Ferric Iron',
  NULL,
  'Ferric iron is the oxidized form of iron (Fe³⁺), also known as ferric iron or iron(III), which is the primary form found in most iron supplements and fortified foods, but requires conversion to ferrous iron for absorption in the intestines.',
  NULL,
  'Ferric Iron - Suppl.me Glossary',
  'Iron in +3 oxidation state, less well absorbed than ferrous iron'
);

-- 67. Ferrous Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ferrousiron',
  'Ferrous Iron',
  NULL,
  'Ferrous iron is the reduced form of iron (Fe²⁺), also known as ferrous iron or iron(II), which is the bioavailable form that can be directly absorbed by intestinal cells and is found in meat, some iron supplements, and results from ferric iron reduction in the gut.',
  NULL,
  'Ferrous Iron - Suppl.me Glossary',
  'Iron in +2 oxidation state, better absorbed form for supplements'
);

-- 68. Fibrinogen
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'fibrinogen',
  'Fibrinogen',
  NULL,
  'A soluble plasma protein produced by the liver that plays a central role in blood clotting and is also an important biomarker of inflammation and cardiovascular disease risk.',
  NULL,
  'Fibrinogen - Suppl.me Glossary',
  'Plasma protein essential for blood clotting and biomarker of inflammation'
);

-- 69. Flavonoids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'flavonoids',
  'Flavonoids',
  NULL,
  'The largest subclass of polyphenols, characterized by a common 15-carbon skeleton consisting of two benzene rings connected by a 3-carbon bridge. Flavonoids are powerful antioxidants with anti-inflammatory, cardioprotective, and neuroprotective properties found abundantly in fruits, vegetables, tea, and cocoa.',
  NULL,
  'Flavonoids - Suppl.me Glossary',
  'Largest class of polyphenols with diverse antioxidant and anti-inflammatory effects'
);

-- 70. Flow-Mediated Dilation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'fmd',
  'Flow-Mediated Dilation',
  'FMD',
  'A non-invasive ultrasound-based measurement of endothelial function that assesses how well blood vessels dilate in response to increased blood flow, serving as an indicator of cardiovascular health.',
  NULL,
  'Flow-Mediated Dilation - Suppl.me Glossary',
  'Non-invasive ultrasound measurement of endothelial function and cardiovascular health'
);

-- 71. FODMAP
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'fodmap',
  'FODMAP',
  'Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols',
  'A group of short-chain carbohydrates and sugar alcohols that are poorly absorbed in the small intestine and rapidly fermented by gut bacteria, causing digestive symptoms in sensitive individuals.',
  NULL,
  'FODMAP - Suppl.me Glossary',
  'Short-chain carbohydrates poorly absorbed in small intestine, causing digestive symptoms in sensitive individuals'
);

-- 72. Folic Acid
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'folicacid',
  'Folic Acid',
  NULL,
  'The synthetic, oxidized form of folate (vitamin B9) used in dietary supplements and food fortification programs. Unlike naturally occurring folate found in foods, folic acid is a manufactured compound that must be converted through multiple enzymatic steps before the body can use it.',
  NULL,
  'Folic Acid - Suppl.me Glossary',
  'Synthetic form of vitamin B9 used in supplements and fortified foods'
);

-- 73. Fructooligosaccharides (FOS)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'fos',
  'Fructooligosaccharides (FOS)',
  'FOS',
  'Short-chain carbohydrates composed of fructose molecules that resist digestion in the upper gastrointestinal tract, serving as prebiotic substrates that selectively stimulate beneficial gut bacteria.',
  NULL,
  'Fructooligosaccharides (FOS) - Suppl.me Glossary',
  'Short-chain prebiotic fibers that selectively feed beneficial gut bacteria'
);

-- 74. Free Radicals
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'freeradicals',
  'Free Radicals',
  NULL,
  'Highly reactive molecules or atoms that contain one or more unpaired electrons, making them unstable and capable of damaging cells, proteins, and DNA through oxidative reactions.',
  '<p>Free radicals are a natural byproduct of normal metabolism and cellular function. In controlled amounts, they serve important roles in immune function and cell signaling. However, when free radical production exceeds the body''s antioxidant defenses, they can cause oxidative damage that contributes to aging and disease.</p>

        <p><strong class="glossary-highlight">Types of Free Radicals:</strong></p>

        <p><strong>Reactive Oxygen Species (ROS):</strong> Most common and well-studied free radicals</p>
        <ul class="glossary-list">
          <li><strong>Superoxide Radical (O₂•⁻):</strong> Formed during cellular respiration in mitochondria; first step in ROS production cascade</li>
          <li><strong>Hydroxyl Radical (•OH):</strong> Extremely reactive; can damage virtually any biomolecule it encounters</li>
          <li><strong>Hydrogen Peroxide (H₂O₂):</strong> Not technically a free radical but easily converts to highly reactive radicals</li>
          <li><strong>Singlet Oxygen (¹O₂):</strong> Excited form of oxygen; particularly damaging to lipids</li>
          <li><strong>Peroxyl Radical (ROO•):</strong> Propagates lipid peroxidation in cell membranes</li>
        </ul>

        <p><strong>Reactive Nitrogen Species (RNS):</strong></p>
        <ul class="glossary-list">
          <li><strong>Nitric Oxide (NO•):</strong> Important signaling molecule but can form damaging compounds</li>
          <li><strong>Peroxynitrite (ONOO⁻):</strong> Formed when NO• reacts with superoxide; highly damaging</li>
        </ul>

        <p><strong class="glossary-highlight">Sources of Free Radicals:</strong></p>

        <p><strong>Internal (Endogenous) Sources:</strong></p>
        <ul class="glossary-list">
          <li><strong>Cellular Respiration:</strong> Mitochondria naturally produce superoxide during ATP generation
            <ul class="glossary-list" style={{marginTop: ''0.5rem''}}>
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
        <ul class="glossary-list">
          <li><strong>UV Radiation:</strong> Sunlight generates ROS in skin</li>
          <li><strong>Pollution:</strong> Air pollutants, smoke, vehicle exhaust</li>
          <li><strong>Tobacco Smoke:</strong> Contains numerous free radicals and pro-oxidants</li>
          <li><strong>Radiation:</strong> X-rays, cosmic rays, radon</li>
          <li><strong>Certain Foods:</strong> Fried foods, processed meats, alcohol</li>
          <li><strong>Pesticides and Chemicals:</strong> Industrial chemicals, heavy metals</li>
        </ul>

        <p><strong class="glossary-highlight">How Free Radicals Cause Damage:</strong></p>

        <p><strong>1. Chain Reactions:</strong></p>
        <ul class="glossary-list">
          <li>Free radical steals electron from stable molecule</li>
          <li>That molecule becomes a free radical, steals another electron</li>
          <li>Chain reaction continues, amplifying damage</li>
          <li>Can damage hundreds of molecules before being neutralized</li>
        </ul>

        <p><strong>2. Lipid Peroxidation:</strong></p>
        <ul class="glossary-list">
          <li>Free radicals attack polyunsaturated fatty acids in cell membranes</li>
          <li>Creates chain reaction damaging membrane integrity</li>
          <li>Produces toxic byproducts like malondialdehyde (MDA)</li>
          <li>Compromises cell function and survival</li>
        </ul>

        <p><strong>3. Protein Oxidation:</strong></p>
        <ul class="glossary-list">
          <li>Damages amino acid side chains</li>
          <li>Alters protein structure and function</li>
          <li>Can inactivate enzymes and damage structural proteins</li>
          <li>Leads to protein aggregation</li>
        </ul>

        <p><strong>4. DNA Damage:</strong></p>
        <ul class="glossary-list">
          <li>Causes strand breaks and base modifications</li>
          <li>Can lead to mutations if not repaired</li>
          <li>Associated with cancer risk and aging</li>
          <li>Damages both nuclear and mitochondrial DNA</li>
        </ul>

        <p><strong class="glossary-highlight">The Body''s Defense Systems:</strong></p>

        <p><strong>Enzymatic Antioxidants:</strong></p>
        <ul class="glossary-list">
          <li><strong>Superoxide Dismutase (SOD):</strong> Converts superoxide to hydrogen peroxide</li>
          <li><strong>Catalase:</strong> Breaks down hydrogen peroxide to water and oxygen</li>
          <li><strong>Glutathione Peroxidase:</strong> Reduces hydrogen peroxide and lipid peroxides</li>
        </ul>

        <p><strong>Non-Enzymatic Antioxidants:</strong></p>
        <ul class="glossary-list">
          <li><strong>Glutathione:</strong> Master antioxidant; directly neutralizes free radicals</li>
          <li><strong>Vitamin C:</strong> Water-soluble antioxidant in blood and cells</li>
          <li><strong>Vitamin E:</strong> Fat-soluble; protects cell membranes from lipid peroxidation</li>
          <li><strong>Carotenoids:</strong> Beta-carotene, lycopene; quench singlet oxygen</li>
          <li><strong>Polyphenols:</strong> Plant compounds with antioxidant properties</li>
          <li><strong>Coenzyme Q10:</strong> Protects mitochondrial membranes</li>
        </ul>

        <p><strong class="glossary-highlight">The Oxidative Balance:</strong></p>
        <p>Health depends on balance between free radical production and antioxidant defenses:</p>
        <ul class="glossary-list">
          <li><strong>Normal Balance:</strong> Beneficial signaling, immune function, cellular regulation</li>
          <li><strong>Oxidative Stress:</strong> Excess free radicals overwhelm defenses; contributes to disease and aging</li>
          <li><strong>Excessive Antioxidants:</strong> May impair beneficial free radical functions like immune response and exercise adaptations</li>
        </ul>',
  'Free Radicals - Suppl.me Glossary',
  'Highly reactive molecules with unpaired electrons that can damage cells and DNA'
);

-- 75. Glucagon-Like Peptide-1
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glp1',
  'Glucagon-Like Peptide-1',
  'GLP-1',
  'An incretin hormone secreted by intestinal L-cells in response to nutrient intake that stimulates insulin secretion, suppresses glucagon release, delays gastric emptying, and reduces appetite, playing crucial roles in glucose homeostasis and satiety.',
  NULL,
  'Glucagon-Like Peptide-1 - Suppl.me Glossary',
  'Incretin hormone regulating insulin secretion, gastric emptying, and appetite'
);

-- 76. Glucagon
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glucagon',
  'Glucagon',
  NULL,
  'A peptide hormone produced by alpha cells in the pancreas that raises blood glucose levels by promoting glucose release from the liver. It acts as insulin''s counter-regulatory hormone, preventing hypoglycemia during fasting.',
  NULL,
  'Glucagon - Suppl.me Glossary',
  'Pancreatic hormone that raises blood glucose by promoting glycogen breakdown and gluconeogenesis'
);

-- 77. Glucose Metabolism
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glucosemetabolism',
  'Glucose Metabolism',
  NULL,
  'Glucose metabolism refers to all the biochemical processes involved in the formation, breakdown, and interconversion of glucose in living organisms. It includes how the body processes glucose from food, stores it as glycogen, breaks it down for energy, and maintains stable blood glucose levels.',
  NULL,
  'Glucose Metabolism - Suppl.me Glossary',
  'All biochemical processes involved in the formation, breakdown, and regulation of glucose'
);

-- 78. Glutathione
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glutathione',
  'Glutathione',
  'GSH',
  'A tripeptide antioxidant composed of glutamine, cysteine, and glycine that serves as the body''s master antioxidant, playing critical roles in detoxification, immune function, and protection against oxidative stress.',
  NULL,
  'Glutathione - Suppl.me Glossary',
  'Master antioxidant protecting against oxidative stress and supporting detoxification'
);

-- 79. Glutathione Peroxidase (GPx)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glutathioneperoxidase',
  'Glutathione Peroxidase (GPx)',
  'GPx',
  'A selenium-dependent antioxidant enzyme that reduces hydrogen peroxide and lipid peroxides, protecting cells from oxidative damage.',
  NULL,
  'Glutathione Peroxidase (GPx) - Suppl.me Glossary',
  'Selenium-dependent antioxidant enzyme reducing hydrogen peroxide and lipid peroxides'
);

-- 80. Glycemic Control
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glycemiccontrol',
  'Glycemic Control',
  NULL,
  'The regulation of blood glucose (sugar) levels within a healthy range, crucial for preventing diabetes complications and maintaining metabolic health.',
  NULL,
  'Glycemic Control - Suppl.me Glossary',
  'Regulation of blood glucose levels within a healthy range'
);

-- 81. Glycine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'glycine',
  'Glycine',
  'Gly',
  'Glycine is the smallest and simplest amino acid, classified as a non-essential (or conditionally essential) amino acid because the body can produce it, though dietary intake may be beneficial. It serves as a building block for proteins and plays numerous important roles in metabolism, neurotransmission, and tissue structure.',
  NULL,
  'Glycine - Suppl.me Glossary',
  'Simplest amino acid, major component of collagen and inhibitory neurotransmitter'
);

-- 82. Galacto-oligosaccharides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'gos',
  'Galacto-oligosaccharides',
  'GOS',
  'Short-chain carbohydrates composed of galactose molecules linked together, functioning as prebiotics that selectively stimulate the growth and activity of beneficial gut bacteria, particularly Bifidobacteria.',
  NULL,
  'Galacto-oligosaccharides - Suppl.me Glossary',
  'Prebiotic fibers selectively stimulating beneficial gut bacteria, particularly Bifidobacteria'
);

-- 83. GRADE (Grading of Recommendations Assessment, Development and Evaluation)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'grade',
  'GRADE (Grading of Recommendations Assessment, Development and Evaluation)',
  'GRADE',
  'GRADE is a systematic approach for rating the quality (or certainty) of evidence and the strength of recommendations in healthcare and clinical practice. It provides a transparent framework for moving from evidence to recommendations, taking into account the balance of benefits and harms, patient values and preferences, and resource use.',
  NULL,
  'GRADE (Grading of Recommendations Assessment, Development and Evaluation) - Suppl.me Glossary',
  'Grading of Recommendations Assessment, Development and Evaluation - a systematic approach for rating evidence quality'
);

-- 84. Gut Microbiome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'gutmicrobiome',
  'Gut Microbiome',
  NULL,
  'The complex community of trillions of microorganisms (bacteria, viruses, fungi, and other microbes) living in the digestive tract, particularly the colon, that influence digestion, immunity, and overall health.',
  NULL,
  'Gut Microbiome - Suppl.me Glossary',
  'Community of microorganisms living in the digestive tract'
);

-- 85. Half-Life
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'halflife',
  'Half-Life',
  NULL,
  'Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body''s natural elimination processes. It is typically denoted as t½ or t₁/₂. Half-life is a key pharmacokinetic parameter that helps determine optimal dosing frequency and how long a substance remains active in the body.',
  NULL,
  'Half-Life - Suppl.me Glossary',
  'Time required for half of a substance to be eliminated from the body'
);

-- 86. HbA1c (Hemoglobin A1c)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hba1c',
  'HbA1c (Hemoglobin A1c)',
  'HbA1c',
  'A blood test that measures the average blood glucose (sugar) levels over the past 2-3 months by detecting the percentage of hemoglobin proteins that have glucose attached to them, serving as a key diagnostic and monitoring tool for diabetes.',
  NULL,
  'HbA1c (Hemoglobin A1c) - Suppl.me Glossary',
  'Blood test measuring average blood glucose levels over the past 2-3 months'
);

-- 87. HDL Cholesterol (High-Density Lipoprotein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hdlcholesterol',
  'HDL Cholesterol (High-Density Lipoprotein)',
  'HDL',
  'A type of lipoprotein that transports cholesterol from peripheral tissues back to the liver for disposal, often called ''good cholesterol'' because higher levels are associated with lower cardiovascular disease risk and protection against atherosclerosis.',
  NULL,
  'HDL Cholesterol (High-Density Lipoprotein) - Suppl.me Glossary',
  'High-density lipoprotein cholesterol, protective against cardiovascular disease'
);

-- 88. Hedges' g
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hedgesg',
  'Hedges'' g',
  NULL,
  'A standardized effect size measure similar to Cohen''s d but with a correction for small sample bias, commonly used in meta-analyses to quantify the magnitude of differences between groups.',
  NULL,
  NULL,
  NULL
);

-- 89. Heme Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hemeiron',
  'Heme Iron',
  NULL,
  'The form of iron found in animal tissues bound within heme proteins (hemoglobin and myoglobin), which is absorbed via a dedicated transport mechanism and has significantly higher bioavailability (15-35%) compared to non-heme iron from plant sources.',
  NULL,
  'Heme Iron - Suppl.me Glossary',
  'Highly bioavailable iron form found in animal foods, bound to hemoglobin or myoglobin'
);

-- 90. Hemoglobin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hemoglobin',
  'Hemoglobin',
  'Hb',
  'Hemoglobin (Hb or Hgb) is the iron-containing protein in red blood cells responsible for transporting oxygen from the lungs to tissues throughout the body and returning carbon dioxide from tissues to the lungs. Each hemoglobin molecule can carry up to four oxygen molecules.',
  NULL,
  'Hemoglobin - Suppl.me Glossary',
  'Iron-containing protein in red blood cells that transports oxygen'
);

-- 91. Hepatic Encephalopathy
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hepaticencephalopathy',
  'Hepatic Encephalopathy',
  NULL,
  'A decline in brain function that occurs when the liver is unable to adequately remove toxins from the blood, particularly ammonia. This condition is a complication of advanced liver disease or cirrhosis.',
  NULL,
  'Hepatic Encephalopathy - Suppl.me Glossary',
  'Brain dysfunction caused by severe liver disease and ammonia accumulation'
);

-- 92. HOMA-IR
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'homair',
  'HOMA-IR',
  'Homeostatic Model Assessment of Insulin Resistance',
  'A mathematical formula quantifying insulin resistance from fasting glucose and insulin levels.',
  NULL,
  'HOMA-IR - Suppl.me Glossary',
  'Mathematical formula quantifying insulin resistance from fasting glucose and insulin'
);

-- 93. Homocysteine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'homocysteine',
  'Homocysteine',
  NULL,
  'An amino acid produced during the metabolism of methionine that, when elevated in the blood, is associated with increased risk of cardiovascular disease and other health problems.',
  NULL,
  'Homocysteine - Suppl.me Glossary',
  'An amino acid associated with cardiovascular disease risk when elevated'
);

-- 94. Hydrolyzed
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hydrolyzed',
  'Hydrolyzed',
  NULL,
  'Hydrolyzed refers to proteins or other compounds that have been broken down into smaller fragments through hydrolysis—a chemical process that uses water to break chemical bonds. In supplements, hydrolyzed proteins are partially digested proteins broken into smaller peptides and amino acids.',
  NULL,
  'Hydrolyzed - Suppl.me Glossary',
  'Proteins broken down into smaller peptides through hydrolysis for easier absorption'
);

-- 95. Hydroxyproline
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hydroxyproline',
  'Hydroxyproline',
  NULL,
  'Hydroxyproline is a modified amino acid found almost exclusively in collagen, created through post-translational hydroxylation of proline residues. It comprises about 13% of collagen''s amino acid content and is essential for collagen stability. Its presence in blood or urine serves as a biomarker of collagen turnover.',
  NULL,
  'Hydroxyproline - Suppl.me Glossary',
  'Modified amino acid found almost exclusively in collagen, essential for stability'
);

-- 96. Hyperglycemia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hyperglycemia',
  'Hyperglycemia',
  NULL,
  'Elevated blood glucose levels above the normal range, commonly associated with diabetes and prediabetes.',
  NULL,
  'Hyperglycemia - Suppl.me Glossary',
  'Elevated blood glucose levels above the normal range'
);

-- 97. Hypertensive
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'hypertensive',
  'Hypertensive',
  NULL,
  'Hypertensive describes a person who has high blood pressure (hypertension), typically defined as systolic pressure of 130 mmHg or higher and/or diastolic pressure of 80 mmHg or higher. It indicates elevated pressure in the arteries that increases cardiovascular risk.',
  NULL,
  'Hypertensive - Suppl.me Glossary',
  'Having high blood pressure (hypertension) above normal ranges'
);

-- 98. Irritable Bowel Syndrome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ibs',
  'Irritable Bowel Syndrome',
  'IBS',
  'A chronic functional gastrointestinal disorder characterized by recurrent abdominal pain associated with altered bowel habits (diarrhea, constipation, or both) in the absence of structural or biochemical abnormalities.',
  NULL,
  'Irritable Bowel Syndrome - Suppl.me Glossary',
  'Chronic functional gastrointestinal disorder with recurrent abdominal pain and altered bowel habits'
);

-- 99. Interleukin-1
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'il1',
  'Interleukin-1',
  'IL-1',
  'A pro-inflammatory cytokine that exists in two primary forms (IL-1α and IL-1β) and plays a crucial role in initiating and amplifying inflammatory responses, fever, and immune cell activation.',
  NULL,
  'Interleukin-1 - Suppl.me Glossary',
  'Pro-inflammatory cytokine initiating and amplifying inflammatory responses'
);

-- 100. Interleukin-6
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'il6',
  'Interleukin-6',
  'IL-6',
  'A pro-inflammatory cytokine produced by immune cells, muscle tissue, and fat cells that plays a dual role in immune response and chronic inflammation, commonly measured as a biomarker of systemic inflammation.',
  NULL,
  'Interleukin-6 - Suppl.me Glossary',
  'Pro-inflammatory cytokine serving as a biomarker of systemic inflammation'
);

-- 101. Immune System
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'immunesystem',
  'Immune System',
  NULL,
  'The body''s defense network of cells, tissues, and organs that protect against pathogens, foreign substances, and abnormal cells, comprising both innate and adaptive immune responses.',
  NULL,
  'Immune System - Suppl.me Glossary',
  'Body defense network protecting against pathogens and disease'
);

-- 102. Inflammation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'inflammation',
  'Inflammation',
  NULL,
  'The body''s natural immune response to injury, infection, or harmful stimuli, characterized by increased blood flow, immune cell activity, and the release of signaling molecules called cytokines.',
  NULL,
  NULL,
  NULL
);

-- 103. Inflammatory Bowel Disease
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'inflammatoryboweldisease',
  'Inflammatory Bowel Disease',
  'IBD',
  'A group of chronic inflammatory conditions of the gastrointestinal tract, primarily including Crohn''s disease and ulcerative colitis. These autoimmune-mediated diseases involve inappropriate immune responses to intestinal contents, causing inflammation, ulceration, and digestive symptoms.',
  NULL,
  NULL,
  NULL
);

-- 104. Insulin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'insulin',
  'Insulin',
  NULL,
  'A peptide hormone produced by beta cells in the pancreas that regulates blood glucose levels by promoting cellular uptake of glucose and inhibiting glucose production. It is central to carbohydrate, fat, and protein metabolism.',
  NULL,
  'Insulin - Suppl.me Glossary',
  'Pancreatic hormone regulating blood glucose by promoting cellular glucose uptake'
);

-- 105. Insulin Resistance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'insulinresistance',
  'Insulin Resistance',
  NULL,
  'A condition where cells in muscles, fat, and liver don''t respond effectively to insulin, requiring higher levels of insulin to move glucose from the bloodstream into cells.',
  NULL,
  NULL,
  NULL
);

-- 106. Inulin-type Fructans
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'inulintypefructans',
  'Inulin-type Fructans',
  NULL,
  'A subgroup of fructans consisting of linear chains of fructose molecules terminated by a glucose unit, including inulin and fructo-oligosaccharides (FOS), that function as prebiotic fibers selectively promoting beneficial gut bacteria growth.',
  NULL,
  'Inulin-type Fructans - Suppl.me Glossary',
  'Prebiotic fibers including inulin and FOS that promote beneficial gut bacteria growth'
);

-- 107. Isoleucine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'isoleucine',
  'Isoleucine',
  NULL,
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Isoleucine plays important roles in muscle metabolism, immune function, hemoglobin production, and energy regulation.',
  NULL,
  'Isoleucine - Suppl.me Glossary',
  'Essential branched-chain amino acid important for muscle metabolism and immune function'
);

-- 108. Joint Health
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'jointhealth',
  'Joint Health',
  NULL,
  'The structural integrity and functional capacity of joints—where two or more bones meet—involving cartilage, synovial fluid, ligaments, and surrounding tissues that enable smooth, pain-free movement.',
  NULL,
  'Joint Health - Suppl.me Glossary',
  'Structural integrity and functional capacity of joints'
);

-- 109. Lactobacillus
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'lactobacillus',
  'Lactobacillus',
  NULL,
  'Lactobacillus is a genus of beneficial bacteria that naturally inhabit various parts of the human body (primarily the gut, mouth, and urogenital tract) and are widely used as probiotics for supporting digestive health, immune function, and microbial balance.',
  NULL,
  'Lactobacillus - Suppl.me Glossary',
  'Genus of beneficial lactic acid bacteria used widely in probiotics and fermented foods'
);

-- 110. LDL Cholesterol (Low-Density Lipoprotein)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ldlcholesterol',
  'LDL Cholesterol (Low-Density Lipoprotein)',
  'LDL',
  'A type of lipoprotein that transports cholesterol from the liver to peripheral tissues, with elevated levels strongly associated with atherosclerosis and cardiovascular disease risk. Often called ''bad cholesterol'' because high levels contribute to arterial plaque buildup.',
  NULL,
  'LDL Cholesterol (Low-Density Lipoprotein) - Suppl.me Glossary',
  'Low-density lipoprotein cholesterol, the primary contributor to arterial plaque buildup'
);

-- 111. Leucine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'leucine',
  'Leucine',
  NULL,
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Leucine is the most potent amino acid for stimulating muscle protein synthesis through activation of the mTOR signaling pathway.',
  NULL,
  'Leucine - Suppl.me Glossary',
  'Essential branched-chain amino acid, primary driver of muscle protein synthesis'
);

-- 112. Lipid Peroxidation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'lipidperoxidation',
  'Lipid Peroxidation',
  NULL,
  'The oxidative degradation of lipids (fats) in cell membranes by reactive oxygen species, creating a chain reaction that damages membrane structure and produces toxic byproducts, serving as a key mechanism of oxidative damage in disease and aging.',
  NULL,
  'Lipid Peroxidation - Suppl.me Glossary',
  'Oxidative degradation of lipids causing cellular damage and producing reactive compounds'
);

-- 113. Loading Phase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'loadingphase',
  'Loading Phase',
  NULL,
  'A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or blood levels, followed by a lower maintenance dose to sustain those levels. This approach is used when a supplement takes time to accumulate in the body and when faster saturation is desirable.',
  NULL,
  'Loading Phase - Suppl.me Glossary',
  'Initial period of higher supplement doses to rapidly saturate body stores'
);

-- 114. Lycopene
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'lycopene',
  'Lycopene',
  NULL,
  'A bright red carotenoid pigment found predominantly in tomatoes and other red fruits. Unlike beta-carotene, lycopene has no vitamin A activity but functions as a powerful antioxidant with particular benefits for cardiovascular health, prostate health, and skin protection.',
  NULL,
  'Lycopene - Suppl.me Glossary',
  'Red carotenoid pigment with antioxidant properties, abundant in tomatoes'
);

-- 115. Macromineral
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'macromineral',
  'Macromineral',
  NULL,
  'Macrominerals (also called major minerals) are essential minerals required by the body in relatively large amounts—typically more than 100 milligrams per day. They include calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur.',
  NULL,
  'Macromineral - Suppl.me Glossary',
  'Essential minerals required in amounts greater than 100 mg per day'
);

-- 116. Magnesium Citrate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'magnesiumcitrate',
  'Magnesium Citrate',
  NULL,
  'A magnesium salt of citric acid that combines elemental magnesium with citrate molecules. It is one of the most commonly used and well-absorbed forms of magnesium in dietary supplements.',
  NULL,
  'Magnesium Citrate - Suppl.me Glossary',
  'Highly bioavailable magnesium supplement form with mild laxative effect'
);

-- 117. Magnesium Oxide
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'magnesiumoxide',
  'Magnesium Oxide',
  NULL,
  'An inorganic compound consisting of magnesium and oxygen. Despite being one of the most commonly used forms of magnesium in dietary supplements due to its low cost and high elemental magnesium content, it has relatively poor bioavailability compared to other magnesium forms.',
  NULL,
  'Magnesium Oxide - Suppl.me Glossary',
  'Common but poorly absorbed magnesium supplement form, often used as laxative'
);

-- 118. Maintenance Dose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'maintenancedose',
  'Maintenance Dose',
  NULL,
  'A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically lower than a loading dose (if used) and is designed to match the body''s elimination rate, keeping levels stable over time. The maintenance dose is the long-term, ongoing dose that most users will take indefinitely.',
  NULL,
  'Maintenance Dose - Suppl.me Glossary',
  'Ongoing supplement dose to maintain optimal levels after loading phase'
);

-- 119. Malondialdehyde
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'mda',
  'Malondialdehyde',
  'MDA',
  'A reactive compound produced during lipid peroxidation that serves as a widely-used biomarker of oxidative stress and cellular damage, particularly reflecting damage to cell membranes and lipids.',
  NULL,
  'Malondialdehyde - Suppl.me Glossary',
  'Biomarker of oxidative stress and lipid peroxidation'
);

-- 120. Meta-Analysis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'metaanalysis',
  'Meta-Analysis',
  NULL,
  'A statistical method that combines results from multiple studies to identify patterns, disagreements, or overall effects.',
  NULL,
  'Meta-Analysis - Suppl.me Glossary',
  'A statistical method that combines results from multiple studies to identify overall effects'
);

-- 121. Metabolic Syndrome
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'metabolicsyndrome',
  'Metabolic Syndrome',
  NULL,
  'A cluster of conditions including central obesity, high blood pressure, high blood sugar, and abnormal cholesterol levels that increase the risk of heart disease, stroke, and type 2 diabetes.',
  NULL,
  'Metabolic Syndrome - Suppl.me Glossary',
  'Cluster of conditions increasing risk of heart disease, diabetes, and stroke'
);

-- 122. Metabolism
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'metabolism',
  'Metabolism',
  NULL,
  'The sum of all chemical reactions in the body that convert nutrients into energy and building blocks for growth, repair, and maintenance of tissues. Includes both catabolic (breakdown) and anabolic (synthesis) processes.',
  NULL,
  'Metabolism - Suppl.me Glossary',
  'The sum of chemical reactions that convert nutrients into energy and building blocks'
);

-- 123. Methylcobalamin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'methylcobalamin',
  'Methylcobalamin',
  NULL,
  'An active, coenzyme form of vitamin B12 that participates directly in biochemical reactions without requiring conversion, particularly important for neurological function and methylation.',
  NULL,
  'Methylcobalamin - Suppl.me Glossary',
  'Active form of vitamin B12 used in supplements, readily utilized by the body'
);

-- 124. Methylfolate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'methylfolate',
  'Methylfolate',
  '5-MTHF',
  'The active, bioavailable form of folate (5-methyltetrahydrofolate) that requires no metabolic conversion and can be used directly by cells for methylation and DNA synthesis.',
  NULL,
  'Methylfolate - Suppl.me Glossary',
  'Active form of folate that bypasses MTHFR enzyme, superior to folic acid'
);

-- 125. Micronized
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'micronized',
  'Micronized',
  NULL,
  'A process that reduces supplement particles to extremely small sizes, typically less than 20 micrometers (0.02 millimeters) in diameter. This mechanical process increases the surface area of particles, which can improve dissolution, absorption, and bioavailability of certain supplements.',
  NULL,
  'Micronized - Suppl.me Glossary',
  'Process reducing particles to microscopic size to improve dissolution and absorption'
);

-- 126. Mineral
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'mineral',
  'Mineral',
  NULL,
  'Minerals are inorganic chemical elements essential for various physiological functions in the human body. Unlike vitamins, minerals are not made by living organisms and must be obtained from diet or supplements. They remain unchanged during digestion and cannot be destroyed by heat or light.',
  NULL,
  'Mineral - Suppl.me Glossary',
  'Inorganic chemical elements essential for various physiological functions'
);

-- 127. Mitochondria
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'mitochondria',
  'Mitochondria',
  NULL,
  'Specialized organelles within cells that generate most of the cell''s energy (ATP) through oxidative phosphorylation, often called the ''powerhouses of the cell.''',
  NULL,
  'Mitochondria - Suppl.me Glossary',
  'Cell organelles generating energy through ATP production'
);

-- 128. mTOR (Mechanistic Target of Rapamycin)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'mtor',
  'mTOR (Mechanistic Target of Rapamycin)',
  'mTOR',
  'A protein kinase that acts as a central regulator of cell growth, proliferation, metabolism, and protein synthesis in response to nutrients, growth factors, and cellular energy.',
  NULL,
  'mTOR (Mechanistic Target of Rapamycin) - Suppl.me Glossary',
  'Protein kinase regulating cell growth, metabolism, and protein synthesis'
);

-- 129. Muscle Protein Synthesis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'muscleproteinsynthesis',
  'Muscle Protein Synthesis',
  'MPS',
  'The metabolic process by which amino acids are incorporated into muscle proteins, essential for muscle growth, repair, and maintenance after exercise or injury.',
  NULL,
  'Muscle Protein Synthesis - Suppl.me Glossary',
  'Process of building muscle protein from amino acids'
);

-- 130. Myoglobin
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'myoglobin',
  'Myoglobin',
  NULL,
  'Myoglobin is an iron- and oxygen-binding protein found in cardiac and skeletal muscle tissue. It functions as an oxygen storage molecule, accepting oxygen from hemoglobin in the blood and releasing it to mitochondria in muscle cells for aerobic energy production. It gives muscle tissue its characteristic red color.',
  NULL,
  'Myoglobin - Suppl.me Glossary',
  'Oxygen-binding protein in muscle tissue that stores oxygen for energy production'
);

-- 131. Neurotransmitter
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'neurotransmitter',
  'Neurotransmitter',
  NULL,
  'Chemical messengers that transmit signals across synapses from one neuron to another neuron, muscle cell, or gland cell, enabling communication throughout the nervous system.',
  NULL,
  'Neurotransmitter - Suppl.me Glossary',
  'Chemical messengers transmitting signals between neurons'
);

-- 132. NF-κB
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'nfkb',
  'NF-κB',
  'Nuclear Factor Kappa B',
  'Nuclear Factor Kappa B (NF-κB) is a protein complex that acts as a master transcription factor regulating the expression of genes involved in inflammation, immune responses, cell survival, and proliferation. It is often called the ''molecular switch'' for inflammation.',
  NULL,
  'NF-κB - Suppl.me Glossary',
  'Master transcription factor regulating inflammatory and immune responses'
);

-- 133. Nitric Oxide (NO)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'nitricoxide',
  'Nitric Oxide (NO)',
  'NO',
  'A gaseous signaling molecule produced by cells throughout the body that plays critical roles in cardiovascular function, particularly blood vessel dilation (vasodilation), blood flow regulation, and blood pressure control.',
  NULL,
  'Nitric Oxide (NO) - Suppl.me Glossary',
  'Signaling molecule that regulates blood vessel dilation and cardiovascular function'
);

-- 134. Non-Heme Iron
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'nonhemeiron',
  'Non-Heme Iron',
  NULL,
  'The form of iron found in plant foods, dairy products, eggs, and as part of the total iron in meat (comprising about 60% of meat iron), which has lower bioavailability (2-20%) than heme iron and is highly influenced by dietary absorption enhancers and inhibitors.',
  NULL,
  'Non-Heme Iron - Suppl.me Glossary',
  'Plant-based iron form with lower bioavailability than heme iron'
);

-- 135. Normotensive
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'normotensive',
  'Normotensive',
  NULL,
  'Normotensive describes a person who has normal blood pressure levels, typically defined as systolic pressure less than 120 mmHg and diastolic pressure less than 80 mmHg. It indicates that blood pressure is within the healthy range without medication.',
  NULL,
  'Normotensive - Suppl.me Glossary',
  'Having normal blood pressure levels without medication'
);

-- 136. Nrf2
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'nrf2',
  'Nrf2',
  'Nuclear Factor Erythroid 2-Related Factor 2',
  'Nuclear factor erythroid 2-related factor 2 (Nrf2) is a transcription factor that regulates the expression of antioxidant and detoxification genes, acting as the body''s master regulator of the cellular antioxidant defense system.',
  NULL,
  'Nrf2 - Suppl.me Glossary',
  'Master transcription factor regulating antioxidant defense and cellular protection'
);

-- 137. Observational Study
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'observationalstudy',
  'Observational Study',
  NULL,
  'A research study where investigators observe participants and measure outcomes without manipulating or assigning interventions, allowing researchers to study associations and patterns as they naturally occur.',
  '<p>In observational studies, researchers do not control or assign the exposure or intervention. Instead, they observe and record what happens naturally, making these studies valuable for examining real-world patterns, long-term outcomes, and situations where randomized controlled trials would be unethical or impractical.</p>

        <p><strong class="glossary-highlight">Types of Observational Studies:</strong></p>
        <ul class="glossary-list">
          <li><strong>Cohort Studies:</strong> Follow groups over time to see who develops outcomes of interest; can be prospective (forward-looking) or retrospective (looking back)</li>
          <li><strong>Case-Control Studies:</strong> Compare people with a condition (cases) to similar people without it (controls), looking back at exposures</li>
          <li><strong>Cross-Sectional Studies:</strong> Examine data from a population at one specific point in time</li>
          <li><strong>Ecological Studies:</strong> Analyze data at the population or group level rather than individual level</li>
        </ul>

        <p><strong class="glossary-highlight">Advantages:</strong></p>
        <ul class="glossary-list">
          <li><strong>Real-World Evidence:</strong> Captures how interventions work in actual practice, not controlled conditions</li>
          <li><strong>Long-Term Follow-Up:</strong> Can track outcomes over years or decades</li>
          <li><strong>Ethical Flexibility:</strong> Allows study of exposures that couldn''t ethically be assigned (e.g., smoking, nutritional deficiencies)</li>
          <li><strong>Cost-Effective:</strong> Generally less expensive than randomized controlled trials</li>
          <li><strong>Multiple Outcomes:</strong> Can examine many different outcomes simultaneously</li>
          <li><strong>Rare Outcomes:</strong> Useful for studying uncommon conditions or events</li>
        </ul>

        <p><strong class="glossary-highlight">Limitations:</strong></p>
        <ul class="glossary-list">
          <li><strong>Confounding:</strong> Other variables may influence the observed associations</li>
          <li><strong>Selection Bias:</strong> How participants are chosen may affect results</li>
          <li><strong>Causation vs. Association:</strong> Can show relationships but not definitively prove cause and effect</li>
          <li><strong>Recall Bias:</strong> Participants may not accurately remember past exposures</li>
          <li><strong>Measurement Error:</strong> Without standardized interventions, exposure measurement may vary</li>
        </ul>

        <p><strong class="glossary-highlight">Evidence Hierarchy:</strong></p>
        <p>In the hierarchy of scientific evidence, observational studies generally rank below randomized controlled trials but above case reports and expert opinion. Well-designed observational studies, particularly large prospective cohort studies, can provide valuable evidence, especially when:</p>
        <ul class="glossary-list">
          <li>RCTs are not feasible or ethical</li>
          <li>Long-term outcomes need to be studied</li>
          <li>Real-world effectiveness needs to be assessed</li>
          <li>Rare events or outcomes are being investigated</li>
        </ul>',
  'Observational Study - Suppl.me Glossary',
  'Research where investigators observe outcomes without assigning interventions'
);

-- 138. Omega-3 Fatty Acids
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'omega3',
  'Omega-3 Fatty Acids',
  NULL,
  'Omega-3 fatty acids are a family of essential polyunsaturated fatty acids that play crucial roles in heart health, brain function, and inflammation regulation. The three main types are ALA (plant-based), EPA, and DHA (both primarily from fish).',
  NULL,
  NULL,
  NULL
);

-- 139. Odds Ratio
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'or',
  'Odds Ratio',
  'OR',
  'A statistical measure that quantifies the odds of an outcome occurring in one group relative to the odds in another group, commonly used in case-control studies and logistic regression analyses.',
  NULL,
  'Odds Ratio - Suppl.me Glossary',
  'Statistical measure comparing odds of an outcome in treatment vs. control groups'
);

-- 140. Osteomalacia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'osteomalach',
  'Osteomalacia',
  NULL,
  'Softening of the bones in adults due to defective bone mineralization, most commonly caused by severe vitamin D deficiency.',
  NULL,
  NULL,
  NULL
);

-- 141. Osteoporosis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'osteoporosis',
  'Osteoporosis',
  NULL,
  'Osteoporosis is a systemic skeletal disease characterized by low bone mass and deterioration of bone tissue, leading to increased bone fragility and susceptibility to fractures. The term literally means ''porous bones.''',
  NULL,
  'Osteoporosis - Suppl.me Glossary',
  'Systemic skeletal disease with low bone mass and increased fracture risk'
);

-- 142. Oxalates
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'oxalates',
  'Oxalates',
  NULL,
  'Natural organic compounds found in many plant foods that can bind to minerals (especially calcium) in the digestive tract, reducing absorption, and contribute to kidney stone formation in susceptible individuals when consumed in high amounts.',
  NULL,
  'Oxalates - Suppl.me Glossary',
  'Plant compounds affecting mineral absorption and kidney stone risk'
);

-- 143. Oxidative Damage
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'oxidativedamage',
  'Oxidative Damage',
  NULL,
  'Cellular and molecular damage caused by reactive oxygen species (ROS) and other free radicals that oxidize critical biological components including DNA, proteins, and lipids, potentially impairing cellular function and contributing to disease and aging.',
  NULL,
  'Oxidative Damage - Suppl.me Glossary',
  'Cellular and molecular damage caused by reactive oxygen species and free radicals'
);

-- 144. Oxidative Stress
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'oxidativestress',
  'Oxidative Stress',
  NULL,
  'An imbalance between the production of reactive oxygen species (free radicals) and the body''s ability to neutralize them with antioxidants, leading to cellular damage.',
  NULL,
  'Oxidative Stress - Suppl.me Glossary',
  'An imbalance between free radicals and antioxidants leading to cellular damage'
);

-- 145. Oxidized LDL
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'oxidizedldl',
  'Oxidized LDL',
  'oxLDL',
  'Low-density lipoprotein particles that have undergone oxidative modification, transforming them from cholesterol transport particles into pro-inflammatory molecules that play a central role in atherosclerosis development and cardiovascular disease.',
  NULL,
  'Oxidized LDL - Suppl.me Glossary',
  'Modified LDL cholesterol that promotes atherosclerosis and cardiovascular disease'
);

-- 146. Pancreatitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'pancreatitis',
  'Pancreatitis',
  NULL,
  'Inflammation of the pancreas, which can be acute or chronic, causing digestive enzyme activation within the pancreas and potentially leading to serious complications.',
  NULL,
  'Pancreatitis - Suppl.me Glossary',
  'Inflammation of the pancreas, which can be acute or chronic'
);

-- 147. PEDro Scale
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'pedro',
  'PEDro Scale',
  'PEDro',
  'The PEDro Scale (Physiotherapy Evidence Database Scale) is an 11-item quality assessment tool designed to rate the methodological quality and statistical reporting of randomized controlled trials (RCTs) in physiotherapy and rehabilitation research. Scores range from 0 to 10, with higher scores indicating better methodological quality.',
  NULL,
  'PEDro Scale - Suppl.me Glossary',
  'Quality assessment tool rating methodological quality of RCTs in physiotherapy'
);

-- 148. Peer-reviewed
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'peerreviewed',
  'Peer-reviewed',
  NULL,
  'Scientific research that has been evaluated and approved by independent experts in the same field before publication.',
  NULL,
  'Peer-reviewed - Suppl.me Glossary',
  'Scientific research evaluated and approved by independent experts before publication'
);

-- 149. Pharmacokinetics
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'pharmacokinetics',
  'Pharmacokinetics',
  NULL,
  'The study of how the body affects a drug or supplement over time, including how it is absorbed, distributed, metabolized, and excreted. It essentially describes ''what the body does to the drug'' as opposed to pharmacodynamics, which describes ''what the drug does to the body.''',
  NULL,
  'Pharmacokinetics - Suppl.me Glossary',
  'Study of how the body absorbs, distributes, metabolizes, and excretes substances'
);

-- 150. Phosphocreatine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'phosphocreatine',
  'Phosphocreatine',
  NULL,
  'A high-energy phosphate compound stored in muscle cells that serves as a rapid reserve for ATP regeneration during the first few seconds of intense muscle activity. Phosphocreatine donates its phosphate group to ADP to quickly produce ATP without requiring oxygen.',
  NULL,
  'Phosphocreatine - Suppl.me Glossary',
  'High-energy phosphate compound critical for ATP regeneration in muscles'
);

-- 151. Phytates
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'phytates',
  'Phytates',
  NULL,
  'Natural compounds found in plant seeds, grains, legumes, and nuts that can bind to minerals (particularly iron, zinc, calcium, and magnesium) in the digestive tract, reducing their absorption. Also called ''anti-nutrients'' though they have some beneficial properties.',
  NULL,
  'Phytates - Suppl.me Glossary',
  'Plant compounds that can inhibit mineral absorption'
);

-- 152. Placebo
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'placebo',
  'Placebo',
  NULL,
  'An inactive substance or treatment given to a control group in research studies to compare against the active intervention.',
  NULL,
  'Placebo - Suppl.me Glossary',
  'An inactive substance given to a control group to compare against the active intervention'
);

-- 153. Plasma
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'plasma',
  'Plasma',
  NULL,
  'The liquid component of blood obtained by centrifuging blood collected with anticoagulants. It contains water, electrolytes, nutrients, hormones, proteins (including clotting factors like fibrinogen), antibodies, and waste products. Plasma makes up about 55% of total blood volume.',
  NULL,
  'Plasma - Suppl.me Glossary',
  'Liquid component of blood containing water, proteins, nutrients, and waste products'
);

-- 154. PMS (Premenstrual Syndrome)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'pms',
  'PMS (Premenstrual Syndrome)',
  'PMS',
  'Premenstrual syndrome (PMS) is a combination of physical, emotional, and behavioral symptoms that occur in the luteal phase of the menstrual cycle (typically 1-2 weeks before menstruation) and resolve shortly after menstruation begins. It affects up to 75% of menstruating women to varying degrees.',
  NULL,
  'PMS (Premenstrual Syndrome) - Suppl.me Glossary',
  'Physical, emotional, and behavioral symptoms occurring before menstruation'
);

-- 155. Polyphenols
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'polyphenols',
  'Polyphenols',
  NULL,
  'A large family of naturally occurring plant compounds characterized by multiple phenol units. Polyphenols function as antioxidants and signaling molecules with anti-inflammatory, cardioprotective, and metabolic benefits.',
  NULL,
  'Polyphenols - Suppl.me Glossary',
  'Plant compounds with antioxidant and anti-inflammatory properties'
);

-- 156. Prediabetes
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'prediabetes',
  'Prediabetes',
  NULL,
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as type 2 diabetes. It represents an increased risk for developing diabetes and cardiovascular disease.',
  NULL,
  'Prediabetes - Suppl.me Glossary',
  'A condition in which blood glucose levels are higher than normal but not high enough to be classified as diabetes'
);

-- 157. Pre-eclampsia
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'preeclampsia',
  'Pre-eclampsia',
  NULL,
  'Pre-eclampsia is a serious pregnancy complication characterized by high blood pressure (hypertension) and signs of damage to other organ systems, most often the liver and kidneys. It typically develops after 20 weeks of pregnancy in women whose blood pressure was previously normal.',
  NULL,
  'Pre-eclampsia - Suppl.me Glossary',
  'Serious pregnancy complication with high blood pressure and organ damage'
);

-- 158. Proline
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'proline',
  'Proline',
  'Pro',
  'Proline is a non-essential amino acid with a unique cyclic structure that plays critical roles in protein structure, particularly in collagen where it comprises approximately 15% of amino acid residues. Its distinctive ring structure makes it important for protein stability and flexibility.',
  NULL,
  'Proline - Suppl.me Glossary',
  'Amino acid with unique cyclic structure critical for collagen stability'
);

-- 159. Propionate
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'propionate',
  'Propionate',
  NULL,
  'A three-carbon short-chain fatty acid produced by bacterial fermentation of dietary fiber in the colon, with important roles in glucose and lipid metabolism, appetite regulation, and gut health.',
  NULL,
  'Propionate - Suppl.me Glossary',
  'Short-chain fatty acid produced by gut bacteria with metabolic effects'
);

-- 160. Protein
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'protein',
  'Protein',
  NULL,
  'A macronutrient composed of amino acids that serves as the primary building block for tissues, enzymes, hormones, antibodies, and numerous other biological molecules essential for life.',
  NULL,
  'Protein - Suppl.me Glossary',
  'Macronutrient composed of amino acids essential for tissue building'
);

-- 161. Protein Synthesis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'proteinsynthesis',
  'Protein Synthesis',
  NULL,
  'Protein synthesis is the biological process by which cells build new proteins from amino acids. It involves two main stages: transcription (DNA to mRNA) and translation (mRNA to protein), and is essential for growth, repair, and maintenance of all body tissues.',
  NULL,
  'Protein Synthesis - Suppl.me Glossary',
  'The biological process of building new proteins from amino acids'
);

-- 162. Peptide YY
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'pyy',
  'Peptide YY',
  'PYY',
  'A satiety hormone secreted by intestinal L-cells in response to food intake that reduces appetite, slows gastric emptying, and decreases food consumption, playing a key role in appetite regulation and energy balance.',
  NULL,
  'Peptide YY - Suppl.me Glossary',
  'Satiety hormone that reduces appetite and food consumption'
);

-- 163. Randomized Controlled Trial
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'rct',
  'Randomized Controlled Trial',
  'RCT',
  'A type of scientific experiment that randomly assigns participants to different groups to test the effectiveness of an intervention.',
  NULL,
  'Randomized Controlled Trial - Suppl.me Glossary',
  'A type of scientific experiment that randomly assigns participants to different groups to test effectiveness'
);

-- 164. Resolvins
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'resolvins',
  'Resolvins',
  NULL,
  'Specialized pro-resolving mediators (SPMs) derived from omega-3 fatty acids EPA and DHA that actively resolve inflammation, reduce pain, promote tissue repair, and restore homeostasis rather than simply suppressing inflammatory responses.',
  NULL,
  'Resolvins - Suppl.me Glossary',
  'Anti-inflammatory compounds derived from omega-3 fatty acids'
);

-- 165. Resveratrol
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'resveratrol',
  'Resveratrol',
  NULL,
  'A polyphenolic stilbene compound produced by certain plants as a defense mechanism against stress, pathogens, and UV radiation. Found in grape skins, red wine, berries, and peanuts, resveratrol has been extensively studied for potential anti-aging, cardioprotective, and metabolic benefits.',
  NULL,
  'Resveratrol - Suppl.me Glossary',
  'Polyphenolic compound from grapes and red wine studied for anti-aging benefits'
);

-- 166. Rheumatoid Arthritis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'rheumatoidarthritis',
  'Rheumatoid Arthritis',
  'RA',
  'An autoimmune disease causing chronic inflammation of the joints and other organs.',
  NULL,
  'Rheumatoid Arthritis - Suppl.me Glossary',
  'Autoimmune disease causing chronic joint inflammation and systemic effects'
);

-- 167. Rickets
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'rickets',
  'Rickets',
  NULL,
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency, resulting in soft, weak bones and skeletal deformities.',
  NULL,
  'Rickets - Suppl.me Glossary',
  'A childhood bone disorder caused by vitamin D, calcium, or phosphate deficiency'
);

-- 168. Risk Ratio
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'rr',
  'Risk Ratio',
  'RR',
  'A statistical measure that compares the probability (risk) of an outcome occurring in one group versus another, commonly used in prospective studies and clinical trials to quantify treatment effects.',
  NULL,
  'Risk Ratio - Suppl.me Glossary',
  'Measure of relative risk comparing the probability of an event in treatment vs. control groups'
);

-- 169. Satiety
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'satiety',
  'Satiety',
  NULL,
  'Satiety is the feeling of fullness and satisfaction that occurs after eating, which suppresses further food intake until the next meal. It is distinct from satiation (the process that leads to meal termination during eating). Satiety is regulated by complex interactions between the gut, hormones, and brain, and plays a crucial role in appetite control and body weight regulation.',
  NULL,
  'Satiety - Suppl.me Glossary',
  'Feeling of fullness and satisfaction after eating that suppresses further food intake'
);

-- 170. Saturation
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'saturation',
  'Saturation',
  NULL,
  'In supplement and nutrition contexts, the state where tissues have reached their maximum capacity to absorb, store, or utilize a nutrient. Beyond this point, additional intake provides no further benefit and may simply be excreted or potentially cause adverse effects.',
  NULL,
  'Saturation - Suppl.me Glossary',
  'State where body stores of a nutrient are filled to capacity'
);

-- 171. SCFA (Short-Chain Fatty Acids)
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'scfa',
  'SCFA (Short-Chain Fatty Acids)',
  'SCFA',
  'Fatty acids containing fewer than six carbon atoms (primarily acetate, propionate, and butyrate) that are produced by bacterial fermentation of dietary fiber in the colon, providing energy to colonocytes and exerting wide-ranging metabolic, anti-inflammatory, and immune-modulating effects throughout the body.',
  NULL,
  'SCFA (Short-Chain Fatty Acids) - Suppl.me Glossary',
  'Fatty acids produced by gut bacteria fermenting dietary fiber'
);

-- 172. Serum
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'serum',
  'Serum',
  NULL,
  'The clear, yellowish liquid component of blood that remains after blood has been allowed to clot and the clot has been removed. It contains water, electrolytes, nutrients, hormones, antibodies, and other proteins, but lacks clotting factors (particularly fibrinogen) and blood cells.',
  NULL,
  'Serum - Suppl.me Glossary',
  'Blood plasma without clotting factors, commonly used for laboratory testing'
);

-- 173. Serum 25-hydroxyvitamin D / 25(OH)D
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'serum25ohd',
  'Serum 25-hydroxyvitamin D / 25(OH)D',
  '25-hydroxyvitamin D',
  'The major circulating form of vitamin D in the blood and the standard biomarker used to assess vitamin D status. It reflects both dietary intake and sunlight-induced production of vitamin D.',
  NULL,
  'Serum 25-hydroxyvitamin D / 25(OH)D - Suppl.me Glossary',
  'Primary blood test for vitamin D status, reflecting total vitamin D stores'
);

-- 174. Small Intestinal Bacterial Overgrowth
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'sibo',
  'Small Intestinal Bacterial Overgrowth',
  'SIBO',
  'A condition characterized by excessive bacterial colonization of the small intestine (typically &gt;10³ colony-forming units per mL of jejunal aspirate or positive breath test), causing malabsorption, bloating, diarrhea, and other gastrointestinal symptoms.',
  NULL,
  'Small Intestinal Bacterial Overgrowth - Suppl.me Glossary',
  'Excessive bacterial colonization of small intestine causing malabsorption and gastrointestinal symptoms'
);

-- 175. Single Blinded
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'singleblinded',
  'Single Blinded',
  NULL,
  'A study design where participants do not know whether they are receiving the active treatment or placebo, but researchers do know.',
  NULL,
  NULL,
  NULL
);

-- 176. Sleep Quality
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'sleepquality',
  'Sleep Quality',
  NULL,
  'A multidimensional assessment of sleep encompassing sleep duration, efficiency, latency, continuity, and subjective restfulness, all crucial for physical health, cognitive function, and emotional wellbeing.',
  NULL,
  'Sleep Quality - Suppl.me Glossary',
  'Assessment of sleep duration, efficiency, and restfulness'
);

-- 177. Standardized Mean Difference
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'smd',
  'Standardized Mean Difference',
  'SMD',
  'A statistical measure used in meta-analyses to express the size of an intervention effect relative to the variability in the data, allowing comparison across studies using different measurement scales.',
  NULL,
  'Standardized Mean Difference - Suppl.me Glossary',
  'Statistical measure of effect size used in meta-analyses'
);

-- 178. Standardized Extract
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'standardizedextract',
  'Standardized Extract',
  NULL,
  'A botanical or herbal extract that has been processed to contain a guaranteed minimum concentration of one or more specific active compounds or marker compounds. This ensures consistent potency and quality across different batches of the supplement.',
  NULL,
  'Standardized Extract - Suppl.me Glossary',
  'Botanical extract processed to contain guaranteed concentration of active compounds'
);

-- 179. Statistical Significance
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'statisticalsignificance',
  'Statistical Significance',
  NULL,
  'A measure indicating that a research finding is unlikely to have occurred by chance alone, typically represented by a p-value less than 0.05.',
  NULL,
  'Statistical Significance - Suppl.me Glossary',
  'A measure indicating that a finding is unlikely to have occurred by chance alone'
);

-- 180. Subgroup Analysis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'subgroupanalysis',
  'Subgroup Analysis',
  NULL,
  'An examination of treatment effects within specific subsets of a study population, such as by age, sex, or baseline health status.',
  NULL,
  'Subgroup Analysis - Suppl.me Glossary',
  'Examination of treatment effects within specific subsets of a study population'
);

-- 181. Sublingual Administration
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'sublingual',
  'Sublingual Administration',
  NULL,
  'A method of taking supplements by placing them (typically tablets, lozenges, liquids, or sprays) under the tongue where they dissolve and are absorbed directly into the bloodstream through the mucous membranes, bypassing the digestive system and first-pass liver metabolism.',
  NULL,
  'Sublingual Administration - Suppl.me Glossary',
  'Placing supplement under tongue for direct absorption into bloodstream'
);

-- 182. Superoxide Dismutase
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'superoxidedismutase',
  'Superoxide Dismutase',
  'SOD',
  'A family of metalloenzymes that catalyzes the dismutation of superoxide radicals (O₂•⁻) into oxygen (O₂) and hydrogen peroxide (H₂O₂), representing the first line of enzymatic defense against oxidative stress in cells.',
  NULL,
  'Superoxide Dismutase - Suppl.me Glossary',
  'Family of antioxidant enzymes that neutralize superoxide radicals'
);

-- 183. Synergistic Effect
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'synergisticeffect',
  'Synergistic Effect',
  NULL,
  'A phenomenon where the combined effect of two or more substances is greater than the sum of their individual effects when used separately. In supplement research, synergy occurs when compounds work together to enhance efficacy beyond what would be predicted from their independent actions.',
  NULL,
  'Synergistic Effect - Suppl.me Glossary',
  'Combined effect of substances that is greater than the sum of individual effects'
);

-- 184. Systematic Review
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'systematicreview',
  'Systematic Review',
  NULL,
  'A comprehensive, structured research methodology that systematically identifies, evaluates, and synthesizes all available evidence on a specific research question using predefined, transparent, and reproducible methods.',
  '<p>A systematic review is considered one of the highest levels of evidence in medical and scientific research. Unlike narrative reviews that may be subjective, systematic reviews follow rigorous protocols to minimize bias and provide reliable conclusions.</p>

        <p><strong class="glossary-highlight">Key Characteristics:</strong></p>
        <ul class="glossary-list">
          <li><strong>Predefined Protocol:</strong> Research questions, inclusion/exclusion criteria, and analysis methods are established before the review begins</li>
          <li><strong>Comprehensive Search:</strong> Multiple databases and sources are systematically searched to find all relevant studies</li>
          <li><strong>Quality Assessment:</strong> Each included study is critically appraised for methodological quality and risk of bias</li>
          <li><strong>Transparent Reporting:</strong> All methods, decisions, and findings are clearly documented and reproducible</li>
          <li><strong>Objective Synthesis:</strong> Results are combined systematically, often using statistical methods (meta-analysis)</li>
        </ul>

        <p><strong class="glossary-highlight">The Systematic Review Process:</strong></p>
        <ul class="glossary-list">
          <li><strong>Formulate Question:</strong> Define a clear, focused research question using frameworks like PICO (Population, Intervention, Comparison, Outcome)</li>
          <li><strong>Develop Protocol:</strong> Create detailed methods document, often registered publicly</li>
          <li><strong>Search Literature:</strong> Systematically search databases (PubMed, Cochrane Library, etc.)</li>
          <li><strong>Screen Studies:</strong> Apply inclusion/exclusion criteria, usually by two independent reviewers</li>
          <li><strong>Extract Data:</strong> Systematically collect relevant information from included studies</li>
          <li><strong>Assess Quality:</strong> Evaluate risk of bias and study quality</li>
          <li><strong>Synthesize Results:</strong> Combine findings narratively or statistically</li>
          <li><strong>Draw Conclusions:</strong> Interpret findings and assess strength of evidence</li>
        </ul>

        <p><strong class="glossary-highlight">Systematic Review vs. Meta-Analysis:</strong></p>
        <p>While related, these are distinct concepts:</p>
        <ul class="glossary-list">
          <li><strong>Systematic Review:</strong> The overall process of systematically identifying and evaluating evidence; may or may not include statistical pooling</li>
          <li><strong>Meta-Analysis:</strong> A statistical technique used within some systematic reviews to quantitatively combine results from multiple studies</li>
          <li>All meta-analyses should be based on systematic reviews, but not all systematic reviews include meta-analysis</li>
        </ul>',
  'Systematic Review - Suppl.me Glossary',
  'Comprehensive, structured literature review using predefined methods to answer research questions'
);

-- 185. Systolic Blood Pressure
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'systolic',
  'Systolic Blood Pressure',
  NULL,
  'Systolic blood pressure is the top number in a blood pressure reading, representing the maximum pressure in the arteries when the heart contracts and pumps blood. It measures the force exerted on artery walls during the heart''s active pumping phase.',
  NULL,
  'Systolic Blood Pressure - Suppl.me Glossary',
  'The top number in blood pressure readings, measuring peak arterial pressure when the heart contracts'
);

-- 186. Total Antioxidant Capacity
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'tac',
  'Total Antioxidant Capacity',
  'TAC',
  'A measurement of the overall antioxidant power of blood or tissue, reflecting the combined contribution of all antioxidant compounds and enzymes that can neutralize free radicals and reactive oxygen species.',
  NULL,
  'Total Antioxidant Capacity - Suppl.me Glossary',
  'Measurement of overall antioxidant power in blood or tissue'
);

-- 187. Therapeutic Dose
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'therapeuticdose',
  'Therapeutic Dose',
  NULL,
  'The amount of a supplement or medication that produces a desired beneficial effect or therapeutic outcome. This dose has been demonstrated through clinical research to be effective for treating or preventing a specific condition while remaining within safe limits.',
  NULL,
  'Therapeutic Dose - Suppl.me Glossary',
  'Amount of supplement that produces desired beneficial effect while remaining safe'
);

-- 188. Third-Party Testing
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'thirdpartytesting',
  'Third-Party Testing',
  NULL,
  'Quality verification performed by an independent laboratory or certification organization that has no financial interest in the supplement manufacturer or product outcome. These unbiased organizations test supplements to verify their contents, purity, and quality claims.',
  NULL,
  'Third-Party Testing - Suppl.me Glossary',
  'Independent laboratory verification of supplement quality, purity, and potency'
);

-- 189. Thyroid Function
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'thyroidfunction',
  'Thyroid Function',
  NULL,
  'The activity of the thyroid gland in producing hormones that regulate metabolism, energy production, body temperature, heart rate, and numerous other bodily functions.',
  NULL,
  'Thyroid Function - Suppl.me Glossary',
  'Activity of the thyroid gland in regulating metabolism'
);

-- 190. Tumor Necrosis Factor-Alpha
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'tnfalpha',
  'Tumor Necrosis Factor-Alpha',
  'TNF-α',
  'A potent pro-inflammatory cytokine produced primarily by macrophages and adipose tissue that regulates immune responses, inflammation, cell survival, and apoptosis, playing a central role in systemic and chronic inflammation.',
  NULL,
  'Tumor Necrosis Factor-Alpha - Suppl.me Glossary',
  'Potent pro-inflammatory cytokine regulating immune responses and inflammation'
);

-- 191. Tolerable Upper Intake Level
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'tolerableupperintakelevel',
  'Tolerable Upper Intake Level',
  'UL',
  'The Tolerable Upper Intake Level (UL) is the highest average daily nutrient intake level that is likely to pose no risk of adverse health effects for almost all individuals in the general population. The UL is not a recommended intake level; rather, it represents a safety threshold above which the risk of adverse effects increases.',
  NULL,
  'Tolerable Upper Intake Level - Suppl.me Glossary',
  'Maximum daily nutrient intake unlikely to cause adverse health effects'
);

-- 192. Triglycerides
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'triglycerides',
  'Triglycerides',
  NULL,
  'A type of fat (lipid) found in the blood that serves as the body''s primary form of energy storage, with elevated levels increasing cardiovascular disease risk.',
  NULL,
  'Triglycerides - Suppl.me Glossary',
  'Type of fat in blood that serves as energy storage'
);

-- 193. Ulcerative Colitis
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'ulcerativecolitis',
  'Ulcerative Colitis',
  'UC',
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum.',
  NULL,
  'Ulcerative Colitis - Suppl.me Glossary',
  'A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum'
);

-- 194. Valine
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'valine',
  'Valine',
  NULL,
  'An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Valine supports muscle metabolism, mental focus, energy production, and immune function.',
  NULL,
  'Valine - Suppl.me Glossary',
  'Essential branched-chain amino acid supporting muscle growth and energy'
);

-- 195. Vitamin Deficiency
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'vitamindeficiency',
  'Vitamin Deficiency',
  NULL,
  'An insufficient level of one or more essential vitamins in the body, resulting from inadequate dietary intake, poor absorption, increased requirements, or excessive losses, leading to various health problems.',
  NULL,
  'Vitamin Deficiency - Suppl.me Glossary',
  'Insufficient vitamin levels causing various health problems'
);

-- 196. VLDL
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'vldl',
  'VLDL',
  'Very Low-Density Lipoprotein',
  'Very Low-Density Lipoprotein (VLDL) is a type of lipoprotein produced by the liver that carries triglycerides, cholesterol, and other lipids from the liver to various tissues in the body, serving as the primary transport vehicle for endogenously synthesized triglycerides.',
  NULL,
  'VLDL - Suppl.me Glossary',
  'Lipoprotein particle transporting triglycerides from liver to tissues'
);

-- 197. Weighted Mean Difference
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  expanded_explanation,
  meta_title,
  meta_description
) VALUES (
  'wmd',
  'Weighted Mean Difference',
  'WMD',
  'A statistical measure used in meta-analyses to pool results across studies that measured the same outcome using the same scale or units, with each study''s contribution weighted by its precision.',
  NULL,
  'Weighted Mean Difference - Suppl.me Glossary',
  'Statistical measure pooling results from studies using the same measurement scale'
);

-- Update related terms (links between glossary entries)
-- Using a second pass to ensure all UUIDs exist

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'leucine')
)
WHERE slug = 'anabolicresistance';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'lipophilic')
)
WHERE slug = 'chylomicrons';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Absorption', 'Biomarker', 'Serum', 'Therapeutic Dose')
)
WHERE slug = 'deficiency';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('epa', 'omega-3', 'cognitive-function', 'cardiovascular', 'bioavailability', 'metabolism')
)
WHERE slug = 'dha';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'systolic', 'cardiovascular', 'hypertensive')
)
WHERE slug = 'diastolic';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('meta-analysis', 'statistical-significance', 'clinical-significance')
)
WHERE slug = 'effectsize';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('dha', 'omega-3', 'cardiovascular', 'inflammation', 'triglycerides', 'bioavailability')
)
WHERE slug = 'epa';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'absorption', 'probiotics')
)
WHERE slug = 'fos';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodglucose', 'insulinresistance', 'glycemiccontrol', 'metabolism')
)
WHERE slug = 'glucosemetabolism';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Antioxidant', 'Glutathione', 'Oxidative Stress', 'Selenium', 'Catalase', 'Superoxide Dismutase')
)
WHERE slug = 'glutathioneperoxidase';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('protein', 'collagen', 'proline', 'hydroxyproline', 'proteinsynthesis')
)
WHERE slug = 'glycine';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('meta-analysis', 'rct', 'statistical-significance', 'clinical-significance', 'peer-reviewed')
)
WHERE slug = 'grade';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Pharmacokinetics', 'Bioavailability', 'Loading Phase', 'Maintenance Dose', 'Absorption')
)
WHERE slug = 'halflife';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('anemia', 'myoglobin', 'bloodglucose', 'biomarker', 'mineral')
)
WHERE slug = 'hemoglobin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('protein', 'absorption', 'bioavailability', 'collagen')
)
WHERE slug = 'hydrolyzed';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('collagen', 'proline', 'glycine', 'biomarker', 'osteoporosis')
)
WHERE slug = 'hydroxyproline';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'normotensive', 'systolic', 'diastolic', 'cardiovascular')
)
WHERE slug = 'hypertensive';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Maintenance Dose', 'Saturation', 'Half-Life', 'Bioavailability', 'Therapeutic Dose')
)
WHERE slug = 'loadingphase';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('mineral', 'electrolytes', 'bioavailability', 'absorption')
)
WHERE slug = 'macromineral';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Loading Phase', 'Therapeutic Dose', 'Half-Life', 'Pharmacokinetics', 'Biomarker')
)
WHERE slug = 'maintenancedose';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bioavailability', 'methylfolate', 'absorption', 'mthfr')
)
WHERE slug = 'methylcobalamin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('folicacid', 'bioavailability', 'mthfr', 'methylcobalamin')
)
WHERE slug = 'methylfolate';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('macromineral', 'bioavailability', 'absorption', 'electrolytes')
)
WHERE slug = 'mineral';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Protein Synthesis', 'Muscle Protein Synthesis', 'Leucine', 'Metabolism', 'Anabolic')
)
WHERE slug = 'mtor';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('hemoglobin', 'biomarker', 'atp', 'mitochondria', 'cardiovascular')
)
WHERE slug = 'myoglobin';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'hypertensive', 'systolic', 'diastolic')
)
WHERE slug = 'normotensive';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('epa', 'dha', 'cardiovascular', 'inflammation', 'triglycerides', 'cognitive-function', 'bioavailability')
)
WHERE slug = 'omega3';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bonedensity', 'mineral', 'macromineral', 'biomarker')
)
WHERE slug = 'osteoporosis';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Free Radicals', 'Oxidative Stress', 'Lipid Peroxidation', 'Antioxidant', '8-OHdG', 'MDA', 'Glutathione')
)
WHERE slug = 'oxidativedamage';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('rct', 'doubleblinded', 'singleblinded', 'clinicalsignificance', 'statisticalsignificance', 'grade')
)
WHERE slug = 'pedro';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('inflammation', 'biomarker', 'metabolism', 'neurotransmitter')
)
WHERE slug = 'pms';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'hypertensive', 'biomarker', 'cardiovascular')
)
WHERE slug = 'preeclampsia';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('collagen', 'glycine', 'hydroxyproline', 'protein', 'proteinsynthesis')
)
WHERE slug = 'proline';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('muscleproteinsynthesis', 'metabolism', 'absorption', 'bioavailability')
)
WHERE slug = 'proteinsynthesis';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('GLP-1', 'PYY', 'Protein', 'FODMAP', 'Fiber')
)
WHERE slug = 'satiety';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Loading Phase', 'Absorption', 'Half-Life', 'Maintenance Dose')
)
WHERE slug = 'saturation';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Bioavailability', 'Absorption', 'Vitamin C', 'Vitamin D', 'Calcium', 'Iron')
)
WHERE slug = 'synergisticeffect';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('bloodpressure', 'diastolic', 'cardiovascular', 'hypertensive')
)
WHERE slug = 'systolic';

UPDATE api.glossary_terms
SET related_terms = ARRAY(
  SELECT id FROM api.glossary_terms WHERE slug IN ('Deficiency', 'Therapeutic Dose', 'Adverse Effects', 'Biomarker', 'Drug Interactions')
)
WHERE slug = 'tolerableupperintakelevel';

-- Re-enable triggers
ALTER TABLE api.glossary_terms ENABLE TRIGGER ALL;

COMMIT;

-- Verify insertion
SELECT COUNT(*) as total_terms FROM api.glossary_terms;
