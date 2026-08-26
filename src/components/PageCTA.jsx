import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'

/** Compact closing call to action, reused at the bottom of inner pages. */
export default function PageCTA({
  heading = 'Have something you need built?',
  sub = 'Send us the brief, however rough. You get a scope, a timeline and an honest estimate inside one business day.',
}) {
  return (
    <section className="pb-16 sm:pb-24 lg:pb-32">
      <div className="shell">
        <div className="band-dark rounded-2xl px-5 py-11 sm:px-12 sm:py-14 lg:px-16">
          <div className="relative max-w-2xl">
            <h2 className="text-[1.7rem] text-white sm:text-[2.3rem]">{heading}</h2>
            <p className="mt-4 max-w-[52ch] text-[1rem] leading-[1.68] text-white/65">{sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-onDark">
                Start a project
                <ArrowRight size={16} className="arrow" />
              </Link>
              <a
                href="https://calendly.com/blyskode/30min"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghostDark"
              >
                <CalendarDays size={16} />
                Book a call
              </a>
            </div>
            <p className="mt-6 text-[0.82rem] text-white/60">
              Thirty minutes, no obligation, and you talk to an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
