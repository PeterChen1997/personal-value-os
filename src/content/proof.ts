import { loadSourceData } from './source'

export type ProjectProof = {
  name: string
  url: string
  kind: string
  stack: string
  status: string
  proves: string
}

export type ProofCluster = {
  title: string
  angle: string
  projects: ProjectProof[]
}

export type WritingEvidence = {
  title: string
  angle: string
  links: Array<{
    label: string
    url: string
    note: string
  }>
}

export type GithubStats = {
  publicRepos: number
  activeOriginalRepos: number
  forks: number
  archived: number
  dominantLanguages: string[]
}

const githubSource = loadSourceData<{
  githubStats: GithubStats
  proofClusters: ProofCluster[]
}>('github-proof.md')

const writingSource = loadSourceData<{
  writingEvidence: WritingEvidence[]
}>('writing-evidence.md')

export const githubStats = githubSource.githubStats
export const proofClusters = githubSource.proofClusters
export const writingEvidence = writingSource.writingEvidence
