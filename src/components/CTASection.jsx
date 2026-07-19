import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, CalendarDays, Mail, MapPin, Phone, Send } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motion'

const CONTACT_EMAIL = 'hello@blyskode.com'

const SERVICES = [
  'Product Engineering',
  'AI & Automation',
  'Cloud & DevOps',
  'Recruitment',
  'SEO & Digital Marketing',
  'Content & Blog Writing',
  'Other',
]

const BUDGETS = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet']

const TIMELINES = ['ASAP', '1 – 3 months', '3 – 6 months', 'Flexible']

const inputClasses =
  'w-full rounded-xl border border-edge bg-surface px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-cyber/60 focus:outline-none'

export default function CTASection() {
  const root = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0],
    budget: BUDGETS[0],
    timeline: TIMELINES[0],
    message: '',
  })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Project inquiry — ${form.service} (${form.name})`
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      '',
      'Project description:',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

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
        <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 px-6 py-14 backdrop-blur md:px-14 md:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyber/20 via-neon/20 to-magenta/20 blur-[100px]" />

          <div className="cta-inner relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <span className="section-pill">Let&apos;s Build Together</span>
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to transform your business with{' '}
                <span className="text-gradient">AI & Cloud?</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Tell us about your project and we&apos;ll get back to you within 24 hours with a
                clear plan and honest estimate — or book a call directly.
              </p>

              <a
                href="https://calendly.com/adeel-zixer11/new-meeting"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter,box-shadow] hover:brightness-110"
              >
                <CalendarDays size={16} />
                Schedule a Call
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <ul className="mt-10 space-y-4 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-cyber" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-cyber"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-cyber" />
                  <a href="tel:+923338640860" className="transition-colors hover:text-cyber">
                    +92 333 8640860
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-cyber" />
                  <span>F-15, Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-edge bg-surface/60 p-6 backdrop-blur md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="inq-name" className="mb-1.5 block text-xs font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="inq-email" className="mb-1.5 block text-xs font-medium text-muted">
                    Work email
                  </label>
                  <input
                    id="inq-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="inq-company"
                    className="mb-1.5 block text-xs font-medium text-muted"
                  >
                    Company
                  </label>
                  <input
                    id="inq-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    value={form.company}
                    onChange={set('company')}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="inq-service"
                    className="mb-1.5 block text-xs font-medium text-muted"
                  >
                    Service needed
                  </label>
                  <select
                    id="inq-service"
                    value={form.service}
                    onChange={set('service')}
                    className={inputClasses}
                  >
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="inq-budget"
                    className="mb-1.5 block text-xs font-medium text-muted"
                  >
                    Estimated budget
                  </label>
                  <select
                    id="inq-budget"
                    value={form.budget}
                    onChange={set('budget')}
                    className={inputClasses}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="inq-timeline"
                    className="mb-1.5 block text-xs font-medium text-muted"
                  >
                    Target timeline
                  </label>
                  <select
                    id="inq-timeline"
                    value={form.timeline}
                    onChange={set('timeline')}
                    className={inputClasses}
                  >
                    {TIMELINES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="inq-message"
                    className="mb-1.5 block text-xs font-medium text-muted"
                  >
                    Project description
                  </label>
                  <textarea
                    id="inq-message"
                    required
                    rows={4}
                    placeholder="What are you building, and what problem should it solve?"
                    value={form.message}
                    onChange={set('message')}
                    className={inputClasses}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyber/40 bg-cyber/10 px-6 py-3 text-sm font-semibold text-cyber transition-colors hover:bg-cyber/20"
              >
                <Send size={15} />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
