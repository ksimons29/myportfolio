import { PortfolioContent } from './types'

export const content: PortfolioContent = {
  site: {
    name: 'Koos Simons',
    title: 'Product Manager - Lisbon based',
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

Product Manager and Consulting Manager in Lisbon. Turns messy problems into products people adopt through crisp discovery, stakeholder alignment, and focused delivery.
Currently completing Carnegie Mellon’s Advanced Product Management Program and building LLYLI, a language learning app.
See What I bring below for real examples and outcomes.`,

  currentWork: [
    {
      title: 'Learn the Language You Live In (LLYLI)',
      subtitle: 'VibeCoding Lisboa',
      caption: '2025 - Present',
      link: 'https://github.com/ksimons29',
      quote: 'Turn the words you see, hear, and need today into phrases you can use tomorrow.',
      description: `LLYLI helps newcomers build a personal, from life vocabulary. You capture real words and phrases from your day (signs, chats, errands). The system turns them into short, natural sentences at your level and turns those into spaced repetition cards for a few minutes of active recall each day. The right phrases come back when you need them, so you get comfortable faster in your real situations (home, transport, admin, work, social).

End to end product work: user discovery with expat language learners, JTBD, rapid prototyping, and an AI assisted capture to card flow (text, voice, photo).


Part of VibeCoding Lisboa's product community. Also completing Vibe Skills courses.`,
    },
  ],

  selectedOutcomes: [
    {
      title: 'GenAI Knowledge Assistant',
      subtitle: 'B2B Internal Product | Financial Services',
      caption: '2024 to 2025',
      description: `**Challenge:**
Risk and IT teams wasting hours searching fragmented policy documentation across multiple systems.

**What I Did:**
- Led discovery (40+ interviews, workflow mapping, in product surveys) to turn vague "help colleagues find the right rules" request into prioritized roadmap
- Partnered with engineering and content owners to design RAG pipeline and role based access for regulated content
- Built governance and QA model (risk scoring, SME review loops, lifecycle rules) adopted by security and compliance as template for future GenAI tools
- Ran A B and multivariate tests on LLM and retrieval settings

**Impact:**
- ~95% answer accuracy
- 4+ hours saved per user per month
- Governance model adopted as bank wide standard`,
    },
    {
      title: 'Self Service Retail Analytics Platform',
      subtitle: 'Internal Retail Analytics Product | Direct Stores and Marketplace | EMEA',
      caption: '2022 to 2024',
      description: `**Challenge:**
Direct stores and marketplace teams had fragmented views of pricing, promotions, and sales performance across EMEA. Leaders could get answers, but it often meant pulling data from multiple places and waiting on follow ups from the analytics team.

**What I Did:**
- Owned roadmap for 2,000+ user EMEA analytics platform serving retail, merchandising, and finance
- Led 13 person squad; introduced operating model clarifying ownership for ~100 KPIs
- Built 90+ person power user community and structured onboarding program
- Co created pricing and promotion analytics, including Nike’s first EMEA discount sales overview to measure promotion effectiveness
- Implemented a governed catalogue for key data and metrics to improve trust and reduce rework

**Impact:**
- Decision speed improved ~25%
- Reporting inconsistencies reduced ~40%
- Incident resolution time reduced ~25%
- Adoption increased ~60%, ramp up time reduced ~25%`,
    },
    {
      title: 'Enterprise Data Governance Roadmap',
      subtitle: 'Data Governance Program | Digital Transformation | Manufacturing',
      caption: '2021 to 2022',
      description: `**Challenge:**
Fragmented data ownership and unclear governance practices, with limited executive alignment on roles, lifecycle, and the foundations needed to scale data management across the business.

**What I Did:**
- Led an enterprise data maturity assessment to pinpoint gaps in ownership, governance, and visibility across domains
- Facilitated executive alignment on governance roles, decision rights, data lifecycle, and platform foundations
- Structured the roadmap using DAMA data management principles, covering data governance, metadata management, data quality, and stewardship
- Applied CMDB style principles to define critical data assets, ownership, relationships, and change control to improve traceability
- Delivered a 12 month roadmap to operationalize governance and improve lineage visibility over time
- Positioned the sustainability domain as the first adopter to prove the model and create a repeatable rollout path

**Impact:**
- Increased lineage visibility by about 30 percent following adoption of the roadmap and governance model
- Established a clear first adoption area in sustainability, enabling a practical starting point for broader rollout`,
    },
  ],

  experience: [
    {
      company: 'Cognizant',
      role: 'Product Manager (via Cognizant)',
      period: '2016 - Oct. 2025',
      link: 'https://cognizant.com',
      description: `Partnered with clients in banking, retail, telecom, and manufacturing where technology, data, and people meet. Promoted into a Consulting Manager role while staying hands-on as an embedded Product Manager for internal platforms and AI-assisted tools. Led discovery to rollout, coached analysts, and supported go-to-market with senior stakeholders, with a focus on adoption and measurable outcomes.

Selected client work:
- Rabobank, Product Manager (2024 to Jul 2025): RAG-based GenAI assistant for policy and security rules (95% answer accuracy, 4+ hours saved per user per month)
- Nike EMEA, Product Manager (2022 to Jul 2024): EMEA insights and analytics platform (2,000+ users, 35% adoption growth, 40% better reporting consistency)
- Marel, Product Owner and Project Manager (2019 to 2021): enterprise data platform (maturity assessment, team onboarding, Informatica IICS setup, 50% faster incident resolution)
- KPN B2B, Business Analyst and Project Manager (2017 to 2019): self-service BI and KPI reporting (BI tool evaluation, KPI standardisation, 30% less reporting time)
- Teva EMEA, Business Analyst (2016 to 2017): predictive analytics dashboard for out-of-stock risk (25% fewer out-of-stocks)

Cognizant internal:
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
      institution: 'Carnegie Mellon University (CMU Portugal Academy)',
      degree: 'Product Management Advanced Program',
      period: '2025-2026',
      description: 'Part-time advanced program covering Product Discovery, Metrics & Growth, AI Prototyping, Leadership and Delivery. Capstone project Apr/May 2026.',
    },
    {
      institution: 'Anthropic',
      degree: 'AI Fluency & Claude Certifications',
      period: '2025',
      description: 'AI Fluency: Framework & Foundations, Claude Code in Action. Practical training on LLM capabilities, prompt engineering, and AI-assisted development.',
    },
    {
      institution: 'Tilburg University',
      degree: 'Master of Science in Strategic Management',
      period: '2013-2015',
      description: 'Strategic Management, Quantitative Research Methods, Finance, and Business Consulting. Dissertation: "The Effect of an Economic Crisis on the Export Strategy of a Firm". Active member at study association Asset | Strategy & Logistics.',
    },
    {
      institution: 'Pontifícia Universidade Católica (PUC-Rio)',
      degree: 'Exchange Semester in Business Administration',
      period: '2014',
      description: 'Business Strategy, Innovation, and Portuguese language. Study abroad semester in Rio de Janeiro, Brazil.',
    },
    {
      institution: 'Fontys University of Applied Sciences',
      degree: 'Bachelor of Commerce',
      period: '2008-2012',
      description: 'Marketing, Market Research, Behavioural Economics. Foundation in commercial strategy and consumer insights.',
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
};
