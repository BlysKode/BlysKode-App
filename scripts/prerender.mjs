import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const root = resolve(fileURLToPath(import.meta.url), '../..')

const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const appHtml = render()

const indexPath = resolve(root, 'dist/index.html')
const template = readFileSync(indexPath, 'utf-8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}
writeFileSync(indexPath, template.replace('<!--app-html-->', appHtml))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered ${appHtml.length} bytes of HTML into dist/index.html`)
