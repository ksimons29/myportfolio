import { content } from '@/lib/content'

export default function AboutSection() {
  const { about } = content

  // Convert markdown-style bold to HTML
  const formatText = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, i) => {
        const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
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
    <div className="prose prose-lg max-w-none text-ink-soft leading-relaxed">
      {formatText(about)}
    </div>
  )
}
