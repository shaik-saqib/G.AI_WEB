import { Gesture } from '../types';

/**
 * Verified Static Gesture Vocabulary for GestureAI.
 * The static model classifies 63 numerical landmark coordinates into supported gesture classes.
 */
export const PREDEFINED_GESTURES: Gesture[] = [
  {
    id: 'G1',
    name: 'Open Palm Posture',
    meaning: 'Greeting / Initiation',
    category: 'Greetings',
    description: 'Open hand held upright facing forward to initiate communication.',
    translations: {
      en: 'Greetings',
      hi: 'नमस्ते',
      te: 'నమస్కారం',
    },
  },
  {
    id: 'G2',
    name: 'Chin-to-Forward Extension',
    meaning: 'Appreciation / Gratitude',
    category: 'Daily',
    description: 'Flat hand moving from chin area forward toward the conversational partner.',
    translations: {
      en: 'Gratitude expressed',
      hi: 'धन्यवाद',
      te: 'ధన్యవాదాలు',
    },
  },
  {
    id: 'G3',
    name: 'Closed Fist Affirmation',
    meaning: 'Affirmation / Agreement',
    category: 'Daily',
    description: 'Closed fist gesturing affirmative agreement.',
    translations: {
      en: 'Affirmative',
      hi: 'हाँ',
      te: 'అవును',
    },
  },
  {
    id: 'G4',
    name: 'Extended Index and Middle',
    meaning: 'Negation / Decline',
    category: 'Daily',
    description: 'Index and middle fingers extended forward in a declining motion.',
    translations: {
      en: 'Declined',
      hi: 'नहीं',
      te: 'కాదు',
    },
  },
  {
    id: 'G5',
    name: 'Fist on Open Palm Support',
    meaning: 'Assistance / Support',
    category: 'Emergency',
    description: 'Closed hand resting atop an open palm, signifying assistance is needed.',
    translations: {
      en: 'Assistance requested',
      hi: 'मदद',
      te: 'సహాయం',
    },
  },
  {
    id: 'G6',
    name: 'Upright Palm Departure',
    meaning: 'Departure / Farewell',
    category: 'Greetings',
    description: 'Open hand held high facing conversational partner to conclude communication.',
    translations: {
      en: 'Farewell',
      hi: 'अलविदा',
      te: 'వీడ్కోలు',
    },
  },
];
