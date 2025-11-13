import { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import { SEOHead, pageSEO, getSupplementSEO, getGlossarySEO } from './components/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageKey } from './routes.config';

// Eager load ONLY the initial landing page (needed for first render)
import { LandingPage } from './components/LandingPage';

// Lazy load all V2 knowledgebase pages
const AshwagandhaPageNewV2 = lazy(() => import('./components/AshwagandhaPageNewV2').then(m => ({ default: m.AshwagandhaPageNewV2 })));
const CalciumPageNewV2 = lazy(() => import('./components/CalciumPageNewV2').then(m => ({ default: m.CalciumPageNewV2 })));
const CollagenPeptidesPageNewV2 = lazy(() => import('./components/CollagenPeptidesPageNewV2').then(m => ({ default: m.CollagenPeptidesPageNewV2 })));
const CreatinePageNewV2 = lazy(() => import('./components/CreatinePageNewV2').then(m => ({ default: m.CreatinePageNewV2 })));
const IronPageNewV2 = lazy(() => import('./components/IronPageNewV2').then(m => ({ default: m.IronPageNewV2 })));
const MagnesiumPageNewV2 = lazy(() => import('./components/MagnesiumPageNewV2').then(m => ({ default: m.MagnesiumPageNewV2 })));
const Omega3PageNewV2 = lazy(() => import('./components/Omega3PageNewV2').then(m => ({ default: m.Omega3PageNewV2 })));
const PrebioticsPageNewV2 = lazy(() => import('./components/PrebioticsPageNewV2').then(m => ({ default: m.PrebioticsPageNewV2 })));
const ProbioticsPageNewV2 = lazy(() => import('./components/ProbioticsPageNewV2').then(m => ({ default: m.ProbioticsPageNewV2 })));
const SulforaphanePageNewV2 = lazy(() => import('./components/SulforaphanePageNewV2').then(m => ({ default: m.SulforaphanePageNewV2 })));
const VitaminCPageNewV2 = lazy(() => import('./components/VitaminCPageNewV2').then(m => ({ default: m.VitaminCPageNewV2 })));
const VitaminDPageNewV2 = lazy(() => import('./components/VitaminDPageNewV2').then(m => ({ default: m.VitaminDPageNewV2 })));
const MultivitaminPageNewV2 = lazy(() => import('./components/MultivitaminPageNewV2').then(m => ({ default: m.MultivitaminPageNewV2 })));
const WheyProteinPageNewV2 = lazy(() => import('./components/WheyProteinPageNewV2').then(m => ({ default: m.WheyProteinPageNewV2 })));
const CaseinProteinPageNewV2 = lazy(() => import('./components/CaseinProteinPageNewV2').then(m => ({ default: m.CaseinProteinPageNewV2 })));
const BCAAsPageNewV2 = lazy(() => import('./components/BCAAsPageNewV2').then(m => ({ default: m.BCAAsPageNewV2 })));
const CurcuminPageNewV2 = lazy(() => import('./components/CurcuminPageNewV2').then(m => ({ default: m.CurcuminPageNewV2 })));

// Lazy load static pages
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const CookiePolicyPage = lazy(() => import('./components/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const ImpressumPage = lazy(() => import('./components/ImpressumPage').then(m => ({ default: m.ImpressumPage })));
const KnowledgebasePage = lazy(() => import('./components/KnowledgebasePage').then(m => ({ default: m.KnowledgebasePage })));
const GlossaryPage = lazy(() => import('./components/GlossaryPage').then(m => ({ default: m.GlossaryPage })));
const LegalDisclaimerPage = lazy(() => import('./components/LegalDisclaimerPage').then(m => ({ default: m.LegalDisclaimerPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const MethodologyPage = lazy(() => import('./components/MethodologyPage').then(m => ({ default: m.MethodologyPage })));

// Lazy load glossary term pages
const RCTPage = lazy(() => import('./components/glossary/RCTPage').then(m => ({ default: m.RCTPage })));
const MetaAnalysisPage = lazy(() => import('./components/glossary/MetaAnalysisPage').then(m => ({ default: m.MetaAnalysisPage })));
const EmpiricalEvidencePage = lazy(() => import('./components/glossary/EmpiricalEvidencePage').then(m => ({ default: m.EmpiricalEvidencePage })));
const AnecdotalEvidencePage = lazy(() => import('./components/glossary/AnecdotalEvidencePage').then(m => ({ default: m.AnecdotalEvidencePage })));
const PlaceboPage = lazy(() => import('./components/glossary/PlaceboPage').then(m => ({ default: m.PlaceboPage })));
const PeerReviewedPage = lazy(() => import('./components/glossary/PeerReviewedPage').then(m => ({ default: m.PeerReviewedPage })));
const StatisticalSignificancePage = lazy(() => import('./components/glossary/StatisticalSignificancePage').then(m => ({ default: m.StatisticalSignificancePage })));
const ClinicalSignificancePage = lazy(() => import('./components/glossary/ClinicalSignificancePage').then(m => ({ default: m.ClinicalSignificancePage })));
const SubgroupAnalysisPage = lazy(() => import('./components/glossary/SubgroupAnalysisPage').then(m => ({ default: m.SubgroupAnalysisPage })));
const EfficacyPage = lazy(() => import('./components/glossary/EfficacyPage').then(m => ({ default: m.EfficacyPage })));
const SingleBlindedPage = lazy(() => import('./components/glossary/SingleBlindedPage').then(m => ({ default: m.SingleBlindedPage })));
const DoubleBlindedPage = lazy(() => import('./components/glossary/DoubleBlindedPage').then(m => ({ default: m.DoubleBlindedPage })));
const BioavailabilityPage = lazy(() => import('./components/glossary/BioavailabilityPage').then(m => ({ default: m.BioavailabilityPage })));
const InflammationPage = lazy(() => import('./components/glossary/InflammationPage').then(m => ({ default: m.InflammationPage })));
const OxidativeStressPage = lazy(() => import('./components/glossary/OxidativeStressPage').then(m => ({ default: m.OxidativeStressPage })));
const AntioxidantPage = lazy(() => import('./components/glossary/AntioxidantPage').then(m => ({ default: m.AntioxidantPage })));
const InsulinResistancePage = lazy(() => import('./components/glossary/InsulinResistancePage').then(m => ({ default: m.InsulinResistancePage })));
const BiomarkerPage = lazy(() => import('./components/glossary/BiomarkerPage').then(m => ({ default: m.BiomarkerPage })));
const AbsorptionPage = lazy(() => import('./components/glossary/AbsorptionPage').then(m => ({ default: m.AbsorptionPage })));
const MetabolismPage = lazy(() => import('./components/glossary/MetabolismPage').then(m => ({ default: m.MetabolismPage })));
const CardiovascularPage = lazy(() => import('./components/glossary/CardiovascularPage').then(m => ({ default: m.CardiovascularPage })));
const DoseDependentPage = lazy(() => import('./components/glossary/DoseDependentPage').then(m => ({ default: m.DoseDependentPage })));
const HomocysteinePage = lazy(() => import('./components/glossary/HomocysteinePage').then(m => ({ default: m.HomocysteinePage })));
const BoneDensityPage = lazy(() => import('./components/glossary/BoneDensityPage').then(m => ({ default: m.BoneDensityPage })));
const GlycemicControlPage = lazy(() => import('./components/glossary/GlycemicControlPage').then(m => ({ default: m.GlycemicControlPage })));
const CognitiveFunctionPage = lazy(() => import('./components/glossary/CognitiveFunction').then(m => ({ default: m.CognitiveFunctionPage })));
const TriglyceridesPage = lazy(() => import('./components/glossary/TriglyceridesPage').then(m => ({ default: m.TriglyceridesPage })));
const CollagenPage = lazy(() => import('./components/glossary/CollagenPage').then(m => ({ default: m.CollagenPage })));
const CortisolPage = lazy(() => import('./components/glossary/CortisolPage').then(m => ({ default: m.CortisolPage })));
const ThyroidFunctionPage = lazy(() => import('./components/glossary/ThyroidFunctionPage').then(m => ({ default: m.ThyroidFunctionPage })));
const GutMicrobiomePage = lazy(() => import('./components/glossary/GutMicrobiomePage').then(m => ({ default: m.GutMicrobiomePage })));
const ImmuneSystemPage = lazy(() => import('./components/glossary/ImmuneSystemPage').then(m => ({ default: m.ImmuneSystemPage })));
const MuscleProteinSynthesisPage = lazy(() => import('./components/glossary/MuscleProteinSynthesisPage').then(m => ({ default: m.MuscleProteinSynthesisPage })));
const NeurotransmitterPage = lazy(() => import('./components/glossary/NeurotransmitterPage').then(m => ({ default: m.NeurotransmitterPage })));
const ElectrolytesPage = lazy(() => import('./components/glossary/ElectrolytesPage').then(m => ({ default: m.ElectrolytesPage })));
const JointHealthPage = lazy(() => import('./components/glossary/JointHealthPage').then(m => ({ default: m.JointHealthPage })));
const SleepQualityPage = lazy(() => import('./components/glossary/SleepQualityPage').then(m => ({ default: m.SleepQualityPage })));
const MitochondriaPage = lazy(() => import('./components/glossary/MitochondriaPage').then(m => ({ default: m.MitochondriaPage })));
const ProteinPage = lazy(() => import('./components/glossary/ProteinPage').then(m => ({ default: m.ProteinPage })));
const VitaminDeficiencyPage = lazy(() => import('./components/glossary/VitaminDeficiencyPage').then(m => ({ default: m.VitaminDeficiencyPage })));
const AdaptogenPage = lazy(() => import('./components/glossary/AdaptogenPage').then(m => ({ default: m.AdaptogenPage })));
const GRADEPage = lazy(() => import('./components/glossary/GRADEPage').then(m => ({ default: m.GRADEPage })));
const SMDPage = lazy(() => import('./components/glossary/SMDPage').then(m => ({ default: m.SMDPage })));
const HedgesgPage = lazy(() => import('./components/glossary/HedgesgPage').then(m => ({ default: m.HedgesgPage })));
const EPAPage = lazy(() => import('./components/glossary/EPAPage').then(m => ({ default: m.EPAPage })));
const DHAPage = lazy(() => import('./components/glossary/DHAPage').then(m => ({ default: m.DHAPage })));
const Omega3Page = lazy(() => import('./components/glossary/Omega3Page').then(m => ({ default: m.Omega3Page })));
const BloodGlucosePage = lazy(() => import('./components/glossary/BloodGlucosePage').then(m => ({ default: m.BloodGlucosePage })));
const BloodPressurePage = lazy(() => import('./components/glossary/BloodPressurePage').then(m => ({ default: m.BloodPressurePage })));
const ProteinSynthesisPage = lazy(() => import('./components/glossary/ProteinSynthesisPage').then(m => ({ default: m.ProteinSynthesisPage })));
const GlucoseMetabolismPage = lazy(() => import('./components/glossary/GlucoseMetabolismPage').then(m => ({ default: m.GlucoseMetabolismPage })));
const SystolicPage = lazy(() => import('./components/glossary/SystolicPage').then(m => ({ default: m.SystolicPage })));
const DiastolicPage = lazy(() => import('./components/glossary/DiastolicPage').then(m => ({ default: m.DiastolicPage })));
const NormotensivePage = lazy(() => import('./components/glossary/NormotensivePage').then(m => ({ default: m.NormotensivePage })));
const HypertensivePage = lazy(() => import('./components/glossary/HypertensivePage').then(m => ({ default: m.HypertensivePage })));
const MacromineralPage = lazy(() => import('./components/glossary/MacromineralPage').then(m => ({ default: m.MacromineralPage })));
const MineralPage = lazy(() => import('./components/glossary/MineralPage').then(m => ({ default: m.MineralPage })));
const PMSPage = lazy(() => import('./components/glossary/PMSPage').then(m => ({ default: m.PMSPage })));
const PreeclampsiaPage = lazy(() => import('./components/glossary/PreeclampsiaPage').then(m => ({ default: m.PreeclampsiaPage })));
const OsteoporosisPage = lazy(() => import('./components/glossary/OsteoporosisPage').then(m => ({ default: m.OsteoporosisPage })));
const HydrolyzedPage = lazy(() => import('./components/glossary/HydrolyzedPage').then(m => ({ default: m.HydrolyzedPage })));
const GlycinePage = lazy(() => import('./components/glossary/GlycinePage').then(m => ({ default: m.GlycinePage })));
const ProlinePage = lazy(() => import('./components/glossary/ProlinePage').then(m => ({ default: m.ProlinePage })));
const HydroxyprolinePage = lazy(() => import('./components/glossary/HydroxyprolinePage').then(m => ({ default: m.HydroxyprolinePage })));
const AnemiaPage = lazy(() => import('./components/glossary/AnemiaPage').then(m => ({ default: m.AnemiaPage })));
const ATPPage = lazy(() => import('./components/glossary/ATPPage').then(m => ({ default: m.ATPPage })));
const PEDroPage = lazy(() => import('./components/glossary/PEDroPage').then(m => ({ default: m.PEDroPage })));
const HemoglobinPage = lazy(() => import('./components/glossary/HemoglobinPage').then(m => ({ default: m.HemoglobinPage })));
const MyoglobinPage = lazy(() => import('./components/glossary/MyoglobinPage').then(m => ({ default: m.MyoglobinPage })));
const RRPage = lazy(() => import('./components/glossary/RRPage').then(m => ({ default: m.RRPage })));
const ORPage = lazy(() => import('./components/glossary/ORPage').then(m => ({ default: m.ORPage })));
const FMDPage = lazy(() => import('./components/glossary/FMDPage').then(m => ({ default: m.FMDPage })));
const WMDPage = lazy(() => import('./components/glossary/WMDPage').then(m => ({ default: m.WMDPage })));
const IL6Page = lazy(() => import('./components/glossary/IL6Page').then(m => ({ default: m.IL6Page })));
const TACPage = lazy(() => import('./components/glossary/TACPage').then(m => ({ default: m.TACPage })));
const FibrinogenPage = lazy(() => import('./components/glossary/FibrinogenPage').then(m => ({ default: m.FibrinogenPage })));
const IL1Page = lazy(() => import('./components/glossary/IL1Page').then(m => ({ default: m.IL1Page })));
const TNFAlphaPage = lazy(() => import('./components/glossary/TNFAlphaPage').then(m => ({ default: m.TNFAlphaPage })));
const MDAPage = lazy(() => import('./components/glossary/MDAPage').then(m => ({ default: m.MDAPage })));
const GlutathionePage = lazy(() => import('./components/glossary/GlutathionePage').then(m => ({ default: m.GlutathionePage })));
const FODMAPPage = lazy(() => import('./components/glossary/FODMAPPage').then(m => ({ default: m.FODMAPPage })));
const IBSPage = lazy(() => import('./components/glossary/IBSPage').then(m => ({ default: m.IBSPage })));
const SIBOPage = lazy(() => import('./components/glossary/SIBOPage').then(m => ({ default: m.SIBOPage })));
const GOSPage = lazy(() => import('./components/glossary/GOSPage').then(m => ({ default: m.GOSPage })));
const InulinTypeFructansPage = lazy(() => import('./components/glossary/InulinTypeFructansPage').then(m => ({ default: m.InulinTypeFructansPage })));
const GLP1Page = lazy(() => import('./components/glossary/GLP1Page').then(m => ({ default: m.GLP1Page })));
const PYYPage = lazy(() => import('./components/glossary/PYYPage').then(m => ({ default: m.PYYPage })));
const ARRPage = lazy(() => import('./components/glossary/ARRPage').then(m => ({ default: m.ARRPage })));
const CIPage = lazy(() => import('./components/glossary/CIPage').then(m => ({ default: m.CIPage })));
const HbA1cPage = lazy(() => import('./components/glossary/HbA1cPage').then(m => ({ default: m.HbA1cPage })));
const CRPPage = lazy(() => import('./components/glossary/CRPPage').then(m => ({ default: m.CRPPage })));
const LDLCholesterolPage = lazy(() => import('./components/glossary/LDLCholesterolPage').then(m => ({ default: m.LDLCholesterolPage })));
const HDLCholesterolPage = lazy(() => import('./components/glossary/HDLCholesterolPage').then(m => ({ default: m.HDLCholesterolPage })));
const SCFAPage = lazy(() => import('./components/glossary/SCFAPage').then(m => ({ default: m.SCFAPage })));
const StandardizedExtractPage = lazy(() => import('./components/glossary/StandardizedExtractPage').then(m => ({ default: m.StandardizedExtractPage })));
const ThirdPartyTestingPage = lazy(() => import('./components/glossary/ThirdPartyTestingPage').then(m => ({ default: m.ThirdPartyTestingPage })));
const ChelatedPage = lazy(() => import('./components/glossary/ChelatedPage').then(m => ({ default: m.ChelatedPage })));
const MicronizedPage = lazy(() => import('./components/glossary/MicronizedPage').then(m => ({ default: m.MicronizedPage })));
const TherapeuticDosePage = lazy(() => import('./components/glossary/TherapeuticDosePage').then(m => ({ default: m.TherapeuticDosePage })));
const AdverseEffectsPage = lazy(() => import('./components/glossary/AdverseEffectsPage').then(m => ({ default: m.AdverseEffectsPage })));
const ContraindicationsPage = lazy(() => import('./components/glossary/ContraindicationsPage').then(m => ({ default: m.ContraindicationsPage })));
const DrugInteractionsPage = lazy(() => import('./components/glossary/DrugInteractionsPage').then(m => ({ default: m.DrugInteractionsPage })));
const SublingualPage = lazy(() => import('./components/glossary/SublingualPage').then(m => ({ default: m.SublingualPage })));
const MetabolicSyndromePage = lazy(() => import('./components/glossary/MetabolicSyndromePage').then(m => ({ default: m.default })));
const HOMAIRPage = lazy(() => import('./components/glossary/HOMAIRPage').then(m => ({ default: m.default })));
const AtherosclerosisPage = lazy(() => import('./components/glossary/AtherosclerosisPage').then(m => ({ default: m.AtherosclerosisPage })));
const PancreatitisPage = lazy(() => import('./components/glossary/PancreatitisPage').then(m => ({ default: m.PancreatitisPage })));
const RheumatoidArthritisPage = lazy(() => import('./components/glossary/RheumatoidArthritisPage').then(m => ({ default: m.RheumatoidArthritisPage })));
const UlcerativeColitisPage = lazy(() => import('./components/glossary/UlcerativeColitisPage').then(m => ({ default: m.UlcerativeColitisPage })));
const PrediabetesPage = lazy(() => import('./components/glossary/PrediabetesPage').then(m => ({ default: m.PrediabetesPage })));
const HyperglycemiaPage = lazy(() => import('./components/glossary/HyperglycemiaPage').then(m => ({ default: m.HyperglycemiaPage })));
const RicketsPage = lazy(() => import('./components/glossary/RicketsPage').then(m => ({ default: m.RicketsPage })));
const OsteomalachPage = lazy(() => import('./components/glossary/OsteomalachPage').then(m => ({ default: m.OsteomalachPage })));
const ALAPage = lazy(() => import('./components/glossary/ALAPage').then(m => ({ default: m.ALAPage })));
const AcetatePage = lazy(() => import('./components/glossary/AcetatePage').then(m => ({ default: m.AcetatePage })));
const ButyratePage = lazy(() => import('./components/glossary/ButyratePage').then(m => ({ default: m.ButyratePage })));
const PropionatePage = lazy(() => import('./components/glossary/PropionatePage').then(m => ({ default: m.PropionatePage })));
const LeucinePage = lazy(() => import('./components/glossary/LeucinePage').then(m => ({ default: m.LeucinePage })));
const IsoleucinePage = lazy(() => import('./components/glossary/IsoleucinePage').then(m => ({ default: m.IsoleucinePage })));
const ValinePage = lazy(() => import('./components/glossary/ValinePage').then(m => ({ default: m.ValinePage })));
const CreatineKinasePage = lazy(() => import('./components/glossary/CreatineKinasePage').then(m => ({ default: m.CreatineKinasePage })));
const PhosphocreatinePage = lazy(() => import('./components/glossary/PhosphocreatinePage').then(m => ({ default: m.PhosphocreatinePage })));
const EicosanoidsPage = lazy(() => import('./components/glossary/EicosanoidsPage').then(m => ({ default: m.EicosanoidsPage })));
const ResolvinsPage = lazy(() => import('./components/glossary/ResolvinsPage').then(m => ({ default: m.ResolvinsPage })));
const PhytatesPage = lazy(() => import('./components/glossary/PhytatesPage').then(m => ({ default: m.PhytatesPage })));
const OxalatesPage = lazy(() => import('./components/glossary/OxalatesPage').then(m => ({ default: m.OxalatesPage })));
const AminoAcidsPage = lazy(() => import('./components/glossary/AminoAcidsPage').then(m => ({ default: m.AminoAcidsPage })));
const EssentialAminoAcidsPage = lazy(() => import('./components/glossary/EssentialAminoAcidsPage').then(m => ({ default: m.EssentialAminoAcidsPage })));
const BMIPage = lazy(() => import('./components/glossary/BMIPage').then(m => ({ default: m.BMIPage })));
const ObservationalStudyPage = lazy(() => import('./components/glossary/ObservationalStudyPage').then(m => ({ default: m.ObservationalStudyPage })));
const CohortStudyPage = lazy(() => import('./components/glossary/CohortStudyPage').then(m => ({ default: m.CohortStudyPage })));
const CrossSectionalStudyPage = lazy(() => import('./components/glossary/CrossSectionalStudyPage').then(m => ({ default: m.CrossSectionalStudyPage })));
const SystematicReviewPage = lazy(() => import('./components/glossary/SystematicReviewPage').then(m => ({ default: m.SystematicReviewPage })));
const PharmacokineticsPage = lazy(() => import('./components/glossary/PharmacokineticsPage').then(m => ({ default: m.PharmacokineticsPage })));
const NFkBPage = lazy(() => import('./components/glossary/NFkBPage').then(m => ({ default: m.NFkBPage })));
const Nrf2Page = lazy(() => import('./components/glossary/Nrf2Page').then(m => ({ default: m.Nrf2Page })));
const VLDLPage = lazy(() => import('./components/glossary/VLDLPage').then(m => ({ default: m.VLDLPage })));
const FerrousIronPage = lazy(() => import('./components/glossary/FerrousIronPage').then(m => ({ default: m.FerrousIronPage })));
const FerricIronPage = lazy(() => import('./components/glossary/FerricIronPage').then(m => ({ default: m.FerricIronPage })));
const AkkermansiaPage = lazy(() => import('./components/glossary/AkkermansiaPage').then(m => ({ default: m.AkkermansiaPage })));
const AnabolicResistancePage = lazy(() => import('./components/glossary/AnabolicResistancePage').then(m => ({ default: m.AnabolicResistancePage })));
const ArachidonicAcidPage = lazy(() => import('./components/glossary/ArachidonicAcidPage').then(m => ({ default: m.ArachidonicAcidPage })));
const BacteroidesPage = lazy(() => import('./components/glossary/BacteroidesPage').then(m => ({ default: m.BacteroidesPage })));
const BetaCarotenePage = lazy(() => import('./components/glossary/BetaCarotenePage').then(m => ({ default: m.BetaCarotenePage })));
const BifidobacteriumPage = lazy(() => import('./components/glossary/BifidobacteriumPage').then(m => ({ default: m.BifidobacteriumPage })));
const CalciumCarbonatePage = lazy(() => import('./components/glossary/CalciumCarbonatePage').then(m => ({ default: m.CalciumCarbonatePage })));
const CalciumCitratePage = lazy(() => import('./components/glossary/CalciumCitratePage').then(m => ({ default: m.CalciumCitratePage })));
const CatalasePage = lazy(() => import('./components/glossary/CatalasePage').then(m => ({ default: m.CatalasePage })));
const ChylomicronsPage = lazy(() => import('./components/glossary/ChylomicronsPage').then(m => ({ default: m.ChylomicronsPage })));
const ColonocytesPage = lazy(() => import('./components/glossary/ColonocytesPage').then(m => ({ default: m.ColonocytesPage })));
const DOMSPage = lazy(() => import('./components/glossary/DOMSPage').then(m => ({ default: m.DOMSPage })));
const DeficiencyPage = lazy(() => import('./components/glossary/DeficiencyPage').then(m => ({ default: m.DeficiencyPage })));
const EffectSizePage = lazy(() => import('./components/glossary/EffectSizePage').then(m => ({ default: m.EffectSizePage })));
const ESRPage = lazy(() => import('./components/glossary/ESRPage').then(m => ({ default: m.ESRPage })));
const EightOHdGPage = lazy(() => import('./components/glossary/EightOHdGPage').then(m => ({ default: m.EightOHdGPage })));
const EndotheliumPage = lazy(() => import('./components/glossary/EndotheliumPage').then(m => ({ default: m.EndotheliumPage })));
const EnterocytesPage = lazy(() => import('./components/glossary/EnterocytesPage').then(m => ({ default: m.EnterocytesPage })));
const FOSPage = lazy(() => import('./components/glossary/FOS_Page').then(m => ({ default: m.FOSPage })));
const FaecalibacteriumPage = lazy(() => import('./components/glossary/FaecalibacteriumPage').then(m => ({ default: m.FaecalibacteriumPage })));
const FolicAcidPage = lazy(() => import('./components/glossary/FolicAcidPage').then(m => ({ default: m.FolicAcidPage })));
const FreeRadicalsPage = lazy(() => import('./components/glossary/FreeRadicalsPage').then(m => ({ default: m.FreeRadicalsPage })));
const GlucagonPage = lazy(() => import('./components/glossary/GlucagonPage').then(m => ({ default: m.GlucagonPage })));
const GlutathionePeroxidasePage = lazy(() => import('./components/glossary/GlutathionePeroxidasePage').then(m => ({ default: m.GlutathionePeroxidasePage })));
const HalfLifePage = lazy(() => import('./components/glossary/HalfLifePage').then(m => ({ default: m.HalfLifePage })));
const HemeIronPage = lazy(() => import('./components/glossary/HemeIronPage').then(m => ({ default: m.HemeIronPage })));
const HepaticEncephalopathyPage = lazy(() => import('./components/glossary/HepaticEncephalopathyPage').then(m => ({ default: m.HepaticEncephalopathyPage })));
const InsulinPage = lazy(() => import('./components/glossary/InsulinPage').then(m => ({ default: m.InsulinPage })));
const LactobacillusPage = lazy(() => import('./components/glossary/LactobacillusPage').then(m => ({ default: m.LactobacillusPage })));
const LipidPeroxidationPage = lazy(() => import('./components/glossary/LipidPeroxidationPage').then(m => ({ default: m.LipidPeroxidationPage })));
const LoadingPhasePage = lazy(() => import('./components/glossary/LoadingPhasePage').then(m => ({ default: m.LoadingPhasePage })));
const LycopenePage = lazy(() => import('./components/glossary/LycopenePage').then(m => ({ default: m.LycopenePage })));
const MagnesiumCitratePage = lazy(() => import('./components/glossary/MagnesiumCitratePage').then(m => ({ default: m.MagnesiumCitratePage })));
const MagnesiumOxidePage = lazy(() => import('./components/glossary/MagnesiumOxidePage').then(m => ({ default: m.MagnesiumOxidePage })));
const MaintenanceDosePage = lazy(() => import('./components/glossary/MaintenanceDosePage').then(m => ({ default: m.MaintenanceDosePage })));
const MethylcobalaminPage = lazy(() => import('./components/glossary/MethylcobalaminPage').then(m => ({ default: m.MethylcobalaminPage })));
const MethylfolatePage = lazy(() => import('./components/glossary/MethylfolatePage').then(m => ({ default: m.MethylfolatePage })));
const mTORPage = lazy(() => import('./components/glossary/mTORPage').then(m => ({ default: m.mTORPage })));
const NitricOxidePage = lazy(() => import('./components/glossary/NitricOxidePage').then(m => ({ default: m.NitricOxidePage })));
const NonHemeIronPage = lazy(() => import('./components/glossary/NonHemeIronPage').then(m => ({ default: m.NonHemeIronPage })));
const OxidativeDamagePage = lazy(() => import('./components/glossary/OxidativeDamagePage').then(m => ({ default: m.OxidativeDamagePage })));
const OxidizedLDLPage = lazy(() => import('./components/glossary/OxidizedLDLPage').then(m => ({ default: m.OxidizedLDLPage })));
const PlasmaPage = lazy(() => import('./components/glossary/PlasmaPage').then(m => ({ default: m.PlasmaPage })));
const SatietyPage = lazy(() => import('./components/glossary/SatietyPage').then(m => ({ default: m.SatietyPage })));
const SaturationPage = lazy(() => import('./components/glossary/SaturationPage').then(m => ({ default: m.SaturationPage })));
const Serum25OHDPage = lazy(() => import('./components/glossary/Serum25OHDPage').then(m => ({ default: m.Serum25OHDPage })));
const SerumPage = lazy(() => import('./components/glossary/SerumPage').then(m => ({ default: m.SerumPage })));
const SynergisticEffectPage = lazy(() => import('./components/glossary/SynergisticEffectPage').then(m => ({ default: m.SynergisticEffectPage })));
const TolerableUpperIntakeLevelPage = lazy(() => import('./components/glossary/TolerableUpperIntakeLevelPage').then(m => ({ default: m.TolerableUpperIntakeLevelPage })));

// Loading fallback component
function PageLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[var(--color-primary-dark)] border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('landing');

  // Scroll to top whenever the page changes
  useEffect(() => {
    // Force scroll to top immediately - multiple methods for reliability
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also scroll after delays to catch lazy-loaded content
    const timeoutId1 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    
    const timeoutId2 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [currentPage]);

  // PERFORMANCE: Wrap navigation handler in useCallback to prevent re-creation on every render
  // This ensures child components' useMemo dependencies remain stable
  const navigateTo = useCallback((page: PageKey) => {
    setCurrentPage(page);
  }, []);

  // Render the current page component
  const renderPage = () => {
    if (currentPage === 'landing') {
      return <LandingPage onNavigate={navigateTo} />;
    }

    // V2 Pages
    if (currentPage === 'ashwagandhav2') return <AshwagandhaPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'calciumv2') return <CalciumPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'collagenpeptidesv2') return <CollagenPeptidesPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'creatinev2') return <CreatinePageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'ironv2') return <IronPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'magnesiumv2') return <MagnesiumPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'omega3v2') return <Omega3PageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'prebioticsv2') return <PrebioticsPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'probioticsv2') return <ProbioticsPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'sulforaphanev2') return <SulforaphanePageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'vitamincv2') return <VitaminCPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'vitamindv2') return <VitaminDPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'multivitaminv2') return <MultivitaminPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'wheyproteinv2') return <WheyProteinPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'caseinproteinv2') return <CaseinProteinPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'bcaasv2') return <BCAAsPageNewV2 onNavigate={navigateTo} />;
    if (currentPage === 'curcuminv2') return <CurcuminPageNewV2 onNavigate={navigateTo} />;

    // Static Pages
    if (currentPage === 'about') return <AboutPage />;
    if (currentPage === 'contact') return <ContactPage />;
    if (currentPage === 'cookies') return <CookiePolicyPage />;
    if (currentPage === 'impressum') return <ImpressumPage />;
    if (currentPage === 'knowledgebase') return <KnowledgebasePage onNavigate={navigateTo} />;
    if (currentPage === 'glossary') return <GlossaryPage onNavigate={navigateTo} />;
    if (currentPage === 'legal') return <LegalDisclaimerPage />;
    if (currentPage === 'privacy') return <PrivacyPolicyPage />;
    if (currentPage === 'terms') return <TermsOfServicePage />;
    if (currentPage === 'methodology') return <MethodologyPage />;

    // Glossary Pages
    if (currentPage === 'rct') return <RCTPage onNavigate={navigateTo} />;
    if (currentPage === 'metaanalysis') return <MetaAnalysisPage onNavigate={navigateTo} />;
    if (currentPage === 'empiricalevidence') return <EmpiricalEvidencePage onNavigate={navigateTo} />;
    if (currentPage === 'anecdotalevidence') return <AnecdotalEvidencePage onNavigate={navigateTo} />;
    if (currentPage === 'placebo') return <PlaceboPage onNavigate={navigateTo} />;
    if (currentPage === 'peerreviewed') return <PeerReviewedPage onNavigate={navigateTo} />;
    if (currentPage === 'statisticalsignificance') return <StatisticalSignificancePage onNavigate={navigateTo} />;
    if (currentPage === 'clinicalsignificance') return <ClinicalSignificancePage onNavigate={navigateTo} />;
    if (currentPage === 'subgroupanalysis') return <SubgroupAnalysisPage onNavigate={navigateTo} />;
    if (currentPage === 'efficacy') return <EfficacyPage onNavigate={navigateTo} />;
    if (currentPage === 'singleblinded') return <SingleBlindedPage onNavigate={navigateTo} />;
    if (currentPage === 'doubleblinded') return <DoubleBlindedPage onNavigate={navigateTo} />;
    if (currentPage === 'bioavailability') return <BioavailabilityPage onNavigate={navigateTo} />;
    if (currentPage === 'inflammation') return <InflammationPage onNavigate={navigateTo} />;
    if (currentPage === 'oxidativestress') return <OxidativeStressPage onNavigate={navigateTo} />;
    if (currentPage === 'antioxidant') return <AntioxidantPage onNavigate={navigateTo} />;
    if (currentPage === 'insulinresistance') return <InsulinResistancePage onNavigate={navigateTo} />;
    if (currentPage === 'biomarker') return <BiomarkerPage onNavigate={navigateTo} />;
    if (currentPage === 'absorption') return <AbsorptionPage onNavigate={navigateTo} />;
    if (currentPage === 'metabolism') return <MetabolismPage onNavigate={navigateTo} />;
    if (currentPage === 'cardiovascular') return <CardiovascularPage onNavigate={navigateTo} />;
    if (currentPage === 'dosedependent') return <DoseDependentPage onNavigate={navigateTo} />;
    if (currentPage === 'homocysteine') return <HomocysteinePage onNavigate={navigateTo} />;
    if (currentPage === 'bonedensity') return <BoneDensityPage onNavigate={navigateTo} />;
    if (currentPage === 'glycemiccontrol') return <GlycemicControlPage onNavigate={navigateTo} />;
    if (currentPage === 'cognitivefunction') return <CognitiveFunctionPage onNavigate={navigateTo} />;
    if (currentPage === 'anemia') return <AnemiaPage onNavigate={navigateTo} />;
    if (currentPage === 'triglycerides') return <TriglyceridesPage onNavigate={navigateTo} />;
    if (currentPage === 'collagen') return <CollagenPage onNavigate={navigateTo} />;
    if (currentPage === 'cortisol') return <CortisolPage onNavigate={navigateTo} />;
    if (currentPage === 'thyroidfunction') return <ThyroidFunctionPage onNavigate={navigateTo} />;
    if (currentPage === 'gutmicrobiome') return <GutMicrobiomePage onNavigate={navigateTo} />;
    if (currentPage === 'immunesystem') return <ImmuneSystemPage onNavigate={navigateTo} />;
    if (currentPage === 'muscleproteinsynthesis') return <MuscleProteinSynthesisPage onNavigate={navigateTo} />;
    if (currentPage === 'neurotransmitter') return <NeurotransmitterPage onNavigate={navigateTo} />;
    if (currentPage === 'electrolytes') return <ElectrolytesPage onNavigate={navigateTo} />;
    if (currentPage === 'jointhealth') return <JointHealthPage onNavigate={navigateTo} />;
    if (currentPage === 'sleepquality') return <SleepQualityPage onNavigate={navigateTo} />;
    if (currentPage === 'mitochondria') return <MitochondriaPage onNavigate={navigateTo} />;
    if (currentPage === 'protein') return <ProteinPage onNavigate={navigateTo} />;
    if (currentPage === 'vitamindeficiency') return <VitaminDeficiencyPage onNavigate={navigateTo} />;
    if (currentPage === 'adaptogen') return <AdaptogenPage onNavigate={navigateTo} />;
    if (currentPage === 'smd') return <SMDPage onNavigate={navigateTo} />;
    if (currentPage === 'grade') return <GRADEPage onNavigate={navigateTo} />;
    if (currentPage === 'epa') return <EPAPage onNavigate={navigateTo} />;
    if (currentPage === 'dha') return <DHAPage onNavigate={navigateTo} />;
    if (currentPage === 'omega-3') return <Omega3Page onNavigate={navigateTo} />;
    if (currentPage === 'bloodglucose') return <BloodGlucosePage onNavigate={navigateTo} />;
    if (currentPage === 'bloodpressure') return <BloodPressurePage onNavigate={navigateTo} />;
    if (currentPage === 'proteinsynthesis') return <ProteinSynthesisPage onNavigate={navigateTo} />;
    if (currentPage === 'glucosemetabolism') return <GlucoseMetabolismPage onNavigate={navigateTo} />;
    if (currentPage === 'systolic') return <SystolicPage onNavigate={navigateTo} />;
    if (currentPage === 'diastolic') return <DiastolicPage onNavigate={navigateTo} />;
    if (currentPage === 'normotensive') return <NormotensivePage onNavigate={navigateTo} />;
    if (currentPage === 'hypertensive') return <HypertensivePage onNavigate={navigateTo} />;
    if (currentPage === 'macromineral') return <MacromineralPage onNavigate={navigateTo} />;
    if (currentPage === 'mineral') return <MineralPage onNavigate={navigateTo} />;
    if (currentPage === 'pms') return <PMSPage onNavigate={navigateTo} />;
    if (currentPage === 'preeclampsia') return <PreeclampsiaPage onNavigate={navigateTo} />;
    if (currentPage === 'osteoporosis') return <OsteoporosisPage onNavigate={navigateTo} />;
    if (currentPage === 'hydrolyzed') return <HydrolyzedPage onNavigate={navigateTo} />;
    if (currentPage === 'glycine') return <GlycinePage onNavigate={navigateTo} />;
    if (currentPage === 'proline') return <ProlinePage onNavigate={navigateTo} />;
    if (currentPage === 'hydroxyproline') return <HydroxyprolinePage onNavigate={navigateTo} />;
    if (currentPage === 'anemia') return <AnemiaPage onNavigate={navigateTo} />;
    if (currentPage === 'atp') return <ATPPage onNavigate={navigateTo} />;
    if (currentPage === 'pedro') return <PEDroPage onNavigate={navigateTo} />;
    if (currentPage === 'hemoglobin') return <HemoglobinPage onNavigate={navigateTo} />;
    if (currentPage === 'myoglobin') return <MyoglobinPage onNavigate={navigateTo} />;
    if (currentPage === 'rr') return <RRPage onNavigate={navigateTo} />;
    if (currentPage === 'or') return <ORPage onNavigate={navigateTo} />;
    if (currentPage === 'fmd') return <FMDPage onNavigate={navigateTo} />;
    if (currentPage === 'wmd') return <WMDPage onNavigate={navigateTo} />;
    if (currentPage === 'il6') return <IL6Page onNavigate={navigateTo} />;
    if (currentPage === 'tac') return <TACPage onNavigate={navigateTo} />;
    if (currentPage === 'fibrinogen') return <FibrinogenPage onNavigate={navigateTo} />;
    if (currentPage === 'il1') return <IL1Page onNavigate={navigateTo} />;
    if (currentPage === 'tnfalpha') return <TNFAlphaPage onNavigate={navigateTo} />;
    if (currentPage === 'mda') return <MDAPage onNavigate={navigateTo} />;
    if (currentPage === 'glutathione') return <GlutathionePage onNavigate={navigateTo} />;
    if (currentPage === 'fodmap') return <FODMAPPage onNavigate={navigateTo} />;
    if (currentPage === 'ibs') return <IBSPage onNavigate={navigateTo} />;
    if (currentPage === 'sibo') return <SIBOPage onNavigate={navigateTo} />;
    if (currentPage === 'gos') return <GOSPage onNavigate={navigateTo} />;
    if (currentPage === 'inulintypefructans') return <InulinTypeFructansPage onNavigate={navigateTo} />;
    if (currentPage === 'glp1') return <GLP1Page onNavigate={navigateTo} />;
    if (currentPage === 'pyy') return <PYYPage onNavigate={navigateTo} />;
    if (currentPage === 'arr') return <ARRPage onNavigate={navigateTo} />;
    if (currentPage === 'ci') return <CIPage onNavigate={navigateTo} />;
    if (currentPage === 'hba1c') return <HbA1cPage onNavigate={navigateTo} />;
    if (currentPage === 'crp') return <CRPPage onNavigate={navigateTo} />;
    if (currentPage === 'ldlcholesterol') return <LDLCholesterolPage onNavigate={navigateTo} />;
    if (currentPage === 'hdlcholesterol') return <HDLCholesterolPage onNavigate={navigateTo} />;
    if (currentPage === 'scfa') return <SCFAPage onNavigate={navigateTo} />;
    if (currentPage === 'standardizedextract') return <StandardizedExtractPage onNavigate={navigateTo} />;
    if (currentPage === 'thirdpartytesting') return <ThirdPartyTestingPage onNavigate={navigateTo} />;
    if (currentPage === 'chelated') return <ChelatedPage onNavigate={navigateTo} />;
    if (currentPage === 'micronized') return <MicronizedPage onNavigate={navigateTo} />;
    if (currentPage === 'therapeuticdose') return <TherapeuticDosePage onNavigate={navigateTo} />;
    if (currentPage === 'adverseeffects') return <AdverseEffectsPage onNavigate={navigateTo} />;
    if (currentPage === 'contraindications') return <ContraindicationsPage onNavigate={navigateTo} />;
    if (currentPage === 'druginteractions') return <DrugInteractionsPage onNavigate={navigateTo} />;
    if (currentPage === 'sublingual') return <SublingualPage onNavigate={navigateTo} />;
    if (currentPage === 'metabolicsyndrome') return <MetabolicSyndromePage onNavigate={navigateTo} />;
    if (currentPage === 'homa-ir') return <HOMAIRPage onNavigate={navigateTo} />;
    if (currentPage === 'atherosclerosis') return <AtherosclerosisPage onNavigate={navigateTo} />;
    if (currentPage === 'pancreatitis') return <PancreatitisPage onNavigate={navigateTo} />;
    if (currentPage === 'rheumatoidarthritis') return <RheumatoidArthritisPage onNavigate={navigateTo} />;
    if (currentPage === 'ulcerativecolitis') return <UlcerativeColitisPage onNavigate={navigateTo} />;
    if (currentPage === 'prediabetes') return <PrediabetesPage onNavigate={navigateTo} />;
    if (currentPage === 'hyperglycemia') return <HyperglycemiaPage onNavigate={navigateTo} />;
    if (currentPage === 'rickets') return <RicketsPage onNavigate={navigateTo} />;
    if (currentPage === 'osteomalacia') return <OsteomalachPage onNavigate={navigateTo} />;
    if (currentPage === 'ala') return <ALAPage onNavigate={navigateTo} />;
    if (currentPage === 'acetate') return <AcetatePage onNavigate={navigateTo} />;
    if (currentPage === 'butyrate') return <ButyratePage onNavigate={navigateTo} />;
    if (currentPage === 'propionate') return <PropionatePage onNavigate={navigateTo} />;
    if (currentPage === 'leucine') return <LeucinePage onNavigate={navigateTo} />;
    if (currentPage === 'isoleucine') return <IsoleucinePage onNavigate={navigateTo} />;
    if (currentPage === 'valine') return <ValinePage onNavigate={navigateTo} />;
    if (currentPage === 'creatinekinase') return <CreatineKinasePage onNavigate={navigateTo} />;
    if (currentPage === 'phosphocreatine') return <PhosphocreatinePage onNavigate={navigateTo} />;
    if (currentPage === 'eicosanoids') return <EicosanoidsPage onNavigate={navigateTo} />;
    if (currentPage === 'resolvins') return <ResolvinsPage onNavigate={navigateTo} />;
    if (currentPage === 'phytates') return <PhytatesPage onNavigate={navigateTo} />;
    if (currentPage === 'oxalates') return <OxalatesPage onNavigate={navigateTo} />;
    if (currentPage === 'aminoacids') return <AminoAcidsPage onNavigate={navigateTo} />;
    if (currentPage === 'essentialaminoacids') return <EssentialAminoAcidsPage onNavigate={navigateTo} />;
    if (currentPage === 'bmi') return <BMIPage onNavigate={navigateTo} />;
    if (currentPage === 'observationalstudy') return <ObservationalStudyPage onNavigate={navigateTo} />;
    if (currentPage === 'cohortstudy') return <CohortStudyPage onNavigate={navigateTo} />;
    if (currentPage === 'crosssectionalstudy') return <CrossSectionalStudyPage onNavigate={navigateTo} />;
    if (currentPage === 'systematicreview') return <SystematicReviewPage onNavigate={navigateTo} />;
    if (currentPage === 'pharmacokinetics') return <PharmacokineticsPage onNavigate={navigateTo} />;
    if (currentPage === 'nfkb') return <NFkBPage onNavigate={navigateTo} />;
    if (currentPage === 'nrf2') return <Nrf2Page onNavigate={navigateTo} />;
    if (currentPage === 'vldl') return <VLDLPage onNavigate={navigateTo} />;
    if (currentPage === 'ferrousiron') return <FerrousIronPage onNavigate={navigateTo} />;
    if (currentPage === 'ferriciron') return <FerricIronPage onNavigate={navigateTo} />;
    if (currentPage === 'akkermansia') return <AkkermansiaPage />;
    if (currentPage === 'anabolicresistance') return <AnabolicResistancePage onNavigate={navigateTo} />;
    if (currentPage === 'arachidonicacid') return <ArachidonicAcidPage onNavigate={navigateTo} />;
    if (currentPage === 'bacteroides') return <BacteroidesPage onNavigate={navigateTo} />;
    if (currentPage === 'betacarotene') return <BetaCarotenePage onNavigate={navigateTo} />;
    if (currentPage === 'bifidobacterium') return <BifidobacteriumPage onNavigate={navigateTo} />;
    if (currentPage === 'calciumcarbonate') return <CalciumCarbonatePage onNavigate={navigateTo} />;
    if (currentPage === 'calciumcitrate') return <CalciumCitratePage onNavigate={navigateTo} />;
    if (currentPage === 'chylomicrons') return <ChylomicronsPage onNavigate={navigateTo} />;
    if (currentPage === 'colonocytes') return <ColonocytesPage onNavigate={navigateTo} />;
    if (currentPage === 'doms') return <DOMSPage />;
    if (currentPage === 'deficiency') return <DeficiencyPage onNavigate={navigateTo} />;
    if (currentPage === 'esr') return <ESRPage onNavigate={navigateTo} />;
    if (currentPage === '8ohdg') return <EightOHdGPage onNavigate={navigateTo} />;
    if (currentPage === 'endothelium') return <EndotheliumPage onNavigate={navigateTo} />;
    if (currentPage === 'enterocytes') return <EnterocytesPage onNavigate={navigateTo} />;
    if (currentPage === 'fos') return <FOSPage onNavigate={navigateTo} />;
    if (currentPage === 'faecalibacterium') return <FaecalibacteriumPage />;
    if (currentPage === 'folicacid') return <FolicAcidPage onNavigate={navigateTo} />;
    if (currentPage === 'freeradicals') return <FreeRadicalsPage onNavigate={navigateTo} />;
    if (currentPage === 'glucagon') return <GlucagonPage onNavigate={navigateTo} />;
    if (currentPage === 'halflife') return <HalfLifePage onNavigate={navigateTo} />;
    if (currentPage === 'hemeiron') return <HemeIronPage onNavigate={navigateTo} />;
    if (currentPage === 'hepaticencephalopathy') return <HepaticEncephalopathyPage />;
    if (currentPage === 'insulin') return <InsulinPage />;
    if (currentPage === 'lactobacillus') return <LactobacillusPage onNavigate={navigateTo} />;
    if (currentPage === 'lipidperoxidation') return <LipidPeroxidationPage onNavigate={navigateTo} />;
    if (currentPage === 'loadingphase') return <LoadingPhasePage onNavigate={navigateTo} />;
    if (currentPage === 'lycopene') return <LycopenePage onNavigate={navigateTo} />;
    if (currentPage === 'magnesiumcitrate') return <MagnesiumCitratePage onNavigate={navigateTo} />;
    if (currentPage === 'magnesiumoxide') return <MagnesiumOxidePage onNavigate={navigateTo} />;
    if (currentPage === 'maintenancedose') return <MaintenanceDosePage onNavigate={navigateTo} />;
    if (currentPage === 'methylcobalamin') return <MethylcobalaminPage onNavigate={navigateTo} />;
    if (currentPage === 'methylfolate') return <MethylfolatePage onNavigate={navigateTo} />;
    if (currentPage === 'nitricoxide') return <NitricOxidePage onNavigate={navigateTo} />;
    if (currentPage === 'nonhemeiron') return <NonHemeIronPage onNavigate={navigateTo} />;
    if (currentPage === 'oxidativedamage') return <OxidativeDamagePage onNavigate={navigateTo} />;
    if (currentPage === 'oxidizedldl') return <OxidizedLDLPage onNavigate={navigateTo} />;
    if (currentPage === 'plasma') return <PlasmaPage onNavigate={navigateTo} />;
    if (currentPage === 'satiety') return <SatietyPage onNavigate={navigateTo} />;
    if (currentPage === 'saturation') return <SaturationPage onNavigate={navigateTo} />;
    if (currentPage === 'serum25ohd') return <Serum25OHDPage onNavigate={navigateTo} />;
    if (currentPage === 'serum') return <SerumPage onNavigate={navigateTo} />;
    if (currentPage === 'synergisticeffect') return <SynergisticEffectPage onNavigate={navigateTo} />;
    if (currentPage === 'tolerableupperintakelevel') return <TolerableUpperIntakeLevelPage onNavigate={navigateTo} />;

    // Log error only in development
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.error(`No component found for page: ${currentPage}`);
    }
    return <div>Page not found</div>;
  };

  return (
    <ErrorBoundary>
      <AnalyticsProvider googleTagManagerId={(typeof import.meta !== 'undefined' && import.meta.env?.VITE_GTM_ID) || "GTM-NQWRNKFT"}>
        {/* Dynamic SEO Meta Tags - Updates based on current page */}
        <SEOHead 
          {...(currentPage === 'landing' ? pageSEO.home :
              currentPage === 'knowledgebase' ? pageSEO.knowledgebase :
              currentPage === 'glossary' ? pageSEO.glossary :
              currentPage === 'about' ? pageSEO.about :
              currentPage === 'methodology' ? pageSEO.methodology :
              {}
          )}
        />
        
        <div 
          className="bg-background text-foreground flex flex-col min-h-screen" 
          data-name="Knowledgebase//Content Page v0.3" 
          style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}
        >
          {/* Header - persistent across pages, doesn't reload on navigation */}
          {currentPage !== 'landing' && <Header onNavigate={navigateTo} />}
          
          <Suspense fallback={<PageLoadingFallback />} key={currentPage}>
            {renderPage()}
          </Suspense>
          
          {/* Footer - persistent across pages, doesn't reload on navigation */}
          {currentPage !== 'landing' && <Footer onNavigate={navigateTo} />}
        </div>
      </AnalyticsProvider>
    </ErrorBoundary>
  );
}