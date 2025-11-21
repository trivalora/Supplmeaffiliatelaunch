import React from 'react';

/**
 * HeroImage: Full-bleed background image for hero sections
 * - Absolute positioned to fill parent container
 * - Always uses object-fit: cover to fill viewport
 * - Optimized for LCP (Largest Contentful Paint)
 */
export function HeroImage({
    file,
    alt = '',
    fallbackSrc,
    widths = [640, 1280, 1920],
    objectPosition = 'center',
}: {
    file: string;
    alt?: string;
    fallbackSrc?: string;
    widths?: number[];
    objectPosition?: string;
}) {
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    const toSet = (fmt: 'webp' | 'avif') => widths.map(w => `/optimized/${base}-${w}.${fmt} ${w}w`).join(', ');
    const fallback = fallbackSrc || `/optimized/${base}-${widths[Math.floor(widths.length / 2)]}.webp`;

    return (
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source type="image/avif" srcSet={toSet('avif')} sizes="100vw" />
                <source type="image/webp" srcSet={toSet('webp')} sizes="100vw" />
                <img
                    src={fallback}
                    alt={alt}
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition,
                        display: 'block',
                    }}
                />
            </picture>
        </div>
    );
}
