# Personal Value OS Guideline

This repo contains Peter Chen's working example, but the method is the product.

Do not copy Peter Chen's identity, positioning, repo clusters, writing themes, or exact sentences. A useful Personal Value OS should feel inevitable for the person it represents.

## Data Source Rule

All extracted evidence must live as Markdown text in `source-data/`. This folder is the only source of truth.

- Use `source-data/profile.md` for identity, value claim, audiences, and working-with-me notes.
- Use `source-data/github-proof.md` for repository stats and project proof clusters.
- Use `source-data/writing-evidence.md` for blog, newsletter, talk, or doc evidence.
- Use `source-data/research-patterns.md` for external patterns that shaped the page method.

The app reads fenced `json data` blocks from those Markdown files. Do not paste evidence, links, or narrative claims directly into `src/content/*.ts`, `src/pages/*.astro`, or generated crawl files.

## Who This Is For

Use this template when you want one public page that can answer:

- What value do I create for other people?
- What proof do I have?
- What am I focused on now?
- How should humans and AI agents understand my work?
- How can someone collaborate with me without reading everything I have ever made?

## Adaptation Workflow

### 1. Pick A Primary Audience

Choose one primary audience before writing any page copy.

- Hiring and career opportunities
- Consulting or collaboration
- Independent product users
- Builder peers
- Community members
- AI agents and automated workflows

Your primary audience decides what appears above the fold. Secondary audiences can exist, but they must not compete with the first screen.

### 2. Write Your Value Claim

Use this format:

```txt
I help [specific people] do [valuable outcome] by combining [your rare strengths].
```

Peter's sample is:

```txt
I turn fuzzy information and product ideas into judgment systems, small tools, and readable engineering artifacts.
```

Do not copy Peter. Replace every noun with your real evidence.

### 3. Build Proof Clusters

Do not list every project chronologically. Group evidence by what it proves.

Good clusters:

- "Tools that reduce repeated operational work"
- "Research that changed team decisions"
- "Community rituals that created retention"
- "Open-source systems with real users"
- "Writing that made complex ideas usable"

Bad clusters:

- "My projects"
- "My articles"
- "Old stuff"
- "Misc"

### 4. Convert Each Project Into A Proof Sentence

Every project needs:

- Name
- Link
- Type
- Stack or medium
- Status
- What it proves

Use this shape:

```txt
This proves I can [capability] in [constraint/context], not just [weaker claim].
```

Example:

```txt
This proves I can turn a fuzzy health pain point into data ingestion, caching, visualization, and deployable user-facing risk awareness.
```

### 5. Add Writing Evidence

Writing is proof when it shows judgment, synthesis, taste, or the ability to teach.

Group writing by value:

- Technical judgment
- Product thinking
- Research synthesis
- Community building
- Personal operating systems
- Taste and worldview

### 6. Add A Working-With-Me Section

Write a short user manual:

- Best problems to bring
- How you think
- Preferred collaboration artifacts
- What you are not optimizing for
- Current availability or boundaries

Keep it useful, not precious. The goal is to reduce collaboration friction.

### 7. Make It AI-Readable

Keep these generated routes aligned by updating `source-data/`, not by editing generated output:

- `src/pages/llms.txt.ts`
- `src/pages/agent-context.md.ts`
- `docs/agent-workflow.md`
- `src/content/*.ts` typed loaders

AI agents should not need to scrape the visual page to understand who you are.

## Theme Presets

每个用户都应该有一个稳定主题色，而不是所有页面共用同一种颜色。AI agent 应根据角色、受众、证据和公开气质选择 `source-data/profile.md` 里的 `theme.preset`，并写清楚 `theme.reason`。

Recommended presets:

- `signal-amber`: builder, editorial, proof-of-work, warm signal.
- `forest-mint`: research, systems, health, care, long-term practice.
- `cobalt-blue`: infrastructure, engineering leadership, security, reliability.
- `rose-clay`: community, writing, coaching, reflective creative work.
- `violet-ink`: AI, strategy, knowledge systems, speculative thinking.

## Content Quality Bar

Before publishing, check:

- The first screen says who you help and why you are credible.
- Every claim has a public or explainable evidence link.
- Every project explains what it proves.
- The page has a current focus section.
- The page gives a next action.
- The agent context contains the same positioning as the visual page.
- The template instructions tell other users not to copy your exact story.

## Suggested Customization Order

1. Replace `source-data/profile.md`.
2. Replace `source-data/github-proof.md`.
3. Replace writing evidence in `source-data/writing-evidence.md`.
4. Update `source-data/research-patterns.md` when your method uses different references.
5. Update `docs/agent-workflow.md` if your evidence sources or update rules change.
6. Run `bun run check`, `bun test`, and `bun run build`.
7. Rewrite the visual style only after the content feels true.

## Anti-Patterns

- Making the page a resume with prettier CSS.
- Leading with tools instead of outcomes.
- Listing all GitHub repos without interpretation.
- Using AI-generated praise with no evidence.
- Copying Peter's builder narrative without having Peter's proof.
- Hiding the contact or next step.
- Making agent context more complete than the human page.
