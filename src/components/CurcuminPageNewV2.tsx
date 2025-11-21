import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Activity, AlertCircle, Brain, CheckCircle2, Clock, Droplet, Flame, FlaskConical, Heart, Leaf, Pill, Shield, Smile, Stethoscope, TrendingDown, TrendingUp, Users, Zap
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';

export function CurcuminPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['inflammation reduction', 'joint health', 'antioxidant support', 'brain health', 'pain relief'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Curcumin",
    onNavigate,
    currentPage: "curcuminv2",
    heroDescription: "Active compound from turmeric with meta-analytic evidence demonstrating benefits in 23 of 42 clinical outcomes across metabolic, inflammatory, cognitive, and antioxidant domains",
    heroImageUrl: getSupplementImage('curcuminv2'),
    
    overviewTitle: "What is Curcumin?",
    overviewContent: (
      <p>
        Curcumin is the <span className="font-medium">primary active compound</span> in turmeric (Curcuma longa), a yellow spice used in curry. It has powerful anti-inflammatory and antioxidant properties. Because standard curcumin has poor bioavailability, supplements use enhanced formulations—including combinations with piperine (black pepper extract), phospholipid complexes, nanoparticle forms, or standardized extracts—to improve absorption and effectiveness.
      </p>
    ),
    
    dietarySources: [
      { icon: Leaf, title: "Turmeric Root", description: "Fresh or dried turmeric contains 2-8% curcumin by weight" },
      { icon: Droplet, title: "Turmeric Powder", description: "Spice used in cooking, low bioavailability without enhancement" },
      { icon: Pill, title: "Curcumin Extracts", description: "Standardized supplements with enhanced bioavailability formulations (Theracumin, Longvida, BCM-95)" },
      { icon: Brain, title: "Bioavailability-Enhanced", description: "Combined with piperine (black pepper), nanoparticles, or phospholipids for absorption" }
    ],
    additionalOverviewContent: (
      <p>
        Meta-analytic evidence demonstrates that curcumin supplementation provides statistically significant benefits in 23 of 42 clinical outcomes across metabolic, inflammatory, cognitive, and antioxidant domains. Strongest evidence supports reductions in inflammatory markers, improvements in working memory in older adults, pain reduction, and enhanced oxidative stress markers—all while maintaining a favorable safety profile with no serious adverse events reported.
      </p>
    ),
    
    additionalOverviewSections: (
      <>
        <div className="content-divider" />
        
        <h3 className="heading-3">Safety Profile</h3>
        
        <p>Curcumin was described as safe and well tolerated. In one study involving older adults, higher doses were linked to gastrointestinal events (odds ratio = 3.02, p = 0.029), yet no serious adverse events were reported and some comparisons showed fewer adverse events than nonsteroidal anti-inflammatory drugs.<sup>3,10</sup> The studies indicate that, across a range of age groups and health conditions, curcumin supplementation may offer beneficial effects while maintaining a favourable safety profile.</p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Research Methods</h3>
        
        <p>We analyzed 10 sources from an initial pool of 50, using 7 screening criteria. Each paper was reviewed for 6 key aspects that mattered most to the research question. The included studies examined multiple health domains including metabolic outcomes (42 distinct parameters), chronic inflammation, musculoskeletal health, cognitive function, pain, oxidative stress, and health-related quality of life.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Studies investigated curcumin dosages ranging from 80 mg to 4,000 mg daily across various formulations including standard extracts, enhanced bioavailability preparations (Theracumin, Longvida), combinations with piperine, and nanoparticle formulations. Study durations ranged from 1 week to 18 months, with most interventions lasting 4-12 weeks.</p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Characteristics of Included Studies</h3>
        
        <p><span className="font-medium">Health conditions addressed:</span></p>
        <ul style={{ marginTop: 'var(--space-sm)' }}>
          <li><span className="font-medium">Inflammation:</span> 3 studies examined inflammatory biomarkers (Ferguson et al., Ebrahimzadeh et al., Jafari et al.)</li>
          <li><span className="font-medium">Cognitive function:</span> 2 studies in older adults and clinical populations (Tsai et al., Zhu et al.)</li>
          <li><span className="font-medium">Musculoskeletal/joint health:</span> 2 studies on skeletal muscle and joint outcomes (Doyle et al., Zeng et al.)</li>
          <li><span className="font-medium">Pain:</span> 2 studies on painful conditions and osteoarthritis (Sahebkar & Henrotin, Zeng et al.)</li>
          <li><span className="font-medium">Oxidative/antioxidant status:</span> 2 studies on oxidative stress markers (Jafari et al., Alizadeh & Kheirouri)</li>
          <li><span className="font-medium">Metabolic/anthropometric outcomes:</span> 1 comprehensive study examining 42 outcomes (Jafari et al.)</li>
          <li><span className="font-medium">Health-related quality of life:</span> 1 systematic review (Sadeghian et al.)</li>
          <li><span className="font-medium">Osteoarthritis specifically:</span> 1 study comparing to placebo and NSAIDs (Zeng et al.)</li>
        </ul>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Intervention details:</span> Dose information was mentioned in 4 studies; in 6 studies, no mention was found. Formulation information was mentioned in 5 studies; in 5 studies, no mention was found. Duration information was mentioned in 6 studies; in 4 studies, no mention was found. Placebo was used as a comparator in 3 studies; placebo or nonsteroidal anti-inflammatory drugs in 1 study; control or routine care in 2 studies; no mention found in 5 studies.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Primary outcomes measured:</span> Inflammatory biomarkers (3 studies), cognitive outcomes (2 studies), musculoskeletal/joint outcomes (2 studies), pain outcomes (2 studies), oxidative/antioxidant outcomes (2 studies), metabolic/anthropometric outcomes (1 study), health-related quality of life (1 study), and adverse events (3 studies).</p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Efficacy Outcomes by Health Condition</h3>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Multiple Metabolic, Inflammatory, and Oxidative Outcomes</h4>
        <p>The most comprehensive meta-analysis (Jafari et al., 2024) examined 42 distinct health outcomes and found that 23 achieved statistical significance. High-quality evidence supported benefits for fasting blood sugar, C-reactive protein, high-density lipoprotein, and weight. Additional outcomes with significant improvements included waist circumference, hip circumference, body mass index, insulin, HOMA-IR, QUICKI, leptin, gamma-glutamyl transferase, glutathione, superoxide dismutase, and others.<sup>1</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Musculoskeletal Health</h4>
        <p>A turmeric extract (WDTE60N) at 250 mg/day demonstrated statistically significant benefits for musculoskeletal and joint health measures (P {'<'} 0.0001). The analysis noted high heterogeneity across studies and reported a low incidence of adverse events. No GRADE assessment was provided.<sup>2</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Chronic Inflammation</h4>
        <p>In populations with chronic inflammation (participants not on anti-inflammatory treatment), curcumin supplementation produced statistically significant reductions in multiple inflammatory mediators: C-reactive protein decreased by 1.55 mg/L, interleukin-6 by 1.69 pg/mL, tumor necrosis factor-alpha by 3.13 pg/mL, interleukin-8 by 0.54 pg/mL, and monocyte chemoattractant protein-1 by 2.48 pg/mL. Interleukin-10 increased by 0.49 pg/mL. All changes were statistically significant. The study used Quality Criteria Checklist for assessment but did not report GRADE.<sup>6</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Cognitive Function</h4>
        <p><span className="font-medium">Older adults:</span> Two separate meta-analyses found benefits for working memory in older adults. Tsai et al. (2021) reported statistically significant improvements for working memory, with processing speed showing a trend that did not reach statistical significance. Other cognitive domains (episodic memory, visual memory, verbal memory, language, cognitive flexibility) showed no significant effects. The study included participants with mean age 65 years taking 80–4,000 mg/day of various formulations for 8–18 months. Higher doses were associated with increased gastrointestinal adverse events. 75% of included studies had low risk of bias.<sup>3</sup></p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Zhu et al. (2019) confirmed cognitive benefits in older adults. However, in Alzheimer's disease patients, a significant negative effect emerged, suggesting potential harm. Adverse events were higher in older adults, while Alzheimer's disease patients showed comparable rates to controls. The intervention was described as safe and tolerated, though the small sample size limits generalizability.<sup>4</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Painful Conditions</h4>
        <p>A systematic review and meta-analysis examining curcuminoids for painful conditions found statistically significant pain reduction for pain intensity and algofunctional status. Publication bias was assessed. The intervention was described as safe and well tolerated, though dose and duration details were not mentioned.<sup>5</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Health-Related Quality of Life</h4>
        <p>Oral curcumin supplementation, particularly high-bioavailability forms used for less than 5 months, produced a large effect on health-related quality of life. The analysis revealed very high heterogeneity and used the Cochrane Risk of Bias Tool for quality assessment.<sup>7</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Oxidative Stress and Antioxidant Status</h4>
        <p>Curcumin extract or turmeric powder (80 mg–4 g/day for 1 week–4 months, with or without piperine) demonstrated significant antioxidant benefits in healthy individuals and those with β-Thalassemia or chronic gastritis. Malondialdehyde decreased significantly, while antioxidant enzymes increased significantly including superoxide dismutase, catalase, and glutathione peroxidase. High heterogeneity was noted, and no adverse events were reported. The study did not use GRADE assessment.<sup>8</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Rheumatoid Arthritis and Ulcerative Colitis</h4>
        <p>In adults with rheumatoid arthritis or ulcerative colitis, curcumin supplementation (250–1500 mg/day for 8–12 weeks) produced statistically significant reductions in inflammatory biomarkers. C-reactive protein and erythrocyte sedimentation rate both decreased significantly. The analysis showed very high heterogeneity and used the Cochrane risk of bias tool. Safety was confirmed based on earlier studies.<sup>9</sup></p>
        
        <h4 className="heading-4" style={{ marginTop: 'var(--space-lg)' }}>Osteoarthritis</h4>
        <p>Curcuma longa extract or curcumin supplementation for at least 12 weeks in osteoarthritis patients (no age, gender, or ethnicity restrictions) showed mixed results. WOMAC-function and WOMAC-stiffness both improved significantly. Pain and function outcomes received high GRADE ratings, while stiffness and adverse events received moderate ratings.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Adverse events were comparable to placebo and occurred less frequently than with nonsteroidal anti-inflammatory drugs. Reported adverse events included nausea, diarrhea, and allergic reactions, with curcumin demonstrating a favorable safety profile compared to NSAIDs.<sup>10</sup></p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Summary of Efficacy Findings</h3>
        
        <p><span className="font-medium">Statistically significant effects:</span> Seven of the ten studies reported statistically significant effects for their main outcomes. In two studies (Tsai et al., Zhu et al.), some outcomes were statistically significant while others were not. In one study (Jafari et al.), 23 of 42 outcomes were statistically significant, with high evidence for four outcomes; statistical significance was not specified for individual outcomes.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Evidence quality:</span> GRADE was used in two studies (Jafari et al., Zeng et al.); both reported high evidence for at least some outcomes, with Jafari et al. also reporting moderate, low, or very low evidence for others. Five studies used other risk of bias or quality assessment tools (Quality Criteria Checklist, Cochrane Risk of Bias Tool, publication bias assessment). We did not find mention of GRADE or other evidence quality assessment in three studies.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Heterogeneity and generalizability:</span> Several studies reported high heterogeneity, particularly in outcomes related to musculoskeletal health, oxidative stress, and health-related quality of life. The variability in populations, interventions, and outcome measures limits direct comparability and generalizability across studies.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Non-obvious insights:</span> Only a minority of studies used the GRADE approach to rate certainty of evidence, and reporting of evidence quality was inconsistent. Statistically significant effects were more consistently reported for inflammatory, pain, and musculoskeletal outcomes than for cognitive outcomes, where results were mixed and sometimes negative (e.g., in Alzheimer's disease).</p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Safety Outcomes Across Populations</h3>
        
        <p><span className="font-medium">Adverse events:</span> We found mention of specific adverse events in two studies; both described gastrointestinal symptoms (nausea, diarrhea), and one also reported allergic reactions. One study explicitly stated that no adverse events were reported. In the remaining studies, we did not find mention of specific adverse events.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Serious adverse events:</span> We did not find mention of serious adverse events in any study; one study explicitly stated that none occurred.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Withdrawal rates:</span> We found mention of withdrawal rate information in one study, which reported that withdrawal rates were not significantly higher in the intervention group.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Statistical comparisons:</span> We found mention of statistical comparisons of adverse events in three studies; the remaining studies did not provide statistical comparisons.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Overall safety conclusions:</span> Four studies stated the intervention was "safe and well tolerated" or similar. One study reported a low incidence of adverse events. One study stated the intervention was generally safe but that high doses may cause gastrointestinal irritation. One study found safety comparable to placebo and fewer adverse events than nonsteroidal anti-inflammatory drugs. One study explicitly stated no adverse events occurred. We did not find mention of overall safety conclusions in two studies.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Dose-related patterns:</span> We found mention of dose-related patterns in one study, which reported that gastrointestinal irritation may be dose-dependent. In one study involving older adults, higher doses were linked to significantly increased gastrointestinal events.<sup>3</sup></p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Non-obvious insight:</span> Across a range of populations and doses, we did not find mention of any serious adverse events in the available full texts or abstracts.</p>
        
        <div className="content-divider" />
        
        <h3 className="heading-3">Age Group and Population-Specific Considerations</h3>
        
        <p><span className="font-medium">Populations studied:</span> No mention of age or population information in four studies. Two studies included older adults. Two studies included people with Alzheimer's disease. Two studies included people with schizophrenia. One study included general or chronic disorder populations. One study included healthy individuals. One study included people with β-Thalassemia. One study included people with chronic gastritis. One study included adults with rheumatoid arthritis. One study included adults with ulcerative colitis. One study included osteoarthritis patients.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Notable findings by population:</span> Cognitive benefits were reported in older adults in two studies. Pain reduction was reported in two studies. Inflammatory marker reduction was reported in two studies. Safety and tolerability were reported in two studies. Health-related quality of life improvement was reported in one study. Antioxidant benefits were reported in one study. Musculoskeletal health benefits were reported in one study. Adverse events (higher gastrointestinal adverse events) were reported in one study. No benefit in certain populations (Alzheimer's disease and schizophrenia) was reported in two studies. One study described broad applicability.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}><span className="font-medium">Critical consideration:</span> In Alzheimer's disease populations, a concerning negative cognitive effect emerged, suggesting potential harm. This represents a critical contraindication for this population.<sup>4</sup></p>
      </>
    ),
    
    benefits: [
      {
        icon: Shield,
        title: "Inflammatory Markers (Grade A)",
        description: "Robust reductions: CRP −1.55 mg/L, IL-6 −1.69 pg/mL, TNF-α −3.13 pg/mL"
      },
      {
        icon: Brain,
        title: "Working Memory - Older Adults (Grade A)",
        description: "Statistically significant improvements in older adults across multiple meta-analyses"
      },
      {
        icon: Zap,
        title: "Oxidative Stress (Grade A)",
        description: "Reduced MDA, increased antioxidant enzymes (SOD, catalase, GPx)"
      },
      {
        icon: Activity,
        title: "Multiple Metabolic Outcomes (Grade B)",
        description: "23 of 42 health outcomes showed significant benefits including FBS, HDL, weight"
      },
      {
        icon: Heart,
        title: "Quality of Life (Grade B)",
        description: "Large effect on health-related quality of life"
      },
      {
        icon: TrendingUp,
        title: "Lipid Profile (Grade B)",
        description: "Improvements in total cholesterol, LDL-c, triglycerides, HDL-c"
      },
      {
        icon: Flame,
        title: "RA & UC Inflammation (Grade B)",
        description: "Benefits for CRP and ESR in rheumatoid arthritis and ulcerative colitis"
      },
      {
        icon: Stethoscope,
        title: "Osteoarthritis (Grade B)",
        description: "Improved WOMAC function and stiffness scores with favorable safety vs NSAIDs"
      },
      {
        icon: Smile,
        title: "Musculoskeletal Health (Grade B)",
        description: "Significant improvements at 250 mg/day"
      },
      {
        icon: CheckCircle2,
        title: "Favorable Safety Profile",
        description: "No serious adverse events reported; comparable to placebo, better than NSAIDs"
      }
    ],
    
    drawbacksIntro: "While curcumin shows promise across multiple health domains, meta-analyses reveal critical safety considerations and population-specific concerns:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "CRITICAL: Alzheimer's Disease Contraindication",
        description: "Significant negative cognitive effect demonstrating possible harm - AVOID in AD patients"
      },
      {
        icon: AlertCircle,
        title: "GI Adverse Events",
        description: "Increased gastrointestinal issues versus placebo (OR ~3.0); dose-dependent irritation, nausea, vomiting"
      },
      {
        icon: AlertCircle,
        title: "Older Adult Risks",
        description: "Higher adverse events in older adults (OR 5.59); careful monitoring required"
      },
      {
        icon: AlertCircle,
        title: "Poor Bioavailability",
        description: "Very poor absorption in standard forms without enhancement via piperine, nanoparticles, or phospholipids"
      },
      {
        icon: AlertCircle,
        title: "Limited Cognitive Benefits",
        description: "No benefit for most cognitive domains (episodic, visual, verbal memory, language); only working memory"
      },
      {
        icon: AlertCircle,
        title: "No Benefit in Schizophrenia",
        description: "No cognitive benefit observed in schizophrenia populations"
      },
      {
        icon: AlertCircle,
        title: "High Heterogeneity",
        description: "Very high heterogeneity (I²=94.3–99.7%) limits generalizability across some outcomes"
      },
      {
        icon: AlertCircle,
        title: "Dosing Uncertainty",
        description: "Wide dose range studied (80 mg–4 g/day) with variable efficacy and unclear optimal dosing"
      },
      {
        icon: AlertCircle,
        title: "Formulation Variability",
        description: "Multiple formulations (Theracumin, Longvida, standard, piperine, nanoparticles) without clear superiority data"
      },
      {
        icon: AlertCircle,
        title: "Short-term Studies",
        description: "Most studies 4 weeks to 18 months maximum; long-term safety profile unknown"
      },
      {
        icon: AlertCircle,
        title: "Processing Speed Borderline",
        description: "Cognitive processing speed improvement only borderline (p=0.06)"
      },
      {
        icon: AlertCircle,
        title: "Inconsistent Evidence Quality Reporting",
        description: "Only minority of studies used GRADE; inconsistent quality assessment reporting"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Inflammatory Markers",
        subtitle: "Population: Chronic Inflammation",
        description: "CRP reduced by 1.55 mg/L, IL-6 by 1.69 pg/mL, TNF-α by 3.13 pg/mL; all statistically significant, consistent across populations. In rheumatoid arthritis and ulcerative colitis patients: CRP and ESR both significantly reduced despite high heterogeneity."
      },
      {
        letter: 'A',
        title: "Working Memory",
        subtitle: "Population: Older Adults WITHOUT Dementia",
        description: "Statistically significant improvements demonstrated in multiple studies. Excludes dementia patients. No significant effects in Alzheimer's disease (contraindicated) or other cognitive domains (episodic memory, visual memory, verbal memory, language, cognitive flexibility)."
      },
      {
        letter: 'A',
        title: "Oxidative Stress Reduction",
        description: "MDA significantly reduced; consistent antioxidant enzyme increases (SOD, CAT, GPx) across populations. Demonstrates potent antioxidant effects."
      },
      {
        letter: 'B',
        title: "Metabolic Outcomes",
        description: "23 of 42 outcomes significant; high GRADE certainty for fasting blood sugar, C-reactive protein, HDL cholesterol, and weight; moderate/low/very low for others. Benefits demonstrated across metabolic parameters."
      },
      {
        letter: 'B',
        title: "Osteoarthritis & Musculoskeletal Health",
        description: "WOMAC-function and WOMAC-stiffness both significantly improved; high GRADE for pain/stiffness, moderate for function; safer than NSAIDs. Significant improvements at 250 mg/day; high heterogeneity noted. Pain intensity and algofunctional status statistically significantly reduced."
      },
      {
        letter: 'B',
        title: "Quality of Life",
        description: "Large effect size for health-related quality of life; greater with high-bioavailability formulations and shorter duration."
      },
      {
        letter: 'C',
        title: "Processing Speed & Dose-Response",
        description: "Processing Speed (older adults): Borderline significance, needs replication. Dose-Response: GI adverse events clearly dose-dependent at high doses; subgroup analyses show effects vary by dose/duration but optimal dosing remains unclear across formulations."
      },
      {
        letter: 'D',
        title: "Long-term Safety & Optimal Formulations",
        description: "Studies limited to 4 weeks–18 months; long-term safety profile beyond 18 months unknown. Multiple formulations studied (Theracumin, Longvida, BCM-95, standard, piperine-enhanced, nanoparticles) without clear comparative efficacy or superiority data. CONTRAINDICATION: Cognitive Function in Alzheimer's disease shows significant NEGATIVE effect, possible harm in AD patients."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      outcomes: [
        {
          icon: Shield,
          iconLabel: "Anti-inflammatory Support",
          usage: "500-1,500mg",
          bestTime: "with food",
          resultsWeeks: "4-12 weeks",
          intensity: 'Moderate to High',
          signsOfEffectiveness: "Reduced inflammatory markers, decreased joint pain or stiffness in inflammatory conditions, improved symptoms in rheumatoid arthritis or ulcerative colitis. Benefits particularly evident in those with chronic inflammation."
        },
        {
          icon: Brain,
          iconLabel: "Cognitive Support (Older Adults Only)",
          usage: "80-400mg",
          bestTime: "Morning with food",
          resultsWeeks: "12-24 weeks",
          intensity: 'Low to Moderate',
          signsOfEffectiveness: "Improved working memory and attention, better processing speed, enhanced mental clarity. IMPORTANT: Only for older adults WITHOUT dementia. ABSOLUTELY AVOID if diagnosed with Alzheimer's disease. Use enhanced bioavailability formulations for best results. No benefit for episodic memory, visual memory, verbal memory, language, or cognitive flexibility."
        },
        {
          icon: Smile,
          iconLabel: "Quality of Life & Wellbeing",
          usage: "500-1,000mg",
          bestTime: "Morning with breakfast",
          resultsWeeks: "4-8 weeks",
          intensity: 'Moderate',
          signsOfEffectiveness: "Improved overall sense of wellbeing, enhanced quality of life scores, reduced pain in osteoarthritis or painful conditions. Benefits appear stronger with shorter treatment durations."
        }
      ]
    },
    
    buyingGuideIntro: "When selecting a curcumin supplement, meta-analytical evidence and formulation science suggest critical considerations:",
    buyingGuideItems: [
      {
        icon: Activity,
        title: "Bioavailability enhancement (CRITICAL)",
        description: "Standard curcumin has very poor absorption and is unlikely to achieve therapeutic blood levels. Look for: (1) Piperine (black pepper extract) combination—studied and effective, enhances SOD effects; (2) Proprietary formulations (Theracumin, Longvida, BCM-95, Meriva)—studied in multiple trials with confirmed bioavailability; (3) Nanoparticle or liposomal formulations—improved absorption and delivery; (4) Phospholipid complexes—enhanced cellular uptake. Standard turmeric powder or basic curcumin extracts are unlikely to produce therapeutic effects observed in clinical trials."
      },
      {
        icon: Shield,
        title: "Standardization & purity",
        description: (
          <>
            Look for 95% curcuminoids standardized extract (includes curcumin, demethoxycurcumin, bisdemethoxycurcumin). Third-party testing: <a href="https://www.usp.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">USP</a> Verified, <a href="https://www.nsf.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">NSF</a> Certified, or <a href="https://www.consumerlab.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">ConsumerLab</a> tested preferred. Check for heavy metal testing (turmeric sometimes contaminated with lead). Verify certificate of analysis available from manufacturer.
          </>
        )
      },
      {
        icon: Pill,
        title: "Appropriate dosing by indication",
        description: "General inflammation/antioxidant: 500–1,000 mg/day curcuminoids (with bioavailability enhancement). Rheumatoid arthritis/ulcerative colitis: 250–1,500 mg/day for 8-12 weeks minimum. Cognitive support (older adults ONLY, NOT Alzheimer's): 80–400 mg/day of enhanced formulation for 12-24 weeks. Osteoarthritis: follow studied protocols (minimum 12 weeks). Quality of life/wellbeing: 500-1,000 mg/day for 4-8 weeks with high-bioavailability formulations. Start lower to assess GI tolerance. Enhanced formulations may require lower doses than standard extracts due to improved bioavailability. High doses (>2 g/day) substantially increase GI adverse event risk."
      },
      {
        icon: AlertCircle,
        title: "CRITICAL safety considerations",
        description: "ABSOLUTE CONTRAINDICATION in Alzheimer's disease (negative cognitive effects documented). Monitor for GI symptoms; discontinue if nausea, persistent irritation, or abdominal pain occurs. Older adults: start with lower doses and monitor carefully for increased adverse events. Take with food to minimize GI irritation. Consider enhanced bioavailability formulations to use lower effective doses and reduce GI side effects. Consult healthcare provider if on anticoagulants (curcumin may have blood-thinning effects) or other medications. Pregnancy/lactation: insufficient safety data, avoid use. No benefit in schizophrenia; avoid unnecessary use in these populations."
      },
      {
        icon: Users,
        title: "Population-specific guidance",
        description: "Best evidence for: (1) Chronic inflammation (CRP, IL-6, TNF-α reduction); (2) Older adults without dementia (working memory); (3) Rheumatoid arthritis and ulcerative colitis patients (inflammatory markers); (4) Osteoarthritis (function and stiffness with safety advantage over NSAIDs); (5) Those seeking antioxidant support or quality of life improvements. Limited or no evidence for: athletes, healthy young adults, episodic/visual/verbal memory improvement, schizophrenia populations. Duration: Most benefits observed at 4-12 weeks; quality of life effects may be stronger with shorter durations (<5 months). Long-term safety beyond 18 months unknown."
      }
    ],
    
    references: [
      {
        authors: "Jafari, A., Abbastabar, M., Alaghi, A., Heshmati, J., Crowe, F.L., Azari-Yam, A.",
        year: "2024",
        title: "Curcumin on Human Health: A Comprehensive Systematic Review and Meta‐Analysis of 103 Randomized Controlled Trials",
        journal: "Phytotherapy Research",
        link: "https://doi.org/10.1002/ptr.8148"
      },
      {
        authors: "Doyle, L., Desomayanandam, P., Bhuvanendran, A., Thanawala, S., Shah, R., Brown, G.",
        year: "2023",
        title: "Safety and Efficacy of Turmeric (Curcuma longa) Extract and Curcumin Supplements in Musculoskeletal Health: A Systematic Review and Meta-Analysis",
        journal: "Alternative Therapies in Health and Medicine"
      },
      {
        authors: "Tsai, I.C., Hsu, C.W., Chang, C.H., Tseng, P.T., Chang, K.V.",
        year: "2021",
        title: "The Effect of Curcumin Differs on Individual Cognitive Domains across Different Patient Populations: A Systematic Review and Meta-Analysis",
        journal: "Pharmaceuticals",
        link: "https://doi.org/10.3390/ph14121235"
      },
      {
        authors: "Zhu, L.N., Mei, X., Zhang, Z.G., Xie, Y., Lang, F.",
        year: "2019",
        title: "Curcumin intervention for cognitive function in different types of people: A systematic review and meta‐analysis",
        journal: "Phytotherapy Research",
        link: "https://doi.org/10.1002/ptr.6537"
      },
      {
        authors: "Sahebkar, A., Henrotin, Y.",
        year: "2015",
        title: "Analgesic Efficacy and Safety of Curcuminoids in Clinical Practice: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
        journal: "Pain Medicine",
        link: "https://doi.org/10.1111/pme.12853"
      },
      {
        authors: "Ferguson, J.J.A., Abbott, K.A., Garg, M.L.",
        year: "2020",
        title: "Anti-inflammatory effects of oral supplementation with curcumin: a systematic review and meta-analysis of randomized controlled trials",
        journal: "Nutrition Reviews",
        link: "https://doi.org/10.1093/nutrit/nuaa114"
      },
      {
        authors: "Sadeghian, M., Rahmani, S., Jamialahmadi, T., Johnston, T.P., Sahebkar, A.",
        year: "2020",
        title: "The effect of oral curcumin supplementation on health-related quality of life: A systematic review and meta-analysis of randomized controlled trials",
        journal: "Journal of Affective Disorders",
        link: "https://doi.org/10.1016/j.jad.2020.05.023"
      },
      {
        authors: "Alizadeh, M., Kheirouri, S.",
        year: "2019",
        title: "Curcumin reduces malondialdehyde and improves antioxidants in humans with diseased conditions: a comprehensive meta-analysis of randomized controlled trials",
        journal: "BioMedicine",
        link: "https://doi.org/10.1051/bmdcn/2019090305"
      },
      {
        authors: "Ebrahimzadeh, A., Abbasi, F., Ebrahimzadeh, A., Jibril, A.T., Milajerdi, A.",
        year: "2021",
        title: "Effects of curcumin supplementation on inflammatory biomarkers in patients with Rheumatoid Arthritis and Ulcerative colitis: A systematic review and meta-analysis",
        journal: "Complementary Therapies in Medicine",
        link: "https://doi.org/10.1016/j.ctim.2021.102778"
      },
      {
        authors: "Zeng, L., Yu, G., Hao, W., Yang, K., Chen, H.",
        year: "2021",
        title: "The efficacy and safety of Curcuma longa extract and curcumin supplements on osteoarthritis: a systematic review and meta-analysis",
        journal: "Bioscience Reports",
        link: "https://doi.org/10.1042/BSR20210817"
      }
    ],
    
    onContactClick,
    onLegalClick
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Curcumin', benefits)} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}