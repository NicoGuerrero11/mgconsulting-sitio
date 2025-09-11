import { toHTML } from "@portabletext/to-html";

// Render Portable Text from Sanity into HTML, respetando headings
export function ptToHtml(body: any) {
    return toHTML(body || [], {
        components: {
            // Mapear estilos de bloque a tags HTML (por defecto eran <p>)
            block: {
                h1: ({ children }) => `<h1 class="pt-h1">${children}</h1>`,
                h2: ({ children }) => `<h2 class="pt-h2">${children}</h2>`,
                h3: ({ children }) => `<h3 class="pt-h3">${children}</h3>`,
                h4: ({ children }) => `<h4 class="pt-h4">${children}</h4>`,
                normal: ({ children }) => `<p class="pt-p">${children}</p>`,
            },
            // Imágenes dentro del Portable Text
            types: {
                image: ({ value }) => {
                    const src = value?.url || value?.asset?.url || "";
                    const alt = value?.alt || "";
                    if (!src) return "";
                    return `<img src="${src}" alt="${alt}" loading="lazy" />`;
                },
            },
            marks: {},
        },
    });
}