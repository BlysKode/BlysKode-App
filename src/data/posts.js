// Plain JS (no JSX) so the Node prerender + sitemap can import post
// metadata. Post bodies live in src/content/<slug>.jsx (client only).

export const POSTS = [
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
