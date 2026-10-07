import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Scan, 
  Eye, 
  BrainCircuit, 
  Cpu, 
  Activity, 
  Volume2, 
  Database
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  description: string;
  role: string;
  icon: React.ElementType;
}

interface TechCategory {
  title: string;
  description: string;
  technologies: TechItem[];
}

export const TechnologyStack: React.FC = () => {
  const categories: TechCategory[] = [
    {
      title: "Android Development",
      description: "Native mobile application architecture and user interface framework.",
      technologies: [
        {
          name: "Kotlin",
          category: "Language",
          description: "Used as the primary programming language for the Android application.",
          role: "Application Core & Logic",
          icon: Smartphone
        },
        {
          name: "Jetpack Compose",
          category: "UI Toolkit",
          description: "Used to build the Android application's user interface.",
          role: "Declarative UI & Navigation",
          icon: Layers
        }
      ]
    },
    {
      title: "Computer Vision",
      description: "Optical input processing and real-time hand landmark extraction.",
      technologies: [
        {
          name: "MediaPipe",
          category: "Landmarks",
          description: "Used for hand landmark detection from camera input.",
          role: "21 Hand Landmarks Tracking",
          icon: Scan
        },
        {
          name: "OpenCV",
          category: "Vision Processing",
          description: "Used as part of the computer-vision workflow where applicable.",
          role: "Frame Processing Operations",
          icon: Eye
        }
      ]
    },
    {
      title: "Machine Learning",
      description: "Model development, on-device execution, and temporal sequence modeling.",
      technologies: [
        {
          name: "TensorFlow",
          category: "Model Development",
          description: "Used for machine-learning model development/training.",
          role: "Model Training & Architecture",
          icon: BrainCircuit
        },
        {
          name: "TensorFlow Lite",
          category: "On-Device ML",
          description: "Used to run the trained gesture-recognition model on Android.",
          role: "On-Device Inference Runtime",
          icon: Cpu
        },
        {
          name: "LSTM",
          category: "Sequence Model",
          description: "Used for motion gesture recognition based on sequences of frames.",
          role: "30-Frame Sequence Recognition",
          icon: Activity
        }
      ]
    },
    {
      title: "Communication & Storage",
      description: "Audio synthesis output and local persistent history management.",
      technologies: [
        {
          name: "Text-to-Speech",
          category: "Audio Output",
          description: "Used to convert recognized text into speech.",
          role: "Voice Synthesis Output",
          icon: Volume2
        },
        {
          name: "Room / SQLite",
          category: "Local Persistence",
          description: "Used for storing recognition history/data.",
          role: "Local Conversation Storage",
          icon: Database
        }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYSTEM ARCHITECTURE & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            What technologies were used to build GestureAI? The system combines native Android engineering, computer-vision landmark extraction, on-device machine learning, speech synthesis, and local database storage.
          </p>
        </motion.div>

        {/* Categorized Technologies Layout */}
        <div className="space-y-12 mb-14">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-900">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{category.title}</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {category.description}
                </span>
              </div>

              {/* Technology Cards Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${category.technologies.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-colors shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            {tech.category}
                          </span>
                        </div>

                        <h4 className="text-xl font-display font-bold text-white mb-2">
                          {tech.name}
                        </h4>

                        <p className="text-sm text-slate-300 leading-relaxed mb-5">
                          {tech.description}
                        </p>
                      </div>

                      <div className="pt-3.5 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 uppercase text-[10px]">
                          Role:
                        </span>
                        <span className="text-cyan-300 font-medium">
                          {tech.role}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

