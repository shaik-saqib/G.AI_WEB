import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Cpu, 
  Languages, 
  Volume2, 
  Image as ImageIcon,
  CheckCircle2,
  Info
} from 'lucide-react';

export interface AppScreenshot {
  id: string;
  title: string;
  category: string;
  image: string | null;
  isPrimary?: boolean;
}

/**
 * Centralized screenshot registry for GestureAI Android application.
 * Replace `image: null` with the path to the real screenshot (e.g. `/screenshots/screen-01.png`)
 * when assets become available. The component handles real vs. placeholder state automatically.
 */
const appScreenshots: AppScreenshot[] = [
  {
    id: "screen-01",
    title: "Android Screenshot 01",
    category: "Splash Screen",
    image: "/screenshots/screen-01.png",
    isPrimary: true
  },
  {
    id: "screen-02",
    title: "Android Screenshot 02",
    category: "Terms & Conditions",
    image: "/screenshots/screen-02.png",
  },
  {
    id: "screen-03",
    title: "Android Screenshot 03",
    category: "How It Works",
    image: "/screenshots/screen-03.png",
  },
  {
    id: "screen-04",
    title: "Android Screenshot 04",
    category: "Camera permission",
    image: "/screenshots/screen-04.png",
  },
  {
    id: "screen-05",
    title: "Android Screenshot 05",
    category: "Gesture Recognization & Translation Result",
    image: "/screenshots/screen-05.png",
  },
  {
    id: "screen-06",
    title: "Android Screenshot 06",
    category: "History",
    image: "/screenshots/screen-06.png",
  },
  {
    id: "screen-07",
    title: "Android Screenshot 07",
    category: "Settings",
    image: "/screenshots/screen-07.png",
  }
];

export const AndroidApplication: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedSequence = useRef<boolean>(false);

  // Preload all screenshot images into browser memory for zero-lag cycling
  useEffect(() => {
    appScreenshots.forEach((item) => {
      if (item.image) {
        const img = new Image();
        img.src = item.image;
      }
    });
  }, []);

  // Detect when user comes to the Android application section
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          // When first arriving at this section, restart sequence from Screen 1
          if (!hasStartedSequence.current) {
            hasStartedSequence.current = true;
            setSelectedIndex(0);
          }
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through screens 1 to 7 every 3 seconds when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % appScreenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const currentScreenshot = appScreenshots[selectedIndex];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : appScreenshots.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < appScreenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="android-app" 
      ref={sectionRef} 
      className="relative py-24 sm:py-28 bg-[#030712] border-t border-slate-900 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Grid: Device Frame on Left, Text & Features on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Device Frame Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Phone Chassis Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              {/* Minimal device frame styling */}
              <div className="relative rounded-[38px] sm:rounded-[44px] bg-slate-950 border-2 border-slate-800 p-2.5 sm:p-3 shadow-2xl">
                {/* Top Camera Pinhole / Notch Accent (Visual Anchor only, no telemetry) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-900 rounded-full flex items-center justify-center z-30">
                  <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-800" />
                </div>

                {/* Inner Screen Display Area (Aspect Ratio 9:19.5 standard mobile) */}
                <div className="relative rounded-[30px] sm:rounded-[36px] bg-slate-950 overflow-hidden aspect-[9/19] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {currentScreenshot.image ? (
                      /* Real Screenshot View */
                      <motion.img
                        key={`image-${currentScreenshot.id}`}
                        src={currentScreenshot.image}
                        alt={currentScreenshot.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="w-full h-full object-contain bg-slate-950"
                      />
                    ) : (
                      /* Placeholder Card State */
                      <motion.div
                        key={`placeholder-${currentScreenshot.id}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full p-6 flex flex-col items-center justify-between text-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-400"
                      >
                        {/* Top Indicator */}
                        <div className="pt-8">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">
                            <span>SLOT: {currentScreenshot.id.toUpperCase()}</span>
                          </div>
                        </div>

                        {/* Central Placeholder Notice */}
                        <div className="space-y-3 px-2">
                          <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400">
                            <ImageIcon className="w-6 h-6 text-slate-400" />
                          </div>
                          
                          <div>
                            <div className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                              REAL ANDROID SCREENSHOT
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono mt-1">
                              Placeholder — screenshot will be added
                            </div>
                          </div>

                          {currentScreenshot.isPrimary && (
                            <div className="px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                              Gesture Recognition — Real Screenshot Pending
                            </div>
                          )}

                          <div className="text-[11px] text-slate-400 font-medium">
                            Category: <span className="text-slate-200">{currentScreenshot.category}</span>
                          </div>
                        </div>

                        {/* Bottom Metadata Anchor */}
                        <div className="pb-4 text-[10px] font-mono text-slate-500">
                          GestureAI Mobile Interface
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Home Indicator Line */}
                <div className="pt-2 pb-0.5 flex justify-center">
                  <div className="w-20 h-1 bg-slate-800 rounded-full" />
                </div>
              </div>
            </div>

            {/* Quick Prev / Next Bar underneath Frame */}
            <div className="mt-4 flex flex-col items-center gap-2.5">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handlePrevious}
                  aria-label="Previous screenshot"
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="px-3.5 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <span className="text-cyan-400 font-bold">0{selectedIndex + 1}</span>
                  <span className="text-slate-600 mx-1.5">/</span>
                  <span className="text-slate-400">0{appScreenshots.length}</span>
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Minimal Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {appScreenshots.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(index)}
                    aria-label={`Show ${item.title}: ${item.category}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      index === selectedIndex
                        ? 'w-5 bg-cyan-400'
                        : 'w-1.5 bg-slate-800 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Section Heading, Explanation, Selected Screen Info, Feature Highlights */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-4">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span>NATIVE ANDROID APPLICATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                The GestureAI Android Application
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Experience the GestureAI mobile application, where real-time hand gesture recognition converts signs into meaningful communication.
              </p>
            </div>

            {/* Selected Screenshot Status Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <div className="text-cyan-400 font-bold uppercase tracking-wider">
                {currentScreenshot.title} • {currentScreenshot.category}
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                Screen {selectedIndex + 1} of {appScreenshots.length}
              </div>
            </div>

            {/* Verified Feature Highlights */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Key Application Capabilities:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Feature 1: Real-Time Recognition */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm mb-1.5">
                    <Camera className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Real-Time Recognition</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hand gestures are captured through the device camera and analyzed using MediaPipe hand landmarks.
                  </p>
                </div>

                {/* Feature 2: AI Classification */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm mb-1.5">
                    <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>AI Classification</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    TensorFlow Lite processes the extracted landmark features to classify supported gestures.
                  </p>
                </div>

                {/* Feature 3: Multilingual Output */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm mb-1.5">
                    <Languages className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Multilingual Output</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The application supports English, Hindi and Telugu.
                  </p>
                </div>

                {/* Feature 4: Speech Output */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm mb-1.5">
                    <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Speech Output</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recognized text can be converted into speech using Android text-to-speech functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Note */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Built with Kotlin and Jetpack Compose on Android, featuring on-device inference without mandatory internet connectivity.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

