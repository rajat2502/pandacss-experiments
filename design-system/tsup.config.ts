import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/atoms/index.ts", "src/tokens/index.ts"],
  format: ["esm", "cjs"],
  external: ["@headout/token-system"],
  dts: true,
  clean: true,
});
