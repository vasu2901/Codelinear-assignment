# N7 — Modern Banking Landing Page

A pixel-inspired, fully responsive landing page for **N7**, a modern cloud-based core banking platform. Built with **Next.js** and **Tailwind CSS v4**, featuring a dark, editorial aesthetic with subtle motion and a reusable design-token system.

---

## ✨ Features

- **Fully responsive** — mobile, tablet, and desktop layouts
- **Dark, premium UI** with semantic design tokens (oklch color space)
- **Reusable section components** under `src/components/landing/`
- **Smooth animations** — fade-up, float, and gradient effects
- **SEO-ready** — semantic HTML, meta tags, single H1 per page
- **Type-safe routing** via TanStack Router file-based routes
- **shadcn/ui** components available out of the box

---

## 🧱 Tech Stack

| Layer            | Tool                                |
| ---------------- | ----------------------------------- |
| Framework        | Next.js                             |
| Styling          | Tailwind CSS v4 + CSS variables     |
| UI Primitives    | shadcn/ui + Radix                   |
| Icons            | lucide-react                        |
| Language         | TypeScript (strict)                 |
| Package Manager  | NPM                                 |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
public/ # Generated hero & dashboard images
src/                
├── components/
│   ├── landing/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── Solutions.tsx
│   │   ├── CoreBanking.tsx
│   │   ├── CB7Features.tsx
│   │   ├── PaperlessCTA.tsx
│   │   ├── Insights.tsx
|   |   ├── DigitalBanking.tsx
│   │   ├── CaseStudies.tsx
│   │   └── Footer.tsx
│   └── ui/                  # shadcn/ui primitives
├── app/
│   ├── globals.css          # CSS Sheet
│   └── page.tsx            # Landing page

```

---

## 🎨 Design System

All colors, gradients, shadows, and radii are defined as CSS variables in `src/app/globals.css`:

```css
--background: oklch(0.13 0.03 250);
--foreground: oklch(0.96 0.01 220);
--brand-blue: oklch(0.62 0.21 255);
--gradient-cta: linear-gradient(...);
--gradient-hero-glow: radial-gradient(...);
```

Use semantic Tailwind classes (`bg-background`, `text-foreground`, `text-primary`) — never hard-coded colors.

---

## 🧩 Landing Page Sections

1. **Hero** — Headline, dual CTA, floating balance & activity cards, trusted-by logos
2. **Solutions** — 5-card grid (CB7, N7, Open Banking, Loan Origination, Loan Management)
3. **Core Banking** — Giant "B7" stroke text + dashboard preview
4. **CB7 Features** — 9-item feature checklist with product screenshot
5. **Paperless CTA** — Mid-page call-to-action band
6. **Insights** — Editorial blog card grid
7. **Case Studies** — Carousel-style customer stories
8. **Footer** — Multi-office addresses + sitemap
9. **DigitalBanking** - Descriptive Page with compliance details

---

## 📜 Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start dev server             |
| `npm run build`  | Production build             |
| `npm run start`  | Run production server        |
| `npm run lint`   | Run ESLint                   |

---

## 📄 License

Private — for demonstration purposes.
