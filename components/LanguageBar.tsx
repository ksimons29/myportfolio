import { Language } from '@/lib/types'

interface LanguageBarProps {
  language: Language
}

export default function LanguageBar({ language }: LanguageBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl" role="img" aria-label={`${language.name} flag`}>
            {language.flag}
          </span>
          <span className="font-medium text-ink">{language.name}</span>
        </div>
        <span className="text-sm text-ink-muted">{language.level}</span>
      </div>
      <div className="h-2 bg-cream rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold to-terracotta rounded-full transition-all duration-500"
          style={{ width: `${language.progress}%` }}
        />
      </div>
    </div>
  )
}
