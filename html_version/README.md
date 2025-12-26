Light Chat — Simple Frontend Example (closer to Chatbot UI)

Overview

- This is a tiny, purely front-end chat demo intended for beginners.
- No React, no build tools — just HTML, CSS and JavaScript.
- The UI now resembles the main `chatbot-ui` layout: sidebar with tabs, chat list, and a main chat pane.

Files

- index.html — main HTML file to open in the browser
- styles.css — styles for dashboard, sidebar, and chat pane
- app.js — small app logic: create/select chats, send messages, simulate assistant

How to run

1. Open `light_version/index.html` in any modern browser (double-click it or use `File → Open`).
2. Use the sidebar to create/select chats. Press Enter or click Send to send messages.
3. Use "Clear all" to delete all chats. Conversations are saved to localStorage per chat.

How it relates to `chatbot-ui`

- The layout mirrors Chatbot UI's sidebar + chat pane split, but now simplified: this version supports a single conversation (no multiple chats) to keep the code minimal and beginner-friendly.

Next steps / easy improvements for a beginner

- Upload files via the sidebar and attach them to the single conversation (done).
- Animated "streaming" assistant replies are included (done).
- Convert this to React if you'd like to see a minimal React version for comparison.

Tell me which improvement you want next and I'll add it.