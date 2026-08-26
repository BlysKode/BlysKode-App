import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CalendarDays, Check, ExternalLink } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { PROJECT_BY_SLUG } from '../data/portfolio'
import FraudDetection from '../content/portfolio/event-driven-serverless-fraud-detection.jsx'

const BODIES = {
  'event-driven-serverless-fraud-detection': FraudDetection,
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = PROJECT_BY_SLUG[slug]
  if (!project) return <Navigate to="/portfolio" replace />

  const Body = BODIES[slug]

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-line pt-[120px] pb-14 lg:pt-[148px] lg:pb-20">
        <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[820px] px-5 sm:px-7">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Work', path: '/portfolio' },
              { name: project.title, path: `/portfolio/${project.slug}` },
            ]}
          />
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-5 text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.1rem] leading-snug font-medium text-ink-soft">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-[64ch] text-[1rem] leading-relaxed text-body">
            {project.summary}
          </p>

          {project.highlights && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[0.93rem] text-body">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-jade-wash text-jade">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 flex flex-wrap gap-3">
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
        </div>
      </header>

      {/* Case study body */}
      {project.kind === 'case-study' && Body && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[820px] px-5 sm:px-7">
            <div className="article-prose">
              <Body project={project} />
            </div>

            <div className="mt-14 border-t border-line pt-10">
              <h2 className="text-[1.2rem]">Everything it runs on</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-paper-soft px-3 py-1.5 font-mono text-[0.8rem] text-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image gallery */}
      {project.kind === 'gallery' && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[900px] space-y-8 px-5 sm:px-7">
            {project.images.map((img) => (
              <figure key={img.src} className="card overflow-hidden">
                <img src={img.src} alt={img.caption} loading="lazy" className="w-full" />
                <figcaption className="border-t border-line px-6 py-4 text-[0.9rem] leading-relaxed text-body">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Live sites */}
      {project.kind === 'sites' && (
        <section className="py-16 lg:py-20">
          <div className="shell">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.sites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-hoverable group overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-line bg-paper-mute">
                    <img
                      src={site.image}
                      alt={`${site.name} website`}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 p-5">
                    <div>
                      <h3 className="text-[1rem] group-hover:text-signal">{site.name}</h3>
                      <p className="mt-1 text-[0.84rem] leading-snug text-muted">{site.type}</p>
                    </div>
                    <ExternalLink
                      size={15}
                      className="mt-1 shrink-0 text-faint transition-colors group-hover:text-signal"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="shell">
        <div className="border-t border-line pt-8 pb-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-body transition-colors hover:text-signal"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>
        </div>
      </div>

      <PageCTA
        heading="Want results like these?"
        sub="Tell us what you need built or grown, and you get a scope, a timeline and an honest estimate inside one business day."
      />
    </>
  )
}
