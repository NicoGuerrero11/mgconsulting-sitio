# MG Sitio — Sitio Web Corporativo de Consultoría

## 📋 Descripción del Proyecto

Sitio web corporativo para **MG Consulting**, una empresa de consultoría estratégica empresarial. Desarrollado con [Astro](https://astro.build/) v5.13.7, [TailwindCSS](https://tailwindcss.com/) v4.1, y optimizado para SEO y rendimiento.

## 🏗️ Arquitectura y Estructura

```text
src/
├── assets/
├── components/
│   ├── about/          # Componentes de "Nosotros"
│   │   ├── About.astro
│   │   ├── Fundador.astro
│   │   ├── FounderCard.astro
│   │   ├── Mision.astro
│   │   ├── Value.astro
│   │   └── ValueCard.astro
│   ├── blog/           # Componentes del Blog
│   │   ├── Pagination.astro
│   │   ├── PostCard.astro
│   │   ├── PostMeta.astro
│   │   └── Prose.astro
│   ├── contact/        # Componentes de Contacto
│   │   ├── ContactDetails.astro
│   │   ├── ContactForm.astro
│   │   └── ContactIntro.astro
│   ├── home/           # Componentes del Homepage
│   │   ├── CardService.astro
│   │   ├── Hero.astro
│   │   ├── Nosotros.astro
│   │   ├── Services.astro
│   │   ├── Testimonial.astro
│   │   └── TestimonialCard.astro
│   ├── layout/         # Layout Components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── seo/            # SEO Components
│   │   └── Schema.astro
│   ├── services/       # Componentes de Servicios
│   │   └── ServiceCard.astro
│   └── ui/             # UI Components Reutilizables
│       ├── Button.astro
│       ├── Container.astro
│       └── SectionTitle.astro
├── content/            # Contenido en Markdown
│   ├── blog/
│   │   └── primer-nota.md
│   ├── services/
│   │   ├── business-growth.md
│   │   └── executive-leadership.md
│   └── values/         # Valores de la empresa
│       ├── colaboracion.md
│       ├── compromiso.md
│       ├── excelencia.md
│       ├── inovacion.md
│       ├── integridad.md
│       └── resultados.md
├── data/               # Datos estáticos
│   ├── nav.ts
│   └── social.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/              # Rutas del sitio
│   ├── api/
│   │   └── contact.ts  # API endpoint para formulario
│   ├── blog/
│   │   └── index.astro
│   ├── contacto.astro
│   ├── gracias.astro
│   ├── index.astro
│   ├── nosotros.astro
│   └── servicios.astro
├── scripts/
│   └── testimonial-carousel.ts
└── styles/
    └── global.css
```

### 🎯 Componentes Principales

#### **Layout & Navigation**
- **Header**: Navegación responsive con logo, menú y CTA
- **Footer**: Enlaces, redes sociales y información de contacto
- **BaseLayout**: Layout base con SEO, Schema.org y metadatos

#### **Homepage**
- **Hero**: Sección principal con video/imagen de fondo y CTAs
- **Services**: Grid de servicios con cards interactivas
- **Testimonial**: Carrusel responsive de testimonios
- **Nosotros**: Sección sobre la empresa

#### **Páginas Especializadas**
- **Servicios**: Catálogo completo de servicios
- **Nosotros**: Historia, misión, valores y fundador
- **Contacto**: Formulario funcional + información de contacto
- **Blog**: Sistema de contenido con Astro Content Collections

## 🎨 Tecnologías y Stack

### **Frontend**
- **Astro** v5.13.7 - Framework principal con SSR
- **TailwindCSS** v4.1 - Estilos utilitarios
- **TypeScript** - Tipado estático
- **React** v19.1.1 - Para componentes interactivos específicos

### **Backend & APIs**
- **Vercel** - Deployment y hosting
- **Resend** - Servicio de email para formularios
- **Zod** - Validación de datos

### **SEO & Performance**
- **Sitemap automático** - Generación dinámica
- **Schema.org** - Structured data para SEO
- **Open Graph** - Meta tags para redes sociales
- **Optimización de imágenes** - Sharp para compresión

### **Content Management**
- **Astro Content Collections** - Sistema de contenido
- **Markdown** - Para blog y servicios
- **Frontmatter** - Metadatos estructurados

## ⚡ Características Implementadas

### **🎯 SEO Avanzado**
- Meta tags dinámicos por página
- Open Graph optimizado para redes sociales
- Schema.org con datos estructurados
- Sitemap XML automático
- Robots.txt configurado

### **📱 Responsive Design**
- Mobile-first approach
- Breakpoints personalizados (hasta 2xl: 1440px)
- Container responsive con padding adaptativo
- Componentes optimizados para todos los tamaños

### **🔧 Componentes Modulares**
- **Header**: Navegación sticky con menú hamburguesa móvil
- **Footer**: Enlaces organizados y redes sociales
- **Hero**: Sección principal con CTA doble
- **ServiceCard**: Cards hover con efectos
- **TestimonialCard**: Carrusel JavaScript vanilla
- **ContactForm**: Formulario funcional con validación

### **📧 Sistema de Contacto**
- API endpoint en `/api/contact.ts`
- Integración con Resend para envío de emails
- Validación con Zod
- Página de confirmación `/gracias`
- Manejo de errores robusto

### **📝 Content Management**
- Blog con sistema de posts en Markdown
- Servicios como Content Collections
- Valores de empresa en archivos separados
- Metadata automática (fechas, autores, etc.)

### **🎨 Design System**
- Tipografía Montserrat
- Paleta de colores corporativa:
  - Primary: `#003B75` (azul corporativo)
  - Accent: `#10B981` (verde)
  - Neutrals: grises personalizados
- Componentes UI reutilizables
- Padding especial para desktop (111px)

## 🔄 Flujo de Desarrollo

### **Branching Strategy**
- **`dev`**: Branch de desarrollo principal
- **`main`**: Branch de producción
- **Feature branches**: Para nuevas características

### **Deployment**
- Integración continua con Vercel
- Auto-deploy desde `main`
- Preview deployments desde PRs
- Variables de entorno para APIs

## 🛠️ Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                      | Descripción                                        |
| :--------------------------- | :------------------------------------------------- |
| `npm install`                | Instalar dependencias                              |
| `npm run dev`                | Servidor de desarrollo en `localhost:4321`         |
| `npm run build`              | Build para producción en `./dist/`                |
| `npm run preview`            | Preview del build local                            |
| `npm run sitemap`            | Generar sitemap en modo estático                  |
| `npm run sitemap:prod`       | Generar sitemap para producción                   |
| `npm run astro ...`          | Comandos del CLI de Astro                          |
| `npm run astro -- --help`    | Ayuda del CLI de Astro                             |

## 📁 Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
# Resend API para formularios
RESEND_API_KEY=tu_api_key_de_resend

# URL del sitio para SEO
PUBLIC_SITE_URL=https://tudominio.com
```

## 📚 Contenido y SEO

### **Content Collections**
El contenido está organizado en colecciones:
- `src/content/blog/` - Posts del blog
- `src/content/services/` - Servicios de la empresa
- `src/content/values/` - Valores corporativos

### **SEO Implementado**
- Meta tags dinámicos
- Open Graph para redes sociales
- Schema.org structured data
- Sitemap XML automático
- Optimización de imágenes

### **Imágenes Sociales**
Para optimizar el SEO social, agrega estas imágenes en `/public/`:
- `og-image.jpg` (1200x630px) - Imagen por defecto
- `og-home.jpg` - Para homepage
- `og-servicios.jpg` - Para servicios
- `og-contacto.jpg` - Para contacto
- `og-nosotros.jpg` - Para nosotros
- `og-blog.jpg` - Para blog

## ✅ Estado Actual del Proyecto

### **🎯 Completado Recientemente**
- ✅ **Logo mobile mejorado** - Mayor calidad y mejor proporción (600x400 → 72x48px)
- ✅ **Menú mobile optimizado** - Eliminación de espacios vacíos al navegar
- ✅ **Header responsive** - Layout mejorado para mobile y desktop
- ✅ **Calidad de imágenes** - Optimización al 100% para logos
- ✅ **UX mobile** - Mejor experiencia de navegación móvil
- ✅ **Script robusto** - Inicialización mejorada del menú hamburguesa

### **🔧 Configuración Técnica**
- ✅ **Vercel conectado** - Deployment automático desde rama `dev`
- ✅ **Dominio listo** - mgconsulting.com configurado para conectar
- ✅ **Build optimizado** - Generación de assets estáticos y serverless
- ✅ **Git workflow** - Ramas dev/main configuradas correctamente

## 🚀 Próximas Tareas para Proyecto Finalizado

### **🌐 Conexión de Dominio **
- [ ] **Configurar DNS** - Apuntar mgconsulting.com a Vercel
  - [ ] Registro A: `@` → `76.76.19.61`
  - [ ] CNAME: `www` → `cname.vercel-dns.com`
- [ ] **SSL automático** - Verificar certificado en Vercel
- [ ] **Probar dominio** - Verificar que mgconsulting.com funcione

### **📝 Contenido & Copy **
- [ ] **Revisar textos** - Pulir copys de todas las páginas
- [ ] **Completar blog** - Añadir más posts relevantes
- [ ] **Testimonios reales** - Reemplazar testimonios de prueba
- [ ] **Metadatos SEO** - Revisar titles y descriptions
- [ ] **Imágenes del equipo** - Fotos profesionales para "Nosotros"

### **🎨 Ajustes Visuales **
- [ ] **Favicon personalizado** - Reemplazar favicon por defecto
- [ ] **Animaciones sutiles** - Micro-interacciones en CTAs
- [ ] **Dark mode** (opcional) - Tema oscuro
- [ ] **Loader personalizado** - Pantalla de carga con logo

### **📈 Analytics & Tracking **
- [ ] **Google Analytics 4** - Configurar tracking
- [ ] **Google Search Console** - Verificar propiedad del sitio
- [ ] **Facebook Pixel** (opcional) - Para remarketing
- [ ] **Hotjar** (opcional) - Mapas de calor y grabaciones

### **🔧 Optimización Final **
- [ ] **Performance audit** - Google Lighthouse > 90
- [ ] **Accesibilidad** - WCAG 2.1 AA compliance
- [ ] **Cross-browser testing** - Safari, Firefox, Chrome, Edge
- [ ] **Mobile testing** - iOS Safari, Chrome Mobile

### **📧 Funcionalidades Adicionales **
- [ ] **Newsletter signup** - Formulario de suscripción
- [ ] **WhatsApp integration** - Botón flotante de contacto
- [ ] **Blog comments** - Sistema de comentarios
- [ ] **Calculadora de ROI** - Tool interactivo para leads

### **🛡️ Seguridad & Backup **
- [ ] **Backup automático** - GitHub como respaldo
- [ ] **Monitoring uptime** - Alertas de caída del sitio
- [ ] **CDN configuration** - Optimización de velocidad global
- [ ] **Security headers** - Configuración en Vercel



---

**Desarrollado con ❤️ para MG Consulting**
