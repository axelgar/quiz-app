import { QuestionWithAnswer } from "../../types";

export type GameStatus = "idle" | "start" | "end";

export type Game = {
  questions: QuestionWithAnswer[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionWithAnswer[]>>;
  questionsIndex: number;
  status: GameStatus;
  reset: () => void;
  idle: () => void;
  start: () => void;
  end: () => void;
  increaseQuestionsIndex: () => void;
  decreaseQuestionsIndex: () => void;
  setQuestionsIndex: React.Dispatch<React.SetStateAction<number>>;
};
