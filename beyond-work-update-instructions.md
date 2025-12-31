# Beyond Work Section Update — Claude Code Instructions

## Overview

**Goal:** Improve the "Beyond Work" section on the portfolio website
**Risk:** Low (visual-only change)
**Effort:** Small (~15 min)

---

## What to Change

### 1. Move icons OUTSIDE the text

**Current problem:** Icons are inline (inside the text), which breaks reading flow and looks cluttered.

**Better pattern:** Show icons as a dedicated row ABOVE the text content, keeping prose clean and readable.

**Target layout:**
```
[🎷] [🧸] [🥾] [🎵]  ← icon row (small, gold colored, subtle)
──────────────────────
Clean text paragraph without inline icons...
```

### 2. Polish the text + add toy store link

**Updated text to use:**

```
Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025). Helped my family's toy shop, Top1Toys Coenen, with digital marketing—making it the region's top searchable toy store online.

Completed the Caminho Português before settling in Lisbon. Enjoy live music, hiking, and conversations about culture and world affairs.
```

**Link to add:** `https://top1toyscoenen.nl` on "Top1Toys Coenen"

---

## Files to Edit

### File 1: `components/BeyondWork.tsx`

**Changes needed:**
1. Keep all existing SVG icon components (SaxophoneIcon, ToyIcon, HikingIcon, MusicIcon)
2. Remove the `InlineIcon` component and all its usages
3. Create a new icon row at the top of the component
4. Update the text paragraphs to be clean prose without inline icons
5. Add the toy store link

**New component structure:**

```tsx
'use client'

// Keep all existing SVG icon components exactly as they are:
// - SaxophoneIcon
// - ToyIcon  
// - HikingIcon
// - MusicIcon

export default function BeyondWork() {
  return (
    <div className="space-y-6">
      {/* Icon row - displayed above the text */}
      <div className="flex items-center gap-4 pb-4 border-b border-cream">
        <span className="text-gold hover:scale-110 transition-transform" title="Saxophone">
          <SaxophoneIcon className="w-6 h-6" />
        </span>
        <span className="text-gold hover:scale-110 transition-transform" title="Toy Store">
          <ToyIcon className="w-6 h-6" />
        </span>
        <span className="text-gold hover:scale-110 transition-transform" title="Hiking">
          <HikingIcon className="w-6 h-6" />
        </span>
        <span className="text-gold hover:scale-110 transition-transform" title="Live Music">
          <MusicIcon className="w-6 h-6" />
        </span>
      </div>

      {/* Clean text without inline icons */}
      <div className="prose prose-lg max-w-none text-ink-soft leading-relaxed">
        <p className="mb-5">
          Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025). 
          Helped my family&apos;s toy shop,{' '}
          <a 
            href="https://top1toyscoenen.nl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy hover:text-gold transition-colors underline decoration-cream hover:decoration-gold"
          >
            Top1Toys Coenen
          </a>
          , with digital marketing—making it the region&apos;s top searchable toy store online.
        </p>

        <p>
          Completed the Caminho Português before settling in Lisbon. 
          Enjoy live music, hiking, and conversations about culture and world affairs.
        </p>
      </div>
    </div>
  )
}
```

### File 2: `lib/content.ts`

**Find this line:**
```ts
beyondWork: `Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025). Helped my family's toy shop in the Netherlands with digital marketing, making it the region's top searchable toy store online.

Completed the Caminho Português before settling in Lisbon. Enjoy live music, hiking, and conversations about culture and world affairs.`,
```

**Replace with:**
```ts
beyondWork: `Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025). Helped my family's toy shop, Top1Toys Coenen, with digital marketing—making it the region's top searchable toy store online.

Completed the Caminho Português before settling in Lisbon. Enjoy live music, hiking, and conversations about culture and world affairs.`,
```

---

## Step-by-Step Commands

### 1. Create a new branch
```bash
cd ~/my-portfolio
git checkout -b feat/beyond-work-icons-outside
```

### 2. Make the changes
Edit the two files as described above.

### 3. Test locally
```bash
npm run dev
```
Then open http://localhost:3000 and scroll to "Beyond Work" section.

**Verify:**
- [ ] Icons appear in a row ABOVE the text (not inside)
- [ ] "Top1Toys Coenen" is a clickable link
- [ ] Link opens https://top1toyscoenen.nl in new tab
- [ ] Text reads smoothly without interruptions

### 4. Commit
```bash
git add .
git commit -m "feat(beyond-work): move icons outside text, add toy store link"
```

### 5. Push to GitHub
```bash
git push -u origin feat/beyond-work-icons-outside
```

### 6. Create PR (optional)
Go to GitHub and create a Pull Request, or merge directly if you prefer.

### 7. Deploy
If using Vercel with auto-deploy, it will deploy automatically after merge.

---

## Rollback Instructions

If something breaks:

```bash
# Revert the last commit
git revert HEAD
git push
```

Or reset to previous state:
```bash
git checkout main
git branch -D feat/beyond-work-icons-outside
```

---

## CHANGELOG Entry

Add this to `CHANGELOG.md`:

```markdown
## 2025-12-31

### Changed: Beyond Work section - icon layout + toy store link

**Summary:**  
- Moved icons from inline (inside text) to a dedicated row above content
- Added link to family toy store (https://top1toyscoenen.nl)
- Polished copy for better readability

**Files changed:**
- `components/BeyondWork.tsx`
- `lib/content.ts`

**How to verify:**  
1. Visit site → scroll to "Beyond Work" section
2. Confirm icons appear in their own row (not inside text)
3. Confirm "Top1Toys Coenen" is a clickable link opening in new tab

**Rollback:**  
`git revert HEAD`
```

---

## Design Rationale

**Why icons outside text?**
- Inline icons break reading flow in prose
- A dedicated icon row creates visual interest without interrupting
- Hover effects on icons add subtle interactivity
- Cleaner, more professional appearance

**Why this link style?**
- Underline indicates clickability
- Color change on hover provides feedback
- Opens in new tab so user doesn't leave your site
