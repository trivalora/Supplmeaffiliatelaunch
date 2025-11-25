import { Metadata } from 'next';
import { GlossaryPageWrapper } from '../components/GlossaryPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Glossary - Suppl.me',
  description: 'Scientific and medical terms related to supplements, nutrition, and health.',
};

export default function GlossaryIndexPage() {
  return (
    <>
      <PageViewTracker pageName="Glossary Index" pageCategory="glossary" />
      <GlossaryPageWrapper />
    </>
  );
}
