# Portfolio Website Update Instructions

## Overview
Update the "What I Bring" section to improve visibility and formatting across desktop and mobile devices.

---

## Task 1: Move "What I Bring" Section Higher on Page

### Steps:
1. Locate the "What I Bring" section in the codebase
2. Move this section to appear immediately after the hero/intro section
3. Ensure section order is:
   - Hero (name, title, intro)
   - **"What I Bring"** ← moved here
   - Project cards
   - Everything else below

### Visual Improvements:
4. Increase heading size to `text-3xl` or `text-4xl`
5. Add more vertical padding/margin around the section (e.g., `py-12` or `py-16`)
6. Ensure the section has clear visual separation from hero and project cards

---

## Task 2: Reformat "What I Bring" Card Content

### Steps:
1. Locate "What I Bring" card data (likely in a JSON/TS file or component)
2. Reformat each card to use this exact structure:

   ```
   • Context: [problem statement]
   • Action: [what you led/built]
   • Result: [metric + impact]
   ```

3. Use the SAME bullet character (•) as other sections on site
4. Ensure line-height and spacing match existing design system
5. Keep each bullet to ONE line on mobile (≤60 characters)

### Example Format:
```typescript
{
  title: "Product Leadership",
  bullets: [
    "• Context: Teams struggling with unclear roadmaps",
    "• Action: Led outcome-based discovery and prioritization",
    "• Result: Shipped 3 high-impact features in 6 months"
  ]
}
```

---

## Task 3: Mobile Optimization

### Requirements:
1. **Viewport: 375px - 768px (mobile/tablet)**
   - "What I Bring" section must be visible WITHOUT scrolling
   - Cards stack vertically (one per row)
   - Use `grid-cols-1` or `flex-col` for mobile breakpoints
   
2. **Text Readability:**
   - Font size minimum `text-base` (16px)
   - Line height `leading-relaxed` or `leading-loose`
   - Adequate spacing between cards (`gap-4` or `gap-6`)

3. **No Horizontal Scroll:**
   - Ensure all content fits within viewport width
   - Check padding/margin doesn't cause overflow

---

## Task 4: Fix Project Card Visibility

### Steps:
1. Locate the project cards section (horizontal scrolling container)
2. Fix overflow issue where cards after position 2 are cut off
3. Options:
   - Add proper horizontal scroll with visible scrollbar (`overflow-x-auto`)
   - Or convert to vertical stack/grid that wraps (`grid` with `grid-cols-1 md:grid-cols-2`)
4. Ensure ALL project cards are accessible and visible

---

## Verification Checklist

After implementing changes, verify:

### Desktop (1440px viewport):
- [ ] "What I Bring" visible without scrolling (above the fold)
- [ ] "What I Bring" heading is prominent (text-3xl or larger)
- [ ] Cards display side-by-side (if 3 cards: 3 columns)
- [ ] All project cards are visible/accessible
- [ ] Bullets use • character consistently

### Mobile (375px viewport):
- [ ] "What I Bring" visible without scrolling (above the fold)
- [ ] Cards stack vertically (one column)
- [ ] Text is readable without zooming
- [ ] Each bullet fits on ONE line (or wraps cleanly)
- [ ] No horizontal scroll anywhere
- [ ] All project cards are visible/accessible

### Both viewports:
- [ ] Consistent bullet character (•) throughout site
- [ ] Line-height and spacing match design system
- [ ] No layout shifts or overflow issues

---

## Implementation Priority

1. **First:** Task 1 (Move "What I Bring" up)
2. **Second:** Task 3 (Mobile optimization)
3. **Third:** Task 2 (Reformat card content)
4. **Fourth:** Task 4 (Fix project card visibility)

---

## Notes
- **Do NOT change text content** - only structure and formatting
- Maintain existing design tokens (colors, fonts, spacing scale)
- Test responsive breakpoints: 375px, 768px, 1024px, 1440px