import React from 'react';

/**
 * SectionImage: Content images that fill their container
 * - Designed for use in grid/flex layouts
 * - Uses object-fit: cover to fill parent dimensions
 * - Respects parent container's aspect ratio
 */
export function SectionImage({
    file,
    alt,
    fallbackSrc,
    widths = [640, 1280, 1920],
    objectFit = 'cover',
    objectPosition = 'center',
    transform,
}: {
    file: string;
    alt: string;
    fallbackSrc?: string;
    widths?: number[];
    objectFit?: 'cover' | 'contain';
    objectPosition?: string;
    transform?: string;
}) {
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    const toSet = (fmt: 'webp' | 'avif') => widths.map(w => `/optimized/${base}-${w}.${fmt} ${w}w`).join(', ');
    const fallback = fallbackSrc || `/optimized/${base}-${widths[Math.floor(widths.length / 2)]}.webp`;

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source type="image/avif" srcSet={toSet('avif')} sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 60vw, (min-width: 768px) 75vw, (min-width: 640px) 90vw, 100vw" />
                <source type="image/webp" srcSet={toSet('webp')} sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 60vw, (min-width: 768px) 75vw, (min-width: 640px) 90vw, 100vw" />
                <img
                    src={fallback}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit,
                        objectPosition,
                        transform,
                        display: 'block',
                    }}
                />
            </picture>
        </div>
    );
}
