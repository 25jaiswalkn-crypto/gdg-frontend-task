# Google Developer Groups, RBU - Frontend Task

A responsive single-page website for GDG On Campus, Ramdeobaba University, built from the provided Figma design for the GDG RBU Recruitment Drive 2026-27 (Web Dev - Frontend).

**Live site:** https://gdg-frontend-task-one.vercel.app
**Repository:** https://github.com/25jaiswalkn-crypto/gdg-frontend-task

## Features

- Pixel-faithful neo-brutalist UI: thick borders, hard shadows, Google brand colors
- Sections: Hero, Upcoming Events, Meet the Team, FAQs, Footer
- Fully responsive across mobile, tablet, and desktop
- Dark / light mode with system preference detection (next-themes)
- Smooth animations: scroll-in reveals, animated FAQ accordion, hover transitions (Framer Motion)
- Respects `prefers-reduced-motion`
- Semantic HTML and accessible controls (aria-expanded, aria-controls, labelled buttons)
- Optimized images with `next/image` and fonts with `next/font`

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- lucide-react
- Deployed on Vercel

## Getting Started

```bash
git clone https://github.com/25jaiswalkn-crypto/gdg-frontend-task.git
cd gdg-frontend-task
npm install
npm run dev
```

Open http://localhost:3000.

### Production build

```bash
npm run build
npm start
```

## Project Structure
```
gdg-frontend-task/
├── public/
│   └── team.png              # Team photo
├── src/
│   ├── app/
│   │   ├── globals.css       # Design tokens, light/dark themes
│   │   ├── layout.tsx        # Root layout, fonts, theme provider
│   │   └── page.tsx          # Page composition
│   └── components/
│       ├── Navbar.tsx        # Sticky nav, mobile menu, theme toggle
│       ├── ThemeToggle.tsx   # Dark / light switch
│       ├── Hero.tsx          # Heading, intro, CTAs, graphic
│       ├── Events.tsx        # Upcoming event cards
│       ├── Team.tsx          # Team intro and photo
│       ├── Faqs.tsx          # Accessible accordion
│       ├── Footer.tsx        # Contact tiles, socials, confetti strip
│       ├── Logo.tsx          # GDG logo (SVG)
│       └── Confetti.tsx      # Decorative shape strip (SVG)
├── .vscode/
│   └── settings.json         # Editor settings
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## Design Decisions

- Theme colors are CSS variables, so every component switches theme without extra logic.
- Components are small and single-purpose for easy maintenance.
- Decorative graphics are inline SVG to keep the page light.

## Author

Khushi - GDG RBU Recruitment 2026-27
'@
