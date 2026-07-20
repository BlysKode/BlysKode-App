import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = resolve(fileURLToPath(import.meta.url), '../..')

const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const { ROUTES, buildHead, buildNotFoundHead } = await import(resolve(root, 'src/seo/pages.js'))

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the head/html placeholders')
}

for (const path of ROUTES) {
  const appHtml = render(path)
  const head = buildHead(path)
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', appHtml)

  const outFile =
    path === '/'
      ? resolve(root, 'dist/index.html')
      : resolve(root, `dist${path}/index.html`)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, page)
  console.log(`Prerendered ${path} -> ${outFile.replace(root + '/', '')} (${appHtml.length} bytes)`)
}

// 404 page: render an unmatched location so it hydrates cleanly, and
// write to dist/404.html (Vercel serves this with a 404 status).
const notFoundHtml = render('/__not_found__')
const notFoundPage = template
  .replace('<!--app-head-->', buildNotFoundHead())
  .replace('<!--app-html-->', notFoundHtml)
writeFileSync(resolve(root, 'dist/404.html'), notFoundPage)
console.log('Prerendered 404 -> dist/404.html')

// Clean up the SSR build output
const { rmSync } = await import('node:fs')
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
