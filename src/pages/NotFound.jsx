import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center px-5 pt-24 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-gradient">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white">Page not found</h1>
        <p className="mt-2 text-muted">The page you are looking for doesn&apos;t exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyber to-neon px-7 py-3 text-sm font-semibold text-ink"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
