import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { countUp, revealIn } from '../lib/motion'

const PRINCIPLES = [
  {
    title: 'Estimate honestly or not at all',
    body: 'A number we cannot defend is worse than no number. If the brief is too loose to price, we say so and help you tighten it before anyone signs anything.',
  },
  {
    title: 'Ship in increments you can judge',
    body: 'Every two weeks there is something running that you can click through. Progress you have to take on faith is not progress, it is a status report.',
  },
  {
    title: 'Leave the codebase better than the brief required',
    body: 'Tests, documentation and a sane structure are not extras we quote separately. They are the difference between software you can change and software you have to replace.',
  },
  {
    title: 'Hand over completely',
    body: 'Accounts, repositories, credentials and the reasoning behind the decisions. If you want to take the project in house tomorrow, nothing should stand in the way.',
  },
]

const FACTS = [
  { to: 11, suffix: '', label: 'Service lines under one contract' },
  { to: 8, suffix: '', label: 'Developer specialisms you can hire directly' },
  { to: 24, suffix: 'h', label: 'To a scoped estimate' },
  { to: 100, suffix: '%', label: 'Remote, working across US and UK hours' },
]

export default function About() {
  const root = useRef(null)

  useGSAP(() => {
    revealIn(root.current)
    FACTS.forEach((fact, i) => {
      countUp(root.current.querySelector(`[data-fact="${i}"]`), fact.to, {
        format: (n) => `${Math.round(n)}${fact.suffix}`,
      })
    })
  }, { scope: root })

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
        eyebrow="About Blyskode"
        title="A small team that would rather be trusted than large."
        lede="Blyskode is a software development company headquartered in Brooklyn, New York, working with clients across the United States, United Kingdom, Europe and Australia. We design, build and run custom software, AI products and cloud platforms."
      />

      <div ref={root}>
        {/* Facts */}
        <section className="border-b border-line py-14">
          <div className="shell">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {FACTS.map((fact, i) => (
                <div key={fact.label} data-reveal>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <span
                      data-fact={i}
                      className="tnum block font-display text-[2.2rem] leading-none font-semibold text-ink"
                    >
                      {fact.to}
                      {fact.suffix}
                    </span>
                    <span className="mt-3 block text-[0.84rem] leading-snug text-muted">
                      {fact.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Story */}
        <section className="section">
          <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p data-reveal className="eyebrow">
                How we operate
              </p>
              <h2 data-reveal className="mt-5 text-[1.9rem] sm:text-[2.2rem]">
                Four commitments we actually keep.
              </h2>
              <p data-reveal className="mt-5 text-[0.98rem] leading-relaxed text-body">
                Every agency claims quality and communication. These are the specific behaviours
                we will be held to, written plainly enough that you can tell when we fail.
              </p>
            </div>

            <ol className="space-y-10">
              {PRINCIPLES.map((principle, i) => (
                <li key={principle.title} data-reveal className="flex gap-6">
                  <span className="mt-1 font-mono text-[0.78rem] font-semibold text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[1.14rem]">{principle.title}</h3>
                    <p className="mt-2.5 max-w-[58ch] text-[0.96rem] leading-relaxed text-body">
                      {principle.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Where we work */}
        <section className="section">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <h2 className="text-[1.6rem] sm:text-[1.9rem]">Where we work</h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-body">
                Fully remote, headquartered in Brooklyn, with hours that overlap the US East
                Coast and the UK working day. Clients in Europe and Australia get a fixed daily
                window rather than a promise about responsiveness.
              </p>
            </div>
            <div data-reveal>
              <h2 className="text-[1.6rem] sm:text-[1.9rem]">How engagements start</h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-body">
                A call, then a written scope with a fixed price where the work allows it and a
                clear rate where it does not. Fixed scope projects, dedicated developers and staff
                augmentation are all on the table.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-signal"
              >
                Explore the services
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <PageCTA />
    </>
  )
}
