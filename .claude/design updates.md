# Design Updates Required - Portfolio Website

## Context
Update existing Next.js portfolio site with the following changes. Keep current tech stack (Next.js, Tailwind, TypeScript, Vercel).

## Required Changes

### 1. Profile Image Size
**Current:** Profile image too small  
**Required:** Make profile image much larger - comparable in visual weight to the "Koos Simons Product Manager" heading, but not overlapping. Should be prominent and professional.

### 2. Dark Mode Behavior
**Current:** Manual toggle for dark mode  
**Required:** Remove toggle completely. Auto-enable dark mode based on system preferences using `prefers-color-scheme` media query. Should match typical OS dark mode behavior (time-based or system setting).

### 3. WhatsApp Icon
**Current:** Missing from social links  
**Required:** Add WhatsApp icon next to existing social icons (LinkedIn, Email, GitHub). Match style, size, and spacing of other icons.

### 4. Profile Summary Cards
**Required:** Add 3 cards displayed side-by-side (stack on mobile) below hero section.

**Card 1: Discovery to Release**  
Icon: `discovery.svg` from assets/images folder  
Turned unclear requests into an agreed first release. Combined interviews, workflow and journey mapping, and a quick maturity check to separate a product problem from a capability gap. Defined outcomes, constraints, and tradeoffs, then translated that into scope and priorities the team could ship.

**Card 2: Data and AI Products with Clear Success Criteria**  
Icon: `data.svg` from assets/images folder  
Built data and AI product features from MVP to iteration. Defined success metrics and quality checks early, then used usage signals and structured feedback with domain experts to decide what to change next.

**Card 3: Delivery and Stakeholder Leadership**  
Icon: `collaboration.svg` from assets/images folder  
Kept delivery moving by making decisions explicit and ownership clear. Aligned product, engineering, and business stakeholders through tight written updates, prioritization, and unblocking, so work shipped in focused increments.

## Design Guidelines for Cards
- Equal width, consistent spacing
- Clean card design with subtle shadow/border
- **Use SVG icons from assets/images folder** (discovery.svg, data.svg, collaboration.svg)
- Icon at top, heading below, description text
- Responsive: 3 columns desktop, stack on mobile
- Professional, modern aesthetic matching site

## No Stack Changes
Keep existing: Next.js, Tailwind CSS, TypeScript, Vercel deployment.