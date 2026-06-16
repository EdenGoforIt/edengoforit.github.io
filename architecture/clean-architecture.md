---
title: Clean Architecture
description: Notes on Clean Architecture, dependency direction, and application layering.
---

# Clean Architecture

Clean Architecture organizes code so business rules stay independent from UI, databases, frameworks, and external services.

The core idea is simple: dependencies should point inward. Outer layers can depend on inner layers, but the domain should not depend on infrastructure details.

## Typical Layers

```text
Presentation
Application
Domain
Infrastructure
```

## Domain Layer

The domain layer contains enterprise-wide rules and concepts.

Common contents:

- Entities
- Value objects
- Domain services
- Enumerations
- Domain exceptions
- Business invariants

Keep this layer clean. Avoid framework attributes, persistence concerns, and controller logic here.

## Application Layer

The application layer coordinates use cases.

Common contents:

- Commands and queries
- Interfaces for infrastructure dependencies
- Validation
- Mapping
- Application models
- Use case orchestration

Controllers should stay thin. They should call application behavior instead of owning business logic.

## Infrastructure Layer

Infrastructure contains external concerns.

Examples:

- Persistence
- Identity
- File systems
- Email providers
- External APIs

With Entity Framework Core, `DbContext` already behaves like a unit of work and `DbSet` behaves like a repository. Add repository abstractions only when they reduce real coupling or simplify testing.

## Why It Matters

Clean Architecture is valuable because software changes. A system with a stable core is easier to test, easier to reason about, and less painful to adapt when requirements move.

## References

- [The Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Jason Taylor CleanArchitecture example](https://github.com/jasontaylordev/CleanArchitecture)
- [Original Clean Architecture notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/clean-architecture.md)
