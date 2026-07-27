import {
  Blocks,
  BarChart3,
  Bot,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Cpu,
  GaugeCircle,
  GitBranch,
  Layers,
  LineChart,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
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
