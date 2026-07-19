import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ClipboardCheck, DraftingCompass, Rocket, SearchCheck } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

const STEPS = [
  {
    icon: SearchCheck,
    step: '01',
    title: 'Discovery',
    desc: 'We learn your goals, constraints, and users, then reply within 24 hours with a clear scope and honest estimate.',
  },
  {
    icon: DraftingCompass,
    step: '02',
    title: 'Solution Design',
    desc: 'Architecture, milestones, and a shared project tracker agreed before any code is written — no surprises later.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Development',
    desc: 'Agile sprints with weekly demos, code review on every change, and progress you can follow in real time.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    desc: 'Staged rollout, monitoring, and 24/7 support and maintenance to keep your systems running smoothly.',
  },
]

export default function Process() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.process-heading > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.process-heading', start: 'top 80%' },
      })

      gsap.from('.process-step', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.process-grid', start: 'top 82%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="process" ref={root} className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-edge to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="process-heading mb-14 max-w-3xl">
          <span className="section-pill">How We Work</span>
          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-5xl">
            A process built for <span className="text-gradient">clarity</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From the first conversation to long-term support, you always know what is happening,
            who is doing it, and what comes next.
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={title}
              className="process-step relative rounded-2xl border border-edge bg-panel/50 p-6 backdrop-blur"
            >
              <span className="absolute top-5 right-6 font-display text-3xl font-bold text-white/10">
                {step}
              </span>
              <div className="mb-5 inline-grid size-12 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-3 bg-edge lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
