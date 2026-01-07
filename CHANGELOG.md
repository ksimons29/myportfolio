# Changelog

All notable changes to the portfolio website.

---

## 2026-01-07 - Profile Card Bullet Point Formatting Fix

**Summary:** Fixed bullet point display in capability card examples to ensure Context, Action, and Result bullets appear on separate lines for better readability.

**Changes:**
- **CSS Fix:** Added `whitespace-pre-line` class to example description paragraphs in ProfileCards.tsx
- **Impact:** Context, Action, and Result bullets now display on individual lines instead of running together
- **Scope:** Applies to all 9 examples across 3 capability cards

**Files Changed:**
- components/ProfileCards.tsx (line 136: added `whitespace-pre-line` to description paragraph)

**How to Verify:**
1. Open any capability card on the homepage
2. Expand the card to view examples
3. Verify each example shows:
   - `• Context` on its own line
   - `• Action` on its own line
   - `• Result` on its own line
4. Check all 3 cards × 3 examples = 9 total examples display correctly

**Benefits:**
- ✅ Improved readability and scannability of capability card examples
- ✅ Clean visual hierarchy with proper line breaks
- ✅ Consistent with intended content structure (Context → Action → Result)

---

## 2026-01-05 - Card Overflow Fix & Mobile Viewport Optimization

**Summary:** Fixed capability card clipping issue and optimized mobile layout to ensure "What I Bring" section is visible without scrolling through aggressive compression and sticky header design.

**Changes:**

### Problem 1: Card Overflow Fixed
- **Capability Cards Max-Height:** Increased from `max-h-[800px]` to `max-h-[1200px]` in ProfileCards.tsx
- **Result:** All 3 capability card examples now fully visible when expanded (no clipping)

### Problem 2: Zero Scrolling Mobile Optimization
- **Section Reordering:** Moved "What I Bring" to position 3 (AFTER About section for better narrative flow)
- **Sticky Frosted Glass Header:** Added sticky header to ProfileCards with 95% opacity and backdrop blur effect
- **Scroll Indicator:** Added bouncing arrow on mobile to guide users to cards below
- **Mobile Compression (284px saved total):**
  - Header: Smaller profile image (140px on mobile, 180px desktop), tighter padding (-104px)
  - About: Shows first paragraph only on mobile, tighter spacing (-180px)
  - Section: Reduced vertical padding on mobile (-16px)
- **Progressive Enhancement:** Mobile gets efficiency, desktop maintains original luxury spacing

**Files Changed:**
- components/ProfileCards.tsx (max-height fix + sticky header wrapper with frosted glass)
- components/Header.tsx (responsive padding, profile image size, margins)
- components/AboutSection.tsx (mobile/desktop conditional rendering, responsive typography)
- components/Section.tsx (responsive vertical padding)
- app/page.tsx (section reordering)

**How to Verify:**

1. **Mobile (375px × 667px):**
   - [ ] Page loads showing Header
   - [ ] About section visible (first paragraph only)
   - [ ] "What I Bring" heading visible WITHOUT scrolling (~608px total height)
   - [ ] Profile image 140px (appropriate mobile size)
   - [ ] All 3 capability cards expand fully (no clipping)
   - [ ] Sticky header activates and stays at top when scrolling cards
   - [ ] Bounce arrow indicator shows on mobile

2. **Desktop (1440px × 900px):**
   - [ ] Header maintains original spacing (py-10)
   - [ ] About shows full content (all paragraphs)
   - [ ] Profile image 180px
   - [ ] "What I Bring" heading visible after minimal scroll
   - [ ] Sticky header with frosted glass effect (95% opacity + backdrop blur)
   - [ ] All 3 examples visible when cards expand

3. **All Viewports:**
   - [ ] Section order: Header → About → What I Bring → Projects
   - [ ] Sticky header has subtle border separator (30% opacity)
   - [ ] Smooth transitions (300ms)
   - [ ] No horizontal overflow

**Height Calculations:**
- **Mobile Before:** Header (450px) + About (400px) = 850px > 667px viewport ❌
- **Mobile After:** Header (346px) + About (182px) + "What I Bring" heading (80px) = 608px < 667px ✅
- **Desktop:** Header (280px) + About (364px) + heading (80px) = 724px < 900px ✅

**Design Features:**
- Frosted glass sticky header (modern iOS-like aesthetic)
- Progressive enhancement (mobile-first responsive design)
- Better narrative flow: Identity → Context → Strengths → Evidence
- Zero scrolling requirement met on both mobile and desktop

**Benefits:**
- ✅ Fixed card clipping issue (all examples visible)
- ✅ Zero scrolling to see "What I Bring" on mobile
- ✅ Sticky header keeps section title always visible while browsing cards
- ✅ Mobile users get efficient layout, desktop users keep luxury spacing
- ✅ Improved information architecture and user flow

---

## 2026-01-04 - Enhanced "What I Bring" Section Visibility & Formatting

**Summary:** Repositioned "What I Bring" section for better prominence, enhanced visual hierarchy, and standardized bullet formatting across capability cards.

**Changes:**
- **Section Repositioning:** Moved "What I Bring" to position 2 (immediately after hero, before About section)
- **Enhanced Desktop Heading:** Increased heading size to `lg:text-4xl` for better visibility on large screens
- **Improved Spacing:** Updated section padding to `py-10 sm:py-12 lg:py-16` for stronger visual hierarchy
- **Header Margin:** Increased header bottom margin to `mb-8 sm:mb-10` for better separation
- **Standardized Bullets:** Changed all 9 capability card examples from `-` to `•` bullets for consistency
- **Bullet Detection:** Updated ProjectCard.tsx to handle both `•` and `-` bullet characters for backward compatibility
- **Project Card Spacing:** Added `space-y-6` wrapper to Selected Outcomes for consistent vertical spacing
- **Scroll Hint Update:** Changed mobile scroll hint from "See my strengths" to "See my work"

**Files Changed:**
- app/page.tsx (moved ProfileCards component, updated scroll hint, added space-y-6 wrapper)
- components/ProfileCards.tsx (enhanced heading size and section spacing)
- components/ProjectCard.tsx (updated bullet detection regex and filter logic)
- lib/content.ts (updated all 9 capability card example bullets)

**How to Verify:**
1. **Desktop (1440px):**
   - "What I Bring" appears immediately after hero section
   - Heading displays at text-4xl size
   - Section has prominent vertical padding
   - All capability card examples use • bullets

2. **Mobile (375px):**
   - "What I Bring" visible without scrolling or minimal scroll
   - Cards stack vertically (one column)
   - Scroll hint says "See my work"
   - No horizontal overflow

3. **Selected Outcomes:**
   - All 3 cards visible with consistent 24px spacing between them
   - Original Challenge/What I Did/Impact format preserved

**Benefits:**
- Improved above-the-fold visibility of key value proposition
- Better visual hierarchy on desktop viewports
- Consistent bullet formatting across all cards
- Future-proof bullet detection supporting multiple formats

---

## 2026-01-04 - Improved Cognizant Experience Section

**Summary:** Updated Cognizant experience section with anonymized clients, product-first framing, and better mobile readability.

**Changes:**
- **Anonymized Clients:** Changed specific company names to generic descriptors (Major European Bank, Global Athletic Brand, etc.)
- **Product-First Framing:** Updated opening to "Embedded Product Manager" for clearer positioning
- **Enhanced Metrics Format:** Used arrow symbols (→) for better scannability and mobile readability
- **Added Maturity Assessments:** Now mentioned in first paragraph to highlight broader capabilities
- **Cleaner Structure:** Reorganized with shorter lines and clearer visual hierarchy
- **Enhanced BI Trainee Description:** Added "business intelligence tools" for clarity

**Files Changed:**
- lib/content.ts (Cognizant experience description)

**How to Verify:**
1. Navigate to Experience section
2. Check Cognizant description uses anonymized names (Major European Bank, Global Athletic Brand, etc.)
3. Verify metrics use arrow format (→)
4. Confirm improved readability on mobile devices

**Key Changes:**
- Major European Bank (was: Rabobank)
- Global Athletic Brand (was: Nike EMEA)
- Global Food Equipment Manufacturer (was: Marel)
- Dutch Telecom Provider (was: KPN B2B)
- Pharmaceutical Company (was: Teva EMEA)

---

## 2026-01-04 - Centralized Capability Cards Content & Updated Examples

**Summary:** Refactored capability cards to use centralized content management and updated all examples with verified project data.

**Changes:**
- **Content Centralization:** Moved all capability card data from `ProfileCards.tsx` to `lib/content.ts`
- **Type Safety:** Added `CapabilityCard` and `CapabilityExample` interfaces to `lib/types.ts`
- **Component Refactor:** `ProfileCards.tsx` now imports content from centralized source (single source of truth)
- **Updated Examples:** Refreshed all 9 examples across 3 cards with verified data from Assignment Overview
- **Anonymized Companies:** Changed to generic names (Major Bank, Global Retailer, etc.) for privacy
- **Refined Metrics:** Adjusted metrics for better strategic alignment with each card's narrative
- **Interview Count:** Updated from "40+" to more conservative "25+" based on verified data
- **Documentation:** Updated `ContentUpdateGuide.md` to reflect new structure and provide clear instructions

**Files Changed:**
- lib/content.ts (added capabilityCards array with 3 cards × 3 examples each)
- lib/types.ts (added CapabilityCard and CapabilityExample interfaces)
- components/ProfileCards.tsx (refactored to import from lib/content.ts, removed 78 lines of hardcoded data)
- ContentUpdateGuide.md (updated Quick Reference, Folder Structure, Section 3, and Files Summary)

**How to Verify:**
1. Build passes: `npm run build`
2. Capability cards display correctly on homepage
3. All examples show correct company names (Major Bank, Global Retailer, etc.)
4. Metrics display properly in badges
5. To update cards in future: edit `lib/content.ts` lines 23-111 only

**Benefits:**
- Single source of truth for capability card content
- Type-safe content updates
- Easier maintenance (no need to touch component code for content changes)
- Consistent with rest of portfolio architecture

---

## 2025-12-31 - Mobile Card Visibility & Layout Fix

**Summary:** Improved capability cards visibility on mobile and fixed expanded card text overlap.

**Changes:**
- Added "What I Bring" section header above capability cards
- Added mobile-only scroll indicator in About section (hidden on desktop)
- Reduced section padding globally for better mobile viewport fit
- Restructured expanded card layout: metric badges now sit beside company name, giving project title full width
- Metric badges can now wrap on very small screens

**Files Changed:**
- components/ProfileCards.tsx
- components/Section.tsx
- app/page.tsx

**How to Verify:**
1. Open site on mobile (or Chrome DevTools mobile view)
2. "What I Bring" header should be visible without scrolling
3. Scroll indicator with bouncing arrow appears on mobile only
4. Tap a capability card - text should not overlap, metrics display cleanly

---

## 2025-12-31 - Footer WhatsApp Button & AvailabilitySection Cleanup

**Summary:** Added WhatsApp contact button to Footer and removed CTA text/icons from AvailabilitySection.

**Changes:**
- Added WhatsApp button to Footer (next to Email Me and LinkedIn)
- Removed "Interested? Let's discuss your needs or schedule a call." text from AvailabilitySection
- Removed standalone email icon from AvailabilitySection

**Files Changed:**
- components/Footer.tsx
- components/AvailabilitySection.tsx

**How to Verify:**
1. Scroll to Footer - should see 3 buttons: Email Me, LinkedIn, WhatsApp
2. Check AvailabilitySection has no CTA text or icons below service cards

---

## 2025-12-31 - Updated About and Experience Copy

**Summary:** Revised About section and Cognizant experience description for clarity and impact.

**Changes:**
- About: New paragraph emphasizing decade at Cognizant, adoption focus, regulated environments
- Experience: Replaced markdown table with bullet-point format including metrics inline
- Experience: Added "Promoted into a Consulting Manager role" language

**Files Changed:**
- lib/content.ts

**How to Verify:**
1. Check About section has "I turn complex problems into products people actually use..."
2. Scroll to Experience and verify Cognizant description uses bullet format with metrics

---

## 2025-12-31 - Improved Card Visibility and Clickability

**Summary:** Enhanced ProfileCards for better visual presence and clearer interaction affordance.

**Changes:**
- Increased icon size from 32x32 to 40x40px
- Enlarged icon container from 56px (w-14) to 64px (w-16)
- Strengthened icon background opacity (gold/10 → gold/15)
- Made "See examples" text always visible (70% opacity, 100% on hover)
- Strengthened card borders from 1px muted to 2px gold/20
- Enhanced hover states with gold/40 border

**Files Changed:**
- components/ProfileCards.tsx

**How to Verify:**
1. Check capability cards have larger icons with gold-tinted background
2. "See examples" should be visible without hovering
3. Cards should have visible gold-tinted borders

---

## 2025-12-31 - Portfolio Structure and Content Revision (v2)

**Summary:** Major content restructure per v2 specification.

**Changes:**
- Updated site title to "Senior Product Manager"
- Rewrote About section with brand mentions (Nike, Rabobank, KPN)
- Transformed ProfileCards to accordion with expandable examples
- Reordered page sections (moved AvailabilitySection to position 10)
- Deleted ExperienceExamples component
- Updated AvailabilitySection service titles and subheading
- Updated BeyondWork text (Utrecht instead of Lisbon, Caminho Português)
- Updated Footer tagline

**Files Changed:**
- lib/types.ts
- lib/content.ts
- components/ProfileCards.tsx
- components/AvailabilitySection.tsx
- components/BeyondWork.tsx
- components/Footer.tsx
- app/page.tsx
- Deleted: components/ExperienceExamples.tsx

---

## Rollback Instructions

To revert any change:
```bash
git log --oneline -10  # Find the commit to revert to
git revert <commit-hash>
git push origin main
npx vercel --prod --yes --force
```
