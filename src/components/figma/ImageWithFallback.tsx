import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [webpError, setWebpError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const handleWebpError = () => {
    setWebpError(true)
  }

  const { src, alt, style, className, loading = 'lazy', decoding = 'async', ...rest } = props

  // Generate WebP URL by replacing .png/.jpg/.jpeg with .webp
  const getWebpSrc = (originalSrc: string | undefined): string | undefined => {
    if (!originalSrc) return undefined
    return originalSrc.replace(/\.(png|jpe?g)$/i, '.webp')
  }

  const webpSrc = getWebpSrc(src)

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  // Use picture element for WebP support with PNG fallback
  return (
    <picture>
      {/* Try WebP first for modern browsers (better compression) */}
      {!webpError && webpSrc && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
          onError={handleWebpError}
        />
      )}
      {/* Fallback to original format (PNG/JPG) */}
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        style={style} 
        loading={loading}
        decoding={decoding}
        onError={handleError}
        {...rest} 
      />
    </picture>
  )
}