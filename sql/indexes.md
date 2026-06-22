---
title: SQL Indexes
description: SQL Server index examples and when to use them.
---

# SQL Indexes

Indexes help SQL Server find rows faster. They can improve reads, but they add overhead to inserts, updates, and deletes.

## Create A Nonclustered Index

```sql
CREATE INDEX IX_Customers_Email
ON Customers (Email);
```

## Create A Unique Index

```sql
CREATE UNIQUE INDEX UX_Customers_Email
ON Customers (Email);
```

## Create A Composite Index

```sql
CREATE INDEX IX_Orders_CustomerId_OrderDate
ON Orders (CustomerId, OrderDate DESC);
```

## Create An Index With Included Columns

```sql
CREATE INDEX IX_Orders_CustomerId
ON Orders (CustomerId)
INCLUDE (OrderDate, Total);
```

## Drop An Index

```sql
DROP INDEX IX_Customers_Email
ON Customers;
```

## When To Use An Index

- Columns used often in `WHERE`
- Columns used often in `JOIN`
- Columns used often in `ORDER BY`
- Columns that are selective, meaning they narrow results well

[Back to SQL Reference](./)
