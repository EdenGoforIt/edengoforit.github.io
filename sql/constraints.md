---
title: SQL Constraints
description: Primary keys, foreign keys, unique constraints, checks, and defaults.
---

# SQL Constraints

Constraints protect the integrity of the data in a table.

## Primary Key

```sql
CREATE TABLE Customers (
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    Email NVARCHAR(255) NOT NULL
);
```

## Foreign Key

```sql
CREATE TABLE Orders (
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    OrderDate DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    CONSTRAINT FK_Orders_Customers
        FOREIGN KEY (CustomerId)
        REFERENCES Customers(CustomerId)
);
```

## Unique Constraint

```sql
ALTER TABLE Customers
ADD CONSTRAINT UQ_Customers_Email UNIQUE (Email);
```

## Check Constraint

```sql
ALTER TABLE Orders
ADD CONSTRAINT CK_Orders_OrderDate
CHECK (OrderDate <= SYSUTCDATETIME());
```

## Default Constraint

```sql
ALTER TABLE Customers
ADD CONSTRAINT DF_Customers_IsActive
DEFAULT 1 FOR IsActive;
```

[Back to SQL Reference](./)
