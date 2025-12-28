'use client'

// Custom SVG Icons matching the portfolio's aesthetic
const SaxophoneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Saxophone body - elegant curved shape */}
    <path
      d="M48 8c-2 0-4 1-5 3l-3 6c-1 2-1 4 0 6l2 4-8 16c-2 4-6 8-10 10l-4 2c-3 1.5-5 4-5 7v2h24v-2c0-2-1-4-3-5l-2-1 6-12 4 2c2 1 4 0 5-2l8-16c1-2 1-4 0-6l-2-4c-1-2-2-4-4-5l-3-1z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Bell of saxophone */}
    <ellipse cx="22" cy="58" rx="10" ry="4" fill="currentColor" opacity="0.7" />
    {/* Keys */}
    <circle cx="38" cy="24" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="34" cy="32" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.5" />
    {/* Mouthpiece */}
    <path
      d="M50 6l4-2c1-.5 2 0 2 1v4c0 1-1 2-2 1.5l-4-2v-2.5z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
)

const ToyStoreIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Store building */}
    <rect x="8" y="24" width="48" height="32" rx="2" fill="currentColor" opacity="0.15" />
    {/* Roof/awning */}
    <path
      d="M4 24l28-16 28 16H4z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Awning stripes */}
    <path d="M8 24h6l-3 6-3-6zM20 24h6l-3 6-3-6zM32 24h6l-3 6-3-6zM44 24h6l-3 6-3-6z" fill="currentColor" opacity="0.6" />
    {/* Door */}
    <rect x="26" y="40" width="12" height="16" rx="1" fill="currentColor" opacity="0.4" />
    {/* Window left */}
    <rect x="12" y="34" width="10" height="10" rx="1" fill="currentColor" opacity="0.3" />
    {/* Window right */}
    <rect x="42" y="34" width="10" height="10" rx="1" fill="currentColor" opacity="0.3" />
    {/* Teddy bear silhouette in window */}
    <circle cx="17" cy="38" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="17" cy="35" r="2" fill="currentColor" opacity="0.5" />
    {/* Star decoration */}
    <path
      d="M47 36l1.5 1.5L47 39l-1.5-1.5L47 36z"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
)

const HikingIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L4 8v2l8-4 8 4V8l-8-6zM4 12l8 4 8-4M4 16l8 4 8-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.6" />
  </svg>
)

const MusicNoteIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18V5l12-2v13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="18" cy="16" r="3" fill="currentColor" opacity="0.8" />
  </svg>
)

const hobbies = [
  {
    icon: SaxophoneIcon,
    title: 'Big Band Saxophonist',
    location: 'Lisbon, Portugal',
    description:
      'Board member and saxophonist in a Lisbon-based big band—handling everything from concert logistics to community building.',
    accent: 'gold',
  },
  {
    icon: ToyStoreIcon,
    title: 'Family Toy Shop',
    location: 'Netherlands',
    description:
      'Helping my family\'s toy shop back home with digital marketing and inventory systems.',
    accent: 'terracotta',
  },
]

const interests = [
  { icon: HikingIcon, text: 'Trail hiking & Camino de Santiago' },
  { icon: MusicNoteIcon, text: 'Live music & jazz' },
]

export default function BeyondWork() {
  return (
    <div className="space-y-8">
      {/* Main hobby cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <article
            key={index}
            className="group relative bg-white rounded-xl p-6
                       border border-border-muted shadow-soft
                       hover:shadow-medium hover:-translate-y-1
                       transition-all duration-300"
          >
            {/* Icon container */}
            <div
              className={`inline-flex items-center justify-center
                          w-16 h-16 rounded-2xl mb-4
                          ${hobby.accent === 'gold'
                            ? 'bg-gradient-to-br from-gold/20 to-gold/5 text-gold'
                            : 'bg-gradient-to-br from-terracotta/20 to-terracotta/5 text-terracotta'
                          }
                          group-hover:scale-110 transition-transform duration-300`}
            >
              <hobby.icon className="w-10 h-10" />
            </div>

            {/* Content */}
            <h3 className="font-display text-xl font-medium text-ink mb-1">
              {hobby.title}
            </h3>
            <p className="text-sm text-ink-muted mb-3 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {hobby.location}
            </p>
            <p className="font-body text-base text-ink-soft leading-relaxed">
              {hobby.description}
            </p>

            {/* Decorative corner accent */}
            <div
              className={`absolute top-0 right-0 w-20 h-20 rounded-tr-xl rounded-bl-[100%]
                          ${hobby.accent === 'gold' ? 'bg-gold/5' : 'bg-terracotta/5'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </article>
        ))}
      </div>

      {/* Additional interests */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <span className="text-sm text-ink-muted">Also into:</span>
        {interests.map((interest, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-4 py-2
                       bg-paper-warm rounded-full border border-border-muted
                       text-sm text-ink-soft
                       hover:border-gold/30 hover:bg-gold/5
                       transition-all duration-200"
          >
            <interest.icon className="w-4 h-4 text-gold" />
            {interest.text}
          </span>
        ))}
      </div>

      {/* Camino mention */}
      <p className="text-center text-sm text-ink-muted italic">
        Recently walked part of the Camino de Santiago (Portuguese route) before settling in Lisbon.
      </p>
    </div>
  )
}
