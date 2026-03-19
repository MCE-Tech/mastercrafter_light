# Design Tokens

> All rules in this file are mandatory. Copilot MUST use these tokens for every style decision.
> Never hardcode font sizes, spacing, colors, or layout widths.

---

## Hard Rules — Check Before Every Output

**NEVER:**
- Use fixed `px` font sizes — use `--font-size-*` tokens
- Use fixed layout widths — use `%`, `fr`, `min()`, `max()`, `clamp()`
- Use magic numbers for spacing — use `--space-*` tokens
- Write breakpoint-specific font sizes — `clamp()` handles scaling automatically

**ALWAYS:**
- Use CSS custom properties from this file for all typography and spacing
- Design mobile-first — base styles target mobile, `min-width` queries scale up
- Use `rem` and `clamp()` for all sizing
- Test across all five breakpoints before finalising

---

## Breakpoints
```css
/* Mobile first — apply base styles at mobile, override upward */
--bp-mobile:  320px;
--bp-tablet:  768px;
--bp-laptop:  1024px;
--bp-desktop: 1440px;
--bp-4k:      2560px;
```
```tsx
// ✅ Mobile-first media queries
const styles = {
  container: `
    width: 100%;                          /* mobile */
    @media (min-width: 768px)  { ... }   /* tablet */
    @media (min-width: 1024px) { ... }   /* laptop */
    @media (min-width: 1440px) { ... }   /* desktop */
    @media (min-width: 2560px) { ... }   /* 4K */
  `
}

// ❌ Never fixed widths
width: 1200px;
width: 960px;
```

---

## Typography Tokens

All font sizes use `clamp(min, preferred, max)` — they scale automatically across all breakpoints.
```css
:root {
  --font-size-xs: clamp(0.75rem,  0.5vw,  0.875rem);  /* ~12–14px */
  --font-size-sm: clamp(0.875rem, 0.75vw, 1rem);       /* ~14–16px */
  --font-size-md: clamp(1rem,     1vw,    1.25rem);    /* ~16–20px  ← body default */
  --font-size-lg: clamp(1.25rem,  1.5vw,  1.75rem);   /* ~20–28px */
  --font-size-xl: clamp(1.5rem,   2vw,    2.5rem);    /* ~24–40px */
}
```
```tsx
// ✅ Correct — using token
<p style={{ fontSize: 'var(--font-size-md)' }}>Body text</p>
<h1 style={{ fontSize: 'var(--font-size-xl)' }}>Page title</h1>

// ❌ Wrong — fixed px
<p style={{ fontSize: '16px' }}>Body text</p>
<h1 style={{ fontSize: '32px' }}>Page title</h1>
```

### Semantic type roles

| Role | Token | Usage |
|---|---|---|
| Display / hero | `--font-size-xl` | Page titles, hero headings |
| Section heading | `--font-size-lg` | `<h2>`, card titles |
| Body | `--font-size-md` | Default paragraph text |
| Label / caption | `--font-size-sm` | Form labels, helper text |
| Fine print | `--font-size-xs` | Legal text, timestamps |

---

## Spacing Tokens
```css
:root {
  --space-1:  4px;   /* tight — icon gaps, inline nudges */
  --space-2:  8px;   /* compact — between related elements */
  --space-3: 16px;   /* default — component internal padding */
  --space-4: 24px;   /* comfortable — between components */
  --space-5: 32px;   /* section gap — between content blocks */
  --space-6: 48px;   /* loose — section breathing room */
  --space-7: 64px;   /* page-level — major layout gaps */
}
```
```tsx
// ✅ Correct — using token
<div style={{ padding: 'var(--space-3)', gap: 'var(--space-2)' }}>

// ❌ Wrong — magic numbers
<div style={{ padding: '16px', gap: '8px' }}>
```

### Spacing usage guide

| Token | Value | Use for |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gap, tight inline nudge |
| `--space-2` | 8px | Stacked related items, input padding |
| `--space-3` | 16px | Component internal padding (default) |
| `--space-4` | 24px | Between sibling components |
| `--space-5` | 32px | Between content sections |
| `--space-6` | 48px | Major section gaps |
| `--space-7` | 64px | Page-level layout gaps |

---

## Layout Rules
```tsx
// ✅ Fluid container — scales across all breakpoints
<div style={{
  width: '100%',
  maxWidth: 'var(--bp-desktop)',
  padding: '0 var(--space-3)',
  margin: '0 auto',
}} />

// ✅ Responsive grid — auto-fits columns without media queries
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 'var(--space-4)',
}} />

// ✅ Flexible stack
<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
}} />

// ❌ Fixed widths — breaks at non-targeted viewport sizes
<div style={{ width: '1200px' }} />
<div style={{ width: '960px', margin: '0 auto' }} />
```

---

## Tailwind Mapping (if used)

If the project uses Tailwind, map tokens to the closest utility:

| Token | Tailwind class |
|---|---|
| `--font-size-xs` | `text-xs` |
| `--font-size-sm` | `text-sm` |
| `--font-size-md` | `text-base` |
| `--font-size-lg` | `text-lg` / `text-xl` |
| `--font-size-xl` | `text-2xl` / `text-4xl` |
| `--space-2` | `p-2` / `gap-2` |
| `--space-3` | `p-4` / `gap-4` |
| `--space-4` | `p-6` / `gap-6` |

> Prefer CSS custom properties over Tailwind for anything responsive — `clamp()` eliminates breakpoint-specific font overrides entirely.