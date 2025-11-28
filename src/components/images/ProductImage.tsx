import React from 'react';
import { REMOTE_IMAGE_MANIFEST } from '../../optimized/remoteManifest';

/**
 * ProductImage: External product images with local caching
 * - Optimized for product cards with fixed dimensions
 * - Always uses object-fit: contain to show full product
 * - Handles Amazon/Cloudinary URL optimization
 */
export function ProductImage({
    src,
    alt,
    widths = [240, 360, 480, 640],
    sizes = '(min-width: 1024px) 240px, (min-width: 768px) 200px, (min-width: 640px) 180px, 160px',
}: {
    src: string;
    alt: string;
    widths?: number[];
    sizes?: string;
}) {
    const manifestEntry = REMOTE_IMAGE_MANIFEST[src];

    if (manifestEntry) {
        // Use locally cached optimized images
        const avifSet = manifestEntry.widths.map(w => `/optimized/remote/${manifestEntry.hash}-${w}.avif ${w}w`).join(', ');
        const webpSet = manifestEntry.widths.map(w => `/optimized/remote/${manifestEntry.hash}-${w}.webp ${w}w`).join(', ');
        const fallbackSrc = `/optimized/remote/${manifestEntry.hash}-${manifestEntry.widths[0]}.webp`;

        return (
            <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source type="image/avif" srcSet={avifSet} sizes={sizes} />
                <source type="image/webp" srcSet={webpSet} sizes={sizes} />
                <img
                    src={fallbackSrc}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                    }}
                />
            </picture>
        );
    }

    // Fallback: Direct URL (with optimization hints for CDNs)
    const buildUrl = (w: number) => {
        if (/m\.media-amazon\.com/.test(src)) {
            // Amazon image optimization
            const parts = src.split('/');
            const file = parts.pop() || '';
            const replaced = file
                .replace(/_AC_((SX|SY|SL)\d+_)+/g, '_AC_')
                .replace(/_SX\d+_/g, '_')
                .replace(/_SY\d+_/g, '_')
                .replace(/_SL\d+_/g, '_')
                .replace(/(_AC_)?/, '_AC_')
                .replace(/_AC_/, `_AC_SX${w}_`);
            let withQuality = replaced;
            if (!/_QL\d+_/.test(withQuality)) withQuality = withQuality.replace(/(\.[a-zA-Z]{3,4})(\?.*)?$/, `_QL70_$1$2`);
            if (!/_FMwebp_/.test(withQuality)) withQuality = withQuality.replace(/(\.[a-zA-Z]{3,4})(\?.*)?$/, `_FMwebp_$1$2`);
            return [...parts, withQuality].join('/');
        }
        if (/cloudinary\./.test(src)) {
            // Cloudinary optimization
            return src.replace(/(\/image\/upload\/)([^/]*)(\/)/, (_m, p1, p2, p3) => {
                let t = p2 || '';
                if (!/(^|,)f_auto(,|$)/.test(t)) t = t ? `${t},f_auto` : 'f_auto';
                if (!/(^|,)q_auto(?::eco)?(,|$)/.test(t)) t = `${t},q_auto:eco`;
                if (/(^|,)w_\d+(,|$)/.test(t)) t = t.replace(/w_\d+/, `w_${w}`);
                else t = `${t},w_${w}`;
                return `${p1}${t}${p3}`;
            });
        }
        return src;
    };

    const srcSet = widths.map(w => `${buildUrl(w)} ${w}w`).join(', ');

    return (
        <img
            src={buildUrl(widths[0])}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
            }}
        />
    );
}
