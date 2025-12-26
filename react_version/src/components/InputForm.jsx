import { useState } from 'react'

/**
 * InputForm Component
 * Handles message input and submission with assistant selection
 * @param {Function} onSendMessage - Callback to send message with text
 * @param {string} selectedAssistant - Currently selected assistant
 * @param {Function} onAssistantChange - Callback to change selected assistant
 */
function InputForm({ onSendMessage, selectedAssistant, onAssistantChange }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSendMessage(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything — press Enter to send"
        aria-label="Message"
        autoComplete="off"
      />

      <select
        className="assistant-select"
        value={selectedAssistant}
        onChange={(e) => onAssistantChange(e.target.value)}
        aria-label="Assistant"
      >
        <option value="default">Default Assistant</option>
        <option value="helpful">Helpful Assistant</option>
      </select>

      <button type="submit" className="send">
        Send
      </button>
    </form>
  )
}

export default InputForm
