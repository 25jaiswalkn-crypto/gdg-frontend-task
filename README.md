# Google Developer Groups, RBU - Frontend Task

A responsive single-page website for GDG On Campus, Ramdeobaba University, built from the provided Figma design for the GDG RBU Recruitment Drive 2026-27 (Web Dev - Frontend).

**Live site:** https://YOUR-APP.vercel.app
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
