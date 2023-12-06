import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from 'tailwindcss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig ({
  plugins: [
    libInjectCss(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "react-components", 
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "tailwindcss"],
      output: {
        globals: {
          react: 'React',
          tailwindcss: 'tailwindcss',
        }
      }
    },
  },
});