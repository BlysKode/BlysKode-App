import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { POSTS } from '../data/posts'

export default function Blog() {
  return (
    <div className="pt-28">
      <section className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
            ]}
          />
          <span className="section-pill">Blog</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Insights on <span className="text-gradient">AI, cloud & software</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Practical guides and ideas from the Blyskode team on building AI-powered products and
            scalable cloud platforms.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="spotlight-card group flex flex-col rounded-2xl border border-edge bg-panel/60 p-7 backdrop-blur transition-colors hover:border-cyber/40"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-edge bg-surface px-3 py-1 text-xs text-cyber"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-xl font-semibold text-white group-hover:text-cyber">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  <span>{post.dateLabel}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={13} /> {post.readMins} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-cyber">
                  Read article
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </div>
  )
}
