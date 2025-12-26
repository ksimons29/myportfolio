import { Experience } from '@/lib/types'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  // Convert markdown-style formatting to HTML
  const formatDescription = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, i) => {
        const formatted = paragraph
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
          .replace(/\n/g, '<br />')

        return (
          <p
            key={i}
            className="mb-3 last:mb-0"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        )
      })
  }

  return (
    <article className="relative pl-6 pb-8 last:pb-0 border-l-2 border-border hover:border-gold transition-colors">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-paper dark:bg-[#1a1a1a] border-2 border-gold" />

      {/* Header */}
      <div className="mb-3">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl font-medium text-ink">
            {experience.link ? (
              <a
                href={experience.link.startsWith('http') ? experience.link : `https://${experience.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <span className="text-sm text-ink-muted font-medium bg-cream px-2 py-0.5 rounded">
            {experience.period}
          </span>
        </div>
        <p className="text-terracotta-deep font-medium">
          {experience.role}
        </p>
      </div>

      {/* Description */}
      <div className="text-ink-soft text-sm leading-relaxed">
        {formatDescription(experience.description)}
      </div>
    </article>
  )
}
