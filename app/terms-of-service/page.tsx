import { Metadata } from 'next';
import { TermsOfServicePageWrapper } from '../components/TermsOfServicePageWrapper';

export const metadata: Metadata = {
  title: 'Terms of Service - Suppl.me',
  description: 'Terms and conditions for using suppl.me.',
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageWrapper />;
}
