import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { ArrowRight, CalendarDays, Check, Mail, MapPin, Phone } from 'lucide-react'
import { revealIn } from '../lib/motion'

const CONTACT_EMAIL = 'blyskode@gmail.com'
const WEB3FORMS_KEY = '3cb72e6b-caef-404a-8488-f16790ea2b8c'

const SERVICES = [
  'Product Engineering',
  'AI & Automation',
  'Cloud & DevOps',
  'Web or Mobile App',
  'Hire developers',
  'Recruitment',
  'SEO & Digital Marketing',
  'Something else',
]

const BUDGETS = ['Under $5k', '$5k to $15k', '$15k to $50k', 'Over $50k', 'Not sure yet']

const TIMELINES = ['As soon as possible', '1 to 3 months', '3 to 6 months', 'Flexible']

const PROMISES = [
  'A reply from an engineer, not a sales inbox',
  'A written scope and an honest estimate inside one business day',
  'No retainer talk until we agree the work is worth doing',
]

const FIELD =
  'w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-[0.92rem] text-white placeholder:text-white/55 transition-colors focus:border-white/40 focus:bg-white/10 focus:outline-none'

const LABEL = 'mb-1.5 block text-[0.78rem] font-medium tracking-wide text-white/55'

const EMPTY_FORM = {
  name: '',
  email: '',
  company: '',
  service: SERVICES[0],
  budget: BUDGETS[0],
  timeline: TIMELINES[0],
  message: '',
  botcheck: '',
}

export default function CTASection({ titleAs: Title = 'h2' }) {
  const root = useRef(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Project inquiry: ${form.service} (${form.name})`,
          from_name: 'Blyskode Website',
          botcheck: form.botcheck,
          Name: form.name,
          'Work Email': form.email,
          Company: form.company,
          Service: form.service,
          Budget: form.budget,
          Timeline: form.timeline,
          'Project Description': form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  useGSAP(() => revealIn(root.current, { stagger: 0.06 }), { scope: root })

  return (
    <section id="contact" ref={root} className="band-dark section-lg">
      <div className="grid-faint-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
        {/* Pitch */}
        <div>
          <p data-reveal className="eyebrow eyebrow-onDark">
            Start a project
          </p>
          <Title
            data-reveal
            className="mt-4 max-w-[16ch] text-[1.85rem] text-white sm:mt-5 sm:text-[2.6rem]"
          >
            Tell us what you are building.
          </Title>
          <p data-reveal className="mt-5 max-w-[48ch] text-[1.02rem] leading-[1.68] text-white/65">
            Send over the brief, however rough. We read every one ourselves and come back with a
            scope, a timeline and a number.
          </p>

          <ul data-reveal className="mt-8 space-y-3">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex gap-3 text-[0.93rem] text-white/75">
                <Check size={16} className="mt-1 shrink-0 text-white/45" strokeWidth={2.5} />
                {promise}
              </li>
            ))}
          </ul>

          <a
            data-reveal
            href="https://calendly.com/blyskode/30min"
            target="_blank"
            rel="noreferrer"
            className="btn btn-onDark mt-9"
          >
            <CalendarDays size={16} />
            Book a 30 minute call
            <ArrowRight size={16} className="arrow" />
          </a>

          <ul data-reveal className="mt-10 space-y-3.5 border-t border-white/10 pt-8 text-[0.9rem]">
            <li className="flex items-center gap-3 text-white/70">
              <Mail size={16} className="shrink-0 text-white/40" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Phone size={16} className="shrink-0 text-white/40" />
              <a href="tel:+13473667437" className="transition-colors hover:text-white">
                +1 (347) 366 7437
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <MapPin size={16} className="shrink-0 text-white/40" />
              Brooklyn, New York
            </li>
          </ul>
        </div>

        {/* Form */}
        <form
          data-reveal
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-8"
        >
          {/* Honeypot. Humans never see it, bots fill it and get rejected. */}
          <input
            type="text"
            name="botcheck"
            value={form.botcheck}
            onChange={set('botcheck')}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] size-0 opacity-0"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="inq-name" className={LABEL}>
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
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="inq-email" className={LABEL}>
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
                className={FIELD}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="inq-company" className={LABEL}>
                Company <span className="text-white/55">(optional)</span>
              </label>
              <input
                id="inq-company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                value={form.company}
                onChange={set('company')}
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="inq-service" className={LABEL}>
                What you need
              </label>
              <select
                id="inq-service"
                value={form.service}
                onChange={set('service')}
                className={FIELD}
              >
                {SERVICES.map((s) => (
                  <option key={s} className="text-ink">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="inq-budget" className={LABEL}>
                Budget
              </label>
              <select
                id="inq-budget"
                value={form.budget}
                onChange={set('budget')}
                className={FIELD}
              >
                {BUDGETS.map((b) => (
                  <option key={b} className="text-ink">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="inq-timeline" className={LABEL}>
                Timeline
              </label>
              <select
                id="inq-timeline"
                value={form.timeline}
                onChange={set('timeline')}
                className={FIELD}
              >
                {TIMELINES.map((t) => (
                  <option key={t} className="text-ink">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="inq-message" className={LABEL}>
                The brief
              </label>
              <textarea
                id="inq-message"
                required
                rows={4}
                placeholder="What are you building, who is it for, and what has to be true for it to be worth doing?"
                value={form.message}
                onChange={set('message')}
                className={FIELD}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn btn-onDark mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending' : 'Send the brief'}
            {status !== 'sending' && <ArrowRight size={16} className="arrow" />}
          </button>

          {status === 'success' && (
            <p
              role="status"
              className="mt-4 flex items-start gap-2.5 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white"
            >
              <Check size={16} className="mt-0.5 shrink-0" strokeWidth={2.5} />
              Got it. You will hear back from one of us within one business day.
            </p>
          )}
          {status === 'error' && (
            <p
              role="alert"
              className="mt-4 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white"
            >
              That did not send. Please try again, or email us directly at {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
