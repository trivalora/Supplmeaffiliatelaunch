import React from 'react';
import { REMOTE_IMAGE_MANIFEST } from '../optimized/remoteManifest';

/**
 * SmartImage: lightweight external image normalizer for mobile.
 * - Downsizes common provider URLs (Amazon, Cloudinary/iHerb) to a saner width.
 * - Preserves the original URL if no known pattern is detected.
 * - Does not create multiple variants; goal is to avoid megabyte downloads on mobile.
 */
export function SmartImage({
    src,
    alt,
    className,
    style,
    widthHint = 360,
    widths = [240, 360, 480, 640],
    sizes = '(min-width:1280px) 22vw, (min-width:1024px) 30vw, 90vw',
    useSrcSet = true,
    loading = 'lazy',
    decoding = 'async',
    fetchPriority,
    draggable,
    addIntrinsic = true,
}: {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    widthHint?: number;
    widths?: number[];
    sizes?: string;
    useSrcSet?: boolean;
    loading?: 'eager' | 'lazy';
    decoding?: 'auto' | 'sync' | 'async';
    fetchPriority?: 'high' | 'low' | 'auto';
    draggable?: boolean;
    addIntrinsic?: boolean;
}) {
    const provider = React.useMemo<'amazon' | 'cloudinary' | 'generic'>(() => {
        if (/^https?:\/\/m\.media\.amazon\.com\/images\/I\//.test(src)) return 'amazon';
        if (/cloudinary\./.test(src) && /\/image\/upload\//.test(src)) return 'cloudinary';
        return 'generic';
    }, [src]);

    // Check manifest for locally cached optimized versions
    const manifestEntry = REMOTE_IMAGE_MANIFEST[src];

    const buildUrl = React.useCallback((w: number) => {
        if (provider === 'amazon') {
            // Amazon filenames contain sequences like: _AC_SX679_.jpg, _AC_SY300_SX300_QL70_FMwebp_.jpg, _AC_SL1500_.jpg
            // Strategy:
            // 1. Ensure there is a single _AC_SX{w}_ size token (remove existing SX/SY/SL combos).
            // 2. Preserve or append quality tokens (_QL70_) and webp hint (_FMwebp_) to encourage modern formats.
            // 3. Maintain original extension; Amazon may serve WebP automatically when _FMwebp_ present and client Accept allows.
            const parts = src.split('/');
            const file = parts.pop() || '';
            const replaced = file
                // Drop any existing size tokens after _AC_
                .replace(/_AC_((SX|SY|SL)\d+_)+/g, '_AC_')
                .replace(/_SX\d+_/g, '_')
                .replace(/_SY\d+_/g, '_')
                .replace(/_SL\d+_/g, '_')
                // Ensure AC present
                .replace(/(_AC_)?/, '_AC_')
                // Inject new width token
                .replace(/_AC_/, `_AC_SX${w}_`);
            // Ensure quality + format tokens
            let withQuality = replaced;
            if (!/_QL\d+_/.test(withQuality)) withQuality = withQuality.replace(/(\.[a-zA-Z]{3,4})(\?.*)?$/, `_QL70_$1$2`);
            if (!/_FMwebp_/.test(withQuality)) withQuality = withQuality.replace(/(\.[a-zA-Z]{3,4})(\?.*)?$/, `_FMwebp_$1$2`);
            return [...parts, withQuality].join('/');
        }
        if (provider === 'cloudinary') {
            return src.replace(/(\/image\/upload\/)([^/]*)(\/)/, (_m, p1, p2, p3) => {
                // ensure f_auto,q_auto:eco present
                let t = p2 || '';
                if (!/(^|,)f_auto(,|$)/.test(t)) t = t ? `${t},f_auto` : 'f_auto';
                if (!/(^|,)q_auto(?::eco)?(,|$)/.test(t)) t = `${t},q_auto:eco`;
                // inject/replace width
                if (/(^|,)w_\d+(,|$)/.test(t)) t = t.replace(/w_\d+/, `w_${w}`);
                else t = `${t},w_${w}`;
                return `${p1}${t}${p3}`;
            });
        }
        return src;
    }, [provider, src]);

    const srcSet = React.useMemo(() => {
        if (!useSrcSet) return undefined;
        if (provider === 'generic') return undefined;
        const parts = widths.map((w) => `${buildUrl(w)} ${w}w`);
        return parts.join(', ');
    }, [buildUrl, provider, widths, useSrcSet]);

    const normalized = React.useMemo(() => buildUrl(widthHint), [buildUrl, widthHint]);

    // Provide intrinsic dimensions to reduce layout shift (approximate; external images vary).
    const intrinsicWidth = addIntrinsic ? widthHint : undefined;
    // Assume square-ish or 4:5 typical supplement bottle; use height heuristic.
    const intrinsicHeight = addIntrinsic ? Math.round(widthHint * 1.2) : undefined;

    if (manifestEntry) {
        // Build AVIF and WebP srcsets from local optimized files
        const avifSet = manifestEntry.widths.map(w => `/optimized/remote/${manifestEntry.hash}-${w}.avif ${w}w`).join(', ');
        const webpSet = manifestEntry.widths.map(w => `/optimized/remote/${manifestEntry.hash}-${w}.webp ${w}w`).join(', ');
        const fallbackSrc = `/optimized/remote/${manifestEntry.hash}-${manifestEntry.widths[0]}.webp`;
        return (
            <picture className={className} style={style}>
                <source type="image/avif" srcSet={avifSet} sizes={sizes} />
                <source type="image/webp" srcSet={webpSet} sizes={sizes} />
                <img
                    src={fallbackSrc}
                    alt={alt}
                    loading={loading}
                    decoding={decoding}
                    fetchPriority={fetchPriority}
                    draggable={draggable}
                    width={intrinsicWidth}
                    height={intrinsicHeight}
                    style={{ width: '100%', height: 'auto' }}
                />
            </picture>
        );
    }

    return (
        <img
            src={normalized}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            alt={alt}
            className={className}
            style={style}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            draggable={draggable}
            width={intrinsicWidth}
            height={intrinsicHeight}
        />
    );
}
