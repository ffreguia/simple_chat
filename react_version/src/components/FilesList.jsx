/**
 * FilesList Component
 * Displays list of uploaded files with action buttons
 * @param {Array} files - Array of file objects
 * @param {Function} onDeleteFile - Callback to delete a file by ID
 */
function FilesList({ files, onDeleteFile }) {
  if (!files || files.length === 0) {
    return (
      <div className="list">
        <div className="muted">(no files uploaded)</div>
      </div>
    )
  }

  return (
    <div className="list">
      {files.map(file => (
        <div key={file.id} className="file-item">
          <div className="file-name" title={file.name}>
            {file.name}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="attach-btn" title="Attach file">
              Attach
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                if (confirm('Delete this file?')) {
                  onDeleteFile(file.id)
                }
              }}
              title="Delete file"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FilesList
