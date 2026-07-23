import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BrainCircuit,
  Clock,
  Code2,
  MonitorSmartphone,
  Server,
  ServerCog,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Wallet,
} from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { HIRE_LIST, HIRE_BENEFITS } from '../data/hire'

const ICONS = { Code2, BrainCircuit, MonitorSmartphone, Server, Smartphone, ServerCog }
const BENEFIT_ICONS = [ShieldCheck, Clock, Wallet, UsersRound]

export default function HireHub() {
  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Hire Developers', path: '/hire-developers' },
            ]}
          />
          <span className="section-pill">Hire Developers</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Hire dedicated <span className="text-gradient">developers</span> for your team
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Extend your team with vetted engineers from Blyskode. Hire one specialist or a full
            team, onboard in days, and scale up or down as you need.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HIRE_LIST.map(({ slug, iconName, role, tagline }) => {
              const Icon = ICONS[iconName]
              return (
              <Link
                key={slug}
                to={`/hire-developers/${slug}`}
                className="spotlight-card group flex flex-col rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-colors hover:border-cyber/40"
              >
                <div className="mb-5 inline-grid size-13 place-items-center rounded-xl border border-edge bg-surface text-cyber transition-colors group-hover:border-cyber/40">
                  <Icon size={24} />
                </div>
                <h2 className="font-display text-xl font-semibold text-white">Hire {role}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-cyber">
                  View role
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              )
            })}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIRE_BENEFITS.map(({ title, desc }, i) => {
              const Icon = BENEFIT_ICONS[i]
              return (
                <div key={title} className="rounded-2xl border border-edge bg-panel/40 p-6 backdrop-blur">
                  <div className="mb-4 inline-grid size-11 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA heading="Ready to hire?" sub="Tell us the role and skills you need and we'll match you with vetted engineers within 24 hours." />
    </div>
  )
}
