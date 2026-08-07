import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageCTA from '../components/PageCTA'
import { POST_BY_SLUG } from '../data/posts'
import AiAutomation from '../content/ai-automation-for-small-business.jsx'
import AppCost from '../content/cost-to-build-a-mobile-app.jsx'
import CloudCosts from '../content/reduce-cloud-costs.jsx'
import FullStack from '../content/what-is-full-stack-development.jsx'
import RnVsFlutter from '../content/react-native-vs-flutter.jsx'
import StaffAug from '../content/staff-augmentation-vs-outsourcing.jsx'
import HireCompany from '../content/how-to-hire-a-software-development-company.jsx'
import SaasMvpCost from '../content/cost-to-build-a-saas-mvp.jsx'
import OffshoreVsUs from '../content/offshore-vs-us-software-development.jsx'

const BODIES = {
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

  return (
    <div className="pt-28">
      <article className="relative py-14 md:py-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 md:px-10">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
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
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-white/5 pb-8 text-sm text-muted">
            <span>By {post.author}</span>
            <span>{post.dateLabel}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} /> {post.readMins} min read
            </span>
          </div>

          <div className="article-prose mt-8">
            <Body />
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-cyber"
            >
              <ArrowLeft size={15} /> All articles
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyber transition-colors hover:text-white"
            >
              Work with us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </article>

      <PageCTA />
    </div>
  )
}
