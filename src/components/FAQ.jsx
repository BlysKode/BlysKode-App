import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FAQS } from '../data/faq'
import { prefersReducedMotion, revealIn } from '../lib/motion'

function FAQItem({ q, a, open, onToggle, id }) {
  const panel = useRef(null)
  const first = useRef(true)

  // Height is animated rather than toggled so the surrounding list settles
  // instead of jumping, which matters when several answers are long.
  useGSAP(
    () => {
      const el = panel.current
      if (!el) return

      if (first.current) {
        first.current = false
        gsap.set(el, { height: open ? 'auto' : 0, opacity: open ? 1 : 0 })
        return
      }
      if (prefersReducedMotion()) {
        gsap.set(el, { height: open ? 'auto' : 0, opacity: open ? 1 : 0 })
        return
      }

      gsap.killTweensOf(el)
      if (open) {
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.42, ease: 'power3.out' },
        )
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.28, ease: 'power2.in' })
      }
    },
    { dependencies: [open] },
  )

  return (
    <div data-reveal className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span
            className={`font-display text-[1.02rem] font-semibold transition-colors sm:text-[1.08rem] ${
              open ? 'text-signal' : 'text-ink'
            }`}
          >
            {q}
          </span>
          <span
            aria-hidden="true"
            className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
              open
                ? 'rotate-45 border-signal bg-signal text-white'
                : 'border-line bg-white text-muted'
            }`}
          >
            <Plus size={15} />
          </span>
        </button>
      </h3>
      <div id={`faq-panel-${id}`} ref={panel} className="overflow-hidden">
        <p className="pr-12 pb-6 text-[0.96rem] leading-relaxed text-body">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const root = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useGSAP(() => revealIn(root.current, { stagger: 0.05 }), { scope: root })

  return (
    <section id="faq" ref={root} className="border-t border-line bg-paper-soft py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p data-reveal className="eyebrow">
            Questions
          </p>
          <h2 data-reveal className="mt-5 text-[2.1rem] sm:text-[2.5rem]">
            Answered before you ask.
          </h2>
          <p data-reveal className="mt-5 text-[0.98rem] leading-relaxed text-body">
            Still unsure whether we are the right fit? Send us the brief and we will tell you
            honestly, even when the answer is no.
          </p>
          <Link data-reveal to="/contact" className="btn btn-secondary mt-7">
            Ask us directly
          </Link>
        </div>

        <div>
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              id={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
