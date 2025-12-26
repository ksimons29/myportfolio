interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-8 pb-3 border-b border-border">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
