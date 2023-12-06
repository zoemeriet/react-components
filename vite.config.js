import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from 'tailwindcss';

export default defineConfig ({
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