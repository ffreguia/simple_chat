// IMMEDIATE TEST - This should appear immediately
console.log('🔴 APP.JS LOADED')

// Wait for DOM to be fully loaded before running code
function initializeApp() {
  console.log('🟢 INITIALIZING APP - DOM IS READY')

  // Now safely get elements
  const messagesEl = document.getElementById('messages')
  const inputEl = document.getElementById('message-input')
  const sendBtn = document.getElementById('send-button')
  const filesListEl = document.getElementById('files-list')
  const assistantsListEl = document.getElementById('assistants-list')
  const toggleSidebarBtn = document.getElementById('toggle-sidebar')
  const fileInput = document.getElementById('file-input')
  const chatTitleEl = document.getElementById('chat-title')
  const assistantSelect = document.getElementById('assistant-select')
  const clearAllBtn = document.getElementById('clear-all-btn')
  const STORAGE_KEY = 'light_chat_state_v2'

  console.log('Elements found:', {
    messagesEl: !!messagesEl,
    inputEl: !!inputEl,
    sendBtn: !!sendBtn,
    filesListEl: !!filesListEl,
    assistantsListEl: !!assistantsListEl
  })

  // Global error handler
  window.addEventListener('error', (e) => {
    console.error('Global error caught:', e.message, e.error)
  })

  let state = {
    messages: [],
    files: []
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }

  function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    try {
      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed.messages)) parsed.messages = []
      if (!Array.isArray(parsed.files)) parsed.files = []
      state = parsed
      console.log('State loaded:', state)
    } catch (e) {
      console.error('Failed to load state', e)
    }
  }

  function formatDate() {
    return new Date().toLocaleTimeString()
  }

  function ensureChatExists() {
    if (!Array.isArray(state.messages)) state.messages = []
    if (state.messages.length === 0) {
      state.messages.push({ role: 'assistant', text: 'Hello! Ask me anything.' })
      saveState()
    }
  }

  function renderSidebar() {
    filesListEl.innerHTML = ''
    if (!state.files || state.files.length === 0) {
      filesListEl.innerHTML = '<div class="muted">(no files uploaded)</div>'
    } else {
      state.files.forEach(file => {
        const el = document.createElement('div')
        el.className = 'file-item'

        const name = document.createElement('div')
        name.className = 'file-name'
        name.textContent = file.name

        const actions = document.createElement('div')
        actions.style.display = 'flex'
        actions.style.gap = '8px'

        const attachBtn = document.createElement('button')
        attachBtn.className = 'attach-btn'
        attachBtn.textContent = 'Attach'
        attachBtn.onclick = () => attachFileToChat(file.id)

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.textContent = '✕'
        deleteBtn.title = 'Delete file'
        deleteBtn.onclick = (e) => {
          e.stopPropagation()
          if (confirm('Delete this file?')) deleteFileById(file.id)
        }

        actions.appendChild(attachBtn)
        actions.appendChild(deleteBtn)
        el.appendChild(name)
        el.appendChild(actions)
        filesListEl.appendChild(el)
      })
    }

    assistantsListEl.innerHTML = ''
    ;['Default Assistant', 'Helpful Assistant'].forEach(a => {
      const el = document.createElement('div')
      el.className = 'item'
      el.textContent = a
      el.onclick = () => {
        assistantSelect.value = a.toLowerCase().includes('helpful') ? 'helpful' : 'default'
      }
      assistantsListEl.appendChild(el)
    })
  }

  function renderMessages() {
    messagesEl.innerHTML = ''
    chatTitleEl.textContent = 'Chat'

    if (!state.messages || state.messages.length === 0) {
      const hint = document.createElement('div')
      hint.className = 'muted'
      hint.textContent = 'No messages yet — type below to start the conversation.'
      messagesEl.appendChild(hint)
      return
    }

    state.messages.forEach(msg => {
      const fileObj = msg.fileId ? state.files.find(f => f.id === msg.fileId) : null
      addMessageToDOM(msg.role, msg.text, fileObj)
    })
    messagesEl.scrollTop = messagesEl.scrollHeight
  }

  function addMessageToDOM(role, text, file = null) {
    const wrapper = document.createElement('div')
    wrapper.className = `message ${role}`

    const meta = document.createElement('div')
    meta.className = 'meta'
    meta.textContent = role === 'user' ? `You • ${formatDate()}` : `Assistant • ${formatDate()}`

    const content = document.createElement('div')
    content.textContent = text

    if (file) {
      const br = document.createElement('br')
      const link = document.createElement('a')
      link.className = 'file-link'
      link.href = file.dataUrl
      link.download = file.name
      link.textContent = `📎 ${file.name}`
      content.appendChild(br)
      content.appendChild(link)
    }

    wrapper.appendChild(meta)
    wrapper.appendChild(content)
    messagesEl.appendChild(wrapper)
    messagesEl.scrollTop = messagesEl.scrollHeight
  }

  function addMessage(role, text, file = null) {
    console.log('addMessage called with:', role, text)
    const msg = { role, text }
    if (file) msg.fileId = file.id
    state.messages.push(msg)
    addMessageToDOM(role, text, file)
    saveState()
  }

  function simulateAssistantReply(userText) {
    const mode = assistantSelect ? assistantSelect.value : 'default'
    let fullReply = ''
    if (mode === 'helpful') {
      fullReply = `I can help! You said: "${userText}". Here are some suggestions to try.`
    } else {
      fullReply = `This is the response to: "${userText}".`
    }

    const msgIndex = state.messages.length
    state.messages.push({ role: 'assistant', text: '' })
    saveState()

    const wrapper = document.createElement('div')
    wrapper.className = 'message assistant typing'
    const meta = document.createElement('div')
    meta.className = 'meta'
    meta.textContent = `Assistant • ${formatDate()}`
    const content = document.createElement('div')
    content.textContent = ''

    wrapper.appendChild(meta)
    wrapper.appendChild(content)
    messagesEl.appendChild(wrapper)
    messagesEl.scrollTop = messagesEl.scrollHeight

    let i = 0
    const speed = 25
    const chunkSize = 3
    const interval = setInterval(() => {
      const next = fullReply.slice(i, i + chunkSize)
      content.textContent += next
      i += next.length
      messagesEl.scrollTop = messagesEl.scrollHeight

      state.messages[msgIndex].text = content.textContent
      saveState()

      if (i >= fullReply.length) {
        clearInterval(interval)
        wrapper.classList.remove('typing')
      }
    }, speed)
  }

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(file)
    })
  }

  async function addFile(file) {
    const dataUrl = await readFileAsDataURL(file)
    const fileObj = {
      id: 'file_' + Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      dataUrl
    }
    state.files.unshift(fileObj)
    saveState()
    renderSidebar()
    const filesTab = document.querySelector('.tab[data-tab="files"]')
    if (filesTab) filesTab.click()
  }

  function deleteFileById(id) {
    state.files = state.files.filter(f => f.id !== id)
    saveState()
    renderSidebar()
  }

  function attachFileToChat(fileId) {
    const file = state.files.find(f => f.id === fileId)
    if (!file) return
    addMessage('user', `Attached file: ${file.name}`, file)
  }

  function setupTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        const target = tab.getAttribute('data-tab')
        document.querySelectorAll('.list').forEach(l => l.classList.add('hidden'))
        document.getElementById(target + '-list').classList.remove('hidden')
      })
    })
  }

  function handleSend() {
    console.log('handleSend called')
    const text = inputEl.value.trim()
    console.log('Text value:', text)
    if (!text) {
      console.log('No text to send')
      return
    }

    addMessage('user', text)
    inputEl.value = ''
    inputEl.focus()
    simulateAssistantReply(text)
  }

  // Wire up event listeners
  if (sendBtn) {
    console.log('✅ sendBtn found, adding click listener')
    sendBtn.addEventListener('click', handleSend)
  } else {
    console.error('❌ sendBtn NOT found')
  }

  if (inputEl) {
    console.log('✅ inputEl found, adding keydown listener')
    inputEl.addEventListener('keydown', (e) => {
      console.log('Key pressed:', e.key)
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    })
  } else {
    console.error('❌ inputEl NOT found')
  }

  if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
      const f = e.target.files?.[0]
      if (f) await addFile(f)
      fileInput.value = ''
    })
  }

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar')
      if (sidebar) sidebar.classList.toggle('hidden')
    })
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (confirm('Delete all chats and files?')) {
        state.messages = [{ role: 'assistant', text: 'Hello! Ask me anything.' }]
        state.files = []
        saveState()
        renderSidebar()
        renderMessages()
      }
    })
  }

  // Initialize
  try {
    loadState()
    ensureChatExists()
    setupTabs()
    renderSidebar()
    renderMessages()
    console.log('✅ Initialization complete')
  } catch (e) {
    console.error('❌ Initialization error:', e)
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}

