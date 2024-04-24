import { defineConfig } from "@pandacss/dev";

import preset from "@headout/design-system/tokens";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./.yalc/@headout/design-system/dist/atoms/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [preset],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  importMap: "@headout/token-system",
});
