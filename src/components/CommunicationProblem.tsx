import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, Smartphone, CheckCircle2, MessageSquare } from 'lucide-react';

export const CommunicationProblem: React.FC = () => {
  const problems = [
    {
      icon: Users,
      title: 'Different Communication Methods',
      subtitle: 'Lack of Shared Language',
      description: 'Different forms of communication can create a barrier when people do not share the same language or communication method. While sign language is an expressive, complete mode of communication, most non-signing individuals cannot interpret signs.',
      impact: 'Routine interactions—such as asking for directions, ordering in stores, or public transit queries—can lead to mutual hesitation.',
      accent: 'bg-slate-950',
      border: 'border-slate-800 hover:border-slate-700',
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      icon: Clock,
      title: 'Interpreter Availability',
      subtitle: 'Practical Limitations',
      description: 'Human sign language interpreters provide essential communication support, but certified interpreters cannot be present for every spontaneous daily conversation. Scheduling and logistical constraints make instant availability difficult.',
      impact: 'Spontaneous or unplanned conversations in everyday settings often occur without interpretation support.',
      accent: 'bg-slate-950',
      border: 'border-slate-800 hover:border-slate-700',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Smartphone,
      title: 'Wearable Hardware Barriers',
      subtitle: 'Impractical Sensor Equipment',
      description: 'Many experimental assistive systems have required wired sensor gloves or bulky external rigs. These devices are costly, delicate, socially conspicuous, and impractical for everyday mobility.',
      impact: 'Highlights the need for accessible, software-driven solutions that work directly on everyday mobile devices.',
      accent: 'bg-slate-950',
      border: 'border-slate-800 hover:border-slate-700',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" 
      />
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
            <span>PROJECT CONTEXT • ACCESSIBLE COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Understanding the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400">
              Everyday Communication Gap.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Different forms of communication can create a barrier when people do not share the same language or communication method. While sign language is a rich and expressive mode of communication, a gap frequently emerges between individuals who sign and the wider non-signing public.
          </p>
        </motion.div>

        {/* 3 Human-Centered Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl ${item.accent} border ${item.border} p-6 sm:p-7 shadow-lg flex flex-col justify-between group transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${item.iconBg} ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-600 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4 tracking-wide uppercase">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">
                    Practical Impact:
                  </div>
                  <p className="text-xs text-slate-300">
                    {item.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why a Technology-Assisted Approach Helps */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-14 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Specialized Hardware Systems
              </span>
              <h4 className="text-xl font-display font-bold text-white mb-3">
                Complex, Costly, and Inconvenient
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span>Requires specialized sensor gloves with flex sensors and wiring</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span>Inconvenient to wear, calibrate, and carry during spontaneous daily activities</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <span>High manufacturing cost limits real-world accessibility</span>
                </li>
              </ul>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                The GestureAI Approach
              </span>
              <h4 className="text-xl font-display font-bold text-white mb-3">
                Camera-Based Mobile Assistance
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Uses the standard front or rear camera of an Android smartphone</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>On-device processing works without needing an active internet connection</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Converts recognized gestures into clear on-screen text and spoken audio</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
