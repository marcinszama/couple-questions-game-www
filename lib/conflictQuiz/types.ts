export interface ConflictQuizQuestion {
  id: string;
  section: "A" | "B" | "C";
  question: string;
  options: ConflictQuizOption[];
  maxSelections?: number;
}

export interface ConflictQuizOption {
  id: string;
  text: string;
  scores: Partial<ProfileScores>;
}

export interface ProfileScores {
  pursuer: number;
  withdrawer: number;
  analyzer: number;
  harmonizer: number;
  expresser: number;
  secure: number;
}

export interface QuizResponse {
  questionId: string;
  selectedOptions: string[];
}

export interface ProfileResult {
  profileName: keyof ProfileScores;
  score: number;
  percentage: number;
}

export interface QuizResult {
  primary: ProfileResult;
  secondary: ProfileResult | null;
  profileLabel: string;
  description: string;
  strengths: string[];
  challenges: string[];
  inConflict: string;
  workingOn: string;
  relationshipsWith: Record<string, string>;
  selectedGoals: string[];
  totalScores: ProfileScores;
}
