# Contributing to Light Chat React

Thank you for your interest in contributing! This guide will help you get started.

## Code Style Guidelines

### React Components

1. **Use functional components with hooks**
   ```javascript
   function MyComponent({ prop1, prop2 }) {
     const [state, setState] = useState(false)
     
     return <div>{state && prop1}</div>
   }
   ```

2. **Include JSDoc comments**
   ```javascript
   /**
    * Component Description
    * @param {Array} items - List of items
    * @param {Function} onSelect - Callback when item selected
    */
   function ItemList({ items, onSelect }) {
     // ...
   }
   ```

3. **Keep components small and focused**
   - One responsibility per component
   - Extract reusable logic
   - Max ~100 lines of JSX per component

4. **Naming conventions**
   - Components: PascalCase (e.g., `ChatWindow.jsx`)
   - Functions/variables: camelCase (e.g., `handleSendMessage`)
   - Constants: UPPER_SNAKE_CASE (e.g., `STORAGE_KEY`)

### CSS Conventions

1. **Use CSS custom properties for colors**
   ```css
   :root {
     --bg: #0f1724;
     --text: #e6eef8;
   }
   ```

2. **Mobile-first approach**
   ```css
   .sidebar {
     width: 100%; /* Mobile default */
   }
   
   @media (min-width: 640px) {
     .sidebar {
       width: 320px;
     }
   }
   ```

3. **Keep related styles in one file**
   - One CSS file per component
   - Global styles in `index.css`

## Development Workflow

### 1. Set Up Local Environment

```bash
cd react_version
npm install
npm run dev
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/description-of-feature
```

Branch naming:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code improvements
- `test/` - Test additions

### 3. Make Your Changes

```bash
# Edit files
# Save with Ctrl+S

# Changes auto-reload with HMR (Hot Module Reloading)
```

### 4. Test Your Changes

**Manual Testing:**
```bash
# Test in browser at http://localhost:5173/
```

**Checklist:**
- [ ] Feature works as intended
- [ ] No console errors
- [ ] Responsive on mobile (640px)
- [ ] Responsive on tablet (820px)
- [ ] Works in latest browsers (Chrome, Firefox, Safari)
- [ ] LocalStorage persistence works
- [ ] No breaking changes

### 5. Code Quality

**Check code style:**
```bash
npm run lint
```

**Format code:**
```bash
npm run format
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "type(scope): description"
```

Commit types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Test additions

Examples:
```
feat(chat): add message reactions
fix(sidebar): fix file list scroll issue
docs: update installation instructions
```

### 7. Push and Create Pull Request

```bash
git push origin feature/description-of-feature
```

Then create a PR on GitHub with:
- Clear title
- Description of changes
- List of testing done
- Screenshots (if UI changes)
- Links to related issues

## Project Structure Guidelines

### Adding a New Component

1. Create component file in `src/components/`
2. Create corresponding CSS in `src/styles/`
3. Import in parent component
4. Add JSDoc comment block
5. Update README if needed

Example:
```
src/components/NewComponent.jsx
src/styles/NewComponent.css
```

### Adding Global Styles

- Modify `src/styles/index.css`
- Use CSS custom properties for consistency
- Follow existing color/spacing scale

## Testing Checklist

Before submitting a PR, ensure:

- [ ] **Functionality**
  - [ ] All features work as described
  - [ ] No regressions in existing features
  - [ ] Edge cases handled (empty states, etc)

- [ ] **Code Quality**
  - [ ] No console errors or warnings
  - [ ] JSDoc comments added
  - [ ] Code is formatted
  - [ ] Variables are named clearly

- [ ] **Responsiveness**
  - [ ] Mobile (max-width: 640px)
  - [ ] Tablet (max-width: 820px)
  - [ ] Desktop (1100px+)

- [ ] **Accessibility**
  - [ ] Tab navigation works
  - [ ] ARIA labels present
  - [ ] Semantic HTML used
  - [ ] Color contrast adequate

- [ ] **Performance**
  - [ ] No unnecessary re-renders
  - [ ] No memory leaks
  - [ ] Bundle size reasonable

- [ ] **Documentation**
  - [ ] README updated if needed
  - [ ] Comments explain complex logic
  - [ ] Types/props documented

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Examples:
```
feat(input): add shift+enter for multi-line messages

Add ability to send multi-line messages using Shift+Enter
instead of just Enter for single-line messages.

Closes #42
```

## Common Tasks

### Add a New Hook Utility

```javascript
// src/hooks/useLocalStorage.js
export function useLocalStorage(key, initialValue) {
  // Implementation
}

// Usage in component
import { useLocalStorage } from '../hooks/useLocalStorage'
```

### Add a New CSS Custom Property

```css
/* src/styles/index.css */
:root {
  --new-color: #xxxxx;
  --new-size: 24px;
}

/* Use in component CSS */
.element {
  color: var(--new-color);
  font-size: var(--new-size);
}
```

### Debug a Component

1. Check browser console for errors
2. Use React DevTools extension
3. Log state with `console.log()`
4. Check Network tab for API calls
5. Verify localStorage in DevTools

## Questions?

- Check existing code for examples
- Review component JSDoc comments
- Look at similar components
- Open a discussion issue

## Thank You!

Your contributions help make Light Chat better for everyone! 🙏
