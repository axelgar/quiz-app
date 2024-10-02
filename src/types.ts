export type QuestionType = "boolean" | "multiple" | "text";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
};

export type QuestionWithAnswer = Question & { userAnswer?: string };

export type Game = {
  questionsPull: Question[];
  questions: QuestionWithAnswer[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionWithAnswer[]>>;
  currentQuestion: number;
  setCurrentQuestion: (number: number) => void;
  isEnd: boolean;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  isStart: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
};
