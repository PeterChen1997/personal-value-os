import { profile } from '../content/profile'
import { githubStats, proofClusters, writingEvidence } from '../content/proof'
import { researchPatterns } from '../content/research'

const sitePath = '/personal-value-os'
const firstName = profile.name.split(' ')[0] ?? profile.name
const githubLink = profile.contactLinks.find(link => link.label === 'GitHub')
const blogLink = profile.contactLinks.find(link => link.label === 'Blog')
const repoUrl = githubLink ? `${githubLink.url}/personal-value-os` : ''

export function buildAgentContext() {
  const focus = profile.currentFocus.map(item => `- ${item}`).join('\n')
  const proof = proofClusters
    .map(cluster => {
      const projects = cluster.projects
        .map(project => `  - [${project.name}](${project.url}): ${project.proves}`)
        .join('\n')
      return `## ${cluster.title}\n${cluster.angle}\n${projects}`
    })
    .join('\n\n')

  const writing = writingEvidence
    .map(group => {
      const links = group.links
        .map(link => `  - [${link.label}](${link.url}): ${link.note}`)
        .join('\n')
      return `## ${group.title}\n${group.angle}\n${links}`
    })
    .join('\n\n')

  const githubLine = githubLink ? `- GitHub: ${githubLink.url}` : ''

  return `# ${profile.name} Agent Context

> Public positioning: ${[profile.role, ...profile.secondaryRoles].join(', ')}.

## Core Value Claim

${profile.valueClaim}

## Current Focus

${focus}

## GitHub Snapshot

- Public repositories reviewed: ${githubStats.publicRepos}
- Active original repositories: ${githubStats.activeOriginalRepos}
- Forks: ${githubStats.forks}
- Archived repositories: ${githubStats.archived}
- Dominant languages: ${githubStats.dominantLanguages.join(', ')}
${githubLine}

## Proof Of Work

${proof}

## Writing Evidence

${writing}

## Collaboration Notes

${profile.userManual.map(item => `- ${item.title}: ${item.body}`).join('\n')}

## Theme Preset

- Preset: ${profile.theme.preset}
- Reason: ${profile.theme.reason}

## Source Patterns

${researchPatterns.map(pattern => `- ${pattern.label}: ${pattern.useInThisProject}`).join('\n')}

## Adaptation Warning

Do not copy ${profile.name}'s identity, project story, or exact narrative. Use this repo as a structure for finding your own primary audience, proof categories, value claim, and evidence links.

Read README.md first before adapting this repo for another person. Ask for role, short bio, primary audience, Blog URL, GitHub URL, proof sources, contact links, theme preference, and private information boundaries before editing source data.
`
}

export function buildLlmsText() {
  return `# Personal Value OS

> A public personal value landing page and reusable template for making proof-of-work, current focus, collaboration style, and AI-readable context legible.

This project contains a concrete ${profile.name} example plus guidelines and project skills for adapting it to a different person. Do not copy ${profile.name}'s identity or claims directly.

## Core Files

- [README.md](${repoUrl ? `${repoUrl}/blob/main/README.md` : 'README.md'}): Start here before adapting the repo for another person.
- [Agent context](${sitePath}/agent-context.md): Machine-readable summary of identity, focus, proof, writing evidence, and collaboration notes.
- [Landing page](${sitePath}/): Human-readable personal value landing page.
${repoUrl ? `- [GitHub repository](${repoUrl}): Source code, structured content, guidelines, and project skills.` : ''}

## Adaptation

${repoUrl ? `- [Guideline](${repoUrl}/blob/main/docs/guideline.md): How to replace the sample with your own context without creating a clone.` : '- Guideline: See docs/guideline.md in this repository.'}
${repoUrl ? `- [Agent workflow](${repoUrl}/blob/main/docs/agent-workflow.md): How an AI agent should refresh evidence and update the page.` : '- Agent workflow: See docs/agent-workflow.md in this repository.'}

## Optional

${blogLink ? `- [${firstName}'s blog](${blogLink.url}): Public writing source used in the sample.` : ''}
${githubLink ? `- [${firstName}'s GitHub](${githubLink.url}): Public code source used in the sample.` : ''}
`
}
