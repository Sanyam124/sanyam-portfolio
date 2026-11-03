'use client';

import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Layers, 
  BrainCircuit, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function About() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Software engineer bridging algorithmic depth, full-stack web scalability, and computer vision AI.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Engineering with Purpose & Precision
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a final-year Computer Science & Engineering student specializing in <strong className="text-white">Artificial Intelligence</strong> at Parul University. With a consistent <strong className="text-cyan-400">8.87 CGPA</strong>, I cultivate an engineering approach rooted in strong computer science fundamentals, data structures, and production-minded system architecture.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                My passion lies in taking ambitious software concepts from blank whiteboard to resilient, user-facing production systems. Whether it is engineering atomic database transactions to eliminate race conditions in a campus marketplace (<span className="text-cyan-300 font-medium">ReCircle</span>), or orchestrating 128-dimensional biometric facial embeddings over real-time WebSockets with smartphone edge nodes, I love solving hard engineering puzzles.
              </p>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Beyond development, I have tested my algorithmic stamina by solving <strong className="text-white">1,700+ problems</strong> across LeetCode (1807 rating), CodeChef (1470, 2-Star), and Codeforces. I bring certified enterprise and cloud competencies including <strong className="text-white">ServiceNow CSA, CAD</strong> and <strong className="text-white">AWS</strong>.
              </p>
            </div>

            {/* Core Competencies Quadrant */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">Full-Stack Architect</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Next.js 15, React 19, Node.js, Express, Flask & Tailwind CSS with secure RBAC and REST APIs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">AI & Computer Vision</h4>
                <p className="mt-1 text-xs text-slate-400">
                  dlib facial recognition, OpenCV, real-time WebRTC/Socket.IO streaming, and machine learning models.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">Algorithmic Rigor</h4>
                <p className="mt-1 text-xs text-slate-400">
                  1700+ solved problems, LeetCode 1807 Knight rating, complex dynamic programming, graph algorithms.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-white text-sm">Enterprise & Cloud Certified</h4>
                <p className="mt-1 text-xs text-slate-400">
                  ServiceNow Certified Administrator (CSA) & Developer (CAD), AWS Cloud Essentials, IBM AI.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card & Highlights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Spotlight Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-semibold border border-cyan-500/20">
                  CURRENT EDUCATION
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
              </div>

              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{education.institution}</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {education.location}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-5">
                <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Degree & Major</p>
                <p className="text-sm font-semibold text-white mt-0.5">{education.degree} in {education.branch}</p>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400">Cumulative Grade Point Average</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold text-sm border border-emerald-500/30">
                    {education.cgpa}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Academic Highlights</p>
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact / Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Current Base</p>
                <p className="text-sm font-semibold text-white">Vadodara, Gujarat, India</p>
                <p className="text-[11px] text-cyan-400 mt-0.5">Open to Remote & On-Site Relocation</p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors border border-slate-700/60"
              >
                Get in Touch
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
