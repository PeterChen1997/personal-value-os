import { loadSourceData } from './source'

export type EvidenceLink = {
  label: string
  url: string
}

export type ValuePillar = {
  title: string
  summary: string
  evidence: EvidenceLink[]
}

export type UserManualItem = {
  title: string
  body: string
}

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

export type Profile = {
  name: string
  handle: string
  avatarUrl: string
  location: string
  role: string
  secondaryRoles: string[]
  valueClaim: string
  oneLiner: string
  currentFocus: string[]
  contactLinks: EvidenceLink[]
  valuePillars: ValuePillar[]
  audienceExpectations: Array<{
    audience: string
    wants: string
  }>
  userManual: UserManualItem[]
  theme: ProfileTheme
}

export const profile = loadSourceData<Profile>('profile.md')
