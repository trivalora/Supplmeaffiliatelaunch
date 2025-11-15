import React from 'react';

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
    widthHint = 700,
    widths = [400, 700, 1000, 1400],
    sizes = '(min-width: 1024px) 33vw, 100vw',
    useSrcSet = true,
    loading = 'lazy',
    decoding = 'async',
    fetchPriority,
    draggable,
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
}) {
    const provider = React.useMemo<'amazon' | 'cloudinary' | 'generic'>(() => {
        if (/^https?:\/\/m\.media\.amazon\.com\/images\/I\//.test(src)) return 'amazon';
        if (/cloudinary\./.test(src) && /\/image\/upload\//.test(src)) return 'cloudinary';
        return 'generic';
    }, [src]);

    const buildUrl = React.useCallback((w: number) => {
        if (provider === 'amazon') {
            if (/_SX\d+_/.test(src)) return src.replace(/_SX\d+_/, `_SX${w}_`);
            if (/_SL\d+_/.test(src)) return src.replace(/_SL\d+_/, `_SX${w}_`);
            return src.replace(/(\.[a-zA-Z]{3,4})(\?.*)?$/, `_SX${w}_$1$2`);
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
        />
    );
}
