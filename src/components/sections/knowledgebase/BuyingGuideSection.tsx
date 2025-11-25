import { ReactNode } from 'react';
import { trackOutboundLink, trackCertificationClick } from '@/lib/analytics';
import { BuyingGuideItem } from './types';

interface BuyingGuideSectionProps {
  buyingGuideItems?: BuyingGuideItem[];
  buyingGuideIntro?: string;
}

export function BuyingGuideSection({
  buyingGuideItems,
  buyingGuideIntro
}: BuyingGuideSectionProps) {
  if (!buyingGuideItems || buyingGuideItems.length === 0) return null;

  // Helper function to parse description text and convert certification names to links with tracking
  const renderDescriptionWithLinks = (description: string | ReactNode) => {
    // If description is not a string (already processed as ReactNode), return as-is
    if (typeof description !== 'string') {
      return description;
    }

    // Define certification links
    const certificationLinks: { [key: string]: string } = {
      'USP': 'https://www.usp.org/',
      'ConsumerLab': 'https://www.consumerlab.com/',
      'NSF': 'https://www.nsf.org/'
    };

    // Split by certification names while preserving the names
    const parts = description.split(/(\bUSP\b|\bConsumerLab\b|\bNSF\b)/g);

    return (
      <>
        {parts.map((part, index) => {
          if (certificationLinks[part]) {
            return (
              <a
                key={index}
                href={certificationLinks[part]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                onClick={() => {
                  trackOutboundLink(
                    certificationLinks[part],
                    part,
                    'certification',
                    'buying_guide'
                  );
                  try { trackCertificationClick(part as any, 'buying_guide'); } catch { }
                }}
              >
                {part}
              </a>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div data-section className="bg-card border border-border rounded-[14px] p-8">
      <h2 className="text-primary mb-6 text-center">What to Look for When Buying</h2>
      {buyingGuideIntro && (
        <p className="text-foreground leading-7 mb-6">
          {buyingGuideIntro}
        </p>
      )}
      <div className="space-y-4">
        {buyingGuideItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <IconComponent className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground mb-1">
                  <span className="font-medium">{item.title}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {renderDescriptionWithLinks(item.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
