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

export const collections = { services };