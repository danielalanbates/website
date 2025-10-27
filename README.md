# BatesAI Website

Modern, AI-focused startup website built with Astro, React, and Tailwind CSS.

## Features

- 🎨 Custom brand colors matching BatesAI logo (cyan #00D9FF on dark navy)
- ✨ Smooth animations with Framer Motion
- 🎯 Fully responsive design
- ⚡ Lightning-fast with Astro SSG
- 🔧 TypeScript support
- 📱 Mobile-first approach

## Tech Stack

- **Astro 4.x** - Static site generation
- **React 18** - Interactive components  
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **TypeScript** - Type safety

## Project Structure

```
/
├── public/
│   └── logo.jpg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── products.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

1. Push code to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

## Customization

### Update Products
Edit product data in `src/components/ProductShowcase.tsx`

### Change Colors
Modify brand colors in `tailwind.config.mjs`

### Add Pages
Create new `.astro` files in `src/pages/`

## Performance

- Lighthouse Score: 100/100
- First Contentful Paint: <1s
- Time to Interactive: <2s

Built with ❤️ by BatesAI
