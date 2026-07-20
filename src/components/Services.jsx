import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  PenLine,
  TrendingUp,
  Users,
} from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

const CORE_SERVICES = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Web, mobile, and custom software built end-to-end, from first wireframe to production release.',
    items: [
      'Full Stack Development',
      'Mobile Application Development',
      'Custom Software Development',
      'Quality Assurance (QA)',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    desc: 'Intelligent features and agentic workflows that remove manual work and unlock new product value.',
    items: [
      'AI Engineering & LLM Integrations',
      'AI Automation & Agentic Workflows',
      'Machine Learning Pipelines',
      'AI Product Strategy',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Resilient infrastructure on AWS, Azure, GCP, Huawei Cloud, DigitalOcean, Alibaba Cloud, and VPS servers.',
    items: [
      'Cloud Architecture & Migration',
      'DevOps & CI/CD Engineering',
      'Multi-Platform Deployment',
      'Observability & Cost Optimization',
    ],
  },
]

const ADDITIONAL_SERVICES = [
  {
    icon: Users,
    title: 'End-to-End Recruitment',
    desc: 'Sourcing, vetting, and onboarding top technical talent tailored to your team.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    desc: 'Data-driven growth strategies that increase visibility and convert traffic into revenue.',
  },
  {
    icon: PenLine,
    title: 'Content & Blog Writing',
    desc: 'Technical and marketing content that builds authority and engages your audience.',
  },
]

function useCardHover(card) {
  const { contextSafe } = useGSAP({ scope: card })

  const onMove = (e) => {
    const rect = card.current.getBoundingClientRect()
    card.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const onEnter = contextSafe(() => {
    if (prefersReducedMotion()) return
    gsap.to(card.current, { y: -6, duration: 0.4, ease: 'power3.out' })
    gsap.to(card.current.querySelector('.card-icon'), {
      rotate: -8,
      scale: 1.15,
      duration: 0.4,
      ease: 'back.out(2.5)',
    })
  })

  const onLeave = contextSafe(() => {
    if (prefersReducedMotion()) return
    gsap.to(card.current, { y: 0, duration: 0.5, ease: 'power3.out' })
    gsap.to(card.current.querySelector('.card-icon'), {
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
    })
  })

  return { onMove, onEnter, onLeave }
}

function CoreServiceCard({ icon: Icon, title, desc, items }) {
  const card = useRef(null)
  const { onMove, onEnter, onLeave } = useCardHover(card)

  return (
    <article
      ref={card}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="service-card spotlight-card group rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-colors duration-300 hover:border-cyber/40"
    >
      <div className="card-icon mb-5 inline-grid size-13 place-items-center rounded-xl border border-edge bg-surface text-cyber transition-colors group-hover:border-cyber/40">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
      <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check size={15} className="mt-0.5 shrink-0 text-cyber" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

function AdditionalServiceCard({ icon: Icon, title, desc }) {
  const card = useRef(null)
  const { onMove, onEnter, onLeave } = useCardHover(card)

  return (
    <article
      ref={card}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="service-card spotlight-card group rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-colors duration-300 hover:border-cyber/40"
    >
      <div className="card-icon mb-5 inline-grid size-13 place-items-center rounded-xl border border-edge bg-surface text-cyber transition-colors group-hover:border-cyber/40">
        <Icon size={24} />
      </div>
      <h4 className="font-display text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
    </article>
  )
}

export default function Services() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.services-heading > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-heading', start: 'top 80%' },
      })

      gsap.set('.service-card', { opacity: 0 })
      ScrollTrigger.batch('.service-card', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 60, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.09, ease: 'power3.out' },
          ),
      })
    },
    { scope: root },
  )

  return (
    <section id="services" ref={root} className="relative py-24 md:py-32">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="services-heading mb-14 max-w-3xl">
          <span className="section-pill">Our Services</span>
          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-5xl">
            Three practices. <span className="text-gradient">One engineering partner.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            We help startups, SaaS companies, and growing enterprises build AI-powered products
            and scalable cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((service) => (
            <CoreServiceCard key={service.title} {...service} />
          ))}
        </div>

        <p className="mt-14 mb-5 text-xs font-medium tracking-[0.2em] text-muted uppercase">
          Also available
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {ADDITIONAL_SERVICES.map((service) => (
            <AdditionalServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
