'use client';

import { useRouter } from 'next/navigation';
import { GlossaryPage } from '@/components/GlossaryPage';

export function GlossaryPageWrapper() {
  const router = useRouter();

  const handleNavigate = (key: string) => {
    router.push(`/glossary/${key}`);
  };

  return <GlossaryPage onNavigate={handleNavigate} />;
}
