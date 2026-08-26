import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import {
  ArrowRight,
  Atom,
  Boxes,
  BrainCircuit,
  Clock,
  Code2,
  Layers,
  Newspaper,
  ServerCog,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Wallet,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { HIRE_LIST, HIRE_BENEFITS } from '../data/hire'
import { revealIn } from '../lib/motion'

const ICONS = { Code2, Atom, Layers, Boxes, Newspaper, BrainCircuit, Smartphone, ServerCog }
const BENEFIT_ICONS = [ShieldCheck, Clock, Wallet, UsersRound]

const HOW = [
  ['Tell us the role', 'Stack, seniority, hours of overlap and how long you need them.'],
  ['Meet the shortlist', 'Two or three engineers, with the work they have actually shipped.'],
  ['Start inside a week', 'They join your standups, your tracker and your repositories.'],
]

export default function HireHub() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Hire Developers', path: '/hire-developers' },
        ]}
        eyebrow="Hire developers"
        title="Add engineers to your team, not to your headcount."
        lede="Vetted developers who work your hours, in your tools, on your repositories. One specialist or a full team, and you can scale it back whenever the work changes."
      >
        <Link to="/contact" className="btn btn-primary">
          Tell us the role
          <ArrowRight size={16} className="arrow" />
        </Link>
      </PageHeader>

      <div ref={root}>
        {/* Roles */}
        <section className="py-20 lg:py-28">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              Roles you can hire
            </h2>
            <p data-reveal className="lede mt-4">
              Every one of them has shipped production software with us before they are put in
              front of you.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HIRE_LIST.map(({ slug, iconName, role, tagline }) => {
                const Icon = ICONS[iconName]
                return (
                  <article key={slug} data-reveal className="card card-hoverable group">
                    <Link to={`/hire-developers/${slug}`} className="flex h-full flex-col p-6">
                      <span className="grid size-10 place-items-center rounded-lg border border-line bg-paper-soft text-signal transition-colors group-hover:border-signal/30 group-hover:bg-signal-wash">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-5 text-[1.02rem] leading-snug group-hover:text-signal">
                        {role}
                      </h3>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-body">{tagline}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.85rem] font-semibold text-signal">
                        View role
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-paper-soft py-20 lg:py-28">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              How hiring works
            </h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3">
              {HOW.map(([title, desc], i) => (
                <li key={title} data-reveal>
                  <span className="font-mono text-[0.76rem] font-semibold text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-[1.1rem]">{title}</h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-body">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-24">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              What comes with them
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {HIRE_BENEFITS.map(({ title, desc }, i) => {
                const Icon = BENEFIT_ICONS[i]
                return (
                  <div key={title} data-reveal>
                    {Icon && <Icon size={20} strokeWidth={1.8} className="text-signal" />}
                    <h3 className="mt-4 text-[1rem]">{title}</h3>
                    <p className="mt-2 text-[0.89rem] leading-relaxed text-body">{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      <PageCTA
        heading="Which role do you need filled?"
        sub="Send us the stack, the seniority and the hours you need covered. We will come back with a shortlist inside one business day."
      />
    </>
  )
}
