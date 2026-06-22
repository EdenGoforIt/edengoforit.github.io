---
title: SQL Table-Valued Functions
description: SQL Server inline and multi-statement table-valued function examples.
---

# SQL Table-Valued Functions

A table-valued function returns a table.

Table-valued functions are useful when you want reusable query logic that can accept parameters.

## Inline Table-Valued Function

Inline table-valued functions return the result of one query.

```sql
CREATE FUNCTION dbo.GetOrdersByCustomer
(
    @CustomerId INT
)
RETURNS TABLE
AS
RETURN
(
    SELECT
        OrderId,
        CustomerId,
        OrderDate,
        Total
    FROM dbo.Orders
    WHERE CustomerId = @CustomerId
);
GO
```

## Use An Inline Table-Valued Function

```sql
SELECT *
FROM dbo.GetOrdersByCustomer(1);
```

## Use With APPLY

```sql
SELECT
    c.CustomerId,
    c.FirstName,
    c.LastName,
    o.OrderId,
    o.Total
FROM dbo.Customers AS c
CROSS APPLY dbo.GetOrdersByCustomer(c.CustomerId) AS o;
```

## Multi-Statement Table-Valued Function

Multi-statement table-valued functions build and return a table variable.

```sql
CREATE FUNCTION dbo.GetHighValueOrders
(
    @MinimumTotal DECIMAL(18,2)
)
RETURNS @Result TABLE
(
    OrderId INT,
    CustomerId INT,
    Total DECIMAL(18,2)
)
AS
BEGIN
    INSERT INTO @Result (OrderId, CustomerId, Total)
    SELECT OrderId, CustomerId, Total
    FROM dbo.Orders
    WHERE Total >= @MinimumTotal;

    RETURN;
END;
GO
```

## Drop A Table-Valued Function

```sql
DROP FUNCTION dbo.GetOrdersByCustomer;
```

[Back to SQL Reference](./)
