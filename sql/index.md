---
title: SQL Reference
description: Practical SQL commands, database objects, functions, views, stored procedures, and examples.
---

# SQL Reference

SQL is used to create, query, update, and manage relational databases.

This section uses mostly SQL Server / T-SQL examples, with general SQL commands where the syntax is widely shared.

## Default SQL Commands

### Create And Use A Database

```sql
CREATE DATABASE StoreDb;
GO

USE StoreDb;
GO
```

### Create A Table

```sql
CREATE TABLE Customers (
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
```

### Insert Data

```sql
INSERT INTO Customers (FirstName, LastName, Email)
VALUES ('Eden', 'Example', 'eden@example.com');
```

### Select Data

```sql
SELECT CustomerId, FirstName, LastName, Email
FROM Customers;
```

### Filter Data

```sql
SELECT CustomerId, FirstName, LastName
FROM Customers
WHERE LastName = 'Example';
```

### Sort Data

```sql
SELECT CustomerId, FirstName, LastName
FROM Customers
ORDER BY CreatedAt DESC;
```

### Update Data

```sql
UPDATE Customers
SET Email = 'new-email@example.com'
WHERE CustomerId = 1;
```

### Delete Data

```sql
DELETE FROM Customers
WHERE CustomerId = 1;
```

### Add A Column

```sql
ALTER TABLE Customers
ADD PhoneNumber NVARCHAR(50) NULL;
```

### Change A Column

```sql
ALTER TABLE Customers
ALTER COLUMN PhoneNumber NVARCHAR(100) NULL;
```

### Drop A Column

```sql
ALTER TABLE Customers
DROP COLUMN PhoneNumber;
```

### Drop A Table

```sql
DROP TABLE Customers;
```

### Count Rows

```sql
SELECT COUNT(*) AS TotalCustomers
FROM Customers;
```

### Group Rows

```sql
SELECT LastName, COUNT(*) AS Total
FROM Customers
GROUP BY LastName;
```

### Filter Groups

```sql
SELECT LastName, COUNT(*) AS Total
FROM Customers
GROUP BY LastName
HAVING COUNT(*) > 1;
```

## SQL Feature Pages

- [Data Types](./data-types.html)
- [Constraints](./constraints.html)
- [Joins](./joins.html)
- [Indexes](./indexes.html)
- [Views](./views.html)
- [Scalar Functions](./scalar-functions.html)
- [Table-Valued Functions](./table-functions.html)
- [Stored Procedures](./stored-procedures.html)
- [Transactions](./transactions.html)
- [Triggers](./triggers.html)

## Common Query Order

SQL is written in this order:

```sql
SELECT
FROM
JOIN
WHERE
GROUP BY
HAVING
ORDER BY
```

SQL is logically processed closer to this order:

```text
FROM
JOIN
WHERE
GROUP BY
HAVING
SELECT
ORDER BY
```

## Sources

- [Microsoft SQL Server Documentation](https://learn.microsoft.com/en-us/sql/sql-server/)
- [Transact-SQL Reference](https://learn.microsoft.com/en-us/sql/t-sql/language-reference/)

[Back to Home](../)
