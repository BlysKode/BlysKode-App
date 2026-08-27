import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CORE_LIST, SPECIALIZED_LIST } from '../data/services'
import { revealIn } from '../lib/motion'

export default function Services() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  return (
    <section id="services" ref={root} className="section-lg">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="eyebrow">
              What we do
            </p>
            <h2 data-reveal className="mt-5 max-w-[18ch] text-[2.1rem] sm:text-[2.7rem]">
              Three practices, one accountable team.
            </h2>
          </div>
          <p data-reveal className="lede max-w-[46ch] md:pb-1.5">
            Most of our work sits where product engineering, applied AI and cloud meet. You get
            one team across all three, so nothing falls between contractors.
          </p>
        </div>

        {/* Core practices */}
        <div className="stack-top grid gap-5 md:grid-cols-3">
          {CORE_LIST.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.slug}
                data-reveal
                className="card card-hoverable group flex flex-col p-7"
              >
                <span className="grid size-11 place-items-center rounded-lg border border-line bg-paper-soft text-signal transition-colors group-hover:border-signal/30 group-hover:bg-signal-wash">
                  <Icon size={21} strokeWidth={1.8} />
                </span>

                <h3 className="mt-6 text-[1.18rem]">{service.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-body">{service.tagline}</p>

                <ul className="mt-6 space-y-3 border-t border-line-soft pt-6">
                  {service.capabilities.map((c) => (
                    <li key={c.title} className="flex gap-3 text-[0.88rem] text-body">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] size-1 shrink-0 rounded-full bg-faint"
                      />
                      {c.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-1.5 pt-0">
                  {service.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-paper-soft px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.88rem] font-semibold text-signal"
                >
                  How we run it
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            )
          })}
        </div>

        {/* Everything else, as a dense index rather than eight more cards */}
        <div data-reveal className="mt-8 rounded-xl border border-line bg-white p-2">
          <p className="px-5 pt-4 pb-3 font-display text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
            Also delivered as standalone engagements
          </p>
          <ul className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALIZED_LIST.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-white p-5 transition-colors hover:bg-paper-soft"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-[0.92rem] font-semibold text-ink group-hover:text-signal">
                      {service.title}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="mt-0.5 shrink-0 text-faint transition-colors group-hover:text-signal"
                    />
                  </span>
                  <span className="mt-1.5 text-[0.82rem] leading-snug text-muted">
                    {service.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
