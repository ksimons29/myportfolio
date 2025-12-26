import { PortfolioContent } from './types'

export const content: PortfolioContent = {
  site: {
    name: 'Koos Simons',
    title: 'Product Manager — Lisbon',
    email: 'koossimons91@gmail.com',
    description: 'Product Manager based in Lisbon with 6 years PM experience building products that turn complex problems into solutions people actually adopt.',
    location: 'Lisbon, Portugal',
    socials: {
      linkedin: 'koossimons',
      github: 'ksimons29',
      whatsapp: '+351123456789',
    },
  },

  about: `**6 years shipping products, 3+ years in strategy & consulting**

I structure messy problems into products people actually use. Built across retail, finance, and manufacturing, leading with real usage and outcomes that prove things work. My consulting background means I'm comfortable with complexity: stakeholder alignment, ambiguous briefs, data-heavy environments.

Currently building LLYLI, a language learning app → check the button on the left to help me with my research, and completing Carnegie Mellon's PM Program. Based in Lisbon.`,

  currentWork: [
    {
      title: 'Learn the Language You Live In (LLYLI)',
      subtitle: 'Personal Project | VibeCoding Lisboa',
      caption: '2025 - Present',
      link: 'https://github.com/ksimons29',
      quote: 'Building an AI-powered language learning app that captures words from your daily life',
      description: `Creating a mobile app that captures words and phrases from your environment (menus, signs, conversations) and turns them into personalized spaced-repetition flashcards.

**What I'm learning:**
- End-to-end product development (discovery → design → build → test)
- GenAI integration (OCR, translation APIs, prompt engineering)
- Mobile-first UX for language learners
- Go-to-market strategy for consumer apps

Part of hands-on upskilling through VibeCoding Lisboa's product community.`,
    },
  ],

  selectedOutcomes: [
    {
      title: 'GenAI Knowledge Assistant',
      subtitle: 'B2B Product | Financial Services',
      caption: '2024',
      description: `**Challenge:** Teams wasting 2+ hours daily searching fragmented documentation across multiple systems.

**What I Did:**
- Led discovery with 40+ user interviews across 6 departments
- Designed RAG-based solution using Azure OpenAI
- Built evaluation framework for answer quality and relevance
- Ran phased rollout with usage tracking and feedback loops

**Impact:**
- 30% reduction in search time
- 200+ active users within 3 months
- 4.2/5 user satisfaction score`,
    },
    {
      title: 'Self-Service Analytics Platform',
      subtitle: 'Data Product | Retail',
      caption: '2023',
      description: `**Challenge:** BI team drowning in 200+ custom report requests per quarter, blocking decision-making speed.

**What I Did:**
- Ran comparative evaluation of 5 platforms (technical + UX criteria)
- Built TCO business case that got leadership buy-in
- Led cross-functional implementation and rollout
- Designed training strategy and adoption metrics

**Impact:**
- 40% faster report creation time
- 120+ business users self-serving within 6 months
- Request backlog cleared in 90 days`,
    },
    {
      title: 'Data Governance Operating Model',
      subtitle: 'Platform Product | Banking',
      caption: '2022-2023',
      description: `**Challenge:** Fragmented data governance causing compliance gaps, slow approvals, and frustrated data teams.

**What I Did:**
- Designed federated governance model with clear ownership
- Built visible quality scorecard (gamified improvement)
- Launched data stewardship community across 8 business units
- Created lightweight process that balanced control with speed

**Impact:**
- 85% policy adoption in 6 months
- Quality scores improved from 60% → 85%
- Approval process reduced from 4 weeks → 1 week`,
    },
  ],

  experience: [
    {
      company: 'Cognizant',
      role: 'Product Manager & Consulting Manager',
      period: '2016 - Oct 2025',
      link: 'https://cognizant.com',
      description: `Partnered with clients across banking, retail, telecom, and public sector to ship data products, analytics platforms, and AI tools. Grew from BI consultant to consulting manager, leading cross-functional teams from discovery to rollout.

**Key Client Projects:**

**Rabobank** (2022-2024) — Product Manager
Led GenAI assistant for policy/compliance search. 40+ user interviews, RAG pipeline design, ~95% answer accuracy. Also designed data governance operating model.

**Nike EMEA** (2021-2022) — Product Manager
Scaled self-service analytics platform to 2,000+ users. Decision speed +25%, data inconsistencies -40%. Built business cases and led cross-functional rollout.

**KPN** (2019-2021) — Product Owner
Managed customer data platforms and analytics tools for telecom operations. Prioritized backlogs, ran discovery, coordinated business and engineering teams.

**Gemeente Amsterdam** (2017-2019) — Business Analyst
Supported digital transformation for municipal services. Requirements gathering, process mapping, stakeholder alignment for citizen-facing platforms.`,
    },
  ],

  skills: [
    {
      name: 'PM Core',
      skills: [
        'Product Discovery',
        'Roadmapping',
        'User Research',
        'Stakeholder Management',
        'Agile/Scrum',
        'Business Case Development',
      ],
    },
    {
      name: 'Technical',
      skills: [
        'GenAI/LLMs',
        'RAG Architecture',
        'Data Products',
        'Analytics Platforms',
        'SQL',
        'Python Basics',
      ],
    },
    {
      name: 'Domain',
      skills: [
        'Financial Services',
        'Retail',
        'Telecom',
        'Data Governance',
        'B2B SaaS',
        'Enterprise Software',
      ],
    },
  ],

  education: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'Advanced Product Management Program',
      period: '2025',
      description: 'Intensive program covering discovery frameworks, roadmapping, experimentation, metrics, and product leadership for senior PM roles.',
    },
    {
      institution: 'VibeCoding Lisboa',
      degree: 'Product Community & Hands-On Building',
      period: '2025',
      description: 'Active in Lisbon\'s product and tech community. Currently building "Learn the Language You Live In" (LLYLI)—an AI-powered language learning app—as part of hands-on upskilling in end-to-end product development.',
    },
    {
      institution: 'Fontys University',
      degree: 'Bachelor of Commerce',
      period: '2013 - 2017',
      description: 'Focus on business analysis, project management, and organizational change. Graduated with honors in Strategic Management.',
    },
  ],

  languages: [
    { name: 'Dutch', level: 'Native', flag: '🇳🇱', progress: 100 },
    { name: 'English', level: 'Full Professional', flag: '🇬🇧', progress: 95 },
    { name: 'Portuguese', level: 'Limited Working', flag: '🇵🇹', progress: 45 },
    { name: 'German', level: 'Limited Working', flag: '🇩🇪', progress: 40 },
  ],

  beyondWork: `Board member and saxophonist in a Lisbon-based big band—handling everything from concert logistics to community building. I help my family's toy shop back in the Netherlands with digital marketing and inventory systems.

Recently walked part of the Camino de Santiago (Portuguese route) before settling in Lisbon. Always up for live music, trail hiking, and conversations about how products actually get built (and adopted).`,
}
