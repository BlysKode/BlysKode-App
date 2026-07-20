import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { SERVICE_LIST, ADDITIONAL } from '../data/services'

export default function ServicesOverview() {
  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
            ]}
          />
          <span className="section-pill">Our Services</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Three practices. <span className="text-gradient">One engineering partner.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Blyskode helps startups, SaaS companies, and growing enterprises build AI-powered
            products and scalable cloud platforms. Explore each practice below.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SERVICE_LIST.map(({ slug, icon: Icon, title, tagline, capabilities }) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="spotlight-card group flex flex-col rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-colors hover:border-cyber/40"
              >
                <div className="mb-5 inline-grid size-13 place-items-center rounded-xl border border-edge bg-surface text-cyber transition-colors group-hover:border-cyber/40">
                  <Icon size={24} />
                </div>
                <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-5">
                  {capabilities.map((c) => (
                    <li key={c.title} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check size={15} className="mt-0.5 shrink-0 text-cyber" />
                      {c.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyber">
                  Learn more
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-14 mb-5 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Also available
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADDITIONAL.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="spotlight-card rounded-2xl border border-edge bg-panel/50 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </div>
  )
}
