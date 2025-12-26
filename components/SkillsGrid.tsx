import { content } from '@/lib/content'

export default function SkillsGrid() {
  const { skills } = content

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((category) => (
        <div key={category.name} className="card">
          <h3 className="font-display text-lg font-medium text-ink mb-4 pb-2 border-b border-border-muted">
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag hover:bg-gold hover:text-ink transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
