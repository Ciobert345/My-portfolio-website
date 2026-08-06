import { TimelineItem, SkillCategory, GitHubRepo } from '../types';

export const ROBERT_INFO = {
  name: 'Robert Ciobanu',
  title: 'Studente di scienze informatiche e appassionato di ingegneria del software',
  tagline: 'full-stack web platforms, and homelab infrastructure.',
  university: 'Università di Trento',
  degree: 'Diploma di maturità in Informatica e Telecomunicazioni',
  highSchool: 'ITT G. Chilesotti — Thiene (VI)',
  location: 'Trento / Vicenza, Italy',
  email: 'robertciobanu345@gmail.com',
  githubUser: 'ciobert345',
  githubUrl: 'https://github.com/ciobert345',
  linkedinUrl: 'https://www.linkedin.com/in/robert-ciobanu-dev',
  status: 'Cerco un part-time in smart working da poter svolgere parallelamente agli studi universitari.',
  bio: 'Studete di scienze informatiche presso l\'Università di Trento, con un forte interesse per lo sviluppo software full-stack, l\'ingegneria del software e la gestione di infrastrutture IT. Appassionato di tecnologie open-source, automazione e ottimizzazione dei processi di sviluppo.',
  quickFacts: [
    { label: 'Diploma', value: 'Diploma di maturità in Informatica e Telecomunicazioni', sub: 'ITT G. Chilesotti' },
    { label: 'Scuola Superiore', value: 'ITT G. Chilesotti', sub: '85/100' },
    { label: 'Linguaggi Principalmente Utilizzati', value: 'Java, C, C++, Python', sub: 'OOP & Systems' },
    { label: 'Homelab / Server', value: 'Docker', sub: 'Self-hosted Stack' },
    { label: 'Lingue Parlate', value: 'Italian, English, Romanian', sub: 'Trilingue' },
  ],
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'unitn',
    year: '2026 - Present',
    period: 'Da settembre 2026',
    title: 'Scienze informatiche',
    institution: 'Università di Trento',
    location: 'Trento, Italy',
    type: 'education',
    featured: true,
    description: 'Percorso triennale di scienze informatiche con focus su ingegneria del software, sistemi operativi, architettura dei calcolatori e sviluppo web full-stack.',
    keySkills: ['Algorithms & Data Structures', 'C / C++', 'Concurrent Programming', 'Computer Architecture', 'Operating Systems', 'Software Design'],
    achievements: [
    ],
    coursework: [
    ]
  },
  {
    id: 'ITT-G-Chilesotti',
    year: '2021 - 2026',
    period: 'Da settembre 2021 a giugno 2026',
    title: 'Scuola Secondaria di Secondo Grado - Informatica e Telecomunicazioni',
    institution: 'ITT G. Chilesotti',
    location: 'Thiene (VI), Italy',
    type: 'education',
    featured: true,
    description: 'Percorso quinquennale di informatica e telecomunicazioni con focus su programmazione, sistemi operativi, reti e sviluppo web. Esperienza pratica in laboratorio e progetti di alternanza scuola-lavoro.',
    keySkills: ['Troubleshooting', 'Lab Mentoring', 'Networking', 'Technical Workshop Delivery'],
    achievements: [
    ]
  },
  {
    id: 'OpenFiber',
    year: '2025',
    period: 'Due settimane a Giugno 2025',
    title: 'Esperienza di Alternanza Scuola-Lavoro',
    institution: 'OpenFiber Padova',
    location: 'Padova, Italy',
    type: 'pcto',
    featured: true,
    description: 'Periodo di PCTO presso OpenFiber, con focus sul networking, sulla gestione di infrastrutture di rete e sulla configurazione di apparati di rete.',
    keySkills: ['Networking'],
    achievements: [
    ]
  },
  {
    id: 'ETIES srl',
    year: '2025',
    period: 'tre settimane a luglio 2025',
    title: 'Esperienza di Alternanza Scuola-Lavoro',
    institution: 'ETIES srl',
    location: 'Thiene (VI), Italy',
    type: 'pcto',
    featured: true,
    description: 'Periodo di PCTO presso ETIES srl, con focus sulla creazione di applicazioni web e la gestione di progetti software.',
    keySkills: ['Coding', 'Web Development'],
    achievements: [
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'software-eng',
    title: 'Software Engineering',
    shortTitle: 'SE & Languages',
    iconName: 'Code',
    badgeCount: 12,
    accentGradient: 'from-amber-500/20 to-orange-500/10',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    skills: [
      { name: 'Java', level: 'Avanzato', description: 'OOP, Multi-threading, Design Patterns, Spring basics' },
      { name: 'C', level: 'Competente', description: 'Pointers, Memory management' },
      { name: 'C++', level: 'Competente', description: 'RAII, STL containers, Modern C++17/20' },
      { name: 'C#', level: 'Base', description: '.NET ecosystem, Desktop apps, LINQ' },
      { name: 'Python', level: 'Competente', description: 'Scripting, Data processing, Automation' },
      { name: 'Assembly', level: 'Base', description: 'x86-64 and RISC-V assembly registers' },
      { name: 'PHP', level: 'Competente', description: 'Backend web API routes' },
      { name: 'SQL', level: 'Competente', description: 'Schema design, complex joins, subqueries' },
      { name: 'TypeScript', level: 'Base', description: 'Static typing basics, type inference, interfaces' },
      { name: 'JavaScript / TS', level: 'Competente', description: 'Modern ES6+, Async/Await' },
      { name: 'HTML & CSS', level: 'Avanzato', description: 'Semantic markup, responsive layout' },
    ]
  },
  {
    id: 'linux-sysadmin',
    title: 'Linux & Systems Admin',
    shortTitle: 'Linux / SysAdmin',
    iconName: 'Terminal',
    badgeCount: 6,
    accentGradient: 'from-emerald-500/20 to-teal-500/10',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'Bash Scripting', level: 'Competente', description: 'Automation scripts, cron jobs, text parsing' },
      { name: 'Systemd & Services', level: 'Base', description: 'Service units, timers, log management with journalctl' },
      { name: 'Kernel & POSIX', level: 'Base', description: 'Process signals, pipes, IPC, memory mappings' },
      { name: 'Distros (Arch, Debian, Ubuntu)', level: 'Competente', description: 'Package managers, custom configurations' },
      { name: 'SSH & Hardening', level: 'Competente', description: 'Key management, fail2ban, UFW, firewall rules' },
      { name: 'Permissions & ACLs', level: 'Base', description: 'Chmod, chown, sudoers, user/group security' },
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Server Hosting',
    shortTitle: 'Infra & Homelab',
    iconName: 'Server',
    badgeCount: 6,
    accentGradient: 'from-blue-500/20 to-indigo-500/10',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'Docker & Compose', level: 'Base', description: 'Containerization, multi-stage builds, networking' },
      { name: 'Nginx & Reverse Proxies', level: 'Base', description: 'SSL/TLS termination, location blocks, load balancing' },
      { name: 'Homelab Setup', level: 'Avanzato', description: 'Self-hosted media, storage, local DNS (Pi-hole), NAS' },
      { name: 'Cloudflare Zero Trust', level: 'Competente', description: 'Tunnels, DNS routing, WAF protection' },
      { name: 'Database Hosting', level: 'Competente', description: 'Self-hosted Postgres, MySQL' },
    ]
  },
  {
    id: 'database-git',
    title: 'Database & Git / GitHub',
    shortTitle: 'DB & Version Control',
    iconName: 'Database',
    badgeCount: 7,
    accentGradient: 'from-purple-500/20 to-pink-500/10',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    skills: [
      { name: 'MySQL / MariaDB', level: 'Competente', description: 'Query optimization, user privileges' },
      { name: 'Git Workflow', level: 'Competente', description: 'Branching strategies, interactive rebase, cherry-pick' },
      { name: 'GitHub Actions', level: 'Competente', description: 'CI/CD workflows, automated testing & deployment' },
      { name: 'Version Control', level: 'Avanzato', description: 'Conflict resolution, semantic tagging, PR reviews' },
    ]
  },
  {
    id: 'cad-3d',
    title: 'CAD & 3D Printing',
    shortTitle: '3D & Hardware',
    iconName: 'Box',
    badgeCount: 5,
    accentGradient: 'from-rose-500/20 to-orange-500/10',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'Fusion 360', level: 'Competente', description: 'Parametric 3D modeling, assemblies, tolerances' },
      { name: 'AutoCAD', level: 'Competente', description: 'CAD modeling and mechanical design' },
      { name: 'Slicer Configs', level: 'Avanzato', description: 'Layer heights, support generation, infill math' },
      { name: '3D Printing', level: 'Competente', description: 'Printer tuning, bed leveling, extrusion calibration' },
    ]
  },
  {
    id: 'media-editing',
    title: 'Video / Image Editing',
    shortTitle: 'Design & Media',
    iconName: 'Video',
    badgeCount: 5,
    accentGradient: 'from-cyan-500/20 to-blue-500/10',
    gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    skills: [
      { name: 'DaVinci Resolve', level: 'Competente', description: 'Video editing, timeline cutting, color correction' },
      { name: 'Photoshop', level: 'Competente', description: 'Raster graphics, photo editing, texture design' },
      { name: 'Canva & Assets', level: 'Avanzato', description: 'Quick graphics, documentation banners' },
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Engineering',
    shortTitle: 'AI & Automation',
    iconName: 'Cpu',
    badgeCount: 5,
    accentGradient: 'from-violet-500/20 to-purple-500/10',
    gridSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    skills: [
      { name: 'Gemini API Integration', level: 'Competente', description: 'TypeScript SDK, multi-modal prompts, structured outputs' },
      { name: 'Local LLMs (Ollama)', level: 'Avanzato', description: 'Self-hosted Llama/Qwen models, CPU/GPU inference' },
      { name: 'Prompt Engineering', level: 'Avanzato', description: 'System prompts, few-shot conditioning, structured JSON' },
      { name: 'AI Coding Tools', level: 'Avanzato', description: 'Cursor, GitHub Copilot, Antigravity, automated code refactoring' },
      { name: 'Agent Workflows', level: 'Competente', description: 'Tool calling, automated task chaining' },
    ]
  }
];

export const FALLBACK_REPOS: GitHubRepo[] = [
  
];
