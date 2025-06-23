import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: true, // allow access from external IPs
    port: 5173, // or your preferred port
    strictPort: true,
    server: {
      host: true,
      port: 5173,
      allowedHosts: [
        '3dd5-103-167-158-163.ngrok-free.app'
      ]
    } // <- this is what solves the ngrok issue
  }
})
