// ========================================
// TRACKED LINK COMPONENT
// ========================================
// Automatically tracks link clicks with appropriate context

import { trackOutboundLink, trackNavigation, trackGlossaryLinkClick } from '../utils/analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkType?: 'internal' | 'external' | 'glossary' | 'certification' | 'retailer' | 'affiliate';
  linkText?: string;
  context?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

export function TrackedLink({
  href,
  children,
  className,
  linkType = 'external',
  linkText,
  context,
  onClick,
  target,
  rel,
  style,
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get link text from children if not provided
    const text = linkText || (typeof children === 'string' ? children : href);

    // Track based on link type
    if (linkType === 'glossary') {
      const term = href.replace('/glossary/', '').replace('/', '');
      trackGlossaryLinkClick(term, window.location.pathname);
    } else if (linkType === 'internal') {
      trackNavigation(text, href, 'body');
    } else {
      // External, certification, retailer, affiliate
      trackOutboundLink(href, text, linkType, context);
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
      style={style}
    >
      {children}
    </a>
  );
}

// ========================================
// CERTIFICATION LINK COMPONENT
// ========================================
// Specialized component for USP, ConsumerLab, NSF links

interface CertificationLinkProps {
  type: 'USP' | 'ConsumerLab' | 'NSF';
  context?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CertificationLink({ type, context, className, children }: CertificationLinkProps) {
  const certificationUrls = {
    USP: 'https://www.usp.org/',
    ConsumerLab: 'https://www.consumerlab.com/',
    NSF: 'https://www.nsf.org/',
  };

  return (
    <TrackedLink
      href={certificationUrls[type]}
      linkType="certification"
      linkText={type}
      context={context || 'certification_mention'}
      className={className}
      target="_blank"
      rel="nofollow noreferrer"
    >
      {children || type}
    </TrackedLink>
  );
}
