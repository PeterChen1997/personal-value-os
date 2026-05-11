# Personal Value OS

A public landing page and reusable template for making a person's value legible to humans and AI agents.

This repo currently ships Peter Chen's example:

- AI native product engineer positioning
- GitHub proof-of-work analysis
- blog and community evidence
- working-with-me notes
- `llms.txt` and agent-readable context
- project-level skills for future refreshes

Do not copy Peter's identity or exact narrative. Use the structure to mine your own evidence.

## Source Of Truth

All extracted evidence lives in Markdown under `source-data/`. Treat this folder as the only data source.

Each source file contains human-readable notes plus a fenced `json data` block used by the app:

```txt
source-data/profile.md            # identity, value claim, audience, user manual
source-data/github-proof.md       # GitHub stats and project proof clusters
source-data/writing-evidence.md   # blog and writing evidence
source-data/research-patterns.md  # external reference patterns
```

The files in `src/content/` are typed loaders only. They should not contain copied evidence, public URLs, or narrative claims.

## Quick Start

Install Bun if needed:

```bash
curl -fsSL https://bun.sh/install | bash
```

Run locally:

```bash
bun install
bun run check
bun test
bun run dev
```

Build:

```bash
bun run build
```

Preview the built site:

```bash
bun run preview
```

## Project Structure

```txt
source-data/*.md             # only extracted-data source of truth
src/content/source.ts        # Markdown json-data loader
src/content/*.ts             # typed content loaders, no embedded evidence
src/pages/index.astro        # human landing page
src/pages/agent-context.md.ts # generated agent context route
src/pages/llms.txt.ts        # generated LLM entrypoint
src/pages/robots.txt.ts      # generated crawl rules
src/pages/sitemap.xml.ts     # generated sitemap
docs/guideline.md            # how to adapt without cloning Peter
docs/agent-workflow.md       # how an agent should refresh the page
skills/                      # project-level Codex skills
```

## Customize For Yourself

Follow [docs/guideline.md](docs/guideline.md).

The short version:

1. Choose your primary audience.
2. Rewrite the Markdown and `json data` in `source-data/profile.md`.
3. Replace project clusters in `source-data/github-proof.md`.
4. Replace writing evidence in `source-data/writing-evidence.md`.
5. Update reference patterns in `source-data/research-patterns.md` only when the template method changes.
6. Run `bun run check`, `bun test`, and `bun run build`.

## AI Agent Usage

Agents should read:

- [docs/agent-workflow.md](docs/agent-workflow.md)
- [skills/personal-value-mining/SKILL.md](skills/personal-value-mining/SKILL.md)
- [skills/landing-page-refresh/SKILL.md](skills/landing-page-refresh/SKILL.md)

The built site exposes:

- `/llms.txt`
- `/agent-context.md`
- `/robots.txt`
- `/sitemap.xml`

## Deploy

The project is a static Astro site. Any static host works:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

For GitHub Pages, keep `astro.config.mjs` `base` aligned with the repo name.
