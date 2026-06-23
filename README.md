<div align="center">

# ⚡ Wincell

### Modern Scalable Frontend Architecture

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux" />
  <img src="https://img.shields.io/badge/TanStack-Query-FF4154" />
</p>

<p>
A modern, scalable and production-style React frontend built with clean architecture, state management, server-state handling, and reusable UI components.
</p>

</div>

---

## 🚀 Features

- ⚛️ React 18 + TypeScript
- ⚡ Vite for fast development
- 🎨 TailwindCSS utility-first styling
- 🧠 Redux Toolkit (global state)
- 🔄 TanStack Query (server state)
- 🔗 Axios API layer
- 🧩 Radix UI components
- 🧪 Form validation with Zod
- 🔔 Toast notifications
- 🧼 Clean scalable folder structure
- 📱 Fully modular architecture

---

## 🏗 Architecture

This project follows a **feature-oriented scalable frontend architecture**:

```
UI Layer           → components / pages
State Layer        → redux toolkit
Server State       → tanstack query
API Layer          → axios (api/)
Business Logic     → services
Shared Logic       → hooks / utils
Types              → types/
```

---

## 📂 Project Structure

```
wincell/
│
├── public/
│   └── images
│
├── src
│   ├── api              # API requests (Axios)
│   ├── components       # Reusable UI components
│   │   └── ui           # Radix + base components
│   ├── constants        # App constants
│   ├── hooks            # Custom hooks
│   ├── pages            # Application routes
│   ├── redux            # Redux store & slices
│   ├── types            # TypeScript types
│   ├── utils            # Helper functions
│   ├── lib              # Shared helpers
│   └── styles           # Global styles
```

---

## ⚙️ Installation

```bash
git clone <repo-url>

cd wincell
npm install
npm run dev
```

---

## 📦 Scripts

| Command | Description |
|--------|------------|
| `dev` | Start development server |
| `build` | Build production app |
| `lint` | Run ESLint |
| `preview` | Preview production build |

---

## 🧠 Tech Stack

### Core
- React
- TypeScript
- Vite

### State & Data
- Redux Toolkit
- TanStack Query
- Axios

### UI
- TailwindCSS
- Radix UI
- clsx + tailwind-merge

### Tools
- Zod
- React Router DOM
- React Hot Toast
- React Helmet Async

---

## ✨ Highlights

✔ Scalable folder architecture  
✔ Separation of concerns  
✔ Production-ready structure  
✔ Clean API layer  
✔ Reusable components system  
