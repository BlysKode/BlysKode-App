// Plain JS (no JSX) so the Node prerender + sitemap can import post
// metadata. Post bodies live in src/content/<slug>.jsx (client only).

export const POSTS = [
  {
    slug: 'what-is-full-stack-development',
    title: 'What Is Full Stack Development? A 2026 Guide for Businesses',
    description:
      'A plain-English guide to full stack development in 2026: what it means, the layers of a modern web app, popular tech stacks, and how to choose the right one for your project.',
    excerpt:
      'A plain-English guide to full stack development: what it means, the layers of a modern web app, the popular 2026 stacks, and how to choose the right one for your project.',
    date: '2026-07-22',
    dateLabel: 'July 22, 2026',
    author: 'Blyskode Team',
    tags: ['Full Stack Development', 'Product Engineering'],
    readMins: 6,
  },
  {
    slug: 'reduce-cloud-costs',
    title: 'How to Reduce Your Cloud Bill: A 2026 Cost Optimization Guide',
    description:
      'Nearly a third of cloud spend is wasted. Here are the practical tactics that cut AWS, Azure, and GCP bills in 2026, from rightsizing to commitment discounts, without hurting performance.',
    excerpt:
      'Nearly a third of cloud spend is wasted. Here are the practical tactics that cut AWS, Azure, and GCP bills in 2026 without hurting performance or reliability.',
    date: '2026-07-21',
    dateLabel: 'July 21, 2026',
    author: 'Blyskode Team',
    tags: ['Cloud & DevOps', 'Cost Optimization'],
    readMins: 7,
  },
  {
    slug: 'cost-to-build-a-mobile-app',
    title: 'How Much Does It Cost to Build a Mobile App in 2026?',
    description:
      'A clear breakdown of mobile app development costs in 2026 by complexity, the factors that drive the price, and practical ways to build for less without cutting corners.',
    excerpt:
      'App costs range from a few thousand to several hundred thousand dollars. Here is a clear 2026 breakdown by complexity, what actually drives the price, and how to build for less.',
    date: '2026-07-21',
    dateLabel: 'July 21, 2026',
    author: 'Blyskode Team',
    tags: ['Mobile Apps', 'Product Engineering'],
    readMins: 7,
  },
  {
    slug: 'ai-automation-for-small-business',
    title: 'AI Automation for Small Business: A Practical 2026 Guide',
    description:
      'What AI automation is, the workflows that pay off first, real ROI numbers, and a step-by-step way for small businesses to get started in 2026.',
    excerpt:
      'AI automation is no longer just for enterprises. Here are the workflows that pay off first for small businesses, the ROI to expect, and how to start without wasting money.',
    date: '2026-07-21',
    dateLabel: 'July 21, 2026',
    author: 'Blyskode Team',
    tags: ['AI Automation', 'Small Business'],
    readMins: 8,
  },
]

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]))
