# PR Review Checklist

> Copilot MUST verify every item in this checklist before finalising any code output.
> If any item fails, correct the violation silently before responding.

---

## Pre-Output Check — Run Before Every Code Response

- [ ] Target file confirmed against `Index.tsd`
- [ ] All constraint docs consulted (`coding-standards.md`, `design-tokens.md`, `folder-structure.md`, `system-architecture.md`)
- [ ] No rules violated from any `/docs` file

---

## Architecture

- [ ] Feature code lives inside `src/features/<domain>/` — not in `shared/` unless truly reusable
- [ ] No circular imports between features
- [ ] Follows layered structure: `component → hook → service`
```
✅ Component calls useUser() hook
   Hook calls fetchUser() from user.service.ts
   
❌ Component calls fetchUser() directly
❌ Service imports from a component
```

---

## Component Quality

- [ ] Functional component with named export — no default exports, no class components
- [ ] Props typed with an explicit TypeScript interface
- [ ] File is under 250 lines — if over, split into smaller components or extract hooks
- [ ] No business logic inside JSX — extracted to a hook or `useMemo`/`useCallback`
- [ ] No API calls inside the component — all fetching in `/services`
```tsx
// ✅ Pass
export const UserCard = ({ userId }: UserCardProps) => {
  const { user, isLoading, error } = useUser(userId);
  const displayName = useMemo(() => formatName(user), [user]);
  ...
};

// ❌ Fail — default export, fetch in component, logic in JSX
export default function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => { fetch(`/api/users/${userId}`)... }, [userId]);
  return <div>{user?.firstName + ' ' + user?.lastName}</div>;
}
```

---

## TypeScript

- [ ] No use of `any` — use proper types or `unknown` with a type guard
- [ ] All props interfaces defined and named `<ComponentName>Props`
- [ ] API response shapes typed — no untyped `fetch` returns
- [ ] No `@ts-ignore` or `@ts-expect-error` without an explanatory comment
```tsx
// ✅ Pass
interface User { id: string; name: string; }
const fetchUser = async (id: string): Promise<User> => { ... };

// ❌ Fail
const fetchUser = async (id: any): Promise<any> => { ... };
```

---

## State Management

- [ ] Local state used for component-scoped data
- [ ] Context used only for genuinely global state (auth, theme, locale)
- [ ] Prop drilling does not exceed 2 levels — lift to context or colocate if deeper
- [ ] No redundant state — derived values use `useMemo`, not separate `useState`
```tsx
// ✅ Derived value — no extra state
const sortedItems = useMemo(() => [...items].sort(...), [items]);

// ❌ Redundant state
const [sortedItems, setSortedItems] = useState([]);
useEffect(() => setSortedItems([...items].sort(...)), [items]);
```

---

## Error & Loading Handling

- [ ] Every async operation handles all three states: loading, error, and data
- [ ] Error messages are user-readable — no raw `.message` from server errors exposed
- [ ] Empty/null data handled explicitly — no silent blank renders
```tsx
// ✅ Pass — all states handled
if (isLoading) return <LoadingSpinner />;
if (error)     return <ErrorMessage message={error.message} />;
if (!data)     return null;
return <MyComponent data={data} />;

// ❌ Fail — no loading or error state
return <div>{data?.name}</div>;
```

---

## Responsive Design & Design Tokens

- [ ] No fixed `px` font sizes — using `--font-size-*` tokens from `design-tokens.md`
- [ ] No fixed layout widths — using `%`, `fr`, `clamp()`, `min()`, or `max()`
- [ ] Spacing uses `--space-*` tokens — no magic numbers
- [ ] Layout works across all five breakpoints: mobile, tablet, laptop, desktop, 4K
```tsx
// ✅ Pass
fontSize: 'var(--font-size-md)'
padding:  'var(--space-3)'
width:    '100%'

// ❌ Fail
fontSize: '16px'
padding:  '16px'
width:    '1200px'
```

---

## Naming & File Conventions

- [ ] Component name: `PascalCase`
- [ ] File name: `kebab-case.tsx`
- [ ] Variables and functions: `camelCase`
- [ ] Constants: `UPPER_SNAKE_CASE`
- [ ] Props interface: `<ComponentName>Props`

---

## Accessibility

- [ ] Semantic HTML5 elements used (`<button>`, `<nav>`, `<main>`, `<article>`, `<section>`)
- [ ] Every interactive element has an accessible label (`aria-label` or visible text)
- [ ] Images have `alt` text — decorative images use `alt=""`
- [ ] No click handlers on non-interactive elements (`<div>`, `<span>`)
```tsx
// ✅ Pass
<button aria-label="Close modal" onClick={onClose}>✕</button>
<img src={avatar} alt={`${user.name}'s profile photo`} />

// ❌ Fail
<div onClick={onClose}>✕</div>
<img src={avatar} />
```

---

## Security

- [ ] No secrets, tokens, or credentials in source code or `.env` committed to repo
- [ ] User input is never rendered as raw HTML — no `dangerouslySetInnerHTML` without sanitisation
- [ ] Sensitive data (tokens, PII) not logged to console

---

## Testing

- [ ] Co-located test file exists: `<component-name>.test.tsx`
- [ ] Tests cover: renders without crash, loading state, error state, key interactions
- [ ] No business logic left untested in hooks or services
```
src/features/user/components/
  user-card.tsx
  user-card.test.tsx  ← required for every component
```