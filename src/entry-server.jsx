import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used only by scripts/prerender.mjs at build time. The lazy 3D scene
// renders its Suspense fallback here — the canvas has no SEO content.
export function render() {
  return renderToString(<App />)
}
