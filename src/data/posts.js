// Plain JS (no JSX) so the Node prerender + sitemap can import post
// metadata. Post bodies live in src/content/<slug>.jsx (client only).

export const POSTS = [
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
