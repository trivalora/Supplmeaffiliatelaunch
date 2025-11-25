import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DrawbackItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ResearchGrade {
  letter: 'A' | 'B' | 'C' | 'D';
  title: string;
  subtitle?: string;
  description: string;
}

export interface BuyingGuideItem {
  icon: LucideIcon;
  title: string;
  description: string | ReactNode;
}

export interface Reference {
  authors: string;
  year: string;
  title: string;
  journal: string;
  link?: string;
}

export interface FurtherReadingLink {
  title: string;
  url: string;
  source: string;
}

export interface WhatToExpectOutcome {
  icon: string;
  resultsWeeks: number | string;
  usage: string | number;
  usageFrequency?: string;
  usageDelivery?: string;
  timing?: string;
}

export interface WhatToExpectData {
  outcomes: WhatToExpectOutcome[];
  disclaimer?: string;
  signsOfEffectiveness?: string[];
}
