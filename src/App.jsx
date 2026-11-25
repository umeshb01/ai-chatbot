import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import WelcomeScreen from './components/WelcomeScreen'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'
import TypingIndicator from './components/TypingIndicator'

/**
 * Main Application Component
 * 
 * Manages:
 * - Message conversation history (`messages`)
 * - AI generation state (`isTyping`)
 * - Auto-scroll to bottom of conversation
 * - Responsive mobile drawer toggle (`isSidebarOpen`)
 */
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom whenever messages list or typing state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Handles sending user message and triggering simulated AI reply
  const handleSendMessage = (text) => {
    // 1. Append user message immediately
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // 2. Simulate AI "thinking" and responding after 1.2 seconds
    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Hello! I received your question about: "${text}".\n\nI am Nova AI, your intelligent assistant. In the next steps, we will connect this to a live AI model (like Gemini) so you can get real-time answers!`
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#ecebf7] flex items-center justify-center p-0 sm:p-4 md:p-8 font-sans antialiased">
      {/* Main Elevated Card Window */}
      <div className="w-full max-w-[1100px] h-screen sm:h-[95vh] md:h-[680px] bg-white sm:rounded-2xl md:rounded-[28px] shadow-2xl shadow-indigo-950/10 flex overflow-hidden border-0 sm:border border-white/60 relative">

        {/* Left Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Right Main Viewport */}
        <main className="flex-1 bg-white flex flex-col h-full overflow-hidden">
          {/* Header */}
          <ChatHeader
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          />

          {/* Central Area: Welcome Screen OR Conversation Thread */}
          <div className="flex-1 overflow-y-auto flex flex-col">
            {messages.length === 0 ? (
              <WelcomeScreen onSendMessage={handleSendMessage} />
            ) : (
              <div className="flex-1 p-4 sm:p-6 space-y-4 max-w-3xl w-full mx-auto">
                {messages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    role={msg.role}
                    content={msg.content}
                  />
                ))}

                {/* Show animated typing dots while waiting for AI */}
                {isTyping && <TypingIndicator />}

                {/* Invisible anchor element to scroll down to */}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Bottom Chat Input Bar */}
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isTyping}
          />
        </main>

      </div>
    </div>
  )
}
