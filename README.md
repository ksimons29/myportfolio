# Koos Simons Portfolio

A modern, professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Deployment**: Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Updating Content

All content is managed in a single file: `lib/content.ts`

Edit this file to update:
- Personal info (name, email, socials)
- About section
- Current work / projects
- Selected outcomes (case studies)
- Work experience
- Skills
- Education
- Languages

The site will automatically reflect your changes.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and Tailwind theme
├── components/
│   ├── Header.tsx      # Hero section
│   ├── Footer.tsx      # Contact section
│   ├── Section.tsx     # Reusable section wrapper
│   ├── AboutSection.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   ├── SkillsGrid.tsx
│   ├── EducationCard.tsx
│   ├── LanguageBar.tsx
│   ├── BeyondWork.tsx
│   └── LLYLIWidget.tsx # Floating CTA
├── lib/
│   ├── types.ts        # TypeScript interfaces
│   └── content.ts      # All site content
└── public/
    └── images/         # Profile photo and assets
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ksimons29/my-portfolio)

Or manually:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

## Design System

The site uses an "Editorial Luxury" design with:

- **Colors**: Warm neutrals (ink, paper, cream) with gold and terracotta accents
- **Typography**: Serif for headings (Cormorant Garamond), sans-serif for body (DM Sans)
- **Layout**: Single-page scrolling with distinct sections
- **Responsive**: Mobile-first with tablet and desktop breakpoints
