import { TEAM } from '../data/team'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Leadership() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-10">
        <div className="text-center">
          <span className="section-pill">Leadership</span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Meet the <span className="text-gradient">founders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            The people behind your build. You work directly with the founders, not an anonymous
            queue.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((m) => (
            <div
              key={m.role}
              className="spotlight-card flex flex-col items-center rounded-2xl border border-edge bg-panel/60 p-7 text-center backdrop-blur"
            >
              <div className="founder-frame mt-2 mb-1">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role} of Blyskode`}
                  width="176"
                  height="216"
                  loading="lazy"
                  className="h-54 w-44 object-cover object-top"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-cyber">{m.role}</p>
              {m.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>}
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-5 grid size-9 place-items-center rounded-full border border-edge bg-surface text-muted transition-colors hover:border-cyber/50 hover:text-cyber"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
