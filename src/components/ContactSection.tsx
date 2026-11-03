'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(formData.subject || `Opportunity from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981'],
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Actively looking for full-time Software Engineer, Full-Stack, and AI roles. Let&apos;s build impactful products together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center justify-between group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Email Address</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center justify-between group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Phone / WhatsApp</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center justify-between group hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">LinkedIn Profile</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/sanyam-sharma
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center justify-between group hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">GitHub Profile</p>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                    github.com/Sanyam124
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </a>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>RESPONSE TIME & AVAILABILITY</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Usually responds within a few hours. Open to immediate summer / final-semester internships and full-time placement opportunities starting 2027.
              </p>
            </div>

          </div>

          {/* Right Column: Contact / Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a question, job opening, or exciting project? Fill in the details below to email me directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Software Engineer Opportunity / Campus Hire"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Sanyam, we came across your portfolio and were impressed by your work on ReCircle and your competitive programming record..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
