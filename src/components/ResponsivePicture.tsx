import React from 'react';

/**
 * ResponsivePicture renders a <picture> using pre-generated assets under /public/optimized.
 * It expects that scripts/optimize-images.mjs generated files with pattern: <base>-<width>.<format>
 * where base is the original filename without extension from src/assets (e.g., adaa595...)
 */
export function ResponsivePicture({
    file, // original filename with extension, e.g., adaa5958....png
    alt,
    className,
    style,
    widths = [640, 1280, 1920],
    sizes = '100vw',
    fallbackSrc,
    imgProps = {}
}: {
    file: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    widths?: number[];
    sizes?: string;
    fallbackSrc?: string;
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}) {
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    const toSet = (fmt: 'webp' | 'avif') => widths.map(w => `/optimized/${base}-${w}.${fmt} ${w}w`).join(', ');
    const fallback = fallbackSrc || `/optimized/${base}-${widths[Math.floor(widths.length / 2)]}.webp`;

    return (
        <picture className={className as any} style={style}>
            <source type="image/avif" srcSet={toSet('avif')} sizes={sizes} />
            <source type="image/webp" srcSet={toSet('webp')} sizes={sizes} />
            {/* Spread remaining props for better control (e.g., width/height/referrerPolicy) */}
            <img
                src={fallback}
                alt={alt}
                loading={imgProps.loading || 'lazy'}
                decoding={imgProps.decoding || 'async'}
                style={imgProps.style}
                className={imgProps.className}
                {...imgProps}
            />
        </picture>
    );
}
