import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anshumangiramkar.com',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' }
});
