---
title: SQL Views
description: SQL Server view examples.
---

# SQL Views

A view is a saved query that can be used like a table.

Views are useful for simplifying complex queries, hiding columns, and exposing a stable read model.

## Create A View

```sql
CREATE VIEW dbo.vwCustomerOrders
AS
SELECT
    c.CustomerId,
    c.FirstName,
    c.LastName,
    o.OrderId,
    o.OrderDate,
    o.Total
FROM dbo.Customers AS c
INNER JOIN dbo.Orders AS o
    ON o.CustomerId = c.CustomerId;
GO
```

## Query A View

```sql
SELECT *
FROM dbo.vwCustomerOrders
WHERE Total > 100;
```

## Change A View

```sql
ALTER VIEW dbo.vwCustomerOrders
AS
SELECT
    c.CustomerId,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    o.OrderId,
    o.OrderDate,
    o.Total
FROM dbo.Customers AS c
INNER JOIN dbo.Orders AS o
    ON o.CustomerId = c.CustomerId;
GO
```

## Drop A View

```sql
DROP VIEW dbo.vwCustomerOrders;
```

[Back to SQL Reference](./)
