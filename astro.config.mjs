
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vvorx.github.io',
  base: '/Igors-Web-Page/',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
