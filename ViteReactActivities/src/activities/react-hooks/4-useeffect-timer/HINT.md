# Hint: useEffect — Timer

## Goal
Set up a `setInterval` inside `useEffect` with proper cleanup to build a counting timer.

## Key Concepts
- `useEffect` runs side effects after render
- The cleanup function (returned from useEffect) runs when the component unmounts
- An empty dependency array `[]` means "run once on mount, clean up on unmount"
- Always clean up intervals/timeouts to prevent memory leaks

## Hints

### Hint 1
Basic useEffect with cleanup:
```tsx
useEffect(() => {
    // setup code
    return () => {
        // cleanup code
    };
}, []);
```

### Hint 2
Set up the interval and store its ID:
```tsx
useEffect(() => {
    const intervalId = setInterval(() => {
        // increment seconds
    }, 1000);
    return () => clearInterval(intervalId);
}, []);
```

### Hint 3
Use the functional form of the setter to avoid stale closures:
```tsx
setSeconds(prev => prev + 1);
```
This is important because the callback inside `setInterval` captures the initial value of `seconds` — using `prev =>` always gets the latest value.
