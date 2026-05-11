import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const sourceRoot = resolve(repoRoot, 'source-data')

export function sourcePath(fileName: string) {
  return resolve(sourceRoot, fileName)
}

export function loadSourceData<T>(fileName: string): T {
  const markdown = readFileSync(sourcePath(fileName), 'utf8')
  const match = markdown.match(/```json data\s+([\s\S]*?)\s+```/)

  if (!match) {
    throw new Error(`Missing \`\`\`json data block in source-data/${fileName}`)
  }

  return JSON.parse(match[1]) as T
}

export function loadSourceMarkdown(fileName: string) {
  return readFileSync(sourcePath(fileName), 'utf8')
}
