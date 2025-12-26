import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'

const STORAGE_KEY = 'light_chat_state_v2'

/**
 * Main App Component
 * Manages global state for messages, files, and chat settings
 * Handles localStorage persistence for chat history
 */
function App() {
  const [messages, setMessages] = useState([])
  const [files, setFiles] = useState([])
  const [selectedAssistant, setSelectedAssistant] = useState('default')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Load state from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed.messages)) setMessages(parsed.messages)
        if (Array.isArray(parsed.files)) setFiles(parsed.files)
      } catch (e) {
        console.error('Failed to load state', e)
      }
    } else {
      // Initialize with welcome message
      setMessages([{ role: 'assistant', text: 'Hello! Ask me anything.', timestamp: formatDate() }])
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, files }))
  }, [messages, files])

  function formatDate() {
    return new Date().toLocaleTimeString()
  }

  /**
   * Handles sending a new message
   * Adds user message and simulates assistant response
   */
  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = { role: 'user', text: text.trim(), timestamp: formatDate() }
    setMessages(prev => [...prev, userMessage])

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        text: `Assistant (${selectedAssistant}) received: "${text}"`,
        timestamp: formatDate()
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 500)
  }

  /**
   * Handles file upload
   * Adds file to the files list
   */
  const handleUploadFile = (file) => {
    const newFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type
    }
    setFiles(prev => [...prev, newFile])
  }

  /**
   * Handles file deletion
   * Removes file from the files list
   */
  const handleDeleteFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  /**
   * Clears all messages and files
   * Shows confirmation dialog before clearing
   */
  const handleClearAll = () => {
    if (confirm('Clear all messages and files?')) {
      setMessages([])
      setFiles([])
    }
  }

  return (
    <div className="container dashboard">
      {sidebarOpen && (
        <Sidebar
          files={files}
          onUploadFile={handleUploadFile}
          onDeleteFile={handleDeleteFile}
          onClearAll={handleClearAll}
        />
      )}
      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        selectedAssistant={selectedAssistant}
        onAssistantChange={setSelectedAssistant}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  )
}

export default App
