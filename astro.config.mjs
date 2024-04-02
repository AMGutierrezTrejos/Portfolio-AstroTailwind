import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import reactRefresh from '@vitejs/plugin-react-refresh'; // Agrega este import
import react from '@astrojs/react';


export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  plugins: [
    reactRefresh(), // Agrega este plugin para React
  ],
});