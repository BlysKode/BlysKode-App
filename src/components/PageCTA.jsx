import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'

// Compact call-to-action band reused at the bottom of inner pages.
export default function PageCTA({
  heading = 'Have a project in mind?',
  sub = 'Tell us what you are building and we will reply within 24 hours with a clear plan and honest estimate.',
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 px-6 py-14 text-center backdrop-blur md:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyber/20 via-neon/20 to-magenta/20 blur-[90px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://calendly.com/blyskode/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
              >
                <CalendarDays size={16} />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
