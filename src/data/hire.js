// Plain data (no JSX/lucide imports) so the Node prerender can import it
// via pages.js. Icons are resolved by name in the page components.

export const HIRE_ROLES = {
  'full-stack-developers': {
    slug: 'full-stack-developers',
    iconName: 'Code2',
    role: 'Full Stack Developers',
    short: 'Full Stack',
    tagline: 'Engineers who build the whole product, frontend to backend.',
    intro:
      'Hire vetted full stack developers who own features end to end, from the interface users see to the servers and databases behind it. One engineer, or a whole team, ready to plug into your workflow.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST & GraphQL APIs'],
    doing: [
      { title: 'Frontend & backend', desc: 'Build responsive interfaces and the APIs and logic that power them.' },
      { title: 'Databases', desc: 'Design and query relational and NoSQL data models that scale.' },
      { title: 'Integrations', desc: 'Connect payments, auth, and third-party services cleanly.' },
      { title: 'Ship & maintain', desc: 'Deploy, monitor, and iterate on live features.' },
    ],
  },
  'ai-engineers': {
    slug: 'ai-engineers',
    iconName: 'BrainCircuit',
    role: 'AI Engineers',
    short: 'AI Engineers',
    tagline: 'Specialists who ship reliable AI features, not fragile demos.',
    intro:
      'Hire AI engineers experienced with LLM integrations, agentic automation, and machine learning who can take an AI idea from prototype to a production feature with proper guardrails.',
    skills: ['LLM Integrations', 'Python', 'LangChain', 'Vector Databases', 'ML Pipelines', 'Prompt Engineering'],
    doing: [
      { title: 'LLM features', desc: 'Integrate models like Claude and GPT into your product reliably.' },
      { title: 'Automation', desc: 'Build agentic workflows that remove manual, repetitive work.' },
      { title: 'Machine learning', desc: 'Design data pipelines and models for prediction and insight.' },
      { title: 'Evaluation', desc: 'Add guardrails and evals so AI output stays trustworthy.' },
    ],
  },
  'frontend-developers': {
    slug: 'frontend-developers',
    iconName: 'MonitorSmartphone',
    role: 'Frontend Developers',
    short: 'Frontend',
    tagline: 'Craft fast, polished, accessible user interfaces.',
    intro:
      'Hire frontend developers who turn designs into fast, pixel-accurate, accessible interfaces with modern frameworks, and who care about performance and user experience.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility (WCAG)', 'Performance'],
    doing: [
      { title: 'UI development', desc: 'Build responsive, pixel-accurate interfaces from any design.' },
      { title: 'Performance', desc: 'Optimize load times, rendering, and Core Web Vitals.' },
      { title: 'Accessibility', desc: 'Ship interfaces that work for every user and pass WCAG.' },
      { title: 'Design systems', desc: 'Create reusable component libraries that scale.' },
    ],
  },
  'backend-developers': {
    slug: 'backend-developers',
    iconName: 'Server',
    role: 'Backend Developers',
    short: 'Backend',
    tagline: 'Build the APIs, logic, and data layers that power your app.',
    intro:
      'Hire backend developers who design secure, scalable APIs and data models, handle the business logic, and keep your systems fast and reliable under load.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL', 'Redis', 'Microservices'],
    doing: [
      { title: 'API design', desc: 'Build clean, documented REST and GraphQL APIs.' },
      { title: 'Databases', desc: 'Model, index, and optimize relational and NoSQL data.' },
      { title: 'Business logic', desc: 'Implement the rules, auth, payments, and processing.' },
      { title: 'Scalability', desc: 'Keep systems fast and reliable as traffic grows.' },
    ],
  },
  'mobile-app-developers': {
    slug: 'mobile-app-developers',
    iconName: 'Smartphone',
    role: 'Mobile App Developers',
    short: 'Mobile',
    tagline: 'Native and cross-platform apps for iOS and Android.',
    intro:
      'Hire mobile app developers who build smooth, high-quality iOS and Android apps, whether you need native performance or a single cross-platform codebase.',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'App Store Deployment', 'Push & Offline'],
    doing: [
      { title: 'Cross-platform', desc: 'One codebase for iOS and Android with React Native or Flutter.' },
      { title: 'Native builds', desc: 'Native Swift and Kotlin when performance demands it.' },
      { title: 'Polished UX', desc: 'Smooth, intuitive mobile experiences users keep.' },
      { title: 'Launch', desc: 'Ship to the App Store and Google Play, and maintain releases.' },
    ],
  },
  'devops-engineers': {
    slug: 'devops-engineers',
    iconName: 'ServerCog',
    role: 'DevOps Engineers',
    short: 'DevOps',
    tagline: 'Automate delivery and keep infrastructure fast and reliable.',
    intro:
      'Hire DevOps engineers who set up CI/CD, infrastructure as code, and monitoring across AWS, Azure, and GCP, so you ship faster and sleep better.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring & Observability'],
    doing: [
      { title: 'CI/CD', desc: 'Automated pipelines so every change ships safely and fast.' },
      { title: 'Infrastructure as code', desc: 'Reproducible cloud infra with Terraform.' },
      { title: 'Containers', desc: 'Docker and Kubernetes for scalable, portable workloads.' },
      { title: 'Observability', desc: 'Monitoring, alerting, and cost control that keep systems healthy.' },
    ],
  },
}

export const HIRE_LIST = Object.values(HIRE_ROLES)

export const HIRE_BENEFITS = [
  { title: 'Vetted engineers', desc: 'Senior talent screened for skill and communication, not just resumes.' },
  { title: 'Fast onboarding', desc: 'Get matched and started in days, not weeks of hiring cycles.' },
  { title: 'Flexible engagement', desc: 'Scale up or down monthly. Hire one developer or a full team.' },
  { title: 'Timezone overlap', desc: 'We work in your hours with clear, responsive communication.' },
]
