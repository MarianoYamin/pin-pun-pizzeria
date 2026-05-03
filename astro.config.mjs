// @ts-check
import { defineConfig } from 'astro/config';

// Configuración base del sitio Pin Pun
// site: cambiar al dominio definitivo cuando se contrate
export default defineConfig({
  site: 'https://pinpun.com.ar',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis'],
    },
  },
});
