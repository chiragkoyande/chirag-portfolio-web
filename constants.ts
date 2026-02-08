import { Project, Certification, ResourceItem, Experience } from './types';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    type: 'BUILDER',
    duration: '2023 - PRESENT',
    description: [
      'Built custom websites and web applications for clients with focus on modern UI/UX',
      'Developed full-stack college projects using React, Node.js, and databases',
      'Created responsive, performant web solutions tailored to client requirements',
      'Collaborated with clients to translate requirements into functional products'
    ],
    tools: ['React', 'Node.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    status: 'ACTIVE'
  },
  {
    id: 'exp2',
    role: 'Cybersecurity Intern',
    company: 'ShadowFox',
    type: 'BREAKER',
    duration: '2024',
    description: [
      'Created detailed vulnerability assessment reports on discovered security flaws',
      'Mastered penetration testing tools including Metasploit Framework',
      'Conducted security audits and identified potential attack vectors',
      'Learned exploitation techniques and defensive countermeasures'
    ],
    tools: ['Metasploit', 'Nmap', 'Burp Suite', 'Wireshark', 'Kali Linux', 'OSINT Tools'],
    status: 'COMPLETED'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/chiragkoyande',
  linkedin: 'https://www.linkedin.com/in/chirag-koyande-b03535259/',
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
      demo: 'https://opportune-ebon.vercel.app'
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
      github: 'https://github.com/chiragkoyande/linksniff-phishing-URL-detection-in-pdf',
      demo: 'https://linksniff-phishing-url-detection-in-pdf.onrender.com/'
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
      github: 'https://github.com/chiragkoyande/SIEM',
    }
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { id: 'c1', title: 'Linux Unhatched', issuer: 'Cisco Networking Academy', date: '2023', level: 'Associate' },
  { id: 'c2', title: 'Ethical Hacking & Pentesting', issuer: 'Udemy (Ocsaly)', date: '2023', level: 'Professional' },
  { id: 'c3', title: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', date: 'In Progress', level: 'Expert' },
];

export const INITIAL_RESOURCES: ResourceItem[] = [];
