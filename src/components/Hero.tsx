import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyber-grid"
    >
      {/* Dynamic ambient multi-layered glow field */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-to-tr from-cyan-500/[0.08] via-sky-500/[0.05] to-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-cyan-400/[0.06] rounded-full blur-[90px] pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto w-full text-center my-auto">
        {/* Primary Big Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white uppercase mb-6 sm:mb-8 select-none"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-sm">
            Gesture
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-sm">
            AI
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative inline-block mb-6 sm:mb-8"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-cyan-200/95 tracking-wide italic mb-4">
            “Translates Signs, Connects Lives”
          </p>
          <div className="h-0.5 sm:h-1 w-32 sm:w-44 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
        </motion.div>

        {/* Mission Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          An Android application that uses computer vision and machine learning to recognize supported hand gestures and convert them into accessible communication.
        </motion.p>
      </div>
    </section>
  );
};


