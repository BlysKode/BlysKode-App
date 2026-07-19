import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.cta-inner > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="contact" ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 px-6 py-16 text-center backdrop-blur md:px-16 md:py-24">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyber/20 via-neon/20 to-magenta/20 blur-[100px]" />

          <div className="cta-inner relative">
            <span className="section-pill">Let&apos;s Build Together</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl">
              Ready to transform your business with{' '}
              <span className="text-gradient">AI & Cloud?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a
              clear plan and honest estimate.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@blyskode.com"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-all hover:scale-[1.03]"
              >
                <Mail size={16} />
                hello@blyskode.com
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+10000000000"
                className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
