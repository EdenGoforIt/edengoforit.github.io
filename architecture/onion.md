---
title: Onion Architecture
description: Notes on Onion Architecture and domain-centered layering.
---

# Onion Architecture

Onion Architecture places the domain model at the center of the application. Infrastructure and UI sit on the outside.

## Dependency Direction

```text
UI / Infrastructure
Application Services
Domain Services
Domain Model
```

Dependencies point inward. The database, web framework, and external services depend on the application core through abstractions.

## Why Use It

- Protects the domain from infrastructure details.
- Makes business rules easier to test.
- Keeps external technology choices replaceable.
- Encourages explicit boundaries between layers.

## Compared With Clean Architecture

Onion Architecture and Clean Architecture are closely related. Both protect the domain and enforce inward dependencies. Clean Architecture often describes more explicit use case boundaries, while Onion Architecture emphasizes the domain-centered layering shape.

## Reference

- [The Onion Architecture by Jeffrey Palermo](https://jeffreypalermo.com/2008/08/the-onion-architecture-part-3/)
- [Original Onion notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/onion.md)
