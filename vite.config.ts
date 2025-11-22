
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      dedupe: ['react', 'react-dom'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/fa234369467197e9b56f625112dd7dc3646b9390.png': path.resolve(__dirname, './src/assets/fa234369467197e9b56f625112dd7dc3646b9390.png'),
        'figma:asset/f69f346bde9ce1223aa8e8e9265be307b22261e4.png': path.resolve(__dirname, './src/assets/f69f346bde9ce1223aa8e8e9265be307b22261e4.png'),
        'figma:asset/e5cf0235b0f882bf01162ab58a79301b0c1e2ebe.png': path.resolve(__dirname, './src/assets/e5cf0235b0f882bf01162ab58a79301b0c1e2ebe.png'),
        'figma:asset/d9613b248b7739504ad488bcad08a8b825476e6d.png': path.resolve(__dirname, './src/assets/d9613b248b7739504ad488bcad08a8b825476e6d.png'),
        'figma:asset/c8cc68ad5913aaa59d2366606700691661101c3e.png': path.resolve(__dirname, './src/assets/c8cc68ad5913aaa59d2366606700691661101c3e.png'),
        'figma:asset/ba7f18652d239a86866cf8bd1f5919c913befa4b.png': path.resolve(__dirname, './src/assets/ba7f18652d239a86866cf8bd1f5919c913befa4b.png'),
        'figma:asset/ba23c644c769aed69ee6d17f7866560f5794f544.png': path.resolve(__dirname, './src/assets/ba23c644c769aed69ee6d17f7866560f5794f544.png'),
        'figma:asset/b3917561a3bb6c6074bbc72f129209bf7ef30940.png': path.resolve(__dirname, './src/assets/b3917561a3bb6c6074bbc72f129209bf7ef30940.png'),
        'figma:asset/adaa5958638ef58a10a2b5b182d161d011abc01a.png': path.resolve(__dirname, './src/assets/adaa5958638ef58a10a2b5b182d161d011abc01a.png'),
        'figma:asset/9fbd70fb8a08832d09270e0c8c82b965dba78e14.png': path.resolve(__dirname, './src/assets/9fbd70fb8a08832d09270e0c8c82b965dba78e14.png'),
        'figma:asset/8611a9337d5a61d564cf0a15cb51569ba3ba4b80.png': path.resolve(__dirname, './src/assets/8611a9337d5a61d564cf0a15cb51569ba3ba4b80.png'),
        'figma:asset/81ced6d15eb50ecd24f0f123cdb610ead8120fcb.png': path.resolve(__dirname, './src/assets/81ced6d15eb50ecd24f0f123cdb610ead8120fcb.png'),
        'figma:asset/7157caff66020adbe0e259d3e2f8312044fb4dd5.png': path.resolve(__dirname, './src/assets/7157caff66020adbe0e259d3e2f8312044fb4dd5.png'),
        'figma:asset/629f0f2a4c5cd2a6e05360929c29e55faa21686e.png': path.resolve(__dirname, './src/assets/629f0f2a4c5cd2a6e05360929c29e55faa21686e.png'),
        'figma:asset/4d2531edd86e143eba53b8d5876aeca2213a89ac.png': path.resolve(__dirname, './src/assets/4d2531edd86e143eba53b8d5876aeca2213a89ac.png'),
        'figma:asset/4cc7cdc6ba408e920883098378ddf5612fda349e.png': path.resolve(__dirname, './src/assets/4cc7cdc6ba408e920883098378ddf5612fda349e.png'),
        'figma:asset/4cb875168c21f5f722f61eb6916e6c1483a46c66.png': path.resolve(__dirname, './src/assets/4cb875168c21f5f722f61eb6916e6c1483a46c66.png'),
        'figma:asset/4bdf2cba5e05e7d70b9f1402336825a64b04e236.png': path.resolve(__dirname, './src/assets/4bdf2cba5e05e7d70b9f1402336825a64b04e236.png'),
        'figma:asset/483f4770e75da46945f591fc87a26943caf5f1d1.png': path.resolve(__dirname, './src/assets/483f4770e75da46945f591fc87a26943caf5f1d1.png'),
        'figma:asset/4675dac44316999df50eb2a1005b9f75eef05c35.png': path.resolve(__dirname, './src/assets/4675dac44316999df50eb2a1005b9f75eef05c35.png'),
        'figma:asset/2f3309a930da536601e44619e42e44f89c102eb7.png': path.resolve(__dirname, './src/assets/2f3309a930da536601e44619e42e44f89c102eb7.png'),
        'figma:asset/2c636f20bdcff7a630196b66f4ec7adb7e282afe.png': path.resolve(__dirname, './src/assets/2c636f20bdcff7a630196b66f4ec7adb7e282afe.png'),
        'figma:asset/263c76911b591012bda0eb5ac65dfd4bdd80d41c.png': path.resolve(__dirname, './src/assets/263c76911b591012bda0eb5ac65dfd4bdd80d41c.png'),
        'figma:asset/1da3617add8298349943f08e186ec104f4d371b6.png': path.resolve(__dirname, './src/assets/1da3617add8298349943f08e186ec104f4d371b6.png'),
        'figma:asset/18c64e97e21456adcb24d0a8830ad3d468ea88a0.png': path.resolve(__dirname, './src/assets/18c64e97e21456adcb24d0a8830ad3d468ea88a0.png'),
        'figma:asset/1190aa29547438ef3022304f83675c1776b73eba.png': path.resolve(__dirname, './src/assets/1190aa29547438ef3022304f83675c1776b73eba.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Group all glossary components into a single chunk for fewer small requests
            if (id.includes('/components/glossary/')) return 'glossary';
            // Group large vendor libraries - but NOT lucide-react (causes React import issues)
            if (id.includes('node_modules')) {
              if (id.includes('radix-ui')) return 'radix';
              // React and react-dom should stay in vendor chunk
              if (id.includes('react') || id.includes('react-dom')) return 'vendor';
            }
          }
        }
      }
    },
    server: {
      port: 3000,
      open: true,
    },
  });