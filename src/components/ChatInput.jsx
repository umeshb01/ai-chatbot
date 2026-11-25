import React, { useState } from 'react'
import { Plus, Globe, MoreHorizontal, ArrowUp } from 'lucide-react'

/**
 * ChatInput Component
 * 
 * - Accepts `onSendMessage` callback.
 * - Accepts `disabled` boolean to prevent duplicate sends during AI generation.
 */
export default function ChatInput({ onSendMessage = () => {}, disabled = false }) {
  const [inputValue, setInputValue] = useState('')

  // Submit message if not empty and not generating
  const handleSend = () => {
    const trimmed = inputValue.trim()
    if (!trimmed || disabled) return

    onSendMessage(trimmed)
    setInputValue('')
  }

  // Allow sending with Enter key (without Shift)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const canSend = inputValue.trim().length > 0 && !disabled

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 pt-1 select-none shrink-0 bg-white">
      {/* Elevated Outer Input Card */}
      <div className={`w-full bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm transition-all ${
        disabled 
          ? 'opacity-70 bg-gray-50/50' 
          : 'focus-within:border-indigo-300 focus-within:shadow-md focus-within:shadow-indigo-500/5'
      }`}>
        
        {/* 1. Input Field */}
        <input
          type="text"
          value={inputValue}
          disabled={disabled}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? "Nova AI is thinking..." : "Message Nova AI..."}
          className="w-full bg-transparent text-sm sm:text-base text-gray-800 placeholder:text-gray-400 outline-none px-1 py-1 disabled:cursor-not-allowed"
        />

        {/* 2. Bottom Tool & Action Row */}
        <div className="flex items-center justify-between mt-3 pt-1">
          {/* Left Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Plus / Add Attachment Button */}
            <button
              type="button"
              disabled={disabled}
              className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:scale-95 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="Add attachment"
              aria-label="Add attachment"
            >
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>

            {/* Web Search Tool Pill */}
            <button
              type="button"
              disabled={disabled}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:scale-95 text-xs font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="Search the web"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500" strokeWidth={2} />
              <span>Search</span>
            </button>

            {/* More Options (...) Button */}
            <button
              type="button"
              disabled={disabled}
              className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:scale-95 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="More options"
              aria-label="More options"
            >
              <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>
          </div>

          {/* Right: Circular Purple Send Button */}
          <button
            onClick={handleSend}
            type="button"
            disabled={!canSend}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${
              canSend
                ? 'bg-[#635BFF] hover:bg-[#5349EE] active:scale-95 text-white shadow-md shadow-indigo-500/20 cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            title="Send message"
            aria-label="Send message"
          >
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  )
}
