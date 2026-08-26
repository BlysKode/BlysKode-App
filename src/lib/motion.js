import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** True when the user has asked the OS or browser to minimize motion. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Shared easing. One curve across the whole site so entrances feel like they
 * come from the same hand rather than from eight different components.
 */
export const EASE = 'power3.out'

/**
 * Reveal every `[data-reveal]` inside `scope` as it enters the viewport.
 *
 * Batched rather than one ScrollTrigger per node: a long page can hold a
 * hundred of these, and batching keeps the scroll handler cheap. Elements are
 * hidden by CSS (`html.js-motion [data-reveal]`) so nothing flashes before the
 * first trigger fires, and shown again immediately when motion is reduced.
 */
export function revealIn(scope, options = {}) {
  const { y = 22, duration = 0.85, stagger = 0.08, start = 'top 88%' } = options
  const targets = gsap.utils.toArray('[data-reveal]', scope)
  if (!targets.length) return

  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }

  gsap.set(targets, { opacity: 0, y })
  ScrollTrigger.batch(targets, {
    start,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration, stagger, ease: EASE, overwrite: true }),
  })
}

/**
 * Split a text node into per-word spans wrapped in an overflow-hidden mask,
 * so words can rise into place from behind their own baseline.
 *
 * Returns the word elements. Done in JS rather than markup because the copy
 * needs to stay one readable string in the source and one string to a screen
 * reader; the wrapper carries the original text as its accessible name.
 */
export function splitWords(el) {
  if (!el || el.dataset.split === 'done') {
    return el ? Array.from(el.querySelectorAll('.word')) : []
  }
  const text = el.textContent
  el.setAttribute('aria-label', text)
  el.dataset.split = 'done'
  el.textContent = ''

  const words = []
  text.split(/\s+/).forEach((word, i, all) => {
    const mask = document.createElement('span')
    mask.className = 'inline-block overflow-hidden align-bottom'
    mask.setAttribute('aria-hidden', 'true')

    const inner = document.createElement('span')
    inner.className = 'word inline-block'
    inner.textContent = word
    mask.appendChild(inner)
    el.appendChild(mask)
    if (i < all.length - 1) el.appendChild(document.createTextNode(' '))
    words.push(inner)
  })
  return words
}

/**
 * Count a number up when it scrolls into view.
 *
 * `format` receives the raw number so callers can add a suffix or a separator
 * without the tween having to know about it.
 */
export function countUp(el, to, { format = (n) => String(Math.round(n)), duration = 1.6 } = {}) {
  if (!el) return
  if (prefersReducedMotion()) {
    el.textContent = format(to)
    return
  }
  const state = { n: 0 }
  gsap.to(state, {
    n: to,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = format(state.n)
    },
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  })
}

/**
 * Run `fn` only while `el` is on screen and the tab is visible.
 *
 * Looping demos are decorative: leaving one running behind a switched-away tab
 * burns battery for nobody's benefit. Returns a cleanup function.
 */
export function whileVisible(el, { play, pause }) {
  if (!el || typeof IntersectionObserver === 'undefined') return () => {}

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => (entry.isIntersecting && !document.hidden ? play() : pause()))
    },
    { threshold: 0.25 },
  )
  io.observe(el)

  const onVisibility = () => {
    if (document.hidden) pause()
  }
  document.addEventListener('visibilitychange', onVisibility)

  return () => {
    io.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
  }
}
