import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import { revealIn } from '../lib/motion'

/**
 * Selected work, stated as outcomes.
 *
 * Deliberately not quotes with star ratings. These are our own projects, and
 * dressing them up as five star client reviews is the fastest way to lose a
 * reader who has seen that trick before. Each card links to the case study so
 * the claim is checkable.
 */

const FEATURED = ['event-driven-serverless-fraud-detection', 'seo-digital-marketing', 'web-development-wordpress']

const HEADLINE_METRIC = {
  'event-driven-serverless-fraud-detection': ['Milliseconds', 'to score a live transaction'],
  'seo-digital-marketing': ['6.5K to 17K', 'organic impressions in three months'],
  'web-development-wordpress': ['US and UK', 'clients on live WooCommerce stores'],
}

export default function Results() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  const projects = FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean)
  if (!projects.length) return null

  return (
    <section ref={root} className="border-b border-line bg-paper-soft section-lg">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="eyebrow">
              Selected work
            </p>
            <h2 data-reveal className="mt-5 max-w-[20ch] text-[2.1rem] sm:text-[2.6rem]">
              Shipped, running, and measurable.
            </h2>
          </div>
          <Link
            data-reveal
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[0.92rem] font-semibold whitespace-nowrap text-signal md:pb-2"
          >
            Browse every project
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="stack-top grid gap-5 md:grid-cols-3">
          {projects.map((project) => {
            const [metric, metricLabel] = HEADLINE_METRIC[project.slug] ?? ['', '']
            return (
              <article key={project.slug} data-reveal className="card card-hoverable group flex flex-col overflow-hidden">
                <Link to={`/portfolio/${project.slug}`} className="flex h-full flex-col">
                  <div className="aspect-[16/10] overflow-hidden border-b border-line bg-paper-mute">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      width="640"
                      height="400"
                      className="size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-[0.72rem] tracking-wide text-muted">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-[1.08rem] leading-snug group-hover:text-signal">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-[0.89rem] leading-relaxed text-body">
                      {project.tagline}
                    </p>

                    {metric && (
                      <div className="mt-auto border-t border-line-soft pt-5">
                        <p className="font-display text-[1.22rem] font-semibold text-ink">
                          {metric}
                        </p>
                        <p className="mt-0.5 text-[0.8rem] text-muted">{metricLabel}</p>
                      </div>
                    )}

                    <span className="mt-5 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-signal">
                      Read the case study
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
