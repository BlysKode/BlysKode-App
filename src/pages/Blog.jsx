import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageCTA from '../components/PageCTA'
import { POSTS } from '../data/posts'
import { revealIn } from '../lib/motion'

export default function Blog() {
  const root = useRef(null)
  useGSAP(() => revealIn(root.current, { stagger: 0.05 }), { scope: root })

  const [lead, ...rest] = POSTS

  return (
    <>
      <PageHeader
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
        eyebrow="Writing"
        title="What we have learned, written down."
        lede="Cost breakdowns, technology comparisons and hiring advice from the projects we run. No thought leadership, no predictions about the next decade."
      />

      <div ref={root}>
        <section className="section-tight">
          <div className="shell">
            {/* Lead article */}
            {lead && (
              <article data-reveal className="card card-hoverable group">
                <Link to={`/blog/${lead.slug}`} className="block p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.72rem] text-muted">
                    <span className="rounded border border-line bg-paper-soft px-2 py-0.5">
                      Latest
                    </span>
                    <span>{lead.dateLabel}</span>
                    <span>{lead.readMins} min read</span>
                  </div>
                  <h2 className="mt-5 max-w-[24ch] text-[1.7rem] leading-tight group-hover:text-signal sm:text-[2.1rem]">
                    {lead.title}
                  </h2>
                  <p className="mt-4 max-w-[68ch] text-[1rem] leading-relaxed text-body">
                    {lead.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-signal">
                    Read the article
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </article>
            )}

            {/* The rest, as an index */}
            <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {rest.map((post) => (
                <li key={post.slug} data-reveal>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-paper-soft"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-line bg-paper-soft px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 text-[1.14rem] leading-snug group-hover:text-signal">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 text-[0.91rem] leading-relaxed text-body">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto pt-6 font-mono text-[0.74rem] text-muted">
                      {post.dateLabel} · {post.readMins} min read
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <PageCTA />
    </>
  )
}
