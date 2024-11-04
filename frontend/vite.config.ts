import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png"],
  server:{
    proxy:{
      "/api": {
        target: "http://localhost:5000"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
