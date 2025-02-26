import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "Drag-and-drop-todoList-app-in-React",
  plugins: [react()],
});
