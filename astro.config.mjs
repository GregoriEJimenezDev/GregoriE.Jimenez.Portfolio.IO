// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://grego78887.github.io',
  base: '/GregoriE.Jimenez.Portfolio.IO',
  
  vite: {
    Plugin: [tailwindcss()],
  },

  integrations: [react()],
});