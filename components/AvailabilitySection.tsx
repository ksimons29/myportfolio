const services = [
  {
    title: 'Product Management & Strategy',
    description:
      'Full-time or interim PM/PO for teams building data products, AI tools, or internal platforms. I help teams get unstuck and ship products that work.',
    tag: 'Full-time or Interim',
  },
  {
    title: 'Data & AI Product Consulting',
    description:
      'Product strategy, roadmap development, and success metrics for analytics and AI products. I bridge business needs and technical solutions.',
    tag: 'Project-based or Retainer',
  },
  {
    title: 'Discovery & Scoping',
    description:
      'Turn unclear requests into shippable first releases. Combined interviews, workflow mapping, and maturity assessments to separate product problems from capability gaps.',
    tag: '2-6 week engagements',
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
            Looking for Senior PM opportunities in Lisbon. Also available for consulting,
            interim assignments, and project-based work.
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

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-base text-ink-muted">
            Interested?{' '}
            <a
              href="mailto:koossimons91@gmail.com"
              className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
            >
              Let&apos;s discuss your needs
            </a>
            {' '}or{' '}
            <a
              href="https://calendly.com/koossimons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
            >
              schedule a call
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
