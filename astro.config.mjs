import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'


export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwind()],
  },
  image: {
    // Configure built-in image service
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  output: 'server',
  adapter: vercel(),
  site: process.env.PUBLIC_SITE_URL,
})
