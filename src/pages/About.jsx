import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Gauge, Heart, ShieldCheck, Target, Users } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { TEAM } from '../data/team'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
            Blyskode is a US-based software development company headquartered in Brooklyn, New York,
            working with clients across the United States, United Kingdom, Europe, Australia, and
            worldwide. We help startups, SaaS companies, and growing enterprises design, build, and
            scale custom software, AI-powered products, and cloud platforms.
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

          {/* Founders */}
          <div className="mt-16 border-t border-white/5 pt-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Meet the founders
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Blyskode is founder-led. You work directly with the people accountable for your
              project, from the first call through launch and beyond.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
              {TEAM.map((m) => (
                <div
                  key={m.role}
                  className="spotlight-card flex items-center gap-5 rounded-2xl border border-edge bg-panel/60 p-5 backdrop-blur"
                >
                  <div className="founder-frame shrink-0">
                    <img
                      src={m.image}
                      alt={`${m.name}, ${m.role} of Blyskode`}
                      width="96"
                      height="116"
                      loading="lazy"
                      className="h-29 w-24 object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{m.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-cyber">{m.role}</p>
                    {m.bio && <p className="mt-2 text-sm leading-relaxed text-muted">{m.bio}</p>}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="mt-3 inline-grid size-8 place-items-center rounded-full border border-edge bg-surface text-muted transition-colors hover:border-cyber/50 hover:text-cyber"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
