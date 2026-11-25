import React from 'react'
import { Lightbulb, PenLine, Image, Sparkles } from 'lucide-react'

/**
 * Task 3: WelcomeScreen Component
 * 
 * Features matching the reference design:
 * - Friendly waving robot mascot illustration with motion streaks and soft purple glow
 * - Main greeting headline: "How can I help you today?"
 * - Friendly prompt subtitle: "Ask anything — I'm here to help!"
 * - 4 prompt suggestion chips:
 *   1. Explain a topic (warm amber tint)
 *   2. Write something (soft purple tint)
 *   3. Give ideas (soft blue tint)
 *   4. Summarize (golden sparkles tint)
 * - Fully responsive: wraps smoothly on tablets and mobile screens
 */
export default function WelcomeScreen() {
  const suggestions = [
    {
      id: 'explain',
      icon: Lightbulb,
      iconColor: 'text-amber-500',
      label: 'Explain a topic',
      bgClass: 'bg-[#FFF9EA] hover:bg-[#FFF3D6] border-amber-200/50 text-amber-950',
    },
    {
      id: 'write',
      icon: PenLine,
      iconColor: 'text-purple-500',
      label: 'Write something',
      bgClass: 'bg-[#F6F2FF] hover:bg-[#EFE7FE] border-purple-200/50 text-purple-950',
    },
    {
      id: 'ideas',
      icon: Image,
      iconColor: 'text-indigo-500',
      label: 'Give ideas',
      bgClass: 'bg-[#EEF4FF] hover:bg-[#E0ECFF] border-indigo-200/50 text-indigo-950',
    },
    {
      id: 'summarize',
      icon: Sparkles,
      iconColor: 'text-amber-500',
      label: 'Summarize',
      bgClass: 'bg-[#FFF6EC] hover:bg-[#FEEDD9] border-amber-200/50 text-amber-950',
    },
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 text-center select-none overflow-y-auto">
      {/* 1. Waving Robot Character Mascot */}
      <div className="relative mb-5 flex items-center justify-center">
        <svg 
          viewBox="0 0 200 160" 
          className="w-36 h-28 sm:w-44 sm:h-36 drop-shadow-sm transition-transform hover:scale-105 duration-300"
          aria-hidden="true"
        >
          {/* Soft Lavender Background Halo Blob */}
          <ellipse cx="100" cy="98" rx="76" ry="48" fill="#ECE9FD" />

          {/* Left Motion Accent Streaks */}
          <path d="M48 48 L40 40" stroke="#635BFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 58 L33 57" stroke="#635BFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M47 68 L39 71" stroke="#635BFF" strokeWidth="3" strokeLinecap="round" />

          {/* Robot Antenna */}
          <rect x="98.5" y="24" width="3.5" height="15" rx="1.75" fill="#2563EB" />
          <circle cx="100.2" cy="22" r="5" fill="#2563EB" />

          {/* Robot Body */}
          <path 
            d="M74 100 Q100 96 126 100 L132 134 Q100 142 68 134 Z" 
            fill="#FFFFFF" 
            stroke="#E0E7FF" 
            strokeWidth="2.5" 
          />
          {/* Body Collar Accent */}
          <path 
            d="M84 102 Q100 110 116 102" 
            fill="none" 
            stroke="#93C5FD" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />

          {/* Head Outer Casing */}
          <rect 
            x="60" 
            y="37" 
            width="80" 
            height="58" 
            rx="26" 
            fill="#FFFFFF" 
            stroke="#E0E7FF" 
            strokeWidth="2.5" 
          />

          {/* Dark Navy Visor Screen */}
          <rect 
            x="68" 
            y="44" 
            width="64" 
            height="44" 
            rx="18" 
            fill="#111B47" 
          />

          {/* Glowing Smiling Eyes (^ ^) */}
          <path 
            d="M79 66 Q85 58 91 66" 
            fill="none" 
            stroke="#38BDF8" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
          />
          <path 
            d="M109 66 Q115 58 121 66" 
            fill="none" 
            stroke="#38BDF8" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
          />

          {/* Waving Arm (Right) */}
          <path 
            d="M124 94 C136 88 148 74 154 60" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="11" 
            strokeLinecap="round" 
          />
          {/* Blue Waving Hand/Glove */}
          <circle cx="155" cy="57" r="8" fill="#1D4ED8" />
          <circle cx="160" cy="51" r="3" fill="#1D4ED8" />
          <circle cx="155" cy="48" r="3" fill="#1D4ED8" />
          <circle cx="150" cy="50" r="3" fill="#1D4ED8" />
        </svg>
      </div>

      {/* 2. Headline & Subtitle */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
        How can I help you today?
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 font-normal mb-8 max-w-md">
        Ask anything — I'm here to help!
      </p>

      {/* 3. Suggestion Action Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl w-full">
        {suggestions.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              type="button"
              className={`
                flex items-center gap-2 px-4 py-2.5 sm:px-4.5 sm:py-2.5 
                rounded-2xl border text-xs sm:text-sm font-medium
                transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98]
                ${item.bgClass}
              `}
            >
              <Icon className={`w-4 h-4 ${item.iconColor} shrink-0`} strokeWidth={2.2} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

