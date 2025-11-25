'use client';

import { useEffect } from 'react';
import { trackError } from '@/lib/analytics';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to analytics
    try {
      trackError(
        error.name || 'NextError',
        error.message,
        error.stack || error.digest || 'unknown'
      );
    } catch {
      // Fail silently if analytics fails
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-lg w-full bg-card rounded-xl shadow-lg border border-secondary/20 p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-serif text-primary mb-2">Something went wrong</h1>
          <p className="text-muted-foreground">
            We encountered an unexpected error. Don't worry, we've logged it and will look into it.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="font-mono text-xs text-red-800 break-words">{error.message}</p>
            {error.digest && (
              <p className="font-mono text-xs text-red-600 mt-2">Digest: {error.digest}</p>
            )}
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-tertiary border border-secondary rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Go Home
          </a>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>Need help? <a href="/contact" className="text-primary hover:underline">Contact us</a></p>
        </div>
      </div>
    </div>
  );
}
