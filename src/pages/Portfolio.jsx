import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { PROJECTS } from '../data/portfolio'
import { revealIn } from '../lib/motion'

const CTA_LABEL = {
  'case-study': 'Read the case study',
  sites: 'View the websites',
  gallery: 'View the work',
}

export default function Portfolio() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current, { stagger: 0.1 }), { scope: root })

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/portfolio' },
        ]}
        eyebrow="Work"
        title="Systems we designed, built and still stand behind."
        lede="The problem, the architecture and how it actually works. Where we can show numbers we show them, and where we cannot we say so."
      />

      <div ref={root}>
        <section className="section">
          <div className="shell space-y-6">
            {PROJECTS.map((project, i) => (
              <article key={project.slug} data-reveal className="card card-hoverable group overflow-hidden">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-line lg:aspect-auto lg:border-b-0">
                    <img
                      src={project.image}
                      alt={`${project.title}, a Blyskode project`}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <span className="font-mono text-[0.73rem] tracking-wide text-muted">
                      {project.category}
                    </span>
                    <h2 className="mt-3 text-[1.4rem] leading-snug group-hover:text-signal sm:text-[1.7rem]">
                      {project.title}
                    </h2>
                    <p className="mt-3.5 text-[0.95rem] leading-relaxed text-body">
                      {project.summary}
                    </p>

                    {project.tech && (
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="rounded border border-line bg-paper-soft px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 6 && (
                          <span className="rounded border border-line bg-paper-soft px-2 py-0.5 font-mono text-[0.7rem] text-faint">
                            +{project.tech.length - 6}
                          </span>
                        )}
                      </div>
                    )}

                    <span className="mt-7 inline-flex items-center gap-1.5 text-[0.89rem] font-semibold text-signal">
                      {CTA_LABEL[project.kind] ?? 'View the work'}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <PageCTA
        heading="Want something like this built?"
        sub="Tell us what you are building and you get a scope, a timeline and an honest estimate inside one business day."
      />
    </>
  )
}
