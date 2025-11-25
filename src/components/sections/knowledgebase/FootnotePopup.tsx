'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Reference } from './types';

interface FootnotePopupProps {
  refNumber: string;
  reference?: Reference;
}

export function FootnotePopup({ refNumber, reference }: FootnotePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!reference) {
    return <>[{refNumber}]</>;
  }

  return (
    <HoverCard
      openDelay={200}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <HoverCardTrigger asChild>
        <a
          href={`#ref-${refNumber}`}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="footnote-link cursor-help"
          aria-label={`Reference ${refNumber}: ${reference.authors}`}
        >
          [{refNumber}]
        </a>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-96 max-w-[90vw] bg-card border border-border p-4"
        side="top"
        align="start"
        onPointerDownOutside={() => setIsOpen(false)}
        onEscapeKeyDown={() => setIsOpen(false)}
      >
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            [{refNumber}] {reference.authors} ({reference.year})
          </p>
          <p className="text-sm text-foreground">
            {reference.title}
          </p>
          <p className="text-xs text-muted-foreground italic">
            {reference.journal}
          </p>
          {reference.link && (
            <a
              href={reference.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View source <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
