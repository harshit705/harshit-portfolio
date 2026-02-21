import { Code2, Database, Briefcase, Award, Target, Mail, Github, Linkedin, ExternalLink, Download, Send, CheckCircle } from 'lucide-react';
import { useState, useEffect, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import CyberParallaxBackground from './CyberParallaxBackground';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ title: '', name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    // Set the time field with current timestamp
    const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }
    
    setFormSubmitting(true);
    setSubmitStatus('');
    
    emailjs
      .sendForm(
        'service_72qulsj',        // Service ID
        'template_g6moj5k',       // Template ID
        formRef.current,
        'naB-qaiyrXfax3tuT'       // Public Key
      )
      .then(() => {
        setSubmitStatus('success');
        setContactForm({ title: '', name: '', email: '', message: '' });
        formRef.current?.reset();
        setFormSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 3000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setSubmitStatus('error');
        setFormSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 5000);
      });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a1833] text-gray-100 relative">
      <CyberParallaxBackground />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-blue-700/60 bg-[#101a2b]/80 backdrop-blur-xl' : 'bg-[#101a2b]/60 backdrop-blur-md'}`}>
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#about" className="text-2xl font-bold cyber-glow-text">
            HA
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                  activeSection === item.id
                    ? 'text-blue-400 border-blue-400 cyber-glow-text'
                    : 'text-gray-400 border-transparent hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="/resume.pdf" 
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 cyber-glow"
          >
            <Download size={16} />
            Resume
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="space-y-8 flex-1 max-w-2xl">
            <div className="inline-block px-4 py-2 border border-blue-500/40 rounded-full text-blue-300 text-sm font-medium cyber-glow bg-[#0a1833]/60">
              ✨ Full-Stack & AI Engineer
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight cyber-glow-text">
                Harshit <span className="block text-blue-400">Agrawal</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-8">
                Final-year B.Tech CS student crafting <span className="text-blue-300 font-semibold">scalable full-stack</span> and <span className="text-cyan-300 font-semibold">AI-driven applications</span> that solve real-world problems.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-glow">
                <Mail size={20} />
                Get in Touch
              </button>
              <a 
                href="https://github.com/harshit705" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800/60 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-glow"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-agrawal-215146284/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800/60 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-glow"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center w-full md:w-auto">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl opacity-70"></div>
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 shadow-2xl shadow-blue-500/40"></div>
              <img
                src="/Profile%20Image.png"
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400/60 shadow-xl shadow-blue-500/40 bg-[#101a2b]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="bg-gradient-to-b from-transparent via-blue-950/10 to-transparent py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Code2 className="text-blue-400" size={36} />
                <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Technical Skills</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Frontend', 
                  icon: Code2,
                  skills: 'React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI Design, Component Architecture'
                },
                { 
                  title: 'Backend', 
                  icon: Database,
                  skills: 'Node.js, Express.js, Python (Flask), REST APIs, Authentication (JWT), Real-time Systems, File Handling, Database Design'
                },
                { 
                  title: 'AI / ML & NLP', 
                  icon: Target,
                  skills: 'Whisper Transcription, Speaker Diarization (Pyannote), LLMs, Prompt Engineering, OpenAI API, Ollama, Groq API, Generative AI'
                },
                { 
                  title: 'Databases & DevOps', 
                  icon: Database,
                  skills: 'MongoDB, SQL, PostgreSQL, Firebase, Git, GitHub, Docker, Vercel, Render, Cloud Deployment, CI/CD'
                }
              ].map((skill, idx) => (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-colors duration-300">
                      <skill.icon className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-blue-300 group-hover:text-cyan-300 transition-colors">{skill.title}</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{skill.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Database className="text-cyan-400" size={36} />
                <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Featured Projects</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Abhyas – AI-Powered Training Automation Platform',
                  description: 'Developed during a hackathon organized by Pratham Software, this AI-driven platform automates employee performance tracking and training management workflows. Enhanced process efficiency by over 60% through intelligent form handling, personalized learning suggestions, and automated approval systems.',
                  tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Automation'],
                  link: '#'
                },
                {
                  title: 'PSAI – Intelligent Conversational AI Platform',
                  description: 'Developed a full-stack AI chatbot using React.js and PSAI API with real-time chat, secure file uploads, and session-based conversations. Implemented JWT authentication and optimized API workflows, improving UI performance by 30% and message processing by 25%.',
                  tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'REST APIs'],
                  link: '#'
                },
                {
                  title: 'AutoPod-Style AI Podcast Editor',
                  description: 'Built an AI-powered podcast and video editor that performs silence removal, speaker detection, automatic camera switching, subtitle generation, and video merging. Reduced manual editing effort by 70%.',
                  tags: ['React', 'Flask', 'Whisper', 'Pyannote', 'FFmpeg'],
                  link: '#'
                }
              ].map((project, idx) => (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 p-8 md:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors mb-3">{project.title}</h4>
                      <p className="text-gray-400 leading-relaxed mb-5 group-hover:text-gray-300 transition-colors text-lg">
                        {project.description}
                      </p>
                    </div>
                    <a 
                      href={project.link}
                      className="ml-4 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 rounded-lg transition-all duration-300 flex-shrink-0"
                    >
                      <ExternalLink size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-gradient-to-b from-transparent via-blue-950/10 to-transparent py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Award className="text-blue-400" size={36} />
                <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Experience & Achievements</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: Briefcase,
                  title: 'Software Engineer Intern',
                  company: 'Pratham Software Pvt. Ltd., Jaipur',
                  year: 'May 2025 – Aug 2025',
                  description: 'Collaborated in agile development team to design and optimize scalable backend systems. Improved development efficiency by 20%+ through debugging, code reviews, and deployment workflows.'
                },
                { 
                  icon: Briefcase,
                  title: 'Web Developer Intern',
                  company: 'Media Tech Temple Pvt. Ltd., Bharatpur',
                  year: 'Jul 2024 – Aug 2024',
                  description: 'Developed and maintained responsive UI components using HTML, CSS, JavaScript, and React.js. Ensured cross-browser compatibility and achieved 90%+ responsiveness across devices.'
                },
                { 
                  icon: Award,
                  title: 'Oracle Cloud Infrastructure Certified',
                  company: 'AI Foundations Associate',
                  year: 'Sept 2025',
                  description: 'Advanced certification in cloud infrastructure and AI foundations'
                },
                { 
                  icon: Award,
                  title: 'IIT Delhi Campus Ambassador',
                  company: 'Leadership & Coordination',
                  year: '2024-Present',
                  description: 'Student Coordinator for Startup Cell and Sports Department managing inter-college events and student initiatives.'
                }
              ].map((exp, idx) => (
                <div 
                  key={idx}
                  className="group flex items-start gap-5 bg-gradient-to-br from-gray-800/50 to-gray-900/40 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-lg flex-shrink-0 group-hover:from-blue-500/50 group-hover:to-cyan-500/40 transition-colors duration-300">
                    <exp.icon className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-white group-hover:text-blue-200 transition-colors">{exp.title}</h4>
                    <p className="text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">{exp.company}</p>
                    <p className="text-sm text-blue-400/70 font-medium mb-2">{exp.year}</p>
                    {exp.description && <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{exp.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-cyan-400" size={36} />
                <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Certifications & Achievements</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hackathon Winner',
                  description: 'Pratham Software Jaipur Hackathon',
                  date: 'June 2025',
                  achievement: 'Built Abhyas AI platform'
                },
                {
                  title: 'Oracle Cloud Certified',
                  description: 'AI Foundations Associate',
                  date: 'Sept 2025',
                  achievement: 'Advanced cloud & AI certification'
                },
                {
                  title: 'Campus Ambassador',
                  description: 'IIT Delhi Program',
                  date: 'Dec 2025',
                  achievement: 'Leadership & coordination role'
                }
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-cyan-900/30 via-gray-800/30 to-gray-900/40 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">{cert.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{cert.description}</p>
                    </div>
                  </div>
                  <p className="text-cyan-400/70 text-sm font-medium">{cert.date}</p>
                  <p className="text-gray-400 text-sm mt-3 group-hover:text-gray-300 transition-colors">{cert.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Objective */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-900/40 via-cyan-900/20 to-blue-900/20 p-12 md:p-16 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl flex-shrink-0 hidden md:block">
                  <Target className="text-blue-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Career Objective</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To work as a <span className="font-semibold text-blue-300">Full-Stack / AI Engineer</span> in a product-based company where I can build <span className="font-semibold text-cyan-300">impactful, scalable solutions</span>, continuously master advanced system design concepts, and contribute to high-performance engineering teams driving technological innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-8 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg">Have a project in mind? Let's discuss how I can help.</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 p-10 md:p-12 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Subject</label>
                  <input
                    type="text"
                    name="title"
                    value={contactForm.title}
                    onChange={(e) => setContactForm({ ...contactForm, title: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-gray-600 disabled:to-gray-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Send size={20} />
                  {formSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                  <span className="text-red-300">Failed to send message. Please try again later.</span>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="mt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
              <a 
                href="https://github.com/harshit705" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 p-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all duration-300"
              >
                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-agrawal-215146284/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 p-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
              >
                <Linkedin size={20} className="group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">LinkedIn</span>
              </a>
              <a 
                href="mailto:aharshit042@gmail.com" 
                className="group col-span-2 md:col-span-1 flex items-center justify-center gap-2 p-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 rounded-lg transition-all duration-300"
              >
                <Mail size={20} className="group-hover:text-purple-400 transition-colors" />
                <span className="text-sm font-medium group-hover:text-purple-400 transition-colors">Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}

export default App;
