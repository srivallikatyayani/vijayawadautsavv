# Vijayawada Utsav 2026 — Competitions Website

React + Vite source for the Vijayawada Utsav competitions site.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173). Use `npm run build` for a production build in `dist/`, and `npm run preview` to check it.

Requires Node.js 18 or newer. Fonts load from Google Fonts, so the first load needs an internet connection.

## Where things live

- `src/data/events.js`: every competition, programme, rule, date and link, including the Google Form (`LINKS.mainForm`), the Wonder Women form, the WhatsApp group and the guidelines document. Edit this file to update content.
- `src/components/`: one component per section (Hero, Manifesto, Programmes, Explorer, Beyond, Register, Rules, Footer, DetailOverlay, PosterViewer and so on).
- `src/lib/experience.js`: the interaction layer, covering the loader, custom cursor, magnetic buttons, scroll choreography, programme panels, competition finder, detail page, poster viewer and registration flow. It uses plain JavaScript and Web APIs, with no animation library.
- `src/styles/global.css`: all styling, including the torn-paper transitions, dark mode and reduced-motion rules.
- `public/posters/`: the official posters. `public/logo.png`: the festival logo.

## Content notes

- The curtain raiser always shows its fixed date, 28 September 2026. No relative labels are used.
- Crown of Vijayawada has no published registration link yet, so its buttons point to the official WhatsApp group. Add the link to `LINKS` in `src/data/events.js` and set that programme's `reg` field when it's available.
