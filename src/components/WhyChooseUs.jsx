import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { countUp, revealIn } from '../lib/motion'

const METRICS = [
  { to: 24, suffix: 'h', label: 'From first message to a scoped estimate' },
  { to: 2, suffix: ' wk', label: 'Sprint cadence, with a demo at the end of each' },
  { to: 100, suffix: '%', label: 'Of the code and cloud accounts are in your name' },
  { to: 24, suffix: '/7', label: 'Support coverage once you are live' },
]

const REASONS = [
  {
    title: 'You talk to the people building it',
    body: 'No account manager relaying messages to a team you never meet. The engineers writing your code are in your channel, answering your questions.',
  },
  {
    title: 'We turn down work we cannot estimate',
    body: 'If the brief is too vague to price honestly, we say so and help you tighten it first. A number we invent to win the deal costs you more later.',
  },
  {
    title: 'You own it all from day one',
    body: 'Repositories, cloud accounts, domains and CI live under your organisation. Ending the engagement is a permissions change, not a migration project.',
  },
  {
    title: 'Review and tests are not an upsell',
    body: 'Every change is peer reviewed and covered by tests before it merges, because that is how the work gets done, not a line item you can decline.',
  },
  {
    title: 'The handover is written down',
    body: 'Architecture decisions, runbooks and onboarding notes ship alongside the code, so your next hire is productive without booking time with us.',
  },
  {
    title: 'One contract across the stack',
    body: 'Design, frontend, backend, mobile, infrastructure and QA sit on the same team. Nothing gets dropped in the gap between two vendors.',
  },
]

export default function WhyChooseUs() {
  const root = useRef(null)

  useGSAP(() => {
    revealIn(root.current)
    METRICS.forEach((metric, i) => {
      const el = root.current.querySelector(`[data-metric="${i}"]`)
      countUp(el, metric.to, { format: (n) => `${Math.round(n)}${metric.suffix}` })
    })
  }, { scope: root })

  return (
    <section id="why" ref={root} className="band-dark section-lg">
      <div className="grid-faint-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow eyebrow-onDark">
            Why teams stay
          </p>
          <h2 data-reveal className="mt-4 text-[1.85rem] text-white sm:mt-5 sm:text-[2.6rem]">
            The parts of an agency people usually complain about, removed.
          </h2>
          <p data-reveal className="mt-5 max-w-[54ch] text-[1.02rem] leading-[1.68] text-white/65 sm:text-[1.08rem]">
            Most of what follows is not clever engineering. It is the operational discipline that
            decides whether a project ends well.
          </p>
        </div>

        {/* Metrics */}
        <dl className="stack-top grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <div key={metric.label} data-reveal className="bg-ink/95 px-5 py-6 sm:px-6 sm:py-7">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span
                  data-metric={i}
                  className="tnum block font-display text-[1.7rem] leading-none font-semibold text-white sm:text-[2.1rem]"
                >
                  {metric.to}
                  {metric.suffix}
                </span>
                <span className="mt-2.5 block text-[0.8rem] leading-snug text-white/55 sm:mt-3 sm:text-[0.84rem]">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Reasons */}
        <div className="mt-12 grid gap-x-12 gap-y-9 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <div key={reason.title} data-reveal>
              <span
                aria-hidden="true"
                className="font-mono text-[0.74rem] font-semibold text-white/45"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[1.06rem] text-white">{reason.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/60">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
