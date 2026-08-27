import { useRef } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  ShieldCheck,
  UsersRound,
  Wallet,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { HIRE_ROLES, HIRE_LIST, HIRE_BENEFITS } from '../data/hire'
import { revealIn } from '../lib/motion'

const BENEFIT_ICONS = [ShieldCheck, Clock, Wallet, UsersRound]

export default function HireDetail() {
  const { slug } = useParams()
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root, dependencies: [slug] })

  const data = HIRE_ROLES[slug]
  if (!data) return <Navigate to="/hire-developers" replace />

  const { role, tagline, intro, skills, doing } = data
  const others = HIRE_LIST.filter((r) => r.slug !== slug).slice(0, 4)

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Hire Developers', path: '/hire-developers' },
          { name: `Hire ${role}`, path: `/hire-developers/${slug}` },
        ]}
        eyebrow="Dedicated developers"
        title={`Hire ${role}`}
        deck={tagline}
        lede={intro}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-primary">
            Start hiring
            <ArrowRight size={16} className="arrow" />
          </Link>
          <a
            href="https://calendly.com/blyskode/30min"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <CalendarDays size={16} />
            Book a call
          
              <span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </PageHeader>

      <div ref={root}>
        {/* What they do */}
        <section className="section">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                What they take on
              </h2>
              <p data-reveal className="mt-4 text-[0.98rem] leading-relaxed text-body">
                Owned end to end, in your codebase, reviewed by your team the same way any other
                engineer would be.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {doing.map(({ title, desc }) => (
                <div key={title} data-reveal>
                  <h3 className="flex items-start gap-2.5 text-[1.04rem]">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-jade-wash text-jade">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {title}
                  </h3>
                  <p className="mt-2.5 pl-7.5 text-[0.91rem] leading-relaxed text-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills and benefits */}
        <section className="border-y border-line bg-paper-soft section">
          <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                Skills you can expect
              </h2>
              <div data-reveal className="mt-7 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[0.8rem] text-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
                Why hire through us
              </h2>
              <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {HIRE_BENEFITS.map(({ title, desc }, i) => {
                  const Icon = BENEFIT_ICONS[i]
                  return (
                    <div key={title} data-reveal>
                      {Icon && <Icon size={19} strokeWidth={1.8} className="text-signal" />}
                      <h3 className="mt-3 text-[0.98rem]">{title}</h3>
                      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-body">{desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Other roles */}
        <section className="section">
          <div className="shell">
            <h2 data-reveal className="text-[1.4rem]">
              Other roles
            </h2>
            <ul className="mt-7 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {others.map((other) => (
                <li key={other.slug} data-reveal>
                  <Link
                    to={`/hire-developers/${other.slug}`}
                    className="group flex h-full flex-col bg-white p-5 transition-colors hover:bg-paper-soft"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-[0.92rem] font-semibold text-ink group-hover:text-signal">
                        {other.role}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="mt-0.5 shrink-0 text-faint transition-colors group-hover:text-signal"
                      />
                    </span>
                    <span className="mt-1.5 text-[0.82rem] leading-snug text-muted">
                      {other.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <PageCTA
        heading={`Need ${role.toLowerCase()}?`}
        sub="Send us the requirements and we will come back with a shortlist inside one business day."
      />
    </>
  )
}
