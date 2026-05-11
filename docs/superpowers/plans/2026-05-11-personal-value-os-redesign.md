# Personal Value OS Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 Personal Value OS 重构成“个人站点优先、AI agent 可复用”的静态 Astro 站点，并补齐 README、主题系统、Ripple banner 和验证覆盖。

**Architecture:** 继续沿用 Astro + TypeScript + Markdown source-data 的架构。个人信息、主题选择、证明材料仍由 `source-data/*.md` 作为唯一事实来源；页面和 agent routes 只负责渲染。视觉层通过 CSS variables 读取稳定 theme preset，不引入 React 客户端编辑器。

**Tech Stack:** Astro 5、TypeScript、Bun test、plain CSS、Markdown JSON data blocks。

---

## 文件结构

- Modify: `source-data/profile.md`：新增 `theme` 字段，记录 theme preset 和选择理由。
- Modify: `src/content/profile.ts`：扩展 Profile 类型，导出 theme preset 类型和可用 preset 列表。
- Modify: `tests/content.test.ts`：新增 theme、README、banner、页面结构测试。
- Modify: `README.md`：改成中文为主的使用说明和 AI agent 操作手册。
- Modify: `docs/guideline.md`：补充主题选择和 README 优先读取规则。
- Modify: `docs/agent-workflow.md`：补充 intake question、主题选择、banner 环境变量。
- Modify: `src/pages/index.astro`：重构页面结构、增加 Ripple banner 环境变量逻辑、引入 theme class。
- Modify: `src/styles/global.css`：重写为 dark editorial 视觉系统和 theme preset CSS variables。
- Modify: `src/utils/llms.ts`：让 agent context 输出 theme 和 README-first adaptation 提醒。

## Task 1: 内容模型和主题测试

**Files:**
- Modify: `tests/content.test.ts`
- Modify: `src/content/profile.ts`
- Modify: `source-data/profile.md`

- [ ] **Step 1: 写失败测试**

在 `tests/content.test.ts` 的 `describe('personal value content', ...)` 中加入测试：

```ts
it('defines a stable theme preset for visual differentiation', () => {
  expect(profile.theme.preset).toBe('signal-amber')
  expect(profile.theme.reason).toContain('builder')
  expect(profile.theme.reason.length).toBeGreaterThan(60)
})
```

- [ ] **Step 2: 运行测试确认失败**

Run:

```bash
bun test
```

Expected: FAIL，原因是 `profile.theme` 还不存在。

- [ ] **Step 3: 扩展 Profile 类型**

在 `src/content/profile.ts` 中新增类型并把 `theme` 加入 `Profile`：

```ts
export const themePresets = [
  'signal-amber',
  'forest-mint',
  'cobalt-blue',
  'rose-clay',
  'violet-ink'
] as const

export type ThemePreset = (typeof themePresets)[number]

export type ProfileTheme = {
  preset: ThemePreset
  reason: string
}
```

并在 `Profile` 类型中加入：

```ts
theme: ProfileTheme
```

- [ ] **Step 4: 更新 source-data**

在 `source-data/profile.md` 的 `json data` 中，紧跟 `userManual` 字段后添加：

```json
,
"theme": {
  "preset": "signal-amber",
  "reason": "Peter's page is a builder/editorial proof-of-work site, so amber gives the dark interface a warm signal color without making it feel like a generic SaaS dashboard."
}
```

- [ ] **Step 5: 运行测试确认通过**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 6: 提交**

Run:

```bash
git add tests/content.test.ts src/content/profile.ts source-data/profile.md
git commit -m "feat: add profile theme model"
```

## Task 2: README 和 agent 操作说明

**Files:**
- Modify: `tests/content.test.ts`
- Modify: `README.md`
- Modify: `docs/guideline.md`
- Modify: `docs/agent-workflow.md`

- [ ] **Step 1: 写失败测试**

在 `tests/content.test.ts` 中更新文档测试，加入以下断言：

```ts
const readme = readFileSync(join(process.cwd(), 'README.md'), 'utf8')
expect(readme).toContain('AI agent 应该先问什么')
expect(readme).toContain('PUBLIC_SHOW_RIPPLE_BANNER=false')
expect(readme).toContain('主题色')
expect(readme).toContain('GitHub URL')
expect(readme).toContain('Blog URL')
expect(readme).toContain('不要直接复制 Peter')
```

并在 agent workflow 断言中加入：

```ts
expect(agentWorkflow).toContain('intake')
expect(agentWorkflow).toContain('theme preset')
```

- [ ] **Step 2: 运行测试确认失败**

Run:

```bash
bun test
```

Expected: FAIL，原因是 README 和 workflow 还没有这些新说明。

- [ ] **Step 3: 重写 README**

把 `README.md` 改成中文为主的清晰结构，必须包含这些一级或二级段落：

```md
# Personal Value OS

Personal Value OS 是一个个人价值落地页模板。这个仓库当前展示 Peter Chen 的个人站点，但方法本身可以复用：让 AI agent 先理解一个人的角色、作品、写作、GitHub、协作边界和主题气质，再生成适合这个人的公开页面。

## 先看这个规则

不要直接复制 Peter 的身份、项目叙事和句子。你要复制的是方法：先挖掘证据，再写定位，再生成页面。

## 快速开始

```bash
bun install
bun run check
bun test
bun run dev
```

## 环境变量

```bash
PUBLIC_SHOW_RIPPLE_BANNER=false
```

设置为 `false` 时隐藏顶部 Ripple / GitHub 开源跳转 banner。默认展示，但它只做轻量引流，不应该占据首屏注意力。

## AI agent 应该先问什么

当用户把这个仓库 URL 发给 AI agent 时，agent 不应该马上改代码。请先询问：

- 你的名字和公开 handle 是什么？
- 你现在的角色是什么？请给 1-2 句个人介绍。
- 这个页面最优先服务谁？
- 你希望页面带来什么结果：招聘、咨询、用户、合作、社区、个人主页，还是其他？
- 你的 Blog URL、写作链接、newsletter、作品集或文档在哪里？
- 你的 GitHub URL 是什么？还有哪些公开 proof sources？
- 哪些项目、文章、演讲、案例必须被纳入？
- 你的联系方式、协作边界和不希望公开的信息是什么？
- 你偏好的主题色或气质是什么？如果没有，是否允许 agent 自动选择？

## 主题色

Agent 应根据用户角色、受众、证据和公开气质选择 theme preset，并写入 `source-data/profile.md`。

可选 preset：

- `signal-amber`
- `forest-mint`
- `cobalt-blue`
- `rose-clay`
- `violet-ink`
```

- [ ] **Step 4: 更新 docs**

在 `docs/guideline.md` 加入一段：

```md
## Theme Presets

每个用户都应该有一个稳定主题色，而不是所有页面共用同一种颜色。AI agent 应根据角色、受众、证据和公开气质选择 `source-data/profile.md` 里的 `theme.preset`，并写清楚 `theme.reason`。
```

在 `docs/agent-workflow.md` 的 Refresh Steps 前加入：

```md
## Intake Before Editing

Before editing, ask for role, short bio, primary audience, desired outcome, Blog URL, GitHub URL, proof sources, must-include artifacts, contact links, collaboration boundaries, preferred theme vibe, and private information boundaries.

Choose a `theme preset` after evidence mining. Write the preset and reason into `source-data/profile.md`.
```

- [ ] **Step 5: 运行测试确认通过**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 6: 提交**

Run:

```bash
git add tests/content.test.ts README.md docs/guideline.md docs/agent-workflow.md
git commit -m "docs: clarify agent adaptation workflow"
```

## Task 3: 主题变量和页面测试

**Files:**
- Modify: `tests/content.test.ts`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: 写失败测试**

在 `tests/content.test.ts` 的页面测试中加入：

```ts
expect(page).toContain('showRippleBanner')
expect(page).toContain('PUBLIC_SHOW_RIPPLE_BANNER')
expect(page).toContain('theme-${profile.theme.preset}')
expect(page).toContain('href="https://github.com/PeterChen1997/personal-value-os"')
expect(page).toContain('/for-agents')
```

再加入 CSS 测试：

```ts
const css = readFileSync(join(process.cwd(), 'src/styles/global.css'), 'utf8')
expect(css).toContain('.theme-signal-amber')
expect(css).toContain('.theme-forest-mint')
expect(css).toContain('.theme-cobalt-blue')
expect(css).toContain('.theme-rose-clay')
expect(css).toContain('.theme-violet-ink')
```

- [ ] **Step 2: 运行测试确认失败**

Run:

```bash
bun test
```

Expected: FAIL，原因是页面和 CSS 还没有新主题与 banner 逻辑。

- [ ] **Step 3: 改 Astro 页面数据区**

在 `src/pages/index.astro` frontmatter 中加入：

```ts
const repoUrl = 'https://github.com/PeterChen1997/personal-value-os'
const showRippleBanner = import.meta.env.PUBLIC_SHOW_RIPPLE_BANNER !== 'false'
const themeClass = `theme-${profile.theme.preset}`
```

把 `<body>` 改成：

```astro
<body class={themeClass}>
```

并在 `<main>` 前加入：

```astro
{showRippleBanner && (
  <aside class="ripple-banner" aria-label="Open source repository">
    <a href={repoUrl} target="_blank" rel="noreferrer">
      <span>Ripple open source</span>
      <strong>Fork Personal Value OS</strong>
    </a>
  </aside>
)}
```

- [ ] **Step 4: 改 CSS 主题变量**

在 `src/styles/global.css` 顶部加入这些 theme class：

```css
.theme-signal-amber {
  --accent: #e8c170;
  --accent-2: #f3d9a2;
  --accent-soft: rgba(232, 193, 112, 0.14);
}

.theme-forest-mint {
  --accent: #77d8b2;
  --accent-2: #b7ead8;
  --accent-soft: rgba(119, 216, 178, 0.14);
}

.theme-cobalt-blue {
  --accent: #7fa7ff;
  --accent-2: #b9ccff;
  --accent-soft: rgba(127, 167, 255, 0.14);
}

.theme-rose-clay {
  --accent: #e9a3a3;
  --accent-2: #f3c6bd;
  --accent-soft: rgba(233, 163, 163, 0.14);
}

.theme-violet-ink {
  --accent: #c3a6ff;
  --accent-2: #ddccff;
  --accent-soft: rgba(195, 166, 255, 0.14);
}
```

- [ ] **Step 5: 运行测试确认通过**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 6: 提交**

Run:

```bash
git add tests/content.test.ts src/pages/index.astro src/styles/global.css
git commit -m "feat: add themed ripple banner"
```

## Task 4: 页面视觉重构

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: 改页面结构**

把首页主体整理为这些 section id 和标题。每个 section 的内容继续使用现有 `profile`、`proofClusters`、`writingEvidence` 和 `researchPatterns` 数据渲染：

```astro
<section class="hero" aria-labelledby="hero-title">
  <p class="eyebrow">Personal Value OS</p>
  <h1 id="hero-title">{profile.name}</h1>
  <p class="role">{profile.role}</p>
  <p class="claim">{profile.valueClaim}</p>
</section>

<section class="section now" id="now" aria-labelledby="now-title">
  <div class="section-heading">
    <p class="eyebrow">01 · /now</p>
    <h2 id="now-title">现在关注什么。</h2>
  </div>
</section>

<section class="section" id="proof" aria-labelledby="proof-title">
  <div class="section-heading">
    <p class="eyebrow">02 · /proof-of-work</p>
    <h2 id="proof-title">证据，不是承诺。</h2>
  </div>
</section>

<section class="section methods" id="methods" aria-labelledby="methods-title">
  <div class="section-heading">
    <p class="eyebrow">03 · /methods</p>
    <h2 id="methods-title">我怎么想这件事。</h2>
  </div>
</section>

<section class="section manual" id="manual" aria-labelledby="manual-title">
  <div class="section-heading">
    <p class="eyebrow">04 · /manual</p>
    <h2 id="manual-title">一份与我协作的说明书。</h2>
  </div>
</section>

<section class="section agent" id="for-agents" aria-labelledby="agent-title">
  <div class="section-heading">
    <p class="eyebrow">05 · /for-agents</p>
    <h2 id="agent-title">给机器的视图。</h2>
  </div>
</section>
```

Hero actions 使用：

```astro
<nav class="hero-actions" aria-label="Primary links">
  <a href="#proof">看作品证据</a>
  <a href="/personal-value-os/agent-context.md">给 AI agent 的上下文</a>
  {githubLink && <a href={githubLink.url} target="_blank" rel="noreferrer">GitHub</a>}
</nav>
```

Agent section 使用：

```astro
<section class="section agent" id="for-agents" aria-labelledby="agent-title">
  <div class="section-heading">
    <p class="eyebrow">05 · /for-agents</p>
    <h2 id="agent-title">给机器的视图。</h2>
  </div>
  <div class="agent-grid">
    <a href="/personal-value-os/llms.txt">/llms.txt</a>
    <a href="/personal-value-os/agent-context.md">/agent-context.md</a>
    <a href={repoUrl} target="_blank" rel="noreferrer">GitHub repo</a>
  </div>
</section>
```

- [ ] **Step 2: 重写 CSS 为 dark editorial**

保留 responsive 结构，使用这些核心变量：

```css
:root {
  color-scheme: dark;
  --bg: #1a1815;
  --bg-2: #211f1b;
  --bg-3: #2a2721;
  --ink: #f4ede0;
  --ink-2: #cfc4b3;
  --ink-3: #928879;
  --line: rgba(244, 237, 224, 0.16);
  --line-2: rgba(244, 237, 224, 0.09);
  --paper-shadow: 0 28px 80px rgba(0, 0, 0, 0.36);
  --sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --serif: Georgia, "Times New Roman", "Noto Serif SC", serif;
  --mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
```

为 `.hero`、`.section`、`.project`、`.manual-list article`、`.agent-grid a`、`.ripple-banner` 写深色样式，所有强调色使用 `var(--accent)`。

- [ ] **Step 3: 运行 Astro 检查**

Run:

```bash
bun run check
```

Expected: PASS。

- [ ] **Step 4: 运行测试**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 5: 提交**

Run:

```bash
git add src/pages/index.astro src/styles/global.css
git commit -m "feat: redesign personal landing page"
```

## Task 5: Agent context 补齐主题和 README-first 提醒

**Files:**
- Modify: `tests/content.test.ts`
- Modify: `src/utils/llms.ts`

- [ ] **Step 1: 写失败测试**

在 `generates AI-readable context from the same source data` 测试中加入：

```ts
expect(context).toContain('Theme Preset')
expect(context).toContain(profile.theme.preset)
expect(context).toContain('Read README.md first')
expect(llms).toContain('README.md')
```

- [ ] **Step 2: 运行测试确认失败**

Run:

```bash
bun test
```

Expected: FAIL，原因是 agent context 还没有输出 theme 和 README-first 提醒。

- [ ] **Step 3: 更新 `src/utils/llms.ts`**

在 `buildAgentContext()` 的 `## Source Patterns` 前加入：

```ts
## Theme Preset

- Preset: ${profile.theme.preset}
- Reason: ${profile.theme.reason}
```

在 `## Adaptation Warning` 下加入：

```ts
Read README.md first before adapting this repo for another person. Ask for role, short bio, primary audience, Blog URL, GitHub URL, proof sources, contact links, theme preference, and private information boundaries before editing source data.
```

在 `buildLlmsText()` 的 Core Files 中加入：

```ts
- [README.md](${repoUrl ? `${repoUrl}/blob/main/README.md` : 'README.md'}): Start here before adapting the repo for another person.
```

- [ ] **Step 4: 运行测试确认通过**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 5: 提交**

Run:

```bash
git add tests/content.test.ts src/utils/llms.ts
git commit -m "feat: expose theme in agent context"
```

## Task 6: 全量验证和本地预览

**Files:**
- No source edits expected unless verification finds a concrete issue.

- [ ] **Step 1: 运行类型检查**

Run:

```bash
bun run check
```

Expected: PASS。

- [ ] **Step 2: 运行测试**

Run:

```bash
bun test
```

Expected: PASS。

- [ ] **Step 3: 运行生产构建**

Run:

```bash
bun run build
```

Expected: PASS，`dist/` 成功生成。

- [ ] **Step 4: 启动本地 dev server**

Run:

```bash
bun run dev -- --host 127.0.0.1
```

Expected: Astro 输出一个本地 URL，例如 `http://127.0.0.1:4321/personal-value-os/`。

- [ ] **Step 5: 浏览器检查**

用浏览器打开本地 URL，确认：

- 顶部 Ripple banner 低调展示并跳转 GitHub repo。
- 首屏读起来是 Peter 的个人站点。
- `/now`、`/proof`、`/methods`、`/manual`、`/for-agents` 都可见。
- 桌面和移动宽度下没有文字重叠。
- 页面主色来自 `signal-amber`。

- [ ] **Step 6: 如有修复则提交**

如果预览发现布局或文案问题，修改后运行：

```bash
bun run check
bun test
bun run build
git add src/pages/index.astro src/styles/global.css README.md docs/guideline.md docs/agent-workflow.md src/utils/llms.ts tests/content.test.ts source-data/profile.md src/content/profile.ts
git commit -m "fix: polish personal value os redesign"
```

Expected: 只有实际修复时才产生这个提交。
