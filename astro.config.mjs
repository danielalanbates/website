import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  site: 'https://yourusername.github.io',
  // base: '/repository-name', // Uncomment and update if not using custom domain
});
