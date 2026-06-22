---
title: SQL Triggers
description: SQL Server trigger examples.
---

# SQL Triggers

A trigger runs automatically when a table event happens, such as `INSERT`, `UPDATE`, or `DELETE`.

Use triggers carefully. They can be useful for auditing, but hidden side effects can make debugging harder.

## Audit Table

```sql
CREATE TABLE CustomerAudit (
    AuditId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    ActionName NVARCHAR(20) NOT NULL,
    ChangedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
```

## Insert Trigger

```sql
CREATE TRIGGER dbo.trgCustomersAfterInsert
ON dbo.Customers
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.CustomerAudit (CustomerId, ActionName)
    SELECT CustomerId, 'INSERT'
    FROM inserted;
END;
GO
```

## Update Trigger

```sql
CREATE TRIGGER dbo.trgCustomersAfterUpdate
ON dbo.Customers
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.CustomerAudit (CustomerId, ActionName)
    SELECT CustomerId, 'UPDATE'
    FROM inserted;
END;
GO
```

## Delete Trigger

```sql
CREATE TRIGGER dbo.trgCustomersAfterDelete
ON dbo.Customers
AFTER DELETE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.CustomerAudit (CustomerId, ActionName)
    SELECT CustomerId, 'DELETE'
    FROM deleted;
END;
GO
```

## Drop A Trigger

```sql
DROP TRIGGER dbo.trgCustomersAfterInsert;
```

[Back to SQL Reference](./)
