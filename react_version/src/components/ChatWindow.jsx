import { useRef, useEffect } from 'react'
import MessageList from './MessageList'
import InputForm from './InputForm'

/**
 * ChatWindow Component
 * Main chat interface with message display and input controls
 * @param {Array} messages - Array of message objects
 * @param {Function} onSendMessage - Callback to send a message
 * @param {string} selectedAssistant - Currently selected assistant
 * @param {Function} onAssistantChange - Callback to change assistant
 * @param {Function} onToggleSidebar - Callback to toggle sidebar visibility
 */
function ChatWindow({
  messages,
  onSendMessage,
  selectedAssistant,
  onAssistantChange,
  onToggleSidebar
}) {
  const messagesEndRef = useRef(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <section className="main">
      <div className="main-top">
        <div className="chat-title">Chat</div>
        <div className="chat-actions">
          <button onClick={onToggleSidebar} className="small ghost">
            Toggle
          </button>
        </div>
      </div>

      <MessageList messages={messages} />
      <div ref={messagesEndRef} />

      <InputForm
        onSendMessage={onSendMessage}
        selectedAssistant={selectedAssistant}
        onAssistantChange={onAssistantChange}
      />

      <footer className="footer">
        <small className="muted">
          Light Chat — React version inspired by Chatbot UI
        </small>
      </footer>
    </section>
  )
}

export default ChatWindow
