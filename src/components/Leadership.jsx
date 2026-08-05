import { TEAM } from '../data/team'

export default function Leadership() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Founder photos */}
          <div className="flex justify-center gap-6 sm:gap-8">
            {TEAM.map((m) => (
              <div key={m.role} className="text-center">
                <div className="founder-frame">
                  <img
                    src={m.image}
                    alt={`${m.name}, ${m.role} of Blyskode`}
                    width="152"
                    height="184"
                    loading="lazy"
                    className="h-46 w-38 object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{m.name}</h3>
                <p className="mt-0.5 text-sm text-cyber">{m.role}</p>
              </div>
            ))}
          </div>

          {/* Founders' note */}
          <div>
            <span className="section-pill">From the founders</span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              You work with <span className="text-gradient">us</span>, not a call center
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                We started Blyskode because we were tired of watching good businesses overpay big
                agencies for slow software, then get handed off to junior teams and account managers.
              </p>
              <p>
                So we built the opposite: a small, senior, founder-led team where you talk directly
                to the people writing your code. No layers, no runaround, just honest advice, clear
                pricing, and software that actually ships.
              </p>
              <p>
                Whether you are a startup testing an idea or an established company modernizing your
                stack, we treat your project like it is our own.
              </p>
            </div>
            <p className="mt-6 font-display text-lg text-white">Muhammad Adeel &amp; Taimoor Nasir</p>
            <p className="text-sm text-muted">Founders, Blyskode</p>
          </div>
        </div>
      </div>
    </section>
  )
}
