import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Importa o módulo 'path' do Node.js

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(), // Define a raiz do projeto como o diretório atual
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173 // Garante que a porta seja a correta
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // Cria um atalho para a pasta src
    },
  },
})