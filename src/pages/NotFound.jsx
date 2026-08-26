import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const ELSEWHERE = [
  { label: 'Services', to: '/services' },
  { label: 'Hire developers', to: '/hire-developers' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center px-5 py-32">
      <div className="w-full max-w-lg">
        <p className="font-mono text-[0.78rem] font-semibold tracking-[0.14em] text-signal uppercase">
          404
        </p>
        <h1 className="mt-4 text-[2rem] sm:text-[2.4rem]">This page is not here.</h1>
        <p className="mt-4 text-[1rem] leading-relaxed text-body">
          The link is either wrong or the page has moved. Nothing is broken on your end.
        </p>

        <Link to="/" className="btn btn-primary mt-8">
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {ELSEWHERE.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-center justify-between bg-white px-5 py-3.5 text-[0.92rem] font-medium text-ink transition-colors hover:bg-paper-soft hover:text-signal"
              >
                {item.label}
                <ArrowUpRight size={15} className="text-faint group-hover:text-signal" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
