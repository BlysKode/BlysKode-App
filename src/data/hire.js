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
  'mern-stack-developers': {
    slug: 'mern-stack-developers',
    iconName: 'Atom',
    role: 'MERN Stack Developers',
    short: 'MERN Stack',
    tagline: 'MongoDB, Express, React, and Node experts for full JavaScript apps.',
    intro:
      'Hire MERN stack developers who build modern, single-language web apps end to end with MongoDB, Express, React, and Node.js, fast to develop and easy to scale.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'TypeScript'],
    doing: [
      { title: 'React frontend', desc: 'Fast, interactive user interfaces built with React.' },
      { title: 'Node & Express backend', desc: 'Robust APIs and server logic on Node.js and Express.' },
      { title: 'MongoDB data', desc: 'Flexible, scalable data models with MongoDB.' },
      { title: 'Ship & maintain', desc: 'Deploy, monitor, and iterate on the full stack.' },
    ],
  },
  'mean-stack-developers': {
    slug: 'mean-stack-developers',
    iconName: 'Layers',
    role: 'MEAN Stack Developers',
    short: 'MEAN Stack',
    tagline: 'MongoDB, Express, Angular, and Node experts for enterprise-grade apps.',
    intro:
      'Hire MEAN stack developers who build robust, structured web apps with MongoDB, Express, Angular, and Node.js, ideal for large, maintainable enterprise applications.',
    skills: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'RxJS'],
    doing: [
      { title: 'Angular frontend', desc: 'Structured, scalable interfaces with Angular and TypeScript.' },
      { title: 'Node & Express backend', desc: 'Secure APIs and business logic on Node.js.' },
      { title: 'MongoDB data', desc: 'Model and query data for enterprise workloads.' },
      { title: 'Enterprise architecture', desc: 'Maintainable structure built to scale with your org.' },
    ],
  },
  'mevn-stack-developers': {
    slug: 'mevn-stack-developers',
    iconName: 'Boxes',
    role: 'MEVN Stack Developers',
    short: 'MEVN Stack',
    tagline: 'MongoDB, Express, Vue, and Node experts for fast, elegant apps.',
    intro:
      'Hire MEVN stack developers who build lightweight, reactive web apps with MongoDB, Express, Vue.js, and Node.js, a great balance of simplicity, speed, and power.',
    skills: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'Pinia', 'JavaScript'],
    doing: [
      { title: 'Vue frontend', desc: 'Reactive, elegant interfaces built with Vue.js.' },
      { title: 'Node & Express backend', desc: 'Clean APIs and server logic on Node.js.' },
      { title: 'MongoDB data', desc: 'Flexible data models with MongoDB.' },
      { title: 'Ship & maintain', desc: 'Deploy and iterate on the full JavaScript stack.' },
    ],
  },
  'wordpress-developers': {
    slug: 'wordpress-developers',
    iconName: 'Newspaper',
    role: 'WordPress Developers',
    short: 'WordPress',
    tagline: 'Custom themes, plugins, and high-performance WordPress sites.',
    intro:
      'Hire WordPress developers who build custom themes, plugins, and fast, secure WordPress and WooCommerce sites, from marketing sites to full e-commerce stores.',
    skills: ['WordPress', 'PHP', 'WooCommerce', 'Custom Themes', 'Custom Plugins', 'Elementor'],
    doing: [
      { title: 'Custom themes', desc: 'Bespoke, on-brand themes built for performance.' },
      { title: 'Custom plugins', desc: 'Tailored plugins that add exactly the features you need.' },
      { title: 'WooCommerce', desc: 'Full online stores with secure checkout and payments.' },
      { title: 'Speed & security', desc: 'Optimized, hardened sites that load fast and stay safe.' },
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
