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
    faqs: [
      ['What can I hire a full stack developer for?', 'End-to-end features: the user-facing frontend (React, Next.js), the backend APIs and business logic (Node.js), the database, and the integrations that tie them together. One full stack developer can take a feature from design to production instead of you coordinating separate frontend and backend hires.'],
      ['Do full stack developers work in my codebase and process?', 'Yes. They work directly in your repository, follow your branching and review process, and are reviewed by your team like any other engineer. You get daily communication and progress you can see, not a black-box handoff.'],
      ['Do I own the code, and how fast can they start?', 'You own all code, repositories, and infrastructure from day one. After you share requirements we send a shortlist within one business day, and a developer can typically start within days, not weeks.'],
    ],
    related: [
      { label: 'What is full stack development? A 2026 guide', to: '/blog/what-is-full-stack-development' },
      { label: 'How to hire a software development company', to: '/blog/how-to-hire-a-software-development-company' },
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
    faqs: [
      ['When should I choose the MERN stack?', 'MERN (MongoDB, Express, React, Node) is ideal when you want one JavaScript language across the whole app, fast iteration, and a flexible document database. It suits startups, MVPs, dashboards, and real-time apps where speed of development matters.'],
      ['MERN or MEAN, what is the difference?', 'Both share MongoDB, Express, and Node. MERN uses React for the frontend (lighter, huge ecosystem, great for fast product work); MEAN uses Angular (more structured, often preferred for large enterprise teams). We help you pick based on your product and team, not a trend.'],
      ['Do I own the code, and how fast can they start?', 'You own all code and infrastructure from day one. Share your requirements and we send a shortlist within one business day, with developers able to start within days.'],
    ],
    related: [
      { label: 'What is full stack development? A 2026 guide', to: '/blog/what-is-full-stack-development' },
      { label: 'How much does it cost to build a SaaS MVP?', to: '/blog/cost-to-build-a-saas-mvp' },
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
    faqs: [
      ['Why choose the MEAN stack for enterprise apps?', 'MEAN (MongoDB, Express, Angular, Node) gives you a strongly structured, TypeScript-first frontend in Angular plus a scalable Node backend. That structure pays off on large, long-lived applications with big teams, where consistency and maintainability matter more than raw speed.'],
      ['Can you work with our existing Angular codebase?', 'Yes. Our MEAN developers plug into your existing Angular and Node repositories, follow your architecture and review standards, and can modernize or extend a legacy Angular app as well as build new modules.'],
      ['Do I own the code, and how fast can they start?', 'You own all code and infrastructure from day one. After you share requirements we send a shortlist within one business day.'],
    ],
    related: [
      { label: 'What is full stack development? A 2026 guide', to: '/blog/what-is-full-stack-development' },
      { label: 'Staff augmentation vs outsourcing', to: '/blog/staff-augmentation-vs-outsourcing' },
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
    faqs: [
      ['When is the MEVN stack the right choice?', 'MEVN (MongoDB, Express, Vue, Node) suits teams who want Vue.js on the frontend: a gentle learning curve, clean reactivity, and fast development, backed by a scalable Node and MongoDB backend. It is a strong fit for dashboards, internal tools, and product MVPs.'],
      ['Vue or React, which should we use?', 'Vue is often faster to onboard and very readable; React has the larger ecosystem and talent pool. If your team already prefers Vue, MEVN keeps everything in one language end to end. We are happy to advise honestly based on your team and product.'],
      ['Do I own the code, and how fast can they start?', 'You own all code and infrastructure from day one, and developers can typically start within days of you sharing requirements.'],
    ],
    related: [
      { label: 'What is full stack development? A 2026 guide', to: '/blog/what-is-full-stack-development' },
      { label: 'How much does it cost to build a SaaS MVP?', to: '/blog/cost-to-build-a-saas-mvp' },
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
    faqs: [
      ['What can I hire a WordPress developer for?', 'Custom themes and plugins, WooCommerce stores, speed and Core Web Vitals optimization, security hardening, migrations from other platforms, and ongoing maintenance. We build sites your team can actually edit, not ones that break on every update.'],
      ['Do you work with WooCommerce and page builders like Elementor?', 'Yes. We build and optimize WooCommerce stores end to end (products, payments, checkout) and work with Elementor, Gutenberg, and ACF, or build fully custom themes when a page builder would slow the site down.'],
      ['Do I own the site, hosting, and code?', 'Yes, you own the site, hosting accounts, and any custom code from day one. We hand over cleanly with documentation so you are never locked in.'],
    ],
    related: [
      { label: 'How to hire WordPress developers in 2026', to: '/blog/how-to-hire-wordpress-developers' },
      { label: 'WooCommerce development service', to: '/woocommerce-development' },
      { label: 'Live WordPress & WooCommerce work', to: '/portfolio/web-development-wordpress' },
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
    faqs: [
      ['What can I hire an AI engineer for?', 'LLM-powered features (chat, search, extraction, summarization) integrated into your product, agentic automations that remove manual work, machine learning pipelines, and the evaluation and guardrails that keep AI output reliable in production, not just a demo.'],
      ['How do you keep AI features reliable and safe?', 'We add evaluation suites, guardrails, and monitoring so outputs stay accurate and on-policy, and we design for graceful fallbacks. We built an event-driven, serverless fraud-detection system running ML inference across AWS and Azure with full audit trails.'],
      ['Do I own the code and models, and how fast can they start?', 'You own all code, prompts, and infrastructure from day one. Share your requirements and we send a shortlist within one business day.'],
    ],
    related: [
      { label: 'AI automation for small business: a practical guide', to: '/blog/ai-automation-for-small-business' },
      { label: 'Serverless fraud detection case study', to: '/portfolio/event-driven-serverless-fraud-detection' },
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
    faqs: [
      ['Should I hire for native or cross-platform development?', 'For most apps, one React Native or Flutter codebase gives you both iOS and Android faster and cheaper than two native builds, with near-native performance. Choose fully native (Swift, Kotlin) only when you need heavy device-specific performance. Our developers cover both and advise honestly.'],
      ['Do you handle App Store and Google Play submission?', 'Yes. We take apps from build to launch, including App Store and Google Play submission, review guidelines, and ongoing updates and maintenance after release.'],
      ['Do I own the code and app accounts, and how fast can they start?', 'You own all code and the App Store and Play Store accounts from day one. Share your requirements and we send a shortlist within one business day.'],
    ],
    related: [
      { label: 'How to hire mobile app developers in 2026', to: '/blog/how-to-hire-mobile-app-developers' },
      { label: 'How much does it cost to build a mobile app?', to: '/blog/cost-to-build-a-mobile-app' },
      { label: 'React Native vs Flutter: which to choose', to: '/blog/react-native-vs-flutter' },
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
    faqs: [
      ['What can I hire a DevOps engineer for?', 'CI/CD pipelines, infrastructure as code (Terraform), containerization with Docker and Kubernetes, cloud setup and migration across AWS, Azure and GCP, plus monitoring, alerting, and cloud cost optimization, so you ship faster and your systems stay healthy.'],
      ['Which clouds and tools do you work with?', 'AWS, Azure, and Google Cloud, with Terraform, Docker, Kubernetes, and GitHub Actions or GitLab CI. We can harden an existing setup or build your delivery pipeline and infrastructure from scratch.'],
      ['Can you help reduce our cloud bill?', 'Yes. Cost optimization (right-sizing, autoscaling, and commitment planning) is a core part of what our DevOps engineers do, alongside reliability and security.'],
    ],
    related: [
      { label: 'How to reduce your cloud bill: a 2026 guide', to: '/blog/reduce-cloud-costs' },
      { label: 'Serverless, multi-cloud case study', to: '/portfolio/event-driven-serverless-fraud-detection' },
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
