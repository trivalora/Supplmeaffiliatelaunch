import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function SystematicReviewPage() {
  const content = {
    term: "Systematic Review",
    definition: "A comprehensive, structured research methodology that systematically identifies, evaluates, and synthesizes all available evidence on a specific research question using predefined, transparent, and reproducible methods.",
    
    expandedExplanation: (
      <>
        <p>A systematic review is considered one of the highest levels of evidence in medical and scientific research. Unlike narrative reviews that may be subjective, systematic reviews follow rigorous protocols to minimize bias and provide reliable conclusions.</p>
        
        <p><strong className="glossary-highlight">Key Characteristics:</strong></p>
        <ul className="glossary-list">
          <li><strong>Predefined Protocol:</strong> Research questions, inclusion/exclusion criteria, and analysis methods are established before the review begins</li>
          <li><strong>Comprehensive Search:</strong> Multiple databases and sources are systematically searched to find all relevant studies</li>
          <li><strong>Quality Assessment:</strong> Each included study is critically appraised for methodological quality and risk of bias</li>
          <li><strong>Transparent Reporting:</strong> All methods, decisions, and findings are clearly documented and reproducible</li>
          <li><strong>Objective Synthesis:</strong> Results are combined systematically, often using statistical methods (meta-analysis)</li>
        </ul>

        <p><strong className="glossary-highlight">The Systematic Review Process:</strong></p>
        <ul className="glossary-list">
          <li><strong>Formulate Question:</strong> Define a clear, focused research question using frameworks like PICO (Population, Intervention, Comparison, Outcome)</li>
          <li><strong>Develop Protocol:</strong> Create detailed methods document, often registered publicly</li>
          <li><strong>Search Literature:</strong> Systematically search databases (PubMed, Cochrane Library, etc.)</li>
          <li><strong>Screen Studies:</strong> Apply inclusion/exclusion criteria, usually by two independent reviewers</li>
          <li><strong>Extract Data:</strong> Systematically collect relevant information from included studies</li>
          <li><strong>Assess Quality:</strong> Evaluate risk of bias and study quality</li>
          <li><strong>Synthesize Results:</strong> Combine findings narratively or statistically</li>
          <li><strong>Draw Conclusions:</strong> Interpret findings and assess strength of evidence</li>
        </ul>

        <p><strong className="glossary-highlight">Systematic Review vs. Meta-Analysis:</strong></p>
        <p>While related, these are distinct concepts:</p>
        <ul className="glossary-list">
          <li><strong>Systematic Review:</strong> The overall process of systematically identifying and evaluating evidence; may or may not include statistical pooling</li>
          <li><strong>Meta-Analysis:</strong> A statistical technique used within some systematic reviews to quantitatively combine results from multiple studies</li>
          <li>All meta-analyses should be based on systematic reviews, but not all systematic reviews include meta-analysis</li>
        </ul>
      </>
    ),

    commonUse: "A systematic review of 23 randomized controlled trials found that omega-3 supplementation significantly reduced triglyceride levels.",

    importanceInResearch: "Systematic reviews are crucial for evidence-based practice because they provide the most comprehensive and reliable synthesis of existing research, helping to identify consistent patterns, resolve conflicting findings, and reveal gaps in knowledge. They form the basis for clinical guidelines and health policy decisions.",

    relatedTerms: ["Meta-Analysis", "RCT", "GRADE", "Peer-Reviewed", "Clinical Significance"],

    exampleContext: "When evaluating supplement effectiveness, systematic reviews provide stronger evidence than individual studies because they synthesize findings from multiple trials, reduce the impact of individual study biases, and can reveal overall treatment effects that might not be apparent in single studies."
  };

  return <GlossaryTemplate {...content}   currentPage="systematicreview"
    />;
}
