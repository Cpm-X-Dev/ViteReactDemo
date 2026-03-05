# Hint: Hello Component

## Goal
Create a simple React functional component that renders a greeting message.

## Key Concepts
- React functional components are just functions that return JSX
- JSX looks like HTML but lives inside JavaScript/TypeScript
- A component must return a single root element (or a fragment)

## Hints

### Hint 1
A React component is a function that returns JSX. The simplest form is:
```tsx
const MyComponent = () => {
    return <div>Hello</div>;
};
```

### Hint 2
You can nest multiple elements inside a parent `<div>`:
```tsx
return (
    <div>
        <h2>Title</h2>
        <p>Description</p>
    </div>
);
```

### Hint 3
When JSX spans multiple lines, wrap it in parentheses `()` after `return`.
