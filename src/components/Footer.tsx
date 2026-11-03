'use client';

import { ArrowUp, Github, Linkedin, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                SS
              </div>
              <span className="font-mono text-base font-bold text-white">
                Sanyam Sharma
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Full-Stack Engineer & AI Developer • Parul University &apos;27
            </p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <span>•</span>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <span>•</span>
            <a href="#stats" className="hover:text-cyan-400 transition-colors">DSA</a>
            <span>•</span>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certs</a>
            <span>•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Subtext */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Sanyam Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 14, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
