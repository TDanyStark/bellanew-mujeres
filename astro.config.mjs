// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/bellanew-mujeres',
  outDir: 'apps/abbott/bellanew-mujeres',
  vite: {
    plugins: [tailwindcss()]
  }
});