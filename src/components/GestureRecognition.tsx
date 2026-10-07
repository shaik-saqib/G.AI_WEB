import React from 'react';
import { motion } from 'motion/react';
import { 
  Scan, 
  Activity, 
  Cpu, 
  Layers, 
  Clock, 
  Workflow,
  Sparkles
} from 'lucide-react';

export const GestureRecognition: React.FC = () => {
  return (
    <section id="gesture-recognition" className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Scan className="w-3.5 h-3.5" />
            <span>AI RECOGNITION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Static & Motion <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Gesture Recognition
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Human hand communication naturally combines motionless hand shapes with continuous kinematic movements. GestureAI deploys two specialized on-device machine learning paradigms, each optimized for its specific structural and temporal characteristics.
          </p>
        </motion.div>

        {/* Core Dual-Pillar Comparison: Static vs. Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* ========================================================================= */}
          {/* 1. STATIC GESTURE RECOGNITION                                             */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-slate-950 border border-slate-800/90 p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Scan className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                      Single-Frame Spatial Analysis
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Static Gesture Recognition
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-400">
                  TFLite
                </span>
              </div>

              {/* What It's About */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>What It Is</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Static gesture recognition targets stationary hand postures where semantic meaning is communicated by instantaneous finger positioning, knuckle articulation, and relative joint geometry at a single moment in time.
                </p>
              </div>

              {/* How It Works */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>How It Works</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono font-bold">•</span>
                    <span><strong>Landmark Coordinate Extraction:</strong> MediaPipe processes an individual video frame to extract 21 3D spatial keypoints (x, y, z normalized coordinates), yielding 63 numerical features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono font-bold">•</span>
                    <span><strong>Geometric Normalization:</strong> Landmark arrays are centered relative to the wrist origin and scaled to make classification invariant to hand size, distance, or camera perspective.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono font-bold">•</span>
                    <span><strong>On-Device Feedforward Classifier:</strong> A compact TensorFlow Lite neural classifier evaluates the 63 features in sub-millisecond inference time without network queries.</span>
                  </li>
                </ul>
              </div>

              {/* How It's Used */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>How It Is Used</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Deployed for instantaneous sign commands, conversational intent markers, quick status requests, and stationary sign symbols. It provides low-power, zero-latency feedback with built-in temporal hysteresis to eliminate accidental false triggers between transitions.
                </p>
              </div>
            </div>

            {/* Architecture Metrics Footer */}
            <div className="pt-4 border-t border-slate-900 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Temporal Scope</span>
                <span className="text-slate-200 font-semibold">1 Frame</span>
              </div>
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Features</span>
                <span className="text-cyan-300 font-semibold">63 Numerical</span>
              </div>
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Latency</span>
                <span className="text-emerald-400 font-semibold">&lt; 15 ms</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. MOTION GESTURE RECOGNITION                                             */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl bg-slate-950 border border-slate-800/90 p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase block">
                      Continuous Temporal Sequence
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Motion Gesture Recognition
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-400">
                  LSTM RNN
                </span>
              </div>

              {/* What It's About */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>What It Is</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Motion gesture recognition interprets dynamic trajectories where the communicative message is encoded not by hand shape alone, but by kinematic paths, acceleration, directional sweeps, and transitions across time.
                </p>
              </div>

              {/* How It Works */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-blue-400" />
                  <span>How It Works</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono font-bold">•</span>
                    <span><strong>Sliding Sequence Buffer:</strong> An in-memory queue maintains coordinate vectors across a continuous 30-frame temporal window (approximately 1.0 second of video at 30 FPS).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono font-bold">•</span>
                    <span><strong>Recurrent State Encoding:</strong> Long Short-Term Memory (LSTM) recurrent neural units retain past kinematic context while processing subsequent landmark frames.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono font-bold">•</span>
                    <span><strong>Trajectory & Velocity Discrimination:</strong> Evaluates hand movement curves, velocity changes, and spatial arcs to accurately distinguish directional phrases.</span>
                  </li>
                </ul>
              </div>

              {/* How It's Used */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>How It Is Used</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Applied for kinetic phrases, waving greetings, directional affirmations or negations, and continuous sign patterns that require physical displacement through the air to establish clear meaning.
                </p>
              </div>
            </div>

            {/* Architecture Metrics Footer */}
            <div className="pt-4 border-t border-slate-900 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Temporal Scope</span>
                <span className="text-slate-200 font-semibold">30 Frames</span>
              </div>
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Buffer Size</span>
                <span className="text-blue-300 font-semibold">30 × 63 Matrix</span>
              </div>
              <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Architecture</span>
                <span className="text-indigo-400 font-semibold">LSTM Units</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
