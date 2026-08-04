// Plain data (no JSX/lucide) so the Node prerender can import it via
// pages.js. Case-study body lives in src/content/portfolio/<slug>.jsx.

export const PROJECTS = [
  {
    slug: 'event-driven-serverless-fraud-detection',
    kind: 'case-study',
    title: 'Event-Driven Serverless Fraud Detection System',
    tagline: 'Real-time, multi-cloud fraud detection on a serverless, event-driven architecture.',
    summary:
      'A serverless platform that ingests financial transaction events in real time, runs ML inference across AWS and Azure, and flags fraud in milliseconds, with end-to-end encryption and full audit trails.',
    category: 'AI & Cloud · FinTech',
    image: '/portfolio/fraud-detection-architecture.png',
    ogImage: '/portfolio/fraud-detection-og.png',
    tech: [
      'Apache Kafka', 'Azure Event Grid', 'AWS Lambda', 'Azure Functions',
      'Scikit-learn', 'PyTorch', 'AWS KMS', 'Azure Key Vault',
      'Kinesis Firehose', 'Amazon S3', 'Amazon Athena',
    ],
    highlights: [
      'Millisecond fraud scoring on live transaction streams',
      'Multi-cloud (AWS + Azure) for resilience and no lock-in',
      'Serverless, scales to any volume, costs nothing at idle',
      'Encrypted end-to-end with full, queryable audit trail',
    ],
  },
  {
    slug: 'web-development-wordpress',
    kind: 'sites',
    title: 'Web Development & WordPress',
    tagline: 'Custom WordPress, Elementor, and WooCommerce websites.',
    summary:
      'A selection of live websites we have designed and built with WordPress, Elementor, and WooCommerce, across e-commerce, finance, healthcare, moving, and agency businesses in the US and UK.',
    category: 'Web Development',
    image: '/portfolio/webdev/harperreece.png',
    ogImage: '/portfolio/webdev/harperreece.png',
    highlights: [
      'Live WordPress & WooCommerce sites for real clients',
      'Custom Elementor design, fully mobile-responsive',
      'E-commerce, finance, healthcare, and services',
      'Clients across the United States and United Kingdom',
    ],
    sites: [
      { name: 'Harper Reece', type: 'Custom apparel e-commerce (WooCommerce)', url: 'https://harperreece.com/', image: '/portfolio/webdev/harperreece.png' },
      { name: 'Medically', type: 'Medical clinic website (US)', url: 'https://www.medically.us/', image: '/portfolio/webdev/medically.png' },
      { name: 'Apex Global Biz', type: 'Financial services website', url: 'https://apexglobalbiz.com/', image: '/portfolio/webdev/apexglobalbiz.png' },
      { name: '1920 Agency', type: 'Digital marketing agency', url: 'https://1920agency.com/', image: '/portfolio/webdev/1920agency.png' },
      { name: 'Softwarelogics', type: 'Cloud services platform', url: 'https://softwarelogics.com/', image: '/portfolio/webdev/softwarelogics.png' },
      { name: 'Glidesk', type: 'Management solution', url: 'https://glidesk.com/', image: '/portfolio/webdev/glidesk.png' },
    ],
  },
  {
    slug: 'seo-digital-marketing',
    kind: 'gallery',
    title: 'SEO & Digital Marketing',
    tagline: 'Real ranking growth, local visibility, and ad-campaign results.',
    summary:
      'Search engine optimization and paid campaigns that grow organic traffic, local visibility, and reach, with results measured in Google Search Console, Google Business Profile, and the ad platforms.',
    category: 'SEO & Marketing',
    image: '/portfolio/seo/organic-growth.png',
    ogImage: '/portfolio/seo/organic-growth.png',
    highlights: [
      'Organic impressions grew from 6.5K to 17K in three months',
      'Average Google position improved from 72 to 48',
      'Local Business Profile: 10,962 views, 3,421 searches',
      'Google, Meta, TikTok, and YouTube campaign management',
    ],
    images: [
      { src: '/portfolio/seo/organic-growth.png', caption: 'Organic search growth: impressions rose from 6.5K to 17K and average Google position improved from 72 to 48 in three months (Google Search Console).' },
      { src: '/portfolio/seo/local-gbp.png', caption: 'Local SEO: a client’s Google Business Profile reached 10,962 views and appeared in 3,421 searches for terms like "phone repair service".' },
      { src: '/portfolio/seo/google-ads.png', caption: 'Google Ads campaign management and performance.' },
      { src: '/portfolio/seo/meta-ads.png', caption: 'Meta (Facebook & Instagram) advertising campaigns.' },
      { src: '/portfolio/seo/tiktok-ads.png', caption: 'TikTok advertising campaign management.' },
      { src: '/portfolio/seo/youtube-1.png', caption: 'YouTube video SEO and channel growth.' },
      { src: '/portfolio/seo/youtube-2.png', caption: 'YouTube video SEO performance over time.' },
    ],
  },
  {
    slug: 'graphic-design',
    kind: 'gallery',
    title: 'Graphic Design',
    tagline: 'UI/UX, brand, and marketing design.',
    summary:
      'Interface design, brand identity, and marketing creatives, from complete app UI kits to social media and campaign graphics.',
    category: 'Graphic Design',
    image: '/portfolio/graphic-design/ui-kit.png',
    ogImage: '/portfolio/graphic-design/smashpay.png',
    highlights: [
      'UI/UX design for mobile and web apps',
      'Social media and marketing creatives',
      'Brand identity and logo design',
    ],
    images: [
      { src: '/portfolio/graphic-design/ui-kit.png', caption: 'UI/UX design: a complete mobile app interface kit (sign-in, profile, forms, filters, and more).' },
      { src: '/portfolio/graphic-design/smashpay.png', caption: 'Social and marketing creative for SmashPay, a UK payroll services provider.' },
      { src: '/portfolio/graphic-design/logo.png', caption: 'Brand logo design.' },
    ],
  },
]

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]))
