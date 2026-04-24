# Tilla Coffee Export

**Live Demo:** [View on Vercel](https://tilla-coffee.vercel.app/)

Tilla Coffee Export is a premium destination showcasing the finest Ethiopian specialty coffee (from Yirgacheffe, Sidamo, Guji, and Harrar) to the world's best roasters. We deliver a deeply immersive, story-driven digital experience to celebrate Ethiopian coffee culture through our luxurious aesthetic. Visitors can explore our origins, learn about our washing and processing stations, interact with 3D product representations, and easily submit wholesale inquiries.

## Key Features

- **Immersive Scroll Experience:** A custom 100-frame scroll-linked canvas animation that tells the story of Ethiopian coffee from highlands to cup.
- **Premium UI/UX:** High-end, dark-mode design system utilizing gold accents and vintage typography (Playfair Display) to signify absolute luxury.
- **B2B Focused:** Clear product showcases for distinct regional beans, complete with altitude, tasting notes, and processing methods.
- **Fully Responsive & Localized:** Graceful degradation on mobile devices and built-in contextual language toggling.

---

## Tech Stack

- **Framework**: Next.js 14/15 (App Router)
- **Library**: React 19
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Netlify / Vercel

---

## Architecture Overview

### Directory Structure

```text
├── app/
│   ├── globals.css        # Global Tailwind and custom CSS variables
│   ├── layout.tsx         # Root layout with language provider and fonts
│   ├── page.tsx           # Main landing page assembling sections
│   └── template.tsx       # Next.js template wrapper
├── components/
│   ├── AboutSection.tsx   # Heritage and origin details
│   ├── CoffeeExperience.tsx # 100-frame interactive scroll animation
│   ├── Navbar.tsx         # Responsive top navigation
│   ├── ProductsSection.tsx# Bean catalog showcase
│   └── ...other sections
├── context/
│   └── LanguageContext.tsx # Context provider for i18n
├── public/                # Static assets, images, and sequence frames
└── tailwind.config.ts     # Tailwind configuration (v4 inline)
```

### Data Flow

```text
User Action → Component State/Context → Framer Motion Animation → Render Update
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to catch code issues |

---

## Deployment

This website is configured to be seamlessly deployed on platforms like **Netlify** or **Vercel**.

1. Connect your GitHub repository to your Netlify/Vercel dashboard.
2. Set the build command to `npm run build`.
3. Set the output directory to `.next`.
4. Deploy!

*Note: For highest performance, ensure automatic image optimization is active on your hosting platform for the sequence frames.*
