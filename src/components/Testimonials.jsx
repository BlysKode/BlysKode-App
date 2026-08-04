import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  if (!TESTIMONIALS.length) return null

  return (
    <section className="relative py-20 md:py-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A snapshot of real work we&apos;ve delivered across web, SEO, and design.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="spotlight-card flex flex-col rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur"
            >
              <Quote size={34} className="text-neon/70" />
              <div className="mt-4 flex gap-1" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'fill-cyber text-cyber' : 'text-edge'}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-white/5 pt-5">
                <p className="font-display text-base font-semibold text-white">{t.name}</p>
                <p className="mt-0.5 text-sm text-muted">{t.title}</p>
                {t.href && (
                  <Link
                    to={t.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyber transition-colors hover:text-white"
                  >
                    View the work
                    <ArrowRight size={14} />
                  </Link>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
