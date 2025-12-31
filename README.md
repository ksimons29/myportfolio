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
│   ├── Header.tsx          # Hero section
│   ├── Footer.tsx          # Contact section
│   ├── Section.tsx         # Reusable section wrapper
│   ├── AboutSection.tsx
│   ├── ProfileCards.tsx    # Expandable capability cards
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   ├── SkillsGrid.tsx
│   ├── EducationCard.tsx
│   ├── LanguageBar.tsx
│   ├── AvailabilitySection.tsx  # "Open to work" CTA
│   ├── BeyondWork.tsx
│   └── LLYLIWidget.tsx     # Floating CTA
├── lib/
│   ├── types.ts        # TypeScript interfaces
│   └── content.ts      # All site content
└── public/
    └── images/         # Profile photo and assets
```

## Architecture Overview

### System Design

This portfolio uses a modern, type-safe architecture optimized for maintainability and performance:

```
Browser → Next.js App → Components → Content (lib/content.ts) → Render
                     ↓
                 Tailwind CSS (globals.css)
                     ↓
                 Vercel Edge CDN
```

### Technology Choices

**Next.js 16 with App Router**
- Modern React framework with server-side rendering
- Automatic code splitting and optimization
- Built-in image and font optimization
- Zero-config TypeScript support

**TypeScript**
- Compile-time type checking prevents errors
- Self-documenting code through interfaces
- Better IDE support with autocomplete
- Enforces content structure consistency

**Tailwind CSS v4**
- CSS-first configuration (new in v4)
- Design tokens defined as CSS custom properties
- Utility-first approach prevents style conflicts
- Automatic purging of unused styles

**Single-File Content Management**
- All content lives in `lib/content.ts`
- Type-safe editing via `lib/types.ts` interfaces
- Version controlled (Git)
- No database or CMS required
- Simple update workflow: edit file → push → deploy

### Component Architecture

**Reusable Section Wrapper**

The `Section.tsx` component provides consistent structure:

```tsx
<Section title="Experience">
  <ExperienceCard />
</Section>
```

Benefits:
- Consistent spacing and layout
- Semantic HTML structure
- Easy to add new sections
- DRY (Don't Repeat Yourself)

**Content Separation**

Components import content rather than containing it:

```tsx
// lib/content.ts
export const experience = [...]

// components/ExperienceCard.tsx
import { experience } from '@/lib/content'
```

Benefits:
- Update content without touching React code
- Single source of truth
- Type safety prevents structure errors
- Future-proof (can swap to API/CMS later)

### Design System

**Color Palette**
- Warm neutrals (ink, paper, cream)
- Gold and terracotta accents
- Editorial luxury aesthetic
- Defined as CSS custom properties in `globals.css`

**Typography**
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: DM Sans (sans-serif, readable)
- Self-hosted via Next.js font optimization
- No external font requests (privacy + performance)

**Responsive Design**
- Mobile-first approach
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single-page scroll layout for narrative flow

### Performance Characteristics

Expected metrics:
- **Lighthouse Score**: 95-100
- **First Contentful Paint**: <1s
- **Bundle Size**: ~50-100KB gzipped

Optimizations:
- Static site generation (no server processing)
- Automatic image optimization (WebP, lazy loading)
- Tailwind CSS purging (minimal final CSS)
- Self-hosted fonts (no external requests)
- Edge deployment via Vercel CDN

### File Organization

**App Router** (`app/`)
- `layout.tsx`: Root layout, fonts, metadata
- `page.tsx`: Main portfolio composition
- `globals.css`: Tailwind theme and CSS variables

**Components** (`components/`)
- Flat structure (no deep nesting)
- Feature-specific components (Header, Footer, etc.)
- Reusable wrapper (Section.tsx)

**Data Layer** (`lib/`)
- `content.ts`: Single source of truth for all content
- `types.ts`: TypeScript interfaces defining structure

**Assets** (`public/images/`)
- Profile photos and static images
- Automatically optimized by Next.js

### Development Workflow

**Content Updates**
1. Edit `lib/content.ts`
2. TypeScript validates structure
3. Preview locally with `npm run dev`
4. Push to GitHub
5. Vercel auto-deploys

**Adding Sections**
1. Create component in `components/`
2. Import content from `lib/content.ts`
3. Wrap in `<Section>` for consistency
4. Add to `page.tsx`

**Styling Changes**
1. Edit CSS variables in `globals.css` for theme changes
2. Use Tailwind utilities in components
3. Consistent design tokens prevent inconsistencies

### Why This Architecture?

**Appropriate Complexity**
- Not over-engineered (no unnecessary backend)
- Not under-engineered (type-safe, maintainable)
- Right tools for a personal portfolio

**Maintainable**
- Clear file structure
- Single source of truth for content
- Type safety prevents errors
- Well-documented code

**Performant by Default**
- Static generation
- Optimized assets
- Edge deployment
- Minimal bundle size

**Future-Proof**
- Easy to add pages (blog, projects)
- Can migrate to CMS later if needed
- Scalable architecture
- Modern tech stack (Next.js 16, Tailwind v4)

**Demonstrates Technical Competency**
- Shows understanding of modern web development
- Clean architecture and component design
- Type safety and best practices
- Production-quality code

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
