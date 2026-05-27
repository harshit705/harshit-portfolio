import { Code2, Database, Target, Briefcase } from 'lucide-react';
import { Project, Experience, Skill, Certification, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'tenderSathi',
    title: 'TenderSathi — AI-Powered Tender Aggregation Platform',
    description: 'Data Ingestion Engineering & Pipeline Optimization',
    longDescription: 'Enterprise-grade tender aggregation platform handling thousands of raw PDF sources daily. Built resilient async extraction pipelines using Python, custom multithreading, and advanced PostgreSQL indexing to index and query structured metadata in real-time.',
    tags: ['Python', 'PostgreSQL', 'React.js', 'REST APIs', 'Async Tasks', 'Multithreading'],
    metrics: [
      { label: 'Data Throughput', value: '12k+ Daily' },
      { label: 'Ingestion Latency', value: '< 1.8s' },
      { label: 'Query Speed', value: 'Sub-10ms' },
    ],
    github: 'https://github.com/harshit705/TenderSathi',
    link: 'https://github.com/harshit705/TenderSathi',
    problemSolved: 'Aggregating and parsing millions of raw, inconsistent, and nested government tender PDFs scattered across disorganized portal endpoints.',
    impact: 'Engineered a highly resilient concurrent scraper and LLM parser. Reduced document indexing overhead and synchronized data pipelines to run 100% autonomously.',
    featured: true,
  },
  {
    id: 'psai',
    title: 'PSAI — Enterprise Conversational AI Engine',
    description: 'Autonomous Context Assembly & API Optimization',
    longDescription: 'Production-ready chatbot platform equipped with robust JWT session control, real-time socket connections, and reactive message handling. Architected an optimized database pipeline to stream tokens directly into web clients.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Async Tasks'],
    metrics: [
      { label: 'API Response Time', value: '-30% Latency' },
      { label: 'Concurrent Chats', value: '500+ Active' },
      { label: 'Message Sync', value: 'Real-time' },
    ],
    github: 'https://github.com/harshit705/PSAI',
    link: 'https://github.com/harshit705/PSAI',
    problemSolved: 'Severe performance degradation in conversational LLM apps caused by slow synchronous context assembly and un-optimized database read/writes.',
    impact: 'Optimized internal endpoints by implementing query connection pooling, Redis context caching, and non-blocking asynchronous streaming, reducing overall latency by 30%.',
    featured: true,
  },
  {
    id: 'podcast',
    title: 'AI-Powered Autonomous Podcast Editor',
    description: 'Audio Diarization Pipelines & Worker Queues',
    longDescription: 'Intelligent media editor combining automatic speech recognition, audio segment isolation, and speaker separation. Designed an asynchronous task queue to orchestrate machine learning models.',
    tags: ['React.js', 'TypeScript', 'Flask', 'Whisper API', 'Pyannote', 'FFmpeg', 'Redis Queue'],
    metrics: [
      { label: 'Manual Editing', value: '-65% Time' },
      { label: 'ML Models Used', value: '3 Pipeline' },
      { label: 'Diarization accuracy', value: '98.6%' },
    ],
    github: 'https://github.com/harshit705/ai-podcast-editor',
    link: 'https://github.com/harshit705/ai-podcast-editor',
    problemSolved: 'Repetitive, high-overhead labor in audio isolation, silencing pauses, aligning transcripts, and identifying speakers during podcast editing.',
    impact: 'Created a modular Flask + Redis background processing pipeline. Handled Whisper and Pyannote audio processing concurrently, cutting manual engineering effort by 65%.',
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'tarqa',
    role: 'Software Engineer',
    company: 'TarqaAI Solutions',
    location: 'Remote',
    startDate: 'Mar 2026',
    endDate: 'Present',
    description: 'Building AI-driven internal tools and scalable systems for productivity optimization.',
    highlights: [
      'React.js + Node.js full-stack systems engineering',
      'High-performance REST API design and endpoint tuning',
      'Optimizing async workflows and prompt pipelines',
      'Startup collaboration, rapid prototyping, and production deployment',
    ],
    icon: Briefcase,
  },
  {
    id: 'pratham',
    role: 'Software Engineer Intern',
    company: 'Pratham Software Pvt. Ltd.',
    location: 'Jaipur',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description: 'Agile development of high-performance full-stack applications with production focus.',
    highlights: [
      'Engineered MERN full-stack features inside agile scrums',
      'Designed PostgreSQL + MongoDB schema configurations for large datasets',
      'Optimized page loads by ~25% through lazy component chunking',
      'Collaborated on code reviews, testing suites, and structural debugging',
    ],
    icon: Briefcase,
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'AI / Intelligent Workflows',
    icon: Target,
    items: ['LLM Orchestration', 'Diarization (Pyannote)', 'Speech Processing (Whisper)', 'Ollama / Local LLMs', 'Prompt Engineering', 'Async Task Queues', 'Vector Database Pipelines'],
  },
  {
    category: 'Backend & Systems Architecture',
    icon: Database,
    items: ['Node.js', 'Express.js', 'Python (Flask / FastAPI)', 'RESTful APIs', 'Asynchronous Workflows', 'Database Design', 'Connection Pooling', 'Auth (JWT / OAuth)'],
  },
  {
    category: 'Frontend & UI Engineering',
    icon: Code2,
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SaaS Component Design', 'Responsive UI Layouts', 'State Management'],
  },
  {
    category: 'Databases & Infrastructure',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis In-Memory Cache', 'Docker Containership', 'Vercel / Render', 'CI/CD Pipelines', 'Git versioning', 'API Monitoring'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'oci',
    title: 'Oracle Cloud Infrastructure Certified',
    issuer: 'Oracle Cloud',
    date: 'Sept 2025',
    description: 'AI Foundations Associate certification in cloud infrastructure and AI systems',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Runner-Up',
    issuer: 'Pratham Software Jaipur Hackathon',
    date: 'June 2025',
    description: 'Built Abhyas AI platform for employee training automation',
  },
  {
    id: 'ambassador',
    title: 'IIT Delhi Campus Ambassador',
    issuer: 'Leadership & Coordination',
    date: 'Dec 2025 - Feb 2026',
    description: 'Student Coordinator for Startup Cell managing inter-college events',
  },
];

export const EDUCATION = {
  school: 'Government Engineering College, Bharatpur',
  degree: 'B.Tech in Computer Science',
  cgpa: '8.57/10',
  status: 'Completed',
};

export const HERO = {
  name: 'Harshit Agrawal',
  title: 'AI Systems Engineer | Full-Stack Product Builder',
  subtitle: 'Engineering high-throughput data pipelines, autonomous ML automation systems, and scalable full-stack applications.',
  availability: 'Open to SDE-1 / AI & Full-Stack Opportunities',
  cta: {
    resume: '/resume.pdf',
    github: 'https://github.com/harshit705',
    linkedin: 'https://www.linkedin.com/in/harshit-agrawal-215146284/',
    email: 'aharshit042@gmail.com',
  },
};

export const ABOUT = {
  intro: 'B.Tech CS Graduate engineering scalable software pipelines, autonomous AI workflows, and robust backend systems.',
  description: `I specialize in building production-ready, full-stack architectures with a focus on database tuning, concurrent operations, and LLM integrations. I approach engineering with a systems-level mindset, designing data pipelines that are self-healing, performant under load, and highly secure.

From implementing async queues in media tools to tuning connection pooling for high-volume scrapers, I thrive at the junction of backend infrastructure and artificial intelligence. I build products that are scalable, modular, and optimized for real-world reliability.`,
  highlights: ['AI Pipeline Architecture', 'High-Throughput Ingestion', 'Backend Systems Design', 'Database Performance Tuning', 'Asynchronous Operations', 'Full-Stack SaaS Execution'],
};

export const CAREER_OBJECTIVE =
  'To work as an AI Systems Engineer or Full-Stack Developer in an innovative, product-driven company. I aim to design high-performance architectures, continuously master systems engineering principles, and build reliable tools that solve real operational bottlenecks.';

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    url: 'https://github.com/harshit705',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harshit-agrawal-215146284/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:aharshit042@gmail.com',
    icon: 'mail',
  },
];
