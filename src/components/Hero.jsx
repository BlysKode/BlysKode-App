import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'
import { TEAM } from '../data/team'

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-anim', { y: 26, opacity: 0, duration: 0.8, stagger: 0.09, delay: 0.1 })
        .from('.hero-photo', { y: 30, opacity: 0, scale: 0.97, duration: 0.9 }, '-=0.7')
    },
    { scope: root },
  )

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* Soft, static brand glow (no heavy 3D) */}
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[36rem] w-[36rem] rounded-full bg-neon/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-[28rem] w-[28rem] rounded-full bg-cyber/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div>
          <p className="hero-anim inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-cyber uppercase backdrop-blur">
            <MapPin size={13} />
            US-based · Founder-led software studio
          </p>

          <h1 className="hero-anim mt-6 max-w-2xl font-display text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
            Software that <span className="text-gradient">ships</span>. Built by people you can
            actually talk to.
          </h1>

          <p className="hero-anim mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Blyskode is a small, senior team building web, mobile, AI, and cloud software. No account
            managers, no runaround, you work directly with the founders who write your code.
          </p>

          <div className="hero-anim mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/blyskode/30min"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
            >
              <CalendarDays size={16} />
              Book a free call
            </a>
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-edge bg-panel/60 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyber/50 hover:bg-panel"
            >
              See our work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="hero-anim mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/5 pt-7 text-sm text-muted">
            <span>Brooklyn, New York</span>
            <span className="text-white/20">·</span>
            <span>Web, Mobile, AI &amp; Cloud</span>
            <span className="text-white/20">·</span>
            <span>We reply within 24 hours</span>
          </div>
        </div>

        {/* Real founder photos */}
        <div className="hero-photo relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyber/15 via-neon/20 to-magenta/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 p-3 backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {TEAM.map((m) => (
                <img
                  key={m.role}
                  src={m.image}
                  alt={`${m.name}, ${m.role} of Blyskode`}
                  width="240"
                  height="300"
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                />
              ))}
            </div>
            <div className="flex items-end justify-between px-2 pt-3 pb-1">
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  Muhammad Adeel &amp; Taimoor Nasir
                </p>
                <p className="text-xs text-muted">Founders, Blyskode</p>
              </div>
              <span className="rounded-full border border-cyber/30 bg-cyber/10 px-3 py-1 text-xs font-medium text-cyber">
                Founder-led
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
