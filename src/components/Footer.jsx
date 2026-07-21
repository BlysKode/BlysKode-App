import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Zap } from 'lucide-react'

function BrandIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const BRAND_PATHS = {
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
}

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const FOOTER_SERVICES = [
  { label: 'Product Engineering', to: '/services/product-engineering' },
  { label: 'AI & Automation', to: '/services/ai-automation' },
  { label: 'Cloud & DevOps', to: '/services/cloud-devops' },
  { label: 'All Services', to: '/services' },
]

const SOCIALS = [
  { path: BRAND_PATHS.linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyber to-neon text-ink">
                <Zap size={18} strokeWidth={2.5} />
              </span>
              <span>
                Blys<span className="text-gradient">kode</span>
              </span>
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
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-muted transition-colors hover:text-cyber">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-muted transition-colors hover:text-cyber">
                    {label}
                  </Link>
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
                <a href="mailto:blyskode@gmail.com" className="transition-colors hover:text-cyber">
                  blyskode@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyber" />
                <a href="tel:+923338640860" className="transition-colors hover:text-cyber">
                  +92 333 8640860
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyber" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Blyskode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
