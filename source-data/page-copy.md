# Page Copy Source

This file contains bilingual copy used by the visual landing page. English source data remains in the domain files; this file provides Chinese-first presentation copy and English fallbacks for the language switcher.

```json data
{
  "defaultLanguage": "zh",
  "ui": {
    "ripplePrefix": { "zh": "Ripple 开源项目", "en": "Ripple open source" },
    "rippleCta": { "zh": "在 GitHub 上 Fork", "en": "Fork Personal Value OS" },
    "navNow": { "zh": "/now", "en": "/now" },
    "navProof": { "zh": "/proof", "en": "/proof" },
    "navManual": { "zh": "/manual", "en": "/manual" },
    "navAgent": { "zh": "/agents", "en": "/agents" },
    "heroEyebrow": { "zh": "Personal Value OS", "en": "Personal Value OS" },
    "primaryAction": { "zh": "看作品证据", "en": "View proof of work" },
    "agentAction": { "zh": "给 AI agent 的上下文", "en": "Context for AI agents" },
    "nowKicker": { "zh": "01 · /now", "en": "01 · /now" },
    "nowTitle": { "zh": "现在关注什么。", "en": "What I am focused on now." },
    "proofKicker": { "zh": "02 · /proof-of-work", "en": "02 · /proof-of-work" },
    "proofTitle": { "zh": "证据，不是承诺。", "en": "Evidence, not promises." },
    "methodsKicker": { "zh": "03 · /methods", "en": "03 · /methods" },
    "methodsTitle": { "zh": "我怎么想这件事。", "en": "How I think about the work." },
    "writingKicker": { "zh": "04 · /writing", "en": "04 · /writing" },
    "writingTitle": { "zh": "写作也是证据。", "en": "Writing is evidence too." },
    "manualKicker": { "zh": "05 · /manual", "en": "05 · /manual" },
    "manualTitle": { "zh": "一份与我协作的说明书。", "en": "A manual for working with me." },
    "agentKicker": { "zh": "06 · /for-agents", "en": "06 · /for-agents" },
    "agentTitle": { "zh": "给机器的视图。", "en": "The machine-readable view." },
    "agentCopy": { "zh": "如果你是 AI agent，请优先读 README、source-data 和 agent context。视觉页负责给人看，结构化入口负责让你少猜。", "en": "If you are an AI agent, read README, source-data, and agent context first. The visual page is for humans; structured routes reduce guessing." },
    "referencesKicker": { "zh": "07 · /references", "en": "07 · /references" },
    "referencesTitle": { "zh": "这个页面借鉴了什么。", "en": "What shaped this page." },
    "footerTitle": { "zh": "想一起做点有主见的东西？", "en": "Want to build something opinionated together?" },
    "publicRepos": { "zh": "已审阅公开仓库", "en": "public repos reviewed" },
    "activeRepos": { "zh": "活跃原创仓库", "en": "active original repos" },
    "dominantStack": { "zh": "主要公开技术栈", "en": "dominant public stack" },
    "themeLabel": { "zh": "主题", "en": "theme" },
    "themeReason": { "zh": "选择理由", "en": "reason" },
    "sourceLabel": { "zh": "事实来源", "en": "primary_source" },
    "location": { "zh": "北京 / 支持远程协作", "en": "Beijing / remote-friendly" }
  },
  "profile": {
    "role": { "zh": "AI 原生产品工程师", "en": "AI native product engineer" },
    "valueClaim": { "zh": "我把模糊的信息和产品想法，变成可判断的系统、小工具和可读的工程产物。", "en": "I turn fuzzy information and product ideas into judgment systems, small tools, and readable engineering artifacts." },
    "oneLiner": { "zh": "一个从 Web 工程走向 AI native builder 的人，把产品直觉、工程系统和真实生活里的自我实验接在一起。", "en": "A Web engineer evolving into an AI native builder who connects product sense, engineering systems, and practical self-experimentation." },
    "currentFocus": [
      { "zh": "AI 编码质量护栏和 E2E 验证边界", "en": "AI coding quality guardrails and E2E validation boundaries" },
      { "zh": "给重度阅读者和 builder 用的内容判断工具", "en": "content judgment tools for heavy readers and builders" },
      { "zh": "人类和 AI agent 都能读懂的公开 proof-of-work 系统", "en": "public proof-of-work systems that are readable by humans and AI agents" },
      { "zh": "面向个人效率与生活系统的小型高频工具", "en": "small, high-frequency tools for personal efficiency and life systems" }
    ]
  },
  "valuePillars": [
    {
      "title": { "zh": "从模糊需求到可用工具的产品工程", "en": "Product engineering from fuzzy need to shipped tool" },
      "summary": { "zh": "Peter 经常把个人或社区里的模糊需求，做成浏览器扩展、静态应用、全栈原型和可执行文档。", "en": "Peter repeatedly takes vague personal or community needs and turns them into browser extensions, static apps, full-stack prototypes, and operational docs." }
    },
    {
      "title": { "zh": "服务 AI、阅读和决策质量的判断系统", "en": "Judgment systems for AI, reading, and decision quality" },
      "summary": { "zh": "主线不是收集更多信息，而是做能帮助人判断信任、阅读、跳过或质疑什么的界面。", "en": "The through-line is not collecting more information. It is building interfaces that help people decide what to trust, read, skip, or challenge." }
    },
    {
      "title": { "zh": "把知识、写作和社区变成复利资产", "en": "Knowledge, writing, and community as compounding assets" },
      "summary": { "zh": "长期维护的 Astro 博客、读书群、技术笔记和社区复盘，说明他习惯把经验整理成可复用的公共上下文。", "en": "A long-running Astro blog, reading group, technical notes, and community retrospectives show a habit of turning lived experience into reusable public context." }
    },
    {
      "title": { "zh": "带有人味的真实自我实验", "en": "Practical self-experimentation with human texture" },
      "summary": { "zh": "Peter 会先在真实生活里测试想法：营养、过敏、情绪释放、快捷指令、离线仪式和个人操作系统。", "en": "Peter tends to test ideas on real life first: nutrition, allergy, emotional release, shortcuts, offline rituals, and personal operating systems." }
    }
  ],
  "proofClusters": [
    {
      "title": { "zh": "AI 和 agent 工具", "en": "AI and agent tooling" },
      "angle": { "zh": "让 AI 辅助工作更可控、可检查、可产品化的一组工具。", "en": "Tools that make AI-assisted work more controllable, inspectable, and productized." },
      "projects": [
        { "kind": { "zh": "桌面控制中心", "en": "desktop command center" }, "stack": { "zh": "TypeScript，类 Electron 应用界面", "en": "TypeScript, Electron-style app surface" }, "status": { "zh": "近期原创项目", "en": "recent original project" }, "proves": { "zh": "能识别 AI 编码工具周围混乱的配置层，并为 MCP servers、可复用指令、记忆和同步路径设计控制界面。", "en": "Can identify the messy configuration layer around AI coding tools and design a control surface for MCP servers, reusable instructions, memory, and sync routes." } },
        { "kind": { "zh": "知识生产 MVP", "en": "knowledge production MVP" }, "stack": { "zh": "JavaScript，Vite，OpenAI-compatible API", "en": "JavaScript, Vite, OpenAI-compatible API" }, "status": { "zh": "近期原创项目", "en": "recent original project" }, "proves": { "zh": "能把 AI 知识生产想法包装成 Pages-first 应用，包含 provider 配置、文档和测试，而不是停留在 prompt。", "en": "Can package an AI knowledge-production idea into a Pages-first app with provider configuration, docs, and tests instead of leaving it as a prompt." } },
        { "kind": { "zh": "产品想法工作台", "en": "product-idea workbench" }, "stack": { "zh": "JavaScript，Vite，docs-first 产品分析", "en": "JavaScript, Vite, docs-first product analysis" }, "status": { "zh": "近期原创项目", "en": "recent original project" }, "proves": { "zh": "能把产品机会扫描变成可复用的 MVP 工作台，带 PRD、技术计划、品牌系统和实现笔记。", "en": "Can turn product opportunity scanning into a repeatable MVP workbench with PRD, technical plan, brand system, and implementation notes." } },
        { "kind": { "zh": "全栈模板", "en": "full-stack template" }, "stack": { "zh": "React，Vite，Tailwind，Hono，Cloudflare Workers，Playwright", "en": "React, Vite, Tailwind, Hono, Cloudflare Workers, Playwright" }, "status": { "zh": "模板项目", "en": "template project" }, "proves": { "zh": "能系统化零成本全栈启动路径，覆盖前端、后端、共享代码、E2E 测试和部署约定。", "en": "Can systematize a zero-cost full-stack launch path with frontend, backend, shared code, E2E tests, and deployment conventions." } }
      ]
    },
    {
      "title": { "zh": "内容与知识系统", "en": "Content and knowledge systems" },
      "angle": { "zh": "围绕写作、阅读和团队记忆，捕捉、结构化、保存和复用知识的项目。", "en": "Projects that capture, structure, preserve, and reuse knowledge across writing, reading, and team memory." },
      "projects": [
        { "kind": { "zh": "个人博客", "en": "personal blog" }, "stack": { "zh": "Astro，React，Tailwind，TypeScript", "en": "Astro, React, Tailwind, TypeScript" }, "status": { "zh": "长期公开站点", "en": "long-running public site" }, "proves": { "zh": "能多年维护真实的公共写作系统，不只是一次性作品集，并包含 RSS、内容结构和部署基础设施。", "en": "Can maintain a real public writing system over years, not just a one-off portfolio site, with RSS, content structure, and deployed infrastructure." } },
        { "kind": { "zh": "前端知识库", "en": "frontend knowledge base" }, "stack": { "zh": "JavaScript，GitBook 风格文档", "en": "JavaScript, GitBook-style documentation" }, "status": { "zh": "有 star 的公开学习资产", "en": "public learning artifact with stars" }, "proves": { "zh": "展示了早期就把技术学习整理成公共文档的习惯，覆盖 JavaScript、CSS、浏览器、网络、数据结构和面试主题。", "en": "Shows early habit of organizing technical learning into public documentation across JavaScript, CSS, browser, network, data structure, and interview topics." } },
        { "kind": { "zh": "个人书库系统", "en": "personal library system" }, "stack": { "zh": "React，Vite，Node server，数据模型", "en": "React, Vite, Node server, data model" }, "status": { "zh": "MVP", "en": "MVP" }, "proves": { "zh": "能把阅读习惯变成带书籍元数据、API 设计和个人书库管理的结构化应用，而不是散落笔记。", "en": "Can turn reading habits into a structured app with book metadata, API design, and personal library management rather than scattered notes." } },
        { "kind": { "zh": "学习笔记应用", "en": "learning notes app" }, "stack": { "zh": "TypeScript，app router 风格项目", "en": "TypeScript, app router style project" }, "status": { "zh": "知识管理原型", "en": "knowledge management prototype" }, "proves": { "zh": "探索 AI 辅助标签和知识捕捉，强化了结构化个人学习系统这条主线。", "en": "Explores AI-assisted tagging and knowledge capture, which reinforces the broader direction of structured personal learning systems." } },
        { "kind": { "zh": "线程化粘贴管理器", "en": "threaded paste manager" }, "stack": { "zh": "Next.js App Router，TypeScript，Tailwind", "en": "Next.js App Router, TypeScript, Tailwind" }, "status": { "zh": "MVP", "en": "MVP" }, "proves": { "zh": "能围绕 Thread 到 Paste 的层级，设计协作友好的信息容器、API 和可维护项目文档。", "en": "Can design a small collaboration-friendly information container around Thread to Paste hierarchy, APIs, and maintainable project docs." } }
      ]
    },
    {
      "title": { "zh": "浏览器与效率工具", "en": "Browser and productivity tools" },
      "angle": { "zh": "减少日常开发和个人工作流重复摩擦的小工具。", "en": "Small utilities focused on reducing repeated friction in everyday developer and personal workflows." },
      "projects": [
        { "kind": { "zh": "浏览器扩展", "en": "browser extension" }, "stack": { "zh": "TypeScript，extension architecture", "en": "TypeScript, extension architecture" }, "status": { "zh": "已发布工具", "en": "deployed tool" }, "proves": { "zh": "能交付真实浏览器工作流工具，通过测试和文档迭代，并把扩展连接到支撑落地页。", "en": "Can ship a real browser workflow tool, iterate through tests and docs, and connect the extension to a supporting landing page." } },
        { "kind": { "zh": "扩展脚手架谱系", "en": "extension boilerplate lineage" }, "stack": { "zh": "React，TypeScript，Vite extension setup", "en": "React, TypeScript, Vite extension setup" }, "status": { "zh": "早期扩展基础", "en": "earlier extension foundation" }, "proves": { "zh": "说明他反复关注浏览器原生工作流界面，而不只是网页，并能处理扩展环境约束。", "en": "Shows repeated interest in browser-native workflow surfaces, not only web pages, and the ability to work inside extension constraints." } },
        { "kind": { "zh": "iOS 快捷指令集合", "en": "iOS shortcuts collection" }, "stack": { "zh": "Next.js，TypeScript", "en": "Next.js, TypeScript" }, "status": { "zh": "产品概念", "en": "product concept" }, "proves": { "zh": "把产品思考连接到日常自动化：识别微小重复行为，包装成 shortcuts，并清楚说明使用场景。", "en": "Connects product thinking to everyday automation: identify tiny recurring behaviors, package them as shortcuts, and explain the use case clearly." } },
        { "kind": { "zh": "个人环境配置", "en": "personal environment config" }, "stack": { "zh": "Shell，config docs", "en": "Shell, config docs" }, "status": { "zh": "工作配置档案", "en": "working setup archive" }, "proves": { "zh": "把工作环境当作资产记录下来，让个人效率选择可以被其他 builder 复用和检查。", "en": "Documents the working environment as an asset, making personal productivity choices reusable and inspectable for other builders." } },
        { "kind": { "zh": "macOS 笔记工具", "en": "macOS note tool" }, "stack": { "zh": "Swift", "en": "Swift" }, "status": { "zh": "原生应用实验", "en": "native app experiment" }, "proves": { "zh": "当工作流需要原生界面时愿意离开浏览器，这对超越标准 Web CRUD 的产品工程很有价值。", "en": "Shows willingness to leave the browser when the workflow calls for a native surface, useful for product engineering beyond standard web CRUD." } }
      ]
    },
    {
      "title": { "zh": "生活系统实验", "en": "Life-system experiments" },
      "angle": { "zh": "从个人痛点、身体感知、情绪调节和小群体仪式里长出来的工具。", "en": "Tools that emerge from personal pain, body awareness, emotional regulation, and small-group rituals." },
      "projects": [
        { "kind": { "zh": "健康风险看板", "en": "health risk dashboard" }, "stack": { "zh": "TypeScript，React map，PostgreSQL，Fly.io", "en": "TypeScript, React map, PostgreSQL, Fly.io" }, "status": { "zh": "已部署应用", "en": "deployed app" }, "proves": { "zh": "能把具体健康痛点连接到数据摄取、缓存、可视化和可部署的用户风险感知界面。", "en": "Can connect a concrete health pain point to data ingestion, caching, visualization, and deployable user-facing risk awareness." } },
        { "kind": { "zh": "情绪释放练习应用", "en": "emotional release practice app" }, "stack": { "zh": "JavaScript，本地历史，测试", "en": "JavaScript, local history, tests" }, "status": { "zh": "近期原创项目", "en": "recent original project" }, "proves": { "zh": "能把柔软的人类练习转译成结构化 Web 流程，包含情绪分类、身体感受和 local-first 历史。", "en": "Can translate a soft human practice into a structured web flow with emotion taxonomy, body sensations, and local-first history." } },
        { "kind": { "zh": "NVC 表达转换器", "en": "NVC expression converter" }, "stack": { "zh": "TypeScript，Remix-style app", "en": "TypeScript, Remix-style app" }, "status": { "zh": "PWA 实验", "en": "PWA experiment" }, "proves": { "zh": "把 AI 和产品界面用于沟通质量，而不只是效率，让 builder 叙事更有人味和跨度。", "en": "Applies AI and product interfaces to communication quality, not only productivity, which gives the builder narrative more human range." } },
        { "kind": { "zh": "日常反思应用", "en": "daily reflection app" }, "stack": { "zh": "Next.js，TypeScript，Prisma", "en": "Next.js, TypeScript, Prisma" }, "status": { "zh": "已部署反思应用", "en": "deployed reflection app" }, "proves": { "zh": "说明他会反复把自我反思做成小型可重复的软件循环，并带轻量数据捕捉。", "en": "Shows the recurring pattern of turning self-reflection into small repeatable software loops with lightweight data capture." } },
        { "kind": { "zh": "离线活动卡片原型", "en": "offline activity card prototype" }, "stack": { "zh": "JavaScript，GitHub Pages，PRD 和技术计划", "en": "JavaScript, GitHub Pages, PRD and technical plan" }, "status": { "zh": "带文档原型", "en": "prototype with docs" }, "proves": { "zh": "能为小社区设计刻意安静的产品仪式，在产品机制、情绪语气和离线约束之间取平衡。", "en": "Can design an intentionally quiet product ritual for small communities, balancing product mechanics with emotional tone and offline constraints." } }
      ]
    },
    {
      "title": { "zh": "学习广度与工程基本功", "en": "Learning breadth and engineering fundamentals" },
      "angle": { "zh": "早期项目展示的是跨栈学习，而不是狭窄框架身份。", "en": "Older projects show cross-stack learning rather than a narrow framework identity." },
      "projects": [
        { "kind": { "zh": "迷你 Vue 实现", "en": "mini Vue implementation" }, "stack": { "zh": "JavaScript", "en": "JavaScript" }, "status": { "zh": "框架学习项目", "en": "framework learning project" }, "proves": { "zh": "通过构建轻量 Vue-like 实现，而不是只使用 Vue，展示了对框架内部机制的好奇心。", "en": "Demonstrates curiosity about framework internals by building a lightweight Vue-like implementation instead of only using Vue." } },
        { "kind": { "zh": "机器学习 Web demo", "en": "ML web demo" }, "stack": { "zh": "Vue，TensorFlow.js", "en": "Vue, TensorFlow.js" }, "status": { "zh": "有 star 的学习项目", "en": "learning project with stars" }, "proves": { "zh": "在当前 AI 浪潮之前，就已经探索过浏览器机器学习和交互式 demo。", "en": "Shows early experimentation with browser-based machine learning and interactive demos before the current AI wave became mainstream." } },
        { "kind": { "zh": "游戏引擎项目", "en": "game engine project" }, "stack": { "zh": "JavaScript，GLSL，HTML", "en": "JavaScript, GLSL, HTML" }, "status": { "zh": "NUS 项目", "en": "NUS project" }, "proves": { "zh": "给作品集补上图形和引擎层面的思考，让故事不局限于商业 Web 应用。", "en": "Adds graphics and engine-level thinking to the portfolio, expanding the story beyond business web applications." } },
        { "kind": { "zh": "Java Web 应用", "en": "Java web application" }, "stack": { "zh": "Java，CSS，JavaScript", "en": "Java, CSS, JavaScript" }, "status": { "zh": "早期全栈应用", "en": "early full-stack app" }, "proves": { "zh": "展示早期服务端应用实践，也说明 Peter 并不只在前端边界内工作。", "en": "Shows early server-side application practice and reinforces that Peter has worked outside frontend-only boundaries." } }
      ]
    }
  ],
  "writingEvidence": [
    {
      "title": { "zh": "AI 与 builder 反思", "en": "AI and builder reflection" },
      "angle": { "zh": "这些写作展示 Peter 如何更新关于 AI、工程工作和 builder 身份的判断。", "en": "Writing that shows how Peter updates beliefs about AI, engineering work, and builder identity." },
      "links": [
        { "label": { "zh": "2024 探索笔记", "en": "2024 exploration notes" }, "note": { "zh": "反思 AI coding 变得实用、专家盲区、非线性技术变化，以及理解范式转移的必要性。", "en": "Reflects on AI coding becoming practical, expert blind spots, nonlinear technical change, and the need to understand paradigm shifts." } },
        { "label": { "zh": "在中国大陆配置 Google AI Pro", "en": "Google AI Pro setup in China" }, "note": { "zh": "一篇调试风格的实用文章，处理 AI 工具访问、账号地区限制和订阅流程。", "en": "A practical debugging-style post about AI tool access, account region constraints, and subscription workflow." } }
      ]
    },
    {
      "title": { "zh": "实用自动化与数据工作", "en": "Practical automation and data work" },
      "angle": { "zh": "把日常摩擦变成工作流、数据处理和公开 demo 的写作。", "en": "Writing that turns daily friction into workflows, data processing, and public demos." },
      "links": [
        { "label": { "zh": "微信群总结实战", "en": "WeChat group summary practice" }, "note": { "zh": "记录从聊天数据获取、清洗、LLM 格式化到周年总结页的完整流程。", "en": "Documents a full pipeline from chat data acquisition to cleaning, LLM formatting, and an anniversary summary page." } },
        { "label": { "zh": "iOS 快捷指令实践", "en": "iOS Shortcuts practice" }, "note": { "zh": "把打开 App 的习惯变成行为提醒，也展示 Peter 对小自动化撬动真实生活的偏好。", "en": "Turns app-opening habits into behavioral nudges and illustrates Peter's taste for tiny automation with real life leverage." } }
      ]
    },
    {
      "title": { "zh": "健康与自我实验", "en": "Health and self-experimentation" },
      "angle": { "zh": "通过感知、验证、追踪和复盘，把健康知识变得可操作。", "en": "Writing that makes health knowledge operational through sensing, validation, change tracking, and review." },
      "links": [
        { "label": { "zh": "营养学读书分享", "en": "Nutrition reading session" }, "note": { "zh": "展示围绕营养、炎症和自我监测的组织、综合与实践性健康系统思考。", "en": "Shows facilitation, synthesis, and practical health-system thinking around nutrition, inflammation, and self-monitoring." } },
        { "label": { "zh": "北京花粉生存指南", "en": "Beijing pollen survival guide" }, "note": { "zh": "把个人症状、环境数据和可用建议连接成一篇近似公共健康风格的文章。", "en": "Connects personal symptoms, environmental data, and usable advice in a public-health-adjacent format." } }
      ]
    },
    {
      "title": { "zh": "社区与长期学习", "en": "Community and long-horizon learning" },
      "angle": { "zh": "这些写作证明 Peter 能组织社区、反思学习，并维护长期公开档案。", "en": "Writing that proves Peter can host communities, reflect on learning, and keep public archives alive." },
      "links": [
        { "label": { "zh": "读书群三周年", "en": "Reading group anniversary" }, "note": { "zh": "记录一个三年读书社区、群数据、线下聚会和共同复盘。", "en": "Documents a three-year reading community, group data, offline gathering, and shared reflection." } },
        { "label": { "zh": "我的读书简史", "en": "Reading history" }, "note": { "zh": "解释阅读习惯的个人起点，以及为什么阅读后来变成一个系统，而不只是爱好。", "en": "Explains the personal origin of reading habits and why reading became a system rather than a hobby." } },
        { "label": { "zh": "转行做程序员", "en": "Career transition into programming" }, "note": { "zh": "给想转行的人提供语境：对初学者的同理心，以及关于程序员路径的具体判断。", "en": "Useful context for people seeking career advice, showing empathy for beginners and concrete judgment about the programmer path." } }
      ]
    }
  ],
  "userManual": [
    { "title": { "zh": "适合带来的问题", "en": "Best problems to bring" }, "body": { "zh": "带来模糊产品想法、信息密集工作流、原型需求、AI tooling 问题，或需要用户同理心与工程形状一起判断的决策。", "en": "Bring fuzzy product ideas, information-heavy workflows, prototype needs, AI-tooling questions, or decisions that need both user empathy and engineering shape." } },
    { "title": { "zh": "Peter 如何思考", "en": "How Peter thinks" }, "body": { "zh": "他喜欢先找出用户真正需要做的判断，强力裁剪范围，做一个小而能工作的界面，再把学习沉淀成文档或公开写作。", "en": "He likes to identify the real judgment users need to make, cut scope hard, build a small working surface, and then turn the learning into docs or public writing." } },
    { "title": { "zh": "协作方式", "en": "Collaboration style" }, "body": { "zh": "具体产物胜过抽象对齐：PRD、原型、截图、repo diff 和简短书面决策，是更适合他的工作媒介。", "en": "Concrete artifacts beat abstract alignment: PRDs, prototypes, screenshots, repo diffs, and short written decisions are the preferred working medium." } },
    { "title": { "zh": "不要期待什么", "en": "What not to expect" }, "body": { "zh": "他不是在做通用影响者，也不是追求最大化平台叙事。边缘能力是狭窄但有主见的有用工具，强调判断与清晰。", "en": "He is not trying to be a generic influencer or a maximalist platform builder. The edge is narrow, useful tools with a strong opinion about judgment and clarity." } }
  ],
  "researchPatterns": [
    { "label": { "zh": "作品证据胜过只有简历式声明", "en": "Proof of work beats resume-only claims" }, "useInThisProject": { "zh": "每张 GitHub 项目卡都说明它证明了什么，并按价值而不是时间线分组。", "en": "Every GitHub project card states what it proves, and projects are grouped by value rather than chronology." } },
    { "label": { "zh": "当前关注是有用的公共过滤器", "en": "Current focus is a useful public filter" }, "useInThisProject": { "zh": "首屏和 agent context 都包含当前关注：AI 护栏、内容判断、公开 proof-of-work 和小工具。", "en": "The hero and agent context include current focus areas: AI guardrails, content judgment, public proof of work, and small tools." } },
    { "label": { "zh": "知识花园展示品味和心智模型", "en": "Knowledge gardens reveal taste and mental models" }, "useInThisProject": { "zh": "写作被当作证据，尤其是综合健康、AI、阅读和实用自动化的文章。", "en": "Writing evidence is treated as proof, especially posts that synthesize health, AI, reading, and practical automation." } },
    { "label": { "zh": "个人协作说明书降低协作摩擦", "en": "A personal user manual lowers collaboration friction" }, "useInThisProject": { "zh": "页面为人类协作者和 AI agent 都提供简明的“如何与 Peter 协作”。", "en": "The page includes a concise \"How to work with Peter\" section for human collaborators and AI agents." } },
    { "label": { "zh": "AI agent 需要策展过的简洁上下文", "en": "AI agents need curated, concise context" }, "useInThisProject": { "zh": "仓库提供 llms.txt、agent-context.md 和 JSON-LD，让 agent 不必抓取导航噪声。", "en": "The repo ships llms.txt, agent-context.md, and JSON-LD so agents can understand the site without scraping navigation noise." } },
    { "label": { "zh": "结构化数据应该说明页面主题", "en": "Structured data should say what the page is about" }, "useInThisProject": { "zh": "落地页嵌入 JSON-LD，把 Peter 声明为 Person，并暴露 sameAs、knowsAbout 和 ProfilePage 实体。", "en": "The landing page embeds JSON-LD with Peter as Person, sameAs links, knowsAbout topics, and the ProfilePage entity." } }
  ],
  "theme": {
    "reason": { "zh": "Peter 的页面是 builder/editorial 风格的 proof-of-work 站点，琥珀色能给深色界面一个温暖的信号色，又不会像通用 SaaS 仪表盘。", "en": "Peter's page is a builder/editorial proof-of-work site, so amber gives the dark interface a warm signal color without making it feel like a generic SaaS dashboard." }
  }
}
```
