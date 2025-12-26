// Site configuration and personal info
export interface SiteConfig {
  name: string
  title: string
  email: string
  description: string
  location: string
  socials: SocialLinks
}

export interface SocialLinks {
  linkedin?: string
  github?: string
  whatsapp?: string
  twitter?: string
}

// Project/Outcome structure
export interface Project {
  title: string
  subtitle: string
  caption: string
  link?: string
  quote?: string
  description: string
}

// Experience structure
export interface Experience {
  company: string
  role: string
  period: string
  link?: string
  description: string
}

// Education structure
export interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

// Skills structure
export interface SkillCategory {
  name: string
  skills: string[]
}

// Language structure
export interface Language {
  name: string
  level: string
  flag: string
  progress: number
}

// Full content structure
export interface PortfolioContent {
  site: SiteConfig
  about: string
  currentWork: Project[]
  selectedOutcomes: Project[]
  experience: Experience[]
  skills: SkillCategory[]
  education: Education[]
  languages: Language[]
  beyondWork: string
}
