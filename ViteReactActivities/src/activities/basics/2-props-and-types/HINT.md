# Hint: Props and Types

## Goal
Create a component that accepts typed props and renders a profile card.

## Key Concepts
- Props are arguments passed to React components
- In TypeScript, you define a type/interface for your props
- Props are received as the first argument of the function (or destructured)

## Hints

### Hint 1
Define a type for your props:
```tsx
type ProfileCardProps = {
    name: string;
    role: string;
    isActive: boolean;
};
```

### Hint 2
Pass the type to your component's parameter:
```tsx
const ProfileCard = ({ name, role, isActive }: ProfileCardProps) => {
    // ...
};
```

### Hint 3
Use a ternary expression to conditionally render text:
```tsx
<span>{isActive ? "Active" : "Inactive"}</span>
```
