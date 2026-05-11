import { loadSourceData } from './source'

export type LocalizedText = {
  zh: string
  en: string
}

export type PageCopy = {
  defaultLanguage: 'zh' | 'en'
  ui: Record<string, LocalizedText>
  profile: {
    role: LocalizedText
    valueClaim: LocalizedText
    oneLiner: LocalizedText
    currentFocus: LocalizedText[]
  }
  valuePillars: Array<{
    title: LocalizedText
    summary: LocalizedText
  }>
  proofClusters: Array<{
    title: LocalizedText
    angle: LocalizedText
    projects: Array<{
      kind: LocalizedText
      stack: LocalizedText
      status: LocalizedText
      proves: LocalizedText
    }>
  }>
  writingEvidence: Array<{
    title: LocalizedText
    angle: LocalizedText
    links: Array<{
      label: LocalizedText
      note: LocalizedText
    }>
  }>
  userManual: Array<{
    title: LocalizedText
    body: LocalizedText
  }>
  researchPatterns: Array<{
    label: LocalizedText
    useInThisProject: LocalizedText
  }>
  theme: {
    reason: LocalizedText
  }
}

export const pageCopy = loadSourceData<PageCopy>('page-copy.md')
