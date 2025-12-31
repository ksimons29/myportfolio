# Mobile Card Visibility Fix - Implementation Plan

## Project Context
- **Repo location:** `/Users/koossimons/my-portfolio`
- **Live site:** https://koossimons.vercel.app
- **Tech stack:** Next.js + Tailwind CSS + Vercel
- **Branch to create:** `fix/mobile-card-visibility`

---

## Problem Statement

On mobile devices, the 3 main capability cards ("From Ambiguity to First Release", "Products with Measurable Success", "Aligned Teams, Shipped Work") are completely hidden below the fold. Users see:
1. Hero section with photo
2. About section

...and have no visual indication that important interactive content exists below.

**Screenshot evidence:** The cards section starts at `<section class="relative py-10 px-4 sm:px-6 lg:px-8 bg-paper-warm">` with no header, making it invisible on initial mobile load.

---

## Solution Overview

| Change | Purpose | Risk |
|--------|---------|------|
| Add section header "What I Bring" | Gives context, improves SEO | Low |
| Add subtle scroll indicator (mobile only) | Draws attention downward | Low |
| Reduce About section vertical padding | Fits more content above fold | Low |
| Ensure card titles peek above fold | Immediate visibility | Low |

---

## Step-by-Step Implementation

### STEP 1: Create feature branch

```bash
cd /Users/koossimons/my-portfolio
git fetch origin
git checkout main
git pull origin main
git checkout -b fix/mobile-card-visibility
```

### STEP 2: Find the relevant files

Run these commands to locate the components:

```bash
# Find the skills/capability cards section
grep -rn "From Ambiguity to First Release" src/ --include="*.tsx" --include="*.jsx" --include="*.js"

# Find the About section
grep -rn "id=\"about\"" src/ --include="*.tsx" --include="*.jsx"

# Find the main page component
ls -la src/app/page.tsx || ls -la src/pages/index.tsx || ls -la app/page.tsx
```

**Expected structure:** The cards are likely in a component like `SkillsSection.tsx`, `CapabilitiesSection.tsx`, or inline in `page.tsx`.

### STEP 3: Add section header to capability cards

Find the section containing the 3 cards grid. It currently looks like:

```tsx
<section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-paper-warm">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {/* cards here */}
    </div>
  </div>
</section>
```

**CHANGE TO:**

```tsx
<section className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-paper-warm">
  <div className="max-w-6xl mx-auto">
    {/* NEW: Section header */}
    <div className="text-center mb-6 sm:mb-8">
      <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-2">
        What I Bring
      </h2>
      <p className="font-body text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
        Three core strengths — tap each card to see real examples
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {/* existing cards unchanged */}
    </div>
  </div>
</section>
```

### STEP 4: Reduce About section padding

Find the About section:

```tsx
<section id="about" className="py-8 sm:py-10 transition-colors duration-300">
```

**CHANGE TO:**

```tsx
<section id="about" className="py-6 sm:py-8 transition-colors duration-300">
```

### STEP 5: Add scroll indicator (mobile only)

Add this component between the About section and the Skills cards section:

```tsx
{/* Scroll indicator - mobile only */}
<div className="flex justify-center py-3 md:hidden bg-paper">
  <div className="flex flex-col items-center text-ink-muted/60 animate-pulse">
    <span className="text-xs font-medium tracking-wide uppercase mb-1">More below</span>
    <svg 
      className="w-5 h-5 animate-bounce" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  </div>
</div>
```

**Alternative (if you want it inside the About section):**

Add at the end of the About section's container div:

```tsx
{/* Mobile scroll hint */}
<div className="mt-6 flex justify-center md:hidden">
  <div className="flex items-center gap-2 text-ink-muted/50 text-sm">
    <span>See my strengths</span>
    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>
```

### STEP 6: Improve expanded card readability (optional but recommended)

In the expanded card content area, find the metric badges that show results like "4+ hours saved per user/month". They currently use:

```tsx
<span className="text-xs font-medium text-terracotta bg-terracotta/10 px-2 py-1 rounded-full whitespace-nowrap">
```

**CHANGE TO (allow wrapping on mobile):**

```tsx
<span className="text-xs font-medium text-terracotta bg-terracotta/10 px-2 py-1 rounded-full sm:whitespace-nowrap">
```

This allows the metric text to wrap on very small screens instead of being cut off.

### STEP 7: Test locally

```bash
npm run dev
```

**Test checklist:**
- [ ] Open http://localhost:3000
- [ ] Use Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
- [ ] Select iPhone 14 Pro (393x852) or similar
- [ ] **Verify:** "What I Bring" header is visible without scrolling
- [ ] **Verify:** At least the top of the first card is visible
- [ ] **Verify:** Scroll indicator appears on mobile, hidden on desktop
- [ ] Click each card → expanded content is readable
- [ ] Test on iPad view → layout still looks good

### STEP 8: Commit changes

```bash
git add .
git status  # Review what's being committed

git commit -m "fix(mobile): improve skill cards visibility above the fold

Changes:
- Add 'What I Bring' section header above capability cards
- Add mobile-only scroll indicator between About and Skills
- Reduce About section padding for better viewport fit
- Allow metric badges to wrap on small screens

Tested on: iPhone 14 Pro viewport, iPad, desktop

Closes: mobile card visibility issue"
```

### STEP 9: Push and deploy

```bash
git push -u origin fix/mobile-card-visibility
```

**Then either:**

A) If you want to test on Vercel preview first:
- Go to GitHub and create a Pull Request
- Vercel will auto-deploy a preview URL
- Test the preview, then merge

B) If confident, merge directly:
```bash
git checkout main
git merge fix/mobile-card-visibility
git push origin main
```

### STEP 10: Verify production

After Vercel deploys (usually 1-2 minutes):
1. Open https://koossimons.vercel.app on your phone
2. Confirm changes are live
3. Test the same checklist from Step 7

---

## Rollback Instructions

**If something breaks after merge:**

```bash
# Option 1: Revert the commit
git checkout main
git log --oneline -5  # Find the merge commit hash
git revert <commit-hash>
git push origin main

# Option 2: Reset to previous state (use with caution)
git checkout main
git reset --hard HEAD~1
git push origin main --force
```

**If preview branch has issues:**
```bash
git checkout main
git branch -D fix/mobile-card-visibility
git push origin --delete fix/mobile-card-visibility
```

---

## CHANGELOG Entry

Create or update `CHANGELOG.md` in the repo root:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [2024-12-31] - Mobile Card Visibility Fix

### Added
- Section header "What I Bring" above capability cards
- Mobile-only scroll indicator between About and Skills sections
- Descriptive subtitle prompting users to tap cards

### Changed
- Reduced About section vertical padding (py-8 → py-6 on mobile)
- Metric badges now wrap on very small screens instead of being cut off

### Files Modified
- `src/app/page.tsx` (or relevant component file)
- `CHANGELOG.md`

### How to Verify
1. Open https://koossimons.vercel.app on mobile device
2. "What I Bring" header should be visible without scrolling
3. Scroll indicator (arrow) should appear on mobile only
4. Tap each card → content should be fully readable

### Rollback
```bash
git revert <commit-hash> && git push origin main
```
```

---

## Summary of All Code Changes

### Change 1: Section Header (REQUIRED)
**Location:** Skills/Capabilities section
**Add before the grid:**
```tsx
<div className="text-center mb-6 sm:mb-8">
  <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-2">
    What I Bring
  </h2>
  <p className="font-body text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
    Three core strengths — tap each card to see real examples
  </p>
</div>
```

### Change 2: About Padding (REQUIRED)
**Location:** About section
**Change:** `py-8 sm:py-10` → `py-6 sm:py-8`

### Change 3: Scroll Indicator (RECOMMENDED)
**Location:** Between About and Skills sections
**Add:**
```tsx
<div className="flex justify-center py-3 md:hidden bg-paper">
  <div className="flex flex-col items-center text-ink-muted/60 animate-pulse">
    <span className="text-xs font-medium tracking-wide uppercase mb-1">More below</span>
    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>
```

### Change 4: Metric Badge Wrapping (OPTIONAL)
**Location:** Expanded card content
**Change:** `whitespace-nowrap` → `sm:whitespace-nowrap`

---

## Notes for Claude Code

- The existing site uses Tailwind CSS with custom colors (`text-ink`, `bg-paper-warm`, `text-gold`, `text-terracotta`)
- Font classes are `font-display` (Cormorant Garamond) and `font-body` (DM Sans)
- Keep the existing design language - don't introduce new colors or fonts
- The changes are additive and non-breaking
- Test on multiple viewport sizes before committing
