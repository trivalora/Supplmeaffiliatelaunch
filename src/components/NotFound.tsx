import React, { useEffect } from 'react';
import { track404 } from '../utils/analytics';

export function NotFound() {
    useEffect(() => {
        try { track404(window.location.pathname); } catch { }
    }, []);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-3xl mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-6 max-w-md">
                Sorry, we couldn't find the page you're looking for. It may have been moved or archived.
            </p>
            <a href="/" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Go Home
            </a>
        </div>
    );
}