import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import ShipDemo from './demo/ShipDemo'
import { EASE, prefersReducedMotion, splitWords } from '../lib/motion'

const PROOF = [
  ['1 day', 'To a scoped estimate'],
  ['Weekly', 'Working software, demoed'],
  ['100%', 'Code and infrastructure you own'],
]

export default function Hero() {
  const root = useRef(null)
  const headline = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const words = splitWords(headline.current)
      const tl = gsap.timeline({ defaults: { ease: EASE } })

      tl.from(words, { yPercent: 115, duration: 0.9, stagger: 0.035 }, 0.15)
        .from('.hero-lift', { y: 18, opacity: 0, duration: 0.8, stagger: 0.09 }, 0.5)
        .from('.hero-demo', { y: 28, opacity: 0, duration: 1 }, 0.55)
        .from('.hero-proof', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.85)

      // The copy drifts up a little faster than the page, so the fold has
      // depth without anything moving far enough to be distracting.
      gsap.to('.hero-parallax', {
        yPercent: -9,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative overflow-hidden pt-[104px] pb-14 sm:pt-[136px] sm:pb-20 lg:pt-[168px] lg:pb-28">
      <div className="grid-faint pointer-events-none absolute inset-x-0 top-0 h-[760px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-[640px] rounded-full bg-signal/[0.05] blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="hero-parallax grid items-center gap-11 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-16">
          {/* Copy */}
          <div>
            <p className="hero-lift eyebrow">Software engineering partner</p>

            <h1
              ref={headline}
              className="mt-5 max-w-[16ch] text-[2.5rem] leading-[1.06] font-semibold tracking-[-0.035em] sm:mt-6 sm:text-[3.4rem] lg:text-[3.9rem]"
            >
              Custom software, shipped weekly.
            </h1>

            <p className="hero-lift lede mt-5 sm:mt-6">
              Blyskode is the engineering team founders bring in when a product has to exist.
              Web, mobile, AI and cloud, designed and built in increments you can see running
              from the first week.
            </p>

            <div className="hero-lift mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Link to="/contact" className="btn btn-primary">
                Start a project
                <ArrowRight size={16} className="arrow" />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                See the work
              </Link>
            </div>

            <p className="hero-lift mt-5 text-[0.87rem] text-muted">
              Tell us what you need and you get a scope, a timeline and an honest estimate
              within one business day.
            </p>

            {/* Stacked as label-beside-value on narrow screens: three columns
                at 390px leaves a word like "infrastructure" nowhere to go. */}
            <dl className="stack-top grid max-w-lg gap-x-6 gap-y-3.5 border-t border-line pt-7 sm:grid-cols-3">
              {PROOF.map(([value, label]) => (
                <div key={label} className="hero-proof flex items-baseline gap-3 sm:block">
                  <dt className="sr-only">{label}</dt>
                  <dd className="contents sm:block">
                    <span className="w-20 shrink-0 font-display text-[1.45rem] font-semibold text-ink sm:w-auto">
                      {value}
                    </span>
                    <span className="text-[0.85rem] leading-snug text-muted sm:mt-1 sm:block sm:text-[0.8rem]">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Proof, running */}
          <div className="hero-demo lg:pl-4">
            <ShipDemo />
            <p className="mt-4 text-center text-[0.8rem] text-muted lg:text-left">
              Our own delivery pipeline. Every project we run gets one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
