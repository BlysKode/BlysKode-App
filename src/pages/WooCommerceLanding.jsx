import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
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
  X,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { revealIn } from '../lib/motion'

const PAINS = [
  'The store loads slowly, and every extra second costs you sales.',
  'Checkout is awkward on a phone, so carts get abandoned there.',
  'The design looks dated, and buyers read that as risk.',
  'Nothing ranks, so no new traffic finds the store at all.',
]

const CAPABILITIES = [
  {
    icon: ShoppingCart,
    title: 'Custom WooCommerce builds',
    desc: 'Storefronts designed around your products and your brand, not a template with your logo dropped in.',
  },
  {
    icon: Gauge,
    title: 'Speed and Core Web Vitals',
    desc: 'Pages that load fast on a mid range phone on mobile data, which is what Google actually measures.',
  },
  {
    icon: CreditCard,
    title: 'Payments and checkout',
    desc: 'Secure, low friction checkout with Stripe, PayPal and whichever gateways your market expects.',
  },
  {
    icon: Smartphone,
    title: 'Mobile first design',
    desc: 'Most of your shoppers are on a phone. That is where the design starts, not where it gets adapted to.',
  },
  {
    icon: RefreshCw,
    title: 'Migrations and redesigns',
    desc: 'Move from Shopify, Wix or an ageing build onto WooCommerce with redirects mapped and rankings intact.',
  },
  {
    icon: ShieldCheck,
    title: 'Security and support',
    desc: 'Backups, updates and monitoring, so the store stays online and stays yours.',
  },
]

const STEPS = [
  ['Free audit', 'Send us the store. You get a short video pointing out three concrete fixes.'],
  ['Plan and quote', 'A clear scope, a timeline and a fixed price, before anyone starts.'],
  ['Design and build', 'Built in short sprints with progress you can click through, not read about.'],
  ['Launch and grow', 'We launch, monitor and support it, and can drive traffic with SEO afterwards.'],
]

const PROOF_POINTS = [
  'Custom WooCommerce design, not a template',
  'Fast and fully responsive on any screen',
  'Live, and in front of real customers',
]

const AUDIT_INCLUDES = [
  'A three minute video, recorded for your store',
  'Three prioritised fixes, most valuable first',
  'A speed and mobile review with numbers',
  'A plan and price, only if you want one',
]

const FAQS = [
  [
    'How much does a WooCommerce store cost?',
    'It depends on scope. After the free audit you get a fixed price for the work we have agreed, so the number you see is the number you pay.',
  ],
  [
    'Can you fix or speed up my existing store?',
    'Yes. Redesigns, speed work and migrations are most of what we do here, not just new builds. The free audit shows exactly what we would change.',
  ],
  [
    'Are you really US based?',
    'Yes. Blyskode is headquartered in Brooklyn, New York, working with clients worldwide, and you deal with the founders directly.',
  ],
]

export default function WooCommerceLanding() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'WooCommerce Development', path: '/woocommerce-development' },
        ]}
        eyebrow="WooCommerce development"
        title="WooCommerce stores that load fast and sell more."
        lede="We design, build and speed up WooCommerce stores for brands in the US, UK and beyond. Mobile first, measurably quick, and built to turn visitors into buyers."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="https://calendly.com/blyskode/30min"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Book a free store audit
            <ArrowRight size={16} className="arrow" />
          
              <span className="sr-only"> (opens in a new tab)</span></a>
          <Link to="/portfolio/web-development-wordpress" className="btn btn-secondary">
            See live stores
          </Link>
        </div>
        <p className="mt-5 text-[0.85rem] text-muted">
          Free audit, no obligation, and a reply within one business day.
        </p>
      </PageHeader>

      <div ref={root}>
        {/* Pain */}
        <section className="section">
          <div className="shell">
            <h2 data-reveal className="max-w-[22ch] text-[1.8rem] sm:text-[2.2rem]">
              Is your store quietly losing sales?
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {PAINS.map((pain) => (
                <li key={pain} data-reveal className="card flex items-start gap-3.5 p-5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#fdf0f2] text-rose">
                    <X size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[0.94rem] leading-relaxed text-body">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-y border-line bg-paper-soft section">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              What we build for you
            </h2>
            <div className="stack-top grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
                <div key={title} data-reveal>
                  <Icon size={20} strokeWidth={1.8} className="text-signal" />
                  <h3 className="mt-4 text-[1.04rem]">{title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="section">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal className="card overflow-hidden">
              <img
                src="/portfolio/webdev/harperreece.png"
                alt="Harper Reece, a live WooCommerce store built by Blyskode"
                width="1280"
                height="800"
                loading="lazy"
                className="h-auto w-full object-cover object-top"
              />
            </div>
            <div>
              <p data-reveal className="eyebrow">
                Live client store
              </p>
              <h2 data-reveal className="mt-5 text-[1.8rem] sm:text-[2.1rem]">
                Real stores, really shipped.
              </h2>
              <p data-reveal className="mt-4 text-[0.98rem] leading-relaxed text-body">
                Harper Reece is one of the WooCommerce stores we designed and built: a custom,
                mobile friendly storefront made to convert. It is one of several live sites in our
                portfolio across the US and UK.
              </p>
              <ul className="mt-7 space-y-3">
                {PROOF_POINTS.map((point) => (
                  <li key={point} data-reveal className="flex items-start gap-3 text-[0.94rem] text-body">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-jade-wash text-jade">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                data-reveal
                to="/portfolio/web-development-wordpress"
                className="mt-7 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-signal"
              >
                View the live stores
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Free audit */}
        <section className="pb-14 sm:pb-20 lg:pb-28">
          <div className="shell">
            <div data-reveal className="band-dark rounded-2xl px-6 py-12 sm:px-12 lg:px-16">
              <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
                <div>
                  <Search size={22} className="text-white/50" />
                  <h2 className="mt-5 text-[1.8rem] text-white sm:text-[2.1rem]">
                    Get a free store audit
                  </h2>
                  <p className="mt-4 max-w-[56ch] text-[1rem] leading-[1.68] text-white/65">
                    Send us your store and we will record a short video naming the three things
                    costing you the most sales, plus how we would fix each one. No cost, and no
                    obligation to hire us afterwards.
                  </p>
                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {AUDIT_INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-white/75">
                        <Check size={15} className="mt-1 shrink-0 text-white/60" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative flex flex-col gap-3">
                  <a
                    href="https://calendly.com/blyskode/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-onDark w-full"
                  >
                    <CalendarDays size={16} />
                    Book my free audit
                  
              <span className="sr-only"> (opens in a new tab)</span></a>
                  <Link to="/contact" className="btn btn-ghostDark w-full">
                    Or send us a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-line bg-paper-soft section">
          <div className="shell">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.2rem]">
              How it works
            </h2>
            <ol className="stack-top grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(([title, desc], i) => (
                <li key={title} data-reveal>
                  <span className="font-mono text-[0.76rem] font-semibold text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-[1.06rem]">{title}</h3>
                  <p className="mt-2.5 text-[0.91rem] leading-relaxed text-body">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="mx-auto w-full max-w-[760px] px-5 sm:px-7">
            <h2 data-reveal className="text-[1.8rem] sm:text-[2.1rem]">
              Common questions
            </h2>
            <dl className="mt-10">
              {FAQS.map(([q, a]) => (
                <div key={q} data-reveal className="border-b border-line py-6 first:pt-0">
                  <dt className="font-display text-[1.04rem] font-semibold text-ink">{q}</dt>
                  <dd className="mt-2.5 text-[0.95rem] leading-relaxed text-body">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-16 sm:pb-24 lg:pb-32">
          <div className="shell">
            <div data-reveal className="band-dark rounded-2xl px-6 py-14 sm:px-12 lg:px-16">
              <div className="relative max-w-2xl">
                <h2 className="text-[1.9rem] text-white sm:text-[2.3rem]">
                  Ready for a store that actually sells?
                </h2>
                <p className="mt-4 max-w-[52ch] text-[1rem] leading-[1.68] text-white/65">
                  Book the free audit and we will show you exactly what to fix, whether or not you
                  end up working with us.
                </p>
                <a
                  href="https://calendly.com/blyskode/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-onDark mt-8"
                >
                  Book a free store audit
                  <ArrowRight size={16} className="arrow" />
                
              <span className="sr-only"> (opens in a new tab)</span></a>
                <p className="mt-6 text-[0.82rem] text-white/60">
                  Free audit, no obligation, US based team in Brooklyn, New York.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
