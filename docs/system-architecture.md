# System Architecture

> Copilot MUST follow all layer rules and data flow constraints below.
> Violating a layer boundary is never acceptable — correct before outputting.

---

## Stack

| Layer | Technology | Responsibility |
|---|---|---|
| Frontend | React (SPA) + TypeScript | UI rendering, user interaction, state |
| Backend | Spring Boot (REST) | Business logic, validation, orchestration |
| Database | MySQL | Persistence |
| Hosting | AWS | Infrastructure |

---

## System Data Flow
```
User Interaction
  → React Component          (renders UI, delegates to hooks)
  → Custom Hook              (manages state, calls service)
  → /services (fetch/axios)  (constructs and sends HTTP request)
  → Spring Boot Controller   (receives request, validates input)
  → Spring Boot Service      (executes business logic)
  → Repository               (queries MySQL via JPA)
  → Response back up the chain
```

**Every layer only talks to the layer directly adjacent to it.**
A component never calls a repository. A hook never constructs SQL.

---

## Frontend Architecture

### Layer Responsibilities

| Layer | Allowed | Never |
|---|---|---|
| `components/` | Render UI, delegate to hooks | Fetch data, contain business logic, call `/services` directly |
| `hooks/` | Manage state, call services, handle async | Render JSX, import from `components/` |
| `services/` | HTTP requests, request/response shaping | Import from hooks or components, manage state |
| `routes/` | Route definitions, lazy loading | Business logic, direct API calls |
| `shared/` | Reusable UI + utilities used across features | Feature-specific logic |

### Layer Dependency Rules
```
✅ Allowed directions
components/ → hooks/ → services/ → (HTTP) → Backend

✅ Shared imports
Any layer → shared/

❌ Never
components/ → services/      (skip the hook layer)
services/   → hooks/         (reverse direction)
features/a/ → features/b/    (cross-feature imports — use shared/ instead)
hooks/      → components/    (reverse direction)
```

### Frontend Folder Map
```
src/
├── features/
│   └── <domain>/
│       ├── components/    ← UI only
│       ├── hooks/         ← state + async logic
│       ├── services/      ← all HTTP calls
│       └── types.ts       ← domain types and API response shapes
├── shared/                ← cross-feature components and utilities
├── routes/                ← route definitions
└── utils/                 ← pure functions, no side effects
```

> See `folder-structure.md` for full rules. See `coding-standards.md` for component and hook constraints.

---

## Backend Architecture

### Layer Responsibilities

| Layer | Allowed | Never |
|---|---|---|
| `Controller` | Receive HTTP request, validate input shape, delegate to service, return response | Business logic, direct DB access, data transformation |
| `Service` | Business logic, orchestration, calling repositories | HTTP concerns, direct SQL, mapping to/from DTO |
| `Repository` | JPA queries, DB access | Business logic, calling other services |
| `DTO` | Data shapes for request/response | Business logic, JPA annotations |
| `Entity` | JPA-mapped DB structure | Business logic, serving as API response directly |
| `Mapper` | Convert Entity ↔ DTO | Any logic beyond field mapping |

### Backend Layer Rules
```java
// ✅ Controller — thin, delegates immediately
@PostMapping("/users")
public ResponseEntity<UserDTO> createUser(@Valid @RequestBody CreateUserRequest req) {
    return ResponseEntity.ok(userService.createUser(req));
}

// ❌ Never — business logic in controller
@PostMapping("/users")
public ResponseEntity<UserDTO> createUser(@RequestBody CreateUserRequest req) {
    if (userRepository.existsByEmail(req.getEmail())) { // ← belongs in service
        throw new ConflictException("Email taken");
    }
    ...
}
```
```java
// ✅ Service — business logic, uses mapper to return DTO
public UserDTO createUser(CreateUserRequest req) {
    User user = userMapper.toEntity(req);
    return userMapper.toDTO(userRepository.save(user));
}

// ❌ Never — entity returned directly from service (leaks DB shape to API)
public User createUser(CreateUserRequest req) { ... }
```

---

## Frontend↔Backend Contract

### Base URL
```ts
// src/shared/config/api.config.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// e.g. http://localhost:8080/api  (dev)
//      https://api.myapp.com/api  (prod)
```

**Never hardcode URLs in services.** Always use `API_BASE_URL`.

### Request Shape
```ts
// ✅ Every service call uses the base URL and sets Content-Type
const res = await fetch(`${API_BASE_URL}/users/${id}`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
  },
});
```

### Standard API Error Shape

All Spring Boot errors return this shape — frontend services MUST handle it:
```ts
// Backend error response shape
interface ApiError {
  status:    number;   // HTTP status code
  error:     string;   // e.g. "Not Found"
  message:   string;   // human-readable detail
  timestamp: string;   // ISO 8601
  path:      string;   // request path
}
```
```ts
// ✅ Service-level error handling
const res = await fetch(`${API_BASE_URL}/users/${id}`);
if (!res.ok) {
  const err: ApiError = await res.json();
  throw new Error(err.message);
}
return res.json() as Promise<UserDTO>;
```

### HTTP Method Conventions

| Operation | Method | Example |
|---|---|---|
| Fetch single | `GET` | `GET /api/users/:id` |
| Fetch list | `GET` | `GET /api/users?page=0&size=20` |
| Create | `POST` | `POST /api/users` |
| Full replace | `PUT` | `PUT /api/users/:id` |
| Partial update | `PATCH` | `PATCH /api/users/:id` |
| Delete | `DELETE` | `DELETE /api/users/:id` |

---

## Environment Variables
```bash
# .env.development
VITE_API_BASE_URL=http://localhost:8080/api

# .env.production
VITE_API_BASE_URL=https://api.myapp.com/api
```

**Never commit `.env.production` to the repository.**
**Never hardcode secrets, tokens, or credentials anywhere in source.**