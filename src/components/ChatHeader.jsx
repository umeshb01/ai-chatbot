import React from 'react'
import { ChevronDown, Menu } from 'lucide-react'

/**
 * Task 2 (Responsive): ChatHeader Component
 * 
 * Responsiveness features:
 * - Mobile (< 768px): Shows a hamburger button (Menu icon) to open the mobile drawer.
 * - Desktop (>= 768px): Hamburger button is hidden (`md:hidden`), displaying only model & status.
 */
export default function ChatHeader({ onToggleSidebar = () => { } }) {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-gray-100 md:border-transparent select-none shrink-0 bg-white">
      {/* Left: Mobile Menu Toggle + Model Selector */}
      <div className="flex items-center gap-2">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={onToggleSidebar}
          type="button"
          className="p-1.5 -ml-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg md:hidden transition-colors"
          aria-label="Open sidebar navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Model Selector Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer group"
        >
          <span>ChatGPT</span>
          <ChevronDown
            className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-transform group-hover:translate-y-0.5"
            strokeWidth={2.2}
          />
        </button>
      </div>

      {/* Right: Live Status Badge */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs sm:text-sm font-medium text-gray-500">Online</span>
      </div>
    </header>
  )
}
