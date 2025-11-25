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
    widths = [640, 1280, 1920, 2560],
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
        <div className="hero-image-container">
            <picture className="hero-image-wrapper">
                <source type="image/avif" srcSet={toSet('avif')} sizes="100vw" />
                <source type="image/webp" srcSet={toSet('webp')} sizes="100vw" />
                <img
                    src={fallback}
                    alt={alt}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="hero-image"
                    style={{
                        objectPosition,
                    }}
                />
            </picture>
        </div>
    );
}
