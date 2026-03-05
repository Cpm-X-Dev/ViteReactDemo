# Hint: List Rendering

## Goal
Render a list of fruits from an array using `.map()` with proper `key` props.

## Key Concepts
- Use `.map()` to transform an array into JSX elements
- Every list item in React needs a unique `key` prop for efficient re-rendering
- Use the item's `id` as the key (not the array index)

## Hints

### Hint 1
The `.map()` method transforms each element in an array:
```tsx
{fruits.map((fruit) => (
    <li key={fruit.id}>...</li>
))}
```

### Hint 2
Use curly braces `{}` inside JSX to embed JavaScript expressions:
```tsx
<li key={fruit.id}>{fruit.emoji} {fruit.name}</li>
```

### Hint 3
The `key` prop goes on the outermost element returned from `.map()`. React uses it internally — it won't appear in the DOM.
