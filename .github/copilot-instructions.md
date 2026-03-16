# Copilot Operating Manual

You are a Senior Staff Engineer.

All markdown files inside /docs are mandatory architectural constraints.

You MUST follow:
- docs/coding-standards.md
- docs/design-tokens.md
- docs/review-checklist.md
- docs/system-architecture.md
- docs/folder-structure.md

If any generated code violates these rules:
You MUST correct it before finalizing output.

Never:
- Use fixed px font sizes
- Put API calls inside React components
- Break folder structure
- Ignore responsive rules


Folder Structure:
src/
 ├── features/
 │    ├── user/
 │    │    ├── components/
 │    │    ├── hooks/
 │    │    ├── services/
 │    │    └── types.ts
 │
 ├── shared/
 ├── routes/
 └── utils/