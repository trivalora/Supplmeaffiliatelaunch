/**
 * Error State Component
 * Displays user-friendly error messages with retry option
 */

'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ error, onRetry, className = '' }: ErrorStateProps) {
  return (
    <div
      className={`bg-card border border-red-500/20 rounded-[14px] p-8 text-center ${className}`}
      role="alert"
      aria-live="polite"
    >
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-xl font-lora font-semibold mb-2 text-primary">
        Oops! Something went wrong
      </h3>
      <p className="text-text-secondary mb-6">{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
}

export function EmptyState({ message, className = '' }: { message: string; className?: string }) {
  return (
    <div
      className={`bg-card border border-secondary rounded-[14px] p-8 text-center ${className}`}
    >
      <p className="text-text-secondary text-lg">{message}</p>
    </div>
  );
}
