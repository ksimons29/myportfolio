const experienceCategories = [
  {
    id: 'discovery-examples',
    title: 'Discovery to Release',
    subtitle: 'From ambiguous requests to shipped products',
    examples: [
      {
        company: 'Rabobank',
        project: 'GenAI Knowledge Assistant',
        outcome: 'Turned ambiguous "AI for compliance" request into scoped MVP. Shipped v1 in 3 months with 95% answer accuracy.',
        metric: '30% reduction in search time',
      },
      {
        company: 'Nike EMEA',
        project: 'Self-Service Analytics Platform',
        outcome: 'Defined 0→1 roadmap through 40+ stakeholder interviews. Separated quick wins from 12-month platform vision.',
        metric: '120+ self-serving users in 6 months',
      },
    ],
  },
  {
    id: 'data-ai-examples',
    title: 'Data & AI Products',
    subtitle: 'Building with clear success criteria',
    examples: [
      {
        company: 'Rabobank',
        project: 'RAG Pipeline for Policy Search',
        outcome: 'Built evaluation framework for answer quality. Iterated based on domain expert feedback until accuracy targets met.',
        metric: '~95% answer accuracy achieved',
      },
      {
        company: 'Nike EMEA',
        project: 'Data Quality Scorecard',
        outcome: 'Designed gamified quality metrics visible to all stakeholders. Created feedback loops with data stewards.',
        metric: 'Quality scores: 60% → 85%',
      },
    ],
  },
  {
    id: 'delivery-examples',
    title: 'Delivery & Stakeholder Leadership',
    subtitle: 'Keeping teams aligned and shipping',
    examples: [
      {
        company: 'Rabobank',
        project: 'Data Governance Operating Model',
        outcome: 'Aligned 8 business units on federated ownership model. Reduced approval bottlenecks through clear decision rights.',
        metric: 'Approval time: 4 weeks → 1 week',
      },
      {
        company: 'KPN',
        project: 'Customer Data Platform',
        outcome: 'Coordinated engineering, business, and legal stakeholders. Shipped in focused 2-week increments.',
        metric: '85% policy adoption in 6 months',
      },
    ],
  },
]

export default function ExperienceExamples() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-8 text-center">
          Experience Examples
        </h2>

        <div className="space-y-12">
          {experienceCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-8"
            >
              {/* Category Header */}
              <div className="mb-6 pb-3 border-b border-border">
                <h3 className="font-display text-xl font-medium text-ink">
                  {category.title}
                </h3>
                <p className="text-sm text-ink-muted mt-1">
                  {category.subtitle}
                </p>
              </div>

              {/* Examples Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category.examples.map((example, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-lg p-5 border border-border-muted
                               shadow-soft hover:shadow-medium transition-all duration-300
                               hover:-translate-y-1"
                  >
                    {/* Company & Project */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                        {example.company}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-medium text-ink mb-2">
                      {example.project}
                    </h4>

                    <p className="text-sm text-ink-muted leading-relaxed mb-3">
                      {example.outcome}
                    </p>

                    {/* Metric highlight */}
                    <div className="flex items-center gap-2 pt-3 border-t border-border-muted">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-ink">
                        {example.metric}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back to top */}
        <div className="mt-10 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </section>
  )
}
