"use client";

import {
  ExternalLink,
  Database,
  Brain,
  CheckCircle,
  Users,
  FlaskConical,
} from "lucide-react";
import {
  StaticPageTemplate,
  ContentSection,
  CardContent,
  InfoBlock,
} from "@/components/templates/StaticPageTemplate";
import { autolinkGlossaryContent } from "@/lib/glossaryAutolink";

export function MethodologyPage() {
  return (
    <StaticPageTemplate
      title="Research Methodology - Evidence-Based Supplement Guide"
      description="Learn about our rigorous research methodology for evaluating supplements. We combine academic research precision with modern technology to deliver reliable, evidence-based supplement information."
      keywords="supplement research methodology, evidence-based research, clinical studies, supplement evaluation, scientific research process"
      heroTitle="Our Methodology"
      heroSubtitle="A data-driven approach that prioritizes factual accuracy over speed."
      heroBackground="tertiary"
    >
      {/* Introduction */}
      <ContentSection background="tertiary">
        <CardContent>
          <div className="space-y-6">
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              At suppl.me, we believe that evidence-based decisions require
              rigorous, systematic research. We've built a methodology that
              combines the precision of academic research with the efficiency of
              modern technology to deliver you the most reliable supplement
              information available.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              This is the trusted engine that enables us to provide you with all
              the information you need to make the decision that is right for
              YOU.
            </p>
          </div>
        </CardContent>
      </ContentSection>

      {/* Methodology Details */}
      <ContentSection
        title="How We Build Our Knowledge Base"
        background="secondary"
      >
        <div className="flex flex-col gap-8">
          {/* Systematic Review */}
          <InfoBlock
            icon={FlaskConical}
            title="Systematic Review Methodology"
            description={autolinkGlossaryContent(
              "We identify all randomized controlled trials (RCTs) for each specific supplement and use case. This systematic approach ensures we don't cherry-pick studies or miss important evidence that could change the conclusions."
            )}
          >
            <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px]">
              {autolinkGlossaryContent(
                "Every claim on suppl.me is traceable back to peer-reviewed research, giving you confidence in the information you're using to make your supplement decisions."
              )}
            </p>
          </InfoBlock>

          {/* Research Databases */}
          <InfoBlock
            icon={Database}
            title="Comprehensive Research Databases"
            description="Our research team systematically searches the world's leading medical research databases to ensure complete coverage of the scientific literature:"
          >
            <div className="space-y-3">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-['Lato',sans-serif] font-normal leading-6 text-primary text-[14px] hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                PubMed (National Institutes of Health)
              </a>
              <a
                href="https://clinicaltrials.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-['Lato',sans-serif] font-normal leading-6 text-primary text-[14px] hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                ClinicalTrials.gov
              </a>
            </div>
          </InfoBlock>

          {/* AI-Powered Extraction */}
          <InfoBlock
            icon={Brain}
            title="AI-Powered Data Extraction"
            description="We leverage Machine Learning and Large Language Models to extract data from research papers efficiently and accurately. This technology allows us to process vast amounts of scientific literature while maintaining the precision needed for medical research."
          >
            <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px]">
              Our AI systems are specifically trained to identify key outcome
              measures, dosages, study designs, and effect sizes—the critical
              data points you need to make informed supplement decisions.
            </p>
          </InfoBlock>

          {/* Human Verification */}
          <InfoBlock
            icon={Users}
            title="Human-in-the-Loop Verification"
            description="While AI accelerates our research process, human expertise ensures accuracy. All results extracted by our machine learning systems are verified in duplicate and independently by two trained researchers."
          >
            <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px]">
              This "human-in-the-loop" approach combines the speed of automation
              with the critical thinking and domain expertise that only human
              researchers can provide. If our two independent reviewers
              disagree, a third senior researcher adjudicates to ensure
              accuracy.
            </p>
          </InfoBlock>

          {/* Quality Assurance */}
          <InfoBlock
            icon={CheckCircle}
            title="Continuous Quality Improvement"
            description="Our methodology is not static. We continuously refine our processes based on the latest best practices in systematic review methodology and emerging research technologies."
          >
            <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px]">
              As new studies are published, we update our knowledge base to
              reflect the current state of evidence. When you use suppl.me,
              you're getting insights based on the most up-to-date scientific
              consensus.
            </p>
          </InfoBlock>
        </div>
      </ContentSection>

      {/* Why This Matters */}
      <ContentSection background="tertiary">
        <CardContent>
          <h2 className="font-['Lora',serif] leading-10 text-primary text-[28px] md:text-[32px] mb-6">
            Why This Matters to You
          </h2>
          <div className="space-y-6">
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              In the supplement industry, claims are easy to make but hard to
              verify. Marketing materials often cite individual studies while
              ignoring contradictory evidence. Influencers promote products
              based on personal experience rather than systematic research.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              We believe you deserve better. Our rigorous methodology means that
              when we assign a research grade or make a recommendation, it's
              based on the complete body of evidence—not just the studies that
              support a particular narrative.
            </p>
            <p className="font-['Lato',sans-serif] font-normal leading-7 text-foreground text-[16px] md:text-[18px]">
              This systematic approach takes time and resources, but we believe
              it's the only way to earn your trust. Your health decisions are
              too important for shortcuts.
            </p>
          </div>
        </CardContent>
      </ContentSection>
    </StaticPageTemplate>
  );
}
