# MG Sitio — Company Website

## 1. Project Overview

This project is a company website built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/) (v4.1). It features a modern, responsive design and a component-driven architecture for maintainability and scalability.

## 2. Project Structure

The main structure of the project is as follows:

```text
src/
├── assets/
├── components/
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   └── SectionTitle.astro
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── home/
│   │   └── Hero.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── servicios.astro
│   ├── nosotros.astro
│   ├── blog/
│   │   └── index.astro
│   └── contacto.astro
├── data/
├── lib/
├── types/
├── content/
├── styles/
│   └── global.css
```

**Key Components:**
- `ui/`: `Button`, `Container`, `SectionTitle`
- `layout/`: `Header`, `Footer`
- `home/`: `Hero`
- Layout: `BaseLayout`
- Pages: `servicios`, `nosotros`, `blog/index`, `contacto`

**Other folders:**
- `data/`: For static data used throughout the site (e.g., JSON or JS data files).
- `lib/`: Utility functions and shared logic.
- `types/`: TypeScript type definitions.
- `content/`: Markdown or other content files for blog posts or static pages.

## 3. Styling

Styling is handled with **TailwindCSS v4.1**. The main theme is configured in `src/styles/global.css`, including:
- Custom typography
- Color palette
- Responsive breakpoints

All components utilize Tailwind utility classes for rapid and consistent styling.

## 4. Development Workflow

We use a branching strategy to ensure stable deployments:
- **dev** branch: All development work is done here.
- **main** branch: Production branch. Only updated by merging PRs from `dev`.

Please open pull requests from feature branches into `dev`. Once changes are reviewed and tested, merge `dev` into `main` for production deployment.

## 5. Implemented Features

- **Header**: Responsive, includes company logo, navigation links, and a prominent CTA button.
- **Footer**: Responsive, with logo, navigation links, social media links, and copyright.
- **Global Container**: Ensures consistent layout and padding across all sections.
- **Hero Section**: Features a background, strong heading, supporting image, and two CTA buttons.
- **CardService Component**: Displays service offerings in a modular card format.
- **TestimonialCard Component**: Responsive carousel—shows a single card on mobile, multiple cards on larger screens.

## 6. Commands

All commands are run from the root of the project in your terminal:

| Command                   | Description                                       |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Install dependencies                              |
| `npm run dev`             | Start local dev server at `localhost:4321`        |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally before deploying       |
| `npm run astro ...`       | Run Astro CLI commands, e.g. `astro check`        |
| `npm run astro -- --help` | Get help using the Astro CLI                      |

## 7. Next Steps

- **Content Integration**: Add final copy, SEO metadata, and optimized images.
- **Final Polish**: Review responsiveness, accessibility, and browser compatibility.
- **Deployment**: Deploy to production from the `main` branch.
