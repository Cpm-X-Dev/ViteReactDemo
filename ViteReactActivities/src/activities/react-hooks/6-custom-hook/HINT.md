# Hint: Custom Hook — useLocalStorage

## Goal
Write a reusable custom hook that syncs React state with the browser's localStorage.

## Key Concepts
- Custom hooks are functions that start with `use` and can call other hooks
- They encapsulate reusable stateful logic
- `localStorage.getItem(key)` reads, `localStorage.setItem(key, value)` writes
- JSON.stringify/parse for serializing non-string values

## Hints (useLocalStorage.ts)

### Hint 1
Initialize state with a function to avoid reading localStorage on every render:
```tsx
const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
});
```

### Hint 2
Create the setter that writes to both state and localStorage:
```tsx
const setValue = (value: T) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
};
```

### Hint 3
Return the tuple:
```tsx
return [storedValue, setValue];
```

## Hints (LocalStorageDemo.tsx)

### Hint 4
Use the hook just like useState:
```tsx
const [name, setName] = useLocalStorage("demo-name", "");
```

### Hint 5
Wire up the input:
```tsx
<input value={name} onChange={(e) => setName(e.target.value)} />
<p>Stored value: {name}</p>
```
