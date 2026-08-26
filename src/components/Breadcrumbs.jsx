import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.83rem] text-muted">
        {trail.map((item, i) => {
          const last = i === trail.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-signal">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight size={13} className="text-faint" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
