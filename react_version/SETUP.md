# 🚀 Quick Setup Guide

## One-Liner Installation

Copy and paste this entire command block:

```bash
cd /Users/federica/Repos/graspy/simple_chat/react_version && npm install && npm run dev
```

---

## Step-by-Step Setup

### Step 1: Navigate to Project
```bash
cd /Users/federica/Repos/graspy/simple_chat/react_version
```

### Step 2: Install Dependencies
```bash
npm install
```

**Expected Output:**
```
added XX packages, and audited XX packages in Xs
found 0 vulnerabilities
```

### Step 3: Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
  VITE v7.3.0  ready in 810 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Browser will open automatically at `http://localhost:5173/`

---

## Testing the Application

### Basic Test (2 minutes)

1. Type a message: `"Hello React!"`
2. Press Enter
3. Message appears in chat ✅
4. Scroll down - auto-scrolls to new message ✅

### File Upload Test (2 minutes)

1. Click "Upload" button
2. Select any file
3. File appears in sidebar ✅
4. Click delete (✕) next to file
5. Confirm deletion - file removed ✅

### Assistant Selection Test (1 minute)

1. Click dropdown showing "Default Assistant"
2. Select "Helpful Assistant"
3. Selection changes ✅

### Sidebar Toggle Test (1 minute)

1. Click "Toggle" button
2. Sidebar disappears ✅
3. Click "Toggle" again
4. Sidebar reappears ✅

### Persistence Test (2 minutes)

1. Type a message: `"Persistence test"`
2. Upload a file
3. Press Cmd+R (Mac) or F5 (Windows) to refresh
4. Message and file still there ✅
5. Close browser tab completely
6. Reopen: still there ✅

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality (optional) |
| `npm run format` | Format code with Prettier (optional) |

---

## Keyboard Shortcuts (in Dev Server)

Press these after running `npm run dev`:

| Key | Action |
|-----|--------|
| `r + enter` | Restart server |
| `u + enter` | Show server URL |
| `o + enter` | Open in browser |
| `c + enter` | Clear console |
| `q + enter` | Quit server |

---

## Browser DevTools Tips

### Open DevTools
- **Mac:** Cmd + Option + I
- **Windows:** F12 or Ctrl + Shift + I

### Check State in LocalStorage
1. DevTools → Application (or Storage)
2. Left sidebar → Local Storage
3. Find: `light_chat_state_v2`
4. Inspect saved messages and files

### Check for Errors
1. DevTools → Console
2. Look for red error messages
3. Green checkmarks = no errors ✅

### Test Responsive Design
1. DevTools → Toggle Device Toolbar (Cmd+Shift+M)
2. Select mobile (375px) or tablet (768px)
3. Check layout reflows correctly

---

## Troubleshooting

### Error: "Port 5173 already in use"
```bash
# Use different port
npm run dev -- --port 3000
```

### Error: "node_modules not found"
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm run dev
```

### Changes not showing
```bash
# Hard refresh browser
Mac: Cmd + Shift + R
Windows: Ctrl + Shift + Delete
```

### Chat not persisting
- Check DevTools → Application → Local Storage
- Ensure site storage is enabled
- Check browser privacy settings

---

## Project Files

All files are organized and ready:

```
✅ src/components/     - 5 React components
✅ src/styles/        - Modular CSS files
✅ src/App.jsx        - State management
✅ package.json       - Dependencies configured
✅ vite.config.js     - Build tool setup
✅ .eslintrc.json     - Code quality rules
✅ .prettierrc         - Code formatting
✅ .gitignore         - Git ignore rules
✅ README.md          - Full documentation
✅ CONTRIBUTING.md    - Contribution guide
```

---

## Next Steps

### After Testing Works Locally:

1. **Build for Production:**
   ```bash
   npm run build
   ```

2. **Deploy to Hosting:**
   - Upload `dist/` folder to hosting service
   - Works with: Vercel, Netlify, GitHub Pages, etc.

3. **Submit as PR:**
   - Push changes to feature branch
   - Create pull request with test results
   - Reference this setup guide

---

## Git Setup (If Contributing)

```bash
# Stage changes
git add .

# Commit
git commit -m "feat: your feature description"

# Push to your branch
git push origin feature/your-feature-name

# Create PR on GitHub
```

---

## Support Commands

```bash
# See what's running
ps aux | grep node

# Kill dev server if stuck (port 5173)
lsof -ti:5173 | xargs kill -9

# Check Node version
node --version

# Check npm version  
npm --version

# View package dependencies
npm list

# Check for outdated packages
npm outdated
```

---

## ✨ You're All Set!

Everything is configured and ready to go. Just run:

```bash
npm install && npm run dev
```

Happy coding! 🚀
