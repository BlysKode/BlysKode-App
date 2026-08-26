import { Link } from 'react-router-dom'

/**
 * The mark is a shell prompt: a chevron and a cursor rule. It says software
 * company without resorting to a gradient, and it stays legible at 24px in a
 * favicon or a footer.
 */
export function BrandMark({ size = 32, className = '' }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-[9px] bg-ink ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7.5 12.5 12 7 16.5" />
        <path d="M14.5 16.5H18" />
      </svg>
    </span>
  )
}

export default function Brand({ to = '/', onDark = false, size = 32, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2.5 font-display text-[1.12rem] font-semibold tracking-[-0.02em] ${
        onDark ? 'text-white' : 'text-ink'
      } ${className}`}
    >
      <BrandMark size={size} className={onDark ? 'bg-white/12 ring-1 ring-white/20' : ''} />
      <span>Blyskode</span>
    </Link>
  )
}
