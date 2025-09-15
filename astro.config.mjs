import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  integrations: [
    sitemap({
      // Personalizar URLs si es necesario
      customPages: [
        // Agregar páginas adicionales que no estén en /pages
        // 'https://tudominio.com/pagina-especial'
      ],
      // Filtrar páginas que no quieres en el sitemap
      filter: (page) => {
        // Excluir páginas de agradecimiento o privadas
        return !page.includes('/gracias') && !page.includes('/admin');
      },
      // Configurar changefreq y priority
      serialize(item) {
        // Páginas principales con mayor prioridad
        if (item.url === 'https://example.com/' || item.url.includes('/index')) { // Replace with your actual site URL
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Blog posts con prioridad media
        else if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Páginas de servicios importantes
        else if (item.url.includes('/servicios') || item.url.includes('/contacto')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Otras páginas
        else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwind()],
  },
  image: {
    // Configure built-in image service
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optimizaciones adicionales
    domains: ['localhost'],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.mgconsultings.com'
    }]
  },
  // Optimizaciones de build
  build: {
    // Inline small assets
    inlineStylesheets: 'auto',
    // Mejor tree shaking
    split: true
  },
  output: 'server',
  adapter: vercel(),
  site: 'https://example.com', // Replace with your actual site URL
})
