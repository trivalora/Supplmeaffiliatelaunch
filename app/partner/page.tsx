import { Metadata } from 'next';
import { PartnerPageWrapper } from '../components/PartnerPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Partner with Us - Suppl.me',
  description: 'Partner with suppl.me to provide evidence-based supplement information to your audience.',
};

export default function PartnerPage() {
  return (
    <>
      <PageViewTracker pageName="Partner" pageCategory="static" />
      <PartnerPageWrapper />
    </>
  );
}
