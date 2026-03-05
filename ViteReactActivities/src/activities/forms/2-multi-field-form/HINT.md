# Hint: Multi-Field Form

## Goal
Manage multiple form fields with a single state object and a shared change handler.

## Key Concepts
- A single state object can hold all form fields
- The input's `name` attribute can be used to dynamically update the right field
- Computed property names `[key]: value` let you update dynamic keys in objects
- Always spread the old state to avoid losing other fields

## Hints

### Hint 1
Create state with the form object:
```tsx
const [formData, setFormData] = useState<FormData>(initialFormData);
```

### Hint 2
Use computed property names in the change handler:
```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
```
The `[name]` syntax uses the input's `name` attribute as the object key.

### Hint 3
Handle submission:
```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
};
```

### Hint 4
Bind each input:
```tsx
<input name="username" value={formData.username} onChange={handleChange} />
```
