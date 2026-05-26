import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedButton } from '../ui/AnimatedButton';
import { GlassCard } from '../ui/GlassCard';
import { HERO } from '../../utils/constants';

export function Contact() {
  const [contactForm, setContactForm] = useState({ subject: '', name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitStatus('loading');

    emailjs
      .sendForm('service_72qulsj', 'template_g6moj5k', formRef.current, 'naB-qaiyrXfax3tuT')
      .then(() => {
        setSubmitStatus('success');
        setContactForm({ subject: '', name: '', email: '', message: '' });
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      })
      .catch(() => {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  const socialLinks = [
    { icon: Github, href: HERO.cta.github, label: 'GitHub' },
    { icon: Linkedin, href: HERO.cta.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${HERO.cta.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Let's Connect" subtitle="Have a project in mind? Let's discuss how I can help." accentColor="blue" />

        <div className="space-y-8">
          <GlassCard glowColor="blue" className="p-8 md:p-12">
            <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  required
                  className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none"
                    placeholder="Your name"
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
                  placeholder="Tell me about your project..."
                />
              </div>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <AnimatedButton
                type="submit"
                variant="primary"
                className="w-full justify-center"
                disabled={submitStatus === 'loading'}
              >
                <Send size={20} />
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </AnimatedButton>
            </form>

            {submitStatus === 'success' && (
              <motion.div
                className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                <span className="text-green-300">Message sent successfully!</span>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-300">Failed to send. Please try again.</p>
              </motion.div>
            )}
          </GlassCard>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all text-gray-500 hover:text-blue-400"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
