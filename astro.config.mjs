
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vvor.pl',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
