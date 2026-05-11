# Personal Value OS Redesign Design

## Goal

Redesign Personal Value OS as a strong personal landing page first, with an AI-agent adaptation layer underneath it. The public page should feel like Peter Chen's own site, not a template sales page. The repo and README should still make it obvious how another user can send the GitHub URL to an AI agent and have that agent ask for personal context, mine public evidence, choose a distinctive theme, and regenerate a version that fits that user.

## Primary Audience

The homepage primarily serves human visitors who want to understand Peter quickly: collaborators, peers, hiring or consulting contacts, and people who arrive from his public work.

Secondary audiences:

- AI agents that need machine-readable context and update instructions.
- Builders who want to fork the repo and create their own Personal Value OS.
- Existing followers or friends who want current focus, collaboration style, and links.

The first screen should therefore introduce Peter, his role, his value claim, and the strongest navigation paths. Agent and template affordances should be present but not dominate the page.

## Design Direction

Use the provided standalone HTML design as the visual reference, especially:

- Dark editorial background.
- High-contrast serif/display typography paired with mono labels.
- Section labels such as `/now`, `/proof-of-work`, `/methods`, `/manual`, and `/for-agents`.
- Evidence cards that emphasize judgment and proof, not resume chronology.
- A machine-readable section that makes `/llms.txt` and `/agent-context.md` visible without becoming the main story.

Do not port the standalone page wholesale. The Astro implementation should stay static, readable, and lightweight. Avoid a heavy React tweak panel or client-side theme editor unless a later requirement demands it.

## Page Structure

### Ripple Banner

Add a low-height top banner that links to the GitHub repository:

`https://github.com/PeterChen1997/personal-value-os`

The banner's job is light attribution and traffic routing, not conversion. It must not take over the hero. It can sit above the main navigation or as a compact top strip.

Expose an environment variable to hide it:

```txt
PUBLIC_SHOW_RIPPLE_BANNER=false
```

Default behavior: show the banner unless the variable is explicitly set to `false`.

### Hero

The hero should lead with:

- Peter's name.
- Role and value claim.
- Short personal positioning sentence.
- Current focus chips.
- Primary actions: proof of work, agent context, GitHub or blog.

The first viewport should clearly read as a personal site. Any template or agent messaging must be secondary.

### Now / Focus

Show the current focus as a small set of cards or list items. This replaces a generic "about" section and helps visitors understand what Peter is actively exploring.

### Proof

Render proof clusters from `source-data/github-proof.md`. The design should emphasize:

- What each cluster proves.
- Representative projects.
- Status and stack.
- Concise proof sentences.

Cards may include expandable details later, but the initial version can keep all content server-rendered and visible.

### Methods

Add a methods section that explains Peter's working principles. This can be derived from existing value pillars and user manual data. It should sound specific and useful, not like generic self-promotion.

### Manual

Render the collaboration/user manual from `source-data/profile.md`, framed as "how to work with Peter." Keep it concise and practical.

### For Agents

Keep an agent-facing section near the bottom. It should link to:

- `/llms.txt`
- `/agent-context.md`
- `docs/agent-workflow.md`
- the GitHub repo

This section should explain that agents should use source data and README instructions rather than scraping the visual page.

### Footer

Provide contact and external links. Keep the final call to action personal and direct.

## Theme System

Add a theme model to the profile source data. The theme should be a stable preset, not a random color.

Recommended initial presets:

- `signal-amber`: warm amber on dark ink, suited to builder/editorial identities.
- `forest-mint`: green/mint accents, suited to research, systems, health, or care-oriented work.
- `cobalt-blue`: blue accents, suited to infrastructure, engineering, security, or technical leadership.
- `rose-clay`: rose/clay accents, suited to community, writing, coaching, or reflective creative work.
- `violet-ink`: violet accents, suited to AI, strategy, speculative design, or knowledge systems.

The user's AI agent should automatically choose a preset based on role, audience, evidence, and public identity signals. The user can override it by editing `source-data/profile.md`; no separate theme editor is required in this pass.

The page should apply the theme through CSS variables so each generated site can feel distinct without requiring layout rewrites.

## Source Data Changes

Extend `source-data/profile.md` with a `theme` object:

```json
{
  "theme": {
    "preset": "signal-amber",
    "reason": "Peter's page is a builder/editorial proof-of-work site, so amber gives it a warm signal color without making it feel like a SaaS dashboard."
  }
}
```

If needed, add a methods or principles field later. For the first redesign, existing `valuePillars` and `userManual` can power the methods section.

## README Requirements

Rewrite README as a clear operating manual for both humans and AI agents.

It must explain:

- What Personal Value OS is.
- That Peter's page is an example, not copy to reuse verbatim.
- How to run, test, build, and deploy the Astro project.
- The source-of-truth rule for `source-data/*.md`.
- How to hide the Ripple banner with `PUBLIC_SHOW_RIPPLE_BANNER=false`.
- How theme presets work and how an agent should choose one.
- What questions an AI agent should ask before generating a user's page.

Minimum agent intake questions:

- Name and preferred public handle.
- Current role and 1-2 sentence personal introduction.
- Primary audience for the page.
- Desired outcome: hiring, consulting, users, collaborators, community, or personal hub.
- Blog, writing, newsletter, portfolio, or docs URL.
- GitHub URL and any other proof sources.
- Public projects or artifacts that must be included.
- Work/collaboration boundaries and preferred contact links.
- Preferred theme vibe, or permission for the agent to choose.
- Any information that must remain private.

The README should tell agents to mine evidence first, update `source-data/*.md`, select a theme, then update the page only if the content model requires it.

## Agent Behavior

When a user sends the repo URL to an AI agent, the agent should:

1. Read `README.md`, `docs/guideline.md`, and `docs/agent-workflow.md`.
2. Ask the intake questions above before editing.
3. Inspect the user's public GitHub, blog, writing, portfolio, and provided sources.
4. Convert evidence into proof clusters and a value claim.
5. Pick a theme preset and write the reason into `source-data/profile.md`.
6. Update `source-data/*.md` before touching render files.
7. Run checks and build.
8. Report what changed and what evidence was used.

## Testing

Update content tests to cover:

- `profile.theme.preset` exists and is one of the supported presets.
- `profile.theme.reason` is specific enough to explain the choice.
- The README mentions AI agent intake questions.
- The README documents `PUBLIC_SHOW_RIPPLE_BANNER=false`.
- The landing page contains the Ripple/GitHub banner logic.
- The landing page still exposes machine-readable schema and alternate links.

Run before completion:

```bash
bun run check
bun test
bun run build
```

## Non-Goals

- Do not build a full theme editor in this pass.
- Do not add a client-side app framework unless Astro cannot support a required interaction.
- Do not make the homepage primarily about the template.
- Do not make the Ripple banner visually dominant.
- Do not copy the standalone HTML asset bundle wholesale.
