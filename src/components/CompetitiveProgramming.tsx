'use client';

import { 
  Trophy, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Flame, 
  Terminal, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Brain
} from 'lucide-react';
import { COMPETITIVE_STATS } from '@/data/portfolioData';

export default function CompetitiveProgramming() {
  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>ALGORITHMIC EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-gradient-amber">Programming</span> & DSA
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Over <strong className="text-white">1,700+ problems</strong> solved with high-efficiency time & space complexity across global competitive platforms.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {COMPETITIVE_STATS.map((item, idx) => (
            <div
              key={idx}
              className="relative group p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      {item.platform === 'LeetCode' && <Code2 className="w-5 h-5" />}
                      {item.platform === 'CodeChef' && <Flame className="w-5 h-5" />}
                      {item.platform === 'Codeforces' && <Terminal className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.platform}
                      </h3>
                      <p className="text-xs text-slate-400">{item.tier}</p>
                    </div>
                  </div>

                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label={`Visit ${item.platform} Profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Score Showcase */}
                <div className="grid grid-cols-2 gap-3 my-5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {item.rating ? 'Contest Rating' : 'Status'}
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-mono text-amber-400 mt-0.5">
                      {item.rating || 'Active'}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Problems Solved
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-mono text-white mt-0.5">
                      {item.solved}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.highlight}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Verify {item.platform} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Value Proposition Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-950/90 border border-slate-800/90 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Brain className="w-4 h-4" />
                <span>WHAT THIS MEANS FOR PRODUCTION CODE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Algorithmic rigor translates directly to low latency & scalable backends.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Solving 1700+ problems ensures that every database query, cache strategy, data structure, and API contract is engineered with optimal time complexity (O(1), O(log N), O(N)), defensive edge-case coverage, and minimal memory overhead.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sub-millisecond query design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero memory leak architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
