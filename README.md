# Solar Portfolio

Interactive creative portfolio built as a solar system. Each planet represents a section of my profile: projects, experience, skills, contact and more.

## Tech Stack

- [Astro](https://astro.build) 7 — static site generator
- TypeScript 6 — strict mode
- Vanilla CSS — animations, custom properties, responsive
- Native `<dialog>` — modal without libraries
- ESLint + `typescript-eslint` + `eslint-plugin-astro` + `jsx-a11y`
- `@astrojs/check` — type checking for `.astro` files

## Solar System

| Planet   | Section                  |
|----------|--------------------------|
| ☀️ Sun   | Bienvenido / Identidad   |
| Mercury  | Proyectos destacados     |
| Venus    | Experiencia profesional  |
| 🌍 Earth | Formación                |
| 🔴 Mars  | Skills & Herramientas    |
| Jupiter  | Reflexión                |
| Saturn   | Sobre mí                 |
| Uranus   | Extras                   |
| Neptune  | Contacto                 |

Click any planet to open the modal, or navigate with Tab/Enter/arrow keys.

## Accessibility

- WCAG 2.2 AA compliant
- Skip link, landmarks (`<nav>`, `<main>`, `<header>`, `<footer>`)
- Keyboard navigation, `:focus-visible` outlines
- `prefers-reduced-motion` respected
- Semantic headings, `aria-hidden` on decorative SVGs

## SEO

- `robots.txt`, `sitemap.xml`
- Canonical URL, meta tags, OG/Twitter cards
- Structured data (Person schema)

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output in dist/
pnpm preview    # preview production build
pnpm lint       # ESLint
pnpm check      # type-check .astro + .ts
```
