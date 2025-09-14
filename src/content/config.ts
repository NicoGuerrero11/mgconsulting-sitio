import { defineCollection, z } from "astro:content";

// services
const services = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        excerpt: z.string().max(280),
        image: z.string().optional(),       // ruta en /public/...
        ctaText: z.string().default("Agendar una consulta"),
        order: z.number().default(0),
        imageSide: z.enum(["left", "right"]).default("left"), // controlar layout
        draft: z.boolean().default(false),

    }),
});

// Valores (uno por archivo)
const values = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        icon: image(),                        // opcional (svg/png/jpg)
        order: z.number().default(0),
    }),
});

// Blog
const blog = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().min(10),
        date: z.coerce.date(),
        author: z.string().default("Equipo"),
        imagen: image().optional()       // opcional (svg/png/jpg)
    }),
});


export const collections = { services, values, blog };