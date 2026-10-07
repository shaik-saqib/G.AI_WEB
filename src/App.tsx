/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommunicationProblem } from './components/CommunicationProblem';
import { GestureAISolution } from './components/GestureAISolution';
import { GestureRecognition } from './components/GestureRecognition';
import { AndroidApplication } from './components/AndroidApplication';
import { MultilingualCommunication } from './components/MultilingualCommunication';
import { TechnologyStack } from './components/TechnologyStack';
import { FutureEnhancements } from './components/FutureEnhancements';
import { DownloadApp } from './components/DownloadApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Refined Navigation */}
      <Navbar />

      {/* 1. Hero & Interactive Overview */}
      <Hero />

      {/* 2. Communication Problem */}
      <CommunicationProblem />

      {/* 3. GestureAI Solution & 7-Stage Pipeline */}
      <GestureAISolution />

      {/* 4. Static & Motion Gesture Recognition */}
      <GestureRecognition />

      {/* 5. Android Application Showcase */}
      <AndroidApplication />

      {/* 6. Multilingual Communication Matrix */}
      <MultilingualCommunication />

      {/* 7. Technology Stack */}
      <TechnologyStack />

      {/* 8. Future Enhancements Roadmap */}
      <FutureEnhancements />

      {/* 9. Download Android App */}
      <DownloadApp />
    </div>
  );
}
