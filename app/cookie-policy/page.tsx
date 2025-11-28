import { Metadata } from 'next';
import { CookiePolicyPageWrapper } from '../components/CookiePolicyPageWrapper';

export const metadata: Metadata = {
  title: 'Cookie Policy - Suppl.me',
  description: 'Cookie and tracking technologies we use on Suppl.me. Learn about analytics, preferences, and how we use cookies to improve your supplement research experience.',
};

export default function CookiePolicyPage() {
  return <CookiePolicyPageWrapper />;
}
