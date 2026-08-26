import { useRef } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ArrowUpRight, CalendarDays, Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { SERVICE_DETAILS, SERVICE_LIST } from '../data/services'
import { revealIn } from '../lib/motion'

export default function ServiceDetail() {
  const { slug } = useParams()
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root, dependencies: [slug] })

  const service = SERVICE_DETAILS[slug]
  if (!service) return <Navigate to="/services" replace />

  const { title, tagline, intro, capabilities, deliverables, tech } = service
  const related = SERVICE_LIST.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: title, path: `/services/${slug}` },
        ]}
        eyebrow="Service"
        title={title}
        deck={tagline}
        lede={intro}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-primary">
            Start a project
            <ArrowRight size={16} className="arrow" />
          </Link>
          <a
            href="https://calendly.com/blyskode/30min"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <CalendarDays size={16} />
            Book a call
          </a>
        </div>
      </PageHeader>

      <div ref={root}>
        {/* Capabilities */}
        <section className="section">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                What the work covers
              </h2>
              <p data-reveal className="mt-4 text-[0.98rem] leading-relaxed text-body">
                Scoped as a whole or picked apart, depending on what your team already has in
                place.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {capabilities.map(({ icon: CapIcon, title: capTitle, desc }) => (
                <div key={capTitle} data-reveal>
                  <span className="grid size-10 place-items-center rounded-lg border border-line bg-paper-soft text-signal">
                    <CapIcon size={19} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-[1.04rem]">{capTitle}</h3>
                  <p className="mt-2 text-[0.91rem] leading-relaxed text-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables and stack */}
        <section className="border-y border-line bg-paper-soft section">
          <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                What you end up with
              </h2>
              <ul className="mt-8 space-y-4">
                {deliverables.map((d) => (
                  <li key={d} data-reveal className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-jade-wash text-jade">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[0.96rem] leading-relaxed text-body">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                What we build it with
              </h2>
              <p data-reveal className="mt-4 text-[0.96rem] leading-relaxed text-body">
                Chosen for how well they will be supported in five years, not for how new they
                are.
              </p>
              <div data-reveal className="mt-7 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[0.8rem] text-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="section">
          <div className="shell">
            <h2 data-reveal className="text-[1.4rem]">
              Often paired with
            </h2>
            <ul className="mt-7 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <li key={s.slug} data-reveal>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex h-full flex-col bg-white p-5 transition-colors hover:bg-paper-soft"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-[0.92rem] font-semibold text-ink group-hover:text-signal">
                        {s.title}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="mt-0.5 shrink-0 text-faint transition-colors group-hover:text-signal"
                      />
                    </span>
                    <span className="mt-1.5 text-[0.82rem] leading-snug text-muted">
                      {s.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <PageCTA heading={`Need ${title.toLowerCase()}?`} />
    </>
  )
}
