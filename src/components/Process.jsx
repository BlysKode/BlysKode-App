import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion, revealIn } from '../lib/motion'

const PHASES = [
  {
    title: 'Discovery',
    window: '2 to 5 days',
    summary:
      'We learn the goal, the constraints and who this is actually for. You leave with a written scope and an estimate we will stand behind, whether or not you hire us.',
    outputs: ['Scope document', 'Fixed estimate', 'Named risks'],
  },
  {
    title: 'Architecture',
    window: 'About one week',
    summary:
      'The expensive decisions get made before anyone writes a line of product code: data model, service boundaries, hosting, and the order we build things in.',
    outputs: ['System design', 'Data model', 'Delivery plan'],
  },
  {
    title: 'Build',
    window: 'Weekly cadence',
    summary:
      'Two week sprints, a demo every Friday against a tracker you can open any time, and code review on every change. Progress is something you watch, not something you are told about.',
    outputs: ['Working software', 'Reviewed pull requests', 'CI pipeline'],
  },
  {
    title: 'Launch and run',
    window: 'Ongoing',
    summary:
      'Staged rollout behind flags, monitoring wired up before traffic arrives, and a support agreement so there is a name attached when something needs attention at 2am.',
    outputs: ['Staged release', 'Alerting and dashboards', 'Support agreement'],
  },
]

export default function Process() {
  const root = useRef(null)
  const rail = useRef(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      revealIn(root.current)
      if (prefersReducedMotion()) return

      // The rail fills in step with the reader's position through the list,
      // so the progress readout on the left is measuring something real.
      gsap.fromTo(
        rail.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.phase-list',
            start: 'top 62%',
            end: 'bottom 78%',
            scrub: 0.5,
          },
        },
      )

      gsap.utils.toArray('.phase', root.current).forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 62%',
          end: 'bottom 62%',
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="process" ref={root} className="border-y border-line bg-paper-soft section-lg">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        {/* Sticky framing */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p data-reveal className="eyebrow">
            How we work
          </p>
          <h2 data-reveal className="mt-5 text-[2.1rem] sm:text-[2.6rem]">
            No surprises, by design.
          </h2>
          <p data-reveal className="lede mt-5">
            Four phases. Each one ends with something you can read, run or reject, so you are
            never asked to trust progress you cannot see.
          </p>

          <div data-reveal className="mt-9 hidden max-w-xs lg:block">
            <div className="flex items-baseline justify-between font-mono text-[0.76rem] text-muted">
              <span className="font-semibold text-ink">{PHASES[active].title}</span>
              <span className="tnum">
                {String(active + 1).padStart(2, '0')} / {String(PHASES.length).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-2.5 h-0.5 w-full overflow-hidden rounded-full bg-line">
              <span
                className="block h-full rounded-full bg-signal transition-[width] duration-500 ease-out"
                style={{ width: `${((active + 1) / PHASES.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* The phases themselves */}
        <ol className="phase-list relative">
          {/* Rail: a static hairline with a filled overlay that tracks scroll */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[15px] w-px bg-line sm:left-[19px]"
          />
          <span
            ref={rail}
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[15px] w-px origin-top bg-signal sm:left-[19px]"
          />

          {PHASES.map((phase, i) => (
            <li
              key={phase.title}
              data-reveal
              className="phase relative pb-14 pl-12 last:pb-0 sm:pl-16"
            >
              <span
                aria-hidden="true"
                className={`absolute top-1 left-0 grid size-8 place-items-center rounded-full border font-mono text-[0.72rem] font-semibold transition-colors duration-500 sm:size-10 sm:text-[0.78rem] ${
                  i <= active
                    ? 'border-signal bg-signal text-white'
                    : 'border-line bg-white text-faint'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[1.32rem]">{phase.title}</h3>
                <span className="font-mono text-[0.74rem] text-muted">{phase.window}</span>
              </div>

              <p className="mt-3 max-w-[58ch] text-[0.96rem] leading-relaxed text-body">
                {phase.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {phase.outputs.map((output) => (
                  <li
                    key={output}
                    className="rounded-md border border-line bg-paper-soft px-2.5 py-1 text-[0.78rem] font-medium text-body"
                  >
                    {output}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
