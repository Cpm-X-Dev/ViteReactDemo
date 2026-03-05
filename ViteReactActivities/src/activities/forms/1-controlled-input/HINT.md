# Hint: Controlled Input

## Goal
Create a controlled text input where React state is the single source of truth.

## Key Concepts
- A "controlled" input has its `value` bound to React state
- Every keystroke triggers `onChange`, which updates state, which re-renders with the new value
- This is the React way to handle form inputs

## Hints

### Hint 1
Create the state:
```tsx
const [name, setName] = useState("");
```

### Hint 2
Bind the input to state:
```tsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Hint 3
Use the logical OR operator for a fallback:
```tsx
<p>Hello, {name || "stranger"}!</p>
```
