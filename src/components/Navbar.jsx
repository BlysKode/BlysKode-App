import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Menu, X, Zap } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

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

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.label} className="nav-item">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-white' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="nav-item hidden rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2 text-sm font-semibold text-ink transition-[filter] hover:brightness-110 md:block"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="nav-item text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-white/5 bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 w-full py-2 text-left text-base font-medium text-slate-200"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block w-full rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2.5 text-center text-sm font-semibold text-ink"
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
