import Image from 'next/image'

const cards = [
  {
    icon: '/images/discovery.svg',
    title: 'Discovery to Release',
    description:
      'Turned unclear requests into an agreed first release. Combined interviews, workflow and journey mapping, and a quick maturity check to separate a product problem from a capability gap. Defined outcomes, constraints, and tradeoffs, then translated that into scope and priorities the team could ship.',
  },
  {
    icon: '/images/data.svg',
    title: 'Data and AI Products with Clear Success Criteria',
    description:
      'Built data and AI product features from MVP to iteration. Defined success metrics and quality checks early, then used usage signals and structured feedback with domain experts to decide what to change next.',
  },
  {
    icon: '/images/collaboration.svg',
    title: 'Delivery and Stakeholder Leadership',
    description:
      'Kept delivery moving by making decisions explicit and ownership clear. Aligned product, engineering, and business stakeholders through tight written updates, prioritization, and unblocking, so work shipped in focused increments.',
  },
]

export default function ProfileCards() {
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-paper-warm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-xl p-6 lg:p-8
                         border border-border-muted
                         shadow-soft hover:shadow-medium
                         transition-all duration-300 ease-out
                         hover:border-gold/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon container with subtle background */}
              <div className="mb-5 inline-flex items-center justify-center
                              w-14 h-14 rounded-xl
                              bg-gradient-to-br from-gold/10 to-terracotta/10
                              border border-gold/20
                              group-hover:from-gold/20 group-hover:to-terracotta/20
                              transition-all duration-300">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="text-ink opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl font-medium text-ink mb-3
                             leading-tight tracking-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm lg:text-base text-ink-muted leading-relaxed">
                {card.description}
              </p>

              {/* Subtle accent line at bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5
                              bg-gradient-to-r from-transparent via-gold/0 to-transparent
                              group-hover:via-gold/40
                              transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
