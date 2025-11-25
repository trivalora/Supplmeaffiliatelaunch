/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GTM_ID?: string;
    readonly VITE_API_BASE?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module 'react' {
    // augment if needed
}

export { };