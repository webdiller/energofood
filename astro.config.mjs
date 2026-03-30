// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Prevent tiny JS assets from being inlined as data URLs.
      // This ensures explicit JS files are emitted in dist (e.g. PhotoSwipe init chunks).
      assetsInlineLimit: 0
    }
  }
});