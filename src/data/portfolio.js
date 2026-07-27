// Plain data (no JSX/lucide) so the Node prerender can import it via
// pages.js. Case-study bodies live in src/content/portfolio/<slug>.jsx.

export const PROJECTS = [
  {
    slug: 'event-driven-serverless-fraud-detection',
    title: 'Event-Driven Serverless Fraud Detection System',
    tagline: 'Real-time, multi-cloud fraud detection on a serverless, event-driven architecture.',
    summary:
      'A serverless platform that ingests financial transaction events in real time, runs ML inference across AWS and Azure, and flags fraud in milliseconds — with end-to-end encryption and full audit trails.',
    category: 'AI & Cloud · FinTech',
    image: '/portfolio/fraud-detection-architecture.png',
    ogImage: '/portfolio/fraud-detection-og.png',
    tech: [
      'Apache Kafka',
      'Azure Event Grid',
      'AWS Lambda',
      'Azure Functions',
      'Scikit-learn',
      'PyTorch',
      'AWS KMS',
      'Azure Key Vault',
      'Kinesis Firehose',
      'Amazon S3',
      'Amazon Athena',
    ],
    highlights: [
      'Millisecond fraud scoring on live transaction streams',
      'Multi-cloud (AWS + Azure) for resilience and no lock-in',
      'Serverless — scales to any volume, costs nothing at idle',
      'Encrypted end-to-end with full, queryable audit trail',
    ],
  },
]

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]))
