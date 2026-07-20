import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Check } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { SERVICE_DETAILS } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICE_DETAILS[slug]
  if (!service) return <Navigate to="/services" replace />

  const { icon: Icon, title, tagline, intro, capabilities, deliverables, tech } = service

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full bg-neon/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: title, path: `/services/${slug}` },
            ]}
          />
          <div className="mb-6 inline-grid size-14 place-items-center rounded-2xl border border-edge bg-surface text-cyber">
            <Icon size={26} />
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl font-display text-lg text-cyber">{tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://calendly.com/blyskode/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
            >
              <CalendarDays size={16} />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What we do</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.map(({ icon: CapIcon, title: capTitle, desc }) => (
              <div
                key={capTitle}
                className="spotlight-card rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                  <CapIcon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{capTitle}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + tech */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What you get</h2>
            <ul className="mt-6 space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-cyber/40 bg-cyber/10 text-cyber">
                    <Check size={14} />
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Tools we use</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-edge bg-panel/60 px-4 py-2 text-sm text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA heading={`Ready to start with ${title}?`} />
    </div>
  )
}
