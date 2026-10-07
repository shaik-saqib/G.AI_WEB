import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  Info, 
  Sparkles 
} from 'lucide-react';

/**
 * Android APK Configuration:
 * 
 * 1. LOCAL PROJECT FILE (Recommended for direct hosting):
 *    Place your compiled .apk file inside the `/public` directory (e.g. `/public/GestureAI.apk`).
 *    Vite serves files in `/public` from the web root, so `/GestureAI.apk` is directly downloadable.
 * 
 * 2. EXTERNAL HOSTING:
 *    If your APK is on GitHub Releases, Google Drive, or cloud storage, paste the full URL:
 *    e.g. "https://github.com/your-username/repo/releases/download/v1.0/GestureAI.apk"
 */
export const APK_DOWNLOAD_URL = "/GestureAI.apk";

export const DownloadApp: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const isExternal = APK_DOWNLOAD_URL.startsWith('http');

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => setDownloadStarted(false), 6000);
  };

  return (
    <section id="download" className="relative py-24 sm:py-32 bg-[#030712] border-t border-slate-900 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/[0.04] via-blue-600/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Central Closing Statement Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROJECT CONCLUSION & ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
            “Communication should have no barriers.”
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            GestureAI combines hand landmark detection, machine-learning recognition, multilingual communication and speech output in an Android application designed to support more accessible communication.
          </p>
        </motion.div>

        {/* Action CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl text-center"
        >
          {/* Action Download Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={APK_DOWNLOAD_URL}
              download={isExternal ? undefined : "GestureAI.apk"}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={handleDownload}
              aria-label="Download GestureAI Android Application APK"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download GestureAI (.APK)</span>
            </a>
          </div>
          {/* Feedback message on download trigger */}
          {downloadStarted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Download initiated! If your browser asks, tap "Keep" or "Download anyway" to save the APK.</span>
            </motion.div>
          )}
        </motion.div>

        {/* Professional Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-900 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-center text-center">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-display font-bold text-white tracking-wider">GESTURE<span className="text-cyan-400">AI</span></span>
            <span>—</span>
            <span className="italic">“Communication should have no barriers.”</span>
          </div>
        </footer>
      </div>
    </section>
  );
};


