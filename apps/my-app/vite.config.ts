import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      output: {
        format: 'es',
        dir: 'dist',
        preserveModules: true,
      },
    },
  },
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      open: true,
      template: 'sunburst'
    }),
  ],
})
