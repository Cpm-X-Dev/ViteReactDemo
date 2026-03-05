# Hint: useState — Toggle

## Goal
Use a boolean `useState` to toggle between light and dark theme styles.

## Key Concepts
- Boolean state is useful for toggles, modals, visibility
- Toggle by negating the current value: `!currentValue`
- Inline styles can be computed from state values

## Hints

### Hint 1
Create boolean state:
```tsx
const [isDark, setIsDark] = useState(false);
```

### Hint 2
Toggle by negating:
```tsx
<button onClick={() => setIsDark(!isDark)}>Toggle</button>
```
Or using the functional form:
```tsx
<button onClick={() => setIsDark(prev => !prev)}>Toggle</button>
```

### Hint 3
Compute styles from state:
```tsx
const themeStyle = {
    backgroundColor: isDark ? "#1f2937" : "#f9fafb",
    color: isDark ? "#f9fafb" : "#1f2937",
};
```
