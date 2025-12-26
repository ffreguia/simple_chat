# Light Chat - React Version

> A modern React refactor of the original vanilla JavaScript chat application using **Vite**, **React 19**, and **React Hooks**.

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Project Structure](#project-structure)
- [Features](#features)
- [Component Architecture](#component-architecture)
- [Comparison](#comparison)
- [Next Steps](#next-steps)

## 🎯 Overview

A **clean, component-based React chat application** with modern tooling and best practices. This version maintains feature parity with the original while providing:

- ⚛️ **React Hooks** for state management
- 🚀 **Vite** for lightning-fast development and building
- 📦 **Component-based architecture** for maintainability
- 🎨 **Modular CSS** for better styling organization
- 💾 **LocalStorage** for automatic state persistence
- ♿ **Accessible** HTML with ARIA labels
- 📱 **Responsive design** for all screen sizes

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** 7+ (included with Node.js)

Verify installation:
```bash
node --version
npm --version
```

### 1. Clone or Navigate to Project

```bash
cd /Users/federica/Repos/graspy/simple_chat/react_version
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `react@^19.2.3` - React library
- `react-dom@^19.2.3` - React DOM rendering
- `vite@^7.3.0` - Build tool and dev server
- `@vitejs/plugin-react@^5.1.2` - Vite React support

---

## 💻 Development

### Start Development Server

```bash
npm run dev
```

**Output:**
```
  VITE v7.3.0  ready in 810 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

The application will automatically open in your browser at `http://localhost:5173/`

**Hot Module Reloading (HMR)** is enabled - changes to component files will reload instantly without losing state.

### Available Dev Commands

| Command | Description |
|---------|-------------|
| `r + enter` | Restart the dev server |
| `u + enter` | Show server URL |
| `o + enter` | Open in browser |
| `c + enter` | Clear console |
| `q + enter` | Quit dev server |

---

## 🧪 Testing

### Manual Testing Checklist

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Test Core Features:**
   - [ ] Type a message and press Enter - message appears
   - [ ] Switch assistants - selector works
   - [ ] Upload a file - appears in sidebar
   - [ ] Click "Attach" on a file - works without errors
   - [ ] Click delete (✕) on a file - removes file with confirmation
   - [ ] Toggle sidebar - sidebar disappears/reappears
   - [ ] Click "Clear all" - clears messages and files with confirmation

3. **Test State Persistence:**
   - [ ] Type a message
   - [ ] Refresh the page (Cmd+R)
   - [ ] Message is still there
   - [ ] Upload a file
   - [ ] Refresh the page
   - [ ] File is still in the list

4. **Test Responsive Design:**
   - [ ] Open DevTools (F12)
   - [ ] Test at 640px width - sidebar hides
   - [ ] Test at 820px width - sidebar shrinks to 220px
   - [ ] Test at 1100px+ width - full layout

5. **Test Accessibility:**
   - [ ] Tab through form controls
   - [ ] Labels are associated with inputs
   - [ ] Messages have proper ARIA attributes
   - [ ] Screen reader reads content correctly

### Automated Testing (Optional)

To add test runner (not included by default):
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

---

## 🏗️ Building

### Build for Production

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` directory.

**Output:**
```
vite v7.3.0 building for production...
✓ 12 modules transformed
dist/index.html                          0.45 kB │ gzip:  0.33 kB
dist/assets/index-xxxxx.css              1.23 kB │ gzip:  0.60 kB
dist/assets/index-xxxxx.js               8.45 kB │ gzip:  3.21 kB
```

### Preview Production Build

```bash
npm run preview
```

Serve the production build locally for testing:
```
➜  Local:   http://localhost:4173/
```

---

## 📁 Project Structure

```
react_version/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # File management sidebar
│   │   ├── ChatWindow.jsx      # Main chat interface
│   │   ├── MessageList.jsx     # Message rendering
│   │   ├── InputForm.jsx       # Input controls and assistant selector
│   │   └── FilesList.jsx       # File list with actions
│   │
│   ├── styles/
│   │   ├── index.css           # Global styles and theme variables
│   │   ├── Sidebar.css         # Sidebar component styles
│   │   ├── ChatWindow.css      # Chat window component styles
│   │   └── App.css             # App container styles
│   │
│   ├── App.jsx                 # Root component with state management
│   └── main.jsx                # Vite entry point
│
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
├── .eslintrc.json            # ESLint configuration
├── .prettierrc                # Code formatter configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## ✨ Features

### Implemented ✅

- **Single Chat Conversation** - Simplified for beginners
- **File Upload & Management** - Upload and list files with delete
- **Assistant Selection** - Switch between different assistants
- **LocalStorage Persistence** - Chat state saves automatically
- **Auto-scrolling Messages** - New messages scroll into view
- **Responsive Design** - Mobile, tablet, and desktop support
- **Accessible UI** - ARIA labels and semantic HTML
- **Hot Module Reloading** - Instant dev updates without losing state
- **Modern React** - React 19 with Hooks pattern

### Future Enhancements 🎯

- [ ] Message streaming with animation
- [ ] Real API integration for assistant responses
- [ ] Multiple concurrent conversations
- [ ] User authentication and profiles
- [ ] More assistant personalities/personas
- [ ] Emoji and reaction support
- [ ] Message editing and deletion
- [ ] Markdown message rendering
- [ ] Code syntax highlighting
- [ ] Unit and integration tests
- [ ] Dark/light theme toggle
- [ ] Message search functionality

---

## 🧩 Component Architecture

### Data Flow

```
App (State Manager)
├── messages: []
├── files: []
├── selectedAssistant: 'default'
└── sidebarOpen: boolean

    ├── Sidebar (props: files, callbacks)
    │   └── FilesList (props: files, onDelete)
    │
    └── ChatWindow (props: messages, callbacks)
        ├── MessageList (props: messages)
        └── InputForm (props: selectedAssistant, callbacks)
```

### Key Hooks Used

- **`useState`** - Component local state
- **`useEffect`** - Side effects (localStorage, auto-scroll)
- **`useRef`** - DOM access (scroll-to-bottom)

---

## 📊 Comparison: Original vs React

| Aspect | Original | React Version |
|--------|----------|---|
| **Framework** | Vanilla JS | React 19 |
| **Build Tool** | None (Browser) | Vite |
| **State Management** | Global object | React Hooks |
| **Styling** | Single CSS file (5.3KB) | Modular CSS |
| **Component Structure** | DOM manipulation | JSX Components |
| **Development Server** | None | Built-in Vite (HMR) |
| **Dev Experience** | Manual refresh | Hot reload |
| **Code Readability** | Procedural | Declarative |
| **Maintainability** | Harder to scale | Easier to extend |
| **Bundle Size** | ~10KB | ~15KB (with React) |

---

## 🔧 Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true  // Auto-open browser
  }
})
```

### .eslintrc.json
React + Hooks linting rules with best practices

### .prettierrc
Code formatting configuration (semicolons, quotes, indentation)

---

## 📝 Environment Variables (Optional)

Create `.env` file for environment-specific configuration:

```bash
touch .env
```

Example `.env`:
```
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your_key_here
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome/Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Mobile Safari (iOS) | 14+ |

---

## 🚦 Git Workflow (For Contributors)

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Format code before push:**
   ```bash
   npm run format
   ```

4. **Push to remote:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

---

## 🐛 Troubleshooting

### Issue: Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: React components not updating
```bash
# Clear Vite cache and reinstall
rm -rf node_modules .vite dist
npm install
npm run dev
```

### Issue: LocalStorage not persisting
- Check browser privacy settings
- Ensure cookies/storage are enabled
- Open DevTools → Application → Local Storage

### Issue: Styles not loading
- Hard refresh the browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check Network tab in DevTools for CSS errors

---

## 📦 Package Scripts

```bash
# Start development server with HMR
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# (Optional) Format code with Prettier
npm run format

# (Optional) Lint code with ESLint
npm run lint
```

---

## 💬 Contributing

Contributions are welcome! Please:

1. Follow the existing code style
2. Use JSDoc comments for components
3. Test manually before submitting PR
4. Update this README if adding features
5. Keep components small and focused
6. Use meaningful variable/function names

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review component JSDoc comments
3. Check browser console for errors
4. Open an issue on GitHub

---

## 🎉 Get Started Now!

```bash
# Copy and paste these commands:
cd /Users/federica/Repos/graspy/simple_chat/react_version
npm install
npm run dev
```

The app will open automatically at `http://localhost:5173/` ✨

