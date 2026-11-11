# Personal Diary App

A local-first personal diary web application built with React and Vite. Data is persisted securely and offline directly in the browser using IndexedDB.

## Tech Stack

- Core Framework: React 19, Vite
- Styling: Tailwind CSS v4 (@tailwindcss/vite)
- Font: Open Sans
- Icons: Phosphor Icons (@phosphor-icons/react)
- Rich Text Editor: Tiptap (@tiptap/react, @tiptap/starter-kit, @tiptap/pm)
- Animation: Motion (motion)
- Local Database: IndexedDB via Dexie.js (dexie, dexie-react-hooks)
- Package Manager: pnpm

## Folder Structure

Current project structure:

```
react_ck/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   └── Button.jsx
│   ├── temp/
│   │   └── button_showcase.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```
