import { Metadata } from 'next';
import { MethodologyPageWrapper } from '../components/MethodologyPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Research Methodology - Evidence-Based Supplement Guide',
  description: 'Our research methodology combines academic rigor with modern technology to evaluate supplements. Clinical trials, meta-analyses, and evidence-based protocols.',
};

export default function MethodologyPage() {
  return (
    <>
      <PageViewTracker pageName="Methodology" pageCategory="static" />
      <MethodologyPageWrapper />
    </>
  );
}
