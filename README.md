# Travel Itinerary

A production-ready Next.js application scaffolded with a cohesive design system, TailwindCSS v4, and Shadcn UI.

---

## Tech Stack

| Layer      | Technology                                                          |
| ---------- | ------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/) (App Router)                      |
| Language   | TypeScript                                                          |
| Styling    | [TailwindCSS v4](https://tailwindcss.com/)                          |
| UI Library | [Shadcn UI](https://ui.shadcn.com/) (New York style, CSS variables) |
| Font       | [Geist](https://vercel.com/font) (sans + mono)                      |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx        # Root layout, font loading, metadata
│   ├── page.tsx          # Landing page
│   └── globals.css       # Design tokens (CSS custom properties)
├── components/
│   ├── ui/               # Shadcn primitives (auto-generated)
│   └── features/         # Composed, domain-specific components
└── lib/
    └── utils.ts          # Shared utilities (cn, helpers)
```

| Directory              | Purpose                                       | Who writes it           |
| ---------------------- | --------------------------------------------- | ----------------------- |
| `components/ui/`       | Shadcn primitives                             | `npx shadcn add <name>` |
| `components/features/` | Feature components that compose UI primitives | Developer               |
| `lib/`                 | Utility functions                             | Developer               |

### Adding a Shadcn Component

```bash
npx shadcn add button
```

This places the component in `src/components/ui/button.tsx`. To customize it for a feature, create a wrapper in `src/components/features/`.

---

## Design System

👉 **[design-system.md](./design-system.md)** — the complete UI contract covering:

- Color palette & token reference
- Typography scale
- Spacing & radius conventions
- Rules for extending Shadcn components

**All contributors (human or AI) must follow this document when adding UI.**

---

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm start`     | Serve production build       |
| `npm run lint`  | Run ESLint                   |

---

## License

Private — all rights reserved.
