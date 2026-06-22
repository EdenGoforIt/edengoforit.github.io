---
title: SQL Data Types
description: Common SQL Server data types with examples.
---

# SQL Data Types

Data types define what kind of value a column can store.

## Common SQL Server Data Types

| Type | Use |
| --- | --- |
| `INT` | Whole numbers |
| `BIGINT` | Large whole numbers |
| `DECIMAL(18,2)` | Exact decimal numbers, usually money or measurements |
| `BIT` | Boolean-like value: `0`, `1`, or `NULL` |
| `CHAR(n)` | Fixed-length text |
| `VARCHAR(n)` | Variable-length non-Unicode text |
| `NCHAR(n)` | Fixed-length Unicode text |
| `NVARCHAR(n)` | Variable-length Unicode text |
| `DATE` | Date only |
| `TIME` | Time only |
| `DATETIME2` | Date and time |
| `UNIQUEIDENTIFIER` | GUID |
| `VARBINARY(MAX)` | Binary data |

## Example

```sql
CREATE TABLE Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductCode UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    Name NVARCHAR(200) NOT NULL,
    Price DECIMAL(18,2) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
```

## Useful Conversions

```sql
SELECT CAST('2026-06-23' AS DATE) AS OrderDate;

SELECT CONVERT(NVARCHAR(20), SYSUTCDATETIME(), 120) AS FormattedDate;

SELECT TRY_CAST('123' AS INT) AS SafeNumber;
```

[Back to SQL Reference](./)
