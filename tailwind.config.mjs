// tailwind.config.mjs
import { defineConfig } from "tailwindcss"

export default defineConfig({
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1440px", // 👈 tu desktop máximo
            },
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "2rem",
                xl: "111px", // 👈 padding especial que mencionaste
            },
        },
        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#003B75", // azul corporativo
                accent: "#10B981",  // verde de botones
                neutral: {
                    900: "#171A1F",
                    600: "#565D6D",
                },
            },
        },
    },
    plugins: [],
})