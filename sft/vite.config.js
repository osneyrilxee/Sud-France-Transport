import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mecano: resolve(__dirname, 'mecano.html'),
        expedition: resolve(__dirname, 'expedition.html'),
        livraison: resolve(__dirname, 'livraison.html'),
        location: resolve(__dirname, 'location.html'),
        services: resolve(__dirname, 'services.html'),
      },
    },
  },
});