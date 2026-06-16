---
title: Architectural Patterns
description: Common software architecture patterns and when to use them.
---

# Architectural Patterns

Architectural patterns are reusable ways to solve recurring design problems. They are useful when they make trade-offs visible, not when they are applied as labels after the fact.

## Anti-Corruption Layer

An anti-corruption layer protects a new or clean model from a legacy system or external subsystem that uses different concepts.

Use it when:

- Two systems need to communicate but do not share the same domain language.
- A legacy model would pollute the newer application if used directly.
- Requests and responses need translation before crossing a boundary.

Example: a new system updates customer data, then an ACL service maps that data into the shape expected by an older system.

Source: [Microsoft Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)

## Circuit Breaker

The circuit breaker pattern prevents repeated calls to an operation that is likely to fail. Instead of waiting for every request to timeout, the application can fail fast and recover later.

Common states:

- Closed: calls are allowed.
- Open: calls fail immediately.
- Half-open: limited calls are allowed to test whether the dependency has recovered.

Use it when:

- Calling a remote service or shared resource may block expensive application resources.
- A dependency failure would cause cascading failures.
- Retry alone would make the system slower or less stable.

Source: [Microsoft Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)

## Other Patterns To Explore

- API Gateway
- Backend for Frontend
- C4 Model
- CQRS
- Data-driven testing
- Event Sourcing
- Gateway Routing
- Multi-tenancy
- Outbox Pattern
- Publish/Subscribe
- Retry
- Sidecar
- Strangler Fig
- Throttling

## Source Notes

- [Original Architecture notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/architectural-pattern.md)
