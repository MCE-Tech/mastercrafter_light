# Design Tokens

# All UI must be fully responsive.

Typography must use dynamic scaling (rem, clamp, vw).
The application must support:
- Mobile
- Tablet
- Laptop
- Desktop
- 4K Screens

Never use fixed px font sizes.
Never use fixed layout widths.
Always use flexible and scalable layout design.

## Font Scale
xs: clamp(0.75rem, 0.5vw, 0.875rem)
sm: clamp(0.875rem, 0.75vw, 1rem)
md: clamp(1rem, 1vw, 1.25rem)
lg: clamp(1.25rem, 1.5vw, 1.75rem)
xl: clamp(1.5rem, 2vw, 2.5rem)

## Spacing Scale
4px
8px
16px
24px
32px
48px
64px