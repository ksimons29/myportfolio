const services = [
  {
    title: 'Full-time or Interim PM',
    description: 'Data products, AI tools, internal platforms',
    tag: 'Full-time or Interim',
  },
  {
    title: 'Project-based Consulting',
    description: 'Product strategy, roadmaps, success metrics',
    tag: 'Project-based',
  },
  {
    title: 'Discovery Sprints',
    description: 'Turn unclear requests into shippable releases (2–6 weeks)',
    tag: '2-6 weeks',
  },
]

export default function AvailabilitySection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-cream/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-3">
            Open to Product Roles & Consulting
          </h2>
          <p className="font-body text-base sm:text-lg text-ink-muted max-w-2xl mx-auto">
            Looking for Senior PM roles in Lisbon. Also available for consulting and interim work.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="relative bg-white rounded-lg p-5
                         border-l-4 border-l-gold border border-border-muted
                         shadow-soft hover:shadow-medium
                         transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-block text-xs font-medium text-gold bg-gold/10
                               px-2 py-1 rounded-full mb-3">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="font-display text-lg font-medium text-ink mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Contact Icon */}
        <div className="flex justify-center">
          <a
            href="mailto:koossimons91@gmail.com"
            className="text-ink-muted hover:text-gold transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
