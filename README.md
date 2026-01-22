
# Ravishankar Dakoju - Portfolio Website

A premium, Rotary-inspired personal profile and impact portfolio website for Ravishankar Dakoju. Built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Rotary Theme**: Custom "Rotary Blue" and "Rotary Gold" color palette (`tailwind.config.ts`).
- **Editable Content**: All text, stats, and links are managed in `src/content/site.ts`.
- **Responsive Design**: Mobile-first, sticky navbar, and smooth animations.
- **Components**:
  - Impact Strip & Hero with 3D-feel animations.
  - Interactive "Signature Projects" grid with Modals.
  - Vertical Timeline.
  - Gallery with Lightbox.
  - Dedicated "Rotary Journey" section.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   npm install lucide-react framer-motion clsx tailwind-merge
   ```
   *(Note: Ensure you have Node.js 18+ installed)*

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Customizing Content

- **Text & Data**: Edit `src/content/site.ts`.
- **Images**:
  - Place your gallery images in `public/gallery/` (e.g., `img1.jpg`, `img2.jpg`).
  - Update filenames in `src/content/site.ts`.
  - Add a portrait image for the Hero section in `src/components/hero.tsx` (replace the placeholder div).

## Project Structure

- `src/app`: Pages and Layout (Next.js App Router).
- `src/components`: UI components (Hero, Navbar, Impact, etc.).
- `src/content`: Data source (`site.ts`).
- `src/lib`: Utilities.
- `public`: Static assets.

## Deployment

Deploy easily on Vercel:

```bash
npx vercel
```
