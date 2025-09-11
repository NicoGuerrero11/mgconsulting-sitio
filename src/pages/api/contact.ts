// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { z } from "zod";
import { Resend } from "resend";

/**
 * ENV requeridas (configúralas en Vercel y en .env.local si pruebas en local):
 */
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const CONTACT_FROM = import.meta.env.CONTACT_FROM ?? "";
const CONTACT_TO = import.meta.env.CONTACT_TO ?? "";

// Esquema de validación
const Schema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    subject: z.string().min(2).max(120),
    message: z.string().min(10).max(5000),
    // anti-bot
    company_site: z.string().optional(), // honeypot (debe venir vacío)
    started_at: z.string().optional(),   // timestamp de cuando se cargó el form
});

export const POST: APIRoute = async ({ request }) => {
    try {
        // 1) Leer form
        const formData = await request.formData();
        const raw = Object.fromEntries(formData) as Record<string, string>;

        // 2) Validar datos
        const parsed = Schema.safeParse(raw);
        if (!parsed.success) {
            return new Response("Datos inválidos", { status: 400 });
        }
        const { name, email, subject, message, company_site, started_at } = parsed.data;

        // 3) Anti-bot: honeypot -> si viene relleno, nos hacemos los locos (no error, no envío)
        if (company_site && company_site.trim() !== "") {
            return redirectGracias();
        }

        // 4) Anti-bot: tiempo mínimo de llenado (3s)
        const started = Number(started_at || Date.now());
        if (Date.now() - started < 3000) {
            return redirectGracias();
        }

        // 5) Comprobar ENV
        if (!import.meta.env.RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO) {
            console.error("Faltan ENV: RESEND_API_KEY / CONTACT_FROM / CONTACT_TO");
            return new Response("Misconfiguración del servidor", { status: 500 });
        }

        // 6) Armar HTML seguro
        const html = `
      <h2>Nuevo mensaje desde el sitio</h2>
      <p><b>Nombre:</b> ${esc(name)}</p>
      <p><b>Email:</b> ${esc(email)}</p>
      <p><b>Asunto:</b> ${esc(subject)}</p>
      <p><b>Mensaje:</b><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
    `;

        // 7) Enviar correo con Resend
        await resend.emails.send({
            from: CONTACT_FROM,
            to: [CONTACT_TO],
            subject: `[Web] ${subject}`,
            replyTo: email,
            html,
        });

        // 8) Redirigir a gracias
        return redirectGracias();
    } catch (err) {
        console.error(err);
        return new Response("Error interno", { status: 500 });
    }
};

// Solo permitimos POST
export const GET: APIRoute = async () =>
    new Response("Method Not Allowed", { status: 405 });

/** Helpers */
function redirectGracias() {
    return new Response(null, {
        status: 303,
        headers: { Location: "/contacto/gracias" },
    });
}

function esc(s: string) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}