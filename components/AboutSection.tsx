import { content } from '@/lib/content'

export default function AboutSection() {
  const { about } = content

  // Convert markdown-style bold to HTML
  const formatText = (text: string, mobileOnly = false) => {
    const paragraphs = text.split('\n\n')
    const displayParagraphs = mobileOnly ? [paragraphs[0]] : paragraphs

    return displayParagraphs.map((paragraph, i) => {
      const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return (
        <p
          key={i}
          className="mb-2 sm:mb-4 last:mb-0 text-sm sm:text-base leading-snug sm:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      )
    })
  }

  return (
    <>
      {/* Mobile: First paragraph only */}
      <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed block sm:hidden">
        {formatText(about, true)}
      </div>
      {/* Desktop: Full content */}
      <div className="prose prose-sm sm:prose-lg max-w-none text-ink-soft leading-relaxed hidden sm:block">
        {formatText(about, false)}
      </div>
    </>
  )
}
