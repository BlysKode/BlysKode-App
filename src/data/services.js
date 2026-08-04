import {
  Blocks,
  BarChart3,
  Bot,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  GaugeCircle,
  GitBranch,
  Globe,
  Layers,
  LayoutTemplate,
  LineChart,
  Palette,
  PenTool,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  Workflow,
  Zap,
} from 'lucide-react'

// Ordered map keyed by URL slug. Used by the /services overview and the
// /services/:slug detail pages.
export const SERVICE_DETAILS = {
  'product-engineering': {
    slug: 'product-engineering',
    icon: Code2,
    title: 'Product Engineering',
    tagline: 'Web, mobile, and custom software built end-to-end.',
    intro:
      'We design, build, and ship complete digital products, from the first wireframe to a production release your users trust. Robust architecture, clean code, and QA baked into every sprint.',
    capabilities: [
      { icon: Code2, title: 'Full Stack Development', desc: 'Modern web apps with robust APIs, scalable databases, and clean, maintainable code.' },
      { icon: Smartphone, title: 'Mobile Applications', desc: 'Native and cross-platform iOS and Android apps with polished, fast UX.' },
      { icon: Blocks, title: 'Custom Software', desc: 'Bespoke platforms and internal tools engineered around your exact business logic.' },
      { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Automated and manual testing that keeps every release stable and regression-free.' },
    ],
    deliverables: [
      'Production-ready web and mobile applications',
      'Documented, tested, and maintainable codebase',
      'CI/CD pipeline and deployment setup',
      'Handover, training, and ongoing support',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'React Native', 'Flutter', 'PostgreSQL', 'TypeScript'],
  },
  'ai-automation': {
    slug: 'ai-automation',
    icon: BrainCircuit,
    title: 'AI & Automation',
    tagline: 'Intelligent features and agentic workflows that remove manual work.',
    intro:
      'We integrate AI where it creates real value: smarter products, automated operations, and workflows that run themselves. From LLM features to end-to-end machine learning pipelines.',
    capabilities: [
      { icon: BrainCircuit, title: 'AI Engineering & LLMs', desc: 'Custom LLM integrations and intelligent product features built for reliability.' },
      { icon: Bot, title: 'AI Automation', desc: 'Agentic workflows that eliminate repetitive, manual work across your operations.' },
      { icon: Cpu, title: 'Machine Learning', desc: 'Data pipelines and ML models that turn your data into predictions and insight.' },
      { icon: Workflow, title: 'AI Product Strategy', desc: 'Clear, pragmatic roadmaps for where AI actually moves your metrics.' },
    ],
    deliverables: [
      'Deployed AI features and integrations',
      'Automation workflows with monitoring',
      'Evaluation and guardrails for reliable output',
      'Documentation and team enablement',
    ],
    tech: ['Claude', 'OpenAI', 'LangChain', 'Python', 'Vector DBs', 'PyTorch', 'n8n'],
  },
  'cloud-devops': {
    slug: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud & DevOps',
    tagline: 'Resilient infrastructure, automated delivery, and real observability.',
    intro:
      'We architect cloud infrastructure that scales with you and costs less to run, across AWS, Azure, GCP, Huawei Cloud, DigitalOcean, Alibaba Cloud, and VPS servers, with automated delivery baked in.',
    capabilities: [
      { icon: Boxes, title: 'Cloud Architecture', desc: 'Well-architected, secure infrastructure and migrations across major providers.' },
      { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Pipelines and infrastructure as code so you ship with confidence, fast.' },
      { icon: Layers, title: 'Multi-Platform Deployment', desc: 'Zero-downtime deployments across cloud providers and VPS servers.' },
      { icon: GaugeCircle, title: 'Observability & Cost', desc: 'Monitoring, alerting, and cost optimization that keep systems healthy and lean.' },
    ],
    deliverables: [
      'Scalable, secure cloud architecture',
      'Automated CI/CD and infrastructure as code',
      'Monitoring, logging, and alerting setup',
      'Cost optimization and runbooks',
    ],
    tech: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform apps for iOS and Android.',
    intro:
      'We design and build fast, polished mobile apps that users love, whether you need a cross-platform app from one codebase or native iOS and Android performance. From concept to App Store launch.',
    capabilities: [
      { icon: Smartphone, title: 'Cross-platform apps', desc: 'One codebase for iOS and Android with React Native or Flutter.' },
      { icon: Layers, title: 'Native iOS & Android', desc: 'Native Swift and Kotlin builds when performance demands it.' },
      { icon: Rocket, title: 'UI/UX design', desc: 'Intuitive, on-brand mobile experiences that keep users coming back.' },
      { icon: GaugeCircle, title: 'Launch & maintain', desc: 'App Store and Google Play submission, updates, and ongoing support.' },
    ],
    deliverables: [
      'Published iOS and Android apps',
      'Clean, tested, documented codebase',
      'App Store and Google Play submission',
      'Ongoing updates and support',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'TypeScript'],
  },
  'custom-software-development': {
    slug: 'custom-software-development',
    icon: Blocks,
    title: 'Custom Software Development',
    tagline: 'Bespoke software and SaaS built around your business.',
    intro:
      'When off-the-shelf tools do not fit, we build custom software and SaaS products engineered around your exact workflows, from an MVP that validates your idea to a full enterprise platform.',
    capabilities: [
      { icon: Rocket, title: 'MVP development', desc: 'Launch a focused first version fast to validate with real users.' },
      { icon: Boxes, title: 'SaaS platforms', desc: 'Multi-tenant, subscription-ready products built to scale.' },
      { icon: Blocks, title: 'Internal tools', desc: 'Custom dashboards and tools tailored to your operations.' },
      { icon: Workflow, title: 'Integrations & APIs', desc: 'Connect your systems and third-party services cleanly.' },
    ],
    deliverables: [
      'Production custom software or SaaS product',
      'Scalable architecture and documentation',
      'CI/CD and deployment setup',
      'Handover, training, and support',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
  },
  'quality-assurance': {
    slug: 'quality-assurance',
    icon: ShieldCheck,
    title: 'Quality Assurance & Testing',
    tagline: 'Automated and manual testing that ships stable releases.',
    intro:
      'We keep every release stable, secure, and regression-free with a mix of automated and manual software testing, so you can ship faster with confidence and catch issues before your users do.',
    capabilities: [
      { icon: Workflow, title: 'Automation testing', desc: 'Automated test suites that catch regressions on every change.' },
      { icon: ShieldCheck, title: 'Manual & exploratory', desc: 'Human testing for UX, edge cases, and real-world flows.' },
      { icon: GaugeCircle, title: 'Performance & security', desc: 'Load, performance, and security testing before you scale.' },
      { icon: Bot, title: 'QA process setup', desc: 'Test plans, CI integration, and reporting your team can trust.' },
    ],
    deliverables: [
      'Automated and manual test coverage',
      'Bug reports and test documentation',
      'CI-integrated test pipeline',
      'Release sign-off and a repeatable QA process',
    ],
    tech: ['Playwright', 'Cypress', 'Jest', 'Selenium', 'Postman', 'k6'],
  },
  'web-development': {
    slug: 'web-development',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Fast, responsive websites and web apps that convert.',
    intro:
      'We design and build modern websites and web applications that load fast, rank on Google, and turn visitors into customers, from marketing sites to complex, data-driven web apps.',
    capabilities: [
      { icon: Globe, title: 'Business & marketing websites', desc: 'Fast, responsive sites built to rank on search and convert visitors into leads.' },
      { icon: Code2, title: 'Custom web applications', desc: 'Interactive, data-driven web apps with secure APIs and scalable databases.' },
      { icon: LayoutTemplate, title: 'WordPress & CMS', desc: 'Custom WordPress, Elementor, and headless CMS builds your team can manage.' },
      { icon: GaugeCircle, title: 'Speed & SEO', desc: 'Core Web Vitals, clean markup, and technical SEO baked in from day one.' },
    ],
    deliverables: [
      'Responsive website or web app, launched',
      'Fast-loading, SEO-ready pages',
      'A CMS or admin your team can manage',
      'Analytics, hosting, and full handover',
    ],
    tech: ['React', 'Next.js', 'WordPress', 'Node.js', 'Tailwind CSS', 'TypeScript'],
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    tagline: 'Interfaces that are intuitive, on-brand, and built to convert.',
    intro:
      'We design clean, intuitive interfaces and end-to-end user experiences for web and mobile products, from research and wireframes to polished, developer-ready designs and brand systems.',
    capabilities: [
      { icon: Search, title: 'UX research & wireframes', desc: 'User flows, wireframes, and prototypes grounded in how people actually use your product.' },
      { icon: Palette, title: 'UI & visual design', desc: 'Polished, on-brand interfaces with consistent design systems and components.' },
      { icon: Smartphone, title: 'Web & mobile app design', desc: 'Responsive designs for web and native iOS and Android apps.' },
      { icon: PenTool, title: 'Brand & identity', desc: 'Logos, brand systems, and marketing creative that make you look established.' },
    ],
    deliverables: [
      'Wireframes, prototypes, and final UI',
      'A reusable design system and components',
      'Developer-ready design handoff',
      'Brand assets and a style guide',
    ],
    tech: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
  'saas-development': {
    slug: 'saas-development',
    icon: Boxes,
    title: 'SaaS Development',
    tagline: 'Multi-tenant SaaS products built to scale and subscribe.',
    intro:
      'We build subscription-ready SaaS platforms end-to-end, from multi-tenant architecture and billing to dashboards and integrations, engineered to scale as your customer base grows.',
    capabilities: [
      { icon: Boxes, title: 'Multi-tenant architecture', desc: 'Secure, scalable foundations that serve many customers from one codebase.' },
      { icon: CreditCard, title: 'Subscriptions & billing', desc: 'Stripe billing, plans, trials, and usage metering built in.' },
      { icon: LineChart, title: 'Dashboards & analytics', desc: 'Admin panels, user dashboards, and reporting your customers rely on.' },
      { icon: Workflow, title: 'Integrations & APIs', desc: 'Public APIs, webhooks, and third-party integrations that extend your product.' },
    ],
    deliverables: [
      'A production SaaS platform, launched',
      'Subscription billing and user management',
      'Scalable multi-tenant architecture',
      'Documentation, CI/CD, and support',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
  },
  'mvp-development': {
    slug: 'mvp-development',
    icon: Rocket,
    title: 'MVP Development',
    tagline: 'Launch a focused first version fast, and validate with real users.',
    intro:
      'We help startups turn an idea into a working product quickly, building a focused MVP that validates your concept with real users without over-building, so you can raise, learn, and iterate.',
    capabilities: [
      { icon: Target, title: 'Scope & prioritize', desc: 'We cut to the core feature set that proves your idea, then ship it.' },
      { icon: Zap, title: 'Rapid build', desc: 'A working, production-grade MVP in weeks, not months.' },
      { icon: Smartphone, title: 'Web & mobile MVPs', desc: 'Launch on web, iOS, or Android, whichever reaches your users fastest.' },
      { icon: BarChart3, title: 'Measure & iterate', desc: 'Analytics and feedback loops so you learn exactly what to build next.' },
    ],
    deliverables: [
      'A launched, production-ready MVP',
      'A clean codebase ready to scale',
      'Analytics and feedback tooling',
      'A clear, prioritized roadmap for v2',
    ],
    tech: ['React', 'Next.js', 'React Native', 'Node.js', 'Supabase', 'Vercel'],
  },
  'ecommerce-development': {
    slug: 'ecommerce-development',
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    tagline: 'Online stores that load fast and sell more.',
    intro:
      'We design and build online stores that are fast, secure, and easy to manage, from WooCommerce and Shopify storefronts to custom ecommerce platforms, optimized to convert browsers into buyers.',
    capabilities: [
      { icon: ShoppingCart, title: 'WooCommerce & Shopify', desc: 'Custom storefronts on the platforms you already know, built to convert.' },
      { icon: CreditCard, title: 'Payments & checkout', desc: 'Secure, frictionless checkout with Stripe, PayPal, and more.' },
      { icon: Code2, title: 'Custom & headless commerce', desc: 'Bespoke storefronts and headless setups when you need full control.' },
      { icon: GaugeCircle, title: 'Speed & conversion', desc: 'Fast pages, clean UX, and SEO that turn traffic into sales.' },
    ],
    deliverables: [
      'A launched, conversion-ready online store',
      'Secure payments and checkout',
      'Product, inventory, and order management',
      'Speed, SEO, and analytics setup',
    ],
    tech: ['WooCommerce', 'Shopify', 'WordPress', 'Next.js', 'Stripe'],
  },
}

const CORE_SLUGS = ['product-engineering', 'ai-automation', 'cloud-devops']

export const SERVICE_LIST = Object.values(SERVICE_DETAILS)
export const CORE_LIST = CORE_SLUGS.map((s) => SERVICE_DETAILS[s])
export const SPECIALIZED_LIST = SERVICE_LIST.filter((s) => !CORE_SLUGS.includes(s.slug))

// Extra services surfaced on the overview page.
export const ADDITIONAL = [
  { icon: ServerCog, title: 'End-to-End Recruitment', desc: 'Sourcing, vetting, and onboarding top technical talent tailored to your team.' },
  { icon: LineChart, title: 'SEO & Digital Marketing', desc: 'Data-driven growth strategies that increase visibility and convert traffic into revenue.' },
  { icon: BarChart3, title: 'Content & Blog Writing', desc: 'Technical and marketing content that builds authority and engages your audience.' },
  { icon: Rocket, title: 'Launch & Growth Support', desc: 'Ongoing maintenance, iteration, and 24/7 support to keep you moving after launch.' },
]
