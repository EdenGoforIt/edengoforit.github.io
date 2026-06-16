---
title: NoSQL Schema Design
description: Notes on NoSQL modeling, query patterns, and database types.
---

# NoSQL Schema Design

NoSQL schema design starts with how the data will be queried. Model around access patterns first, then choose indexes and document shapes that support those queries.

## When To Use NoSQL

- The schema changes often.
- Horizontal scaling is important.
- Query patterns are known and can be optimized.
- The application needs high write or read throughput.
- The data naturally fits documents, key-value pairs, wide columns, or graph relationships.

## Design Priorities

- Query patterns
- Index strategy
- Document size
- Data duplication
- Consistency requirements
- Sharding or partition keys

## Types Of NoSQL Databases

| Type | Good For |
| --- | --- |
| Document | JSON-like documents, flexible structure, nested data. |
| Key-value | Fast lookup by simple keys. |
| Wide-column | Large-scale datasets grouped by column families. |
| Graph | Highly connected data modeled as nodes and edges. |

## Source Notes

- [Original NoSQL schema notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/no-sql-schema.md)
