import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { PROJECTS } from '../data/portfolio'

export default function Portfolio() {
  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
            ]}
          />
          <span className="section-pill">Portfolio</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Work we&apos;ve <span className="text-gradient">shipped</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A look at real systems Blyskode has designed and built: the problem, the architecture,
            and how it works.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to={`/portfolio/${p.slug}`}
                className="spotlight-card group grid overflow-hidden rounded-2xl border border-edge bg-panel/60 backdrop-blur transition-colors hover:border-cyber/40 lg:grid-cols-[1.15fr_1fr]"
              >
                <div className="relative order-2 aspect-[16/9] overflow-hidden border-t border-edge lg:order-1 lg:aspect-auto lg:border-t-0 lg:border-r">
                  <img
                    src={p.image}
                    alt={`${p.title} architecture diagram`}
                    loading="lazy"
                    className="size-full object-cover object-left transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="order-1 p-7 lg:order-2 lg:p-8">
                  <span className="text-xs font-medium tracking-[0.15em] text-cyber uppercase">
                    {p.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 6).map((t) => (
                      <span key={t} className="rounded-full border border-edge bg-surface px-3 py-1 text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 6 && (
                      <span className="rounded-full border border-edge bg-surface px-3 py-1 text-xs text-muted">
                        +{p.tech.length - 6} more
                      </span>
                    )}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyber">
                    Read the case study
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Want something like this built?" sub="Tell us what you're building and we'll reply within 24 hours with a clear plan." />
    </div>
  )
}
