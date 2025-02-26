import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "Deploy-a-Vite-React-Project-on-GitHub-Pages",
  plugins: [react()],
});
