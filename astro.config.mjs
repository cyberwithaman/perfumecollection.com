// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  build: {
    // This will help reduce or eliminate the empty chunk warning
    rollupOptions: {
      output: {
        // Prevent empty chunks
        manualChunks: {},
      },
    }
  }
});
