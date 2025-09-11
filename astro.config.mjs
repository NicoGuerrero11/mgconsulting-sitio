import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  output: 'server',
  adapter: vercel(),
  site: process.env.PUBLIC_SITE_URL
})