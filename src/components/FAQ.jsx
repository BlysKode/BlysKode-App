import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Minus, Plus } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'
import { FAQS } from '../data/faq'

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

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
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} {...item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
