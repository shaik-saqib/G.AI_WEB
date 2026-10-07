import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Cpu, 
  Hand, 
  BrainCircuit, 
  FileText, 
  Languages, 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronRight
} from 'lucide-react';

interface GestureAISolutionProps {
  // Props
}

interface FlowStage {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  role: string;
  input: string;
  output: string;
  description: string;
  technicalNote: string;
}

export const GestureAISolution: React.FC<GestureAISolutionProps> = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  const flowStages: FlowStage[] = [
    {
      id: 'camera',
      name: 'Camera',
      shortName: 'CAM',
      icon: Camera,
      role: 'Video Capture',
      input: 'Front or rear smartphone camera',
      output: 'Continuous image frames',
      description: 'CameraX captures live camera frames on a standard Android smartphone, eliminating the need for external sensor gloves or wearable hardware.',
      technicalNote: 'CameraX integration on standard Android hardware',
    },
    {
      id: 'mediapipe',
      name: 'MediaPipe',
      shortName: 'MEDIAPIPE',
      icon: Cpu,
      role: 'Hand Detection',
      input: 'Incoming video frames',
      output: 'Detected hand boundary region',
      description: 'MediaPipe detects hand presence and landmarks directly from the camera input in real time.',
      technicalNote: 'Vision pipeline for on-device hand detection',
    },
    {
      id: 'hand-landmarks',
      name: 'Hand Landmarks',
      shortName: 'LANDMARKS',
      icon: Hand,
      role: 'Coordinate Extraction',
      input: 'Detected hand region',
      output: '21 3D spatial coordinates (x, y, z)',
      description: 'Extracts 21 anatomical landmarks per hand. Each landmark provides x, y, and z coordinates, generating 63 numerical features per frame.',
      technicalNote: '21 keypoints × 3 axes = 63 numerical values per frame',
    },
    {
      id: 'ai-model',
      name: 'AI Model',
      shortName: 'AI MODEL',
      icon: BrainCircuit,
      role: 'On-Device Inference',
      input: '63 numerical landmark coordinates',
      output: 'Classification probability distribution',
      description: 'A local TensorFlow Lite model processes the extracted coordinate features directly on the device, ensuring privacy and offline functionality.',
      technicalNote: 'TensorFlow Lite runtime executing locally',
    },
    {
      id: 'gesture-recognition',
      name: 'Gesture Recognition',
      shortName: 'GESTURE',
      icon: FileText,
      role: 'Symbol Classification',
      input: 'Classification probability',
      output: 'Identified gesture class',
      description: 'Identifies the matched gesture from the supported vocabulary using on-device neural network classification.',
      technicalNote: 'Stable gesture recognition with hysteresis verification',
    },
    {
      id: 'translation',
      name: 'Translation',
      shortName: 'TRANSLATE',
      icon: Languages,
      role: 'Language Mapping',
      input: 'Recognized gesture symbol',
      output: 'Translated text phrase',
      description: 'Translates the recognized gesture meaning into supported output languages: English, Hindi, and Telugu for cross-linguistic communication.',
      technicalNote: 'Supported languages: English, Hindi, and Telugu',
    },
    {
      id: 'text-to-speech',
      name: 'Text-to-Speech',
      shortName: 'SPEECH',
      icon: Volume2,
      role: 'Audio Synthesis',
      input: 'Translated text string',
      output: 'Audible speech output',
      description: 'The native Android TextToSpeech engine converts the translated phrase into clear, audible speech played through the device speaker.',
      technicalNote: 'Device speaker vocalization via Android TextToSpeech',
    },
  ];

  // Observe when the user reaches the 7-stage processing section to start the cycle
  useEffect(() => {
    const node = pipelineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Auto-advance through the 7 stages of the animated pipeline only after reaching the section
  useEffect(() => {
    if (!isSectionInView) return;

    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % flowStages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isSectionInView, flowStages.length]);

  const handleSelectStage = (index: number) => {
    setActiveStageIndex(index);
  };

  const currentStage = flowStages[activeStageIndex];

  return (
    <section id="solution" className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Background subtle ambient lighting */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>HOW GESTUREAI WORKS • ARCHITECTURAL FLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            From Hand Movement to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Accessible Communication.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            GestureAI captures hand movement, extracts hand landmarks, classifies supported gestures, and produces translated text and speech directly on an Android smartphone.
          </p>

          {/* Central Concept Pill Flow: Gesture → Text → Speech */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono text-slate-200 shadow-md">
            <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
              <Hand className="w-4 h-4 text-cyan-400" />
              <span>Gesture</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-sky-300 font-semibold flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Text</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>Speech</span>
            </span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 7-STAGE DATA-FLOW PIPELINE:                                              */}
        {/* Camera → MediaPipe → Hand Landmarks → AI Model → Gesture Recognition → Translation → Text-to-Speech */}
        {/* ========================================================================= */}
        <motion.div
          ref={pipelineRef}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="pb-5 mb-7 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
              <span>Core System Pipeline</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              7-Stage End-to-End Processing
            </h3>
          </div>

          {/* 7-Step Sequence Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {flowStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = idx === activeStageIndex;
              const isPassed = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelectStage(idx)}
                  className={`relative p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
                    isActive
                      ? 'border-cyan-500/70 bg-slate-900 shadow-md ring-1 ring-cyan-500/30'
                      : isPassed
                      ? 'border-slate-800 bg-slate-950 hover:border-slate-700 opacity-90'
                      : 'border-slate-800/80 bg-slate-950/60 hover:border-slate-700 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg border transition-all ${
                        isActive
                          ? 'bg-slate-800 border-cyan-500/50 text-cyan-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {stage.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate">
                      {stage.role}
                    </div>
                  </div>

                  {idx < flowStages.length - 1 && (
                    <ChevronRight className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-slate-900 border border-slate-800 p-5 sm:p-6"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">
                      Function: <strong className="text-cyan-300 font-medium">{currentStage.role}</strong>
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-white flex items-center gap-2.5">
                    <span>{currentStage.name}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-mono text-cyan-300 font-normal">
                      {currentStage.role}
                    </span>
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentStage.description}
                  </p>
                </div>

                {/* Technical I/O Box */}
                <div className="w-full lg:w-80 p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono shrink-0">
                  <div className="border-b border-slate-800 pb-1.5">
                    <span className="text-slate-500 block text-[10px] uppercase">Input</span>
                    <span className="text-slate-200 truncate block">{currentStage.input}</span>
                  </div>
                  <div className="border-b border-slate-800 pb-1.5">
                    <span className="text-slate-500 block text-[10px] uppercase">Output</span>
                    <span className="text-cyan-300 font-medium truncate block">{currentStage.output}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Technical Details</span>
                    <span className="text-slate-300 truncate block">{currentStage.technicalNote}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
