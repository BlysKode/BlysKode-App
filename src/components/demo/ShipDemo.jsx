import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Check, GitBranch } from 'lucide-react'
import { prefersReducedMotion, whileVisible } from '../../lib/motion'

/**
 * A delivery pipeline, running.
 *
 * This is the one piece of motion on the page that is worth authoring in
 * detail, because it is the argument: the thing we sell is that a change goes
 * from a push to production without drama, and showing that is more
 * persuasive than a paragraph claiming it.
 *
 * The timeline is compressed to about nine seconds while the durations on
 * screen stay the real ones, so the pacing reads as a build rather than as a
 * loading bar.
 */

const COMMAND = 'git push origin main'

const STEPS = [
  { label: 'Install dependencies', meta: '412 packages', seconds: 2.1 },
  { label: 'Typecheck', meta: '0 errors', seconds: 1.4 },
  { label: 'Test suite', meta: 'passed', seconds: 6.8, count: 248 },
  { label: 'Production build', meta: '312 kB gzipped', seconds: 9.2 },
  { label: 'Deploy to edge', meta: '3 regions', seconds: 4.6 },
]

const TOTAL = STEPS.reduce((sum, s) => sum + s.seconds, 0)

const RESULTS = [
  ['LCP', '0.9s'],
  ['Coverage', '94%'],
  ['Downtime', '0s'],
]

export default function ShipDemo() {
  const root = useRef(null)
  const command = useRef(null)
  const caret = useRef(null)
  const bar = useRef(null)
  const clock = useRef(null)
  const status = useRef(null)

  useGSAP(
    () => {
      const steps = gsap.utils.toArray('.step', root.current)
      const marks = gsap.utils.toArray('.step-mark', root.current)
      const spins = gsap.utils.toArray('.step-spin', root.current)
      const times = gsap.utils.toArray('.step-time', root.current)
      const counter = root.current.querySelector('.step-count')
      const results = gsap.utils.toArray('.result', root.current)

      const setClock = (seconds) => {
        if (clock.current) clock.current.textContent = `${seconds.toFixed(1)}s`
      }

      // Reduced motion gets the finished state, which is also what the
      // prerendered HTML shows to a client with no JS at all.
      if (prefersReducedMotion()) {
        setClock(TOTAL)
        return
      }

      gsap.set(steps, { opacity: 0.25 })
      gsap.set(marks, { opacity: 0, scale: 0.4 })
      gsap.set(spins, { opacity: 0 })
      gsap.set(times, { opacity: 0 })
      gsap.set(results, { opacity: 0, y: 6 })
      gsap.set(bar.current, { scaleX: 0 })
      if (counter) counter.textContent = '0'
      command.current.textContent = ''
      setClock(0)

      const blink = gsap.to(caret.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)',
      })

      const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 2.4 })

      // 1. The push. Typed a character at a time so the sequence has a
      //    beginning a viewer can catch mid-scroll.
      const typed = { i: 0 }
      tl.to(typed, {
        i: COMMAND.length,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          command.current.textContent = COMMAND.slice(0, Math.round(typed.i))
        },
      })
        .to(status.current, { opacity: 1, duration: 0.2 }, 0.2)

      // 2. Each stage: wake up, spin, settle into a tick with its duration.
      let elapsed = 0
      STEPS.forEach((step, i) => {
        const share = step.seconds / TOTAL
        const runFor = 0.35 + share * 4.2
        const startedAt = elapsed
        elapsed += step.seconds

        tl.to(steps[i], { opacity: 1, duration: 0.28 }, '+=0.12')
          .to(spins[i], { opacity: 1, duration: 0.2 }, '<')
          // The clock keeps running through the stage, so the numbers on the
          // right and the number at the bottom always agree.
          .to(
            { t: startedAt },
            {
              t: elapsed,
              duration: runFor,
              ease: 'none',
              onUpdate() {
                setClock(this.targets()[0].t)
              },
            },
            '<',
          )
          .to(bar.current, { scaleX: elapsed / TOTAL, duration: runFor, ease: 'none' }, '<')

        if (step.count) {
          const n = { v: 0 }
          tl.to(
            n,
            {
              v: step.count,
              duration: runFor,
              ease: 'power1.out',
              onUpdate: () => {
                counter.textContent = String(Math.round(n.v))
              },
            },
            '<',
          )
        }

        tl.to(spins[i], { opacity: 0, duration: 0.15 })
          .to(marks[i], { opacity: 1, scale: 1, duration: 0.34, ease: 'back.out(2.2)' }, '<')
          .to(times[i], { opacity: 1, duration: 0.3 }, '<')
      })

      // 3. Landed.
      tl.to(status.current, { opacity: 0, duration: 0.2 })
        .add(() => {
          status.current.dataset.done = 'true'
        })
        .to(status.current, { opacity: 1, duration: 0.3 })
        .to(results, { opacity: 1, y: 0, duration: 0.45, stagger: 0.09 }, '-=0.1')

      // 4. Wind back for the next pass.
      tl.add(() => {
        status.current.dataset.done = 'false'
      }, '+=1.6')
        .to([steps, results], { opacity: 0, duration: 0.4, stagger: 0.02 }, '<')
        .set([marks, spins, times], { opacity: 0 })
        .set(marks, { scale: 0.4 })
        .set(bar.current, { scaleX: 0 })
        .set(steps, { opacity: 0.25 })
        .add(() => {
          command.current.textContent = ''
          if (counter) counter.textContent = '0'
          setClock(0)
        })

      const stop = whileVisible(root.current, {
        play: () => tl.play(),
        pause: () => tl.pause(),
      })

      return () => {
        stop()
        blink.kill()
        tl.kill()
      }
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      role="img"
      aria-label="A deployment pipeline running: install, typecheck, tests, build and deploy, all passing in 24.1 seconds with no downtime."
      className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_2px_6px_rgba(10,33,26,0.05),0_28px_60px_-24px_rgba(10,33,26,0.32)]"
    >
      {/* Chrome */}
      <div className="flex items-center gap-2.5 border-b border-line-soft bg-paper-soft px-3.5 py-2.5 sm:gap-3 sm:px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#e0e6ec]" />
          <span className="size-2.5 rounded-full bg-[#e0e6ec]" />
          <span className="size-2.5 rounded-full bg-[#e0e6ec]" />
        </div>
        <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-[0.74rem] font-medium text-muted">
          <GitBranch size={12} />
          blyskode/platform
          <span className="text-faint">·</span>
          main
        </span>
        <span
          ref={status}
          data-done="false"
          className="group ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-wide border-line bg-white text-muted data-[done=true]:border-jade/25 data-[done=true]:bg-jade-wash data-[done=true]:text-jade"
        >
          <span className="size-1.5 rounded-full bg-faint group-data-[done=true]:bg-jade" />
          <span className="group-data-[done=true]:hidden">running</span>
          <span className="hidden group-data-[done=true]:inline">live</span>
        </span>
      </div>

      {/* Command */}
      <div className="flex items-center gap-2 border-b border-line-soft px-3.5 py-3 font-mono text-[0.76rem] sm:px-4 sm:text-[0.8rem]">
        <span className="text-signal" aria-hidden="true">
          $
        </span>
        <span ref={command} className="text-ink">
          {COMMAND}
        </span>
        <span ref={caret} className="inline-block h-[1.05em] w-[7px] bg-ink/70" aria-hidden="true" />
      </div>

      {/* Stages */}
      <ol className="divide-y divide-line-soft">
        {STEPS.map((step) => (
          <li key={step.label} className="step flex items-center gap-2.5 px-3.5 py-[0.65rem] sm:gap-3 sm:px-4 sm:py-[0.7rem]">
            <span className="relative grid size-5 shrink-0 place-items-center" aria-hidden="true">
              <span className="step-spin absolute size-4 rounded-full border-[1.5px] border-line border-t-signal motion-safe:animate-spin" />
              <span className="step-mark grid size-5 place-items-center rounded-full bg-jade-wash text-jade">
                <Check size={12} strokeWidth={3} />
              </span>
            </span>

            <span className="text-[0.82rem] font-medium text-ink sm:text-[0.86rem]">{step.label}</span>

            <span className="ml-auto flex items-center gap-2 font-mono text-[0.7rem] sm:gap-3 sm:text-[0.75rem]">
              <span className="text-muted">
                {step.count ? (
                  <>
                    <span className="step-count tnum text-ink">{step.count}</span> {step.meta}
                  </>
                ) : (
                  step.meta
                )}
              </span>
              <span className="step-time tnum w-9 text-right text-faint sm:w-11">
                {step.seconds.toFixed(1)}s
              </span>
            </span>
          </li>
        ))}
      </ol>

      {/* Progress and outcome */}
      <div className="relative">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-line-soft" />
        <span
          ref={bar}
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 origin-left bg-signal"
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 bg-paper-soft px-3.5 py-3 sm:gap-x-5 sm:px-4">
          <span className="font-mono text-[0.75rem] font-semibold text-ink">
            <span ref={clock} className="tnum">
              {TOTAL.toFixed(1)}s
            </span>
            <span className="ml-2 font-normal text-muted">push to production</span>
          </span>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {RESULTS.map(([label, value]) => (
              <span
                key={label}
                className="result inline-flex items-baseline gap-1.5 rounded-md border border-line bg-white px-2.5 py-1 font-mono text-[0.7rem]"
              >
                <span className="text-muted">{label}</span>
                <span className="tnum font-semibold text-ink">{value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
