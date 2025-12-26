interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 transition-colors duration-300 ${className}`}>
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-ink dark:text-[#f0f0f0] mb-8 pb-3 border-b border-border dark:border-[#3a3a3a]">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
