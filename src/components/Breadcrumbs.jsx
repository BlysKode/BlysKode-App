import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {trail.map((item, i) => {
          const last = i === trail.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-slate-300">{item.name}</span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-cyber">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight size={14} className="text-edge" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
