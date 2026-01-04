import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Convert markdown-style formatting to HTML
  const formatDescription = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, i) => {
        // Handle bullet points (both • and -)
        if (paragraph.includes('\n•') || paragraph.includes('\n-')) {
          const lines = paragraph.split('\n')
          const intro = lines[0]
          const bullets = lines.slice(1).filter(l => l.startsWith('•') || l.startsWith('-'))

          return (
            <div key={i} className="mb-4">
              {intro && (
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              )}
              <ul className="list-disc list-inside space-y-1 text-ink-muted">
                {bullets.map((bullet, j) => (
                  <li key={j}>{bullet.replace(/^[•\-]\s*/, '')}</li>
                ))}
              </ul>
            </div>
          )
        }

        // Regular paragraph with bold formatting
        const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
        return (
          <p
            key={i}
            className="mb-4 last:mb-0"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        )
      })
  }

  return (
    <article className="card hover:shadow-medium transition-shadow duration-300">
      {/* Header */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl font-medium text-ink">
            {project.link ? (
              <a
                href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className="text-sm text-ink-muted font-medium bg-cream px-2 py-0.5 rounded">
            {project.caption}
          </span>
        </div>
        <p className="text-terracotta-deep font-medium text-sm">
          {project.subtitle}
        </p>
      </div>

      {/* Quote if present */}
      {project.quote && (
        <blockquote className="border-l-2 border-gold pl-4 mb-4 italic text-ink-muted">
          {project.quote}
        </blockquote>
      )}

      {/* Description */}
      <div className="text-ink-soft text-sm leading-relaxed">
        {formatDescription(project.description)}
      </div>
    </article>
  )
}
