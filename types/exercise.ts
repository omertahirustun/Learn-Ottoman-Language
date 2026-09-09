export type ExerciseType = 'multiple_choice' | 'matching' | 'letter_write' | 'audio_match';

export interface MultipleChoiceContent {
  type: 'multiple_choice';
  promptOttoman: string;
  promptTr: string;
  promptEn: string;
  options: string[];
  correctIndex: number;
}

export interface MatchingPair {
  ottoman: string;
  meaningTr: string;
}

export interface MatchingContent {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface LetterWriteContent {
  type: 'letter_write';
  letterId: string;
  targetForm: 'isolated' | 'initial' | 'medial' | 'final';
}

export interface AudioMatchContent {
  type: 'audio_match';
  audioUrl: string;
  options: string[];
  correctIndex: number;
}

/** Discriminated union — `type` alanı hangi varyant olduğunu belirler. */
export type ExerciseContent =
  | MultipleChoiceContent
  | MatchingContent
  | LetterWriteContent
  | AudioMatchContent;
