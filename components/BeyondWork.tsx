import { content } from '@/lib/content'

export default function BeyondWork() {
  const { beyondWork } = content

  const paragraphs = beyondWork.split('\n\n')

  return (
    <div className="prose prose-lg max-w-none text-ink-soft leading-relaxed">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
