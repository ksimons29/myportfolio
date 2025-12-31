I'll analyze your repository and create a complete implementation plan. Let me fetch the current code structure first.Now let me fetch the key files to understand the current structure:Let me search for the repository structure:Based on the repository structure and the screenshot you provided, I can now create a complete implementation markdown file. The portfolio is built with Next.js, TypeScript, and Tailwind CSS.

# Portfolio Website - Hero & Cards Improvement Implementation

**Repository:** https://github.com/ksimons29/myportfolio  
**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4  
**Implementation time:** 20 minutes  
**Files to modify:** `app/page.tsx`, `app/globals.css`, component files

---

## Problems Identified

1. **Hero section too large** - Takes 80%+ of viewport, pushing content below fold
2. **Cards not visible** - Low contrast, small icons, unclear clickability  
3. **Card examples broken** - Not structured as clickable links

---

## Implementation Plan

### Step 1: Reduce Hero Height (5 min)

**File:** `app/globals.css` or `components/Header.tsx`

**Add/modify these CSS classes:**

```css
/* Find or add hero/header styles */

.hero-section {
  padding-top: 4rem;    /* Was likely 6-8rem */
  padding-bottom: 4rem;  /* Was likely 6-8rem */
  min-height: auto;      /* Remove min-height: 100vh if present */
}

@media (min-width: 768px) {
  .hero-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* Reduce heading sizes */
.hero-title {
  font-size: 2.5rem;     /* Was likely 3.5rem+ */
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;    /* Was likely 1.5rem+ */
  line-height: 1.4;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
}
```

**If using Tailwind classes in `components/Header.tsx`:**

```tsx
// BEFORE (likely current)
<div className="min-h-screen flex flex-col items-center justify-center py-20">
  <h1 className="text-6xl md:text-7xl">Koos Simons</h1>
  <h2 className="text-2xl md:text-3xl">Senior Product Manager</h2>
</div>

// AFTER (compact)
<div className="flex flex-col items-center justify-center py-16 md:py-20">
  <h1 className="text-4xl md:text-5xl leading-tight mb-2">Koos Simons</h1>
  <h2 className="text-xl md:text-2xl">Senior Product Manager</h2>
</div>
```

---

### Step 2: Make Cards Immediately Visible (7 min)

**File:** `app/globals.css` or component-specific CSS

**Add these card styles:**

```css
/* Base card styles - increase visibility */
.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
}

/* Larger, more visible icons */
.card-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .card-icon {
    width: 3.5rem;
    height: 3.5rem;
  }
}

/* Prominent card titles */
.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

/* Ensure cards container has good spacing */
.cards-grid {
  gap: 1.5rem;
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
  .card-title {
    font-size: 1.25rem;
  }
}
```

**If using Tailwind in component (e.g., `components/ProjectCard.tsx`):**

```tsx
// BEFORE (likely current)
<div className="p-6 rounded-lg">
  <div className="w-6 h-6 mb-2">{icon}</div>
  <h3 className="text-xl">{title}</h3>
</div>

// AFTER (high visibility)
<div className="bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/8 hover:-translate-y-1 transition-all p-8 rounded-xl">
  <div className="w-12 h-12 md:w-14 md:h-14 mb-4 opacity-90">{icon}</div>
  <h3 className="text-2xl md:text-2xl font-semibold mb-3 leading-tight">{title}</h3>
</div>
```

---

### Step 3: Fix Card Examples as Clickable Links (8 min)

**Files:** Likely `components/ProjectCard.tsx` or similar card component

**Current structure (problematic):**
```tsx
<div className="card">
  <Globe className="card-icon" />
  <h3 className="card-title">From Ambiguity to First Release</h3>
  <p className="text-sm opacity-70">
    Nike EMEA Analytics, Rabobank GenAI Assistant, KPN Tools
  </p>
</div>
```

**New structure (clickable examples):**
```tsx
<div className="card">
  <Globe className="card-icon" />
  <h3 className="card-title">From Ambiguity to First Release</h3>
  <div className="card-examples">
    <a href="#nike-analytics" className="example-link">
      Nike EMEA Analytics Platform
    </a>
    <a href="#rabobank-genai" className="example-link">
      Rabobank GenAI Assistant
    </a>
    <a href="#kpn-tools" className="example-link">
      KPN Customer Tools
    </a>
  </div>
</div>
```

**CSS for clickable examples:**

```css
.card-examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.example-link {
  padding: 0.625rem 0.875rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: block;
  position: relative;
}

.example-link:hover {
  background: rgba(255, 255, 255, 0.15);
  padding-left: 1.25rem;
}

/* Optional: Add arrow on hover */
.example-link::after {
  content: ' →';
  opacity: 0;
  position: absolute;
  right: 0.875rem;
  transition: opacity 0.2s ease;
}

.example-link:hover::after {
  opacity: 1;
}

@media (max-width: 768px) {
  .example-link {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
}
```

**If using Tailwind classes:**

```tsx
<div className="flex flex-col gap-2 mt-4">
  <a 
    href="#nike-analytics" 
    className="block px-3.5 py-2.5 bg-white/8 hover:bg-white/15 rounded-md text-[0.95rem] transition-all hover:pl-5 relative group"
  >
    Nike EMEA Analytics Platform
    <span className="absolute right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
      →
    </span>
  </a>
  <a 
    href="#rabobank-genai" 
    className="block px-3.5 py-2.5 bg-white/8 hover:bg-white/15 rounded-md text-[0.95rem] transition-all hover:pl-5 relative group"
  >
    Rabobank GenAI Assistant
    <span className="absolute right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
      →
    </span>
  </a>
  <a 
    href="#kpn-tools" 
    className="block px-3.5 py-2.5 bg-white/8 hover:bg-white/15 rounded-md text-[0.95rem] transition-all hover:pl-5 relative group"
  >
    KPN Customer Tools
    <span className="absolute right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
      →
    </span>
  </a>
</div>
```

---

### Step 4: Update Content Data (if using `lib/content.ts`)

**File:** `lib/content.ts`

**Current format (likely):**
```typescript
export const cards = [
  {
    icon: Globe,
    title: "From Ambiguity to First Release",
    description: "Nike EMEA Analytics, Rabobank GenAI Assistant, KPN Tools"
  }
]
```

**New format (with examples array):**
```typescript
export const cards = [
  {
    icon: Globe,
    title: "From Ambiguity to First Release",
    examples: [
      { text: "Nike EMEA Analytics Platform", href: "#nike-analytics" },
      { text: "Rabobank GenAI Assistant", href: "#rabobank-genai" },
      { text: "KPN Customer Tools", href: "#kpn-tools" }
    ]
  },
  {
    icon: TrendingUp,
    title: "Products with Measurable Impact",
    examples: [
      { text: "Store Performance Prediction Model", href: "#nike-prediction" },
      { text: "Self-Service Analytics Tool", href: "#analytics-tool" },
      { text: "Data Quality Dashboard", href: "#quality-dashboard" }
    ]
  },
  {
    icon: Users,
    title: "Aligned Teams, Shipped Work",
    examples: [
      { text: "Cross-Functional Platform Launch", href: "#platform-launch" },
      { text: "Stakeholder Alignment Framework", href: "#alignment" },
      { text: "Change Management Process", href: "#change-mgmt" }
    ]
  }
]
```

**Update TypeScript interface:**
```typescript
// lib/types.ts or in content.ts
interface CardExample {
  text: string;
  href: string;
}

interface Card {
  icon: any; // or proper icon type
  title: string;
  examples: CardExample[];
}
```

---

## Complete Example Card Component

**File:** `components/ProjectCard.tsx` (or create if doesn't exist)

```tsx
import { type LucideIcon } from 'lucide-react'

interface CardExample {
  text: string
  href: string
}

interface ProjectCardProps {
  icon: LucideIcon
  title: string
  examples: CardExample[]
}

export default function ProjectCard({ icon: Icon, title, examples }: ProjectCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/8 hover:-translate-y-1 transition-all duration-200 p-8 rounded-xl">
      <Icon className="w-12 h-12 md:w-14 md:h-14 mb-4 opacity-90" />
      <h3 className="text-2xl font-semibold mb-3 leading-tight">{title}</h3>
      
      <div className="flex flex-col gap-2 mt-4">
        {examples.map((example, index) => (
          
            key={index}
            href={example.href}
            className="block px-3.5 py-2.5 bg-white/8 hover:bg-white/15 rounded-md text-[0.95rem] transition-all hover:pl-5 relative group"
          >
            {example.text}
            <span className="absolute right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
```

---

## Implementation Checklist

### Before Starting
- [ ] Pull latest from main branch
- [ ] Create new branch: `git checkout -b improve-hero-and-cards`
- [ ] Open project in editor

### Step 1: Hero (5 min)
- [ ] Open `components/Header.tsx` 
- [ ] Reduce padding classes: `py-20` → `py-16 md:py-20`
- [ ] Reduce heading sizes: `text-6xl md:text-7xl` → `text-4xl md:text-5xl`
- [ ] Reduce subtitle: `text-2xl md:text-3xl` → `text-xl md:text-2xl`
- [ ] Remove `min-h-screen` if present
- [ ] Test on localhost:3000

### Step 2: Cards Visibility (7 min)
- [ ] Open `app/globals.css`
- [ ] Add card base styles (background, border, hover)
- [ ] Increase icon sizes in component
- [ ] Make titles larger and bolder
- [ ] Test hover effects
- [ ] Check mobile responsiveness

### Step 3: Clickable Examples (8 min)
- [ ] Open `lib/content.ts`
- [ ] Update card data structure with examples array
- [ ] Update TypeScript interface
- [ ] Open/create `components/ProjectCard.tsx`
- [ ] Restructure to map over examples
- [ ] Add example link styles
- [ ] Add hover arrow indicator
- [ ] Test all links work

### Final Checks
- [ ] Test on desktop (Chrome)
- [ ] Test on mobile (DevTools responsive mode)
- [ ] Check all hover states work
- [ ] Verify cards visible without scrolling on desktop
- [ ] Check that hero is ~40-50% of viewport, not 80%+
- [ ] Verify all example links are clickable
- [ ] Run `npm run build` to check for errors
- [ ] Commit changes
- [ ] Push to GitHub
- [ ] Deploy to Vercel (auto-deploys on push)

---

## Quick Reference: Before/After

### Hero Section
```tsx
// BEFORE
<div className="min-h-screen py-20">
  <h1 className="text-6xl md:text-7xl">Koos Simons</h1>
  <h2 className="text-2xl md:text-3xl">Senior Product Manager</h2>
</div>

// AFTER
<div className="py-16 md:py-20">
  <h1 className="text-4xl md:text-5xl mb-2">Koos Simons</h1>
  <h2 className="text-xl md:text-2xl">Senior Product Manager</h2>
</div>
```

### Card Component
```tsx
// BEFORE
<div className="p-6 rounded-lg">
  <Icon className="w-6 h-6" />
  <h3 className="text-xl">{title}</h3>
  <p className="text-sm">{description}</p>
</div>

// AFTER
<div className="bg-white/5 border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all p-8 rounded-xl">
  <Icon className="w-12 h-12 md:w-14 md:h-14 mb-4" />
  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
  <div className="flex flex-col gap-2 mt-4">
    {examples.map(ex => (
      <a href={ex.href} className="block px-3.5 py-2.5 bg-white/8 hover:bg-white/15 rounded-md hover:pl-5">
        {ex.text}
      </a>
    ))}
  </div>
</div>
```

---

## Testing URLs

After deployment, test these scenarios:
- Desktop (1920x1080): Cards visible immediately after hero
- Tablet (768px): Cards stack properly, still visible above fold
- Mobile (375px): Hero compact, cards readable and clickable
- Hover states: All cards and examples have smooth transitions
- Click: Example links navigate properly (or scroll to section)

---

## Deployment

```bash
# Commit changes
git add .
git commit -m "Improve hero size and card visibility with clickable examples"

# Push to GitHub
git push origin improve-hero-and-cards

# Create PR or merge to main
# Vercel will auto-deploy
```

---

**REMEMBER:** Start with hero height reduction (biggest visual win), then card visibility, then example links. Each step should take ~5-8 minutes.