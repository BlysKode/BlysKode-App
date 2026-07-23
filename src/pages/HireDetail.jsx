import { useParams, Navigate, Link } from 'react-router-dom'
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Check,
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
import { HIRE_ROLES, HIRE_BENEFITS } from '../data/hire'

const ICONS = { Code2, BrainCircuit, MonitorSmartphone, Server, Smartphone, ServerCog }
const BENEFIT_ICONS = [ShieldCheck, Clock, Wallet, UsersRound]

export default function HireDetail() {
  const { slug } = useParams()
  const data = HIRE_ROLES[slug]
  if (!data) return <Navigate to="/hire-developers" replace />

  const { iconName, role, tagline, intro, skills, doing } = data
  const Icon = ICONS[iconName]

  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full bg-neon/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Hire Developers', path: '/hire-developers' },
              { name: `Hire ${role}`, path: `/hire-developers/${slug}` },
            ]}
          />
          <div className="mb-6 inline-grid size-14 place-items-center rounded-2xl border border-edge bg-surface text-cyber">
            <Icon size={26} />
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Hire {role}
          </h1>
          <p className="mt-3 max-w-2xl font-display text-lg text-cyber">{tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
            >
              Start Hiring
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://calendly.com/blyskode/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
            >
              <CalendarDays size={16} />
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* What they do */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            What our {role.toLowerCase()} do
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {doing.map(({ title, desc }) => (
              <div key={title} className="spotlight-card rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <Check size={18} className="text-cyber" />
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + why hire */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Skills &amp; expertise</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-edge bg-panel/60 px-4 py-2 text-sm text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Why hire from Blyskode</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIRE_BENEFITS.map(({ title, desc }, i) => {
                const B = BENEFIT_ICONS[i]
                return (
                  <div key={title} className="rounded-2xl border border-edge bg-panel/50 p-5 backdrop-blur">
                    <div className="mb-3 inline-grid size-10 place-items-center rounded-lg border border-edge bg-surface text-cyber">
                      <B size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <PageCTA heading={`Hire ${role.toLowerCase()} with Blyskode`} sub="Tell us your requirements and we'll match you with vetted engineers within 24 hours." />
    </div>
  )
}
