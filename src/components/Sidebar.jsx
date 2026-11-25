import React from 'react'
import { Plus, MessageCircle, Sun, Settings, X } from 'lucide-react'

/**
 * Task 1 (Responsive): Sidebar Component
 * 
 * Responsiveness features:
 * - Desktop (>= 768px): Fixed width, static panel docked to the left.
 * - Mobile (< 768px): Slide-over drawer with backdrop overlay and close (X) button.
 */
export default function Sidebar({ isOpen = false, onClose = () => {} }) {
  const recentChats = [
    'Explain React',
    'Healthy Eating Tips',
    'Travel Ideas'
  ]

  return (
    <>
      {/* 1. Mobile Backdrop Overlay (only visible on mobile when sidebar is open) */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* 2. Sidebar Container */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#111226] text-slate-200 flex flex-col justify-between p-5 select-none 
          transition-transform duration-300 ease-in-out shrink-0
          md:static md:translate-x-0
          ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Top Section: Logo & Brand + Mobile Close Button */}
        <div className="flex flex-col gap-6">
          
          {/* Header Row: Logo + Mobile Dismiss Button */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              {/* Nova AI Purple Swirl Emblem */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635bff] to-[#a855f7] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <svg 
                  className="w-5 h-5 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Nova AI</span>
            </div>

            {/* Mobile close (X) button: visible only on small screens */}
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 md:hidden transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* New Chat Button */}
          <button 
            type="button"
            className="w-full flex items-center gap-2.5 px-4 py-2.5 bg-[#20213d] hover:bg-[#28294d] active:scale-[0.99] text-white rounded-xl text-sm font-medium transition-all border border-white/5 shadow-inner"
          >
            <Plus className="w-4 h-4 text-slate-200" strokeWidth={2.5} />
            <span>New Chat</span>
          </button>

          {/* Recent Chats List */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-slate-400 tracking-wide px-1">
              Recent Chats
            </span>

            <nav className="flex flex-col gap-1" aria-label="Recent chats">
              {recentChats.map((chatTitle) => (
                <button
                  key={chatTitle}
                  type="button"
                  className="w-full flex items-center gap-3 px-2 py-2 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left group"
                >
                  <MessageCircle 
                    className="w-4 h-4 text-slate-400 group-hover:text-slate-200 shrink-0" 
                    strokeWidth={1.75} 
                  />
                  <span className="truncate">{chatTitle}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section: Theme Switch, Settings, User Profile */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
          
          {/* Light/Dark Theme Switch Pill */}
          <div className="w-14 h-7 bg-[#20213d] rounded-full p-1 flex items-center justify-between cursor-pointer border border-white/5">
            <div className="w-5 h-5 flex items-center justify-center text-amber-300">
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
          </div>

          {/* Settings Link */}
          <button 
            type="button"
            className="flex items-center gap-3 px-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4 text-slate-400" strokeWidth={1.8} />
            <span>Settings</span>
          </button>

          {/* User Account Profile */}
          <div className="flex items-center gap-3 px-1 pt-1">
            <div className="w-7 h-7 rounded-full bg-[#635bff] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              S
            </div>
            <span className="text-sm font-medium text-slate-200">Student</span>
          </div>
        </div>
      </aside>
    </>
  )
}
