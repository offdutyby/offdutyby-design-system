// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import libCss from "vite-plugin-libcss";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
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
      // entry: "src/main.tsx", // 라이브러리의 진입점 파일
      // name: "OffDesignSystem", // 라이브러리의 이름
      // fileName: (format) => `off-design-system.${format}.js`, // 출력 파일 이름 형식
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "OffDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^react-/, // react로 시작하는 모든 패키지
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        preserveModules: false, // 모듈 구조 보존하지 않음
        manualChunks: undefined, // 수동 청크 비활성화
      },
    },
    sourcemap: true, // 소스맵 생성
    minify: "terser", // 코드 최소화
  },
});
