import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), analyzer({
    analyzerMode: 'server',
    openAnalyzer: true,
    summary: true
  })],
})
