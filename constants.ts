import { Project, TerminalLog, Certification, ResourceItem } from './types';

export const INITIAL_LOGS: TerminalLog[] = [
  { id: 'init-1', type: 'system', content: 'INITIALIZING NEURAL HANDSHAKE...', timestamp: Date.now() },
  { id: 'init-2', type: 'system', content: 'LOADING PROFILE: CHIRAG_KOYANDE [BUILDER + BREAKER]', timestamp: Date.now() + 100 },
  { id: 'init-3', type: 'output', content: 'System stable. Security protocols active. Waiting for input...', timestamp: Date.now() + 200 },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/chiragkoyande',
  linkedin: 'https://www.linkedin.com/in/chiragkoyande',
  email: 'chiragk.dev@gmail.com'
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Opportune',
    image: '/images/projects/opportune.png',
    description: 'Real-time aggregator for hackathons and internships (100+ daily). Reduced data fetch latency by ~40% using Supabase Edge Functions for distributed execution.',
    tech: ['React', 'Vite', 'Supabase Edge', 'Firecrawl'],
    securityLevel: 'HIGH',
    status: 'SECURE',
    links: {
      github: 'https://github.com/chiragkoyande/Opportune',
      demo: '#'
    }
  },
  {
    id: 'p2',
    title: 'LinkSniff',
    image: '/images/projects/linksniff.png',
    description: 'Forensic security tool analyzing PDFs to detect embedded phishing links using heuristic risk scoring. Sub-2 second analysis per document.',
    tech: ['Python', 'Flask', 'Heuristics', 'PDF Analysis'],
    securityLevel: 'CRITICAL',
    status: 'ANALYZING',
    links: {
      github: 'https://github.com/chiragkoyande/LinkSniff',
      demo: '#'
    }
  },
  {
    id: 'p3',
    title: 'SentinelWatch',
    image: '/images/projects/sentinelwatch.png',
    description: 'Custom-built SIEM system simulating SOC workflows. Detects brute-force attacks and manages incident lifecycles with severity classification.',
    tech: ['Python', 'FastAPI', 'Log Analysis', 'SIEM Logic'],
    securityLevel: 'MODERATE',
    status: 'SECURE',
    links: {
      github: 'https://github.com/chiragkoyande/SentinelWatch'
    }
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { id: 'c1', title: 'Linux Unhatched', issuer: 'Cisco Networking Academy', date: '2023', level: 'Associate' },
  { id: 'c2', title: 'Ethical Hacking & Pentesting', issuer: 'Udemy (Ocsaly)', date: '2023', level: 'Professional' },
  { id: 'c3', title: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', date: 'In Progress', level: 'Expert' },
];

export const INITIAL_RESOURCES: ResourceItem[] = [
  {
    id: 'r1',
    title: 'OWASP Top 10 - 2021',
    type: 'ARTICLE',
    url: 'https://owasp.org/Top10/',
    description: 'Standard awareness document for developers and web application security.',
    dateAdded: Date.now()
  },
  {
    id: 'r2',
    title: 'React Security Best Practices',
    type: 'VIDEO',
    url: 'https://www.youtube.com/watch?v=IbS7ZCOq2g4', // Example link
    description: 'Protecting XSS and dependencies in modern frontend stacks.',
    dateAdded: Date.now()
  }
];