# Travel Itinerary — Design System

> **Source of truth** for all UI decisions. Before adding or modifying any component, consult this document.

---

## 1. Color Palette

All colors use the **oklch** format (TailwindCSS v4 native). Tokens are defined as CSS custom properties in `src/app/globals.css` and mapped through the `@theme inline` block.

### Semantic Tokens

| Token                | Light           | Dark             | Usage                    |
| -------------------- | --------------- | ---------------- | ------------------------ |
| `background`         | White           | Near-black       | Page canvas              |
| `foreground`         | Near-black      | White            | Body text                |
| `primary`            | Rich blue       | Bright blue      | Buttons, links, CTAs     |
| `primary-foreground` | White           | White            | Text on primary          |
| `secondary`          | Zinc-50 surface | Zinc-800 surface | Cards, secondary actions |
| `muted`              | Zinc-50         | Zinc-800         | Disabled states          |
| `muted-foreground`   | Zinc-500        | Zinc-400         | Placeholder, captions    |
| `accent`             | Vivid purple    | Purple           | Highlights, badges       |
| `destructive`        | Red             | Light red        | Errors, danger actions   |
| `border`             | Zinc-200        | White/10%        | Borders, dividers        |
| `ring`               | Rich blue       | Bright blue      | Focus outlines           |

### Adding New Colors

1. Add a CSS custom property in `:root` and `.dark` inside `globals.css`.
2. Map it in the `@theme inline` block as `--color-<name>: var(--<name>)`.
3. Document it in this table.

---

## 2. Typography

### Font Stack

| Variable            | Font           | Usage             |
| ------------------- | -------------- | ----------------- |
| `--font-geist-sans` | **Geist**      | All UI text       |
| `--font-geist-mono` | **Geist Mono** | Code, data tables |

### Scale

Use Tailwind's default type scale. Recommended mappings:

| Element          | Class                                          | Size  |
| ---------------- | ---------------------------------------------- | ----- |
| Page title       | `text-4xl font-bold tracking-tight`            | 36 px |
| Section heading  | `text-2xl font-semibold`                       | 24 px |
| Sub-heading      | `text-xl font-medium`                          | 20 px |
| Body             | `text-base`                                    | 16 px |
| Small / caption  | `text-sm text-muted-foreground`                | 14 px |
| Overline / label | `text-xs font-medium uppercase tracking-wider` | 12 px |

---

## 3. Spacing

Use Tailwind's **4 px grid** (`gap-1` = 4 px, `gap-2` = 8 px, etc.).

| Context                    | Recommended                   |
| -------------------------- | ----------------------------- |
| Component internal padding | `p-4` (16 px)                 |
| Between related items      | `gap-2` – `gap-3` (8–12 px)   |
| Between sections           | `gap-8` – `gap-12` (32–48 px) |
| Page horizontal padding    | `px-4 sm:px-6 lg:px-8`        |

---

## 4. Border Radius

A scale is derived from the base `--radius` token (`0.625rem`):

| Class        | Value                |
| ------------ | -------------------- |
| `rounded-sm` | `--radius - 4px`     |
| `rounded-md` | `--radius - 2px`     |
| `rounded-lg` | `--radius` (default) |
| `rounded-xl` | `--radius + 4px`     |

---

## 5. Component Architecture

### Directory Rules

| Path                       | Contents                           | Added by                |
| -------------------------- | ---------------------------------- | ----------------------- |
| `src/components/ui/`       | Shadcn primitives                  | `npx shadcn add <name>` |
| `src/components/features/` | Composed, feature-level components | Developer               |
| `src/lib/`                 | Utilities (`cn()`, helpers)        | Developer               |

### Extending Shadcn Components

1. **Never modify files in `ui/` directly.** They are auto-generated and may be overwritten on update.
2. **Wrap, don't fork.** Create a component in `features/` that imports and extends the `ui/` primitive.
3. **Use `cn()` for conditional classes.** Import from `@/lib/utils`.
4. **Stick to design tokens.** Use `bg-primary`, `text-muted-foreground`, etc. — avoid arbitrary values.

### Example

```tsx
// src/components/features/branded-button.tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BrandedButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn("rounded-lg font-medium shadow-sm", className)}
      {...props}
    />
  );
}
```

---

## 6. Dark Mode

Dark mode is activated by adding the `dark` class to `<html>`. All tokens automatically switch via the `.dark` selector in `globals.css`.

- Use `@custom-variant dark (&:is(.dark *))` for Tailwind v4 dark variant support.
- Prefer semantic tokens (`bg-background`, `text-foreground`) over raw color values to ensure automatic dark mode compatibility.
