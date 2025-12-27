# Portfolio Website - Content Update Guide

**For non-technical users** | Last updated: December 2024

This guide shows you how to update your portfolio content without knowing code. All changes happen in one file.

---

## 📁 Where to Find the Content File

**File location:**
```
/data/content.yaml
```

**Full path from project root:**
```
your-portfolio/
├── data/
│   └── content.yaml  ← Edit this file
├── src/
├── public/
└── ...
```

**How to edit:**
1. Open the file in any text editor (VS Code, TextEdit, Notepad)
2. Make your changes (see examples below)
3. Save the file
4. Push to GitHub (changes will auto-deploy to website)

---

## ✏️ Common Updates

### 1. Add New Work Experience

**Location in file:** Look for `experience:` section

**Format:**
```yaml
experience:
  - company: "Company Name"
    role: "Your Role"
    duration: "Jan 2024 - Present"
    location: "City, Country"
    achievements:
      - "Achievement 1 with metric or outcome"
      - "Achievement 2 with metric or outcome"
      - "Achievement 3 with metric or outcome"
```

**Example:**
```yaml
experience:
  - company: "Nike"
    role: "Senior Product Manager"
    duration: "Jan 2023 - Dec 2024"
    location: "Lisbon, Portugal"
    achievements:
      - "Shipped GenAI knowledge synthesis tool, 70% team adoption in Q1"
      - "Led cross-functional team of 8 engineers and 2 designers"
      - "Reduced product discovery time from 6 weeks to 2 weeks"
```

**To add a new job:**
1. Copy the entire block (from `- company:` to last achievement)
2. Paste it above or below existing entries
3. Update all the text with your new information
4. Keep the same spacing and `-` symbols

---

### 2. Update Skills

**Location in file:** Look for `skills:` section

**Format:**
```yaml
skills:
  core:
    - "Product Strategy"
    - "Roadmap Development"
    - "Stakeholder Management"
  
  technical:
    - "SQL"
    - "Python"
    - "Data Analysis"
  
  domain:
    - "AI/ML Products"
    - "Data Governance"
    - "Analytics Platforms"
```

**To add a skill:**
1. Find the right category (core, technical, or domain)
2. Add a new line with `- "Your New Skill"`
3. Keep the quotes and the `-` symbol

**To remove a skill:**
1. Delete the entire line

---

### 3. Update the 3 Profile Cards

**Location in file:** Look for `profile_cards:` section

**Current cards:**
```yaml
profile_cards:
  - id: "discovery"
    title: "Discovery to Release"
    icon: "discovery.svg"
    description: "Your description here..."
  
  - id: "data-ai"
    title: "Data and AI Products with Clear Success Criteria"
    icon: "data.svg"
    description: "Your description here..."
  
  - id: "delivery"
    title: "Delivery and Stakeholder Leadership"
    icon: "collaboration.svg"
    description: "Your description here..."
```

**To update:**
1. Change the `title:` text (keep the quotes)
2. Change the `description:` text (keep the quotes)
3. Don't change the `id:` - these are used for linking (see Section 4)

---

### 4. Link Cards to Experience Examples

**This creates clickable cards that scroll to relevant work examples**

#### Step 1: Give your experience examples an ID

**Location:** Find the experience you want to link to

**Add this line above the experience:**
```yaml
experience_examples:
  discovery_examples:  # ← This is the ID
    - company: "Nike"
      role: "Product Manager"
      outcome: "Shipped MVP in 3 months, 70% adoption"
      category: "discovery"  # ← Matches card ID
```

#### Step 2: Match the category to card ID

Make sure each experience has a `category:` that matches one of your card IDs:
- `discovery` → Links to "Discovery to Release" card
- `data-ai` → Links to "Data and AI Products" card  
- `delivery` → Links to "Delivery and Stakeholder Leadership" card

**Complete example:**
```yaml
experience_examples:
  - company: "Nike"
    role: "Senior PM - GenAI Tools"
    outcome: "Shipped knowledge synthesis tool, 70% team adoption in Q1"
    category: "discovery"  # ← This experience shows up when clicking "Discovery" card
    
  - company: "Rabobank"
    role: "Product Owner - Data Platform"
    outcome: "Reduced data quality issues by 40% through governance framework"
    category: "data-ai"  # ← This shows up for "Data & AI" card
    
  - company: "KPN"
    role: "Product Manager - Analytics"
    outcome: "Aligned 5 stakeholder groups, shipped in focused 2-week sprints"
    category: "delivery"  # ← This shows up for "Delivery" card
```

**How it works:**
1. User clicks "Discovery to Release" card
2. Page scrolls to all experiences with `category: "discovery"`
3. User sees relevant examples

---

### 5. Update About Section

**Location in file:** Look for `about:` section

```yaml
about:
  headline: "6 years shipping products, 3+ years in strategy & consulting"
  description: |
    I structure messy problems into products people actually use. 
    Built across retail, finance, and manufacturing, leading with 
    real usage and outcomes that prove things work.
  
  current_focus: "Currently building LLYLI, a language learning app"
  location: "Based in Lisbon"
```

**To update:**
- Change any text between the quotes
- The `|` symbol after `description:` means multi-line text
- Keep the same indentation (spacing)

---

### 6. Update Contact Information

**Location in file:** Look for `contact:` section

```yaml
contact:
  email: "your.email@example.com"
  linkedin: "https://linkedin.com/in/yourprofile"
  github: "https://github.com/yourusername"
  whatsapp: "https://wa.me/yourphonenumber"
  location: "Lisbon, Portugal"
```

**To update:**
1. Replace the URL or email
2. Keep the quotes
3. For WhatsApp: use format `https://wa.me/351912345678` (country code + number, no spaces)

---

## 🚨 Important Rules

### DO:
✅ Keep the same spacing/indentation (usually 2 spaces)
✅ Keep all `-` symbols at the start of list items
✅ Keep all quotes around text `"like this"`
✅ Use the `|` symbol for multi-line text
✅ Save the file after changes

### DON'T:
❌ Remove the `-` symbols
❌ Change the indentation randomly
❌ Remove quotes from text
❌ Change the `id:` values (used for linking)
❌ Mix tabs and spaces (use spaces only)

---

## 📂 Folder Structure Reference

```
your-portfolio/
├── data/
│   └── content.yaml          ← UPDATE THIS for all content changes
│
├── public/
│   └── assets/
│       └── images/
│           ├── discovery.svg  ← Card icons (don't change unless replacing)
│           ├── data.svg
│           ├── collaboration.svg
│           └── profile.jpg    ← Your profile photo
│
├── src/
│   ├── app/                   ← Don't edit (code files)
│   ├── components/            ← Don't edit (code files)
│   └── ...
│
└── README.md                  ← Project documentation
```

**Files you can edit:**
- `/data/content.yaml` - All website content
- `/public/assets/images/profile.jpg` - Your profile photo

**Files you shouldn't edit:**
- Anything in `/src/` (code files)
- `package.json`, `tsconfig.json`, etc. (config files)

---

## 🔄 How to Deploy Changes

### Option 1: GitHub Web Interface (Easiest)
1. Go to your repository on GitHub.com
2. Navigate to `data/content.yaml`
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, add a commit message like "Updated work experience"
6. Click "Commit changes"
7. Wait 2-3 minutes - changes automatically deploy to your website

### Option 2: Local Editing (If you use VS Code)
1. Open the project in VS Code
2. Edit `data/content.yaml`
3. Save the file
4. Open Terminal in VS Code
5. Run these commands:
   ```bash
   git add data/content.yaml
   git commit -m "Updated content"
   git push
   ```
6. Wait 2-3 minutes for deployment

---

## ❓ Troubleshooting

### "My changes didn't show up on the website"
1. Check if you saved the file
2. Check if you pushed to GitHub (`git push`)
3. Wait 3-5 minutes for deployment
4. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### "I broke something / website looks wrong"
1. Check the spacing/indentation in your YAML file
2. Make sure all quotes are closed: `"text here"`
3. Make sure all `-` symbols are there for lists
4. Compare to the examples in this guide

### "How do I undo changes?"
**In GitHub:**
1. Go to your file on GitHub
2. Click "History"
3. Find the version before your changes
4. Click "View" → Copy the content
5. Edit the current file and paste the old content

**In VS Code:**
```bash
git log  # Find the commit hash before your changes
git revert [commit-hash]
git push
```

---

## 📞 Need Help?

If you're stuck:
1. Check this guide again
2. Look at the example format in `content.yaml`
3. Ask Claude Code or ChatGPT: "I need help updating [specific thing] in my YAML file"
4. Share the exact error message or what looks wrong

---

## 📋 Quick Reference - Common Tasks

| Task | Section in content.yaml | Time |
|------|------------------------|------|
| Add new job | `experience:` | 2 min |
| Update skills | `skills:` | 1 min |
| Change card text | `profile_cards:` | 2 min |
| Add work example | `experience_examples:` | 3 min |
| Update contact info | `contact:` | 1 min |
| Link card to examples | Add `category:` to experience | 1 min |

**Average update time: 5-10 minutes**

---

**Last tip:** Make small changes and test often. Don't update everything at once - it's easier to fix mistakes if you only changed one section.