import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import { usePageMeta } from '../seo/usePageMeta'

export default function Layout() {
  const location = useLocation()
  usePageMeta(location.pathname)

  // On route change: honor an in-page hash, otherwise reset to top, then
  // let ScrollTrigger recompute against the new page height.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    ScrollTrigger.refresh()
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
