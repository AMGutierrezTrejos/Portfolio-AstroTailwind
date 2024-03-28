import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import reactRefresh from '@vitejs/plugin-react-refresh'; // Agrega este import

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  plugins: [
    reactRefresh(), // Agrega este plugin para React
  ],
});