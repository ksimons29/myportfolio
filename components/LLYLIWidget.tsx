'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LLYLIWidget() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://github.com/ksimons29"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip - positioned to the left of widget */}
      <div
        className={`
          absolute right-full mr-4 bottom-1/4 whitespace-nowrap
          bg-ink text-paper text-base px-4 py-3 rounded-xl
          transition-all duration-300 ease-out shadow-dramatic
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
        `}
      >
        <span className="font-medium">Help with my language learning research!</span>
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-ink" />
      </div>

      {/* Widget button - 3x larger */}
      <div
        className={`
          relative w-24 h-24 rounded-full overflow-hidden
          border-4 border-gold shadow-dramatic
          transition-all duration-300 ease-bounce
          ${isHovered ? 'scale-110 shadow-[0_0_30px_rgba(201,162,39,0.5)]' : ''}
        `}
      >
        <Image
          src="/images/llyli-widget.png"
          alt="LLYLI - Language Learning App"
          fill
          className="object-cover"
        />
      </div>

      {/* Pulse animation - larger */}
      <div className="absolute inset-0 rounded-full border-3 border-gold animate-ping opacity-25" />
    </a>
  )
}
