import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Mail, MapPin, Phone, Zap } from 'lucide-react'

function BrandIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const BRAND_PATHS = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
}

const QUICK_LINKS = [
  { label: 'Home', target: '#home' },
  { label: 'Services', target: '#services' },
  { label: 'Why Blyskode', target: '#why' },
  { label: 'Contact', target: '#contact' },
]

const FOOTER_SERVICES = [
  'Full Stack Development',
  'AI Engineering & Automation',
  'DevOps & Cloud Services',
  'Mobile App Development',
  'SEO & Digital Marketing',
  'Quality Assurance',
]

const SOCIALS = [
  { path: BRAND_PATHS.github, label: 'GitHub', href: 'https://github.com' },
  { path: BRAND_PATHS.linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { path: BRAND_PATHS.x, label: 'Twitter / X', href: 'https://x.com' },
  { path: BRAND_PATHS.instagram, label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  const scrollTo = (target) => {
    const smoother = ScrollSmoother.get()
    if (smoother) smoother.scrollTo(target, true, 'top 80px')
    else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyber to-neon text-ink">
                <Zap size={18} strokeWidth={2.5} />
              </span>
              Blys<span className="text-gradient">kode</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Transforming businesses with modern AI &amp; cloud solutions. We design, build, and
              scale the technology behind ambitious companies.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ path, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-edge bg-panel text-muted transition-all hover:border-cyber/50 hover:text-cyber"
                >
                  <BrandIcon path={path} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map(({ label, target }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(target)}
                    className="text-sm text-muted transition-colors hover:text-cyber"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => scrollTo('#services')}
                    className="text-left text-sm text-muted transition-colors hover:text-cyber"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyber" />
                <a href="mailto:hello@blyskode.com" className="transition-colors hover:text-cyber">
                  hello@blyskode.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyber" />
                <a href="tel:+10000000000" className="transition-colors hover:text-cyber">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyber" />
                <span>Remote-first · Serving clients worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Blyskode. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with <span className="text-cyber">React</span> ·{' '}
            <span className="text-neon">Three.js</span> ·{' '}
            <span className="text-magenta">GSAP</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
