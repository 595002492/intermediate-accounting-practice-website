export type QuestionType = "single" | "multiple" | "judge";

export type Option = {
  key: string;
  text: string;
};

export type Question = {
  id: string;
  subject: string;
  type: QuestionType;
  chapter: string | null;
  year: number;
  stem: string;
  options: Option[];
  answer: string[];
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
};

export type PracticeRecord = {
  id: string;
  questionId: string;
  userAnswer: string[];
  isCorrect: boolean;
  answeredAt: string;
};

export type WrongBookItem = {
  id: string;
  questionId: string;
  wrongCount: number;
  lastWrongAt: string;
};

export type StatsSummary = {
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};
