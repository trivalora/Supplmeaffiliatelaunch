'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { FurtherReadingLink } from './types';

interface FurtherReadingSectionProps {
  furtherReading?: FurtherReadingLink[];
}

export function FurtherReadingSection({ furtherReading }: FurtherReadingSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!furtherReading || furtherReading.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-[14px] p-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full flex items-center justify-between hover:text-primary transition-colors">
          <h2 className="text-primary">Further Reading</h2>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-6">
          <div className="space-y-3">
            {furtherReading.map((link, index) => (
              <div key={index} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                <a
                  href={link.url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <p className="hover:underline mb-1">{link.title}</p>
                </a>
                <p className="text-sm text-muted-foreground">
                  {link.source}
                </p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
