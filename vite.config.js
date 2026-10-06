import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ make sure this import exists

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
