/**
 * Fail the build if a typographic dash creeps back into the source.
 *
 * En and em dashes are the single most reliable tell that copy was pasted out
 * of a chat window rather than written, and this site sells engineering
 * judgement to people who notice. Hyphens inside words are fine; these five
 * characters are not.
 *
 * Run with `npm run check:dashes`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const BANNED = {
  '–': 'en dash',
  '—': 'em dash',
  '‒': 'figure dash',
  '―': 'horizontal bar',
  '−': 'minus sign',
}

const ROOTS = ['src', 'index.html']
const EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.css', '.html', '.json', '.md'])
const SKIP_DIRS = new Set(['node_modules', 'dist', 'dist-ssr', '.git'])

const findings = []

function scanFile(path) {
  const lines = readFileSync(path, 'utf8').split(/\r?\n/)
  lines.forEach((line, i) => {
    for (const [char, name] of Object.entries(BANNED)) {
      const column = line.indexOf(char)
      if (column !== -1) {
        findings.push({ path, line: i + 1, column: column + 1, name, text: line.trim() })
      }
    }
  })
}

function scan(target) {
  const stats = statSync(target)
  if (stats.isFile()) {
    if (EXTENSIONS.has(extname(target))) scanFile(target)
    return
  }
  for (const entry of readdirSync(target, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    scan(join(target, entry.name))
  }
}

ROOTS.forEach(scan)

if (findings.length) {
  console.error(`Found ${findings.length} typographic dash(es). Use a comma, a colon, or rewrite:\n`)
  for (const f of findings) {
    console.error(`  ${f.path}:${f.line}:${f.column}  [${f.name}]  ${f.text.slice(0, 100)}`)
  }
  process.exit(1)
}

console.log('No typographic dashes found.')
