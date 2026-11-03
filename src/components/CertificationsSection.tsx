'use client';

import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Cloud, 
  BrainCircuit, 
  Code2, 
  Binary 
} from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Externally validated competencies across enterprise platforms, cloud architecture, AI, and advanced algorithms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="relative group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Header with Issuer Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {cert.issuer}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-purple-400">
                    {cert.category === 'Enterprise Platform' && <ShieldCheck className="w-4 h-4" />}
                    {cert.category === 'Cloud' && <Cloud className="w-4 h-4" />}
                    {cert.category === 'AI / ML' && <BrainCircuit className="w-4 h-4" />}
                    {cert.category === 'Data Structures' && <Binary className="w-4 h-4" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  Issued by {cert.issuer} • Verified Credential
                </p>

                {/* Skills tags */}
                <div className="space-y-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Credential Link */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-950/80 hover:bg-purple-950/40 text-xs font-semibold text-purple-300 hover:text-white border border-slate-800 hover:border-purple-500/30 transition-all duration-200"
                >
                  <span>Verify on {cert.issuer === 'Smart Interviews' ? 'SmartInterviews' : 'Credly'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
