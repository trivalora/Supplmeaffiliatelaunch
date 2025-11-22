import React, { Suspense, useEffect, useMemo, lazy } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { pushPageView } from '../analytics/dataLayer';
import { buildRoutes, RouteSEO } from './routeMap';
import { ScrollToTop } from './ScrollToTop';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { AnalyticsProvider } from '../components/AnalyticsProvider';
import { getPathForKey } from '../utils/routePaths';
import { trackNavigation } from '../utils/analytics';
import { scrollDepthTracker } from '../utils/scrollDepthTracker';
import { timeTracker } from '../utils/timeTracker';
import { NotFound } from '../components/NotFound';

// Simple loading fallback
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export function RouterLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Memoize routes to prevent re-creating component instances on every render
  // This is CRITICAL - without this, React sees new components each render and doesn't update the page
  const routes = useMemo(() => buildRoutes(), []);

  // Non-canonical alias redirects (typos / singular forms / glossary term variations)
  // These are intentionally not included in buildRoutes() so they don't appear in SEO, analytics, or sitemap.
  // Glossary redirects map term variations from GLOSSARY_TERMS to their parent pages
  const ALIAS_REDIRECTS: Record<string, string> = {
    // Supplement typos and variations
    '/ashwaghandha': '/ashwagandha',
    '/ashwaghand': '/ashwagandha',
    '/bcaa': '/bcaas',
    '/ashwaghandha/': '/ashwagandha',
    '/ashwaghand/': '/ashwagandha',
    '/bcaa/': '/bcaas',
    
    // Glossary term redirects (270 total) - organized by target page
    // absorption
    '/glossary/absorb': '/glossary/absorption',
    '/glossary/absorbed': '/glossary/absorption',
    
    // adaptogen
    '/glossary/adaptogens': '/glossary/adaptogen',
    '/glossary/adaptogenic': '/glossary/adaptogen',
    
    // anecdotalevidence
    '/glossary/anecdotal-report': '/glossary/anecdotalevidence',
    '/glossary/anecdotal-reports': '/glossary/anecdotalevidence',
    
    // anemia
    '/glossary/anaemia': '/glossary/anemia',
    '/glossary/iron-deficiency-anemia': '/glossary/anemia',
    '/glossary/hemolytic-anemia': '/glossary/anemia',
    
    // antioxidant
    '/glossary/antioxidants': '/glossary/antioxidant',
    
    // arr
    '/glossary/absolute-risk-reduction': '/glossary/arr',
    '/glossary/absolute-risk': '/glossary/arr',
    '/glossary/nnt': '/glossary/arr',
    '/glossary/number-needed-to-treat': '/glossary/arr',
    
    // atp
    '/glossary/adenosine-triphosphate': '/glossary/atp',
    '/glossary/cellular-energy': '/glossary/atp',
    '/glossary/energy-currency': '/glossary/atp',
    
    // betacarotene
    '/glossary/beta-carotene': '/glossary/betacarotene',
    '/glossary/carotene': '/glossary/betacarotene',
    '/glossary/provitamin-a': '/glossary/betacarotene',
    
    // bioavailability
    '/glossary/bioavailable': '/glossary/bioavailability',
    
    // biomarker
    '/glossary/biomarkers': '/glossary/biomarker',
    
    // bloodglucose
    '/glossary/blood-sugar': '/glossary/bloodglucose',
    '/glossary/fasting-glucose': '/glossary/bloodglucose',
    '/glossary/fasting-blood-sugar': '/glossary/bloodglucose',
    
    // bloodpressure
    '/glossary/systolic-pressure': '/glossary/bloodpressure',
    '/glossary/diastolic-pressure': '/glossary/bloodpressure',
    '/glossary/hypertension': '/glossary/bloodpressure',
    '/glossary/hypotension': '/glossary/bloodpressure',
    
    // bonedensity
    '/glossary/bone-mineral-density': '/glossary/bonedensity',
    '/glossary/bmd': '/glossary/bonedensity',
    '/glossary/osteopenia': '/glossary/bonedensity',
    
    // cardiovascular
    '/glossary/cardio-vascular': '/glossary/cardiovascular',
    
    // ci
    '/glossary/confidence-interval': '/glossary/ci',
    '/glossary/confidence-intervals': '/glossary/ci',
    '/glossary/95-ci': '/glossary/ci',
    '/glossary/95-confidence-interval': '/glossary/ci',
    
    // clinicalsignificance
    '/glossary/clinically-significant': '/glossary/clinicalsignificance',
    '/glossary/clinically-meaningful': '/glossary/clinicalsignificance',
    
    // cognitivefunction
    '/glossary/cognitive-performance': '/glossary/cognitivefunction',
    '/glossary/cognition': '/glossary/cognitivefunction',
    '/glossary/memory': '/glossary/cognitivefunction',
    '/glossary/executive-function': '/glossary/cognitivefunction',
    
    // collagen
    '/glossary/collagen-synthesis': '/glossary/collagen',
    
    // cortisol
    '/glossary/stress-hormone': '/glossary/cortisol',
    '/glossary/hpa-axis': '/glossary/cortisol',
    
    // crp
    '/glossary/c-reactive-protein': '/glossary/crp',
    '/glossary/hs-crp': '/glossary/crp',
    '/glossary/high-sensitivity-crp': '/glossary/crp',
    
    // dha
    '/glossary/docosahexaenoic-acid': '/glossary/dha',
    
    // diastolic
    '/glossary/diastolic-blood-pressure': '/glossary/diastolic',
    
    // dosedependent
    '/glossary/dose-dependent': '/glossary/dosedependent',
    '/glossary/dose-response': '/glossary/dosedependent',
    
    // doubleblinded
    '/glossary/double-blind': '/glossary/doubleblinded',
    '/glossary/double-blinded': '/glossary/doubleblinded',
    
    // efficacy
    '/glossary/efficacious': '/glossary/efficacy',
    
    // electrolytes
    '/glossary/electrolyte': '/glossary/electrolytes',
    '/glossary/sodium': '/glossary/electrolytes',
    '/glossary/potassium': '/glossary/electrolytes',
    
    // empiricalevidence
    '/glossary/empirical-data': '/glossary/empiricalevidence',
    '/glossary/empirical-research': '/glossary/empiricalevidence',
    
    // enterocytes
    '/glossary/enterocyte': '/glossary/enterocytes',
    '/glossary/intestinal-epithelial-cells': '/glossary/enterocytes',
    
    // epa
    '/glossary/eicosapentaenoic-acid': '/glossary/epa',
    
    // fibrinogen
    '/glossary/hyperfibrinogenemia': '/glossary/fibrinogen',
    
    // fmd
    '/glossary/flow-mediated-dilation': '/glossary/fmd',
    '/glossary/endothelial-function': '/glossary/fmd',
    
    // fodmap
    '/glossary/fodmaps': '/glossary/fodmap',
    '/glossary/fermentable-oligosaccharides': '/glossary/fodmap',
    '/glossary/low-fodmap': '/glossary/fodmap',
    '/glossary/high-fodmap': '/glossary/fodmap',
    '/glossary/fodmap-diet': '/glossary/fodmap',
    
    // glp1
    '/glossary/glp-1': '/glossary/glp1',
    '/glossary/glucagon-like-peptide-1': '/glossary/glp1',
    '/glossary/incretin': '/glossary/glp1',
    
    // glucosemetabolism
    '/glossary/metabolic-pathways': '/glossary/glucosemetabolism',
    '/glossary/glycolysis': '/glossary/glucosemetabolism',
    '/glossary/gluconeogenesis': '/glossary/glucosemetabolism',
    
    // glutathione
    '/glossary/gsh': '/glossary/glutathione',
    '/glossary/gssg': '/glossary/glutathione',
    '/glossary/reduced-glutathione': '/glossary/glutathione',
    '/glossary/oxidized-glutathione': '/glossary/glutathione',
    
    // glycemiccontrol
    '/glossary/blood-sugar-control': '/glossary/glycemiccontrol',
    '/glossary/glucose-control': '/glossary/glycemiccontrol',
    '/glossary/hemoglobin-a1c': '/glossary/glycemiccontrol',
    
    // glycine
    '/glossary/gly': '/glossary/glycine',
    
    // gos
    '/glossary/galacto-oligosaccharides': '/glossary/gos',
    '/glossary/galacto-oligosaccharide': '/glossary/gos',
    '/glossary/galactooligosaccharides': '/glossary/gos',
    
    // grade
    '/glossary/grade-system': '/glossary/grade',
    '/glossary/grade-criteria': '/glossary/grade',
    
    // gutmicrobiome
    '/glossary/microbiome': '/glossary/gutmicrobiome',
    '/glossary/gut-bacteria': '/glossary/gutmicrobiome',
    '/glossary/gut-flora': '/glossary/gutmicrobiome',
    
    // hba1c
    '/glossary/a1c': '/glossary/hba1c',
    '/glossary/glycated-hemoglobin': '/glossary/hba1c',
    '/glossary/glycosylated-hemoglobin': '/glossary/hba1c',
    
    // hdlcholesterol
    '/glossary/hdl': '/glossary/hdlcholesterol',
    '/glossary/hdl-c': '/glossary/hdlcholesterol',
    '/glossary/high-density-lipoprotein': '/glossary/hdlcholesterol',
    '/glossary/good-cholesterol': '/glossary/hdlcholesterol',
    
    // hemeiron
    '/glossary/haem-iron': '/glossary/hemeiron',
    
    // hemoglobin
    '/glossary/haemoglobin': '/glossary/hemoglobin',
    '/glossary/hb': '/glossary/hemoglobin',
    '/glossary/hgb': '/glossary/hemoglobin',
    
    // homocysteine
    '/glossary/hyperhomocysteinemia': '/glossary/homocysteine',
    
    // hydrolyzed
    '/glossary/hydrolyzed-protein': '/glossary/hydrolyzed',
    '/glossary/hydrolysis': '/glossary/hydrolyzed',
    '/glossary/enzymatic-hydrolysis': '/glossary/hydrolyzed',
    '/glossary/protein-hydrolysate': '/glossary/hydrolyzed',
    
    // hydroxyproline
    '/glossary/hydroxylation': '/glossary/hydroxyproline',
    
    // hyperglycemia
    '/glossary/hyperglycaemia': '/glossary/hyperglycemia',
    '/glossary/high-blood-sugar': '/glossary/hyperglycemia',
    '/glossary/elevated-glucose': '/glossary/hyperglycemia',
    
    // ibs
    '/glossary/irritable-bowel-syndrome': '/glossary/ibs',
    '/glossary/ibs-d': '/glossary/ibs',
    '/glossary/ibs-c': '/glossary/ibs',
    '/glossary/ibs-m': '/glossary/ibs',
    
    // il1
    '/glossary/il-1': '/glossary/il1',
    '/glossary/interleukin-1': '/glossary/il1',
    
    // il6
    '/glossary/il-6': '/glossary/il6',
    '/glossary/interleukin-6': '/glossary/il6',
    
    // immunesystem
    '/glossary/immune-function': '/glossary/immunesystem',
    '/glossary/immunity': '/glossary/immunesystem',
    '/glossary/immune-response': '/glossary/immunesystem',
    
    // inflammation
    '/glossary/inflammatory': '/glossary/inflammation',
    '/glossary/anti-inflammatory': '/glossary/inflammation',
    '/glossary/pro-inflammatory': '/glossary/inflammation',
    
    // inflammatoryboweldisease
    '/glossary/ibd': '/glossary/inflammatoryboweldisease',
    '/glossary/crohn': '/glossary/inflammatoryboweldisease',
    
    // insulinresistance
    '/glossary/insulin-resistant': '/glossary/insulinresistance',
    '/glossary/insulin-sensitivity': '/glossary/insulinresistance',
    
    // inulintypefructans
    '/glossary/inulin': '/glossary/inulintypefructans',
    '/glossary/fructans': '/glossary/inulintypefructans',
    '/glossary/inulin-type-fructans': '/glossary/inulintypefructans',
    '/glossary/fructo-oligosaccharides': '/glossary/inulintypefructans',
    '/glossary/fructooligosaccharides': '/glossary/inulintypefructans',
    
    // jointhealth
    '/glossary/joints': '/glossary/jointhealth',
    '/glossary/cartilage': '/glossary/jointhealth',
    '/glossary/osteoarthritis': '/glossary/jointhealth',
    '/glossary/synovial-fluid': '/glossary/jointhealth',
    
    // ldlcholesterol
    '/glossary/ldl': '/glossary/ldlcholesterol',
    '/glossary/ldl-c': '/glossary/ldlcholesterol',
    '/glossary/low-density-lipoprotein': '/glossary/ldlcholesterol',
    '/glossary/bad-cholesterol': '/glossary/ldlcholesterol',
    
    // lipidperoxidation
    '/glossary/lipid-oxidation': '/glossary/lipidperoxidation',
    '/glossary/peroxidation': '/glossary/lipidperoxidation',
    
    // macromineral
    '/glossary/macrominerals': '/glossary/macromineral',
    '/glossary/major-mineral': '/glossary/macromineral',
    '/glossary/major-minerals': '/glossary/macromineral',
    
    // mda
    '/glossary/malondialdehyde': '/glossary/mda',
    '/glossary/tbars': '/glossary/mda',
    
    // metaanalysis
    '/glossary/meta-analysis': '/glossary/metaanalysis',
    '/glossary/meta-analyses': '/glossary/metaanalysis',
    '/glossary/metaanalyses': '/glossary/metaanalysis',
    
    // metabolism
    '/glossary/metabolic': '/glossary/metabolism',
    
    // mineral
    '/glossary/minerals': '/glossary/mineral',
    '/glossary/trace-mineral': '/glossary/mineral',
    '/glossary/trace-minerals': '/glossary/mineral',
    
    // mitochondria
    '/glossary/mitochondrial': '/glossary/mitochondria',
    '/glossary/mitochondrial-function': '/glossary/mitochondria',
    '/glossary/atp-production': '/glossary/mitochondria',
    
    // muscleproteinsynthesis
    '/glossary/mps': '/glossary/muscleproteinsynthesis',
    '/glossary/muscle-growth': '/glossary/muscleproteinsynthesis',
    
    // myoglobin
    '/glossary/myoglobinuria': '/glossary/myoglobin',
    
    // neurotransmitter
    '/glossary/neurotransmitters': '/glossary/neurotransmitter',
    '/glossary/serotonin': '/glossary/neurotransmitter',
    '/glossary/dopamine': '/glossary/neurotransmitter',
    '/glossary/gaba': '/glossary/neurotransmitter',
    '/glossary/glutamate': '/glossary/neurotransmitter',
    
    // nonhemeiron
    '/glossary/non-heme-iron': '/glossary/nonhemeiron',
    '/glossary/non-haem-iron': '/glossary/nonhemeiron',
    
    // normotensive
    '/glossary/normal-blood-pressure': '/glossary/normotensive',
    
    // omega-3
    '/glossary/omega-3-fatty-acids': '/glossary/omega-3',
    
    // or
    '/glossary/odds-ratio': '/glossary/or',
    
    // osteomalacia
    '/glossary/adult-rickets': '/glossary/osteomalacia',
    
    // osteoporosis
    '/glossary/bone-loss': '/glossary/osteoporosis',
    '/glossary/low-bone-mass': '/glossary/osteoporosis',
    
    // oxidizedldl
    '/glossary/oxldl': '/glossary/oxidizedldl',
    '/glossary/oxidised-ldl': '/glossary/oxidizedldl',
    
    // pedro
    '/glossary/pedro-scale': '/glossary/pedro',
    '/glossary/pedro-score': '/glossary/pedro',
    '/glossary/physiotherapy-evidence-database': '/glossary/pedro',
    
    // peerreviewed
    '/glossary/peer-reviewed': '/glossary/peerreviewed',
    '/glossary/peer-review': '/glossary/peerreviewed',
    
    // placebo
    '/glossary/placebos': '/glossary/placebo',
    '/glossary/placebo-effect': '/glossary/placebo',
    '/glossary/placebo-controlled': '/glossary/placebo',
    
    // pms
    '/glossary/premenstrual-syndrome': '/glossary/pms',
    '/glossary/pmdd': '/glossary/pms',
    '/glossary/premenstrual-dysphoric-disorder': '/glossary/pms',
    
    // prediabetes
    '/glossary/pre-diabetes': '/glossary/prediabetes',
    '/glossary/prediabetic': '/glossary/prediabetes',
    '/glossary/impaired-glucose-tolerance': '/glossary/prediabetes',
    '/glossary/impaired-fasting-glucose': '/glossary/prediabetes',
    '/glossary/igt': '/glossary/prediabetes',
    
    // preeclampsia
    '/glossary/pre-eclampsia': '/glossary/preeclampsia',
    '/glossary/eclampsia': '/glossary/preeclampsia',
    '/glossary/hellp-syndrome': '/glossary/preeclampsia',
    
    // proline
    '/glossary/pro': '/glossary/proline',
    
    // protein
    '/glossary/amino-acid': '/glossary/protein',
    
    // pyy
    '/glossary/peptide-yy': '/glossary/pyy',
    '/glossary/pyy3-36': '/glossary/pyy',
    
    // rct
    '/glossary/rcts': '/glossary/rct',
    '/glossary/randomized-controlled-trial': '/glossary/rct',
    '/glossary/randomized-controlled-trials': '/glossary/rct',
    '/glossary/randomised-controlled-trial': '/glossary/rct',
    '/glossary/randomised-controlled-trials': '/glossary/rct',
    
    // rickets
    '/glossary/rachitic': '/glossary/rickets',
    
    // rr
    '/glossary/risk-ratio': '/glossary/rr',
    '/glossary/relative-risk': '/glossary/rr',
    
    // scfa
    '/glossary/scfas': '/glossary/scfa',
    '/glossary/short-chain-fatty-acids': '/glossary/scfa',
    '/glossary/short-chain-fatty-acid': '/glossary/scfa',
    
    // sibo
    '/glossary/small-intestinal-bacterial-overgrowth': '/glossary/sibo',
    '/glossary/imo': '/glossary/sibo',
    '/glossary/intestinal-methanogen-overgrowth': '/glossary/sibo',
    
    // singleblinded
    '/glossary/single-blind': '/glossary/singleblinded',
    '/glossary/single-blinded': '/glossary/singleblinded',
    
    // sleepquality
    '/glossary/sleep': '/glossary/sleepquality',
    '/glossary/insomnia': '/glossary/sleepquality',
    '/glossary/sleep-duration': '/glossary/sleepquality',
    
    // smd
    '/glossary/standardized-mean-difference': '/glossary/smd',
    '/glossary/cohen': '/glossary/smd',
    
    // statisticalsignificance
    '/glossary/statistically-significant': '/glossary/statisticalsignificance',
    '/glossary/p-value': '/glossary/statisticalsignificance',
    '/glossary/p-values': '/glossary/statisticalsignificance',
    
    // subgroupanalysis
    '/glossary/subgroup-analyses': '/glossary/subgroupanalysis',
    '/glossary/sub-group-analysis': '/glossary/subgroupanalysis',
    '/glossary/sub-group-analyses': '/glossary/subgroupanalysis',
    
    // systolic
    '/glossary/systolic-blood-pressure': '/glossary/systolic',
    
    // tac
    '/glossary/total-antioxidant-capacity': '/glossary/tac',
    
    // thyroidfunction
    '/glossary/thyroid': '/glossary/thyroidfunction',
    '/glossary/tsh': '/glossary/thyroidfunction',
    '/glossary/t3': '/glossary/thyroidfunction',
    '/glossary/t4': '/glossary/thyroidfunction',
    '/glossary/hypothyroidism': '/glossary/thyroidfunction',
    
    // tnfalpha
    '/glossary/tnf': '/glossary/tnfalpha',
    '/glossary/tnf-alpha': '/glossary/tnfalpha',
    '/glossary/tumor-necrosis-factor': '/glossary/tnfalpha',
    '/glossary/tumour-necrosis-factor': '/glossary/tnfalpha',
    
    // triglycerides
    '/glossary/triglyceride': '/glossary/triglycerides',
    '/glossary/hypertriglyceridemia': '/glossary/triglycerides',
    
    // ulcerativecolitis
    '/glossary/uc': '/glossary/ulcerativecolitis',
    
    // vitamindeficiency
    '/glossary/nutritional-deficiency': '/glossary/vitamindeficiency',
    '/glossary/vitamin-deficiency': '/glossary/vitamindeficiency',
    
    // wmd
    '/glossary/weighted-mean-difference': '/glossary/wmd',
    
    // Additional canonical hyphenated forms
    '/glossary/empirical-evidence': '/glossary/empiricalevidence',
    '/glossary/anecdotal-evidence': '/glossary/anecdotalevidence',
    '/glossary/statistical-significance': '/glossary/statisticalsignificance',
    '/glossary/clinical-significance': '/glossary/clinicalsignificance',
    '/glossary/subgroup-analysis': '/glossary/subgroupanalysis',
    '/glossary/oxidative-stress': '/glossary/oxidativestress',
    '/glossary/oxidative-damage': '/glossary/oxidativestress',
    '/glossary/lipid-peroxidation': '/glossary/lipidperoxidation',
    '/glossary/insulin-resistance': '/glossary/insulinresistance',
    '/glossary/bone-density': '/glossary/bonedensity',
    '/glossary/glycemic-control': '/glossary/glycemiccontrol',
    '/glossary/cognitive-function': '/glossary/cognitivefunction',
    '/glossary/thyroid-function': '/glossary/thyroidfunction',
    '/glossary/hyperthyroidism': '/glossary/thyroidfunction',
    '/glossary/gut-microbiome': '/glossary/gutmicrobiome',
    '/glossary/immune-system': '/glossary/immunesystem',
    '/glossary/muscle-protein-synthesis': '/glossary/muscleproteinsynthesis',
    '/glossary/protein-synthesis': '/glossary/proteinsynthesis',
    '/glossary/joint-health': '/glossary/jointhealth',
    '/glossary/sleep-quality': '/glossary/sleepquality',
    '/glossary/amino-acids': '/glossary/protein',
    '/glossary/effect-size': '/glossary/smd',
    '/glossary/blood-glucose': '/glossary/bloodglucose',
    '/glossary/blood-pressure': '/glossary/bloodpressure',
    '/glossary/glucose-metabolism': '/glossary/glucosemetabolism',
    '/glossary/pernicious-anemia': '/glossary/anemia',
    '/glossary/ulcerative-colitis': '/glossary/ulcerativecolitis',
    '/glossary/inflammatory-bowel-disease': '/glossary/inflammatoryboweldisease',
    '/glossary/ldl-cholesterol': '/glossary/ldlcholesterol',
    '/glossary/hdl-cholesterol': '/glossary/hdlcholesterol',
    '/glossary/oxidized-ldl': '/glossary/oxidizedldl',
    '/glossary/8-ohdg': '/glossary/eightohdg',
    '/glossary/8-hydroxy-2': '/glossary/eightohdg',
    '/glossary/heme-iron': '/glossary/hemeiron',
    '/glossary/nonheme-iron': '/glossary/nonhemeiron',
    '/glossary/ifg': '/glossary/prediabetes',
    
    // Note: Supplement pages (magnesiumv2, calciumv2, etc.) are not under /glossary/
    // They are regular supplement pages and should be accessed via their own routes
    // GLOSSARY_TERMS includes them for in-text linking but they don't need redirects here
    
    // Special character edge cases (malformed slugs from glossaryAutolink parsing)
    // These are artifacts and should redirect to their proper pages
    '/glossary/tnf-': '/glossary/tnfalpha',
    '/glossary/-carotene': '/glossary/betacarotene'
  };

  // Determine current route for SEO injection
  const currentRoute = routes.find(r => r.path === location.pathname);
  const hideChrome = currentRoute?.pageKey === 'landing';

  // Page view tracking
  useEffect(() => {
    if (!currentRoute) return;
    const pageName = currentRoute.seo?.title || currentRoute.pageKey;
    const pageCategory = currentRoute.path.startsWith('/glossary') ? 'glossary' : (currentRoute.pageKey === 'landing' ? 'landing' : 'supplement');
    pushPageView({
      pageName,
      pageCategory,
      pageUrl: window.location.href,
      pagePathname: location.pathname,
    });

    // Initialize engagement/scroll trackers for this page
    try {
      scrollDepthTracker.initialize(pageName);
      timeTracker.initialize(pageName);
    } catch { }
  }, [location.pathname, currentRoute]);

  const handleNavigateHeader = (pageKey: any) => {
    try {
      const path = getPathForKey(pageKey);
      trackNavigation(String(pageKey), path, 'header');
      navigate(path);
    } catch {
      try {
        navigate(`/${String(pageKey)}`);
      } catch { }
    }
  };

  const handleNavigateFooter = (pageKey: any) => {
    try {
      const path = getPathForKey(pageKey);
      trackNavigation(String(pageKey), path, 'footer');
      navigate(path);
    } catch {
      try {
        navigate(`/${String(pageKey)}`);
      } catch { }
    }
  };

  return (
    <ErrorBoundary>
      <AnalyticsProvider googleTagManagerId={import.meta.env?.VITE_GTM_ID || 'GTM-NQWRNKFT'}>
        {currentRoute && <RouteSEO route={currentRoute} />}
        <ScrollToTop />
        {!hideChrome && <Header onNavigate={handleNavigateHeader} />}
        <Suspense fallback={<Loading />} key={location.pathname}>
          <Routes location={location}>
            {routes.map(r => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            {/* Dynamic product page routes */}
            <Route path="/:supplement/product/:productId" element={(() => {
              const ProductPageLazy = lazy(() => import('../components/ProductPage').then(m => ({ default: m.ProductPage })));
              return <ProductPageLazy onNavigate={handleNavigateHeader} />;
            })()} />
            {Object.entries(ALIAS_REDIRECTS).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {!hideChrome && <Footer onNavigate={handleNavigateFooter} />}
      </AnalyticsProvider>
    </ErrorBoundary>
  );
}
