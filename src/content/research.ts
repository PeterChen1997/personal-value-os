import { loadSourceData } from './source'

export type ResearchPattern = {
  key: string
  label: string
  source: string
  sourceUrl: string
  lesson: string
  useInThisProject: string
}

export const { researchPatterns } = loadSourceData<{
  researchPatterns: ResearchPattern[]
}>('research-patterns.md')
