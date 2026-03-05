# 📚 LearnViteReact

> An interactive learning platform with **20 guided lessons** across 4 categories — built with Vite + React + TypeScript.

Each lesson combines **explanation**, **live interactive demos**, **source code**, and **practice exercises** to help you learn React concepts by doing.

---

## 📑 Table of Contents

- [🎯 How Lessons Work](#-how-lessons-work)
- [📘 Essentials (7 lessons)](#-essentials--7-lessons)
- [🪝 Hooks (6 lessons)](#-hooks--6-lessons)
- [🧭 Router (4 lessons)](#-router--4-lessons)
- [📝 Forms (3 lessons)](#-forms--3-lessons)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)

---

## 🎯 How Lessons Work

Every lesson follows the same structure:

| Section | What You'll Find |
|---------|-----------------|
| 📖 **What & Why** | Explanation of the concept with real-life context |
| 💡 **Real-life Thinking** | Why this matters in production apps |
| 🎮 **Interactive Demo** | Live, working examples you can interact with |
| 💻 **Code Block** | The source code behind the demo |
| 📝 **Key Takeaways** | Summary of the most important points |
| ✏️ **Practice Exercise** | A challenge to try on your own |

---

## 📘 Essentials — 7 lessons

Foundational React concepts every developer needs to know.

| # | Lesson | Route | What You'll Learn |
|---|--------|-------|-------------------|
| 1 | **Components & JSX** | `/essentials/components-jsx` | What components are, JSX syntax, expressions, fragments |
| 2 | **Props & Types** | `/essentials/props-types` | Passing data via props, TypeScript interfaces, children |
| 3 | **Conditional Rendering** | `/essentials/conditional-rendering` | Ternary, `&&` short-circuit, early returns |
| 4 | **Lists & Keys** | `/essentials/lists-keys` | `.map()` for lists, `key` prop, why keys matter |
| 5 | **SSR & CSR** | `/essentials/ssr-and-csr` | Server-side vs client-side rendering, trade-offs, hydration |
| 6 | **Why React** | `/essentials/why-react` | Component model, virtual DOM, ecosystem, when to use React |
| 7 | **Why TypeScript** | `/essentials/why-typescript` | Type safety, TSX vs JSX, catching bugs at compile time |

---

## 🪝 Hooks — 6 lessons

React's built-in hooks and how to build your own.

| # | Lesson | Route | What You'll Learn |
|---|--------|-------|-------------------|
| 1 | **useState** | `/hooks/use-state` | State declaration, updater functions, objects & arrays |
| 2 | **useEffect** | `/hooks/use-effect` | Side effects, dependency arrays, cleanup functions |
| 3 | **useRef** | `/hooks/use-ref` | DOM access, persisting values without re-renders |
| 4 | **useContext** | `/hooks/use-context` | Context API, Provider pattern, avoiding prop drilling |
| 5 | **useMemo / useCallback** | `/hooks/use-memo-callback` | Memoizing computations, stable function references |
| 6 | **Custom Hooks** | `/hooks/custom-hooks` | Extracting reusable logic into your own hooks |

---

## 🧭 Router — 4 lessons

Client-side routing with React Router v7 — this section is **self-referential** (the app teaches routing by showing its own route structure).

| # | Lesson | Route | What You'll Learn |
|---|--------|-------|-------------------|
| 1 | **Declarative Routing** | `/router/declarative-routing` | BrowserRouter, Routes, Route, URL-to-component mapping |
| 2 | **Nested Routes** | `/router/nested-routes` | `<Outlet>`, nested layouts, index routes |
| 3 | **Navigation & Links** | `/router/navigation-links` | `<Link>` vs `<NavLink>`, `isActive`, `useNavigate` |
| 4 | **Route Parameters** | `/router/route-params` | Dynamic `:id` segments, `useParams`, 404 handling |

---

## 📝 Forms — 3 lessons

Handling user input the React way.

| # | Lesson | Route | What You'll Learn |
|---|--------|-------|-------------------|
| 1 | **Controlled Inputs** | `/forms/controlled-inputs` | `value` + `onChange` pattern, different input types |
| 2 | **Multi-Field Forms** | `/forms/multi-field-forms` | Single state object, shared `handleChange`, form reset |
| 3 | **Form Validation** | `/forms/form-validation` | Error state, real-time validation, submit vs blur |

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| ⚛️ React | 19.2 |
| 🔷 TypeScript | 5.9 (strict) |
| ⚡ Vite | 7.3 |
| 🚀 SWC | @vitejs/plugin-react-swc |
| 🧭 React Router | 7.13 |
| 📏 ESLint | 9.39 |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (port 3002)
npm run dev
```

Then open **http://localhost:3002** in your browser.

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
├── main.tsx                         # Router + route definitions
├── App.tsx                          # Layout shell (Nav + Outlet + Footer)
├── _global-components/              # Shared components
│   ├── Navbar/                      # Top navigation with NavLink
│   └── Footer/                      # Footer component
└── pages/
    ├── Home/                        # Landing page with category cards
    ├── Essentials/                  # 7 lessons + SubNav
    │   ├── _components/SubNav.tsx
    │   └── lessons/
    │       ├── ComponentsAndJsx/
    │       ├── PropsAndTypes/
    │       ├── ConditionalRendering/
    │       ├── ListsAndKeys/
    │       ├── SsrAndCsr/
    │       ├── WhyReact/
    │       └── WhyTypescript/
    ├── Hooks/                       # 6 lessons + SubNav
    │   ├── _components/SubNav.tsx
    │   └── lessons/
    │       ├── UseState/
    │       ├── UseEffect/
    │       ├── UseRef/
    │       ├── UseContext/
    │       ├── UseMemoCallback/
    │       └── CustomHooks/
    ├── Router/                      # 4 lessons + SubNav
    │   ├── _components/SubNav.tsx
    │   └── lessons/
    │       ├── DeclarativeRouting/
    │       ├── NestedRoutes/
    │       ├── NavigationAndLinks/
    │       └── RouteParams/
    └── Forms/                       # 3 lessons + SubNav
        ├── _components/SubNav.tsx
        └── lessons/
            ├── ControlledInputs/
            ├── MultiFieldForms/
            └── FormValidation/
```

Each lesson folder contains:
- `index.tsx` — The lesson component with demo logic
- `LessonName.module.css` — Scoped styles via CSS Modules

---

> 📚 Part of the [ViteReactDemo](../) workshop repository
