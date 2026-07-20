import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Minus, Plus } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

export const FAQS = [
  {
    q: 'What is Blyskode?',
    a: 'Blyskode is a software and technology agency that helps startups, SaaS companies, and growing enterprises build AI-powered products and scalable cloud platforms. Blyskode delivers across three core practices: Product Engineering, AI & Automation, and Cloud & DevOps.',
  },
  {
    q: 'What services does Blyskode offer?',
    a: 'Blyskode offers full stack web and mobile development, custom software, quality assurance, AI engineering and automation, machine learning, cloud architecture on AWS, Azure, GCP and more, DevOps and CI/CD, plus recruitment, SEO, and content writing.',
  },
  {
    q: 'Where is Blyskode located?',
    a: 'Blyskode is based in Islamabad, Pakistan, and works remotely with clients worldwide.',
  },
  {
    q: 'How quickly does Blyskode respond to inquiries?',
    a: 'Blyskode replies to every project inquiry within 24 hours with a clear scope and an honest estimate. You can also book a call directly through the contact section.',
  },
  {
    q: 'How do I start a project with Blyskode?',
    a: 'Fill out the inquiry form in the contact section with your project details, email us at blyskode@gmail.com, message us on WhatsApp, or schedule a call. Blyskode will get back to you within one business day.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item rounded-2xl border border-edge bg-panel/50 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-white sm:text-lg">{q}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-edge bg-surface text-cyber">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm leading-relaxed text-muted sm:text-base">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.faq-heading > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-heading', start: 'top 80%' },
      })
      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-list', start: 'top 82%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="faq" ref={root} className="relative py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-5 md:px-10">
        <div className="faq-heading mb-12 text-center">
          <span className="section-pill">FAQ</span>
          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </div>
        <div className="faq-list space-y-4">
          {FAQS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
