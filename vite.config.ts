import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 700,
  },
  ssr: {
    // Packages that touch `window` at import time must be bundled, not required by Node.
    noExternal: [],
  },
});
