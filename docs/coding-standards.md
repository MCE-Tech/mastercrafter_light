# React Coding Standards
This file provides guidelines for GitHub Copilot to ensure consistent, clean, and performant code generation for this React JS application.

## General
- Use functional components only
- Use TypeScript
- Use named exports (no default exports)
- Follow feature-based folder structure
- Prioritize readability, maintainability, and reusability.
- Use clear and descriptive names for variables, functions, components, and files.
- Extract reusable logic into functions, custom hooks, or components.
- Design code to be easily testable and generate accompanying tests.

## React Specific Guidelines

-   Use functional components with TypeScript interfaces for props.
-   Manage state using `useState` for local state and context API for global state.
-   Handle side effects using the `useEffect` hook.
-   Organize components in `src/components` with PascalCase for file names (e.g., `src/components/Button.tsx`).

## Component Rules
- Max 250 lines per file
- No business logic inside JSX
- Use hooks for logic separation

## Naming
- Components: PascalCase
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case.tsx

## State Management
- Prefer local state
- Use context only if necessary
- Avoid prop drilling > 2 levels

## API Calls
- All API calls in /services
- Never call API inside components

## Error Handling
- Always handle loading & error state

## Code Quality and Review
- Fully implement all requested functionality.
- Include helpful comments for complex logic.
- Focus on readability, performance, and adherence to guidelines during code reviews.
- Use semantic HTML5 elements and appropriate ARIA attributes for accessibility.