---
title: SQL Transactions
description: SQL Server transaction examples with commit, rollback, and try catch.
---

# SQL Transactions

A transaction groups SQL statements so they succeed or fail together.

## Basic Transaction

```sql
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 100
WHERE AccountId = 1;

UPDATE Accounts
SET Balance = Balance + 100
WHERE AccountId = 2;

COMMIT TRANSACTION;
```

## Roll Back A Transaction

```sql
BEGIN TRANSACTION;

DELETE FROM Orders
WHERE OrderId = 10;

ROLLBACK TRANSACTION;
```

## Transaction With TRY CATCH

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    UPDATE Accounts
    SET Balance = Balance - 100
    WHERE AccountId = 1;

    UPDATE Accounts
    SET Balance = Balance + 100
    WHERE AccountId = 2;

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;

    THROW;
END CATCH;
```

[Back to SQL Reference](./)
