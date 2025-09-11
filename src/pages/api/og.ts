// src/pages/api/og.ts
import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { sanity } from "../../lib/sanity";
import { postBySlugQuery } from "../../lib/queries";

export const prerender = false;
export const runtime = "edge"; // si usas @astrojs/vercel, correrá en Edge; en local se ignora

// Cargamos una fuente (Inter) una sola vez en memoria
let fontData: ArrayBuffer | null = null;
async function loadFont() {
    if (fontData) return fontData;
    const url = "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff";
    const res = await fetch(url);
    fontData = await res.arrayBuffer();
    return fontData;
}

export const GET: APIRoute = async ({ url }) => {
    try {
        const slug = url.searchParams.get("slug");
        if (!slug) return new Response("Missing slug", { status: 400 });

        // trae datos del post
        const post = await sanity.fetch(postBySlugQuery, { slug });
        if (!post) return new Response("Post not found", { status: 404 });

        const title: string = post.title ?? "Post";
        const safeTitle = title.length > 120 ? title.slice(0, 117) + "…" : title;
        const cover: string | undefined = post.image;

        // Árbol para Satori. Lo tipamos como any para evitar fricciones de TS con la firma de satori
        const tree: any = {
            type: "div",
            props: {
                style: {
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "40px",
                    background: cover ? "#0f172a" : "linear-gradient(135deg,#0f172a 0%,#1e293b 100%)", // slate-900 + fallback gradiente
                    color: "white",
                    position: "relative",
                },
                children: [
                    // bg cover opcional con overlay
                    cover
                        ? {
                            type: "img",
                            props: {
                                src: cover,
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    opacity: 0.25,
                                    filter: "blur(2px)",
                                },
                            },
                        }
                        : null,
                    {
                        type: "div",
                        props: {
                            style: { position: "relative", zIndex: 1 },
                            children: [
                                {
                                    type: "div",
                                    props: {
                                        style: {
                                            fontSize: 20,
                                            opacity: 0.9,
                                            marginBottom: 12,
                                        },
                                        children: "Blog",
                                    },
                                },
                                {
                                    type: "div",
                                    props: {
                                        style: {
                                            fontSize: 44,
                                            fontWeight: 700,
                                            lineHeight: 1.1,
                                        },
                                        children: safeTitle,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        type: "div",
                        props: {
                            style: {
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            },
                            children: [
                                {
                                    type: "div",
                                    props: { style: { fontSize: 18, opacity: 0.9 }, children: post.author || "—" },
                                },
                                {
                                    type: "div",
                                    props: {
                                        style: {
                                            fontSize: 16,
                                            padding: "6px 10px",
                                            background: "rgba(255,255,255,0.12)",
                                            borderRadius: 8,
                                        },
                                        children: new Date(post.pubDate).toLocaleDateString(),
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        };

        const svg = await satori(
            tree as any,
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Inter",
                        data: await loadFont(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            } as any
        );

        const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
        const body = new Blob([new Uint8Array(png)], { type: "image/png" });

        return new Response(body, {
            headers: {
                "Content-Type": "image/png",
                // cachea por 1 día en edge/CDN (ajusta a gusto)
                "Cache-Control": "public, max-age=86400, immutable",
            },
        });
    } catch (e) {
        console.error(e);
        return new Response("OG error", { status: 500 });
    }
};