##Claude.MD file for Product Portfolio Site 
Overview
Create a modern, professional portfolio website for Koos - a Senior Product Manager with expertise in AI/Analytics. The site should showcase PM experience, technical projects, and professional background in a clean, easily maintainable format.
Project Setup

Framework: Next.js with App Router
Styling: Tailwind CSS
TypeScript: Yes
Deployment target: Vercel

Design Input
I will provide initial design mockups/code/documentation. Transform these into a working Next.js application following the technical specifications below.
Core Pages & Sections
1. Home/Landing Page

Hero section with name, title, brief tagline
Professional photo placeholder
Clear CTA to view work or contact
Navigation to other sections

2. About Section

Professional background summary
Key skills and expertise areas
Current focus/availability status
Link to downloadable resume/CV

3. Work Experience

Timeline or card-based layout
Company, role, duration for each position
2-3 key achievements per role
Focus on: Rabobank, KPN, Nike positions

4. Projects Showcase

Featured projects: TaskBridge, LLYLI
Project cards with: name, description, tech stack, outcomes
GitHub links where applicable
Clean visual presentation

5. Contact

Email contact form or mailto link
LinkedIn profile link
Location: Lisbon, Portugal
Optional: Calendar booking link

Technical Requirements
Responsive Design

Mobile-first approach
Breakpoints: mobile (default), tablet (768px), desktop (1024px+)
All content readable and accessible on all screen sizes
Touch-friendly navigation on mobile

Performance

Fast page loads (<3s)
Optimized images (Next.js Image component)
Minimal JavaScript bundle
Lighthouse score >90

Content Management

All content in separate config/data files (JSON or TypeScript objects)
Easy to update text without touching components
Structured data for work history, projects, skills
Simple process to add new projects/experience

Code Quality

Clean component structure
Reusable UI components
Proper TypeScript types
Comments for complex logic
Consistent naming conventions

Styling Guidelines

Modern, professional aesthetic
Clean whitespace
Consistent color scheme (primary, secondary, accent)
Professional typography (readable font sizes)
Subtle animations/transitions
Dark mode support optional but nice-to-have

Deployment Requirements

Vercel-ready configuration
Environment variables setup for any APIs
Automatic deployments from main branch
Custom domain support ready

Content Structure
Create placeholder content structure for:

Work history: 3-4 positions with achievements
Skills: PM Core, Technical, Domain Expertise
Projects: 2-3 featured projects
Bio: Professional summary paragraph

Success Criteria

Looks professional on laptop and mobile
Content easily updatable via config files
Deploys to Vercel in under 5 minutes
No ongoing costs
Code is clean and documented for future changes

Out of Scope (V1)

Blog functionality
CMS integration
Authentication
Analytics (can add later)
Multi-language support

Deliverables

Working Next.js application
README with setup instructions
Documentation on how to update content
Vercel deployment configuration
Basic instructions for future modifications


Note to Claude Code: Transform the provided design materials into this Next.js structure. Prioritize clean code, easy maintainability, and professional appearance. Make content updates as simple as editing a single config file.Almost add that i will provide already a yaml and css file used as input8:19 PMProduct Requirements Document: Personal Portfolio Website
Overview
Create a modern, professional portfolio website for Koos - a Senior Product Manager with expertise in AI/Analytics. The site should showcase PM experience, technical projects, and professional background in a clean, easily maintainable format.
Project Setup

Framework: Next.js with App Router
Styling: Tailwind CSS
TypeScript: Yes
Deployment target: Vercel

Design Input
I will provide:

YAML file - containing content/data structure
CSS file - containing existing styles
Additional design mockups/documentation as needed

Task: Transform these inputs into a working Next.js application following the technical specifications below. Use the YAML structure for content organization and translate the CSS styles into Tailwind classes where possible (keep custom CSS where Tailwind isn't suitable).
Core Pages & Sections
1. Home/Landing Page

Hero section with name, title, brief tagline
Professional photo placeholder
Clear CTA to view work or contact
Navigation to other sections

2. About Section

Professional background summary
Key skills and expertise areas
Current focus/availability status
Link to downloadable resume/CV

3. Work Experience

Timeline or card-based layout
Company, role, duration for each position
2-3 key achievements per role
Focus on: Rabobank, KPN, Nike positions

4. Projects Showcase

Featured projects: TaskBridge, LLYLI
Project cards with: name, description, tech stack, outcomes
GitHub links where applicable
Clean visual presentation

5. Contact

Email contact form or mailto link
LinkedIn profile link
Location: Lisbon, Portugal
Optional: Calendar booking link

Technical Requirements
Content & Styling Integration
Parse and utilize provided YAML file for all content
Translate provided CSS to Tailwind classes where feasible
Preserve custom CSS for unique styling requirements
Maintain YAML structure for easy future updates

Responsive Design

Mobile-first approach
Breakpoints: mobile (default), tablet (768px), desktop (1024px+)
All content readable and accessible on all screen sizes
Touch-friendly navigation on mobile

Performance

Fast page loads (<3s)
Optimized images (Next.js Image component)
Minimal JavaScript bundle
Lighthouse score >90

Content Management

YAML file as single source of truth for content
Type-safe parsing of YAML data
Easy to update text without touching components
Structured data for work history, projects, skills
Simple process to add new projects/experience

Code Quality

Clean component structure
Reusable UI components
Proper TypeScript types
Comments for complex logic
Consistent naming conventions

Styling Guidelines

Honor design from provided CSS file
Modern, professional aesthetic
Clean whitespace
Consistent color scheme (primary, secondary, accent)
Professional typography (readable font sizes)
Subtle animations/transitions
Dark mode support optional but nice-to-have

Deployment Requirements

Vercel-ready configuration
Environment variables setup for any APIs
Automatic deployments from main branch
Custom domain support ready

Content Structure
Use provided YAML structure for:

Work history: positions with achievements
Skills: PM Core, Technical, Domain Expertise
Projects: featured projects
Bio: Professional summary
Contact information

Success Criteria

Looks professional on laptop and mobile
Content easily updatable via YAML file
Deploys to Vercel in under 5 minutes
No ongoing costs
Code is clean and documented for future changes
Design matches provided CSS aesthetic

Out of Scope (V1)

Blog functionality
CMS integration
Authentication
Analytics (can add later)
Multi-language support

Deliverables

Working Next.js application
README with setup instructions
Documentation on how to update YAML content
Vercel deployment configuration
Basic instructions for future modifications


Note to Claude Code: Transform the provided YAML and CSS files into this Next.js structure. The YAML should drive all content, and the CSS should inform the styling approach. Prioritize clean code, easy maintainability, and professional appearance. Make content updates as simple as editing the YAML file.