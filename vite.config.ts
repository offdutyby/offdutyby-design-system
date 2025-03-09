// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }), // SVG를 React 컴포넌트로 변환
    // createSvgSpritePlugin({
    //   symbolId: "icon-[name]",
    //   include: ["src/assets/icon/**/*.svg"],
    // }),
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
      name: "@OffDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
    },
    rollupOptions: {
      // 외부 종속성을 설정하여 번들에 포함되지 않도록 할 수 있습니다.
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
