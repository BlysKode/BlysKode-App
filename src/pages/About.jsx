import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Gauge, Heart, ShieldCheck, Target, Users } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'

const VALUES = [
  { icon: Gauge, title: 'Velocity', desc: 'Agile sprints and fast turnaround, without cutting corners on quality.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear scope, real-time tracking, and honest estimates with no hidden costs.' },
  { icon: ShieldCheck, title: 'Reliability', desc: 'Security-first engineering and testing that keep your systems stable and safe.' },
  { icon: Heart, title: 'Partnership', desc: 'We work as an extension of your team and stay invested well past launch.' },
]

const STATS = [
  ['3', 'Core practice areas'],
  ['<24h', 'Response time'],
  ['24/7', 'Support coverage'],
  ['100%', 'Remote & worldwide'],
]

export default function About() {
  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
            ]}
          />
          <span className="section-pill">About Blyskode</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            The team behind your <span className="text-gradient">next build</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Blyskode is a software and technology agency based in Brooklyn, New York, working
            remotely with clients worldwide. We help startups, SaaS companies, and growing
            enterprises design, build, and scale AI-powered products and cloud platforms.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            We combine senior engineering talent with a transparent, agile process, so every
            engagement ships faster, scales further, and stays secure. From a first idea to a
            production system serving real users, we operate as an extension of your team.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
            {STATS.map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">{value}</p>
                <p className="mt-1 text-xs tracking-wide text-muted uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / values */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <div className="inline-grid size-12 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                <Target size={22} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                Our mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                To make modern AI and cloud technology accessible and practical for every business
                we work with, delivering software that is a genuine competitive advantage, not a
                cost center.
              </p>
            </div>
            <div>
              <div className="inline-grid size-12 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                <Users size={22} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                What we value
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="spotlight-card rounded-2xl border border-edge bg-panel/60 p-5 backdrop-blur"
                  >
                    <div className="mb-3 inline-grid size-10 place-items-center rounded-lg border border-edge bg-surface text-cyber">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyber transition-colors hover:text-white"
            >
              Explore our services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <PageCTA />
    </div>
  )
}
