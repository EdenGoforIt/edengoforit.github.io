---
title: Conventional Commit
description: A practical guide to writing consistent commit messages.
---

# Conventional Commit

Conventional Commits are a simple format for commit messages. They make history easier to read and can help tools generate changelogs, calculate semantic versions, and understand what kind of change was made.

## Basic Format

```text
<type>(optional-scope): <description>

optional body

optional footer
```

Examples:

```text
feat(auth): add login page
fix(api): handle missing user profile
docs(git): add conventional commit guide
refactor(ui): simplify navigation layout
test(order): add checkout validation tests
```

## Common Types

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation-only changes.
- `style`: Formatting changes that do not affect behavior.
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `perf`: Performance improvements.
- `test`: Adding or updating tests.
- `build`: Build system or dependency changes.
- `ci`: Continuous integration changes.
- `chore`: Maintenance work that does not change app behavior.
- `revert`: Reverts a previous commit.

## Scope

The scope explains the area affected by the change.

```text
feat(blog): add post listing page
fix(git): correct branch strategy example
docs(readme): update project purpose
```

Good scopes are usually short and practical:

- `api`
- `auth`
- `blog`
- `git`
- `ui`
- `deps`
- `config`

## Description

The description should be short, clear, and written in the imperative mood.

Good:

```text
fix(nav): keep sidebar visible while scrolling
```

Avoid:

```text
fixed nav issue
changes to sidebar
I updated the sidebar
```

## Body

Use the body when the commit needs more context.

```text
fix(nav): keep sidebar visible while scrolling

The sidebar was difficult to use on long documentation pages.
This keeps the navigation available while reading.
```

## Footer

Use the footer for issue references or breaking changes.

```text
feat(api): rename user response field

BREAKING CHANGE: `username` is now returned as `displayName`.
```

Issue reference example:

```text
fix(auth): prevent empty password submission

Closes #42
```

## Breaking Changes

A breaking change can be marked with `!` after the type or scope.

```text
feat(api)!: change user profile response
```

You can also use a footer:

```text
feat(api): change user profile response

BREAKING CHANGE: profile responses now use `displayName` instead of `username`.
```

## Quick Decision Guide

- Use `feat` when users get a new capability.
- Use `fix` when incorrect behavior is corrected.
- Use `docs` when only documentation changes.
- Use `refactor` when behavior stays the same but code structure improves.
- Use `chore` for maintenance work like cleanup, config, or repository housekeeping.

## Examples For This Site

```text
docs(git): add conventional commit reference
docs(git): add conventional branch guide
feat(site): add automatic sidebar navigation
style(theme): improve code block spacing
fix(nav): remove broken README link
```

## Sources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

[Back to Git Reference](./)
