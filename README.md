# fedeinfe.ai

Personal site: a short bio and a tree of links to my projects.

## Editing the links

Everything on the page comes from [`src/links.ts`](src/links.ts). A node is either a link (`href`) or a group (`children`), and groups nest to any depth.

`icon` is either a built-in glyph name or `appIcon("name")`, which loads `src/assets/icons/name.webp`. Icons are square with the artwork filling the canvas; the page rounds the corners.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # type-check, then static output in dist/
```

## Deploy

Pushing to `main` deploys to [fedeinfe.ai](https://fedeinfe.ai): a GitHub webhook tells Coolify to rebuild the `Dockerfile`, which builds the static site and serves it with nginx.

The app is `fedeinfe.ai` in the `infe.dev` project on coolify.proaf.it, where `www.fedeinfe.ai` redirects to the apex. The old domain infe.dev (and every subdomain) answers with a 301 to the same path on fedeinfe.ai, from `infe-dev-redirect.yaml` in the server proxy dynamic configuration. The webhook secret is the one in the app's Webhooks tab; the same value is set on the repository's webhook.
