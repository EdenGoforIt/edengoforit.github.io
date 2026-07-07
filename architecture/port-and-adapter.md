---
title: Ports and Adapters
description: Notes on the Ports and Adapters pattern and how it differs from Clean Architecture.
---

# Ports and Adapters

Ports and Adapters, also called Hexagonal Architecture, keeps the application core independent from outside technologies such as web frameworks, databases, queues, file systems, and third-party APIs.

The core idea is simple: the application talks through ports, and adapters translate between those ports and the outside world.

```text
HTTP API      CLI       Message Consumer
  |            |              |
Inbound Adapter Inbound Adapter Inbound Adapter
  |            |              |
          Inbound Ports
              |
        Application Core
              |
          Outbound Ports
  |            |              |
Database   Email API     Payment Gateway
Outbound   Outbound      Outbound
Adapter    Adapter       Adapter
```

## Ports

A port is a boundary contract owned by the application.

Common types:

- Inbound ports: operations the application exposes, such as `CreateOrder`, `RegisterUser`, or `CalculateQuote`.
- Outbound ports: dependencies the application needs, such as `OrderRepository`, `EmailSender`, or `PaymentGateway`.

Ports describe what the application needs or offers without describing how the outside technology works.

## Adapters

An adapter connects a port to a real delivery mechanism or external dependency.

Examples:

- A REST controller calls an inbound application port.
- A message consumer calls the same use case from a queue message.
- An Entity Framework repository implements an outbound persistence port.
- A Stripe client implements an outbound payment port.
- A fake in-memory adapter supports tests.

Adapters are replaceable. The application core should not care whether an order came from HTTP, a background job, or a command line tool.

## Dependency Direction

Dependencies point toward the application core.

```text
Adapters -> Ports -> Application Core
```

The core owns the port interfaces. Infrastructure implements the outbound ports and calls the inbound ports.

This is dependency inversion in practice: business rules define the contracts, and technology details plug into them.

## When To Use It

Use Ports and Adapters when:

- The same use case may be triggered by multiple inputs.
- External systems are likely to change.
- Business logic needs strong test isolation.
- You want to keep framework, database, or vendor details out of the core.

Avoid overdoing it for very small applications where direct framework code is simpler and unlikely to change.

## How It Differs From Clean Architecture

Ports and Adapters and Clean Architecture are closely related. They both protect business rules from external details and use dependency inversion. The difference is mostly emphasis and vocabulary.

| Topic | Ports and Adapters | Clean Architecture |
| --- | --- | --- |
| Main metaphor | Application core surrounded by ports and adapters. | Concentric layers with dependencies pointing inward. |
| Primary focus | Boundaries between the application and the outside world. | Layering of enterprise rules, use cases, interfaces, and infrastructure. |
| Common vocabulary | Inbound port, outbound port, adapter, application core. | Entity, use case, interface adapter, framework, driver. |
| External systems | Treated as adapters plugged into ports. | Usually placed in outer infrastructure/framework layers. |
| Layer prescription | Less prescriptive about internal layers. | More explicit about domain, application, interface adapters, and infrastructure. |
| Testing emphasis | Swap real adapters for fake adapters. | Test inner layers independently from outer layers. |

## Practical Difference

In practice, Clean Architecture often uses Ports and Adapters inside its application and infrastructure boundaries.

For example, a .NET Clean Architecture solution might have:

```text
WebApi -> Application -> Domain
Infrastructure -> Application
```

The `Application` project defines an outbound port:

```csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task SaveAsync(Order order, CancellationToken cancellationToken);
}
```

The `Infrastructure` project provides the adapter:

```csharp
public sealed class EfOrderRepository : IOrderRepository
{
    private readonly AppDbContext _dbContext;

    public EfOrderRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return _dbContext.Orders.FindAsync(new object[] { id }, cancellationToken).AsTask();
    }

    public Task SaveAsync(Order order, CancellationToken cancellationToken)
    {
        _dbContext.Orders.Update(order);
        return _dbContext.SaveChangesAsync(cancellationToken);
    }
}
```

Clean Architecture describes the broader structure. Ports and Adapters describes the boundary mechanism.

## Quick Rule

Use this distinction:

- Clean Architecture answers: "What layers should the system have, and which direction should dependencies point?"
- Ports and Adapters answers: "How does the application core communicate with outside technologies without depending on them?"

## References

- [Alistair Cockburn: Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [The Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
