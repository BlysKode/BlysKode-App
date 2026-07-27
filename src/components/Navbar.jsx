import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown, Menu, X, Zap } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'
import { HIRE_LIST } from '../data/hire'

const SERVICE_CHILDREN = [
  { label: 'Product Engineering', to: '/services/product-engineering' },
  { label: 'AI & Automation', to: '/services/ai-automation' },
  { label: 'Cloud & DevOps', to: '/services/cloud-devops' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'Custom Software Development', to: '/services/custom-software-development' },
  { label: 'Quality Assurance & Testing', to: '/services/quality-assurance' },
  { label: 'All Services', to: '/services' },
]

const HIRE_CHILDREN = [
  ...HIRE_LIST.map((r) => ({ label: `Hire ${r.short}`, to: `/hire-developers/${r.slug}` })),
  { label: 'All Roles', to: '/hire-developers' },
]

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', children: SERVICE_CHILDREN },
  { label: 'Hire Developers', to: '/hire-developers', children: HIRE_CHILDREN },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function DesktopItem({ link }) {
  const [open, setOpen] = useState(false)

  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        end={link.to === '/'}
        className={({ isActive }) =>
          `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-muted'}`
        }
      >
        {link.label}
      </NavLink>
    )
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
      }}
    >
      <Link
        to={link.to}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-white ${
          open ? 'text-white' : 'text-muted'
        }`}
      >
        {link.label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>
      {/* pt-3 keeps a hover bridge from the trigger to the panel */}
      <div
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity duration-150 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="w-60 rounded-2xl border border-edge bg-panel/95 p-2 shadow-2xl backdrop-blur-xl">
          {link.children.map((c) => (
            <li key={c.to}>
              <Link
                to={c.to}
                className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-cyber"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false)
  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        end={link.to === '/'}
        onClick={onNavigate}
        className="block min-h-11 w-full py-2 text-left text-base font-medium text-slate-200"
      >
        {link.label}
      </NavLink>
    )
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between py-2 text-left text-base font-medium text-slate-200"
      >
        {link.label}
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="mt-1 mb-2 space-y-1 border-l border-edge pl-4">
          {link.children.map((c) => (
            <li key={c.to}>
              <Link
                to={c.to}
                onClick={onNavigate}
                className="block min-h-10 py-1.5 text-sm text-muted"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from('.nav-item', {
      y: -24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2,
    })
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/5 bg-ink/70 px-5 py-4 backdrop-blur-xl md:px-10">
        <Link
          to="/"
          className="nav-item flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyber to-neon text-ink">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          <span>
            Blys<span className="text-gradient">kode</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.label} className="nav-item">
              <DesktopItem link={link} />
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="nav-item hidden rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2 text-sm font-semibold text-ink transition-[filter] hover:brightness-110 lg:block"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="nav-item text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100svh-64px)] overflow-y-auto border-b border-white/5 bg-ink/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.label}>
                <MobileItem link={link} onNavigate={() => setOpen(false)} />
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block w-full rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
