import { Metadata } from 'next';
import { ContactPageWrapper } from '../components/ContactPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Contact Us - Suppl.me',
  description: 'Contact the Suppl.me team with questions about supplements, research, partnerships, or technical support. We\'re here to help with evidence-based guidance.',
};

export default function ContactPage() {
  return (
    <>
      <PageViewTracker pageName="Contact" pageCategory="static" />
      <ContactPageWrapper />
    </>
  );
}
