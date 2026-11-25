import React, { useState } from 'react'
import { Plus, Globe, MoreHorizontal, ArrowUp } from 'lucide-react'

/**
 * Task 4: ChatInput Component
 * 
 * Features matching the reference design:
 * - Rounded elevated container with subtle border and soft elevation
 * - Input text field with "Message Nova AI..." placeholder
 * - Bottom action tool row:
 *   - "+" attachment button
 *   - "Search" web/browse pill button with globe icon
 *   - "..." more options button
 *   - Circular purple/violet Send button with up arrow (ArrowUp)
 * - Fully responsive: comfortable touch targets on mobile and spacious layout on desktop
 */
export default function ChatInput() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 pt-1 select-none shrink-0 bg-white">
      {/* Elevated Outer Input Card */}
      <div className="w-full bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm focus-within:border-indigo-300 focus-within:shadow-md focus-within:shadow-indigo-500/5 transition-all">
        
        {/* 1. Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Message Nova AI..."
          className="w-full bg-transparent text-sm sm:text-base text-gray-800 placeholder:text-gray-400 outline-none px-1 py-1"
        />

        {/* 2. Bottom Tool & Action Row */}
        <div className="flex items-center justify-between mt-3 pt-1">
          {/* Left Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Plus / Add Attachment Button */}
            <button
              type="button"
              className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:scale-95 transition-colors cursor-pointer"
              title="Add attachment"
              aria-label="Add attachment"
            >
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>

            {/* Web Search Tool Pill */}
            <button
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:scale-95 text-xs font-medium transition-colors cursor-pointer"
              title="Search the web"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500" strokeWidth={2} />
              <span>Search</span>
            </button>

            {/* More Options (...) Button */}
            <button
              type="button"
              className="p-1.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:scale-95 transition-colors cursor-pointer"
              title="More options"
              aria-label="More options"
            >
              <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </button>
          </div>

          {/* Right: Circular Purple Send Button */}
          <button
            type="button"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#635BFF] hover:bg-[#5349EE] active:scale-95 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 transition-all cursor-pointer shrink-0"
            title="Send message"
            aria-label="Send message"
          >
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  )
}

