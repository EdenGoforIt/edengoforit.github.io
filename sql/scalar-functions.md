---
title: SQL Scalar Functions
description: SQL Server scalar function examples.
---

# SQL Scalar Functions

A scalar function returns one value.

Use scalar functions for reusable calculations or formatting logic. Be careful using scalar functions on large result sets because they can hurt performance when called row by row.

## Create A Scalar Function

```sql
CREATE FUNCTION dbo.GetFullName
(
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100)
)
RETURNS NVARCHAR(201)
AS
BEGIN
    RETURN CONCAT(@FirstName, ' ', @LastName);
END;
GO
```

## Use A Scalar Function

```sql
SELECT dbo.GetFullName(FirstName, LastName) AS FullName
FROM dbo.Customers;
```

## Scalar Function With Calculation

```sql
CREATE FUNCTION dbo.CalculateTax
(
    @Amount DECIMAL(18,2),
    @TaxRate DECIMAL(5,2)
)
RETURNS DECIMAL(18,2)
AS
BEGIN
    RETURN ROUND(@Amount * (@TaxRate / 100), 2);
END;
GO
```

```sql
SELECT dbo.CalculateTax(100.00, 15.00) AS TaxAmount;
```

## Change A Scalar Function

```sql
ALTER FUNCTION dbo.GetFullName
(
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100)
)
RETURNS NVARCHAR(201)
AS
BEGIN
    RETURN LTRIM(RTRIM(CONCAT(@FirstName, ' ', @LastName)));
END;
GO
```

## Drop A Scalar Function

```sql
DROP FUNCTION dbo.GetFullName;
```

[Back to SQL Reference](./)
