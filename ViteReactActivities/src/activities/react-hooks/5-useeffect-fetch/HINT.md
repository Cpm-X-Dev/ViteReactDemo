# Hint: useEffect — Fetch Data

## Goal
Fetch data from an API when the component mounts, manage loading state, and display results.

## Key Concepts
- `useEffect` is the place for side effects like API calls
- Manage loading/error states alongside data state
- Use `.then()` chains or `async` functions inside useEffect
- You cannot make the useEffect callback itself `async`, but you can define an async function inside it

## Hints

### Hint 1
Create the two state variables:
```tsx
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
```

### Hint 2
Fetch inside useEffect using `.then()`:
```tsx
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        });
}, []);
```

### Hint 3
Handle the loading and null states with early returns:
```tsx
if (loading) return <p>Loading...</p>;
if (!user) return <p>No user found.</p>;

return (
    <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
);
```
