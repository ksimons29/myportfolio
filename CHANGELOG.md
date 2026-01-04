# Changelog

All notable changes to the portfolio website.

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
