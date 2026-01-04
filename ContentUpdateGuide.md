# Portfolio Website - Content Update Guide

**For content updates** | Last updated: January 2025

This guide shows you where to update content for each section of your portfolio website.

---

## Quick Reference

| Section | File to Edit |
|---------|--------------|
| Name, title, email, socials | `lib/content.ts` → `site` |
| About text | `lib/content.ts` → `about` |
| "What I Bring" cards | `lib/content.ts` → `capabilityCards` |
| Current Work (LLYLI) | `lib/content.ts` → `currentWork` |
| Selected Outcomes | `lib/content.ts` → `selectedOutcomes` |
| Experience | `lib/content.ts` → `experience` |
| Skills | `lib/content.ts` → `skills` |
| Education | `lib/content.ts` → `education` |
| Languages | `lib/content.ts` → `languages` |
| Beyond Work | `components/BeyondWork.tsx` |
| Availability/Services | `components/AvailabilitySection.tsx` |
| Footer tagline | `components/Footer.tsx` |
| LLYLI Widget | `components/LLYLIWidget.tsx` |
| Profile photo | `public/images/profile.jpg` |

---

## Folder Structure

```
my-portfolio/
├── lib/
│   ├── content.ts          ← MAIN CONTENT FILE (most sections)
│   └── types.ts            ← TypeScript type definitions
│
├── components/
│   ├── ProfileCards.tsx    ← Component (reads from lib/content.ts)
│   ├── AvailabilitySection.tsx ← Services/availability
│   ├── BeyondWork.tsx      ← Beyond Work section
│   ├── Footer.tsx          ← Footer tagline
│   └── LLYLIWidget.tsx     ← Floating widget
│
└── public/
    └── images/
        ├── profile.jpg     ← Your profile photo
        ├── discovery.svg   ← Card icons
        ├── data.svg
        ├── collaboration.svg
        └── llyli-widget.png
```

---

## Detailed Section Guide

### 1. Hero / Header (Name, Title, Socials)

**File:** `lib/content.ts`
**Location:** Lines 4-15, the `site` object

```typescript
site: {
  name: 'Koos Simons',
  title: 'Senior Product Manager',
  email: 'koossimons91@gmail.com',
  description: 'Senior Product Manager based in Lisbon...',
  location: 'Lisbon, Portugal',
  socials: {
    linkedin: 'koossimons',      // Just the username
    github: 'ksimons29',          // Just the username
    whatsapp: '+351123456789',    // Full phone number
  },
},
```

**To update:**
- Change any value between the quotes
- For socials, use just the username (not full URLs)

---

### 2. About Section

**File:** `lib/content.ts`
**Location:** Lines 17-21, the `about` string

```typescript
about: `**6 years in product roles. 10 years turning complex problems into simple products.**

I turn complex problems into products people actually use...`,
```

**Formatting:**
- Use `**text**` for bold
- Use backticks `` ` `` for the multi-line string
- Line breaks are preserved

---

### 3. "What I Bring" Cards (Capability Cards)

**File:** `lib/content.ts`
**Location:** Lines 23-111, the `capabilityCards` array

```typescript
capabilityCards: [
  {
    icon: '/images/discovery.svg',
    title: 'From Ambiguity to First Release',
    description: 'Turn unclear requests into scoped MVPs...',
    examples: [
      {
        company: 'Major Bank',
        project: 'GenAI Knowledge Assistant',
        description: '- **Context:** ...\n- **Action:** ...\n- **Result:** ...',
        metric: '~95% answer accuracy',  // ← Shows as badge in header!
      },
      // ... more examples
    ],
  },
  // ... more cards
]
```

**Important:** Every example MUST have a `metric` field or the build will fail.

#### How the Metric Badge Works

When you expand a card, each example shows a header with:
```
[COMPANY NAME]  [METRIC BADGE]
Project Title
Description text...
```

The `metric` field becomes the **colored badge** next to the company name.

**Current metrics in use:**
| Card | Company | Metric |
|------|---------|--------|
| Card 1 | Major Bank | `~95% answer accuracy` |
| Card 1 | Global Retailer | `Adoption +60%` |
| Card 1 | Global Manufacturer | `Lineage visibility +30%` |
| Card 2 | Major Bank | `~95% answer accuracy` |
| Card 2 | Global Retailer | `Decision speed +25%` |
| Card 2 | Pharma Company | `Out-of-stock reduced ~25%` |
| Card 3 | Major Bank | `Governance model adopted bank-wide` |
| Card 3 | Global Retailer | `Adoption +60%, ramp-up time -25%` |
| Card 3 | Consulting Firm | `200+ participants per event` |

**Tips for good metrics:**
- Keep them short (fits in a badge)
- Include numbers when possible (`~95%`, `+60%`, `50%`)
- Use arrows for change (`60% → 85%`)
- Focus on outcomes, not activities

**To change a metric:**
1. Open `lib/content.ts`
2. Find the example you want to update (search for company name)
3. Change the `metric: '...'` value
4. Save and rebuild

**To add a new example:**
1. Copy an existing example block
2. Paste it inside the `examples: [...]` array
3. Update all four fields: `company`, `project`, `description`, `metric`

**Description Format:**
Use the Context/Action/Result format with Markdown:
```typescript
description: '- **Context:** Problem or situation\n- **Action:** What you did\n- **Result:** Impact achieved'
```

---

### 4. Current Work

**File:** `lib/content.ts`
**Location:** Lines 23-36, `currentWork` array

```typescript
currentWork: [
  {
    title: 'Learn the Language You Live In (LLYLI)',
    subtitle: 'VibeCoding Lisboa',
    caption: '2025 - Present',
    link: 'https://github.com/ksimons29',
    quote: 'An AI-powered app that captures words...',
    description: `Full description here with Markdown support...`,
  },
],
```

---

### 5. Selected Outcomes

**File:** `lib/content.ts`
**Location:** Lines 38-95, `selectedOutcomes` array

```typescript
selectedOutcomes: [
  {
    title: 'GenAI Knowledge Assistant',
    subtitle: 'B2B Internal Product | Financial Services',
    caption: '2024-2025',
    description: `**Challenge:**
Risk and IT teams wasting hours...

**What I Did:**
- Led discovery (40+ interviews...)

**Impact:**
- ~95% answer accuracy`,
  },
],
```

**Formatting:** Supports Markdown with `**bold**`, `-` lists, and line breaks.

---

### 6. Experience

**File:** `lib/content.ts`
**Location:** Lines 97-117, `experience` array

```typescript
experience: [
  {
    company: 'Cognizant',
    role: 'Product Manager (via Cognizant)',
    period: '2016 - Oct. 2025',
    link: 'https://cognizant.com',
    description: `Partnered with clients in banking, retail...

Selected client work:
- Rabobank, Product Manager (2024 to Jul 2025): RAG-based GenAI assistant...`,
  },
],
```

---

### 7. Core Skills

**File:** `lib/content.ts`
**Location:** Lines 119-173, `skills` array

```typescript
skills: [
  {
    name: 'Product',           // Category name
    skills: [                   // List of skills in category
      'Product Discovery & Problem Framing',
      'Outcome-based Roadmapping',
      // ...
    ],
  },
  {
    name: 'AI & Automation',
    skills: ['Prompt engineering & evaluation', ...],
  },
],
```

**To add a skill:** Add a new string to the `skills` array within a category.
**To add a category:** Add a new object with `name` and `skills` array.

---

### 8. Education

**File:** `lib/content.ts`
**Location:** Lines 175-206, `education` array

```typescript
education: [
  {
    institution: 'Carnegie Mellon University (CMU Portugal Academy)',
    degree: 'Product Management Advanced Program',
    period: '2025-2026',
    description: 'Part-time advanced program covering...',
  },
],
```

---

### 9. Languages

**File:** `lib/content.ts`
**Location:** Lines 208-213, `languages` array

```typescript
languages: [
  { name: 'Dutch', level: 'Native', flag: '🇳🇱', progress: 100 },
  { name: 'English', level: 'Full Professional', flag: '🇬🇧', progress: 95 },
  { name: 'Portuguese', level: 'Conversational (improving)', flag: '🇵🇹', progress: 50 },
  { name: 'German', level: 'Working Proficiency', flag: '🇩🇪', progress: 45 },
],
```

- `progress`: 0-100 (shown as bar width)
- `flag`: Use emoji flags

---

### 10. Beyond Work

**File:** `components/BeyondWork.tsx`
**Location:** Lines 148-169

This section has **hardcoded JSX** with inline icons. Edit the paragraph text directly:

```tsx
<p className="mb-5">
  Played saxophone
  <InlineIcon><SaxophoneIcon className="w-5 h-5" /></InlineIcon>
  and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025).
  ...
</p>
```

Note: There's an unused `beyondWork` string in `lib/content.ts` that isn't connected to the component.

---

### 11. Availability / Services

**File:** `components/AvailabilitySection.tsx`
**Location:** Lines 1-17

```typescript
const services = [
  {
    title: 'Full-time or Interim PM',
    description: 'Data products, AI tools, internal platforms',
    tag: 'Full-time or Interim',
  },
  // ... more services
]
```

Also update the header text on lines 25-29 in the JSX.

---

### 12. Footer Tagline

**File:** `components/Footer.tsx`
**Location:** Line 13

```tsx
<p className="text-paper/80 mb-6 max-w-md mx-auto">
  Based in Lisbon. Open to PM roles, consulting, and coffee.
</p>
```

---

### 13. LLYLI Floating Widget

**File:** `components/LLYLIWidget.tsx`

| What to change | Location |
|----------------|----------|
| Survey/form link | Line 11: `href="https://tally.so/r/jaaBzJ"` |
| Tooltip text | Line 27: `"Help with my language learning research!"` |
| Widget image | Replace `public/images/llyli-widget.png` |

---

## How to Deploy Changes

### Option 1: Using Claude Code (Recommended)
1. Tell Claude what you want to change
2. Claude will edit the files
3. Run: `npm run build` to verify
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

### Option 2: Manual Editing
1. Edit the file in VS Code
2. Save the file
3. Test locally: `npm run dev`
4. Verify build: `npm run build`
5. Commit and push

### Auto-Deployment
Pushing to `main` triggers automatic Vercel deployment. Changes go live in ~2-3 minutes.

---

## Troubleshooting

### Build Failed
Most common cause: Missing required field (like `metric` in ProfileCards examples).

**Fix:**
1. Check the error message for the missing field
2. Add the missing field to your content
3. Run `npm run build` again

### Changes Not Showing
1. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Check Vercel dashboard for deployment status
3. Verify you pushed to `main` branch

### Formatting Looks Wrong
- Check for unclosed quotes or backticks
- Verify Markdown syntax (`**bold**`, not `*bold*`)
- Ensure proper indentation in arrays

---

## Important Rules

**DO:**
- Keep quotes around strings
- Include all required fields (especially `metric` in examples)
- Test with `npm run build` before pushing
- Use backticks for multi-line strings

**DON'T:**
- Leave trailing commas in the last array item (optional but cleaner)
- Forget the `metric` field in ProfileCards examples
- Mix single and double quotes inconsistently

---

## Files Summary

| Purpose | File |
|---------|------|
| Most content (centralized) | `lib/content.ts` |
| Type definitions | `lib/types.ts` |
| Capability cards component | `components/ProfileCards.tsx` (reads from `lib/content.ts`) |
| Beyond Work | `components/BeyondWork.tsx` |
| Availability | `components/AvailabilitySection.tsx` |
| Footer | `components/Footer.tsx` |
| LLYLI Widget | `components/LLYLIWidget.tsx` |
| Images | `public/images/` |
