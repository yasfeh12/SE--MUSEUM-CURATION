import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // Important for correct path resolution in production
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Aligns with your TypeScript path config
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
