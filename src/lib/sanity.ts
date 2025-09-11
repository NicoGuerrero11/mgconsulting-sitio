import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2023-01-01",
    useCdn: true, // para público, rápido
    // token: import.meta.env.SANITY_READ_TOKEN, // solo si leerás drafts/SSR
});