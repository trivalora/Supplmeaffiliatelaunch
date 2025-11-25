import { Metadata } from 'next';
import { PrivacyPolicyPageWrapper } from '../components/PrivacyPolicyPageWrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy - Suppl.me',
  description: 'Our privacy policy and data protection practices.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageWrapper />;
}
