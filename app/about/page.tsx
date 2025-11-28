import { Metadata } from 'next';
import { AboutPageWrapper } from '../components/AboutPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'About Us - Evidence-Based Supplement Guide',
  description: 'Meet the team delivering science-backed supplement reviews and price comparisons. Our mission: transparent, evidence-based recommendations you can trust.',
};

export default function AboutPage() {
  return (
    <>
      <PageViewTracker pageName="About" pageCategory="static" />
      <AboutPageWrapper />
    </>
  );
}
