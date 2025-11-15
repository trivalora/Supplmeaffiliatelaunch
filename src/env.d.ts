/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CANONICAL_BASE_URL?: string;
  // Add other public env vars here as needed
  readonly VITE_API_BASE_URL?: string; // optional override for API base
}

// Node.js environment variables used by serverless functions / scripts
// (These are not exposed to client unless explicitly whitelisted)
declare namespace NodeJS {
  interface ProcessEnv {
    PGHOST?: string;
    PGPORT?: string;
    PGUSER?: string;
    PGPASSWORD?: string;
    PGDATABASE?: string;
    PGSSL?: string; // 'true' | 'false'
    API_KEY_FAVORITES?: string; // simple shared secret for favorites endpoint
  }
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
