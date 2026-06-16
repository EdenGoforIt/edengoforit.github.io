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
