import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Blocks,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Layers,
  PenLine,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications built with modern frameworks, robust APIs, and scalable databases.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Engineering',
    desc: 'Custom LLM integrations, machine learning pipelines, and intelligent product features.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Agentic workflows and process automation that eliminate repetitive work at scale.',
  },
  {
    icon: ServerCog,
    title: 'DevOps Engineering',
    desc: 'CI/CD pipelines, infrastructure as code, and observability for shipping with confidence.',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    desc: 'AWS, Azure, GCP, HuaweiCloud, Digital Ocean, Ali Baba, and more — architected for cost and scale.',
  },
  {
    icon: Layers,
    title: 'Multi-Platform Deployment',
    desc: 'Seamless deployments across cloud providers and VPS servers with zero-downtime strategies.',
  },
  {
    icon: Users,
    title: 'End-to-End Recruitment',
    desc: 'Sourcing, vetting, and onboarding top technical talent tailored to your team.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    desc: 'Native and cross-platform mobile apps with polished UX for iOS and Android.',
  },
  {
    icon: Blocks,
    title: 'Custom Software Development',
    desc: 'Bespoke platforms and internal tools engineered around your exact business logic.',
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
  {
    icon: ShieldCheck,
    title: 'Quality Assurance (QA)',
    desc: 'Automated and manual testing that keeps every release stable, secure, and regression-free.',
  },
]

function ServiceCard({ icon: Icon, title, desc }) {
  const card = useRef(null)

  const { contextSafe } = useGSAP({ scope: card })

  const onMove = (e) => {
    const rect = card.current.getBoundingClientRect()
    card.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const onEnter = contextSafe(() => {
    gsap.to(card.current, { y: -6, duration: 0.4, ease: 'power3.out' })
    gsap.to(card.current.querySelector('.card-icon'), {
      rotate: -8,
      scale: 1.15,
      duration: 0.4,
      ease: 'back.out(2.5)',
    })
  })

  const onLeave = contextSafe(() => {
    gsap.to(card.current, { y: 0, duration: 0.5, ease: 'power3.out' })
    gsap.to(card.current.querySelector('.card-icon'), {
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
    })
  })

  return (
    <article
      ref={card}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="service-card spotlight-card group rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur transition-colors duration-300 hover:border-cyber/40"
    >
      <div className="card-icon mb-5 inline-grid size-12 place-items-center rounded-xl border border-edge bg-surface text-cyber transition-colors group-hover:border-cyber/40">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
    </article>
  )
}

export default function Services() {
  const root = useRef(null)

  useGSAP(
    () => {
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
            Everything you need to <span className="text-gradient">build, ship & grow</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A full-spectrum engineering partner — from AI and cloud infrastructure to talent and
            growth marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
