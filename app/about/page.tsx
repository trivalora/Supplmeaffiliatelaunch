import { Metadata } from 'next';
import { AboutPageWrapper } from '../components/AboutPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'About Us - Evidence-Based Supplement Guide',
  description: 'Meet the team behind the evidence-based supplement platform. Learn about our mission to provide transparent, science-backed supplement recommendations and price comparisons.',
};

export default function AboutPage() {
  return (
    <>
      <PageViewTracker pageName="About" pageCategory="static" />
      <AboutPageWrapper />
    </>
  );
}
