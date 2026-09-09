import type { LessonContent } from './types';
import { lesson001AlphabetIntro } from './lesson-001-alphabet-intro';
import { lesson002ConnectingLettersI } from './lesson-002-connecting-letters';
import { lesson003NonConnectingLetters } from './lesson-003-non-connecting-letters';
import { lesson004WhistlingSounds } from './lesson-004-whistling-sounds';
import { lesson005MixedReview } from './lesson-005-mixed-review';

export const lessons: LessonContent[] = [
  lesson001AlphabetIntro,
  lesson002ConnectingLettersI,
  lesson003NonConnectingLetters,
  lesson004WhistlingSounds,
  lesson005MixedReview,
];
