---
name: landing-page-refresh
description: Use when updating this repo's landing page, Markdown source data, guidelines, llms.txt route, or agent context after new personal evidence appears.
---

# Landing Page Refresh

## Core Principle

Update Markdown source data first. The page, agent context, generated crawl files, and guidelines should reflect `source-data/` as the same source of truth.

## Required Files

- `source-data/profile.md`
- `source-data/github-proof.md`
- `source-data/writing-evidence.md`
- `source-data/research-patterns.md`
- `src/content/source.ts`
- `src/content/*.ts`
- `src/pages/index.astro`
- `src/pages/agent-context.md.ts`
- `src/pages/llms.txt.ts`
- `src/pages/robots.txt.ts`
- `src/pages/sitemap.xml.ts`
- `docs/guideline.md`

## Workflow

1. Read `docs/guideline.md`.
2. Decide whether the new evidence affects identity, current focus, proof clusters, writing evidence, or only details.
3. Update the relevant `source-data/*.md` file, including its fenced `json data` block.
4. Update visual page sections only when the content model requires it.
5. Update route generators only when identity, focus, links, usage instructions, or crawl shape need a different output format.
6. Run `bun run check`.
7. Run `bun test`.
8. Run `bun run build`.

## Refresh Rules

- Preserve clone-avoidance guidance.
- Keep each project tied to what it proves.
- Keep current focus concise.
- Do not add private links to public pages unless the owner explicitly wants that.
- Do not overstate prototypes as production products.
- Do not paste extracted evidence into TypeScript or Astro files; keep it in `source-data/`.
