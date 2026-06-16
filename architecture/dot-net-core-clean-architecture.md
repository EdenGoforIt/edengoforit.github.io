---
title: .NET Core Clean Architecture
description: Practical Clean Architecture notes for .NET Core applications.
---

# .NET Core Clean Architecture

.NET Clean Architecture usually combines dependency inversion, thin API controllers, application use cases, domain models, and infrastructure implementations.

## Dependency Inversion

Depend on abstractions instead of concrete implementations.

```text
Controller -> Application interface -> Infrastructure implementation
```

This keeps the application easier to test because dependencies can be mocked or replaced.

## Common Project Shape

```text
src/
  WebApi/
  Application/
  Domain/
  Infrastructure/
```

## Web API

The API project handles HTTP concerns:

- Routing
- Authentication and authorization
- Request binding
- Response formatting
- Calling application use cases

Keep controllers small. If a controller method starts making business decisions, move that behavior into the application layer.

## Application

The application project contains use cases and contracts:

- Commands
- Queries
- Validators
- DTOs
- Interfaces for persistence and external services

CQRS can be useful here when reads and writes have different shapes.

## Domain

The domain project contains the core business model:

- Entities
- Value objects
- Domain events
- Domain exceptions
- Business rules

This layer should not know about ASP.NET Core, Entity Framework Core, or external APIs.

## Infrastructure

The infrastructure project implements external details:

- Entity Framework Core persistence
- Identity providers
- Email services
- File storage
- Third-party clients

## Source Notes

- [Original .NET Core Clean Architecture notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/dot-net-core-clean-architecture.md)
