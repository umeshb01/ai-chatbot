import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import WelcomeScreen from './components/WelcomeScreen'
import ChatInput from './components/ChatInput'

/**
 * Main Application Shell
 * Complete UI Implementation matching the reference design:
 * - Task 1: Sidebar
 * - Task 2: ChatHeader
 * - Task 3: WelcomeScreen
 * - Task 4: ChatInput
 */
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#ecebf7] flex items-center justify-center p-0 sm:p-4 md:p-8 font-sans antialiased">
      {/* Main Elevated Card Window */}
      <div className="w-full max-w-[1100px] h-screen sm:h-[95vh] md:h-[680px] bg-white sm:rounded-2xl md:rounded-[28px] shadow-2xl shadow-indigo-950/10 flex overflow-hidden border-0 sm:border border-white/60 relative">
        
        {/* Task 1: Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        {/* Right Main Viewport */}
        <main className="flex-1 bg-white flex flex-col h-full overflow-hidden">
          {/* Task 2: ChatHeader */}
          <ChatHeader 
            onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} 
          />

          {/* Task 3: WelcomeScreen */}
          <WelcomeScreen />

          {/* Task 4: ChatInput */}
          <ChatInput />
        </main>

      </div>
    </div>
  )
}
