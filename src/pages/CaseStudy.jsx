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
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full bg-neon/10 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: project.title, path: `/portfolio/${project.slug}` },
            ]}
          />
          <span className="text-xs font-medium tracking-[0.15em] text-cyber uppercase">
            {project.category}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 font-display text-lg text-cyber">{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{project.summary}</p>

          {project.highlights && (
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check size={16} className="mt-0.5 shrink-0 text-cyber" />
                  {h}
                </li>
              ))}
            </ul>
          )}

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
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Case study body */}
      {project.kind === 'case-study' && Body && (
        <section className="pb-10 md:pb-16">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <div className="article-prose">
              <Body project={project} />
            </div>
            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-white">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-edge bg-panel/60 px-4 py-2 text-sm text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image gallery (SEO / Graphic Design) */}
      {project.kind === 'gallery' && (
        <section className="pb-10 md:pb-16">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <div className="grid grid-cols-1 gap-8">
              {project.images.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-2xl border border-edge bg-panel/40">
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full"
                  />
                  <figcaption className="border-t border-edge px-5 py-4 text-sm leading-relaxed text-muted">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Live sites grid (Web Development) */}
      {project.kind === 'sites' && (
        <section className="pb-10 md:pb-16">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.sites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-edge bg-panel/60 transition-colors hover:border-cyber/40"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-edge">
                    <img
                      src={site.image}
                      alt={`${site.name} website`}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{site.name}</h3>
                      <p className="mt-0.5 text-sm text-muted">{site.type}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-cyber">
                      Visit <ExternalLink size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="border-t border-white/5 pt-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-cyber"
          >
            <ArrowLeft size={15} /> All projects
          </Link>
        </div>
      </div>

      <PageCTA heading="Want results like these?" sub="Tell us what you need built or grown, and we'll reply within 24 hours with a clear plan." />
    </div>
  )
}
