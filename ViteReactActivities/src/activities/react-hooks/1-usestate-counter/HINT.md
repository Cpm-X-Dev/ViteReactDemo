# Hint: useState — Counter

## Goal
Use `useState` to manage a numeric counter with increment, decrement, and reset.

## Key Concepts
- `useState` returns a pair: `[currentValue, setterFunction]`
- The setter function triggers a re-render with the new value
- Never mutate state directly — always use the setter

## Hints

### Hint 1
Import and initialize state:
```tsx
import { useState } from "react";
const [count, setCount] = useState(0);
```

### Hint 2
Update state in event handlers:
```tsx
<button onClick={() => setCount(count + 1)}>+</button>
```

### Hint 3
For the reset, just set the value back to 0:
```tsx
<button onClick={() => setCount(0)}>Reset</button>
```
