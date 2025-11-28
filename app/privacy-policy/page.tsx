import { Metadata } from 'next';
import { PrivacyPolicyPageWrapper } from '../components/PrivacyPolicyPageWrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy - Suppl.me',
  description: 'Our privacy policy and data protection practices. Learn how we collect, use, and protect your personal information when using Suppl.me supplement research platform.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageWrapper />;
}
