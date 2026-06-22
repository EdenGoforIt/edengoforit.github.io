---
title: SQL Stored Procedures
description: SQL Server stored procedure examples.
---

# SQL Stored Procedures

A stored procedure is a saved block of SQL that can accept parameters and perform actions.

Stored procedures are useful for application commands, reports, maintenance tasks, and reusable business operations.

## Create A Stored Procedure

```sql
CREATE PROCEDURE dbo.GetCustomerOrders
    @CustomerId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        o.OrderId,
        o.OrderDate,
        o.Total
    FROM dbo.Orders AS o
    WHERE o.CustomerId = @CustomerId
    ORDER BY o.OrderDate DESC;
END;
GO
```

## Execute A Stored Procedure

```sql
EXEC dbo.GetCustomerOrders @CustomerId = 1;
```

## Stored Procedure With Insert

```sql
CREATE PROCEDURE dbo.CreateCustomer
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100),
    @Email NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.Customers (FirstName, LastName, Email)
    VALUES (@FirstName, @LastName, @Email);

    SELECT SCOPE_IDENTITY() AS NewCustomerId;
END;
GO
```

## Change A Stored Procedure

```sql
ALTER PROCEDURE dbo.GetCustomerOrders
    @CustomerId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        o.OrderId,
        o.OrderDate,
        o.Total
    FROM dbo.Orders AS o
    WHERE o.CustomerId = @CustomerId
    ORDER BY o.OrderDate DESC;
END;
GO
```

## Drop A Stored Procedure

```sql
DROP PROCEDURE dbo.GetCustomerOrders;
```

[Back to SQL Reference](./)
