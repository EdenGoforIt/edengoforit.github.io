---
title: Git Reference
description: Practical Git commands and notes for development.
---

# Git Reference

Git is a version control system used to track changes, collaborate with others, and keep project history organized.

## Common Workflow

```sh
# check current changes
git status

# stage files
git add .

# create a commit
git commit -m "Add Git reference page"

# push to GitHub
git push
```

## Useful Commands

### Check Project Status

```sh
git status
```

Shows changed, staged, and untracked files.

### See File Changes

```sh
git diff
```

Shows unstaged changes before you commit them.

```sh
git diff --staged
```

Shows staged changes that will be included in the next commit.

### Create A Branch

```sh
git switch -c new-feature
```

Creates and switches to a new branch.

### Switch Branches

```sh
git switch main
```

Moves back to the `main` branch.

### View Commit History

```sh
git log --oneline
```

Shows a short list of previous commits.

### Graph Commands

```sh
git log --oneline --graph --decorate --all
```

Shows commit history as a graph across all branches.

```sh
git log --oneline --graph --decorate --all --boundary
```

Shows where history diverges, including boundary commits.

```sh
git log --graph --decorate --all -p
```

Shows the graph with patch details for each commit.

### Fix Local And Remote Differences

Use these commands when `git pull` shows an empty commit or the local branch and remote branch have different histories.

#### Reset Completely To The Remote Branch

```sh
git fetch origin
git reset --hard origin/<branch>
```

Resets the local branch to match the remote branch exactly. This discards local commits and uncommitted changes.

#### Rebase Local Branch From Remote

```sh
git fetch origin
git rebase origin/<branch>
```

Keeps local commits, but replays them on top of the latest remote branch.

### Pull Latest Changes

```sh
git pull
```

Downloads and merges the latest changes from GitHub.

### Push Local Commits

```sh
git push
```

Uploads local commits to GitHub.

## Git Articles

- [Conventional Branch](./conventional-branch.html)
- [Conventional Commit](./conventional-commit.html)
- [Release Branch Strategy](./branch-strategy.html)

## GitHub Pages Notes

For a folder to appear as a page on this site, add an `index.md` or `index.html` file inside it.

Example:

```text
git/
  index.md
```

This page will be available at:

```text
https://edengoforit.github.io/git/
```

## Sources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

[Back to Home](../)
