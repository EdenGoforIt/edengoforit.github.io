# Eden Go For It

Personal GitHub Pages blog and development notebook.

This repository is used as a public home for notes, references, experiments, and articles about software development. The goal is to keep a practical encyclopedia of things I learn while building: commands, concepts, tools, patterns, debugging notes, and useful source links.

## Purpose

- Publish blog posts and technical notes with GitHub Pages.
- Keep a reliable development reference that is easy to search.
- Collect sources, documentation, and examples used while learning or building.
- Record decisions, mistakes, fixes, and reusable snippets for future projects.

## Development Encyclopedia

Use this section as a growing index for reference material.

### Core Web Development

- HTML: page structure, semantic elements, forms, accessibility.
- CSS: layout, responsive design, animations, design systems.
- JavaScript: browser APIs, async code, modules, data handling.
- TypeScript: types, interfaces, generics, safer refactoring.

### Frontend Frameworks

- React: components, hooks, state, routing, rendering patterns.
- Next.js: routing, server rendering, API routes, deployment.
- Vite: fast local development and frontend build setup.

### Backend Development

- Node.js: runtime basics, package scripts, server tooling.
- Express: routing, middleware, APIs, request handling.
- Databases: SQL, NoSQL, schema design, migrations, indexing.

### Tools And Workflow

- Git: branching, commits, tags, merge conflicts, history review.
- GitHub: repositories, issues, pull requests, Actions, Pages.
- CLI: useful terminal commands, scripts, automation.
- Testing: unit tests, integration tests, end-to-end tests.
- Debugging: browser DevTools, logs, stack traces, performance profiling.

### Deployment And Operations

- GitHub Pages: static site hosting and custom domains.
- CI/CD: automated checks, builds, and deployments.
- Security: secrets, dependency updates, authentication basics.
- Performance: caching, bundle size, image optimization, metrics.

## Reference Sources

Official documentation is the best first source when possible.

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript, browser APIs.
- [Git Documentation](https://git-scm.com/doc) - official Git reference.
- [GitHub Docs](https://docs.github.com/) - GitHub, GitHub Pages, Actions, repositories.
- [React Docs](https://react.dev/) - React concepts and API reference.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript language guide.
- [Node.js Docs](https://nodejs.org/docs/latest/api/) - Node.js API documentation.
- [web.dev](https://web.dev/) - performance, accessibility, and modern web practices.
- [Can I use](https://caniuse.com/) - browser support tables.

## Suggested Note Format

```md
## Topic Name

### What It Is

Short explanation in my own words.

### When To Use It

Practical situations where this is useful.

### Example

Small code sample or command.

### Gotchas

Common mistakes, confusing parts, or debugging notes.

### Sources

- Official documentation or article link
```

## Local Development

This repository is a GitHub Pages site built with Jekyll.

### Run Locally With Docker Compose

Ruby and Jekyll do not need to be installed directly on the machine. Docker Compose runs the site using `compose.yaml`.

Start Docker Desktop first, then run:

```powershell
docker compose up
```

Open the site at:

```text
http://localhost:4000/
```

### Run In The Background

```powershell
docker compose up -d
```

### Stop The Local Server

```powershell
docker compose down
```

### Restart

```powershell
docker compose restart
```

### View Logs

```powershell
docker compose logs -f
```

### Build Only

Use this when you only want to verify the Jekyll build:

```powershell
docker compose run --rm site bundle exec jekyll build
```

### Clean Generated Files

```powershell
docker compose down
Remove-Item -Recurse -Force _site, .jekyll-cache -ErrorAction SilentlyContinue
```

Note: the first run may take a little longer while gems are installed. After that, gems are cached in the `bundle-cache` Docker volume.

## Ideas To Add Later

- A glossary of development terms.
- A command cheat sheet.
- A list of project templates.
- A debugging journal.
- Notes from books, courses, and documentation.
- Links to finished blog posts and experiments.
