import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
   server: {
    port: 3000, 
    host: '0.0.0.0',
  },
})
