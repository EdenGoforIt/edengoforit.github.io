---
title: Security
description: Application security notes and OWASP Top 10 reference.
---

# Security

Security work is about reducing risk before a weakness becomes an incident. Use this page as a quick reference for common application security categories and the habits that reduce them.

## OWASP Top 10 2025

The OWASP Top 10 is an awareness document for the most critical web application security risks. The current released version is OWASP Top 10:2025.

| Rank | Risk | What To Watch For |
| --- | --- | --- |
| A01 | Broken Access Control | Users can access data or actions they should not be allowed to use. |
| A02 | Security Misconfiguration | Defaults, exposed diagnostics, permissive settings, or missing hardening create avoidable openings. |
| A03 | Software Supply Chain Failures | Dependencies, build systems, packages, or third-party services introduce untrusted or vulnerable code. |
| A04 | Cryptographic Failures | Sensitive data is exposed because encryption, hashing, key handling, or transport protection is weak. |
| A05 | Injection | Untrusted input is interpreted as commands, queries, expressions, or code. |
| A06 | Insecure Design | The system design misses abuse cases, trust boundaries, or security controls from the start. |
| A07 | Authentication Failures | Login, session, credential, or identity flows can be bypassed or abused. |
| A08 | Software or Data Integrity Failures | Code, updates, CI/CD pipelines, serialized data, or stored data can be tampered with. |
| A09 | Security Logging and Alerting Failures | Attacks are hard to detect, investigate, or respond to because useful events are missing or ignored. |
| A10 | Mishandling of Exceptional Conditions | Errors, edge cases, and unexpected states leak information or create unsafe behavior. |

## Secure Coding Checklist

- Enforce authorization on the server for every protected action and object.
- Keep production configuration minimal, hardened, and environment-specific.
- Pin, review, and update dependencies; remove packages that are not needed.
- Protect sensitive data in transit and at rest with current cryptographic practices.
- Use parameterized queries, safe encoders, and allowlists for untrusted input.
- Threat model important workflows before implementation.
- Use strong authentication, secure session handling, and safe password storage.
- Verify software and data integrity in deployment, build, and update paths.
- Log security-relevant events with enough context to investigate safely.
- Handle errors consistently without exposing stack traces, secrets, or internal details.

## Sources

- [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)

[Back to Home](../)
