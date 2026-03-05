# ✏️ ViteReactActivities

> Hands-on coding exercises with **scaffolded code** and **answer keys** — built with Vite + React + TypeScript.

Complete-the-code activities designed to practice React concepts. Each exercise gives you a skeleton component with `TODO` comments — fill in the missing logic, then check your work against the reference solutions.

---

## 📑 Table of Contents

- [🎯 How It Works](#-how-it-works)
- [📘 Basics (4 activities)](#-basics--4-activities)
- [🪝 React Hooks (6 activities)](#-react-hooks--6-activities)
- [📝 Forms (3 activities)](#-forms--3-activities)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)

---

## 🎯 How It Works

1. Open `src/App.tsx`
2. Uncomment the import for the activity you want to work on
3. Complete the `TODO` items in the activity file
4. Check your solution against the `_answers/` folder
5. Each activity has a `HINT.md` file if you get stuck

> 💡 **No router** is used in this project — you work on one activity at a time by toggling imports in `App.tsx`.

---

## 📘 Basics — 4 activities

Fundamental React patterns — components, props, conditionals, and lists.

| # | Activity | File | What You'll Practice |
|---|----------|------|---------------------|
| 1 | **Hello Component** | `basics/1-hello-component/HelloComponent.tsx` | Creating your first React component |
| 2 | **Props & Types** | `basics/2-props-and-types/ProfileCard.tsx` | Typed props with TypeScript interfaces |
| 3 | **Conditional Rendering** | `basics/3-conditional-rendering/StatusBadge.tsx` | Rendering different UI based on state |
| 4 | **List Rendering** | `basics/4-list-rendering/FruitList.tsx` | `.map()` with keys to render a list |

---

## 🪝 React Hooks — 6 activities

Working with React's built-in hooks and creating custom ones.

| # | Activity | File | What You'll Practice |
|---|----------|------|---------------------|
| 1 | **useState Counter** | `react-hooks/1-usestate-counter/Counter.tsx` | Basic number state with increment/decrement |
| 2 | **useState Toggle** | `react-hooks/2-usestate-toggle/ThemeToggle.tsx` | Boolean state for toggling themes |
| 3 | **useState Object** | `react-hooks/3-usestate-object/UserProfile.tsx` | Managing object state immutably |
| 4 | **useEffect Timer** | `react-hooks/4-useeffect-timer/Timer.tsx` | Side effects with cleanup (interval) |
| 5 | **useEffect Fetch** | `react-hooks/5-useeffect-fetch/UserFetcher.tsx` | Data fetching on mount |
| 6 | **Custom Hook** | `react-hooks/6-custom-hook/useLocalStorage.ts` | Building a reusable `useLocalStorage` hook |

---

## 📝 Forms — 3 activities

Form handling patterns in React.

| # | Activity | File | What You'll Practice |
|---|----------|------|---------------------|
| 1 | **Controlled Input** | `forms/1-controlled-input/NameForm.tsx` | `value` + `onChange` controlled pattern |
| 2 | **Multi-Field Form** | `forms/2-multi-field-form/RegistrationForm.tsx` | Single state object for multiple fields |
| 3 | **Form Validation** | `forms/3-form-validation/LoginForm.tsx` | Client-side validation with error display |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (port 3001)
npm run dev
```

Then open **http://localhost:3001** in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check + lint + build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run enroll` | Install + build (one-step setup) |

---

## 📁 Project Structure

```
src/
├── App.tsx                          # Toggle activities by uncommenting imports
├── activities/
│   ├── basics/
│   │   ├── 1-hello-component/
│   │   │   └── HelloComponent.tsx   # 👈 Complete the TODO
│   │   ├── 2-props-and-types/
│   │   │   └── ProfileCard.tsx
│   │   ├── 3-conditional-rendering/
│   │   │   └── StatusBadge.tsx
│   │   ├── 4-list-rendering/
│   │   │   └── FruitList.tsx
│   │   └── _answers/               # ✅ Reference solutions
│   │
│   ├── react-hooks/
│   │   ├── 1-usestate-counter/
│   │   │   └── Counter.tsx
│   │   ├── 2-usestate-toggle/
│   │   │   └── ThemeToggle.tsx
│   │   ├── 3-usestate-object/
│   │   │   └── UserProfile.tsx
│   │   ├── 4-useeffect-timer/
│   │   │   └── Timer.tsx
│   │   ├── 5-useeffect-fetch/
│   │   │   └── UserFetcher.tsx
│   │   ├── 6-custom-hook/
│   │   │   ├── LocalStorageDemo.tsx
│   │   │   └── useLocalStorage.ts
│   │   └── _answers/               # ✅ Reference solutions
│   │
│   └── forms/
│       ├── 1-controlled-input/
│       │   └── NameForm.tsx
│       ├── 2-multi-field-form/
│       │   └── RegistrationForm.tsx
│       ├── 3-form-validation/
│       │   └── LoginForm.tsx
│       └── _answers/               # ✅ Reference solutions
```

---

## 🔑 Checking Your Answers

Each category has an `_answers/` folder containing the completed reference solutions. Compare your implementation with the answer key:

```
src/activities/basics/_answers/HelloComponent.tsx       ← Reference
src/activities/basics/1-hello-component/HelloComponent.tsx  ← Your work
```

> ⚠️ **Try to solve the exercise yourself first!** The answer keys are there for when you're stuck or want to verify your approach.

---

> ✏️ Part of the [ViteReactDemo](../) workshop repository
