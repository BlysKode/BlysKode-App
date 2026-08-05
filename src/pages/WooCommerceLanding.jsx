import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  ExternalLink,
  Gauge,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'

const PAINS = [
  'Your store loads slowly, and every extra second drops sales.',
  'Checkout is clunky on mobile, so carts get abandoned.',
  'The design looks dated and buyers do not trust it.',
  'You are not ranking, so no new traffic finds the store.',
]

const CAPABILITIES = [
  { icon: ShoppingCart, title: 'Custom WooCommerce builds', desc: 'Storefronts designed around your products and brand, not a generic template.' },
  { icon: Gauge, title: 'Speed optimization', desc: 'Fast Core Web Vitals so pages load quick and Google ranks you higher.' },
  { icon: CreditCard, title: 'Payments & checkout', desc: 'Smooth, secure checkout with Stripe, PayPal, and the gateways you need.' },
  { icon: Smartphone, title: 'Mobile-first design', desc: 'Most shoppers are on phones. Your store will look and sell great there.' },
  { icon: RefreshCw, title: 'Migrations & redesigns', desc: 'Move from Shopify, Wix, or an old site to WooCommerce with no lost sales.' },
  { icon: ShieldCheck, title: 'Security & support', desc: 'Backups, updates, and ongoing support that keep the store safe and online.' },
]

const STEPS = [
  ['01', 'Free audit', 'We review your current store and send a short video with 3 concrete fixes.'],
  ['02', 'Plan & quote', 'You get a clear scope, timeline, and honest fixed price. No surprises.'],
  ['03', 'Design & build', 'We design and build in fast sprints, sharing progress you can see.'],
  ['04', 'Launch & grow', 'We launch, monitor, and support, and can drive traffic with SEO after.'],
]

const FAQS = [
  ['How much does a WooCommerce store cost?', 'It depends on scope. After the free audit we send a clear fixed price so you know the cost up front, with no hidden fees.'],
  ['Can you fix or speed up my existing store?', 'Yes. We do redesigns, speed optimization, and migrations, not only new builds. The free audit shows exactly what we would improve.'],
  ['Are you really US-based?', 'Yes, Blyskode is a US-based company headquartered in Brooklyn, New York, working with clients worldwide. You work directly with the founders.'],
]

export default function WooCommerceLanding() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full bg-neon/10 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'WooCommerce Development', path: '/woocommerce-development' },
            ]}
          />
          <span className="section-pill">WooCommerce &amp; E-commerce</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            WooCommerce stores that load fast and{' '}
            <span className="text-gradient">sell more</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            We design, build, and speed up WooCommerce stores for US and worldwide brands, fast,
            mobile-first, and built to turn visitors into buyers. US-based team in Brooklyn, working
            directly with the founders.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/blyskode/30min"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
            >
              Book a free store audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/portfolio/web-development-wordpress"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
            >
              See live stores
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted">
            Free store audit · No obligation · We reply within 24 hours
          </p>
        </div>
      </section>

      {/* Pain */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <h2 className="max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
            Is your store quietly losing sales?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PAINS.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-edge bg-panel/60 p-5 text-slate-300"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-magenta/40 bg-magenta/10 text-magenta">
                  ✕
                </span>
                <span className="leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            What we build for you
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="spotlight-card rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-edge bg-panel/60">
              <img
                src="/portfolio/webdev/harperreece.png"
                alt="Harper Reece, a live WooCommerce store built by Blyskode"
                loading="lazy"
                className="w-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.15em] text-cyber uppercase">
                Live client store
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Real stores, really shipped
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Harper Reece is one of the live WooCommerce stores we designed and built, a custom,
                mobile-friendly storefront made to convert. It is one of several live sites in our
                portfolio across the US and UK.
              </p>
              <ul className="mt-6 space-y-3">
                {['Custom WooCommerce design, not a template', 'Fast and fully mobile-responsive', 'Real, live, and in front of customers'].map((h) => (
                  <li key={h} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-cyber/40 bg-cyber/10 text-cyber">
                      <Check size={14} />
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/portfolio/web-development-wordpress"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyber transition-colors hover:text-white"
              >
                View the live stores
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free audit offer */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 p-8 backdrop-blur md:p-12">
            <div className="pointer-events-none absolute -top-24 right-0 h-48 w-2/3 rounded-full bg-gradient-to-r from-cyber/15 via-neon/15 to-magenta/15 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <div className="mb-4 inline-grid size-12 place-items-center rounded-xl border border-edge bg-surface text-cyber">
                  <Search size={22} />
                </div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Get a free store audit
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Send us your store and we will record a short video pointing out the top 3 things
                  hurting your sales, speed, mobile, checkout, and SEO, plus how we would fix them.
                  No cost, no obligation.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {['A 3-minute personalized video', '3 concrete, prioritized fixes', 'Speed and mobile review', 'A clear plan if you want help'].map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyber" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://calendly.com/blyskode/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
                >
                  <CalendarDays size={16} />
                  Book my free audit
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-edge bg-surface px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyber/50"
                >
                  Or send us a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">How it works</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([num, title, desc]) => (
              <div
                key={num}
                className="rounded-2xl border border-edge bg-panel/60 p-6 backdrop-blur"
              >
                <span className="font-display text-2xl font-bold text-gradient">{num}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-edge bg-panel/60 p-6">
                <h3 className="font-display text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel/60 px-6 py-14 text-center backdrop-blur md:px-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyber/20 via-neon/20 to-magenta/20 blur-[90px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                Ready for a store that actually sells?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Book a free audit and we will show you exactly what to fix, whether or not you work
                with us.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://calendly.com/blyskode/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(56,225,255,0.6)] transition-[filter] hover:brightness-110"
                >
                  Book a free store audit
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-5 text-xs text-muted">
                Free audit · No obligation · US-based team in Brooklyn, NY
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
