---
title: SQL Joins
description: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, and CROSS JOIN examples.
---

# SQL Joins

Joins combine rows from multiple tables.

## Sample Tables

```sql
CREATE TABLE Customers (
    CustomerId INT PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    OrderId INT PRIMARY KEY,
    CustomerId INT NOT NULL,
    Total DECIMAL(18,2) NOT NULL
);
```

## Inner Join

Returns only matching rows.

```sql
SELECT c.Name, o.OrderId, o.Total
FROM Customers AS c
INNER JOIN Orders AS o
    ON o.CustomerId = c.CustomerId;
```

## Left Join

Returns all rows from the left table and matching rows from the right table.

```sql
SELECT c.Name, o.OrderId, o.Total
FROM Customers AS c
LEFT JOIN Orders AS o
    ON o.CustomerId = c.CustomerId;
```

## Right Join

Returns all rows from the right table and matching rows from the left table.

```sql
SELECT c.Name, o.OrderId, o.Total
FROM Customers AS c
RIGHT JOIN Orders AS o
    ON o.CustomerId = c.CustomerId;
```

## Full Join

Returns rows when there is a match in either table.

```sql
SELECT c.Name, o.OrderId, o.Total
FROM Customers AS c
FULL OUTER JOIN Orders AS o
    ON o.CustomerId = c.CustomerId;
```

## Cross Join

Returns every combination of rows.

```sql
SELECT c.Name, p.PaymentMethod
FROM Customers AS c
CROSS JOIN PaymentMethods AS p;
```

[Back to SQL Reference](./)
