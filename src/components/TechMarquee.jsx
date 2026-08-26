import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { prefersReducedMotion, whileVisible } from '../lib/motion'

const ROW_ONE = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go',
  'PostgreSQL', 'Redis', 'GraphQL', 'React Native', 'Flutter', 'Swift', 'Kotlin',
]

const ROW_TWO = [
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
  'GitHub Actions', 'Claude', 'OpenAI', 'LangChain', 'PyTorch', 'Stripe', 'Playwright',
]

/**
 * Two rows drifting in opposite directions.
 *
 * The list is rendered twice and wrapped with a modifier rather than looped
 * with a reset, so there is no seam at the join and no layout thrash: the
 * whole thing is one transform on one element per row.
 */
function Row({ items, direction = 1, duration = 46 }) {
  const track = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const el = track.current
      // Half the width, because the content is duplicated for the wrap.
      const distance = el.scrollWidth / 2
      if (!distance) return

      const wrap = gsap.utils.wrap(-distance, 0)
      gsap.set(el, { x: direction > 0 ? -distance : 0 })

      const tween = gsap.to(el, {
        x: direction > 0 ? 0 : -distance,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: { x: (x) => `${wrap(parseFloat(x))}px` },
      })

      const stop = whileVisible(el, { play: () => tween.play(), pause: () => tween.pause() })
      return () => {
        stop()
        tween.kill()
      }
    },
    { scope: track },
  )

  return (
    <div ref={track} className="flex w-max gap-3 will-change-transform">
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="rounded-lg border border-line bg-white px-4 py-2 font-mono text-[0.82rem] whitespace-nowrap text-body"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-line bg-paper-soft py-14"
      aria-label="Technologies we work with"
    >
      <p className="shell mb-8 text-center font-display text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
        The stack we work in every day
      </p>

      {/* Masked at both edges so items enter and leave rather than clipping */}
      <div
        className="space-y-3 [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]"
        aria-hidden="true"
      >
        <Row items={ROW_ONE} direction={1} duration={52} />
        <Row items={ROW_TWO} direction={-1} duration={58} />
      </div>

      {/* The moving rows are decorative; this is what a screen reader gets. */}
      <p className="sr-only">
        We work with {ROW_ONE.join(', ')}, {ROW_TWO.join(', ')}.
      </p>
    </section>
  )
}
