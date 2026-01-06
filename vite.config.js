import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { fileURLToPath } from "url"

// recreando __dirname en ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',   // acepta conexiones externas
    port: 5173,
    allowedHosts: ['.ngrok-free.app'], // acepta cualquier subdominio de ngrok
  },
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  },
})
