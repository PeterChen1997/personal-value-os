# Personal Value OS

Personal Value OS 是一个个人价值落地页模板。这个仓库当前展示 Peter Chen 的个人站点，但方法本身可以复用：让 AI agent 先理解一个人的角色、作品、写作、GitHub、协作边界和主题气质，再生成适合这个人的公开页面。

这个 repo 的目标不是让每个人复制 Peter，而是让每个人拥有一套能被人类和 AI agent 读懂的个人价值系统。

## 先看这个规则

不要直接复制 Peter 的身份、项目叙事和句子。你要复制的是方法：先挖掘证据，再写定位，再生成页面。

所有提取出来的事实都必须写在 `source-data/` 里。这个目录是唯一事实来源，也是 only data source。页面、`llms.txt`、`agent-context.md` 和 README 都应该从这些内容出发，而不是把证据散落在 Astro 或 TypeScript 文件里。

## 快速开始

安装依赖并启动本地开发：

```bash
bun install
bun run check
bun test
bun run dev
```

生产构建：

```bash
bun run build
```

预览构建结果：

```bash
bun run preview
```

## 环境变量

```bash
PUBLIC_SHOW_RIPPLE_BANNER=false
```

设置为 `false` 时隐藏顶部 Ripple / GitHub 开源跳转 banner。默认展示，但它只做轻量引流，不应该占据首屏注意力。

## 项目结构

```txt
source-data/*.md              # 唯一事实来源，包含 Markdown 和 json data
src/content/source.ts         # Markdown json-data loader
src/content/*.ts              # typed content loaders，不存放证据
src/pages/index.astro         # 人类阅读的个人落地页
src/pages/agent-context.md.ts # 生成给 agent 的长上下文
src/pages/llms.txt.ts         # 生成 LLM 入口
src/pages/robots.txt.ts       # 搜索与 agent crawl 规则
src/pages/sitemap.xml.ts      # sitemap
docs/guideline.md             # 如何改造成自己的版本
docs/agent-workflow.md        # AI agent 更新页面时的工作流
skills/                       # 项目级 Codex skills
```

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

问完以后，agent 应该先挖掘证据，再更新 `source-data/*.md`，最后才修改页面表现。

## 主题色

每个用户都应该有一个稳定主题色，避免所有 fork 出来的页面长得过于同质化。

Agent 应根据用户角色、受众、证据和公开气质选择 theme preset，并写入 `source-data/profile.md` 的 `theme` 字段。

可选 preset：

- `signal-amber`：偏 builder、编辑感、作品证据型页面。
- `forest-mint`：偏研究、系统、健康、照护或长期主义。
- `cobalt-blue`：偏基础设施、工程领导力、安全或技术可靠性。
- `rose-clay`：偏社区、写作、教练、创作或关系型工作。
- `violet-ink`：偏 AI、策略、知识系统或探索型工作。

用户也可以直接编辑 `source-data/profile.md` 覆盖 agent 的选择。

## 自定义流程

1. 读 `docs/guideline.md` 和 `docs/agent-workflow.md`。
2. 确认主要受众和页面目标。
3. 更新 `source-data/profile.md`，包括身份、定位、联系方式、协作说明和主题色。
4. 更新 `source-data/github-proof.md`，把项目按“证明什么能力”分组。
5. 更新 `source-data/writing-evidence.md`，把文章、演讲、文档按价值分组。
6. 只在方法变了时更新 `source-data/research-patterns.md`。
7. 运行 `bun run check`、`bun test` 和 `bun run build`。

## AI 可读入口

发布后的站点暴露：

- `/llms.txt`
- `/agent-context.md`
- `/robots.txt`
- `/sitemap.xml`

AI agent 应优先阅读 README、`docs/agent-workflow.md` 和 `source-data/*.md`，不要只抓视觉页面。

## 部署

这是一个静态 Astro 站点，可部署到：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

GitHub Pages 部署时，保持 `astro.config.mjs` 的 `base` 与仓库名一致。
