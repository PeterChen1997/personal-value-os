import { describe, expect, it } from 'bun:test'
import { profile } from '../src/content/profile'
import { proofClusters, writingEvidence } from '../src/content/proof'
import { researchPatterns } from '../src/content/research'
import { buildAgentContext, buildLlmsText } from '../src/utils/llms'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { loadSourceData } from '../src/content/source'

describe('personal value content', () => {
  it('defines a clear identity and value claim', () => {
    expect(profile.name).toBe('Peter Chen')
    expect(profile.avatarUrl).toMatch(/^https?:\/\//)
    expect(profile.valueClaim).toContain('judgment systems')
    expect(profile.currentFocus.length).toBeGreaterThanOrEqual(3)
  })

  it('defines a stable theme preset for visual differentiation', () => {
    expect(profile.theme.preset).toBe('signal-amber')
    expect(profile.theme.reason).toContain('builder')
    expect(profile.theme.reason.length).toBeGreaterThan(60)
  })

  it('backs every value pillar with evidence links', () => {
    for (const pillar of profile.valuePillars) {
      expect(pillar.evidence.length).toBeGreaterThan(0)
      for (const item of pillar.evidence) {
        expect(item.url).toMatch(/^https?:\/\//)
      }
    }
  })

  it('keeps every project tied to what it proves', () => {
    const projects = proofClusters.flatMap(cluster => cluster.projects)
    expect(projects.length).toBeGreaterThanOrEqual(18)
    for (const project of projects) {
      expect(project.url).toMatch(/^https?:\/\//)
      expect(project.proves.length).toBeGreaterThan(20)
    }
  })

  it('groups writing evidence into reusable public themes', () => {
    expect(writingEvidence.length).toBeGreaterThanOrEqual(4)
    for (const group of writingEvidence) {
      expect(group.links.length).toBeGreaterThan(0)
    }
  })

  it('records external research patterns used by the design', () => {
    expect(researchPatterns.map(pattern => pattern.key)).toEqual(
      expect.arrayContaining(['proof-of-work', 'now-page', 'ai-readable'])
    )
  })

  it('generates AI-readable context from the same source data', () => {
    const context = buildAgentContext()
    expect(context).toContain('AI native product engineer')
    expect(context).toContain('Do not copy Peter')
    expect(context).toContain('https://github.com/PeterChen1997')

    const llms = buildLlmsText()
    expect(llms).toContain('# Personal Value OS')
    expect(llms).toContain('[Agent context]')
  })

  it('ships adaptation guidelines and project-level skills', () => {
    const root = process.cwd()
    const guideline = readFileSync(join(root, 'docs/guideline.md'), 'utf8')
    expect(guideline).toContain('Do not copy Peter')
    expect(guideline).toContain('primary audience')
    expect(guideline).toContain('source-data/')
    expect(guideline).toContain('only source of truth')

    const miningSkill = join(root, 'skills/personal-value-mining/SKILL.md')
    const refreshSkill = join(root, 'skills/landing-page-refresh/SKILL.md')
    expect(existsSync(miningSkill)).toBe(true)
    expect(existsSync(refreshSkill)).toBe(true)
    expect(readFileSync(miningSkill, 'utf8')).toContain('Use when')
    expect(readFileSync(refreshSkill, 'utf8')).toContain('Use when')
    expect(readFileSync(refreshSkill, 'utf8')).toContain('source-data/')
  })

  it('ships a human landing page with machine-readable profile schema', () => {
    const page = readFileSync(join(process.cwd(), 'src/pages/index.astro'), 'utf8')
    expect(page).toContain('Proof of work')
    expect(page).toContain('How to work with Peter')
    expect(page).toContain('application/ld+json')
    expect(page).toContain('ProfilePage')
  })

  it('uses source-data markdown as the only extracted-data source of truth', () => {
    const sourceDir = join(process.cwd(), 'source-data')
    const sourceFiles = readdirSync(sourceDir).filter(file => file.endsWith('.md'))
    expect(sourceFiles.sort()).toEqual([
      'github-proof.md',
      'profile.md',
      'research-patterns.md',
      'writing-evidence.md'
    ])

    for (const file of sourceFiles) {
      const markdown = readFileSync(join(sourceDir, file), 'utf8')
      expect(markdown).toContain('```json data')
      expect(() => loadSourceData(file)).not.toThrow()
    }

    const contentFiles = ['src/content/profile.ts', 'src/content/proof.ts', 'src/content/research.ts']
    for (const file of contentFiles) {
      const source = readFileSync(join(process.cwd(), file), 'utf8')
      expect(source).toContain('loadSourceData')
      expect(source).not.toContain('https://github.com/PeterChen1997')
      expect(source).not.toContain('blog.peterchen97.cn')
    }

    const renderingFiles = ['src/pages/index.astro', 'src/styles/global.css', 'src/utils/llms.ts']
    for (const file of renderingFiles) {
      const source = readFileSync(join(process.cwd(), file), 'utf8')
      expect(source).not.toContain('https://github.com/PeterChen1997')
      expect(source).not.toContain('blog.peterchen97.cn')
      expect(source).not.toContain('PeterChen1997.png')
    }

    const readme = readFileSync(join(process.cwd(), 'README.md'), 'utf8')
    const agentWorkflow = readFileSync(join(process.cwd(), 'docs/agent-workflow.md'), 'utf8')
    expect(readme).toContain('source-data/')
    expect(readme).toContain('only data source')
    expect(agentWorkflow).toContain('Source-Of-Truth Rule')
    expect(agentWorkflow).toContain('source-data/*.md')
  })

  it('ships strong SEO and crawl entrypoints', () => {
    const page = readFileSync(join(process.cwd(), 'src/pages/index.astro'), 'utf8')
    expect(page).toContain('property="og:title"')
    expect(page).toContain('property="og:type" content="profile"')
    expect(page).toContain('<html lang="en">')
    expect(page).toContain('name="twitter:card" content="summary_large_image"')
    expect(page).toContain('property="og:image:width"')
    expect(page).toContain('name="robots"')
    expect(page).toContain('rel="canonical"')
    expect(page).toContain('rel="alternate" type="text/markdown"')

    expect(existsSync(join(process.cwd(), 'src/pages/robots.txt.ts'))).toBe(true)
    expect(existsSync(join(process.cwd(), 'src/pages/sitemap.xml.ts'))).toBe(true)
    expect(existsSync(join(process.cwd(), 'src/pages/llms.txt.ts'))).toBe(true)
    expect(existsSync(join(process.cwd(), 'public/llms.txt'))).toBe(false)
  })
})
