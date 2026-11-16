# Steven Pelaez · Personal trainer landing page

Landing page for Steven Pelaez, personal trainer at Smart Fit Unicentro (Cali, Colombia) who also coaches online.

**Live:** https://steven-pelaez-trainer.pages.dev

## Features

- Hero with Steven cut out of his photo, pointer parallax and diagonal stripes.
- "Arma tu plan": pick mode, goal and days; the WhatsApp message to Steven writes itself.
- Process accordion, client photo grid (swipe carousel on phones), FAQ accordion.
- WhatsApp contact by username (`wa.me/stevenpelaez_13`), floating button.
- SEO: meta and Open Graph tags, JSON-LD (`Person` + `ExerciseGym`), sitemap and robots.
- Responsive from 360 px, respects `prefers-reduced-motion`.

## Stack

React 19 · Vite · Vitest + Testing Library · plain CSS · Cloudflare Pages.

## Run it

```bash
pnpm install
pnpm dev        # local server
pnpm test       # unit and component tests
pnpm build      # production build in dist/
```

Content (plans, steps, FAQ, client photos) lives in `src/data/content.js`.

## Credits

Photos and clips: [@stevenpelaez.trainer](https://www.instagram.com/stevenpelaez.trainer/).
Built by [Juan Mora](https://github.com/JuanMora1945).
