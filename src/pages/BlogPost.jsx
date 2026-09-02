import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { POSTS, POST_BY_SLUG } from '../data/posts'
import AiAutomation from '../content/ai-automation-for-small-business.jsx'
import AppCost from '../content/cost-to-build-a-mobile-app.jsx'
import CloudCosts from '../content/reduce-cloud-costs.jsx'
import FullStack from '../content/what-is-full-stack-development.jsx'
import RnVsFlutter from '../content/react-native-vs-flutter.jsx'
import StaffAug from '../content/staff-augmentation-vs-outsourcing.jsx'
import HireCompany from '../content/how-to-hire-a-software-development-company.jsx'
import SaasMvpCost from '../content/cost-to-build-a-saas-mvp.jsx'
import OffshoreVsUs from '../content/offshore-vs-us-software-development.jsx'
import WebsiteCost from '../content/how-much-does-a-website-cost.jsx'

const BODIES = {
  'how-much-does-a-website-cost': WebsiteCost,
  'ai-automation-for-small-business': AiAutomation,
  'cost-to-build-a-mobile-app': AppCost,
  'reduce-cloud-costs': CloudCosts,
  'what-is-full-stack-development': FullStack,
  'react-native-vs-flutter': RnVsFlutter,
  'staff-augmentation-vs-outsourcing': StaffAug,
  'how-to-hire-a-software-development-company': HireCompany,
  'cost-to-build-a-saas-mvp': SaasMvpCost,
  'offshore-vs-us-software-development': OffshoreVsUs,
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POST_BY_SLUG[slug]
  const Body = BODIES[slug]
  if (!post || !Body) return <Navigate to="/blog" replace />

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="page-head border-b border-line">
          <div className="mx-auto w-full max-w-[720px] px-5 sm:px-7">
            <Breadcrumbs
              trail={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
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
            <h1 className="mt-4 text-[1.9rem] leading-[1.14] tracking-[-0.03em] sm:mt-5 sm:text-[2.6rem]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[1.06rem] leading-[1.65] text-body">
              {post.excerpt}
            </p>
            <p className="mt-7 font-mono text-[0.78rem] text-muted">
              {post.author} · {post.dateLabel} · {post.readMins} min read
            </p>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[720px] px-5 py-14 sm:px-7 lg:py-20">
          <div className="article-prose">
            <Body />
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-line pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-body transition-colors hover:text-signal"
            >
              <ArrowLeft size={15} />
              All articles
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-signal"
            >
              Work with us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-y border-line bg-paper-soft py-16">
          <div className="shell">
            <h2 className="text-[1.3rem]">Keep reading</h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group flex h-full flex-col bg-white p-6 transition-colors hover:bg-paper-soft"
                  >
                    <h3 className="text-[1rem] leading-snug group-hover:text-signal">{p.title}</h3>
                    <p className="mt-auto pt-5 font-mono text-[0.73rem] text-muted">
                      {p.readMins} min read
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="pt-20">
        <PageCTA />
      </div>
    </>
  )
}
