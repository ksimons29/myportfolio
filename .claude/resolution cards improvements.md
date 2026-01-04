# Portfolio Website Updates - Implementation Guide

## Overview
Three focused changes to improve card visibility, content structure, and "What I Bring" prominence on both desktop and mobile.

---

## Task 1: Fix Project Card Visibility

### Goal
Ensure all project cards are visible and accessible (no cards cut off after position 2).

### Steps
1. Open the component/file that renders the project cards horizontal section
2. Locate the container holding the cards
3. Fix overflow issue:
   - Add `overflow-x-auto` with visible scrollbar, OR
   - Convert to wrapped grid layout that shows all cards
4. Test on desktop: verify ALL cards are visible/accessible
5. Test on mobile (375px): verify cards are accessible without horizontal overflow

---

## Task 2: Standardize Project Card Content Format

### Goal
Make card content scannable using consistent Context/Action/Result bullet structure.

### Steps
1. Locate project card data (likely in JSON/TS file or component props)
2. Reformat each card to use this exact structure:
   ```
   • Context: [problem statement]
   • Action: [what you led/built]
   • Result: [metric + impact]
   ```

3. Implementation requirements:
   - Use the SAME bullet character (•) as other sections on site
   - Ensure line-height and spacing match existing design system
   - Keep each bullet to ONE line on mobile (≤60 characters)
   - Maintain visual consistency with rest of portfolio

4. Apply to ALL project cards in both lanes (manufacturer and bank/retailer sections)

### Example Format
```
GLOBAL MANUFACTURER
Lineage visibility +30%

Enterprise Data Governance Roadmap

• Context: [existing problem statement from card]
• Action: [existing action from card]
• Result: [existing result from card]
```

---

## Task 3: Elevate "What I Bring" Section

### Goal
Make "What I Bring" immediately visible on page load (desktop and mobile) without scrolling.

### Steps
1. Find the "What I Bring" section component in the code
2. Move this entire section UP in the page structure to appear:
   ```
   - Hero/Name/Title section
   - "What I Bring" section ← INSERT HERE
   - Project cards sections
   - Rest of content
   ```

3. Desktop optimization (≥1440px):
   - Increase heading size to `text-3xl` or `text-4xl`
   - Add vertical spacing (padding/margin) to make section stand out
   - Ensure section is visible WITHOUT scrolling on page load

4. Mobile optimization (375px-768px):
   - Ensure "What I Bring" visible in first viewport (no scroll needed)
   - Stack cards/content vertically (single column)
   - Maintain readable text size
   - Adequate spacing between elements
   - No horizontal scroll required

5. Visual prominence:
   - Keep existing content (DO NOT change text)
   - Just improve visibility through positioning and sizing
   - Ensure consistent spacing and typography

---

## Verification Checklist

After implementing all tasks, verify:

### Desktop (1440px)
- [ ] All project cards visible (none cut off)
- [ ] Cards use • bullets for Context/Action/Result
- [ ] "What I Bring" appears immediately after hero (above fold)
- [ ] "What I Bring" heading is prominent (text-3xl or larger)
- [ ] No layout overflow or breaks

### Mobile (375px)
- [ ] All project cards accessible (stack or scroll cleanly)
- [ ] Card bullets remain readable (one line per bullet)
- [ ] "What I Bring" visible without scrolling
- [ ] "What I Bring" cards stack vertically
- [ ] No horizontal scroll issues
- [ ] Text remains readable without zoom

---

## Priority Order
1. Task 3 (What I Bring visibility) - Highest impact
2. Task 1 (Card visibility) - Critical UX
3. Task 2 (Bullet formatting) - Polish

---

## Notes
- Do NOT change any text content
- Only modify layout, positioning, and formatting structure
- Maintain existing design system (colors, fonts, spacing patterns)
- Test on both desktop and mobile viewports before completing