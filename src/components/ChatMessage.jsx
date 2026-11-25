import React from 'react'
import { Sparkles } from 'lucide-react'

/**
 * Step 1: ChatMessage Component
 * 
 * Renders a single message in the conversation thread.
 * - User messages: Right-aligned with vibrant purple bubble
 * - Assistant messages: Left-aligned with subtle gray bubble and Nova AI avatar
 */
export default function ChatMessage({ role, content }) {
  const isUser = role === 'user'

  return (
    <div className={`w-full flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in duration-200`}>
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#635bff] to-[#a855f7] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-[#635BFF] text-white rounded-br-xs shadow-sm font-normal'
            : 'bg-gray-100 text-gray-800 rounded-bl-xs border border-gray-200/60'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  )
}

