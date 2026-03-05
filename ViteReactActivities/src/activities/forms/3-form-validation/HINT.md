# Hint: Form Validation

## Goal
Validate form inputs on submit and display field-specific error messages.

## Key Concepts
- Validate all fields in one pass (collect all errors, then set them)
- Conditionally render error messages below each field
- Clear errors on successful validation

## Hints

### Hint 1
Create all three state variables:
```tsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState<LoginErrors>({ email: "", password: "" });
```

### Hint 2
Validate by building an errors object:
```tsx
const newErrors: LoginErrors = { email: "", password: "" };

if (!email.trim()) {
    newErrors.email = "Email is required.";
} else if (!email.includes("@")) {
    newErrors.email = "Please enter a valid email.";
}

if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
}
```

### Hint 3
Check if any errors exist before proceeding:
```tsx
if (newErrors.email || newErrors.password) {
    setErrors(newErrors);
    return;
}
```

### Hint 4
Conditionally render error messages:
```tsx
{errors.email && <p style={{ color: "#dc2626" }}>{errors.email}</p>}
```
