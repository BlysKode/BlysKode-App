// Plain JS (no JSX) so both the browser bundle and the Node prerender
// script can import it. Single source of truth for per-page SEO.

export const SITE = 'https://blyskode.com'
const OG_IMAGE = `${SITE}/og.png`

export const PAGES = {
  '/': {
    title: 'Blyskode Modern AI & Cloud Solutions | Software Agency',
    description:
      'Blyskode transforms businesses with modern AI & cloud solutions: full stack development, AI engineering & automation, DevOps, cloud services (AWS, Azure, GCP), mobile apps, QA and more.',
  },
  '/services': {
    title: 'Services | Blyskode Software & AI Agency',
    description:
      'Explore Blyskode services: product engineering, AI & automation, and cloud & DevOps, plus recruitment, SEO, and content writing for startups and enterprises.',
  },
  '/services/product-engineering': {
    title: 'Product Engineering Services | Blyskode',
    description:
      'Blyskode builds web apps, mobile apps, custom software, and QA end-to-end — from first wireframe to production release, engineered for scale.',
  },
  '/services/ai-automation': {
    title: 'AI & Automation Services | Blyskode',
    description:
      'Blyskode delivers AI engineering, LLM integrations, agentic automation, and machine learning that remove manual work and unlock new product value.',
  },
  '/services/cloud-devops': {
    title: 'Cloud & DevOps Services | Blyskode',
    description:
      'Blyskode designs resilient cloud infrastructure on AWS, Azure, GCP and more, with DevOps, CI/CD, observability, and cost optimization.',
  },
  '/about': {
    title: 'About Blyskode | Software & AI Agency in Islamabad',
    description:
      'Blyskode is a software and technology agency in Islamabad, Pakistan, helping startups, SaaS companies, and enterprises build AI-powered products and scalable cloud platforms.',
  },
  '/contact': {
    title: 'Contact Blyskode | Start Your Project',
    description:
      'Get in touch with Blyskode. Share your project and we reply within 24 hours with a clear plan and honest estimate, or book a call directly.',
  },
}

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Blyskode',
  alternateName: 'Blyskode Solutions',
  url: `${SITE}/`,
  logo: `${SITE}/favicon-512.png`,
  image: OG_IMAGE,
  email: 'blyskode@gmail.com',
  telephone: '+923338640860',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  description:
    'Blyskode is a software and technology agency helping startups, SaaS companies, and enterprises build AI-powered products and scalable cloud platforms.',
  sameAs: [],
}

const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: 'Blyskode Modern AI & Cloud Solutions',
  publisher: { '@id': `${SITE}/#organization` },
}

const NAV = {
  '@type': 'SiteNavigationElement',
  '@id': `${SITE}/#nav`,
  name: ['Services', 'Product Engineering', 'AI & Automation', 'Cloud & DevOps', 'About', 'Contact'],
  url: [
    `${SITE}/services`,
    `${SITE}/services/product-engineering`,
    `${SITE}/services/ai-automation`,
    `${SITE}/services/cloud-devops`,
    `${SITE}/about`,
    `${SITE}/contact`,
  ],
}

const SERVICE_NAMES = {
  'Full Stack Development':
    'End-to-end web applications built with modern frameworks, robust APIs, and scalable databases.',
  'AI Engineering':
    'Custom LLM integrations, machine learning pipelines, and intelligent product features.',
  'AI Automation':
    'Agentic workflows and process automation that eliminate repetitive work at scale.',
  'DevOps Engineering':
    'CI/CD pipelines, infrastructure as code, and observability for shipping with confidence.',
  'Cloud Services':
    'AWS, Azure, GCP, Huawei Cloud, DigitalOcean, Alibaba Cloud and more, architected for cost and scale.',
  'Multi-Platform Deployment':
    'Seamless deployments across cloud providers and VPS servers with zero-downtime strategies.',
  'End-to-End Recruitment':
    'Sourcing, vetting, and onboarding top technical talent tailored to your team.',
  'Mobile Application Development':
    'Native and cross-platform mobile apps with polished UX for iOS and Android.',
  'Custom Software Development':
    'Bespoke platforms and internal tools engineered around your exact business logic.',
  'SEO & Digital Marketing':
    'Data-driven growth strategies that increase visibility and convert traffic into revenue.',
  'Content & Blog Writing':
    'Technical and marketing content that builds authority and engages your audience.',
  'Quality Assurance (QA)':
    'Automated and manual testing that keeps every release stable, secure, and regression-free.',
}

const OFFER_CATALOG = {
  '@type': 'OfferCatalog',
  name: 'Blyskode Services',
  itemListElement: Object.entries(SERVICE_NAMES).map(([name, description]) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, description },
  })),
}

const PRO_SERVICE = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#service`,
  name: 'Blyskode',
  url: `${SITE}/`,
  image: OG_IMAGE,
  description:
    'Blyskode is a software and technology agency helping startups, SaaS companies, and enterprises build AI-powered products and scalable cloud platforms.',
  priceRange: '$$',
  areaServed: 'Worldwide',
  telephone: '+923338640860',
  address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
  hasOfferCatalog: OFFER_CATALOG,
}

const FAQ_NODE = {
  '@type': 'FAQPage',
  '@id': `${SITE}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Blyskode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blyskode is a software and technology agency that helps startups, SaaS companies, and growing enterprises build AI-powered products and scalable cloud platforms. Blyskode delivers across three core practices: Product Engineering, AI & Automation, and Cloud & DevOps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Blyskode offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blyskode offers full stack web and mobile development, custom software, quality assurance, AI engineering and automation, machine learning, cloud architecture on AWS, Azure, GCP and more, DevOps and CI/CD, plus recruitment, SEO, and content writing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Blyskode located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blyskode is based in Islamabad, Pakistan, and works remotely with clients worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly does Blyskode respond to inquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blyskode replies to every project inquiry within 24 hours with a clear scope and an honest estimate. You can also book a call directly through the contact page.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start a project with Blyskode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fill out the inquiry form on the contact page with your project details, email blyskode@gmail.com, message us on WhatsApp, or schedule a call. Blyskode will get back to you within one business day.',
      },
    },
  ],
}

function breadcrumb(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  }
}

function pageNodes(path) {
  const canonical = `${SITE}${path === '/' ? '/' : path}`
  switch (path) {
    case '/':
      return [PRO_SERVICE, FAQ_NODE]
    case '/services':
      return [
        { '@type': 'CollectionPage', '@id': `${canonical}#webpage`, url: canonical, name: PAGES[path].title, isPartOf: { '@id': `${SITE}/#website` } },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
      ]
    case '/about':
      return [
        { '@type': 'AboutPage', '@id': `${canonical}#webpage`, url: canonical, name: PAGES[path].title, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${SITE}/#organization` } },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
      ]
    case '/contact':
      return [
        { '@type': 'ContactPage', '@id': `${canonical}#webpage`, url: canonical, name: PAGES[path].title, isPartOf: { '@id': `${SITE}/#website` } },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
      ]
    default: {
      // service detail pages
      const name = PAGES[path].title.replace(' | Blyskode', '')
      return [
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name,
          serviceType: name,
          url: canonical,
          description: PAGES[path].description,
          provider: { '@id': `${SITE}/#organization` },
          areaServed: 'Worldwide',
        },
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: name, path },
        ]),
      ]
    }
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Returns the per-page <head> tag string injected at build time. */
export function buildHead(path) {
  const meta = PAGES[path]
  if (!meta) return ''
  const canonical = `${SITE}${path === '/' ? '/' : path}`
  const graph = { '@context': 'https://schema.org', '@graph': [ORG, WEBSITE, NAV, ...pageNodes(path)] }

  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Blyskode" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(graph)}</script>`,
  ].join('\n    ')
}

export const ROUTES = Object.keys(PAGES)

// Head for the prerendered dist/404.html (served by Vercel on unknown
// URLs). Rendered from an unmatched location so the client hydrates the
// same NotFound markup — no hydration mismatch. noindex so it never ranks.
export function buildNotFoundHead() {
  return [
    `<title>Page not found | Blyskode</title>`,
    `<meta name="description" content="The page you are looking for doesn't exist or has moved." />`,
    `<meta name="robots" content="noindex, follow" />`,
    `<meta property="og:title" content="Page not found | Blyskode" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
  ].join('\n    ')
}
