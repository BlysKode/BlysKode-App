import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Brand from './Brand'
import { SERVICE_LIST } from '../data/services'
import { HIRE_LIST } from '../data/hire'

const SERVICE_MENU = SERVICE_LIST.map((s) => ({
  label: s.title,
  to: `/services/${s.slug}`,
  hint: s.tagline,
}))

const HIRE_MENU = HIRE_LIST.map((r) => ({
  label: r.role,
  to: `/hire-developers/${r.slug}`,
  hint: r.tagline,
}))

const LINKS = [
  { label: 'Services', to: '/services', menu: SERVICE_MENU, footer: 'View all services' },
  { label: 'Hire Developers', to: '/hire-developers', menu: HIRE_MENU, footer: 'View all roles' },
  { label: 'Work', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

/* ------------------------------------------------------------------ desktop */

function MegaMenu({ link }) {
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)
  const { pathname } = useLocation()

  // A route change while the pointer still rests on the trigger would leave
  // the panel open over the new page.
  useEffect(() => setOpen(false), [pathname])

  return (
    <div
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
    >
      <Link
        to={link.to}
        aria-expanded={open}
        className="inline-flex items-center gap-1 py-2 text-[0.92rem] font-medium text-body transition-colors hover:text-ink"
      >
        {link.label}
        <ChevronDown
          size={14}
          className={`mt-px transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </Link>

      {/* pt-3 keeps a hover bridge between the trigger and the panel */}
      <div
        className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="w-[620px] overflow-hidden rounded-xl border border-line bg-white shadow-[0_4px_10px_rgba(11,27,43,0.05),0_24px_50px_-16px_rgba(11,27,43,0.25)]">
          <ul className="grid max-h-[62vh] grid-cols-2 gap-0.5 overflow-y-auto p-2.5">
            {link.menu.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-paper-soft"
                >
                  <span className="block text-[0.88rem] font-semibold text-ink transition-colors group-hover:text-signal">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] leading-snug text-muted">
                    {item.hint}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={link.to}
            className="flex items-center justify-between border-t border-line bg-paper-soft px-5 py-3 text-[0.84rem] font-semibold text-ink transition-colors hover:text-signal"
          >
            {link.footer}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------- mobile */

function MobileItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false)

  if (!link.menu) {
    return (
      <NavLink
        to={link.to}
        end={link.to === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          `block min-h-12 py-2.5 text-[1.02rem] font-medium ${isActive ? 'text-signal' : 'text-ink'}`
        }
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <div className="border-b border-line-soft last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-12 w-full items-center justify-between py-2.5 text-left text-[1.02rem] font-medium text-ink"
      >
        {link.label}
        <ChevronDown
          size={18}
          className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="mb-3 space-y-0.5 border-l border-line pl-4">
          {link.menu.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="block min-h-10 py-1.5 text-[0.9rem] text-body"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={link.to}
              onClick={onNavigate}
              className="block min-h-10 py-1.5 text-[0.9rem] font-semibold text-signal"
            >
              {link.footer}
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

/* ---------------------------------------------------------------- component */

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const progress = useRef(null)

  // One passive listener, read inside rAF: scroll position drives both the
  // header background and the read-progress rule, so they can share a frame.
  useEffect(() => {
    let queued = false
    const measure = () => {
      const y = window.scrollY
      setStuck(y > 12)
      if (progress.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        progress.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
      }
      queued = false
    }
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(measure)
      }
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The mobile sheet scrolls its own content; locking the body stops the page
  // behind it from scrolling too.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      /* Above the floating WhatsApp button (z-60), so the open mobile sheet
         is not punctured by it. */
      className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,box-shadow,border-color] duration-300 ${
        stuck
          ? 'border-b border-line bg-white/85 shadow-[0_1px_3px_rgba(11,27,43,0.04)] backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-[68px] items-center gap-8">
        <Brand />

        <nav className="ml-2 hidden items-center gap-7 lg:flex">
          {LINKS.map((link) =>
            link.menu ? (
              <MegaMenu key={link.label} link={link} />
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-[0.92rem] font-medium transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-body'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="tel:+13473667437"
            className="hidden text-[0.9rem] font-medium text-body transition-colors hover:text-ink xl:block"
          >
            +1 (347) 366 7437
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm hidden lg:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 grid size-11 place-items-center rounded-lg text-ink lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Read progress. Only meaningful once the header has a surface. */}
      <span
        ref={progress}
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-signal transition-opacity duration-300 ${
          stuck ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'scaleX(0)' }}
      />

      {open && (
        <div className="max-h-[calc(100svh-68px)] overflow-y-auto border-t border-line bg-white px-5 pt-2 pb-8 sm:px-7 lg:hidden">
          <nav>
            {LINKS.map((link) => (
              <MobileItem key={link.label} link={link} onNavigate={() => setOpen(false)} />
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-6 w-full"
          >
            Start a project
            <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      )}
    </header>
  )
}
