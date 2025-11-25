import { Metadata } from 'next';
import { CookiePolicyPageWrapper } from '../components/CookiePolicyPageWrapper';

export const metadata: Metadata = {
  title: 'Cookie Policy - Suppl.me',
  description: 'Information about cookies and tracking technologies we use.',
};

export default function CookiePolicyPage() {
  return <CookiePolicyPageWrapper />;
}
