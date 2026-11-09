import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      // remark-gfm adds GitHub-flavoured markdown (tables, strikethrough, task lists) to MDX
      { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react', remarkPlugins: [remarkGfm] }) },
      react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
      tailwindcss(),
    ],
})
