'use client';

import { Award, Code2, GraduationCap, Layers, Trophy, CheckCircle2 } from 'lucide-react';

const STATS = [
  {
    icon: GraduationCap,
    value: '8.87',
    label: 'B.Tech CGPA',
    subtext: 'Parul University (CSE-AI)',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgGlow: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: Trophy,
    value: '1807',
    label: 'LeetCode Rating',
    subtext: '500+ Solved • Knight Tier',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgGlow: 'from-amber-500/10 to-transparent',
  },
  {
    icon: Code2,
    value: '1,700+',
    label: 'Problems Conquered',
    subtext: 'LeetCode + CodeChef + CF',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgGlow: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Award,
    value: '6',
    label: 'Verified Credentials',
    subtext: 'ServiceNow CSA/CAD, AWS, IBM',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    bgGlow: 'from-purple-500/10 to-transparent',
  },
];

export default function StatsBar() {
  return (
    <section id="stats" className="py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`relative group p-5 sm:p-6 rounded-2xl bg-slate-900/60 border ${stat.borderColor} backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/90 hover:shadow-xl`}
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute -inset-full bg-gradient-to-br ${stat.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {stat.subtext}
                    </p>
                  </div>
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
