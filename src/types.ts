export interface Gesture {
  id: string;
  name: string;
  meaning: string;
  category: 'Greetings' | 'Daily' | 'Emergency';
  description: string;
  translations: Record<'en' | 'hi' | 'te', string>;
  landmarkOffsets?: { x: number; y: number; z: number }[];
}

export interface PipelineStep {
  step: number;
  title: string;
  tag: string;
  description: string;
  tech: string;
  latency: string;
  codeSnippet?: string;
  details: string[];
}

export interface TechItem {
  name: string;
  category: 'Mobile Engine' | 'Computer Vision' | 'Machine Learning' | 'Speech & Language' | 'Architecture';
  description: string;
  badge: string;
  role: string;
}

export interface EnhancementItem {
  phase: string;
  title: string;
  description: string;
  target: string;
  impact: string;
  iconName: string;
}

export interface BenchmarkResult {
  metric: string;
  value: string;
  baseline: string;
  description: string;
}
