# Agent Workflow

Use this workflow when an AI agent refreshes the Personal Value OS from new context.

## Inputs

Prefer these sources, in order:

1. `source-data/*.md` in the current repo.
2. Public GitHub repositories and README files.
3. Public blog posts, talks, newsletters, or docs.
4. Private notes only when the owner explicitly grants access.
5. Direct user clarification.

## Intake Before Editing

Before editing, ask intake questions for role, short bio, primary audience, desired outcome, Blog URL, GitHub URL, proof sources, must-include artifacts, contact links, collaboration boundaries, preferred theme vibe, and private information boundaries.

Choose a `theme preset` after evidence mining. Write the preset and reason into `source-data/profile.md`.

## Source-Of-Truth Rule

Store every extracted useful fact as Markdown text in `source-data/`. The app parses the fenced `json data` block in each Markdown file; the surrounding prose is for humans and future agents.

Do not put extracted evidence directly in `src/content/*.ts`, `src/pages/*.astro`, `public/`, or generated files. Those files may transform and render data, but `source-data/` owns it.

## Refresh Steps

1. Read `docs/guideline.md`.
2. Inspect `source-data/profile.md`, `source-data/github-proof.md`, `source-data/writing-evidence.md`, and `source-data/research-patterns.md`.
3. Collect new evidence.
4. Decide whether it changes positioning, proof clusters, writing evidence, or only supporting details.
5. Update `source-data/*.md` first.
6. Update the landing page only if the page needs a new section or visual treatment.
7. Update route generators only when generated shape changes. The content of `/llms.txt` and `/agent-context.md` should come from `source-data/`.
8. Run tests and build.

## GitHub Evidence Rules

For each repository, extract:

- Purpose from README or description.
- Language and framework.
- Whether it is original, forked, archived, or active.
- What user problem it addresses.
- What capability it proves.

Do not inflate unfinished projects. Say "prototype", "MVP", or "learning project" when that is the honest status.

## Blog Evidence Rules

For each article, extract:

- Topic.
- Public URL.
- What judgment, taste, or method it demonstrates.
- Whether it supports career, product, community, health, or personal operating-system positioning.

Do not summarize the entire article unless the page needs it. The landing page needs the value, not the whole post.

## Positioning Rules

Update positioning only when multiple pieces of evidence point in the same direction.

Good reason to update:

- Three or more recent projects share a new theme.
- The user's current focus changed explicitly.
- New public work creates a stronger audience fit.

Bad reason to update:

- One interesting repo.
- A fashionable keyword.
- A phrase that sounds sharper but is not evidenced.

## Verification

Run:

```bash
bun run check
bun test
bun run build
```

If Bun is unavailable, install it or use a normal Node runtime outside the Codex App hardened runtime. The Codex App bundled Node may reject Rollup's native package on macOS.
