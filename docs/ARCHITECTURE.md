# Architecture - STRIDE

## Stack
- Framework: Vite + React 19
- Styling: Tailwind CSS v4 via @tailwindcss/vite
- UI components: shadcn/ui
- Icons: lucide-react
- Assets: public/images/

## Structure
- src/components/ - UI components (Navbar, Hero, Benefits, FeaturedCollection, ProductCard, BrandStory)
- src/components/ui/ - shadcn/ui primitives
- src/data/products.js - static product data
- src/lib/utils.js - cn helper
- src/App.jsx - composes all sections
- src/index.css - global styles (Tailwind + tokens)
- index.html - entry point

## Data Flow
Static only. Components read from src/data/products.js. No API calls, no state management.

## Technical Decisions
- Keep components small (<=120 lines)
- Use Tailwind utility classes + shadcn/ui
- No routing (single landing page)
- No services/API layers
- Visual UI only
