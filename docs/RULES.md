# Agent Rules & Development Guidelines - STRIDE

## Core Principles
- UI only. No backend, APIs, database, authentication, cart, checkout, or business logic.
- Reuse existing Vite + React 19 + Tailwind CSS v4 + shadcn/ui + lucide-react setup.
- Keep code simple, readable, beginner-friendly.
- Match the reference design closely.
- One responsibility per component.

## File Size & Splitting
- HARD RULE: No source code file may exceed 120 lines.
- Split before exceeding limit.

## Architecture
- Components in src/components/
- shadcn/ui primitives in src/components/ui/
- Static data in src/data/
- Assets in public/images/
- Compose in src/App.jsx
- No routing, no state management library, no services layer.

## UI Standards
- Use Tailwind CSS classes and shadcn/ui components
- Use lucide-react for icons
- Responsive: mobile, tablet, desktop
- No horizontal overflow
- Buttons/nav are visual only

## Forbidden
- Backend/APIs/database/auth/cart/checkout/payments
- Next.js patterns
- Unnecessary dependencies/abstractions
