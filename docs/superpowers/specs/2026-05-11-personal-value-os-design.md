# Personal Value OS Design

## Goal

Build a public, reusable personal value landing page that presents Peter Chen as an AI native product engineer, product-minded technical leader, independent builder, and reflective engineering writer. The repo must also work as a template that other people can adapt without producing an identical page.

## Source Inputs

- Notion personal context: AI Native Builder OS, personal snapshot, content judgment assistant PRD, priority notes.
- Blog repository: `/Users/peterchen/code_hub/peterchen-home`, including about page, yearly reviews, technical posts, health and reading community posts, shortcut and WeChat data analysis articles.
- GitHub public repositories: 192 public repos, including 90 active non-fork originals, with a strong JS/TS/Web bias plus older cross-stack learning projects.
- Online research: proof-of-work portfolios, `/now` pages, personal user manuals, personal knowledge gardens, `llms.txt`, JSON-LD, and AI-readable website patterns.

## Positioning

Peter's strongest public narrative is not "frontend engineer" alone. It is:

> I turn fuzzy information and product ideas into judgment systems, small tools, and readable engineering artifacts.

The public identity should combine:

- AI native product engineer
- Product-minded technical leader
- Independent product builder
- Engineering writer with a long-running blog
- Community host and facilitator around reading, self-understanding, and practical life systems

## Visitor Personas

### Recruiters and Collaborators

They need a fast answer to: "What is Peter strong at, and what proof do I have?" The page should show role fit, current focus, representative projects, and credible evidence.

### Potential Product Users

They need to understand what problems Peter repeatedly notices and solves: content judgment, personal efficiency, health self-monitoring, knowledge organization, and lightweight tools.

### Builder Peers

They want reusable thinking: product cuts, technical decisions, implementation notes, and the pattern behind many small tools.

### Friends and Weak Ties

They want a warm, human page: current focus, topics Peter is happy to discuss, and the fastest path to contact.

### AI Agents

They need structured context: identity, current focus, capabilities, proof links, collaboration boundaries, and instructions for updating the site.

## Content Model

### Hero

- Direct identity line.
- One-sentence value claim.
- Current focus chips.
- Three CTAs: view proof, read agent context, open GitHub.

### Value Pillars

1. Product Engineering: web apps, extensions, infra-shaped tools, full-stack prototypes.
2. Judgment Systems: content judgment assistant, AI coding quality guardrails, reading-before-reading workflows.
3. Knowledge and Community: reading group, annual reports, knowledge sharing, life systems.
4. Practical Self-Experimentation: nutrition, health, shortcuts, home systems, personal tooling.

### Proof Of Work

Curate projects into clusters rather than dumping all repos:

- AI and agent tooling: `openCConfig`, `ai-knowledge-studio`, `top3-idea-studio`, private/current content-judgment-assistant.
- Content and knowledge tools: `Astro-Home`, `Book-Lib`, `Squirrel-Notes`, `PasteBoard`, `Frontend-Repo`.
- Browser and productivity tools: `DomainSwitcher`, `Chrome-Domain-Switcher`, `Shortcut-Life`, `peter-config`, `Floater`.
- Life-system experiments: `pollen-forecast`, `let-go-emotion-release`, `nonviolent-communication`, `self-examination`, `liubai-card`.
- Learning breadth: `Cue`, `tensorflowjs-reg`, `2DGameEngine`, `Student-System`, early learning-note repos.

Each project card should include what it proves, not just what it is.

### Writing Evidence

Group posts by value:

- AI and builder reflection: 2024 annual review AI section, Google AI Pro setup.
- Practical automation: WeChat group summary, iOS Shortcuts.
- Life systems and health: nutrition session, allergy survival guide, annual health reflections.
- Career and thinking: career transition, annual reviews, finance/investment, reading group.

### User Manual

Include "How to work with Peter":

- Best problems to bring.
- How Peter thinks.
- Collaboration preferences.
- What he is not optimizing for.
- Current availability style.

### AI-Readable Layer

Add:

- `/llms.txt` generated from source data
- `/agent-context.md` generated from source data
- JSON-LD Person/ProfilePage data generated inside the Astro page
- `docs/agent-workflow.md`

## Repository Shape

Use Astro + TypeScript + Bun test because Peter already maintains an Astro blog, the output can be static-hosted cheaply, and Bun avoids the Codex App hardened Node issue with Rollup's native package on macOS.

Files:

- `source-data/profile.md`: identity, personas, pillars, current focus.
- `source-data/github-proof.md`: curated GitHub evidence.
- `source-data/writing-evidence.md`: curated blog and writing evidence.
- `source-data/research-patterns.md`: online reference patterns and design principles.
- `src/content/*.ts`: typed loaders for the Markdown source data.
- `src/pages/index.astro`: landing page.
- `src/pages/agent-context.md.ts`: generated agent-readable Markdown.
- `src/pages/llms.txt.ts`: generated `llms.txt` route.
- `src/utils/llms.ts`: generate agent text from structured data.
- `tests/content.test.ts`: verifies content integrity and uniqueness constraints.
- `docs/guideline.md`: user-facing adaptation guide.
- `docs/agent-workflow.md`: AI agent workflow for refreshing the project.
- `skills/personal-value-mining/SKILL.md`: project skill for mining a person's context.
- `skills/landing-page-refresh/SKILL.md`: project skill for updating the page from new evidence.

## Reusability Guardrails

The template must not encourage clones. Guidelines should force users to:

- Pick their own primary audience.
- Replace project clusters with their proof categories.
- Write their own value claim.
- Use their own evidence.
- Keep the proof-of-work layer separate from the page style.
- Keep extracted evidence in `source-data/*.md` as the only data source.
- Re-run content checks before publishing.

## Testing

- Content tests ensure key sections have evidence links.
- Content tests ensure every project has a "proves" field.
- Content tests ensure adaptation guidelines warn users not to copy Peter's identity or narrative directly.
- Build verification must run before publishing.

## Public Repo Publishing

After local verification, create a public GitHub repo named `personal-value-os`, push `main`, and leave it ready for GitHub Pages/Vercel/Netlify deployment.
