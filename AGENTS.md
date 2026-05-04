# hiotec.com Agent Context

Read `~/src/hpanel/protocol/workspace.md` first for global methodology, hard
constraints, and active-run protocol. Read `~/src/hpanel/persona/voice.md` for
operator voice.

## Project Context

HioTEC brand landing page and DSE tool portal. This is an Astro static site.

## Authority Order

1. `DESIGN.md` — visual direction, tokens, layout, and interaction decisions.
2. `.agents/memory/landing-backlog.md` — repo-local backlog notes.
3. Source files under `src/` and public assets.
4. `dist/` only when validating built output; do not edit generated output by hand.

## Verification

- `npm run build`
- Visual review in browser for landing-page changes.

Long-running or multi-agent work should create repo-local state under
`.agents/runs/`; do not register this project in global runtime except as a
thin active-run pointer.
