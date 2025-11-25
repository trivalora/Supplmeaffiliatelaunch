import { Metadata } from 'next';
import { LegalNoticePageWrapper } from '../components/LegalNoticePageWrapper';

export const metadata: Metadata = {
  title: 'Legal Notice - Suppl.me',
  description: 'Legal notice and disclaimer information.',
};

export default function LegalNoticePage() {
  return <LegalNoticePageWrapper />;
}
