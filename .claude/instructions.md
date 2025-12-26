# Portfolio Website - Build Instructions

## Project Overview
Transform existing YAML content and CSS styles into a modern Next.js portfolio website.

## Input Files Location
- Content YAMLs: `/input/*.yml`
- Styles: `/input/custom.css`
- Images: `/input/assets/`

## Tech Stack
- Next.js 14+ (App Router) - already initialized
- TypeScript - already set up
- Tailwind CSS - already configured
- YAML parsing library (js-yaml)

## Key Instructions

### 1. Content Management
- Parse all YAML files in `/input/` as single source of truth
- Create TypeScript types matching YAML structure
- All content should be updatable via YAML only
-use Frontend Skills

### 2. Styling Approach
- Review `/input/custom.css` for design intent
- Convert to Tailwind classes where possible
- Keep custom CSS only for unique requirements
- Maintain color scheme and typography from original

### 3. Sections to Build
Build these sections in order:

1. **Hero/Landing** - Name, title, tagline, CTA with profile image
2. **About** - Professional summary, key skills, current status
3. **Work Experience** - Timeline from experience.yml
4. **Projects** - Showcase from projects.yml with project images
5. **Education** - Academic background from education.yml
6. **Skills** - Technical and domain expertise grid
7. **Contact** - Email, LinkedIn, location (Lisbon, Portugal)

### 4. Dark Mode Implementation
- Use Tailwind's dark mode with class strategy (already in config)
- Toggle button in navigation (moon/sun icon)
- Persist preference in localStorage
- Smooth transitions between modes
- Ensure all sections readable in both modes
- Use appropriate contrast ratios

### 5. Image Integration
Images located in `/input/assets/`:
- profile.jpg - Use in Hero section
- llyli-widget.png - Use in Projects section
- Other images as appropriate

Requirements:
- Use Next.js Image component for optimization
- Make images responsive
- Add appropriate alt text
- Lazy load below-fold images

### 6. Component Structure
- Create reusable UI components in `/components`
- Keep components clean and documented
- Responsive by default (mobile-first)
- TypeScript types for all props

### 7. Deployment Ready
- Vercel-optimized build
- Environment variables template if needed
- Performance optimized (images, bundles)
- Lighthouse score target: >90

## Success Criteria
- Matches design aesthetic from input CSS
- All content driven by YAML files
- Responsive on mobile/tablet/desktop
- Dark mode fully functional
- Images optimized and loading properly
- Clean, documented code
- Ready to deploy to Vercel

## Current Status
Project already initialized with Next.js, TypeScript, and Tailwind.
Focus on building components and integrating content/images.

## Design References
Reference images in `/docs/reference/` for design inspiration:
- Use these for layout, spacing, color scheme guidance
- DO NOT copy directly - adapt to Next.js/Tailwind approach
- Match the aesthetic and feel, not pixel-perfect

Production images in `/input/assets/` for actual site content.