# Hint: Conditional Rendering

## Goal
Render different content based on a `status` prop using conditional logic in JSX.

## Key Concepts
- You can use `if/else`, `switch`, or ternary operators to conditionally render JSX
- Inline styles in React use a JavaScript object: `style={{ color: "red" }}`
- Union types like `"success" | "error" | "loading"` restrict the allowed values

## Hints

### Hint 1
One approach is to use a `switch` statement before the return:
```tsx
let text = "";
let color = "";
switch (status) {
    case "success":
        text = "Done!";
        color = "#166534";
        break;
    // ... other cases
}
return <span style={{ color }}>{text}</span>;
```

### Hint 2
Another approach is a lookup object:
```tsx
const config = {
    success: { text: "Done!", color: "#166534" },
    error: { text: "Failed!", color: "#dc2626" },
    loading: { text: "Loading...", color: "#6b7280" },
};
const { text, color } = config[status];
```

### Hint 3
Inline styles use camelCase for CSS properties and string values for colors:
```tsx
<span style={{ color: "#166534" }}>Done!</span>
```
