---
title: RESTful API Design
description: Notes on RESTful API concepts including data shaping and HATEOAS.
---

# RESTful API Design

RESTful APIs model the system as resources and use HTTP methods to operate on those resources.

## Resource Naming

Use nouns for resources:

```text
GET /customers
GET /customers/42
POST /customers
PUT /customers/42
DELETE /customers/42
```

## Data Shaping

Data shaping lets clients control which fields are returned.

Example:

```text
GET /customers/42?fields=id,name,email
```

Use it when different clients need different views of the same resource and over-fetching would be wasteful.

## HATEOAS

HATEOAS means Hypermedia as the Engine of Application State. The API response includes links that help the client discover valid next actions.

Example:

```json
{
  "id": 42,
  "name": "Ada Lovelace",
  "links": [
    { "rel": "self", "href": "/customers/42" },
    { "rel": "orders", "href": "/customers/42/orders" }
  ]
}
```

## Practical Checklist

- Use consistent resource names.
- Return meaningful status codes.
- Support filtering, sorting, and pagination for collections.
- Version APIs deliberately.
- Keep error responses consistent.
- Document request and response examples.

## Source Notes

- [Original RESTful API notes](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Architecture/rest-ful-api.md)
