'use client';

import { Component, ReactNode } from 'react';
import { trackError } from '@/lib/analytics';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

/**
 * Error Boundary Component
 * 
 * Catches React errors in child components and displays a fallback UI
 * Prevents the entire app from crashing due to component errors
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error info:', errorInfo);
    }

    // TODO: Log to error reporting service (Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(error, { extra: errorInfo });

    this.setState({ errorInfo });

    try {
      trackError(error.name || 'ReactError', error.message, errorInfo?.componentStack || 'unknown');
    } catch { }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{ backgroundColor: 'var(--color-tertiary)' }}
        >
          <div className="text-center max-w-md">
            <div
              className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary-dark)' }}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1
              className="text-2xl mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary-dark)'
              }}
            >
              Something went wrong
            </h1>

            <p
              className="mb-6"
              style={{ color: 'var(--color-fourth)' }}
            >
              We're sorry for the inconvenience. Please try refreshing the page or going back to the home page.
            </p>

            {(process.env.NODE_ENV === 'development') && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm mb-2" style={{ color: 'var(--color-fourth)' }}>
                  Error Details (Dev Only)
                </summary>
                <pre
                  className="text-xs p-4 rounded overflow-auto max-h-40"
                  style={{
                    backgroundColor: 'rgba(22, 47, 28, 0.05)',
                    color: 'var(--color-text)'
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo && `\n\n${this.state.errorInfo.componentStack}`}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-primary-dark)',
                  color: 'white',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Refresh Page
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}