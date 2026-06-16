---
title: Conventional Branch
description: A practical guide to naming branches consistently.
---

# Conventional Branch

Conventional branch naming keeps repository history easier to scan. It helps teammates understand the purpose of a branch before opening the code, and it makes pull requests, automation, and release work easier to organize.

Unlike Conventional Commits, there is no single universal official standard for branch names. The important part is to choose a clear pattern and use it consistently.

## Recommended Format

```text
<type>/<short-description>
```

Examples:

```text
feature/add-git-reference
fix/sidebar-active-link
docs/conventional-commit-guide
chore/update-jekyll-theme
hotfix/pages-build-error
release/1.2.0
```

## Common Branch Types

- `feature`: New feature or capability.
- `fix`: Bug fix.
- `docs`: Documentation-only change.
- `chore`: Maintenance, cleanup, or tooling work.
- `refactor`: Code structure change without behavior change.
- `test`: Test-related change.
- `hotfix`: Urgent fix for production.
- `release`: Release preparation branch.

## Naming Rules

- Use lowercase letters.
- Use hyphens between words.
- Keep names short but meaningful.
- Start with the branch type.
- Avoid spaces, special symbols, and vague names.
- Prefer `docs/add-git-guide` over `update-stuff`.

## Good Examples

```text
feature/add-search-page
fix/mobile-sidebar-layout
docs/add-branch-strategy
chore/update-github-actions
refactor/simplify-site-layout
test/add-navigation-checks
hotfix/fix-pages-deploy
release/1.0.0
```

## Examples To Avoid

```text
my-branch
changes
final-fix
eden-work
new
fix
test123
```

These names are hard to understand later because they do not explain the reason for the branch.

## Branches With Issue Numbers

If your project uses GitHub Issues, include the issue number.

```text
feature/42-add-search-page
fix/108-sidebar-overlap
docs/12-add-git-guide
```

Another common style is:

```text
feature/add-search-page-42
fix/sidebar-overlap-108
```

Pick one issue-number style and keep it consistent.

## Relationship With Conventional Commits

Branch names describe the work area:

```text
docs/conventional-commit-guide
```

Commit messages describe each saved change:

```text
docs(git): add conventional commit examples
docs(git): explain breaking change syntax
```

The branch can contain many commits, but all commits should still be clear on their own.

## Suggested Pattern For This Site

For this GitHub Pages encyclopedia, use:

```text
docs/<topic-name>
feature/<site-feature>
fix/<problem-name>
chore/<maintenance-task>
```

Examples:

```text
docs/add-javascript-notes
docs/add-conventional-branch-guide
feature/add-sidebar-navigation
fix/mobile-theme-spacing
chore/update-pages-workflow
```

## Sources

- [Git Branching Documentation](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Conventional Commits](https://www.conventionalcommits.org/)

[Back to Git Reference](./)
