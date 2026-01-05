'use client'

import { useState } from 'react'
import Image from 'next/image'
import { content } from '@/lib/content'
import type { CapabilityCard } from '@/lib/types'

export default function ProfileCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const cards = content.capabilityCards

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-paper-warm">
      <div className="max-w-6xl mx-auto">
        {/* Section header - STICKY with frosted glass */}
        <div className="sticky top-0 z-10 bg-paper-warm/95 backdrop-blur-sm
                        py-4 mb-8 sm:mb-10 -mt-4
                        border-b border-border/30
                        transition-all duration-300">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-ink mb-2">
              What I Bring
            </h2>
            <p className="font-body text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Three core strengths — tap each card to see real examples
            </p>
            {/* Scroll indicator - mobile only */}
            <div className="mt-3 flex justify-center md:hidden">
              <svg className="w-4 h-4 text-gold/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Card Header - Always visible */}
              <button
                onClick={() => toggleCard(index)}
                className={`group relative bg-white rounded-xl p-6 lg:p-8
                           border-2 border-gold/20
                           shadow-soft hover:shadow-medium
                           transition-all duration-300 ease-out
                           hover:border-gold/40 hover:-translate-y-1
                           cursor-pointer text-left w-full
                           ${expandedIndex === index ? 'border-gold/50 shadow-medium' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon container with subtle background */}
                <div className="mb-5 inline-flex items-center justify-center
                                w-16 h-16 rounded-xl
                                bg-gradient-to-br from-gold/15 to-terracotta/15
                                border border-gold/30
                                group-hover:from-gold/25 group-hover:to-terracotta/25
                                transition-all duration-300">
                  <Image
                    src={card.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="text-ink opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-medium text-ink mb-3
                               leading-tight tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm lg:text-base text-ink-muted leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* See examples indicator - always visible for clear affordance */}
                <div className={`flex items-center gap-1 text-sm text-gold font-medium
                                transition-all duration-300
                                ${expandedIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                  <span>{expandedIndex === index ? 'Hide examples' : 'See examples'}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300
                               ${expandedIndex === index ? 'rotate-180' : 'group-hover:translate-x-1'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {expandedIndex === index ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    )}
                  </svg>
                </div>

                {/* Subtle accent line at bottom */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5
                                bg-gradient-to-r from-transparent via-gold/0 to-transparent
                                transition-all duration-500
                                ${expandedIndex === index ? 'via-gold/60' : 'group-hover:via-gold/40'}`} />
              </button>

              {/* Expanded Examples Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out
                           ${expandedIndex === index ? 'max-h-[1200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="bg-white rounded-xl border border-border-muted p-4 lg:p-6 shadow-soft">
                  <div className="space-y-4">
                    {card.examples.map((example, exIndex) => (
                      <div
                        key={exIndex}
                        className={`p-4 rounded-lg bg-paper-warm/50 border border-border-muted/50
                                   ${exIndex !== card.examples.length - 1 ? 'border-b border-border-muted/30' : ''}`}
                      >
                        {/* Header: Company + Metric badge */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                          <span className="text-xs font-medium text-gold uppercase tracking-wide">
                            {example.company}
                          </span>
                          <span className="text-xs font-medium text-terracotta bg-terracotta/10
                                         px-2 py-1 rounded-full">
                            {example.metric}
                          </span>
                        </div>
                        {/* Project title - full width */}
                        <h4 className="font-display text-base lg:text-lg font-medium text-ink mb-2">
                          {example.project}
                        </h4>
                        <p className="text-sm text-ink-muted leading-relaxed">
                          {example.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
