# Light Chat - React Version

A simple React chat application with message persistence and file management.

## Quick Start

```bash
cd /Users/federica/Repos/graspy/simple_chat/react_version
npm install
npm run dev
```

The app opens at `http://localhost:5173/`

## Features

- 💬 Send and receive messages
- 📁 Upload and manage files
- 💾 Auto-save to browser storage
- 🎨 Dark theme UI
- 📱 Responsive design

## What You Can Do

1. **Type a message** → Press Enter to send
2. **Upload files** → Click "Upload" button in sidebar
3. **Delete files** → Click ✕ next to file name
4. **Toggle sidebar** → Click "Toggle" button
5. **Clear all** → Click "Clear all" button (in sidebar)

## Project Structure

```
src/
├── App.jsx              Main app component
├── main.jsx            Entry point
├── components/         React components
│  ├── ChatWindow.jsx  Chat interface
│  ├── InputForm.jsx   Message input
│  ├── MessageList.jsx Messages display
│  ├── FilesList.jsx   Files list
│  └── Sidebar.jsx     Sidebar panel
└── index.css          All styles
```

## Available Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Create production build
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **CSS** - Styling

## Notes

- Messages and files are saved in browser's LocalStorage
- Refresh the page - your data persists!
- Close browser completely - data still there!

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

---

**Ready to go!** Run `npm install && npm run dev` and start chatting. 🚀
