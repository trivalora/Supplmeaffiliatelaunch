import { Metadata } from 'next';
import { MethodologyPageWrapper } from '../components/MethodologyPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Research Methodology - Evidence-Based Supplement Guide',
  description: 'Learn about our rigorous research methodology for evaluating supplements. We combine academic research precision with modern technology to deliver reliable, evidence-based supplement information.',
};

export default function MethodologyPage() {
  return (
    <>
      <PageViewTracker pageName="Methodology" pageCategory="static" />
      <MethodologyPageWrapper />
    </>
  );
}
