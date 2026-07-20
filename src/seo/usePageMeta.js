import { useEffect } from 'react'
import { PAGES } from './pages'

/**
 * Client-side title/description sync for SPA navigation. The prerendered
 * HTML already carries the correct tags for the first load; this keeps
 * them right when the user navigates between routes without a reload.
 */
export function usePageMeta(pathname) {
  useEffect(() => {
    const meta = PAGES[pathname]
    if (!meta) return
    document.title = meta.title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', meta.description)
  }, [pathname])
}
