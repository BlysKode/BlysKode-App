import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { CORE_LIST, SPECIALIZED_LIST, ADDITIONAL } from '../data/services'
import { revealIn } from '../lib/motion'

export default function ServicesOverview() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        eyebrow="Services"
        title="Everything it takes to get a product live."
        lede="Three core practices we run end to end, plus eight specialisms you can bring us in for on their own. One team, one contract, whichever you need."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-primary">
            Start a project
            <ArrowRight size={16} className="arrow" />
          </Link>
          <Link to="/portfolio" className="btn btn-secondary">
            See the work
          </Link>
        </div>
      </PageHeader>

      <div ref={root}>
        {/* Core practices */}
        <section className="py-20 lg:py-28">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              Core practices
            </h2>
            <p data-reveal className="lede mt-4">
              Most engagements start here. Each one is a standing team, not a role we staff up
              when a deal closes.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {CORE_LIST.map(({ slug, icon: Icon, title, tagline, capabilities, tech }) => (
                <article key={slug} data-reveal className="card card-hoverable group flex flex-col p-7">
                  <Link to={`/services/${slug}`} className="flex h-full flex-col">
                    <span className="grid size-11 place-items-center rounded-lg border border-line bg-paper-soft text-signal transition-colors group-hover:border-signal/30 group-hover:bg-signal-wash">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 text-[1.18rem] group-hover:text-signal">{title}</h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-body">{tagline}</p>

                    <ul className="mt-6 space-y-3 border-t border-line-soft pt-6">
                      {capabilities.map((c) => (
                        <li key={c.title} className="flex gap-3 text-[0.88rem] text-body">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] size-1 shrink-0 rounded-full bg-faint"
                          />
                          {c.title}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line bg-paper-soft px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.88rem] font-semibold text-signal">
                      How we run it
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specialisms */}
        <section className="border-y border-line bg-paper-soft py-20 lg:py-28">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              Specialisms
            </h2>
            <p data-reveal className="lede mt-4">
              Scoped engagements when you know exactly what you need building.
            </p>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {SPECIALIZED_LIST.map(({ slug, icon: Icon, title, tagline }) => (
                <li key={slug} data-reveal>
                  <Link
                    to={`/services/${slug}`}
                    className="group flex h-full flex-col bg-white p-6 transition-colors hover:bg-paper-soft"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <Icon size={20} strokeWidth={1.8} className="text-signal" />
                      <ArrowUpRight
                        size={15}
                        className="text-faint transition-colors group-hover:text-signal"
                      />
                    </span>
                    <h3 className="mt-5 text-[1rem] group-hover:text-signal">{title}</h3>
                    <p className="mt-2 text-[0.85rem] leading-snug text-muted">{tagline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Around the build */}
        <section className="py-20 lg:py-28">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              Around the build
            </h2>
            <p data-reveal className="lede mt-4">
              The work that decides whether a good product finds anyone.
            </p>

            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {ADDITIONAL.map(({ icon: Icon, title, desc }) => (
                <div key={title} data-reveal>
                  <Icon size={20} strokeWidth={1.8} className="text-signal" />
                  <h3 className="mt-4 text-[1rem]">{title}</h3>
                  <p className="mt-2 text-[0.89rem] leading-relaxed text-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PageCTA />
    </>
  )
}
