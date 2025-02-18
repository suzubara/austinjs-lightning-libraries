import path from 'node:path'
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import { globSync } from 'glob';

import { peerDependencies, dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: {
        // source: https://rollupjs.org/configuration-options/#input
        ...Object.fromEntries(
          globSync('src/components/**/*.tsx').map((file) => [
            path.relative(
              'src',
              file.slice(0, file.length - path.extname(file).length),
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
        ),
      },
      name: 'MyComponentLibrary',
      formats: ['es']
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
  },
  plugins: [react(), dts()],
})
