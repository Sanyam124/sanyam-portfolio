'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  FileDown, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Database 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200">
                Open to <span className="text-emerald-400 font-semibold">Software Engineering & AI Roles</span> (Graduating 2027)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Hi, I&apos;m <span className="text-gradient">Sanyam Sharma</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
                Full-Stack Engineer & AI Developer
              </span>
            </h1>

            {/* Sub-headline / Summary */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              Final-year B.Tech CSE-AI student at <span className="text-cyan-400 font-medium">Parul University</span> with an <span className="text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">8.87 CGPA</span>. Solved <span className="text-white font-semibold">1700+ algorithmic problems</span> across LeetCode & CodeChef. Architect of production-grade Next.js platforms and real-time computer vision attendance systems.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="/resume.pdf"
                download="Sanyam_Sharma_Resume.pdf"
                onClick={triggerConfetti}
                className="group flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="group flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/70 hover:border-slate-600 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-medium text-xs border border-slate-800 hover:border-slate-700 transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 w-full text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px] mr-1">Verified:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-amber-400" /> LeetCode 1807
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> ServiceNow CSA & CAD
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-blue-400" /> AWS Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> CGPA 8.87
              </span>
            </div>

          </div>

          {/* Right Image / Interactive Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-72 sm:w-80 md:w-96">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-tilt" />

              {/* Main Card Wrapper */}
              <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800/90 p-4 backdrop-blur-2xl shadow-2xl">
                
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800">
                  <Image
                    src="/profile.jpg"
                    alt="Sanyam Sharma - Full-Stack & AI Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                  
                  {/* Floating Micro-Badge Top Right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700/70 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 shadow-lg">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>CSE-AI &apos;27</span>
                  </div>

                  {/* Floating Micro-Badge Bottom Left */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-white">Sanyam Sharma</p>
                        <p className="text-[11px] text-slate-400">Parul University, Vadodara</p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs border border-cyan-500/30">
                        8.87 CGPA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick stats under photo */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <p className="text-base font-bold font-mono text-white">1807</p>
                    <p className="text-[10px] text-slate-400">LeetCode</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <p className="text-base font-bold font-mono text-white">1700+</p>
                    <p className="text-[10px] text-slate-400">DSA Solved</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <p className="text-base font-bold font-mono text-white">6x</p>
                    <p className="text-[10px] text-slate-400">Certifications</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
