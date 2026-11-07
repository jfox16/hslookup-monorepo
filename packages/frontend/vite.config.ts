import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths, matching CRA's `"homepage": "."` (GitHub Pages + custom domain).
  base: './',
  plugins: [react()],
  resolve: {
    // Resolve bare imports like 'components/...' via tsconfig's baseUrl.
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  build: {
    // Keep CRA's output folder so the Pages workflow and gh-pages script don't change.
    outDir: 'build',
  },
});
