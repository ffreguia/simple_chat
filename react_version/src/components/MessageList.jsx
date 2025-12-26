/**
 * MessageList Component
 * Renders all chat messages with user/assistant styling
 * @param {Array} messages - Array of message objects with role, text, and timestamp
 */
function MessageList({ messages }) {
  return (
    <div className="messages" aria-live="polite">
      {messages.map((msg, idx) => (
        <div key={idx} className={`message ${msg.role}`}>
          {msg.timestamp && (
            <div className="meta">{msg.timestamp}</div>
          )}
          <div>{msg.text}</div>
        </div>
      ))}
    </div>
  )
}

export default MessageList
