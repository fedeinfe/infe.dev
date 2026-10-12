# infe.dev

## Deploy after every feature

When a feature or change is finished, deploy it without waiting to be asked:

1. Run `pnpm build` and fix anything it reports.
2. Commit the change.
3. Push it to `main` on `origin`. From a worktree branch that is a fast-forward of `origin/main`: `git push origin HEAD:main`.
4. Check that [infe.dev](https://infe.dev) serves the change once Coolify has rebuilt.

Pushing to `main` is the deploy; see the README for how it is wired.
