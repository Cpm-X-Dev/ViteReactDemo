# Hint: useState — Object State

## Goal
Manage an object in state and update individual fields without mutating the original.

## Key Concepts
- State in React must be updated immutably (create new objects, never mutate)
- The spread operator `{ ...obj }` creates a shallow copy
- Override specific fields after the spread: `{ ...obj, name: "new" }`

## Hints

### Hint 1
Initialize state with the object:
```tsx
const [user, setUser] = useState<User>(initialUser);
```

### Hint 2
Update one field immutably using spread:
```tsx
const updateName = (newName: string) => {
    setUser({ ...user, name: newName });
};
```
This creates a new object with all existing fields copied, then overrides `name`.

### Hint 3
Bind the input values to state, not to the static `initialUser`:
```tsx
<input value={user.name} onChange={(e) => updateName(e.target.value)} />
```
