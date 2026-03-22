# React Coding Standards

> All rules in this file are mandatory. Copilot MUST comply before outputting any code.

---

## Hard Rules — Check Before Every Output

**NEVER:**
- Use class components — functional components only
- Use default exports — named exports only
- Put API calls inside components — use `/services`
- Write business logic inside JSX
- Let a file exceed 250 lines
- Prop drill more than 2 levels deep

**ALWAYS:**
- Use TypeScript with explicit interfaces for all props
- Handle loading and error states for every async operation
- Use `kebab-case.tsx` for file names, `PascalCase` for component names
- Include ARIA attributes and semantic HTML5 elements
- Write tests alongside new components

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `UserProfileCard` |
| Files | kebab-case | `user-profile-card.tsx` |
| Variables / functions | camelCase | `fetchUserData` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Interfaces | PascalCase + `Props` suffix | `UserCardProps` |

---

## Component Rules
```tsx
// ✅ Correct — named export, typed props, no logic in JSX
interface UserCardProps {
  userId: string;
  onSelect: (id: string) => void;
}

export const UserCard = ({ userId, onSelect }: UserCardProps) => {
  const { user, isLoading, error } = useUser(userId); // logic in hook

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <article aria-label={`User ${user.name}`}>
      <h2>{user.name}</h2>
      <button onClick={() => onSelect(userId)}>Select</button>
    </article>
  );
};

// ❌ Wrong — default export, API call in component, no error state
export default function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/api/users/${userId}`).then(r => r.json()).then(setUser);
  }, [userId]);
  return <div>{user?.name}</div>;
}
```

---

## State Management
```tsx
// ✅ Local state for component-scoped data
const [isOpen, setIsOpen] = useState(false);

// ✅ Custom hook to encapsulate logic
const { user, isLoading, error } = useUser(userId);

// ✅ Context only for genuinely global state (auth, theme, locale)
const { currentUser } = useAuthContext();

// ❌ Never: prop drill more than 2 levels — lift to context or colocate
<GrandParent user={user}>
  <Parent user={user}>
    <Child user={user} /> {/* ← move user to context here */}
  </Parent>
</GrandParent>
```

---

## API Calls

All data fetching lives in `/services`. Components consume hooks, never raw fetch.
```tsx
// src/features/user/services/user.service.ts
export const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch user: ${res.status}`);
  return res.json();
};

// src/features/user/hooks/use-user.ts
export const useUser = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchUser(id)
      .then(setUser)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  return { user, isLoading, error };
};
```

---

## Error & Loading States

Every async operation MUST handle all three states:
```tsx
// ✅ Required pattern for any data-dependent component
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error.message} />;
if (!data) return null;

return <MyComponent data={data} />;
```

---

## File Size & Complexity

- Max **250 lines** per file — if approaching the limit, split into smaller components or extract hooks
- No business logic in JSX — move to a hook or utility function
- One component per file
```tsx
// ❌ Logic in JSX
<div>{items.filter(i => i.active).sort((a,b) => b.date - a.date).map(...)}</div>

// ✅ Logic extracted
const sortedActiveItems = useMemo(
  () => items.filter(i => i.active).sort((a, b) => b.date - a.date),
  [items]
);
<div>{sortedActiveItems.map(...)}</div>
```

---

## Accessibility

- Use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, `<main>`, `<button>`)
- Every interactive element needs an accessible label
- Images need `alt` text; decorative images use `alt=""`
```tsx
// ✅
<button aria-label="Close modal" onClick={onClose}>✕</button>
<img src={avatar} alt={`${user.name}'s profile photo`} />

// ❌
<div onClick={onClose}>✕</div>
<img src={avatar} />
```

---

## Testing

Every component gets a co-located test file:
```
src/features/user/components/
  user-card.tsx
  user-card.test.tsx   ← required
```

Tests must cover: render without crash, loading state, error state, and key user interactions.