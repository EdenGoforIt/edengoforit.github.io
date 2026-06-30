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
git checkout <branch>
git fetch origin
git reset --hard origin/<branch>
```

Resets the local branch to match the remote branch exactly. This discards local commits and uncommitted changes.

#### Rebase Local Branch From Remote

```sh
git checkout <branch>
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

## Git Cheat Sheet

### Setup And Configuration

```sh
# show Git version
git --version

# set your name for all repositories
git config --global user.name "Your Name"

# set your email for all repositories
git config --global user.email "you@example.com"

# list current Git configuration
git config --list

# set default branch name for new repositories
git config --global init.defaultBranch main

# set VS Code as the default editor
git config --global core.editor "code --wait"
```

### Create Or Clone A Repository

```sh
# create a new local repository
git init

# clone a repository
git clone <repository-url>

# clone into a specific folder
git clone <repository-url> <folder-name>
```

### Status, Staging, And Commits

```sh
# show working tree status
git status

# stage one file
git add <file>

# stage all changes
git add .

# unstage a file
git restore --staged <file>

# commit staged changes
git commit -m "Commit message"

# add staged changes to the previous commit
git commit --amend

# add all tracked file changes and commit
git commit -am "Commit message"
```

### Compare Changes

```sh
# show unstaged changes
git diff

# show staged changes
git diff --staged

# compare two branches
git diff <branch-a>..<branch-b>

# show changes in a commit
git show <commit-hash>

# show file changes from a commit
git show <commit-hash> -- <file>
```

### Branches

```sh
# list local branches
git branch

# list local and remote branches
git branch -a

# create a branch
git branch <branch-name>

# create and switch to a branch
git switch -c <branch-name>

# switch branches
git switch <branch-name>

# rename current branch
git branch -m <new-branch-name>

# delete a local branch
git branch -d <branch-name>

# force delete a local branch
git branch -D <branch-name>
```

### Remote And Origin URL

```sh
# list remotes
git remote -v

# add origin remote
git remote add origin <repository-url>

# set or change origin URL
git remote set-url origin <repository-url>

# show origin details
git remote show origin

# remove origin remote
git remote remove origin

# rename a remote
git remote rename <old-name> <new-name>
```

Examples:

```sh
# set origin to an HTTPS GitHub URL
git remote set-url origin https://github.com/username/repository.git

# set origin to an SSH GitHub URL
git remote set-url origin git@github.com:username/repository.git
```

### Fetch, Pull, And Push

```sh
# download remote branch and tag information
git fetch

# download from all remotes
git fetch --all

# pull latest changes
git pull

# pull with rebase instead of merge
git pull --rebase

# push current branch
git push

# push and set upstream branch
git push -u origin <branch-name>

# push all branches
git push --all

# push tags
git push --tags

# delete a remote branch
git push origin --delete <branch-name>
```

### Merge And Rebase

```sh
# merge another branch into current branch
git merge <branch-name>

# abort a merge with conflicts
git merge --abort

# rebase current branch onto another branch
git rebase <branch-name>

# continue after fixing rebase conflicts
git rebase --continue

# abort a rebase
git rebase --abort
```

### Undo And Restore

```sh
# discard unstaged changes in one file
git restore <file>

# restore a file from another branch or commit
git restore --source <branch-or-commit> <file>

# unstage a file
git restore --staged <file>

# reset current branch to the previous commit but keep changes staged
git reset --soft HEAD~1

# reset current branch to the previous commit and keep changes unstaged
git reset HEAD~1

# reset current branch and discard changes
git reset --hard HEAD~1

# revert a commit by creating a new commit
git revert <commit-hash>
```

Use `git reset --hard` carefully because it discards local changes.

### Stash

```sh
# save uncommitted changes
git stash

# save with a message
git stash push -m "Work in progress"

# list stashes
git stash list

# apply latest stash and keep it in the stash list
git stash apply

# apply latest stash and remove it from the stash list
git stash pop

# remove one stash
git stash drop stash@{0}

# remove all stashes
git stash clear
```

### History And Logs

```sh
# show commit history
git log

# show compact commit history
git log --oneline

# show history with graph
git log --oneline --graph --decorate --all

# show commits by one author
git log --author="Name"

# show history for one file
git log -- <file>

# show who changed each line of a file
git blame <file>
```

### Tags

```sh
# list tags
git tag

# create a lightweight tag
git tag <tag-name>

# create an annotated tag
git tag -a <tag-name> -m "Tag message"

# push one tag
git push origin <tag-name>

# delete a local tag
git tag -d <tag-name>

# delete a remote tag
git push origin --delete <tag-name>
```

### Cleaning Files

```sh
# preview untracked files that would be removed
git clean -n

# remove untracked files
git clean -f

# remove untracked files and folders
git clean -fd
```

Use `git clean` carefully because it deletes untracked files.

### Submodules

```sh
# clone repository with submodules
git clone --recurse-submodules <repository-url>

# initialize and update submodules
git submodule update --init --recursive

# add a submodule
git submodule add <repository-url> <path>

# update submodules
git submodule update --remote
```

### Helpful Shortcuts

```sh
# create a short status alias
git config --global alias.st status

# create a compact log alias
git config --global alias.lg "log --oneline --graph --decorate --all"

# use aliases
git st
git lg
```

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
