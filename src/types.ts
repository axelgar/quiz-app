export type QuestionType = "boolean" | "multiple" | "text";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
};

export type QuestionMultiple = Omit<Question, "incorrect_answers"> & { incorrect_answers: string[] };

export type QuestionWithAnswer = Question & { userAnswer?: string };

export type GameStatus = "idle" | "start" | "end";

export type Game = {
  questions: QuestionWithAnswer[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionWithAnswer[]>>;
  currentIndex: number;
  setCurrentIndex: (number: number) => void;
  status: GameStatus;
  setStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  resetGame: () => void;
};
