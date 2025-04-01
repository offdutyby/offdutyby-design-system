// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import libCss from "vite-plugin-libcss";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
    svgr(),
    createSvgSpritePlugin({
      symbolId: "icon-[name]",
      include: ["src/assets/icon/**/*.svg"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "${path.resolve(__dirname, "src/styles/color.scss")}" as *;
          @use "${path.resolve(__dirname, "src/styles/global.scss")}" as *;
          @use "${path.resolve(__dirname, "src/styles/typography.scss")}" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "OffDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", /^react-/],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        preserveModules: false,
        manualChunks: undefined,
      },
    },
    sourcemap: true,
    minify: "terser",
  },
});
