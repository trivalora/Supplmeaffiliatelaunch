import { ExternalLink, Database, Brain, CheckCircle, Users, FlaskConical } from 'lucide-react';
import { SEOHead } from './SEOHead';

export function MethodologyPage() {
  return (
    <>
      <SEOHead 
        title="Research Methodology - Evidence-Based Supplement Guide"
        description="Learn about our rigorous research methodology for evaluating supplements. We combine academic research precision with modern technology to deliver reliable, evidence-based supplement information."
        keywords="supplement research methodology, evidence-based research, clinical studies, supplement evaluation, scientific research process"
      />
      <div className="bg-tertiary flex flex-col w-full min-h-screen" data-page-content>
        {/* Hero Section */}
        <div id="hero" className="bg-tertiary">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
            <div className="bg-card rounded-[14px] border border-secondary p-6 md:p-10">
              <h1 className="font-['Lora',_serif] leading-[48px] text-primary text-[32px] md:text-[36px] mb-4">
                Our Methodology
              </h1>
              <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[18px] md:text-[20px] mb-8">
                A data-driven approach that prioritizes factual accuracy over speed.
              </p>
              <div className="space-y-6">
                <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[16px] md:text-[18px]">
                  At suppl.me, we believe that evidence-based decisions require rigorous, systematic research. We've built a methodology that combines the precision of academic research with the efficiency of modern technology to deliver you the most reliable supplement information available.
                </p>
                <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[16px] md:text-[18px]">
                  This is the trusted engine that enables us to provide you with all the information you need to make the decision that is right for YOU.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Details Section */}
        <div className="bg-secondary w-full">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
            <h2 className="font-['Lora',_serif] leading-[40px] text-primary text-[28px] md:text-[32px] mb-12">
              How We Build Our Knowledge Base
            </h2>
            
            <div className="flex flex-col gap-8">
              {/* Systematic Review Methodology */}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-16 h-16 text-primary" />
                </div>
                <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
                  <h3 className="font-['Lora',_serif] leading-[28px] text-primary text-[20px] mb-3">
                    Systematic Review Methodology
                  </h3>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px] mb-4">
                    We identify all randomized controlled trials (RCTs) for each specific supplement and use case. This systematic approach ensures we don't cherry-pick studies or miss important evidence that could change the conclusions.
                  </p>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px]">
                    Every claim on suppl.me is traceable back to peer-reviewed research, giving you confidence in the information you're using to make your supplement decisions.
                  </p>
                </div>
              </div>

              {/* Comprehensive Databases */}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <Database className="w-16 h-16 text-primary" />
                </div>
                <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
                  <h3 className="font-['Lora',_serif] leading-[28px] text-primary text-[20px] mb-3">
                    Comprehensive Research Databases
                  </h3>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px] mb-4">
                    Our research team systematically searches the world's leading medical research databases to ensure complete coverage of the scientific literature:
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="https://pubmed.ncbi.nlm.nih.gov/" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="flex items-center gap-2 font-['Lato',_sans-serif] font-normal leading-[24px] text-primary text-[14px] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      PubMed (National Institutes of Health)
                    </a>
                    <a 
                      href="https://clinicaltrials.gov/" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="flex items-center gap-2 font-['Lato',_sans-serif] font-normal leading-[24px] text-primary text-[14px] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ClinicalTrials.gov
                    </a>
                  </div>
                </div>
              </div>

              {/* ML and AI Extraction */}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-primary" />
                </div>
                <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
                  <h3 className="font-['Lora',_serif] leading-[28px] text-primary text-[20px] mb-3">
                    AI-Powered Data Extraction
                  </h3>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px] mb-4">
                    We leverage Machine Learning and Large Language Models to extract data from research papers efficiently and accurately. This technology allows us to process vast amounts of scientific literature while maintaining the precision needed for medical research.
                  </p>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px]">
                    Our AI systems are specifically trained to identify key outcome measures, dosages, study designs, and effect sizes—the critical data points you need to make informed supplement decisions.
                  </p>
                </div>
              </div>

              {/* Human Verification */}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
                  <h3 className="font-['Lora',_serif] leading-[28px] text-primary text-[20px] mb-3">
                    Human-in-the-Loop Verification
                  </h3>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px] mb-4">
                    While AI accelerates our research process, human expertise ensures accuracy. All results extracted by our machine learning systems are verified in duplicate and independently by two trained researchers.
                  </p>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px]">
                    This "human-in-the-loop" approach combines the speed of automation with the critical thinking and domain expertise that only human researchers can provide. If our two independent reviewers disagree, a third senior researcher adjudicates to ensure accuracy.
                  </p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
                <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
                  <h3 className="font-['Lora',_serif] leading-[28px] text-primary text-[20px] mb-3">
                    Continuous Quality Improvement
                  </h3>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px] mb-4">
                    Our methodology is not static. We continuously refine our processes based on the latest best practices in systematic review methodology and emerging research technologies.
                  </p>
                  <p className="font-['Lato',_sans-serif] font-normal leading-[24px] text-foreground text-[14px]">
                    As new studies are published, we update our knowledge base to reflect the current state of evidence. When you use suppl.me, you're getting insights based on the most up-to-date scientific consensus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="bg-tertiary w-full">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
            <div className="bg-card rounded-[14px] border border-secondary p-6 md:p-10">
              <h2 className="font-['Lora',_serif] leading-[40px] text-primary text-[28px] md:text-[32px] mb-6">
                Why This Matters to You
              </h2>
              <div className="space-y-6">
                <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[16px] md:text-[18px]">
                  In the supplement industry, claims are easy to make but hard to verify. Marketing materials often cite individual studies while ignoring contradictory evidence. Influencers promote products based on personal experience rather than systematic research.
                </p>
                <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[16px] md:text-[18px]">
                  We believe you deserve better. Our rigorous methodology means that when we assign a research grade or make a recommendation, it's based on the complete body of evidence—not just the studies that support a particular narrative.
                </p>
                <p className="font-['Lato',_sans-serif] font-normal leading-[28px] text-foreground text-[16px] md:text-[18px]">
                  This systematic approach takes time and resources, but we believe it's the only way to earn your trust. Your health decisions are too important for shortcuts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}