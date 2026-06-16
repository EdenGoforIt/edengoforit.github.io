---
title: N-Tier Architecture
description: Notes on layered N-tier architecture.
---

# N-Tier Architecture

N-tier architecture separates an application into layers with clear responsibilities.

## Common Layers

- Presentation: user interface or API endpoints.
- Business: application rules and workflows.
- Data access: persistence logic and database communication.
- Database: stored data and database-specific behavior.

## Strengths

- Easy to understand for many teams.
- Clear separation of common responsibilities.
- Works well for straightforward business applications.
- Can be deployed simply as one application or split by tier when needed.

## Risks

- Business logic can leak into controllers or data access code.
- Layers can become pass-through wrappers with little value.
- Changes may require touching every layer.
- The domain model can become weak if everything revolves around database tables.

## Reference

- [Software Architecture Patterns: Layered Architecture](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)
- [Original N-Tier notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/n-tier.md)
