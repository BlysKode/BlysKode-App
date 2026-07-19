import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowRight, Sparkles } from 'lucide-react'

// Loaded lazily so three.js/R3F never block first paint or LCP
const HeroScene = lazy(() => import('./three/HeroScene'))

import { prefersReducedMotion } from '../lib/motion'

const HEADLINE = 'Transforming Businesses with Modern AI & Cloud Solutions'

export default function Hero() {
  const root = useRef(null)
  // The canvas mounts after hydration only — it has no SEO content, and
  // skipping it during SSR keeps server and client markup identical.
  const [showScene, setShowScene] = useState(false)
  useEffect(() => {
    // Static gradient fallback for users who prefer reduced motion
    if (!prefersReducedMotion()) setShowScene(true)
  }, [])

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-word', {
        yPercent: 120,
        opacity: 0,
        duration: 0.9,
        stagger: 0.045,
        delay: 0.1,
      })
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.9 }, '-=0.7')
        .from('.hero-cta', { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.6')
        .from('.hero-stat', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')

      // Parallax the copy away as the user scrolls off the hero
      gsap.to('.hero-copy', {
        yPercent: -18,
        opacity: 0.15,
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

  const scrollTo = (target) => {
    const smoother = ScrollSmoother.get()
    if (smoother) smoother.scrollTo(target, true, 'top 80px')
    else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={root} className="relative flex min-h-svh items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        {showScene && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      {/* Soft vignettes so text stays readable over the canvas */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_20%,rgba(5,6,10,0.55)_100%)]" />

      <div className="hero-copy pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 md:px-10">
        <p className="hero-sub pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 px-4 py-1.5 text-xs font-medium tracking-[0.25em] text-cyber uppercase backdrop-blur">
          <Sparkles size={14} />
          Welcome to Blyskode.
        </p>

        <h1 className="max-w-5xl font-display text-4xl leading-[1.06] font-bold text-white sm:text-6xl lg:text-7xl">
          {HEADLINE.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-top">
              <span
                className={`hero-word inline-block ${
                  ['AI', '&', 'Cloud', 'Solutions'].includes(word) ? 'text-gradient' : ''
                }`}
              >
                {word}
              </span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          We help startups, SaaS companies, and growing enterprises build AI-powered products
          and scalable cloud platforms — from first commit to global scale.
        </p>

        <div className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo('#services')}
            className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_60px_-8px_rgba(139,92,246,0.7)]"
          >
            Explore Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="hero-cta inline-flex items-center justify-center gap-2 rounded-full border border-edge bg-panel/60 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyber/50 hover:bg-panel"
          >
            Let&apos;s Talk
          </button>
        </div>

        <div className="pointer-events-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/5 pt-8">
          {[
            ['<24h', 'Response Time'],
            ['24/7', 'Support Coverage'],
            ['3', 'Core Practice Areas'],
          ].map(([value, label]) => (
            <div key={label} className="hero-stat">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs tracking-wide text-muted uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
