import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Brand from './Brand'

const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Product Engineering', to: '/services/product-engineering' },
      { label: 'AI & Automation', to: '/services/ai-automation' },
      { label: 'Cloud & DevOps', to: '/services/cloud-devops' },
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Mobile App Development', to: '/services/mobile-app-development' },
      { label: 'SaaS Development', to: '/services/saas-development' },
      { label: 'MVP Development', to: '/services/mvp-development' },
      { label: 'All services', to: '/services' },
    ],
  },
  {
    heading: 'Hire developers',
    links: [
      { label: 'Full Stack Developers', to: '/hire-developers/full-stack-developers' },
      { label: 'MERN Stack Developers', to: '/hire-developers/mern-stack-developers' },
      { label: 'AI Engineers', to: '/hire-developers/ai-engineers' },
      { label: 'Mobile App Developers', to: '/hire-developers/mobile-app-developers' },
      { label: 'DevOps Engineers', to: '/hire-developers/devops-engineers' },
      { label: 'WordPress Developers', to: '/hire-developers/wordpress-developers' },
      { label: 'All roles', to: '/hire-developers' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Work', to: '/portfolio' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'WooCommerce development', to: '/woocommerce-development' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Brand size={30} />
            <p className="mt-5 max-w-[38ch] text-[0.92rem] leading-relaxed text-body">
              A software engineering partner in Brooklyn, New York. We design, build and run web,
              mobile, AI and cloud software for founders and product teams.
            </p>

            <ul className="mt-7 space-y-3 text-[0.9rem]">
              <li className="flex items-start gap-3 text-body">
                <Mail size={16} className="mt-1 shrink-0 text-faint" />
                <a
                  href="mailto:blyskode@gmail.com"
                  className="transition-colors hover:text-signal"
                >
                  blyskode@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-body">
                <Phone size={16} className="mt-1 shrink-0 text-faint" />
                <a href="tel:+13473667437" className="transition-colors hover:text-signal">
                  +1 (347) 366 7437
                </a>
              </li>
              <li className="flex items-start gap-3 text-body">
                <MapPin size={16} className="mt-1 shrink-0 text-faint" />
                Brooklyn, New York
              </li>
            </ul>

            <a
              href="https://www.linkedin.com/company/blyskode"
              target="_blank"
              rel="noreferrer"
              aria-label="Blyskode on LinkedIn"
              className="mt-7 grid size-9 place-items-center rounded-md border border-line bg-white text-muted transition-colors hover:border-signal/40 hover:bg-signal-wash hover:text-signal"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d={LINKEDIN_PATH} />
              </svg>
            </a>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="font-display text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase">
                {column.heading}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[0.89rem] text-body transition-colors hover:text-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.82rem] text-muted">
            © {new Date().getFullYear()} Blyskode. All rights reserved.
          </p>
          <p className="text-[0.82rem] text-muted">
            Built by the same team that would build yours.
          </p>
        </div>
      </div>
    </footer>
  )
}
