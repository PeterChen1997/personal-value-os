# Personal Value OS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a public Astro landing page and reusable project template that explains Peter Chen's value to humans and AI agents.

**Architecture:** Static Astro app with Markdown source-data files. The landing page, `llms.txt`, agent context, guidelines, and project skills all draw from the same curated evidence model in `source-data/`.

**Tech Stack:** Astro, TypeScript, Bun test, plain CSS, GitHub public repository.

---

### Task 1: Project Baseline

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `.gitignore`

- [ ] **Step 1: Write baseline content integrity test**

Create `tests/content.test.ts` with an initial failing test that imports future content modules and asserts the profile has a value claim.

- [ ] **Step 2: Run test to verify it fails**

Run: `/Users/peterchen/.bun/bin/bun test`

Expected: FAIL because content modules do not exist yet.

- [ ] **Step 3: Add minimal project config**

Add package scripts for `dev`, `build`, and `test`; configure Astro, TypeScript, and Bun test.

- [ ] **Step 4: Install dependencies**

Run: `/Users/peterchen/.bun/bin/bun install`

- [ ] **Step 5: Run test again**

Expected: FAIL only because content modules do not exist yet, not because the test runner is broken.

### Task 2: Structured Evidence Model

**Files:**
- Create: `source-data/profile.md`
- Create: `source-data/github-proof.md`
- Create: `source-data/writing-evidence.md`
- Create: `source-data/research-patterns.md`
- Create: `src/content/source.ts`
- Create: `src/content/profile.ts`
- Create: `src/content/proof.ts`
- Create: `src/content/research.ts`
- Modify: `tests/content.test.ts`

- [ ] **Step 1: Expand tests**

Assert that:
- profile has current focus items.
- every value pillar has evidence.
- every project has a `proves` field and URL.
- guidelines include clone-avoidance language once created.

- [ ] **Step 2: Run tests to verify failure**

Run: `/Users/peterchen/.bun/bin/bun test`

Expected: FAIL because content modules are missing or incomplete.

- [ ] **Step 3: Implement source data and typed loaders**

Encode Notion, blog, GitHub, and research findings as Markdown with fenced `json data` blocks. Keep TypeScript modules as loaders only.

- [ ] **Step 4: Run tests**

Expected: PASS for content integrity tests.

### Task 3: Landing Page

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`

- [ ] **Step 1: Add page rendering smoke test**

Extend `tests/content.test.ts` to verify landing sections can be derived from structured data.

- [ ] **Step 2: Run tests to verify failure**

Expected: FAIL because section helpers or required data do not exist yet.

- [ ] **Step 3: Implement page**

Build the first screen as the usable landing page, with proof clusters, writing evidence, user manual, and CTA links.

- [ ] **Step 4: Run tests**

Expected: PASS.

### Task 4: Agent-Readable Layer

**Files:**
- Create: `src/utils/llms.ts`
- Create: `src/pages/agent-context.md.ts`
- Create: `src/pages/llms.txt.ts`
- Modify: `tests/content.test.ts`

- [ ] **Step 1: Write tests for generated agent context**

Assert that generated context contains identity, current focus, proof links, and adaptation warning.

- [ ] **Step 2: Run tests to verify failure**

Expected: FAIL because generator does not exist.

- [ ] **Step 3: Implement generated routes**

Add Markdown generation for agent context and a root `llms.txt`.

- [ ] **Step 4: Run tests**

Expected: PASS.

### Task 5: Guidelines And Project Skills

**Files:**
- Create: `docs/guideline.md`
- Create: `docs/agent-workflow.md`
- Create: `skills/personal-value-mining/SKILL.md`
- Create: `skills/landing-page-refresh/SKILL.md`
- Modify: `tests/content.test.ts`

- [ ] **Step 1: Add documentation tests**

Assert guideline and skills exist and include required trigger language.

- [ ] **Step 2: Run tests to verify failure**

Expected: FAIL because docs and skills do not exist.

- [ ] **Step 3: Write docs and skills**

Add a complete user adaptation guide, agent workflow, and two concise project skills.

- [ ] **Step 4: Run tests**

Expected: PASS.

### Task 6: Verification And Publish

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Write README**

Document how to run, adapt, verify, and deploy the project.

- [ ] **Step 2: Run full verification**

Run: `/Users/peterchen/.bun/bin/bun run check`, `/Users/peterchen/.bun/bin/bun test`, and `/Users/peterchen/.bun/bin/bun run build`.

- [ ] **Step 3: Commit local repo**

Run: `git status`, `git add`, and `git commit`.

- [ ] **Step 4: Create public GitHub repo and push**

Run: `/opt/homebrew/bin/gh repo create PeterChen1997/personal-value-os --public --source=. --remote=origin --push`.
