import { Metadata } from 'next';
import { ContactPageWrapper } from '../components/ContactPageWrapper';
import { PageViewTracker } from '../components/PageViewTracker';

export const metadata: Metadata = {
  title: 'Contact Us - Suppl.me',
  description: 'Get in touch with the suppl.me team.',
};

export default function ContactPage() {
  return (
    <>
      <PageViewTracker pageName="Contact" pageCategory="static" />
      <ContactPageWrapper />
    </>
  );
}
