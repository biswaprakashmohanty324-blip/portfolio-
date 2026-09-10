export interface Project {
  id: string;
  title: string;
  category: 'Distributed Systems' | 'Mobile & Frontend' | 'Cloud & Infra';
  status: 'PRODUCTION' | 'ACTIVE BETA' | 'ARCHIVED';
  tagline: string;
  architecture: string;
  benchmarks: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  scope: string;
  metrics: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const profileData = {
  name: 'Biswa Prakash Mohanty',
  title: 'Software Engineer',
  systemStatus: 'ONLINE: Open to Opportunities',
  location: 'Global / Remote',
  email: 'biswaprakash.dev@example.com',
  github: 'https://github.com/biswaprakashmohanty324-blip',
  portfolioRepo: 'https://github.com/biswaprakashmohanty324-blip/portfolio-',
  linkedin: 'https://linkedin.com',
  resumeUrl: '#resume',
  headline: 'BISWA PRAKASH MOHANTY',
  subheadline:
    'Dedicated to mechanical sympathy with software platforms, operational rigor, and low-latency user experiences. Built with systematic precision.',
  specs: [
    { label: 'PRIMARY STACK', value: 'TypeScript, Go, React Native, Node.js' },
    { label: 'DISTRIBUTED & CLOUD', value: 'Docker, Kubernetes, AWS, PostgreSQL, Redis' },
    { label: 'MOBILE ENGINES', value: 'React Native, Expo, Native Modules' },
    { label: 'SYSTEM FOCUS', value: 'High-Concurrency Backends & Cross-Platform Clients' },
    { label: 'DESIGN SYSTEM', value: 'Technical Blueprint (Dark High-Contrast)' },
    { label: 'UPTIME / STATUS', value: 'Operational — Open to Senior/Staff Engineering' },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'chronos-engine',
    title: 'Chronos Distributed Task Engine',
    category: 'Distributed Systems',
    status: 'PRODUCTION',
    tagline: 'Fault-tolerant, high-throughput distributed task scheduler and orchestration pipeline.',
    architecture:
      'Engineered with Go and Raft consensus for leader election. Uses Redis-backed consistent hashing rings for task distribution with zero single points of failure.',
    benchmarks: [
      '45,000 tasks/sec throughput per node',
      'p99 dispatch latency < 3.8ms',
      '99.995% uptime over 12 months',
    ],
    stack: ['Go', 'Raft Consensus', 'Redis', 'Docker', 'gRPC'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
  },
  {
    id: 'blueprint-workbench',
    title: 'Cross-Platform Developer Workbench',
    category: 'Mobile & Frontend',
    status: 'ACTIVE BETA',
    tagline: 'High-density developer presentation workbench and system telemetry client.',
    architecture:
      'Universal React Native architecture targeting Web and Mobile with zero hydration penalty. Implements modular theme tokens and an embedded terminal emulator.',
    benchmarks: [
      'Sub-second FCP on web (0.7s)',
      '60 FPS steady frame rendering',
      '< 25KB total client JS overhead',
    ],
    stack: ['React Native', 'Expo Web', 'TypeScript', 'StyleSheet'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://portfolio.example.com',
  },
  {
    id: 'strata-cache',
    title: 'Strata Tiered Key-Value Store',
    category: 'Cloud & Infra',
    status: 'PRODUCTION',
    tagline: 'Sub-millisecond memory-first caching layer with automatic disk tiering and replication.',
    architecture:
      'LSM-tree storage engine with snappy compression and write-ahead logging (WAL). Custom binary protocol reducing serialization overhead by 40%.',
    benchmarks: [
      'p99.9 read latency < 0.8ms',
      '40% serialization memory reduction',
      'Automated multi-AZ snapshot replication',
    ],
    stack: ['Rust', 'LSM-Trees', 'TCP/Sockets', 'Zero-Copy IO'],
    repoUrl: 'https://github.com',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 — PRESENT',
    role: 'Senior Software Engineer',
    company: 'Core Systems Lab',
    scope: 'Led architecture and performance optimization of multi-tenant microservices and developer platform tooling.',
    metrics: [
      'Reduced API p95 response times by 38% across core services through connection pooling and query optimization.',
      'Spearheaded cross-platform client migration to unified React Native architecture, cutting feature delivery cycles in half.',
      'Mentored 6 engineers and standardized internal engineering blueprints and review rubrics.',
    ],
  },
  {
    id: 'exp-2',
    period: '2021 — 2023',
    role: 'Software Engineer',
    company: 'Nexus Cloud Infrastructures',
    scope: 'Developed distributed telemetry ingestion pipelines and client dashboards processing 100M+ daily events.',
    metrics: [
      'Engineered event ingestion workers handling 50k events/sec with automated Kafka partition scaling.',
      'Implemented zero-downtime deployment pipelines with Kubernetes and GitOps.',
      'Reduced cluster infrastructure costs by 22% via spot instance bin-packing.',
    ],
  },
  {
    id: 'exp-3',
    period: '2019 — 2021',
    role: 'Software Development Engineer',
    company: 'Apex Data Systems',
    scope: 'Built RESTful backend microservices, SQL databases, and responsive web client interfaces.',
    metrics: [
      'Designed customer-facing analytics modules utilizing asynchronous job queuing.',
      'Authored automated test suites increasing test coverage from 45% to 88%.',
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Go', 'Rust', 'Python', 'SQL'],
  },
  {
    name: 'Mobile & Frontend',
    skills: ['React Native', 'Expo', 'React Native Web', 'React.js', 'DOM Standards', 'State Machines'],
  },
  {
    name: 'Backend & Systems',
    skills: ['Node.js', 'Go microservices', 'gRPC / Protocol Buffers', 'RESTful APIs', 'Kafka', 'Redis'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['Docker', 'Kubernetes', 'AWS (ECS, S3, RDS)', 'CI/CD Pipelines', 'Linux Systems', 'GitOps'],
  },
  {
    name: 'Databases & Storage',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'LSM-Trees', 'Database Indexing & Tuning'],
  },
];
