# SAMI ULLAH — Portfolio

> Full Stack Developer & AI Enthusiast

A premium personal portfolio built with modern frontend best practices.
Designed to compete with portfolios featured on Awwwards, Framer, and Webflow.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Components | Shadcn UI |
| Fonts | Space Grotesk · Inter · JetBrains Mono |
| Theme | next-themes (dark/light) |

---

## Project Structure

```
├── app/
│   ├── layout.tsx          ← Root layout (fonts, metadata, providers)
│   ├── page.tsx            ← Home page
│   ├── not-found.tsx       ← 404 page
│   ├── loading.tsx         ← Loading state
│   └── globals.css         ← Design system CSS variables
│
├── components/
│   ├── layout/             ← Navbar, Footer, PageWrapper
│   ├── ui/                 ← Button, Card, Badge, Heading, etc.
│   └── providers/          ← ThemeProvider
│
├── constants/
│   ├── site.ts             ← Metadata, nav links, social links
│   └── theme.ts            ← Design tokens
│
├── hooks/
│   ├── useScrollProgress   ← 0–1 scroll value
│   ├── useReducedMotion    ← Accessibility: prefers-reduced-motion
│   └── useTheme            ← Hydration-safe theme toggle
│
├── lib/
│   ├── utils.ts            ← cn(), clamp(), formatDate()
│   └── fonts.ts            ← Next/font definitions
│
├── styles/
│   └── animations.ts       ← Framer Motion variants
│
└── types/
    └── index.ts            ← Shared TypeScript types
```

---

## Design System

### Color Palette

| Token | Value |
|---|---|
| Primary | `#2563EB` |
| Secondary | `#7C3AED` |
| Accent | `#06B6D4` |
| Success | `#10B981` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |
| Dark bg | `#0B1120` |
| Light bg | `#F8FAFC` |

### Border Radii

| Element | Radius |
|---|---|
| Buttons / Inputs | 14px |
| Cards | 20px |
| Images | 24px |
| Sections | 32px |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
npm run format   # Prettier format
```

---

## Roadmap

- [x] Phase 1 — Foundation & Architecture
- [ ] Phase 2 — Hero Section
- [ ] Phase 3 — About Section
- [ ] Phase 4 — Experience / Timeline
- [ ] Phase 5 — Projects Showcase
- [ ] Phase 6 — Skills & Technologies
- [ ] Phase 7 — Contact Section
- [ ] Phase 8 — Achievements & Certifications
