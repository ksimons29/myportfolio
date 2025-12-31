'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Example {
  company: string
  project: string
  description: string
  metric: string
}

interface Card {
  icon: string
  title: string
  description: string
  examples: Example[]
}

const cards: Card[] = [
  {
    icon: '/images/discovery.svg',
    title: 'From Ambiguity to First Release',
    description:
      'Turn unclear requests into scoped MVPs. Run discovery, map constraints, and ship something teams can learn from.',
    examples: [
      {
        company: 'Rabobank',
        project: 'GenAI Knowledge Assistant',
        description: 'Turned vague "help colleagues find the right rules" request into scoped MVP. Led discovery with 40+ interviews. Shipped v1 in ~12 months with ~95% answer accuracy.',
        metric: '4+ hours saved per user/month',
      },
      {
        company: 'Nike EMEA',
        project: 'Self-Service Analytics Platform',
        description: 'Defined 0→1 roadmap through stakeholder interviews. Separated quick wins from platform vision.',
        metric: '120+ users self-serving in 6 months',
      },
      {
        company: 'Marel',
        project: 'Enterprise Data Platform',
        description: 'Led maturity assessment and defined scope, guardrails, and success criteria for global data platform. Recruited and onboarded development team.',
        metric: 'Incident resolution time cut by ~50%',
      },
    ],
  },
  {
    icon: '/images/data.svg',
    title: 'Products with Measurable Success',
    description:
      'Define what "working" looks like before building. Set metrics, run experiments, iterate based on real usage.',
    examples: [
      {
        company: 'Rabobank',
        project: 'RAG Pipeline Evaluation',
        description: 'Built evaluation framework for answer quality. Ran A/B and multivariate tests on LLM and retrieval settings until accuracy targets met.',
        metric: '~95% answer accuracy achieved',
      },
      {
        company: 'Nike EMEA',
        project: 'Data Quality Scorecard',
        description: 'Designed quality metrics visible to all stakeholders. Created feedback loops with data stewards. Embedded Collibra for ~100 KPIs.',
        metric: 'Quality scores: 60% → 85%',
      },
      {
        company: 'KPN',
        project: 'KPI Reporting Environment',
        description: 'Standardized KPIs across units. Evaluated BI tools and set self-service strategy.',
        metric: 'Reporting time reduced ~30%',
      },
    ],
  },
  {
    icon: '/images/collaboration.svg',
    title: 'Aligned Teams, Shipped Work',
    description:
      'Keep delivery moving through clear ownership, written updates, and unblocking. Product, engineering, and business stay in sync.',
    examples: [
      {
        company: 'Rabobank',
        project: 'Data Governance Operating Model',
        description: 'Defined governance, QA, and lifecycle rules adopted by security and compliance as template for future GenAI tools.',
        metric: 'Governance model adopted bank-wide',
      },
      {
        company: 'Nike EMEA',
        project: 'Analytics Platform Scale',
        description: 'Led 13-person squad. Built 90+ person power-user community. Introduced operating model clarifying ownership.',
        metric: 'Adoption +60%, ramp-up time -25%',
      },
      {
        company: 'Marel',
        project: 'Data Platform Team Onboarding',
        description: 'Recruited and onboarded development and data-management team. Clarified ownership and incident processes.',
        metric: 'Incident resolution -50%',
      },
    ],
  },
]

export default function ProfileCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-paper-warm">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-2">
            What I Bring
          </h2>
          <p className="font-body text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
            Three core strengths — tap each card to see real examples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Card Header - Always visible */}
              <button
                onClick={() => toggleCard(index)}
                className={`group relative bg-white rounded-xl p-6 lg:p-8
                           border-2 border-gold/20
                           shadow-soft hover:shadow-medium
                           transition-all duration-300 ease-out
                           hover:border-gold/40 hover:-translate-y-1
                           cursor-pointer text-left w-full
                           ${expandedIndex === index ? 'border-gold/50 shadow-medium' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon container with subtle background */}
                <div className="mb-5 inline-flex items-center justify-center
                                w-16 h-16 rounded-xl
                                bg-gradient-to-br from-gold/15 to-terracotta/15
                                border border-gold/30
                                group-hover:from-gold/25 group-hover:to-terracotta/25
                                transition-all duration-300">
                  <Image
                    src={card.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="text-ink opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-medium text-ink mb-3
                               leading-tight tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm lg:text-base text-ink-muted leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* See examples indicator - always visible for clear affordance */}
                <div className={`flex items-center gap-1 text-sm text-gold font-medium
                                transition-all duration-300
                                ${expandedIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                  <span>{expandedIndex === index ? 'Hide examples' : 'See examples'}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300
                               ${expandedIndex === index ? 'rotate-180' : 'group-hover:translate-x-1'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {expandedIndex === index ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    )}
                  </svg>
                </div>

                {/* Subtle accent line at bottom */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5
                                bg-gradient-to-r from-transparent via-gold/0 to-transparent
                                transition-all duration-500
                                ${expandedIndex === index ? 'via-gold/60' : 'group-hover:via-gold/40'}`} />
              </button>

              {/* Expanded Examples Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out
                           ${expandedIndex === index ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="bg-white rounded-xl border border-border-muted p-4 lg:p-6 shadow-soft">
                  <div className="space-y-4">
                    {card.examples.map((example, exIndex) => (
                      <div
                        key={exIndex}
                        className={`p-4 rounded-lg bg-paper-warm/50 border border-border-muted/50
                                   ${exIndex !== card.examples.length - 1 ? 'border-b border-border-muted/30' : ''}`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <span className="text-xs font-medium text-gold uppercase tracking-wide">
                              {example.company}
                            </span>
                            <h4 className="font-display text-base lg:text-lg font-medium text-ink mt-1">
                              {example.project}
                            </h4>
                          </div>
                          <span className="text-xs font-medium text-terracotta bg-terracotta/10
                                         px-2 py-1 rounded-full sm:whitespace-nowrap">
                            {example.metric}
                          </span>
                        </div>
                        <p className="text-sm text-ink-muted leading-relaxed">
                          {example.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
