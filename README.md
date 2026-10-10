# infe.dev

Personal site: a short bio and a tree of links to my projects.

## Editing the links

Everything on the page comes from [`src/links.ts`](src/links.ts). A node is either a link (`href`) or a group (`children`), and groups nest to any depth. `icon` is shown on top-level rows only.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # type-check, then static output in dist/
```

## Deploy

Pushing to `main` deploys to [infe.dev](https://infe.dev): a GitHub webhook tells Coolify to rebuild the `Dockerfile`, which builds the static site and serves it with nginx.
