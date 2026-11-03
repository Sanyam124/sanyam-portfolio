'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal, Sparkles, CornerDownLeft, RotateCcw, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, COMPETITIVE_STATS, CERTIFICATIONS } from '@/data/portfolioData';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            ⚡ Welcome to Sanyam Sharma&apos;s Interactive Shell [v1.0.0]
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> to view available commands or try <span className="text-emerald-400 font-semibold">&apos;hire&apos;</span>.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div><span className="text-cyan-400 font-mono font-bold">about</span> - Background & Education</div>
            <div><span className="text-cyan-400 font-mono font-bold">skills</span> - Technical Stack Summary</div>
            <div><span className="text-cyan-400 font-mono font-bold">projects</span> - Production-Grade Systems</div>
            <div><span className="text-cyan-400 font-mono font-bold">dsa</span> - LeetCode & Coding Ratings</div>
            <div><span className="text-cyan-400 font-mono font-bold">certifications</span> - ServiceNow & AWS Badges</div>
            <div><span className="text-cyan-400 font-mono font-bold">contact</span> - Email, Phone & Social Links</div>
            <div><span className="text-emerald-400 font-mono font-bold">hire</span> - Why hire Sanyam?</div>
            <div><span className="text-slate-400 font-mono font-bold">clear</span> - Clear the terminal screen</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <p><strong className="text-white">Name:</strong> {PERSONAL_INFO.name}</p>
            <p><strong className="text-white">Degree:</strong> {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.branch})</p>
            <p><strong className="text-white">University:</strong> {PERSONAL_INFO.education.institution} • CGPA: <span className="text-cyan-300 font-mono">{PERSONAL_INFO.education.cgpa}</span></p>
            <p><strong className="text-white">Status:</strong> {PERSONAL_INFO.status}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-mono font-semibold">Languages:</span> Java, JavaScript, Python, C++, SQL, HTML5, CSS3</p>
            <p><span className="text-cyan-400 font-mono font-semibold">Frameworks:</span> Next.js 15, React 19, Flask, Django, Node.js, Express, OpenCV, Socket.IO</p>
            <p><span className="text-cyan-400 font-mono font-semibold">Databases:</span> PostgreSQL, MongoDB (ACID Transactions), MySQL, SQLite</p>
            <p><span className="text-cyan-400 font-mono font-semibold">Cloud & Enterprise:</span> AWS, ServiceNow CSA & CAD, Docker, Linux, WebRTC</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-2 text-slate-300">
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/50 pl-2">
                <p className="font-bold text-white">{p.title}</p>
                <p className="text-slate-400">{p.subtitle}</p>
                <p className="text-[11px] text-cyan-300">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'dsa':
      case 'cp':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-amber-400 font-bold">🏆 Competitive Programming Summary (1700+ Solved):</p>
            {COMPETITIVE_STATS.map((s) => (
              <p key={s.platform}>
                • <strong className="text-white">{s.platform}:</strong> {s.rating ? `Rating ${s.rating} | ` : ''}{s.solved} solved ({s.tier})
              </p>
            ))}
          </div>
        );
        break;

      case 'certifications':
      case 'certs':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-purple-400 font-bold">📜 Verified Certifications:</p>
            {CERTIFICATIONS.map((c) => (
              <p key={c.id}>• <strong className="text-white">{c.title}</strong> — {c.issuer}</p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>📱 Phone: <a href="tel:+919424359751" className="text-cyan-400 hover:underline">{PERSONAL_INFO.phone}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.socials.linkedin}</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.socials.github}</a></p>
          </div>
        );
        break;

      case 'hire':
        output = (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-2 text-emerald-200">
            <p className="font-bold text-emerald-300 text-sm">🚀 Why hire Sanyam Sharma?</p>
            <p>• High academic discipline (8.87 CGPA, Parul University CSE-AI).</p>
            <p>• Strong algorithmic problem-solving stamina (1700+ solved, LeetCode 1807).</p>
            <p>• Proven full-stack architectural craft (Next.js 15, atomic transactions, RBAC).</p>
            <p>• Enterprise platform certified (ServiceNow CSA, CAD) & AWS Cloud certified.</p>
            <div className="pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Sanyam%20Sharma`}
                className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                Schedule an Interview Now ➔
              </a>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        output = <p className="text-amber-300 text-xs">Access granted. Welcome, Superuser! You have full permissions.</p>;
        break;

      default:
        output = (
          <p className="text-red-400 text-xs">
            Command not recognized: &apos;{cmd}&apos;. Type <span className="text-cyan-300">&apos;help&apos;</span> to see available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  const handleReset = () => {
    setHistory([
      {
        command: 'welcome',
        output: (
          <div className="text-slate-300 space-y-1">
            <p className="text-cyan-400 font-bold">
              ⚡ Welcome to Sanyam Sharma&apos;s Interactive Shell [v1.0.0]
            </p>
            <p className="text-xs text-slate-400">
              Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> to view available commands or try <span className="text-emerald-400 font-semibold">&apos;hire&apos;</span>.
            </p>
          </div>
        ),
      },
    ]);
  };

  return (
    <section id="terminal" className="py-20 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER CONSOLE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient-cyan">CLI Shell</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Prefer keyboard navigation? Explore my background, stack, and metrics via interactive shell commands.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden font-mono backdrop-blur-xl">
          
          {/* Terminal Window Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-slate-400">sanyam@portfolio: ~ (zsh)</span>
            </div>
            <button
              onClick={handleReset}
              className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
              title="Reset Terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal Content Body */}
          <div className="p-4 sm:p-6 max-h-96 overflow-y-auto space-y-4 text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400">sanyam@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={handleCommand}
            className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-t border-slate-800/80"
          >
            <span className="text-cyan-400 text-xs">sanyam@portfolio:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'skills', 'projects', 'dsa', 'hire'..."
              className="flex-1 bg-transparent text-white text-xs focus:outline-none placeholder-slate-600 font-mono"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3 text-cyan-400" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
