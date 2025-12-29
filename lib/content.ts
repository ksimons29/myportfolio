import { PortfolioContent } from './types'

export const content: PortfolioContent = {
  site: {
    name: 'Koos Simons',
    title: 'Senior Product Manager',
    email: 'koossimons91@gmail.com',
    description: 'Senior Product Manager based in Lisbon with 6 years PM experience building products that turn complex problems into solutions people actually adopt.',
    location: 'Lisbon, Portugal',
    socials: {
      linkedin: 'koossimons',
      github: 'ksimons29',
      whatsapp: '+351123456789',
    },
  },

  about: `**6 years in product roles. 10 years turning complex problems into simple products.**

I run structured discovery, define clear outcomes, and ship in focused increments. Built across retail (Nike), finance (Rabobank), and telecom (KPN) — from analytics platforms serving 2,000+ users to GenAI assistants with ~95% answer accuracy.

Completing Carnegie Mellon's Advanced PM Program. Building LLYLI, an AI language learning app. Based in Lisbon.`,

  currentWork: [
    {
      title: 'Learn the Language You Live In (LLYLI)',
      subtitle: 'VibeCoding Lisboa',
      caption: '2025 - Present',
      link: 'https://github.com/ksimons29',
      quote: 'An AI-powered app that captures words from your environment and turns them into personalized flashcards',
      description: `An AI-powered app that captures words from your environment (menus, signs, conversations) and turns them into personalized spaced-repetition flashcards.

End-to-end product work: discovery with expat language learners, GenAI integration (OCR, translation APIs, prompt engineering), mobile-first UX.

Part of VibeCoding Lisboa's product community. Also completing Vibe Skills courses.`,
    },
  ],

  selectedOutcomes: [
    {
      title: 'GenAI Knowledge Assistant',
      subtitle: 'B2B Internal Product | Financial Services',
      caption: '2024-2025',
      description: `**Challenge:**
Risk and IT teams wasting hours searching fragmented policy documentation across multiple systems.

**What I Did:**
- Led discovery (40+ interviews, workflow mapping, in-product surveys) to turn vague "help colleagues find the right rules" request into prioritized roadmap
- Partnered with engineering and content owners to design RAG pipeline and role-based access for regulated content
- Built governance and QA model (risk scoring, SME review loops, lifecycle rules) adopted by security and compliance as template for future GenAI tools
- Ran A/B and multivariate tests on LLM and retrieval settings

**Impact:**
- ~95% answer accuracy
- 4+ hours saved per user per month
- Governance model adopted as bank-wide standard`,
    },
    {
      title: 'Self-Service Analytics Platform',
      subtitle: 'Internal Analytics Product | Retail',
      caption: '2022-2024',
      description: `**Challenge:**
BI team overwhelmed with custom report requests; decision-makers waiting days for basic insights.

**What I Did:**
- Owned roadmap for 2,000+ user EMEA analytics platform serving retail, merchandising, and finance
- Led 13-person squad; introduced operating model clarifying ownership for ~100 KPIs
- Built 90+ person power-user community and structured onboarding program
- Co-created pricing and promotion analytics, including Nike's first EMEA discount-sales overview
- Embedded Collibra to catalogue key data and metrics

**Impact:**
- Decision speed improved ~25%
- Reporting inconsistencies reduced ~40%
- Incident resolution time reduced ~25%
- Adoption increased ~60%, ramp-up time reduced ~25%`,
    },
    {
      title: 'Data Governance Operating Model',
      subtitle: 'Platform/Process Product | Retail',
      caption: '2022-2024',
      description: `**Challenge:**
Fragmented data governance causing compliance gaps, slow approvals, and frustrated data teams.

**What I Did:**
- Designed federated governance model with clear ownership and access rules
- Embedded Collibra to catalogue assets (business terms, datasets), aligning ~100 KPIs
- Built visible quality scorecard with gamified improvement tracking
- Added stewardship and approval workflows to reduce ambiguity and increase trust

**Impact:**
- Policy adoption: 85% in 6 months
- Quality scores: 60% → 85%
- Approval process: 4 weeks → 1 week`,
    },
  ],

  experience: [
    {
      company: 'Cognizant',
      role: 'Product Manager (via Cognizant)',
      period: '2016 - Oct. 2025',
      link: 'https://cognizant.com',
      description: `Partner to clients in banking, retail, telecom, and manufacturing where technology, data, and people meet. Grew from BI/analytics consultant to consulting manager acting as in-house Product Manager for internal platforms and AI-assisted tools. Led cross-functional teams from discovery to rollout.

**Client Projects:**

| Client | Role | Dates | Product |
|--------|------|-------|---------|
| Rabobank | Product Manager | 2024 – Aug. 2025 | RAG-based GenAI assistant for policy and security rules |
| Nike EMEA | Product Manager | 2022 – Jul. 2024 | EMEA insights and analytics platform (2,000+ users) |
| Marel | Product Owner & Project Manager | 2019–2021 | Enterprise data platform; led maturity assessment, team onboarding, and Informatica IICS setup |
| KPN | Product Owner | 2017–2019 | Self-service BI and KPI reporting for B2B telecom |
| Teva EMEA | Business Analyst | 2016–2017 | Predictive analytics dashboard for out-of-stock risk |

**Cognizant Internal:**
- Co-founded the internal Data Management Club and led Benelux data events with 200+ participants
- Facilitated cross-European learning on product, governance, and change
- Started as trainee at Qlik, building foundation in BI and analytics software`,
    },
  ],

  skills: [
    {
      name: 'Product',
      skills: [
        'Product Discovery & Problem Framing',
        'Outcome-based Roadmapping',
        'Backlog Management & Prioritization',
        'Experimentation & MVPs',
        'Defining & Tracking Product Metrics',
        'Stakeholder Alignment & Storytelling',
        'Cross-functional Team Leadership',
        'Rollout, Change & Adoption',
        'Project Management',
      ],
    },
    {
      name: 'AI & Automation',
      skills: [
        'Prompt engineering & evaluation',
        'RAG pipelines (design, testing, governance)',
        'Claude, Claude Code, Azure OpenAI',
      ],
    },
    {
      name: 'Data & Analytics',
      skills: [
        'SQL',
        'Tableau, Power BI, Qlik',
        'Snowflake, Databricks',
        'Collibra (data catalog & governance)',
        'Informatica Data Quality, Informatica IICS',
        'Salesforce (as data source)',
      ],
    },
    {
      name: 'Development & Workflow',
      skills: [
        'VS Code',
        'Jira, Azure DevOps',
        'ServiceNow',
        'Confluence, Miro',
      ],
    },
    {
      name: 'Domains',
      skills: [
        'Financial Services',
        'Retail',
        'Telecom',
        'Manufacturing',
        'Software / SaaS',
        'Internal Tools & Platforms',
      ],
    },
  ],

  education: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'Advanced Product Management Program',
      period: '2025-2026',
      description: 'Product discovery, metrics & growth, AI prototyping, leadership; Capstone Apr/May 2026',
    },
    {
      institution: 'VibeCoding Lisboa + Vibe Skills',
      degree: 'Product Community & AI-Assisted Development',
      period: '2025',
      description: 'Building LLYLI; completing Vibe Skills courses',
    },
    {
      institution: 'Tilburg University',
      degree: 'MSc Strategic Management',
      period: '2013-2015',
      description: 'Strategy, quantitative research methods, business consulting',
    },
    {
      institution: 'Pontifícia Universidade Católica',
      degree: 'Exchange Semester (Rio de Janeiro)',
      period: '2014',
      description: 'Business strategy, innovation, Portuguese',
    },
    {
      institution: 'Fontys University',
      degree: 'Bachelor of Commerce',
      period: '2008-2012',
      description: 'Marketing, market research, behavioural economics',
    },
  ],

  languages: [
    { name: 'Dutch', level: 'Native', flag: '🇳🇱', progress: 100 },
    { name: 'English', level: 'Full Professional', flag: '🇬🇧', progress: 95 },
    { name: 'Portuguese', level: 'Conversational (improving)', flag: '🇵🇹', progress: 50 },
    { name: 'German', level: 'Working Proficiency', flag: '🇩🇪', progress: 45 },
  ],

  beyondWork: `Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025). Helped my family's toy shop in the Netherlands with digital marketing, making it the region's top searchable toy store online.

Completed the Caminho Português before settling in Lisbon. Enjoy live music, hiking, and conversations about culture and world affairs.`,
}
