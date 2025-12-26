import { Education } from '@/lib/types'

interface EducationCardProps {
  education: Education
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="card mb-4 last:mb-0">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="font-display text-lg font-medium text-ink">
            {education.institution}
          </h3>
          <p className="text-terracotta-deep font-medium text-sm">
            {education.degree}
          </p>
        </div>
        <span className="text-sm text-ink-muted font-medium bg-cream px-2 py-0.5 rounded">
          {education.period}
        </span>
      </div>
      <p className="text-ink-soft text-sm leading-relaxed">
        {education.description}
      </p>
    </article>
  )
}
