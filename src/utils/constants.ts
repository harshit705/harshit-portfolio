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
    description: 'Scalable Data Engineering & Backend Optimization',
    longDescription: 'Enterprise-grade tender aggregation system handling high-volume data with real-time synchronization. Built scalable backend infrastructure using Python, PostgreSQL, and advanced queuing systems.',
    tags: ['Python', 'PostgreSQL', 'React.js', 'REST APIs', 'Cron Jobs', 'Multithreading'],
    metrics: [
      { label: 'Data Pipeline', value: 'Real-time Sync' },
      { label: 'Connection Pool', value: 'Optimized' },
      { label: 'Throughput', value: 'High-Volume' },
    ],
    featured: true,
  },
  {
    id: 'psai',
    title: 'PSAI — Enterprise Conversational AI Platform',
    description: 'Full-stack AI chat system with real-time messaging',
    longDescription: 'Enterprise AI chatbot platform with session management, JWT authentication, and real-time messaging. Optimized APIs improved responsiveness by 30% through caching and async processing.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Real-time'],
    metrics: [
      { label: 'Performance', value: '+30%' },
      { label: 'Responsiveness', value: 'Optimized' },
      { label: 'Sessions', value: 'Managed' },
    ],
    featured: true,
  },
  {
    id: 'podcast',
    title: 'AI-Powered Podcast Editor',
    description: 'Automated media processing with AI intelligence',
    longDescription: 'Intelligent podcast and video editor combining multiple AI models for silence detection, speaker diarization, and automatic editing. Reduced manual editing effort by 65% through async processing and Redis caching.',
    tags: ['React.js', 'TypeScript', 'Flask', 'Whisper', 'Pyannote', 'FFmpeg', 'Redis'],
    metrics: [
      { label: 'Editing Time', value: '-65%' },
      { label: 'AI Models', value: '3+' },
      { label: 'Processing', value: 'Async' },
    ],
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
      'React.js + Node.js full-stack development',
      'REST API design and optimization',
      'Performance tuning for scalable workflows',
      'Startup collaboration and rapid iteration',
      'AI system integration and workflows',
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
    description: 'Full-stack application development in agile environment with production focus.',
    highlights: [
      'Full-stack MERN development',
      'Agile/Scrum methodology',
      'Production feature implementation',
      'PostgreSQL + MongoDB expertise',
      'Reduced page load time by ~25%',
      'Code review and debugging',
    ],
    icon: Briefcase,
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3', 'Responsive Design', 'Component Architecture'],
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'JWT Auth', 'Real-time Systems', 'Database Design', 'API Optimization'],
  },
  {
    category: 'AI / ML',
    icon: Target,
    items: ['OpenAI API', 'Whisper', 'Pyannote', 'Ollama', 'Groq API', 'LLMs', 'Prompt Engineering', 'Speech Processing', 'NLP'],
  },
  {
    category: 'Databases & DevOps',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Docker', 'Vercel', 'Render', 'Git/GitHub', 'CI/CD', 'Cloud Deployment'],
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
    title: 'Hackathon Winner',
    issuer: 'Pratham Software Jaipur Hackathon',
    date: 'June 2025',
    description: 'Built Abhyas AI platform for employee training automation',
  },
  {
    id: 'ambassador',
    title: 'IIT Delhi Campus Ambassador',
    issuer: 'Leadership & Coordination',
    date: 'Dec 2024 - Present',
    description: 'Student Coordinator for Startup Cell managing inter-college events',
  },
];

export const EDUCATION = {
  school: 'Government Engineering College, Bharatpur',
  degree: 'B.Tech in Computer Science',
  cgpa: '8.57/10',
  status: 'Final Year',
};

export const HERO = {
  name: 'Harshit Agrawal',
  title: 'Software Engineer | Full-Stack Developer | AI Systems Builder',
  subtitle: 'Building scalable full-stack and AI-powered applications using React.js, Node.js, Python, PostgreSQL, and LLM technologies.',
  availability: 'Open to SDE-1 / Full-Stack Opportunities',
  cta: {
    resume: '/resume.pdf',
    github: 'https://github.com/harshit705',
    linkedin: 'https://www.linkedin.com/in/harshit-agrawal-215146284/',
    email: 'aharshit042@gmail.com',
  },
};

export const ABOUT = {
  intro: 'Final-year B.Tech CS student crafting scalable full-stack and AI-driven applications that solve real-world problems.',
  description: `I specialize in building production-ready, full-stack applications with a focus on backend optimization, AI integration, and scalable architecture. My expertise spans React.js, Node.js, Python, and modern DevOps practices.

With experience at both startups and established companies, I've developed a strong engineering mindset around performance, reliability, and user experience. I'm passionate about leveraging AI technologies to build intelligent, efficient systems.`,
  highlights: ['Full-Stack Engineering', 'AI Systems', 'Backend Optimization', 'Scalable Architecture', 'REST APIs', 'Production Ready'],
};

export const CAREER_OBJECTIVE =
  'To work as a Full-Stack / AI Engineer in a product-based company where I can build impactful, scalable solutions, continuously master advanced system design concepts, and contribute to high-performance engineering teams driving technological innovation.';

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
