import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Languages, Radio } from 'lucide-react';
import { PREDEFINED_GESTURES } from '../data/gestureData';

export const MultilingualCommunication: React.FC = () => {
  const [selectedGestureId, setSelectedGestureId] = useState('G2');
  const [selectedLang, setSelectedLang] = useState<'en' | 'hi' | 'te'>('hi');

  const languages = [
    { code: 'en' as const, label: 'English', native: 'English', flag: '🇺🇸' },
    { code: 'hi' as const, label: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
    { code: 'te' as const, label: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  ];

  const currentGesture = PREDEFINED_GESTURES.find((g) => g.id === selectedGestureId) || PREDEFINED_GESTURES[0];
  const translatedPhrase = currentGesture.translations[selectedLang] || currentGesture.translations.en;

  const handleSelectLang = (code: 'en' | 'hi' | 'te') => {
    setSelectedLang(code);
  };

  const handleSelectGesture = (id: string) => {
    setSelectedGestureId(id);
  };

  return (
    <section id="multilingual" className="relative py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header with Scroll-Triggered Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>MULTILINGUAL COMMUNICATION OUTPUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Multilingual Communication: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Signs Transcending Barriers.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Sign language translation should not be bound to a single language. GestureAI bridges the gap by converting recognized hand movements into English, Hindi, and Telugu text output.
          </p>
        </motion.div>

        {/* Interactive Translation Matrix Sandbox with Scale & Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Step 1: Select Gesture */}
              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  1. Select Input Gesture:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PREDEFINED_GESTURES.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => handleSelectGesture(g.id)}
                      className={`p-2.5 rounded-lg text-xs font-medium font-mono text-left border transition-all cursor-pointer truncate ${
                        selectedGestureId === g.id
                          ? 'bg-slate-800 border-cyan-500/70 text-cyan-300 ring-1 ring-cyan-500/20'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {g.meaning}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Target Language */}
              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  2. Select Target Language:
                </label>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLang(lang.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer flex items-center gap-1.5 ${
                        selectedLang === lang.code
                          ? 'bg-slate-800 border-blue-400/80 text-blue-200 ring-1 ring-blue-400/20'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.native}</span>
                      <span className="text-[10px] text-slate-500">({lang.label})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dual Channel Philosophy Callout */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="font-bold text-slate-300 font-mono flex items-center gap-2">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span>The Dual-Channel Bridge</span>
                </div>
                <p className="leading-relaxed">
                  The signer receives visual validation subtitles on screen, while the conversational partner receives clear visual text translation in English, Hindi, or Telugu.
                </p>
              </div>
            </div>

            {/* Right: Synthesis Visual Display */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 sm:p-7 relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-2 text-cyan-400">
                    <Radio className="w-3.5 h-3.5" />
                    <span>TRANSLATION ENGINE // ACTIVE</span>
                  </span>
                  <span className="text-slate-500">
                    LOCALE: {selectedLang.toUpperCase()}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">
                    Landmark Classification:
                  </div>
                  <div className="text-sm font-mono text-slate-300">
                    {currentGesture.name} <span className="text-slate-500">({currentGesture.meaning})</span>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    Translated & Normalized Output Target:
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white leading-relaxed">
                    "{translatedPhrase}"
                  </div>
                </div>

                <div className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs font-mono text-cyan-300">
                  Visual text translation displayed in real time
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
