// Plain JS (no JSX) so both the browser bundle and the Node prerender
// script can import it. Single source of truth for per-page SEO.

import { POSTS, POST_BY_SLUG } from '../data/posts.js'
import { HIRE_LIST, HIRE_ROLES } from '../data/hire.js'
import { FAQS } from '../data/faq.js'
import { PROJECTS, PROJECT_BY_SLUG } from '../data/portfolio.js'
import { TEAM } from '../data/team.js'

export const SITE = 'https://blyskode.com'
const OG_IMAGE = `${SITE}/og.png`

const STATIC_PAGES = {
  '/': {
    title: 'Blyskode | Software Development Company — AI, Cloud & Apps',
    description:
      'Blyskode is a US-based software development company building custom software, AI, cloud, web, and mobile apps for startups and enterprises worldwide. Hire dedicated developers or outsource your project.',
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
  '/services/mobile-app-development': {
    title: 'Mobile App Development Services | Blyskode',
    description:
      'Blyskode builds native and cross-platform iOS and Android apps with React Native and Flutter, from MVP to App Store launch. Hire a mobile app development team.',
  },
  '/services/custom-software-development': {
    title: 'Custom Software Development Services | Blyskode',
    description:
      'Blyskode builds bespoke custom software and SaaS products, from MVP development to enterprise platforms, engineered around your exact business workflows.',
  },
  '/services/quality-assurance': {
    title: 'QA & Software Testing Services | Blyskode',
    description:
      'Blyskode provides automated and manual software testing and QA services that keep every release stable, secure, and regression-free.',
  },
  '/services/web-development': {
    title: 'Web Development Services | Blyskode',
    description:
      'Blyskode builds fast, responsive websites and custom web applications with React, Next.js, and WordPress, optimized for speed, SEO, and conversions.',
  },
  '/services/ui-ux-design': {
    title: 'UI/UX Design Services | Blyskode',
    description:
      'Blyskode designs intuitive, on-brand UI/UX for web and mobile apps, from user research and wireframes to polished, developer-ready design systems and branding.',
  },
  '/services/saas-development': {
    title: 'SaaS Development Services | Blyskode',
    description:
      'Blyskode builds multi-tenant SaaS platforms end-to-end, with subscription billing, dashboards, and scalable architecture, from MVP to enterprise scale.',
  },
  '/services/mvp-development': {
    title: 'MVP Development Services for Startups | Blyskode',
    description:
      'Blyskode helps startups launch a focused MVP fast to validate with real users, with a production-ready build and a clear roadmap to scale.',
  },
  '/services/ecommerce-development': {
    title: 'Ecommerce Development Services | Blyskode',
    description:
      'Blyskode builds fast, secure online stores on WooCommerce, Shopify, and custom platforms, optimized to convert traffic into sales.',
  },
  '/about': {
    title: 'About Blyskode | US-Based Software Development Company',
    description:
      'Blyskode is a US-based software development company headquartered in Brooklyn, New York, serving startups, SaaS companies, and enterprises across the US, UK, Europe, Australia, and worldwide.',
  },
  '/hire-developers': {
    title: 'Hire Dedicated Developers | Blyskode',
    description:
      'Hire vetted, dedicated developers from Blyskode: full stack, AI, frontend, backend, mobile, and DevOps engineers. Onboard in days and scale flexibly.',
  },
  '/portfolio': {
    title: 'Portfolio & Case Studies | Blyskode',
    description:
      'Real systems Blyskode has designed and built — the problem, the architecture, and how it works. Explore our AI and cloud engineering case studies.',
  },
  '/blog': {
    title: 'Blog | Blyskode — AI, Cloud & Software Insights',
    description:
      'Practical guides from the Blyskode team on AI automation, cloud, DevOps, and building scalable software for startups and small businesses.',
  },
  '/contact': {
    title: 'Contact Blyskode | Start Your Project',
    description:
      'Get in touch with Blyskode. Share your project and we reply within 24 hours with a clear plan and honest estimate, or book a call directly.',
  },
}

// Merge in one page per blog post and per hire role
export const PAGES = {
  ...STATIC_PAGES,
  ...Object.fromEntries(
    POSTS.map((p) => [
      `/blog/${p.slug}`,
      { title: `${p.title} | Blyskode`, description: p.description },
    ]),
  ),
  ...Object.fromEntries(
    HIRE_LIST.map((r) => [
      `/hire-developers/${r.slug}`,
      {
        title: `Hire ${r.role} | Blyskode`,
        description: `Hire dedicated ${r.role.toLowerCase()} from Blyskode. ${r.tagline} Vetted talent, fast onboarding, and flexible engagement.`,
      },
    ]),
  ),
  ...Object.fromEntries(
    PROJECTS.map((p) => [
      `/portfolio/${p.slug}`,
      {
        title: `${p.title}${p.kind === 'case-study' ? ' — Case Study' : ''} | Blyskode`,
        description: p.summary,
        image: p.ogImage,
      },
    ]),
  ),
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
  telephone: '+13473667437',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brooklyn',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  description:
    'Blyskode is a US-based software development company, headquartered in Brooklyn, New York, helping startups, SaaS companies, and enterprises worldwide build custom software, AI-powered products, and scalable cloud platforms.',
  slogan: 'Transforming Businesses with Modern AI & Cloud Solutions',
  foundingLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY', addressCountry: 'US' } },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'AI Automation',
    'Machine Learning',
    'Full Stack Development',
    'Mobile App Development',
    'Custom Software Development',
    'Cloud Computing',
    'DevOps',
    'AWS',
    'Azure',
    'Google Cloud',
    'Quality Assurance',
  ],
  sameAs: ['https://www.linkedin.com/company/blyskode'],
  founder: TEAM.map((m) => ({
    '@type': 'Person',
    name: m.name,
    jobTitle: m.role,
    image: `${SITE}${m.image}`,
    worksFor: { '@id': `${SITE}/#organization` },
  })),
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
  'Web Development':
    'Fast, responsive websites and custom web applications built to rank and convert.',
  'UI/UX Design':
    'Intuitive, on-brand interface design and branding for web and mobile products.',
  'SaaS Development':
    'Multi-tenant SaaS platforms with subscription billing, dashboards, and integrations.',
  'MVP Development':
    'Focused, production-ready MVPs that help startups validate and launch fast.',
  'Ecommerce Development':
    'Fast, secure online stores on WooCommerce, Shopify, and custom platforms.',
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
    'Blyskode is a US-based software development company helping startups, SaaS companies, and enterprises worldwide build custom software, AI-powered products, and scalable cloud platforms.',
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  telephone: '+13473667437',
  address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY', addressCountry: 'US' },
  hasOfferCatalog: OFFER_CATALOG,
}

const FAQ_NODE = {
  '@type': 'FAQPage',
  '@id': `${SITE}/#faq`,
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// Speakable + WebPage node for the homepage — helps voice assistants and
// AI answer engines identify the most quotable summary content.
const HOME_WEBPAGE = {
  '@type': 'WebPage',
  '@id': `${SITE}/#webpage`,
  url: `${SITE}/`,
  name: PAGES['/'].title,
  description: PAGES['/'].description,
  isPartOf: { '@id': `${SITE}/#website` },
  about: { '@id': `${SITE}/#organization` },
  primaryImageOfPage: OG_IMAGE,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#faq'],
  },
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
      return [HOME_WEBPAGE, PRO_SERVICE, FAQ_NODE]
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
    case '/hire-developers':
      return [
        { '@type': 'CollectionPage', '@id': `${canonical}#webpage`, url: canonical, name: PAGES[path].title, isPartOf: { '@id': `${SITE}/#website` } },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Hire Developers', path: '/hire-developers' }]),
      ]
    case '/portfolio':
      return [
        {
          '@type': 'CollectionPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: PAGES[path].title,
          isPartOf: { '@id': `${SITE}/#website` },
          hasPart: PROJECTS.map((p) => ({
            '@type': 'CreativeWork',
            name: p.title,
            url: `${SITE}/portfolio/${p.slug}`,
            image: `${SITE}${p.ogImage}`,
          })),
        },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]),
      ]
    case '/blog':
      return [
        {
          '@type': 'Blog',
          '@id': `${canonical}#blog`,
          url: canonical,
          name: 'Blyskode Blog',
          description: PAGES[path].description,
          publisher: { '@id': `${SITE}/#organization` },
          blogPost: POSTS.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `${SITE}/blog/${p.slug}`,
            datePublished: p.date,
            author: { '@type': 'Organization', name: p.author },
          })),
        },
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
      ]
    default: {
      // portfolio case-study pages
      if (path.startsWith('/portfolio/')) {
        const pr = PROJECT_BY_SLUG[path.replace('/portfolio/', '')]
        return [
          {
            '@type': ['CreativeWork', 'Article'],
            '@id': `${canonical}#casestudy`,
            headline: `${pr.title} — Case Study`,
            name: pr.title,
            description: pr.summary,
            url: canonical,
            image: `${SITE}${pr.ogImage}`,
            author: { '@id': `${SITE}/#organization` },
            publisher: { '@id': `${SITE}/#organization` },
            keywords: (pr.tech || []).join(', '),
            mainEntityOfPage: canonical,
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: pr.title, path },
          ]),
        ]
      }
      // hire role detail pages
      if (path.startsWith('/hire-developers/')) {
        const r = HIRE_ROLES[path.replace('/hire-developers/', '')]
        return [
          {
            '@type': 'Service',
            '@id': `${canonical}#service`,
            name: `Hire ${r.role}`,
            serviceType: r.role,
            url: canonical,
            description: PAGES[path].description,
            provider: { '@id': `${SITE}/#organization` },
            areaServed: 'Worldwide',
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Hire Developers', path: '/hire-developers' },
            { name: `Hire ${r.role}`, path },
          ]),
        ]
      }
      // blog post detail pages
      if (path.startsWith('/blog/')) {
        const post = POST_BY_SLUG[path.replace('/blog/', '')]
        return [
          {
            '@type': 'BlogPosting',
            '@id': `${canonical}#article`,
            headline: post.title,
            description: post.description,
            url: canonical,
            image: OG_IMAGE,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Organization', name: post.author, url: `${SITE}/` },
            publisher: { '@id': `${SITE}/#organization` },
            mainEntityOfPage: canonical,
            keywords: post.tags.join(', '),
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
        ]
      }

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
  const ogImage = meta.image ? `${SITE}${meta.image}` : OG_IMAGE

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
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
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
