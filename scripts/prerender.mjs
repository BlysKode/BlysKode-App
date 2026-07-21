import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = resolve(fileURLToPath(import.meta.url), '../..')

const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const { ROUTES, SITE, buildHead, buildNotFoundHead } = await import(resolve(root, 'src/seo/pages.js'))

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

// Generate sitemap.xml from the actual routes so it never drifts.
const priority = (p) => (p === '/' ? '1.0' : p === '/services' ? '0.9' : p.startsWith('/services/') || p === '/blog' ? '0.8' : '0.7')
const freq = (p) => (p === '/' || p === '/blog' ? 'weekly' : 'monthly')
const urls = ROUTES.map(
  (p) =>
    `  <url>\n    <loc>${SITE}${p === '/' ? '/' : p}</loc>\n    <changefreq>${freq(p)}</changefreq>\n    <priority>${priority(p)}</priority>\n  </url>`,
).join('\n')
writeFileSync(
  resolve(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`Generated sitemap.xml with ${ROUTES.length} URLs`)

// Clean up the SSR build output
const { rmSync } = await import('node:fs')
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
