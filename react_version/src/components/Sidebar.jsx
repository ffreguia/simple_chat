import { useState, useRef } from 'react'
import FilesList from './FilesList'
import '../styles/Sidebar.css'

/**
 * Sidebar Component
 * Displays file management and assistant selection
 * @param {Array} files - List of uploaded files
 * @param {Function} onUploadFile - Callback when file is uploaded
 * @param {Function} onDeleteFile - Callback when file is deleted
 * @param {Function} onClearAll - Callback to clear all data
 */
function Sidebar({ files, onUploadFile, onDeleteFile, onClearAll }) {
  const [activeTab, setActiveTab] = useState('files')
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onUploadFile(file)
      e.target.value = '' // Reset input
    }
  }

  return (
    <aside className="sidebar">
      <div className="workspace">
        <div className="brand">Light Chat</div>
        <div className="workspace-switch">Default Workspace</div>
      </div>

      <div className="sidebar-tabs">
        <button
          className={`tab ${activeTab === 'files' ? 'active' : ''}`}
          onClick={() => setActiveTab('files')}
        >
          Files
        </button>
        <button
          className={`tab ${activeTab === 'assistants' ? 'active' : ''}`}
          onClick={() => setActiveTab('assistants')}
        >
          Assistants
        </button>
      </div>

      <div className="sidebar-content">
        {activeTab === 'files' && (
          <FilesList files={files} onDeleteFile={onDeleteFile} />
        )}
        {activeTab === 'assistants' && (
          <div className="list">
            <div className="muted">(assistants coming soon)</div>
          </div>
        )}
      </div>

      <div className="sidebar-actions">
        <input
          ref={fileInputRef}
          id="file-input"
          className="file-input"
          type="file"
          onChange={handleFileChange}
          title="Upload a file"
        />
        <label htmlFor="file-input" className="small file-upload-label">
          Upload
        </label>
        <button onClick={onClearAll} className="small ghost">
          Clear all
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
