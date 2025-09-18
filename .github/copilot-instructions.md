<!-- Copilot instructions for the expenses-front project -->
# Copilot instructions

These notes are targeted to AI coding agents (Copilot-style assistants) to help you be immediately productive in this React + Vite codebase.

## Quick facts
- Framework: React 19 + Vite
- Styling: Bootstrap 5 (see `src/main.jsx` imports and `package.json`)
- State: Lightweight Context providers for categories and expenses (`src/Context/CategoryContext.jsx`, `src/Context/ExpenseContext.jsx`).
- API: Backend assumed at http://localhost:8080 with endpoints:
  - GET/POST /category
  - GET /expense?initDate=...&endDate=...
  - POST /expense

## How to run (developer workflow)
- Install (from project root):
  - npm install
- Start dev server (hot reload):
  - npm run dev
- Build for production:
  - npm run build
- Lint:
  - npm run lint

Notes: package.json scripts are standard Vite commands. Use the running backend at port 8080 for end-to-end features; many hooks and contexts fetch from that host.

## Architecture & data flow (high level)
- Root mounts two Context providers in `src/main.jsx`: `ExpenseProvider` wraps `CategoryProvider` which wraps the app. Use `useExpenseContext()` and `useCategoryContext()` to access data and actions.
- Context responsibilities:
  - `CategoryContext` holds `categories`, `fetchCategories()`, and `saveCategory()` which call `http://localhost:8080/category` (GET/POST).
  - `ExpenseContext` holds `expenses`, `fetchExpenses(initDate,endDate)` and `fetchSaveExpenses(...)` which call `http://localhost:8080/expense` (GET/POST).
- UI components read from contexts directly. Example: `src/components/ExpenseTable/ExpenseTable.jsx` uses `useExpenseContext()` and renders `expenses.map(...)`.
- Routes: configured in `src/App.jsx` using `react-router-dom` with routes for `/`, `/categorias`, `/gastos` which render `CategoryInput` and `Expenses` respectively.

## Project-specific patterns & conventions
- File extensions: .jsx for React components. Keep using `.jsx` not `.js`.
- Contexts provide both data and side-effecting fetch/save functions. Prefer calling context-provided functions rather than using fetch directly from components.
- Localized strings: UI text is in Spanish (e.g., `Bienvenido al Dashboard`, alerts in contexts). Keep new UI copy consistent with Spanish where applicable.
- Default data shapes observed:
  - Category: { id, category }
  - Expense: { id, executeExpenseDate, amount, fixedExpense, resource, isDivisible, category: { id, category } }

## Examples you can follow when editing or extending code
- To add a new API call: prefer to add it to the appropriate context (e.g., new endpoint related to categories -> `CategoryContext.jsx`) so components can consume it via the context hook.
- To display expenses filtered by date: call `fetchExpenses(initDate,endDate)` on `ExpenseContext` and rely on the `expenses` state in `ExpenseTable.jsx`.
- When creating new components that need global data, use `useExpenseContext()` or `useCategoryContext()` instead of prop drilling.

## Debugging and quick checks
- If data is missing in the UI, verify:
  1. Backend service running on http://localhost:8080
  2. Open browser DevTools -> Network to inspect calls from context fetch functions (they are plain fetch calls).
- To quickly simulate data without backend, use the hook mocks in `src/hooks/*` (they include example static arrays) or temporarily set state in the providers.

## Files and locations to inspect first (high signal)
- `src/main.jsx` — root providers and app bootstrap.
- `src/Context/ExpenseContext.jsx`, `src/Context/CategoryContext.jsx` — core data & API interactions.
- `src/components/ExpenseTable/ExpenseTable.jsx` — example of consuming contexts and rendering lists.
- `src/components/ExpenseRegister/ExpenseRegister.jsx` — example of a form that calls `fetchSaveExpenses(...)`.
- `src/hooks/` — small local hooks with sample data useful for testing UI without backend.

## Constraints & assumptions surfaced from the code
- API host is hard-coded to `http://localhost:8080` inside contexts and hooks. If running backend on a different host, update these files or add an ENV-based configuration (not present today).
- Error handling is minimal: contexts log to console and use native alerts for user feedback. When adding features, follow the existing lightweight approach rather than introducing heavy abstractions unless requested.

## Helpful patterns for diffs and edits
- Keep changes minimal and respect existing Spanish UI strings.
- Add new shared logic to Context providers so UI components remain thin.
- Use existing CSS files (component-level) placed alongside components.

---
If anything here is unclear or you want more examples (e.g., how to add a new API call or implement env-based config), tell me which part to expand and I'll iterate.
