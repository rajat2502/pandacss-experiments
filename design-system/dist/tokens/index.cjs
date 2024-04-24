"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  default: () => tokens_default
});
module.exports = __toCommonJS(tokens_exports);

// node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset2) {
  return preset2;
}
function createProxy() {
  const identity = (v) => v;
  return new Proxy(identity, {
    get() {
      return identity;
    }
  });
}
var defineTokens = /* @__PURE__ */ createProxy();

// src/tokens/index.ts
var colorTokens = defineTokens.colors({
  brand: {
    white: { value: "#ffffff" },
    black: { value: "#111111" },
    candy: { value: "#ff007a" },
    purps: { value: "#8000ff" }
  },
  background: {
    floatingPurps: { value: "#f8f6ff" },
    gentleWarning: { value: "#ffd8d8" },
    fadedPale: { value: "#fff8ef" },
    fadedGreen: { value: "#f2fdeb" },
    fadedCandy: { value: "#fff2f8" },
    youngOrange: { value: "#ffe7ce" },
    soothingGreen: { value: "#dbfddb" },
    lttIndigo: { value: "#150029" }
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
    lightGray: { value: "#d9d9d9" }
  }
});
var preset = definePreset({
  theme: {
    tokens: {
      colors: colorTokens
    }
  }
});
var tokens_default = preset;
