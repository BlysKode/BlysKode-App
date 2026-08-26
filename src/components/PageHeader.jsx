import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Breadcrumbs from './Breadcrumbs'
import { EASE, prefersReducedMotion } from '../lib/motion'

/**
 * The standard opening for every inner page: breadcrumbs, an eyebrow, a title
 * and a lede, with anything extra passed as children.
 *
 * One component rather than the same markup copied into eleven pages, so the
 * spacing above the fold is identical wherever a visitor lands from search.
 */
export default function PageHeader({
  trail,
  eyebrow,
  title,
  deck,
  lede,
  children,
  align = 'left',
}) {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('.ph-item', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: EASE,
        delay: 0.05,
      })
    },
    { scope: root },
  )

  return (
    <header ref={root} className="relative overflow-hidden border-b border-line pt-[120px] pb-14 lg:pt-[148px] lg:pb-20">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className={`shell relative ${align === 'center' ? 'text-center' : ''}`}>
        {trail && (
          <div className={`ph-item ${align === 'center' ? 'flex justify-center' : ''}`}>
            <Breadcrumbs trail={trail} />
          </div>
        )}

        {eyebrow && (
          <p className={`ph-item eyebrow ${align === 'center' ? 'justify-center' : ''}`}>
            {eyebrow}
          </p>
        )}

        <h1
          className={`ph-item mt-5 max-w-[20ch] text-[2.2rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.8rem] lg:text-[3.1rem] ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {title}
        </h1>

        {/* A deck sits between the title and the lede: one line of plain
            English about what this page is, at a size between the two. */}
        {deck && (
          <p
            className={`ph-item mt-4 max-w-[52ch] text-[1.14rem] leading-snug font-medium text-ink-soft ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {deck}
          </p>
        )}

        {lede && (
          <p className={`ph-item lede mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>{lede}</p>
        )}

        {children && <div className="ph-item mt-9">{children}</div>}
      </div>
    </header>
  )
}
