import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vitest/config'

const base = process.env.GITHUB_PAGES === 'true' ? '/momen-qa-ai-portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      closeBundle() {
        if (process.env.GITHUB_PAGES === 'true') {
          copyFileSync('dist/index.html', 'dist/404.html')
        }
      },
    },
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
