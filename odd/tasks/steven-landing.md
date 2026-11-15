# Steven Pelaez trainer landing (React)

Objective: a modern React landing page for personal trainer Steven Pelaez (in-person at Smart Fit Unicentro, Cali, and online coaching), also used as Juan's React portfolio project.
Branch: `feat/landing` · Delivery: single PR (Juan approves push/PR) · Tests: Vitest + React Testing Library (`pnpm test`).

## Specs

- S1 — React project: "si utiliza lo mas optimo para usar react". Vite + React, pnpm, deployable to Netlify.
- S2 — Services: "el ofrece asesorias onnline y presenciales vinculadas al smarfit de unicentro si la persona esta en cali". Two offers: online coaching and in-person training at Smart Fit Unicentro (Cali).
- S3 — Contact: "su nombre de usuario de wp es stevenpelaez_13" and "la dinamica es que mediante whatsapp stiven cuadre precios con los interesados, no tengo su numero, el usuario de whatsapp debe bastar para direccionar a su chat". WhatsApp links use the username; the page shows no prices.
- S4 — Content source: "si me falta info sacala del ig" (instagram.com/stevenpelaez.trainer). Bio facts: trainer at Smart Fit (PT Unicentro team), online coaching, supplement sales, graduate of Escuela Nacional del Deporte.
- S5 — Look: "quiero que la pagina se vea moderna y llamativa" and "quiero que tenga un banner con movimiento y sea muy llamativo y profesional".
- S6 — SEO and design: "usa las tecnicas de Seo y dise[ño]" (message was cut). Meta tags, Open Graph, JSON-LD, sitemap, robots, semantic HTML, responsive at desktop and 390 px, contrast 4.5:1, prefers-reduced-motion.
- S7 — Inspiration: "en mis guardados de instagram tebgo varios videos guardados de ideas de paginas modernas, no tines que copiar igual, solo tomar ideas". Ideas taken: objects orbiting a big disc (product banner), object moving with scroll, footer with WhatsApp, hours and address first.
- S8 (assumption, from the vacancy) — Tests and Git workflow that show junior React skills: components, state, props, controlled form, tests.

## Tasks

| ID | Specs | Route | Status | Evidence |
| --- | --- | --- | --- | --- |
| T1 | S1, S8 | inline | done | scaffold + Vitest config |
| T2 | S3, S8 | inline | done | RED (4 files failed: modules missing) → GREEN 10/10 |
| T3 | S2, S5, S7, S8 | inline | done | sections, plan builder, motion checked in Chrome |
| T4 | S6 | inline | done | inspect.mjs 0 FAIL at 1440/768/390 |
| T5 | all | inline | pending | build, Chrome check, report |

## Log

- L1 (2026-11-14, Juan, verbatim): "su nombre de usuario de wp es stevenpelaez_13 y si utiliza lo mas optimo para usar react, el ofrece asesorias onnline y presenciales vinculadas al smarfit de unicentro si la persona esta en cali y si me falta info sacala del ig, quiero que la pagina se vea moderna y llamativa, usa las tecnicas de Seo y dise"
- L2 (2026-11-14, Juan, verbatim): "quiero que tenga un banner con movimiento y sea muy llamativo y profesional"
- L3 (2026-11-14, Juan, verbatim): "en mis guardados de instagram tebgo varios videos guardados de ideas de paginas modernas, no tines que copiar igual, solo tomar ideas"
- L4: Instagram has no prices, hours or phone. Hours and address on the page are SAMPLE values to confirm with Steven (prices were removed after L8).
- L5: WhatsApp documents `wa.me/<username>` links, but the rollout is regional; not confirmed for Colombia. Switch to the phone number in `src/data/content.js` if the link does not open a chat.
- L6: Design direction dealt by design-taste-frontend: `colour-chapters`, seed 24615522. Idea: the two weight plates of a barbell become the two modes (in person / online).
- L7: Verified in Chrome: plates spin and turn with scroll, orbit and marquee move, plan builder updates the WhatsApp text. inspect.mjs: 0 FAIL, 3 WARN (font size count, no video, marquee "empty middle"). Pending: Steven's own photos and reel, real prices, hours, phone number.
- L8 (2026-11-15, Juan, verbatim): "la dinamica es que mediante whatsapp stiven cuadre precios con los interesados, no tengo su numero, el usuario de whatsapp debe bastar para direccionar a su chat"
- L9: Checked in Chrome: `wa.me/stevenpelaez_13?text=Hola` redirects to `api.whatsapp.com/send/?...&username=stevenpelaez_13&type=username` and shows "Chatea en WhatsApp con el @stevenpelaez_13" with the text kept. The app step was not opened. Prices removed; plans show "A tu medida" and a "Cotizar por WhatsApp" button; FAQ "¿Cuánto cuesta?" added. Pricing tests RED (2 failed) → GREEN 12/12.
- L10 (2026-11-15, Juan, verbatim): "claude la pagina se ve fea, los colores no me conectan con el ejercicio, no pusiste ni una sola foto de stiven, me gusta la idea de movimiento del banner pero parecen circulos no pesas [...] eso esta muy cliche parece usado con ia [...] quita esa foto de la ciudad, esta totalmente fuera de contexto, claude la pagina esta muy mal disenada, no es nada llamativa ni bonita" and "no me gustan esas fotos como blanco y negro que usas".
- L11: Redesign. Dropped the dealt colour-chapters direction. Palette black/graphite/yellow (yellow from the gym in Steven's photos), Big Shoulders Display + Barlow, full-colour photos. Six photos of Steven from his Instagram (downloaded with Juan's approval; reel frames captured from the video). Hero: squat photo + Olympic iron plate (grips, 20 KG, steel sleeve) that spins and turns with scroll. Removed marquee, Cali photo and all stock photos. Tests 13/13 (added About photos test). inspect.mjs 0 FAIL. Pending: Steven's OK to use his photos.
