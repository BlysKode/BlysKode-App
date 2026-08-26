import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { TEAM } from '../data/team'
import { revealIn } from '../lib/motion'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Leadership() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current), { scope: root })

  return (
    <section ref={root} className="section-lg">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
        <div>
          <p data-reveal className="eyebrow">
            Who you deal with
          </p>
          <h2 data-reveal className="mt-4 text-[1.85rem] sm:mt-5 sm:text-[2.6rem]">
            Founder led, and it stays that way.
          </h2>
          <p data-reveal className="lede mt-5">
            Blyskode is small on purpose. The founders scope your project, sit in the reviews and
            answer the escalations, which is only possible while we take on work at a pace we can
            actually staff.
          </p>
          <p data-reveal className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            If that means we occasionally tell you our next start date is six weeks out, that is
            the trade we have chosen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
          {TEAM.map((member) => (
            <figure key={member.role} data-reveal className="card card-hoverable overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-paper-mute">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} of Blyskode`}
                  width="360"
                  height="450"
                  loading="lazy"
                  className="size-full object-cover object-top"
                />
              </div>
              <figcaption className="flex items-start justify-between gap-2 border-t border-line p-4 sm:p-5">
                <div>
                  <p className="font-display text-[1.02rem] font-semibold text-ink">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-[0.85rem] text-muted">{member.role}</p>
                  {member.bio && (
                    <p className="mt-2.5 text-[0.86rem] leading-relaxed text-body">{member.bio}</p>
                  )}
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="grid size-8 shrink-0 place-items-center rounded-md border border-line text-muted transition-colors hover:border-signal/40 hover:bg-signal-wash hover:text-signal"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
