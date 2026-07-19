import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Menu, X, Zap } from 'lucide-react'

const LINKS = [
  { label: 'Home', target: '#home' },
  { label: 'Services', target: '#services' },
  { label: 'Why Blyskode', target: '#why' },
  { label: 'Contact', target: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useGSAP(() => {
    gsap.from('.nav-item', {
      y: -24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2,
    })
  })

  const scrollTo = (target) => {
    setOpen(false)
    const smoother = ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(target, true, 'top 80px')
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/5 bg-ink/70 px-5 py-4 backdrop-blur-xl md:px-10">
        <button
          type="button"
          onClick={() => scrollTo('#home')}
          className="nav-item flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyber to-neon text-ink">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          Blys<span className="text-gradient">kode</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.label} className="nav-item">
              <button
                type="button"
                onClick={() => scrollTo(link.target)}
                className="text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo('#contact')}
          className="nav-item hidden rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2 text-sm font-semibold text-ink transition-[filter] hover:brightness-110 md:block"
        >
          Let&apos;s Talk
        </button>

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
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.target)}
                  className="text-base font-medium text-slate-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="w-full rounded-full bg-gradient-to-r from-cyber to-neon px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Let&apos;s Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
