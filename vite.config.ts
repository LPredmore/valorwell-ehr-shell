import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

// Vite configuration with Module Federation to consume the staffProfile remote
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'shell',
      remotes: {
        staffProfile: 'https://valorwell-ehr-staff-profile.lovable.app/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@tanstack/react-query': { singleton: true, eager: true },
      } as any,
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: true,
    minify: false,
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 4173,
  },
});