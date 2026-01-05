'use client'

// Realistic saxophone icon
const SaxophoneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Mouthpiece */}
    <path
      d="M19 2c.5 0 1 .5 1 1v1.5c0 .3-.2.5-.5.5h-1l-.5 1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Neck/crook */}
    <path
      d="M18 6l-2 3c-.5.8-.5 1.5 0 2l1 1.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Body tube */}
    <path
      d="M17 12.5l-1.5 2.5-2 3c-1 1.5-2.5 2.5-4 3l-2 .5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Bell */}
    <ellipse
      cx="6"
      cy="21"
      rx="3.5"
      ry="1.5"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path
      d="M7.5 18.5c1.5.5 2 1.5 2 2.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Keys */}
    <circle cx="16" cy="10" r="0.8" fill="currentColor" />
    <circle cx="15" cy="13" r="0.8" fill="currentColor" />
    <circle cx="13" cy="15.5" r="0.8" fill="currentColor" />
    <circle cx="11" cy="17.5" r="0.7" fill="currentColor" />
    {/* Side keys */}
    <path d="M17.5 9l1 .5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M16.5 11.5l1 .3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
)

// Toy store / teddy bear icon
const ToyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Teddy bear head */}
    <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    {/* Ears */}
    <circle cx="7" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
    <circle cx="17" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
    {/* Snout */}
    <ellipse cx="12" cy="12" rx="2.5" ry="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    {/* Nose */}
    <ellipse cx="12" cy="11" rx="1" ry="0.7" fill="currentColor" />
    {/* Eyes */}
    <circle cx="9.5" cy="9" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="9" r="0.8" fill="currentColor" />
    {/* Body hint */}
    <path d="M8 16c0 2 1.8 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="currentColor" fillOpacity="0.1" />
  </svg>
)

// Hiking/mountain trail icon
const HikingIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Mountains */}
    <path
      d="M2 20l6-10 4 5 6-9 4 6v8H2z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
    {/* Snow cap */}
    <path
      d="M18 6l-2 3h4l-2-3z"
      fill="currentColor"
      fillOpacity="0.3"
    />
    {/* Trail/path */}
    <path
      d="M4 20c2-1 4-3 6-3s3 1.5 5 1.5 4-1.5 5-2.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="2 1.5"
    />
  </svg>
)

// Music note icon for live music
const MusicIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18V6l10-2v12"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
  </svg>
)

// Inline icon wrapper
const InlineIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 mx-1 text-gold align-middle">
    {children}
  </span>
)

export default function BeyondWork() {
  return (
    <div className="prose prose-lg max-w-none text-ink-soft leading-relaxed">
      <p className="mb-5">
        Played saxophone and coordinated concerts as board member for Jazzalike Big Band Utrecht (2021–2025).
        Helped my family&apos;s toy shop
        <InlineIcon><ToyIcon className="w-5 h-5" /></InlineIcon>
        in the Netherlands with digital marketing, making it the region&apos;s top searchable toy store online.
      </p>

      <p className="mb-5">
        Completed the Caminho Português
        <InlineIcon><HikingIcon className="w-5 h-5" /></InlineIcon>
        before settling in Lisbon. Enjoy live music
        <InlineIcon><MusicIcon className="w-5 h-5" /></InlineIcon>
        , hiking, and conversations about culture and world affairs.
      </p>
    </div>
  )
}
