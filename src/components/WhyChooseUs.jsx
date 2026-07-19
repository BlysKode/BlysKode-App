import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  Cpu,
  Eye,
  Expand,
  GitPullRequestArrow,
  LifeBuoy,
  Lock,
  UsersRound,
  Zap,
} from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

const REASONS = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Agile methodology ensures rapid development without compromising quality.',
  },
  {
    icon: UsersRound,
    title: 'Expert Team',
    desc: 'Senior engineers with hands-on expertise in modern stacks, cloud platforms, and AI.',
  },
  {
    icon: GitPullRequestArrow,
    title: 'Quality-First Delivery',
    desc: 'Every release ships through code review, automated testing, and staging gates.',
  },
  {
    icon: Expand,
    title: 'Scalable Solutions',
    desc: 'Build systems that grow with your business needs.',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Support',
    desc: '24/7 support and maintenance to keep your systems running smoothly.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    desc: 'Strict compliance and security protocols to keep your infrastructure safe.',
  },
  {
    icon: Eye,
    title: 'Transparent Execution',
    desc: 'Clear project scoping and real-time tracking with zero hidden costs.',
  },
  {
    icon: Cpu,
    title: 'Future-Proof Architecture',
    desc: 'We build using modern stacks that easily integrate with your next phase of growth.',
  },
]

export default function WhyChooseUs() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const mm = gsap.matchMedia()

      // Pin the intro column on desktop while the reasons scroll past it
      mm.add('(min-width: 1024px)', () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top 96px',
            end: 'bottom bottom-=120',
            pin: '.why-intro',
            pinSpacing: false,
          },
        })
      })

      gsap.from('.why-intro > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })

      // Staggered reveal of each reason as it scrolls into view
      gsap.utils.toArray('.why-item').forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 88%' },
        })
      })

      // Animate the connecting line as the list scrolls
      gsap.from('.why-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.why-list',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      })
    },
    { scope: root },
  )

  return (
    <section id="why" ref={root} className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/3 -left-40 size-[480px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[420px] rounded-full bg-cyber/8 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <div className="why-intro lg:max-w-md">
            <span className="section-pill">Why Choose Blyskode</span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-5xl">
              Engineered for <span className="text-gradient">trust & velocity</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              We combine deep technical expertise with transparent delivery, so every engagement
              ships faster, scales further, and stays secure.
            </p>
            <div className="mt-8 rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur">
              <p className="font-display text-4xl font-bold text-gradient">&lt;24h</p>
              <p className="mt-2 text-sm text-muted">
                Every inquiry gets a clear next step and an honest estimate within one business
                day.
              </p>
            </div>
          </div>
        </div>

        <div className="why-list relative">
          <div className="why-line absolute top-2 bottom-2 left-[23px] hidden w-px bg-gradient-to-b from-cyber via-neon to-magenta sm:block" />
          <ul className="space-y-8">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="why-item relative flex gap-5 sm:pl-0">
                <span className="relative z-10 mt-0.5 grid size-12 shrink-0 place-items-center rounded-xl border border-edge bg-surface text-cyber shadow-[0_0_24px_-6px_rgba(56,225,255,0.4)]">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
