# 🌐 ViteSampleProject

> A simple personal website built with **Vite + React + TypeScript** — demonstrating real-world React patterns, routing, and form handling.

This project serves as a reference implementation that students can study to see how a complete React application is structured.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [📄 Pages](#-pages)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)

---

## ✨ Features

- ⚛️ **React 19** with functional components and hooks
- 🔷 **TypeScript** with strict mode enabled
- 🧭 **React Router v7** for declarative client-side routing
- 🎨 **CSS Modules** for component-scoped styling
- 🧩 **Barrel exports** for clean imports (`_global-components/`)
- 📱 **Responsive layout** with centered content (max-width 720px)
- ✅ **Form validation** on the Contact page
- 🔗 **NavLink active styling** for navigation highlighting

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 **Home** | `/` | Hero section with introduction and social media links (GitHub, LinkedIn, Twitter) |
| 👤 **About** | `/about` | Bio section with work experience history |
| 📬 **Contact** | `/contact` | Contact form with client-side validation and success state |

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

# Start the dev server (port 3000)
npm run dev
```

Then open **http://localhost:3000** in your browser.

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
├── App.module.css                   # Centered layout styles
├── index.css                        # Global styles
│
├── _global-components/              # Shared components (barrel-exported)
│   ├── index.ts                     # Root barrel export
│   ├── Navbar/
│   │   ├── Navigation.tsx           # NavLink with isActive styling
│   │   ├── Navigation.module.css
│   │   ├── navLinks.ts              # Route configuration
│   │   └── index.ts
│   └── Footer/
│       ├── Footer.tsx
│       ├── Footer.module.css
│       └── index.ts
│
└── pages/
    ├── Home/
    │   ├── index.tsx                # Hero + intro + Socials
    │   ├── Home.module.css
    │   └── _components/
    │       ├── Socials.tsx           # Social media links
    │       └── Socials.module.css
    ├── About/
    │   ├── index.tsx                # Bio + work experience
    │   ├── About.module.css
    │   └── _components/
    │       ├── Works.tsx             # Work history entries
    │       └── Works.module.css
    └── Contact/
        ├── index.tsx                # Form with validation
        └── Contact.module.css
```

---

> 🌐 Part of the [ViteReactDemo](../) workshop repository
