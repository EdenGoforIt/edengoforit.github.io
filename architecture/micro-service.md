---
title: Microservices
description: Notes on microservice architecture and when service boundaries help.
---

# Microservices

Microservices split a system into small services that can be developed, deployed, and scaled independently.

## Use Microservices When

- Different parts of the system need independent release cycles.
- Teams own clearly separated business capabilities.
- Services have different scaling or reliability needs.
- The domain boundaries are well understood.

## Be Careful When

- The team is small and deployment complexity would slow delivery.
- The domain boundaries are still unclear.
- Strong consistency is required across many operations.
- Observability, automation, and infrastructure maturity are low.

## Common Concerns

- Service boundaries
- API contracts
- Data ownership
- Distributed tracing
- Retry and timeout policies
- Event-driven communication
- Deployment automation
- Versioning

## Data Ownership

Each service should own its data. Sharing one database across services often recreates a monolith with extra network cost.

## Reference

- [.NET Microservices Architecture guide](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/)
- [Original Microservice notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/micro-service.md)
