import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Languages, 
  Bot, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

interface FutureEnhancementItem {
  id: string;
  title: string;
  focus: string;
  summary: string;
  description: string;
  statusNote: string;
  icon: React.ElementType;
}

export const FutureEnhancements: React.FC = () => {
  const futureItems: FutureEnhancementItem[] = [
    {
      id: 'expanded-sign-languages',
      title: 'Expanded Sign-Language Support',
      focus: 'Linguistic Coverage',
      summary: 'Explore recognition and communication support for additional sign-language systems.',
      description: 'Explore dataset collection and model adaptation for additional regional and international sign-language systems, broadening accessibility beyond the initial gesture baseline.',
      statusNote: 'Future enhancement — current translation outputs support English, Hindi, and Telugu.',
      icon: Languages,
    },
    {
      id: 'ai-assistant-integration',
      title: 'AI Assistant Integration',
      focus: 'Conversational Assistance',
      summary: 'Investigate conversational AI assistance as a future capability.',
      description: 'Investigate conversational AI assistance to provide contextual discourse support, sentence phrasing assistance, and intelligent dialogue completion from detected sign sequences.',
      statusNote: 'Future enhancement — no AI assistant is built into the current Android application.',
      icon: Bot,
    },
  ];

  return (
    <section id="future-enhancements" className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>PROJECT OUTLOOK & FUTURE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Future Enhancements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Realistic technical directions and potential expansions identified for the next stages of research and development in sign-language accessibility.
          </p>
        </motion.div>

        {/* Project Status Distinction Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-7"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Current Implementation Column */}
            <div className="space-y-3 lg:pr-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Currently Implemented in GestureAI
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Real-time single-hand landmark detection (21 coordinates via MediaPipe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Static hand gesture recognition and spatial landmark classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Motion gesture sequence recognition powered by an on-device LSTM model</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Spoken voice synthesis via Android Text-to-Speech (TTS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multilingual translation across English, Hindi, and Telugu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Local history persistence on-device via Room / SQLite</span>
                </li>
              </ul>
            </div>

            {/* Future Scope Column */}
            <div className="pt-6 lg:pt-0 space-y-3 lg:pl-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                  Future Enhancements Scope
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                The items detailed below represent planned future improvements and research directions. None of these concepts are active or included in the current application APK.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono space-y-1">
                <span className="text-slate-200 font-medium block">
                  Status Clarification:
                </span>
                <span>
                  All cards below describe prospective features undergoing future investigation, not deployed capabilities.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Enhancements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {futureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-md"
              >
                <div>
                  {/* Top Status Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/50 text-purple-300 text-[10px] font-mono tracking-wide uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Future Enhancement</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {item.focus}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Summary / Core Quote */}
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 mb-4">
                    <p className="text-xs font-mono text-cyan-300">
                      &ldquo;{item.summary}&rdquo;
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Note */}
                <div className="pt-4 border-t border-slate-900">
                  <div className="flex items-start gap-2 text-xs font-mono text-slate-400">
                    <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">
                      {item.statusNote}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

