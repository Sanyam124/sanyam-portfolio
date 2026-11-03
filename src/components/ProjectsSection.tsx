'use client';

import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Code2,
  Lock,
  Zap,
  Terminal
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED WORK & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Production-grade systems built with modern full-stack architectures, real-time networking, and applied AI.
          </p>
        </div>

        {/* Project Cards (Stacked Full-Width Deep-Dives) */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="relative rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Meta pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60">
                        {project.role}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Engineering Highlights Bullet points */}
                    <div className="space-y-3 mb-6">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Engineering Highlights & Architectural Wins:
                      </p>
                      {project.highlights.map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 transition-all duration-300"
                      >
                        <span>View Live Deployment</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Architecture Box (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  
                  {/* System Architecture Card */}
                  <div className="rounded-2xl bg-slate-950/90 border border-slate-800/90 p-5 backdrop-blur-xl shadow-inner">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>SYSTEM SPECIFICATION</span>
                      </span>
                      <span>PROJECT 0{idx + 1}</span>
                    </div>

                    {/* Metrics 2x2 */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] font-mono uppercase text-slate-400">{m.label}</span>
                          <p className="text-xs sm:text-sm font-bold font-mono text-white mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Architecture details specific to project */}
                    {project.id === 'recircle' ? (
                      <div className="space-y-2.5 text-xs text-slate-300 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/50">
                        <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                          <Lock className="w-3.5 h-3.5" />
                          <span>P2P Atomic Escrow & OTP Protocol</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          Prevents inventory double-spending via multi-document MongoDB ACID sessions. Physical OTP confirmation triggers transactional item ownership transfer.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2.5 text-xs text-slate-300 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/50">
                        <div className="flex items-center gap-2 text-purple-300 font-semibold">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>Sub-Second Edge Biometric Pipeline</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          dlib ResNet 128-D Euclidean vector matching with reverse SSH tunnels converting commodity mobile cameras into distributed zero-cost attendance nodes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Quick Verification pill */}
                  <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Production Status</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
