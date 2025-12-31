interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-6 sm:py-8 transition-colors duration-300 ${className}`}>
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink mb-5 pb-2 border-b border-border">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
