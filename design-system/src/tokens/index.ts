import { definePreset } from "@pandacss/dev";
import { defineTokens } from "@pandacss/dev";

const colorTokens = defineTokens.colors({
  brand: {
    white: { value: "#ffffff" },
    black: { value: "#111111" },
    candy: { value: "#ff007a" },
    purps: { value: "#8000ff" },
  },
  background: {
    floatingPurps: { value: "#f8f6ff" },
    gentleWarning: { value: "#ffd8d8" },
    fadedPale: { value: "#fff8ef" },
    fadedGreen: { value: "#f2fdeb" },
    fadedCandy: { value: "#fff2f8" },
    youngOrange: { value: "#ffe7ce" },
    soothingGreen: { value: "#dbfddb" },
    lttIndigo: { value: "#150029" },
  },
  gray: {
    g1: { value: "#222222" },
    g2: { value: "#444444" },
    g3: { value: "#666666" },
    g4: { value: "#888888" },
    g4A: { value: "#9f9f9f" },
    g5: { value: "#c4c4c4" },
    g6: { value: "#e2e2e2" },
    g7: { value: "#f0f0f0" },
    g8: { value: "#f8f8f8" },
    lightGray: { value: "#d9d9d9" },
  },
});

const preset = definePreset({
  theme: {
    tokens: {
      colors: colorTokens,
    },
  },
});

export default preset;
