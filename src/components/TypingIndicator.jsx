import React from 'react'
import { Sparkles } from 'lucide-react'

/**
 * TypingIndicator Component
 * 
 * Displays animated pulsing dots with the Nova AI avatar
 * while the assistant is preparing its response.
 */
export default function TypingIndicator() {
  return (
    <div className="w-full flex gap-3 justify-start animate-in fade-in duration-200">
      {/* Assistant Logo Badge */}
      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#635bff] to-[#a855f7] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      {/* 3 Animated Bouncing Dots Bubble */}
      <div className="px-4 py-3 rounded-2xl rounded-bl-xs bg-gray-100 border border-gray-200/60 flex items-center gap-1.5 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
      </div>
    </div>
  )
}

