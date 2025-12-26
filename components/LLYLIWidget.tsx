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
      className="fixed left-4 bottom-4 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`
          absolute left-full ml-3 bottom-0 whitespace-nowrap
          bg-ink text-paper text-sm px-3 py-2 rounded-lg
          transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
        `}
      >
        Help with my language learning research!
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-ink" />
      </div>

      {/* Widget button */}
      <div
        className={`
          relative w-14 h-14 rounded-full overflow-hidden
          border-2 border-gold shadow-dramatic
          transition-all duration-300 ease-bounce
          ${isHovered ? 'scale-110 shadow-[0_0_20px_rgba(201,162,39,0.4)]' : ''}
        `}
      >
        <Image
          src="/images/llyli-widget.png"
          alt="LLYLI - Language Learning App"
          fill
          className="object-cover"
        />
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-20" />
    </a>
  )
}
